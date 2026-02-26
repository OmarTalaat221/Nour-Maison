// components/AfternoonTea/AfternoonTea.jsx
"use client";
import React, { useRef, useState } from "react";
import "./style.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCreative, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-creative";
import BranchesImage from "./../../../../utils/BranchesImage/BranchesImage";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

import TopBg from "./../../../../utils/topBg/TopBg";
import BottomBg from "./../../../../utils/bottomBg/BottomBg";
import { useMediaQuery } from "../../../../Hooks/GeneralHooks/useMediaQueries";
import FramerModal from "../../../InqueryModal";
import toast from "react-hot-toast";
import PaperPlaneSuccess from "../../../PaperPlaneSuccess/PaperPlaneSuccess";
import AfternoonTeaVideo from "../AfternoonTeaVideo/AfternoonTeaVideo";
import Link from "next/link";

const AfternoonTea = ({}) => {
  const [showInqueryModal, setShowInqueryModal] = useState(false);
  const [showPaperPlaneSuccess, setShowPaperPlaneSuccess] = useState(false);

  const { scrollYProgress } = useScroll();
  const mobileScreen = useMediaQuery("(max-width: 768px)");

  const rotateX = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    mobileScreen ? [0, 0, 0] : [100, 0, 10]
  );
  const rotateY = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    mobileScreen ? [0, 0, 0] : [-15, -5, 0]
  );
  const scale = useTransform(
    scrollYProgress,
    [0, 1],
    mobileScreen ? [1, 1] : [0.95, 1]
  );

  const smoothRotateX = useSpring(rotateX, {
    stiffness: 90,
    damping: 18,
  });
  const smoothRotateY = useSpring(rotateY, {
    stiffness: 90,
    damping: 18,
  });
  const smoothScale = useSpring(scale, {
    stiffness: 20,
    damping: 20,
  });

  // ✅ الصور - ممكن تضيف عليهم
  const images = [
    "https://res.cloudinary.com/dhebgz7qh/image/upload/v1767443803/ysw9lhrajjolqksohoce_kywsw0.jpg",
    "https://res.cloudinary.com/dhebgz7qh/image/upload/v1767443802/xvt7iw6wqrjw2ifcsxyk_mbwlqs.jpg",
    "https://res.cloudinary.com/dhebgz7qh/image/upload/v1767443791/bxalmi3bmvqrkry8htpq_vw0vmi.jpg",

    "https://res.cloudinary.com/dwwmvxxqh/image/upload/v1771933844/1_eiy1ry.webp",
    "https://res.cloudinary.com/dwwmvxxqh/image/upload/v1771936973/7_noazsf.webp",
    "https://res.cloudinary.com/dwwmvxxqh/image/upload/v1771937910/15_nk6kk7.webp",
    "https://res.cloudinary.com/dwwmvxxqh/image/upload/v1771938084/17_df3hfo.webp",
    "https://res.cloudinary.com/dwwmvxxqh/image/upload/v1771937367/10_lcutqg.webp",
    "https://res.cloudinary.com/dwwmvxxqh/image/upload/v1771936326/2_cew0ri.webp",
  ];

  const afternoonTea = {
    id: 1,
    title: "Afternoon Tea",
    description:
      "Join us for an experience that tastes like adventure and feels like love.",
    image:
      "https://res.cloudinary.com/dhebgz7qh/image/upload/v1767443802/xvt7iw6wqrjw2ifcsxyk_mbwlqs.jpg",
  };

  return (
    <section>
      <div
        className="relative mx-2 sm:mx-3 md:mx-4 lg:mx-5 mt-4 sm:mt-5 md:mt-6 overflow-hidden"
        style={{
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundImage: `
            linear-gradient(to right, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.4)),
            url("https://res.cloudinary.com/dhebgz7qh/image/upload/v1767443791/bznj0n2qms9qo0jxjvfc_rrmmu2.webp")
          `,
        }}
      >
        <TopBg />
        <BottomBg />
        <div
          className="sticky top-14 hidden sm:block"
          data-aos="fade-left"
          data-aos-delay="300"
        >
          <BranchesImage
            variant={"top-right"}
            width={700}
            className="opacity-65 right-[-30px] scale-100 sm:scale-125 lg:scale-150 origin-right"
          />
        </div>
        <div
          className="hidden sm:block"
          data-aos="fade-right"
          data-aos-delay="500"
        >
          <BranchesImage
            variant={"top-left"}
            className="top-6 scale-100 sm:scale-125 lg:scale-150"
          />
        </div>
        <div
          style={{ perspective: "1200px" }}
          className="my-6 sm:my-8 md:my-10"
        >
          <motion.div
            style={{
              rotateX: smoothRotateX,
              scale: smoothScale,
            }}
            id="afternoon-tea-content"
            className="w-[95%] sm:w-[92%] md:w-[90%] lg:max-w-[1000px] xl:max-w-[1200px] relative mx-auto my-6 sm:my-8 md:my-10"
          >
            <div className="shadow-xl rounded-2xl sm:rounded-3xl overflow-hidden mx-auto">
              {/* Product Information */}
              <section className="product-infomation">
                <div
                  className="flex flex-col lg:flex-row
                    order-1 lg:order-2 lg:mx-0 relative z-20 
                    backdrop-blur-md bg-white/20 rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg border border-white/30 sm:border-2 sm:border-white/50 text-green-900
                   bg-clip-padding backdrop-filter bg-opacity-20  
                    bg-gradient-to-br from-white/10 via-white/20 to-white/5"
                >
                  {/* Left: Video */}
                  <div className="w-full lg:w-1/2 p-3 xs:p-4 sm:p-5 md:p-6 lg:p-8 xl:p-10 flex">
                    <div className="w-full aspect-[4/3] md:aspect-auto md:h-full">
                      <AfternoonTeaVideo
                        videoSrc="https://res.cloudinary.com/dhebgz7qh/video/upload/v1772101467/afternoon_tea_section_menu_goocyq_balo8f.mp4"
                        poster="https://res.cloudinary.com/dhebgz7qh/image/upload/v1767443802/xvt7iw6wqrjw2ifcsxyk_mbwlqs.jpg"
                      />
                    </div>
                  </div>

                  {/* Right: Content */}
                  <div className="w-full lg:w-1/2 flex flex-col p-3 xs:p-4 sm:p-5 md:p-6 lg:p-8 xl:p-10">
                    {/* Title */}
                    <h2
                      style={{
                        textShadow: "#EDECE8 2px 2px 0px",
                      }}
                      className="font-seasons !font-normal text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:!text-6xl xl:!text-7xl !m-0 !p-0 text-logoGold drop-shadow-lg"
                    >
                      Afternoon Tea
                    </h2>

                    {/* Content */}
                    <section className="accordion mt-3 sm:mt-4 md:mt-6 flex-1 flex flex-col">
                      <div className="text-white flex-1">
                        <p
                          className="text-xs xs:text-sm sm:text-[14px] md:text-[15px] lg:text-base mb-2 xs:mb-3 sm:mb-4 ps-1 sm:ps-2 md:ps-3 font-lato leading-relaxed sm:leading-loose text-justify font-semibold"
                          data-aos="fade-left"
                          data-aos-delay="800"
                        >
                          Book your Afternoon Tea here at Nour Maison – £29.95
                          per person with Unlimited Tea Included.
                        </p>
                        <p
                          className="text-xs xs:text-sm sm:text-[14px] md:text-[15px] lg:text-base mb-2 xs:mb-3 sm:mb-4 ps-1 sm:ps-2 md:ps-3 font-lato leading-relaxed sm:leading-loose text-justify font-semibold"
                          data-aos="fade-left"
                          data-aos-delay="800"
                        >
                          At Nour Maison, we believe food is a bridge between
                          cultures – a language of love and warmth. Our
                          afternoon tea is a unique fusion of French pâtisserie
                          elegance and the soulful, time-honored flavors of the
                          Middle East.
                        </p>
                        <p
                          className="text-xs xs:text-sm sm:text-[14px] md:text-[15px] lg:text-base mb-2 xs:mb-3 sm:mb-4 ps-1 sm:ps-2 md:ps-3 font-lato leading-relaxed sm:leading-loose text-justify font-semibold hidden sm:block"
                          data-aos="fade-left"
                          data-aos-delay="800"
                        >
                          Each bite is a celebration of two worlds, inviting you
                          to savor the comfort of home with the thrill of new
                          discovery.
                        </p>
                        <p
                          className="text-xs sm:text-[14px] md:text-[15px] lg:text-base mb-2 sm:mb-4 ps-1 sm:ps-2 md:ps-3 font-lato leading-relaxed sm:leading-loose text-justify font-semibold hidden lg:block"
                          data-aos="fade-left"
                          data-aos-delay="800"
                        >
                          Join us for an experience that tastes like adventure
                          and feels like love.
                        </p>
                      </div>

                      {/* Book Now Button */}
                      <div
                        className="mt-3 sm:mt-4"
                        data-aos="fade-up"
                        data-aos-delay={400}
                      >
                        <Link
                          href="/afternoon-tea-booking"
                          aria-label="Book Afternoon Tea at Nour Maison"
                          title="Book Afternoon Tea - £29.95 per person"
                        >
                          <button className="button-border-anime !w-32 xs:!w-36 sm:!w-40 md:!w-44 lg:!w-52 xl:!w-60 !h-10 xs:!h-11 sm:!h-12 md:!h-14 lg:!h-16">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              aria-hidden="true"
                            >
                              <rect
                                className="border-anime !w-32 xs:!w-36 sm:!w-40 md:!w-44 lg:!w-52 xl:!w-60 !h-10 xs:!h-11 sm:!h-12 md:!h-14 lg:!h-16 !stroke-2 sm:!stroke-[3px] md:!stroke-[4px] !stroke-[#c16d2d]"
                                pathLength={100}
                              />
                            </svg>
                            <span className="txt-upload !text-white no-underline hover:no-underline text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl font-seasons">
                              Book Now
                            </span>
                          </button>
                        </Link>
                      </div>

                      {/* ✅ Swiper Gallery */}
                      <div
                        className="mt-4 sm:mt-6"
                        data-aos="fade-up"
                        data-aos-delay={600}
                      >
                        <Swiper
                          modules={[Autoplay]}
                          spaceBetween={8}
                          slidesPerView={3}
                          loop={true}
                          autoplay={{
                            delay: 2000,
                            disableOnInteraction: false,
                          }}
                          speed={800}
                          breakpoints={{
                            0: {
                              slidesPerView: 2,
                              spaceBetween: 6,
                            },
                            480: {
                              slidesPerView: 3,
                              spaceBetween: 8,
                            },
                            640: {
                              slidesPerView: 3,
                              spaceBetween: 10,
                            },
                            768: {
                              slidesPerView: 3,
                              spaceBetween: 12,
                            },
                            1024: {
                              slidesPerView: 3,
                              spaceBetween: 16,
                            },
                          }}
                          className="afternoon-tea-gallery-swiper"
                        >
                          {images.map((img, index) => (
                            <SwiperSlide key={index}>
                              <div
                                className="relative overflow-hidden rounded-md sm:rounded-lg md:rounded-xl shadow-md sm:shadow-lg 
                                  transition-all duration-300 hover:scale-105 hover:shadow-xl
                                  cursor-pointer group"
                              >
                                <div className="aspect-square w-full">
                                  <img
                                    loading="lazy"
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    src={img}
                                    alt={`Afternoon Tea Gallery - ${index + 1}`}
                                  />
                                </div>
                                {/* Overlay on hover */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                              </div>
                            </SwiperSlide>
                          ))}
                        </Swiper>
                      </div>
                    </section>
                  </div>
                </div>
              </section>
            </div>
          </motion.div>
        </div>
      </div>

      <FramerModal
        onSuccess={() => {
          toast.success("Inquiry sent successfully");
          setShowPaperPlaneSuccess(true);
          setShowInqueryModal(false);
        }}
        onFail={() => {
          toast.error("Inquiry failed");
          setShowPaperPlaneSuccess(false);
          setShowInqueryModal(false);
        }}
        event={afternoonTea}
        open={showInqueryModal}
        setOpen={() => setShowInqueryModal(false)}
      />

      <PaperPlaneSuccess
        text={"Inquiry sent successfully"}
        showOverlay={showPaperPlaneSuccess}
        setShowOverlay={setShowPaperPlaneSuccess}
      />
    </section>
  );
};

export default AfternoonTea;
