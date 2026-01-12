"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import SectionTitle from "../../../SectionTitle/SectionTitle";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import React from "react";
import ReviewCard from "../../../Cards/ReviewCard/ReviewCard";
import Link from "next/link";
import { reviews } from "./data";

const GoogleReviews = () => {
  return (
    <div>
      <div className="w-full px-4 py-6 md:px-12  mx-auto">
        <div
          data-aos="fade-right"
          className="overflow-hidden container mt-8 flex flex-col md:flex-row justify-between gap-5 md:gap-10"
        >
          <div className="">
            <h5 className="text-5xl ms-3 font-tangerine text-center md:text-start">
              Clients Feedbacks
            </h5>
            <h2 className="text-2xl font-seasons md:text-4xl font-semibold text-center md:text-start text-goldenOrange font-lato">
              What the Buzz Is About{" "}
              <Link
                href="blog"
                className="text-sm font-lato !text-softMintGreen cursor-pointer hover:underline underline-offset-2"
              >
                Show More...
              </Link>
            </h2>
          </div>

          <div className="flex items-center mx-auto md:mx-0 gap-3 self-end place-self-end">
            <button
              className=" custom-prev__15  !cursor-pointer p-5 rounded-full border-2 border-softMintGreen text-softMintGreen "
              // onClick={() => {
              //   console.log(slider);
              //   swiperRef.current?.slidePrev();
              // }}
            >
              <FaArrowLeftLong />
            </button>
            <button
              className=" custom-next__15  position-relative bottom-0 top-0 start-0  p-5 rounded-full border-2 border-softMintGreen text-softMintGreen "
              // onClick={() => swiperRef.current?.slideNext()}
            >
              <FaArrowRightLong />
            </button>
          </div>
        </div>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          navigation={{
            nextEl: ".custom-next__15",
            prevEl: ".custom-prev__15",
          }}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3.5 },
          }}
          loop={true}
          pagination={{ clickable: true }}
          // autoplay={{ delay: 4000 }}
          className="overflow-visible !h-full"
          data-aos="fade-up"
          data-aos-delay={100}
        >
          {reviews?.map((rev, idx) => (
            <SwiperSlide key={idx} className="py-10 !h-full">
              <ReviewCard data={rev} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default GoogleReviews;
