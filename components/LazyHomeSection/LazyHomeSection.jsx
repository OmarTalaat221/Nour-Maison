"use client";

import { memo, useEffect, useRef, useState } from "react";

const LazyHomeSection = ({
  children,
  minHeight = 650,
  desktopRootMargin = "700px 0px",
  mobileRootMargin = "180px 0px",
  className = "",
}) => {
  const ref = useRef(null);
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    const element = ref.current;

    if (!element || shouldRender) return;

    const isMobile = window.matchMedia("(max-width: 768px)").matches;
    const rootMargin = isMobile ? mobileRootMargin : desktopRootMargin;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldRender(true);
          observer.disconnect();
        }
      },
      {
        rootMargin,
        threshold: 0.01,
      },
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [shouldRender, desktopRootMargin, mobileRootMargin]);

  return (
    <section
      ref={ref}
      className={className}
      style={{ minHeight: shouldRender ? undefined : minHeight }}
    >
      {shouldRender ? children : null}
    </section>
  );
};

export default memo(LazyHomeSection);
