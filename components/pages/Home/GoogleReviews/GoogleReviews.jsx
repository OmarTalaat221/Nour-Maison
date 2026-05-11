"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Autoplay,
  EffectCoverflow,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import { FaArrowLeftLong, FaArrowRightLong, FaStar } from "react-icons/fa6";
import { FaGoogle, FaQuoteLeft } from "react-icons/fa";
import React from "react";
import Link from "next/link";
import { reviews } from "./data";
import AnimateSvg from "../../../AnimateSvg/AnimateSvg";
import "./google-reviews.scss";

const ModernReviewCard = ({ data }) => {
  return (
    <div className="group relative h-full bg-white border-2 border-pestachio rounded-2xl p-4 sm:p-5 lg:p-7 flex flex-col gap-3 sm:gap-4 lg:gap-5 transition-all duration-300 hover:border-softMintGreen hover:-translate-y-1 sm:hover:-translate-y-2 hover:shadow-xl">
      {/* Top Row */}
      <div className="flex items-start justify-between">
        <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-goldenOrange flex items-center justify-center group-hover:rotate-[-10deg] transition-transform duration-300 flex-shrink-0">
          <FaQuoteLeft className="text-white text-sm sm:text-lg" />
        </div>
        <div className="flex items-center gap-1 sm:gap-1.5 px-2 sm:px-3 py-1 sm:py-1.5 rounded-full bg-pestachio">
          <FaGoogle className="text-[10px] sm:text-xs text-softMintGreen" />
          <span className="text-[9px] sm:text-[10px] font-lato text-softMintGreen uppercase tracking-wider font-bold">
            Google
          </span>
        </div>
      </div>

      {/* Stars */}
      <div className="flex items-center gap-0.5 sm:gap-1">
        {[...Array(5)].map((_, i) => (
          <FaStar
            key={i}
            className={`text-xs sm:text-sm ${
              i < (data?.rating || 5) ? "text-goldenOrange" : "text-whiteGray"
            }`}
          />
        ))}
        <span className="ml-1.5 sm:ml-2 text-[10px] sm:text-xs font-lato text-whiteGray">
          {data?.rating || 5}.0
        </span>
      </div>

      {/* Review Text */}
      <p className="font-lato text-whiteGray text-xs sm:text-sm lg:text-base leading-relaxed line-clamp-4 sm:line-clamp-5 flex-1 min-h-[80px] sm:min-h-[100px]">
        {data?.text || data?.review || data?.comment}
      </p>

      {/* Divider */}
      <div className="h-px bg-pestachio" />

      {/* Author */}
      <div className="flex items-center gap-2.5 sm:gap-3 mt-auto">
        <div className="relative flex-shrink-0">
          {data?.image || data?.avatar ? (
            <img
              src={data?.image || data?.avatar}
              alt={data?.name || "Reviewer"}
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover border-2 border-goldenOrange"
              loading="lazy"
            />
          ) : (
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-goldenOrange flex items-center justify-center border-2 border-goldenOrange">
              <span className="font-seasons text-white text-base sm:text-lg font-bold uppercase">
                {(data?.name || "G")[0]}
              </span>
            </div>
          )}
          <span className="absolute bottom-0 right-0 w-2.5 h-2.5 sm:w-3 sm:h-3 bg-softMintGreen rounded-full border-2 border-white" />
        </div>

        <div className="flex-1 min-w-0">
          <h4 className="font-seasons text-goldenOrange text-xs sm:text-sm lg:text-base font-semibold truncate">
            {data?.name || "Anonymous"}
          </h4>
          <p className="font-lato text-whiteGray text-[10px] sm:text-xs truncate">
            {data?.date || data?.time || "Verified Customer"}
          </p>
        </div>
      </div>
    </div>
  );
};

const CircledText = ({
  children,
  color = "#84b067",
  hoverColor = "#dd9933",
}) => (
  <span className="circle-highlight-wrapper">
    <span className="relative z-10">{children}</span>
    <span className="circle-svg-wrapper">
      <AnimateSvg
        width="100%"
        height="100%"
        viewBox="0 0 250 80"
        path="M 125 8 C 60 8, 12 22, 12 40 C 12 58, 60 72, 125 72 C 190 72, 238 58, 238 40 C 238 22, 190 8, 125 8 Z"
        strokeColor={color}
        strokeWidth={3}
        strokeLinecap="round"
        animationDuration={1.8}
        animationDelay={0.3}
        animationBounce={0.2}
        triggerOnView={true}
        viewThreshold={0.3}
        enableHoverAnimation={true}
        hoverAnimationType="redraw"
        hoverStrokeColor={hoverColor}
      />
    </span>
  </span>
);

