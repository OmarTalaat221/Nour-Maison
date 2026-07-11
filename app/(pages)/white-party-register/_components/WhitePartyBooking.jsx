"use client";

import axios from "axios";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { Loader } from "rsuite";
import "rsuite/dist/rsuite.min.css";

import PlaneOverlaySuccess from "../../../../components/PaperPlaneSuccess/PaperPlaneSuccess";
import CustomInput from "../../../../utils/CustomInput/CustomInput";
import CustomSelect from "../../../../utils/CustomSelect/CustomSelect";
// import PlaneOverlaySuccess from "../../../../utils/PlaneOverlaySuccess/PlaneOverlaySuccess"; // ← عدّل الـ path حسب مكان الكومبوننت الفعلي

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const API_URL =
  "https://camp-coding.tech/nour_maison/user/add_party_booking.php";

const guestOptions = Array.from({ length: 8 }, (_, i) => ({
  id: i + 1,
  label: `${i + 1} ${i === 0 ? "Guest" : "Guests"}`,
  value: i + 1,
}));

const toastStyles = {
  position: "bottom-right",
  style: {
    backgroundColor: "#000",
    color: "#14532D",
    fontSize: "1rem",
    fontWeight: "bold",
    background: "rgba(255, 255, 255, 0.25)",
    boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
    backdropFilter: "blur(5px)",
    WebkitBackdropFilter: "blur(1.5px)",
    borderRadius: "10px",
    border: "1px solid rgba(255, 255, 255, 0.18)",
  },
};

const initialFormData = {
  name: "",
  email: "",
  phone: "",
  guests: "",
  bringingFriend: false,
  notes: "",
};

