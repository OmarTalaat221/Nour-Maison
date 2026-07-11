"use client";

import { motion } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";
import BranchesImage from "../../../../utils/BranchesImage/BranchesImage";

const WHITE_BRANCH = "/images/white-blossom-branch.webp";

const BRANCH_ALT =
  "Elegant white plum blossom branch decoration for White Party by Nour Maison";

const details = [
  { label: "Date", value: "Saturday, 26 July 2025" },
  { label: "Time", value: "Starts at 3:00 PM" },
  { label: "Location", value: "Nour Maison, Milton Keynes" },
  { label: "Dress Code", value: "All White" },
];

const highlights = [
  "Live Afro-Arabic DJ spinning curated vibes all afternoon",
  "Limited-edition specialty coffee and matcha creations",
  "Spin & Win with exclusive prizes and vouchers",
  "Content Corner designed for photos and videos",
  "Best Dressed in White competition",
  "Golden Cup surprise hidden in one lucky drink",
  "Lucky Receipt Draw for a Nour Maison voucher",
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: "easeOut" },
  }),
};

const WhitePartyIntro = () => {
  return (
    <section
      id="white-party-content"
      className="relative py-16 sm:py-20 md:py-28 overflow-hidden"
      aria-labelledby="white-party-intro-heading"
    >
      {/* ─── Decorative Branches (coming from screen edges) ─── */}

      <BranchesImage
        variant="top-left"
        image={WHITE_BRANCH}
        className="hidden md:block z-0 opacity-90 top-20 -translate-x-[15%] -translate-y-[20%]"
        imgClassName="w-[260px] lg:w-[340px] h-auto drop-shadow-[0_10px_20px_rgba(0,0,0,0.05)] "
      />
      <BranchesImage
        variant="top-right"
        image={WHITE_BRANCH}
        className="hidden md:block z-0 opacity-90 top-20 translate-x-[15%] -translate-y-[20%]"
        imgClassName="w-[260px] lg:w-[340px] h-auto drop-shadow-[0_10px_20px_rgba(0,0,0,0.05)]"
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* ─── Heading ─── */}
        <header className="text-center mb-12 sm:mb-16">
          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0}
            className="wp-fade-pulse font-oswald text-xs sm:text-sm uppercase tracking-[0.32em] text-goldenOrange mb-4 font-semibold"
          >
            White Party &bull; 26 July 2025
          </motion.p>

          <motion.h2
            id="white-party-intro-heading"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={1}
            className="wp-heading-shimmer font-seasons text-3xl sm:text-4xl md:text-5xl lg:text-6xl italic text-logoGold mb-6 md:mb-8 leading-tight"
            style={{
              textShadow:
                "2px 2px 0px rgba(255,255,255,0.9), 0 4px 15px rgba(0,0,0,0.1)",
            }}
          >
            An Exclusive Afternoon
            <span className="block text-goldenOrange mt-1 sm:mt-2">
              at Nour Maison
            </span>
          </motion.h2>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={2}
            className="wp-breathe bg-white/85 backdrop-blur-md border-2 border-white shadow-xl rounded-2xl p-5 sm:p-6 md:p-8 max-w-3xl mx-auto"
          >
            <p className="font-oswald text-[#3a352f] text-base sm:text-lg md:text-xl leading-relaxed md:leading-loose">
              Join us for a premium white-party experience blending{" "}
              <strong className="text-logoGold">specialty coffee</strong>,{" "}
              <strong className="text-logoGold">matcha</strong>, curated{" "}
              <strong className="text-logoGold">Afro-Arabic music</strong>,
              interactive games, exclusive prizes and elegant summer vibes.
              Dress in white and create unforgettable memories at Nour Maison.
            </p>
          </motion.div>
        </header>

        {/* ─── Details Grid ─── */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6 mb-14 sm:mb-16">
          {details.map((item, i) => (
            <motion.div
              key={item.label}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={i}
              style={{ "--wp-delay": `${i * 0.4}s` }}
              className="wp-float shimmer bg-white/95 backdrop-blur-md border-2 border-white shadow-xl rounded-2xl p-5 sm:p-6 md:p-7 text-center hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
            >
              <p className="font-oswald text-[10px] sm:text-xs uppercase tracking-[0.22em] text-goldenOrange mb-2 sm:mb-3 font-semibold">
                {item.label}
              </p>
              <p className="font-seasons text-base sm:text-lg md:text-xl text-logoGold italic leading-snug">
                {item.value}
              </p>
            </motion.div>
          ))}
        </div>

        {/* ─── Highlights + CTA ─── */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={3}
          className="bg-white/90 backdrop-blur-md border-2 border-white shadow-2xl rounded-3xl p-6 sm:p-8 md:p-10 lg:p-12"
        >
          <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_1fr] gap-8 lg:gap-12 items-center">
            {/* Left — Highlights */}
            <div>
              <p className="wp-fade-pulse font-oswald text-xs uppercase tracking-[0.28em] text-goldenOrange mb-3 font-semibold">
                Event Highlights
              </p>

              <h3
                className="font-seasons text-2xl sm:text-3xl md:text-4xl italic text-logoGold mb-6 md:mb-8"
                style={{
                  textShadow: "1px 1px 0px rgba(255,255,255,0.9)",
                }}
              >
                What Makes This Special
              </h3>

              <ul className="space-y-3.5 sm:space-y-4">
                {highlights.map((highlight, i) => (
                  <motion.li
                    key={i}
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    custom={i * 0.4}
                    className="wp-highlight-item flex items-start gap-3.5"
                    style={{ "--wp-delay": `${i * 0.25}s` }}
                  >
                    <span className="wp-bullet-pulse mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-goldenOrange shadow-[0_0_10px_rgba(221,153,51,0.5)]" />
                    <span className="font-inter text-[#3a352f] text-sm sm:text-base leading-relaxed">
                      {highlight}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Right — CTA Card */}
            <div
              className="wp-cta-glow relative rounded-2xl p-6 sm:p-8 text-center border-2 border-goldenOrange/40 shadow-2xl overflow-hidden"
              style={{
                background:
                  "linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(249,228,188,0.5) 100%)",
              }}
            >
              <div className="relative z-10">
                <p className="wp-fade-pulse font-oswald text-xs uppercase tracking-[0.24em] text-goldenOrange mb-3 font-semibold">
                  Limited Spots
                </p>

                <h3
                  className="font-seasons text-2xl sm:text-3xl md:text-4xl italic text-logoGold mb-4 leading-snug"
                  style={{
                    textShadow: "1px 1px 0px rgba(255,255,255,0.9)",
                  }}
                >
                  Ready to Join the
                  <span className="block text-goldenOrange">White Party?</span>
                </h3>

                <p className="font-inter text-[#5a5147] text-sm sm:text-base leading-relaxed mb-7">
                  Secure your spot now. Spaces are limited and this is an
                  afternoon you don&apos;t want to miss.
                </p>

                <div className="flex flex-col sm:flex-row items-stretch justify-center gap-3">
                  <ScrollLink
                    to="ticket-booking"
                    smooth={true}
                    duration={500}
                    offset={-120}
                    className="wp-btn-bounce shimmer-btn cursor-pointer inline-flex items-center justify-center bg-goldenOrange hover:bg-logoGold text-white hover:text-white font-nour text-lg sm:text-xl px-8 py-3.5 rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 no-underline hover:no-underline whitespace-nowrap"
                    aria-label="Book your White Party ticket now"
                  >
                    Get Your Ticket
                  </ScrollLink>

                  <a
                    href="https://www.instagram.com/nourmaison"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center border-2 border-goldenOrange/50 hover:border-goldenOrange bg-white/60 hover:bg-white text-logoGold hover:text-goldenOrange font-inter text-sm sm:text-base font-medium px-6 py-3.5 rounded-full transition-all duration-300 no-underline hover:no-underline whitespace-nowrap"
                    aria-label="Follow Nour Maison on Instagram"
                  >
                    Follow @NourMaison
                  </a>
                </div>

                <p className="mt-5 font-inter text-[#7a6f60] text-xs sm:text-sm italic">
                  Bring a friend &amp; follow us on Instagram to get a
                  complimentary drink
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhitePartyIntro;
