// app/(whatever)/afternoon-tea-menu/page.jsx

import React from "react";
import Image from "next/image";
import PagesBanner from "../../../components/PagesBanner/PagesBanner";
import Script from "next/script";
import AfternoonTeaCTA from "./_components/AfternoonTeaCTA";
import "./style.css";
import FloatingElements from "./_components/FloatingElements";

const siteUrl = "https://www.nourmaison.co.uk";
const pathname = "/afternoon-tea-menu";
const url = `${siteUrl}${pathname}`;

// ✅ SEO Optimized
const title = "Best Afternoon Tea in Milton Keynes | Halal | Nour Maison Café";
const description =
  "Looking for the best afternoon tea in Milton Keynes? Nour Maison offers a refined halal afternoon tea menu — French patisserie meets Middle Eastern flavours. Sweet treats, savoury bites & unlimited premium tea for £29.95. Book now!";

const ogImage =
  "https://res.cloudinary.com/dhebgz7qh/image/upload/v1767535312/jpuklhijc9vofwlhiz4m_ug1pp7.jpg";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,

  alternates: {
    canonical: url,
  },

  keywords: [
    "best afternoon tea Milton Keynes",
    "afternoon tea near me",
    "halal afternoon tea Milton Keynes",
    "Nour Maison afternoon tea",
    "afternoon tea Milton Keynes",
    "French patisserie Milton Keynes",
    "Middle Eastern afternoon tea",
    "afternoon tea menu UK",
    "halal afternoon tea UK",
    "afternoon tea MK",
    "luxury afternoon tea Milton Keynes",
    "afternoon tea for celebrations",
    "birthday afternoon tea Milton Keynes",
    "Nour Maison café menu",
    "sweet treats and savoury bites",
    "fusion afternoon tea",
    "elegant afternoon tea experience",
  ],

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
    title: "Best Afternoon Tea in Milton Keynes | Nour Maison",
    description,
    siteName: "Nour Maison Café",
    locale: "en_GB",
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: "Best Afternoon Tea in Milton Keynes at Nour Maison - Halal French & Middle Eastern Fusion",
        type: "image/jpeg",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Best Afternoon Tea in Milton Keynes | Nour Maison",
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

