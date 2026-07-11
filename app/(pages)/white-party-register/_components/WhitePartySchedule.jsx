"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
import BranchesImage from "../../../../utils/BranchesImage/BranchesImage";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const WHITE_BRANCH = "/images/white-blossom-branch.webp";

const schedule = [
  {
    time: "3:00 PM",
    dateTime: "15:00",
    title: "Doors Open & Welcome Drinks",
    description:
      "Kick off the afternoon with a signature welcome drink as you step into the White Party.",
    highlight: true,
    sunset: false,
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
        <path d="M3 21h18" />
        <path d="M5 21V7l7-4 7 4v14" />
        <path d="M9 21v-6h6v6" />
      </svg>
    ),
  },
  {
    time: "3:30 PM",
    dateTime: "15:30",
    title: "Live Afro-Arabic DJ Begins",
    description:
      "Our DJ takes the stage with a curated Afro-Arabic set that fills the space with energy.",
    highlight: false,
    sunset: false,
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
        <path d="M9 18V5l12-2v13" />
        <circle cx="6" cy="18" r="3" />
        <circle cx="18" cy="16" r="3" />
      </svg>
    ),
  },
  {
    time: "4:00 PM",
    dateTime: "16:00",
    title: "Spin & Win Opens",
    description:
      "Take your first spin of the wheel — desserts, drinks and vouchers up for grabs.",
    highlight: false,
    sunset: false,
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
        <circle cx="12" cy="12" r="3" />
        <line x1="12" y1="2" x2="12" y2="9" />
        <line x1="12" y1="15" x2="12" y2="22" />
      </svg>
    ),
  },
  {
    time: "4:30 PM",
    dateTime: "16:30",
    title: "Content Challenge Begins",
    description:
      "Post your drink and tag @NourMaison — one lucky guest wins a Golden Dinner for two.",
    highlight: false,
    sunset: false,
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
        <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
        <circle cx="12" cy="13" r="4" />
      </svg>
    ),
  },
  {
    time: "5:00 PM",
    dateTime: "17:00",
    title: "Coffee & Matcha Specials Unveiled",
    description:
      "Limited-edition drinks crafted just for the White Party are now available at the bar.",
    highlight: false,
    sunset: false,
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
        <path d="M17 8h1a4 4 0 0 1 0 8h-1" />
        <path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4z" />
        <line x1="6" y1="2" x2="6" y2="4" />
        <line x1="10" y1="2" x2="10" y2="4" />
        <line x1="14" y1="2" x2="14" y2="4" />
      </svg>
    ),
  },
  {
    time: "5:30 PM",
    dateTime: "17:30",
    title: "Live Content & Guest Interviews",
    description:
      "Our content creator captures your best moments, reactions and stories.",
    highlight: false,
    sunset: false,
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
        <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z" />
        <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
        <line x1="12" y1="19" x2="12" y2="23" />
        <line x1="8" y1="23" x2="16" y2="23" />
      </svg>
    ),
  },
  {
    time: "6:00 PM",
    dateTime: "18:00",
    title: "Best Dressed in White Judging",
    description:
      "Show off your all-white look — the most stunning outfit wins a special prize.",
    highlight: false,
    sunset: true,
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
        <path d="M2 4l3 12h14l3-12-6 7-4-7-4 7-6-7z" />
        <path d="M5 16v4h14v-4" />
      </svg>
    ),
  },
  {
    time: "6:30 PM",
    dateTime: "18:30",
    title: "Lucky Receipt Draw",
    description:
      "One receipt from the day is picked at random to win a Nour Maison voucher.",
    highlight: true,
    sunset: true,
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
        <polyline points="20 12 20 22 4 22 4 12" />
        <rect x="2" y="7" width="20" height="5" />
        <line x1="12" y1="22" x2="12" y2="7" />
        <path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z" />
        <path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z" />
      </svg>
    ),
  },
  {
    time: "7:00 PM",
    dateTime: "19:00",
    title: "Golden Cup Reveal",
    description:
      "The hidden Golden Cup sticker is revealed — one lucky guest walks home with the surprise prize.",
    highlight: true,
    sunset: true,
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
        <path d="M8 21h8" />
        <path d="M12 17v4" />
        <path d="M17 4H7v7a5 5 0 0 0 10 0V4Z" />
        <path d="M17 4h3a2 2 0 0 1 2 2v2a4 4 0 0 1-4 4h-1" />
        <path d="M7 4H4a2 2 0 0 0-2 2v2a4 4 0 0 0 4 4h1" />
      </svg>
    ),
  },
  {
    time: "7:00 PM+",
    dateTime: "19:00",
    title: "Sunset Vibes & Good Energy",
    description:
      "Wind down with music, laughter and warm golden-hour light — the perfect end to the White Party.",
    highlight: true,
    sunset: true,
    finale: true,
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
        <path d="M17 18a5 5 0 0 0-10 0" />
        <line x1="12" y1="2" x2="12" y2="9" />
        <line x1="4.22" y1="10.22" x2="5.64" y2="11.64" />
        <line x1="1" y1="18" x2="3" y2="18" />
        <line x1="21" y1="18" x2="23" y2="18" />
        <line x1="18.36" y1="11.64" x2="19.78" y2="10.22" />
        <line x1="23" y1="22" x2="1" y2="22" />
      </svg>
    ),
  },
];

