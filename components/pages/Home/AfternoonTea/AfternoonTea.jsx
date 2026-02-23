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

const AfternoonTea = ({}) => {
  const [showInqueryModal, setShowInqueryModal] = useState(false);
  const [showPaperPlaneSuccess, setShowPaperPlaneSuccess] = useState(false);

  const { scrollYProgress } = useScroll();
  const mobileScreen = useMediaQuery("(max-width: 768px)");

  // Stronger perspective feel with wider rotation ranges
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

  // Spring smoothing for elegant animation
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

  const images = [
    "https://res.cloudinary.com/dhebgz7qh/image/upload/v1767443803/ysw9lhrajjolqksohoce_kywsw0.jpg",
    "https://res.cloudinary.com/dhebgz7qh/image/upload/v1767443802/xvt7iw6wqrjw2ifcsxyk_mbwlqs.jpg",
    "https://res.cloudinary.com/dhebgz7qh/image/upload/v1767443791/bxalmi3bmvqrkry8htpq_vw0vmi.jpg",
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
        className="relative md:backdrop:mx-5 mt-6 overflow-hidden"
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
          className="sticky top-14"
          data-aos="fade-left"
          data-aos-delay="300"
        >
          <BranchesImage
            variant={"top-right"}
            width={700}
            className={" opacity-65 right-[-30px] scale-150 origin-right "}
          />
        </div>
        <div className="" data-aos="fade-right" data-aos-delay="500">
          <BranchesImage
            variant={"top-left"}
            className={" w-[] top-6 scale-150  "}
          />
        </div>
        <div style={{ perspective: "1200px" }} className="my-10">
          <motion.div
            style={{
              rotateX: smoothRotateX,
              // rotateY: smoothRotateY,
              scale: smoothScale,
            }}
            id="afternoon-tea-content"
            className="lg:max-w-[1000px] xl:max-w-[1200px] relative mx-auto my-10"
          >
            <div className="shadow-xl rounded-[32px] overflow-hidden mx-auto">
              {/* Product Information */}
              <section className="product-infomation">
                <div
                  className="flex flex-col md:flex-row md:h-[calc(100vh-100px)] h-full
                    order-1 lg:order-2 lg:mx-0 relative z-20 
                    backdrop-blur-md bg-white/20 rounded-[32px] overflow-hidden shadow-lg border-2 border-white/50 text-green-900
                   bg-clip-padding backdrop-filter bg-opacity-20  
                    bg-gradient-to-br from-white/10 via-white/20 to-white/5"
                >
                  {/* Left: Video (replaced Swiper) */}
                  <div className="w-full md:w-1/2 h-[300px] sm:h-[350px] md:h-full p-5 sm:p-6 md:p-8 lg:p-10 !px-4 sm:!px-5">
                    {/* ✅ NEW: Video Component */}
                    <AfternoonTeaVideo
                      videoSrc="https://res.cloudinary.com/dkc5klynm/video/upload/v1771769055/afternoon_tea_section_menu_goocyq.mp4"
                      poster="https://res.cloudinary.com/dhebgz7qh/image/upload/v1767443802/xvt7iw6wqrjw2ifcsxyk_mbwlqs.jpg"
                    />

                    {/*                    <Swiper
                      style={{
                        borderRadius: "12px ",
                      }}
                      grabCursor={true}
                      effect={"creative"}
                      creativeEffect={{
                        prev: {
                          shadow: true,
                          translate: ["-20%", 0, -1],
                        },
                        next: {
                          translate: ["100%", 0, 0],
                        },
                      }}
                      modules={[EffectCreative, Autoplay, Pagination]}
                      loop={true}
                      autoplay={{ delay: 2000 }}
                      className="mySwiper3 shadow-2xl"
                    >
                      {images.map((img, index) => (
                        <SwiperSlide
                          key={index}
                          className="h-full"
                        >
                          <img
                            loading="lazy"
                            className="w-full h-full object-cover"
                            src={img}
                            alt={"afternoon tee  - " + index + 1}
                          />
                        </SwiperSlide>
                      ))}
                    </Swiper>
                    */}
                  </div>

                  {/* Right: Content */}
                  <div className="w-full md:w-1/2 flex flex-col">
                    <div className="p-5 sm:p-6 md:p-8 lg:p-10 !px-4 sm:!px-5 flex-1">
                      {/* Title */}
                      <h2
                        style={{
                          textShadow: " #EDECE8 2px 2px 0px",
                        }}
                        className="font-seasons !font-normal text-4xl sm:text-5xl md:!text-6xl lg:!text-7xl !m-0 !p-0 text-logoGold drop-shadow-lg"
                      >
                        Afternoon Tea
                      </h2>
                      <br />

                      {/* Accordion Content */}
                      <section className="accordion">
                        <ul className="text-white">
                          <p
                            className="!text-[14px] sm:!text-[15px] md:text-[16px] mb-4 sm:mb-5 md:mb-6 ps-2 sm:ps-3 font-lato leading-relaxed sm:leading-loose text-justify font-semibold"
                            data-aos="fade-left"
                            data-aos-delay="800"
                          >
                            Book your Afternoon Tea here at Nour Maison – £29.95
                            per person with Unlimited Tea Included.
                          </p>
                          <p
                            className="!text-[14px] sm:!text-[15px] md:text-[16px] mb-4 sm:mb-5 md:mb-6 ps-2 sm:ps-3 font-lato leading-relaxed sm:leading-loose text-justify font-semibold"
                            data-aos="fade-left"
                            data-aos-delay="800"
                          >
                            At Nour Maison, we believe food is a bridge between
                            cultures – a language of love and warmth. Our
                            afternoon tea is a unique fusion of French
                            pâtisserie elegance and the soulful, time-honored
                            flavors of the Middle East.
                          </p>
                          <p
                            className="!text-[14px] sm:!text-[15px] md:text-[16px] mb-4 sm:mb-5 md:mb-6 ps-2 sm:ps-3 font-lato leading-relaxed sm:leading-loose text-justify font-semibold hidden sm:block"
                            data-aos="fade-left"
                            data-aos-delay="800"
                          >
                            Each bite is a celebration of two worlds, inviting
                            you to savor the comfort of home with the thrill of
                            new discovery.
                          </p>
                          <p
                            className="!text-[14px] sm:!text-[15px] md:text-[16px] mb-4 sm:mb-5 md:mb-6 ps-2 sm:ps-3 font-lato leading-relaxed sm:leading-loose text-justify font-semibold hidden md:block"
                            data-aos="fade-left"
                            data-aos-delay="800"
                          >
                            Join us for an experience that tastes like adventure
                            and feels like love.
                          </p>
                        </ul>

                        {/* Make Inquiry Button */}
                        <div
                          className="mt-4 sm:mt-6"
                          data-aos="fade-up"
                          data-aos-delay={400}
                        >
                          <button className="button-border-anime !w-40 sm:!w-44 md:!w-52 lg:!w-60 !h-[3rem] sm:!h-[3.5rem] md:!h-[4rem]">
                            <svg xmlns="http://www.w3.org/2000/svg">
                              <rect
                                className="border-anime !w-40 sm:!w-44 md:!w-52 lg:!w-60 !h-[3rem] sm:!h-[3.5rem] md:!h-[4rem] !stroke-[3px] sm:!stroke-[4px] !stroke-[#c16d2d]"
                                pathLength={100}
                              />
                            </svg>
                            <div
                              onClick={() => setShowInqueryModal(true)}
                              className="txt-upload !text-white no-underline hover:no-underline text-lg sm:text-xl md:text-2xl font-seasons"
                            >
                              Make Inquiry
                            </div>
                          </button>
                        </div>

                        {/* ✅ NEW: Small Swiper below Make Inquiry button */}
                        <div
                          className="mt-6 sm:mt-8 md:mt-10"
                          data-aos="fade-up"
                          data-aos-delay={600}
                        >
                          <Swiper
                            style={{
                              borderRadius: "12px",
                            }}
                            grabCursor={true}
                            effect={"creative"}
                            creativeEffect={{
                              prev: {
                                shadow: true,
                                translate: ["-20%", 0, -1],
                              },
                              next: {
                                translate: ["100%", 0, 0],
                              },
                            }}
                            modules={[EffectCreative, Autoplay]}
                            loop={true}
                            autoplay={{
                              delay: 3000,
                              disableOnInteraction: false,
                            }}
                            className="afternoon-tea-mini-swiper shadow-xl"
                          >
                            {images.map((img, index) => (
                              <SwiperSlide
                                key={index}
                                className="!h-[120px] sm:!h-[140px] md:!h-[160px] lg:!h-[180px]"
                              >
                                <img
                                  loading="lazy"
                                  className="w-full h-full object-cover rounded-xl"
                                  src={img}
                                  alt={`Afternoon Tea Gallery - ${index + 1}`}
                                />
                              </SwiperSlide>
                            ))}
                          </Swiper>
                        </div>
                      </section>
                    </div>
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
