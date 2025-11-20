"use client";
import React, { useEffect, useMemo, useRef, useState } from "react";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
// import "swiper/css/navigation";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";

import {
  Autoplay,
  Navigation,
  Pagination,
  EffectCoverflow,
  Parallax,
} from "swiper/modules";

import "./style.scss";
// import SimpleParallax from "simple-parallax-js";
import ScrollXImage from "../../../../utils/ScrollXImage/ScrollXImage";
// import {ScreenFitText} from "../../../../utils/ScreenFitText/ScreenFitText";
import { motion } from "framer-motion";
// import {DrawCircleText} from "../../../../utils/DrawCircleText/DrawCircleText";
import { useMediaQuery } from "../../../../Hooks/GeneralHooks/useMediaQueries";
import AnimButton from "../../../../utils/AnimButton/AnimButton";
import { useRouter } from "next/navigation";

const BannerSwiper = () => {
  const swiperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const router = useRouter();
  const navigate = (path) => {
    router.push(path);
  };
  const [animationKey, setAnimationKey] = useState(0); // Key to re-trigger animations
  const handleSlideChange = (e) => {
    setActiveIndex(e.activeIndex);
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

  const smallScreen = useMediaQuery("(max-width: 991px)");

  return (
    <div className="!bg-fixed home__ flex items-center justify-center !min-h-lvh h-screen !w-screen relative">
      <div className="absolute inset-0">
        <motion.img
          width="1600"
          height="900"
          key={activeIndex}
          className=" opacity-1 lg:opacity-1  !h-screen  !object-fill !w-screen    "
          alt="Hero Image"
          fetchPriority="high"
          src={
            smallScreen
              ? // ? "https://res.cloudinary.com/dbzn1y8rt/image/upload/v1745833135/snfgcnk3wvvpl2h1msob.webp"
                "https://res.cloudinary.com/dbzn1y8rt/image/upload/v1746026814/xcy7pz41wnk5qsseex7p.webp"
              : // : "https://res.cloudinary.com/dbzn1y8rt/image/upload/f_auto,q_auto/v1742717111/kke3rdzoqcj5xz5dnyov.webp"
                // "https://res.cloudinary.com/dbzn1y8rt/image/upload/f_auto,q_auto/v1744568463/gxkq6itrfuea3sjpqnee.webp"
                // "https://res.cloudinary.com/dbzn1y8rt/image/upload/v1745506457/coc5ewxprkfg73myjxpn.png"
                "https://res.cloudinary.com/dbzn1y8rt/image/upload/v1746026736/jnd1i37zypsinyyigm1o.webp"
            // "https://res.cloudinary.com/dbzn1y8rt/image/upload/v1745833038/xrxvl4q5lb8ubtnzmrij.webp"
          }
        />
      </div>
      <div className="w-full h-full  relative ">
        <Swiper
          modules={[EffectCoverflow, Navigation, Autoplay]}
          effect="coverflow"
          coverflowEffect={{
            // rotate: 30, // Rotation angle
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
          autoplay={{ delay: 2000 }} // Auto-slide every 3 seconds (optional)
          className=" home_swiper  mx-auto"
        >
          {[
            {
              image:
                "https://res.cloudinary.com/dbzn1y8rt/image/upload/v1746457700/tvw5ermawiyq0o5uspyg.webp",
              content: (
                <>
                  <motion.h1
                    className="text-white text-[20px] md:!text-[30px] text-center lg:text-start  lg:text-3xl tracking-wide font-oswald"
                    variants={childVariants}
                  >
                    WELCOME TO{" "}
                  </motion.h1>

                  <motion.strong
                    style={{
                      textShadow: "0 0 12px #5B562D",
                    }}
                    className="text-[#F1952E]  text-[45px] md:!text-[100px] text-center lg:text-start   lg:text-9xl font-oswald font-bold lg:font-normal"
                    variants={textRevealVariants}
                  >
                    NOUR MAISON
                  </motion.strong>

                  <motion.p
                    className="lg:text-4xl text-[20px] md:text-[25px] text-center  lg:text-start lg:w-[900px] text-offWhite mt-4 tracking-wide font-oswald"
                    variants={childVariants}
                  >
                    Where French sophistication meets the bold, vibrant flavors
                    of the Middle East
                  </motion.p>
                </>
              ),
            },
            {
              image:
                "https://res.cloudinary.com/dbzn1y8rt/image/upload/v1746457695/whdixjtugk4jqxkrue0l.webp",
              content: (
                <>
                  <motion.main
                    className="text-white text-[20px] md:!text-[30px] text-center lg:text-start  lg:text-3xl tracking-wide font-oswald"
                    variants={childVariants}
                  >
                    STEP INSIDE{" "}
                  </motion.main>

                  <motion.strong
                    style={{
                      textShadow: "0 0 12px #5B562D",
                    }}
                    className="text-[#F1952E]    text-[45px] md:!text-[100px] text-center lg:text-start   lg:text-9xl font-oswald font-semibold lg:font-normal"
                    variants={textRevealVariants}
                  >
                    NOUR MAISON
                  </motion.strong>

                  <motion.h2
                    className="lg:text-4xl text-[20px] md:text-[25px] text-center  lg:text-start lg:w-[900px] text-offWhite mt-4 tracking-wide font-oswald"
                    variants={childVariants}
                  >
                    Style Curated with Parisian Precision
                  </motion.h2>
                </>
              ),
            },
            {
              image:
                "https://res.cloudinary.com/dbzn1y8rt/image/upload/v1746457712/v6pek7zcf253vnw59iqf.webp",
              content: (
                <>
                  <motion.main
                    className="text-white text-[20px] md:!text-[30px] text-center lg:text-start  lg:text-3xl tracking-wide font-oswald"
                    variants={childVariants}
                  >
                    Bringing French &{" "}
                  </motion.main>

                  <motion.strong
                    style={{
                      textShadow: "0 0 12px #5B562D",
                    }}
                    className="text-[#F1952E]    text-[45px] md:!text-[100px] text-center lg:text-start   lg:text-9xl font-oswald font-semibold lg:font-normal"
                    variants={textRevealVariants}
                  >
                    Mediterranean Cuisine
                  </motion.strong>

                  <motion.h2
                    className="lg:text-4xl text-[20px] md:text-[25px] text-center  lg:text-start lg:w-[900px] text-offWhite mt-4 tracking-wide font-oswald"
                    variants={childVariants}
                  >
                    to Milton Keynes
                  </motion.h2>
                </>
              ),
            },
            {
              image: "/images/BUNNER NOUR (1).png",
              content: (
                <>
                  <motion.main
                    className="text-white text-[20px] md:!text-[30px] text-center lg:text-start  lg:text-3xl tracking-wide font-oswald"
                    variants={childVariants}
                  >
                    Premium Craft Drinks
                  </motion.main>

                  <motion.strong
                    style={{
                      textShadow: "0 0 12px #5B562D",
                    }}
                    className="text-[#F1952E]    text-[45px] md:!text-[100px] text-center lg:text-start   lg:text-9xl font-oswald font-semibold lg:font-normal"
                    variants={textRevealVariants}
                  >
                    Blending French Flavor {" "}
                  </motion.strong>

                  <motion.h2
                    className="lg:text-4xl text-[20px] md:text-[25px] text-center  lg:text-start lg:w-[900px] text-offWhite mt-4 tracking-wide font-oswald"
                    variants={childVariants}
                  >
                    with Mediterranean Freshness
                  </motion.h2>
                </>
              ),
            },
          ].map((item, index) => (
            <SwiperSlide className=" flex items-center justify-center relative">
              <div className="banner_swiper min-h-lvh">
                <div className="relative flex items-center  !w-full !h-full">
                  {/* <div className='absolute inset-0 bg-black bg-opacity-[.3]'></div> */}

                  <motion.div
                    className="absolute  inset-0  w-[clac(100%-500px)] h-full object-cover filter  flex  "
                    key={activeIndex} // Key forces re-mounting of the entire animated container
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                  >
                    <motion.div
                      className=" p-10 lg:px-20 h-full w-full relative z-30 flex justify-center gap-2 lg:gap-2 flex-col"
                      variants={childVariants}
                    >
                      {/* <ScreenFitText className='outlined_text my-3' />

                      <motion.div
                        className='outlined_text my-3'
                        variants={textRevealVariants}
                      >
                        <ScreenFitText />
                      </motion.div> */}
                      {item.content && item.content}
                    </motion.div>
                  </motion.div>
                  <div className="overlay hidden lg:block bg-transparent">
                    <img
                      loading="lazy"
                      className="absolute  top-1/2 -translate-y-1/2 right-20 !w-[100px] !h-[100px] lg:!w-[500px] lg:!h-[500px]  object-contain  "
                      src={item?.image}
                      alt="banner image"
                    />
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <motion.div
          className="absolute bottom-[-80px] hidden lg:block z-30"
          variants={scrollImageVariants}
        >
          <ScrollXImage
            src={
              "https://res.cloudinary.com/dbzn1y8rt/image/upload/f_auto,q_auto/v1744567770/nkp9h9cgxyotbvip7yuq.png"
            }
            parentStyles={{}}
            isMoveable={true}
          />
        </motion.div>
      </div>
    </div>
  );
};

export default BannerSwiper;
