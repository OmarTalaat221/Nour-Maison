import React from "react";
import MenuClient from "./_menuClient";

const OG_IMAGE =
  "https://res.cloudinary.com/dhebgz7qh/image/upload/v1769095229/download_11_rjqdfc.png";

export const metadata = {
  metadataBase: new URL("https://www.nourmaison.co.uk"),

  title: "Menu Gallery | Nour Maison – Halal Sweets in Milton Keynes",
  description:
    "Explore our dessert menu at Nour Maison – halal French and Middle Eastern sweets, pastries, and treats in Milton Keynes.",

  keywords: [
    "Nour Maison dessert menu",
    "halal desserts Milton Keynes",
    "French pastries Milton Keynes",
    "Middle Eastern sweets",
    "cakes Milton Keynes",
    "pancakes Milton Keynes",
    "halal cafe Milton Keynes",
  ],

  alternates: {
    canonical: "https://www.nourmaison.co.uk/menu-gallery",
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

  openGraph: {
    type: "website",
    url: "https://www.nourmaison.co.uk/menu",
    siteName: "Nour Maison Cafe",
    title: "Dessert Menu | Nour Maison – Halal Sweets in Milton Keynes",
    description:
      "Explore our dessert menu at Nour Maison – halal French and Middle Eastern sweets, pastries, and treats in Milton Keynes.",
    locale: "en_GB",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Nour Maison Dessert Menu",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Dessert Menu | Nour Maison – Halal Sweets in Milton Keynes",
    description:
      "Explore our dessert menu at Nour Maison – halal French and Middle Eastern sweets, pastries, and treats in Milton Keynes.",
    images: [OG_IMAGE],
  },

  category: "Menu",
};

const page = () => {
  return (
    <main>
      <MenuClient />
    </main>
  );
};

export default page;
