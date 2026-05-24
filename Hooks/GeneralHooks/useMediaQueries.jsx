"use client";

import { useCallback, useSyncExternalStore } from "react";

export function useMediaQuery(query, defaultValue = false) {
  const getSnapshot = useCallback(() => {
    if (typeof window === "undefined") return defaultValue;
    return window.matchMedia(query).matches;
  }, [query, defaultValue]);

  const getServerSnapshot = useCallback(() => defaultValue, [defaultValue]);

  const subscribe = useCallback(
    (callback) => {
      if (typeof window === "undefined") return () => {};

      const mediaQueryList = window.matchMedia(query);

      const handler = () => callback();

      if (mediaQueryList.addEventListener) {
        mediaQueryList.addEventListener("change", handler);
      } else {
        mediaQueryList.addListener(handler);
      }

      return () => {
        if (mediaQueryList.removeEventListener) {
          mediaQueryList.removeEventListener("change", handler);
        } else {
          mediaQueryList.removeListener(handler);
        }
      };
    },
    [query],
  );

  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}