const WhitePartySchedule = () => {
  const sectionRef = useRef(null);
  const timelineRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // ─── Header entrance ───
      gsap.fromTo(
        ".sch-header > *",
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

      // ─── Progress line fill (scrub) ───
      // Starts later & ends earlier so it doesn't overshoot the cards
      gsap.to(".sch-progress", {
        height: "100%",
        ease: "none",
        scrollTrigger: {
          trigger: timelineRef.current,
          start: "top 50%",
          end: "bottom 80%",
          scrub: 0.8,
        },
      });

      // ─── Each item activation + card entrance ───
      const items = gsap.utils.toArray(".sch-item");
      const isMobile = window.matchMedia("(max-width: 1023px)").matches;

      items.forEach((item) => {
        const card = item.querySelector(".sch-card");
        const badge = item.querySelector(".sch-badge");
        const isRight = item.classList.contains("sch-item-right");

        // Card entrance from side
        gsap.fromTo(
          card,
          {
            x: isMobile ? 30 : isRight ? 60 : -60,
            opacity: 0,
          },
          {
            x: 0,
            opacity: 1,
            duration: 0.7,
            ease: "power3.out",
            scrollTrigger: {
              trigger: item,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          },
        );

        // Badge + card activation
        ScrollTrigger.create({
          trigger: item,
          start: "top 65%",
          onEnter: () => {
            badge?.classList.add("sch-badge-active");
            card?.classList.add("sch-card-active");
          },
          onLeaveBack: () => {
            badge?.classList.remove("sch-badge-active");
            card?.classList.remove("sch-card-active");
          },
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="event-schedule"
      className="relative py-16 sm:py-20 md:py-28 overflow-hidden"
      aria-labelledby="schedule-heading"
    >
      {/* ─── Decorative Branches ─── */}
      <BranchesImage
        variant="top-left"
        image={WHITE_BRANCH}
        className="hidden md:block z-0 opacity-90 top-16 -translate-x-[15%] -translate-y-[10%]"
        imgClassName="w-[220px] lg:w-[300px] h-auto drop-shadow-[0_10px_20px_rgba(0,0,0,0.05)]"
      />
      <BranchesImage
        variant="top-right"
        image={WHITE_BRANCH}
        className="hidden md:block z-0 opacity-90 bottom-16 translate-x-[15%] translate-y-[10%]"
        imgClassName="w-[220px] lg:w-[300px] h-auto drop-shadow-[0_10px_20px_rgba(0,0,0,0.05)]"
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* ─── Header ─── */}
        <header className="sch-header text-center mb-14 sm:mb-20 max-w-3xl mx-auto">
          <p className="wp-fade-pulse font-oswald text-xs sm:text-sm uppercase tracking-[0.32em] text-goldenOrange mb-4 font-semibold">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-softMintGreen mr-3 -translate-y-0.5" />
            The Full Afternoon
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-softMintGreen ml-3 -translate-y-0.5" />
          </p>

          <h2
            id="schedule-heading"
            className="font-seasons text-3xl sm:text-4xl md:text-5xl lg:text-6xl italic text-logoGold mb-6 md:mb-8 leading-tight"
            style={{
              textShadow:
                "2px 2px 0px rgba(255,255,255,0.9), 0 4px 15px rgba(0,0,0,0.1)",
            }}
          >
            Event Schedule
            <span className="block text-goldenOrange mt-1 sm:mt-2">
              Hour by Hour
            </span>
          </h2>

          <div className="wp-breathe bg-white/85 backdrop-blur-md border-2 border-white shadow-xl rounded-2xl p-5 sm:p-6 md:p-8 max-w-3xl mx-auto">
            <p className="font-oswald text-[#3a352f] text-base sm:text-lg md:text-xl leading-relaxed md:leading-loose">
              From <strong className="text-logoGold">welcome drinks</strong> to
              the <strong className="text-goldenOrange">golden sunset</strong> —
              here&apos;s every moment of your White Party afternoon at Nour
              Maison.
            </p>
          </div>
        </header>

        {/* ─── Timeline ─── */}
        <div
          ref={timelineRef}
          className="sch-timeline relative max-w-5xl mx-auto pb-8"
        >
          {/* Base line */}
          <div
            className="sch-line-base absolute top-0 bottom-0 w-[3px] bg-[#e8e2d4] rounded-full left-6 lg:left-1/2 lg:-translate-x-1/2"
            aria-hidden="true"
          />
          {/* Progress line */}
          <div
            className="sch-progress absolute top-0 w-[3px] rounded-full left-6 lg:left-1/2 lg:-translate-x-1/2 z-10"
            style={{
              height: "0%",
              background:
                "linear-gradient(to bottom, #dd9933 0%, #CA852D 40%, #c56e15 75%, #a85610 100%)",
              boxShadow: "0 0 15px rgba(221, 153, 51, 0.4)",
            }}
            aria-hidden="true"
          />

          {/* Items */}
          <ol className="relative z-20 space-y-8 sm:space-y-10 lg:space-y-6">
            {schedule.map((item, i) => {
              const isRight = i % 2 === 0; // even index → card on right side (desktop)
              return (
                <li
                  key={i}
                  className={`sch-item relative ${
                    isRight ? "sch-item-right" : "sch-item-left"
                  } ${item.sunset ? "sch-item-sunset" : ""} ${
                    item.finale ? "sch-item-finale" : ""
                  }`}
                >
                  {/* ─── Mobile layout ─── */}
                  <div className="lg:hidden flex items-start gap-4">
                    {/* Badge */}
                    <ScheduleBadge item={item} />

                    {/* Card takes remaining space */}
                    <div className="flex-1 min-w-0 pt-1">
                      <ScheduleCard item={item} align="left" />
                    </div>
                  </div>

                  {/* ─── Desktop layout (zigzag) ─── */}
                  <div className="hidden lg:grid grid-cols-[1fr_auto_1fr] gap-0 items-start">
                    {/* LEFT SIDE */}
                    <div className="pr-10 xl:pr-14 pt-1">
                      {!isRight && <ScheduleCard item={item} align="right" />}
                    </div>

                    {/* CENTER — Badge */}
                    <ScheduleBadge item={item} />

                    {/* RIGHT SIDE */}
                    <div className="pl-10 xl:pl-14 pt-1">
                      {isRight && <ScheduleCard item={item} align="left" />}
                    </div>
                  </div>
                </li>
              );
            })}
          </ol>

          {/* End marker */}
          <div
            className="absolute -bottom-3 w-5 h-5 rounded-full bg-goldenOrange shadow-[0_0_20px_rgba(221,153,51,0.6)] z-30"
            style={{ left: "1.5rem", transform: "translateX(-40%)" }}
            aria-hidden="true"
          >
            <div className="absolute inset-0 rounded-full bg-goldenOrange animate-ping opacity-40" />
          </div>
          <div
            className="hidden lg:block absolute -bottom-3 left-1/2 -translate-x-1/2 w-5 h-5 rounded-full bg-goldenOrange shadow-[0_0_20px_rgba(221,153,51,0.6)] z-30"
            aria-hidden="true"
          >
            <div className="absolute inset-0 rounded-full bg-goldenOrange animate-ping opacity-40" />
          </div>
        </div>

        {/* ─── Footer note ─── */}
        <p className="text-center mt-14 sm:mt-16 font-inter text-sm sm:text-base text-[#7a6f60] italic max-w-2xl mx-auto">
          <span className="text-goldenOrange font-semibold not-italic">
            Times are indicative —
          </span>{" "}
          the magic unfolds naturally throughout the afternoon.
        </p>
      </div>
    </section>
  );
};

/* ─── Sub-component: Badge (on the line) ─── */
const ScheduleBadge = ({ item }) => {
  return (
    <div className="sch-badge-wrapper relative shrink-0 z-30 flex items-center justify-center">
      <div
        className={`sch-badge relative w-12 h-12 lg:w-14 lg:h-14 rounded-full bg-white border-[3px] border-[#e8e2d4] shadow-md flex items-center justify-center transition-all duration-500 ${
          item.highlight ? "sch-badge-highlight" : ""
        }`}
      >
        <div className="sch-badge-icon w-5 h-5 lg:w-6 lg:h-6 text-[#d4c9b8] transition-colors duration-500">
          {item.icon}
        </div>

        {item.highlight && (
          <div
            className="absolute inset-0 rounded-full border-2 border-softMintGreen/0 sch-badge-ring pointer-events-none"
            aria-hidden="true"
          />
        )}

        {/* Sparkles */}
        <div
          className="sch-sparkles absolute inset-0 pointer-events-none"
          aria-hidden="true"
        >
          <span className="sch-sparkle sch-sparkle-1" />
          <span className="sch-sparkle sch-sparkle-2" />
          <span className="sch-sparkle sch-sparkle-3" />
          <span className="sch-sparkle sch-sparkle-4" />
        </div>
      </div>
    </div>
  );
};

/* ─── Sub-component: Card ─── */
const ScheduleCard = ({ item, align = "left" }) => {
  const isRight = align === "right";

  return (
    <article
      className={`sch-card relative bg-white/95 backdrop-blur-md border-2 border-white shadow-xl rounded-2xl p-5 sm:p-6 md:p-7 transition-all duration-500 ${
        item.sunset ? "sch-card-sunset" : ""
      } ${item.finale ? "sch-card-finale" : ""}`}
    >
      {/* Milestone ribbon */}
      {item.highlight && (
        <span
          className={`absolute top-0 ${
            isRight ? "left-5" : "right-5"
          } -translate-y-1/2 inline-flex items-center gap-1 px-3 py-1 rounded-full bg-softMintGreen text-white font-oswald text-[9px] uppercase tracking-[0.2em] font-semibold shadow-md z-10`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="h-3 w-3"
            aria-hidden="true"
          >
            <path d="M12 2l2.09 6.26L20 10l-5.91 1.74L12 18l-2.09-6.26L4 10l5.91-1.74L12 2z" />
          </svg>
          Milestone
        </span>
      )}
      {/* Time chip */}
      <div
        className={`flex items-center gap-3 mb-3 ${
          isRight ? "justify-end" : ""
        }`}
      >
        <span
          className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full font-oswald text-xs sm:text-sm font-semibold shadow-sm ${
            item.sunset
              ? "bg-gradient-to-r from-goldenOrange to-logoGold text-white"
              : "bg-gradient-to-r from-goldenOrange to-logoGold text-white"
          }`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-3.5 w-3.5"
            aria-hidden="true"
          >
            <circle cx="12" cy="12" r="10" />
            <polyline points="12 6 12 12 16 14" />
          </svg>
          <time dateTime={item.dateTime}>{item.time}</time>
        </span>
      </div>
      {/* Title */}
      <h3
        className={`font-nour italic text-lg sm:text-xl md:text-2xl text-logoGold mb-2 leading-tight ${
          isRight ? "text-right" : ""
        }`}
        style={{ textShadow: "1px 1px 0px rgba(255,255,255,0.9)" }}
      >
        {item.title}
      </h3>
      {/* Description */}
      <p
        className={`font-inter text-sm sm:text-[15px] text-[#5a5147] leading-relaxed ${
          isRight ? "text-right" : ""
        }`}
      >
        {item.description}
      </p>
    </article>
  );
};

export default WhitePartySchedule;
