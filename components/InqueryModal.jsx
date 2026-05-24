"use client";

import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect, useState, useCallback, useMemo, memo } from "react";
import { createPortal } from "react-dom";
import toast from "react-hot-toast";
import { IoCheckmarkCircle, IoClose, IoSend } from "react-icons/io5";
import { Dropdown } from "rsuite";
import "rsuite/dist/rsuite.min.css";

import { fetchData } from "../services/apiIntsance";

// ✅ Memoized Toast Styles - خارج الكومبوننت
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

// ✅ Animation Variants - خارج الكومبوننت
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

// ✅ Initial form state - خارج الكومبوننت لتجنب إنشاء object جديد كل render
const INITIAL_FORM_STATE = {
  name: "",
  email: "",
  date: "",
  time: "",
  seats: "",
  special_order_notes: "",
  other_notes: "",
  phone: "",
};

// ✅ Required fields - ثابت
const REQUIRED_FIELDS = ["name", "email", "phone", "date", "time", "seats"];

// ✅ Generate data once - خارج الكومبوننت
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

// ✅ Memoized Dropdown Item Component
const DropdownOption = memo(({ item, isActive, onClick }) => (
  <Dropdown.Item active={isActive} onClick={onClick} className="rounded-lg">
    {item.label}
  </Dropdown.Item>
));
DropdownOption.displayName = "DropdownOption";

// ✅ Memoized Form Field Component
const FormField = memo(({ label, required = true, children }) => (
  <div className="space-y-2">
    <label className="block text-sm font-semibold text-gray-700">
      {label}{" "}
      {required ? (
        <span className="text-red-500">*</span>
      ) : (
        <span className="text-gray-400 font-normal">(Optional)</span>
      )}
    </label>
    {children}
  </div>
));
FormField.displayName = "FormField";

// ✅ Memoized Spinner Component
const Spinner = memo(() => (
  <svg className="animate-spin h-5 w-5 text-white" viewBox="0 0 24 24">
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
));
Spinner.displayName = "Spinner";

