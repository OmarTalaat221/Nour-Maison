"use client";

import React, { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import {
  FaLock,
  FaCreditCard,
  FaCalendarAlt,
  FaShieldAlt,
} from "react-icons/fa";
import { BsShieldCheck } from "react-icons/bs";
import toast, { Toaster } from "react-hot-toast";
import Link from "next/link";
import { useHeader } from "../../context/HeaderContext";

const CheckoutPage = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [loading, setLoading] = useState(false);
  const [orderDetails, setOrderDetails] = useState(null);

  const [cardDetails, setCardDetails] = useState({
    cardNumber: "",
    expiryDate: "",
    cvv: "",
    cardholderName: "",
  });

  const { setHeaderWithBg } = useHeader();

  useEffect(() => {
    setHeaderWithBg(true);
    return () => setHeaderWithBg(false);
  }, [setHeaderWithBg]);

  useEffect(() => {
    const amount = searchParams.get("amount");
    const toName = searchParams.get("toName");
    const toEmail = searchParams.get("toEmail");
    const senderName = searchParams.get("senderName");
    const senderEmail = searchParams.get("senderEmail");
    const type = searchParams.get("type") || "gift-card";

    if (amount) {
      setOrderDetails({
        amount: parseFloat(amount),
        toName,
        toEmail,
        senderName,
        senderEmail,
        type,
      });
    }
  }, [searchParams]);

  const formatCardNumber = (value) => {
    const v = value.replace(/\s+/g, "").replace(/[^0-9]/gi, "");
    const matches = v.match(/\d{4,16}/g);
    const match = (matches && matches[0]) || "";
    const parts = [];
    for (let i = 0, len = match.length; i < len; i += 4) {
      parts.push(match.substring(i, i + 4));
    }
    return parts.length ? parts.join(" ") : value;
  };

  const formatExpiryDate = (value, prevValue = "") => {
    if (value.length < prevValue.length) {
      if (prevValue.length === 3 && prevValue.endsWith("/")) {
        return value.slice(0, 1);
      }
      return value;
    }

    let v = value.replace(/[^0-9]/gi, "");

    if (v.length === 1 && parseInt(v) > 1) {
      return "0" + v + "/";
    }

    if (v.length === 2) {
      return v + "/";
    }

    if (v.length > 2) {
      return v.substring(0, 2) + "/" + v.substring(2, 4);
    }

    return v;
  };

  const handleCardChange = (e) => {
    const { name, value } = e.target;

    if (name === "cardNumber") {
      setCardDetails((prev) => ({
        ...prev,
        cardNumber: formatCardNumber(value),
      }));
    } else if (name === "expiryDate") {
      setCardDetails((prev) => ({
        ...prev,
        expiryDate: formatExpiryDate(value, prev.expiryDate),
      }));
    } else if (name === "cvv") {
      const cvv = value.replace(/[^0-9]/gi, "").substring(0, 4);
      setCardDetails((prev) => ({ ...prev, cvv }));
    } else {
      setCardDetails((prev) => ({ ...prev, [name]: value }));
    }
  };

  const validateCard = () => {
    if (!cardDetails.cardholderName.trim()) {
      toast.error("Please enter cardholder name");
      return false;
    }
    if (cardDetails.cardNumber.replace(/\s/g, "").length < 16) {
      toast.error("Please enter a valid card number");
      return false;
    }
    if (cardDetails.expiryDate.length < 5) {
      toast.error("Please enter a valid expiry date");
      return false;
    }
    if (cardDetails.cvv.length < 3) {
      toast.error("Please enter a valid CVV");
      return false;
    }
    return true;
  };

  const handlePayment = async () => {
    if (!validateCard()) return;

    setLoading(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      toast.success("Payment successful!");
      router.push("/checkout/success");
    } catch (error) {
      toast.error("Payment failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  if (!orderDetails) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin w-10 h-10 border-4 border-softMintGreen border-t-transparent rounded-full mx-auto mb-4"></div>
          <p className="text-softMintGreen font-oswald text-lg">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Toaster position="top-center" />

      <div className=" mx-auto px-4 sm:px-6 py-6 sm:py-10">
        <div className="grid lg:grid-cols-5 gap-6 lg:gap-8">
          {/* Left - Order Summary & What You Get */}
          <div className="lg:col-span-2 space-y-5">
            {/* Order Summary Card */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
              <div className="bg-softMintGreen px-5 py-3">
                <h2 className="text-lg sm:text-xl font-seasons text-white">
                  Order Summary
                </h2>
              </div>

              <div className="p-5">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-pestachio rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-xl text-softMintGreen font-seasons">
                      {orderDetails.type === "gift-card" ? "GC" : "NM"}
                    </span>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-base text-gray-800 font-oswald">
                      {orderDetails.type === "gift-card"
                        ? "Nour Maison Gift Card"
                        : "Store Item"}
                    </h3>
                    <p className="text-whiteGray text-sm">Digital Delivery</p>
                  </div>
                </div>

                <div className="mt-4 pt-4 border-t border-gray-100">
                  <div className="flex justify-between items-center">
                    <span className="font-seasons text-gray-800">Amount</span>
                    <span className="text-xl font-bold text-logoGold font-oswald">
                      £{orderDetails.amount?.toFixed(2)}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* What You Get */}
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

            {/* Back Link - Desktop */}
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

          {/* Right - Card Details & Payment */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden sticky top-24">
              {/* Header */}
              <div className="bg-logoGold px-5 py-3">
                <div className="flex items-center gap-2">
                  <FaLock className="text-white" />
                  <h3 className="text-lg font-seasons text-white">
                    Payment Details
                  </h3>
                </div>
              </div>

              <div className="p-5 space-y-5">
                {/* Card Details Form */}
                <div className="space-y-4">
                  {/* Cardholder Name */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2 font-oswald">
                      Cardholder Name
                    </label>
                    <input
                      type="text"
                      name="cardholderName"
                      value={cardDetails.cardholderName}
                      onChange={handleCardChange}
                      placeholder="Name on card"
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-softMintGreen transition-all font-oswald"
                    />
                  </div>

                  {/* Card Number */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2 font-oswald">
                      Card Number
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        name="cardNumber"
                        value={cardDetails.cardNumber}
                        onChange={handleCardChange}
                        placeholder="1234 5678 9012 3456"
                        maxLength="19"
                        className="w-full px-4 py-3 pl-12 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-softMintGreen transition-all font-oswald"
                      />
                      <FaCreditCard className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                    </div>
                  </div>

                  {/* Expiry & CVV */}
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2 font-oswald">
                        Expiry Date
                      </label>
                      <div className="relative">
                        <input
                          type="text"
                          name="expiryDate"
                          value={cardDetails.expiryDate}
                          onChange={handleCardChange}
                          placeholder="MM/YY"
                          maxLength="5"
                          className="w-full px-4 py-3 pl-12 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-softMintGreen transition-all font-oswald"
                        />
                        <FaCalendarAlt className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2 font-oswald">
                        CVV
                      </label>
                      <div className="relative">
                        <input
                          type="text"
                          name="cvv"
                          value={cardDetails.cvv}
                          onChange={handleCardChange}
                          placeholder="123"
                          maxLength="4"
                          className="w-full px-4 py-3 pl-12 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-softMintGreen transition-all font-oswald"
                        />
                        <FaShieldAlt className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Divider */}
                <div className="border-t border-gray-100"></div>

                {/* Price Summary */}
                <div className="space-y-2">
                  <div className="flex justify-between text-gray-600 font-oswald text-sm">
                    <span>Subtotal</span>
                    <span>£{orderDetails.amount?.toFixed(2)}</span>
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
                        £{orderDetails.amount?.toFixed(2)}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Pay Button */}
                <button
                  onClick={handlePayment}
                  disabled={loading}
                  className="w-full bg-softMintGreen text-white py-4 rounded-lg font-seasons text-lg hover:bg-sageGreen transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {loading ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>Processing...</span>
                    </>
                  ) : (
                    <>
                      <FaLock className="text-sm" />
                      <span>Pay £{orderDetails.amount?.toFixed(2)}</span>
                    </>
                  )}
                </button>

                {/* Security Note */}
                <div className="flex items-center gap-2 text-sm text-gray-500 bg-pestachio/30 p-3 rounded-lg">
                  <FaLock className="text-softMintGreen flex-shrink-0" />
                  <span className="font-oswald">
                    Your card details are encrypted and secure
                  </span>
                </div>

                {/* Security Badge & Cards */}
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
                        src="https://res.cloudinary.com/dkc5klynm/image/upload/v1771669946/Visa_Brandmark_Blue_RGB_2021_jsipcx.png"
                        alt="Visa"
                        className="h-6 object-contain"
                      />
                      <img
                        src="https://res.cloudinary.com/dkc5klynm/image/upload/v1771669935/ma_symbol_opt_73_2x_xadjas.png"
                        alt="Mastercard"
                        className="h-6 object-contain"
                      />
                      <img
                        src="https://res.cloudinary.com/dkc5klynm/image/upload/v1771670021/AXP_BlueBoxLogo_Alternate_SMALLscale_RGB_DIGITAL_80x80_rrtz7i.png"
                        alt="American Express"
                        className="h-6 object-contain"
                      />
                    </div>
                  </div>
                  <p className="text-xs text-whiteGray">
                    Your payment is encrypted and processed securely. We do not
                    store your card details.
                  </p>
                </div>

                {/* Terms */}
                <p className="text-xs text-center text-whiteGray">
                  By proceeding, you agree to our{" "}
                  <Link
                    href="/terms-conditions"
                    className="text-softMintGreen hover:text-logoGold"
                  >
                    Terms & Conditions
                  </Link>{" "}
                  and{" "}
                  <Link
                    href="/terms-conditions#refund-policy"
                    className="text-softMintGreen hover:text-logoGold"
                  >
                    Refund Policy
                  </Link>
                </p>
              </div>

              {/* Footer */}
              <div className="bg-offWhite px-5 py-2 text-center border-t border-gray-100">
                <p className="text-xs text-whiteGray">
                  Operated by{" "}
                  <strong className="text-logoGold">NOUR MAISON LTD</strong>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Back Link - Mobile */}
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
  );
};

export default CheckoutPage;
