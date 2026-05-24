// components/Banner/BannerSwiper.jsx
"use client";
import React, {
  useRef,
  useState,
  useCallback,
  useMemo,
  memo,
  useEffect,
} from "react";
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
// CONSTANTS
// ============================================
const SHARED_BACKGROUND = {
  src: "https://res.cloudinary.com/dhebgz7qh/video/upload/q_auto,f_auto,vc_auto/v1772101573/booking-home-about_info_ulolyx_tspht2.mp4",
  mobileSrc: "/images/IMG_9871.webm",
  poster:
    "https://res.cloudinary.com/dhebgz7qh/image/upload/q_auto,f_auto,w_1920/v1767443794/jnd1i37zypsinyyigm1o_wocejk.webp",
  posterMobile:
    "https://res.cloudinary.com/dhebgz7qh/image/upload/q_auto,f_auto,w_768/v1767443794/jnd1i37zypsinyyigm1o_wocejk.webp",
  alt: "Nour Maison Restaurant Background",
};

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
    transition: { duration: 0.8, ease: [0.6, 0.05, 0.01, 0.9] },
  },
  exit: (direction) => ({
    x: direction > 0 ? -1000 : 1000,
    opacity: 0,
    scale: 0.8,
    rotateY: direction > 0 ? -45 : 45,
    transition: { duration: 0.6 },
  }),
};

const CHAR_VARIANTS = {
  hidden: { opacity: 0, y: 20, scale: 0.8, filter: "blur(4px)" },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: { duration: 0.04, delay: 0.3 + i * 0.045, ease: "easeOut" },
  }),
};

const SIDE_DECO_INITIAL = { x: 100, opacity: 0, rotate: 10 };
const SIDE_DECO_ANIMATE = { x: 0, opacity: 1, rotate: 0 };
const SIDE_DECO_TRANSITION = { duration: 1, delay: 0.5 };

const SLIDES_DATA = [
  {
    id: "slide-eid-al-adha",
    rightImage: "/images/eid-banner.webp",
    alt: "Eid Al-Adha Dinner Menu at Nour Maison Milton Keynes",
    title: "Celebrate Eid Al-Adha",
    mainTitle: "Eid Dinner Menu",
    description:
      "A premium halal à la carte Eid experience in Milton Keynes — where Middle Eastern warmth meets French elegance.",
    buttonText: "View Eid Menu",
    buttonLink: "/eid-al-adha-dinner-menu-milton-keynes",
    hasButton: true,
    priority: true,
  },
  {
    id: "slide-welcome",
    rightImage: "/images/banner-6.webp",
    alt: "Welcome to Nour Maison",
    title: "WELCOME TO",
    mainTitle: "NOUR MAISON Restaurant",
    description:
      "Where French sophistication meets the bold, vibrant flavors of the Middle East",
    hasButton: false,
    priority: true,
  },
  {
    id: "slide-roast",
    rightImage: "/images/banner-2.webp",
    alt: "Halal Roast Dinner Menu Milton Keynes",
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
    rightImage: "/images/banner-3.webp",
    alt: "Nour Maison restaurant interior",
    title: "STEP INSIDE",
    mainTitle: "NOUR MAISON Restaurant",
    description: "Style Curated with Parisian Precision",
    hasButton: false,
    priority: false,
  },
  {
    id: "slide-cuisine",
    rightImage: "/images/banner-7.webp",
    alt: "French Mediterranean cuisine",
    title: "Bringing French &",
    mainTitle: "Mediterranean Cuisine",
    description: "to Milton Keynes",
    hasButton: false,
    priority: false,
  },
  {
    id: "slide-drinks",
    rightImage: "/images/banner-8.webp",
    alt: "Premium craft drinks",
    title: "Premium Craft Drinks",
    mainTitle: "Blending French Flavor",
    description: "with Mediterranean Freshness",
    hasButton: false,
    priority: false,
  },
];

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
const A11Y_CONFIG = {
  prevSlideMessage: "Previous slide",
  nextSlideMessage: "Next slide",
  paginationBulletMessage: "Go to slide {{index}}",
  enabled: true,
};
const SWIPER_MODULES = [EffectFade, Navigation, Pagination, Parallax, Autoplay];

const AUTOPLAY_CONFIG = {
  delay: 5000,
  disableOnInteraction: false,
  pauseOnMouseEnter: false,
};

