"use client";

import { motion } from "framer-motion";
import { useRef, useState } from "react";

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      when: "beforeChildren",
      duration: 0.3,
    },
  },
};

const starVariants = {
  hidden: {
    scale: 0,
    opacity: 0,
    rotate: -180,
    y: -50,
  },
  show: {
    scale: [0, 1.3, 0.9, 1.1, 1],
    opacity: 1,
    rotate: 0,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
      scale: {
        times: [0, 0.4, 0.6, 0.8, 1],
        ease: "easeInOut",
      },
    },
  },
};

const glowVariants = {
  hidden: { scale: 0, opacity: 0 },
  show: {
    scale: [0, 1.5, 1],
    opacity: [0, 0.6, 0],
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

export default function RatingStars({
  rating = 4.6,
  max = 5,
  label = "Customer rating",
}) {
  const roundedRating = Math.round(rating * 2) / 2;
  const fullStars = Math.floor(roundedRating);
  const hasHalfStar = roundedRating - fullStars >= 0.5;
  const starsArray = Array.from({ length: max }, (_, i) => i + 1);

  const audioRefs = useRef([]);
  const [playedStars, setPlayedStars] = useState(new Set());

  // Create individual audio elements for each star
  if (audioRefs.current.length !== max) {
    audioRefs.current = Array(max)
      .fill(null)
      .map(() => null);
  }

  const handleStarAnimate = (index) => {
    if (playedStars.has(index)) return;

    const audio = audioRefs.current[index];
    if (audio) {
      audio.currentTime = 0;
      audio.play().catch(() => {
        // autoplay may be blocked
      });
      setPlayedStars((prev) => new Set([...prev, index]));
    }
  };

  return (
    <motion.div
      className="flex items-center gap-3"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.6 }}
      variants={containerVariants}
      aria-label={`${label}: ${rating} out of ${max}`}
    >
      {/* Multiple audio elements - one per star */}
      {starsArray.map((_, index) => (
        <audio
          key={`audio-${index}`}
          ref={(el) => (audioRefs.current[index] = el)}
          src="/images/preview (1).m4a"
          preload="auto"
        />
      ))}

      <div className="flex items-center gap-1">
        {starsArray.map((star, index) => {
          const isFull = star <= fullStars;
          const isHalf = !isFull && hasHalfStar && star === fullStars + 1;

          return (
            <motion.span
              key={star}
              variants={starVariants}
              className="relative"
              onAnimationComplete={() => handleStarAnimate(index)}
              whileHover={{ 
                scale: 1.2,
                rotate: [0, -10, 10, -10, 0],
                transition: { duration: 1 },
              }}
            >
              {/* Glow effect behind star */}
              <motion.div
                className="absolute inset-0 -z-10"
                variants={glowVariants}
                style={{
                  filter: "blur(12px)",
                  background:
                    isFull || isHalf
                      ? "radial-gradient(circle, rgba(255, 215, 0, 0.8) 0%, transparent 70%)"
                      : "transparent",
                }}
              />

              {/* Sparkle particles */}
              {(isFull || isHalf) && (
                <>
                  {[...Array(3)].map((_, i) => (
                    <motion.div
                      key={`sparkle-${i}`}
                      className="absolute w-1 h-1 bg-yellow-300 rounded-full"
                      initial={{ scale: 3, opacity: 0  }}
                      animate={{
                        scale: [0, 1, 0],
                        opacity: [0, 1, 0],
                        x: [0, (i - 1) * 20],
                        y: [0, -20 - i * 10],
                      }}
                      transition={{
                        duration: 0.8,
                        delay: 0.5 + index * 0.15,
                        ease: "easeOut",
                      }}
                      style={{
                        top: "50%",
                        left: "50%",
                      }}
                    />
                  ))}
                </>
              )}

              {/* Full or empty star */}
              {!isHalf && (
                <motion.svg
                  viewBox="0 0 24 24"
                  className={`h-7 w-7 ${
                    isFull ? "text-logoGold" : "text-gray-400"
                  }`}
                  aria-hidden="true"
                  animate={
                    isFull
                      ? {
                          filter: [
                            "drop-shadow(0 0 2px rgba(255, 215, 0, 0))",
                            "drop-shadow(0 0 8px rgba(255, 215, 0, 0.8))",
                            "drop-shadow(0 0 4px rgba(255, 215, 0, 0.6))",
                          ],
                        }
                      : {}
                  }
                  transition={{
                    duration: 0.9,
                    delay: 0.5 + index * 0.15,
                  }}
                >
                  <path
                    fill="currentColor"
                    d="M12 2.5l2.86 5.8 6.4.93-4.63 4.51 1.09 6.36L12 16.9l-5.72 3.1 1.09-6.36L2.74 9.23l6.4-.93L12 2.5z"
                  />
                </motion.svg>
              )}

              {/* Half star */}
              {isHalf && (
                <motion.svg
                  viewBox="0 0 24 24"
                  className="h-7 w-7 text-logoGold"
                  aria-hidden="true"
                  animate={{
                    filter: [
                      "drop-shadow(0 0 2px rgba(255, 215, 0, 0))",
                      "drop-shadow(0 0 8px rgba(255, 215, 0, 0.8))",
                      "drop-shadow(0 0 4px rgba(255, 215, 0, 0.6))",
                    ],
                  }}
                  transition={{
                    duration: 0.6,
                    delay: 0.3 + index * 0.15,
                  }}
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
}
