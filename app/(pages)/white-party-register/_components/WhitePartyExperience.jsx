"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { useEffect, useRef } from "react";
import BranchesImage from "../../../../utils/BranchesImage/BranchesImage";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const WHITE_BRANCH = "/images/white-blossom-branch.webp";
const PLACEHOLDER = "/images/placeholder.webp";

const experiences = [
  {
    id: "dj",
    number: "01",
    tag: "Music",
    tagColor: "mint",
    title: "Live Afro-Arabic DJ",
    description:
      "Enjoy live music all afternoon with carefully curated Afro-Arabic vibes that keep the energy elegant and vibrant.",
    image: "/images/exp-01-dj.webp",
    imageAlt: "Live DJ performing at Nour Maison White Party",
    span: "wide",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M3 18v-6a9 9 0 0 1 18 0v6" />
        <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" />
      </svg>
    ),
  },
  {
    id: "coffee",
    number: "02",
    tag: "Beverage",
    tagColor: "gold",
    title: "Coffee & Matcha Specials",
    description:
      "Limited-edition drinks crafted exclusively for the White Party by our resident baristas.",
    image: "/images/exp-02-coffee.webp",
    imageAlt: "Signature coffee and matcha drinks at Nour Maison",
    span: "narrow",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M17 8h1a4 4 0 0 1 0 8h-1" />
        <path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4z" />
        <line x1="6" y1="2" x2="6" y2="4" />
        <line x1="10" y1="2" x2="10" y2="4" />
        <line x1="14" y1="2" x2="14" y2="4" />
      </svg>
    ),
  },
  {
    id: "spin",
    number: "03",
    tag: "Activity",
    tagColor: "gold",
    title: "Spin & Win",
    description:
      "Spin the wheel for exclusive prizes, desserts and vouchers throughout the afternoon.",
    image: "/images/exp-03-spin.webp",
    imageAlt: "Elegant spin and win wheel at Nour Maison event",
    span: "third",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <circle cx="12" cy="12" r="10" />
        <circle cx="12" cy="12" r="4" />
        <line x1="12" y1="2" x2="12" y2="8" />
        <line x1="12" y1="16" x2="12" y2="22" />
        <line x1="2" y1="12" x2="8" y2="12" />
        <line x1="16" y1="12" x2="22" y2="12" />
      </svg>
    ),
  },
  {
    id: "corner",
    number: "04",
    tag: "Experience",
    tagColor: "mint",
    title: "Content Corner",
    description:
      "A beautifully designed content space perfect for capturing photos and videos.",
    image: "/images/exp-04-content-corner.webp",
    imageAlt: "Content corner with floral styling at Nour Maison",
    span: "third",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
        <circle cx="12" cy="13" r="4" />
      </svg>
    ),
  },
  {
    id: "challenge",
    number: "05",
    tag: "Challenge",
    tagColor: "gold",
    title: "Content Challenge",
    description:
      "Post your drink and tag @NourMaison. One winner receives a Golden Ticket for a complimentary dinner for two.",
    image: "/images/exp-05-content-challenge.webp",
    imageAlt: "Guests sharing content at White Party by Nour Maison",
    span: "third",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
        <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
        <path d="M4 22h16" />
        <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
        <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
        <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
      </svg>
    ),
  },
  {
    id: "best-dressed",
    number: "06",
    tag: "Style",
    tagColor: "mint",
    title: "Best Dressed in White",
    description:
      "Wear your best all-white outfit and stand out. The winner receives a complimentary brunch or dessert box.",
    image: "/images/exp-06-best-dressed.webp",
    imageAlt:
      "Elegant guests dressed in white at Nour Maison White Party celebration",
    span: "overlay",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M2 4l3 12h14l3-12-6 7-4-7-4 7-6-7z" />
        <path d="M5 16v4h14v-4" />
      </svg>
    ),
  },
  {
    id: "golden-cup",
    number: "07",
    tag: "Surprise",
    tagColor: "gold",
    title: "Golden Cup",
    description:
      "One lucky drink hides a golden sticker underneath. Find it and win an exclusive surprise prize.",
    image: "/images/exp-07-golden-cup.webp",
    imageAlt: "Golden cup surprise at Nour Maison White Party",
    span: "third",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M8 21h8" />
        <path d="M12 17v4" />
        <path d="M17 4H7v7a5 5 0 0 0 10 0V4Z" />
        <path d="M17 4h3a2 2 0 0 1 2 2v2a4 4 0 0 1-4 4h-1" />
        <path d="M7 4H4a2 2 0 0 0-2 2v2a4 4 0 0 0 4 4h1" />
      </svg>
    ),
  },
  {
    id: "receipt",
    number: "08",
    tag: "Draw",
    tagColor: "gold",
    title: "Lucky Receipt Draw",
    description:
      "At the end of the evening, one receipt will be randomly selected to win a Nour Maison voucher.",
    image: "/images/exp-08-lucky-receipt.webp",
    imageAlt: "Lucky receipt draw display at Nour Maison",
    span: "narrow",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <polyline points="20 12 20 22 4 22 4 12" />
        <rect x="2" y="7" width="20" height="5" />
        <line x1="12" y1="22" x2="12" y2="7" />
        <path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z" />
        <path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z" />
      </svg>
    ),
  },
  {
    id: "host",
    number: "09",
    tag: "Content",
    tagColor: "mint",
    title: "Live Content Host",
    description:
      "Our content creator will capture guest reactions, outfits, drinks and games throughout the event.",
    image: "/images/exp-09-live-host.webp",
    imageAlt: "Live content host capturing moments at Nour Maison event",
    span: "wide",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z" />
        <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
        <line x1="12" y1="19" x2="12" y2="23" />
        <line x1="8" y1="23" x2="16" y2="23" />
      </svg>
    ),
  },
];

