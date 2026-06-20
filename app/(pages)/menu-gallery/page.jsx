import React from "react";
import MenuClient from "./_menuClient";
import { getPageKeywords } from "../../../lib/seo/keywords";
import MenuGallerySchema from "./_components/MenuGallerySchema";

const OG_IMAGE =
  "/images/menu-brunch-coffee.webp";

export const metadata = {
  metadataBase: new URL("https://www.nourmaison.co.uk"),

  title: "Menu Gallery | Nour Maison Halal Desserts & Food Milton Keynes",
  description:
    "Explore Nour Maison's menu gallery in Milton Keynes — handcrafted halal desserts, pastries, brunch, and French Middle Eastern dishes inspired by tradition.",

  keywords: getPageKeywords("menuGallery"),

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
    url: "https://www.nourmaison.co.uk/menu-gallery",
    siteName: "Nour Maison Cafe",
    title: "Menu Gallery | Nour Maison – Halal Desserts & Food in Milton Keynes",
    description:
      "Explore our menu gallery at Nour Maison – halal French and Middle Eastern desserts, brunch, and food collection in Milton Keynes.",
    locale: "en_GB",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Nour Maison Menu Gallery - Halal French Middle Eastern Milton Keynes",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Menu Gallery | Nour Maison – Halal Desserts & Food in Milton Keynes",
    description:
      "Explore our menu gallery at Nour Maison – halal French and Middle Eastern desserts, brunch, and food in Milton Keynes.",
    images: [OG_IMAGE],
  },

  category: "Menu",
};

const page = () => {
  return (
    <main>
      {/* ✅ Menu Gallery Schema - SEO */}
      <MenuGallerySchema />

      <MenuClient />
    </main>
  );
};

export default page;