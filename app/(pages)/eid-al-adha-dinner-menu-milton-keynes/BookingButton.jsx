"use client";

import useBookingUrl from "../../../Hooks/useBookingUrl";

export default function BookingButton() {
  const bookingUrl = useBookingUrl("https://www.nourmaison.co.uk/booking");

  return (
    <a
      href={bookingUrl}
      className="shimmer-btn inline-block bg-logoGold hover:bg-goldenOrange text-white hover:text-white hover:no-underline font-nour text-base sm:text-lg md:text-xl px-8 sm:px-12 py-3 sm:py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
      aria-label="Book your Eid Al-Adha dinner table at Nour Maison Milton Keynes"
    >
      Book Your Eid Table
    </a>
  );
}
