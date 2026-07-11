import PagesBanner from "../../../components/PagesBanner/PagesBanner";
import WhitePartyBooking from "./_components/WhitePartyBooking";
import WhitePartyDressCode from "./_components/WhitePartyDressCode";
import WhitePartyExperience from "./_components/WhitePartyExperience";
import WhitePartyFAQ from "./_components/WhitePartyFAQ";
import WhitePartyFinalCTA from "./_components/WhitePartyFinalCTA";
import WhitePartyIntro from "./_components/WhitePartyIntro";
import WhitePartySchedule from "./_components/WhitePartySchedule";

/* ============================================
   Site & Page Constants
   ============================================ */
const siteUrl = "https://www.nourmaison.co.uk";
const pathname = "/white-party-register";
const url = `${siteUrl}${pathname}`;

/* ============================================
   Event Constants (Single Source of Truth)
   ============================================ */
const EVENT_DATE_ISO = "2026-07-26";
const EVENT_START_ISO = "2026-07-26T15:00:00+01:00";
const EVENT_END_ISO = "2026-07-26T21:00:00+01:00";
const EVENT_DATE_LABEL = "26 July 2026";
const EVENT_DATE_LABEL_LONG = "Saturday, 26 July 2026";

const title =
  "White Party by Nour Maison — 26 July 2026 | Specialty Coffee, Matcha & Live Afro-Arabic Music in Milton Keynes";

const description =
  "Book your ticket for the Nour Maison White Party on Saturday, 26 July 2026 in Milton Keynes. An exclusive afternoon of specialty coffee, matcha, live Afro-Arabic DJ, prizes, games and unforgettable summer vibes. Dress code: all white. Limited spots.";

const shortDescription =
  "An exclusive afternoon of specialty coffee, matcha, live Afro-Arabic music, games and prizes at Nour Maison, Milton Keynes — 26 July 2026.";

const ogImage = `${siteUrl}/images/white-party-og.webp`;

/* ============================================
   Metadata (Next.js 14 App Router)
   ============================================ */
