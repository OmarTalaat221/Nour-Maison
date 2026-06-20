"use client";

import React from "react";

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
    "/images/menu-brunch-coffee.webp",
    "/images/menu-food.webp",
  ];

  const menus2 = [
    "/images/menu-dessert.webp",
  ];

  return (
    <div className="overflow-x-hidden max-w-full">
      {/* ✅ useH1={true} - الـ banner يكون H1 على هذه الصفحة فقط */}
      <PagesBanner
        useH1={true}
        images={[
          "https://res.cloudinary.com/dhebgz7qh/video/upload/v1772101497/menu-gallery_menu-classic_jwdmr0_ntk29z.mp4",
        ]}
        title={"Menu Gallery"}
        slogan={""}
        scrollTo={"booking"}
      />

      {/* ✅ Section الأول - Brunch & Food Menus */}
      <section
        className="relative overflow-hidden"
        aria-labelledby="brunch-food-menu-heading"
      >
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

          {/* ✅ H2 جديد للسكشن - keyword-rich */}
          <SectionTitle
            as="h2"
            noLeaves={true}
            className={"!text-5xl md:!text-6xl mt-10 relative z-20"}
          >
            Brunch & Food Menu
          </SectionTitle>

          <div className=" flex flex-row mt-10 gap-0 md:gap-3 mx-auto w-full max-w-6xl visible relative z-20  ">
            <div className="flex h-full my-auto">
              <button
                className=" !relative !z-[9999999999] custom-prev h-auto   !cursor-pointer text-xl !p-3 my-auto  bg-white shadow-lg   hover:bg-softMintGreen hover:text-white transition-all duration-500 rounded-full  text-softMintGreen "
                onClick={() => {
                  swiperRef.current?.slidePrev();
                }}
                aria-label="Previous menu image"
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
                        alt={`Nour Maison brunch and food menu ${index + 1} - Halal French Middle Eastern in Milton Keynes`}
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
                aria-label="Next menu image"
              >
                <FaChevronRight className="text-2xl" />
              </button>
            </div>
          </div>
        </FancyboxElement>
      </section>

      {/* ✅ Section التاني - Dessert Menu */}
      <section
        className="relative mt-20 overflow-hidden"
        aria-labelledby="dessert-menu-heading"
      >
        {/* ✅ H2 keyword-rich */}
        <SectionTitle
          as="h2"
          noLeaves={true}
          className={"!text-5xl md:!text-6xl"}
          id="dessert-menu-heading"
        >
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

          <div className="flex justify-center mt-10 mx-auto w-full max-w-4xl px-4 relative z-20">
            <a
              href={menus2[0]}
              data-fancybox="gallery2"
              className="overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              aria-label="View Nour Maison Dessert Menu in full size"
            >
              <img
                loading="lazy"
                className="w-full h-auto object-contain hover:scale-105 transition-transform duration-300"
                src={menus2[0]}
                alt="Nour Maison Dessert Menu - Halal French and Middle Eastern desserts in Milton Keynes"
              />
            </a>
          </div>
        </FancyboxElement>
      </section>
    </div>
  );
};

export default MenuClient;