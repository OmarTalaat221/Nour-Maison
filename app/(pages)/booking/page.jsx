import React from "react";
// import Booking2 from "./Booking2";
import PagesBanner from "../../../components/PagesBanner/PagesBanner";
import BookingConent from "../../../components/pages/Booking/BookingContent";

const OG_IMAGE =
  "https://res.cloudinary.com/dhebgz7qh/image/upload/v1770471922/96cb5bb4-29e3-410f-ad35-69dd1cbdd203.png";

//metadata
export const metadata = {
  title: "Book a Table | NOUR MAISON Restaurant & Café",
  description:
    "Reserve your table at NOUR MAISON for elegant halal dining in Milton Keynes. Enjoy fine cuisine, cozy ambiance, and quick online booking.",
  keywords: [
    "Book a table Milton Keynes",
    "Nour Maison reservation",
    "halal restaurant Milton Keynes",
    "French Middle Eastern food",
    "halal brunch Milton Keynes",
    "family dining restaurant UK",
    "book halal food online",
    "Milton Keynes halal cuisine",
    "Middle Eastern halal booking",
    "halal fine dining",
    "halal-friendly restaurant",
    "book French restaurant MK",
    "best halal restaurant in Milton Keynes",
    "halal dinner reservation",
    "reserve Nour Maison table",
    "book table online UK",
    "Nour Maison Milton Keynes booking",
    "halal food online booking",
    "Book a Table",
    "online booking",
    "Reserve your table",
    "Best place to book dinner in UK ",
    "Restaurant reservation online",
    "Book a table NOUR MAISON",
  ],
  alternates: {
    canonical: "https://www.nourmaison.co.uk/booking",
  },
  openGraph: {
    title: "Book a Table | Nour Maison – Halal French & Middle Eastern Restaurant",
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
    site: "@nourmaison", // ضع حساب تويتر إن وجد
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
            "https://res.cloudinary.com/dhebgz7qh/image/upload/v1767443801/t9noktexya7m7o2dtum4_hbidy9.jpg",
            "https://res.cloudinary.com/dhebgz7qh/image/upload/v1767443801/sdw9jufkrx0onoo2vwfp_wnzcjx.jpg",
            "https://res.cloudinary.com/dhebgz7qh/image/upload/v1767443802/kgkdwtofzolvzkb6oyh5_p6m5cg.jpg",
          ]}
        />

        <BookingConent />
      </div>
    </>
  );
}
