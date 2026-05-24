"use client";

import { memo, useEffect, useRef, useState } from "react";
import BranchesImage from "../../../utils/BranchesImage/BranchesImage";
import Link from "next/link";

const NourKidsMenuHero = ({
  src = "/videos/nour-kids-menu.mp4",
  poster = "/images/nour-kids-menu-poster.jpg",
  title,
  subTitle,
  cta,
  ctaLink,
  className = "",
}) => {
  const sectionRef = useRef(null);
  const videoRef = useRef(null);
  const [shouldLoadVideo, setShouldLoadVideo] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section || shouldLoadVideo) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoadVideo(true);
          observer.disconnect();
        }
      },
      {
        rootMargin: "400px 0px",
        threshold: 0.1,
      },
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, [shouldLoadVideo]);

  useEffect(() => {
    const video = videoRef.current;

    if (!video || !shouldLoadVideo) return;

    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");

    if (mq.matches) {
      video.pause();
      return;
    }

    const observer = new IntersectionObserver(
      async ([entry]) => {
        if (!video) return;

        try {
          if (entry.isIntersecting) {
            await video.play();
          } else {
            video.pause();
          }
        } catch (_) {}
      },
      {
        threshold: 0.35,
      },
    );

    observer.observe(video);

    return () => observer.disconnect();
  }, [shouldLoadVideo]);

  return (
    <section
      ref={sectionRef}
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
          {title || "Small Hands,"} <br />{" "}
          <span className="text-logoGold  text-2xl font-seasons ">
            {subTitle || "Big Appetite!"}
          </span>
        </div>

        <div className="grid grid-cols-1 gap-8 items-center">
          <div className="order-1 md:order-2 max-w-6xl mx-auto">
            <div className="relative rounded-3xl ring-1 ring-black/5 shadow-xl overflow-hidden">
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_0%,rgba(16,185,129,0.10),transparent_70%)]" />

              <Link href={ctaLink || "/kids-menu"} prefetch={false}>
                <video
                  ref={videoRef}
                  className="block w-full  aspect-[17/9] object-cover"
                  src={shouldLoadVideo ? src : undefined}
                  poster={poster}
                  playsInline
                  preload={shouldLoadVideo ? "metadata" : "none"}
                  loop
                  muted
                />
              </Link>
            </div>
          </div>
        </div>

        <Link
          href={ctaLink || "/kids-menu"}
          prefetch={false}
          className=" mx-auto font-seasons w-fit rounded-full hover:text-white active:text-white overflow-hidden mt-4 md:mt-8   outlined_btn px-7 !py-3 hover:scale-110 transition-[.4s] whitespace-nowrap  bg-logoGold text-white text-2xl lg:text-4xl   "
        >
          {cta || "Kids Menu"}
        </Link>
      </div>
    </section>
  );
};

export default memo(NourKidsMenuHero);
