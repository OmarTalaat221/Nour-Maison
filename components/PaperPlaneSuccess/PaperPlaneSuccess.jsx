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
  variant = "success",
}) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!showOverlay) return;
    const timer = setTimeout(() => setShowOverlay(false), 4000);
    return () => clearTimeout(timer);
  }, [showOverlay, setShowOverlay]);

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

  const isError = variant === "error";

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
            {/* ===== Icon Animation ===== */}
            {isError ? (
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{
                  opacity: 1,
                  scale: 1.5,
                  rotate: [0, -10, 10, -10, 10, 0],
                }}
                exit={{ opacity: 0, scale: 0.5, y: -200 }}
                transition={{
                  duration: 0.8,
                  ease: "easeInOut",
                  type: "spring",
                  stiffness: 150,
                  damping: 12,
                }}
                className="flex w-full items-center justify-center left-0"
              >
                <svg
                  width="50"
                  height="50"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-[50px] h-[50px]"
                >
                  <path
                    d="M12 3L22 20H2L12 3Z"
                    fill="#f59e0b"
                  />
                  <path
                    d="M12 8V13"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <circle cx="12" cy="17" r="1.2" fill="white" />
                </svg>
              </motion.div>
            ) : (
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
                transition={{
                  duration: 2,
                  ease: "easeInOut",
                  type: "spring",
                }}
                className="flex w-full items-center justify-center left-0 text-softMintGreen text-4xl xs:text-5xl sm:text-5xl md:text-6xl"
              >
                <FaPaperPlane />
              </motion.div>
            )}

            {/* ===== Text ===== */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: isError ? 0.4 : 0.8 }}
              className="absolute top-16 xs:top-20 sm:top-24 md:top-24 w-full text-center font-bold px-2 sm:px-4"
            >
              <p
                className={`text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-tangerine leading-tight ${isError ? "!text-red-200" : "!text-white"
                  }`}
              >
                {text ||
                  (isError
                    ? "Something went wrong!"
                    : "Table booked—can't wait to see you!")}
              </p>

              {chatLink && !isError && (
                <div className="mt-6 sm:mt-8 md:mt-10 flex justify-center">
                  <button className="button-border-anime !w-40 xs:!w-44 sm:!w-52 md:!w-60 !h-[3rem] sm:!h-[3.5rem] md:!h-[4rem]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                    >
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

  return createPortal(overlayContent, document.body);
}