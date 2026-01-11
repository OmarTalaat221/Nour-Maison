import React, { useRef, useState } from "react";
import { DrawCircleText } from "./../../../utils/DrawCircleText/DrawCircleText";
import ButtonsLayers from "../../../utils/ButtonsLayers/ButtonsLayers";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import cx from "classnames";
import DraggableImages from "../../../utils/DraggableImageSlider/DraggableImageSlider";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css";

import {
  Autoplay,
  Navigation,
  Pagination,
  EffectCoverflow,
  Parallax,
} from "swiper/modules";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import SimpleParallax from "simple-parallax-js";
import TopBg from "./../../../utils/topBg/TopBg";

const AboutUsSection = () => {
  const swiperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const [animationKey, setAnimationKey] = useState(0); // Key to re-trigger animations
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
      className="grid    lg:grid  grid-cols-1 lg:grid-cols-2 relative overflow-hidden"
      ref={ref}
    >
      {/* swiper here */}

      <div className="w-full " data-aos="fade-down-right">
       
        <Swiper
          className=" !max-h-[600px] hs-full relative"
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
          // autoplay={{delay: 2000}} // Auto-slide every 3 seconds (optional)
        >
          <button
            // style={{
            //   opacity: activeIndex == 0 && "0.5",
            // }}
            className="custom-prev_1 absolute z-20  bottom-0 !right-20 -translate-y-1/2 "
          >
            <FaChevronLeft className=" slider_buttons bg-goldenOrange rounded-full" />
          </button>
          <button
            // style={{
            //   opacity: activeIndex == images.length - 1 && "0.5",
            // }}
            className="custom-next_1   absolute z-20 bottom-0 right-3 -translate-y-1/2"
          >
            {
              <FaChevronRight className=" slider_buttons bg-goldenOrange rounded-full " />
            }
          </button>

          {images.map((img, index) => (
            <SwiperSlide className="">
              <img
                className="w-full h-full object-cover  "
                src={img}
                alt={"Nour caffee - " + index + 1}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="relative flex flex-col bg-offWhite">
        <div
          className="flex items-center justify-center"
          data-aos="fade-down-left"
          data-aos-delay="500"
        >
          <div className="  p-5 md:p-20 md:py-10">
            <h6
              className=" uppercase font-oswald text-softMintGreen text-3xl"
              data-aos="fade-left"
              data-aos-delay="700"
            >
              <div className=" font-tangerine font-bold text-xl text-goldenOrange">
                {" "}
                About Us
              </div>
            </h6>
            <h2
              data-aos="fade-right"
              data-aos-delay="1000"
              className="  md:text-5xl font-bold mb-4 text-softMintGreen"
            >
              Why Choose Us
            </h2>
            <p
              className=" text-[15px] md:text-[17px] mb-6 ps-3 text-gray-600 "
              data-aos="fade-left"
              data-aos-delay="800 "
            >
              Welcome to Nour Maison, where French sophistication meets the
              bold, vibrant flavours of the Middle East. This isn’t just a
              restaurant; it’s a reflection of family, tradition, and heartfelt
              hospitality. Inspired by the founder’s daughter, “Nour” —
              symbolizing light and warmth — and combined with “Maison,” meaning
              house in French, our cafe is a warm, welcoming space that feels
              like home.
            </p>

            <ButtonsLayers
              onClick={() => (window.location.href = "/portfolio")}
              text={"LEARN MORE"}
            />
          </div>
        </div>
        <div className="grid w-full  mt-auto bottom-0 lg:grid grid-cols-3 ">
          {counterdata.map((item) => (
            <div
              className={cx(
                "  flex py-5 items-center gap-4 flex-col justify-center ",
                item.bg
              )}
            >
              <div className="text-2xl font-bold text-white font-oswald ">
                {item.value}
              </div>

              <p className="text-white font-semibold md:text-xl font-oswald ">
                {item.title}
              </p>
            </div>
          ))}
        </div>
      </div>
      <TopBg />
    </div>
  );
};

export default AboutUsSection;
