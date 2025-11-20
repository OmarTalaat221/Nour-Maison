"use client";
import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { usePathname } from "next/navigation";

const AOSAnimation = () => {

  const pathname = usePathname()

  React.useEffect(() => {
    window.scrollTo({
      top: 0,
      // behavior: "smooth"
    });
  }, [pathname]);

  React.useEffect(() => {
    AOS.init({
      once: false, // Whether to animate elements only once
    });
  }, []);
  return null;
};

export default AOSAnimation;
