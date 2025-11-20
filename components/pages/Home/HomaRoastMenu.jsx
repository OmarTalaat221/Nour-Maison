"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import Button2 from "../../../utils/Button2/Button2";

const HomaRoastMenu = () => {
  const containerRef = useRef(null);

  // Track scroll for this section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"], // tweak if needed
  });

  // ===== IMAGE ANIMATIONS =====
  const rotateRaw = useTransform(scrollYProgress, [0, 0.5], [0, 30.5]);
  const scaleRaw = useTransform(scrollYProgress, [0, 0.5], [0.9, 1.5]);

  const springConfig = { stiffness: 120, damping: 18, mass: 0.8 };
  const rotate = useSpring(rotateRaw, springConfig);
  const scale = useSpring(scaleRaw, springConfig);

  // ===== TEXT SIDE ANIMATIONS =====
  const textYRaw = useTransform(scrollYProgress, [0, 0.5], [40, 0]);
  const textOpacityRaw = useTransform(scrollYProgress, [0, 0.3], [0, 1]);
  const textScaleRaw = useTransform(scrollYProgress, [0, 0.5], [0.9, 1.05]);
  const textRotateRaw = useTransform(scrollYProgress, [0, 0.5], [-3, 0]);

  const textY = useSpring(textYRaw, springConfig);
  const textOpacity = useSpring(textOpacityRaw, springConfig);
  const textScale = useSpring(textScaleRaw, springConfig);
  const textRotate = useSpring(textRotateRaw, springConfig);


    // ====== BRANCHES PARALLAX ======
  // Right branch (slides from right → center a bit + small rotate)
  const branchRightXRaw = useTransform(scrollYProgress, [0, 0.5], [120, 0]);
  const branchRightRotateRaw = useTransform(scrollYProgress, [0, 0.5], [8, 0]);
  const branchRightOpacityRaw = useTransform(scrollYProgress, [0, 0.2, 0.5], [0, 0.6, 0.5]);

  const branchRightX = useSpring(branchRightXRaw, springConfig);
  const branchRightRotate = useSpring(branchRightRotateRaw, springConfig);
  const branchRightOpacity = useSpring(branchRightOpacityRaw, springConfig);

  // Left branch (slides from left → center a bit + small rotate)
  const branchLeftXRaw = useTransform(scrollYProgress, [0, 0.5], [-120, 0]);
  const branchLeftRotateRaw = useTransform(scrollYProgress, [0, 0.5], [-8, 0]);
  const branchLeftOpacityRaw = useTransform(scrollYProgress, [0, 0.2, 0.5], [0, 0.6, 0.8]);

  const branchLeftX = useSpring(branchLeftXRaw, springConfig);
  const branchLeftRotate = useSpring(branchLeftRotateRaw, springConfig);
  const branchLeftOpacity = useSpring(branchLeftOpacityRaw, springConfig);

  return (
    <section ref={containerRef} className="py-10 sm:py-16 md:py-20 relative">
        <motion.img
        loading="lazy"
        draggable="false"
        className="select-none absolute right-0 top-[0] sm:top-[0] md:top-[0] w-[180px] sm:w-[250px] md:w-[300px] lg:w-[500px] drop-shadow-2xl"
        width={500}
        src="https://res.cloudinary.com/dbzn1y8rt/image/upload/v1745924807/ocbeg0zszow5hwba7l4z.webp"
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
        className="select-none absolute !rotate-180 !top-[200px] sm:top-[150px] md:!top-[0] left-0 w-[180px] sm:w-[250px] md:w-[300px] lg:w-[800px] drop-shadow-2xl"
        width={500}
        src="https://res.cloudinary.com/dbzn1y8rt/image/upload/v1745924807/ocbeg0zszow5hwba7l4z.webp"
        alt="Branch"
        style={{
          x: branchLeftX,
          rotate: branchLeftRotate,
          opacity: branchLeftOpacity,
        }}
      />
      <div className="mx-auto px-4 justify-center grid grid-cols-1 md:grid-cols-2">
        <motion.img
          src="/images/nour 25.png"
          alt="Homa Roast Menu"
          className="
          mx-auto
          mb-10
          md:mb-0
            w-full 
            max-w-xs 
            sm:max-w-md 
            md:max-w-lg 
            lg:max-w-2xl 
            xl:max-w-full 
            drop-shadow-2xl
          "
          style={{ rotate, scale }}
        />



        {/* TEXT Side with scroll animation + scale + slight rotation */}
        <motion.div
          className="space-y-6 text-center md:text-left"
          style={{
            y: textY,
            opacity: textOpacity,
            scale: textScale,
            rotate: textRotate,
          }}
        >
          <h1 style={{
            
          }} className="text-3xl sm:text-4xl lg:text-8xl font-oswald font-bold text-softMintGreen">
            <span style={{
              textShadow: "4px 5px 0px #5c5948",
            }}>
            Award-Winning Café/brasserie
            </span>
            <span className="block text-2xl !leading-loose text-logoGold">
              Crafted for Moments That Matter
            </span>
          </h1>

          <p className="text-sm leading-relaxed text-gray-900 sm:text-base">
            Nour Maison Brasserie has been crowned{" "}
            <span className="font-semibold">
              Best Café/brasserie Business / Café 2025
            </span>
            . Discover a roast menu where every blend is slow-crafted, layered
            with flavor, and poured to turn everyday Café/brasserie into a small
            celebration.
          </p>

          <div className="flex flex-wrap !pt-10 items-center justify-center gap-4 md:justify-start">
            <Button2 />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HomaRoastMenu;
