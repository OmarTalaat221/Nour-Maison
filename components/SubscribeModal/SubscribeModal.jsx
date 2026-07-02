"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";
import axios from "axios";
import { toast, Toaster } from "react-hot-toast";
import "./style.css";

const SubscribeModal = ({ onClose }) => {
    const [email, setEmail] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isClosing, setIsClosing] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const submitRef = useRef(false);

    // ✅ Trigger entrance animation
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Small delay for entrance animation
        const timer = setTimeout(() => setIsVisible(true), 50);
        return () => clearTimeout(timer);
    }, []);

    // ✅ Handle close with exit animation
    const handleClose = useCallback(() => {
        setIsClosing(true);
        setIsVisible(false);
        setTimeout(() => {
            onClose();
        }, 500);
    }, [onClose]);

    // ✅ ESC key to close
    useEffect(() => {
        const handleEsc = (e) => {
            if (e.key === "Escape") handleClose();
        };
        window.addEventListener("keydown", handleEsc);
        return () => window.removeEventListener("keydown", handleEsc);
    }, [handleClose]);

    // ✅ Submit handler
    const handleSubmit = useCallback(
        async (e) => {
            e.preventDefault();

            if (submitRef.current) return;
            if (!email.trim()) {
                toast.error("Please enter your email", {
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

            submitRef.current = true;
            setIsSubmitting(true);

            try {
                const { data } = await axios.post(
                    "https://camp-coding.tech/nour_maison/user/add_subscriber.php",
                    JSON.stringify({ email: email.trim() }),
                    {
                        headers: { "Content-Type": "text/plain" },
                    }
                );

                if (data?.status === "error") {
                    throw new Error(data?.message || "Something went wrong.");
                }

                // ✅ Save to localStorage permanently
                try {
                    localStorage.setItem("nm_subscribed", "true");
                    localStorage.setItem(
                        "nm_subscribed_at",
                        Date.now().toString()
                    );
                } catch (err) {
                    console.error("localStorage error:", err);
                }

                setIsSuccess(true);

                // Auto close after success
                setTimeout(() => {
                    handleClose();
                }, 3500);
            } catch (error) {
                const errorMsg =
                    error?.response?.data?.message ||
                    error?.message ||
                    "Failed to subscribe. Please try again.";

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
            } finally {
                setIsSubmitting(false);
                submitRef.current = false;
            }
        },
        [email, handleClose]
    );

    return (
        <>
            <Toaster position="top-center" reverseOrder={false} />

            {/* ✅ Backdrop */}
            <div
                className={`nm-modal-backdrop ${isVisible ? "nm-modal-backdrop--visible" : ""}`}
                onClick={handleClose}
                aria-hidden="true"
            />

            {/* ✅ Modal Panel */}
            <div
                className={`nm-modal-panel ${isVisible ? "nm-modal-panel--visible" : ""}`}
                role="dialog"
                aria-modal="true"
                aria-labelledby="nm-modal-title"
            >
                {/* Close Button */}
                <button
                    type="button"
                    onClick={handleClose}
                    aria-label="Close subscribe modal"
                    className="nm-modal-close"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <line x1="18" y1="6" x2="6" y2="18" />
                        <line x1="6" y1="6" x2="18" y2="18" />
                    </svg>
                </button>

                {/* Decorative top border */}
                <div className="nm-modal-top-border" aria-hidden="true" />

                {/* Background pattern */}
                <div className="nm-modal-pattern" aria-hidden="true" />

                <div className="nm-modal-content">
                    {!isSuccess ? (
                        <>
                            {/* ✅ Discount Badge */}
                            <div className="nm-modal-badge">
                                <span className="nm-modal-badge-label">
                                    Exclusive Offer
                                </span>
                                <span className="nm-modal-badge-value">
                                    10% OFF
                                </span>
                            </div>

                            {/* ✅ Title */}
                            <h2
                                id="nm-modal-title"
                                className="nm-modal-title"
                            >
                                Join the Nour Maison Family
                            </h2>

                            {/* ✅ Subtitle */}
                            <p className="nm-modal-subtitle">
                                Subscribe and receive a{" "}
                                <span className="nm-modal-highlight">
                                    10% welcome discount
                                </span>{" "}
                                on your next visit, plus exclusive offers,
                                seasonal treats, and special event invites.
                            </p>

                            {/* ✅ Form */}
                            <form
                                onSubmit={handleSubmit}
                                className="nm-modal-form"
                            >
                                <input
                                    type="email"
                                    required
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="Enter your email address"
                                    aria-label="Email address"
                                    className="nm-modal-input"
                                    disabled={isSubmitting}
                                />

                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    aria-label="Claim My Discount"
                                    className={`nm-modal-submit global-shimmer-btn ${isSubmitting ? "nm-modal-submit--loading" : ""}`}
                                >
                                    <span className="nm-modal-submit-text">
                                        {isSubmitting
                                            ? "Sending..."
                                            : "Claim My 10% Discount"}
                                    </span>
                                </button>
                            </form>

                            {/* ✅ Disclaimer */}
                            <p className="nm-modal-disclaimer">
                                By subscribing, you agree to receive marketing
                                emails. You can unsubscribe at any time.
                            </p>
                        </>
                    ) : (
                        <div className="nm-modal-success">
                            {/* Success icon */}
                            <div className="nm-modal-success-icon">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="48"
                                    height="48"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <path d="M20 6 9 17l-5-5" />
                                </svg>
                            </div>

                            <h3 className="nm-modal-success-title">
                                Welcome Aboard!
                            </h3>

                            <p className="nm-modal-success-text">
                                Your{" "}
                                <span className="nm-modal-highlight">
                                    10% discount
                                </span>{" "}
                                is on its way to your inbox. Check your email
                                and start exploring exclusive offers from{" "}
                                <span className="nm-modal-brand">
                                    Nour Maison
                                </span>
                                .
                            </p>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
};

export default SubscribeModal;