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
      <div className="w-full py-6   mx-auto">
        <div
          data-aos="fade-right"
          className="overflow-hidden container mt-8 flex flex-col md:flex-row justify-between gap-5 md:gap-10"
        >
          <div className="">
            <h5 className="text-5xl ms-3 font-tangerine text-center md:text-start text-whiteGray">
              Clients Feedbacks
            </h5>
            <h2 className="text-2xl font-seasons md:text-4xl font-semibold text-center md:text-start text-goldenOrange">
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
            <Link
              href="https://www.google.com/maps/place/Nour+Maison+Brasserie/@52.0386637,-0.7720548,17z/data=!4m8!3m7!1s0x4877018f7b0a551d:0x570f7d01f34256a4!8m2!3d52.0386637!4d-0.7720548!9m1!1b1!16s%2Fg%2F11rptmgvzw?entry=ttu&g_ep=EgoyMDI2MDExMy4wIKXMDSoKLDEwMDc5MjA2N0gBUAM%3D"
              target="_blank"
              rel="noreferrer"
              className="px-5 py-3  font-seasons  text-softMintGreen tracking-widest text-lg  hover:text-white border-2 border-softMintGreen hover:bg-softMintGreen hover:no-underline !font-black hover:opacity-90 transition"
            >
              Leave a Review
            </Link>

            <button className="custom-prev__15 !cursor-pointer p-5 rounded-full border-2 border-softMintGreen text-softMintGreen">
              <FaArrowLeftLong />
            </button>

            <button className="custom-next__15 p-5 rounded-full border-2 border-softMintGreen text-softMintGreen">
              <FaArrowRightLong />
            </button>
          </div>

        </div>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={10}
          slidesPerView={1}
          slidesOffsetBefore={50}
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
          className="overflow-visible  !h-full"
          data-aos="fade-up"
          data-aos-delay={100}
        >
          {reviews.reverse()?.map((rev, idx) => (
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
