import React from "react";
import PagesBanner from "../../../components/PagesBanner/PagesBanner";
import BookingConent from "../../../components/pages/Booking/BookingContent";
import { getPageKeywords } from "../../../lib/seo/keywords";

const OG_IMAGE =
  "https://res.cloudinary.com/dhebgz7qh/image/upload/v1770471922/96cb5bb4-29e3-410f-ad35-69dd1cbdd203.png";

export const metadata = {
  title: "Reserve Your Table Now at Nour Maison and Enjoy Fine Dining in Milton Keynes",
  description:
    "Book your table at Nour Maison today and enjoy an exceptional dining experience with premium French and Middle Eastern cuisine and unforgettable flavours.",
  keywords: getPageKeywords("booking"),

  alternates: {
    canonical: "https://www.nourmaison.co.uk/booking",
  },

  openGraph: {
    title:
      "Book a Table | Nour Maison – Halal French & Middle Eastern Restaurant",
    description:
      "Reserve your spot at Nour Maison, Milton Keynes. Enjoy elegant halal dining with a unique blend of French & Middle Eastern flavors.",
    url: "https://www.nourmaison.co.uk/booking",
    siteName: "Nour Maison",
    type: "website",
    locale: "en_GB",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Book a table at Nour Maison in Milton Keynes",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Book Your Table at Nour Maison",
    description:
      "French & Middle Eastern halal restaurant in Milton Keynes. Book online in seconds.",
    site: "@nourmaison",
  },
};

export default async function BookingPage() {
  return (
    <>
      <div>
        <PagesBanner
          title={"Book A Table"}
          slogan={"Reserve your seat, taste the extraordinary."}
          scrollTo={"booking"}
          images={[
            "/videos/booking-home-about.webm",
          ]}
        />

        <BookingConent />
      </div>
    </>
  );
}