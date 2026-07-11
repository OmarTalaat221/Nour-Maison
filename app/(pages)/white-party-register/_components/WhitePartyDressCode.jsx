"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Link as ScrollLink } from "react-scroll";
import BottomBg from "../../../../utils/BottomBg/BottomBg";

const DRESS_CODE_BG = "/images/dress-code-bg.webp";
const DRESS_CODE_ALT =
  "Elegant white linen fabric with a soft white gardenia flower for the Nour Maison White Party dress code";

const shades = ["Linen", "Ivory", "Cream", "Off-White", "Pearl"];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.12, ease: "easeOut" },
  }),
};

const WhitePartyDressCode = () => {
  return (
    <section
      id="dress-code"
      className="relative w-full overflow-hidden"
      aria-labelledby="dress-code-heading"
    >
      {/* ─── Background Image ─── */}
      <div className="relative w-full min-h-[560px] sm:min-h-[620px] md:min-h-[680px] lg:min-h-[720px] xl:min-h-[780px] flex items-center justify-center">
        {/* Image */}
        <Image
          src={DRESS_CODE_BG}
          alt={DRESS_CODE_ALT}
          fill
          priority={false}
          sizes="100vw"
          quality={90}
          className="object-cover object-center select-none"
        />

        {/* Overlay gradient for text readability */}
        <div
          className="absolute inset-0 bg-gradient-to-b from-black/35 via-black/25 to-black/55 pointer-events-none"
          aria-hidden="true"
        />

        {/* Subtle radial glow behind text */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full bg-black/20 blur-3xl pointer-events-none"
          aria-hidden="true"
        />

        {/* ─── Content ─── */}
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 md:py-24 flex flex-col items-center text-center">
          {/* Eyebrow */}
          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            custom={0}
            className="font-oswald text-xs sm:text-sm uppercase tracking-[0.4em] text-white/85 mb-5 font-semibold drop-shadow-md text-white"
          >
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-white/70 mr-3 -translate-y-0.5" />
            Dress Code
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-white/70 ml-3 -translate-y-0.5" />
          </motion.p>

          {/* Main Heading */}
          <motion.h2
            id="dress-code-heading"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            custom={1}
            className="font-seasons italic text-white text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl leading-none tracking-tight mb-4"
            style={{
              textShadow:
                "0 4px 25px rgba(0,0,0,0.4), 0 2px 8px rgba(0,0,0,0.3)",
            }}
          >
            All White
          </motion.h2>

          {/* Decorative divider */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            custom={2}
            className="flex items-center gap-3 mb-6 mt-2"
            aria-hidden="true"
          >
            <span className="h-px w-14 sm:w-20 bg-white/60" />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-3.5 w-3.5 text-white/80"
            >
              <path d="M12 2l2.09 6.26L20 10l-5.91 1.74L12 18l-2.09-6.26L4 10l5.91-1.74L12 2z" />
            </svg>
            <span className="h-px w-14 sm:w-20 bg-white/60" />
          </motion.div>

          {/* Description */}
          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            custom={3}
            className="font-seasons italic text-white/95 text-base sm:text-lg md:text-xl max-w-2xl mb-8 leading-relaxed"
            style={{ textShadow: "0 2px 12px rgba(0,0,0,0.4)" }}
          >
            Wear your finest white outfit and become part of the experience. The
            most stunning look wins a{" "}
            <span className="text-white font-semibold">special prize</span>.
          </motion.p>

          {/* Shade Pills */}
          <motion.ul
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            custom={4}
            className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 mb-10"
            aria-label="Accepted white shades"
          >
            {shades.map((shade) => (
              <li key={shade}>
                <span className="dc-pill inline-flex items-center px-4 py-2 sm:px-5 sm:py-2.5 rounded-full backdrop-blur-md bg-white/15 border border-white/40 text-white text-xs sm:text-sm font-oswald uppercase tracking-[0.2em] font-medium hover:bg-white/25 hover:border-white/60 transition-all duration-300 cursor-default">
                  {shade}
                </span>
              </li>
            ))}
          </motion.ul>

          {/* CTA */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            custom={5}
          >
            <ScrollLink
              to="ticket-booking"
              smooth={true}
              duration={500}
              offset={-120}
              className="wp-btn-bounce shimmer-btn cursor-pointer inline-flex items-center justify-center gap-2 bg-goldenOrange hover:bg-logoGold text-white hover:text-white font-nour text-lg sm:text-xl px-8 sm:px-10 py-3.5 sm:py-4 rounded-full shadow-2xl hover:shadow-[0_20px_50px_-10px_rgba(221,153,51,0.6)] transition-all duration-300 transform hover:scale-105 no-underline hover:no-underline whitespace-nowrap"
              aria-label="Reserve your spot for the White Party"
            >
              Reserve Your Spot
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5"
                aria-hidden="true"
              >
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </ScrollLink>

            {/* Prize note */}
            <motion.p
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.4 }}
              custom={6}
              className="mt-5 font-inter !text-[rgb(255,255,255,0.85)] text-xs sm:text-sm italic"
              style={{ textShadow: "0 1px 6px rgba(0,0,0,0.4)" }}
            >
              Winner receives a complimentary brunch or dessert box
            </motion.p>
          </motion.div>
        </div>

        {/* ─── Bottom Bg ─── */}
        <BottomBg />
      </div>
    </section>
  );
};

export default WhitePartyDressCode;
