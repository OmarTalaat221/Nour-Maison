"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useMediaQuery } from "../../../../Hooks/GeneralHooks/useMediaQueries";

// Mock SectionTitle component
const SectionTitle = ({ children, className }) => (
  <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-8 ${className}`}>
    {children}
  </h2>
);

const ChefsSection2 = () => {
  const containerRef = useRef(null);

  // Scroll progress for this section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Shared spring config
  const springConfig = {
    stiffness: 140,
    damping: 20,
    mass: 0.9,
  };


  const smallScreans = useMediaQuery("(max-width: 768px)");

  // ====== GLOBAL OPACITY (for images) ======
  const opacityRaw = useTransform(scrollYProgress, [0, 0.15, 0.5], [0, 0.8, 1]);
  const opacity = useSpring(opacityRaw, springConfig);

  // ====== TITLE ANIMATION ======
  const titleYRaw = useTransform(scrollYProgress, [0, 0.2], [40, 0]);
  const titleOpacityRaw = useTransform(scrollYProgress, [0, 0.2], [0, 1]);

  const titleY = useSpring(titleYRaw, springConfig);
  const titleOpacity = useSpring(titleOpacityRaw, springConfig);

  // ====== BRANCHES PARALLAX ======
  // Right branch (slides from right → center a bit + small rotate)
  const branchRightXRaw = useTransform(scrollYProgress, [0, 0.5], [120, 0]);
  const branchRightRotateRaw = useTransform(scrollYProgress, [0, 0.5], [8, 0]);
  const branchRightOpacityRaw = useTransform(scrollYProgress, [0, 0.2, 0.5], [0, 0.6, 1]);

  const branchRightX = useSpring(branchRightXRaw, springConfig);
  const branchRightRotate = useSpring(branchRightRotateRaw, springConfig);
  const branchRightOpacity = useSpring(branchRightOpacityRaw, springConfig);

  // Left branch (slides from left → center a bit + small rotate)
  const branchLeftXRaw = useTransform(scrollYProgress, [0, 0.5], [-120, 0]);
  const branchLeftRotateRaw = useTransform(scrollYProgress, [0, 0.5], [-8, 0]);
  const branchLeftOpacityRaw = useTransform(scrollYProgress, [0, 0.2, 0.5], [0, 0.6, 1]);

  const branchLeftX = useSpring(branchLeftXRaw, springConfig);
  const branchLeftRotate = useSpring(branchLeftRotateRaw, springConfig);
  const branchLeftOpacity = useSpring(branchLeftOpacityRaw, springConfig);

  // ====== IMAGE 5 (left) - Responsive values ======
  const xImg5Raw = useTransform(scrollYProgress, [0, 0.40], [-500, smallScreans ? 60 : 120]);
  const yImg5Raw = useTransform(scrollYProgress, [0, 0.40], [100, 0]);
  const rotateImg5Raw = useTransform(scrollYProgress, [0, 0.40], [-42, 0]);
  const scaleImg5Raw = useTransform(scrollYProgress, [0, 0.40], [0.4, 1]);

  const xImg5 = useSpring(xImg5Raw, springConfig);
  const yImg5 = useSpring(yImg5Raw, springConfig);
  const rotateImg5 = useSpring(rotateImg5Raw, springConfig);
  const scaleImg5 = useSpring(scaleImg5Raw, springConfig);

  // ====== IMAGE 6 (middle, from bottom) ======
  const xImg6Raw = useTransform(scrollYProgress, [0, 0.40], [0, 0]);
  const yImg6Raw = useTransform(scrollYProgress, [0, 0.40], [350, -80]);
  const rotateImg6Raw = useTransform(scrollYProgress, [0, 0.40], [10, 0]);
  const scaleImg6Raw = useTransform(scrollYProgress, [0, 0.40], [0.8, 1]);

  const xImg6 = useSpring(xImg6Raw, springConfig);
  const yImg6 = useSpring(yImg6Raw, springConfig);
  const rotateImg6 = useSpring(rotateImg6Raw, springConfig);
  const scaleImg6 = useSpring(scaleImg6Raw, springConfig);

  // ====== IMAGE 7 (right) ======
  const xImg7Raw = useTransform(scrollYProgress, [0, 0.40], [600, smallScreans ? -45 : -100]);
  const yImg7Raw = useTransform(scrollYProgress, [0, 0.40], [80, 0]);
  const rotateImg7Raw = useTransform(scrollYProgress, [0, 0.40], [60, 0]);
  const scaleImg7Raw = useTransform(scrollYProgress, [0, 0.40], [0.8, 1]);

  const xImg7 = useSpring(xImg7Raw, springConfig);
  const yImg7 = useSpring(yImg7Raw, springConfig);
  const rotateImg7 = useSpring(rotateImg7Raw, springConfig);
  const scaleImg7 = useSpring(scaleImg7Raw, springConfig);

  // ====== IMAGE 8 (bottom banner) ======
  const yImg8Raw = useTransform(scrollYProgress, [0, 0.40], [180, smallScreans ?  -250 : -350]);
  const scaleImg8Raw = useTransform(scrollYProgress, [0, 0.40], [0.9, 1]);

  const yImg8 = useSpring(yImg8Raw, springConfig);
  const scaleImg8 = useSpring(scaleImg8Raw, springConfig);

  return (
    <section className="relative overflow-hidden  md:py-0">
      {/* Right branch with parallax */}
      <motion.img
        loading="lazy"
        draggable="false"
        className="select-none absolute right-0 top-[100px] sm:top-[150px] md:top-[200px] w-[180px] sm:w-[250px] md:w-[300px] lg:w-[500px] drop-shadow-2xl"
        width={500}
        src="https://res.cloudinary.com/dhebgz7qh/image/upload/v1767443795/ocbeg0zszow5hwba7l4z_hyrfsl.webp"
        alt="Branch"
        style={{
          x: branchRightX,
          rotate: branchRightRotate,
          opacity: branchRightOpacity,
        }}
      />

      {/* Left branch with parallax */}
      <motion.img
        loading="lazy"
        draggable="false"
        className="select-none absolute !rotate-180 !top-[200px] sm:top-[150px] md:!top-[260px] left-0 w-[180px] sm:w-[250px] md:w-[300px] lg:w-[600px] drop-shadow-2xl"
        width={500}
        src="https://res.cloudinary.com/dhebgz7qh/image/upload/v1767443795/ocbeg0zszow5hwba7l4z_hyrfsl.webp"
        alt="Branch"
        style={{
          x: branchLeftX,
          rotate: branchLeftRotate,
          opacity: branchLeftOpacity,
        }}
      />

      <div className="container mx-auto max-w-6xl px-4">
        {/* Section title with scroll-in animation */}
        <motion.div
          style={{
            y: titleY,
            opacity: titleOpacity,
          }}
        >
          <SectionTitle className={"!text-amber-600  text-4xl md:!text-7xl font-tangerine"}>
            The Faces Behind the Flavors
          </SectionTitle>
        </motion.div>

        <div
          ref={containerRef}
          className="relative h-[400px] sm:h-[500px] md:h-[600px] mt-10 md:mt-20 flex items-center justify-center"
        >
          {/* Image 5 - Left */}
          <motion.img
            src="/images/5.png"
            alt="Chef 1"
            className="drop-shadow-2xl w-[150px] sm:w-[200px] md:w-[280px] lg:w-[400px] rounded-lg"
            style={{
              x: xImg5,
              y: yImg5,
              rotate: rotateImg5,
              scale: scaleImg5,
              opacity,
            }}
          />

          {/* Image 6 - Center */}
          <motion.img
            src="/images/6.png"
            alt="Chef 2"
            className="drop-shadow-2xl w-[150px] sm:w-[200px] md:w-[280px] lg:w-[400px] rounded-lg"
            style={{
              x: xImg6,
              y: yImg6,
              rotate: rotateImg6,
              scale: scaleImg6,
              opacity,
            }}
          />

          {/* Image 7 - Right */}
          <motion.img
            src="/images/7.png"
            alt="Chef 3"
            className="drop-shadow-2xl w-[150px] sm:w-[200px] md:w-[280px] lg:w-[400px] rounded-lg"
            style={{
              x: xImg7,
              y: yImg7,
              rotate: rotateImg7,
              scale: scaleImg7,
              opacity,
            }}
          />
        </div>

        <div className="flex justify-center mt-8 md:mt-0">
          <motion.img
            src="/images/8.png"
            alt="Restaurant banner"
            className="drop-shadow-2xl w-[280px] sm:w-[350px] md:w-[450px] lg:w-[500px] rounded-lg"
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