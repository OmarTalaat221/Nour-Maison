"use client";
import React, { useState, memo, useCallback, useRef } from "react";
import axios from "axios";
import { toast, Toaster } from "react-hot-toast";
import CustomInput from "../../../utils/CustomInput/CustomInput";
import { Toggle } from "rsuite";
import "rsuite/dist/rsuite.min.css";

import BranchesImage from "../../../utils/BranchesImage/BranchesImage";
import { motion } from "framer-motion";
import PlaneOverlaySuccess from "../../../components/PaperPlaneSuccess/PaperPlaneSuccess";

// ─── Diagonal Ribbon (desktop) ───
const DiagonalDiscountRibbon = memo(() => (
  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ type: "spring", stiffness: 170, damping: 14, delay: 0.35 }}
    className="pointer-events-none absolute -top-3 sm:-top-4 -right-7 xs:-right-8 sm:-right-11 md:-right-14 z-30 will-change-transform"
  >
    <motion.div
      className="rotate-45 origin-center"
      animate={{ y: [0, -2, 0] }}
      transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
    >
      <div className="relative w-[105px] xs:w-[115px] sm:w-[140px] md:w-[170px] overflow-hidden border-y border-white/30 bg-gradient-to-r from-red-700 via-red-600 to-red-700 py-1 xs:py-1.5 sm:py-2 shadow-[0_10px_28px_rgba(0,0,0,0.35)]">
        <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-transparent to-black/10" />
        <span className="relative block text-center text-[7px] xs:text-[8px] sm:text-[9px] md:text-[10px] uppercase tracking-[0.28em] text-white/80">
          Welcome
        </span>
        <span className="relative block text-center text-xs xs:text-sm sm:text-lg md:text-xl font-black leading-none tracking-[0.16em] text-white">
          10% OFF
        </span>
      </div>
    </motion.div>
  </motion.div>
));
DiagonalDiscountRibbon.displayName = "DiagonalDiscountRibbon";

