// app/(whatever)/all-blogs/page.jsx

import React from "react";
import Script from "next/script";
import PagesBanner from "../../../components/PagesBanner/PagesBanner";
import AllBlogsContent from "./_components/AllBlogsContent";
import { conifgs } from "../../../config";

const siteUrl = "https://www.nourmaison.co.uk";
const pathname = "/all-blogs";
const url = `${siteUrl}${pathname}`;

const title =
  "Halal Restaurant Blog Milton Keynes | Nour Maison Café & Brasserie";
const description =
  "Discover halal dining guides, brunch inspiration, afternoon tea tips and fine dining insights from Nour Maison, Milton Keynes. Explore the latest articles.";
const ogImage =
  "https://res.cloudinary.com/dhebgz7qh/image/upload/v1767452496/y3replc9wmlnvwb7kjvo_hyo3u3.png";

// ✅ Server-side fetch function
async function getBlogsData() {
  try {
    const res = await fetch(
      `${conifgs.BASE_URL}user/get_custom_blogs_data.php`,
      { next: { revalidate: 3600 } }
    );
    const data = await res.json();
    if (data.status === "success") {
      return data.message;
    }
    return { blogs: [], keywords: [] };
  } catch (error) {
    return { blogs: [], keywords: [] };
  }
}

// ✅ Generate metadata with keywords from API
export async function generateMetadata() {
  const { keywords } = await getBlogsData();

  return {
    metadataBase: new URL(siteUrl),
    title,
    description,

    alternates: {
      canonical: url,
    },

    keywords: [
      "Halal restaurant blog Milton Keynes",
      "Halal dining guide MK",
      "Afternoon tea Milton Keynes",
      "Brunch ideas Milton Keynes",
      "Halal restaurant tips",
      "Fine dining blog UK",
      "Milton Keynes restaurant guide",
      "Halal food blog",
      "French Middle Eastern cuisine blog",
      "Nour Maison blog",
      "Best halal restaurants MK",
      "Restaurant recommendations Milton Keynes",
      "Halal afternoon tea guide",
      "Special occasions dining MK",
      "Family dining Milton Keynes",
      ...(keywords || []),
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
      title: "Halal Restaurant Blog | Nour Maison Milton Keynes",
      description,
      siteName: "Nour Maison Café",
      locale: "en_GB",
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: "Nour Maison Café Blog - Halal Dining Guide Milton Keynes",
          type: "image/png",
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title: "Halal Restaurant Blog | Nour Maison Milton Keynes",
      description,
      images: [ogImage],
      creator: "@NourMaisonCafe",
      site: "@NourMaisonCafe",
    },

    category: "Restaurant Blog",

    // ✅ Geo meta tags (same as Ramadan page)
    other: {
      "geo.region": "GB-MKY",
      "geo.placename": "Milton Keynes",
      "geo.position": "52.0406;-0.7594",
      ICBM: "52.0406, -0.7594",
    },
  };
}

export default async function AllBlogsPage() {
  const { blogs, keywords } = await getBlogsData();

  // ✅ Multiple JSON-LD schemas (like Ramadan page)
  const jsonLd = [
    // ✅ Schema 1: CollectionPage + Restaurant
    {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      "@id": `${url}#webpage`,
      url: url,
      name: "Halal Restaurant Blog | Nour Maison Milton Keynes",
      description: description,
      inLanguage: "en-GB",
      datePublished: "2024-01-01",
      dateModified: new Date().toISOString().split("T")[0],
      keywords: keywords?.join(", ") || "",

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
            name: "Blog",
            item: url,
          },
        ],
      },
    },

    // ✅ Schema 2: Blog (ItemList of BlogPostings)
    {
      "@context": "https://schema.org",
      "@type": "Blog",
      "@id": `${url}#blog`,
      name: "Nour Maison Blog",
      description:
        "Halal dining guides, recipes, and restaurant insights from Nour Maison Milton Keynes",
      url: url,
      publisher: {
        "@type": "Restaurant",
        "@id": `${siteUrl}/#restaurant`,
        name: "Nour Maison",
      },
      blogPost:
        blogs?.slice(0, 10).map((blog) => ({
          "@type": "BlogPosting",
          headline: blog.title,
          url: `${siteUrl}/blog/${blog.slug}`,
          image: blog.image,
          datePublished: blog.created_at,
          author: {
            "@type": "Organization",
            name: "Nour Maison Café",
          },
        })) || [],
    },

    // ✅ Schema 3: FAQPage (about the blog)
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "@id": `${url}#faq`,
      mainEntity: [
        {
          "@type": "Question",
          name: "What topics does the Nour Maison blog cover?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Our blog covers halal dining guides, afternoon tea tips, breakfast and brunch ideas, special occasion inspiration, recipes, and restaurant recommendations in Milton Keynes.",
          },
        },
        {
          "@type": "Question",
          name: "Is Nour Maison a halal restaurant?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, Nour Maison is a fully halal restaurant serving French and Middle Eastern fusion cuisine in Milton Keynes.",
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
          name: "Does Nour Maison offer afternoon tea?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, Nour Maison offers a premium halal afternoon tea experience. Check our blog for tips and what to expect.",
          },
        },
        {
          "@type": "Question",
          name: "Can I book a table at Nour Maison?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, you can book online at nourmaison.co.uk/booking or call +44-1908-772177.",
          },
        },
      ],
    },
  ];

  return (
    <div>
      {/* ✅ Structured Data - Multiple Schemas */}
      {jsonLd.map((schema, index) => (
        <Script
          key={index}
          id={`all-blogs-schema-${index}`}
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}

      {/* ✅ Banner Section */}
      <PagesBanner
        images={[
          "https://res.cloudinary.com/dhebgz7qh/video/upload/v1772101573/booking-home-about_info_ulolyx_tspht2.mp4",
        ]}
        bottomBg={true}
        slogan={
          <div className="text-base sm:text-lg md:text-2xl xl:text-3xl px-2">
            Discover stories, recipes, and dining insights from Nour Maison.
            <br />
            Your guide to halal fine dining in Milton Keynes.
          </div>
        }
        title={"All Blogs"}
        scrollTo={"all-blogs"}
      />

      {/* ✅ Main Content */}
      <AllBlogsContent />
    </div>
  );
}
