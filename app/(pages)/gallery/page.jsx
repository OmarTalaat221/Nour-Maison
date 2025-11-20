import React from "react";
import Gallrey from "./_Gallery_client";

// metadata
export const metadata = {
  title: "Gallery | Nour Maison – Artisanal Food & Elegant Interiors",
  description:
    "Explore the Nour Maison gallery – a visual journey of our artisanal dishes, elegant interiors, and unique French-Middle Eastern ambiance in Milton Keynes.",
  alternates: {
    canonical: "https://www.nourmaison.co.uk/gallery",
  },
  keywords: [
    // Brand-specific
    "Nour Maison gallery",
    "Nour Maison photos",
    "Nour Maison restaurant images",
    "Nour Maison food gallery",
    "Nour Maison Milton Keynes",
    "inside Nour Maison",
    "Nour Maison decor photos",

    // Food presentation & artistry
    "artisanal food photography",
    "fine dining presentation",
    "elegant food plating",
    "chef-inspired dishes gallery",
    "gourmet food images",
    "halal gourmet dishes",
    "artistic food styling",
    "French cuisine photography",
    "Middle Eastern food gallery",
    "plated food visuals",
    "brunch food gallery",

    // Interior and ambiance
    "restaurant ambiance photos",
    "elegant restaurant interiors",
    "cozy dining space photos",
    "romantic restaurant setting",
    "halal restaurant design",
    "French-Middle Eastern ambiance",
    "restaurant decor inspiration",
    "modern brasserie look",
    "interior design halal restaurant",
    "Milton Keynes café interiors",

    // User intent/search behavior
    "see inside the restaurant",
    "restaurant photo gallery UK",
    "Instagrammable restaurants Milton Keynes",
    "beautiful restaurants in Milton Keynes",
    "best-looking cafés UK",
    "restaurants with cozy vibes",
    "where to eat and relax in MK",
    "picture-worthy restaurants",
    "halal restaurant gallery",
    "restaurant with aesthetic vibe",

    // Location-based
    "Milton Keynes dining gallery",
    "restaurant gallery Milton Keynes",
    "elegant restaurants Milton Keynes",
    "best restaurants in Milton Keynes with photos",
    "Middle Eastern food Milton Keynes",
    "brunch spots with photos Milton Keynes",
    "café gallery in Milton Keynes",
    "halal dining experience Milton Keynes",
  ],
};

const Page = () => {
  return (
    <div>
      <Gallrey />
    </div>
  );
};

export default Page;
