"use client";

import gsap from "gsap";
import { useCallback, useLayoutEffect, useRef, useState } from "react";
import SectionHeader from "./SectionHeader";

/* ─── Variant Styles ─── */
const VARIANT_STYLES = {
  mint: {
    border: "border-white/25",
    num: "text-dairyCream",
    question: "text-white",
    questionHover: "group-hover:text-dairyCream",
    icon: "text-dairyCream",
    answer: "text-white",
    glowColor: "rgba(132, 176, 103, 0.28)",
  },
  gold: {
    border: "border-white/30",
    num: "text-dairyCream",
    question: "text-white",
    questionHover: "group-hover:text-dairyCream",
    icon: "text-white",
    answer: "text-dairyCream",
    glowColor: "rgba(221, 153, 51, 0.28)",
  },
  cream: {
    border: "border-goldenOrange/25",
    num: "text-goldenOrange",
    question: "text-softMintGreen",
    questionHover: "group-hover:text-goldenOrange",
    icon: "text-goldenOrange",
    answer: "text-logoGold",
    glowColor: "rgba(221, 153, 51, 0.22)",
  },
};

/* ─── Single FAQ Item ─── */
const FAQItem = ({
  question,
  answer,
  isOpen,
  onClick,
  index,
  variant = "cream",
  itemRef,
  answerRef,
  contentRef,
  iconRef,
  glowRef,
}) => {
  const styles = VARIANT_STYLES[variant];
  const cardClass = `${variant}-glass-card`;

  return (
    <div
      ref={itemRef}
      className={`${cardClass} rounded-xl sm:rounded-2xl overflow-hidden relative`}
    >
      {/* ── Glow pulse overlay ── */}
      <div
        ref={glowRef}
        className="absolute inset-0 rounded-xl sm:rounded-2xl pointer-events-none opacity-0 z-0"
        style={{
          boxShadow: `inset 0 0 24px ${styles.glowColor}, 0 0 14px ${styles.glowColor}`,
        }}
      />

      {/* ── Question Button ── */}
      <button
        onClick={onClick}
        className="w-full flex items-start justify-between p-5 sm:p-6 md:p-7 text-left gap-4 cursor-pointer group relative z-10"
        aria-expanded={isOpen}
        aria-controls={`faq-answer-${index}`}
      >
        <div className="flex items-start gap-3 sm:gap-4 flex-1">
          <span
            className={`font-pacifico ${styles.num} text-lg sm:text-xl md:text-2xl leading-none flex-shrink-0 drop-shadow-md`}
          >
            {String(index + 1).padStart(2, "0")}
          </span>

          <h3
            id={`faq-question-${index}`}
            className={`font-pacifico ${styles.question} ${styles.questionHover} text-lg sm:text-xl md:text-2xl font-normal leading-snug pr-2 transition-colors duration-300 drop-shadow-md`}
          >
            {question}
          </h3>
        </div>

        {/* ── Animated Icon ── */}
        <span
          ref={iconRef}
          className={`${styles.icon} text-2xl sm:text-3xl leading-none flex-shrink-0 drop-shadow-md`}
          aria-hidden="true"
          style={{ willChange: "transform" }}
        >
          +
        </span>
      </button>

      {/* ── Answer (GSAP controlled) ── */}
      <div
        ref={answerRef}
        id={`faq-answer-${index}`}
        className="overflow-hidden relative z-10"
        style={{ height: 0, opacity: 0, willChange: "height, opacity" }}
        role="region"
        aria-labelledby={`faq-question-${index}`}
      >
        <div ref={contentRef}>
          <p
            className={`font-playfair ${styles.answer} text-sm sm:text-base md:text-lg leading-relaxed md:leading-loose px-5 sm:px-6 md:px-7 pb-5 sm:pb-6 pl-14 sm:pl-16 drop-shadow-sm`}
          >
            {answer}
          </p>
        </div>
      </div>
    </div>
  );
};

