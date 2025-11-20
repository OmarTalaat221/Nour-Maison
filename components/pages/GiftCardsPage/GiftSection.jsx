"use client";

import React, { useEffect, useState } from "react";
import GiftCard from "../../Cards/GiftCard/GiftCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./style.scss";
import { useRouter } from "next/compat/router";
import Link from "next/link";
const GiftSection = ({ category }) => {
  const slider = React.useRef(null);
  const [isClient, setIsClient] = useState(false); // Add state to track client-side rendering

  const swiperRef = React.useRef(null);

  const router = useRouter();

  return (
    <section className="GiftSection flex flex-col gap-4  px-3 md:px-[100px]">
      <h3 className="text-[35px] md:text-[40px]  font-bold text-softMintGreen font-tangerine">
        {category.category}
      </h3>
      <div className="lg:grid grid-cols-4 gap-6 hidden">
        {category &&
          category?.cards?.map((card, index) => (
            // <Link key={index} href={"/"}>
            // </Link>

            <GiftCard
              onClick={() =>
                (window.location.href = "/CreateGiftPage?card_id=" + card?.id)
              }
              item={card}
              key={index}
            />
          ))}
      </div>

      <div className="relative lg:!hidden ">
        <button
          aria-label="Previous slide"
          title="Previous slide"
          className={`custom-prev-${category?.id} bg-white text-softMintGreen !shadow-lg text-xl p-[10px] active:bg-sageGreen transition rounded-full absolute left-[-10px] z-30 top-[40%] -translate-y-1/2`}
        >
          <FaChevronLeft />
        </button>
        <Swiper
          ref={swiperRef}
          spaceBetween={10}
          loop={true} // Enables infinite scrolling
          navigation={{
            nextEl: `.custom-next-${category?.id}`,
            prevEl: `.custom-prev-${category?.id}`,
          }}
          pagination={{
            clickable: true, // Enables clickable pagination dots
          }}
          modules={[Navigation, Pagination, Autoplay]}
          className="mySwiper overflow-hidden !pb-10 giftcards-section-swiper"
          breakpoints={{
            0: { slidesPerView: 1 }, // 1 slide on very small screens
            320: { slidesPerView: 2 }, // 2 slides on small screens
            640: { slidesPerView: 3 }, // 3 slides on tablets
            1024: { slidesPerView: 3 }, // 3 slides on larger screens
          }}
        >
          {category &&
            category.cards?.map((card, index) => (
              <SwiperSlide key={index}>
                <GiftCard item={card} onClick={() =>
                (window.location.href = "/CreateGiftPage?card_id=" + card?.id)
              } />
              </SwiperSlide>
            ))}
        </Swiper>
        {/* Navigation Buttons */}
        <button
          aria-label="Next slide"
          title="Next slide"
          className={`custom-next-${category?.id}  bg-white text-softMintGreen !shadow-lg text-lg p-[10px] rounded-full absolute active:bg-sageGreen transition right-[-10px] z-30 top-[40%] -translate-y-1/2`}
        >
          <FaChevronRight />
        </button>
      </div>
    </section>
  );
};

export default GiftSection;
