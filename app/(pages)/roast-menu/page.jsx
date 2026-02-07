// app/(whatever)/roast-dinner/page.tsx

import React from "react";
import Image from "next/image";
import PagesBanner from "../../../components/PagesBanner/PagesBanner";
import BottomBg from "./../../../utils/bottomBg/BottomBg";
import Script from "next/script";

const siteUrl = "https://www.nourmaison.co.uk"; // <-- غيّره للدومين الحقيقي
const pathname = "/roast-menu"; // <-- غيّره للمسار الحقيقي
const url = `${siteUrl}${pathname}`;

const title =
  "Roast Dinner Menu | Nour Maison Café – A Sunday Ritual with Arabic Flair";
const description =
  "Discover Nour Maison Café's Roast Dinner Menu — where Arabic spice meets French finesse to reimagine the classic British roast. Halal-friendly, locally sourced ingredients, and a soulful Sunday dining ritual in Egypt.";

export const metadata = {

  title,
  description,

  alternates: {
    canonical: url,
  },

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
    url,
    title,
    description,
    siteName: "Nour Maison Café",
    locale: "en_US",
    images: [
      {
        url: "/images/rc.webp", // لازم يكون قابل للوصول
        width: 1200,
        height: 630,
        alt: "Nour Maison Café roast dinner menu board with Sunday roast dishes",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/images/rc.webp"],
  },
};

const RoastDinnerMenuPage = () => {
  // ✅ JSON-LD (Menu + Restaurant)
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Menu",
    name: "Nour Maison Café Roast Dinner Menu",
    description,
    url,
    inLanguage: "en",
    isPartOf: {
      "@type": "Restaurant",
      name: "Nour Maison Café",
      url: siteUrl,
      servesCuisine: ["French", "Middle Eastern", "Fusion"],
      // لو عندك عنوان/تليفون حطّهم هنا
      address: {
        "@type": "PostalAddress",
        addressCountry: "EG",
        addressLocality: "Cairo",
      },
    },
  };

  return (
    <div>
      {/* ✅ Structured Data */}
      <Script
        id="roast-menu-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ✅ Visible semantic heading (أفضل من sr-only للـ SEO/UX) */}
      <header className="sr-only">
        <h1>
          Nour Maison Café Roast Dinner Menu – Sunday Halal Roast with Arabic
          Spice and French Finesse
        </h1>
        <p>
          Halal-friendly Sunday roast in Egypt with locally sourced ingredients,
          crafted as a comforting ritual.
        </p>
      </header>

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
        aria-labelledby="roast-menu-heading"
      >
        <BottomBg />

        {/* ✅ Helpful H2 for semantics */}
        <h2 id="roast-menu-heading" className="sr-only">
          Roast Dinner Menu Board
        </h2>

        {/* ✅ next/image (أفضل للـ SEO + الأداء + LCP) */}
        <div className="w-full max-w-2xl xl:max-w-4xl mx-auto relative">
          <Image
            src="/images/rc.webp"
            alt="Nour Maison Café roast dinner menu board with Sunday roast dishes"
            width={1400}
            height={1800}
            className="w-full h-auto rounded-3xl relative"
            priority // لو الصورة دي هي أول حاجة كبيرة على الصفحة (LCP)
            sizes="(max-width: 768px) 92vw, (max-width: 1280px) 800px, 1100px"
          />
        </div>

        {/* ✅ “SEO support text” (خفيف ومفيد) */}
        <section className="sr-only" aria-label="Roast dinner details">
          <p>
            Our roast dinner menu blends a classic British Sunday roast with
            Arabic spices and French cooking finesse. Ideal for families and
            groups looking for a halal-friendly roast dinner experience in
            Egypt.
          </p>
          <p>
            Browse the full menu board above, then book your table to enjoy a
            comforting Sunday ritual with locally sourced ingredients.
          </p>
        </section>
      </main>
    </div>
  );
};

export default RoastDinnerMenuPage;
