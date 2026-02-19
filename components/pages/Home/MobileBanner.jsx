"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function VideoBanner() {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const textMessages = [
    "Welcome to Nour Maison",
    "Bringing French & Mediterranean Cuisine",
    "Step Inside Nour Maison",
    "Dream. Build. Launch.",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false);

      setTimeout(() => {
        setCurrentTextIndex((prev) => (prev + 1) % textMessages.length);
        setIsVisible(true);
      }, 500);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[100svh] overflow-hidden bg-black">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-70"
      >
        <source
          src="/images/At Nour Maison, every mood has a flavour 👌🏻Whether you're into classic comfort or bold new tas.mp4"
          type="video/mp4"
        />
      </video>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#CA852D]/40 via-transparent to-[#84B067]/40" />

      {/* Animated Grid Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 text-center">
        {/* Animated Background Circle */}
        <div className="absolute w-96 h-96 bg-gradient-to-r from-[#CA852D]/20 to-[#84B067]/20 rounded-full blur-3xl animate-pulse" />

        {/* Main Text */}
        <div className="relative">
          <h1
            className={`text-5xl font-bold mb-6 transition-all duration-500 transform ${
              isVisible
                ? "opacity-100 translate-y-0 scale-100"
                : "opacity-0 -translate-y-8 scale-95"
            }`}
          >
            <span className="bg-gradient-to-r from-softMintGreen via-pestachio2 to-sageGreen bg-clip-text text-transparent animate-gradient">
              {textMessages[currentTextIndex]}
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Experience the next generation of taste creativity
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-wrap gap-4 justify-center mt-8">
          <Link
            href="/booking"
            className="group relative px-8 py-4 bg-gradient-to-r from-softMintGreen to-softMintGreen rounded-full font-semibold text-white no-underline hover:no-underline overflow-hidden transition-transform hover:scale-105"
          >
            <span className="relative z-10">Book Your Seat</span>
            <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
          </Link>

          <Link
            href="/about-us"
            className="px-8 py-4 bg-white/10 backdrop-blur-sm border-2 border-white/30 rounded-full font-semibold text-white no-underline hover:no-underline hover:bg-white/20 transition-all hover:border-white/50"
          >
            About Us
          </Link>
        </div>

        {/* ✅ Ramadan Iftar Button */}
        <div className="mt-8 relative">
          {/* NEW Badge */}
          <span className="absolute -top-3 -right-3 z-20 px-3 py-1 bg-white text-goldenOrange text-xs font-bold rounded-full shadow-lg animate-bounce">
            NEW
          </span>

          <Link
            href="/ramadan-iftar-menu-milton-keynes"
            className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 sm:px-12 sm:py-5 bg-gradient-to-r from-goldenOrange to-[#e5a93d] rounded-full font-semibold text-white no-underline hover:no-underline hover:text-white overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(221,153,51,0.6)] border-2 border-white/30"
          >
            {/* ✅ Shimmer Effect - div بدل ::before */}
            <div className="absolute inset-0 -translate-x-full animate-[shimmer_2.5s_infinite] bg-gradient-to-r from-transparent via-white/40 to-transparent z-[5] pointer-events-none" />

            {/* Crescent Moon Icon */}
            <span className="relative z-10 text-xl sm:text-2xl">🌙</span>

            {/* Button Text */}
            <span className="relative z-10 text-sm sm:text-lg font-bold tracking-wide">
              Ramadan Iftar Menu
            </span>

            {/* ✅ SVG Ramadan Decoration - Right */}
            <svg
              className="absolute right-2 sm:right-3 top-1/2 -translate-y-1/2 h-[78%] sm:h-[82%] w-auto opacity-25 sm:opacity-30 pointer-events-none z-0"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1200 220"
              fill="none"
            >
              <defs>
                <style>
                  {
                    "\n      .w{stroke:#fff;stroke-width:3;stroke-linecap:round;stroke-linejoin:round}\n      .t{stroke-width:2.2}\n      .s{opacity:.92}\n      .g{opacity:.75}\n    "
                  }
                </style>
              </defs>
              <path
                className="w s"
                d="M40 50     C170 15, 300 85, 430 50     S690 85, 820 50     S1030 85, 1160 50"
              />
              <g className="w g">
                <circle cx={160} cy={45} r={4} />
                <circle cx={300} cy={62} r={4} />
                <circle cx={440} cy={45} r={4} />
                <circle cx={600} cy={62} r={4} />
                <circle cx={760} cy={45} r={4} />
                <circle cx={900} cy={62} r={4} />
                <circle cx={1040} cy={45} r={4} />
              </g>
              <g transform="translate(600 55)">
                <path
                  className="w"
                  d="M-10 60c-19-6-33-24-33-45 0-24 19-44 44-44 5 0 10 .8 14 2.3-9 6.2-15 16.7-15 28.7 0 19.5 15.8 35.3 35.3 35.3 8.8 0 16.8-3.2 23-8.6C50 47 31 62 9 62c-6.9 0-13.5-.9-19-2z"
                />
                <path
                  className="w t"
                  d="M60 10l6 12 14 2-10 9 2 14-12-6-12 6 2-14-10-9 14-2 6-12z"
                />
              </g>
              <g transform="translate(200 50)">
                <path className="w t" d="M0 0v26" />
                <circle className="w g" cx={0} cy={26} r={3} />
                <path
                  className="w"
                  d="M-26 52c0-16 13-29 29-29h-6c16 0 29 13 29 29v44c0 18-15 33-33 33S-26 114-26 96V52z"
                />
                <path className="w" d="M-18 30h36l-6 16h-24l-6-16z" />
                <path className="w t" d="M-8 46v76" />
                <path className="w t" d="M8 46v76" />
                <path className="w" d="M-10 134h20l-4 12h-12l-4-12z" />
                <path className="w t" d="M0 146v18" />
                <path className="w t" d="M-8 164h16" />
              </g>
              <g transform="translate(380 50) scale(.85)">
                <path className="w t" d="M0 0v26" />
                <circle className="w g" cx={0} cy={26} r={3} />
                <path
                  className="w"
                  d="M-18 50c0-11 9-20 20-20h-4c11 0 20 9 20 20v30c0 14-12 26-26 26S-18 94-18 80V50z"
                />
                <path className="w" d="M-13 32h26l-4 12h-18l-4-12z" />
                <path className="w t" d="M0 44v56" />
                <path className="w" d="M-7 112h14l-3 10h-8l-3-10z" />
              </g>
              <g transform="translate(820 50) scale(.85)">
                <path className="w t" d="M0 0v26" />
                <circle className="w g" cx={0} cy={26} r={3} />
                <path
                  className="w"
                  d="M-18 50c0-11 9-20 20-20h-4c11 0 20 9 20 20v30c0 14-12 26-26 26S-18 94-18 80V50z"
                />
                <path className="w" d="M-13 32h26l-4 12h-18l-4-12z" />
                <path className="w t" d="M0 44v56" />
                <path className="w" d="M-7 112h14l-3 10h-8l-3-10z" />
              </g>
              <g transform="translate(1000 50)">
                <path className="w t" d="M0 0v26" />
                <circle className="w g" cx={0} cy={26} r={3} />
                <path
                  className="w"
                  d="M-26 52c0-16 13-29 29-29h-6c16 0 29 13 29 29v44c0 18-15 33-33 33S-26 114-26 96V52z"
                />
                <path className="w" d="M-18 30h36l-6 16h-24l-6-16z" />
                <path className="w t" d="M-8 46v76" />
                <path className="w t" d="M8 46v76" />
                <path className="w" d="M-10 134h20l-4 12h-12l-4-12z" />
                <path className="w t" d="M0 146v18" />
                <path className="w t" d="M-8 164h16" />
              </g>
              <g className="w t g">
                <path d="M120 92l3 6 7 1-5 4 1 7-6-3-6 3 1-7-5-4 7-1 3-6z" />
                <path d="M1120 92l3 6 7 1-5 4 1 7-6-3-6 3 1-7-5-4 7-1 3-6z" />
              </g>
            </svg>
          </Link>
        </div>
      </div>

      {/* Progress Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2 z-20">
        {textMessages.map((_, index) => (
          <div
            key={index}
            className={`h-1 rounded-full transition-all duration-300 ${
              index === currentTextIndex ? "w-12 bg-white" : "w-8 bg-white/40"
            }`}
          />
        ))}
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 right-8 flex flex-col items-center gap-2 text-white/60 animate-bounce">
        <span className="text-sm">Scroll</span>
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>

      <style jsx>{`
        @keyframes gradient {
          0%,
          100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        .animate-gradient {
          background-size: 200% auto;
          animation: gradient 3s ease infinite;
        }

        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          50%,
          100% {
            transform: translateX(100%);
          }
        }
      `}</style>
    </div>
  );
}
