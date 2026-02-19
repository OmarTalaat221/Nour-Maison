// app/(whatever)/ramadan-iftar-menu-milton-keynes/page.tsx

import React from "react";
import Image from "next/image";
import PagesBanner from "../../../components/PagesBanner/PagesBanner";
import BottomBg from "../../../utils/bottomBg/BottomBg";
import Script from "next/script";
import { Metadata } from "next";

const siteUrl = "https://www.nourmaison.co.uk";
const pathname = "/ramadan-iftar-menu-milton-keynes";
const url = `${siteUrl}${pathname}`;

const title =
  "Ramadan Iftar Menu Milton Keynes – 5 Course £35 | Halal | Nour Maison";
const description =
  "Join us at Nour Maison in Milton Keynes for our special Ramadan Iftar Menu – a 5-course halal dining experience for £35 per person. Served at Maghrib with family offers, kids eat free, and traditional Ramadan drinks. Book your table today.";
const ogImage = `${siteUrl}/images/ramadan-iftar-menu.jpeg`;

export const metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,

  alternates: {
    canonical: url,
  },

  keywords: [
    "Best Iftar menu in Milton Keynes",
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
    title,
    description,
    siteName: "Nour Maison Café",
    locale: "en_GB",
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: "Nour Maison Ramadan Iftar Menu – 5 Course Halal Dining Experience in Milton Keynes",
        type: "image/jpeg",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [ogImage],
    creator: "@NourMaisonCafe",
    site: "@NourMaisonCafe",
  },

  category: "Restaurant",
};

