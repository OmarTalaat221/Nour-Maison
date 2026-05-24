"use client";

import { memo, useEffect, useRef, useState } from "react";

const LazyHomeSection = ({
  children,
  minHeight = 650,
  rootMargin = "700px 0px",
  className = "",
}) => {
  const ref = useRef(null);
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    const element = ref.current;

    if (!element || shouldRender) return;

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
  }, [shouldRender, rootMargin]);

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
