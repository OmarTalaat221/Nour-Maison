"use client";

import React, { useMemo, useRef } from "react";
import { motion } from "framer-motion";
import { FaImages } from "react-icons/fa";
import { IoVideocam } from "react-icons/io5";
import { detectMediaType } from "../../../../lib/functions";
import "./style.scss";

const Movie = ({ item }) => {
  const videoRef = useRef(null);

  const type = useMemo(() => detectMediaType(item?.media_url), [item?.media_url]);
  const isVideo = type !== "image";

  const playVideo = () => {
    const v = videoRef.current;
    if (!v) return;
    // play only if possible (some browsers block)
    v.play().catch(() => {});
  };

  const resetVideo = () => {
    const v = videoRef.current;
    if (!v) return;
    v.pause();
    v.currentTime = 0;
  };

  // For touch devices: tap to preview video quickly
  const handleTouchStart = () => {
    if (isVideo) playVideo();
  };
  const handleTouchEnd = () => {
    if (isVideo) resetVideo();
  };

  return (
    <motion.a
      href={item?.media_url}
      data-fancybox="gallery"
      layout
      initial={{ opacity: 0, y: 10, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 10, scale: 0.98 }}
      transition={{ duration: 0.28, ease: "easeOut" }}
      className="group relative block w-full h-[220px] sm:h-[240px] overflow-hidden rounded-2xl cursor-pointer border border-black/5 bg-white shadow-sm hover:shadow-md transition-shadow"
      onMouseEnter={playVideo}
      onMouseLeave={resetVideo}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Media */}
      {type === "image" ? (
        <motion.img
          src={item?.media_url}
          alt={item?.descripiton || "Gallery item"}
          className="w-full h-full object-cover"
          whileHover={{ scale: 1.08 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          loading="lazy"
        />
      ) : (
        <motion.video
          ref={videoRef}
          src={item?.media_url}
          loop
          muted
          playsInline
          preload="metadata"
          className="w-full h-full object-cover"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          whileHover={{ scale: 1.08 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
        />
      )}

      {/* Top-left pill icon (no overlay background, just a small pill) */}
      <div className="absolute top-3 left-3 pointer-events-none">
        <div className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/90 backdrop-blur px-3 py-1 shadow-sm">
          {type === "image" ? (
            <>
              <FaImages className="text-sm text-gray-800" />
              <span className="text-[11px] font-semibold text-gray-700">
                Photo
              </span>
            </>
          ) : (
            <>
              <IoVideocam className="text-sm text-gray-800" />
              <span className="text-[11px] font-semibold text-gray-700">
                Video
              </span>
            </>
          )}
        </div>
      </div>

      {/* Bottom-right tiny hint (clean, no background overlay) */}
      <div className="absolute bottom-3 right-3 pointer-events-none">
        <div className="text-[11px] font-semibold text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.35)] opacity-0 group-hover:opacity-100 transition-opacity">
          Click to open
        </div>
      </div>
    </motion.a>
  );
};

export default Movie;
