"use client";

import React, { useEffect, useState, useCallback, memo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CgClose } from "react-icons/cg";
import Link from "next/link";

// ✅ Memoized Close Button
const CloseButton = memo(({ onClick }) => (
  <motion.button
    initial={{ opacity: 0, scale: 0 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
    onClick={onClick}
    className="absolute top-6 right-6 z-[10000] text-white text-3xl 
               hover:scale-110 transition-transform cursor-pointer
               bg-white/10 rounded-full p-2 backdrop-blur-sm"
    aria-label="Close"
  >
    <CgClose />
  </motion.button>
));

CloseButton.displayName = "CloseButton";

// ✅ Animation variants (خارج الـ component عشان مش يتعمل re-create)
const overlayVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  exit: { opacity: 0 },
};

const imageContainerVariants = {
  hidden: { opacity: 0, scale: 0.8, y: 30 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 25,
      delay: 0.1,
    },
  },
  exit: {
    opacity: 0,
    scale: 0.8,
    y: 30,
    transition: { duration: 0.2 },
  },
};

const buttonVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { delay: 0.6, duration: 0.4 },
  },
};

const textVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { delay: 0.9 },
  },
};

// ✅ Box shadow as constant
const buttonShadow = `
  0 4px 15px rgba(0, 0, 0, 0.4),
  0 8px 25px rgba(0, 0, 0, 0.3),
  0 0 20px rgba(218, 165, 32, 0.4)
`;

const Celebration = ({
  image = "https://camp-coding.tech/nour_maison/site_images/Eid_mubark.webp",
}) => {
  const [open, setOpen] = useState(false);

  // ✅ Memoized close handler
  const handleClose = useCallback(() => {
    setOpen(false);
    document.body.style.overflow = "auto";
  }, []);

  // ✅ Stop propagation handler
  const stopPropagation = useCallback((e) => e.stopPropagation(), []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setOpen(true);
      document.body.style.overflow = "hidden";
    }, 500);

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = "auto";
    };
  }, []);

  // ✅ Preload image
  useEffect(() => {
    const img = new Image();
    img.src = image;
  }, [image]);

  return (
    <AnimatePresence mode="wait">
      {open && (
        <motion.div
          variants={overlayVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          transition={{ duration: 0.25 }}
          onClick={handleClose}
          className="fixed inset-0 z-[89998989998] flex items-center justify-center px-4"
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.75)",
            backdropFilter: "blur(8px)",
            WebkitBackdropFilter: "blur(8px)",
          }}
        >
          <CloseButton onClick={handleClose} />

          <motion.div
            variants={imageContainerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={stopPropagation}
            className="relative"
          >
            {/* Image Container */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={image}
                alt="Eid Mubarak Celebration"
                className="w-[90vw] max-w-md h-auto"
                loading="eager"
                decoding="async"
              />

              {/* Button */}
              <motion.div
                variants={buttonVariants}
                initial="hidden"
                animate="visible"
                className="absolute bottom-4 inset-x-0 flex justify-center px-4"
              >
                <Link
                  href="/booking"
                  onClick={stopPropagation}
                  className="global-shimmer-btn bg-goldenOrange hover:bg-goldenOrange/90 
                             text-white font-nour 
                             text-xs sm:text-sm md:text-base 
                             px-6 sm:px-10 py-2.5 sm:py-3 
                             rounded-full
                             transition-all duration-200 
                             hover:scale-105 active:scale-95
                             whitespace-nowrap inline-block"
                  style={{ boxShadow: buttonShadow }}
                  aria-label="Book your Eid table"
                >
                  Book Your Eid Table
                </Link>
              </motion.div>
            </div>

            {/* Tap to close text */}
            <motion.p
              variants={textVariants}
              initial="hidden"
              animate="visible"
              className="text-center text-white/50 text-sm mt-6 font-lato"
            >
              Tap anywhere to close
            </motion.p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default memo(Celebration);
