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

// ✅ iOS detection
const detectIOS = () => {
  if (typeof window === "undefined") return false;
  const ua = window.navigator.userAgent;
  return (
    /iPad|iPhone|iPod/.test(ua) ||
    (ua.includes("Mac") && "ontouchend" in document)
  );
};

// ✅ Safari detection (Safari على Mac كمان بيعمل مشاكل)
const detectSafari = () => {
  if (typeof window === "undefined") return false;
  const ua = window.navigator.userAgent;
  return /^((?!chrome|android).)*safari/i.test(ua);
};

// helper: يحدد نوع الفيديو من الـ src
const getVideoType = (src) => {
  if (!src) return "video/mp4";
  const ext = src.split(".").pop().toLowerCase().split("?")[0];
  const map = {
    mp4: "video/mp4",
    webm: "video/webm",
    ogg: "video/ogg",
    mov: "video/quicktime",
    m4v: "video/mp4",
  };
  return map[ext] || "video/mp4";
};

const AboutUsSectionVideo = ({ videoSrc, videoSrcMp4, poster }) => {
  const wrapperRef = useRef(null);
  const videoRef = useRef(null);
  const progressFrameRef = useRef(null);
  const playAttemptRef = useRef(false);

  const [shouldRenderVideo, setShouldRenderVideo] = useState(false);
  const [shouldAutoplay, setShouldAutoplay] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [showControls, setShowControls] = useState(true);
  const [progress, setProgress] = useState(0);
  const [isIOS, setIsIOS] = useState(false);
  const [isSafari, setIsSafari] = useState(false);
  const [videoError, setVideoError] = useState(false);

  // ✅ Detect iOS و Safari
  useEffect(() => {
    setIsIOS(detectIOS());
    setIsSafari(detectSafari());
  }, []);

  // ✅ Intersection Observer
  useEffect(() => {
    const element = wrapperRef.current;
    if (!element || shouldRenderVideo) return;

    const isMobile = window.matchMedia("(max-width: 768px)").matches;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        setShouldRenderVideo(true);
        setShouldAutoplay(true);
        observer.disconnect();
      },
      {
        rootMargin: isMobile ? "0px 0px" : "120px 0px",
        threshold: 0.25,
      }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [shouldRenderVideo]);

  // ✅ Setup video بمجرد ما الـ source يظهر
  useEffect(() => {
    const video = videoRef.current;
    if (!video || !shouldRenderVideo) return;

    // ✅ Setup attributes مهمين لـ iOS قبل أي حاجة
    video.muted = true;
    video.defaultMuted = true;
    video.playsInline = true;
    video.setAttribute("muted", "");
    video.setAttribute("playsinline", "");
    video.setAttribute("webkit-playsinline", "true");
    video.setAttribute("x5-playsinline", "true");
    video.setAttribute("x5-video-player-type", "h5");
    video.setAttribute("x5-video-player-fullscreen", "true");

    // ✅ Force reload للـ source في iOS
    if (isIOS || isSafari) {
      video.load();
    }
  }, [shouldRenderVideo, isIOS, isSafari]);

  // ✅ Auto-play logic
  useEffect(() => {
    const video = videoRef.current;
    if (!video || !shouldRenderVideo || !shouldAutoplay) return;
    if (playAttemptRef.current) return;

    playAttemptRef.current = true;

    const attemptPlay = async () => {
      try {
        // ✅ Force properties قبل play
        video.muted = true;
        video.defaultMuted = true;

        // ✅ في iOS، لازم نستنى canplay event
        if (video.readyState < 3) {
          await new Promise((resolve) => {
            const onCanPlay = () => {
              video.removeEventListener("canplay", onCanPlay);
              video.removeEventListener("loadeddata", onCanPlay);
              resolve();
            };
            video.addEventListener("canplay", onCanPlay, { once: true });
            video.addEventListener("loadeddata", onCanPlay, { once: true });

            // Timeout بعد 5 ثواني
            setTimeout(resolve, 5000);
          });
        }

        const playPromise = video.play();

        if (playPromise !== undefined) {
          await playPromise;
          setIsPlaying(true);
          setVideoError(false);
        }
      } catch (err) {
        console.warn("Autoplay blocked or video error:", err);
        setIsPlaying(false);

        // ✅ في حالة iOS، لو فشل، خلي الـ user يضغط play
        playAttemptRef.current = false;
      }
    };

    attemptPlay();
  }, [shouldRenderVideo, shouldAutoplay]);

  // ✅ Cleanup
  useEffect(() => {
    return () => {
      if (progressFrameRef.current) {
        cancelAnimationFrame(progressFrameRef.current);
      }
    };
  }, []);

  // ✅ Toggle play - محسّن لـ iOS
  const togglePlay = useCallback(async () => {
    const video = videoRef.current;

    if (!shouldRenderVideo || !video) {
      setShouldRenderVideo(true);
      setShouldAutoplay(true);
      return;
    }

    try {
      if (isPlaying && !video.paused) {
        video.pause();
        setIsPlaying(false);
        setShowControls(true);
        return;
      }

      // ✅ Force muted للأمان
      video.muted = true;
      video.defaultMuted = true;

      const playPromise = video.play();

      if (playPromise !== undefined) {
        await playPromise;
        setIsPlaying(true);
        setShouldAutoplay(true);
        playAttemptRef.current = true;
      }
    } catch (err) {
      console.warn("Play failed:", err);
      setIsPlaying(false);
      setVideoError(true);
    }
  }, [isPlaying, shouldRenderVideo]);

  // ✅ Toggle mute
  const toggleMute = useCallback(() => {
    const video = videoRef.current;
    if (!video) return;

    const nextMutedValue = !isMuted;
    video.muted = nextMutedValue;
    video.defaultMuted = nextMutedValue;
    setIsMuted(nextMutedValue);
  }, [isMuted]);

  const handleVideoEnd = useCallback(() => {
    setIsPlaying(false);
    setShowControls(true);
    setProgress(0);
  }, []);

  const handleTimeUpdate = useCallback(() => {
    const video = videoRef.current;
    if (!video || !video.duration || progressFrameRef.current) return;

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

  // ✅ Listen لـ play/pause events من الفيديو نفسه
  const handlePlay = useCallback(() => {
    setIsPlaying(true);
    setVideoError(false);
  }, []);

  const handlePause = useCallback(() => {
    setIsPlaying(false);
  }, []);

  const handleVideoError = useCallback((e) => {
    console.error("Video error:", e.target.error);
    setVideoError(true);
    setIsPlaying(false);
  }, []);

  // ✅ تحديد الـ source على حسب الـ browser
  const shouldUseMP4 = isIOS || isSafari;
  const primarySrc = shouldUseMP4 && videoSrcMp4 ? videoSrcMp4 : videoSrc;
  const primaryType = getVideoType(primarySrc);

  return (
    <div
      ref={wrapperRef}
      className="relative w-full md:!max-h-[780px] h-full overflow-hidden"
      onMouseEnter={() => setShowControls(true)}
      onMouseLeave={() => isPlaying && setShowControls(false)}
    >
      {!shouldRenderVideo && (
        <img
          src={poster}
          alt="Nour Maison restaurant video preview"
          className="w-full h-full object-cover cursor-pointer !max-h-[780px]"
          loading="lazy"
          decoding="async"
          width="1100"
          height="780"
          onClick={() => {
            setShouldRenderVideo(true);
            setShouldAutoplay(true);
          }}
        />
      )}

      {shouldRenderVideo && (
        <video
          ref={videoRef}
          poster={poster}
          muted
          defaultMuted
          loop
          playsInline
          webkit-playsinline="true"
          x5-playsinline="true"
          x5-video-player-type="h5"
          x5-video-player-fullscreen="true"
          preload={isIOS ? "auto" : "metadata"}
          autoPlay
          controls={false}
          crossOrigin="anonymous"
          onClick={togglePlay}
          onEnded={handleVideoEnd}
          onTimeUpdate={handleTimeUpdate}
          onPlay={handlePlay}
          onPause={handlePause}
          onError={handleVideoError}
          className="w-full h-full object-cover cursor-pointer !max-h-[780px]"
        >
          {/* ✅ iOS/Safari: MP4 الأول */}
          {shouldUseMP4 && videoSrcMp4 && (
            <source src={videoSrcMp4} type="video/mp4" />
          )}

          {/* ✅ المصدر الأساسي */}
          <source src={primarySrc} type={primaryType} />

          {/* ✅ Fallback MP4 لباقي الـ browsers */}
          {!shouldUseMP4 && videoSrcMp4 && (
            <source src={videoSrcMp4} type="video/mp4" />
          )}

          {/* ✅ النص اللي يظهر لو الـ video مش بيشتغل خالص */}
          Your browser does not support the video tag.
        </video>
      )}

      <div
        className={`absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/30 pointer-events-none transition-opacity duration-300 ${showControls || !isPlaying ? "opacity-100" : "opacity-0"
          }`}
      />

      <button
        onClick={togglePlay}
        type="button"
        className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 transition-all duration-300 ${showControls || !isPlaying
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
        className={`absolute bottom-0 left-0 right-0 z-20 transition-all duration-300 ${showControls || !isPlaying
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
              type="button"
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
              type="button"
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
        className={`absolute top-4 left-4 z-10 transition-all duration-300 ${showControls || !isPlaying
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-4"
          }`}
      >
        <div className="flex items-center gap-2 bg-black/50 backdrop-blur-sm rounded-full px-4 py-2 border border-white/10">
          <img
            src="/images/nour-gold-logo.webp"
            alt="Nour Maison"
            className="h-6 w-6"
            loading="lazy"
            decoding="async"
            width="24"
            height="24"
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