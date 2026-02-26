// app/afternoon-tea-booking/page.jsx
import React from "react";
import PagesBanner from "../../../components/PagesBanner/PagesBanner";
import AfternoonTeaBookingContent from "../../../components/pages/AfternoonTeaBooking/AfternoonTeaBooking";

const OG_IMAGE =
  "https://res.cloudinary.com/dhebgz7qh/image/upload/v1767443802/xvt7iw6wqrjw2ifcsxyk_mbwlqs.jpg";

export const metadata = {
  title: "Book Afternoon Tea | NOUR MAISON Restaurant & Café",
  description:
    "Reserve your Afternoon Tea experience at NOUR MAISON Milton Keynes. £29.95 per person with unlimited tea. French pâtisserie meets Middle Eastern flavors.",
  keywords: [
    "Afternoon Tea Milton Keynes",
    "Book Afternoon Tea",
    "Nour Maison Afternoon Tea",
    "halal afternoon tea",
    "French afternoon tea UK",
    "Middle Eastern afternoon tea",
    "afternoon tea booking",
    "halal high tea Milton Keynes",
    "best afternoon tea MK",
    "afternoon tea reservation",
    "Nour Maison booking",
    "halal patisserie",
    "afternoon tea experience",
    "Book Afternoon Tea online",
    "Afternoon Tea reservation UK",
  ],
  alternates: {
    canonical: "https://www.nourmaison.co.uk/afternoon-tea-booking",
  },
  openGraph: {
    title: "Book Afternoon Tea | Nour Maison – £29.95 per person",
    description:
      "Experience our unique Afternoon Tea - a fusion of French pâtisserie elegance and Middle Eastern flavors. Unlimited tea included.",
    url: "https://www.nourmaison.co.uk/afternoon-tea-booking",
    siteName: "Nour Maison",
    type: "website",
    locale: "en_GB",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Afternoon Tea at Nour Maison Milton Keynes",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Book Afternoon Tea at Nour Maison",
    description:
      "French & Middle Eastern Afternoon Tea in Milton Keynes. £29.95 per person. Book online now.",
    site: "@nourmaison",
  },
};

export default async function AfternoonTeaBookingPage() {
  return (
    <div>
      <PagesBanner
        title={"Afternoon Tea"}
        slogan={"A taste of elegance, a touch of tradition."}
        scrollTo={"booking"}
        images={[
          "https://res.cloudinary.com/dhebgz7qh/video/upload/v1772101467/afternoon_tea_section_menu_goocyq_balo8f.mp4",
        ]}
      />

      <AfternoonTeaBookingContent
        bg={
          "https://res.cloudinary.com/dhebgz7qh/image/upload/v1767443791/bznj0n2qms9qo0jxjvfc_rrmmu2.webp"
        }
      />
    </div>
  );
}
