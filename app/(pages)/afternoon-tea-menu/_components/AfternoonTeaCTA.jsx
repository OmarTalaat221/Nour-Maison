// components/AfternoonTeaCTA.jsx
"use client";

import React, { useState } from "react";
import FramerModal from "../../../../components/InqueryModal";
import Link from "next/link";
// import FramerModal from "./";

const AfternoonTeaCTA = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const eventData = {
    title: "Afternoon Tea Booking",
    image:
      "https://res.cloudinary.com/dhebgz7qh/image/upload/v1767443802/xvt7iw6wqrjw2ifcsxyk_mbwlqs.jpg",
  };

  return (
    <>
      <section className="w-full max-w-[95%] sm:max-w-xl md:max-w-3xl lg:max-w-4xl xl:max-w-5xl mx-auto px-3 sm:px-4 mt-10 sm:mt-14 md:mt-20 relative z-10">
        <div className="text-center">
          {/* ✅ CTA Title */}
          <h2 className="font-seasons text-softMintGreen text-xl sm:text-2xl md:text-3xl lg:text-4xl mb-2 sm:mb-3 leading-snug">
            Ready to Indulge?
          </h2>

          {/* ✅ CTA Subtitle */}
          <p className="font-greatvibes text-goldenOrange text-lg sm:text-xl md:text-2xl lg:text-3xl mb-3 sm:mb-4">
            Book your afternoon tea experience
          </p>

          {/* ✅ CTA Description */}
          <p className="font-playfair text-whiteGray text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed md:leading-loose max-w-3xl mx-auto">
            Reserve your table at{" "}
            <span className="font-nour text-goldenOrange font-semibold">
              Nour Maison
            </span>{" "}
            and enjoy an elegant afternoon tea with{" "}
            <span className="text-softMintGreen">friends and family</span> in
            the heart of Milton Keynes. Perfect for birthdays, celebrations, or
            a relaxing afternoon escape.
          </p>

          {/* ✅ CTA Button - Opens Modal */}

          <div className="flex items-center justify-center gap-3 sm:gap-4 mt-5 sm:mt-6 md:mt-8">
            <Link
              href="/afternoon-tea-booking"
              aria-label="Book Afternoon Tea at Nour Maison"
              title="Book Afternoon Tea - £29.95 per person"
            >
              <button
                // onClick={() => setIsModalOpen(true)}
                className="shimmer-btn inline-block bg-softMintGreen hover:bg-sageGreen text-white hover:text-white font-oswald uppercase tracking-wider text-sm sm:text-base md:text-lg px-8 sm:px-12 py-3 sm:py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 cursor-pointer"
                aria-label="Book your Afternoon Tea table at Nour Maison Milton Keynes"
              >
                Book Your Table
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* ✅ Modal */}
      <FramerModal
        open={isModalOpen}
        setOpen={setIsModalOpen}
        event={eventData}
        onSuccess={() => {
          console.log("Booking request sent successfully!");
        }}
      />
    </>
  );
};

export default AfternoonTeaCTA;
