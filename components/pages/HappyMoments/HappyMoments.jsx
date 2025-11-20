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
  "https://res.cloudinary.com/dbzn1y8rt/image/upload/v1746444834/wx7yvxpnuhorzamdll4z.webp",
  "https://res.cloudinary.com/dbzn1y8rt/image/upload/v1746444925/xvv9gdzrqav3jwgx6j6m.webp",
  "https://res.cloudinary.com/dbzn1y8rt/image/upload/v1746444838/vlcxgm3mwg0nm5bfxqtp.webp",
  "https://res.cloudinary.com/dbzn1y8rt/image/upload/v1746444848/sjvctg5eayu7olg8dyal.webp",
  "https://res.cloudinary.com/dbzn1y8rt/image/upload/v1746444854/iixragagyik56yfd9c8p.webp",
  "https://res.cloudinary.com/dbzn1y8rt/image/upload/v1746444854/iixragagyik56yfd9c8p.webp",
  "https://res.cloudinary.com/dbzn1y8rt/image/upload/v1746444920/l1xuunwfxdhcywyharos.webp",
  "https://res.cloudinary.com/dbzn1y8rt/image/upload/v1746445326/c1d8ccewqatmvhcmlzei.webp",
  "https://res.cloudinary.com/dbzn1y8rt/image/upload/v1746445563/ga4mdhcqwbr2sqhdc7os.webp",
  "https://res.cloudinary.com/dbzn1y8rt/image/upload/v1746444904/rcudtzg6dkuyukfezowp.webp",
  "https://res.cloudinary.com/dbzn1y8rt/image/upload/v1746444898/yuz4ndz00ojqb9wlomhk.webp",
  "https://res.cloudinary.com/dbzn1y8rt/image/upload/v1746444907/ljfkamtlrkvhlmvm3pwp.webp",
  "https://res.cloudinary.com/dbzn1y8rt/image/upload/v1745663343/pgmv9wndeci5vmmduvtp.webp",
  "https://res.cloudinary.com/dbzn1y8rt/image/upload/v1745663516/ybrrcsa8rg83s7hqza9k.webp",
  "https://res.cloudinary.com/dbzn1y8rt/image/upload/v1745487109/wz8v83uwixxf93l6qtdq.webp",
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
