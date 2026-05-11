// components/Preloader/Preloader.jsx
"use client";
import { useEffect, useState } from "react";
import "./Preloader.css";
import { useLoading } from "../../app/context/LoadingContext";

const Preloader = () => {
  const { isLoading, progress } = useLoading();
  const [shouldRender, setShouldRender] = useState(true);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    if (!isLoading) {
      setIsExiting(true);
      const timer = setTimeout(() => {
        setShouldRender(false);
        document.body.style.overflow = "auto";
        document.body.removeAttribute("aria-busy");
      }, 1200);
      return () => clearTimeout(timer);
    } else {
      document.body.style.overflow = "hidden";
      document.body.setAttribute("aria-busy", "true");
    }
  }, [isLoading]);

  useEffect(() => {
    return () => {
      document.body.style.overflow = "auto";
      document.body.removeAttribute("aria-busy");
    };
  }, []);

  if (!shouldRender) return null;

  return (
    <>
      {/* ✅ Schema.org */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Restaurant",
            name: "Nour Maison Brasserie",
            description:
              "French Middle Eastern fusion restaurant in Milton Keynes",
            servesCuisine: ["French", "Middle Eastern", "Mediterranean"],
            address: {
              "@type": "PostalAddress",
              addressLocality: "Milton Keynes",
              addressCountry: "UK",
            },
          }),
        }}
      />

      {/* ✅ SEO Hidden Content */}
      <div className="sr-only" aria-hidden="false">
        <h1>Nour Maison Brasserie - Loading</h1>
        <p>
          Welcome to Nour Maison Brasserie, a French Middle Eastern fusion
          restaurant in Milton Keynes.
        </p>
      </div>

      {/* ✅ Preloader */}
      <div
        className="fixed inset-0 z-[1000000] flex items-center justify-center overflow-hidden bg-bodyColor"
        role="progressbar"
        aria-busy={isLoading}
        aria-live="polite"
        aria-label={`Loading website, ${progress}% complete`}
        aria-valuenow={progress}
        aria-valuemin={0}
        aria-valuemax={100}
        data-testid="website-preloader"
      >
        {/* Curtain Top */}
        <div
          className={`preloader-curtain absolute top-0 left-0 w-full h-1/2 bg-gradient-to-br from-bodyColor to-pestachio/40 z-[1] ${
            isExiting ? "preloader-curtain--top-exit" : ""
          }`}
          aria-hidden="true"
          role="presentation"
        />

        {/* Curtain Bottom */}
        <div
          className={`preloader-curtain absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-tr from-bodyColor to-pestachio/40 z-[1] ${
            isExiting ? "preloader-curtain--bottom-exit" : ""
          }`}
          aria-hidden="true"
          role="presentation"
        />

        {/* Content */}
        <div
          className={`preloader-content relative z-[2] flex flex-col items-center justify-center gap-4 sm:gap-6 p-8 max-w-[500px] w-[90%] ${
            isExiting ? "preloader-content--exit" : ""
          }`}
        >
          {/* GIF Logo */}
          <figure
            className="preloader-gif-wrapper relative w-[180px] h-[180px] sm:w-[220px] sm:h-[220px] md:w-[260px] md:h-[260px] flex items-center justify-center m-0"
            role="img"
            aria-label="Nour Maison Brasserie logo"
          >
            <img
              src="/images/nour-maison.gif"
              alt="Nour Maison Brasserie - French Middle Eastern Restaurant Milton Keynes"
              title="Nour Maison Brasserie"
              width="260"
              height="260"
              loading="eager"
              fetchPriority="high"
              decoding="sync"
              className="relative z-10 w-full h-full object-contain"
            />
            <figcaption className="sr-only">
              Nour Maison Brasserie loading animation
            </figcaption>
          </figure>

          {/* Brand Name */}
          <header className="text-center overflow-hidden -mt-2">
            <h2 className="preloader-brand font-seasons text-goldenOrange text-[clamp(1.8rem,4vw,2.8rem)] font-bold m-0 leading-none tracking-[1px] sm:tracking-[2px]">
              Nour Maison
            </h2>
            <p className="preloader-tagline font-tangerine text-softMintGreen text-[clamp(1.5rem,3.5vw,2.2rem)] m-0 leading-none -mt-1">
              Brasserie
            </p>
          </header>

          {/* Progress info for screen readers */}
          <div
            className="sr-only"
            role="status"
            aria-live="polite"
            aria-atomic="true"
          >
            Loading: {progress}% complete
          </div>
        </div>
      </div>
    </>
  );
};

export default Preloader;
