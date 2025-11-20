"use client";

import React from "react";

// Import Swiper styles

import "swiper/css";
import "swiper/css/effect-cards";
import { Swiper, SwiperSlide } from "swiper/react";

import { EffectCards, Autoplay, Navigation, Pagination } from "swiper/modules";
import PagesBanner from "../../../components/PagesBanner/PagesBanner";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import BranchesImage from "../../../utils/BranchesImage/BranchesImage";
import FancyboxElement from "../../../utils/FancyBox/FancyBox";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";


const MenuClient = () => {
  const slider = React.useRef(null);

  const swiperRef = React.useRef(null);

  const menus = [
    "https://res.cloudinary.com/dbzn1y8rt/image/upload/f_auto,q_auto/v1739278626/tbpe1yisrbrlihmupbni.jpg",
    "https://res.cloudinary.com/dbzn1y8rt/image/upload/f_auto,q_auto/v1739278610/t94wcew9ssug8vpdtvbs.jpg",
  ];

  const menus2 = [
    "https://res.cloudinary.com/dbzn1y8rt/image/upload/f_auto,q_auto/v1739278655/jpuklhijc9vofwlhiz4m.jpg",
    "https://res.cloudinary.com/dbzn1y8rt/image/upload/v1747138639/jegfgxa8lkbzf4y3cb9k.jpg",
  ]



  return (
    <div>
      <PagesBanner title={"Menu Gallery"} slogan={" "} scrollTo={"booking"} />

      <div className="relative">
        <FancyboxElement
          options={{
            Carousel: {
              infinite: false,
            },
          }}
        >
          <div className="" data-aos="fade-left" data-aos-delay="300">
            <BranchesImage
              variant={"top-right"}
              className={"w-[300px] md:w-auto "}
            />
          </div>
          <div className="" data-aos="fade-right" data-aos-delay="500">
            <BranchesImage
              variant={"top-left"}
              className={" w-[200px] md-w-auto top-6 "}
            />
          </div>
          <div className=" flex flex-row mt-10 gap-0 md:gap-3 mx-auto w-full max-w-6xl visible relative z-20  ">
            <div className="flex h-full my-auto">
              <button
                className=" !relative !z-[9999999999] custom-prev h-auto   !cursor-pointer text-xl !p-3 my-auto  bg-white shadow-lg   hover:bg-softMintGreen hover:text-white transition-all duration-500 rounded-full  text-softMintGreen "
                onClick={() => {
                  swiperRef.current?.slidePrev();
                }}
              >
                <FaChevronLeft className="text-2xl" />
              </button>
            </div>

            <Swiper
              navigation={{
                nextEl: ".custom-next",
                prevEl: ".custom-prev",
              }}
              ref={swiperRef}
              effect={"cards"}
              grabCursor={true}
              modules={[EffectCards, Navigation]}
              className=" !h-full !w-full !shadow-none"
            >
              {menus.map((item, index) => {
                return (
                  <SwiperSlide
                    key={index}
                    href={item}
                    data-fancybox="gallery"
                    className=" !w-full overflow-hidden "
                  >
                    <a href="">
                      <img
                        loading="lazy"
                        className="!object-contain !w-full "
                        src={item}
                        alt=""
                      />
                    </a>
                  </SwiperSlide>
                );
              })}
            </Swiper>
            <div className="flex h-full my-auto lg:translate-x-[40px] relative !z-[9999999999]">
              <button
                className=" custom-next bg-white shadow-lg   position-relative !p-3 rounded-full bottom-0 top-0 start-0   hover:bg-softMintGreen hover:text-white transition-all duration-500   text-softMintGreen "
                onClick={() => swiperRef.current?.slideNext()}
              >
                <FaChevronRight className="text-2xl" />
              </button>
            </div>
          </div>
        </FancyboxElement>
      </div>
      <div className="relative mt-20">
        {/* <AnimTitle data-aos='fade-down' data-aos-delay='300'>
          <div className=' font-tangerine text-6xl font-extrabold text-softMintGreen text-center  '>
          Dessert Menu
          </div>
        </AnimTitle> */}
        <SectionTitle noLeaves={true} className={"!text-5xl md:!text-6xl"}>
          {" "}
          Dessert Menu
        </SectionTitle>
        <FancyboxElement
          options={{
            Carousel: {
              infinite: false,
            },
          }}
        >
          <div className="" data-aos="fade-left" data-aos-delay="300">
            <BranchesImage variant={"top-right"} className={" "} />
          </div>
          <div className="" data-aos="fade-right" data-aos-delay="500">
            <BranchesImage variant={"top-left"} className={" w-[] top-6 "} />
          </div>
          <div className=" flex flex-row mt-10    mx-auto w-full max-w-6xl visible relative z-20  ">
            <div className="flex h-full my-auto">
              <button
                className=" !relative !z-[9999999999] custom-prev h-auto !bg-white shadow-lg   !cursor-pointer text-xl !p-3 my-auto    hover:!bg-softMintGreen  transition-all duration-500 rounded-full  text-softMintGreen "
                onClick={() => {
                  swiperRef.current?.slidePrev();
                }}
              >
                <FaChevronLeft className="text-2xl" />
              </button>
            </div>

            <Swiper
              navigation={{
                nextEl: ".custom-next",
                prevEl: ".custom-prev",
              }}
              ref={swiperRef}
              effect={"cards"}
              grabCursor={true}
              modules={[EffectCards, Navigation]}
              className=" !h-full !w-full !shadow-none"
            >
              {menus2.map((item, index) => {
                return (
                  <SwiperSlide
                    href={item}
                    data-fancybox="gallery"
                    className=" !w-full overflow-hidden "
                  >
                    <a href="">
                      <img
                        loading="lazy"
                        className="!object-contain !w-full "
                        src={item}
                        alt=""
                      />
                    </a>
                  </SwiperSlide>
                );
              })}
            </Swiper>

            <div className="flex h-full my-auto md:translate-x-[40px] !relative !z-[9999999999]">
              <button
                className=" custom-next !bg-white !text-softMintGreen  shadow-lg !relative !z-[9999999999] position-relative !p-3 rounded-full bottom-0 top-0 start-0  hover:!bg-softMintGreen hover:text-white transition-all duration-500  "
                onClick={() => swiperRef.current?.slideNext()}
              >
                <FaChevronRight className="text-2xl" />
              </button>
            </div>
          </div>
        </FancyboxElement>
      </div>
    </div>
  );
};

export default MenuClient;
