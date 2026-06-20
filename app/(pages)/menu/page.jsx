import React from "react";
import MenuClassic from "./_ClientMenuClassic";
import { getPageKeywords } from "../../../lib/seo/keywords";

export const metadata = {
  metadataBase: new URL("https://www.nourmaison.co.uk/"),

  title: "Halal French & Middle Eastern Menu in Milton Keynes | Nour Maison",
  description:
    "Discover Nour Maison's halal menu featuring French & Middle Eastern brunch, mains, desserts, specialty coffees, and craft drinks in Milton Keynes. Book your table today.",
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
      "Halal French & Middle Eastern Menu in Milton Keynes | Nour Maison",
    description:
      "Explore the Nour Maison menu: halal French & Middle Eastern brunch, signature dishes, premium coffee, and elegant desserts in Milton Keynes.",
    locale: "en_GB",
    images: [
      {
        url: "https://res.cloudinary.com/dhebgz7qh/image/upload/v1767447622/f76djjyilyjfpzpjmryl_puk2vj.webp",
        width: 1200,
        height: 630,
        alt: "Nour Maison Menu - Halal French & Middle Eastern Cuisine Milton Keynes",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Halal French & Middle Eastern Menu in Milton Keynes | Nour Maison",
    description:
      "Explore the Nour Maison menu: halal French & Middle Eastern brunch, premium coffee, and elegant desserts in Milton Keynes.",
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