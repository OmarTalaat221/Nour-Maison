// app/(whatever)/ramadan-iftar-menu-milton-keynes/page.tsx

import React from "react";
import Image from "next/image";
import PagesBanner from "../../../components/PagesBanner/PagesBanner";
import Script from "next/script";
import "./style.css";

const siteUrl = "https://www.nourmaison.co.uk";
const pathname = "/ramadan-iftar-menu-milton-keynes";
const url = `${siteUrl}${pathname}`;

const title =
  "Best Iftar Menu Milton Keynes 2025 | 5-Course Halal £35 | Nour Maison";
const description =
  "Looking for the best Iftar in Milton Keynes? Book your Ramadan table at Nour Maison for a premium 5-course halal Iftar menu at £35. Family offers: 10% off for 4+, kids under 10 eat free. Served at Maghrib daily.";
const ogImage = `${siteUrl}/images/ramadan-iftar-menu.jpeg`;

export const metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,

  alternates: {
    canonical: url,
  },

  keywords: [
    "Best Iftar Milton Keynes",
    "Best Iftar menu in Milton Keynes",
    "Iftar near me",
    "Halal Iftar near me Milton Keynes",
    "Family Iftar Milton Keynes",
    "Halal Iftar Restaurant Milton Keynes",
    "Iftar Menu Milton Keynes",
    "Iftar restaurant near me",
    "Halal Ramadan dinner",
    "Ramadan restaurant MK",
    "Halal restaurant Ramadan MK",
    "Iftar Milton Keynes",
    "Ramadan dining Milton Keynes",
    "5 course Iftar menu UK",
    "Halal restaurant Milton Keynes",
    "Ramadan 2025 Milton Keynes",
    "Middle Eastern restaurant MK",
    "Where to break fast Milton Keynes",
    "Iftar deals Milton Keynes",
    "Ramadan special menu MK",
    "Best Ramadan restaurant Milton Keynes",
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
    title: "Best Iftar Menu Milton Keynes 2025 | Nour Maison",
    description,
    siteName: "Nour Maison Café",
    locale: "en_GB",
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: "Best Ramadan Iftar Menu Milton Keynes 2025 – 5 Course Halal Dining at Nour Maison",
        type: "image/jpeg",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Best Iftar Menu Milton Keynes 2025 | Nour Maison",
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

const RamadanIftarMenuPage = () => {
  const jsonLd = [
    // ✅ Schema 1: WebPage + Restaurant + Offer
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "@id": `${url}#webpage`,
      url: url,
      name: "Ramadan Iftar Menu in Milton Keynes | Nour Maison",
      description: description,
      inLanguage: "en-GB",
      datePublished: "2025-01-15",
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
          name: "Book a Ramadan Iftar Table",
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
        image:
          "https://res.cloudinary.com/dhebgz7qh/image/upload/v1767452496/y3replc9wmlnvwb7kjvo_hyo3u3.png",
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
        "@type": "Offer",
        "@id": `${url}#offer`,
        name: "Ramadan Iftar Menu – 5 Course Meal",
        url: url,
        price: "35",
        priceCurrency: "GBP",
        availability: "https://schema.org/InStock",
        validFrom: "2025-02-28",
        validThrough: "2025-03-30",
        category: "Ramadan Iftar",
        eligibleRegion: "GB",
        offeredBy: {
          "@type": "Restaurant",
          "@id": `${siteUrl}/#restaurant`,
        },
        description:
          "A curated 5-course halal iftar served at Maghrib. On arrival: Medjoul dates, seasonal fresh fruits, and a Ramadan special drink (Qamar Al-Deen, Tamarind, or Rose Lemonade). 10% off for families of 4+ and kids under 10 eat free.",
        itemOffered: {
          "@type": "FoodService",
          name: "Halal Ramadan Iftar Experience",
          provider: {
            "@type": "Restaurant",
            "@id": `${siteUrl}/#restaurant`,
          },
          areaServed: {
            "@type": "City",
            name: "Milton Keynes",
          },
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
            name: "Ramadan Iftar Menu Milton Keynes",
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
          name: "Where can I find the best Ramadan iftar in Milton Keynes?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Nour Maison offers a premium Ramadan iftar experience in Milton Keynes with a curated 5-course halal menu for £35 per person, served at Maghrib, blending Middle Eastern warmth with French finesse.",
          },
        },
        {
          "@type": "Question",
          name: "How much does the Ramadan iftar menu cost?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The 5-course Ramadan iftar menu is £35 per person. Families of 4 or more receive 10% off, and children under 10 eat free.",
          },
        },
        {
          "@type": "Question",
          name: "Is the Ramadan iftar menu halal?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Nour Maison is a fully halal restaurant and our Ramadan iftar menu is 100% halal certified.",
          },
        },
        {
          "@type": "Question",
          name: "Do I need to book for iftar?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Booking is strongly recommended, especially for weekends and large groups, as Ramadan iftar tables fill quickly. Book online at nourmaison.co.uk/booking",
          },
        },
        {
          "@type": "Question",
          name: "What time is iftar served?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Iftar is served daily at Maghrib time throughout Ramadan 2025 (February 28th - March 30th).",
          },
        },
        {
          "@type": "Question",
          name: "What is included in the iftar menu?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The 5-course iftar includes: On arrival - Medjoul dates, seasonal fruits, and Ramadan drinks (Qamar Al-Deen, Tamarind, or Rose Lemonade). Followed by Harira soup, artisan starters, signature mains with Middle Eastern and French fusion, and traditional Ramadan desserts.",
          },
        },
        {
          "@type": "Question",
          name: "Are there any family offers for iftar?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes! Families of 4 or more receive 10% discount on the total bill, and children under 10 years old eat completely free.",
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

    // ✅ Schema 3: FoodEvent
    {
      "@context": "https://schema.org",
      "@type": "FoodEvent",
      "@id": `${url}#event`,
      name: "Ramadan Iftar 2025 at Nour Maison Milton Keynes",
      description:
        "Join us for the best Ramadan Iftar experience in Milton Keynes. 5-course halal menu served at Maghrib for £35 per person with family discounts.",
      url: url,
      image: ogImage,
      startDate: "2025-02-28",
      endDate: "2025-03-30",
      eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
      eventStatus: "https://schema.org/EventScheduled",
      location: {
        "@type": "Restaurant",
        "@id": `${siteUrl}/#restaurant`,
      },
      organizer: {
        "@type": "Restaurant",
        name: "Nour Maison",
        url: siteUrl,
      },
      offers: [
        {
          "@type": "Offer",
          name: "5-Course Iftar Menu",
          price: "35.00",
          priceCurrency: "GBP",
          availability: "https://schema.org/InStock",
          validFrom: "2025-02-28",
          validThrough: "2025-03-30",
          url: `${siteUrl}/booking`,
        },
        {
          "@type": "Offer",
          name: "Family Discount (4+)",
          description: "10% off for families of four or more",
          eligibleQuantity: {
            "@type": "QuantitativeValue",
            minValue: 4,
          },
        },
        {
          "@type": "Offer",
          name: "Kids Eat Free",
          description: "Children under 10 eat free",
          price: "0",
          priceCurrency: "GBP",
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
          id={`ramadan-schema-${index}`}
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}

      {/* ✅ Banner Section */}
      <PagesBanner
        bottomBg={false}
        images={[
          "https://res.cloudinary.com/dkc5klynm/image/upload/v1771434323/HKE09820_1_e43fwl.webp",
          "https://res.cloudinary.com/dkc5klynm/image/upload/v1771434499/HKE09789_itafrw.webp",
          "https://res.cloudinary.com/dkc5klynm/image/upload/v1771434496/HKE09816_e7ojrs.webp",
          "https://res.cloudinary.com/dkc5klynm/image/upload/v1771434831/HKE09822_1_khyolt.webp",
        ]}
        slogan={
          <div className="text-base sm:text-lg md:text-2xl xl:text-3xl px-2">
            Join us at Nour Maison for a luxurious halal iftar blending Middle
            Eastern soul with modern French cuisine.
          </div>
        }
        title={"Break your fast in elegance this Ramadan at Nour Maison"}
        scrollTo={"ramadan-iftar-menu"}
      />

      {/* ✅ Main Content Section */}
      <main
        id="ramadan-iftar-menu"
        className="w-full relative py-20 sm:py-28 md:py-36 mt-[-80px] sm:mt-[-100px] md:mt-[-120px] z-10 overflow-hidden"
        style={{
          background:
            "url('https://res.cloudinary.com/dkc5klynm/image/upload/v1771510442/Pattern_fia8ft.webp')",
          backgroundSize: "cover",
          backgroundPosition: "top",
          backgroundRepeat: "no-repeat",
        }}
        aria-labelledby="ramadan-menu-heading"
      >
        {/* ✅ Wave Anchor Strip */}
        <div
          className="wave-strip absolute inset-x-0 top-0 z-30 pointer-events-none"
          style={{
            backgroundImage:
              "url('https://res.cloudinary.com/dkc5klynm/image/upload/v1771510442/Pattern_fia8ft.webp')",
          }}
        />

        {/* ✅ Heading & Description */}
        <header className="w-full max-w-[90%] sm:max-w-2xl md:max-w-3xl lg:max-w-4xl xl:max-w-5xl mx-auto px-3 sm:px-4 md:px-6 text-center mb-8 sm:mb-10 md:mb-14 relative z-10">
          <h1
            id="ramadan-menu-heading"
            className="font-nour text-dairyCream text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl mb-4 sm:mb-5 md:mb-7 leading-tight tracking-wide"
            style={{
              textShadow:
                "3px 3px 6px rgba(0,0,0,0.7), 0 0 20px rgba(0,0,0,0.5)",
            }}
          >
            A Blessed Ramadan Iftar
            <span
              className="block mt-1 sm:mt-2 text-goldenOrange"
              style={{
                textShadow:
                  "2px 2px 5px rgba(0,0,0,0.8), 0 0 15px rgba(0,0,0,0.6)",
              }}
            >
              in Milton Keynes
            </span>
          </h1>

          <div className="bg-black/40 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-7 w-full mx-auto">
            <p className="font-oswald text-white text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed md:leading-loose">
              Celebrate Ramadan at Nour Maison in Milton Keynes with our
              exclusive 5-course Iftar menu. Served at Maghrib, our carefully
              curated halal dining experience brings together Middle Eastern and
              French flavours, starting with Harira soup and Medjool dates,
              followed by artisan starters, signature mains, and indulgent
              Ramadan desserts.
            </p>

            <p className="font-nour text-dairyCream text-sm sm:text-base md:text-lg lg:text-xl mt-3 sm:mt-4 leading-relaxed">
              Perfect for families and group gatherings, with{" "}
              <strong className="text-goldenOrange font-bold">
                10% off for families of four
              </strong>{" "}
              and{" "}
              <strong className="text-goldenOrange font-bold">
                kids under 10 eating free
              </strong>
              .
            </p>
          </div>
        </header>

        {/* ✅ Menu Image */}
        <div className="w-full max-w-[95%] sm:max-w-xl md:max-w-2xl lg:max-w-3xl xl:max-w-5xl mx-auto relative px-2 sm:px-4 z-10">
          <Image
            src="https://res.cloudinary.com/dkc5klynm/image/upload/v1771510919/22_vkxlyt.webp"
            alt="Best Ramadan Iftar Menu Milton Keynes 2025 - 5 Course Halal Dining Experience at Nour Maison"
            width={1400}
            height={1800}
            className="w-full h-auto rounded-2xl sm:rounded-3xl relative"
            priority
            sizes="(max-width: 640px) 95vw, (max-width: 768px) 90vw, (max-width: 1024px) 80vw, (max-width: 1280px) 800px, 1100px"
          />
        </div>

        {/* ✅ Offer Cards with Shimmer */}
        <section
          className="w-full max-w-[95%] sm:max-w-xl md:max-w-3xl lg:max-w-4xl xl:max-w-5xl mx-auto px-2 sm:px-4 mt-8 sm:mt-12 md:mt-16 grid grid-cols-3 gap-2 sm:gap-4 md:gap-6 relative z-10"
          aria-label="Iftar menu offers and pricing"
        >
          {/* Price Card */}
          <article className="shimmer bg-white bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 border border-gray-100 rounded-xl sm:rounded-2xl p-3 sm:p-5 md:p-6 text-center shadow-lg hover:bg-opacity-30 transition-all duration-300">
            <div className="font-seasons text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-goldenOrange mb-1 sm:mb-2">
              £35
            </div>
            <p className="font-playfair text-white text-xs sm:text-sm md:text-lg font-medium">
              per person
            </p>
            <p className="font-nour text-[10px] sm:text-xs md:text-sm text-white/80 mt-1 hidden sm:block">
              5-course Iftar experience
            </p>
          </article>

          {/* Family Offer Card */}
          <article className="shimmer bg-white bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 border border-gray-100 rounded-xl sm:rounded-2xl p-3 sm:p-5 md:p-6 text-center shadow-lg hover:bg-opacity-30 transition-all duration-300">
            <div className="font-seasons text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-goldenOrange mb-1 sm:mb-2">
              10<span className="font-nour">%</span>
            </div>
            <p className="font-playfair text-white text-xs sm:text-sm md:text-lg font-medium">
              Family Discount
            </p>
            <p className="font-nour text-[10px] sm:text-xs md:text-sm text-white/80 mt-1 hidden sm:block">
              For families of four
            </p>
          </article>

          {/* Kids Free Card */}
          <article className="shimmer bg-white bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 border border-gray-100 rounded-xl sm:rounded-2xl p-3 sm:p-5 md:p-6 text-center shadow-lg hover:bg-opacity-30 transition-all duration-300">
            <div className="font-seasons text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-goldenOrange mb-1 sm:mb-2">
              FREE
            </div>
            <p className="font-playfair text-white text-xs sm:text-sm md:text-lg font-medium">
              Kids Eat Free
            </p>
            <p className="font-nour text-[10px] sm:text-xs md:text-sm text-white/80 mt-1 hidden sm:block">
              Children under 10
            </p>
          </article>
        </section>

        {/* ✅ CTA Section */}
        <section className="w-full max-w-[95%] sm:max-w-xl md:max-w-3xl lg:max-w-4xl xl:max-w-5xl mx-auto px-3 sm:px-4 mt-10 sm:mt-14 md:mt-20 relative z-10">
          <div className="bg-gradient-to-br from-black/50 to-black/30 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 text-center border border-goldenOrange/30 shadow-2xl">
            <h2
              className="font-seasons text-goldenOrange text-xl sm:text-2xl md:text-3xl lg:text-4xl mb-3 sm:mb-4 md:mb-5 leading-snug"
              style={{
                textShadow: "2px 2px 4px rgba(0,0,0,0.6)",
              }}
            >
              Looking for the best iftar in Milton Keynes?
            </h2>

            <p className="font-playfair text-dairyCream text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed md:leading-loose max-w-3xl mx-auto">
              Book your Ramadan table at{" "}
              <span className="font-nour text-goldenOrange font-semibold">
                Nour Maison
              </span>{" "}
              and enjoy a{" "}
              <span className="text-white font-medium">
                premium halal iftar experience
              </span>{" "}
              with family and friends this Ramadan.
            </p>

            {/* ✅ CTA Button with Shimmer */}
            <div className="flex items-center justify-center gap-3 sm:gap-4 mt-5 sm:mt-6 md:mt-8 mb-6 sm:mb-8">
              <a
                href="https://www.nourmaison.co.uk/booking"
                className="shimmer-btn inline-block bg-goldenOrange hover:bg-goldenOrange/90 text-white hover:text-white hover:no-underline font-nour text-base sm:text-lg md:text-xl px-8 sm:px-12 py-3 sm:py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                aria-label="Book your Iftar table at Nour Maison Milton Keynes"
              >
                Book Your Iftar Table
              </a>
            </div>
          </div>
        </section>

        {/* ✅ SEO Hidden Content */}
        <section
          className="sr-only"
          aria-label="Ramadan Iftar menu details and FAQs"
        >
          <h2>Best Iftar Menu in Milton Keynes 2025</h2>
          <p>
            Looking for the best Iftar menu in Milton Keynes? Nour Maison offers
            a premium 5-course halal Iftar dining experience for just £35 per
            person. Our Ramadan 2025 menu is served at Maghrib time and includes
            traditional Harira soup, Medjool dates, artisan starters, signature
            mains with Middle Eastern and French fusion flavours, and indulgent
            Ramadan desserts.
          </p>

          <h2>Family Iftar Offers Milton Keynes</h2>
          <p>
            We welcome families and groups with special offers: 10% discount for
            families of four and children under 10 eat free. Traditional Ramadan
            drinks included. Book your table today for the best halal Iftar
            restaurant near you in Milton Keynes.
          </p>

          <h2>Halal Ramadan Restaurant MK</h2>
          <p>
            Nour Maison is the perfect halal Ramadan restaurant in MK for family
            Iftar gatherings, group celebrations, and an authentic Ramadan
            dining experience. Our restaurant combines French culinary
            techniques with Middle Eastern flavours to create a unique halal
            dining experience in Milton Keynes.
          </p>

          <h2>Ramadan 2025 Iftar Milton Keynes</h2>
          <p>
            Join us for Ramadan 2025 at Nour Maison Café. Our special Iftar menu
            is available throughout the holy month from February 28th to March
            30th, served daily at Maghrib time. Perfect for breaking fast with
            family and friends in a warm, welcoming atmosphere.
          </p>

          <h2>Frequently Asked Questions</h2>

          <h3>What is the best Iftar restaurant in Milton Keynes?</h3>
          <p>
            Nour Maison is widely regarded as the best Iftar restaurant in
            Milton Keynes, offering a premium 5-course halal menu for £35 per
            person.
          </p>

          <h3>How much does Iftar cost at Nour Maison?</h3>
          <p>
            Our 5-course Iftar menu is £35 per person. We offer 10% discount for
            families of four or more, and children under 10 eat free.
          </p>

          <h3>What time is Iftar served?</h3>
          <p>Iftar is served at Maghrib time daily throughout Ramadan 2025.</p>

          <h3>Is Nour Maison halal?</h3>
          <p>Yes, Nour Maison is a fully halal restaurant.</p>

          <h3>Do I need to book for Iftar?</h3>
          <p>
            Yes, we recommend booking in advance especially for large groups.
          </p>

          <h3>What is included in the Iftar menu?</h3>
          <p>
            On arrival: Medjoul dates, seasonal fruits, and Ramadan drinks.
            Followed by Harira soup, artisan starters, signature mains, and
            Ramadan desserts.
          </p>

          <h2>Iftar Near Me Milton Keynes</h2>
          <p>
            Searching for Iftar near me in Milton Keynes? Nour Maison is your
            best choice for premium halal Iftar dining at 149 Grafton Gate,
            Milton Keynes, MK9 1AE.
          </p>

          <h2>Where to Break Fast in Milton Keynes</h2>
          <p>
            Looking for where to break fast in Milton Keynes this Ramadan? Nour
            Maison provides an elegant setting for Iftar with authentic Middle
            Eastern dishes prepared with French culinary expertise.
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

export default RamadanIftarMenuPage;
