// components/pages/OurServices/OurServices.jsx
"use client";
import React, { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./style.scss";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import Tilt from "react-parallax-tilt";
import Framer_gallery from "../../../../utils/FramerGallery/FramerGallery";
import SectionTitle from "../../../SectionTitle/SectionTitle";
import BranchesImage from "../../../../utils/BranchesImage/BranchesImage";
import HappyMoments from "../../HappyMoments/HappyMoments";
import FramerModal from "../../../InqueryModal";
import { image } from "../../../../public/images";
import toast from "react-hot-toast";
import PaperPlaneSuccess from "../../../PaperPlaneSuccess/PaperPlaneSuccess";
import { useMediaQuery } from "../../../../Hooks/GeneralHooks/useMediaQueries";
import Link from "next/link";

const OurServices = () => {
  const [selectedService, setSelectedService] = useState(null);
  const [showOverlay, setShowOverlay] = useState(false);

  const afternoonTea = {
    id: 1,
    title: "Afternoon Tea",
    description:
      "Join us for an experience that tastes like adventure and feels like love.",
    image:
      "https://res.cloudinary.com/dhebgz7qh/image/upload/v1767451829/xvt7iw6wqrjw2ifcsxyk_dd0dap.jpg",
  };

  const services = [
    {
      id: 1,
      title: "Baby Shower",
      description:
        "Celebrate the arrival of your little one with a warm and beautifully arranged gathering.",
      image: "/images/babyShawer.png",
    },
    {
      id: 2,
      title: "Gender Reveal",
      description:
        "Create a magical moment to reveal your baby's gender with stunning decorations.",
      image: "/images/gender-reveal.png",
    },
    {
      id: 3,
      title: "Birthday Party",
      description:
        "Make your birthday celebration unforgettable with a fun-filled party.",
      image:
        "https://res.cloudinary.com/dhebgz7qh/image/upload/v1767451828/wx7yvxpnuhorzamdll4z_1_n0bcjo.webp",
    },
    {
      id: 4,
      title: "Anniversaries",
      description:
        "Mark your special milestone with an elegant celebration tailored for you.",
      image:
        "https://res.cloudinary.com/dhebgz7qh/image/upload/v1767451825/ga4mdhcqwbr2sqhdc7os_ogwrgw.webp",
    },
  ];

  const isMobile = useMediaQuery("(max-width: 768px)");

  return (
    <div className="mt-20 relative flex flex-col overflow-visible">
      <div className="">
        <BranchesImage
          variant={"top-right"}
          className={" opacity-30 md:opacity-100 "}
        />
      </div>
      <div className="">
        <BranchesImage
          variant={"top-left"}
          className={" w-[] top-6 opacity-30 md:opacity-100 "}
        />
      </div>
      <div className="w-full mx-auto z-10">
        <SectionTitle className={"!text-goldenOrange"}>
          Elegance <span className="font-tajawal">&</span> Events: Crafting
          Unforgettable Moments
        </SectionTitle>

        <div className="container !flex flex-col lg:flex-row h-full gap-4 relative z-20 mt-10 sm:mt-14 md:mt-20 !px-3 sm:!px-5">
          {/* ✅ Afternoon Tea Card - يكون بنفس ارتفاع الصفين */}
          <Tilt
            className="background-stripes parallax-effect-glare-scale lg:self-stretch"
            perspective={5000}
            glareEnable={!isMobile}
            tiltEnable={!isMobile}
            glareMaxOpacity={0.45}
            scale={1.02}
          >
            <div className="relative w-full lg:!w-[380px] xl:!w-[420px] h-full">
              <div
                className="relative z-20 mx-auto hover:shadow-2xl transition-shadow duration-300 
                  w-full h-full rounded-xl bg-gradient-to-br from-dairyCream/25 to-dairyCream/80 
                  !border-[3px] border-softMintGreen/40 backdrop-blur-md backdrop-saturate-150 
                  shadow-lg ring-1 ring-white/10 flex flex-col"
              >
                {/* Video container - أكبر */}
                <div
                  className="relative w-full h-[280px] sm:h-[300px] overflow-hidden rounded-t-xl"
                  style={{ boxShadow: "-20px -20px 0 0 #599066" }}
                >
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover rounded-tr-[10px]"
                  >
                    <source
                      src="https://res.cloudinary.com/dhebgz7qh/video/upload/v1772101467/afternoon_tea_section_menu_goocyq_balo8f.mp4"
                      type="video/mp4"
                    />
                  </video>
                </div>

                {/* Content */}
                <div className="p-4 sm:p-5 md:p-6 rounded-b-xl">
                  <p className="text-sm sm:text-base md:text-lg text-softMintGreen font-medium font-nour text-center md:text-left">
                    01 Event
                  </p>
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-tangerine text-goldenOrange font-bold mt-1 text-center md:text-left">
                    Afternoon Tea
                  </h3>
                  <p className="text-gray-600 mt-2 text-xs sm:text-sm md:text-base font-medium text-center md:text-left">
                    Join us for an experience that tastes like adventure and
                    feels like love.
                  </p>

                  {/* ✅ Book Now Button */}
                  <div className="mt-3 flex justify-center md:justify-start">
                    <Link
                      href="/afternoon-tea-booking"
                      aria-label="Book Afternoon Tea at Nour Maison"
                      title="Book Afternoon Tea - £29.95 per person"
                    >
                      <button className="button-border-anime !w-24 xs:!w-28 sm:!w-32 md:!w-34 !h-8 xs:!h-9 sm:!h-10 md:!h-10">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          aria-hidden="true"
                        >
                          <rect
                            className="border-anime !w-24 xs:!w-28 sm:!w-32 md:!w-34 !h-8 xs:!h-9 sm:!h-10 md:!h-10 !stroke-2 !stroke-[#c16d2d]"
                            pathLength={100}
                          />
                        </svg>
                        <span className="txt-upload !text-logoGold hover:!text-white no-underline hover:no-underline text-xs xs:text-sm sm:text-base font-seasons">
                          Book Now
                        </span>
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </Tilt>

          {/* ✅ Other Services Grid - 2x2 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4 flex-1">
            {services.map((item, index) => (
              <Tilt
                key={index}
                className="background-stripes parallax-effect-glare-scale cursor-pointer h-full"
                perspective={1000}
                glareEnable={!isMobile}
                tiltEnable={!isMobile}
                glareMaxOpacity={0.45}
                scale={1.02}
              >
                <div
                  className="relative z-20 mx-auto p-3 sm:p-4 md:p-5 hover:shadow-2xl transition-shadow duration-300 
                    w-full h-full rounded-xl bg-gradient-to-br from-dairyCream/25 to-dairyCream/80 
                    !border-[3px] border-softMintGreen/40 backdrop-blur-md backdrop-saturate-150 
                    shadow-lg ring-1 ring-white/10 flex flex-col justify-between"
                >
                  <div>
                    <p className="text-sm sm:text-base md:text-lg text-softMintGreen font-medium font-nour text-center md:text-left">
                      {String(item.id + 1).padStart(2, "0")} Event
                    </p>
                    <h3 className="text-2xl sm:text-3xl md:text-4xl font-tangerine text-goldenOrange font-bold mt-1 text-center md:text-left">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 mt-2 text-xs sm:text-sm md:text-base leading-relaxed font-medium text-center md:text-left">
                      {item.description}
                    </p>
                  </div>

                  {/* ✅ Make Inquiry Button */}
                  <div className="mt-3 flex justify-center md:justify-start">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedService(item);
                      }}
                      className="button-border-anime !w-24 xs:!w-28 sm:!w-32 md:!w-34 !h-8 xs:!h-9 sm:!h-10 md:!h-10"
                      aria-label={`Make inquiry for ${item.title}`}
                      title={`Make inquiry for ${item.title}`}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                      >
                        <rect
                          className="border-anime !w-24 xs:!w-28 sm:!w-32 md:!w-34 !h-8 xs:!h-9 sm:!h-10 md:!h-10 !stroke-2 !stroke-[#c16d2d]"
                          pathLength={100}
                        />
                      </svg>
                      <span className="txt-upload !text-logoGold hover:!text-white no-underline hover:no-underline text-[10px] xs:text-xs sm:text-sm font-seasons whitespace-nowrap">
                        Make Inquiry
                      </span>
                    </button>
                  </div>
                </div>
              </Tilt>
            ))}
          </div>
        </div>
      </div>

      <FramerModal
        onSuccess={() => {
          toast.success("Inquiry sent successfully");
          setShowOverlay(true);
          setSelectedService(null);
        }}
        onFail={() => {
          toast.error("Inquiry failed");
          setShowOverlay(false);
          setSelectedService(null);
        }}
        event={selectedService}
        open={selectedService}
        setOpen={() => setSelectedService(null)}
      />

      <PaperPlaneSuccess
        text={"Inquiry sent successfully"}
        showOverlay={showOverlay}
        setShowOverlay={setShowOverlay}
      />
    </div>
  );
};

export default OurServices;
