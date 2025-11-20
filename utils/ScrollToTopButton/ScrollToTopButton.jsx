import React from "react";
import "./style.scss";
import {useEffect, useState} from "react";

import {motion} from "framer-motion";
const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({top: 0, behavior: "smooth"});
  };

  


  return (
    <motion.button
      onClick={scrollToTop}
      initial={{opacity: 0, scale: 0.5}}
      animate={{opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.5}}
      transition={{duration: 0.3}}
      className='to_top_button'
    >
      <svg viewBox='0 0 384 512' className='svgIcon'>
        <path d='M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z'></path>
      </svg>
    </motion.button>
  );
};

export default ScrollToTopButton;
