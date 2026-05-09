"use client";
import React, { useRef, useState, useCallback, useMemo, memo } from "react";
import dynamic from "next/dynamic";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Autoplay,
  Navigation,
  Pagination,
  EffectFade,
  Parallax,
} from "swiper/modules";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import "./style.scss";
import { detectMediaType } from "../../../../lib/functions";

// ============================================
// 🎨 ANIMATION VARIANTS - برة الكومبوننت
// ============================================
const SLIDE_VARIANTS = {
  enter: (direction) => ({
    x: direction > 0 ? 1000 : -1000,
    opacity: 0,
    scale: 0.8,
    rotateY: direction > 0 ? 45 : -45,
  }),
  center: {
    x: 0,
    opacity: 1,
    scale: 1,
    rotateY: 0,
    transition: {
      duration: 0.8,
      ease: [0.6, 0.05, 0.01, 0.9],
    },
  },
  exit: (direction) => ({
    x: direction > 0 ? -1000 : 1000,
    opacity: 0,
    scale: 0.8,
    rotateY: direction > 0 ? -45 : 45,
    transition: { duration: 0.6 },
  }),
};

const TITLE_VARIANTS = {
  hidden: { y: 80, opacity: 0, rotateX: -90 },
  visible: {
    y: 0,
    opacity: 1,
    rotateX: 0,
    transition: { duration: 0.8, delay: 0.2, ease: [0.6, 0.05, 0.01, 0.9] },
  },
};

const MAIN_TITLE_VARIANTS = {
  hidden: { scale: 0.5, opacity: 0, y: 50 },
  visible: {
    scale: 1,
    opacity: 1,
    y: 0,
    transition: { duration: 1, delay: 0.4, ease: [0.6, 0.05, 0.01, 0.9] },
  },
};

const DESCRIPTION_VARIANTS = {
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.8, delay: 0.6 },
  },
};

const BUTTON_VARIANTS = {
  hidden: { scale: 0, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.5,
      delay: 0.8,
      type: "spring",
      stiffness: 200,
    },
  },
  hover: {
    scale: 1.05,
    boxShadow: "0 10px 40px rgba(221, 153, 51, 0.4)",
    transition: { duration: 0.3 },
  },
};

const IMAGE_VARIANTS = {
  hidden: { scale: 1.3, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { duration: 1.2, ease: "easeOut" },
  },
};

const SIDE_DECO_INITIAL = { x: 100, opacity: 0, rotate: 10 };
const SIDE_DECO_ANIMATE = { x: 0, opacity: 1, rotate: 0 };
const SIDE_DECO_TRANSITION = { duration: 1, delay: 0.5 };