// ─── Top Center Discount Badge (mobile/tablet) ───
const TopCenterDiscountBadge = memo(() => {
  return (
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
              Welcome
            </span>

            <span className="text-base xs:text-lg sm:text-xl md:text-2xl font-black leading-none tracking-[0.14em] text-white">
              10% OFF
            </span>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
});

TopCenterDiscountBadge.displayName = "TopCenterDiscountBadge";

// ─── Welcome Offer Card ───
const WelcomeOfferCard = memo(() => (
  <motion.div
    initial={{ opacity: 0, y: -180, x: 20, scale: 0.94 }}
    animate={{ opacity: 1, y: 0, x: 0, scale: 1 }}
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
          Your Welcome Discount Is On The Way
        </h3>

        <p className="text-gray-800 text-sm leading-relaxed font-inter font-medium">
          Once you complete your details, you will receive an email from us
          shortly with your{" "}
          <span className="text-logoGold font-extrabold">10% discount</span>.
        </p>
      </div>
    </motion.div>
  </motion.div>
));
WelcomeOfferCard.displayName = "WelcomeOfferCard";

// ─── Main Form ───
const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    visitedBefore: false,
  });

  const [showOverlay, setShowOverlay] = useState(false);
  const [successText, setSuccessText] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const submitRef = useRef(false);

  const getFormData = useCallback((e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }, []);

  const handleToggle = useCallback((checked) => {
    setFormData((prev) => ({ ...prev, visitedBefore: checked }));
  }, []);

  const handleSubmit = useCallback(
    async (e) => {
      e.preventDefault();

      if (submitRef.current) return;

      submitRef.current = true;
      setIsSubmitting(true);

      const payload = {
        name: formData.name.trim(),
        email: formData.email.trim(),
        phone: formData.phone.trim(),
        first_visit: formData.visitedBefore ? "0" : "1",
      };

      try {
        const { data } = await axios.post(
          "https://camp-coding.tech/nour_maison/user/add_discount_requests.php",
          JSON.stringify(payload),
          {
            headers: {
              "Content-Type": "text/plain",
            },
          },
        );

        if (data?.status === "error") {
          throw new Error(data?.message || "Something went wrong.");
        }

        setSuccessText(
          "Your request has been received! Your 10% welcome discount will be sent to your email shortly. We can’t wait to welcome you to Nour Maison and make your next visit truly special.",
        );
        setShowOverlay(true);

        setFormData({
          name: "",
          email: "",
          phone: "",
          visitedBefore: false,
        });
      } catch (error) {
        const errorMsg =
          error?.response?.data?.message ||
          error?.message ||
          "Failed to submit. Please try again.";

        toast.error(errorMsg, {
          duration: 4000,
          style: {
            borderRadius: "12px",
            background: "#fff7f7",
            color: "#7f1d1d",
            border: "1px solid #fecaca",
            fontWeight: "600",
          },
        });

        console.error("Submit error:", error);
      } finally {
        setIsSubmitting(false);
        submitRef.current = false;
      }
    },
    [formData],
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
      <style jsx global>{`
        .my-toggle.rs-toggle-checked .rs-toggle-presentation {
          background-color: #ca852d !important;
        }
      `}</style>

      <Toaster position="top-center" reverseOrder={false} />

      <PlaneOverlaySuccess
        showOverlay={showOverlay}
        setShowOverlay={setShowOverlay}
        text={successText}
      />

      <div className="absolute bottom-8 right-6 xl:right-10 z-[100] hidden lg:block w-[320px] xl:w-[360px]">
        <WelcomeOfferCard />
      </div>

      <BranchesImage
        variant="top-right"
        className="z-[1] top-[80px] xs:top-[90px] sm:top-[100px] md:top-[112px] lg:top-10 right-0 w-[140px] xs:w-[160px] sm:w-[210px] md:w-[270px] lg:w-[400px] opacity-45 sm:opacity-55 [filter:brightness(1.25)_contrast(1.08)_drop-shadow(0_0_18px_rgba(202,133,45,0.22))]"
      />
      <BranchesImage
        variant="bottom-left"
        className="z-[1] bottom-0 left-0 w-[140px] xs:w-[155px] sm:w-[200px] md:w-[250px] lg:w-[360px] opacity-35 sm:opacity-50 [filter:brightness(1.18)_contrast(1.05)_drop-shadow(0_0_14px_rgba(202,133,45,0.16))]"
      />

      <div className="relative z-10 w-full max-w-[680px] px-4 xs:px-5 sm:px-6 lg:px-4">
        <div className="relative">
          <TopCenterDiscountBadge />

          <div className="hidden lg:block">
            <DiagonalDiscountRibbon />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative w-full overflow-hidden rounded-[22px] sm:rounded-3xl border border-white/50 bg-white/20 bg-gradient-to-br from-white/40 via-white/20 to-white/10 p-5 xs:p-6 sm:p-8 md:p-10 lg:p-12 shadow-xl backdrop-blur-md will-change-transform"
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

            <div className="relative z-10">
              <h2
                style={{ textShadow: "1px 1px 2px rgba(255,255,255,0.7)" }}
                className="text-[28px] xs:text-[32px] sm:text-4xl md:text-5xl lg:text-6xl font-bold italic font-seasons text-logoGold text-center mb-2 sm:mb-3"
              >
                Become a Member
              </h2>

              <p className="mb-3 sm:mb-4 text-center text-xs xs:text-sm lg:text-base leading-relaxed text-gray-800 font-medium font-inter px-1">
                We are delighted to invite you to the Nour Maison family. Sign
                up today and enjoy a special{" "}
                <span className="text-logoGold font-extrabold">
                  10% discount
                </span>{" "}
                on your next dining experience!
              </p>
            </div>

            <form
              onSubmit={handleSubmit}
              className="relative z-10 mt-4 sm:mt-6 flex flex-col gap-4 sm:gap-5"
            >
              <CustomInput
                isGlass
                placeholder="Full Name"
                name="name"
                value={formData.name}
                onChange={getFormData}
                label="Full Name *"
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

              <div className="mt-2 sm:mt-4 flex flex-col gap-2.5 sm:gap-3">
                <label className="text-gray-800 text-sm sm:text-[15px] font-bold tracking-wide">
                  Have you visited Nour Maison before?
                </label>

                <div className="flex flex-row items-center gap-3 sm:gap-4 bg-white/40 p-3 rounded-xl border border-white/60 shadow-sm">
                  <Toggle
                    checked={formData.visitedBefore}
                    onChange={handleToggle}
                    className="my-toggle border-softMintGreen p-1 px-3 rounded-full w-fit"
                    size="lg"
                  />

                  <span className="text-logoGold font-seasons font-bold text-[15px] xs:text-base sm:text-lg md:text-xl drop-shadow-sm leading-snug">
                    {formData.visitedBefore
                      ? "Yes, I have"
                      : "No, this is my first time"}
                  </span>
                </div>
              </div>

              <div className="mt-5 sm:mt-7 flex justify-center items-center">
                <button
                  className={`button-border-anime ${isSubmitting
                    ? "opacity-60 pointer-events-none cursor-not-allowed"
                    : ""
                    }`}
                  aria-label="Submit"
                  type="submit"
                  disabled={isSubmitting}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <rect className="border-anime" pathLength={100} />
                  </svg>

                  <strong className="txt-upload font-tangerine text-4xl sm:text-5xl font-bold !text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.75)]">
                    {isSubmitting ? "Sending..." : "Join Now"}
                  </strong>
                </button>
              </div>
            </form>
          </motion.div>
        </div>

        <div className="mt-5 sm:mt-6 lg:hidden">
          <WelcomeOfferCard />
        </div>
      </div>
    </main>
  );
};

export default Form;
