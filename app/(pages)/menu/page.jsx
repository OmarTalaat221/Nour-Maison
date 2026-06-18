import React from "react";
import MenuClassic from "./_ClientMenuClassic";
import { getPageKeywords } from "../../../lib/seo/keywords";

export const metadata = {
  metadataBase: new URL("https://www.nourmaison.co.uk/"),

  title: "Discover the Finest French and Middle Eastern Cuisine in Milton Keynes",
  description:
    "Enjoy a menu that blends French elegance with authentic Middle Eastern flavours in Milton Keynes. Discover Nour Maison's signature dishes and book your experience today.",
  keywords: getPageKeywords("menu"),
  alternates: {
    canonical: "https://www.nourmaison.co.uk/menu",
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
    title:
      "Menu | Nour Maison – Halal French & Middle Eastern Brunch in Milton Keynes",
    description:
      "Explore the Nour Maison menu: French & Middle Eastern halal brunch, elegant pancakes, premium coffee, and cozy breakfast options in Milton Keynes.",
    locale: "en_GB",
    images: [
      {
        url: "https://res.cloudinary.com/dhebgz7qh/image/upload/v1767447622/f76djjyilyjfpzpjmryl_puk2vj.webp",
        width: 1200,
        height: 630,
        alt: "Nour Maison Menu",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Menu | Nour Maison – Halal French & Middle Eastern Brunch in Milton Keynes",
    description:
      "Explore the Nour Maison menu: French & Middle Eastern halal brunch, elegant pancakes, premium coffee, and cozy breakfast options in Milton Keynes.",
    images: [
      "https://res.cloudinary.com/dhebgz7qh/image/upload/v1767447622/f76djjyilyjfpzpjmryl_puk2vj.webp",
    ],
  },

  category: "Menu",
};

const Page = () => {
  return (
    <div>
      <MenuClassic />
    </div>
  );
};

export default Page;