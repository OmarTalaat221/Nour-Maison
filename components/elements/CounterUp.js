"use client";

import { memo, useEffect, useRef, useState } from "react";
import Counter from "./Counter";

const CounterUp = ({ end }) => {
  const ref = useRef(null);
  const [inViewport, setInViewport] = useState(false);

  useEffect(() => {
    const element = ref.current;

    if (!element || inViewport) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInViewport(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.35,
        rootMargin: "0px 0px -8% 0px",
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [inViewport]);

  return (
    <span ref={ref} className="count-text">
      {inViewport ? <Counter end={end} duration={20} /> : "0"}
    </span>
  );
};

export default memo(CounterUp);