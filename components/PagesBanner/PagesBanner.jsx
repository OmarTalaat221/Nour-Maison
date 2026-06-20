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

// ✅ Helper: يفحص لو الـ value فيها محتوى حقيقي
const hasRealContent = (value) => {
  // null أو undefined → فاضي
  if (value === null || value === undefined) return false;

  // String فاضي أو مساحات بس → فاضي
  if (typeof value === "string") {
    return value.trim().length > 0;
  }

  // Number → موجود
  if (typeof value === "number") return true;

  // Boolean → موجود
  if (typeof value === "boolean") return true;

  // React element → فاتش جوه الـ children
  if (React.isValidElement(value)) {
    const children = value.props?.children;

    // لو فاضي
    if (children === null || children === undefined) return false;

    // لو string فاضي
    if (typeof children === "string") return children.trim().length > 0;

    // لو array → فيه element واحد على الأقل فيه محتوى
    if (Array.isArray(children)) {
      return children.some((child) => hasRealContent(child));
    }

    // غير كده → اعتبره موجود
    return true;
  }

  // Array → فيه element واحد على الأقل
  if (Array.isArray(value)) {
    return value.some((item) => hasRealContent(item));
  }

  // أي حاجة تانية → موجود
  return true;
};

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
  useH1 = false, // ✅ default false عشان متأثرش على باقي الصفحات
}) => {
  const swiperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const [animationKey, setAnimationKey] = useState(0);
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

  // ✅ افحص لو فيه محتوى حقيقي في الـ title والـ slogan
  const showTitle = hasRealContent(title);
  const showSlogan = hasRealContent(slogan);

  return (
    <div className="!bg-fixed h-[500px]  md:h-[600px] relative ">
      <Swiper
        modules={[Navigation, EffectFade, Pagination, Parallax, Autoplay]}
        effect="fade"
        centeredSlides={true}
        parallax={true}
        navigation={false}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        ref={swiperRef}
        onSlideChange={handleSlideChange}
        pagination={pagination && false}
        slidesPerView={1}
        fadeEffect={{ crossFade: true }}
        loop={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        className=" overflow-visible h-full"
      >
        {images.map((item, index) => (
          <SwiperSlide
            key={index}
            className=" flex h-full items-center justify-center relative"
          >
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
        className="absolute z-10 inset-0 flex flex-col gap-6 justify-center items-center w-full px-4 sm:px-8 md:px-16"
        key={activeIndex}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="mt-auto mb-10 flex items-center gap-6 justify-center flex-col text-center">
          {/* ✅ التايتل - يتعرض فقط لو فيه محتوى حقيقي */}
          {showTitle && (
            <>
              {useH1 ? (
                <motion.h1
                  data-aos="fade-up"
                  className=" text-logoGold  font-seasons italic !font-bold text-4xl sm:text-5xl lg:text-6xl"
                  style={{
                    textShadow: "1px 1px 0px white",
                  }}
                >
                  {title}
                </motion.h1>
              ) : (
                <motion.div
                  data-aos="fade-up"
                  role="heading"
                  aria-level="2"
                  className=" text-logoGold  font-seasons italic !font-bold text-4xl sm:text-5xl lg:text-6xl"
                  style={{
                    textShadow: "1px 1px 0px white",
                  }}
                >
                  {title}
                </motion.div>
              )}
            </>
          )}

          {/* ✅ الـ Slogan - يتعرض فقط لو فيه محتوى حقيقي */}
          {showSlogan && (
            <>
              {useH1 ? (
                <motion.h2
                  data-aos="fade-up"
                  data-aos-delay="200"
                  className="font-oswald text-white text-2xl md:text-4xl sm:text-5xl lg:text-7xl"
                >
                  {slogan}
                </motion.h2>
              ) : (
                <motion.div
                  data-aos="fade-up"
                  data-aos-delay="200"
                  role="heading"
                  aria-level="3"
                  className="font-oswald text-white text-2xl md:text-4xl sm:text-5xl lg:text-7xl"
                >
                  {slogan}
                </motion.div>
              )}
            </>
          )}

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