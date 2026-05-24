"use client";

import { useSearchParams } from "next/navigation";


export default function useBookingUrl(basePath = "/booking") {
  const searchParams = useSearchParams();
  const source = searchParams.get("source");

  if (!source) return basePath;

  return `${basePath}?source=${encodeURIComponent(source)}`;
}