"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef, useState } from "react";
import BranchesImage from "../../../../utils/BranchesImage/BranchesImage";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const WHITE_BRANCH = "/images/white-blossom-branch.webp";

const faqs = [
  {
    id: "faq-1",
    number: "01",
    question: "Is the event ticketed?",
    answer:
      "Yes, the White Party is a ticketed event. You can book your ticket through our website in just a few minutes and receive a confirmation by email.",
  },
  {
    id: "faq-2",
    number: "02",
    question: "Can I bring friends?",
    answer:
      "Absolutely! Bring a friend and follow @NourMaison on Instagram to receive a complimentary drink each on arrival — just show both tickets and your follow at the door.",
  },
  {
    id: "faq-3",
    number: "03",
    question: "Is there parking nearby?",
    answer:
      "Yes, there is parking available near Nour Maison at 149 Grafton Gate, Milton Keynes, MK9 1AE. We recommend arriving a little early to secure a spot.",
  },
  {
    id: "faq-4",
    number: "04",
    question: "Can I attend without booking?",
    answer:
      "We highly recommend booking in advance as spaces are limited. Walk-ins are welcome but strictly subject to availability on the day.",
  },
  {
    id: "faq-5",
    number: "05",
    question: "Are food and drinks included?",
    answer:
      "Your ticket grants you entry to the event. Food and drinks are available for purchase throughout the afternoon, with exclusive limited-edition White Party specials.",
  },
];

