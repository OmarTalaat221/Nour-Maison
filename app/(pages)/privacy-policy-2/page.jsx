// app/privacy-policy/page.jsx

import React from "react";
import Script from "next/script";
import PrivacyPolicyClient from "./_components/PrivacyPolicyClient";

const siteUrl = "https://www.nourmaison.co.uk";
const pathname = "/privacy-policy-2";
const url = `${siteUrl}${pathname}`;

const title =
  "Privacy Policy | NOUR MAISON LTD - Nour Maison Café and Brasserie";
const description =
  "Privacy Policy for NOUR MAISON LTD trading as Nour Maison Café and Brasserie. Learn how we collect, use, and protect your personal information in compliance with UK data protection laws.";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,

  keywords: [
    "NOUR MAISON privacy policy",
    "privacy policy UK restaurant",
    "NOUR MAISON LTD",
    "data protection",
    "GDPR compliance",
    "personal data protection",
    "Milton Keynes restaurant privacy",
    "email marketing privacy",
    "cookie policy",
    "customer data security",
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
    title: "Privacy Policy | NOUR MAISON LTD",
    description,
    siteName: "NOUR MAISON",
    locale: "en_GB",
    images: [
      {
        url: `${siteUrl}/logo.png`,
        width: 1200,
        height: 630,
        alt: "NOUR MAISON Privacy Policy",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy | NOUR MAISON LTD",
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

const PrivacyPolicyPage = () => {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "@id": `${url}#webpage`,
      url: url,
      name: "Privacy Policy",
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
          name: "Privacy Policy",
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
          id={`privacy-policy-schema-${index}`}
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}

      <PrivacyPolicyClient />
    </>
  );
};

export default PrivacyPolicyPage;
