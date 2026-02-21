// app/refund-policy/page.jsx

import React from "react";
import Script from "next/script";
import RefundPolicyClient from "./_components/RefundPolicyClient";

const siteUrl = "https://www.nourmaison.co.uk";
const pathname = "/refund-policy";
const url = `${siteUrl}${pathname}`;

const title =
  "Refund Policy | NOUR MAISON LTD - Nour Maison Café and Brasserie";
const description =
  "Refund Policy for NOUR MAISON LTD trading as Nour Maison Café and Brasserie. Learn about our refund process, eligibility, and how to request a refund. Full refund if order not delivered.";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,

  keywords: [
    "NOUR MAISON refund policy",
    "refund policy UK restaurant",
    "NOUR MAISON LTD",
    "Nour Maison Café refund",
    "Milton Keynes restaurant refund",
    "online order refund",
    "food delivery refund",
    "restaurant refund policy UK",
    "order not delivered refund",
    "café refund policy",
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
    title: "Refund Policy | NOUR MAISON LTD",
    description,
    siteName: "NOUR MAISON",
    locale: "en_GB",
    images: [
      {
        url: `${siteUrl}/logo.png`,
        width: 1200,
        height: 630,
        alt: "NOUR MAISON Refund Policy",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Refund Policy | NOUR MAISON LTD",
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

const RefundPolicyPage = () => {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "@id": `${url}#webpage`,
      url: url,
      name: "Refund Policy",
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
      mainEntity: {
        "@type": "WebPageElement",
        name: "Refund Policy",
        text: "Full refund within 5-10 business days if order not delivered",
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
          name: "Refund Policy",
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
          id={`refund-policy-schema-${index}`}
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}

      <RefundPolicyClient />
    </>
  );
};

export default RefundPolicyPage;
