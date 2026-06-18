"use client";

import { memo, useEffect } from "react";

const GTM_ID = "GTM-P48D3KC3";
const GA_ID = "G-GDNDWEWDFW";
const AHREFS_KEY = "FUJMrE2qx69y9MrZZkD6AA";

const LazyAnalytics = () => {
    useEffect(() => {
        let loaded = false;

        const loadScript = (src, attrs = {}) => {
            const script = document.createElement("script");
            script.src = src;
            script.async = true;

            Object.entries(attrs).forEach(([key, value]) => {
                script.setAttribute(key, value);
            });

            document.head.appendChild(script);
        };

        const loadAnalytics = () => {
            if (loaded) return;

            loaded = true;

            window.dataLayer = window.dataLayer || [];
            window.dataLayer.push({
                "gtm.start": new Date().getTime(),
                event: "gtm.js",
            });

            loadScript(`https://www.googletagmanager.com/gtm.js?id=${GTM_ID}`);

            loadScript(`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`);

            window.gtag = function gtag() {
                window.dataLayer.push(arguments);
            };

            window.gtag("js", new Date());
            window.gtag("config", GA_ID);

            loadScript("https://analytics.ahrefs.com/analytics.js", {
                "data-key": AHREFS_KEY,
            });
        };

        const events = ["pointerdown", "touchstart", "keydown", "scroll"];

        events.forEach((eventName) => {
            window.addEventListener(eventName, loadAnalytics, {
                once: true,
                passive: true,
            });
        });

        return () => {
            events.forEach((eventName) => {
                window.removeEventListener(eventName, loadAnalytics);
            });
        };
    }, []);

    return null;
};

export default memo(LazyAnalytics);