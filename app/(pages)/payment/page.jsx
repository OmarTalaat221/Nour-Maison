"use client";

import { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import PagesBanner from "../../../components/PagesBanner/PagesBanner";
import { clearCart } from "../../../redux/cartSlice";

const Payment = () => {
  const [clientRendered, setClientRendered] = useState(false);
  const [paymentStatus, setPaymentStatus] = useState(null);
  const [sessionData, setSessionData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const handledSuccess = useRef(false);

  useEffect(() => {
    setClientRendered(true);
  }, []);

  useEffect(() => {
    if (!clientRendered) return;

    const loadPaymentStatus = async () => {
      try {
        const storedSession = sessionStorage.getItem("dojoCheckoutSession");
        const parsedSession = storedSession ? JSON.parse(storedSession) : null;

        setSessionData(parsedSession);

        const query = parsedSession?.paymentIntentId
          ? `?paymentIntentId=${encodeURIComponent(parsedSession.paymentIntentId)}`
          : "";

        const response = await fetch(`/api/dojo/payment-status${query}`, {
          method: "GET",
          cache: "no-store",
        });

        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.message || "Could not check payment status");
        }

        setPaymentStatus(data);

        if (data.status === "Captured" && !handledSuccess.current) {
          handledSuccess.current = true;
          dispatch(clearCart());
          sessionStorage.removeItem("dojoCheckoutSession");
        }
      } catch (error) {
        setError(error.message || "Could not check payment status");
      } finally {
        setLoading(false);

        setTimeout(() => {
          document.getElementById("contact")?.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }, 100);
      }
    };

    loadPaymentStatus();
  }, [clientRendered, dispatch]);

  if (!clientRendered) return null;

  const getStatusTitle = () => {
    if (loading) return "Checking Payment";
    if (error) return "Payment Check Failed";
    if (paymentStatus?.status === "Captured") return "Payment Successful";
    if (paymentStatus?.status === "Authorized") return "Payment Authorized";
    if (paymentStatus?.status === "Created") return "Payment Pending";
    if (paymentStatus?.status === "Canceled") return "Payment Canceled";
    if (paymentStatus?.status === "Reversed") return "Payment Reversed";
    if (paymentStatus?.status === "Refunded") return "Payment Refunded";
    return "Payment Status";
  };

  const getStatusMessage = () => {
    if (loading) return "Please wait while we confirm your payment with Dojo.";
    if (error) return error;
    if (paymentStatus?.status === "Captured") {
      return "Your payment has been completed successfully. Thank you for your order.";
    }
    if (paymentStatus?.status === "Authorized") {
      return "Your payment has been authorized and is waiting to be captured.";
    }
    if (paymentStatus?.status === "Created") {
      return "Your payment was created but has not been completed yet.";
    }
    if (paymentStatus?.status === "Canceled") {
      return "This payment was canceled before completion.";
    }
    if (paymentStatus?.status === "Reversed") {
      return "This payment has been reversed.";
    }
    if (paymentStatus?.status === "Refunded") {
      return "This payment has been refunded.";
    }
    return "We could not determine the final payment status.";
  };

  const getAmount = () => {
    const dojoAmount =
      paymentStatus?.totalAmount?.value || paymentStatus?.amount?.value || null;

    if (dojoAmount) {
      return (dojoAmount / 100).toFixed(2);
    }

    if (sessionData?.amount) {
      return Number(sessionData.amount).toFixed(2);
    }

    return "0.00";
  };

  const getCurrency = () => {
    return (
      paymentStatus?.totalAmount?.currencyCode ||
      paymentStatus?.amount?.currencyCode ||
      "GBP"
    );
  };

  const isSuccess = paymentStatus?.status === "Captured";
  const isProblem =
    error ||
    paymentStatus?.status === "Canceled" ||
    paymentStatus?.status === "Reversed" ||
    paymentStatus?.status === "Refunded";

  return (
    <>
      <PagesBanner
        title={"Payment"}
        slogan={
          <p className="text-center">
            A Smooth Checkout for a Tasteful Experience!
          </p>
        }
        scrollTo={"contact"}
      />

      <section id="contact" className="py-8 antialiased md:py-16">
        <div className="mx-auto container px-4 2xl:px-0">
          <div className="mx-auto">
            <h2 className="text-5xl font-semibold font-tangerine sm:text-6xl text-softMintGreen">
              Easy Payment
            </h2>

            <div className="mt-6 sm:mt-8 lg:flex lg:items-start lg:gap-12">
              <div className="w-full rounded-lg border border-gray-200 bg-white p-4 shadow-sm sm:p-6 lg:max-w-2xl lg:p-8">
                <div className="flex flex-col items-center text-center">
                  <div
                    className={`mb-5 flex h-16 w-16 items-center justify-center rounded-full ${
                      loading
                        ? "bg-pestachio"
                        : isSuccess
                          ? "bg-pestachio"
                          : isProblem
                            ? "bg-red-50"
                            : "bg-pestachio"
                    }`}
                  >
                    {loading ? (
                      <div className="h-8 w-8 animate-spin rounded-full border-4 border-softMintGreen border-t-transparent" />
                    ) : isSuccess ? (
                      <svg
                        className="h-8 w-8 text-softMintGreen"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    ) : (
                      <svg
                        className="h-8 w-8 text-red-500"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v4a1 1 0 102 0V7zm-1 8a1 1 0 100-2 1 1 0 000 2z"
                          clipRule="evenodd"
                        />
                      </svg>
                    )}
                  </div>

                  <h3 className="text-3xl font-tangerine text-softMintGreen sm:text-4xl">
                    {getStatusTitle()}
                  </h3>

                  <p className="mt-3 max-w-md text-sm leading-6 text-gray-600">
                    {getStatusMessage()}
                  </p>

                  {!loading && !error && paymentStatus?.reference && (
                    <div className="mt-6 w-full rounded-lg bg-gray-50 p-4 text-left">
                      <div className="mb-3 flex items-center justify-between gap-4">
                        <span className="text-sm text-gray-500">
                          Reference:
                        </span>
                        <span className="text-sm font-semibold text-gray-900">
                          {paymentStatus.reference}
                        </span>
                      </div>

                      <div className="mb-3 flex items-center justify-between gap-4">
                        <span className="text-sm text-gray-500">Status:</span>
                        <span className="text-sm font-semibold text-softMintGreen">
                          {paymentStatus.status}
                        </span>
                      </div>

                      <div className="flex items-center justify-between gap-4">
                        <span className="text-sm text-gray-500">Amount:</span>
                        <span className="text-sm font-semibold text-gray-900">
                          {getCurrency()} {getAmount()}
                        </span>
                      </div>
                    </div>
                  )}

                  {!loading && (
                    <button
                      type="button"
                      onClick={() => {
                        window.location.href = "/";
                      }}
                      className="mt-6 flex w-full items-center justify-center rounded-lg bg-softMintGreen px-5 py-2.5 text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300"
                    >
                      Back to Home
                    </button>
                  )}
                </div>
              </div>

              <div className="mt-6 sticky top-[200px] grow sm:mt-8 lg:mt-0 space-y-4 rounded-lg border-2 border-sageGreen shadow-md bg-white p-4 sm:p-6">
                <div className="space-y-4 rounded-lg border border-gray-100 bg-gray-50 p-6">
                  <div className="space-y-2">
                    <dl className="flex items-center justify-between gap-4">
                      <dt className="text-base font-normal text-gray-500">
                        Payment Provider:
                      </dt>
                      <dd className="text-base font-medium text-gray-900">
                        Dojo
                      </dd>
                    </dl>

                    <dl className="flex items-center justify-between gap-4">
                      <dt className="text-base font-normal text-gray-500">
                        Payment Status:
                      </dt>
                      <dd className="text-base font-medium text-green-500">
                        {loading
                          ? "Checking..."
                          : paymentStatus?.status || "Unknown"}
                      </dd>
                    </dl>
                  </div>

                  <dl className="flex items-center justify-between gap-4 border-t border-gray-200 pt-2">
                    <dt className="text-2xl font-bold text-softMintGreen">
                      Total
                    </dt>
                    <dd className="font-bold text-softMintGreen text-2xl">
                      £{getAmount()}
                    </dd>
                  </dl>
                </div>

                <div className="mt-6 flex items-center justify-center gap-8">
                  <img
                    loading="lazy"
                    className="h-8 w-auto"
                    src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/brand-logos/visa.svg"
                    alt="VISA"
                  />
                  <img
                    loading="lazy"
                    className="h-8 w-auto"
                    src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/brand-logos/mastercard.svg"
                    alt="MasterCard"
                  />
                </div>
              </div>
            </div>

            <p className="mt-6 text-center text-gray-500 sm:mt-8 lg:text-left">
              Payment processed securely by{" "}
              <span className="font-medium text-primary-700 underline">
                Dojo
              </span>{" "}
              for{" "}
              <span className="font-medium text-primary-700 underline">
                NOUR MAISON LTD
              </span>
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Payment;
