"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FaPaperPlane } from "react-icons/fa";
import Link from "next/link";

export default function PlaneOverlaySuccess({
  showOverlay,
  setShowOverlay,
  text,
  chatLink,
}) {
  const [mounted, setMounted] = useState(false);

  // ✅ التأكد إن الـ component اتعمله mount (مهم للـ Portal مع Next.js SSR)
  useEffect(() => {
    setMounted(true);
  }, []);

  // ✅ Auto close بعد 4 ثواني
  useEffect(() => {
    if (!showOverlay) return;
    const timer = setTimeout(() => setShowOverlay(false), 4000);
    return () => clearTimeout(timer);
  }, [showOverlay, setShowOverlay]);

  // ✅ منع scroll للـ body لما الـ overlay مفتوح
  useEffect(() => {
    if (showOverlay) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [showOverlay]);

  if (!mounted) return null;

  const overlayContent = (
    <AnimatePresence>
      {showOverlay && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setShowOverlay(false)}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 99999,
          }}
          className="paper-plane bg-black/60 backdrop-blur-md flex items-center justify-center px-4"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-[95vw] sm:max-w-4xl mx-auto min-h-[280px] sm:min-h-[340px] md:min-h-[380px]"
          >
            <motion.div
              initial={{ x: "-100%", opacity: 0, rotate: 360, scale: 0 }}
              animate={{ x: "0", opacity: 1, rotate: 0, scale: 1.5 }}
              exit={{
                x: "100%",
                y: "-1000px",
                opacity: 0,
                rotate: 360,
                scale: 0.7,
              }}
              transition={{ duration: 2, ease: "easeInOut", type: "spring" }}
              className="flex w-full items-center justify-center left-0 text-softMintGreen text-4xl xs:text-5xl sm:text-5xl md:text-6xl"
            >
              <FaPaperPlane />
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="absolute top-16 xs:top-20 sm:top-24 md:top-24 w-full text-center font-bold px-2 sm:px-4"
            >
              <p className="!text-white text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-tangerine leading-tight">
                {text || "Table booked—can't wait to see you!"}
              </p>

              {chatLink && (
                <div className="mt-6 sm:mt-8 md:mt-10 flex justify-center">
                  <button className="button-border-anime !w-40 xs:!w-44 sm:!w-52 md:!w-60 !h-[3rem] sm:!h-[3.5rem] md:!h-[4rem]">
                    <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                      <rect
                        className="border-anime !w-40 xs:!w-44 sm:!w-52 md:!w-60 !h-[3rem] sm:!h-[3.5rem] md:!h-[4rem] !stroke-[4px] !stroke-[#c16d2d]"
                        pathLength={100}
                      />
                    </svg>

                    <Link
                      href={`https://app.nourmaison.co.uk/?bookingId=${chatLink}`}
                      className="txt-upload !text-white no-underline font-black hover:no-underline text-sm xs:text-base sm:text-lg md:text-xl"
                    >
                      Booking Chat
                    </Link>
                  </button>
                </div>
              )}
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );

  // ✅ استخدام Portal لطلوع الـ overlay خارج DOM tree
  return createPortal(overlayContent, document.body);
}