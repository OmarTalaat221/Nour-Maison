"use client";

import { useEffect } from "react";

const ScrollToSection = () => {
    useEffect(() => {
        if (typeof window === "undefined") return;

        const hash = window.location.hash;

        if (!hash) return;

        const scrollToElement = () => {
            const element = document.querySelector(hash);

            if (!element) {
                return false;
            }

            const headerOffset = 100;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth",
            });

            return true;
        };

        let attempts = 0;
        const maxAttempts = 20;

        const interval = setInterval(() => {
            attempts++;

            if (scrollToElement() || attempts >= maxAttempts) {
                clearInterval(interval);
            }
        }, 200);

        const initialTimer = setTimeout(scrollToElement, 500);

        return () => {
            clearInterval(interval);
            clearTimeout(initialTimer);
        };
    }, []);

    return null;
};

export default ScrollToSection;