const RamadanIftarMenuPage = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Menu",
        "@id": `${url}#menu`,
        name: "Nour Maison Ramadan Iftar Menu",
        description,
        url,
        inLanguage: "en-GB",
        mainEntityOfPage: url,
        offers: {
          "@type": "Offer",
          price: "35.00",
          priceCurrency: "GBP",
          description: "5-course Iftar menu per person",
          availability: "https://schema.org/InStock",
          validFrom: "2025-02-28",
          validThrough: "2025-03-30",
        },
        hasMenuSection: [
          {
            "@type": "MenuSection",
            name: "Iftar Menu",
            description:
              "5-course halal Iftar experience with Middle Eastern and French fusion",
          },
        ],
      },
      {
        "@type": "Restaurant",
        "@id": `${siteUrl}#restaurant`,
        name: "Nour Maison Café",
        url: siteUrl,
        logo: `${siteUrl}/images/logo.png`,
        image: ogImage,
        description:
          "Halal French-Middle Eastern fusion restaurant in Milton Keynes",
        servesCuisine: ["French", "Middle Eastern", "Fusion", "Halal"],
        priceRange: "££",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Your Street Address Here",
          addressLocality: "Milton Keynes",
          addressRegion: "Buckinghamshire",
          postalCode: "MK postcode",
          addressCountry: "GB",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: "52.0406",
          longitude: "-0.7594",
        },
        hasMenu: {
          "@id": `${url}#menu`,
        },
        acceptsReservations: "True",
        paymentAccepted: "Cash, Credit Card, Debit Card",
        currenciesAccepted: "GBP",
      },
      {
        "@type": "FoodEvent",
        "@id": `${url}#event`,
        name: "Ramadan Iftar at Nour Maison",
        description:
          "Celebrate Ramadan with our exclusive 5-course Iftar menu served at Maghrib. Family-friendly with special offers including 10% off for families of four and kids under 10 eat free.",
        url,
        image: ogImage,
        startDate: "2025-02-28",
        endDate: "2025-03-30",
        eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
        eventStatus: "https://schema.org/EventScheduled",
        location: {
          "@id": `${siteUrl}#restaurant`,
        },
        organizer: {
          "@id": `${siteUrl}#restaurant`,
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
          },
          {
            "@type": "Offer",
            name: "Family Discount",
            description: "10% off for families of four",
            discount: "10%",
          },
          {
            "@type": "Offer",
            name: "Kids Eat Free",
            description: "Children under 10 eat free",
            price: "0",
            priceCurrency: "GBP",
            eligibleCustomerType: "https://schema.org/Child",
          },
        ],
      },
      {
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
            name: "Ramadan Iftar Menu",
            item: url,
          },
        ],
      },
    ],
  };

  return (
    <div>
      {/* ✅ Structured Data */}
      <Script
        id="ramadan-iftar-menu-jsonld"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

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
            Celebrate Ramadan at Nour Maison in Milton Keynes with our exclusive
            5-course Iftar menu. Served at Maghrib, our carefully curated halal
            dining experience brings together Middle Eastern and French
            flavours.
          </div>
        }
        title={"The Best Ramadan Iftar Menu in Milton Keynes"}
        scrollTo={"ramadan-iftar-menu"}
      />

      {/* ✅ Main Content Section */}
      <main
        id="ramadan-iftar-menu"
        className="w-full relative py-20 sm:py-28 md:py-36 mt-[-80px] sm:mt-[-100px] md:mt-[-120px] z-10 overflow-hidden"
        style={{
          background:
            "url('https://res.cloudinary.com/dkc5klynm/image/upload/v1771436785/Pattern_aiinwd.png')",
          backgroundSize: "cover",
          backgroundPosition: "top",
          backgroundRepeat: "no-repeat",
        }}
        aria-labelledby="ramadan-menu-heading"
      >
        {/* ✅ الفوانيس - 3 فوانيس على اليمين - مخفية على الموبايل الصغير */}
        <div className="hidden sm:block absolute top-0 right-0 sm:right-2 md:right-4 lg:right-8 xl:right-16 z-20 pointer-events-none">
          <div className="lantern-swing">
            <Image
              src="https://res.cloudinary.com/dkc5klynm/image/upload/v1771439647/ramadan_lanterns_transparent_verzal.png"
              alt=""
              aria-hidden="true"
              width={200}
              height={400}
              className="w-[100px] sm:w-[120px] md:w-[150px] lg:w-[180px] xl:w-[220px] 2xl:w-[250px] h-auto"
            />
          </div>
        </div>

        {/* ✅ فانوس واحد على الشمال - مخفي على الموبايل الصغير */}
        <div className="hidden sm:block absolute top-0 left-0 sm:left-2 md:left-4 lg:left-8 xl:left-16 z-20 pointer-events-none">
          <div className="lantern-swing-slow">
            <Image
              src="https://res.cloudinary.com/dkc5klynm/image/upload/v1771439116/lantern1_transparent_m6zkl2.png"
              alt=""
              aria-hidden="true"
              width={150}
              height={350}
              className="w-[70px] sm:w-[80px] md:w-[100px] lg:w-[130px] xl:w-[160px] 2xl:w-[180px] h-auto"
            />
          </div>
        </div>

        <BottomBg />

        {/* ✅ Visible Heading & Description */}
        <header className="w-full max-w-[90%] sm:max-w-2xl md:max-w-3xl lg:max-w-4xl xl:max-w-5xl mx-auto px-3 sm:px-4 md:px-6 text-center mb-8 sm:mb-10 md:mb-14 relative z-10">
          <h1
            id="ramadan-menu-heading"
            className="font-nour text-dairyCream text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl mb-4 sm:mb-5 md:mb-7 leading-tight tracking-wide"
            style={{
              textShadow:
                "3px 3px 6px rgba(0,0,0,0.7), 0 0 20px rgba(0,0,0,0.5)",
            }}
          >
            The Best Ramadan Iftar Menu
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
            src="/images/22 (1).png"
            alt="Nour Maison Ramadan Iftar Menu – 5 Course Halal Dining Experience in Milton Keynes featuring Harira soup, Medjool dates, artisan starters, signature mains, and Ramadan desserts"
            width={1400}
            height={1800}
            className="w-full h-auto rounded-2xl sm:rounded-3xl relative"
            priority
            sizes="(max-width: 640px) 95vw, (max-width: 768px) 90vw, (max-width: 1024px) 80vw, (max-width: 1280px) 800px, 1100px"
          />
        </div>

        {/* ✅ Additional Info Cards */}
        <section
          className="w-full max-w-[95%] sm:max-w-xl md:max-w-3xl lg:max-w-4xl xl:max-w-5xl mx-auto px-2 sm:px-4 mt-8 sm:mt-12 md:mt-16 grid grid-cols-3 gap-2 sm:gap-4 md:gap-6 relative z-10"
          aria-label="Iftar menu offers"
        >
          {/* Price Card */}
          <article className="bg-white/95 backdrop-blur-sm rounded-xl sm:rounded-2xl p-3 sm:p-5 md:p-6 text-center shadow-xl border-2 border-goldenOrange/40 hover:border-goldenOrange transition-all duration-300">
            <div className="font-seasons text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-goldenOrange mb-1 sm:mb-2">
              £35
            </div>
            <p className="font-playfair text-gray-800 text-xs sm:text-sm md:text-lg font-medium">
              per person
            </p>
            <p className="font-nour text-[10px] sm:text-xs md:text-sm text-gray-600 mt-1 hidden sm:block">
              5-course Iftar experience
            </p>
          </article>

          {/* Family Offer Card */}
          <article className="bg-white/95 backdrop-blur-sm rounded-xl sm:rounded-2xl p-3 sm:p-5 md:p-6 text-center shadow-xl border-2 border-goldenOrange/40 hover:border-goldenOrange transition-all duration-300">
            <div className="font-seasons text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-goldenOrange mb-1 sm:mb-2">
              10%
            </div>
            <p className="font-playfair text-gray-800 text-xs sm:text-sm md:text-lg font-medium">
              Family Discount
            </p>
            <p className="font-nour text-[10px] sm:text-xs md:text-sm text-gray-600 mt-1 hidden sm:block">
              For families of four
            </p>
          </article>

          {/* Kids Free Card */}
          <article className="bg-white/95 backdrop-blur-sm rounded-xl sm:rounded-2xl p-3 sm:p-5 md:p-6 text-center shadow-xl border-2 border-goldenOrange/40 hover:border-goldenOrange transition-all duration-300">
            <div className="font-seasons text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-goldenOrange mb-1 sm:mb-2">
              FREE
            </div>
            <p className="font-playfair text-gray-800 text-xs sm:text-sm md:text-lg font-medium">
              Kids Eat Free
            </p>
            <p className="font-nour text-[10px] sm:text-xs md:text-sm text-gray-600 mt-1 hidden sm:block">
              Children under 10
            </p>
          </article>
        </section>

        {/* ✅ CTA Button */}
        <div className="w-full text-center mt-8 sm:mt-12 md:mt-16 relative z-10 px-4">
          <a
            href="https://www.nourmaison.co.uk/book-table"
            className="inline-block bg-goldenOrange hover:bg-goldenOrange/90 text-white font-nour text-base sm:text-lg md:text-xl px-8 sm:px-12 py-3 sm:py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            Book Your Iftar Table
          </a>
        </div>

        {/* ✅ SEO Support Text (sr-only) */}
        <section className="sr-only" aria-label="Ramadan Iftar menu details">
          <h2>Best Iftar Menu in Milton Keynes</h2>
          <p>
            Looking for the best Iftar menu in Milton Keynes? Nour Maison offers
            a premium 5-course halal Iftar dining experience for just £35 per
            person. Our Ramadan menu is served at Maghrib time and includes
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
            is available throughout the holy month, served daily at Maghrib
            time. Perfect for breaking fast with family and friends in a warm,
            welcoming atmosphere.
          </p>
        </section>
      </main>
    </div>
  );
};

export default RamadanIftarMenuPage;
