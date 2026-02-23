// app/(whatever)/afternoon-tea-menu/_components/FloatingElements.jsx
"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const FloatingElements = () => {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // ✅ Parallax transforms for different elements
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const y4 = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const rotate1 = useTransform(scrollYProgress, [0, 1], [0, 15]);
  const rotate2 = useTransform(scrollYProgress, [0, 1], [0, -15]);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 overflow-hidden pointer-events-none"
      aria-hidden="true"
    >
      {/* ✅ Left Side Elements */}

      {/* Teacup - Top Left */}
      <motion.div
        style={{ y: y1, rotate: rotate1 }}
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 0.15, x: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="absolute left-2 sm:left-4 md:left-8 lg:left-16 xl:left-24 top-[10%]"
      >
        <svg
          width="80"
          height="80"
          viewBox="0 0 64 64"
          className="w-12 sm:w-16 md:w-20 lg:w-24 text-softMintGreen"
          fill="currentColor"
        >
          <path d="M52,20H48V16a4,4,0,0,0-4-4H12a4,4,0,0,0-4,4V36A16.019,16.019,0,0,0,24,51.8V56H20a2,2,0,0,0,0,4H44a2,2,0,0,0,0-4H40V51.8A16.019,16.019,0,0,0,52,36V32h0a8,8,0,0,0,0-16ZM36,56H28V52h8ZM48,36a12,12,0,0,1-24,0V16H44V36a4,4,0,0,1-4,4H20a2,2,0,0,0,0,4H40a8.009,8.009,0,0,0,8-8ZM52,28H48V24h4a4,4,0,0,1,0,8Z" />
        </svg>
      </motion.div>

      {/* Croissant - Middle Left */}
      <motion.div
        style={{ y: y2, rotate: rotate2 }}
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 0.12, x: 0 }}
        transition={{ duration: 1, delay: 0.4 }}
        className="absolute left-0 sm:left-2 md:left-6 lg:left-12 xl:left-20 top-[35%]"
      >
        <svg
          width="100"
          height="100"
          viewBox="0 0 512 512"
          className="w-14 sm:w-18 md:w-24 lg:w-28 text-goldenOrange"
          fill="currentColor"
        >
          <path d="M432.256,204.8c-35.072,0-66.56,15.36-88.32,39.68c-5.12-5.12-10.24-9.472-16.128-13.568 c22.016-25.6,35.328-58.88,35.328-95.232c0-35.84-12.8-68.608-34.048-94.208C390.4,58.88,437.76,106.24,455.168,165.12 C448.512,181.504,441.6,193.28,432.256,204.8z" />
          <path d="M256,135.68c-74.496,0-135.68,61.184-135.68,135.68S181.504,406.784,256,406.784 c35.072,0,66.56-15.36,88.32-39.68c5.12,5.12,10.24,9.472,16.128,13.568c-22.016,25.6-35.328,58.88-35.328,95.232 c0,35.84,12.8,68.608,34.048,94.208C297.6,553.12,250.24,505.76,232.832,446.88c6.656-16.384,13.568-28.16,22.912-39.68 C219.392,371.2,185.6,327.936,185.6,271.36c0-56.32,33.792-99.84,70.4-135.68z" />
        </svg>
      </motion.div>

      {/* Macaron - Bottom Left */}
      <motion.div
        style={{ y: y3 }}
        initial={{ opacity: 0, x: -40, scale: 0.8 }}
        animate={{ opacity: 0.18, x: 0, scale: 1 }}
        transition={{ duration: 1, delay: 0.6 }}
        className="absolute left-4 sm:left-8 md:left-14 lg:left-20 xl:left-28 top-[65%]"
      >
        <svg
          width="60"
          height="60"
          viewBox="0 0 64 64"
          className="w-10 sm:w-12 md:w-16 lg:w-20 text-logoGold"
          fill="currentColor"
        >
          <circle cx="32" cy="20" r="16" />
          <rect x="16" y="28" width="32" height="8" rx="2" />
          <circle cx="32" cy="44" r="16" />
        </svg>
      </motion.div>

      {/* ✅ Right Side Elements */}

      {/* Teapot - Top Right */}
      <motion.div
        style={{ y: y2, rotate: rotate2 }}
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 0.15, x: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="absolute right-2 sm:right-4 md:right-8 lg:right-16 xl:right-24 top-[8%]"
      >
        <svg
          width="90"
          height="90"
          viewBox="0 0 64 64"
          className="w-14 sm:w-18 md:w-24 lg:w-28 text-softMintGreen"
          fill="currentColor"
        >
          <path d="M56,24H52a4,4,0,0,0-4,4v4a4,4,0,0,0,4,4h4a4,4,0,0,0,4-4V28A4,4,0,0,0,56,24Zm0,8H52V28h4Z" />
          <path d="M44,16H20a8.009,8.009,0,0,0-8,8V44a8.009,8.009,0,0,0,8,8H44a8.009,8.009,0,0,0,8-8V24A8.009,8.009,0,0,0,44,16ZM20,48a4,4,0,0,1-4-4V24a4,4,0,0,1,4-4H44a4,4,0,0,1,4,4V44a4,4,0,0,1-4,4Z" />
          <path d="M32,8a2,2,0,0,0,2-2V2a2,2,0,0,0-4,0V6A2,2,0,0,0,32,8Z" />
          <path d="M24,10a2,2,0,0,0,2-2V4a2,2,0,0,0-4,0V8A2,2,0,0,0,24,10Z" />
          <path d="M40,10a2,2,0,0,0,2-2V4a2,2,0,0,0-4,0V8A2,2,0,0,0,40,10Z" />
          <rect x="8" y="54" width="48" height="4" rx="2" />
        </svg>
      </motion.div>

      {/* Cake Slice - Middle Right */}
      <motion.div
        style={{ y: y1, rotate: rotate1 }}
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 0.12, x: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="absolute right-0 sm:right-2 md:right-6 lg:right-12 xl:right-20 top-[40%]"
      >
        <svg
          width="80"
          height="80"
          viewBox="0 0 64 64"
          className="w-12 sm:w-16 md:w-20 lg:w-24 text-goldenOrange"
          fill="currentColor"
        >
          <path d="M56,32H48L32,8,16,32H8a4,4,0,0,0-4,4V52a4,4,0,0,0,4,4H56a4,4,0,0,0,4-4V36A4,4,0,0,0,56,32ZM32,16l10,16H22ZM56,52H8V36H56Z" />
          <circle cx="20" cy="44" r="4" />
          <circle cx="32" cy="44" r="4" />
          <circle cx="44" cy="44" r="4" />
        </svg>
      </motion.div>

      {/* Fork & Spoon - Bottom Right */}
      <motion.div
        style={{ y: y4 }}
        initial={{ opacity: 0, x: 40, scale: 0.8 }}
        animate={{ opacity: 0.14, x: 0, scale: 1 }}
        transition={{ duration: 1, delay: 0.7 }}
        className="absolute right-4 sm:right-8 md:right-14 lg:right-20 xl:right-28 top-[70%]"
      >
        <svg
          width="70"
          height="70"
          viewBox="0 0 64 64"
          className="w-10 sm:w-14 md:w-18 lg:w-22 text-sageGreen"
          fill="currentColor"
        >
          {/* Fork */}
          <path d="M20,4V20a8,8,0,0,0,4,6.928V56a4,4,0,0,0,8,0V26.928A8,8,0,0,0,36,20V4a2,2,0,0,0-4,0V16a2,2,0,0,1-4,0V4a2,2,0,0,0-4,0V16a2,2,0,0,1-4,0V4a2,2,0,0,0-4,0Z" />
          {/* Spoon */}
          <path d="M52,4a10,10,0,0,0-8,16v36a4,4,0,0,0,8,0V20A10,10,0,0,0,52,4Zm0,16a6,6,0,1,1,6-6A6,6,0,0,1,52,20Z" />
        </svg>
      </motion.div>

      {/* ✅ Additional Decorative Elements */}

      {/* Small Leaf - Left Middle */}
      <motion.div
        style={{ y: y3, rotate: rotate1 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ duration: 1, delay: 0.8 }}
        className="absolute left-6 sm:left-12 md:left-20 lg:left-28 top-[50%] hidden md:block"
      >
        <svg
          width="40"
          height="40"
          viewBox="0 0 64 64"
          className="w-8 md:w-10 lg:w-12 text-pestachio"
          fill="currentColor"
        >
          <path d="M56,8C40,8,32,24,32,32S24,56,8,56c0-16,8-24,16-24h8C40,32,56,24,56,8Z" />
        </svg>
      </motion.div>

      {/* Small Leaf - Right Middle */}
      <motion.div
        style={{ y: y4, rotate: rotate2 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ duration: 1, delay: 0.9 }}
        className="absolute right-6 sm:right-12 md:right-20 lg:right-28 top-[55%] hidden md:block"
      >
        <svg
          width="40"
          height="40"
          viewBox="0 0 64 64"
          className="w-8 md:w-10 lg:w-12 text-pestachio transform -scale-x-100"
          fill="currentColor"
        >
          <path d="M56,8C40,8,32,24,32,32S24,56,8,56c0-16,8-24,16-24h8C40,32,56,24,56,8Z" />
        </svg>
      </motion.div>

      {/* Coffee Bean - Scattered */}
      <motion.div
        style={{ y: y2 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.08 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute left-[15%] top-[25%] hidden lg:block"
      >
        <svg
          width="30"
          height="30"
          viewBox="0 0 64 64"
          className="w-6 lg:w-8 text-logoGold"
          fill="currentColor"
        >
          <ellipse cx="32" cy="32" rx="16" ry="24" />
          <path
            d="M32,12c-4,8-4,24,0,40"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
          />
        </svg>
      </motion.div>

      {/* Coffee Bean - Right */}
      <motion.div
        style={{ y: y3 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.08 }}
        transition={{ duration: 1, delay: 1.1 }}
        className="absolute right-[12%] top-[28%] hidden lg:block"
      >
        <svg
          width="30"
          height="30"
          viewBox="0 0 64 64"
          className="w-6 lg:w-8 text-logoGold rotate-45"
          fill="currentColor"
        >
          <ellipse cx="32" cy="32" rx="16" ry="24" />
          <path
            d="M32,12c-4,8-4,24,0,40"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
          />
        </svg>
      </motion.div>
    </div>
  );
};

export default FloatingElements;
