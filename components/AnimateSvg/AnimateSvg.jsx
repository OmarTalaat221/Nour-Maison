"use client";

import React, {
  memo,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

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
  const delayTimerRef = useRef(null);

  const [pathLength, setPathLength] = useState(0);
  const [isAnimated, setIsAnimated] = useState(false);
  const [currentColor, setCurrentColor] = useState(strokeColor);
  const [hoverKey, setHoverKey] = useState(0);

  const easing = useMemo(() => {
    if (animationBounce > 0) {
      return `cubic-bezier(0.68, -${0.3 * animationBounce}, 0.265, ${
        1 + 0.3 * animationBounce
      })`;
    }

    return "cubic-bezier(0.65, 0, 0.35, 1)";
  }, [animationBounce]);

  useEffect(() => {
    const currentPath = pathRef.current;

    if (!currentPath) return;

    const length = currentPath.getTotalLength();
    setPathLength(length);
    setIsAnimated(false);
  }, [path]);

  useEffect(() => {
    const svg = svgRef.current;

    if (!svg || pathLength === 0) return;

    const runAnimation = () => {
      delayTimerRef.current = window.setTimeout(() => {
        setIsAnimated(true);
      }, animationDelay * 1000);
    };

    if (!triggerOnView) {
      runAnimation();

      return () => {
        if (delayTimerRef.current) {
          window.clearTimeout(delayTimerRef.current);
        }
      };
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          runAnimation();
          observer.disconnect();
        }
      },
      {
        threshold: viewThreshold,
      },
    );

    observer.observe(svg);

    return () => {
      observer.disconnect();

      if (delayTimerRef.current) {
        window.clearTimeout(delayTimerRef.current);
      }
    };
  }, [pathLength, animationDelay, triggerOnView, viewThreshold]);

  useEffect(() => {
    setCurrentColor(strokeColor);
  }, [strokeColor]);

  const handleMouseEnter = useCallback(() => {
    if (!enableHoverAnimation) return;

    if (hoverStrokeColor) {
      setCurrentColor(hoverStrokeColor);
    }

    if (hoverAnimationType === "redraw") {
      setHoverKey((prev) => prev + 1);
    }
  }, [enableHoverAnimation, hoverAnimationType, hoverStrokeColor]);

  const handleMouseLeave = useCallback(() => {
    if (!enableHoverAnimation) return;

    if (hoverStrokeColor) {
      setCurrentColor(strokeColor);
    }
  }, [enableHoverAnimation, hoverStrokeColor, strokeColor]);

  const initialOffset = reverseAnimation ? 0 : pathLength;
  const finalOffset = reverseAnimation ? pathLength : 0;

  const strokeDashoffset =
    hoverKey > 0 ? finalOffset : isAnimated ? finalOffset : initialOffset;

  const pathStyle = useMemo(
    () => ({
      strokeDasharray: pathLength,
      strokeDashoffset,
      transition:
        pathLength > 0
          ? `stroke-dashoffset ${animationDuration}s ${easing}, stroke 0.3s ease`
          : "none",
      willChange: "stroke-dashoffset",
    }),
    [animationDuration, easing, pathLength, strokeDashoffset],
  );

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
      aria-hidden="true"
      focusable="false"
    >
      <path
        key={hoverKey}
        ref={pathRef}
        d={path}
        fill="none"
        stroke={currentColor}
        strokeWidth={strokeWidth}
        strokeLinecap={strokeLinecap}
        style={pathStyle}
      />
    </svg>
  );
};

export default memo(AnimateSvg);
