"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { Link as ScrollLink } from "react-scroll";
import BottomBg from "../../../../utils/bottomBg/BottomBg";
// import BottomBg from "../../../../utils/BottomBg/BottomBg";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const FINAL_BG = "/images/final-cta-bg.webp";
const FINAL_BG_ALT =
  "Warm golden hour glow at Nour Maison White Party — the perfect ending to an unforgettable summer afternoon";

const eventDetails = [
  {
    label: "Date",
    value: "26 July 2026",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
        <line x1="16" y1="2" x2="16" y2="6" />
        <line x1="8" y1="2" x2="8" y2="6" />
        <line x1="3" y1="10" x2="21" y2="10" />
      </svg>
    ),
  },
  {
    label: "Time",
    value: "From 3:00 PM",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
  },
  {
    label: "Location",
    value: "Nour Maison, Milton Keynes",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
  },
];

const WhitePartyFinalCTA = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Teaser badge entrance
      gsap.fromTo(
        ".fcta-teaser",
        { y: 30, opacity: 0, scale: 0.9 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.9,
          ease: "back.out(1.4)",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
            toggleActions: "play none none reverse",
          },
        },
      );

      // Content stagger
      gsap.fromTo(
        ".fcta-content > *",
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.14,
          ease: "power3.out",
          delay: 0.2,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
            toggleActions: "play none none reverse",
          },
        },
      );

      // Details cards
      gsap.fromTo(
        ".fcta-detail",
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          stagger: 0.1,
          ease: "power3.out",
          delay: 0.4,
          scrollTrigger: {
            trigger: ".fcta-details",
            start: "top 85%",
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
      id="final-cta"
      className="relative w-full overflow-hidden"
      aria-labelledby="final-cta-heading"
    >
      <div className="relative w-full min-h-[700px] sm:min-h-[750px] md:min-h-[800px] lg:min-h-[850px] flex items-center justify-center">
        {/* ─── Background Image ─── */}
        <Image
          src={FINAL_BG}
          alt={FINAL_BG_ALT}
          fill
          priority={false}
          sizes="100vw"
          quality={90}
          className="object-cover object-center select-none"
        />

        {/* Dark cinematic overlay */}
        <div
          className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/75 pointer-events-none"
          aria-hidden="true"
        />

        {/* Golden radial glow center */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] rounded-full bg-goldenOrange/15 blur-3xl pointer-events-none"
          aria-hidden="true"
        />

        {/* ─── Floating Sparkles ─── */}
        <div
          className="absolute inset-0 pointer-events-none overflow-hidden"
          aria-hidden="true"
        >
          <span className="fcta-sparkle fcta-sparkle-1" />
          <span className="fcta-sparkle fcta-sparkle-2" />
          <span className="fcta-sparkle fcta-sparkle-3" />
          <span className="fcta-sparkle fcta-sparkle-4" />
          <span className="fcta-sparkle fcta-sparkle-5" />
          <span className="fcta-sparkle fcta-sparkle-6" />
          <span className="fcta-sparkle fcta-sparkle-7" />
          <span className="fcta-sparkle fcta-sparkle-8" />
        </div>

        {/* ─── Content ─── */}
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 md:py-24 flex flex-col items-center text-center">
          {/* Surprise Teaser Badge */}
          <div className="fcta-teaser inline-flex items-center gap-2 px-5 py-2.5 mb-8 rounded-full backdrop-blur-md bg-white/10 border border-goldenOrange/40 shadow-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-4 w-4 text-goldenOrange fcta-teaser-icon"
              aria-hidden="true"
            >
              <path d="M12 2l2.09 6.26L20 10l-5.91 1.74L12 18l-2.09-6.26L4 10l5.91-1.74L12 2z" />
            </svg>
            <span className="font-oswald text-[10px] sm:text-xs uppercase tracking-[0.3em] text-white font-semibold">
              And that&apos;s not all
            </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-4 w-4 text-goldenOrange fcta-teaser-icon"
              aria-hidden="true"
            >
              <path d="M12 2l2.09 6.26L20 10l-5.91 1.74L12 18l-2.09-6.26L4 10l5.91-1.74L12 2z" />
            </svg>
          </div>

          {/* Content wrapper */}
          <div className="fcta-content max-w-4xl">
            {/* Eyebrow */}
            <p className="font-oswald text-xs sm:text-sm uppercase tracking-[0.4em] text-goldenOrange mb-5 font-semibold drop-shadow-md">
              The Final Invitation
            </p>

            {/* Main Heading */}
            <h2
              id="final-cta-heading"
              className="font-seasons italic text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl leading-tight tracking-tight mb-6"
              style={{
                textShadow:
                  "0 4px 25px rgba(0,0,0,0.5), 0 2px 8px rgba(0,0,0,0.4)",
              }}
            >
              Ready to experience
              <span className="block text-goldenOrange mt-2">
                the White Party?
              </span>
            </h2>

            {/* Decorative divider */}
            <div
              className="flex items-center justify-center gap-3 mb-6"
              aria-hidden="true"
            >
              <span className="h-px w-16 sm:w-24 bg-gradient-to-r from-transparent to-goldenOrange/70" />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-4 w-4 text-goldenOrange"
              >
                <path d="M12 2l2.09 6.26L20 10l-5.91 1.74L12 18l-2.09-6.26L4 10l5.91-1.74L12 2z" />
              </svg>
              <span className="h-px w-16 sm:w-24 bg-gradient-to-l from-transparent to-goldenOrange/70" />
            </div>

            {/* Surprise Description */}
            <p
              className="font-seasons italic text-white/95 text-base sm:text-lg md:text-xl max-w-2xl mx-auto mb-4 leading-relaxed"
              style={{ textShadow: "0 2px 12px rgba(0,0,0,0.5)" }}
            >
              Some surprises will only be revealed on the{" "}
              <span className="text-goldenOrange font-semibold">
                day of the event
              </span>{" "}
              — but one thing&apos;s certain:
            </p>

            <p
              className="font-inter text-white/90 text-sm sm:text-base max-w-xl mx-auto mb-10 leading-relaxed"
              style={{ textShadow: "0 1px 8px rgba(0,0,0,0.4)" }}
            >
              This is an afternoon you&apos;ll remember for a long time. Reserve
              your spot before it&apos;s gone.
            </p>

            {/* CTA Button */}
            <div className="mb-12">
              <ScrollLink
                to="ticket-booking"
                smooth={true}
                duration={500}
                offset={-120}
                className="wp-btn-bounce shimmer-btn cursor-pointer inline-flex items-center justify-center gap-3 bg-goldenOrange hover:bg-logoGold text-white hover:text-white font-nour text-xl sm:text-2xl md:text-3xl px-10 sm:px-12 md:px-14 py-4 sm:py-5 rounded-full shadow-2xl hover:shadow-[0_20px_60px_-10px_rgba(221,153,51,0.7)] transition-all duration-300 transform hover:scale-105 no-underline hover:no-underline whitespace-nowrap"
                aria-label="Reserve your White Party spot now"
              >
                Reserve Your Spot
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6"
                  aria-hidden="true"
                >
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </ScrollLink>

              <p
                className="mt-4 font-inter text-white/70 text-xs sm:text-sm italic"
                style={{ textShadow: "0 1px 4px rgba(0,0,0,0.4)" }}
              >
                Limited spots available — booking closes soon
              </p>
            </div>

            {/* Event Details */}
            <div className="fcta-details grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 max-w-3xl mx-auto">
              {eventDetails.map((detail) => (
                <div
                  key={detail.label}
                  className="fcta-detail flex items-center justify-center sm:justify-start gap-3 px-5 py-4 rounded-2xl backdrop-blur-md bg-white/10 border border-white/25 shadow-lg hover:bg-white/15 hover:border-white/40 transition-all duration-300"
                >
                  <div className="shrink-0 w-10 h-10 rounded-xl bg-goldenOrange/20 border border-goldenOrange/40 flex items-center justify-center text-goldenOrange">
                    <div className="w-5 h-5">{detail.icon}</div>
                  </div>
                  <div className="text-left">
                    <p className="font-oswald text-[10px] uppercase tracking-[0.22em] text-white/70 font-semibold">
                      {detail.label}
                    </p>
                    <p className="font-seasons italic text-white text-sm sm:text-base leading-tight">
                      {detail.value}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ─── Bottom Bg ─── */}
        <BottomBg />
      </div>
    </section>
  );
};

export default WhitePartyFinalCTA;
