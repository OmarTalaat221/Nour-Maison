"use client";

import dynamic from "next/dynamic";
import { memo, useEffect, useState } from "react";

const Footer = dynamic(() => import("../shared/Footer/Footer"), {
    ssr: false,
    loading: () => null,
});

const LazyFooter = () => {
    const [showFooter, setShowFooter] = useState(false);

    useEffect(() => {
        if (showFooter) return;

        let timeoutId;
        let idleId;

        const loadFooter = () => {
            setShowFooter(true);
        };

        const events = ["scroll", "pointerdown", "keydown", "touchstart"];

        events.forEach((eventName) => {
            window.addEventListener(eventName, loadFooter, {
                once: true,
                passive: true,
            });
        });

        if ("requestIdleCallback" in window) {
            idleId = window.requestIdleCallback(loadFooter, {
                timeout: 7000,
            });
        } else {
            timeoutId = window.setTimeout(loadFooter, 7000);
        }

        return () => {
            events.forEach((eventName) => {
                window.removeEventListener(eventName, loadFooter);
            });

            if (idleId) {
                window.cancelIdleCallback(idleId);
            }

            if (timeoutId) {
                window.clearTimeout(timeoutId);
            }
        };
    }, [showFooter]);

    return showFooter ? <Footer /> : null;
};

export default memo(LazyFooter);