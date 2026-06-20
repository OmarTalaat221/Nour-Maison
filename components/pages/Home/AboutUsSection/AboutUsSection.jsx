"use client";

import React, { memo } from "react";
import dynamic from "next/dynamic";
import cx from "classnames";
import ButtonsLayers from "../../../../utils/ButtonsLayers/ButtonsLayers";
import TopBg from "./../../../../utils/topBg/TopBg";
import BottomBg from "../../../../utils/bottomBg/BottomBg";

const AboutUsSectionVideo = dynamic(
  () => import("../AboutUsSectionVideo/AboutUsSectionVideo"),
  {
    ssr: false,
    loading: () => (
      <div className="w-full h-[360px] sm:h-[460px] md:h-[560px] lg:h-full bg-black/20" />
    ),
  }
);

const CounterUp = dynamic(() => import("../../../elements/CounterUp"), {
  ssr: false,
  loading: () => <span>0</span>,
});

const RatingStars = dynamic(() => import("../RatingWithSound"), {
  ssr: false,
  loading: () => null,
});

const counterdata = [
  { id: 1, title: "Served Dishes", value: 5934, bg: "bg-softMintGreen" },
  { id: 2, title: "Served Customers", value: 9211, bg: "bg-goldenOrange" },
  { id: 3, title: "Our Rating", value: 4.7, bg: "bg-sageGreen" },
];

const images = [
  "https://res.cloudinary.com/dhebgz7qh/image/upload/q_auto:eco,f_auto,w_900/v1767443804/zexptzvrvwxbsvi8pqho_uwwxnb.jpg",
  "https://res.cloudinary.com/dhebgz7qh/image/upload/q_auto:eco,f_auto,w_900/v1767443794/l2vsemfnzxd9rvtck24a_jzeww6.jpg",
  "https://res.cloudinary.com/dhebgz7qh/image/upload/q_auto:eco,f_auto,w_900/v1767443801/t9noktexya7m7o2dtum4_hbidy9.jpg",
  "https://res.cloudinary.com/dhebgz7qh/image/upload/q_auto:eco,f_auto,w_900/v1767443801/sdw9jufkrx0onoo2vwfp_wnzcjx.jpg",
  "https://res.cloudinary.com/dhebgz7qh/image/upload/q_auto:eco,f_auto,w_900/v1767443802/kgkdwtofzolvzkb6oyh5_p6m5cg.jpg",
  "https://res.cloudinary.com/dhebgz7qh/image/upload/q_auto:eco,f_auto,w_900/v1767444279/zmovmsobwahf2a353gxu_xdwksa.jpg",
];

const AboutUsSection = () => {
  return (
    <div className="grid lg:grid grid-cols-1 lg:grid-cols-2 relative overflow-hidden">
      <div className="w-full" data-aos="fade-down-right">
        <AboutUsSectionVideo
          videoSrc="/videos/booking-home-about.webm"
          videoSrcMp4="/videos/booking-home-about.mp4"
          poster={images[0]}
        />
      </div>

      <div className="relative flex flex-col max-h-[780px] md:!max-h-[780px] overflow-auto">
        <div
          className="flex items-center justify-center"
          data-aos="fade-down-left"
          data-aos-delay="500"
        >
          <div className="p-4 md:p-16 md:py-5">
            {/* ✅ شيلت الـ h6 الفاضي اللي كان بيتعب الـ SEO */}

            {/* ✅ H2 keyword-rich - حافظ على نفس الكلاسات بالظبط */}
            <h2
              data-aos="fade-right"
              data-aos-delay="1000"
              className="text-2xl font-tangerine md:text-5xl font-bold mb-2 md:mb-4 text-whiteGray"
            >
              Why Choose Nour Maison{" "}
              <span className="block text-xl md:text-3xl text-softMintGreen font-tangerine">
                Best Café & Brasserie in Milton Keynes
              </span>
            </h2>

            <p
              className="!text-[16px] text-goldenOrange md:!text-[30px] mb-6 ps-3 font-caveat leading-loose text-justify font-normal"
              data-aos="fade-left"
              data-aos-delay="800"
            >
              Welcome to Nour Maison, where French sophistication meets the
              bold, vibrant flavors of the Middle East. This isn't just a
              restaurant — it's a reflection of family, tradition, and heartfelt
              hospitality. Inspired by the founder's daughter, Nour —
              symbolizing light and warmth — and combined with 'Maison,' meaning
              'house' in French, our café is a warm, welcoming space that feels
              like home
            </p>

            <ButtonsLayers href="/about-us" text="GET MORE ABOUT US" />
          </div>
        </div>

        <div className="grid w-full mt-auto bottom-0 grid-cols-2 lg:grid-cols-3">
          {counterdata.map((item) => (
            <div
              key={item.id}
              className={cx(
                "flex py-5 items-center gap-4 flex-col justify-center",
                item.bg,
                item.id === 3 && "col-span-2 lg:col-span-1 !gap-2"
              )}
            >
              <div className="text-2xl font-bold text-white font-oswald">
                <CounterUp end={item.value} />
              </div>

              {item.id === 3 && (
                <span className="text-2xl font-bold text-white !font-seasons">
                  <RatingStars rating={4.5} max={5} />
                </span>
              )}

              {/* ✅ تحول من p إلى h3 (نفس الكلاسات بالظبط) */}
              <h3 className="text-white tracking-widest !text-sm md:text-xl font-seasons">
                {item.title}
              </h3>
            </div>
          ))}
        </div>
      </div>

      <TopBg />
      <BottomBg />
    </div>
  );
};

export default memo(AboutUsSection);