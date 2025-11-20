"use client"
import * as React from "react";
import {useState} from "react";
import {motion, AnimatePresence} from "framer-motion";
import {wrap} from "popmotion";
import "./style.scss";
import {FaArrowLeftLong, FaArrowRightLong} from "react-icons/fa6";
import {CgClose} from "react-icons/cg";


const variants = {
  enter: (direction) => {
    return {
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction) => {
    return {
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
};

const swipeConfidenceThreshold = 10000;
const swipePower = (offset, velocity) => {
  return Math.abs(offset) * velocity;
};

const Framer_gallery = ({open, setOpen, start = 0, images}) => {
  const [[page, direction], setPage] = useState([0, 0]);

  React.useEffect(() => {
    setPage([start, 0]);
  }, [start]);

  React.useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setOpen(false);
      } else if (event.key === "ArrowLeft") {
        // Add your logic for the left arrow key here
        paginate(-1);
      } else if (event.key === "ArrowRight") {
        // Add your logic for the right arrow key here
        paginate(1);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [page]);

  const imageIndex = wrap(0, images.length, page);
  const paginate = (newDirection) => {
    setPage([page + newDirection, newDirection]);
  };


  return (
    open && (
      <div className='motion_gallery !z-[999999999d]'>
        <AnimatePresence initial={false} custom={direction}>
          <div className='absolute top-10 right-10'>
            <div
              className='close text-white text-3xl cursor-pointer hover:scale-110'
              onClick={() => setOpen(false)}
            >
              <CgClose />
            </div>
          </div>

          <motion.img
            key={imageIndex}
            className='rounded-lg'
            src={images[imageIndex]}
            custom={direction}
            variants={variants}
            alt=""
            initial='enter'
            animate='center'
            exit='exit'
            transition={{
              x: {type: "spring", stiffness: 300, damping: 30},
              opacity: {duration: 0.2},
            }}
            drag='x'
            dragConstraints={{left: 0, right: 0}}
            dragElastic={1}
            onDragEnd={(e, {offset, velocity}) => {
              const swipe = swipePower(offset.x, velocity.x);

              if (swipe < -swipeConfidenceThreshold) {
                paginate(1);
              } else if (swipe > swipeConfidenceThreshold) {
                paginate(-1);
              }
            }}
          />
        </AnimatePresence>
        <div className='next' onClick={() => paginate(1)}>
          <FaArrowRightLong />
        </div>
        <div className='prev' onClick={() => paginate(-1)}>
          <FaArrowLeftLong />
        </div>
      </div>
    )
  );
};

export default Framer_gallery;
