"use client";

import React, { useState, useCallback, memo } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./style.scss";
import Tilt from "react-parallax-tilt";
import SectionTitle from "../../../SectionTitle/SectionTitle";
import BranchesImage from "../../../../utils/BranchesImage/BranchesImage";
import FramerModal from "../../../InqueryModal";
import toast from "react-hot-toast";
import PaperPlaneSuccess from "../../../PaperPlaneSuccess/PaperPlaneSuccess";
import { useMediaQuery } from "../../../../Hooks/GeneralHooks/useMediaQueries";
import Link from "next/link";

// ✅ Static data
const MAIN_SERVICES = [
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

const CUSTOM_EVENT = {
  id: 5,
  title: "Custom Event",
  description:
    "Have something unique in mind? Let us bring your vision to life with a fully personalized event experience.",
  image:
    "https://res.cloudinary.com/dhebgz7qh/image/upload/v1767451825/ga4mdhcqwbr2sqhdc7os_ogwrgw.webp",
};

// ✅ Tilt configs
const TILT_CONFIG = {
  perspective: 1000,
  glareMaxOpacity: 0.45,
  scale: 1.02,
};

const TILT_CONFIG_LARGE = {
  perspective: 5000,
  glareMaxOpacity: 0.45,
  scale: 1.02,
};

// ✅ Common card classes
const CARD_BASE_CLASSES =
  "relative z-20 mx-auto hover:shadow-2xl transition-shadow duration-300 w-full h-full rounded-xl bg-gradient-to-br from-dairyCream/25 to-dairyCream/80 !border-[3px] border-softMintGreen/40 backdrop-blur-md backdrop-saturate-150 shadow-lg ring-1 ring-white/10";

// ✅ Memoized Animated Border Button
const AnimatedBorderButton = memo(({ children, onClick, ariaLabel, title }) => (
  <button
    onClick={onClick}
    className="button-border-anime !w-24 xs:!w-28 sm:!w-32 md:!w-34 !h-8 xs:!h-9 sm:!h-10 md:!h-10"
    aria-label={ariaLabel}
    title={title}
  >
    <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <rect
        className="border-anime !w-24 xs:!w-28 sm:!w-32 md:!w-34 !h-8 xs:!h-9 sm:!h-10 md:!h-10 !stroke-2 !stroke-[#c16d2d]"
        pathLength={100}
      />
    </svg>
    <span className="txt-upload !text-logoGold hover:!text-white no-underline hover:no-underline text-[10px] xs:text-xs sm:text-sm font-seasons whitespace-nowrap">
      {children}
    </span>
  </button>
));
AnimatedBorderButton.displayName = "AnimatedBorderButton";

// ✅ Memoized Event Header
const EventHeader = memo(({ number, title }) => (
  <>
    <p className="text-sm sm:text-base md:text-lg text-softMintGreen font-medium font-nour text-center md:text-left">
      {String(number).padStart(2, "0")} Event
    </p>
    <h3 className="text-2xl sm:text-3xl md:text-4xl font-tangerine text-goldenOrange font-bold mt-1 text-center md:text-left">
      {title}
    </h3>
  </>
));
EventHeader.displayName = "EventHeader";

// ✅ Memoized Service Card
const ServiceCard = memo(({ item, isMobile, onInquiry }) => {
  const handleClick = useCallback(
    (e) => {
      e.stopPropagation();
      onInquiry(item);
    },
    [item, onInquiry]
  );

  return (
    <Tilt
      className="background-stripes parallax-effect-glare-scale cursor-pointer h-full"
      perspective={TILT_CONFIG.perspective}
      glareEnable={!isMobile}
      tiltEnable={!isMobile}
      glareMaxOpacity={TILT_CONFIG.glareMaxOpacity}
      scale={TILT_CONFIG.scale}
    >
      <div
        className={`${CARD_BASE_CLASSES} p-3 sm:p-4 md:p-5 flex flex-col justify-between`}
      >
        <div>
          <EventHeader number={item.id + 1} title={item.title} />
          <p className="text-gray-600 mt-2 text-xs sm:text-sm md:text-base leading-relaxed font-medium text-center md:text-left">
            {item.description}
          </p>
        </div>

        <div className="mt-3 flex justify-center md:justify-start">
          <AnimatedBorderButton
            onClick={handleClick}
            ariaLabel={`Make inquiry for ${item.title}`}
            title={`Make inquiry for ${item.title}`}
          >
            Make Inquiry
          </AnimatedBorderButton>
        </div>
      </div>
    </Tilt>
  );
});
ServiceCard.displayName = "ServiceCard";

// ✅ Memoized Afternoon Tea Card
const AfternoonTeaCard = memo(({ isMobile }) => (
  <Tilt
    className="background-stripes parallax-effect-glare-scale lg:self-stretch"
    perspective={TILT_CONFIG_LARGE.perspective}
    glareEnable={!isMobile}
    tiltEnable={!isMobile}
    glareMaxOpacity={TILT_CONFIG_LARGE.glareMaxOpacity}
    scale={TILT_CONFIG_LARGE.scale}
  >
    <div className="relative w-full lg:!w-[380px] xl:!w-[420px] h-full">
      <div className={`${CARD_BASE_CLASSES} flex flex-col`}>
        <div
          className="relative w-full h-[280px] sm:h-[300px] overflow-hidden rounded-t-xl"
          style={{ boxShadow: "-20px -20px 0 0 #599066" }}
        >
          <video
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            className="w-full h-full object-cover rounded-tr-[10px]"
          >
            <source
              src="https://res.cloudinary.com/dhebgz7qh/video/upload/v1772101467/afternoon_tea_section_menu_goocyq_balo8f.mp4"
              type="video/mp4"
            />
          </video>
        </div>

        <div className="p-4 sm:p-5 md:p-6 rounded-b-xl">
          <EventHeader number={1} title="Afternoon Tea" />
          <p className="text-gray-600 mt-2 text-xs sm:text-sm md:text-base font-medium text-center md:text-left">
            Join us for an experience that tastes like adventure and feels like
            love.
          </p>

          <div className="mt-3 flex justify-center md:justify-start">
            <Link
              href="/afternoon-tea-booking"
              aria-label="Book Afternoon Tea at Nour Maison"
              title="Book Afternoon Tea - £29.95 per person"
            >
              <AnimatedBorderButton
                ariaLabel="Book Afternoon Tea"
                title="Book Afternoon Tea"
              >
                Book Now
              </AnimatedBorderButton>
            </Link>
          </div>
        </div>
      </div>
    </div>
  </Tilt>
));
AfternoonTeaCard.displayName = "AfternoonTeaCard";

// ✅ Main Component
const OurServices = () => {
  const [selectedService, setSelectedService] = useState(null);
  const [showOverlay, setShowOverlay] = useState(false);
  const isMobile = useMediaQuery("(max-width: 768px)");

  const handleInquiry = useCallback((service) => {
    setSelectedService(service);
  }, []);

  const handleCloseModal = useCallback(() => {
    setSelectedService(null);
  }, []);

  const handleSuccess = useCallback(() => {
    toast.success("Inquiry sent successfully");
    setShowOverlay(true);
    setSelectedService(null);
  }, []);

  const handleFail = useCallback(() => {
    toast.error("Inquiry failed");
    setShowOverlay(false);
    setSelectedService(null);
  }, []);

  const handleOverlayClose = useCallback(() => {
    setShowOverlay(false);
  }, []);

  return (
    <div className="mt-20 relative flex flex-col overflow-visible">
      {/* ✅ Branches */}
      <BranchesImage
        variant="top-right"
        className="opacity-30 md:opacity-100"
      />
      <BranchesImage
        variant="top-left"
        className="w-[] top-6 opacity-30 md:opacity-100"
      />

      <div className="w-full mx-auto z-10">
        <SectionTitle className="!text-goldenOrange">
          Elegance <span className="font-tajawal">&</span> Events: Crafting
          Unforgettable Moments
        </SectionTitle>

        {/* ✅ Main Container - Afternoon Tea + 4 Cards */}
        <div className="container !flex flex-col lg:flex-row h-full gap-4 relative z-20 mt-10 sm:mt-14 md:mt-20 !px-3 sm:!px-5">
          {/* ✅ Afternoon Tea Card */}
          <AfternoonTeaCard isMobile={isMobile} />

          {/* ✅ 4 Service Cards - Grid 2x2 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4 flex-1">
            {MAIN_SERVICES.map((item) => (
              <ServiceCard
                key={item.id}
                item={item}
                isMobile={isMobile}
                onInquiry={handleInquiry}
              />
            ))}
          </div>
        </div>

        {/* ✅ Custom Event - برا الـ container، بنفس حجم الكارد الصغير */}
        <div className="w-full mt-6 sm:mt-8 md:mt-10 relative z-20 flex justify-center px-3 sm:px-5">
          <div className="w-full sm:w-[calc(50%-6px)] lg:w-[calc((100%-380px-16px)/2-6px)] xl:w-[calc((100%-420px-16px)/2-6px)] max-w-[400px]">
            <ServiceCard
              item={CUSTOM_EVENT}
              isMobile={isMobile}
              onInquiry={handleInquiry}
            />
          </div>
        </div>
      </div>

      {/* ✅ Modal */}
      <FramerModal
        onSuccess={handleSuccess}
        onFail={handleFail}
        event={selectedService}
        open={selectedService}
        setOpen={handleCloseModal}
      />

      {/* ✅ Success Overlay */}
      <PaperPlaneSuccess
        text="Inquiry sent successfully"
        showOverlay={showOverlay}
        setShowOverlay={handleOverlayClose}
      />
    </div>
  );
};

export default memo(OurServices);