const WhitePartyFAQ = () => {
  const sectionRef = useRef(null);
  const [openId, setOpenId] = useState(null);

  const toggleFaq = (id) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header
      gsap.fromTo(
        ".faq-header > *",
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
            toggleActions: "play none none reverse",
          },
        },
      );

      // FAQ items stagger
      gsap.fromTo(
        ".faq-item",
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".faq-list",
            start: "top 82%",
            toggleActions: "play none none reverse",
          },
        },
      );

      // Contact card
      gsap.fromTo(
        ".faq-contact-card",
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".faq-contact-card",
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        },
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="faq"
      className="relative py-16 sm:py-20 md:py-28 overflow-hidden"
      aria-labelledby="faq-heading"
    >
      {/* ─── Decorative Branches ─── */}
      <BranchesImage
        variant="top-left"
        image={WHITE_BRANCH}
        className="hidden md:block z-0 opacity-90 top-16 -translate-x-[15%] -translate-y-[10%]"
        imgClassName="w-[220px] lg:w-[300px] h-auto drop-shadow-[0_10px_20px_rgba(0,0,0,0.05)]"
      />
      <BranchesImage
        variant="bottom-right"
        image={WHITE_BRANCH}
        className="hidden md:block z-0 opacity-90 bottom-16 translate-x-[15%] translate-y-[10%] !rotate-0"
        imgClassName="w-[220px] lg:w-[300px] h-auto drop-shadow-[0_10px_20px_rgba(0,0,0,0.05)]"
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* ─── Header ─── */}
        <header className="faq-header text-center mb-12 sm:mb-16 max-w-3xl mx-auto">
          <p className="wp-fade-pulse font-oswald text-xs sm:text-sm uppercase tracking-[0.32em] text-goldenOrange mb-4 font-semibold">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-softMintGreen mr-3 -translate-y-0.5" />
            Frequently Asked
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-softMintGreen ml-3 -translate-y-0.5" />
          </p>

          <h2
            id="faq-heading"
            className="font-seasons text-3xl sm:text-4xl md:text-5xl lg:text-6xl italic text-logoGold mb-6 md:mb-8 leading-tight"
            style={{
              textShadow:
                "2px 2px 0px rgba(255,255,255,0.9), 0 4px 15px rgba(0,0,0,0.1)",
            }}
          >
            Questions?
            <span className="block text-goldenOrange mt-1 sm:mt-2">
              We Have Answers
            </span>
          </h2>

          <div className="wp-breathe bg-white/85 backdrop-blur-md border-2 border-white shadow-xl rounded-2xl p-5 sm:p-6 md:p-8 max-w-2xl mx-auto">
            <p className="font-oswald text-[#3a352f] text-base sm:text-lg leading-relaxed">
              Everything you need to know about the{" "}
              <strong className="text-logoGold">White Party</strong> — from
              booking to what to expect on the day.
            </p>
          </div>
        </header>

        {/* ─── FAQ List ─── */}
        <div className="faq-list max-w-3xl mx-auto space-y-3 sm:space-y-4">
          {faqs.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <article
                key={faq.id}
                className={`faq-item group relative rounded-2xl border-2 shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? "faq-item-open border-goldenOrange/40 bg-gradient-to-br from-white via-white to-[#fdf9f0]"
                    : "border-white bg-white/95 backdrop-blur-md hover:border-goldenOrange/25"
                }`}
              >
                {/* Question button */}
                <button
                  type="button"
                  onClick={() => toggleFaq(faq.id)}
                  aria-expanded={isOpen}
                  aria-controls={`${faq.id}-answer`}
                  id={`${faq.id}-question`}
                  className="w-full text-left p-5 sm:p-6 flex items-start gap-4 sm:gap-5 focus:outline-none focus-visible:ring-2 focus-visible:ring-goldenOrange focus-visible:ring-offset-2 rounded-2xl transition-colors duration-300"
                >
                  {/* Number badge */}
                  <span
                    className={`shrink-0 w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center font-oswald text-xs sm:text-sm font-bold transition-all duration-300 ${
                      isOpen
                        ? "bg-softMintGreen text-white shadow-md"
                        : "bg-goldenOrange/10 text-goldenOrange border border-goldenOrange/30 group-hover:bg-goldenOrange/20"
                    }`}
                    aria-hidden="true"
                  >
                    {faq.number}
                  </span>

                  {/* Question text */}
                  <h3
                    className={`flex-1 font-seasons italic text-base sm:text-lg md:text-xl leading-tight pt-1 sm:pt-1.5 transition-colors duration-300 ${
                      isOpen ? "text-logoGold" : "text-logoGold"
                    }`}
                    style={{
                      textShadow: "1px 1px 0px rgba(255,255,255,0.9)",
                    }}
                  >
                    {faq.question}
                  </h3>

                  {/* Toggle icon (plus → rotates 45deg to become x) */}
                  <span
                    className={`shrink-0 mt-1 sm:mt-1.5 flex items-center justify-center w-8 h-8 sm:w-9 sm:h-9 rounded-full border-2 transition-all duration-400 ${
                      isOpen
                        ? "border-goldenOrange bg-goldenOrange text-white rotate-[135deg]"
                        : "border-goldenOrange/40 text-goldenOrange group-hover:border-goldenOrange group-hover:bg-goldenOrange/5"
                    }`}
                    aria-hidden="true"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-4 w-4 sm:h-4.5 sm:w-4.5 transition-transform duration-400"
                    >
                      <line x1="12" y1="5" x2="12" y2="19" />
                      <line x1="5" y1="12" x2="19" y2="12" />
                    </svg>
                  </span>
                </button>

                {/* Answer wrapper (CSS grid trick for smooth height animation) */}
                <div
                  id={`${faq.id}-answer`}
                  role="region"
                  aria-labelledby={`${faq.id}-question`}
                  className={`faq-answer-wrapper grid transition-all duration-500 ease-in-out ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="px-5 sm:px-6 pb-5 sm:pb-6">
                      {/* Divider */}
                      <div
                        className="ml-[52px] sm:ml-[60px] mb-4 h-px bg-gradient-to-r from-goldenOrange/40 via-goldenOrange/20 to-transparent"
                        aria-hidden="true"
                      />
                      <p className="ml-[52px] sm:ml-[60px] font-inter text-sm sm:text-[15px] md:text-base text-[#5a5147] leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* ─── Still have questions? Contact card ─── */}
        <div
          className="faq-contact-card wp-cta-glow relative max-w-3xl mx-auto mt-10 sm:mt-12 rounded-3xl p-6 sm:p-8 md:p-10 text-center border-2 border-goldenOrange/40 shadow-2xl overflow-hidden"
          style={{
            background:
              "linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(249,228,188,0.5) 100%)",
          }}
        >
          <p className="wp-fade-pulse font-oswald text-xs uppercase tracking-[0.24em] text-goldenOrange mb-3 font-semibold">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-softMintGreen mr-2 -translate-y-0.5" />
            Get in Touch
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-softMintGreen ml-2 -translate-y-0.5" />
          </p>

          <h3
            className="font-seasons italic text-2xl sm:text-3xl md:text-4xl text-logoGold mb-3 leading-tight"
            style={{ textShadow: "1px 1px 0px rgba(255,255,255,0.9)" }}
          >
            Still have questions?
          </h3>

          <p className="font-inter text-[#5a5147] text-sm sm:text-base leading-relaxed mb-7 max-w-xl mx-auto">
            Reach out to us directly and we&apos;ll be happy to help you plan
            your White Party experience.
          </p>

          {/* Contact buttons */}
          <div className="flex flex-col sm:flex-row items-stretch justify-center gap-3">
            <a
              href="tel:+441908772177"
              aria-label="Call Nour Maison at +44 1908 772177"
              className="cursor-pointer inline-flex items-center justify-center gap-2 border-2 border-goldenOrange/50 hover:border-goldenOrange bg-white/60 hover:bg-white text-logoGold hover:text-goldenOrange font-inter text-sm sm:text-base font-medium px-5 py-3 rounded-full transition-all duration-300 no-underline hover:no-underline"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-4 w-4"
                aria-hidden="true"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              Call Us
            </a>

            <a
              href="mailto:hello@nourmaison.co.uk"
              aria-label="Email Nour Maison"
              className="cursor-pointer inline-flex items-center justify-center gap-2 border-2 border-goldenOrange/50 hover:border-goldenOrange bg-white/60 hover:bg-white text-logoGold hover:text-goldenOrange font-inter text-sm sm:text-base font-medium px-5 py-3 rounded-full transition-all duration-300 no-underline hover:no-underline"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-4 w-4"
                aria-hidden="true"
              >
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
              Email Us
            </a>

            <a
              href="https://www.instagram.com/nourmaison"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow Nour Maison on Instagram (opens in a new tab)"
              className="wp-btn-bounce shimmer-btn cursor-pointer inline-flex items-center justify-center gap-2 bg-goldenOrange hover:bg-logoGold text-white hover:text-white font-nour text-base sm:text-lg px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 no-underline hover:no-underline"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-4 w-4"
                aria-hidden="true"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
              @NourMaison
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhitePartyFAQ;
