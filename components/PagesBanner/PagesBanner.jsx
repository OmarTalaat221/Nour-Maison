"use client";
import React, { useEffect, useMemo, useRef, useState } from "react";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css";
import "swiper/css/effect-fade";

import { Swiper, SwiperSlide } from "swiper/react";

import {
  Autoplay,
  Navigation,
  Pagination,
  EffectCoverflow,
  Parallax,
  EffectFade,
} from "swiper/modules";

import "./style.css";
import SimpleParallax from "simple-parallax-js";
import ScrollXImage from "../../utils/ScrollXImage/ScrollXImage";
import { motion } from "framer-motion";
import BottomBg from "../../utils/bottomBg/BottomBg";
import ScrollToBottomButton from "../../utils/ScrollToBottomButton/ScrollToBottomButton";
import { TypingEffect } from "../../utils/TypingEffect/TypingEffect";
import { Link } from "react-scroll";
import { detectMediaType } from "../../lib/functions";

const PagesBanner = ({
  images = [
    "https://res.cloudinary.com/dhebgz7qh/image/upload/v1767447622/f76djjyilyjfpzpjmryl_puk2vj.webp",
    "https://res.cloudinary.com/dhebgz7qh/image/upload/v1767447627/eo5sxlh0gym8drgtc32j_qiznnz.jpg",
    "https://res.cloudinary.com/dhebgz7qh/image/upload/v1767447622/f76djjyilyjfpzpjmryl_puk2vj.webp",
  ],
  title,
  slogan,
  scrollTo,
  bottomBg = true,
}) => {
  const swiperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const [animationKey, setAnimationKey] = useState(0); // Key to re-trigger animations

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleStop = () => {
    if (swiperRef.current) {
      swiperRef.current.autoplay.stop();
    }
  };
  const handleStart = () => {
    if (swiperRef.current) {
      swiperRef.current.autoplay.start();
    }
  };

  const handleSlideChange = (e) => {
    setActiveIndex(e.activeIndex);
    if (swiperRef.current) {
      setCurrentIndex(swiperRef.current.realIndex);
      setCurrentIndex(swiperRef.current.realIndex);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.3,
      },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  };

  const textRevealVariants = {
    hidden: { y: "-100%", opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const scrollImageVariants = {
    hidden: { opacity: 0, x: "-100%" },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, ease: "easeInOut" },
    },
  };

  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  };

  return (
    <div className="!bg-fixed h-[500px]  md:h-[600px] relative ">
      <Swiper
        modules={[Navigation, EffectFade, Pagination, Autoplay, Parallax]}
        effect="fade"
        centeredSlides={true}
        parallax={true} // Enable parallax effect
        // coverflowEffect={{
        //   rotate: 30, // Rotation angle
        //   stretch: 0, // Spacing between slides
        //   depth: 100, // Perspective depth
        //   modifier: 2, // Effect intensity
        //   slideShadows: true, // Enable shadows
        // }}
        navigation={false}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        ref={swiperRef}
        onSlideChange={handleSlideChange}
        pagination={pagination && false}
        // direction="rtl"

        // slidesPerGroupSkip={4}
        slidesPerView={1}
        fadeEffect={{ crossFade: true }}
        loop={true} // Enable looping (optional)
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        className=" overflow-visible h-full"
        // breakpoints={{
        //   1230: {
        //     slidesPerView: 10,
        //     spaceBetween: 15,
        //   },
        //   1024: {
        //     slidesPerView: 6,
        //     spaceBetween: 10,
        //   },
        //   768: {
        //     slidesPerView: 4,
        //     spaceBetween: 10,
        //   },
        //   600: {
        //     slidesPerView: 2.5,
        //     spaceBetween: 8,
        //   },
        //   480: {
        //     slidesPerView: 2,
        //     spaceBetween: 1,
        //   },
        //   370: {
        //     slidesPerView: 1.5,
        //     spaceBetween: 1,
        //   },
        //   0: {
        //     slidesPerView: 1,
        //     spaceBetween: 0,
        //   },
        // }}
      >
        {images.map((item, index) => (
          <SwiperSlide className=" flex h-full items-center justify-center relative">
            <div className="banner_swiper h-full">
              <div className="relative h-full  !w-full">
                {detectMediaType(item) == "image" ? (
                  <motion.img
                    fetchPriority="high"
                    loading="lazy"
                    key={activeIndex}
                    className="  inset-0 w-full h-full object-cover object-[0_60%] filter bg-top "
                    src={item}
                    alt={"image - " + index + 1}
                  />
                ) : (
                  <div className="relative w-full h-full">
                    <motion.video
                      fetchPriority="high"
                      loading="lazy"
                      src={item}
                      autoPlay
                      loop
                      playsInline
                      muted
                      className="absolute top-0 left-0 w-full h-full object-cover"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 1 }}
                    />
                  </div>
                )}
                <div className="absolute inset-0 bg-black bg-opacity-[.4] "></div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <motion.div
        // onMouseMove={() => handleStop()}
        // onMouseLeave={() => handleStart()}
        className="absolute z-10 inset-0 flex flex-col gap-6 justify-center items-center w-full px-4 sm:px-8 md:px-16"
        key={activeIndex} // Key forces re-mounting of the entire animated container
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="mt-auto mb-10 flex items-center gap-6 justify-center flex-col text-center">
          <h1
            data-aos="fade-up"
            className=" text-logoGold  font-seasons italic !font-bold text-4xl sm:text-5xl lg:text-6xl"
            style={{
              textShadow: "1px 1px 0px white",
            }}
          >
            {title ?? "All About Us"}
          </h1>
          <h2
            data-aos="fade-up"
            data-aos-delay="200"
            className="font-oswald text-white text-2xl md:text-4xl sm:text-5xl lg:text-7xl"
          >
            {slogan ?? "Behind the Scenes: Who We Are"}
          </h2>

          <Link
            href="/"
            style={{ textDecoration: "none" }}
            to={scrollTo ?? "none"}
            smooth={true}
            duration={500}
            spy={true}
            offset={-150}
            title="Scroll To Bottom"
            aria-label="Scroll to content below"
          >
            <div className="mt-8 md:mt-10">
              <ScrollToBottomButton />
            </div>
          </Link>
        </div>
      </motion.div>

      {bottomBg && <BottomBg />}
    </div>
  );
};

export default PagesBanner;