export const metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,

  alternates: {
    canonical: url,
  },

  keywords: [
    "White Party Nour Maison",
    "White Party 2026",
    "Nour Maison event",
    "Nour Maison Milton Keynes",
    "White Party Milton Keynes",
    "White Party 26 July 2026",
    "specialty coffee event Milton Keynes",
    "matcha event UK",
    "Afro Arabic music event",
    "Milton Keynes events 2026",
    "summer party Milton Keynes",
    "coffee and matcha party",
    "live DJ Milton Keynes",
    "Nour Maison booking",
    "book White Party ticket",
    "all white dress code event",
    "Milton Keynes café events",
  ],

  authors: [{ name: "Nour Maison", url: siteUrl }],
  creator: "Nour Maison",
  publisher: "Nour Maison",

  applicationName: "Nour Maison",
  referrer: "origin-when-cross-origin",

  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },

  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  openGraph: {
    type: "website",
    url,
    title: `White Party by Nour Maison — ${EVENT_DATE_LABEL}`,
    description: shortDescription,
    siteName: "Nour Maison",
    locale: "en_GB",
    images: [
      {
        url: ogImage,
        secureUrl: ogImage,
        width: 1200,
        height: 630,
        alt: "White Party by Nour Maison — Specialty Coffee, Matcha & Live Afro-Arabic Music Event on 26 July 2026 in Milton Keynes",
        type: "image/webp",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: `White Party by Nour Maison — ${EVENT_DATE_LABEL}`,
    description: shortDescription,
    images: [ogImage],
    creator: "@NourMaison",
    site: "@NourMaison",
  },

  category: "Event",

  other: {
    "geo.region": "GB-MKY",
    "geo.placename": "Milton Keynes",
    "geo.position": "52.0406;-0.7594",
    ICBM: "52.0406, -0.7594",
    "event:start_date": EVENT_START_ISO,
    "event:end_date": EVENT_END_ISO,
    "event:location": "Nour Maison, 149 Grafton Gate, Milton Keynes, MK9 1AE",
  },
};

/* ============================================
   Page Component
   ============================================ */
const WhitePartyPage = () => {
  /* ─── JSON-LD Structured Data ─── */
  const jsonLd = [
    /* ========== 1. Event Schema ========== */
    {
      "@context": "https://schema.org",
      "@type": "Event",
      "@id": `${url}#event`,
      name: "White Party by Nour Maison",
      alternateName: "Nour Maison White Party 2026",
      description:
        "An exclusive afternoon of specialty coffee, matcha, live Afro-Arabic music, interactive games, exclusive prizes and elegant summer vibes at Nour Maison in Milton Keynes.",
      startDate: EVENT_START_ISO,
      endDate: EVENT_END_ISO,
      doorTime: EVENT_START_ISO,
      eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
      eventStatus: "https://schema.org/EventScheduled",
      url,
      image: [ogImage, `${siteUrl}/images/white-party-hero.webp`],
      inLanguage: "en-GB",
      isAccessibleForFree: false,
      maximumAttendeeCapacity: 100,
      typicalAgeRange: "18+",
      keywords:
        "white party, specialty coffee, matcha, Afro-Arabic music, Milton Keynes event, Nour Maison",

      organizer: {
        "@type": "Organization",
        "@id": `${siteUrl}#organization`,
        name: "Nour Maison",
        url: siteUrl,
        logo: `${siteUrl}/images/logo.webp`,
        sameAs: [
          "https://www.instagram.com/nourmaison",
          "https://www.facebook.com/nourmaison",
        ],
      },

      location: {
        "@type": "Place",
        "@id": `${siteUrl}#place`,
        name: "Nour Maison",
        url: siteUrl,
        image: `${siteUrl}/images/nour-maison-exterior.webp`,
        telephone: "+44-1908-772177",
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
          latitude: 52.0406,
          longitude: -0.7594,
        },
      },

      offers: {
        "@type": "Offer",
        "@id": `${url}#offer`,
        url,
        availability: "https://schema.org/InStock",
        priceCurrency: "GBP",
        validFrom: "2025-01-01T00:00:00+00:00",
        category: "Ticket",
        description:
          "Reserve your spot for the exclusive White Party afternoon at Nour Maison.",
      },

      performer: [
        {
          "@type": "MusicGroup",
          name: "Live Afro-Arabic DJ",
          genre: ["Afro", "Arabic", "House", "Lounge"],
        },
      ],

      audience: {
        "@type": "Audience",
        audienceType: "Adults, Coffee Lovers, Lifestyle Enthusiasts",
        geographicArea: {
          "@type": "AdministrativeArea",
          name: "Milton Keynes and Buckinghamshire",
        },
      },

      // ─── Sub-events (Timeline) ───
      subEvent: [
        {
          "@type": "Event",
          name: "Doors Open & Welcome Drinks",
          startDate: "2026-07-26T15:00:00+01:00",
          location: { "@id": `${siteUrl}#place` },
        },
        {
          "@type": "Event",
          name: "Live Afro-Arabic DJ Begins",
          startDate: "2026-07-26T15:30:00+01:00",
          location: { "@id": `${siteUrl}#place` },
        },
        {
          "@type": "Event",
          name: "Spin & Win Opens",
          startDate: "2026-07-26T16:00:00+01:00",
          location: { "@id": `${siteUrl}#place` },
        },
        {
          "@type": "Event",
          name: "Content Challenge Begins",
          startDate: "2026-07-26T16:30:00+01:00",
          location: { "@id": `${siteUrl}#place` },
        },
        {
          "@type": "Event",
          name: "Coffee & Matcha Specials Unveiled",
          startDate: "2026-07-26T17:00:00+01:00",
          location: { "@id": `${siteUrl}#place` },
        },
        {
          "@type": "Event",
          name: "Live Content & Guest Interviews",
          startDate: "2026-07-26T17:30:00+01:00",
          location: { "@id": `${siteUrl}#place` },
        },
        {
          "@type": "Event",
          name: "Best Dressed in White Judging",
          startDate: "2026-07-26T18:00:00+01:00",
          location: { "@id": `${siteUrl}#place` },
        },
        {
          "@type": "Event",
          name: "Lucky Receipt Draw",
          startDate: "2026-07-26T18:30:00+01:00",
          location: { "@id": `${siteUrl}#place` },
        },
        {
          "@type": "Event",
          name: "Golden Cup Reveal",
          startDate: "2026-07-26T19:00:00+01:00",
          location: { "@id": `${siteUrl}#place` },
        },
        {
          "@type": "Event",
          name: "Sunset Vibes & Good Energy",
          startDate: "2026-07-26T19:00:00+01:00",
          endDate: EVENT_END_ISO,
          location: { "@id": `${siteUrl}#place` },
        },
      ],
    },

    /* ========== 2. FAQ Schema ========== */
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "@id": `${url}#faq`,
      mainEntity: [
        {
          "@type": "Question",
          name: "Is the White Party event ticketed?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, the White Party is a ticketed event. You can book your ticket through our website in just a few minutes and receive a confirmation by email.",
          },
        },
        {
          "@type": "Question",
          name: "Can I bring friends to the White Party?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Absolutely! Bring a friend and follow @NourMaison on Instagram to receive a complimentary drink each on arrival — just show both tickets and your follow at the door.",
          },
        },
        {
          "@type": "Question",
          name: "Is there parking nearby?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, there is parking available near Nour Maison at 149 Grafton Gate, Milton Keynes, MK9 1AE. We recommend arriving a little early to secure a spot.",
          },
        },
        {
          "@type": "Question",
          name: "Can I attend the White Party without booking?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "We highly recommend booking in advance as spaces are limited. Walk-ins are welcome but strictly subject to availability on the day.",
          },
        },
        {
          "@type": "Question",
          name: "Are food and drinks included in the ticket?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Your ticket grants you entry to the event. Food and drinks are available for purchase throughout the afternoon, with exclusive limited-edition White Party specials.",
          },
        },
      ],
    },

    /* ========== 3. Breadcrumb Schema ========== */
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
          name: "White Party",
          item: url,
        },
      ],
    },

    /* ========== 4. WebPage Schema ========== */
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "@id": `${url}#webpage`,
      url,
      name: title,
      description,
      inLanguage: "en-GB",
      isPartOf: {
        "@type": "WebSite",
        "@id": `${siteUrl}#website`,
        url: siteUrl,
        name: "Nour Maison",
      },
      about: {
        "@id": `${url}#event`,
      },
      primaryImageOfPage: {
        "@type": "ImageObject",
        url: ogImage,
        width: 1200,
        height: 630,
      },
      datePublished: "2025-01-01T00:00:00+00:00",
      dateModified: new Date().toISOString(),
      breadcrumb: {
        "@id": `${url}#breadcrumb`,
      },
      significantLink: [
        `${url}#event`,
        `${url}#faq`,
        `${siteUrl}/menu`,
        `${siteUrl}/contact`,
      ],
    },

    /* ========== 5. Local Business Schema ========== */
    {
      "@context": "https://schema.org",
      "@type": "CafeOrCoffeeShop",
      "@id": `${siteUrl}#business`,
      name: "Nour Maison",
      image: `${siteUrl}/images/nour-maison-exterior.webp`,
      url: siteUrl,
      telephone: "+44-1908-772177",
      priceRange: "££",
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
        latitude: 52.0406,
        longitude: -0.7594,
      },
      servesCuisine: ["French", "Middle Eastern", "Specialty Coffee"],
      event: {
        "@id": `${url}#event`,
      },
    },
  ];

  return (
    <div>
      {/* ─── JSON-LD Structured Data ─── */}
      {jsonLd.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}

      {/* ─── Page Banner (H1) ─── */}
      <PagesBanner
        useH1={true}
        bottomBg={false}
        title={"White Party by Nour Maison"}
        slogan={
          <div className="text-base sm:text-lg md:text-2xl xl:text-3xl px-2">
            An exclusive afternoon of specialty coffee, matcha,
            <br className="hidden sm:block" />
            live Afro-Arabic music and unforgettable experiences.
            <span className="block mt-3 text-xs sm:text-sm md:text-base uppercase tracking-[0.22em] text-logoGold">
              {EVENT_DATE_LABEL} &bull; Starts at 3:00 PM &bull; Nour Maison,
              Milton Keynes
            </span>
          </div>
        }
        scrollTo={"white-party-content"}
        images={["/images/white-party-hero.webp"]}
      />

      {/* ─── Main Content ─── */}
      <main>
        <WhitePartyIntro />
        <WhitePartyBooking />
        {/* <WhitePartyBringFriend /> */}
        <WhitePartyExperience />
        <WhitePartySchedule />
        <WhitePartyDressCode />
        <WhitePartyFAQ />
        <WhitePartyFinalCTA />
      </main>
    </div>
  );
};

export default WhitePartyPage;