// ============================================
// 📊 SLIDES DATA - برة الكومبوننت
// ============================================
const SLIDES_DATA = [
  {
    id: "slide-welcome",
    background:
      "https://res.cloudinary.com/dhebgz7qh/video/upload/v1772101573/booking-home-about_info_ulolyx_tspht2.mp4",
    backgroundPoster:
      "https://res.cloudinary.com/dhebgz7qh/image/upload/v1767443794/jnd1i37zypsinyyigm1o_wocejk.webp",
    circleImage: "/images/nnour polaraid pics_1_11zon.webp",
    alt: "Welcome to Nour Maison - French Middle Eastern fusion restaurant Milton Keynes",
    title: "WELCOME TO",
    mainTitle: "NOUR MAISON",
    description:
      "Where French sophistication meets the bold, vibrant flavors of the Middle East",
    hasButton: false,
    priority: true,
  },
  {
    id: "slide-roast",
    background: "/images/nnour polaraid pics_1_11zon.webp",
    circleImage: "/images/nnour polaraid pics_1_11zon.webp",
    alt: "Halal Roast Dinner Menu Milton Keynes - Nour Maison Sunday roast with Arabic spices",
    title: "Experience our new",
    mainTitle: "Roast Dinner Menu",
    description:
      "A halal roast where Arabic spice meets French finesse. Crafted with soul.",
    buttonText: "Roast Dinner Menu",
    buttonLink: "/roast-menu",
    hasButton: true,
    priority: false,
  },
  {
    id: "slide-interior",
    background:
      "https://res.cloudinary.com/dhebgz7qh/image/upload/v1767443803/whdixjtugk4jqxkrue0l_iejjmj.webp",
    circleImage:
      "https://res.cloudinary.com/dhebgz7qh/image/upload/v1767443803/whdixjtugk4jqxkrue0l_iejjmj.webp",
    alt: "Nour Maison restaurant interior - Parisian style halal restaurant Milton Keynes",
    title: "STEP INSIDE",
    mainTitle: "NOUR MAISON",
    description: "Style Curated with Parisian Precision",
    hasButton: false,
    priority: false,
  },
  {
    id: "slide-cuisine",
    background:
      "https://res.cloudinary.com/dhebgz7qh/image/upload/v1767443803/v6pek7zcf253vnw59iqf_e8hdas.webp",
    circleImage:
      "https://res.cloudinary.com/dhebgz7qh/image/upload/v1767443803/v6pek7zcf253vnw59iqf_e8hdas.webp",
    alt: "French Mediterranean cuisine Milton Keynes - Nour Maison halal fine dining",
    title: "Bringing French &",
    mainTitle: "Mediterranean Cuisine",
    description: "to Milton Keynes",
    hasButton: false,
    priority: false,
  },
  {
    id: "slide-drinks",
    background:
      "https://res.cloudinary.com/dhebgz7qh/image/upload/v1772101589/BUNNER_NOUR_1_cq1k64_wq0dfh.webp",
    circleImage:
      "https://res.cloudinary.com/dhebgz7qh/image/upload/v1772101589/BUNNER_NOUR_1_cq1k64_wq0dfh.webp",
    alt: "Premium craft drinks Milton Keynes - Nour Maison French Mediterranean beverages",
    title: "Premium Craft Drinks",
    mainTitle: "Blending French Flavor",
    description: "with Mediterranean Freshness",
    hasButton: false,
    priority: false,
  },
];

// ============================================
// ⚙️ SWIPER CONFIGS - برة الكومبوننت
// ============================================
const PAGINATION_CONFIG = {
  clickable: true,
  renderBullet: function (index, className) {
    return `<span class="${className}" role="button" aria-label="Go to slide ${
      index + 1
    }" tabindex="0">
      <span class="bullet-number">${String(index + 1).padStart(2, "0")}</span>
      <span class="bullet-progress"></span>
    </span>`;
  },
};

const FADE_EFFECT_CONFIG = { crossFade: true };

const AUTOPLAY_CONFIG = {
  delay: 5000,
  disableOnInteraction: false,
  pauseOnMouseEnter: false,
};

const A11Y_CONFIG = {
  prevSlideMessage: "Previous slide",
  nextSlideMessage: "Next slide",
  paginationBulletMessage: "Go to slide {{index}}",
  enabled: true,
};

const SWIPER_MODULES = [EffectFade, Navigation, Pagination, Parallax, Autoplay];

// ============================================
// 🎬 BACKGROUND COMPONENT - Memoized
// ============================================
const SlideBackground = memo(({ slide, isActive }) => {
  const mediaType = useMemo(
    () => detectMediaType(slide.background),
    [slide.background]
  );

  if (mediaType === "video") {
    return (
      <video
        className="slide-image"
        autoPlay
        loop
        muted
        playsInline
        preload={slide.priority ? "auto" : "metadata"}
        poster={slide.backgroundPoster || ""}
        aria-label={slide.alt}
        disablePictureInPicture
        disableRemotePlayback
      >
        <source src={slide.background} type="video/mp4" />
      </video>
    );
  }

  return (
    <img
      src={slide.background}
      alt={slide.alt}
      className="slide-image"
      loading={slide.priority ? "eager" : "lazy"}
      fetchPriority={slide.priority ? "high" : "low"}
      decoding={slide.priority ? "sync" : "async"}
      width="1920"
      height="1080"
    />
  );
});
SlideBackground.displayName = "SlideBackground";

