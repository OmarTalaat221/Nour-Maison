"use client";

import React from "react";
import Link from "next/link";

/**
 * CTA Buttons Component for Blog Rich Text
 * Pure glassy card with elegant details + shimmer animations
 */
const CTAButtons = ({
    title,
    subtitle,
    bookingLink = "/booking",
    menuLink = "/menu",
    bookingText = "Book Now",
    menuText = "View Menu",
    showBooking = true,
    showMenu = true,
}) => {
    if (!showBooking && !showMenu) return null;

    return (
        <>
            {/* ✅ Shimmer Animations - using regular style tag */}
            <style
                dangerouslySetInnerHTML={{
                    __html: `
                        @keyframes ctaCardShimmer {
                            0% { transform: translateX(-150%) skewX(-15deg); }
                            100% { transform: translateX(250%) skewX(-15deg); }
                        }
                        @keyframes ctaButtonShimmer {
                            0% { transform: translateX(-150%) skewX(-20deg); }
                            100% { transform: translateX(250%) skewX(-20deg); }
                        }
                        .cta-card-shimmer-anim {
                            position: absolute;
                            top: 0;
                            left: 0;
                            width: 40%;
                            height: 100%;
                            background-color: rgba(255, 255, 255, 0.18);
                            animation: ctaCardShimmer 4s ease-in-out infinite;
                            pointer-events: none;
                            z-index: 1;
                            filter: blur(8px);
                        }
                        .cta-button-shimmer-anim {
                            position: absolute;
                            top: 0;
                            left: 0;
                            width: 35%;
                            height: 100%;
                            background-color: rgba(255, 255, 255, 0.35);
                            animation: ctaButtonShimmer 3s ease-in-out infinite;
                            pointer-events: none;
                            z-index: 1;
                            filter: blur(6px);
                        }
                        .cta-button-hover-shine-anim {
                            position: absolute;
                            top: 0;
                            left: 0;
                            width: 40%;
                            height: 100%;
                            background-color: rgba(255, 255, 255, 0.45);
                            transform: translateX(-150%);
                            transition: transform 0.7s ease;
                            pointer-events: none;
                            z-index: 2;
                            filter: blur(6px);
                        }
                        .group:hover .cta-button-hover-shine-anim {
                            transform: translateX(300%);
                        }
                    `,
                }}
            />

            <div className="cta-buttons-wrapper my-8 md:my-12 not-prose">
                {/* ✅ Pure Glassy Card */}
                <div className="relative overflow-hidden rounded-2xl p-6 md:p-8 lg:p-10 bg-white/20 backdrop-blur-2xl backdrop-saturate-150 border-2 border-softMintGreen/60 shadow-2xl before:absolute before:inset-0 before:bg-gradient-to-br before:from-white/30 before:via-transparent before:to-white/10 before:pointer-events-none before:rounded-2xl after:absolute after:inset-0 after:bg-gradient-to-tr after:from-transparent after:via-white/5 after:to-white/20 after:pointer-events-none after:rounded-2xl">
                    {/* ✅ Card Shimmer Animation */}
                    <span className="cta-card-shimmer-anim" aria-hidden="true" />

                    <div className="relative z-10 text-left">
                        {/* ✅ Title (اختياري) */}
                        {title && (
                            <div className="mb-6">
                                <h3 className="font-seasons text-2xl md:text-3xl lg:text-4xl text-goldenOrange font-bold leading-tight drop-shadow-md">
                                    {title}
                                </h3>

                                {subtitle && (
                                    <p className="font-lato text-softMintGreen text-sm md:text-base lg:text-lg mt-2 font-semibold drop-shadow-sm">
                                        {subtitle}
                                    </p>
                                )}
                            </div>
                        )}

                        {/* ✅ Buttons Container - Grid 2 columns متساويين */}
                        <div
                            className={`grid gap-3 sm:gap-4 ${showBooking && showMenu
                                ? "grid-cols-1 sm:grid-cols-2"
                                : "grid-cols-1"
                                }`}
                        >
                            {/* ✅ Book Now Button (Gold Orange) */}
                            {showBooking && (
                                <Link
                                    href={bookingLink}
                                    prefetch={false}
                                    aria-label="Book your table at Nour Maison Milton Keynes"
                                    className="group relative w-full inline-flex items-center justify-center px-6 py-3 md:py-3.5 bg-goldenOrange hover:bg-goldenOrange/95 text-white hover:text-white hover:no-underline font-seasons text-base md:text-lg font-bold rounded-full shadow-lg shadow-goldenOrange/40 hover:shadow-xl hover:shadow-goldenOrange/60 transform hover:-translate-y-0.5 transition-all duration-300 overflow-hidden border border-white/30"
                                >
                                    {/* ✅ Continuous Auto Shimmer */}
                                    <span
                                        className="cta-button-shimmer-anim"
                                        aria-hidden="true"
                                    />

                                    {/* ✅ Shine effect on hover */}
                                    <span
                                        className="cta-button-hover-shine-anim"
                                        aria-hidden="true"
                                    />

                                    <span className="relative z-10 drop-shadow-md">
                                        {bookingText}
                                    </span>
                                </Link>
                            )}

                            {/* ✅ View Menu Button (Green) */}
                            {showMenu && (
                                <Link
                                    href={menuLink}
                                    prefetch={false}
                                    aria-label="View our halal French and Middle Eastern menu"
                                    className="group relative w-full inline-flex items-center justify-center px-6 py-3 md:py-3.5 bg-softMintGreen hover:bg-softMintGreen/95 text-white hover:text-white hover:no-underline font-seasons text-base md:text-lg font-bold rounded-full shadow-lg shadow-softMintGreen/40 hover:shadow-xl hover:shadow-softMintGreen/60 transform hover:-translate-y-0.5 transition-all duration-300 overflow-hidden border border-white/30"
                                >
                                    {/* ✅ Continuous Auto Shimmer (delayed) */}
                                    <span
                                        className="cta-button-shimmer-anim"
                                        style={{ animationDelay: "1.5s" }}
                                        aria-hidden="true"
                                    />

                                    {/* ✅ Shine effect on hover */}
                                    <span
                                        className="cta-button-hover-shine-anim"
                                        aria-hidden="true"
                                    />

                                    <span className="relative z-10 drop-shadow-md">
                                        {menuText}
                                    </span>
                                </Link>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CTAButtons;