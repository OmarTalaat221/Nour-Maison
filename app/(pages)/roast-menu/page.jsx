// app/(pages)/roast-menu/page.jsx

import React from "react";
import Image from "next/image";
import PagesBanner from "../../../components/PagesBanner/PagesBanner";
import Script from "next/script";
import { getPageKeywords } from "../../../lib/seo/keywords";

const siteUrl = "https://www.nourmaison.co.uk";
const pathname = "/roast-menu";
const url = `${siteUrl}${pathname}`;

const title = "Halal Roast Dinner Menu Milton Keynes | Nour Maison Café";

const description =
  "Enjoy a premium halal roast dinner at Nour Maison Milton Keynes — where Arabic spices meet French finesse with locally sourced ingredients. Book your table today.";

const ogImage = `${siteUrl}/images/roast-menu-board.webp`;

export const metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,

  alternates: {
    canonical: url,
  },

  keywords: getPageKeywords("roastMenu"),

  authors: [{ name: "Nour Maison Café" }],
  creator: "Nour Maison Café",
  publisher: "Nour Maison Café",

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
    title: "Halal Roast Dinner Menu Milton Keynes | Nour Maison",
    description,
    siteName: "Nour Maison Café",
    locale: "en_GB",
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: "Halal Roast Dinner Menu Milton Keynes – Nour Maison Café",
        type: "image/webp",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Halal Roast Dinner Menu Milton Keynes | Nour Maison",
    description,
    images: [ogImage],
    creator: "@NourMaisonCafe",
    site: "@NourMaisonCafe",
  },

  category: "Restaurant",

  other: {
    "geo.region": "GB-MKY",
    "geo.placename": "Milton Keynes",
    "geo.position": "52.0406;-0.7594",
    ICBM: "52.0406, -0.7594",
  },
};

