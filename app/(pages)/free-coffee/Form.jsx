"use client";
import React, { useState, memo, useCallback, useRef } from "react";
import axios from "axios";
import { toast, Toaster } from "react-hot-toast";
import CustomInput from "../../../utils/CustomInput/CustomInput";
import "rsuite/dist/rsuite.min.css";

import BranchesImage from "../../../utils/BranchesImage/BranchesImage";
import { motion } from "framer-motion";
import PlaneOverlaySuccess from "../../../components/PaperPlaneSuccess/PaperPlaneSuccess";

// ─── Coffee Cup Icon (animated) ───
const CoffeeCupIcon = memo(() => (
  <motion.div
    initial={{ opacity: 0, scale: 0 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.4 }}
    className="flex justify-center lg:justify-start mb-3 sm:mb-4"
  >
    <motion.div
      animate={{ y: [0, -4, 0] }}
      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      className="relative"
    >
      <motion.div className="absolute -top-5 left-1/2 -translate-x-1/2 flex gap-1.5">
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -8, 0],
              opacity: [0.3, 0.7, 0.3],
              scaleY: [1, 1.3, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.3,
            }}
            className="w-[2px] h-3 rounded-full bg-logoGold/50"
          />
        ))}
      </motion.div>

      <svg
        width="52"
        height="52"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="drop-shadow-lg sm:w-[64px] sm:h-[64px]"
      >
        <path
          d="M3 14C3 14 3 18 3 19C3 20.1046 3.89543 21 5 21H15C16.1046 21 17 20.1046 17 19V14"
          stroke="#ca852d"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M3 10H17V14H3V10Z"
          stroke="#ca852d"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M17 11H19C20.1046 11 21 11.8954 21 13C21 14.1046 20.1046 15 19 15H17"
          stroke="#ca852d"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M7 3V6"
          stroke="#ca852d"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M10 4V7"
          stroke="#ca852d"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M13 3V6"
          stroke="#ca852d"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    </motion.div>
  </motion.div>
));
CoffeeCupIcon.displayName = "CoffeeCupIcon";

