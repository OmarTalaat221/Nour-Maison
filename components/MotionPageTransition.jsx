"use client";

import { memo } from "react";
import { motion, useReducedMotion } from "framer-motion";

const getPageVariants = (shouldReduceMotion) => {
    if (shouldReduceMotion) {
        return {
            initial: {
                opacity: 1,
                x: 0,
                scale: 1,
                rotate: 0,
            },
            animate: {
                opacity: 1,
                x: 0,
                scale: 1,
                rotate: 0,
            },
            exit: {
                opacity: 1,
                x: 0,
                scale: 1,
                rotate: 0,
            },
        };
    }

    return {
        initial: {
            opacity: 0,
            x: -100,
            scale: 0.9,
            rotate: -10,
        },
        animate: {
            opacity: 1,
            x: 0,
            scale: 1,
            rotate: 0,
            transition: {
                duration: 0.4,
                ease: [0.25, 0.1, 0.25, 1],
            },
        },
        exit: {
            opacity: 0,
            x: 100,
            scale: 0.9,
            rotate: 10,
            transition: {
                duration: 0.4,
                ease: "easeInOut",
            },
        },
    };
};

const MotionPageTransition = ({ children, pathname }) => {
    const shouldReduceMotion = useReducedMotion();
    const pageVariants = getPageVariants(shouldReduceMotion);

    return (
        <motion.div
            key={pathname}
            initial="initial"
            animate="animate"
            exit="exit"
            variants={pageVariants}
            style={{
                willChange: shouldReduceMotion ? "auto" : "transform, opacity",
                transformOrigin: "center center",
            }}
        >
            {children}
        </motion.div>
    );
};

export default memo(MotionPageTransition);