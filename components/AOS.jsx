"use client";

import React, { memo, useEffect } from "react";
import { usePathname } from "next/navigation";

const AOSAnimation = () => {
  const pathname = usePathname();

  useEffect(() => {
    window.scrollTo({
      top: 0,
    });
  }, [pathname]);

  useEffect(() => {
    let cancelled = false;
    let idleId;
    let timeoutId;

    const loadAosCss = () => {
      if (document.querySelector('link[data-aos-css="true"]')) return;

      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = "https://unpkg.com/aos@2.3.4/dist/aos.css";
      link.setAttribute("data-aos-css", "true");
      document.head.appendChild(link);
    };

    const initAos = async () => {
      if (cancelled) return;

      loadAosCss();

      const AOS = (await import("aos")).default;

      if (cancelled) return;

      AOS.init({
        once: false,
        duration: 700,
        easing: "ease-out",
        offset: 80,
        disable: () =>
          window.matchMedia("(prefers-reduced-motion: reduce)").matches,
      });
    };

    if ("requestIdleCallback" in window) {
      idleId = window.requestIdleCallback(initAos, { timeout: 2500 });
    } else {
      timeoutId = window.setTimeout(initAos, 1500);
    }

    return () => {
      cancelled = true;

      if (idleId) {
        window.cancelIdleCallback(idleId);
      }

      if (timeoutId) {
        window.clearTimeout(timeoutId);
      }
    };
  }, []);

  return null;
};

export default memo(AOSAnimation);