// ─── Top Center Badge (mobile/tablet) ───
const TopCenterFreeBadge = memo(() => (
  <div className="absolute lg:hidden block left-1/2 -top-2 z-30 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
    <motion.div
      initial={{ opacity: 0, y: -18, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{
        type: "spring",
        stiffness: 150,
        damping: 14,
        delay: 0.25,
      }}
    >
      <motion.div
        animate={{ y: [0, -3, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="relative overflow-hidden rounded-md sm:rounded-lg border border-red-400/40 bg-gradient-to-r from-red-700 via-red-600 to-red-700 px-5 xs:px-6 sm:px-8 md:px-10 py-2 xs:py-2.5 sm:py-3 shadow-[0_10px_28px_rgba(0,0,0,0.35)]"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-transparent to-black/10" />
        <div className="relative flex flex-col items-center justify-center">
          <span className="text-[9px] xs:text-[10px] sm:text-xs md:text-sm uppercase tracking-[0.28em] text-white/80">
            Welcome Gift
          </span>
          <span className="text-base xs:text-lg sm:text-xl md:text-2xl font-black leading-none tracking-[0.14em] text-white">
            FREE COFFEE
          </span>
        </div>
      </motion.div>
    </motion.div>
  </div>
));
TopCenterFreeBadge.displayName = "TopCenterFreeBadge";

// ─── Info Card ───
const FreeCoffeeInfoCard = memo(() => (
  <motion.div
    initial={{ opacity: 0, y: 30, scale: 0.94 }}
    animate={{ opacity: 1, y: 0, scale: 1 }}
    transition={{ type: "spring", stiffness: 78, damping: 15, delay: 0.55 }}
    className="w-full will-change-transform"
  >
    <motion.div
      animate={{ y: [0, -4, 0] }}
      transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
      className="relative overflow-hidden rounded-2xl border border-white/40 border-l-[3px] border-l-logoGold bg-white/30 p-5 lg:p-6 shadow-xl backdrop-blur-md"
    >
      <div className="absolute inset-0 rounded-2xl bg-white/20 blur-xl pointer-events-none" />
      <div className="absolute top-0 left-0 h-[1px] w-full bg-gradient-to-r from-transparent via-logoGold/50 to-transparent" />

      <div className="relative z-10 flex flex-col gap-2">
        <h3 className="text-logoGold font-seasons text-lg lg:text-xl font-bold italic tracking-wider">
          Your Free Coffee Is On The Way
        </h3>

        <p className="text-gray-800 text-sm leading-relaxed font-inter font-medium">
          Once you complete your details, you<span className="font-nour">&apos;</span>ll receive an email from us
          shortly with your{" "}
          <span className="text-logoGold font-extrabold">
            complimentary coffee voucher
          </span>
          . Simply present it on your next visit and enjoy!
        </p>
      </div>
    </motion.div>
  </motion.div>
));
FreeCoffeeInfoCard.displayName = "FreeCoffeeInfoCard";

// ─── Main Form ───
const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  // ===== Overlay States =====
  const [showOverlay, setShowOverlay] = useState(false);
  const [overlayText, setOverlayText] = useState("");
  const [overlayVariant, setOverlayVariant] = useState("success");

  const [isSubmitting, setIsSubmitting] = useState(false);
  const submitRef = useRef(false);

  const getFormData = useCallback((e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }, []);

  const handleSubmit = useCallback(
    async (e) => {
      e.preventDefault();

      // ===== Validation =====
      if (!formData.name.trim()) {
        toast.error("Please enter your name", {
          duration: 3000,
          style: {
            borderRadius: "12px",
            background: "#fff7f7",
            color: "#7f1d1d",
            border: "1px solid #fecaca",
            fontWeight: "600",
          },
        });
        return;
      }

      if (!formData.email.trim()) {
        toast.error("Please enter your email address", {
          duration: 3000,
          style: {
            borderRadius: "12px",
            background: "#fff7f7",
            color: "#7f1d1d",
            border: "1px solid #fecaca",
            fontWeight: "600",
          },
        });
        return;
      }

      // Email format validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email.trim())) {
        toast.error("Please enter a valid email address", {
          duration: 3000,
          style: {
            borderRadius: "12px",
            background: "#fff7f7",
            color: "#7f1d1d",
            border: "1px solid #fecaca",
            fontWeight: "600",
          },
        });
        return;
      }

      if (!formData.phone.trim()) {
        toast.error("Please enter your phone number", {
          duration: 3000,
          style: {
            borderRadius: "12px",
            background: "#fff7f7",
            color: "#7f1d1d",
            border: "1px solid #fecaca",
            fontWeight: "600",
          },
        });
        return;
      }

      if (submitRef.current) return;

      submitRef.current = true;
      setIsSubmitting(true);

      const payload = {
        name: formData.name.trim(),
        email: formData.email.trim(),
        phone: formData.phone.trim(),
      };

      try {
        const { data } = await axios.post(
          "https://camp-coding.tech/nour_maison/user/get_coffe_free.php",
          JSON.stringify(payload),
          {
            headers: {
              "Content-Type": "text/plain",
            },
          }
        );

        // ===== "send before" = Error Overlay =====
        if (data?.status === "send before" || data?.status === "error") {
          setOverlayText(
            data?.message ||
            "This email has already received the free coffee offer."
          );
          setOverlayVariant("error");
          setShowOverlay(true);
          return;
        }

        // ===== Success Overlay =====
        setOverlayText(
          "Your free coffee voucher is on its way! Check your inbox shortly for your complimentary coffee from Nour Maison. We can't wait to welcome you!"
        );
        setOverlayVariant("success");
        setShowOverlay(true);

        setFormData({
          name: "",
          email: "",
          phone: "",
        });
      } catch (error) {
        const errorMsg =
          error?.response?.data?.message ||
          error?.message ||
          "Failed to submit. Please try again.";

        // ===== Network/Server Error = Error Overlay =====
        setOverlayText(errorMsg);
        setOverlayVariant("error");
        setShowOverlay(true);

        console.error("Submit error:", error);
      } finally {
        setIsSubmitting(false);
        submitRef.current = false;
      }
    },
    [formData]
  );

  return (
    <main
      className="relative min-h-[100svh] w-full overflow-x-hidden overflow-y-auto flex items-start lg:items-center justify-center pt-[120px] xs:pt-[130px] sm:pt-[140px] md:pt-[152px] lg:pt-[168px] pb-8 sm:pb-12 lg:pb-16"
      style={{
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundImage: `
          linear-gradient(to bottom, rgba(0,0,0,0.44) 0%, rgba(0,0,0,0.28) 60%, rgba(204,231,191,1) 100%),
          url("/images/booking-bg.webp")
        `,
      }}
    >
      <Toaster position="top-center" reverseOrder={false} />

      {/* ===== Success & Error Overlay ===== */}
      <PlaneOverlaySuccess
        showOverlay={showOverlay}
        setShowOverlay={setShowOverlay}
        text={overlayText}
        variant={overlayVariant}
      />

      <BranchesImage
        variant="top-right"
        className="z-[1] top-[80px] xs:top-[90px] sm:top-[100px] md:top-[112px] lg:top-10 right-0 w-[140px] xs:w-[160px] sm:w-[210px] md:w-[270px] lg:w-[400px] opacity-45 sm:opacity-55 [filter:brightness(1.25)_contrast(1.08)_drop-shadow(0_0_18px_rgba(202,133,45,0.22))]"
      />
      <BranchesImage
        variant="bottom-left"
        className="z-[1] bottom-0 left-0 w-[140px] xs:w-[155px] sm:w-[200px] md:w-[250px] lg:w-[360px] opacity-35 sm:opacity-50 [filter:brightness(1.18)_contrast(1.05)_drop-shadow(0_0_14px_rgba(202,133,45,0.16))]"
      />

      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.235]"
        style={{
          backgroundImage: "url(/images/coffee-pattern.webp)",
          backgroundRepeat: "repeat",
          backgroundSize: "100%",
        }}
      />

      <div className="relative z-10 w-full max-w-[1280px] px-4 xs:px-5 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 xl:gap-14 items-center">
          {/* ─── LEFT SIDE: Text Content (Desktop) ─── */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="hidden lg:flex flex-col justify-center order-1 lg:order-1 px-2"
          >
            <h2
              style={{ textShadow: "1px 1px 2px rgba(255,255,255,0.7)" }}
              className="text-4xl xl:text-5xl 2xl:text-6xl font-bold italic font-seasons text-logoGold text-left mb-3"
            >
              Welcome to Nour Maison
            </h2>

            <p
              style={{ textShadow: "0 1px 1px rgba(255,255,255,0.5)" }}
              className="text-left text-lg xl:text-xl font-seasons font-semibold italic text-gray-700 mb-5"
            >
              You<span className="font-nour">&apos;</span>re just one step away from your complimentary coffee.
            </p>

            <p className="mb-3 text-left text-base xl:text-lg leading-relaxed text-gray-800 font-medium font-inter">
              Join our community to unlock exclusive offers, special events, and
              seasonal treats — starting with a{" "}
              <span className="text-logoGold font-extrabold">free coffee</span>{" "}
              on us.
            </p>

            <p className="mb-6 text-left text-base xl:text-lg leading-relaxed text-gray-800 font-medium font-inter">
              Simply enter your details below, and we<span className="font-nour">&apos;</span>ll send your voucher
              straight to your inbox.
            </p>

            <FreeCoffeeInfoCard />
          </motion.div>

          {/* ─── RIGHT SIDE: Form ─── */}
          <div className="relative order-2 lg:order-2 w-full max-w-[680px] mx-auto lg:mx-0">
            <TopCenterFreeBadge />

            <motion.div
              initial={{ opacity: 0, y: 26 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative w-full overflow-hidden rounded-[22px] sm:rounded-3xl border border-white/50 bg-white/20 bg-gradient-to-br from-white/40 via-white/20 to-white/10 p-5 xs:p-6 sm:p-8 md:p-10 lg:p-8 xl:p-10 shadow-xl backdrop-blur-md will-change-transform"
            >
              <div
                className="pointer-events-none absolute inset-0"
                style={{
                  background: `
                    radial-gradient(circle at top right, rgba(202,133,45,0.1), transparent 26%),
                    radial-gradient(circle at bottom left, rgba(255,255,255,0.2), transparent 30%)
                  `,
                }}
              />
              <div className="pointer-events-none absolute top-0 left-0 h-[1px] w-full bg-gradient-to-r from-transparent via-[#ca852d] to-transparent" />

              {/* Mobile/Tablet only */}
              <div className="relative z-10 lg:hidden">
                <CoffeeCupIcon />

                <h2
                  style={{ textShadow: "1px 1px 2px rgba(255,255,255,0.7)" }}
                  className="text-[28px] xs:text-[32px] sm:text-4xl md:text-5xl font-bold italic font-seasons text-logoGold text-center mb-1 sm:mb-2"
                >
                  Welcome to Nour Maison
                </h2>

                <p
                  style={{ textShadow: "0 1px 1px rgba(255,255,255,0.5)" }}
                  className="text-center text-sm xs:text-base sm:text-lg font-seasons font-semibold italic text-gray-700 mb-3 sm:mb-4"
                >
                  You<span className="font-nour">&apos;</span>re just one step away from your complimentary coffee.
                </p>

                <p className="mb-1 sm:mb-2 text-center text-xs xs:text-sm leading-relaxed text-gray-800 font-medium font-inter px-1">
                  Join our community to unlock exclusive offers, special events,
                  and seasonal treats — starting with a{" "}
                  <span className="text-logoGold font-extrabold">
                    free coffee
                  </span>{" "}
                  on us.
                </p>

                <p className="mb-3 sm:mb-4 text-center text-xs xs:text-sm leading-relaxed text-gray-800 font-medium font-inter px-1">
                  Simply enter your details below, and we<span className="font-nour">&apos;</span>ll send your
                  voucher straight to your inbox.
                </p>
              </div>

              {/* Desktop only */}
              <div className="hidden lg:block relative z-10 mb-2">
                <h3
                  style={{ textShadow: "1px 1px 2px rgba(255,255,255,0.7)" }}
                  className="text-2xl xl:text-3xl font-bold italic font-seasons text-logoGold text-center"
                >
                  Get Your Voucher
                </h3>
                <p className="text-center text-sm text-gray-700 font-inter mt-1">
                  Fill in your details below
                </p>
              </div>

              <form
                onSubmit={handleSubmit}
                className="relative z-10 mt-4 sm:mt-6 flex flex-col gap-4 sm:gap-5"
              >
                <CustomInput
                  isGlass
                  placeholder="First Name"
                  name="name"
                  value={formData.name}
                  onChange={getFormData}
                  label="First Name *"
                  required
                />

                <CustomInput
                  isGlass
                  placeholder="Email Address"
                  name="email"
                  value={formData.email}
                  onChange={getFormData}
                  label="Email Address *"
                  type="email"
                  required
                />

                <CustomInput
                  isGlass
                  placeholder="Phone Number"
                  name="phone"
                  value={formData.phone}
                  onChange={getFormData}
                  label="Phone Number *"
                  type="tel"
                  required
                />

                <div className="mt-5 sm:mt-7 flex justify-center items-center">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    aria-label="Claim My Free Coffee"
                    className={`relative overflow-hidden group px-8 xs:px-10 sm:px-12 py-3 sm:py-4 rounded-full !bg-logoGold text-white font-inter font-bold text-sm xs:text-base sm:text-lg tracking-wider uppercase shadow-lg shadow-logoGold/40 border border-white/30 transition-all duration-300 hover:shadow-xl hover:shadow-logoGold/50 hover:scale-[1.03] active:scale-[0.98] ${isSubmitting
                      ? "opacity-60 pointer-events-none cursor-not-allowed"
                      : "cursor-pointer"
                      }`}
                  >
                    <span
                      className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-12"
                      aria-hidden="true"
                    />
                    <span
                      className="absolute inset-0 -translate-x-full global-shimmer-btn bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12 pointer-events-none"
                      aria-hidden="true"
                    />
                    <span className="relative z-10 whitespace-nowrap drop-shadow-[0_1px_2px_rgba(0,0,0,0.5)]">
                      {isSubmitting ? "Sending..." : "Claim My Free Coffee"}
                    </span>
                  </button>
                </div>

                <p className="text-center text-[10px] xs:text-[11px] sm:text-xs text-gray-600/80 font-inter leading-relaxed mt-1 px-2">
                  By signing up, you agree to receive occasional updates and
                  offers from Nour Maison. You can unsubscribe at any time.
                </p>
              </form>
            </motion.div>

            {/* Mobile only: Info card under form */}
            <div className="mt-5 sm:mt-6 lg:hidden">
              <FreeCoffeeInfoCard />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Form;