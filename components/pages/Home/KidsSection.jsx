// components/NourKidsMenuHero.jsx
"use client";
import { useEffect, useRef, useState } from "react";
import BranchesImage from "../../../utils/BranchesImage/BranchesImage";
import Link from "next/link";

export default function NourKidsMenuHero({
  src = "/videos/nour-kids-menu.mp4", // <-- put your Veo3 output here
  poster = "/images/nour-kids-menu-poster.jpg",
  title,
  subTitle,
  cta,
  ctaLink,
  className = "",
}) {
  const videoRef = useRef(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Respect reduced motion
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mq.matches) {
      video.pause();
      return;
    }

    // Intersection Observer: play/pause on view
    const io = new IntersectionObserver(
      async ([entry]) => {
        if (!video) return;
        try {
          if (entry.isIntersecting) {
            await video.play();
          } else {
            video.pause();
          }
        } catch (_) {
          /* autoplay might be blocked; ignore */
        }
      },
      { threshold: 0.35 }
    );

    io.observe(video);
    return () => io.disconnect();
  }, []);

  return (
    <section
      className={`relative overflow-hidden  ${className}`}
      aria-label="Nour Maison Kids Menu Announcement"
    >
      <div className="relative z-0" data-aos="fade-left" data-aos-delay="300">
        <BranchesImage
          variant={"top-right"}
          width={700}
          className={
            " opacity-30 right-[-30px] scale-150 origin-right  md:block hidden "
          }
        />
      </div>
      <div className="z-10 relative" data-aos="fade-right" data-aos-delay="500">
        <BranchesImage
          variant={"top-left"}
          className={" w-[] top-6 scale-150 opacity-20   md:block hidden  "}
        />
      </div>

      <div className="container mx-auto px-4 py-10 md:py-16">
        <div
          style={{
            textShadow: "2px 2px 10px 0px rgba(0, 0, 0, 0.75)",
          }}
          className="text-center font-tangerine text-softMintGreen text-5xl md:text-7xl  mb-4 md:mb-8 font-black"
        >
          { title || "Small Hands,"} <br />{" "}
          <span className="text-logoGold  text-2xl font-seasons ">{subTitle || "Big Appetite!"}</span>
        </div>
        <div className="grid grid-cols-1 gap-8 items-center">
          {/* Text block (optional — keep or remove) */}

          {/* Video card */}
          <div className="order-1 md:order-2 max-w-6xl mx-auto">
            <div className="relative rounded-3xl ring-1 ring-black/5 shadow-xl overflow-hidden">
              {/* Decorative frame */}
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_0%,rgba(16,185,129,0.10),transparent_70%)]" />
              {/* Video */}

              <Link href={ ctaLink || "/kids-menu"}>
              <video
                ref={videoRef}
                className="block w-full  aspect-[17/9] object-cover"
                src={src}
                poster={poster}
                playsInline
                preload="metadata"
                loop
                onLoadedData={() => setLoaded(true)}
                />
                </Link>
              {/* Lightweight skeleton until first frame */}

              {/* Soft glow */}
            </div>
          </div>
        </div>

        <Link
          href={ ctaLink ||  "/kids-menu" }
          className=" mx-auto font-seasons w-fit rounded-full hover:text-white active:text-white overflow-hidden mt-4 md:mt-8   outlined_btn px-7 !py-3 hover:scale-110 transition-[.4s] whitespace-nowrap  bg-logoGold text-white text-2xl lg:text-4xl   "
        >
          {cta || "Kids Menu"}
        </Link>
      </div>
    </section>
  );
}
