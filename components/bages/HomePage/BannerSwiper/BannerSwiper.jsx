import React, {useEffect, useMemo, useRef, useState} from "react";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
// import "swiper/css/navigation";
import "swiper/css";
import {Swiper, SwiperSlide} from "swiper/react";

import {
  Autoplay,
  Navigation,
  Pagination,
  EffectCoverflow,
  Parallax,
} from "swiper/modules";

import "./style.scss";
import SimpleParallax from "simple-parallax-js";
import ScrollXImage from "../../../../utils/ScrollXImage/ScrollXImage";
import {ScreenFitText} from "../../../../utils/ScreenFitText/ScreenFitText";
import {motion} from "framer-motion";
import {DrawCircleText} from "../../../../utils/DrawCircleText/DrawCircleText";
import BottomBg from "../../../../utils/bottomBg/BottomBg";
import {useMediaQuery} from "../../../../Hooks/GeneralHooks/useMediaQueries";

const BannerSwiper = () => {
  const swiperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const [animationKey, setAnimationKey] = useState(0); // Key to re-trigger animations
  const handleSlideChange = (e) => {
    setActiveIndex(e.activeIndex);
  };

  const containerVariants = {
    hidden: {opacity: 0},
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.3,
      },
    },
  };

  const childVariants = {
    hidden: {opacity: 0, y: 50},
    visible: {opacity: 1, y: 0, transition: {duration: 1}},
  };

  const textRevealVariants = {
    hidden: {y: "-100%", opacity: 0},
    visible: {
      y: 0,
      opacity: 1,
      transition: {duration: 0.5, ease: "easeOut"},
    },
  };

  const scrollImageVariants = {
    hidden: {opacity: 0, x: "-100%"},
    visible: {
      opacity: 1,
      x: 0,
      transition: {duration: 0.5, ease: "easeInOut"},
    },
  };

  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  };

  const smallScreen = useMediaQuery("(max-width: 991px)");

  return (
    <div className='!bg-fixed flex items-center justify-center min-h-lvh relative'>
      <div className='absolute inset-0'>
        <motion.img
          key={activeIndex}
          className=' opacity-1 lg:opacity-1  !h-screen  !object-fill !w-screen    '
          src={
            smallScreen
              ? "https://res.cloudinary.com/dbzn1y8rt/image/upload/f_auto,q_auto/v1740993770/mk7eelfwnkwcoyuh4hrt.png"
              : "https://res.cloudinary.com/dbzn1y8rt/image/upload/f_auto,q_auto/v1739195958/epsmbzu1evrskdc0sp52.png"
          }
          alt={"image"}
        />
      </div>
      <div className=' top-0 z-40 min-h-lvh !container '>
        <Swiper
          modules={[Pagination, EffectCoverflow]}
          effect='coverflow'
          coverflowEffect={{
            rotate: 30, // Rotation angle
            stretch: 0, // Spacing between slides
            depth: 100, // Perspective depth
            modifier: 2, // Effect intensity
            slideShadows: false, // Enable shadows
          }}
          navigation={true}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          // ref={swiperRef}
          onSlideChange={handleSlideChange}
          pagination={pagination}
          // direction="rtl"
          // slidesPerGroupSkip={4}
          slidesPerView={1}
          spaceBetween={100}
          fadeEffect={{
            crossFade: true, // Ensure smooth transition between slides
          }}
          loop={true} // Enable looping (optional)
          autoplay={{delay: 2000}} // Auto-slide every 3 seconds (optional)
          className=' home_swiper overflow-visible mx-auto'
        >
          {[
            "https://res.cloudinary.com/dbzn1y8rt/image/upload/f_auto,q_auto/v1739203606/mefgs0cxedk7nisok4xa.png",
            "https://res.cloudinary.com/dbzn1y8rt/image/upload/f_auto,q_auto/v1739203592/nl5zm5to02k1cvtqwt7r.png",
          ].map((item, index) => (
            <SwiperSlide className=' flex items-center justify-center relative'>
              <div className='banner_swiper min-h-lvh'>
                <div class='relative flex items-center  !w-full min-h-lvh'>
                  {/* <div class='absolute inset-0 bg-black bg-opacity-[.3]'></div> */}

                  <motion.div
                    className='absolute  inset-0  w-[clac(100%-500px)] h-full object-cover filter  flex  container'
                    key={activeIndex} // Key forces re-mounting of the entire animated container
                    variants={containerVariants}
                    initial='hidden'
                    animate='visible'
                  >
                    <motion.div
                      className=' p-10 lg:px-20 h-full w-full relative z-30 flex justify-center gap-2 lg:gap-2 flex-col'
                      variants={childVariants}
                    >
                      {/* <ScreenFitText className='outlined_text my-3' />

                      <motion.div
                        className='outlined_text my-3'
                        variants={textRevealVariants}
                      >
                        <ScreenFitText />
                      </motion.div> */}

                      <motion.main
                        className='text-white text-[20px] md:!text-[30px] text-center lg:text-start  lg:text-3xl tracking-wide font-oswald'
                        variants={childVariants}
                      >
                        WELCOME TO{" "}
                      </motion.main>

                      <motion.span
                        className='text-white  text-[45px] md:!text-[100px] text-center lg:text-start   lg:text-9xl font-oswald font-semibold lg:font-normal'
                        variants={textRevealVariants}
                      >
                        NOUR MAISON
                      </motion.span>

                      <motion.p
                        className='lg:text-7xl text-[20px] md:text-[30px] text-center  lg:text-start lg:w-[900px] text-offWhite mt-4 tracking-wide font-oswald'
                        variants={childVariants}
                      >
                        Where French Sophistication Meets The Bold
                      </motion.p>

                      <motion.div
                        className='absolute bottom-4 hidden lg:block'
                        variants={scrollImageVariants}
                      >
                        <ScrollXImage parentStyles={{}} isMoveable={true} />
                      </motion.div>
                    </motion.div>
                  </motion.div>
                  <div className='overlay hidden lg:block bg-transparent'>
                    <img
                      className='absolute  top-1/2 -translate-y-1/2 right-20 !w-[100px] !h-[100px] lg:!w-[500px] lg:!h-[500px]  object-contain  '
                      src={item}
                      alt=''
                    />
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default BannerSwiper;
