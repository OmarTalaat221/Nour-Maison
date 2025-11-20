// components/PageTransition.js
"use client";
import { motion } from "framer-motion";
import { useRouter, usePathname } from "next/navigation";

const pageVariants = {
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
      ease: [0.25, 0.1, 0.25, 1], // Standard easing function
    },
  },
  exit: {
    opacity: 0,
    x: 100,
    scale: 0.9,
    rotate: 10,
    transition: { duration: 0.4, ease: "easeInOut" },
  },
};

const PageTransition = ({ children }) => {
  const router = useRouter();
  const location = usePathname();

  return (
    <>
      {location == "/" ? (
        children
      ) : (
        <motion.div
          key={location} // This ensures that the page transition will trigger when the path changes
          initial="initial"
          animate="animate"
          exit="exit"
          variants={pageVariants}
        >
          {children}
        </motion.div>
      )}
    </>
  );
};

export default PageTransition;
