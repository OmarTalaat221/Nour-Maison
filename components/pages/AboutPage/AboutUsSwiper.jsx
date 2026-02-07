
"use client"

import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCreative, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-creative";

const AboutUsSwiper = ({ images }) => {
  return (
    <Swiper
      style={{
        borderRadius: "10px",
      }}
      grabCursor={true}
      effect={"creative"}
      creativeEffect={{
        prev: {
          shadow: true,
          translate: ["-20%", 0, -1],
        },
        next: {
          translate: ["100%", 0, 0],
        },
      }}
      modules={[EffectCreative, Autoplay, Pagination]}
      loop={true}
      autoplay={{ delay: 2000 }}
      className="mySwiper3"
    // pagination={true}
    >
      {images.map((img, index) => (
        <SwiperSlide
          key={index}
          // style={{
          //   borderRadius: "10px",
          // }}
          className=""
        >
          <img loading="lazy" className="!w-full !h-full object-cover" src={img} alt={`about-nour-maison-${index}`} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default AboutUsSwiper;
