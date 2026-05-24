"use client";

import { memo, useMemo } from "react";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      when: "beforeChildren",
      duration: 0.25,
    },
  },
};

const starVariants = {
  hidden: {
    scale: 0,
    opacity: 0,
    rotate: -120,
    y: -30,
  },
  show: {
    scale: [0, 1.25, 0.95, 1],
    opacity: 1,
    rotate: 0,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
      scale: {
        times: [0, 0.45, 0.75, 1],
        ease: "easeInOut",
      },
    },
  },
};

const RatingStars = ({ rating = 4.6, max = 5, label = "Customer rating" }) => {
  const roundedRating = Math.round(rating * 2) / 2;
  const fullStars = Math.floor(roundedRating);
  const hasHalfStar = roundedRating - fullStars >= 0.5;

  const starsArray = useMemo(
    () => Array.from({ length: max }, (_, i) => i + 1),
    [max],
  );

  return (
    <motion.div
      className="flex items-center gap-3"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.6 }}
      variants={containerVariants}
      aria-label={`${label}: ${rating} out of ${max}`}
    >
      <div className="flex items-center gap-1">
        {starsArray.map((star, index) => {
          const isFull = star <= fullStars;
          const isHalf = !isFull && hasHalfStar && star === fullStars + 1;

          return (
            <motion.span
              key={star}
              variants={starVariants}
              className="relative"
              whileHover={{
                scale: 1.2,
                rotate: [0, -10, 10, -10, 0],
                transition: { duration: 0.8 },
              }}
            >
              {(isFull || isHalf) && (
                <span
                  className="absolute inset-0 -z-10 rounded-full opacity-60"
                  style={{
                    background:
                      "radial-gradient(circle, rgba(255, 215, 0, 0.55) 0%, transparent 70%)",
                  }}
                />
              )}

              {!isHalf && (
                <motion.svg
                  viewBox="0 0 24 24"
                  className={`h-7 w-7 ${
                    isFull ? "text-logoGold" : "text-gray-400"
                  }`}
                  aria-hidden="true"
                >
                  <path
                    fill="currentColor"
                    d="M12 2.5l2.86 5.8 6.4.93-4.63 4.51 1.09 6.36L12 16.9l-5.72 3.1 1.09-6.36L2.74 9.23l6.4-.93L12 2.5z"
                  />
                </motion.svg>
              )}

              {isHalf && (
                <motion.svg
                  viewBox="0 0 24 24"
                  className="h-7 w-7 text-logoGold"
                  aria-hidden="true"
                >
                  <defs>
                    <linearGradient id={`half-grad-${index}`}>
                      <stop offset="50%" stopColor="currentColor" />
                      <stop offset="50%" stopColor="rgb(156, 163, 175)" />
                    </linearGradient>
                  </defs>
                  <path
                    d="M12 2.5l2.86 5.8 6.4.93-4.63 4.51 1.09 6.36L12 16.9l-5.72 3.1 1.09-6.36L2.74 9.23l6.4-.93L12 2.5z"
                    fill={`url(#half-grad-${index})`}
                  />
                </motion.svg>
              )}
            </motion.span>
          );
        })}
      </div>
    </motion.div>
  );
};

export default memo(RatingStars);
