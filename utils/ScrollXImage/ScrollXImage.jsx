"use client"

import React from "react";
import {motion, useScroll, useTransform, useSpring} from "framer-motion";

const ScrollXImage = ({
  parentStyels,
  parentProps,
  imagestyles,
  imageProps,
  src,
  isSscale,
  isOpacity,
  isMoveable,
  children,
}) => {
  // Get the current scroll position
  const {scrollY} = useScroll();

  // Map the scroll position to various animations
  const xScroll = useTransform(scrollY, [500, 0], [1000, 500]); // Base X movement
  const scale = useTransform(scrollY, [0, 500], [1, 1.5]); // Scale up
  const opacity = useTransform(scrollY, [0, 500], [1, 0.5]); // Fade out

  // Add an inertia-like effect by using a spring motion for X-axis
  const x = useSpring(xScroll, {
    stiffness: 80, // Reduce stiffness for smoother continuation
    damping: 40, // Lower damping for an inertia effect
    mass: 0.5, // Adjust for speed
  });

  return (
    <motion.div
      style={{
        width: "300px",
        height: "300px",
        x: isMoveable ? x : undefined, // Bind X-axis motion with inertia
        scale: isSscale ? scale : undefined, // Bind scaling effect
        opacity: isOpacity ? opacity : undefined, // Bind opacity change
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        ...parentStyels,
      }}
      transition={{
        type: "spring",
        stiffness: 500, // Increased stiffness for less bounce
        damping: 20, // Adjust damping for smoothness
      }}
      {...parentProps}
    >
      {children ? (
        children
      ) : (
        <img
          loading="lazy"
          className="opacity-80"
          src={
            src ||
            "https://html.tonatheme.com/2023/earls/assets/images/banner/banner-twig.png"
          } // Replace with your image URL
          alt='Moving Image'
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            ...imagestyles,
          }}
          {...imageProps}
        />
      )}
    </motion.div>
  );
};

export default ScrollXImage;