// ============================================
const GoogleReviews = () => {
  return (
    <div>
      <div className="w-full py-6 sm:py-8 md:py-12 lg:py-16 mx-auto google-reviews-section">
        {/* ✅ HEADER - محسّن للموبايل */}
        <div
          data-aos="fade-right"
          className="container mt-4 sm:mt-6 md:mt-8 px-4 sm:px-6 flex flex-col items-center md:items-start md:flex-row justify-between gap-4 sm:gap-5 md:gap-10 relative z-10"
        >
          <div className="text-center md:text-start">
            <h5 className="text-3xl sm:text-4xl lg:text-5xl font-tangerine text-whiteGray">
              <CircledText>Clients Feedbacks</CircledText>
            </h5>

            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-seasons font-semibold text-goldenOrange mt-1">
              What the Buzz Is About{" "}
              <Link
                href="blog"
                className="text-xs sm:text-sm font-lato !text-softMintGreen cursor-pointer hover:underline underline-offset-2"
              >
                Show More...
              </Link>
            </h2>
          </div>

          {/* ✅ Navigation buttons - أحجام محسّنة */}
          <div className="flex items-center gap-2 sm:gap-3 self-center md:self-end">
            <Link
              href="https://www.google.com/maps/place/Nour+Maison+Brasserie/@52.0386637,-0.7720548,17z/data=!4m8!3m7!1s0x4877018f7b0a551d:0x570f7d01f34256a4!8m2!3d52.0386637!4d-0.7720548!9m1!1b1!16s%2Fg%2F11rptmgvzw"
              target="_blank"
              rel="noreferrer"
              className="px-3 sm:px-5 py-2 sm:py-3 font-seasons text-softMintGreen tracking-wider sm:tracking-widest text-sm sm:text-base lg:text-lg hover:text-white border-2 border-softMintGreen hover:bg-softMintGreen hover:no-underline !font-black hover:opacity-90 transition whitespace-nowrap"
            >
              Leave a Review
            </Link>

            <button className="custom-prev__15 !cursor-pointer p-3 sm:p-4 lg:p-5 rounded-full border-2 border-softMintGreen text-softMintGreen hover:bg-softMintGreen hover:text-white transition flex-shrink-0">
              <FaArrowLeftLong className="text-sm sm:text-base" />
            </button>

            <button className="custom-next__15 !cursor-pointer p-3 sm:p-4 lg:p-5 rounded-full border-2 border-softMintGreen text-softMintGreen hover:bg-softMintGreen hover:text-white transition flex-shrink-0">
              <FaArrowRightLong className="text-sm sm:text-base" />
            </button>
          </div>
        </div>

        <div className="swiper-with-bg mt-2 sm:mt-0">
          <div className="reviews-bg-image" aria-hidden="true">
            <img src="/images/nour-maison-text.png" alt="" loading="lazy" />
          </div>

          {/* ✅ SWIPER - breakpoints محسّنة */}
          <Swiper
            modules={[Navigation, Pagination, Autoplay, EffectCoverflow]}
            effect="coverflow"
            centeredSlides={true}
            spaceBetween={0}
            slidesPerView={1.15}
            speed={800}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 100,
              modifier: 1.5,
              slideShadows: false,
            }}
            navigation={{
              nextEl: ".custom-next__15",
              prevEl: ".custom-prev__15",
            }}
            breakpoints={{
              480: {
                slidesPerView: 1.3,
                spaceBetween: 0,
                coverflowEffect: {
                  rotate: 0,
                  stretch: 0,
                  depth: 100,
                  modifier: 1.5,
                  slideShadows: false,
                },
              },
              640: {
                slidesPerView: 1.6,
                spaceBetween: 0,
                coverflowEffect: {
                  rotate: 0,
                  stretch: 0,
                  depth: 110,
                  modifier: 1.8,
                  slideShadows: false,
                },
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 0,
                coverflowEffect: {
                  rotate: 0,
                  stretch: 0,
                  depth: 120,
                  modifier: 2,
                  slideShadows: false,
                },
              },
              1024: {
                slidesPerView: 2.8,
                spaceBetween: 0,
                coverflowEffect: {
                  rotate: 0,
                  stretch: 0,
                  depth: 150,
                  modifier: 2,
                  slideShadows: false,
                },
              },
              1280: {
                slidesPerView: 3.2,
                spaceBetween: 0,
                coverflowEffect: {
                  rotate: 0,
                  stretch: 0,
                  depth: 180,
                  modifier: 2,
                  slideShadows: false,
                },
              },
              1536: {
                slidesPerView: 3.5,
                spaceBetween: 0,
                coverflowEffect: {
                  rotate: 0,
                  stretch: 0,
                  depth: 200,
                  modifier: 2,
                  slideShadows: false,
                },
              },
            }}
            loop={true}
            pagination={{
              clickable: true,
              dynamicBullets: true,
              dynamicMainBullets: 3,
            }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            grabCursor={true}
            className="reviews-swiper"
            data-aos="fade-up"
            data-aos-delay={100}
          >
            {[...reviews].reverse()?.map((rev, idx) => (
              <SwiperSlide key={idx} className="!h-auto">
                <ModernReviewCard data={rev} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default GoogleReviews;
