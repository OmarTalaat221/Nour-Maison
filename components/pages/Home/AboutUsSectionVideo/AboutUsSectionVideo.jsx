"use client";

import React, { memo, useCallback, useEffect, useRef, useState } from "react";

const PlayIcon = ({ className = "" }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M8 5v14l11-7z" />
  </svg>
);

const PauseIcon = ({ className = "" }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M6 5h4v14H6V5zm8 0h4v14h-4V5z" />
  </svg>
);

const VolumeMuteIcon = ({ className = "" }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M16.5 12 20 8.5 18.5 7 15 10.5 11.5 7 10 8.5 13.5 12 10 15.5l1.5 1.5L15 13.5l3.5 3.5 1.5-1.5L16.5 12zM3 9v6h4l5 4V5L7 9H3z" />
  </svg>
);

const VolumeUpIcon = ({ className = "" }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M3 9v6h4l5 4V5L7 9H3zm13.5 3A4.5 4.5 0 0 0 14 7.97v8.05A4.5 4.5 0 0 0 16.5 12zm-2.5-8.5v2.06a7 7 0 0 1 0 12.88v2.06a9 9 0 0 0 0-17z" />
  </svg>
);

const AboutUsSectionVideo = ({ videoSrc, poster }) => {
  const wrapperRef = useRef(null);
  const videoRef = useRef(null);
  const progressFrameRef = useRef(null);
  const [shouldLoadVideo, setShouldLoadVideo] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [showControls, setShowControls] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const element = wrapperRef.current;

    if (!element || shouldLoadVideo) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoadVideo(true);
          observer.disconnect();
        }
      },
      {
        rootMargin: "350px 0px",
        threshold: 0.1,
      },
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [shouldLoadVideo]);

  useEffect(() => {
    const video = videoRef.current;

    if (!video || !shouldLoadVideo) return;

    video
      .play()
      .then(() => setIsPlaying(true))
      .catch(() => setIsPlaying(false));
  }, [shouldLoadVideo]);

  useEffect(() => {
    return () => {
      if (progressFrameRef.current) {
        cancelAnimationFrame(progressFrameRef.current);
      }
    };
  }, []);

  const togglePlay = useCallback(() => {
    const video = videoRef.current;

    if (!video) {
      setShouldLoadVideo(true);
      return;
    }

    if (isPlaying) {
      video.pause();
      setIsPlaying(false);
      setShowControls(true);
      return;
    }

    video
      .play()
      .then(() => {
        setIsPlaying(true);
      })
      .catch(() => {
        setIsPlaying(false);
      });
  }, [isPlaying]);

  const toggleMute = useCallback(() => {
    const video = videoRef.current;

    if (!video) return;

    video.muted = !isMuted;
    setIsMuted((prev) => !prev);
  }, [isMuted]);

  const handleVideoEnd = useCallback(() => {
    setIsPlaying(false);
    setShowControls(true);
    setProgress(0);
  }, []);

  const handleTimeUpdate = useCallback(() => {
    const video = videoRef.current;

    if (!video || !video.duration) return;

    if (progressFrameRef.current) return;

    progressFrameRef.current = requestAnimationFrame(() => {
      setProgress((video.currentTime / video.duration) * 100);
      progressFrameRef.current = null;
    });
  }, []);

  const handleProgressClick = useCallback((e) => {
    const video = videoRef.current;

    if (!video || !video.duration) return;

    const rect = e.currentTarget.getBoundingClientRect();
    const clickPosition = (e.clientX - rect.left) / rect.width;
    video.currentTime = clickPosition * video.duration;
  }, []);

  return (
    <div
      ref={wrapperRef}
      className="relative w-full md:!max-h-[780px] h-full overflow-hidden"
      onMouseEnter={() => setShowControls(true)}
      onMouseLeave={() => isPlaying && setShowControls(false)}
    >
      {!shouldLoadVideo && (
        <img
          src={poster}
          alt="Nour Maison restaurant video preview"
          className="w-full h-full object-cover cursor-pointer !max-h-[780px]"
          loading="lazy"
          decoding="async"
          onClick={() => setShouldLoadVideo(true)}
        />
      )}

      {shouldLoadVideo && (
        <video
          ref={videoRef}
          src={videoSrc}
          poster={poster}
          muted={isMuted}
          loop
          playsInline
          preload="metadata"
          onClick={togglePlay}
          onEnded={handleVideoEnd}
          onTimeUpdate={handleTimeUpdate}
          className="w-full h-full object-cover cursor-pointer !max-h-[780px]"
        />
      )}

      <div
        className={`absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/30 pointer-events-none transition-opacity duration-300 ${
          showControls || !isPlaying ? "opacity-100" : "opacity-0"
        }`}
      />

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
        <span className="relative flex h-16 w-16 md:h-20 md:w-20 items-center justify-center rounded-full bg-logoGold shadow-lg hover:scale-110 transition-transform duration-200">
          {isPlaying ? (
            <PauseIcon className="text-white h-5 w-5" />
          ) : (
            <PlayIcon className="text-white h-5 w-5 translate-x-[2px]" />
          )}
        </span>
        {!isPlaying && (
          <span className="absolute inset-0 rounded-full animate-ping bg-logoGold/30" />
        )}
      </button>

      <div
        className={`absolute bottom-0 left-0 right-0 z-20 transition-all duration-300 ${
          showControls || !isPlaying
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-4"
        }`}
      >
        <div
          className="w-full h-1 bg-white/30 cursor-pointer group"
          onClick={handleProgressClick}
        >
          <div
            className="h-full bg-logoGold transition-transform duration-150 relative origin-left"
            style={{ transform: `scaleX(${progress / 100})` }}
          >
            <span className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-logoGold rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
        </div>

        <div className="flex items-center justify-between px-4 py-3 bg-gradient-to-t from-black/80 to-transparent">
          <div className="flex items-center gap-3">
            <button
              onClick={togglePlay}
              className="flex items-center justify-center w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
              aria-label={isPlaying ? "Pause" : "Play"}
            >
              {isPlaying ? (
                <PauseIcon className="text-white h-4 w-4" />
              ) : (
                <PlayIcon className="text-white h-4 w-4 translate-x-[1px]" />
              )}
            </button>

            {isPlaying && (
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-red-500 animate-pulse" />
                <span className="text-white text-xs font-medium hidden sm:block">
                  Playing
                </span>
              </div>
            )}
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={toggleMute}
              className="flex items-center justify-center w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
              aria-label={isMuted ? "Unmute" : "Mute"}
            >
              {isMuted ? (
                <VolumeMuteIcon className="text-white h-4 w-4" />
              ) : (
                <VolumeUpIcon className="text-white h-4 w-4" />
              )}
            </button>
          </div>
        </div>
      </div>

      <div
        className={`absolute top-4 left-4 z-10 transition-all duration-300 ${
          showControls || !isPlaying
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-4"
        }`}
      >
        <div className="flex items-center gap-2 bg-black/50 backdrop-blur-sm rounded-full px-4 py-2 border border-white/10">
          <img
            src="https://res.cloudinary.com/dhebgz7qh/image/upload/v1767452496/y3replc9wmlnvwb7kjvo_hyo3u3.png"
            alt="Nour Maison"
            className="h-6 w-6"
            loading="lazy"
            decoding="async"
          />
          <span className="text-white text-sm font-seasons font-semibold">
            Nour Maison
          </span>
        </div>
      </div>
    </div>
  );
};

export default memo(AboutUsSectionVideo);
