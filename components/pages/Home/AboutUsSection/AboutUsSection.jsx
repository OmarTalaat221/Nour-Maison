"use client";

import React, { useRef, useState } from "react";
import ButtonsLayers from "../../../../utils/ButtonsLayers/ButtonsLayers";
// import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import cx from "classnames";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css";

import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import TopBg from "./../../../../utils/topBg/TopBg";
import CounterUp from "../../../elements/CounterUp";
import BottomBg from "../../../../utils/bottomBg/BottomBg";
import RatingStars from "../RatingWithSound";

const AboutUsSection = () => {
  const swiperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSlideChange = (e) => {
    setActiveIndex(e.activeIndex);
  };

  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  };

  const [ref, inView] = useInView({
    triggerOnce: true, // Ensures the animation runs only once
    threshold: 0.5, // Starts counting when 50% of the element is in view
  });

  const counterdata = [
    { id: 1, title: "Served Dishes", value: 5934, bg: "bg-softMintGreen" },
    { id: 2, title: "Served Customers", value: 9211, bg: "bg-goldenOrange " },
    { id: 3, title: "Our Rating", value: 4.7, bg: "bg-sageGreen" },
  ];


  const images = [
    "https://res.cloudinary.com/dhebgz7qh/image/upload/v1767443804/zexptzvrvwxbsvi8pqho_uwwxnb.jpg",
    "https://res.cloudinary.com/dhebgz7qh/image/upload/v1767443794/l2vsemfnzxd9rvtck24a_jzeww6.jpg",
    "https://res.cloudinary.com/dhebgz7qh/image/upload/v1767443801/t9noktexya7m7o2dtum4_hbidy9.jpg",
    "https://res.cloudinary.com/dhebgz7qh/image/upload/v1767443801/sdw9jufkrx0onoo2vwfp_wnzcjx.jpg",
    "https://res.cloudinary.com/dhebgz7qh/image/upload/v1767443802/kgkdwtofzolvzkb6oyh5_p6m5cg.jpg",
    "https://res.cloudinary.com/dhebgz7qh/image/upload/v1767444279/zmovmsobwahf2a353gxu_xdwksa.jpg",
  ];

  return (
    <div
      className="grid lg:grid  grid-cols-1 lg:grid-cols-2 relative overflow-hidden"
      ref={ref}
    >
      {/* swiper here */}

      <div className="w-full " data-aos="fade-down-right">
        <Swiper
          className=" !max-h-[600px] hs-full relative"
          // className='  hs-full relative'
          modules={[Navigation, Pagination, Autoplay]}
          centeredSlides={true}
          navigation={{
            nextEl: ".custom-next_1",
            prevEl: ".custom-prev_1",
          }}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          ref={swiperRef}
          onSlideChange={handleSlideChange}
          // direction="rtl"

          // slidesPerGroupSkip={4}
          slidesPerView={1}
          fadeEffect={{
            crossFade: true, // Ensure smooth transition between slides
          }}
          loop={true} // Enable looping (optional)
          autoplay={{ delay: 2000 }} // Auto-slide every 3 seconds (optional)
        >
          <button
            // style={{
            //   opacity: activeIndex == 0 && "0.5",
            // }}
            aria-label="Previous slide"
            title="Previous slide"
            className="custom-prev_1 absolute z-20  bottom-0 !right-20 -translate-y-1/2 "
          >
            <FaChevronLeft className=" slider_buttons bg-logoGold rounded-full" />
          </button>
          <button
            // style={{
            //   opacity: activeIndex == images.length - 1 && "0.5",
            // }}
            aria-label="Next slide"
            title="Next slide"
            className="custom-next_1   absolute z-20 bottom-0 right-3 -translate-y-1/2"
          >
            {
              <FaChevronRight className=" slider_buttons bg-logoGold rounded-full " />
            }
          </button>

          {images.map((img, index) => (
            <SwiperSlide key={index} className="">
              <img
                className="w-full h-full object-cover  "
                src={img}
                alt={`nour caffe - ${index + 1}`}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="relative flex flex-col  max-h-[730px] md:!max-h-[600px] overflow-auto">
        <div
          className="flex items-center justify-center"
          data-aos="fade-down-left"
          data-aos-delay="500"
        >
          <div className=" p-4  md:p-16  md:py-5">
            <h6
              className=" uppercase font-oswald text-softMintGreen !text-lg sm:!text-2xl md:!text-3xl"
              data-aos="fade-left"
              data-aos-delay="700"
            >
              {/* <div className=" font-tangerine font-bold text-xl text-goldenOrange">
                {" "}
                About Us
              </div> */}
            </h6>
            <h2
              data-aos="fade-right"
              data-aos-delay="1000"
              className="  text-2xl font-seasons md:text-5xl font-bold mb-2 md:mb-4 text-goldenOrange"
            >
              Why Choose Us
            </h2>
            <p
              className=" !text-[16px] text-whiteGray md:!text-[21px] mb-6 ps-3 font-lato leading-loose text-justify font-semibold "
              data-aos="fade-left"
              data-aos-delay="800 "
            >
              Welcome to Nour Maison, where French sophistication meets the
              bold, vibrant flavors of the Middle East. This isn’t just a
              restaurant — it’s a reflection of family, tradition, and heartfelt
              hospitality. Inspired by the founder’s daughter, Nour —
              symbolizing light and warmth — and combined with 'Maison,' meaning
              'house' in French, our café is a warm, welcoming space that feels
              like home
            </p>

            <ButtonsLayers
              href="/about-us"
              // onClick={() => (window.location.href = "")}
              text={"GET MORE ABOUT US"}
            />
          </div>
        </div>
        <div className="grid w-full  mt-auto bottom-0 grid-cols-2  lg:grid-cols-3 ">
          {counterdata.map((item, index) => (
            <div
              key={index}
              className={cx(
                "  flex  py-5 items-center gap-4 flex-col justify-center ",
                item.bg,
                item.id === 3 && "col-span-2 lg:col-span-1 !gap-2"
              )}
            >
              <div className="text-2xl font-bold text-white font-oswald ">
                <CounterUp end={item.value} />

                {/* {item.value} */}
              </div>
              {item.id === 3 && (
                <span className="text-2xl font-bold text-white !font-seasons">
                  <RatingStars rating={4.5} max={5} />
                </span>
              )}
              <p className="text-white  tracking-widest md:text-xl font-seasons ">
                {item.title}
              </p>
            </div>
          ))}
        </div>
      </div>
      <TopBg />
      <BottomBg />
    </div>
  );
};

export default AboutUsSection;