export default function AfternoonTeaMenuPage() {
  const jsonLd = [
    // ✅ Schema 1: WebPage + Restaurant + Menu + Offer
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "@id": `${url}#webpage`,
      url: url,
      name: "Best Afternoon Tea in Milton Keynes | Nour Maison Café",
      description: description,
      inLanguage: "en-GB",
      datePublished: "2026-02-23",
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
          name: "Book Afternoon Tea at Nour Maison",
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
        name: "Nour Maison Café & Brasserie",
        url: siteUrl,
        telephone: "+44-1908-772177",
        image: ogImage,
        logo: `${siteUrl}/images/logo.png`,
        servesCuisine: ["French", "Middle Eastern", "Fusion", "Halal"],
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
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "4.9",
          reviewCount: "132",
        },
        sameAs: [
          "https://www.instagram.com/nourmaison",
          "https://www.facebook.com/nourmaison",
        ],
      },

      mainEntity: {
        "@type": "Menu",
        "@id": `${url}#menu`,
        name: "Nour Maison Afternoon Tea Menu",
        url: url,
        description: description,
        inLanguage: "en",
        hasMenuSection: {
          "@type": "MenuSection",
          name: "Afternoon Tea Selection",
          description:
            "A refined fusion of French patisserie and Middle Eastern flavours — sweet treats and savoury selections crafted for a calm, elegant afternoon.",
          hasMenuItem: [
            {
              "@type": "MenuItem",
              name: "Full Afternoon Tea Experience",
              description:
                "Includes sweet treats, savoury bites, and unlimited premium loose leaf tea",
              offers: {
                "@type": "Offer",
                price: "29.95",
                priceCurrency: "GBP",
              },
            },
          ],
        },
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
            name: "Afternoon Tea Menu",
            item: url,
          },
        ],
      },
    },

    // ✅ Schema 2: FAQPage
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "@id": `${url}#faq`,
      mainEntity: [
        {
          "@type": "Question",
          name: "Where can I find the best afternoon tea in Milton Keynes?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Nour Maison offers the best afternoon tea experience in Milton Keynes, blending French patisserie with Middle Eastern flavours for a unique and elegant halal dining experience at £29.95 per person.",
          },
        },
        {
          "@type": "Question",
          name: "How much does afternoon tea cost at Nour Maison?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Our Full Afternoon Tea is £29.95 per person and includes a selection of sweet treats, savoury bites, and unlimited premium loose leaf tea.",
          },
        },
        {
          "@type": "Question",
          name: "Is the afternoon tea at Nour Maison halal?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Nour Maison is a fully halal restaurant and our afternoon tea menu is 100% halal certified.",
          },
        },
        {
          "@type": "Question",
          name: "Do I need to book for afternoon tea?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Booking is highly recommended, especially for weekends, special occasions, and groups. Book online at nourmaison.co.uk or call +44 1908 772177.",
          },
        },
        {
          "@type": "Question",
          name: "What is included in the afternoon tea menu?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Our afternoon tea includes handcrafted sweet treats such as eclairs, pistachio baklava rolls, mini macarons, and petit fours, alongside savoury bites like mini croissants with smoked salmon and cream cheese, truffle egg rolls with rocket and parmesan, plus unlimited premium loose leaf tea.",
          },
        },
        {
          "@type": "Question",
          name: "Is afternoon tea suitable for celebrations?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Absolutely! Our afternoon tea is perfect for birthdays, hen parties, baby showers, anniversaries, and any special occasion. Contact us for group bookings and special arrangements.",
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
      ],
    },

    // ✅ Schema 3: Product (Afternoon Tea as a Product/Service)
    {
      "@context": "https://schema.org",
      "@type": "Product",
      "@id": `${url}#product`,
      name: "Afternoon Tea at Nour Maison",
      description:
        "The best afternoon tea in Milton Keynes - a refined fusion of French patisserie and Middle Eastern flavours with sweet treats, savoury bites, and unlimited premium tea.",
      image: ogImage,
      brand: {
        "@type": "Brand",
        name: "Nour Maison",
      },
      offers: {
        "@type": "Offer",
        price: "29.95",
        priceCurrency: "GBP",
        availability: "https://schema.org/InStock",
        url: url,
        seller: {
          "@type": "Restaurant",
          name: "Nour Maison Café",
        },
      },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.9",
        reviewCount: "132",
      },
    },
  ];

  return (
    <div>
      {/* ✅ Structured Data */}
      {jsonLd.map((schema, index) => (
        <Script
          key={index}
          id={`afternoon-tea-schema-${index}`}
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}

      {/* ✅ Banner Section */}
      <PagesBanner
        bottomBg={true}
        images={[
          "https://res.cloudinary.com/dkc5klynm/video/upload/v1771769055/afternoon_tea_section_menu_goocyq.mp4",
        ]}
        slogan={
          <div className="text-base sm:text-lg md:text-2xl xl:text-3xl px-2">
            A refined afternoon ritual where French patisserie meets Middle
            Eastern warmth.
            <br />
            Sweet treats, savoury bites, and a tea experience made to be
            savoured.
          </div>
        }
        title={"Afternoon Tea Menu"}
        scrollTo={"afternoon-tea-menu"}
      />

      {/* ✅ Main Content Section */}
      <main
        id="afternoon-tea-menu"
        className="w-full relative py-20 sm:py-28 md:py-36 mt-[-80px] sm:mt-[-100px] md:mt-[-120px] z-10 overflow-hidden"
        aria-labelledby="afternoon-tea-menu-heading"
      >
        {/* <FloatingElements /> */}
        {/* ✅ Header Section */}
        <header className="w-full max-w-[90%] sm:max-w-2xl md:max-w-3xl lg:max-w-4xl xl:max-w-5xl mx-auto px-3 sm:px-4 md:px-6 text-center mb-8 sm:mb-10 md:mb-14 mt-10 relative z-10">
          <p className="font-pacifico text-goldenOrange text-xl sm:text-2xl md:text-3xl lg:text-4xl mb-2 sm:mb-3">
            Nour Maison Brasserie
          </p>

          <h1
            id="afternoon-tea-menu-heading"
            className="font-seasons text-softMintGreen text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl mb-3 sm:mb-4 md:mb-5 leading-tight tracking-wide"
          >
            The Best <span className="text-goldenOrange">Afternoon Tea</span>
            <span className="block mt-1 sm:mt-2">in Milton Keynes</span>
          </h1>

          <p className="font-playfair text-whiteGray text-base sm:text-lg md:text-xl leading-relaxed md:leading-loose max-w-5xl mx-auto">
            Welcome to{" "}
            <span className="text-goldenOrange font-semibold">Nour Maison</span>{" "}
            — home of the finest afternoon tea in Milton Keynes, blending{" "}
            <span className="text-softMintGreen font-semibold">
              French patisserie elegance
            </span>{" "}
            with{" "}
            <span className="text-goldenOrange font-semibold">
              Middle Eastern flavours
            </span>{" "}
            in a true fusion experience. Our{" "}
            <span className="text-softMintGreen font-semibold">
              halal afternoon tea menu
            </span>{" "}
            is crafted for quiet afternoons, special occasions, and anyone
            searching for the best afternoon tea near me.
            <br />
            <span className="text-logoGold font-medium">
              Handcrafted sweet treats and savoury bites
            </span>
            , designed to be savoured and shared.
          </p>
        </header>

        {/* ✅ Menu Image */}
        <div className="w-full max-w-[95%] sm:max-w-xl md:max-w-2xl lg:max-w-3xl xl:max-w-5xl mx-auto relative px-2 sm:px-4 z-10">
          <Image
            src={ogImage}
            alt="Best Afternoon Tea Menu in Milton Keynes - Nour Maison Halal French & Middle Eastern Fusion"
            width={1400}
            height={1800}
            className="w-full h-auto rounded-2xl sm:rounded-3xl relative shadow-2xl"
            priority
            sizes="(max-width: 640px) 95vw, (max-width: 768px) 90vw, (max-width: 1024px) 80vw, (max-width: 1280px) 800px, 1100px"
          />
        </div>

        {/* ✅ Offer Cards */}
        <section
          className="w-full max-w-[95%] sm:max-w-xl md:max-w-3xl lg:max-w-4xl xl:max-w-5xl mx-auto px-2 sm:px-4 mt-8 sm:mt-12 md:mt-16 grid grid-cols-3 gap-2 sm:gap-4 md:gap-6 relative z-10"
          aria-label="Afternoon Tea pricing and features"
        >
          <article className="mint-glass-card rounded-xl sm:rounded-2xl p-2.5 sm:p-4 md:p-5 lg:p-6 text-center">
            <div className="font-pacifico text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-dairyCream mb-0.5 sm:mb-1 md:mb-2 relative z-10 drop-shadow-md">
              £29.95
            </div>
            <p className="font-playfair text-white text-[10px] xs:text-xs sm:text-sm md:text-base lg:text-lg font-medium relative z-10 drop-shadow-sm">
              per person
            </p>
            <p className="font-nour text-[8px] xs:text-[9px] sm:text-xs md:text-sm text-white/80 mt-0.5 sm:mt-1 hidden xs:block relative z-10">
              Full Afternoon Tea
            </p>
          </article>

          <article className="mint-glass-card rounded-xl sm:rounded-2xl p-2.5 sm:p-4 md:p-5 lg:p-6 text-center">
            <div className="font-pacifico text-base xs:text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-dairyCream mb-0.5 sm:mb-1 md:mb-2 py-0.5 sm:py-1 md:py-2 relative z-10 drop-shadow-md">
              Unlimited
            </div>
            <p className="font-playfair text-white text-[10px] xs:text-xs sm:text-sm md:text-base lg:text-lg font-medium relative z-10 drop-shadow-sm">
              Tea Included
            </p>
            <p className="font-nour text-[8px] xs:text-[9px] sm:text-xs md:text-sm text-white/80 mt-0.5 sm:mt-1 hidden xs:block relative z-10">
              Premium loose leaf
            </p>
          </article>

          <article className="mint-glass-card rounded-xl sm:rounded-2xl p-2.5 sm:p-4 md:p-5 lg:p-6 text-center">
            <div className="font-pacifico text-base xs:text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-dairyCream mb-0.5 sm:mb-1 md:mb-2 py-0.5 sm:py-1 md:py-2 relative z-10 drop-shadow-md">
              Fusion{" "}
            </div>
            <p className="font-playfair text-white text-[10px] xs:text-xs sm:text-sm md:text-base lg:text-lg font-medium relative z-10 drop-shadow-sm">
              Sweet & Savoury
            </p>
            <p className="font-nour text-[8px] xs:text-[9px] sm:text-xs md:text-sm text-white/80 mt-0.5 sm:mt-1 hidden xs:block relative z-10">
              French & Middle Eastern
            </p>
          </article>
        </section>

        <AfternoonTeaCTA />

        <section
          className="sr-only"
          aria-label="Afternoon Tea menu details and FAQs"
        >
          <h2>Best Afternoon Tea in Milton Keynes</h2>
          <p>
            Looking for the best afternoon tea in Milton Keynes? Nour Maison
            offers a refined halal afternoon tea experience at £29.95 per
            person, blending French patisserie artistry with Middle Eastern
            flavours. Our menu includes handcrafted sweet treats, delicate
            savoury bites, and unlimited premium loose leaf tea.
          </p>

          <h2>What's Included in Our Afternoon Tea</h2>
          <p>
            Enjoy a curated selection of sweet treats such as eclairs, pistachio
            baklava rolls, mini macarons, and sweet petit fours, alongside
            savoury bites like mini croissants with smoked salmon and cream
            cheese, plus truffle egg rolls with rocket and parmesan. All served
            with unlimited premium loose leaf tea.
          </p>

          <h2>Halal Afternoon Tea Milton Keynes</h2>
          <p>
            Nour Maison is a fully halal-certified restaurant offering the best
            afternoon tea in Milton Keynes. Perfect for celebrations, birthdays,
            hen parties, baby showers, or a relaxing afternoon with friends and
            family.
          </p>

          <h2>Afternoon Tea Near Me</h2>
          <p>
            Searching for afternoon tea near me in Milton Keynes? Nour Maison is
            your best choice at 149 Grafton Gate, Milton Keynes, MK9 1AE. Book
            online or call +44 1908 772177.
          </p>

          <h2>Frequently Asked Questions</h2>

          <h3>Where is the best afternoon tea in Milton Keynes?</h3>
          <p>
            Nour Maison is widely regarded as the best afternoon tea in Milton
            Keynes, offering a unique fusion of French and Middle Eastern
            flavours at £29.95 per person.
          </p>

          <h3>How much does afternoon tea cost?</h3>
          <p>
            Our Full Afternoon Tea is £29.95 per person and includes unlimited
            premium loose leaf tea.
          </p>

          <h3>Is the afternoon tea halal?</h3>
          <p>Yes, Nour Maison is a fully halal-certified restaurant.</p>

          <h3>Do I need to book?</h3>
          <p>
            Yes, we recommend booking in advance especially for weekends and
            special occasions.
          </p>

          <h2>Contact Information</h2>
          <p>
            Address: 149 Grafton Gate, Milton Keynes, MK9 1AE. Phone: +44 1908
            772177. Book online at nourmaison.co.uk
          </p>
        </section>
      </main>
    </div>
  );
}
