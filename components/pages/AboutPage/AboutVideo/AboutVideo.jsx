import React, {useEffect} from "react";
import {motion, AnimatePresence} from "framer-motion";
import "./style.css";
import {CgClose} from "react-icons/cg";

const variants = {
  enter: {
    opacity: 0,
    scale: 0.9,
  },
  center: {
    opacity: 1,
    scale: 1,
  },
  exit: {
    opacity: 0,
    scale: 0.9,
  },
};

const AboutVideo = ({open, setOpen, videoSrc}) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setOpen(false);
        document.body.style.overflow = "auto";
      }
    };

    if (open) {
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [open, setOpen]);

  return (
    open && (
      <div className="motion_gallery   !px-3 md:px-0">
        {/* Close Button */}
        <div className="!absolute !top-10 !right-10">
          <div
            className="relative z-[500] close text-white text-3xl cursor-pointer hover:scale-110"
            onClick={() => {
              setOpen(false);
              document.body.style.overflow = "auto";
            }}
          >
            <CgClose />
          </div>
        </div>

        <AnimatePresence>
          <motion.video
            key="video"
            className="rounded-lg  md:w-[80%] m-auto"
            src={videoSrc}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              opacity: {duration: 0.3},
              scale: {type: "spring", stiffness: 300, damping: 20},
            }}
            controls
            autoPlay
          />
        </AnimatePresence>
      </div>
    )
  );
};

export default AboutVideo;
