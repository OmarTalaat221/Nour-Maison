// app/(whatever)/roast-dinner/page.tsx  ← example path (App Router)

import React from "react";
import PagesBanner from "../../../components/PagesBanner/PagesBanner";
import BottomBg from "./../../../utils/bottomBg/BottomBg";

// ✅ SEO Metadata for Nour Maison Roast Dinner Menu
export const metadata = {
  title:
    "Roast Dinner Menu | Nour Maison Café – A Sunday Ritual with Arabic Flair",
  description:
    "Discover Nour Maison Café’s Roast Dinner Menu – where Arabic spice meets French finesse to reimagine the classic British roast. Halal-friendly, locally sourced ingredients, and a soulful Sunday dining ritual in Egypt.",
  keywords: [
    "Nour Maison roast dinner",
    "Sunday roast Egypt",
    "halal roast dinner",
    "French Arabic fusion roast",
    "Nour Maison café menu",
    "roast dinner menu Cairo",
    "family roast dinner Egypt",
    "British roast with Arabic twist",
  ],
};

const RoastDinnerMenuPage = () => {
  return (
    <div>
      {/* 🔹 Accessible SEO H1 for search engines */}
      <h1 className="sr-only">
        Nour Maison Café Roast Dinner Menu – Sunday Halal Roast with Arabic
        Spice and French Finesse
      </h1>

      <PagesBanner
        bottomBg={false}
        images={[
          "/images/download (1).jfif",
          "/images/download (2).jfif",
          "/images/download (3).jfif",
          "/images/download (4).jfif",
        ]}
        slogan={
          <div className="text-lg md:text-2xl xl:text-3xl">
            A Sunday ritual where Arabic spice meets French finesse to reimagine
            the classic British roast. Halal-friendly, <br /> locally sourced,
            and crafted with soul. Book your table now.
          </div>
        }
        title={"Experience Our New Roast Dinner Menu"}
        scrollTo={"roast-dinner-menu"}
      />

      <main
        id="roast-dinner-menu"
        className="w-full relative py-36 mt-[-120px] z-10"
        style={{
          background: "url('/images/rd bg paper texture.webp')",
          backgroundSize: "cover",
          backgroundPosition: "top",
          backgroundRepeat: "no-repeat",
        }}
      >
        <BottomBg />

        <img
          src="/images/rc.webp"
          className="w-full max-w-2xl xl:max-w-4xl mx-auto rounded-3xl relative"
          alt="Nour Maison Café roast dinner menu board with Sunday roast dishes"
          loading="lazy"
        />
      </main>
    </div>
  );
};

export default RoastDinnerMenuPage;