// Bento grid col-span classes per card
const getSpanClass = (span) => {
  switch (span) {
    case "wide":
      return "lg:col-span-8";
    case "narrow":
      return "lg:col-span-4";
    case "third":
      return "lg:col-span-4";
    case "overlay":
      return "lg:col-span-8";
    default:
      return "lg:col-span-4";
  }
};

// Tag color styles
const getTagStyle = (color) => {
  return color === "mint"
    ? "bg-softMintGreen/95 text-white"
    : "bg-goldenOrange/95 text-white";
};

const WhitePartyExperience = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header
      gsap.fromTo(
        ".exp-header > *",
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
            toggleActions: "play none none reverse",
          },
        },
      );

      // Cards
      gsap.fromTo(
        ".exp-card",
        { y: 40, opacity: 0, scale: 0.98 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.7,
          stagger: 0.08,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".exp-grid",
            start: "top 82%",
            toggleActions: "play none none reverse",
          },
        },
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="what-to-expect"
      className="relative py-16 sm:py-20 md:py-28 overflow-hidden"
      aria-labelledby="what-to-expect-heading"
    >
      {/* ─── Decorative Branches ─── */}
      <BranchesImage
        variant="top-right"
        image={WHITE_BRANCH}
        className="hidden md:block z-0 opacity-90 top-16 translate-x-[10%] -translate-y-[10%]"
        imgClassName="w-[220px] lg:w-[300px] h-auto drop-shadow-[0_10px_20px_rgba(0,0,0,0.05)]"
      />
      <BranchesImage
        variant="bottom-left"
        image={WHITE_BRANCH}
        className="hidden md:block z-0 opacity-90 bottom-16 -translate-x-[10%] translate-y-[10%]"
        imgClassName="w-[220px] lg:w-[300px] h-auto drop-shadow-[0_10px_20px_rgba(0,0,0,0.05)]"
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* ─── Header ─── */}
        <header className="exp-header text-center mb-12 sm:mb-16 max-w-3xl mx-auto">
          <p className="wp-fade-pulse font-oswald text-xs sm:text-sm uppercase tracking-[0.32em] text-goldenOrange mb-4 font-semibold">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-softMintGreen mr-3 -translate-y-0.5" />
            The Experience
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-softMintGreen ml-3 -translate-y-0.5" />
          </p>

          <h2
            id="what-to-expect-heading"
            className="font-seasons text-3xl sm:text-4xl md:text-5xl lg:text-6xl italic text-logoGold mb-6 md:mb-8 leading-tight"
            style={{
              textShadow:
                "2px 2px 0px rgba(255,255,255,0.9), 0 4px 15px rgba(0,0,0,0.1)",
            }}
          >
            What to Expect
            <span className="block text-goldenOrange mt-1 sm:mt-2">
              on the Day
            </span>
          </h2>

          <div className="wp-breathe bg-white/85 backdrop-blur-md border-2 border-white shadow-xl rounded-2xl p-5 sm:p-6 md:p-8 max-w-3xl mx-auto">
            <p className="font-oswald text-[#3a352f] text-base sm:text-lg md:text-xl leading-relaxed md:leading-loose">
              Nine curated experiences designed to make your White Party
              afternoon at{" "}
              <strong className="text-logoGold">Nour Maison</strong> truly
              unforgettable — from{" "}
              <strong className="text-logoGold">live music</strong> to{" "}
              <strong className="text-logoGold">surprise prizes</strong>.
            </p>
          </div>
        </header>

        {/* ─── Bento Grid ─── */}
        <ul
          className="exp-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-5 sm:gap-6"
          role="list"
        >
          {experiences.map((exp) => {
            const isOverlay = exp.span === "overlay";
            const spanClass = getSpanClass(exp.span);

            return (
              <li
                key={exp.id}
                className={`exp-card-wrapper ${spanClass} md:col-span-1 lg:col-span-${spanClass}`}
              >
                <article
                  className={`exp-card group relative h-full rounded-3xl overflow-hidden bg-[#faf5e8] border-2 border-white shadow-xl hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-500 ${
                    isOverlay ? "exp-card-overlay" : "flex flex-col"
                  }`}
                >
                  {/* ─── Image ─── */}
                  <div
                    className={`relative overflow-hidden ${
                      isOverlay
                        ? "absolute inset-0 w-full h-full"
                        : exp.span === "wide"
                          ? "h-56 sm:h-64 md:h-72"
                          : "h-52 sm:h-56 md:h-60"
                    }`}
                  >
                    <Image
                      src={exp.image || PLACEHOLDER}
                      alt={exp.imageAlt}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 40vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    />

                    {/* Overlay gradient (only for overlay card) */}
                    {isOverlay && (
                      <div
                        className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/10 pointer-events-none"
                        aria-hidden="true"
                      />
                    )}

                    {/* Tag pill */}
                    <span
                      className={`absolute top-4 left-4 z-10 inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full backdrop-blur-md shadow-md font-oswald text-[10px] sm:text-xs uppercase tracking-[0.18em] font-semibold ${getTagStyle(exp.tagColor)}`}
                    >
                      <span
                        className="inline-block h-1 w-1 rounded-full bg-white"
                        aria-hidden="true"
                      />
                      {exp.tag}
                    </span>

                    {/* Number watermark on image */}
                    <span
                      className={`absolute top-4 right-4 z-10 font-seasons italic text-2xl sm:text-3xl select-none pointer-events-none ${
                        isOverlay ? "text-white/70" : "text-white/85"
                      }`}
                      style={{
                        textShadow: "0 2px 8px rgba(0,0,0,0.4)",
                      }}
                      aria-hidden="true"
                    >
                      {exp.number}
                    </span>
                  </div>

                  {/* ─── Content ─── */}
                  {isOverlay ? (
                    // Overlay content (positioned bottom on image)
                    <div className="absolute bottom-0 left-0 right-0 z-10 p-6 sm:p-7 md:p-8">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 rounded-xl bg-white/95 backdrop-blur-sm flex items-center justify-center text-goldenOrange shadow-lg shrink-0">
                          <div className="w-5 h-5">{exp.icon}</div>
                        </div>
                        <h3
                          className="font-seasons italic text-2xl sm:text-3xl text-white leading-tight"
                          style={{
                            textShadow: "0 2px 12px rgba(0,0,0,0.5)",
                          }}
                        >
                          {exp.title}
                        </h3>
                      </div>
                      <p
                        className="font-inter text-sm sm:text-base text-white/95 leading-relaxed max-w-md"
                        style={{
                          textShadow: "0 1px 6px rgba(0,0,0,0.5)",
                        }}
                      >
                        {exp.description}
                      </p>
                    </div>
                  ) : (
                    // Regular card content
                    <div className="p-6 sm:p-7 flex-1 flex flex-col">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-goldenOrange to-logoGold flex items-center justify-center text-white shadow-md shrink-0 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                          <div className="w-5 h-5">{exp.icon}</div>
                        </div>
                        <h3
                          className="font-nour italic text-xl sm:text-2xl text-logoGold leading-tight"
                          style={{
                            textShadow: "1px 1px 0px rgba(255,255,255,0.9)",
                          }}
                        >
                          {exp.title}
                        </h3>
                      </div>
                      <p className="font-inter text-sm sm:text-[15px] text-[#5a5147] leading-relaxed flex-1">
                        {exp.description}
                      </p>

                      {/* Decorative bottom line */}
                      <div
                        className="mt-5 h-px w-12 bg-gradient-to-r from-goldenOrange/60 to-transparent group-hover:w-24 transition-all duration-500"
                        aria-hidden="true"
                      />
                    </div>
                  )}
                </article>
              </li>
            );
          })}
        </ul>

        {/* ─── Footer Note ─── */}
        <p className="text-center mt-12 sm:mt-14 font-inter text-sm sm:text-base text-[#7a6f60] italic max-w-2xl mx-auto">
          <span className="text-goldenOrange font-semibold not-italic">
            And that&apos;s not all —
          </span>{" "}
          even more surprises await on the day of the event.
        </p>
      </div>
    </section>
  );
};

export default WhitePartyExperience;