const WhitePartyBooking = () => {
  const [loading, setLoading] = useState(false);
  const [showOverlay, setShowOverlay] = useState(false);
  const [overlayVariant, setOverlayVariant] = useState("success");
  const [overlayText, setOverlayText] = useState("");
  const [formData, setFormData] = useState(initialFormData);

  const sectionRef = useRef(null);
  const ticketRef = useRef(null);
  const formRef = useRef(null);
  const buttonRef = useRef(null);
  const particlesRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ticketRef.current,
        { x: -100, rotation: -8, opacity: 0, scale: 0.85 },
        {
          x: 0,
          rotation: -2,
          opacity: 1,
          scale: 1,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
            toggleActions: "play none none reverse",
          },
        },
      );

      gsap.fromTo(
        formRef.current,
        { x: 100, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          delay: 0.2,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
            toggleActions: "play none none reverse",
          },
        },
      );

      const formFields = formRef.current?.querySelectorAll(".wp-field");
      if (formFields?.length) {
        gsap.fromTo(
          formFields,
          { y: 20, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.5,
            stagger: 0.08,
            ease: "power2.out",
            delay: 0.6,
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 70%",
              toggleActions: "play none none reverse",
            },
          },
        );
      }

      gsap.to(ticketRef.current, {
        y: -8,
        rotation: -1,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: 1.2,
      });

      const particles = particlesRef.current?.children;
      if (particles?.length) {
        Array.from(particles).forEach((particle, i) => {
          gsap.to(particle, {
            y: "random(-40, -80)",
            x: `random(-30, 30)`,
            rotation: "random(-180, 180)",
            opacity: "random(0.3, 0.8)",
            duration: "random(4, 7)",
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
            delay: i * 0.3,
          });
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleButtonMove = (e) => {
    const btn = buttonRef.current;
    if (!btn) return;
    const rect = btn.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    gsap.to(btn, {
      x: x * 0.15,
      y: y * 0.15,
      duration: 0.4,
      ease: "power2.out",
    });
  };

  const handleButtonLeave = () => {
    gsap.to(buttonRef.current, {
      x: 0,
      y: 0,
      duration: 0.5,
      ease: "elastic.out(1, 0.4)",
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelect = (name) => (selected) => {
    setFormData((prev) => ({ ...prev, [name]: selected }));
  };

  const handleCheckbox = (e) => {
    setFormData((prev) => ({ ...prev, bringingFriend: e.target.checked }));
  };

  const toggleFriend = () => {
    setFormData((prev) => ({
      ...prev,
      bringingFriend: !prev.bringingFriend,
    }));
  };

  /* ─── Simple email validation ─── */
  const isValidEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const reserveTicket = async () => {
    // ─── Validation ───
    if (!formData.name.trim()) {
      toast.error("Please enter your full name", toastStyles);
      return;
    }
    if (!formData.email.trim()) {
      toast.error("Please enter your email address", toastStyles);
      return;
    }
    if (!isValidEmail(formData.email.trim())) {
      toast.error("Please enter a valid email address", toastStyles);
      return;
    }
    if (!formData.phone.trim()) {
      toast.error("Please enter your phone number", toastStyles);
      return;
    }
    if (!formData.guests) {
      toast.error("Please select number of guests", toastStyles);
      return;
    }

    setLoading(true);

    // ─── Payload ───
    const payload = {
      name: formData.name.trim(),
      email: formData.email.trim(),
      phone: formData.phone.trim(),
      guests: formData.guests?.value || 1,
      bringingFriend: formData.bringingFriend ? 1 : 0,
      notes: formData.notes?.trim() || "",
      event: "White Party 2026",
      eventDate: "2026-07-26",
    };

    try {
      const response = await axios.post(API_URL, payload, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      // ─── Response handling ───
      const data = response?.data;
      const isSuccess =
        data?.status === "success" ||
        data?.success === true ||
        data?.status === 1 ||
        response.status === 200;

      if (isSuccess) {
        // Ticket celebration animation
        gsap.to(ticketRef.current, {
          scale: 1.05,
          rotation: 2,
          duration: 0.3,
          yoyo: true,
          repeat: 1,
          ease: "power2.inOut",
          onComplete: () => {
            setOverlayVariant("success");
            setOverlayText("Your White Party ticket is reserved!");
            setShowOverlay(true);
            setFormData(initialFormData);
          },
        });
      } else {
        // API returned but with failure status
        setOverlayVariant("error");
        setOverlayText(
          data?.message || "Something went wrong. Please try again.",
        );
        setShowOverlay(true);
      }
    } catch (error) {
      console.error("Booking error:", error);

      const errorMessage =
        error?.response?.data?.message ||
        error?.message ||
        "Something went wrong. Please try again.";

      setOverlayVariant("error");
      setOverlayText(errorMessage);
      setShowOverlay(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      ref={sectionRef}
      id="ticket-booking"
      className="relative py-16 sm:py-20 md:py-28 overflow-hidden"
      aria-labelledby="ticket-booking-heading"
    >
      {/* ─── Floating gold particles ─── */}
      <div
        ref={particlesRef}
        className="absolute inset-0 pointer-events-none z-0"
        aria-hidden="true"
      >
        {Array.from({ length: 12 }).map((_, i) => (
          <span
            key={i}
            className="absolute h-1.5 w-1.5 rounded-full bg-goldenOrange/50 blur-[1px]"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* ─── Heading ─── */}
        <header className="text-center mb-12 sm:mb-16">
          <p className="wp-fade-pulse font-oswald text-xs sm:text-sm uppercase tracking-[0.32em] text-goldenOrange mb-4 font-semibold">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-softMintGreen mr-3 -translate-y-0.5" />
            Reserve Your Spot
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-softMintGreen ml-3 -translate-y-0.5" />
          </p>

          <h2
            id="ticket-booking-heading"
            className="font-seasons text-3xl sm:text-4xl md:text-5xl lg:text-6xl italic text-logoGold mb-4 leading-tight"
            style={{
              textShadow:
                "2px 2px 0px rgba(255,255,255,0.9), 0 4px 15px rgba(0,0,0,0.1)",
            }}
          >
            Get Your Ticket
            <span className="block text-goldenOrange mt-1">to the Party</span>
          </h2>

          <p className="font-inter text-[#5a5147] text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Fill in your details and we&apos;ll email you your White Party
            ticket confirmation.
          </p>
        </header>

        {/* ─── Ticket + Form Layout ─── */}
        <div className="grid grid-cols-1 lg:grid-cols-[380px_1fr] gap-6 lg:gap-0 max-w-6xl mx-auto">
          {/* ═══════════ LEFT: TICKET STUB ═══════════ */}
          <div ref={ticketRef} className="wp-ticket relative">
            <div
              className="relative h-full rounded-3xl lg:rounded-r-none overflow-hidden shadow-2xl border-2 border-goldenOrange/40"
              style={{
                backgroundImage:
                  "linear-gradient(to right, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.2)), url(/images/booking-bg.webp)",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            >
              <div
                className="absolute inset-0 opacity-40 mix-blend-overlay pointer-events-none"
                style={{
                  background: `
                    radial-gradient(circle at 20% 30%, rgba(255,255,255,0.35) 0%, transparent 40%),
                    radial-gradient(circle at 80% 70%, rgba(255,255,255,0.25) 0%, transparent 40%),
                    radial-gradient(circle at 50% 50%, rgba(221,153,51,0.15) 0%, transparent 60%)
                  `,
                }}
              />

              <div className="absolute inset-0 wp-gold-shimmer pointer-events-none" />

              <div className="hidden lg:block absolute top-0 right-0 h-full w-4 flex flex-col justify-around items-center">
                <div className="wp-perforation h-full flex flex-col justify-around">
                  {Array.from({ length: 15 }).map((_, i) => (
                    <span
                      key={i}
                      className="h-3 w-3 rounded-full bg-white -mr-1.5 shadow-inner"
                    />
                  ))}
                </div>
              </div>

              <div className="lg:hidden absolute bottom-0 left-0 w-full h-4 flex justify-around items-center">
                {Array.from({ length: 20 }).map((_, i) => (
                  <span
                    key={i}
                    className="h-3 w-3 rounded-full bg-white -mb-1.5 shadow-inner"
                  />
                ))}
              </div>

              <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-goldenOrange/80 rounded-tl-lg pointer-events-none" />
              <div className="hidden lg:block absolute top-4 right-10 w-8 h-8 border-t-2 border-r-2 border-goldenOrange/80 rounded-tr-lg pointer-events-none" />
              <div className="lg:hidden absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-goldenOrange/80 rounded-tr-lg pointer-events-none" />
              <div className="absolute bottom-8 left-4 w-8 h-8 border-b-2 border-l-2 border-goldenOrange/80 rounded-bl-lg pointer-events-none" />
              <div className="hidden lg:block absolute bottom-4 right-10 w-8 h-8 border-b-2 border-r-2 border-goldenOrange/80 rounded-br-lg pointer-events-none" />

              <div className="relative p-6 sm:p-8 lg:p-10 lg:pr-14 h-full flex flex-col">
                <div className="relative z-10 flex items-center gap-2 mb-6">
                  <span className="font-oswald text-[10px] uppercase tracking-[0.32em] text-white font-bold">
                    Admit One
                  </span>
                  <span className="ml-auto font-oswald text-[10px] uppercase tracking-[0.2em] text-goldenOrange font-bold">
                    Exclusive
                  </span>
                </div>

                <div className="relative z-10 mb-8">
                  <p className="font-oswald text-xs uppercase tracking-[0.28em] text-white/90 mb-2 font-medium">
                    by Nour Maison
                  </p>
                  <h3
                    className="font-seasons text-4xl sm:text-5xl italic text-white leading-none"
                    style={{
                      textShadow:
                        "0 2px 20px rgba(0,0,0,0.25), 0 1px 3px rgba(0,0,0,0.4)",
                    }}
                  >
                    White
                    <br />
                    <span
                      className="text-goldenOrange"
                      style={{ textShadow: "0 2px 15px rgba(0,0,0,0.3)" }}
                    >
                      Party
                    </span>
                  </h3>
                </div>

                <div className="relative z-10 my-4 border-t border-dashed border-white/50" />

                <div className="relative z-10 space-y-4 flex-grow">
                  <div>
                    <p className="font-oswald text-[10px] uppercase tracking-[0.24em] text-goldenOrange mb-1 font-bold">
                      Date
                    </p>
                    <p className="font-seasons text-lg italic text-white">
                      Sat, 26 July 2026
                    </p>
                  </div>

                  <div>
                    <p className="font-oswald text-[10px] uppercase tracking-[0.24em] text-goldenOrange mb-1 font-bold">
                      Doors Open
                    </p>
                    <p className="font-seasons text-lg italic text-white">
                      3:00 PM
                    </p>
                  </div>

                  <div>
                    <p className="font-oswald text-[10px] uppercase tracking-[0.24em] text-goldenOrange mb-1 font-bold">
                      Venue
                    </p>
                    <p className="font-seasons text-base italic text-white leading-tight">
                      Nour Maison
                      <br />
                      Milton Keynes
                    </p>
                  </div>

                  <div>
                    <p className="font-oswald text-[10px] uppercase tracking-[0.24em] text-goldenOrange mb-1 font-bold">
                      Dress Code
                    </p>
                    <p
                      className="font-seasons text-xl italic text-white font-bold"
                      style={{ textShadow: "0 1px 8px rgba(0,0,0,0.3)" }}
                    >
                      All White
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ═══════════ RIGHT: FORM ═══════════ */}
          <div
            ref={formRef}
            className="wp-form-wrapper relative bg-white/95 backdrop-blur-md rounded-3xl lg:rounded-l-none shadow-2xl border-2 border-white overflow-visible"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-white via-white to-[#fdf8ef] pointer-events-none rounded-3xl lg:rounded-l-none" />

            <div className="relative p-6 sm:p-8 md:p-10">
              <div className="wp-field mb-6">
                <p className="font-oswald text-xs uppercase tracking-[0.24em] text-goldenOrange font-semibold mb-2">
                  Attendee Details
                </p>
                <h3
                  className="font-seasons text-2xl sm:text-3xl md:text-4xl italic text-logoGold leading-tight"
                  style={{
                    textShadow: "1px 1px 0px rgba(255,255,255,0.9)",
                  }}
                >
                  Complete Your Booking
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="wp-field">
                  <CustomInput
                    labelClassName="!text-[#3a352f]"
                    placeholder="Your full name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    label="Full Name"
                    required
                  />
                </div>
                <div className="wp-field">
                  <CustomInput
                    labelClassName="!text-[#3a352f]"
                    type="email"
                    placeholder="you@email.com"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    label="Email Address"
                    required
                  />
                </div>
                <div className="wp-field">
                  <CustomInput
                    labelClassName="!text-[#3a352f]"
                    type="tel"
                    placeholder="+44 7XXX XXXXXX"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    label="Phone Number"
                    required
                  />
                </div>
                <div className="wp-field wp-field-select">
                  <CustomSelect
                    labelClassName="!text-[#3a352f]"
                    placeholder="Select guests"
                    data={guestOptions}
                    name="guests"
                    value={formData.guests}
                    onChange={handleSelect("guests")}
                    label="Number of Guests"
                    required
                  />
                </div>

                {/* Bringing a friend — checkbox */}
                <div className="wp-field sm:col-span-2">
                  <div
                    onClick={toggleFriend}
                    role="checkbox"
                    tabIndex={0}
                    aria-checked={formData.bringingFriend}
                    onKeyDown={(e) => {
                      if (e.key === " " || e.key === "Enter") {
                        e.preventDefault();
                        toggleFriend();
                      }
                    }}
                    className="flex items-start gap-3 cursor-pointer group select-none"
                  >
                    <div className="relative flex-shrink-0 mt-0.5">
                      <input
                        type="checkbox"
                        name="bringingFriend"
                        checked={formData.bringingFriend}
                        onChange={handleCheckbox}
                        className="sr-only"
                        aria-label="I'm bringing a friend"
                        tabIndex={-1}
                      />
                      <div
                        className={`h-5 w-5 rounded-md border-2 transition-all duration-200 flex items-center justify-center ${
                          formData.bringingFriend
                            ? "bg-goldenOrange border-goldenOrange"
                            : "bg-white border-goldenOrange/60 group-hover:border-goldenOrange"
                        }`}
                      >
                        {formData.bringingFriend && (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="white"
                            strokeWidth="3"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="h-3.5 w-3.5"
                          >
                            <polyline points="20 6 9 17 4 12" />
                          </svg>
                        )}
                      </div>
                    </div>
                    <div className="flex-1">
                      <span className="font-inter text-sm font-medium text-[#3a352f] block leading-snug">
                        I&apos;m bringing a friend
                      </span>
                      <span className="font-inter text-xs text-[#7a6f60] block mt-0.5 leading-snug">
                        Follow{" "}
                        <a
                          href="https://www.instagram.com/nourmaison"
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="text-logoGold hover:text-goldenOrange font-semibold underline underline-offset-2 no-underline hover:no-underline"
                        >
                          @NourMaison
                        </a>{" "}
                        on Instagram to get a complimentary drink on arrival
                      </span>
                    </div>
                  </div>
                </div>

                <div className="wp-field sm:col-span-2">
                  <CustomInput
                    labelClassName="!text-[#3a352f]"
                    textarea={true}
                    rows="3"
                    placeholder="Any dietary requirements or special requests?"
                    name="notes"
                    onChange={handleChange}
                    value={formData.notes}
                    label="Additional Notes (optional)"
                  />
                </div>
              </div>

              {/* Submit */}
              <div className="wp-field mt-8 flex justify-center">
                {loading ? (
                  <div className="flex items-center justify-center">
                    <Loader color="#dd9933" size="lg" />
                  </div>
                ) : (
                  <button
                    ref={buttonRef}
                    onClick={reserveTicket}
                    onMouseMove={handleButtonMove}
                    onMouseLeave={handleButtonLeave}
                    type="button"
                    aria-label="Reserve your White Party ticket"
                    className="button-border-anime hover:!bg-[#1a1a1a] !w-56 md:!w-72 h-[3.5rem] md:!h-[4.5rem] flex items-center justify-center"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="!h-[4.5rem]"
                      aria-hidden="true"
                    >
                      <rect
                        className="border-anime !w-56 md:!w-72 !h-[4.5rem] !stroke-[4px] !stroke-[#dd9933]"
                        pathLength={100}
                      />
                    </svg>
                    <strong className="txt-upload font-tangerine text-4xl md:text-5xl font-bold !text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.75)]">
                      Reserve Now
                    </strong>
                  </button>
                )}
              </div>

              <p className="wp-field mt-4 text-center font-inter text-[#7a6f60] text-xs italic">
                You&apos;ll receive a confirmation email with your ticket.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Toaster />

      {/* ─── Plane Overlay for success/error ─── */}
      <PlaneOverlaySuccess
        showOverlay={showOverlay}
        setShowOverlay={setShowOverlay}
        text={overlayText}
        variant={overlayVariant}
      />
    </section>
  );
};

export default WhitePartyBooking;
