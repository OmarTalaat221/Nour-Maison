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
            className="group relative px-8 py-4 bg-gradient-to-r from-softMintGreen to-softMintGreen rounded-full font-semibold text-white overflow-hidden transition-transform hover:scale-105"
          >
            <span className="relative z-10">Book Your Seat</span>
            <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
          </Link>

          <Link
            href="/about-us"
            className="px-8 py-4 bg-white/10 backdrop-blur-sm border-2 border-white/30 rounded-full font-semibold text-white hover:bg-white/20 transition-all hover:border-white/50"
          >
            About Us
          </Link>
        </div>

        {/* ✅ Ramadan Iftar Button */}
        <div className="mt-6">
          <Link
            href="/ramadan-iftar-menu-milton-keynes"
            className="ramadan-btn group relative inline-flex items-center gap-2 px-6 py-3 sm:px-8 sm:py-4 bg-gradient-to-r from-goldenOrange to-[#e5a93d] rounded-full font-semibold text-white overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(221,153,51,0.5)] border border-white/20"
          >
            {/* NEW Badge */}
            <span className="absolute -top-2 -right-2 px-2 py-0.5 bg-white text-goldenOrange text-[10px] sm:text-xs font-bold rounded-full shadow-lg animate-pulse">
              NEW
            </span>

            {/* Crescent Moon Icon */}
            <svg
              className="w-5 h-5 sm:w-6 sm:h-6 transition-transform group-hover:rotate-12"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 3a9 9 0 1 0 9 9c0-.46-.04-.92-.1-1.36a5.389 5.389 0 0 1-4.4 2.26 5.403 5.403 0 0 1-3.14-9.8c-.44-.06-.9-.1-1.36-.1z" />
            </svg>

            {/* Button Text */}
            <span className="relative z-10 text-sm sm:text-base">
              Ramadan Iftar Menu
            </span>

            {/* Star Icon */}
            <svg
              className="w-4 h-4 sm:w-5 sm:h-5 transition-transform group-hover:scale-125"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>

            {/* Shimmer Effect */}
            <div className="absolute inset-0 -translate-x-full group-hover:translate-x-0 bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700" />
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

        /* ✅ Ramadan Button Shimmer */
        .ramadan-btn::before {
          content: "";
          position: absolute;
          top: 0;
          left: -100%;
          width: 50%;
          height: 100%;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255, 255, 255, 0.4),
            transparent
          );
          animation: ramadanShimmer 2.5s infinite;
          z-index: 1;
          pointer-events: none;
        }

        @keyframes ramadanShimmer {
          0% {
            left: -100%;
          }
          60%,
          100% {
            left: 100%;
          }
        }
      `}</style>
    </div>
  );
}
