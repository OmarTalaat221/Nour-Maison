"use client";
import React, { useState } from "react";
import SimpleParallax from "simple-parallax-js";
import { FaArrowLeftLong } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";
import Tilt from "react-parallax-tilt";
import Framer_gallery from "../../../../utils/FramerGallery/FramerGallery";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import SectionTitle from "../../../SectionTitle/SectionTitle";
import ChefCard from "../../../Cards/ChefCard/ChefCard";

const ChefsSectionSwiper = ({ chefs }) => {
  const slider = React.useRef(null);

  const swiperRef = React.useRef(null);

  const [openGallery, setOpenGallery] = useState(false);
  const [currentIndex, setCurrentIndex] = useState("0");
  const [selectedIndex, setSelectedIndex] = useState("");

  return (
    <Swiper
      modules={[Navigation]}
      navigation={{
        nextEl: ".custom-next__",
        prevEl: ".custom-prev__",
      }}
      lang="en"
      centeredSlides={chefs.length < 3}
      onSwiper={(swiper) => (swiperRef.current = swiper)}
      ref={swiperRef}
      // onSlideChange={handleSlideChange}
      pagination={true}
      // direction="rtl"
      loop={true}
      autoplay={{
        delay: 3000, // Time in milliseconds between slides (3 seconds)
        disableOnInteraction: false, // Continue autoplay after user interactions
      }}
      spaceBetween={20}
      // slidesPerGroupSkip={4}
      slidesPerView={4}
      className=" w-100 !py-4 overflow-visible"
      breakpoints={{
        1230: {
          slidesPerView: 4,
          spaceBetween: 15,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 10,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
        600: {
          slidesPerView: 1.5,
          spaceBetween: 8,
        },
        480: {
          slidesPerView: 1,
          spaceBetween: 5,
        },
        370: {
          slidesPerView: 1,
          spaceBetween: 5,
        },
        0: {
          slidesPerView: 1,
          spaceBetween: 0,
        },
      }}
    >
      {chefs && chefs.length >= 1 && Array.isArray(chefs)
        ? chefs?.map((item, index) => {
            return (
              <SwiperSlide className="flex items-center justify-center">
                <ChefCard item={item} />
              </SwiperSlide>
            );
          })
        : null}
    </Swiper>
  );
};

export default ChefsSectionSwiper;
