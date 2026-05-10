"use client";
import React, { useEffect, useRef, useState } from "react";

const AnimateSvg = ({
  width = "100%",
  height = "100%",
  viewBox = "0 0 100 100",
  className = "",
  path,
  strokeColor = "currentColor",
  strokeWidth = 2,
  strokeLinecap = "round",
  animationDuration = 1,
  animationDelay = 0,
  animationBounce = 0,
  reverseAnimation = false,
  enableHoverAnimation = false,
  hoverAnimationType = "redraw",
  hoverStrokeColor,
  triggerOnView = true,
  viewThreshold = 0.3,
}) => {
  const pathRef = useRef(null);
  const svgRef = useRef(null);
  const [pathLength, setPathLength] = useState(0);
  const [isAnimated, setIsAnimated] = useState(false);
  const [currentColor, setCurrentColor] = useState(strokeColor);
  const [hoverKey, setHoverKey] = useState(0);

  // Calculate path length once mounted
  useEffect(() => {
    if (!pathRef.current) return;
    const length = pathRef.current.getTotalLength();
    setPathLength(length);
  }, [path]);

  // Trigger animation either on view or on mount
  useEffect(() => {
    if (!svgRef.current || pathLength === 0) return;

    if (triggerOnView) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setTimeout(() => {
                setIsAnimated(true);
              }, animationDelay * 1000);
              observer.disconnect();
            }
          });
        },
        { threshold: viewThreshold }
      );

      observer.observe(svgRef.current);

      return () => observer.disconnect();
    } else {
      const timer = setTimeout(() => {
        setIsAnimated(true);
      }, animationDelay * 1000);

      return () => clearTimeout(timer);
    }
  }, [pathLength, animationDelay, triggerOnView, viewThreshold]);

  const getEasing = () => {
    if (animationBounce > 0) {
      return `cubic-bezier(0.68, -${0.3 * animationBounce}, 0.265, ${
        1 + 0.3 * animationBounce
      })`;
    }
    return "cubic-bezier(0.65, 0, 0.35, 1)";
  };

  const handleMouseEnter = () => {
    if (!enableHoverAnimation) return;

    if (hoverStrokeColor) {
      setCurrentColor(hoverStrokeColor);
    }

    if (hoverAnimationType === "redraw") {
      setHoverKey((prev) => prev + 1);
    }
  };

  const handleMouseLeave = () => {
    if (!enableHoverAnimation) return;
    if (hoverStrokeColor) {
      setCurrentColor(strokeColor);
    }
  };

  const initialOffset = reverseAnimation ? 0 : pathLength;
  const finalOffset = reverseAnimation ? pathLength : 0;

  return (
    <svg
      ref={svgRef}
      width={width}
      height={height}
      viewBox={viewBox}
      className={className}
      preserveAspectRatio="none"
      style={{ overflow: "visible" }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <path
        key={hoverKey}
        ref={pathRef}
        d={path}
        fill="none"
        stroke={currentColor}
        strokeWidth={strokeWidth}
        strokeLinecap={strokeLinecap}
        style={{
          strokeDasharray: pathLength,
          strokeDashoffset:
            hoverKey > 0
              ? finalOffset
              : isAnimated
                ? finalOffset
                : initialOffset,
          transition:
            pathLength > 0
              ? `stroke-dashoffset ${animationDuration}s ${getEasing()}, stroke 0.3s ease`
              : "none",
        }}
      />
    </svg>
  );
};

export default AnimateSvg;