const FramerModal = memo(
  ({ open, setOpen, event, onSuccess = () => null, onFail = () => {} }) => {
    const [formData, setFormData] = useState(INITIAL_FORM_STATE);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [focusedField, setFocusedField] = useState("");
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
      setMounted(true);
    }, []);

    // ✅ Lock body scroll
    useEffect(() => {
      if (!open) {
        document.body.style.overflow = "auto";
        return;
      }

      document.body.style.overflow = "hidden";
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

    // ✅ Memoized focus/blur handlers - بدل إنشاء function جديدة كل render
    const handleFocus = useCallback((fieldName) => {
      setFocusedField(fieldName);
    }, []);

    const handleBlur = useCallback(() => {
      setFocusedField("");
    }, []);

    const handleSubmit = useCallback(
      async (e) => {
        e.preventDefault();
        if (isSubmitting) return;

        for (const field of REQUIRED_FIELDS) {
          if (!formData[field]) {
            toast.error(
              `${field.charAt(0).toUpperCase() + field.slice(1)} is required`,
              toastStyles,
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

          // TODO: Remove console.log before production
          // return console.log(dataset, "dataset");

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
              setFormData(INITIAL_FORM_STATE);
              setIsSubmitted(false);
              onSuccess();
            }, 1500);
          } else {
            toast.error(data.message, toastStyles);
            onFail();
          }
        } catch {
          toast.error("Something went wrong. Please try again.", toastStyles);
          onFail();
        } finally {
          setIsSubmitting(false);
        }
      },
      [formData, event?.title, isSubmitting, setOpen, onSuccess, onFail],
    );

    // ✅ Memoized validation
    const isFormValid = useMemo(
      () => REQUIRED_FIELDS.every((field) => Boolean(formData[field])),
      [formData],
    );

    // ✅ Memoized input className generator
    const getInputClassName = useCallback(
      (fieldName) =>
        `w-full px-4 py-3 rounded-xl border-2 transition-all duration-300 bg-white/50 backdrop-blur-sm ${
          focusedField === fieldName
            ? "border-softMintGreen shadow-lg shadow-softMintGreen/25 scale-[1.02]"
            : "border-gray-200 hover:border-gray-300"
        } focus:outline-none`,
      [focusedField],
    );

    // ✅ Memoized dropdown handlers
    const handleTimeSelect = useCallback(
      (value) => {
        handleInputChange({ target: { name: "time", value } });
      },
      [handleInputChange],
    );

    const handleSeatsSelect = useCallback(
      (value) => {
        handleInputChange({ target: { name: "seats", value } });
      },
      [handleInputChange],
    );

    // ✅ Memoized button className
    const submitButtonClassName = useMemo(
      () =>
        `w-full py-4 px-6 rounded-xl font-semibold text-white transition-all duration-300 flex items-center justify-center space-x-2 ${
          isFormValid && !isSubmitting
            ? "bg-gradient-to-r from-softMintGreen to-sageGreen hover:from-softMintGreen/90 hover:to-sageGreen/90 shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.98]"
            : "bg-gray-400 cursor-not-allowed"
        }`,
      [isFormValid, isSubmitting],
    );

    // ✅ Memoized seats display value
    const seatsDisplayValue = useMemo(
      () => (formData.seats ? `${formData.seats} Persons` : ""),
      [formData.seats],
    );

    // ✅ Today's date for min attribute
    const todayDate = useMemo(() => new Date().toISOString().split("T")[0], []);

    if (!mounted || !open) return null;

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
                          <FormField label="Full Name">
                            <input
                              type="text"
                              name="name"
                              value={formData.name}
                              onChange={handleInputChange}
                              onFocus={() => handleFocus("name")}
                              onBlur={handleBlur}
                              className={getInputClassName("name")}
                              placeholder="Enter your full name"
                            />
                          </FormField>
                          <FormField label="Email">
                            <input
                              type="email"
                              name="email"
                              value={formData.email}
                              onChange={handleInputChange}
                              onFocus={() => handleFocus("email")}
                              onBlur={handleBlur}
                              className={getInputClassName("email")}
                              placeholder="your@email.com"
                            />
                          </FormField>
                        </div>

                        {/* Phone & Date */}
                        <div className="grid md:grid-cols-2 gap-4">
                          <FormField label="Phone">
                            <input
                              type="tel"
                              name="phone"
                              value={formData.phone}
                              onChange={handleInputChange}
                              onFocus={() => handleFocus("phone")}
                              onBlur={handleBlur}
                              className={getInputClassName("phone")}
                              placeholder="+44 7000 000000"
                            />
                          </FormField>
                          <FormField label="Event Date">
                            <input
                              type="date"
                              name="date"
                              min={todayDate}
                              value={formData.date}
                              onChange={handleInputChange}
                              onFocus={() => handleFocus("date")}
                              onBlur={handleBlur}
                              className={getInputClassName("date")}
                            />
                          </FormField>
                        </div>

                        {/* Time & Party Size */}
                        <div className="grid md:grid-cols-2 gap-4">
                          <FormField label="Time">
                            <Dropdown
                              className="!w-full"
                              renderToggle={(props, ref) => (
                                <div {...props} ref={ref} className="!w-full">
                                  <input
                                    readOnly
                                    type="text"
                                    name="time"
                                    value={formData.time}
                                    onFocus={() => handleFocus("time")}
                                    onBlur={handleBlur}
                                    className={getInputClassName("time")}
                                    placeholder="Select time"
                                  />
                                </div>
                              )}
                            >
                              <div className="flex flex-col gap-1 h-[250px] overflow-y-auto p-2">
                                {timeSlots.map((item) => (
                                  <DropdownOption
                                    key={item.id}
                                    item={item}
                                    isActive={formData.time === item.value}
                                    onClick={() => handleTimeSelect(item.value)}
                                  />
                                ))}
                              </div>
                            </Dropdown>
                          </FormField>
                          <FormField label="Party Size">
                            <Dropdown
                              className="!w-full"
                              renderToggle={(props, ref) => (
                                <div {...props} ref={ref} className="!w-full">
                                  <input
                                    readOnly
                                    type="text"
                                    name="seats"
                                    value={seatsDisplayValue}
                                    onFocus={() => handleFocus("seats")}
                                    onBlur={handleBlur}
                                    className={getInputClassName("seats")}
                                    placeholder="Select party size"
                                  />
                                </div>
                              )}
                            >
                              <div className="flex flex-col gap-1 h-[250px] overflow-y-auto p-2">
                                {partyPersonsData.map((item) => (
                                  <DropdownOption
                                    key={item.value}
                                    item={item}
                                    isActive={formData.seats === item.value}
                                    onClick={() =>
                                      handleSeatsSelect(item.value)
                                    }
                                  />
                                ))}
                              </div>
                            </Dropdown>
                          </FormField>
                        </div>

                        {/* Message */}
                        <FormField label="Special Requests" required={false}>
                          <textarea
                            name="other_notes"
                            rows="3"
                            value={formData.other_notes}
                            onChange={handleInputChange}
                            onFocus={() => handleFocus("other_notes")}
                            onBlur={handleBlur}
                            className={`${getInputClassName("other_notes")} resize-none`}
                            placeholder="Any special requests or dietary requirements..."
                          />
                        </FormField>

                        {/* Submit Button */}
                        <button
                          type="submit"
                          disabled={!isFormValid || isSubmitting}
                          className={submitButtonClassName}
                        >
                          {isSubmitting ? (
                            <>
                              <Spinner />
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

    return createPortal(modalContent, document.body);
  },
);

FramerModal.displayName = "FramerModal";

export default FramerModal;
