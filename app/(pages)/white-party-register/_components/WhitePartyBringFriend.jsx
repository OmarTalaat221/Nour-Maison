"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
import { Link as ScrollLink } from "react-scroll";
import BranchesImage from "../../../../utils/BranchesImage/BranchesImage";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const WHITE_BRANCH = "/images/white-blossom-branch.webp";

const steps = [
  {
    number: "01",
    title: "Bring Your Friend",
    description:
      "Invite someone special to share the White Party experience with you.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Follow on Instagram",
    description:
      "Follow @NourMaison on Instagram to stay connected with our latest moments.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Enjoy a Free Drink",
    description:
      "Show your tickets and Instagram follow on arrival to redeem your complimentary drink.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
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
];

const WhitePartyBringFriend = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header
      gsap.fromTo(
        ".bf-header > *",
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

      // Steps
      gsap.fromTo(
        ".bf-step",
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".bf-steps-grid",
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        },
      );

      // CTA
      gsap.fromTo(
        ".bf-cta-card",
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".bf-cta-card",
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
      id="bring-a-friend"
      className="relative py-16 sm:py-20 md:py-28 overflow-hidden"
      aria-labelledby="bring-friend-heading"
    >
      {/* ─── Decorative Branches ─── */}
      <BranchesImage
        variant="top-left"
        image={WHITE_BRANCH}
        className="hidden md:block z-0 opacity-90 top-16 -translate-x-[15%] -translate-y-[10%]"
        imgClassName="w-[220px] lg:w-[300px] h-auto drop-shadow-[0_10px_20px_rgba(0,0,0,0.05)]"
      />
      <BranchesImage
        variant="bottom-right"
        image={WHITE_BRANCH}
        className="hidden md:block z-0 opacity-90 bottom-16 translate-x-[15%] translate-y-[10%]"
        imgClassName="w-[220px] lg:w-[300px] h-auto drop-shadow-[0_10px_20px_rgba(0,0,0,0.05)]"
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* ─── Header ─── */}
        <header className="bf-header text-center mb-12 sm:mb-16 max-w-3xl mx-auto">
          <p className="wp-fade-pulse font-oswald text-xs sm:text-sm uppercase tracking-[0.32em] text-goldenOrange mb-4 font-semibold">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-softMintGreen mr-3 -translate-y-0.5" />
            Exclusive Perk
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-softMintGreen ml-3 -translate-y-0.5" />
          </p>

          <h2
            id="bring-friend-heading"
            className="font-seasons text-3xl sm:text-4xl md:text-5xl lg:text-6xl italic text-logoGold mb-6 md:mb-8 leading-tight"
            style={{
              textShadow:
                "2px 2px 0px rgba(255,255,255,0.9), 0 4px 15px rgba(0,0,0,0.1)",
            }}
          >
            Bring a Friend
            <span className="block text-goldenOrange mt-1 sm:mt-2">
              Get a Free Drink
            </span>
          </h2>

          <div className="wp-breathe bg-white/85 backdrop-blur-md border-2 border-white shadow-xl rounded-2xl p-5 sm:p-6 md:p-8 max-w-3xl mx-auto">
            <p className="font-oswald text-[#3a352f] text-base sm:text-lg md:text-xl leading-relaxed md:leading-loose">
              Share the moment with someone special. Follow us on Instagram and
              enjoy a{" "}
              <strong className="text-logoGold">complimentary drink</strong> on
              arrival — our little gift to you both.
            </p>
          </div>
        </header>

        {/* ─── Steps Grid ─── */}
        <div className="bf-steps-grid grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 md:gap-7 mb-14 sm:mb-16 relative">
          {/* Connecting line (desktop only) */}
          <div
            className="hidden md:block absolute top-16 left-[16.66%] right-[16.66%] h-px bg-gradient-to-r from-transparent via-goldenOrange/30 to-transparent pointer-events-none"
            aria-hidden="true"
          />

          {steps.map((step, i) => (
            <div
              key={step.number}
              style={{ "--wp-delay": `${i * 0.3}s` }}
              className="bf-step wp-float relative bg-white/95 backdrop-blur-md border-2 border-white shadow-xl rounded-3xl p-6 sm:p-7 md:p-8 text-center hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 group"
            >
              {/* Icon circle */}
              <div className="relative inline-flex mb-5">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-br from-goldenOrange to-logoGold flex items-center justify-center text-white shadow-lg group-hover:scale-105 group-hover:rotate-3 transition-transform duration-300">
                  <div className="w-7 h-7 sm:w-8 sm:h-8">{step.icon}</div>
                </div>
                {/* Number badge */}
                <span className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-white border-2 border-softMintGreen flex items-center justify-center font-oswald text-xs font-bold text-softMintGreen shadow-md">
                  {step.number}
                </span>
              </div>

              {/* Title */}
              <h3
                className="font-seasons italic text-xl sm:text-2xl text-logoGold mb-3 leading-tight"
                style={{ textShadow: "1px 1px 0px rgba(255,255,255,0.9)" }}
              >
                {step.title}
              </h3>

              {/* Description */}
              <p className="font-inter text-sm sm:text-base text-[#5a5147] leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* ─── CTA Card ─── */}
        <div
          className="bf-cta-card wp-cta-glow relative rounded-3xl p-6 sm:p-8 md:p-10 lg:p-12 text-center border-2 border-goldenOrange/40 shadow-2xl overflow-hidden"
          style={{
            background:
              "linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(249,228,188,0.5) 100%)",
          }}
        >
          {/* Decorative tickets (top-right corner) */}
          <div
            className="hidden lg:block absolute -top-6 -right-6 opacity-90 pointer-events-none select-none"
            aria-hidden="true"
          >
            <div className="relative w-40 h-40">
              {/* Back ticket */}
              <div className="bf-deco-ticket-back absolute top-4 -left-2 w-24 h-32 rounded-xl bg-gradient-to-br from-softMintGreen to-[#6f9758] shadow-xl -rotate-[15deg] border-2 border-white/60 flex flex-col items-center justify-center p-2">
                <p className="font-oswald text-[8px] uppercase tracking-widest text-white/80 mb-1">
                  Admit
                </p>
                <p className="font-seasons italic text-white text-sm leading-tight text-center">
                  White
                  <br />
                  <span className="text-goldenOrange">Party</span>
                </p>
              </div>
              {/* Front ticket */}
              <div className="bf-deco-ticket-front absolute top-0 left-6 w-24 h-32 rounded-xl bg-white shadow-xl rotate-[10deg] border-2 border-logoGold/30 flex flex-col items-center justify-center p-2">
                <p className="font-oswald text-[8px] uppercase tracking-widest text-goldenOrange mb-1">
                  Admit
                </p>
                <p className="font-seasons italic text-logoGold text-sm leading-tight text-center">
                  White
                  <br />
                  <span className="text-goldenOrange">Party</span>
                </p>
              </div>
            </div>
          </div>

          <div className="relative z-10 max-w-2xl mx-auto">
            <p className="wp-fade-pulse font-oswald text-xs uppercase tracking-[0.24em] text-goldenOrange mb-3 font-semibold">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-softMintGreen mr-2 -translate-y-0.5" />
              Complimentary Drink Included
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-softMintGreen ml-2 -translate-y-0.5" />
            </p>

            <h3
              className="font-seasons text-2xl sm:text-3xl md:text-4xl italic text-logoGold mb-4 leading-snug"
              style={{ textShadow: "1px 1px 0px rgba(255,255,255,0.9)" }}
            >
              Ready to Share the
              <span className="block text-goldenOrange">Experience?</span>
            </h3>

            <p className="font-inter text-[#5a5147] text-sm sm:text-base leading-relaxed mb-7 max-w-xl mx-auto">
              Follow us on Instagram, book your ticket, and bring a friend
              along. Show both tickets and your follow on arrival to enjoy a
              complimentary drink on us.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch justify-center gap-3">
              <a
                href="https://www.instagram.com/nourmaison"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow Nour Maison on Instagram (opens in a new tab)"
                className="wp-btn-bounce shimmer-btn cursor-pointer inline-flex items-center justify-center gap-2 bg-goldenOrange hover:bg-logoGold text-white hover:text-white font-nour text-lg sm:text-xl px-7 py-3.5 rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 no-underline hover:no-underline whitespace-nowrap"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                  aria-hidden="true"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
                Follow @NourMaison
              </a>

              <ScrollLink
                to="ticket-booking"
                smooth={true}
                duration={500}
                offset={-120}
                className="cursor-pointer inline-flex items-center justify-center gap-2 border-2 border-goldenOrange/50 hover:border-goldenOrange bg-white/60 hover:bg-white text-logoGold hover:text-goldenOrange font-inter text-sm sm:text-base font-medium px-6 py-3.5 rounded-full transition-all duration-300 no-underline hover:no-underline whitespace-nowrap"
                aria-label="Jump to booking form"
              >
                Book Your Ticket
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-4 w-4"
                  aria-hidden="true"
                >
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </ScrollLink>
            </div>

            <p className="mt-5 font-inter text-[#7a6f60] text-xs sm:text-sm italic">
              Complimentary drink is redeemable on arrival upon verification of
              both tickets and Instagram follow.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhitePartyBringFriend;
