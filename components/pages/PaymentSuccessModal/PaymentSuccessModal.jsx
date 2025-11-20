"use client";
import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

const PaymentSuccessModal = ({ open, setOpen }) => {
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [open]);

  const router = useRouter();

  const navigate = (path) => {
    router.push(path);
  };

  return (
    open && (
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="fixed inset-0 z-50 bg-black/35"
        onClick={(e) => {
          e.stopPropagation();
          setOpen(false);
        }}
      >
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-r  dark:from-gray-900 dark:to-gray-800">
          <div
            className="w-full max-w-md md:max-w-2xl p-4 bg-white shadow-2xl dark:bg-gray-900 sm:p-10 sm:rounded-3xl"
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            <div className="text-center">
              <div
                className="flex items-center justify-center w-20 h-20 mx-auto mb-6 bg-green-100 rounded-full dark:bg-green-700"
                onClick={(e) => {
                  e.stpo;
                }}
              >
                <svg
                  className="h-12 w-12 text-green-600 dark:text-green-100"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                  data-slot="icon"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg>
              </div>
              <h1 className=" text-2xl sm:text-3xl md:text-4xl font-extrabold text-softMintGreen">
                Payment Successful!
              </h1>
              <p className="mt-4 text-[15px] sm:text-lg text-gray-800 dark:text-gray-300">
                Thank you for your purchase.
              </p>
            </div>
            <div className="flex mt-7">
              <button
                onClick={() => navigate("/store")}
                class="inline-block px-7 mx-auto py-1.5 overflow-hidden text-sm font-semibold  transition-all  group text text-white bg-softMintGreen hover:bg-softMintGreen/80  hover:text-white"
              >
                <span
                  before="Continue Shopping"
                  class="relative py-1.5 transition-transform inline-block before:content-[attr(before)] before:py-1.5 before:absolute before:top-full group-hover:-translate-y-full"
                >
                  Continue Shopping
                </span>
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    )
  );
};

export default PaymentSuccessModal;