// ============================================
// 🖼️ CIRCLE MEDIA COMPONENT - Memoized
// ============================================
const CircleMedia = memo(({ slide }) => {
  const mediaType = useMemo(
    () => (slide.circleImage ? detectMediaType(slide.circleImage) : null),
    [slide.circleImage]
  );

  if (!slide.circleImage) return null;

  if (mediaType === "video") {
    return (
      <video
        autoPlay
        loop
        muted
        playsInline
        preload={slide.priority ? "auto" : "metadata"}
        aria-label={slide.alt}
        disablePictureInPicture
        disableRemotePlayback
      >
        <source src={slide.circleImage} type="video/mp4" />
      </video>
    );
  }

  return (
    <img
      src={slide.circleImage}
      alt={slide.alt}
      loading={slide.priority ? "eager" : "lazy"}
      fetchPriority={slide.priority ? "high" : "low"}
      decoding={slide.priority ? "sync" : "async"}
      width="500"
      height="500"
    />
  );
});
CircleMedia.displayName = "CircleMedia";

// ============================================
// 📝 SLIDE CONTENT COMPONENT - Memoized
// ============================================
const SlideContent = memo(({ slide, isActive, direction }) => {
  // ✅ Memoize words split
  const words = useMemo(() => slide.mainTitle.split(" "), [slide.mainTitle]);

  if (!isActive) return null;

  return (
    <motion.div
      className="content-wrapper"
      custom={direction}
      variants={SLIDE_VARIANTS}
      initial="enter"
      animate="center"
      exit="exit"
    >
      <motion.h2
        className="slide-subtitle !font-yesteryear"
        variants={TITLE_VARIANTS}
        initial="hidden"
        animate="visible"
      >
        {slide.title}
      </motion.h2>

      <motion.h1
        className="slide-title !font-seasons"
        variants={MAIN_TITLE_VARIANTS}
        initial="hidden"
        animate="visible"
      >
        {words.map((word, i) => (
          <motion.span
            key={`${slide.id}-word-${i}`}
            className="title-word !font-seasons"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 + i * 0.1 }}
          >
            {word}{" "}
          </motion.span>
        ))}
      </motion.h1>

      <motion.p
        className="slide-description !font-seasons"
        variants={DESCRIPTION_VARIANTS}
        initial="hidden"
        animate="visible"
      >
        {slide.description}
      </motion.p>

      {slide.hasButton && (
        <motion.div
          variants={BUTTON_VARIANTS}
          initial="hidden"
          animate="visible"
          whileHover="hover"
          className="w-fit"
        >
          <Link
            href={slide.buttonLink}
            className="cta-button"
            aria-label={`Navigate to ${slide.buttonText}`}
            prefetch={false}
          >
            <span className="button-text">{slide.buttonText}</span>
            <span className="button-icon" aria-hidden="true">
              →
            </span>
            <span className="button-bg" aria-hidden="true"></span>
          </Link>
        </motion.div>
      )}
    </motion.div>
  );
});
SlideContent.displayName = "SlideContent";

// ============================================
// 🎨 PARTICLES COMPONENT - Memoized (مرة واحدة بس)
// ============================================
const Particles = memo(() => {
  const particles = useMemo(
    () =>
      Array.from({ length: 20 }, (_, i) => (
        <div
          key={`particle-${i}`}
          className="particle"
          style={{ "--i": i }}
          aria-hidden="true"
        />
      )),
    []
  );

  return (
    <div className="particles" aria-hidden="true">
      {particles}
    </div>
  );
});
Particles.displayName = "Particles";

