"use client";

import { useEffect } from "react";
import { useSearchParams } from "next/navigation";

const RedirectTracker = () => {
    const searchParams = useSearchParams();

    useEffect(() => {
        const ref = searchParams.get("ref");
        const from = searchParams.get("from");

        if (ref === "404" && from) {
            // ✅ Google Analytics 4
            if (typeof window !== "undefined" && window.gtag) {
                window.gtag("event", "404_redirect_to_booking", {
                    event_category: "Navigation",
                    event_label: from,
                    original_path: from,
                    value: 1,
                });
            }

            // ✅ Meta Pixel
            if (typeof window !== "undefined" && window.fbq) {
                window.fbq("trackCustom", "404RedirectToBooking", {
                    original_path: from,
                });
            }

            // ✅ نظف الـ URL من الـ params (تجربة مستخدم أنضف)
            try {
                const url = new URL(window.location.href);
                url.searchParams.delete("ref");
                url.searchParams.delete("from");
                window.history.replaceState({}, "", url.toString());
            } catch (e) {
                // Ignore
            }
        }
    }, [searchParams]);

    return null;
};

export default RedirectTracker;