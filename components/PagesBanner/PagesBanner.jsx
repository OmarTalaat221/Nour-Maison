"use client";

import { motion } from "framer-motion";
import React, { useRef, useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import "swiper/css";
import "swiper/css/effect-fade";
import { Autoplay, EffectFade, Parallax } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { detectMediaType } from "../../lib/functions";
import BottomBg from "../../utils/bottomBg/BottomBg";
import ScrollToBottomButton from "../../utils/ScrollToBottomButton/ScrollToBottomButton";
import "./style.css";

const hasRealContent = (value) => {
  if (value === null || value === undefined) return false;

  if (typeof value === "string") {
    return value.trim().length > 0;
  }

  if (typeof value === "number" || typeof value === "boolean") return true;

  if (React.isValidElement(value)) {
    const children = value.props?.children;

    if (children === null || children === undefined) return true;

    if (typeof children === "string") return children.trim().length > 0;

    if (Array.isArray(children)) {
      return children.some((child) => hasRealContent(child));
    }

    return true;
  }

  if (Array.isArray(value)) {
    return value.some((item) => hasRealContent(item));
  }

  return true;
};

const PagesBanner = ({
  images = [],
  imageAlts = [],
  title,
  slogan,
  eyebrow,
  description,
  details = [],
  scrollTo,
  bottomBg = true,
  useH1 = false,
  showScrollButton = true,
  variant = "default",
  primaryCta = null,
  titleClassName = "",
  sloganClassName = "",
  descriptionClassName = "",
  contentWrapperClassName = "",
  overlayClassName = "",
}) => {
  const swiperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const isWhiteParty = variant === "whiteParty";

  const showTitle = hasRealContent(title);
  const showSlogan = hasRealContent(slogan);
  const showEyebrow = hasRealContent(eyebrow);
  const showDescription = hasRealContent(description);
  const showDetails = Array.isArray(details) && details.length > 0;

  const handleSlideChange = (swiper) => {
    setActiveIndex(swiper.realIndex ?? swiper.activeIndex ?? 0);
  };

  const renderPrimaryCta = () => {
    if (!primaryCta?.label) return null;

    const baseClass =
      "inline-flex min-w-[220px] items-center justify-center rounded-full px-6 py-3 text-sm font-semibold uppercase tracking-[0.12em] transition duration-300";

    if (primaryCta.type === "scroll") {
      return (
        <ScrollLink
          to={primaryCta.to || scrollTo || "none"}
          smooth={true}
          duration={500}
          spy={true}
          offset={primaryCta.offset ?? -120}
          className={`${baseClass} cursor-pointer bg-white text-[#1F1A17] hover:bg-logoGold hover:text-white shadow-[0_10px_30px_rgba(0,0,0,0.12)]`}
          aria-label={primaryCta.ariaLabel || primaryCta.label}
        >
          {primaryCta.label}
        </ScrollLink>
      );
    }

    return (
      <a
        href={primaryCta.href}
        target={primaryCta.newTab ? "_blank" : "_self"}
        rel={primaryCta.newTab ? "noopener noreferrer" : undefined}
        aria-label={primaryCta.ariaLabel || primaryCta.label}
        className={`${baseClass} bg-white text-[#1F1A17] hover:bg-logoGold hover:text-white shadow-[0_10px_30px_rgba(0,0,0,0.12)]`}
      >
        {primaryCta.label}
      </a>
    );
  };

  return (
    <section
      className={`relative h-[560px] md:h-[680px] overflow-hidden ${
        isWhiteParty ? "bg-white" : "!bg-fixed"
      }`}
    >
      <Swiper
        modules={[Autoplay, EffectFade, Parallax]}
        effect="fade"
        centeredSlides={true}
        parallax={true}
        navigation={false}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        onSlideChange={handleSlideChange}
        slidesPerView={1}
        fadeEffect={{ crossFade: true }}
        loop={true}
        autoplay={{
          delay: isWhiteParty ? 4500 : 2000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        className="overflow-visible h-full"
      >
        {images.map((item, index) => (
          <SwiperSlide
            key={index}
            className="flex h-full items-center justify-center relative"
          >
            <div className="banner_swiper h-full">
              <div className="relative h-full !w-full">
                {detectMediaType(item) === "image" ? (
                  <img
                    fetchPriority={index === 0 ? "high" : "auto"}
                    loading={index === 0 ? "eager" : "lazy"}
                    className="inset-0 w-full h-full object-cover object-center"
                    src={item}
                    alt={
                      imageAlts[index] ||
                      `Banner image ${index + 1} for ${typeof title === "string" ? title : "page banner"}`
                    }
                  />
                ) : (
                  <div className="relative w-full h-full">
                    <video
                      src={item}
                      autoPlay
                      loop
                      playsInline
                      muted
                      className="absolute top-0 left-0 w-full h-full object-cover"
                    />
                  </div>
                )}

                <div
                  className={`absolute inset-0 ${
                    isWhiteParty
                      ? "bg-gradient-to-b from-black/25 via-black/10 to-black/25"
                      : "bg-black/40"
                  } ${overlayClassName}`}
                />
                {isWhiteParty && (
                  <div className="absolute inset-0 bg-white/10" />
                )}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <motion.div
        className={`absolute z-10 inset-0 flex w-full px-4 sm:px-8 md:px-16 ${
          isWhiteParty
            ? "items-center justify-center"
            : "items-end justify-center pb-10"
        }`}
        key={activeIndex}
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <div
          className={`${
            isWhiteParty
              ? "w-full max-w-5xl rounded-[30px] border border-white/35 bg-white/16 px-6 py-8 text-center shadow-[0_20px_80px_rgba(0,0,0,0.18)] backdrop-blur-md md:px-10 md:py-12"
              : "mt-auto mb-0 flex items-center gap-6 justify-center flex-col text-center"
          } ${contentWrapperClassName}`}
        >
          {showEyebrow && (
            <p
              className={`mb-3 font-oswald text-xs uppercase tracking-[0.35em] ${
                isWhiteParty ? "text-white/90" : "text-white"
              }`}
            >
              {eyebrow}
            </p>
          )}

          {showTitle &&
            (useH1 ? (
              <motion.h1
                className={`${
                  isWhiteParty
                    ? "font-seasons italic !font-bold text-white text-4xl sm:text-5xl lg:text-7xl"
                    : "text-logoGold font-seasons italic !font-bold text-4xl sm:text-5xl lg:text-6xl"
                } ${titleClassName}`}
                style={
                  isWhiteParty
                    ? { textShadow: "0 4px 20px rgba(0,0,0,.20)" }
                    : { textShadow: "1px 1px 0px white" }
                }
              >
                {title}
              </motion.h1>
            ) : (
              <motion.div
                role="heading"
                aria-level="2"
                className={`${
                  isWhiteParty
                    ? "font-seasons italic !font-bold text-white text-4xl sm:text-5xl lg:text-7xl"
                    : "text-logoGold font-seasons italic !font-bold text-4xl sm:text-5xl lg:text-6xl"
                } ${titleClassName}`}
                style={
                  isWhiteParty
                    ? { textShadow: "0 4px 20px rgba(0,0,0,.20)" }
                    : { textShadow: "1px 1px 0px white" }
                }
              >
                {title}
              </motion.div>
            ))}

          {showSlogan &&
            (useH1 ? (
              <motion.h2
                className={`font-oswald text-white text-2xl md:text-4xl sm:text-5xl lg:text-7xl ${sloganClassName}`}
              >
                {slogan}
              </motion.h2>
            ) : (
              <motion.div
                role="heading"
                aria-level="3"
                className={`font-oswald text-white text-2xl md:text-4xl sm:text-5xl lg:text-7xl ${sloganClassName}`}
              >
                {slogan}
              </motion.div>
            ))}

          {showDescription && (
            <p
              className={`mx-auto mt-5 max-w-3xl text-sm leading-7 sm:text-base md:text-lg ${
                isWhiteParty ? "text-white/95" : "text-white"
              } ${descriptionClassName}`}
            >
              {description}
            </p>
          )}

          {showDetails && (
            <ul
              className="mt-6 flex flex-wrap items-center justify-center gap-3"
              aria-label="Event details"
            >
              {details.map((item, index) => (
                <li
                  key={`${item}-${index}`}
                  className="inline-flex items-center gap-2 rounded-full border border-white/35 bg-white/12 px-4 py-2 text-sm text-white backdrop-blur-sm"
                >
                  <span
                    className={`h-1.5 w-1.5 rounded-full ${
                      index % 2 === 0 ? "bg-logoGold" : "bg-sageGreen"
                    }`}
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          )}

          {primaryCta && (
            <div className="mt-8 flex items-center justify-center">
              {renderPrimaryCta()}
            </div>
          )}

          {showScrollButton && scrollTo && (
            <div className="mt-8 md:mt-10 flex justify-center">
              <ScrollLink
                to={scrollTo}
                smooth={true}
                duration={500}
                spy={true}
                offset={-120}
                title="Scroll To Content"
                aria-label="Scroll to content below"
                className="cursor-pointer"
              >
                <ScrollToBottomButton />
              </ScrollLink>
            </div>
          )}
        </div>
      </motion.div>

      {bottomBg && <BottomBg />}
    </section>
  );
};

export default PagesBanner;
