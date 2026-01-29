"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import PagesBanner from "../../../components/PagesBanner/PagesBanner";
import { AnimatePresence, motion } from "framer-motion";
import FancyboxElement from "../../../utils/FancyBox/FancyBox";
import Filter from "../../../components/pages/Gallery/Filter/Filter";
import Portfolio2 from "./../../../components/portfolio2/portfolio2";
import { TopNavbar } from "./../../../components/pages/Gallery/TopNavbar/TopNavbar";
import { detectMediaType } from "../../../lib/functions";
import Movie from "../../../components/pages/Gallery/Movies/Movies";

// Swiper (vertical reels)
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

// ------------------------------------------------------------------
// 1. EXTRACTED COMPONENT: Defined OUTSIDE the main component
// ------------------------------------------------------------------
const ReelSlide = ({ item, index, isMuted, toggleMute, setVideoRef }) => {
  return (
    <div className="relative w-full h-full overflow-hidden rounded-2xl border border-black/5 bg-white shadow-sm">
      <video
        ref={setVideoRef} // Pass the ref up to the parent
        src={item?.media_url}
        className="w-full h-full object-cover"
        muted={isMuted}
        playsInline
        loop
        preload="metadata"
      />

      {/* Mute/Unmute button */}
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          toggleMute(index);
        }}
        className="absolute bottom-3 right-3 z-20 inline-flex items-center justify-center
                   rounded-full border border-black/10 bg-white/90 backdrop-blur
                   shadow-sm w-10 h-10 hover:bg-white transition cursor-pointer"
        aria-label={isMuted ? "Unmute" : "Mute"}
      >
        <span className="text-lg leading-none">
          {isMuted ? "🔇" : "🔊"}
        </span>
      </button>

      {/* Label pill */}
      <div className="absolute top-3 left-3 pointer-events-none z-10">
        <div className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/90 backdrop-blur px-3 py-1 shadow-sm">
          <span className="h-2 w-2 rounded-full bg-softMintGreen" />
          <span className="text-[11px] font-semibold text-gray-700">Reel</span>
        </div>
      </div>
    </div>
  );
};

