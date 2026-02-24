// app/terms-and-conditions/page.jsx

import React from "react";
import Script from "next/script";
import TermsAndConditionsClient from "./_components/TermsAndConditionsClient";

const siteUrl = "https://www.nourmaison.co.uk";
const pathname = "/terms-and-conditions";
const url = `${siteUrl}${pathname}`;

const title =
  "Terms & Conditions | NOUR MAISON LTD - Nour Maison Café and Brasserie";
const description =
  "Terms and Conditions for NOUR MAISON LTD trading as Nour Maison Café and Brasserie. Read our policies on reservations, orders, payments, and services.";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,

  keywords: [
    "NOUR MAISON terms and conditions",
    "NOUR MAISON LTD",
    "Nour Maison Café terms",
    "restaurant terms UK",
    "Milton Keynes restaurant policy",
    "café terms and conditions",
    "online ordering terms",
    "reservation policy",
    "payment terms restaurant",
    "halal restaurant terms",
  ],

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },

  authors: [{ name: "NOUR MAISON LTD" }],
  creator: "NOUR MAISON LTD",
  publisher: "NOUR MAISON LTD",

  alternates: {
    canonical: url,
  },

  openGraph: {
    type: "website",
    url,
    title: "Terms & Conditions | NOUR MAISON LTD",
    description,
    siteName: "NOUR MAISON",
    locale: "en_GB",
    images: [
      {
        url: `${siteUrl}/logo.png`,
        width: 1200,
        height: 630,
        alt: "NOUR MAISON Terms & Conditions",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Terms & Conditions | NOUR MAISON LTD",
    description,
    images: [`${siteUrl}/logo.png`],
    creator: "@NourMaisonCafe",
    site: "@NourMaisonCafe",
  },

  category: "Legal",

  other: {
    "geo.region": "GB-MKY",
    "geo.placename": "Milton Keynes",
    "geo.position": "52.0406;-0.7594",
    ICBM: "52.0406, -0.7594",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

const TermsAndConditionsPage = () => {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "@id": `${url}#webpage`,
      url: url,
      name: "Terms & Conditions",
      description: description,
      inLanguage: "en-GB",
      isPartOf: {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        url: siteUrl,
        name: "NOUR MAISON",
        publisher: {
          "@type": "Organization",
          "@id": `${siteUrl}/#organization`,
        },
      },
      publisher: {
        "@type": "Organization",
        "@id": `${siteUrl}/#organization`,
        name: "NOUR MAISON LTD",
        legalName: "NOUR MAISON LTD",
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
        contactPoint: {
          "@type": "ContactPoint",
          telephone: "+44-1908-772177",
          email: "info@nourmaison.co.uk",
          contactType: "customer service",
          availableLanguage: ["English", "Arabic"],
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
          name: "Terms & Conditions",
          item: url,
        },
      ],
    },
  ];

  return (
    <>
      {jsonLd.map((schema, index) => (
        <Script
          key={index}
          id={`terms-schema-${index}`}
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}

      <TermsAndConditionsClient />
    </>
  );
};

export default TermsAndConditionsPage;
