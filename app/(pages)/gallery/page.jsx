import React from "react";
import Gallrey from "./_Gallery_client";

// metadata
const OG_IMAGE =
  "https://res.cloudinary.com/dhebgz7qh/image/upload/v1770472093/94e86fe2-f3a5-4210-9975-bcf800fc51d6.png";

export const metadata = {

  title: "Gallery | Nour Maison – Artisanal Food & Elegant Interiors",
  description:
    "Explore the Nour Maison gallery – a visual journey of our artisanal dishes, elegant interiors, and unique French–Middle Eastern ambiance in Milton Keynes.",

  alternates: {
    canonical: "https://www.nourmaison.co.uk/gallery",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  keywords: [
    "Nour Maison gallery",
    "Nour Maison photos",
    "Nour Maison food gallery",
    "Nour Maison Milton Keynes",
    "restaurant ambiance photos",
    "elegant restaurant interiors",
    "artisanal food photography",
    "French Middle Eastern restaurant",
    "halal restaurant Milton Keynes",
    "Instagrammable restaurants Milton Keynes",
    "beautiful restaurants in Milton Keynes",
    "restaurant gallery Milton Keynes",
    "brunch spots Milton Keynes",
  ],

  openGraph: {
    type: "website",
    url: "https://www.nourmaison.co.uk/gallery",
    siteName: "Nour Maison",
    locale: "en_GB",
    title: "Gallery | Nour Maison – Artisanal Food & Elegant Interiors",
    description:
      "Explore the Nour Maison gallery – artisanal dishes, elegant interiors, and a French–Middle Eastern ambiance in Milton Keynes.",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Nour Maison Gallery – food and interiors",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Gallery | Nour Maison",
    description:
      "A visual journey through Nour Maison: artisanal dishes, elegant interiors, and signature ambiance in Milton Keynes.",
    images: [OG_IMAGE],
    // site: "@nourmaisonuk",    // حطه لو موجود فعلاً
    // creator: "@nourmaisonuk", // اختياري
  },

  category: "Gallery",
};


const Page = () => {
  return (
    <div>
      <Gallrey />
    </div>
  );
};

export default Page;
