"use client";

import React, { memo, useEffect, useRef, useState } from "react";

const LazyHomeImport = ({
    loader,
    props,
    minHeight = 650,
    mobileRootMargin = "0px 0px",
    desktopRootMargin = "600px 0px",
    className = "",
}) => {
    const ref = useRef(null);
    const [Component, setComponent] = useState(null);

    useEffect(() => {
        const element = ref.current;

        if (!element || Component) return;

        const isMobile = window.matchMedia("(max-width: 768px)").matches;
        const rootMargin = isMobile ? mobileRootMargin : desktopRootMargin;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (!entry.isIntersecting) return;

                observer.disconnect();

                const schedule =
                    window.requestIdleCallback ||
                    ((cb) => window.setTimeout(cb, 1));

                schedule(
                    async () => {
                        try {
                            const mod = await loader();
                            setComponent(() => mod.default);
                        } catch (err) {
                            console.error("LazyHomeImport load error:", err);
                        }
                    },
                    { timeout: 2000 }
                );
            },
            {
                rootMargin,
                threshold: 0.01,
            }
        );

        observer.observe(element);

        return () => observer.disconnect();
    }, [Component, loader, mobileRootMargin, desktopRootMargin]);

    return (
        <section
            ref={ref}
            className={className}
            style={{
                minHeight: Component ? undefined : minHeight,
            }}
        >
            {Component ? <Component {...props} /> : null}
        </section>
    );
};

export default memo(LazyHomeImport);