"use client";

import React, { useEffect, useState, useCallback } from "react";
import dynamic from "next/dynamic";

const SubscribeModal = dynamic(() => import("./SubscribeModal"), {
    ssr: false,
    loading: () => null,
});
const STORAGE_KEYS = {
    SUBSCRIBED: "nm_subscribed",
    LAST_SHOWN: "nm_modal_last_shown",
};

const TIME_BETWEEN_SHOWS = 60 * 60 * 1000; // 1 hour in milliseconds
const INITIAL_DELAY = 7000; // 7 seconds after page load

const SubscribeModalProvider = () => {
    const [showModal, setShowModal] = useState(false);
    const [shouldRender, setShouldRender] = useState(false);

    const checkShouldShow = useCallback(() => {
        try {
            const isSubscribed = localStorage.getItem(STORAGE_KEYS.SUBSCRIBED);
            if (isSubscribed === "true") return false;

            // Check last shown time
            const lastShown = localStorage.getItem(STORAGE_KEYS.LAST_SHOWN);
            if (!lastShown) return true;

            const now = Date.now();
            const lastShownTime = parseInt(lastShown, 10);

            // If less than 1 hour passed → don't show
            if (now - lastShownTime < TIME_BETWEEN_SHOWS) return false;

            return true;
        } catch (error) {
            console.error("LocalStorage error:", error);
            return false;
        }
    }, []);

    // ✅ Mark as shown
    const markAsShown = useCallback(() => {
        try {
            localStorage.setItem(
                STORAGE_KEYS.LAST_SHOWN,
                Date.now().toString()
            );
        } catch (error) {
            console.error("LocalStorage error:", error);
        }
    }, []);

    // ✅ Handle close
    const handleClose = useCallback(() => {
        setShowModal(false);
        // Unmount after exit animation
        setTimeout(() => setShouldRender(false), 600);
    }, []);

    // ✅ Show modal logic (after page load + idle)
    useEffect(() => {
        // Don't run if already shown in this session
        let timer;
        let idleCallback;

        const triggerShow = () => {
            if (checkShouldShow()) {
                setShouldRender(true);
                setShowModal(true);
                markAsShown();
            }
        };

        // Wait for page load + idle time for best performance
        const initialize = () => {
            timer = setTimeout(() => {
                // Use requestIdleCallback for non-blocking trigger
                if ("requestIdleCallback" in window) {
                    idleCallback = window.requestIdleCallback(triggerShow, {
                        timeout: 2000,
                    });
                } else {
                    triggerShow();
                }
            }, INITIAL_DELAY);
        };

        // Wait for window load
        if (document.readyState === "complete") {
            initialize();
        } else {
            window.addEventListener("load", initialize, { once: true });
        }

        return () => {
            if (timer) clearTimeout(timer);
            if (idleCallback && "cancelIdleCallback" in window) {
                window.cancelIdleCallback(idleCallback);
            }
            window.removeEventListener("load", initialize);
        };
    }, [checkShouldShow, markAsShown]);

    // ✅ Don't render anything if not needed
    if (!shouldRender) return null;

    return <SubscribeModal onClose={handleClose} />;
};

export default SubscribeModalProvider;