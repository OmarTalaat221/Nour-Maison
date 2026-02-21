// app/checkout/page.jsx

import React from "react";
import Script from "next/script";
import CheckoutPageClient from "./_components/CheckoutPageClient";

const siteUrl = "https://www.nourmaison.co.uk";
const pathname = "/checkout";
const url = `${siteUrl}${pathname}`;

const title = "Secure Checkout - NOUR MAISON | Safe Online Payment";
const description =
  "Complete your secure payment for NOUR MAISON gift cards and products. We accept Visa, Mastercard, and American Express. Fast, safe, and encrypted checkout process.";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,

  keywords: [
    "NOUR MAISON checkout",
    "secure payment UK",
    "buy gift card online",
    "online payment Milton Keynes",
    "Dojo payment gateway",
    "NOUR MAISON gift card",
    "restaurant gift voucher",
    "Milton Keynes gift card",
    "secure online checkout",
    "encrypted payment",
    "halal restaurant gift card",
    "safe online payment",
  ],

  // ✅ Important: No indexing for checkout pages
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
    },
  },

  authors: [{ name: "NOUR MAISON LTD" }],
  creator: "NOUR MAISON LTD",
  publisher: "NOUR MAISON LTD",

  openGraph: {
    type: "website",
    url,
    title: "Secure Checkout - NOUR MAISON",
    description,
    siteName: "NOUR MAISON",
    locale: "en_GB",
    images: [
      {
        url: `${siteUrl}/logo.png`,
        width: 1200,
        height: 630,
        alt: "NOUR MAISON Secure Checkout",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Secure Checkout - NOUR MAISON",
    description,
    images: [`${siteUrl}/logo.png`],
    creator: "@NourMaisonCafe",
    site: "@NourMaisonCafe",
  },

  category: "E-commerce",

  other: {
    "geo.region": "GB-MKY",
    "geo.placename": "Milton Keynes",
    "geo.position": "52.0406;-0.7594",
    ICBM: "52.0406, -0.7594",
  },
};

const CheckoutPage = () => {
  const jsonLd = [
    // ✅ Schema 1: CheckoutPage
    {
      "@context": "https://schema.org",
      "@type": "CheckoutPage",
      "@id": `${url}#checkout`,
      url: url,
      name: "Secure Checkout - NOUR MAISON",
      description: description,
      inLanguage: "en-GB",

      provider: {
        "@type": "Organization",
        "@id": `${siteUrl}/#organization`,
        name: "NOUR MAISON LTD",
        url: siteUrl,
        logo: `${siteUrl}/logo.png`,
        telephone: "+44-1908-772177",
        email: "info@nourmaison.co.uk",
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
        sameAs: [
          "https://www.instagram.com/nourmaisonuk",
          "https://www.facebook.com/nourmaisonuk",
        ],
      },

      paymentAccepted: ["Visa", "Mastercard", "American Express"],

      potentialAction: {
        "@type": "PayAction",
        target: {
          "@type": "EntryPoint",
          urlTemplate: url,
          actionPlatform: [
            "http://schema.org/DesktopWebPlatform",
            "http://schema.org/MobileWebPlatform",
          ],
        },
      },

      isPartOf: {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        name: "NOUR MAISON",
        url: siteUrl,
      },
    },

    // ✅ Schema 2: BreadcrumbList
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
          name: "Checkout",
          item: url,
        },
      ],
    },

    // ✅ Schema 3: WebPage
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "@id": `${url}#webpage`,
      url: url,
      name: "Secure Checkout - NOUR MAISON",
      description: description,
      inLanguage: "en-GB",
      datePublished: "2025-01-22",
      dateModified: new Date().toISOString().split("T")[0],

      publisher: {
        "@type": "Organization",
        "@id": `${siteUrl}/#organization`,
      },

      mainEntity: {
        "@type": "Organization",
        "@id": `${siteUrl}/#organization`,
      },

      breadcrumb: {
        "@type": "BreadcrumbList",
        "@id": `${url}#breadcrumb`,
      },
    },
  ];

  return (
    <>
      {/* ✅ Structured Data */}
      {jsonLd.map((schema, index) => (
        <Script
          key={index}
          id={`checkout-schema-${index}`}
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}

      {/* ✅ Client Component */}
      <CheckoutPageClient />
    </>
  );
};

export default CheckoutPage;
