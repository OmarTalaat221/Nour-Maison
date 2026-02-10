import React from "react";
import MenuClassic from "./_ClientMenuClassic";

// metadata
// metadata
export const metadata = {
  metadataBase: new URL("https://www.nourmaison.co.uk/"), // ✅ عدّل للدومين الحقيقي لو مختلف

  title: "Menu | Nour Maison – Halal French & Middle Eastern Brunch in Milton Keynes",
  description:
    "Explore the Nour Maison menu: French & Middle Eastern halal brunch, elegant pancakes, premium coffee, and cozy breakfast options in Milton Keynes.",

  keywords: [
    "Nour Maison menu",
    "halal brunch Milton Keynes",
    "French brunch Milton Keynes",
    "Middle Eastern brunch",
    "pancakes Milton Keynes",
    "coffee Milton Keynes",
    "breakfast Milton Keynes",
    "halal cafe Milton Keynes",
  ],

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
    title: "Menu | Nour Maison – Halal French & Middle Eastern Brunch in Milton Keynes",
    description:
      "Explore the Nour Maison menu: French & Middle Eastern halal brunch, elegant pancakes, premium coffee, and cozy breakfast options in Milton Keynes.",
    locale: "en_GB",
    images: [
      {
        url: "https://res.cloudinary.com/dhebgz7qh/image/upload/v1767447622/f76djjyilyjfpzpjmryl_puk2vj.webp", // ✅ حط صورة فعلية في public/og/menu.jpg (أو بدّلها)
        width: 1200,
        height: 630,
        alt: "Nour Maison Menu",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Menu | Nour Maison – Halal French & Middle Eastern Brunch in Milton Keynes",
    description:
      "Explore the Nour Maison menu: French & Middle Eastern halal brunch, elegant pancakes, premium coffee, and cozy breakfast options in Milton Keynes.",
    images: ["https://res.cloudinary.com/dhebgz7qh/image/upload/v1767447622/f76djjyilyjfpzpjmryl_puk2vj.webp"],
    // site: "@nourmaisonuk",    // لو عندك
    // creator: "@nourmaisonuk", // لو عندك
  },

  // Optional but nice
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
