"use client";

import { useEffect, useState } from "react";

export default function useBookingUrl(basePath = "/booking") {
  const [url, setUrl] = useState(basePath);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const source = params.get("source");

    if (source) {
      setUrl(`${basePath}?source=${encodeURIComponent(source)}`);
    }
  }, [basePath]);

  return url;
}