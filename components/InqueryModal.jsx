"use client";

import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect, useState, useCallback, memo } from "react";
import { createPortal } from "react-dom";
import toast from "react-hot-toast";
import { IoCheckmarkCircle, IoClose, IoSend } from "react-icons/io5";
import { Dropdown } from "rsuite";
import { fetchData } from "../services/apiIntsance";

// ✅ Memoized Toast Styles
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

// ✅ Animation Variants
const modalVariants = {
  hidden: { opacity: 0, scale: 0.8, y: 50 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { type: "spring", damping: 25, stiffness: 300 },
  },
  exit: { opacity: 0, scale: 0.8, y: 50, transition: { duration: 0.2 } },
};

const overlayVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  exit: { opacity: 0 },
};

// ✅ Generate data once
const partyPersonsData = Array.from({ length: 100 }, (_, index) => ({
  label: `${index + 1} Persons`,
  value: index + 1,
}));

const timeSlots = Array.from({ length: 52 }, (_, i) => {
  const hours = Math.floor(i / 4) + 9;
  const minutes = (i % 4) * 15;
  const period = hours >= 12 ? "PM" : "AM";
  const formattedHours = hours > 12 ? hours - 12 : hours === 0 ? 12 : hours;
  const label = `${formattedHours.toString().padStart(2, "0")}:${minutes
    .toString()
    .padStart(2, "0")} ${period}`;
  return { id: i + 1, label, value: label };
});

