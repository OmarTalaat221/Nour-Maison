"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaPaperPlane } from "react-icons/fa";
import Link from "next/link";

export default function PlaneOverlaySuccess({
  showOverlay,
  setShowOverlay,
  text,
  chatLink,
}) {
  useEffect(() => {
    const timer = setTimeout(() => setShowOverlay(false), 4000);
    return () => clearTimeout(timer);
  }, [showOverlay]);

  return (
    <AnimatePresence>
      {showOverlay && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black bg-opacity-60 backdrop-blur-md flex items-center justify-center z-50"
        >
          <div className="relative w-full ">
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
              className="  flex w-full items-center justify-center left-0 text-softMintGreen text-5xl"
            >
              <FaPaperPlane />
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="absolute top-20 !text-white text-6xl font-tangerine w-full text-center  font-bold"
            >
              {text || "Table booked—can’t wait to see you!"}
              <div className="mt-10">
                <button className="button-border-anime !w-44 md:!w-60 !h-[4rem]">
                  <svg xmlns="http://www.w3.org/2000/svg">
                    <rect
                      className="border-anime !w-44 md:!w-60 !h-[4rem] !stroke-[4px] !stroke-[#c16d2d]"
                      pathLength={100}
                    />
                  </svg>
                  <Link
                    href={`https://app.nourmaison.co.uk/?bookingId=${chatLink}`}
                    className="txt-upload !text-white no-underline font-black hover:no-underline  text-5xl "
                  >
                    Booking Chat
                  </Link>
                </button>
              </div>
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
