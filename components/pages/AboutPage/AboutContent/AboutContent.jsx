"use client";

import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { FaPlay } from "react-icons/fa";
import { BiHealth, BiSolidDish } from "react-icons/bi";
import { PiChefHatLight } from "react-icons/pi";
import { LuLeafyGreen } from "react-icons/lu";

import AboutVideo from "./../AboutVideo/AboutVideo";
import AboutUsSwiper from "./../AboutUsSwiper";

const FEATURES = [
  {
    icon: BiSolidDish,
    title: "Fresh Products",
    description:
      "Only the freshest, highest-quality ingredients used daily for full flavor.",
  },
  {
    icon: PiChefHatLight,
    title: "Skilled Chefs",
    description:
      "Experienced chefs craft every dish with expertise and passion.",
  },
  {
    icon: LuLeafyGreen,
    title: "Recipe Innovation",
    description: "Creative, one-of-a-kind recipes that keep dining exciting.",
  },
  {
    icon: BiHealth,
    title: "Healthy Food",
    description:
      "Nutritious meals made with wholesome ingredients for balanced living.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: 0.08 * i, ease: "easeOut" },
  }),
};

export default function AboutContent() {
  const [videoModal, setVideoModal] = useState(false);

  const images = useMemo(
    () => [
      "https://res.cloudinary.com/dhebgz7qh/image/upload/v1767452496/465984384_1590238098232979_2569484348972359367_n_lndhof_aewybh.jpg",
      "https://res.cloudinary.com/dhebgz7qh/image/upload/v1767452495/466253647_534065926272992_1731520913535440885_n_lccww5_g53xx5.jpg",
      "https://res.cloudinary.com/dhebgz7qh/image/upload/v1767452494/download_tflo0m_xsvqce.jpg",
      "https://res.cloudinary.com/dhebgz7qh/image/upload/v1767452497/download_b1l96d_hdflbq.jpg",
      "https://res.cloudinary.com/dhebgz7qh/image/upload/v1767452496/download_cmgnkv_llygqn.jpg",
      "https://res.cloudinary.com/dhebgz7qh/image/upload/v1767452494/download_pvviax_g29yau.jpg",
    ],
    []
  );

  const images2 = useMemo(
    () => [
      "https://res.cloudinary.com/dhebgz7qh/image/upload/v1767452497/txw1mwe5rnw8evxzgvye_wutn8r.webp",
      "https://res.cloudinary.com/dhebgz7qh/image/upload/v1767452496/ja2xpjfj93egefk7ggvt_uxsqjo.webp",
      "https://res.cloudinary.com/dhebgz7qh/image/upload/v1767452497/kmxpexva5pbfocltc48o_dsb1il.webp",
      "https://res.cloudinary.com/dhebgz7qh/image/upload/v1767452496/hgq4dkeki4dw5qwzudqp_coo6nb.webp",
    ],
    []
  );

  const openVideo = () => {
    setVideoModal(true);
    document.body.style.overflow = "hidden";
  };

  const closeVideo = () => {
    setVideoModal(false);
    document.body.style.overflow = "auto";
  };

  return (
    <section id="about" className="relative w-screen overflow-hidden bg-blck">
      {/* Background: cinematic gradients + subtle texture */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-48 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-[#ffb84d]/20 blur-[80px]" />
        <div className="absolute bottom-[-220px] left-[-180px] h-[520px] w-[520px] rounded-full bg-[#4ade80]/10 blur-[90px]" />
        <div className="absolute right-[-220px] top-[30%] h-[520px] w-[520px] rounded-full bg-[#f59e0b]/10 blur-[90px]" />

        {/* tiny noise / grid vibe */}
        <div className="absolute inset-0 opacity-[0.09] [background-image:linear-gradient(to_right,orange_1px,transparent_1px),linear-gradient(to_bottom,orange_1px,transparent_1px)] [background-size:64px_64px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
        {/* HERO / FIRST BLOCK */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Sticky Swiper */}
          <div className="lg:col-span-6 lg:sticky lg:top-[110px]">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="relative rounded-3xl overflow-hidden border border-white/10 bg-white/5 shadow-[0_20px_60px_rgba(0,0,0,0.45)]"
            >
              {/* glow border */}
              <div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-white/10" />
              <AboutUsSwiper images={images} />
              {/* bottom fade */}
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#07110a] to-transparent" />
            </motion.div>

            {/* brand stamp */}
            <div className="mt-6 flex items-center gap-3 opacity-90">
              <img
                src="https://res.cloudinary.com/dhebgz7qh/image/upload/v1767452496/y3replc9wmlnvwb7kjvo_hyo3u3.png"
                alt="Nour Maison"
                className="h-11 w-11 drop-shadow"
              />
              <div className="text-sm /70">
                <strong className="/90 !font-extrabold font-seasons">
                  Nour Maison
                </strong>{" "}
                · East meets West · Warm hospitality
              </div>
            </div>
          </div>

          {/* Text + Video CTA */}
          <div className="lg:col-span-6">
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.35 }}
              className="space-y-6"
            >
              <motion.div
                variants={fadeUp}
                custom={0}
                className="inline-flex items-center gap-2 rounded-full border border-logoGold/50 bg-white/5 px-4 py-2"
              >
                <span className="h-2 w-2 rounded-full bg-[#f59e0b]" />
                <span className="text-xs sm:text-sm /80">
                  French sophistication · Middle East flavours
                </span>
              </motion.div>

              <motion.div
                variants={fadeUp}
                custom={1}
                className="flex items-center justify-between gap-4"
              >
                <div>
                  <h2 className="text-4xl font-seasons text-softMintGreen sm:text-5xl font-bold tracking-tight">
                    About{" "}
                    <strong className="text-logoGold s!font-bold">
                      Nour Maison
                    </strong>
                  </h2>
                  <p className="mt-2 /70">
                    A house of warmth, tradition, and modern culinary craft.
                  </p>
                </div>

                {/* Play Button */}
                <motion.button
                  onClick={openVideo}
                  whileHover={{ scale: 1.06 }}
                  whileTap={{ scale: 0.98 }}
                  className="relative shrink-0"
                  aria-label="Play video"
                >
                  <span className="absolute inset-0 rounded-full bg-[#f59e0b]/30 blur-xl" />
                  <span className="absolute -inset-2 rounded-full border border-white/10" />
                  <span className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-[#f59e0b] to-[#22c55e] shadow-lg">
                    <FaPlay className="translate-x-[1px]" />
                  </span>
                  {/* pulse */}
                  <span className="absolute inset-0 rounded-full animate-ping bg-[#f59e0b]/20" />
                </motion.button>
              </motion.div>

              <motion.div
                variants={fadeUp}
                custom={2}
                className="space-y-4 text-whiteGray text-[15.5px] sm:text-[17px] leading-7 /80"
              >
                <p>
                  Welcome to{" "}
                  <strong className=" !font-bold font-seasons text-logoGold">
                    Nour Maison
                  </strong>
                  , where French sophistication meets the bold, vibrant flavours
                  of the Middle East. Inspired by the founder's daughter,
                  <strong className=" font-extrabold font-seasons text-logoGold">
                    {" "}
                    "Nour"
                  </strong>{" "}
                  — symbolizing light and warmth — and
                  <strong className=" font-extrabold font-seasons text-logoGold">
                    {" "}
                    "Maison"
                  </strong>{" "}
                  meaning house in French, our cafe is a welcoming space that
                  feels like home.
                </p>

                <p>
                  Founded by{" "}
                  <strong className=" font-semibold font-seasons text-goldenOrange">
                    Chef Mo G
                  </strong>
                  , with over a decade of experience across Turkish,
                  Mediterranean, and French cuisine, every plate reflects a
                  refined harmony of East and West.
                </p>

                <p>
                  From breakfast classics to elevated brunch twists —
                  house-smoked meats, buttery stuffed croissants, fusion salads,
                  signature smashed burgers, and comforting Moroccan tagines —
                  each dish is built for sharing, warmth, and unforgettable
                  flavor.
                </p>
              </motion.div>

              {/* CTA row */}
              <motion.div
                variants={fadeUp}
                custom={3}
                className="flex flex-wrap items-center gap-3 pt-2"
              >
                <button
                  onClick={openVideo}
                  className="rounded-0 font-seasons bg-softMintGreen text-white px-5 py-2.5 text-sm font-semibold hover:opacity-90 transition"
                >
                  Watch our story
                </button>
                <a
                  href="#menu"
                  className="border font-seasons border-logoGold bg-white/5 text-logoGold px-5 py-2.5 text-sm font-semibold  hover:bg-white/10 transition"
                >
                  Explore menu
                </a>
              </motion.div>

              {/* ✅ Legal Entity Name - نفس ستايل Contact */}
              <div className="md:w-[100%] mt-12">
                <p className="text-left text-sm text-goldenOrange">
                  This website is owned and operated by{" "}
                  <strong className="text-goldenOrange">NOUR MAISON LTD</strong>
                </p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* SECOND BLOCK */}
        <div className="mt-16 sm:mt-20 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Features */}
          <div className="lg:col-span-6 order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="rounded-3xl border border-logoGold/50 bg-white/5 p-6 sm:p-8 shadow-[0_18px_55px_rgba(0,0,0,0.35)]"
            >
              <div className="flex items-end justify-between gap-4">
                <div>
                  <h3 className=" text-softMintGreen text-2xl sm:text-3xl font-bold font-seasons">
                    Why people <span className="text-logoGold">love</span> us
                  </h3>
                  <p className="mt-2 /70 text-sm sm:text-base">
                    Crafted experiences — not just meals.
                  </p>
                </div>
                <div className="hidden sm:block text-xs /50">
                  Fresh · Skilled · Innovative · Healthy
                </div>
              </div>

              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                {FEATURES.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <motion.div
                      key={item.title}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.25 }}
                      transition={{ duration: 0.55, delay: index * 0.06 }}
                      className="group relative overflow-hidden rounded-2xl border border-logoGold/50 bg-gradient-to-b from-white/7 to-white/3 p-5 hover:border-logoGold/75 transition"
                    >
                      <div className="absolute -right-14 -top-14 h-40 w-40 rounded-full bg-logoGold/20 blur-2xl opacity-0 group-hover:opacity-100 transition" />
                      <div className="flex items-start gap-4">
                        <div className="relative">
                          <div className="absolute inset-0 rounded-2xl bg-logoGold/20 blur-xl opacity-0 group-hover:opacity-100 transition" />
                          <div className="relative flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 border border-white/10">
                            <Icon className="text-xl text-[#f59e0b]" />
                          </div>
                        </div>

                        <div>
                          <h4 className="!font-extrabold font-seasons text-goldenOrange  text-base sm:text-xl">
                            {item.title}
                          </h4>
                          <p className="mt-1 /70 text-sm leading-6">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          </div>

          {/* Sticky Swiper 2 */}
          <div className="lg:col-span-6 order-1 lg:order-2 lg:sticky lg:top-[110px] h-full">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="relative rounded-3xl overflow-hidden border h-full border-white/10 bg-white/5 shadow-[0_20px_60px_rgba(0,0,0,0.45)]"
            >
              <div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-white/10" />
              <AboutUsSwiper images={images2} />
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#07110a] to-transparent" />
            </motion.div>
          </div>
        </div>
      </div>

      <AboutVideo
        open={videoModal}
        setOpen={(v) => {
          if (!v) closeVideo();
          else openVideo();
        }}
        videoSrc={"https://camp-coding.tech/nour_maison/Nour-opening-1.mp4"}
      />
    </section>
  );
}
