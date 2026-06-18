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
    let mounted = true;
    let timeoutId;
    let idleId;

    const initAOS = async () => {
      const [{ default: AOS }] = await Promise.all([
        import("aos"),
        import("aos/dist/aos.css"),
      ]);

      if (!mounted) return;

      AOS.init({
        once: false,
        duration: 700,
        easing: "ease-out",
        offset: 80,
        disable: () => window.innerWidth < 360,
      });

      window.setTimeout(() => {
        if (mounted) {
          AOS.refreshHard();
        }
      }, 300);
    };

    const scheduleAOS = () => {
      if ("requestIdleCallback" in window) {
        idleId = window.requestIdleCallback(initAOS, {
          timeout: 3500,
        });
      } else {
        timeoutId = window.setTimeout(initAOS, 1800);
      }
    };

    if (document.readyState === "complete") {
      scheduleAOS();
    } else {
      window.addEventListener("load", scheduleAOS, { once: true });
    }

    return () => {
      mounted = false;
      window.removeEventListener("load", scheduleAOS);

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