const RoastDinnerMenuPage = () => {
  const jsonLd = [
    // ============================================
    // ✅ Schema 1: WebPage + Restaurant + Menu
    // ============================================
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "@id": `${url}#webpage`,
      url: url,
      name: "Halal Roast Dinner Menu in Milton Keynes | Nour Maison",
      description: description,
      inLanguage: "en-GB",
      dateModified: new Date().toISOString().split("T")[0],

      potentialAction: {
        "@type": "ReserveAction",
        target: {
          "@type": "EntryPoint",
          urlTemplate: `${siteUrl}/booking`,
          actionPlatform: [
            "http://schema.org/DesktopWebPlatform",
            "http://schema.org/MobileWebPlatform",
          ],
        },
        result: {
          "@type": "FoodEstablishmentReservation",
          name: "Book a Roast Dinner Table",
        },
      },

      isPartOf: {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        name: "Nour Maison",
        url: siteUrl,
      },

      about: {
        "@type": "Restaurant",
        "@id": `${siteUrl}/#restaurant`,
        name: "Nour Maison",
        url: siteUrl,
        telephone: "+44-1908-772177",
        image: `${siteUrl}/images/nour-gold-logo.webp`,
        logo: `${siteUrl}/images/logo.png`,
        servesCuisine: [
          "French",
          "Middle Eastern",
          "Mediterranean",
          "Halal",
          "Fusion",
          "British",
        ],
        priceRange: "££",
        acceptsReservations: true,
        address: {
          "@type": "PostalAddress",
          streetAddress: "149 Grafton Gate",
          addressLocality: "Milton Keynes",
          addressRegion: "Buckinghamshire",
          postalCode: "MK9 1AE",
          addressCountry: "GB",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: "52.0406",
          longitude: "-0.7594",
        },
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "4.7",
          bestRating: "5",
          worstRating: "1",
          ratingCount: "850",
          reviewCount: "850",
        },
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Sunday"],
            opens: "10:00",
            closes: "22:00",
          },
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Friday", "Saturday"],
            opens: "10:00",
            closes: "23:00",
          },
        ],
        sameAs: [
          "https://www.instagram.com/nourmaison",
          "https://www.facebook.com/nourmaison",
        ],
      },

      breadcrumb: {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: siteUrl,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Roast Menu",
            item: url,
          },
        ],
      },
    },

    // ============================================
    // ✅ Schema 2: Menu
    // ============================================
    {
      "@context": "https://schema.org",
      "@type": "Menu",
      "@id": `${url}#menu`,
      name: "Halal Roast Dinner Menu",
      description:
        "A halal roast dinner blending British tradition with Arabic spices and French finesse — locally sourced and crafted with soul at Nour Maison Milton Keynes.",
      url: url,
      inLanguage: "en-GB",
      provider: {
        "@id": `${siteUrl}/#restaurant`,
      },
      image: ogImage,
      hasMenuSection: [
        {
          "@type": "MenuSection",
          name: "Halal Roast Dinner",
          description:
            "Premium halal roast dinner with Arabic spice and French finesse in Milton Keynes.",
          image: ogImage,
        },
      ],
    },

    // ============================================
    // ✅ Schema 3: FAQ
    // ============================================
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "@id": `${url}#faq`,
      mainEntity: [
        {
          "@type": "Question",
          name: "Where can I find the best halal roast dinner in Milton Keynes?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Nour Maison in Milton Keynes offers a premium halal roast dinner menu blending British tradition with Arabic spices and French culinary finesse. Located at 149 Grafton Gate, MK9 1AE.",
          },
        },
        {
          "@type": "Question",
          name: "Is Nour Maison's roast dinner halal?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, Nour Maison is a fully halal restaurant. Our entire roast dinner menu is 100% halal certified.",
          },
        },
        {
          "@type": "Question",
          name: "Do I need to book for the roast dinner?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, booking is highly recommended as tables fill up quickly. Reserve your table at nourmaison.co.uk/booking or call +441908772177.",
          },
        },
        {
          "@type": "Question",
          name: "What makes Nour Maison's roast different?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Our roast dinner blends classic British roast with authentic Arabic spices and French cooking techniques. We use locally sourced, halal-certified ingredients to create a unique fusion experience.",
          },
        },
        {
          "@type": "Question",
          name: "Where is Nour Maison located?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Nour Maison is located at 149 Grafton Gate, Milton Keynes, MK9 1AE. We're easily accessible with nearby parking available.",
          },
        },
        {
          "@type": "Question",
          name: "Is the roast dinner family-friendly?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Absolutely! Our roast dinner is perfect for families and groups. We also offer a dedicated kids menu for younger diners.",
          },
        },
      ],
    },
  ];

  return (
    <div>
      {/* ✅ Structured Data */}
      {jsonLd.map((schema, index) => (
        <Script
          key={index}
          id={`roast-schema-${index}`}
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}

      {/* ✅ Banner Section - useH1=true عشان يبقى H1 حقيقي */}
      <PagesBanner
        useH1={true}
        bottomBg={false}
        images={[
          "/images/roast-banner-1.webp",
          "/images/roast-banner-2.webp",
          "/images/roast-banner-3.webp",
          "/images/roast-banner-4.webp",
        ]}
        slogan={
          <div className="text-base sm:text-lg md:text-2xl xl:text-3xl px-2">
            A halal roast where Arabic spice meets French finesse to reimagine
            the classic British roast — locally sourced and crafted with soul.
          </div>
        }
        title={"Halal Roast Dinner Menu in Milton Keynes"}
        scrollTo={"roast-dinner-menu"}
      />

      {/* ✅ Main Content Section */}
      <main
        id="roast-dinner-menu"
        className="w-full relative py-20 sm:py-28 md:py-36 mt-[-80px] sm:mt-[-100px] md:mt-[-120px] z-10 overflow-hidden"
        style={{
          background: "url('/images/roast-paper-texture.webp')",
          backgroundSize: "cover",
          backgroundPosition: "top",
          backgroundRepeat: "no-repeat",
        }}
        aria-labelledby="roast-menu-heading"
      >
        {/* ✅ Heading & Description */}
        <header className="w-full max-w-[90%] sm:max-w-2xl md:max-w-3xl lg:max-w-4xl xl:max-w-5xl mx-auto px-3 sm:px-4 md:px-6 text-center mb-8 sm:mb-10 md:mb-14 relative z-10">
          <h2
            id="roast-menu-heading"
            className="font-nour text-logoGold text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl mb-4 sm:mb-5 md:mb-7 leading-tight tracking-wide"
            style={{
              textShadow:
                "2px 2px 5px rgba(0,0,0,0.4), 1px 1px 0 rgba(255,255,255,0.3)",
            }}
          >
            Crafted to Impress
            <span
              className="block mt-1 sm:mt-2 text-dairyCream"
              style={{
                textShadow:
                  "2px 2px 5px rgba(0,0,0,0.4), 1px 1px 0 rgba(255,255,255,0.3)",
              }}
            >
              Roasted to Perfection
            </span>
          </h2>

          <div className="bg-pestachio2/60 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-7 w-full mx-auto border-2 border-logoGold/30">
            <p className="font-oswald text-white text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed md:leading-loose">
              Discover Milton Keynes' finest halal roast dinner at Nour Maison.
              Our carefully crafted menu brings together the warmth of Middle
              Eastern spices, the elegance of French culinary techniques, and
              the comfort of a British roast — all in one unforgettable
              experience.
            </p>

            <p className="font-nour text-white text-sm sm:text-base md:text-lg lg:text-xl mt-3 sm:mt-4 leading-relaxed">
              Every dish is{" "}
              <h4 className="text-logoGold font-bold inline-block">
                100% halal certified
              </h4>{" "}
              and{" "}
              <h4 className="text-logoGold font-bold inline-block">
                locally sourced
              </h4>{" "}
              from trusted Milton Keynes suppliers.
            </p>
          </div>
        </header>

        {/* ✅ Menu Image (LCP) */}
        <div className="w-full max-w-[95%] sm:max-w-xl md:max-w-2xl lg:max-w-3xl xl:max-w-5xl mx-auto relative px-2 sm:px-4 z-10">
          <Image
            src="/images/roast-menu-board.webp"
            alt="Halal Roast Dinner Menu Milton Keynes - Nour Maison Café signature dishes with Arabic spice and French finesse"
            width={1400}
            height={1800}
            className="w-full h-auto rounded-2xl sm:rounded-3xl relative shadow-2xl"
            priority
            fetchPriority="high"
            sizes="(max-width: 640px) 95vw, (max-width: 768px) 90vw, (max-width: 1024px) 80vw, (max-width: 1280px) 800px, 1100px"
            quality={88}
          />
        </div>






        {/* ✅ SEO Hidden Content */}
        <section
          className="sr-only"
          aria-label="Roast dinner menu details and FAQs"
        >
          <h2>Best Halal Roast Dinner in Milton Keynes</h2>
          <p>
            Looking for the best halal roast dinner in Milton Keynes? Nour
            Maison offers a premium halal roast dining experience at our café
            and brasserie. Our menu blends classic British roast with authentic
            Arabic spices and French culinary finesse, served in a warm,
            family-friendly atmosphere.
          </p>

          <h2>Halal Roast Restaurant Milton Keynes</h2>
          <p>
            Nour Maison is your trusted halal roast restaurant in Milton Keynes,
            offering 100% halal certified meals crafted by award-winning chefs.
            Our roast dinner menu features locally sourced ingredients and
            innovative flavor combinations that have made us Best Café and
            Brasserie 2025.
          </p>

          <h2>Family Roast Dinner Milton Keynes</h2>
          <p>
            Perfect for family gatherings, group celebrations, and intimate
            dining occasions. Our restaurant offers a dedicated kids menu and a
            welcoming environment for diners of all ages in Milton Keynes.
          </p>

          <h2>Where to Find Halal Roast Near Me</h2>
          <p>
            Searching for halal roast near me in Milton Keynes? Nour Maison is
            conveniently located at 149 Grafton Gate, Milton Keynes, MK9 1AE.
            Easy to find with nearby parking available.
          </p>

          <h2>Frequently Asked Questions</h2>

          <h3>What is the best halal roast restaurant in Milton Keynes?</h3>
          <p>
            Nour Maison is widely regarded as the best halal roast restaurant
            in Milton Keynes, offering premium quality and unique fusion
            flavors.
          </p>

          <h3>Is Nour Maison fully halal?</h3>
          <p>
            Yes, Nour Maison is a fully halal restaurant. All our roast dinner
            menu items are 100% halal certified.
          </p>

          <h3>Do I need to book in advance?</h3>
          <p>
            Yes, we strongly recommend booking in advance, especially for
            weekends and family gatherings. Book online or call us directly.
          </p>

          <h3>Is the roast available every day?</h3>
          <p>
            Yes, our halal roast dinner menu is available throughout the week,
            with extended hours on Fridays and Saturdays.
          </p>

          <h2>Contact Information</h2>
          <p>
            Address: 149 Grafton Gate, Milton Keynes, MK9 1AE. Phone:
            +44-1908-772177. Book online at nourmaison.co.uk/booking
          </p>
        </section>
      </main>
    </div>
  );
};

export default RoastDinnerMenuPage;