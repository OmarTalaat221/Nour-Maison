import { NextResponse } from "next/server";

export const runtime = "nodejs";

function tryParseJson(text) {
  try {
    return JSON.parse(text);
  } catch {
    return null;
  }
}

export async function POST(request) {
  try {
    const body = await request.json();

    const apiKey = process.env.DOJO_API_KEY;
    const apiVersion = process.env.DOJO_API_VERSION || "2026-02-27";
    const currencyCode = process.env.DOJO_CURRENCY || "GBP";
    const origin = request.headers.get("origin");
    const siteUrl =
      process.env.NEXT_PUBLIC_SITE_URL || origin || "http://localhost:3000";

    if (!apiKey) {
      return NextResponse.json(
        {
          message:
            "DOJO_API_KEY is missing. Check .env.local and restart npm run dev.",
        },
        { status: 500 },
      );
    }

    const amount = Number(body.amount);

    if (!Number.isFinite(amount) || amount <= 0) {
      return NextResponse.json(
        {
          message: "Invalid payment amount",
          receivedAmount: body.amount,
        },
        { status: 400 },
      );
    }

    const amountInMinorUnits = Math.round(amount * 100);
    const reference = String(body.reference || `NM-${Date.now()}`).slice(0, 60);
    const redirectUrl = new URL("/payment", siteUrl).toString();

    const payload = {
      amount: {
        value: amountInMinorUnits,
        currencyCode,
      },
      reference,
      captureMode: "Auto",
      config: {
        redirectUrl,
      },
    };

    const dojoResponse = await fetch("https://api.dojo.tech/payment-intents", {
      method: "POST",
      cache: "no-store",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Basic ${apiKey}`,
        version: apiVersion,
      },
      body: JSON.stringify(payload),
    });

    const responseText = await dojoResponse.text();
    const data = tryParseJson(responseText);

    if (!dojoResponse.ok) {
      return NextResponse.json(
        {
          message: "Dojo rejected the payment intent request",
          dojoStatus: dojoResponse.status,
          dojoBody: data || responseText,
          sentPayload: payload,
        },
        { status: dojoResponse.status },
      );
    }

    if (!data?.id) {
      return NextResponse.json(
        {
          message: "Dojo response did not include payment intent id",
          dojoBody: data || responseText,
        },
        { status: 502 },
      );
    }

    const paymentLink =
      data.paymentLink || `https://pay.dojo.tech/checkout/${data.id}`;

    const response = NextResponse.json({
      paymentIntentId: data.id,
      paymentLink,
      reference,
      status: data.status || null,
    });

    response.cookies.set("dojo_payment_intent_id", data.id, {
      httpOnly: true,
      sameSite: "lax",
      secure: process.env.NODE_ENV === "production",
      path: "/",
      maxAge: 60 * 60,
    });

    return response;
  } catch (error) {
    return NextResponse.json(
      {
        message: "Unexpected server error inside create-payment-intent route",
        error: error.message,
      },
      { status: 500 },
    );
  }
}
