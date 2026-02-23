// components/AfternoonTeaVideo/AfternoonTeaVideo.jsx
"use client";

import React, { useRef, useState, useEffect } from "react";
import { FaPlay, FaPause, FaVolumeMute, FaVolumeUp } from "react-icons/fa";

const AfternoonTeaVideo = ({
  videoSrc = "https://res.cloudinary.com/dkc5klynm/video/upload/v1771769055/afternoon_tea_section_menu_goocyq.mp4",
  poster = "https://res.cloudinary.com/dhebgz7qh/image/upload/v1767443802/xvt7iw6wqrjw2ifcsxyk_mbwlqs.jpg",
}) => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [showControls, setShowControls] = useState(true);
  const [progress, setProgress] = useState(0);

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
    setProgress(0);
  };

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      const currentProgress =
        (videoRef.current.currentTime / videoRef.current.duration) * 100;
      setProgress(currentProgress);
    }
  };

  const handleProgressClick = (e) => {
    if (videoRef.current) {
      const rect = e.currentTarget.getBoundingClientRect();
      const clickPosition = (e.clientX - rect.left) / rect.width;
      videoRef.current.currentTime = clickPosition * videoRef.current.duration;
    }
  };

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.addEventListener("timeupdate", handleTimeUpdate);
      return () => {
        video.removeEventListener("timeupdate", handleTimeUpdate);
      };
    }
  }, []);

  return (
    <div
      className="relative w-full h-full rounded-2xl overflow-hidden"
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
      />

      {/* Overlay Gradient */}
      <div
        className={`absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 pointer-events-none transition-opacity duration-300 ${
          showControls || !isPlaying ? "opacity-100" : "opacity-0"
        }`}
      />

      {/* Play/Pause Button - Center */}
      <button
        onClick={togglePlay}
        className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 transition-all duration-300 ${
          showControls || !isPlaying
            ? "opacity-100 scale-100"
            : "opacity-0 scale-90"
        }`}
        aria-label={isPlaying ? "Pause video" : "Play video"}
      >
        <span className="absolute inset-0 rounded-full bg-logoGold/30 blur-xl" />
        <span className="absolute -inset-3 rounded-full border-2 border-white/20 animate-pulse" />
        <span className="relative flex h-12 w-12 sm:h-14 sm:w-14 md:h-16 md:w-16 items-center justify-center rounded-full bg-logoGold shadow-lg hover:scale-110 transition-transform duration-200">
          {isPlaying ? (
            <FaPause className="text-white text-sm sm:text-base md:text-lg" />
          ) : (
            <FaPlay className="text-white text-sm sm:text-base md:text-lg translate-x-[2px]" />
          )}
        </span>
        {/* Pulse animation when not playing */}
        {!isPlaying && (
          <span className="absolute inset-0 rounded-full animate-ping bg-logoGold/30" />
        )}
      </button>

      {/* Bottom Controls Bar */}
      <div
        className={`absolute bottom-0 left-0 right-0 z-20 transition-all duration-300 ${
          showControls || !isPlaying
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-4"
        }`}
      >
        {/* Progress Bar */}
        <div
          className="w-full h-1 bg-white/30 cursor-pointer group"
          onClick={handleProgressClick}
        >
          <div
            className="h-full bg-logoGold transition-all duration-150 relative"
            style={{ width: `${progress}%` }}
          >
            <span className="absolute right-0 top-1/2 -translate-y-1/2 w-2.5 h-2.5 bg-logoGold rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-between px-3 sm:px-4 py-2 sm:py-3 bg-gradient-to-t from-black/70 to-transparent">
          {/* Left Side - Play/Pause */}
          <div className="flex items-center gap-2 sm:gap-3">
            <button
              onClick={togglePlay}
              className="flex items-center justify-center w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
              aria-label={isPlaying ? "Pause" : "Play"}
            >
              {isPlaying ? (
                <FaPause className="text-white text-xs sm:text-sm" />
              ) : (
                <FaPlay className="text-white text-xs sm:text-sm translate-x-[1px]" />
              )}
            </button>

            {/* Playing Status */}
            {isPlaying && (
              <div className="flex items-center gap-1.5 sm:gap-2">
                <span className="h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full bg-red-500 animate-pulse" />
                <span className="text-white text-[10px] sm:text-xs font-medium hidden sm:block">
                  Playing
                </span>
              </div>
            )}
          </div>

          {/* Right Side - Volume */}
          <div className="flex items-center gap-2 sm:gap-3">
            <button
              onClick={toggleMute}
              className="flex items-center justify-center w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
              aria-label={isMuted ? "Unmute" : "Mute"}
            >
              {isMuted ? (
                <FaVolumeMute className="text-white text-xs sm:text-sm" />
              ) : (
                <FaVolumeUp className="text-white text-xs sm:text-sm" />
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AfternoonTeaVideo;