// ============================================
// PERSISTENT BACKGROUND - بدون LoadingContext
// ============================================
const PersistentBackground = memo(() => {
  const mediaType = useMemo(() => detectMediaType(SHARED_BACKGROUND.src), []);
  const videoRef = useRef(null);
  const [isMobile, setIsMobile] = useState(null);
  const [videoReady, setVideoReady] = useState(false);

  // ✅ Detect mobile
  useEffect(() => {
    const checkMobile = () => window.innerWidth <= 768;
    setIsMobile(checkMobile());

    const handleResize = () => setIsMobile(checkMobile());
    window.addEventListener("resize", handleResize, { passive: true });
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // ✅ شغل الفيديو لما يكون جاهز
  const handleCanPlay = useCallback(() => {
    if (!videoRef.current) return;

    const playPromise = videoRef.current.play();
    if (playPromise !== undefined) {
      playPromise
        .then(() => {
          setVideoReady(true);
        })
        .catch((err) => {
          console.log("Video autoplay prevented:", err);
          setVideoReady(true); // ✅ نخلي الـ poster يفضل ظاهر
        });
    }
  }, []);

  // ✅ المصادر المناسبة
  const videoSource =
    isMobile === true ? SHARED_BACKGROUND.mobileSrc : SHARED_BACKGROUND.src;
  const videoType = isMobile === true ? "video/webm" : "video/mp4";
  const posterSource =
    isMobile === true
      ? SHARED_BACKGROUND.posterMobile
      : SHARED_BACKGROUND.poster;

  return (
    <div className="persistent-background" aria-hidden="true">
      {/* ✅ Poster - بيظهر فوراً قبل الفيديو */}
      <img
        src={posterSource}
        alt={SHARED_BACKGROUND.alt}
        className={`bg-media bg-poster ${videoReady ? "fade-out" : ""}`}
        loading="eager"
        fetchPriority="high"
        decoding="sync"
        width="1920"
        height="1080"
      />

      {/* ✅ الفيديو - بيتحمل في الخلفية */}
      {mediaType === "video" && isMobile !== null && (
        <video
          ref={videoRef}
          key={videoSource}
          className={`bg-media bg-video ${videoReady ? "fade-in" : ""}`}
          loop
          muted
          playsInline
          preload="auto"
          autoPlay
          poster={posterSource}
          aria-label={SHARED_BACKGROUND.alt}
          disablePictureInPicture
          disableRemotePlayback
          onCanPlay={handleCanPlay}
          onLoadedData={handleCanPlay}
        >
          <source src={videoSource} type={videoType} />
        </video>
      )}

      <div className="bg-overlay" aria-hidden="true"></div>
    </div>
  );
});
PersistentBackground.displayName = "PersistentBackground";

// ============================================
// CIRCLE MEDIA
// ============================================
const CircleMedia = memo(({ slide }) => {
  const mediaType = useMemo(
    () => (slide.circleImage ? detectMediaType(slide.circleImage) : null),
    [slide.circleImage],
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
// RIGHT HERO IMAGE
// ============================================
const RightHeroImage = memo(({ slide, isActive }) => {
  if (!slide.rightImage) return null;

  return (
    <motion.div
      className="right-hero-image"
      initial={{ x: "100%", opacity: 0, scale: 0.9 }}
      animate={
        isActive
          ? { x: 0, opacity: 1, scale: 1 }
          : { x: "100%", opacity: 0, scale: 0.9 }
      }
      transition={{ duration: 1, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
      aria-hidden="true"
    >
      <img
        src={slide.rightImage}
        alt={slide.alt}
        loading={slide.priority ? "eager" : "lazy"}
        fetchPriority={slide.priority ? "high" : "low"}
        decoding={slide.priority ? "sync" : "async"}
      />
    </motion.div>
  );
});
RightHeroImage.displayName = "RightHeroImage";

// ============================================
// TYPING TITLE
// ============================================
const TypingTitle = memo(({ text, slideId, isActive }) => {
  const words = useMemo(() => {
    let globalCharIndex = 0;
    return text.split(" ").map((word, wordIndex) => {
      const chars = word.split("").map((char, charIndex) => {
        const currentIndex = globalCharIndex;
        globalCharIndex += 1;
        return {
          char,
          index: currentIndex,
          key: `${slideId}-word-${wordIndex}-char-${charIndex}`,
        };
      });
      return { key: `${slideId}-word-${wordIndex}`, chars };
    });
  }, [text, slideId]);

  if (!isActive) return null;

  return (
    <motion.h1
      className="slide-title typing-title !font-seasons"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.2, delay: 0.1 }}
      aria-label={text}
    >
      {words.map((word, wordIndex) => (
        <span
          key={word.key}
          className="title-word-group"
          aria-hidden="true"
          style={{ marginRight: wordIndex < words.length - 1 ? "0.22em" : 0 }}
        >
          {word.chars.map(({ char, index, key }) => (
            <motion.span
              key={key}
              className="title-char"
              custom={index}
              variants={CHAR_VARIANTS}
              initial="hidden"
              animate="visible"
            >
              {char}
            </motion.span>
          ))}
        </span>
      ))}
    </motion.h1>
  );
});
TypingTitle.displayName = "TypingTitle";

// ============================================
// SLIDE CONTENT
// ============================================
const SlideContent = memo(({ slide, isActive, direction }) => {
  const typingEndTime = useMemo(() => {
    const totalChars = slide.mainTitle.replace(/\s/g, "").length;
    return 0.3 + totalChars * 0.045 + 0.2;
  }, [slide.mainTitle]);

  const subtitleVariants = useMemo(
    () => ({
      hidden: { y: -40, opacity: 0, rotateX: -60 },
      visible: {
        y: 0,
        opacity: 1,
        rotateX: 0,
        transition: {
          duration: 0.6,
          delay: typingEndTime,
          ease: [0.6, 0.05, 0.01, 0.9],
        },
      },
    }),
    [typingEndTime],
  );

  const descriptionVariants = useMemo(
    () => ({
      hidden: { x: -80, opacity: 0 },
      visible: {
        x: 0,
        opacity: 1,
        transition: {
          duration: 0.7,
          delay: typingEndTime + 0.2,
          ease: "easeOut",
        },
      },
    }),
    [typingEndTime],
  );

  const buttonVariants = useMemo(
    () => ({
      hidden: { scale: 0, opacity: 0 },
      visible: {
        scale: 1,
        opacity: 1,
        transition: {
          duration: 0.5,
          delay: typingEndTime + 0.4,
          type: "spring",
          stiffness: 200,
        },
      },
      hover: {
        scale: 1.05,
        boxShadow: "0 10px 40px rgba(221, 153, 51, 0.4)",
        transition: { duration: 0.3 },
      },
    }),
    [typingEndTime],
  );

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
        variants={subtitleVariants}
        initial="hidden"
        animate="visible"
      >
        {slide.title}
      </motion.h2>

      <TypingTitle
        text={slide.mainTitle}
        slideId={slide.id}
        isActive={isActive}
      />

      <motion.p
        className="slide-description !font-seasons"
        variants={descriptionVariants}
        initial="hidden"
        animate="visible"
      >
        {slide.description}
      </motion.p>

      {slide.hasButton && (
        <motion.div
          variants={buttonVariants}
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
// PARTICLES
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
    [],
  );

  return (
    <div className="particles" aria-hidden="true">
      {particles}
    </div>
  );
});
Particles.displayName = "Particles";

// ============================================
// MAIN COMPONENT
// ============================================
const BannerSwiper = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const handleSlideChange = useCallback(
    (swiper) => {
      const newIndex = swiper.realIndex;
      setDirection(newIndex > activeIndex ? 1 : -1);
      setActiveIndex(newIndex);
    },
    [activeIndex],
  );

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
      image: [SHARED_BACKGROUND.poster],
      priceRange: "$$$",
      hasMenu: {
        "@type": "Menu",
        name: "Roast Dinner Menu",
        url: "/roast-menu",
      },
      acceptsReservations: true,
    }),
    [],
  );

  return (
    <section
      className="banner-wrapper"
      aria-label="Nour Maison Restaurant Hero Banner"
      role="banner"
    >
      <h1 className="sr-only">
        Nour Maison - French Middle Eastern Fusion Restaurant in Milton Keynes
      </h1>

      <PersistentBackground />

      <div className="animated-gradient" aria-hidden="true"></div>

      <Particles />

      <Swiper
        modules={SWIPER_MODULES}
        effect="fade"
        fadeEffect={FADE_EFFECT_CONFIG}
        navigation={true}
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
            <article
              className={`slide-container ${
                slide.rightImage ? "has-right-hero" : ""
              }`}
            >
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

              {slide.rightImage && (
                <RightHeroImage
                  slide={slide}
                  isActive={activeIndex === index}
                />
              )}

              {!slide.rightImage && slide.circleImage && (
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

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schemaData),
        }}
      />
    </section>
  );
};

export default memo(BannerSwiper);
