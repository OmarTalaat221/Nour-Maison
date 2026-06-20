import React, { Suspense } from "react";
import PagesBanner from "../../../components/PagesBanner/PagesBanner";
import BookingConent from "../../../components/pages/Booking/BookingContent";
import { getPageKeywords } from "../../../lib/seo/keywords";
import RedirectTracker from "./_components/RedirectTracker";

const siteUrl = "https://www.nourmaison.co.uk";
const url = `${siteUrl}/booking`;

// ✅ الصورة المحسّنة محلياً
const OG_IMAGE = `${siteUrl}/images/booking-og.webp`;

export const metadata = {
  metadataBase: new URL(siteUrl),
  title:
    "Book a Table | Nour Maison – Halal French & Middle Eastern Restaurant Milton Keynes",
  description:
    "Book your table at Nour Maison Milton Keynes today and enjoy an exceptional halal dining experience with premium French and Middle Eastern cuisine. Reserve online in seconds.",
  keywords: getPageKeywords("booking"),

  alternates: {
    canonical: url,
  },

  openGraph: {
    title:
      "Book a Table | Nour Maison – Halal French & Middle Eastern Restaurant",
    description:
      "Reserve your spot at Nour Maison, Milton Keynes. Enjoy elegant halal dining with a unique blend of French & Middle Eastern flavors.",
    url: url,
    siteName: "Nour Maison",
    type: "website",
    locale: "en_GB",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Book a table at Nour Maison in Milton Keynes",
        type: "image/webp",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Book Your Table at Nour Maison Milton Keynes",
    description:
      "French & Middle Eastern halal restaurant in Milton Keynes. Book online in seconds.",
    site: "@nourmaison",
    images: [OG_IMAGE],
  },
};

// ✅ Booking Schema (ReservationAction)
const bookingSchema = [
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${url}#webpage`,
    url: url,
    name: "Book a Table | Nour Maison Milton Keynes",
    description:
      "Reserve your table online at Nour Maison – the best halal French & Middle Eastern restaurant in Milton Keynes.",
    inLanguage: "en-GB",
    isPartOf: {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      name: "Nour Maison",
      url: siteUrl,
    },
    breadcrumb: {
      "@id": `${url}#breadcrumb`,
    },
    primaryImageOfPage: {
      "@type": "ImageObject",
      url: OG_IMAGE,
    },
    potentialAction: {
      "@type": "ReserveAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: url,
        actionPlatform: [
          "http://schema.org/DesktopWebPlatform",
          "http://schema.org/MobileWebPlatform",
        ],
      },
      result: {
        "@type": "FoodEstablishmentReservation",
        name: "Book a Table at Nour Maison",
        provider: {
          "@id": `${siteUrl}/#restaurant`,
        },
      },
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": `${url}#breadcrumb`,
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
        name: "Book a Table",
        item: url,
      },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    "@id": `${siteUrl}/#restaurant`,
    name: "Nour Maison",
    url: siteUrl,
    telephone: "+441908772177",
    servesCuisine: [
      "French",
      "Middle Eastern",
      "Mediterranean",
      "Halal",
      "Fusion",
    ],
    priceRange: "££",
    acceptsReservations: true,
    image: [
      `${siteUrl}/images/nour-gold-logo.webp`,
      OG_IMAGE,
    ],
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
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "09:00",
      closes: "22:00",
    },
    sameAs: [
      "https://www.instagram.com/nourmaison",
      "https://www.facebook.com/nourmaison",
    ],
  },
];

export default async function BookingPage() {
  return (
    <>
      {/* ✅ Schema for Booking */}
      {bookingSchema.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}



      <Suspense fallback={null}>
        <RedirectTracker />
      </Suspense>

      <div>
        <PagesBanner
          title={"Book A Table"}
          slogan={"Reserve your seat, taste the extraordinary."}
          scrollTo={"booking"}
          images={["/videos/booking-home-about.webm"]}
        />

        <BookingConent />
      </div>
    </>
  );
}