"use client";

import React, {
  useRef,
  useState,
  useCallback,
  useMemo,
  memo,
  useEffect,
} from "react";
import Image from "next/image";
import Link from "next/link";
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
} from "swiper/modules";
import { motion, AnimatePresence } from "framer-motion";
import "./style.scss";
import { detectMediaType } from "../../../../lib/functions";

const SHARED_BACKGROUND = {
  src: "/videos/booking-home-about.webm",
  mobileSrc: "/images/IMG_9871.webm",
  srcMp4: "/videos/booking-home-about.mp4",
  mobileSrcMp4: "/images/IMG_9871.mp4",
  poster: "/images/banner-img.webp",
  posterMobile: "/images/mobile-banner-poster.webp",
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
  hidden: { opacity: 0, y: 20, scale: 0.8 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.04, delay: 0.25 + i * 0.035, ease: "easeOut" },
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
    priority: false,
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
    return `<span class="${className}" role="button" aria-label="Go to slide ${index + 1
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

const SWIPER_MODULES = [EffectFade, Navigation, Pagination, Autoplay];

const AUTOPLAY_CONFIG = {
  delay: 5000,
  disableOnInteraction: false,
  pauseOnMouseEnter: false,
};

const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px)");
    const updateIsMobile = () => setIsMobile(mediaQuery.matches);

    updateIsMobile();

    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener("change", updateIsMobile);
      return () => mediaQuery.removeEventListener("change", updateIsMobile);
    }

    mediaQuery.addListener(updateIsMobile);
    return () => mediaQuery.removeListener(updateIsMobile);
  }, []);

  return isMobile;
};

const useIsIOS = () => {
  const [isIOS, setIsIOS] = useState(false);

  useEffect(() => {
    const ua = window.navigator.userAgent;
    const iOS =
      /iPad|iPhone|iPod/.test(ua) ||
      (ua.includes("Mac") && "ontouchend" in document);
    setIsIOS(iOS);
  }, []);

  return isIOS;
};

const useDeferredVideo = () => {
  const [showVideo, setShowVideo] = useState(false);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const saveData = navigator.connection?.saveData;
    const effectiveType = navigator.connection?.effectiveType;
    const isSlow = ["slow-2g", "2g"].includes(effectiveType);

    if (prefersReducedMotion || saveData || isSlow) return;

    const isMobile = window.matchMedia("(max-width: 768px)").matches;
    const delay = isMobile ? 2500 : 1000;

    const schedule =
      window.requestIdleCallback ||
      ((cb) => window.setTimeout(cb, delay));

    const handle = schedule(
      () => setShowVideo(true),
      { timeout: delay + 1500 }
    );

    return () => {
      if (window.cancelIdleCallback && typeof handle === "number") {
        try {
          window.cancelIdleCallback(handle);
        } catch (e) { }
      }
    };
  }, []);

  return showVideo;
};

const PersistentBackground = memo(() => {
  const videoRef = useRef(null);
  const isMobile = useIsMobile();
  const isIOS = useIsIOS();
  const showVideo = useDeferredVideo();
  const [videoReady, setVideoReady] = useState(false);

  const mediaType = useMemo(() => detectMediaType(SHARED_BACKGROUND.src), []);

  // iOS مبيدعمش webm — استخدم mp4 لو موجود
  const useMP4 = isIOS;

  const videoSource = isMobile
    ? (useMP4 ? SHARED_BACKGROUND.mobileSrcMp4 : SHARED_BACKGROUND.mobileSrc)
    : (useMP4 ? SHARED_BACKGROUND.srcMp4 : SHARED_BACKGROUND.src);

  const videoType = useMP4 ? "video/mp4" : "video/webm";

  const posterSource = isMobile
    ? SHARED_BACKGROUND.posterMobile
    : SHARED_BACKGROUND.poster;

  const handleCanPlay = useCallback(() => {
    const video = videoRef.current;

    if (!video) {
      setVideoReady(true);
      return;
    }

    const playPromise = video.play();

    if (playPromise !== undefined) {
      playPromise
        .then(() => setVideoReady(true))
        .catch(() => setVideoReady(true));
    } else {
      setVideoReady(true);
    }
  }, []);

  return (
    <div className="persistent-background" aria-hidden="true">
      <picture>
        <source
          media="(max-width: 768px)"
          srcSet={SHARED_BACKGROUND.posterMobile}
        />
        <img
          src={SHARED_BACKGROUND.poster}
          alt=""
          className={`bg-media bg-poster ${videoReady ? "fade-out" : ""}`}
          loading="eager"
          fetchPriority="high"
          decoding="sync"
          width="1920"
          height="1080"
        />
      </picture>

      {mediaType === "video" && showVideo && (
        <video
          ref={videoRef}
          key={videoSource}
          className={`bg-media bg-video ${videoReady ? "fade-in" : ""}`}
          loop
          muted
          defaultMuted
          playsInline
          webkit-playsinline="true"
          x5-playsinline="true"
          preload="metadata"
          autoPlay
          poster={posterSource}
          aria-label={SHARED_BACKGROUND.alt}
          disablePictureInPicture
          disableRemotePlayback
          onCanPlay={handleCanPlay}
          onLoadedData={handleCanPlay}
        >
          {/* iOS: mp4 الأول */}
          {useMP4 && (
            <source
              src={isMobile ? SHARED_BACKGROUND.mobileSrcMp4 : SHARED_BACKGROUND.srcMp4}
              type="video/mp4"
            />
          )}
          {/* الباقي: webm */}
          {!useMP4 && (
            <source
              src={isMobile ? SHARED_BACKGROUND.mobileSrc : SHARED_BACKGROUND.src}
              type="video/webm"
            />
          )}
          {/* Fallback */}
          <source
            src={isMobile ? SHARED_BACKGROUND.mobileSrcMp4 : SHARED_BACKGROUND.srcMp4}
            type="video/mp4"
          />
        </video>
      )}

      <div className="bg-overlay" aria-hidden="true"></div>
    </div>
  );
});

PersistentBackground.displayName = "PersistentBackground";

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
        defaultMuted
        playsInline
        webkit-playsinline="true"
        preload="metadata"
        aria-label={slide.alt}
      >
        <source src={slide.circleImage} type="video/mp4" />
      </video>
    );
  }

  return (
    <Image
      src={slide.circleImage}
      alt={slide.alt}
      loading="lazy"
      fetchPriority="low"
      decoding="async"
      width={500}
      height={500}
      sizes="(max-width: 768px) 70vw, 500px"
    />
  );
});

CircleMedia.displayName = "CircleMedia";

const RightHeroImage = memo(({ slide, isActive, isFirstSlide }) => {
  if (!slide.rightImage) return null;

  const shouldRenderImage = isActive || isFirstSlide;

  return (
    <motion.div
      className="right-hero-image"
      initial={false}
      animate={
        isActive
          ? { x: 0, opacity: 1, scale: 1 }
          : { x: "100%", opacity: 0, scale: 0.9 }
      }
      transition={{
        duration: isFirstSlide ? 0 : 1,
        delay: 0,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      aria-hidden="true"
    >
      {shouldRenderImage && (
        <Image
          src={slide.rightImage}
          alt={slide.alt}
          priority={isFirstSlide}
          loading={isFirstSlide ? "eager" : "lazy"}
          fetchPriority={isFirstSlide ? "high" : "low"}
          decoding={isFirstSlide ? "sync" : "async"}
          width={900}
          height={650}
          quality={75}
          sizes="(max-width: 1024px) 0px, (max-width: 1200px) 52vw, 680px"
        />
      )}
    </motion.div>
  );
});

RightHeroImage.displayName = "RightHeroImage";

const StaticTitle = memo(({ text }) => {
  return (
    <h1 className="slide-title typing-title !font-seasons" aria-label={text}>
      {text.split(" ").map((word, index, array) => (
        <span
          key={`${word}-${index}`}
          className="title-word-group"
          aria-hidden="true"
          style={{ marginRight: index < array.length - 1 ? "0.22em" : 0 }}
        >
          {word}
        </span>
      ))}
    </h1>
  );
});

StaticTitle.displayName = "StaticTitle";

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

const SlideContent = memo(
  ({ slide, isActive, direction, isInitialLcpSlide }) => {
    const typingEndTime = useMemo(() => {
      const totalChars = slide.mainTitle.replace(/\s/g, "").length;
      return 0.25 + totalChars * 0.035 + 0.15;
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
      [typingEndTime]
    );

    const descriptionVariants = useMemo(
      () => ({
        hidden: { x: -80, opacity: 0 },
        visible: {
          x: 0,
          opacity: 1,
          transition: {
            duration: 0.7,
            delay: typingEndTime + 0.15,
            ease: "easeOut",
          },
        },
      }),
      [typingEndTime]
    );

    const buttonVariants = useMemo(
      () => ({
        hidden: { scale: 0, opacity: 0 },
        visible: {
          scale: 1,
          opacity: 1,
          transition: {
            duration: 0.5,
            delay: typingEndTime + 0.3,
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
      [typingEndTime]
    );

    if (!isActive) return null;

    if (isInitialLcpSlide) {
      return (
        <div className="content-wrapper">
          <h2 className="slide-subtitle !font-yesteryear">{slide.title}</h2>

          <StaticTitle text={slide.mainTitle} />

          <p className="slide-description !font-seasons">{slide.description}</p>

          {slide.hasButton && (
            <div className="w-fit">
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
            </div>
          )}
        </div>
      );
    }

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
  }
);

SlideContent.displayName = "SlideContent";

const Particles = memo(() => {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const isMobile = window.matchMedia("(max-width: 768px)").matches;
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    // اوقف الـ particles على الموبايل وreduced motion
    if (isMobile || prefersReducedMotion) return;

    setEnabled(true);
  }, []);

  const particles = useMemo(
    () =>
      Array.from({ length: 8 }, (_, i) => (
        <div
          key={`particle-${i}`}
          className="particle"
          style={{ "--i": i }}
          aria-hidden="true"
        />
      )),
    []
  );

  if (!enabled) return null;

  return (
    <div className="particles" aria-hidden="true">
      {particles}
    </div>
  );
});

Particles.displayName = "Particles";

const BannerSwiper = () => {
  const activeIndexRef = useRef(0);
  const swiperRef = useRef(null);
  const autoplayTimerRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [initialLcpDone, setInitialLcpDone] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setInitialLcpDone(true);
    }, 1800);

    return () => window.clearTimeout(timer);
  }, []);

  const handleSlideChange = useCallback((swiper) => {
    const newIndex = swiper.realIndex;
    const currentIndex = activeIndexRef.current;

    if (newIndex === currentIndex) return;

    setInitialLcpDone(true);
    setDirection(newIndex > currentIndex ? 1 : -1);
    activeIndexRef.current = newIndex;
    setActiveIndex(newIndex);
  }, []);

  const handleSwiperInit = useCallback((swiper) => {
    swiperRef.current = swiper;

    autoplayTimerRef.current = window.setTimeout(() => {
      if (!swiperRef.current || !swiperRef.current.autoplay) return;

      swiperRef.current.params.autoplay = AUTOPLAY_CONFIG;
      swiperRef.current.autoplay.start();
    }, 1500);
  }, []);

  useEffect(() => {
    return () => {
      if (autoplayTimerRef.current) {
        window.clearTimeout(autoplayTimerRef.current);
      }
    };
  }, []);

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
    []
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
        onSwiper={handleSwiperInit}
        onSlideChange={handleSlideChange}
        pagination={PAGINATION_CONFIG}
        slidesPerView={1}
        speed={1000}
        loop={true}
        autoplay={false}
        watchSlidesProgress={false}
        a11y={A11Y_CONFIG}
        className="home-swiper-new"
      >
        {SLIDES_DATA.map((slide, index) => {
          const isActive = activeIndex === index;
          const isFirstSlide = index === 0;
          const isInitialLcpSlide = isFirstSlide && isActive && !initialLcpDone;

          return (
            <SwiperSlide key={slide.id}>
              <article
                className={`slide-container ${slide.rightImage ? "has-right-hero" : ""
                  }`}
              >
                <div className="slide-content">
                  <AnimatePresence mode="wait">
                    <SlideContent
                      key={`content-${slide.id}-${activeIndex}-${initialLcpDone}`}
                      slide={slide}
                      isActive={isActive}
                      direction={direction}
                      isInitialLcpSlide={isInitialLcpSlide}
                    />
                  </AnimatePresence>
                </div>

                {slide.rightImage && (
                  <RightHeroImage
                    slide={slide}
                    isActive={isActive}
                    isFirstSlide={isFirstSlide}
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
          );
        })}
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