// ------------------------------------------------------------------
// MAIN COMPONENT
// ------------------------------------------------------------------
const Gallrey = () => {
  const [popularMovies, setPopularMovies] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [activeTab, setActiveTab] = useState("Gallery");
  const [activeGenre, setActiveGenre] = useState("all");
  const tabs = ["Gallery", "Portfolio"];

  // ---------- utils ----------
  function shuffleArray(array) {
    const arr = [...array];
    let currentIndex = arr.length;
    let randomIndex;

    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      [arr[currentIndex], arr[randomIndex]] = [arr[randomIndex], arr[currentIndex]];
    }
    return arr;
  }

  const medias = useMemo(
    () => [
      { id: 1, media_url: "https://res.cloudinary.com/dhebgz7qh/image/upload/v1767448128/u7uslcapng0rhneh7ond_rnevo4.jpg", type: "drinks", descripiton: "" },
      { id: 2, media_url: "https://res.cloudinary.com/dhebgz7qh/video/upload/v1767448183/ofln6neksu02dynedeax_ig1kbt.mp4", type: "drinks", descripiton: "" },
      // { id: 3, media_url: "https://res.cloudinary.com/dhebgz7qh/video/upload/v1767448180/rw7mjpgfye1ke6a6wmvr_u30fz9.mp4", type: "drinks", descripiton: "" }, // Hani was kicked out 😅
      { id: 4, media_url: "https://res.cloudinary.com/dhebgz7qh/video/upload/v1767448188/ooaf1ruia6doeip4qwdg_raay8j.mp4", type: "drinks", descripiton: "" },
      { id: 5, media_url: "https://res.cloudinary.com/dhebgz7qh/image/upload/v1767448109/cd2oxrizxts95az7bhyy_vqrnhs.jpg", type: "drinks", descripiton: "" },
      { id: 6, media_url: "https://res.cloudinary.com/dhebgz7qh/image/upload/v1767448128/u7uslcapng0rhneh7ond_rnevo4.jpg", type: "drinks", descripiton: "" },
      { id: 7, media_url: "https://res.cloudinary.com/dhebgz7qh/image/upload/v1767448115/gylzsw4bkzut4wwteqqh_humy6h.jpg", type: "drinks", descripiton: "" },
      { id: 8, media_url: "https://res.cloudinary.com/dhebgz7qh/image/upload/v1767448131/xgdljvsjasrf969yugaa_jhxw8w.jpg", type: "drinks", descripiton: "" },
      { id: 9, media_url: "https://res.cloudinary.com/dhebgz7qh/image/upload/v1767448121/qao703vvgwlbsogiv5cw_wjhvgp.jpg", type: "drinks", descripiton: "" },
      { id: 10, media_url: "https://res.cloudinary.com/dhebgz7qh/image/upload/v1767448132/zivckxpxoj7eoz3k0fbg_asox1j.jpg", type: "food", descripiton: "" },
      { id: 11, media_url: "https://res.cloudinary.com/dhebgz7qh/image/upload/v1767448118/mitkyzcyqpgraudf4mzo_ytgfkx.jpg", type: "food", descripiton: "" },
      { id: 12, media_url: "https://res.cloudinary.com/dhebgz7qh/image/upload/v1767448129/va3spn6weremalxijnim_j50w9s.jpg", type: "food", descripiton: "" },
      { id: 13, media_url: "https://res.cloudinary.com/dhebgz7qh/image/upload/v1767448113/hekcsbfgdyg9d6pup5ft_ceblkf.jpg", type: "food", descripiton: "" },
      { id: 14, media_url: "https://res.cloudinary.com/dhebgz7qh/image/upload/v1767448116/lrejrej4vkgm6pwz4pji_bflzxl.jpg", type: "food", descripiton: "" },
      { id: 15, media_url: "https://res.cloudinary.com/dhebgz7qh/image/upload/v1767448113/hcond6tzxbabx0ce4aku_g4z6r2.jpg", type: "food", descripiton: "" },
      { id: 16, media_url: "https://res.cloudinary.com/dhebgz7qh/image/upload/v1767448132/xmx5t5xm3uxrjf6ihcdt_upfix4.jpg", type: "food", descripiton: "" },
      { id: 17, media_url: "https://res.cloudinary.com/dhebgz7qh/image/upload/v1767448120/ozwomw2ybv9bkx2fkbxf_r4ziut.jpg", type: "food", descripiton: "" },
      { id: 18, media_url: "https://res.cloudinary.com/dhebgz7qh/image/upload/v1767448109/geo9wdmyu4pnh7c7mr9q_lypzi7.jpg", type: "food", descripiton: "" },
      { id: 19, media_url: "https://res.cloudinary.com/dhebgz7qh/image/upload/v1767448123/r6vdvndpnx7cvr5dntjd_tir57j.jpg", type: "food", descripiton: "" },
      { id: 20, media_url: "https://res.cloudinary.com/dhebgz7qh/image/upload/v1767448125/ujwwyfjsuybmzd2swakw_tus5pp.jpg", type: "food", descripiton: "" },
      { id: 21, media_url: "https://res.cloudinary.com/dhebgz7qh/image/upload/v1767448110/em1myinhecewatd7a5ih_hecxyp.jpg", type: "food", descripiton: "" },
      { id: 22, media_url: "https://res.cloudinary.com/dhebgz7qh/image/upload/v1767448108/b3u713dp7cpcwiidqpie_b9ej1h.jpg", type: "food", descripiton: "" },
      { id: 23, media_url: "https://res.cloudinary.com/dhebgz7qh/image/upload/v1767448107/a60azsrb6y4zzrdki2t6_at2eoq.jpg", type: "food", descripiton: "" },
      { id: 24, media_url: "https://res.cloudinary.com/dhebgz7qh/image/upload/v1767448114/ldwesrionjbuwffp0cw7_ivexgx.jpg", type: "food", descripiton: "" },
      { id: 25, media_url: "https://res.cloudinary.com/dhebgz7qh/image/upload/v1767448126/uk23x8ahosnejilqkjdq_j9uqm1.jpg", type: "food", descripiton: "" },
      { id: 26, media_url: "https://res.cloudinary.com/dhebgz7qh/image/upload/v1767448117/maqykxobznkum8ygukbv_htaziu.jpg", type: "food", descripiton: "" },
      { id: 27, media_url: "https://res.cloudinary.com/dhebgz7qh/image/upload/v1767448107/ahgneikwijzkfi1z3vih_snz6jg.jpg", type: "food", descripiton: "" },
      { id: 28, media_url: "https://res.cloudinary.com/dhebgz7qh/image/upload/v1767449259/osygbhyemxoc2vbe7xx5_iaiz3j.webp", type: "food", descripiton: "" },
      { id: 29, media_url: "https://res.cloudinary.com/dhebgz7qh/image/upload/v1767449500/rq65qikrbefpqmhsbfnt_g6megq.webp", type: "food", descripiton: "" },
    ],      
    []
  );

  useEffect(() => {
    const shuffled = shuffleArray(medias);
    setPopularMovies(shuffled);
    setFiltered(shuffled);
  }, [medias]);

  const bannerImages = useMemo(
    () => [
      "https://res.cloudinary.com/dhebgz7qh/image/upload/v1767448128/u7uslcapng0rhneh7ond_rnevo4.jpg",
      "https://res.cloudinary.com/dhebgz7qh/image/upload/v1767448109/cd2oxrizxts95az7bhyy_vqrnhs.jpg",
    ],
    []
  );

  const imagesOnly = useMemo(
    () => filtered.filter((x) => detectMediaType(x?.media_url) === "image"),
    [filtered]
  );
  const videosOnly = useMemo(
    () => medias.filter((x) => detectMediaType(x?.media_url) !== "image"),
    [medias]
  );

  console.log("videosOnly", videosOnly)

  // ---------- Video Logic ----------
  const videoRefs = useRef([]);
  // Track mute state: { [index]: boolean }
  const [mutedByIndex, setMutedByIndex] = useState({});

  const isMuted = (idx) => (mutedByIndex[idx] ?? true);

  const toggleReelMute = (idx) => {
    setMutedByIndex((prev) => {
      const nextMutedState = !(prev[idx] ?? true);

      // Update the React state (updates icon)
      const newState = { ...prev, [idx]: nextMutedState };

      // Immediately update the DOM element volume to prevent delay
      const v = videoRefs.current[idx];
      if (v) v.muted = nextMutedState;

      return newState;
    });
  };

  const pauseAllVideos = () => {
    videoRefs.current.forEach((v) => {
      if (!v) return;
      v.pause();
      try {
        v.currentTime = 0;
      } catch { }
    });
  };

  const playIndex = (idx) => {
    const v = videoRefs.current[idx];
    if (!v) return;

    // Ensure mute state matches logic before playing
    v.muted = isMuted(idx);
    v.play().catch((err) => console.log("Autoplay prevented:", err));
  };

  return (
    <div className="relative">
      <PagesBanner
        images={bannerImages}
        slogan={"Artisanal Visions: A Taste of Creativity "}
        title={"Gallery Corner"}
        scrollTo={"galley"}
      />

      <div className="relative" id="galley">
        {/* Header */}
        <div className="max-w-6xl mx-auto px-4 pt-10">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.55, ease: "easeOut" }}
            className="flex flex-col gap-3 items-center text-center"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-black/5 bg-white px-4 py-2 shadow-sm">
              <span className="h-2 w-2 rounded-full bg-softMintGreen" />
              <span className="text-xs sm:text-sm font-lato text-gray-600">
                Browse moments, dishes & vibes
              </span>
            </div>
            <h3 className="text-5xl sm:text-6xl font-seasons text-logoGold leading-tight">
              {activeTab === "Gallery" ? "Our Gallery" : "Our Portfolio"}
            </h3>
            <p className="max-w-2xl text-gray-600 font-lato text-sm sm:text-base">
              Explore our best captures—fresh food, signature drinks, and the ambience.
            </p>
          </motion.div>
        </div>

        {/* Toolbar */}
        <div className="z-30 mt-8">
          <div className="max-w-6xl mx-auto px-4">
            <div className="">
              <div className="flex flex-col lg:flex-row items-center justify-between gap-3">
                <div className="w-full lg:w-auto flex justify-center lg:justify-start">
                  <TopNavbar activeTab={activeTab} setActiveTab={setActiveTab} tabs={tabs} />
                </div>
                {activeTab === "Gallery" ? (
                  <div className="w-full lg:w-auto flex justify-center lg:justify-end">
                    <Filter
                      activeGenre={activeGenre}
                      setActiveGenre={setActiveGenre}
                      popular={popularMovies}
                      setFiltered={setFiltered}
                    />
                  </div>
                ) : null}
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="max-w-6xl mx-auto px-4 pb-16">
          <div style={{ display: activeTab === "Gallery" ? "block" : "none" }}>
            <motion.div
              key="gallery"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -18 }}
              transition={{ duration: 0.45, ease: "easeOut" }}
              className="mt-8"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

                {/* LEFT: Images */}
                <div className="lg:col-span-8 order-2 lg:order-1">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-xl font-seasons text-logoGold">Photos</h4>
                    <span className="text-sm text-gray-500 font-lato">
                      {imagesOnly.length} items
                    </span>
                  </div>
                  <FancyboxElement options={{ Carousel: { infinite: false } }}>
                    <motion.div layout className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
                      <AnimatePresence>
                        {imagesOnly.map((movie) => (
                          <motion.div
                            key={movie.id}
                            layout
                            initial={{ opacity: 0, scale: 0.97, y: 10 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.97, y: 10 }}
                            transition={{ duration: 0.28, ease: "easeOut" }}
                            className="group"
                          >
                            <div className="rounded-2xl border border-black/5 bg-white shadow-sm overflow-hidden hover:shadow-md transition">
                              <Movie item={movie} />
                            </div>
                          </motion.div>
                        ))}
                      </AnimatePresence>
                    </motion.div>
                  </FancyboxElement>
                </div>

                {/* RIGHT: Videos (Reels) */}
                <div className="lg:col-span-4 sticky top-0 order-1 lg:order-2">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-xl font-seasons text-logoGold">Reels</h4>
                    <span className="text-sm text-gray-500 font-lato">
                      {videosOnly.length} videos
                    </span>
                  </div>

                  <div className="rounded-2xl border border-black/5 bg-white shadow-sm overflow-hidden">
                    <div className="h-[520px] sm:h-[600px] lg:h-[600px]">
                      {videosOnly.length ? (
                        <Swiper
                          direction="vertical"
                          slidesPerView={1}
                          spaceBetween={12}
                          mousewheel
                          pagination={{ clickable: true }}
                          modules={[Mousewheel, Pagination]}
                          className="h-full"
                          onSwiper={() => {
                            pauseAllVideos();
                            requestAnimationFrame(() => playIndex(0));
                          }}
                          onSlideChange={(sw) => {
                            pauseAllVideos();
                            requestAnimationFrame(() => playIndex(sw.activeIndex));
                          }}
                        >
                          {videosOnly.map((vid, idx) => (
                            <SwiperSlide key={vid.id} className="p-3 h-full">
                              {/* 
                                  2. Using the Extracted Component
                                  Pass setRef callback to assign refs 
                              */}
                              <ReelSlide
                                item={vid}
                                index={idx}
                                isMuted={isMuted(idx)}
                                toggleMute={toggleReelMute}
                                setVideoRef={(el) => (videoRefs.current[idx] = el)}
                              />
                            </SwiperSlide>
                          ))}
                        </Swiper>
                      ) : (
                        <div className="h-full p-8 flex items-center justify-center text-gray-500 text-center">
                          No reels available.
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          <div style={{ display: activeTab === "Portfolio" ? "block" : "none" }}>
            <motion.div className="mt-8">
              <div className="rounded-2xl border border-black/5 bg-white shadow-sm p-3 sm:p-5">
                <Portfolio2 />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallrey;