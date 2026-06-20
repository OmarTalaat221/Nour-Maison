"use client";

import React, { memo, useMemo, useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useReducedMotion,
} from "framer-motion";
import { useMediaQuery } from "../../../../Hooks/GeneralHooks/useMediaQueries";

// ✅ SectionTitle بقى يقدر يكون h2 (نفس الاستايل بالظبط)
const SectionTitle = memo(({ children, className, id }) => (
  <h2
    id={id}
    className={`text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-8 ${className}`}
  >
    {children}
  </h2>
));

SectionTitle.displayName = "SectionTitle";

const branchImage =
  "https://res.cloudinary.com/dhebgz7qh/image/upload/v1767443795/ocbeg0zszow5hwba7l4z_hyrfsl.webp";

const chefImageOne =
  "https://res.cloudinary.com/dhebgz7qh/image/upload/v1772101591/6_b6tvcm_vuoexf.webp";

const chefImageTwo =
  "https://res.cloudinary.com/dhebgz7qh/image/upload/v1772101613/5_ftc11d_roq4cv.webp";

const restaurantBanner =
  "https://res.cloudinary.com/dhebgz7qh/image/upload/v1772101624/8_z4ctfl_uw4kmy.webp";

const ChefsSection2 = () => {
  const containerRef = useRef(null);
  const reduceMotion = useReducedMotion();

  const isSmall = useMediaQuery("(max-width: 640px)");
  const isMedium = useMediaQuery("(min-width: 641px) and (max-width: 1024px)");

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const springConfig = useMemo(
    () => ({ stiffness: 140, damping: 20, mass: 0.9 }),
    [],
  );

  const gpuStyle = useMemo(
    () => ({ willChange: "transform, opacity", transform: "translateZ(0)" }),
    [],
  );

  const getResponsiveValue = (small, medium, large) => {
    if (isSmall) return small;
    if (isMedium) return medium;
    return large;
  };

  const opacityRaw = useTransform(scrollYProgress, [0, 0.15, 0.5], [0, 0.8, 1]);
  const opacity = useSpring(opacityRaw, springConfig);

  const titleYRaw = useTransform(scrollYProgress, [0, 0.2], reduceMotion ? [0, 0] : [40, 0]);
  const titleOpacityRaw = useTransform(scrollYProgress, [0, 0.2], [0, 1]);
  const titleY = useSpring(titleYRaw, springConfig);
  const titleOpacity = useSpring(titleOpacityRaw, springConfig);

  const branchRightXRaw = useTransform(scrollYProgress, [0, 0.5], reduceMotion ? [0, 0] : [getResponsiveValue(60, 80, 120), 0]);
  const branchRightRotateRaw = useTransform(scrollYProgress, [0, 0.5], reduceMotion ? [0, 0] : [8, 0]);
  const branchRightOpacityRaw = useTransform(scrollYProgress, [0, 0.2, 0.5], [0, 0.6, 1]);
  const branchRightX = useSpring(branchRightXRaw, springConfig);
  const branchRightRotate = useSpring(branchRightRotateRaw, springConfig);
  const branchRightOpacity = useSpring(branchRightOpacityRaw, springConfig);

  const branchLeftXRaw = useTransform(scrollYProgress, [0, 0.5], reduceMotion ? [0, 0] : [getResponsiveValue(-60, -80, -120), 0]);
  const branchLeftRotateRaw = useTransform(scrollYProgress, [0, 0.5], reduceMotion ? [0, 0] : [-8, 0]);
  const branchLeftOpacityRaw = useTransform(scrollYProgress, [0, 0.2, 0.5], [0, 0.6, 1]);
  const branchLeftX = useSpring(branchLeftXRaw, springConfig);
  const branchLeftRotate = useSpring(branchLeftRotateRaw, springConfig);
  const branchLeftOpacity = useSpring(branchLeftOpacityRaw, springConfig);

  const xImg5Raw = useTransform(scrollYProgress, [0, 0.4], reduceMotion ? [0, 0] : [getResponsiveValue(-200, -350, -500), getResponsiveValue(-30, -80, -120)]);
  const yImg5Raw = useTransform(scrollYProgress, [0, 0.4], reduceMotion ? [0, 0] : [getResponsiveValue(50, 80, 100), 0]);
  const rotateImg5Raw = useTransform(scrollYProgress, [0, 0.4], reduceMotion ? [0, 0] : [getResponsiveValue(-20, -30, -42), 0]);
  const scaleImg5Raw = useTransform(scrollYProgress, [0, 0.4], reduceMotion ? [1, 1] : [getResponsiveValue(0.6, 0.5, 0.4), 1]);
  const xImg5 = useSpring(xImg5Raw, springConfig);
  const yImg5 = useSpring(yImg5Raw, springConfig);
  const rotateImg5 = useSpring(rotateImg5Raw, springConfig);
  const scaleImg5 = useSpring(scaleImg5Raw, springConfig);

  const xImg6Raw = useTransform(scrollYProgress, [0, 0.4], reduceMotion ? [0, 0] : [getResponsiveValue(200, 400, 600), getResponsiveValue(30, 80, 120)]);
  const yImg6Raw = useTransform(scrollYProgress, [0, 0.4], reduceMotion ? [0, 0] : [getResponsiveValue(60, 90, 120), 0]);
  const rotateImg6Raw = useTransform(scrollYProgress, [0, 0.4], reduceMotion ? [0, 0] : [getResponsiveValue(15, 22, 28), 0]);
  const scaleImg6Raw = useTransform(scrollYProgress, [0, 0.4], reduceMotion ? [1, 1] : [getResponsiveValue(0.85, 0.8, 0.75), 1]);
  const xImg6 = useSpring(xImg6Raw, springConfig);
  const yImg6 = useSpring(yImg6Raw, springConfig);
  const rotateImg6 = useSpring(rotateImg6Raw, springConfig);
  const scaleImg6 = useSpring(scaleImg6Raw, springConfig);

  const yImg8Raw = useTransform(scrollYProgress, [0, 0.4], reduceMotion ? [0, 0] : [getResponsiveValue(50, 80, 100), 0]);
  const scaleImg8Raw = useTransform(scrollYProgress, [0, 0.4], reduceMotion ? [1, 1] : [0.9, 1]);
  const yImg8 = useSpring(yImg8Raw, springConfig);
  const scaleImg8 = useSpring(scaleImg8Raw, springConfig);

  return (
    <section
      ref={containerRef}
      className="relative overflow-hidden py-8 sm:py-12 md:py-16"
      aria-labelledby="chefs-heading"
    >
      <motion.img
        loading="lazy"
        decoding="async"
        draggable="false"
        width={450}
        height={450}
        className="select-none absolute right-0 top-[80px] sm:top-[120px] md:top-[180px] lg:top-[200px] w-[120px] sm:w-[180px] md:w-[280px] lg:w-[450px] drop-shadow-2xl pointer-events-none"
        src={branchImage}
        alt=""
        aria-hidden="true"
        style={{ ...gpuStyle, x: branchRightX, rotate: branchRightRotate, opacity: branchRightOpacity }}
      />

      <motion.img
        loading="lazy"
        decoding="async"
        draggable="false"
        width={600}
        height={600}
        className="select-none absolute !rotate-180 !top-[200px] sm:top-[150px] md:!top-[260px] left-0 w-[180px] sm:w-[250px] md:w-[300px] lg:w-[600px] drop-shadow-2xl pointer-events-none"
        src={branchImage}
        alt=""
        aria-hidden="true"
        style={{ ...gpuStyle, x: branchLeftX, rotate: branchLeftRotate, opacity: branchLeftOpacity }}
      />

      <div className="container mx-auto max-w-6xl px-4 sm:px-6">
        <motion.div style={{ y: titleY, opacity: titleOpacity }}>
          {/* ✅ H2 keyword-rich (نفس الكلاسات بالظبط) */}
          <SectionTitle
            id="chefs-heading"
            className="!text-amber-600 text-3xl sm:text-4xl md:text-5xl lg:!text-7xl font-tangerine"
          >
            Meet Our Award-Winning Chefs in Milton Keynes
          </SectionTitle>
        </motion.div>

        <div className="relative mt-6 sm:mt-10 md:mt-16 lg:mt-20 flex flex-col items-center">
          <div className="relative flex items-center justify-center w-full">
            <motion.img
              loading="lazy"
              decoding="async"
              draggable="false"
              width={400}
              height={400}
              src={chefImageOne}
              alt="Award-winning chef at Nour Maison Milton Keynes"
              className="drop-shadow-2xl w-[120px] sm:w-[160px] md:w-[240px] lg:w-[350px] xl:w-[400px] rounded-lg"
              style={{ ...gpuStyle, x: xImg5, y: yImg5, rotate: rotateImg5, scale: scaleImg5, opacity }}
            />

            <motion.img
              loading="lazy"
              decoding="async"
              draggable="false"
              width={400}
              height={400}
              src={chefImageTwo}
              alt="Head chef at Nour Maison French Middle Eastern restaurant"
              className="drop-shadow-2xl w-[120px] sm:w-[160px] md:w-[240px] lg:w-[350px] xl:w-[400px] rounded-lg"
              style={{ ...gpuStyle, x: xImg6, y: yImg6, rotate: rotateImg6, scale: scaleImg6, opacity }}
            />
          </div>

          <motion.img
            loading="lazy"
            decoding="async"
            draggable="false"
            width={500}
            height={500}
            src={restaurantBanner}
            alt="Nour Maison restaurant banner Milton Keynes"
            className="drop-shadow-2xl w-[200px] sm:w-[280px] md:w-[380px] lg:w-[450px] xl:w-[500px] rounded-lg -mt-16 sm:-mt-24 md:-mt-32 lg:-mt-56 xl:-mt-64"
            style={{ ...gpuStyle, y: yImg8, scale: scaleImg8, opacity }}
          />
        </div>
      </div>
    </section>
  );
};

export default memo(ChefsSection2);