"use client";
import React, { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import BranchesImage from "../../../utils/BranchesImage/BranchesImage";
import Framer_gallery from "../../../utils/FramerGallery/FramerGallery";

const images = [
  "https://res.cloudinary.com/dhebgz7qh/image/upload/v1767451828/wx7yvxpnuhorzamdll4z_1_n0bcjo.webp",
  "https://res.cloudinary.com/dhebgz7qh/image/upload/v1767451830/xvv9gdzrqav3jwgx6j6m_wdalav.webp",
  "https://res.cloudinary.com/dhebgz7qh/image/upload/v1767451829/vlcxgm3mwg0nm5bfxqtp_uec67t.webp",
  "https://res.cloudinary.com/dhebgz7qh/image/upload/v1767451825/sjvctg5eayu7olg8dyal_ewkot9.webp",
  "https://res.cloudinary.com/dhebgz7qh/image/upload/v1767451822/iixragagyik56yfd9c8p_dnsdwb.webp",
  "https://res.cloudinary.com/dhebgz7qh/image/upload/v1767451822/iixragagyik56yfd9c8p_dnsdwb.webp",
  "https://res.cloudinary.com/dhebgz7qh/image/upload/v1767451822/l1xuunwfxdhcywyharos_twhu7m.webp",
  "https://res.cloudinary.com/dhebgz7qh/image/upload/v1767451823/c1d8ccewqatmvhcmlzei_dry2et.webp",
  "https://res.cloudinary.com/dhebgz7qh/image/upload/v1767451823/ga4mdhcqwbr2sqhdc7os_1_eahl9l.webp",
  "https://res.cloudinary.com/dhebgz7qh/image/upload/v1767451826/rcudtzg6dkuyukfezowp_xgozjw.webp",
  "https://res.cloudinary.com/dhebgz7qh/image/upload/v1767451831/yuz4ndz00ojqb9wlomhk_wmjngu.webp",
  "https://res.cloudinary.com/dhebgz7qh/image/upload/v1767451822/ljfkamtlrkvhlmvm3pwp_namc4e.webp",
  "https://res.cloudinary.com/dhebgz7qh/image/upload/v1767451824/pgmv9wndeci5vmmduvtp_timwzb.webp",
  "https://res.cloudinary.com/dhebgz7qh/image/upload/v1767451831/ybrrcsa8rg83s7hqza9k_kn3unw.webp",
  "https://res.cloudinary.com/dhebgz7qh/image/upload/v1767451831/wz8v83uwixxf93l6qtdq_kaempo.webp",
];

const HappyMoments = ({ withBg = false }) => {
  const swiperRef = useRef(null);

  const [openGallery, setOpenGallery] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState("");

  return (
    
    <>
      <div className={`${withBg ? "relative" : ""}`}>
        {withBg && (
          <>
            <div className="" data-aos="fade-left" data-aos-delay="300">
              <BranchesImage
                variant={"top-right"}
                className={" opacity-30 md:opacity-50 "}
              />
            </div>
            <div className="" data-aos="fade-right" data-aos-delay="500">
              <BranchesImage
                variant={"top-left"}
                className={" w-[] top-6 opacity-30 md:opacity-50 "}
              />
            </div>
          </>
        )}
        <div
          data-aos="fade-right"
          className="overflow-hidden container my-11 flex flex-col md:flex-row justify-between gap-5 md:gap-10"
        >
          <div className="">
            <h5 className="text-5xl ms-3 font-tangerine text-center md:text-start">
              Gallery
            </h5>
            <h2 className="text-2xl md:text-4xl font-semibold text-center md:text-start text-goldenOrange font-lato">
              Happy Moments
            </h2>
          </div>

          <div className="flex items-center mx-auto md:mx-0 gap-3">
            <button
              data-aos="fade-up"
              className="cursor-pointer custom-prev_10 p-5 rounded-full border-2 hover:bg-softMintGreen hover:text-white hover:!scale-110 !transition text-xl border-softMintGreen text-softMintGreen backdrop-blur-sm"
              onClick={() => swiperRef.current?.slidePrev()}
            >
              <FaArrowLeftLong />
            </button>
            <button
              data-aos="fade-down"
              className=" custom-next_10 cursor-pointer p-5 rounded-full border-2 hover:bg-softMintGreen hover:text-white hover:scale-110 !transition text-xl border-softMintGreen text-softMintGreen
                backdrop-blur-sm     
              "
              onClick={() => swiperRef.current?.slideNext()}
            >
              <FaArrowRightLong />
            </button>
          </div>
        </div>

        <div className="w-full container p-0 !pb-10 md:p-0">
          <Swiper
            ref={swiperRef}
            modules={[Navigation, Pagination, Autoplay]}
            navigation={{
              nextEl: ".custom-next_10",
              prevEl: ".custom-prev_10",
            }}
            spaceBetween={20} // Adds spacing between slides
            slidesPerView={7}
            loop={true}
            autoplay={{ delay: 1000 }}
            pagination={{ clickable: true }}
            className="!pb-10"
            breakpoints={{
              1440: { slidesPerView: 6 },
              1200: { slidesPerView: 4.5 },
              991: { slidesPerView: 5 },
              768: { slidesPerView: 4 },
              530: { slidesPerView: 3.5 },
              375: { slidesPerView: 2.5 },
              0: { slidesPerView: 2.5 },
            }}
          >
            {images.map((imag, index) => {
              let isDragging = false;

              return (
                <SwiperSlide key={index} className="cursor-pointer">
                  <img
                    title={imag}
                    alt={`moment-${index + 1}`}
                    loading="lazy"
                    data-aos="fade-up"
                    data-aos-delay={index * 100}
                    key={index}
                    onClick={() => {
                      setOpenGallery(true);
                      setSelectedIndex(index);
                    }}
                    className=" cursor-pointer  !w-[140px] !h-[140px] md:!w-[180px] md:!h-[180px] rounded-lg shadow-lg"
                    src={imag}
                  />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
        
      </div>
      <Framer_gallery
        images={images}
        open={openGallery}
        start={selectedIndex}
        setOpen={setOpenGallery}
      />
    </>
  );
};

export default HappyMoments;
