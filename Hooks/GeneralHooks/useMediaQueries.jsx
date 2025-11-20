"use client";

import { useState, useEffect } from "react";

export function useMediaQuery(query) {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    // Check if we're in the browser before accessing window
    if (typeof window !== "undefined") {
      const mediaQueryList = window.matchMedia(query);
      const listener = (event) => setMatches(event.matches);

      mediaQueryList.addEventListener("change", listener);
      // Set initial state on mount
      setMatches(mediaQueryList.matches);

      // Cleanup listener on unmount
      return () => mediaQueryList.removeEventListener("change", listener);
    }
  }, [query]);

  return matches;
}