// ============================================
// 🏗️ MAIN COMPONENT
// ============================================
const BannerSwiper = () => {
  const swiperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  // ✅ useCallback عشان متتعملش re-create
  const handleSlideChange = useCallback(
    (swiper) => {
      const newIndex = swiper.realIndex;
      setDirection((prev) => (newIndex > activeIndex ? 1 : -1));
      setActiveIndex(newIndex);
    },
    [activeIndex]
  );

  const handleSwiperInit = useCallback((swiper) => {
    swiperRef.current = swiper;
  }, []);

  // ✅ Memoize Schema.org data
  const schemaData = useMemo(
    () => ({
      "@context": "https://schema.org",
      "@type": "Restaurant",
      name: "Nour Maison",
      description:
        "French Middle Eastern fusion restaurant in Milton Keynes offering halal fine dining",
      servesCuisine: ["French", "Middle Eastern", "Mediterranean", "Halal"],
      address: {
        "@type": "PostalAddress",
        addressLocality: "Milton Keynes",
        addressCountry: "UK",
      },
      image: SLIDES_DATA.map((slide) => {
        const type = detectMediaType(slide.background);
        return type === "image" ? slide.background : slide.backgroundPoster;
      }).filter(Boolean),
      priceRange: "$$$",
      hasMenu: {
        "@type": "Menu",
        name: "Roast Dinner Menu",
        url: "/roast-menu",
      },
      acceptsReservations: true,
    }),
    []
  );

  return (
    <section
      className="banner-wrapper"
      aria-label="Nour Maison Restaurant Hero Banner"
      role="banner"
    >
      {/* ✅ SEO Hidden H1 */}
      <h1 className="sr-only">
        Nour Maison - French Middle Eastern Fusion Restaurant in Milton Keynes
      </h1>

      {/* ✅ Animated Background */}
      <div className="animated-gradient" aria-hidden="true"></div>

      {/* ✅ Particles - Memoized */}
      <Particles />

      <Swiper
        modules={SWIPER_MODULES}
        effect="fade"
        fadeEffect={FADE_EFFECT_CONFIG}
        navigation={true}
        onSwiper={handleSwiperInit}
        onSlideChange={handleSlideChange}
        pagination={PAGINATION_CONFIG}
        slidesPerView={1}
        speed={1000}
        loop={true}
        autoplay={AUTOPLAY_CONFIG}
        parallax={true}
        watchSlidesProgress={true}
        a11y={A11Y_CONFIG}
        className="home-swiper-new"
      >
        {SLIDES_DATA.map((slide, index) => (
          <SwiperSlide key={slide.id}>
            <article className="slide-container">
              {/* Background */}
              <motion.div
                className="slide-background"
                data-swiper-parallax="-23%"
                variants={IMAGE_VARIANTS}
                initial="hidden"
                animate="visible"
              >
                <SlideBackground
                  slide={slide}
                  isActive={activeIndex === index}
                />
                <div className="slide-overlay" aria-hidden="true"></div>
              </motion.div>

              {/* Content */}
              <div className="slide-content">
                <AnimatePresence mode="wait">
                  <SlideContent
                    key={`content-${slide.id}-${activeIndex}`}
                    slide={slide}
                    isActive={activeIndex === index}
                    direction={direction}
                  />
                </AnimatePresence>
              </div>

              {/* Side Decoration */}
              {slide.circleImage && (
                <motion.div
                  className="side-decoration"
                  initial={SIDE_DECO_INITIAL}
                  animate={SIDE_DECO_ANIMATE}
                  transition={SIDE_DECO_TRANSITION}
                  aria-hidden="true"
                >
                  <div className="decoration-frame">
                    <CircleMedia slide={slide} />
                  </div>
                </motion.div>
              )}
            </article>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* ✅ Schema.org JSON-LD للـ SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schemaData),
        }}
      />

      {/* ✅ Preload للسلايدات الجاية */}
      <link
        rel="preload"
        as="image"
        href={SLIDES_DATA[1]?.background}
        fetchPriority="low"
      />
    </section>
  );
};

export default memo(BannerSwiper);