const FramerModal = memo(
  ({ open, setOpen, event, onSuccess = () => null, onFail = () => {} }) => {
    const [formData, setFormData] = useState({
      name: "",
      email: "",
      date: "",
      time: "",
      seats: "",
      special_order_notes: "",
      other_notes: "",
      phone: "",
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [focusedField, setFocusedField] = useState("");
    const [mounted, setMounted] = useState(false);

    // ✅ Wait for client-side mount
    useEffect(() => {
      setMounted(true);
    }, []);

    // ✅ Lock body scroll
    useEffect(() => {
      if (open) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "auto";
      }
      return () => {
        document.body.style.overflow = "auto";
      };
    }, [open]);

    const closeModal = useCallback(() => {
      setOpen(false);
      setIsSubmitted(false);
    }, [setOpen]);

    const handleInputChange = useCallback((e) => {
      const { name, value } = e.target;
      setFormData((prev) => ({ ...prev, [name]: value }));
    }, []);

    const handleSubmit = useCallback(
      async (e) => {
        e.preventDefault();

        if (isSubmitting) return;

        const requiredFields = [
          "name",
          "email",
          "phone",
          "date",
          "time",
          "seats",
        ];
        for (let field of requiredFields) {
          if (!formData[field]) {
            toast.error(
              `${field.charAt(0).toUpperCase() + field.slice(1)} is required`,
              toastStyles
            );
            return;
          }
        }

        setIsSubmitting(true);

        try {
          const dataset = {
            ...formData,
            inquiry_type: event?.title,
          };

          const data = await fetchData({
            url: "user/make_inquiry.php",
            body: dataset,
            method: "POST",
          });

          if (data.status === "success") {
            setIsSubmitted(true);
            toast.success("Inquiry sent successfully", toastStyles);

            setTimeout(() => {
              setOpen(false);
              setFormData({
                name: "",
                email: "",
                date: "",
                time: "",
                seats: "",
                special_order_notes: "",
                other_notes: "",
                phone: "",
              });
              setIsSubmitted(false);
              onSuccess();
            }, 1500);
          } else {
            toast.error(data.message, toastStyles);
            onFail();
          }
        } catch (error) {
          toast.error("Something went wrong. Please try again.", toastStyles);
          onFail();
        } finally {
          setIsSubmitting(false);
        }
      },
      [formData, event?.title, isSubmitting, setOpen, onSuccess, onFail]
    );

    const isFormValid =
      formData.name &&
      formData.email &&
      formData.phone &&
      formData.date &&
      formData.time &&
      formData.seats;

    const getInputClassName = useCallback(
      (fieldName) => {
        return `w-full px-4 py-3 rounded-xl border-2 transition-all duration-300 bg-white/50 backdrop-blur-sm ${
          focusedField === fieldName
            ? "border-softMintGreen shadow-lg shadow-softMintGreen/25 scale-[1.02]"
            : "border-gray-200 hover:border-gray-300"
        } focus:outline-none`;
      },
      [focusedField]
    );

    // ✅ Don't render until mounted (for Portal)
    if (!mounted) return null;
    if (!open) return null;

    // ✅ Modal Content
    const modalContent = (
      <AnimatePresence>
        {open && (
          <motion.div
            variants={overlayVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4"
            style={{ zIndex: 999999999 }}
            onClick={closeModal}
          >
            <motion.div
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="bg-white rounded-3xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="h-full max-h-[90vh] overflow-y-auto overflow-x-hidden modal-scroll">
                {/* Header Image */}
                <div
                  className="relative h-48 sm:h-64 bg-cover bg-center flex-shrink-0"
                  style={{ backgroundImage: `url(${event?.image})` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <button
                    onClick={closeModal}
                    className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-full p-2 text-white hover:bg-white/30 transition-colors"
                    style={{ zIndex: 10 }}
                    aria-label="Close modal"
                  >
                    <IoClose className="w-6 h-6" />
                  </button>
                  <div className="absolute bottom-6 left-6">
                    <h2 className="text-white text-2xl sm:text-3xl font-bold mb-2">
                      {event?.title}
                    </h2>
                    <p className="text-white/90 text-lg sm:text-xl">
                      Make inquiry
                    </p>
                  </div>
                </div>

                {/* Content */}
                <div className="p-4 md:p-8">
                  <div className="relative">
                    <div className="bg-white/80 backdrop-blur-xl rounded-xl md:rounded-3xl shadow-2xl border border-white/20 p-4 md:p-8 relative overflow-hidden">
                      {/* Decorative elements */}
                      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-softMintGreen/20 to-sageGreen/20 rounded-full -translate-y-16 translate-x-16 pointer-events-none" />
                      <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-goldenOrange/20 to-logoGold/20 rounded-full translate-y-12 -translate-x-12 pointer-events-none" />

                      <form
                        onSubmit={handleSubmit}
                        className="space-y-6 relative z-10"
                      >
                        {/* Name & Email */}
                        <div className="grid md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <label className="block text-sm font-semibold text-gray-700">
                              Full Name <span className="text-red-500">*</span>
                            </label>
                            <input
                              type="text"
                              name="name"
                              value={formData.name}
                              onChange={handleInputChange}
                              onFocus={() => setFocusedField("name")}
                              onBlur={() => setFocusedField("")}
                              className={getInputClassName("name")}
                              placeholder="Enter your full name"
                            />
                          </div>
                          <div className="space-y-2">
                            <label className="block text-sm font-semibold text-gray-700">
                              Email <span className="text-red-500">*</span>
                            </label>
                            <input
                              type="email"
                              name="email"
                              value={formData.email}
                              onChange={handleInputChange}
                              onFocus={() => setFocusedField("email")}
                              onBlur={() => setFocusedField("")}
                              className={getInputClassName("email")}
                              placeholder="your@email.com"
                            />
                          </div>
                        </div>

                        {/* Phone & Date */}
                        <div className="grid md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <label className="block text-sm font-semibold text-gray-700">
                              Phone <span className="text-red-500">*</span>
                            </label>
                            <input
                              type="tel"
                              name="phone"
                              value={formData.phone}
                              onChange={handleInputChange}
                              onFocus={() => setFocusedField("phone")}
                              onBlur={() => setFocusedField("")}
                              className={getInputClassName("phone")}
                              placeholder="+44 7000 000000"
                            />
                          </div>
                          <div className="space-y-2">
                            <label className="block text-sm font-semibold text-gray-700">
                              Event Date <span className="text-red-500">*</span>
                            </label>
                            <input
                              type="date"
                              name="date"
                              min={new Date().toISOString().split("T")[0]}
                              value={formData.date}
                              onChange={handleInputChange}
                              onFocus={() => setFocusedField("date")}
                              onBlur={() => setFocusedField("")}
                              className={getInputClassName("date")}
                            />
                          </div>
                        </div>

                        {/* Time & Party Size */}
                        <div className="grid md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <label className="block text-sm font-semibold text-gray-700">
                              Time <span className="text-red-500">*</span>
                            </label>
                            <Dropdown
                              className="!w-full"
                              renderToggle={(props, ref) => (
                                <div {...props} ref={ref} className="!w-full">
                                  <input
                                    readOnly
                                    type="text"
                                    name="time"
                                    value={formData.time}
                                    onFocus={() => setFocusedField("time")}
                                    onBlur={() => setFocusedField("")}
                                    className={getInputClassName("time")}
                                    placeholder="Select time"
                                  />
                                </div>
                              )}
                            >
                              <div className="flex flex-col gap-1 h-[250px] overflow-y-auto p-2">
                                {timeSlots.map((item) => (
                                  <Dropdown.Item
                                    active={formData.time === item.value}
                                    key={item.id}
                                    onClick={() =>
                                      handleInputChange({
                                        target: {
                                          name: "time",
                                          value: item.value,
                                        },
                                      })
                                    }
                                    className="rounded-lg"
                                  >
                                    {item.label}
                                  </Dropdown.Item>
                                ))}
                              </div>
                            </Dropdown>
                          </div>
                          <div className="space-y-2">
                            <label className="block text-sm font-semibold text-gray-700">
                              Party Size <span className="text-red-500">*</span>
                            </label>
                            <Dropdown
                              className="!w-full"
                              renderToggle={(props, ref) => (
                                <div {...props} ref={ref} className="!w-full">
                                  <input
                                    readOnly
                                    type="text"
                                    name="seats"
                                    value={
                                      formData.seats
                                        ? `${formData.seats} Persons`
                                        : ""
                                    }
                                    onFocus={() => setFocusedField("seats")}
                                    onBlur={() => setFocusedField("")}
                                    className={getInputClassName("seats")}
                                    placeholder="Select party size"
                                  />
                                </div>
                              )}
                            >
                              <div className="flex flex-col gap-1 h-[250px] overflow-y-auto p-2">
                                {partyPersonsData.map((item) => (
                                  <Dropdown.Item
                                    active={formData.seats === item.value}
                                    key={item.value}
                                    onClick={() =>
                                      handleInputChange({
                                        target: {
                                          name: "seats",
                                          value: item.value,
                                        },
                                      })
                                    }
                                    className="rounded-lg"
                                  >
                                    {item.label}
                                  </Dropdown.Item>
                                ))}
                              </div>
                            </Dropdown>
                          </div>
                        </div>

                        {/* Message */}
                        <div className="space-y-2">
                          <label className="block text-sm font-semibold text-gray-700">
                            Special Requests{" "}
                            <span className="text-gray-400 font-normal">
                              (Optional)
                            </span>
                          </label>
                          <textarea
                            name="other_notes"
                            rows="3"
                            value={formData.other_notes}
                            onChange={handleInputChange}
                            onFocus={() => setFocusedField("other_notes")}
                            onBlur={() => setFocusedField("")}
                            className={`${getInputClassName("other_notes")} resize-none`}
                            placeholder="Any special requests or dietary requirements..."
                          />
                        </div>

                        {/* Submit Button */}
                        <button
                          type="submit"
                          disabled={!isFormValid || isSubmitting}
                          className={`w-full py-4 px-6 rounded-xl font-semibold text-white transition-all duration-300 flex items-center justify-center space-x-2 ${
                            isFormValid && !isSubmitting
                              ? "bg-gradient-to-r from-softMintGreen to-sageGreen hover:from-softMintGreen/90 hover:to-sageGreen/90 shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.98]"
                              : "bg-gray-400 cursor-not-allowed"
                          }`}
                        >
                          {isSubmitting ? (
                            <>
                              <svg
                                className="animate-spin h-5 w-5 text-white"
                                viewBox="0 0 24 24"
                              >
                                <circle
                                  className="opacity-25"
                                  cx="12"
                                  cy="12"
                                  r="10"
                                  stroke="currentColor"
                                  strokeWidth="4"
                                  fill="none"
                                />
                                <path
                                  className="opacity-75"
                                  fill="currentColor"
                                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                                />
                              </svg>
                              <span>Submitting...</span>
                            </>
                          ) : isSubmitted ? (
                            <>
                              <IoCheckmarkCircle size={20} />
                              <span>Request Sent!</span>
                            </>
                          ) : (
                            <>
                              <span>SUBMIT REQUEST</span>
                              <IoSend size={18} />
                            </>
                          )}
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    );

    // ✅ Use Portal to render at document.body level
    return createPortal(modalContent, document.body);
  }
);

FramerModal.displayName = "FramerModal";

export default FramerModal;
