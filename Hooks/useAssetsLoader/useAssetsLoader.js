// Hooks/useAssetsLoader/useAssetsLoader.js
"use client";
import { useEffect, useState } from "react";

const CACHE_KEY = "nour_maison_assets_loaded";

// ✅ يتغير تلقائياً لما تضيف/تحذف/تعدل أي صورة
const CACHE_VERSION = process.env.NEXT_PUBLIC_ASSETS_HASH || "default-v1";

const CACHE_DURATION = 7 * 24 * 60 * 60 * 1000; // ✅ أسبوع

export const useAssetsLoader = () => {
  const [progress, setProgress] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    // ============================================
    // ✅ افحص الكاش
    // ============================================
    const checkCache = () => {
      try {
        const cached = sessionStorage.getItem(CACHE_KEY);
        if (!cached) return false;

        const { version, timestamp } = JSON.parse(cached);
        const now = Date.now();

        // ✅ لو الـ assets اتغيرت → version جديد → امسح الكاش
        if (version !== CACHE_VERSION) {
          console.log("🔄 Assets updated, refreshing cache");
          sessionStorage.removeItem(CACHE_KEY);
          return false;
        }

        // ✅ لو الكاش قديم
        if (now - timestamp > CACHE_DURATION) {
          sessionStorage.removeItem(CACHE_KEY);
          return false;
        }

        return true;
      } catch (err) {
        return false;
      }
    };

    // ============================================
    // ✅ الكاش موجود - خلص بسرعة
    // ============================================
    if (checkCache()) {
      console.log("✅ Loading from cache");

      let quickProgress = 0;
      const quickInterval = setInterval(() => {
        quickProgress += 25;
        if (quickProgress >= 100) {
          setProgress(100);
          clearInterval(quickInterval);
          setTimeout(() => setIsLoaded(true), 300);
        } else {
          setProgress(quickProgress);
        }
      }, 80);

      return () => clearInterval(quickInterval);
    }

    // ============================================
    // ✅ مفيش كاش - حمل كل حاجة
    // ============================================
    console.log("📥 Loading assets for the first time");

    let loadedCount = 0;
    let totalAssets = 0;
    let mounted = true;

    const saveToCache = () => {
      try {
        sessionStorage.setItem(
          CACHE_KEY,
          JSON.stringify({
            version: CACHE_VERSION,
            timestamp: Date.now(),
          })
        );
      } catch (err) {
        console.warn("Cache save failed:", err);
      }
    };

    const updateProgress = () => {
      if (!mounted) return;
      loadedCount++;
      const percentage = Math.round((loadedCount / totalAssets) * 100);
      setProgress(percentage);

      if (loadedCount >= totalAssets) {
        saveToCache();
        setTimeout(() => {
          if (mounted) setIsLoaded(true);
        }, 600);
      }
    };

    const loadAllAssets = () => {
      const images = Array.from(document.images);
      const videos = Array.from(document.querySelectorAll("video"));

      const elementsWithBg = Array.from(document.querySelectorAll("*")).filter(
        (el) => {
          const bg = window.getComputedStyle(el).backgroundImage;
          return bg && bg !== "none" && bg.includes("url");
        }
      );

      const bgImages = elementsWithBg
        .map((el) => {
          const bg = window.getComputedStyle(el).backgroundImage;
          const match = bg.match(/url\(["']?(.+?)["']?\)/);
          return match ? match[1] : null;
        })
        .filter(Boolean);

      // console.log("images", images);
      // console.log("videos", videos);
      // console.log("bgImages", bgImages);

      totalAssets = images.length + videos.length + bgImages.length;

      if (totalAssets === 0) {
        setProgress(100);
        saveToCache();
        setTimeout(() => {
          if (mounted) setIsLoaded(true);
        }, 800);
        return;
      }

      images.forEach((img) => {
        if (img.complete && img.naturalHeight !== 0) {
          updateProgress();
        } else {
          img.addEventListener("load", updateProgress, { once: true });
          img.addEventListener("error", updateProgress, { once: true });
        }
      });

      videos.forEach((video) => {
        if (video.readyState >= 3) {
          updateProgress();
        } else {
          video.addEventListener("loadeddata", updateProgress, { once: true });
          video.addEventListener("error", updateProgress, { once: true });
        }
      });

      bgImages.forEach((src) => {
        const img = new Image();
        img.onload = updateProgress;
        img.onerror = updateProgress;
        img.src = src;
      });
    };

    if (document.readyState === "complete") {
      loadAllAssets();
    } else {
      window.addEventListener("load", loadAllAssets, { once: true });
    }

    const safetyTimeout = setTimeout(() => {
      if (mounted && !isLoaded) {
        setProgress(100);
        saveToCache();
        setIsLoaded(true);
      }
    }, 15000);

    return () => {
      mounted = false;
      clearTimeout(safetyTimeout);
    };
  }, []);

  return { progress, isLoaded };
};
