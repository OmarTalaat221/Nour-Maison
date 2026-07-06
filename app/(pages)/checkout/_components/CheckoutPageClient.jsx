"use client";

import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { BsShieldCheck } from "react-icons/bs";
import { FaCreditCard, FaLock, FaShieldAlt } from "react-icons/fa";
import { useHeader } from "../../../context/HeaderContext";

const CheckoutPageClient = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [loading, setLoading] = useState(false);
  const [orderDetails, setOrderDetails] = useState(null);

  const { setHeaderWithBg } = useHeader();

  useEffect(() => {
    setHeaderWithBg(true);
    return () => setHeaderWithBg(false);
  }, [setHeaderWithBg]);

  useEffect(() => {
    const amount = searchParams.get("amount");
    const unitAmount = searchParams.get("unitAmount");
    const quantity = searchParams.get("quantity");
    const totalAmount = searchParams.get("totalAmount");

    const senderName = searchParams.get("senderName");
    const senderEmail = searchParams.get("senderEmail");
    const senderWhats = searchParams.get("senderWhats") || "";
    const cardType = searchParams.get("cardType") || "Gift Card";
    const cardId = searchParams.get("cardId") || "";
    const hideName = searchParams.get("hideName") === "true";
    const type = searchParams.get("type") || "gift-card";

    const resolvedTotal = parseFloat(totalAmount || amount || 0);
    const resolvedUnit = parseFloat(unitAmount || amount || 0);
    const resolvedQty = parseInt(quantity || 1, 10);

    if (resolvedTotal > 0) {
      setOrderDetails({
        unitAmount: resolvedUnit,
        quantity: resolvedQty,
        totalAmount: resolvedTotal,
        senderName,
        senderEmail,
        senderWhats,
        cardType,
        cardId,
        hideName,
        type,
      });
    }
  }, [searchParams]);

  const handlePayment = async () => {
    if (!orderDetails?.totalAmount || orderDetails.totalAmount <= 0) {
      toast.error("Invalid payment amount");
      return;
    }

    setLoading(true);

    try {
      const reference = `NM-${Date.now()}`;

      const response = await fetch("/api/dojo/create-payment-intent", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          amount: orderDetails.totalAmount,
          reference,
          description: `${orderDetails.cardType || "Nour Maison"} payment`,
          type: orderDetails.type,
          cardType: orderDetails.cardType,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        console.error("Dojo create payment error:", data);
        throw new Error(data.message || "Payment could not be started");
      }

      sessionStorage.setItem(
        "dojoCheckoutSession",
        JSON.stringify({
          paymentIntentId: data.paymentIntentId,
          reference: data.reference || reference,
          amount: orderDetails.totalAmount,
          cardType: orderDetails.cardType,
          quantity: orderDetails.quantity,
          type: orderDetails.type,
        }),
      );

      window.location.href = data.paymentLink;
    } catch (error) {
      toast.error(error.message || "Payment failed. Please try again.");
      setLoading(false);
    }
  };

  if (!orderDetails) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin w-10 h-10 border-4 border-softMintGreen border-t-transparent rounded-full mx-auto mb-4" />
          <p className="text-softMintGreen font-oswald text-lg">Loading...</p>
        </div>
      </div>
    );
  }

  const showQuantity = orderDetails.quantity > 1;

  return (
    <>
      <noscript>
        <meta
          name="description"
          content="Secure checkout for NOUR MAISON gift cards and products."
        />
      </noscript>

      <div className="min-h-screen">
        <Toaster position="top-center" />

        <div className="mx-auto px-4 sm:px-6 py-6 sm:py-10">
          <div className="grid lg:grid-cols-5 gap-6 lg:gap-8">
            <div className="lg:col-span-2 space-y-5">
              <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
                <div className="bg-softMintGreen px-5 py-3">
                  <h2 className="text-lg sm:text-xl font-seasons text-white">
                    Order Summary
                  </h2>
                </div>

                <div className="p-5 space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 bg-pestachio rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-xl text-softMintGreen font-seasons">
                        {orderDetails.type === "gift-card" ? "GC" : "NM"}
                      </span>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-base text-gray-800 font-oswald">
                        {orderDetails.cardType || "Nour Maison Gift Card"}
                      </h3>
                      <p className="text-whiteGray text-sm font-oswald">
                        Digital Delivery
                      </p>
                    </div>
                  </div>

                  <div className="border-t border-gray-100 pt-4 space-y-2">
                    <div className="flex justify-between text-gray-600 font-oswald text-sm">
                      <span>Unit Price</span>
                      <span>£{orderDetails.unitAmount.toFixed(2)}</span>
                    </div>

                    {showQuantity && (
                      <div className="flex justify-between text-gray-600 font-oswald text-sm">
                        <span>Quantity</span>
                        <span>× {orderDetails.quantity}</span>
                      </div>
                    )}

                    <div className="flex justify-between text-gray-600 font-oswald text-sm">
                      <span>Processing Fee</span>
                      <span>£0.00</span>
                    </div>

                    <div className="border-t border-gray-100 pt-3">
                      <div className="flex justify-between items-center">
                        <span className="font-seasons text-gray-800 text-base">
                          Total
                        </span>
                        <span className="text-xl font-bold text-logoGold font-oswald">
                          £{orderDetails.totalAmount.toFixed(2)}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {(orderDetails.senderName || orderDetails.senderEmail) && (
                <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-5">
                  <h3 className="text-base sm:text-lg font-seasons text-softMintGreen mb-3">
                    Customer Details
                  </h3>
                  <ul className="space-y-2 font-oswald text-sm text-gray-600">
                    {orderDetails.senderName && (
                      <li className="flex items-center gap-2">
                        <span className="text-logoGold font-semibold min-w-[70px]">
                          Name:
                        </span>
                        <span>{orderDetails.senderName}</span>
                      </li>
                    )}
                    {orderDetails.senderEmail && (
                      <li className="flex items-center gap-2">
                        <span className="text-logoGold font-semibold min-w-[70px]">
                          Email:
                        </span>
                        <span>{orderDetails.senderEmail}</span>
                      </li>
                    )}
                    {orderDetails.senderWhats && (
                      <li className="flex items-center gap-2">
                        <span className="text-logoGold font-semibold min-w-[70px]">
                          WhatsApp:
                        </span>
                        <span>{orderDetails.senderWhats}</span>
                      </li>
                    )}
                  </ul>
                </div>
              )}

              <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-5">
                <h3 className="text-base sm:text-lg font-seasons text-softMintGreen mb-4">
                  What You Will Receive
                </h3>
                <ul className="space-y-2">
                  {[
                    "Digital gift card sent via email instantly",
                    "Personalized message included",
                    "Valid for 12 months from purchase date",
                    "Redeemable at Nour Maison Café & Brasserie",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <div className="w-4 h-4 rounded-full bg-pestachio flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg
                          className="w-2.5 h-2.5 text-softMintGreen"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <span className="text-gray-600 font-oswald text-sm">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="hidden lg:block text-center">
                <button
                  onClick={() => router.back()}
                  className="text-softMintGreen hover:text-logoGold transition-colors font-oswald text-sm inline-flex items-center gap-1"
                >
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                  Back to previous page
                </button>
              </div>
            </div>

            <div className="lg:col-span-3">
              <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden sticky top-24">
                <div className="bg-logoGold px-5 py-3">
                  <div className="flex items-center gap-2">
                    <FaLock className="text-white" />
                    <h3 className="text-lg font-seasons text-white">
                      Payment Details
                    </h3>
                  </div>
                </div>

                <div className="p-5 space-y-5">
                  <div className="bg-pestachio/30 rounded-lg p-5 border border-gray-100">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center flex-shrink-0">
                        <FaCreditCard className="text-softMintGreen text-xl" />
                      </div>
                      <div>
                        <h4 className="font-seasons text-xl text-softMintGreen mb-2">
                          Secure Hosted Payment
                        </h4>
                        <p className="font-oswald text-sm text-gray-600 leading-6">
                          You will be redirected to Dojo secure checkout to
                          complete your payment. Your card details are entered
                          only on Dojo and are not stored by Nour Maison.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="rounded-lg border border-gray-100 p-4 bg-white">
                      <div className="flex items-center gap-2 mb-2">
                        <FaShieldAlt className="text-softMintGreen" />
                        <span className="font-semibold text-gray-800 font-oswald text-sm">
                          Encrypted Checkout
                        </span>
                      </div>
                      <p className="text-xs text-whiteGray">
                        Payment is processed securely through Dojo hosted
                        checkout.
                      </p>
                    </div>

                    <div className="rounded-lg border border-gray-100 p-4 bg-white">
                      <div className="flex items-center gap-2 mb-2">
                        <BsShieldCheck className="text-softMintGreen" />
                        <span className="font-semibold text-gray-800 font-oswald text-sm">
                          No Card Storage
                        </span>
                      </div>
                      <p className="text-xs text-whiteGray">
                        We do not collect or save your card number, expiry date,
                        or CVV.
                      </p>
                    </div>
                  </div>

                  <div className="border-t border-gray-100" />

                  <div className="space-y-2">
                    <div className="flex justify-between text-gray-600 font-oswald text-sm">
                      <span>Subtotal</span>
                      <span>
                        {showQuantity
                          ? `£${orderDetails.unitAmount.toFixed(2)} × ${orderDetails.quantity}`
                          : `£${orderDetails.unitAmount.toFixed(2)}`}
                      </span>
                    </div>
                    <div className="flex justify-between text-gray-600 font-oswald text-sm">
                      <span>Processing Fee</span>
                      <span>£0.00</span>
                    </div>
                    <div className="border-t border-gray-100 pt-3 mt-2">
                      <div className="flex justify-between items-center">
                        <span className="text-lg font-seasons text-gray-800">
                          Total
                        </span>
                        <span className="text-2xl font-bold text-logoGold font-oswald">
                          £{orderDetails.totalAmount.toFixed(2)}
                        </span>
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={handlePayment}
                    disabled={loading}
                    className="w-full bg-softMintGreen text-white py-4 rounded-lg font-seasons text-lg hover:bg-sageGreen transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {loading ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        <span>Redirecting to Dojo...</span>
                      </>
                    ) : (
                      <>
                        <FaLock className="text-sm" />
                        <span>Pay £{orderDetails.totalAmount.toFixed(2)}</span>
                      </>
                    )}
                  </button>

                  <div className="flex items-center gap-2 text-sm text-gray-500 bg-pestachio/30 p-3 rounded-lg">
                    <FaLock className="text-softMintGreen flex-shrink-0" />
                    <span className="font-oswald">
                      You will complete your payment on Dojo secure checkout
                    </span>
                  </div>

                  <div className="bg-offWhite rounded-lg p-4">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-2">
                        <BsShieldCheck className="text-lg text-softMintGreen" />
                        <span className="font-semibold text-gray-800 font-oswald text-sm">
                          Secure Payment via Dojo
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <img
                          src="https://res.cloudinary.com/dhebgz7qh/image/upload/v1772101653/Visa_Brandmark_Blue_RGB_2021_jsipcx_pklgmh.png"
                          alt="Visa"
                          className="h-6 object-contain"
                        />
                        <img
                          src="https://res.cloudinary.com/dhebgz7qh/image/upload/v1772101682/ma_symbol_opt_73_2x_xadjas_zexy1k.png"
                          alt="Mastercard"
                          className="h-6 object-contain"
                        />
                        <img
                          src="https://res.cloudinary.com/dhebgz7qh/image/upload/v1772101644/AXP_BlueBoxLogo_Alternate_SMALLscale_RGB_DIGITAL_80x80_rrtz7i_lvizo3.png"
                          alt="American Express"
                          className="h-6 object-contain"
                        />
                      </div>
                    </div>
                    <p className="text-xs text-whiteGray">
                      Your payment is encrypted and processed securely. We do
                      not store your card details.
                    </p>
                  </div>

                  <p className="text-xs text-center text-whiteGray">
                    By proceeding, you agree to our{" "}
                    <Link
                      href="/terms-and-conditions"
                      className="text-softMintGreen hover:text-logoGold"
                    >
                      Terms & Conditions
                    </Link>{" "}
                    and{" "}
                    <Link
                      href="/terms-and-conditions#refund-policy"
                      className="text-softMintGreen hover:text-logoGold"
                    >
                      Refund Policy
                    </Link>
                  </p>
                </div>

                <div className="bg-offWhite px-5 py-2 text-center border-t border-gray-100">
                  <p className="text-xs text-whiteGray">
                    Operated by{" "}
                    <strong className="text-logoGold">NOUR MAISON LTD</strong>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:hidden mt-6 text-center">
            <button
              onClick={() => router.back()}
              className="text-softMintGreen hover:text-logoGold transition-colors font-oswald text-sm inline-flex items-center gap-1"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              Back to previous page
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CheckoutPageClient;
