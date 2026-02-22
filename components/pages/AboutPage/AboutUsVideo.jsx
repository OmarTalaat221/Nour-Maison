"use client";

import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { FaPlay, FaPause, FaVolumeMute, FaVolumeUp } from "react-icons/fa";

const AboutUsVideo = ({ videoSrc, poster }) => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [showControls, setShowControls] = useState(true);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const handleVideoEnd = () => {
    setIsPlaying(false);
    setShowControls(true);
  };

  return (
    <div
      className="relative w-full h-full rounded-3xl overflow-hidden"
      onMouseEnter={() => setShowControls(true)}
      onMouseLeave={() => isPlaying && setShowControls(false)}
    >
      {/* Video Element */}
      <video
        ref={videoRef}
        src={videoSrc}
        poster={poster}
        muted={isMuted}
        autoPlay
        loop
        playsInline
        onClick={togglePlay}
        onEnded={handleVideoEnd}
        className="w-full h-full object-cover cursor-pointer"
        alt="about-nour-maison"
      />

      {/* Overlay Controls */}
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: showControls ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none"
      />

      {/* Play/Pause Button - Center */}
      <motion.button
        initial={{ opacity: 1 }}
        animate={{ opacity: showControls || !isPlaying ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        onClick={togglePlay}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10"
        aria-label={isPlaying ? "Pause video" : "Play video"}
      >
        <span className="absolute inset-0 rounded-full bg-[#f59e0b]/30 blur-xl" />
        <span className="absolute -inset-2 rounded-full border border-white/10" />
        <motion.span
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="relative flex h-16 w-16 items-center justify-center rounded-full bg-logoGold shadow-lg"
        >
          {isPlaying ? (
            <FaPause className="text-white text-lg" />
          ) : (
            <FaPlay className="text-white text-lg translate-x-[2px]" />
          )}
        </motion.span>
        {/* pulse animation when not playing */}
        {!isPlaying && (
          <span className="absolute inset-0 rounded-full animate-ping bg-[#f59e0b]/20" />
        )}
      </motion.button>

      {/* Bottom Controls */}
      <motion.div
        initial={{ opacity: 1, y: 0 }}
        animate={{ opacity: showControls ? 1 : 0, y: showControls ? 0 : 10 }}
        transition={{ duration: 0.3 }}
        className="absolute bottom-4 right-4 z-10 flex items-center gap-3"
      >
        {/* Mute/Unmute Button */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={toggleMute}
          className="flex h-10 w-10 items-center justify-center rounded-full bg-black/50 backdrop-blur-sm border border-white/20 hover:bg-black/70 transition"
          aria-label={isMuted ? "Unmute" : "Mute"}
        >
          {isMuted ? (
            <FaVolumeMute className="text-white text-sm" />
          ) : (
            <FaVolumeUp className="text-white text-sm" />
          )}
        </motion.button>
      </motion.div>

      {/* Video Status Indicator */}
      {isPlaying && (
        <div className="absolute top-4 left-4 z-10">
          <div className="flex items-center gap-2 bg-black/50 backdrop-blur-sm rounded-full px-4 py-2 border border-white/10">
            <img
              src="https://res.cloudinary.com/dhebgz7qh/image/upload/v1767452496/y3replc9wmlnvwb7kjvo_hyo3u3.png"
              alt="Nour Maison"
              className="h-6 w-6"
            />
            <span className="text-white text-sm font-seasons font-semibold">
              Nour Maison
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default AboutUsVideo;
