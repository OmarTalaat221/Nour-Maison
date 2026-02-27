"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useMediaQuery } from "../../../../Hooks/GeneralHooks/useMediaQueries";

const SectionTitle = ({ children, className }) => (
  <h2
    className={`text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-8 ${className}`}
  >
    {children}
  </h2>
);

const ChefsSection2 = () => {
  const containerRef = useRef(null);

  // Screen sizes
  const isSmall = useMediaQuery("(max-width: 640px)");
  const isMedium = useMediaQuery("(min-width: 641px) and (max-width: 1024px)");
  // const isLarge = useMediaQuery("(min-width: 1025px)");

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const springConfig = {
    stiffness: 140,
    damping: 20,
    mass: 0.9,
  };

  // ====== RESPONSIVE VALUES ======
  const getResponsiveValue = (small, medium, large) => {
    if (isSmall) return small;
    if (isMedium) return medium;
    return large;
  };

  // ====== GLOBAL OPACITY ======
  const opacityRaw = useTransform(scrollYProgress, [0, 0.15, 0.5], [0, 0.8, 1]);
  const opacity = useSpring(opacityRaw, springConfig);

  // ====== TITLE ANIMATION ======
  const titleYRaw = useTransform(scrollYProgress, [0, 0.2], [40, 0]);
  const titleOpacityRaw = useTransform(scrollYProgress, [0, 0.2], [0, 1]);
  const titleY = useSpring(titleYRaw, springConfig);
  const titleOpacity = useSpring(titleOpacityRaw, springConfig);

  // ====== BRANCHES PARALLAX ======
  const branchRightXRaw = useTransform(
    scrollYProgress,
    [0, 0.5],
    [getResponsiveValue(60, 80, 120), 0]
  );
  const branchRightRotateRaw = useTransform(scrollYProgress, [0, 0.5], [8, 0]);
  const branchRightOpacityRaw = useTransform(
    scrollYProgress,
    [0, 0.2, 0.5],
    [0, 0.6, 1]
  );
  const branchRightX = useSpring(branchRightXRaw, springConfig);
  const branchRightRotate = useSpring(branchRightRotateRaw, springConfig);
  const branchRightOpacity = useSpring(branchRightOpacityRaw, springConfig);

  const branchLeftXRaw = useTransform(
    scrollYProgress,
    [0, 0.5],
    [getResponsiveValue(-60, -80, -120), 0]
  );
  const branchLeftRotateRaw = useTransform(scrollYProgress, [0, 0.5], [-8, 0]);
  const branchLeftOpacityRaw = useTransform(
    scrollYProgress,
    [0, 0.2, 0.5],
    [0, 0.6, 1]
  );
  const branchLeftX = useSpring(branchLeftXRaw, springConfig);
  const branchLeftRotate = useSpring(branchLeftRotateRaw, springConfig);
  const branchLeftOpacity = useSpring(branchLeftOpacityRaw, springConfig);

  // ====== IMAGE 5 (LEFT) ======
  const xImg5Raw = useTransform(
    scrollYProgress,
    [0, 0.4],
    [
      getResponsiveValue(-200, -350, -500), // start position
      getResponsiveValue(-30, -80, -120), // end position
    ]
  );
  const yImg5Raw = useTransform(
    scrollYProgress,
    [0, 0.4],
    [getResponsiveValue(50, 80, 100), 0]
  );
  const rotateImg5Raw = useTransform(
    scrollYProgress,
    [0, 0.4],
    [getResponsiveValue(-20, -30, -42), 0]
  );
  const scaleImg5Raw = useTransform(
    scrollYProgress,
    [0, 0.4],
    [getResponsiveValue(0.6, 0.5, 0.4), 1]
  );

  const xImg5 = useSpring(xImg5Raw, springConfig);
  const yImg5 = useSpring(yImg5Raw, springConfig);
  const rotateImg5 = useSpring(rotateImg5Raw, springConfig);
  const scaleImg5 = useSpring(scaleImg5Raw, springConfig);

  // ====== IMAGE 6 (RIGHT) ======
  const xImg6Raw = useTransform(
    scrollYProgress,
    [0, 0.4],
    [
      getResponsiveValue(200, 400, 600), // start position
      getResponsiveValue(30, 80, 120), // end position
    ]
  );
  const yImg6Raw = useTransform(
    scrollYProgress,
    [0, 0.4],
    [getResponsiveValue(60, 90, 120), 0]
  );
  const rotateImg6Raw = useTransform(
    scrollYProgress,
    [0, 0.4],
    [getResponsiveValue(15, 22, 28), 0]
  );
  const scaleImg6Raw = useTransform(
    scrollYProgress,
    [0, 0.4],
    [getResponsiveValue(0.85, 0.8, 0.75), 1]
  );

  const xImg6 = useSpring(xImg6Raw, springConfig);
  const yImg6 = useSpring(yImg6Raw, springConfig);
  const rotateImg6 = useSpring(rotateImg6Raw, springConfig);
  const scaleImg6 = useSpring(scaleImg6Raw, springConfig);

  // ====== IMAGE 8 (BOTTOM) ======
  const yImg8Raw = useTransform(
    scrollYProgress,
    [0, 0.4],
    [getResponsiveValue(50, 80, 100), 0]
  );
  const scaleImg8Raw = useTransform(scrollYProgress, [0, 0.4], [0.9, 1]);
  const yImg8 = useSpring(yImg8Raw, springConfig);
  const scaleImg8 = useSpring(scaleImg8Raw, springConfig);

  return (
    <section
      ref={containerRef}
      className="relative overflow-hidden py-8 sm:py-12 md:py-16"
    >
      {/* Right branch */}
      <motion.img
        loading="lazy"
        draggable="false"
        className="select-none absolute right-0 top-[80px] sm:top-[120px] md:top-[180px] lg:top-[200px] w-[120px] sm:w-[180px] md:w-[280px] lg:w-[450px] drop-shadow-2xl pointer-events-none"
        src="https://res.cloudinary.com/dhebgz7qh/image/upload/v1767443795/ocbeg0zszow5hwba7l4z_hyrfsl.webp"
        alt="Branch"
        style={{
          x: branchRightX,
          rotate: branchRightRotate,
          opacity: branchRightOpacity,
        }}
      />

      {/* Left branch */}
      <motion.img
        loading="lazy"
        draggable="false"
        className="select-none absolute !rotate-180 !top-[200px] sm:top-[150px] md:!top-[260px] left-0 w-[180px] sm:w-[250px] md:w-[300px] lg:w-[600px] drop-shadow-2xl pointer-events-none"
        src="https://res.cloudinary.com/dhebgz7qh/image/upload/v1767443795/ocbeg0zszow5hwba7l4z_hyrfsl.webp"
        alt="Branch"
        style={{
          x: branchLeftX,
          rotate: branchLeftRotate,
          opacity: branchLeftOpacity,
        }}
      />

      <div className="container mx-auto max-w-6xl px-4 sm:px-6">
        {/* Title */}
        <motion.div style={{ y: titleY, opacity: titleOpacity }}>
          <SectionTitle className="!text-amber-600 text-3xl sm:text-4xl md:text-5xl lg:!text-7xl font-tangerine">
            The Faces Behind the Flavors
          </SectionTitle>
        </motion.div>

        {/* All images container */}
        <div className="relative mt-6 sm:mt-10 md:mt-16 lg:mt-20 flex flex-col items-center">
          {/* Top two images */}
          <div className="relative flex items-center justify-center w-full">
            {/* Image 5 - Left */}
            <motion.img
              src="https://res.cloudinary.com/dhebgz7qh/image/upload/v1772101591/6_b6tvcm_vuoexf.webp"
              alt="Chef 1"
              className="drop-shadow-2xl w-[120px] sm:w-[160px] md:w-[240px] lg:w-[350px] xl:w-[400px] rounded-lg"
              style={{
                x: xImg5,
                y: yImg5,
                rotate: rotateImg5,
                scale: scaleImg5,
                opacity,
              }}
            />

            {/* Image 6 - Right */}
            <motion.img
              src="https://res.cloudinary.com/dhebgz7qh/image/upload/v1772101613/5_ftc11d_roq4cv.webp"
              alt="Chef 2"
              className="drop-shadow-2xl w-[120px] sm:w-[160px] md:w-[240px] lg:w-[350px] xl:w-[400px] rounded-lg"
              style={{
                x: xImg6,
                y: yImg6,
                rotate: rotateImg6,
                scale: scaleImg6,
                opacity,
              }}
            />
          </div>

          {/* Image 8 - Bottom - متداخلة مع الصور الفوقانية */}
          <motion.img
            src="https://res.cloudinary.com/dhebgz7qh/image/upload/v1772101624/8_z4ctfl_uw4kmy.webp"
            alt="Restaurant banner"
            className="drop-shadow-2xl w-[200px] sm:w-[280px] md:w-[380px] lg:w-[450px] xl:w-[500px] rounded-lg -mt-16 sm:-mt-24 md:-mt-32 lg:-mt-56 xl:-mt-64"
            style={{
              y: yImg8,
              scale: scaleImg8,
              opacity,
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default ChefsSection2;
