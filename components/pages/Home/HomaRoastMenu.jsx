"use client";

import React, { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useReducedMotion,
} from "framer-motion";
import Button2 from "../../../utils/Button2/Button2";

const HomaRoastMenu = () => {
  const containerRef = useRef(null);
  const reduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // ✅ Smooth the progress itself, then derive everything from it
  // ✅ Faster response (same animation mapping/behaviors)
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 220,
    damping: 16,
    mass: 0.45,
  });

  // ===== IMAGE ANIMATIONS (lighter) =====
  const rotate = useTransform(
    smoothProgress,
    [0, 0.5, .8],
    reduceMotion ? [0, 0, 0] : [0, 20, 32]
  );

  // ✅ Avoid huge scale jumps (expensive on big images)
  const scale = useTransform(
    smoothProgress,
    [0, 0.5 ,  .8],
    reduceMotion ? [1, 1] : [0.98, 1.14 , 1.3]
  );

  // ===== TEXT SIDE ANIMATIONS =====
  const textY = useTransform(
    smoothProgress,
    [0, 0.5 ,1],
    reduceMotion ? [0, 0 , 0] : [40, 24 , 0]
  );
  const textOpacity = useTransform(smoothProgress, [0, 0.25], [0, 1]);
  const textScale = useTransform(
    smoothProgress,
    [0, 0.5],
    reduceMotion ? [1, 1] : [0.98, 1.02]
  );
  const textRotate = useTransform(
    smoothProgress,
    [0, 0.5],
    reduceMotion ? [0, 0] : [-1.2, 0]
  );

  // ===== BRANCHES PARALLAX (lighter + fewer big moves) =====
  const branchRightX = useTransform(
    smoothProgress,
    [0, 0.5, 1],
    reduceMotion ? [0, 0, 0] : [100, 50 ,0]
  );
  const branchRightRotate = useTransform(
    smoothProgress,
    [0, 0.5 , 1],
    reduceMotion ? [0, 0] : [10, 5,  0]
  );
  const branchRightOpacity = useTransform(
    smoothProgress,
    [0, 0.2, 0.5],
    [0, 0.6, 0.5]
  );

  const branchLeftX = useTransform(
    smoothProgress,
    [0, 0.5],
    reduceMotion ? [0, 0] : [-70, 0]
  );
  const branchLeftRotate = useTransform(
    smoothProgress,
    [0, 0.5],
    reduceMotion ? [0, 0] : [-4, 0]
  );
  const branchLeftOpacity = useTransform(
    smoothProgress,
    [0, 0.2, 0.5],
    [0, 0.6, 0.85]
  );

  const gpuStyle = {
    willChange: "transform",
    transform: "translateZ(0)", // ✅ forces GPU layer in many cases
  };

  return (
    <section
      ref={containerRef}
      className="py-10 sm:py-16 md:py-20 relative overflow-hidden"
    >
      {/* Right branch */}
      <motion.img
        loading="lazy"
        decoding="async"
        draggable="false"
        className="select-none absolute right-0 top-0 w-[180px] sm:w-[250px] md:w-[300px] lg:w-[500px] drop-shadow-2xl pointer-events-none"
        width={500}
        src="https://res.cloudinary.com/dhebgz7qh/image/upload/v1767443795/ocbeg0zszow5hwba7l4z_hyrfsl.webp"
        alt="Branch"
        style={{
          ...gpuStyle,
          x: branchRightX,
          rotate: branchRightRotate,
          opacity: branchRightOpacity,
        }}
      />

      {/* Left branch */}
      <motion.img
        loading="lazy"
        decoding="async"
        draggable="false"
        className="select-none absolute left-0 !rotate-180 !top-[200px] sm:top-[150px] md:!top-[0] w-[180px] sm:w-[250px] md:w-[300px] lg:w-[800px] drop-shadow-2xl pointer-events-none"
        width={500}
        src="https://res.cloudinary.com/dhebgz7qh/image/upload/v1767443795/ocbeg0zszow5hwba7l4z_hyrfsl.webp"
        alt="Branch"
        style={{
          ...gpuStyle,
          x: branchLeftX,
          rotate: branchLeftRotate,
          opacity: branchLeftOpacity,
        }}
      />

      <div className="mx-auto px-4 justify-center grid grid-cols-1 md:grid-cols-2">
        <motion.img
          loading="lazy"
          decoding="async"
          src="https://res.cloudinary.com/dhebgz7qh/image/upload/v1767445430/nour_25_1_11zon_gxbeb1.png"
          alt="Homa Roast Menu"
          className="
            mx-auto mb-10 md:mb-0
            w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-2xl xl:max-w-full
            drop-shadow-2xl
            transform-gpu
          "
          style={{
            ...gpuStyle,
            rotate,
            scale,
          }}
        />

        <motion.div
          className="space-y-6 text-center md:text-left transform-gpu"
          style={{
            ...gpuStyle,
            y: textY,
            opacity: textOpacity,
            scale: textScale,
            rotate: textRotate,
          }}
        >
          <h1 className="text-3xl sm:text-4xl lg:text-8xl font-seasons  !font-extralight text-softMintGreen">
            <span style={{ textShadow: "1px 3px 0px #5c5948" }} className="font-bold">
              Award <span className="font-oswald">-</span>Winning Café <span className="font-oswald">/</span>brasserie
            </span>
            <span className="block text-2xl !leading-loose text-logoGold">
              Crafted for Moments That Matter
            </span>
          </h1>

          <p className="text-sm leading-relaxed text-gray-600  sm:text-base ">
            <strong>NOUR MAISON</strong> Brasserie has been crowned{" "}
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