/* ─── FAQ Section ─── */
const FAQSection = ({
  eyebrow = "Good to Know",
  heading = "Frequently Asked Questions",
  items = [],
  defaultVariant = "mint",
}) => {
  const [openIndex, setOpenIndex] = useState(0);

  const itemRefs = useRef([]);
  const answerRefs = useRef([]);
  const contentRefs = useRef([]);
  const iconRefs = useRef([]);
  const glowRefs = useRef([]);

  const timelineRef = useRef(null);
  const openIndexRef = useRef(0);
  const initializedRef = useRef(false);

  // ── Set ref helper ──
  const setRef = (refsArray, index) => (el) => {
    refsArray.current[index] = el;
  };

  // ── Kill current animations instantly ──
  const killCurrentAnimation = useCallback(() => {
    if (timelineRef.current) {
      timelineRef.current.kill();
      timelineRef.current = null;
    }

    gsap.killTweensOf(answerRefs.current.filter(Boolean));
    gsap.killTweensOf(iconRefs.current.filter(Boolean));
    gsap.killTweensOf(glowRefs.current.filter(Boolean));
  }, []);

  // ── Set item state instantly ──
  const setItemState = useCallback((index, open) => {
    const answerEl = answerRefs.current[index];
    const contentEl = contentRefs.current[index];
    const iconEl = iconRefs.current[index];
    const glowEl = glowRefs.current[index];

    if (!answerEl) return;

    const height = open && contentEl ? contentEl.scrollHeight : 0;

    gsap.set(answerEl, {
      height,
      opacity: open ? 1 : 0,
    });

    if (iconEl) {
      gsap.set(iconEl, {
        rotation: open ? 45 : 0,
      });
    }

    if (glowEl) {
      gsap.set(glowEl, { opacity: 0 });
    }
  }, []);

  // ── Open first item on mount ──
  useLayoutEffect(() => {
    if (!initializedRef.current && items.length > 0) {
      initializedRef.current = true;
      setItemState(0, true);
      openIndexRef.current = 0;
      setOpenIndex(0);
    }
  }, [items.length, setItemState]);

  // ── Cleanup ──
  useLayoutEffect(() => {
    return () => {
      killCurrentAnimation();
    };
  }, [killCurrentAnimation]);

  // ── Handle Click with GSAP ──
  const handleClick = useCallback(
    (index) => {
      const prevIndex = openIndexRef.current;
      const isSame = prevIndex === index;
      const nextIndex = isSame ? -1 : index;

      // أوقف أي أنيميشن شغالة فورًا
      killCurrentAnimation();

      // ثبّت الحالة الحالية فورًا
      if (prevIndex >= 0) {
        const prevAnswer = answerRefs.current[prevIndex];
        const prevContent = contentRefs.current[prevIndex];
        const prevIcon = iconRefs.current[prevIndex];

        if (prevAnswer && prevContent) {
          gsap.set(prevAnswer, {
            height:
              prevIndex === nextIndex
                ? prevContent.scrollHeight
                : prevAnswer.offsetHeight,
            opacity:
              prevIndex === nextIndex
                ? 1
                : gsap.getProperty(prevAnswer, "opacity"),
          });
        }

        if (prevIcon) {
          gsap.set(prevIcon, {
            rotation:
              prevIndex === nextIndex
                ? 45
                : gsap.getProperty(prevIcon, "rotation"),
          });
        }
      }

      openIndexRef.current = nextIndex;
      setOpenIndex(nextIndex);

      const tl = gsap.timeline({
        defaults: {
          overwrite: "auto",
        },
        onComplete: () => {
          timelineRef.current = null;
        },
      });

      // ── Close previous ──
      if (prevIndex >= 0) {
        const prevAnswer = answerRefs.current[prevIndex];
        const prevIcon = iconRefs.current[prevIndex];
        const prevGlow = glowRefs.current[prevIndex];

        if (prevAnswer) {
          tl.to(
            prevAnswer,
            {
              height: 0,
              opacity: 0,
              duration: 0.18,
              ease: "power1.out",
            },
            0,
          );
        }

        if (prevIcon) {
          tl.to(
            prevIcon,
            {
              rotation: 0,
              duration: 0.16,
              ease: "power1.out",
            },
            0,
          );
        }

        if (prevGlow) {
          tl.to(
            prevGlow,
            {
              opacity: 0,
              duration: 0.1,
              ease: "none",
            },
            0,
          );
        }
      }

      // ── Open new ──
      if (!isSame && nextIndex >= 0) {
        const nextAnswer = answerRefs.current[nextIndex];
        const nextContent = contentRefs.current[nextIndex];
        const nextIcon = iconRefs.current[nextIndex];
        const nextGlow = glowRefs.current[nextIndex];

        if (nextAnswer && nextContent) {
          const targetHeight = nextContent.scrollHeight;
          const startAt = prevIndex >= 0 ? 0.04 : 0;

          if (nextIcon) {
            tl.to(
              nextIcon,
              {
                rotation: 45,
                duration: 0.16,
                ease: "power1.out",
              },
              startAt,
            );
          }

          tl.to(
            nextAnswer,
            {
              height: targetHeight,
              opacity: 1,
              duration: 0.24,
              ease: "power2.out",
            },
            startAt,
          );

          if (nextGlow) {
            tl.fromTo(
              nextGlow,
              { opacity: 0 },
              {
                opacity: 0.16,
                duration: 0.1,
                ease: "none",
              },
              startAt,
            ).to(
              nextGlow,
              {
                opacity: 0,
                duration: 0.16,
                ease: "power1.out",
              },
              startAt + 0.1,
            );
          }
        }
      }

      timelineRef.current = tl;
    },
    [killCurrentAnimation],
  );

  return (
    <section
      className="w-full max-w-[95%] sm:max-w-xl md:max-w-3xl lg:max-w-4xl xl:max-w-5xl mx-auto px-3 sm:px-4 py-10 sm:py-14 md:py-20 relative z-10"
      aria-label="Frequently asked questions"
    >
      <SectionHeader eyebrow={eyebrow} heading={heading} />

      <div className="flex flex-col gap-3 sm:gap-4">
        {items.map((item, index) => (
          <FAQItem
            key={index}
            index={index}
            variant={item.variant || defaultVariant}
            question={item.question}
            answer={item.answer}
            isOpen={openIndex === index}
            onClick={() => handleClick(index)}
            itemRef={setRef(itemRefs, index)}
            answerRef={setRef(answerRefs, index)}
            contentRef={setRef(contentRefs, index)}
            iconRef={setRef(iconRefs, index)}
            glowRef={setRef(glowRefs, index)}
          />
        ))}
      </div>
    </section>
  );
};

export default FAQSection;
