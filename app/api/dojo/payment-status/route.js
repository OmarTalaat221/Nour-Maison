import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export const runtime = "nodejs";

export async function GET(request) {
  try {
    const apiKey = process.env.DOJO_API_KEY;
    const apiVersion = process.env.DOJO_API_VERSION || "2026-02-27";
    const cookieStore = await cookies();

    const paymentIntentId =
      request.nextUrl.searchParams.get("paymentIntentId") ||
      cookieStore.get("dojo_payment_intent_id")?.value;

    if (!apiKey) {
      return NextResponse.json(
        { message: "DOJO_API_KEY is missing" },
        { status: 500 },
      );
    }

    if (!paymentIntentId) {
      return NextResponse.json(
        { message: "Payment intent id not found" },
        { status: 400 },
      );
    }

    const dojoResponse = await fetch(
      `https://api.dojo.tech/payment-intents/${encodeURIComponent(paymentIntentId)}?returnCanceled=true`,
      {
        method: "GET",
        cache: "no-store",
        headers: {
          Authorization: `Basic ${apiKey}`,
          version: apiVersion,
        },
      },
    );

    const data = await dojoResponse.json();

    if (!dojoResponse.ok) {
      return NextResponse.json(
        {
          message: "Failed to retrieve payment status",
          error: data,
        },
        { status: dojoResponse.status },
      );
    }

    return NextResponse.json({
      id: data.id,
      status: data.status,
      reference: data.reference,
      description: data.description,
      amount: data.amount || null,
      totalAmount: data.totalAmount || null,
      paymentDetails: data.paymentDetails || null,
    });
  } catch (error) {
    return NextResponse.json(
      {
        message: "Unexpected server error",
        error: error.message,
      },
      { status: 500 },
    );
  }
}
