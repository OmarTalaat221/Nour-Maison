"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRouter } from "next/navigation";
import {
  memo,
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import { createPortal } from "react-dom";

gsap.registerPlugin(ScrollTrigger);

const DEFAULT_SECTIONS = [
  { selector: "#halal-restaurant-content", side: "right" },
  { selector: "[data-book-button-side='left']", side: "left" },
  { selector: "[data-book-button-side='right']", side: "right" },
];

const DoodleArrow = memo(function DoodleArrow() {
  return (
    <span className="nour-gsap-book-doodle" aria-hidden="true">
      <svg viewBox="0 0 170 150" fill="none">
        <path
          d="M18 18 C34 44 53 67 87 73 C115 78 120 49 96 50 C72 51 70 84 97 101 C113 111 126 121 141 133"
          stroke="currentColor"
          strokeWidth="7"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M141 133 L119 127 M141 133 L132 111"
          stroke="currentColor"
          strokeWidth="7"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
});

const StickyBookNowButton = ({
  href = "/booking",
  label = "Book Now",
  desktopTop = "68%",
  sections = DEFAULT_SECTIONS,
}) => {
  const router = useRouter();

  const wrapRef = useRef(null);
  const buttonRef = useRef(null);
  const innerRef = useRef(null);

  const currentSideRef = useRef("right");
  const reduceMotionRef = useRef(false);
  const idleTweenRef = useRef(null);
  const triggersRef = useRef([]);
  const resizeHandlerRef = useRef(null);
  const refreshFrameRef = useRef(null);
  const movingRef = useRef(false);

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useLayoutEffect(() => {
    if (!mounted || typeof window === "undefined") return;

    const wrapEl = wrapRef.current;
    const buttonEl = buttonRef.current;
    const innerEl = innerRef.current;

    if (!wrapEl || !buttonEl || !innerEl) return;

    const getDesktopX = (targetSide) => {
      const edge = 28;
      const width = wrapEl.offsetWidth || 66;
      return targetSide === "left" ? edge : window.innerWidth - width - edge;
    };

    const updateSide = (targetSide) => {
      const safeSide = targetSide === "left" ? "left" : "right";
      currentSideRef.current = safeSide;
      wrapEl.dataset.side = safeSide;
      return safeSide;
    };

    const setToSideImmediately = (targetSide) => {
      const safeSide = updateSide(targetSide);

      gsap.set(wrapEl, {
        x: getDesktopX(safeSide),
        rotation: safeSide === "left" ? -2 : 2,
        force3D: true,
      });
    };

    const moveToSide = (targetSide, immediate = false) => {
      const safeSide = targetSide === "left" ? "left" : "right";

      if (safeSide === currentSideRef.current && !immediate) return;

      if (movingRef.current && !immediate) return;

      const currentSide = currentSideRef.current;
      const targetX = getDesktopX(safeSide);
      const targetRotation = safeSide === "left" ? -2 : 2;

      if (immediate || reduceMotionRef.current) {
        setToSideImmediately(safeSide);
        return;
      }

      movingRef.current = true;

      const exitX = currentSide === "right" ? window.innerWidth + 140 : -160;
      const enterStartX = safeSide === "left" ? -160 : window.innerWidth + 140;

      gsap
        .timeline({
          defaults: { overwrite: "auto" },
          onComplete: () => {
            movingRef.current = false;
          },
        })
        .to(wrapEl, {
          x: exitX,
          rotation: currentSide === "right" ? 6 : -6,
          duration: 0.28,
          ease: "power2.in",
          force3D: true,
        })
        .add(() => {
          updateSide(safeSide);

          gsap.set(wrapEl, {
            x: enterStartX,
            rotation: targetRotation,
            force3D: true,
          });

          gsap.set(innerEl, {
            scale: 0.94,
            force3D: true,
          });
        })
        .to(wrapEl, {
          x: targetX,
          rotation: targetRotation,
          duration: 0.55,
          ease: "power3.out",
          force3D: true,
        })
        .to(
          innerEl,
          {
            scale: 1,
            duration: 0.42,
            ease: "elastic.out(1, 0.55)",
            force3D: true,
          },
          "<",
        );
    };

    const collectTriggerConfigs = () => {
      const used = new Set();
      const configs = [];

      sections.forEach((item) => {
        if (!item?.selector) return;

        let elements = [];

        try {
          elements = Array.from(document.querySelectorAll(item.selector));
        } catch {
          elements = [];
        }

        const itemSide = item.side === "left" ? "left" : "right";

        elements.forEach((el) => {
          if (used.has(el)) return;

          used.add(el);
          configs.push({ el, side: itemSide });
        });
      });

      document.querySelectorAll("[data-book-button-side]").forEach((el) => {
        if (used.has(el)) return;

        const attrSide = el.getAttribute("data-book-button-side");

        if (attrSide !== "left" && attrSide !== "right") return;

        used.add(el);
        configs.push({ el, side: attrSide });
      });

      return configs;
    };

    const getInitialSide = (configs) => {
      const topCheck = window.innerHeight * 0.62;
      const bottomCheck = window.innerHeight * 0.38;

      const active = configs.find(({ el }) => {
        const rect = el.getBoundingClientRect();
        return rect.top <= topCheck && rect.bottom >= bottomCheck;
      });

      return active?.side || "right";
    };

    const killTriggers = () => {
      triggersRef.current.forEach((trigger) => trigger.kill());
      triggersRef.current = [];
    };

    const removeResizeHandler = () => {
      if (!resizeHandlerRef.current) return;

      window.removeEventListener("resize", resizeHandlerRef.current);
      resizeHandlerRef.current = null;
    };

    gsap.set(wrapEl, {
      position: "fixed",
      left: 0,
      top: desktopTop,
      yPercent: -50,
      x: getDesktopX("right"),
      rotation: 2,
      autoAlpha: 1,
      zIndex: 999999,
      pointerEvents: "none",
      willChange: "transform",
      force3D: true,
    });

    gsap.set(buttonEl, {
      pointerEvents: "auto",
      force3D: true,
    });

    gsap.set(innerEl, {
      force3D: true,
      transformOrigin: "50% 50%",
    });

    const mm = gsap.matchMedia();

    mm.add(
      {
        isDesktop: "(min-width: 1024px)",
        isMobile: "(max-width: 1023px)",
        reduceMotion: "(prefers-reduced-motion: reduce)",
      },
      (context) => {
        const { isDesktop, reduceMotion } = context.conditions;

        reduceMotionRef.current = reduceMotion;

        killTriggers();
        removeResizeHandler();

        if (isDesktop) {
          gsap.set(wrapEl, {
            left: 0,
            right: "auto",
            top: desktopTop,
            bottom: "auto",
            yPercent: -50,
          });

          const configs = collectTriggerConfigs();
          const initialSide = getInitialSide(configs);

          setToSideImmediately(initialSide);

          resizeHandlerRef.current = () => {
            if (refreshFrameRef.current) {
              cancelAnimationFrame(refreshFrameRef.current);
            }

            refreshFrameRef.current = requestAnimationFrame(() => {
              setToSideImmediately(currentSideRef.current);
              ScrollTrigger.refresh();
            });
          };

          window.addEventListener("resize", resizeHandlerRef.current, {
            passive: true,
          });

          triggersRef.current = configs.map(({ el, side }) =>
            ScrollTrigger.create({
              trigger: el,
              start: "top 62%",
              end: "bottom 38%",
              onEnter: () => moveToSide(side),
              onEnterBack: () => moveToSide(side),
            }),
          );

          refreshFrameRef.current = requestAnimationFrame(() => {
            ScrollTrigger.refresh();
          });
        } else {
          updateSide("right");

          gsap.set(wrapEl, {
            left: "auto",
            right: 14,
            top: "auto",
            bottom: 18,
            x: 0,
            yPercent: 0,
            rotation: 0,
          });
        }
      },
    );

    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      idleTweenRef.current = gsap.to(innerEl, {
        y: -14,
        duration: 1.45,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        force3D: true,
      });
    }

    return () => {
      mm.revert();
      killTriggers();
      removeResizeHandler();

      if (refreshFrameRef.current) {
        cancelAnimationFrame(refreshFrameRef.current);
        refreshFrameRef.current = null;
      }

      idleTweenRef.current?.kill();
      idleTweenRef.current = null;
      movingRef.current = false;
    };
  }, [mounted, desktopTop, sections]);

  const handleClick = useCallback(() => {
    router.push(href);
  }, [href, router]);

  if (!mounted) return null;

  return createPortal(
    <>
      <div ref={wrapRef} className="nour-gsap-book-wrap" data-side="right">
        <button
          ref={buttonRef}
          type="button"
          aria-label={label}
          onClick={handleClick}
          className="nour-gsap-book-btn"
        >
          <DoodleArrow />

          <span ref={innerRef} className="nour-gsap-book-inner">
            <span className="nour-gsap-book-light" />
            <span className="nour-gsap-book-label">{label}</span>
          </span>
        </button>
      </div>

      <style jsx global>{`
        .nour-gsap-book-wrap {
          width: 66px;
          height: 174px;
          pointer-events: none;
          isolation: isolate;
          contain: layout style;
          overflow: visible;
        }
        .nour-gsap-book-btn {
          position: relative;
          width: 66px;
          height: 174px;
          padding: 0;
          border: 0;
          background: transparent;
          cursor: pointer;
          pointer-events: auto;
          transform: translateZ(0);
          backface-visibility: hidden;
          overflow: visible;
        }
        .nour-gsap-book-inner {
          position: relative;
          z-index: 3;
          width: 62px;
          height: 174px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 13px 8px;
          border-radius: 999px;
          overflow: hidden;
          border: 1px solid rgba(255, 255, 255, 0.15);
          backdrop-filter: blur(18px);
          transform: translateZ(0);
          backface-visibility: hidden;
          will-change: transform;
          transition:
            background-image 0.28s ease,
            box-shadow 0.28s ease,
            border-color 0.28s ease;
        }

        .nour-gsap-book-inner::before {
          content: "";
          position: absolute;
          inset: -45%;
          z-index: 2;
          pointer-events: none;
          background: linear-gradient(
            115deg,
            transparent 35%,
            rgba(255, 255, 255, 0.08) 44%,
            rgba(255, 255, 255, 0.48) 50%,
            rgba(249, 228, 188, 0.3) 54%,
            transparent 65%
          );
          transform: translateX(-135%) rotate(8deg);
          animation: nourBookShimmer 4.2s ease-in-out infinite;
          will-change: transform;
        }

        .nour-gsap-book-wrap[data-side="right"] .nour-gsap-book-inner {
          background-image: linear-gradient(
            160deg,
            rgba(132, 176, 103, 0.98),
            rgba(98, 150, 73, 0.95)
          );
          box-shadow: 0 18px 48px rgba(132, 176, 103, 0.32);
        }

        .nour-gsap-book-wrap[data-side="right"]
          .nour-gsap-book-btn:hover
          .nour-gsap-book-inner {
          background-image: linear-gradient(
            160deg,
            rgba(217, 157, 51, 0.98),
            rgba(199, 134, 33, 0.95)
          );
          box-shadow: 0 22px 62px rgba(217, 157, 51, 0.34);
        }

        .nour-gsap-book-wrap[data-side="left"] .nour-gsap-book-inner {
          background-image: linear-gradient(
            160deg,
            rgba(217, 157, 51, 0.98),
            rgba(199, 134, 33, 0.95)
          );
          box-shadow: 0 18px 48px rgba(217, 157, 51, 0.32);
        }

        .nour-gsap-book-wrap[data-side="left"]
          .nour-gsap-book-btn:hover
          .nour-gsap-book-inner {
          background-image: linear-gradient(
            160deg,
            rgba(132, 176, 103, 0.98),
            rgba(98, 150, 73, 0.95)
          );
          box-shadow: 0 22px 62px rgba(132, 176, 103, 0.34);
        }

        .nour-gsap-book-light {
          position: absolute;
          inset: 0;
          z-index: 1;
          border-radius: inherit;
          background: radial-gradient(
            circle at 40% 20%,
            rgba(255, 255, 255, 0.16),
            transparent 62%
          );
          pointer-events: none;
        }

        .nour-gsap-book-inner::after {
          content: "";
          position: absolute;
          inset: 1.5px;
          z-index: 5;
          border-radius: inherit;
          border: 1px solid rgba(255, 255, 255, 0.12);
          pointer-events: none;
        }

        .nour-gsap-book-label {
          position: relative;
          z-index: 4;
          writing-mode: vertical-rl;
          transform: rotate(180deg);
          white-space: nowrap;
          font-family: var(--font-oswald), Oswald, sans-serif;
          font-size: 18px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.18em;
          color: #ffffff;
          text-shadow: 0 2px 8px rgba(0, 0, 0, 0.16);
        }

        .nour-gsap-book-wrap[data-side="right"] .nour-gsap-book-doodle {
          color: #d99d33;
        }

        .nour-gsap-book-wrap[data-side="right"]
          .nour-gsap-book-btn:hover
          .nour-gsap-book-doodle {
          color: #84b067;
        }

        .nour-gsap-book-wrap[data-side="left"] .nour-gsap-book-doodle {
          color: #84b067;
        }

        .nour-gsap-book-wrap[data-side="left"]
          .nour-gsap-book-btn:hover
          .nour-gsap-book-doodle {
          color: #d99d33;
        }

        .nour-gsap-book-doodle {
          position: absolute;
          top: -96px;
          z-index: 2;
          width: 170px;
          height: 150px;
          pointer-events: none;
          opacity: 0.98;
          transition: color 0.28s ease;
          filter: drop-shadow(0 8px 16px rgba(0, 0, 0, 0.12));
          transform: translateZ(0);
          backface-visibility: hidden;
        }

        .nour-gsap-book-doodle svg {
          width: 100%;
          height: 100%;
          overflow: visible;
          transform: translateZ(0);
        }

        .nour-gsap-book-wrap[data-side="right"] .nour-gsap-book-doodle {
          right: 42px;
        }

        .nour-gsap-book-wrap[data-side="left"] .nour-gsap-book-doodle {
          left: 42px;
        }

        .nour-gsap-book-wrap[data-side="left"] .nour-gsap-book-doodle svg {
          transform: scaleX(-1) translateZ(0);
        }

        @keyframes nourBookShimmer {
          0% {
            transform: translateX(-135%) rotate(8deg);
          }

          48% {
            transform: translateX(-135%) rotate(8deg);
          }

          78% {
            transform: translateX(135%) rotate(8deg);
          }

          100% {
            transform: translateX(135%) rotate(8deg);
          }
        }

        @media (max-width: 1023px) {
          .nour-gsap-book-wrap {
            width: 56px;
            height: 120px;
          }

          .nour-gsap-book-btn {
            width: 56px;
            height: 120px;
          }

          .nour-gsap-book-inner {
            width: 54px;
            height: 120px;
            padding: 7px 7px;
          }

          .nour-gsap-book-label {
            font-size: 10px;
          }

          .nour-gsap-book-doodle {
            display: none;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .nour-gsap-book-inner,
          .nour-gsap-book-inner::before {
            animation: none !important;
            transform: none !important;
          }
        }
      `}</style>
    </>,
    document.body,
  );
};

export default StickyBookNowButton;
