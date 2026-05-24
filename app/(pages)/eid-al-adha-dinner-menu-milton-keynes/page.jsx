import React from "react";
import Image from "next/image";
import PagesBanner from "../../../components/PagesBanner/PagesBanner";
import "./style.css";
import BookingButton from "./BookingButton";

const siteUrl = "https://www.nourmaison.co.uk";
const pathname = "/eid-al-adha-dinner-menu-milton-keynes";
const url = `${siteUrl}${pathname}`;

const title = "Eid Al-Adha Dinner Menu Milton Keynes 2026 | Halal À La Carte";

const description =
  "Celebrate Eid Al-Adha 2026 at Nour Maison Milton Keynes with our à la carte halal dinner menu. Starters from £7, mains from £21. Confit Lamb Neck, Smoked Lahma, Fatteh Masri & more. Book your table now.";

/* temporary OG image using existing asset */
const ogImage = `${siteUrl}/images/eid-arch-frame.webp`;

export const metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  alternates: { canonical: url },
  keywords: [
    "Eid Al-Adha dinner Milton Keynes",
    "Eid Adha menu Milton Keynes 2026",
    "Halal Eid dinner Milton Keynes",
    "Eid Al-Adha restaurant MK",
    "Confit lamb neck Milton Keynes",
    "Smoked Lahma MK",
    "Fatteh Masri Milton Keynes",
    "Halal fine dining Milton Keynes",
    "Family Eid dinner Milton Keynes",
    "Eid Mubarak dinner Milton Keynes",
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
    title: "Eid Al-Adha Dinner Menu Milton Keynes 2026 | Nour Maison",
    description,
    siteName: "Nour Maison Café",
    locale: "en_GB",
    images: [
      {
        url: ogImage,
        alt: "Eid Al-Adha Dinner Menu Milton Keynes 2026 – Nour Maison",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Eid Al-Adha Dinner Menu Milton Keynes 2026 | Nour Maison",
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

const startersMenu = [
  {
    name: "Truffle Parmesan Hummus",
    price: "8",
    description: "Served with charred sourdough, topped with warm brown butter",
  },
  {
    name: "Smoked Baba Ganoush",
    price: "7",
    description:
      "Smoked aubergine dip finished with crispy shallots, served with brioche loaf",
  },
  {
    name: "Fig & Pistachio Brie",
    price: "9",
    description: "Topped with hot honey and served with simit",
  },
  {
    name: "Glazed Merguez Skewers",
    price: "9",
    description:
      "Spicy Algerian sausage glazed with pomegranate molasses, served with pickled onion and harissa yogurt",
  },
  {
    name: "Brisket Cigars",
    price: "10",
    description:
      "Crispy phyllo rolls stuffed with slow-cooked brisket, served with dukkah aioli",
  },
  {
    name: "Batata Harra Croquettes",
    price: "8",
    description:
      "Crispy potato croquettes infused with garlic, coriander, and chili, served with harissa yogurt",
  },
];

const mainsMenu = [
  {
    name: "Confit Lamb Neck",
    price: "25",
    description:
      "Slow-cooked lamb neck served with béarnaise lamb jus and fragrant saffron rice",
  },
  {
    name: "Fatteh Masri",
    price: "24",
    description:
      "Slow-cooked beef brisket served over crispy pita bread, layered with spiced rice, finished with tomato sauce and a butter & lemon vinaigrette",
  },
  {
    name: "Smoked Lahma",
    price: "27",
    description:
      "16-hour smoked beef rib, slow-cooked until tender, topped with Arabian-style beef jus and served with creamy mash and glazed heritage carrots",
  },
  {
    name: "Koftet Roz",
    price: "23",
    description:
      "Minced rice and beef kofta fingers served with potato fondants, tomato and herb ragu, and fragrant rice",
  },
  {
    name: "Sharkaseya",
    price: "21",
    description:
      "Tender chicken in a velvety walnut sauce, served on top of aromatic rice with steamed carrots and crispy fried shallots",
  },
  {
    name: "Freekeh Stuffed Chicken Roulade",
    price: "22",
    description:
      "Herb chicken roulade stuffed with freekeh and pistachio, served with roasted baby carrots and lemon thyme velouté",
  },
];

const EidAlAdhaDinnerMenuPage = () => {
  const jsonLd = [
    /* ============================================ */
    /* ✅ 1. WebSite                                */
    /* ============================================ */
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      name: "Nour Maison",
      url: siteUrl,
      inLanguage: "en-GB",
    },

    /* ============================================ */
    /* ✅ 2. WebPage                                */
    /* ============================================ */
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "@id": `${url}#webpage`,
      url,
      name: "Eid Al-Adha Dinner Menu Milton Keynes 2026 | Nour Maison",
      description,
      inLanguage: "en-GB",
      isPartOf: {
        "@id": `${siteUrl}/#website`,
      },
      breadcrumb: {
        "@id": `${url}#breadcrumb`,
      },
      primaryImageOfPage: {
        "@type": "ImageObject",
        url: ogImage,
      },
    },

    /* ============================================ */
    /* ✅ 3. BreadcrumbList                         */
    /* ============================================ */
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
          name: "Eid Al-Adha Dinner Menu Milton Keynes",
          item: url,
        },
      ],
    },

    /* ============================================ */
    /* ✅ 4. Restaurant (NO hasMenu link)           */
    /* ============================================ */
    {
      "@context": "https://schema.org",
      "@type": "Restaurant",
      "@id": `${siteUrl}/#restaurant`,
      name: "Nour Maison",
      url: siteUrl,
      telephone: "+441908772177",
      servesCuisine: ["French", "Middle Eastern", "Fusion", "Halal"],
      priceRange: "££",
      acceptsReservations: true,
      image: [
        "https://res.cloudinary.com/dhebgz7qh/image/upload/v1767452496/y3replc9wmlnvwb7kjvo_hyo3u3.png",
      ],
      logo: {
        "@type": "ImageObject",
        url: `${siteUrl}/images/logo.png`,
      },
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
      sameAs: [
        "https://www.instagram.com/nourmaison",
        "https://www.facebook.com/nourmaison",
      ],
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
          name: "Book an Eid Al-Adha Dinner Table",
        },
      },
    },

    /* ============================================ */
    /* ✅ 5. Menu (STANDALONE — NOT linked to Restaurant) */
    /* ============================================ */
    {
      "@context": "https://schema.org",
      "@type": "Menu",
      "@id": `${url}#menu`,
      url,
      name: "Eid Al-Adha Dinner Menu 2026",
      description:
        "Premium halal à la carte Eid Al-Adha dinner menu featuring Middle Eastern and French fusion cuisine.",
      inLanguage: "en-GB",
      hasMenuSection: [
        {
          "@type": "MenuSection",
          name: "Starters",
          description: "Artisan halal starters to begin your Eid celebration.",
          hasMenuItem: startersMenu.map((item) => ({
            "@type": "MenuItem",
            name: item.name,
            description: item.description,
            offers: {
              "@type": "Offer",
              price: item.price,
              priceCurrency: "GBP",
              availability: "https://schema.org/InStock",
            },
          })),
        },
        {
          "@type": "MenuSection",
          name: "Mains",
          description:
            "Signature halal main courses blending Middle Eastern soul with French finesse.",
          hasMenuItem: mainsMenu.map((item) => ({
            "@type": "MenuItem",
            name: item.name,
            description: item.description,
            offers: {
              "@type": "Offer",
              price: item.price,
              priceCurrency: "GBP",
              availability: "https://schema.org/InStock",
            },
          })),
        },
      ],
    },

    /* ============================================ */
    /* ✅ 6. FAQPage                                */
    /* ============================================ */
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "@id": `${url}#faq`,
      url,
      mainEntity: [
        {
          "@type": "Question",
          name: "Where can I celebrate Eid Al-Adha dinner in Milton Keynes?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Nour Maison in Milton Keynes offers a premium halal à la carte Eid Al-Adha dinner menu featuring authentic Middle Eastern dishes with French culinary finesse, located at 149 Grafton Gate, MK9 1AE.",
          },
        },
        {
          "@type": "Question",
          name: "What is on the Eid Al-Adha menu at Nour Maison?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Starters: Truffle Parmesan Hummus (£8), Smoked Baba Ganoush (£7), Fig & Pistachio Brie (£9), Glazed Merguez Skewers (£9), Brisket Cigars (£10), Batata Harra Croquettes (£8). Mains: Confit Lamb Neck (£25), Fatteh Masri (£24), Smoked Lahma (£27), Koftet Roz (£23), Sharkaseya (£21), Freekeh Stuffed Chicken Roulade (£22).",
          },
        },
        {
          "@type": "Question",
          name: "Is the Eid Al-Adha menu halal?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Nour Maison is a fully halal restaurant and every dish on our Eid Al-Adha dinner menu is 100% halal certified.",
          },
        },
        {
          "@type": "Question",
          name: "Do I need to book for Eid Al-Adha dinner?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, booking is strongly recommended for Eid Al-Adha as tables fill up very quickly. Reserve your table online at nourmaison.co.uk/booking or call +441908772177.",
          },
        },
        {
          "@type": "Question",
          name: "How much does Eid Al-Adha dinner cost at Nour Maison Milton Keynes?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Starters are priced from £7 to £10, and mains from £21 to £27. The menu is à la carte so you choose exactly what you'd like.",
          },
        },
      ],
    },
  ];

  return (
    <div>
      {jsonLd.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}

      <PagesBanner
        bottomBg={false}
        images={[
          "/images/eid-video.mp4",
          "https://res.cloudinary.com/dhebgz7qh/video/upload/v1772101573/booking-home-about_info_ulolyx_tspht2.mp4",
        ]}
        slogan={
          <div className="text-base sm:text-lg md:text-2xl xl:text-3xl px-2">
            Celebrate Eid Al-Adha at Nour Maison with an exquisite halal à la
            carte dinner blending Middle Eastern heritage and French finesse.
          </div>
        }
        title={"Eid Mubarak — Dine in Elegance this Eid Al Adha"}
        scrollTo={"eid-adha-dinner-menu"}
      />

      <main
        id="eid-adha-dinner-menu"
        className="eid-adha-section w-full relative py-20 sm:py-28 md:py-36 mt-[-80px] sm:mt-[-100px] md:mt-[-120px] z-10 overflow-hidden"
        aria-labelledby="eid-adha-menu-heading"
      >
        {/* Heading */}
        <header className="w-full max-w-[90%] sm:max-w-2xl md:max-w-3xl lg:max-w-4xl xl:max-w-5xl mx-auto px-3 sm:px-4 md:px-6 text-center relative z-10">
          <h1
            id="eid-adha-menu-heading"
            className="font-nour text-logoGold text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl mb-4 sm:mb-5 md:mb-7 leading-tight tracking-wide"
            style={{
              textShadow: "1px 1px 3px rgba(255,255,255,0.4)",
            }}
          >
            Eid Al-Adha Dinner Menu
            <span className="block mt-1 sm:mt-2 text-softMintGreen">
              in Milton Keynes
            </span>
          </h1>

          <div className="bg-pestachio2/60 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-7 w-full mx-auto border-2 border-logoGold/40">
            <p className="font-oswald text-softMintGreen text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed md:leading-loose">
              Celebrate Eid Al-Adha 2026 at Nour Maison Milton Keynes with our
              specially curated à la carte halal dinner menu. From slow-cooked{" "}
              <strong className="text-logoGold">Confit Lamb Neck</strong> and
              16-hour <strong className="text-logoGold">Smoked Lahma</strong> to
              the classic{" "}
              <strong className="text-logoGold">Fatteh Masri</strong> — every
              dish is a tribute to Middle Eastern tradition refined with French
              culinary finesse.
            </p>
          </div>
        </header>

        {/* ============================================ */}
        {/* ✅ SINGLE MENU POSTER (Starters + Mains)     */}
        {/* ============================================ */}
        <div className="w-full max-w-[95%] sm:max-w-2xl md:max-w-3xl lg:max-w-3xl xl:max-w-4xl mx-auto px-3 sm:px-4 relative z-10">
          <article className="menu-poster" aria-label="Eid Dinner Menu">
            {/* ===== HEADER: Lanterns + Title overlapping ===== */}
            <div className="poster-header">
              <div className="poster-lanterns" aria-hidden="true">
                <Image
                  src="/images/eid-lanterns-top.webp"
                  alt=""
                  width={1980}
                  height={645}
                  className="poster-lanterns-img"
                  loading="lazy"
                />
              </div>

              <div className="poster-title">
                <Image
                  src="/images/eid-title.webp"
                  alt="Eid Dinner Menu"
                  width={1100}
                  height={400}
                  className="poster-title-img"
                  loading="lazy"
                />
              </div>
            </div>

            {/* ===== ARCH BODY ===== */}
            <div className="poster-arch no-scrollbar">
              {/* Scrollable content area */}
              <div className="poster-scroll no-scrollbar">
                {/* STARTERS */}
                <div className="poster-pill-wrap">
                  <span className="poster-pill">Starters</span>
                </div>

                <ul className="poster-menu-list" role="list">
                  {startersMenu.map((item, idx) => (
                    <li key={`starter-${idx}`} className="poster-item">
                      <h3 className="poster-item-name">
                        {item.name} <span className="poster-dash">—</span>{" "}
                        <span className="poster-item-price">£{item.price}</span>
                      </h3>
                      <p className="poster-item-desc">{item.description}</p>
                    </li>
                  ))}
                </ul>

                {/* Divider */}
                <div className="poster-divider" aria-hidden="true">
                  <span />
                  <span className="poster-divider-icon">✦</span>
                  <span />
                </div>

                {/* MAINS */}
                <div className="poster-pill-wrap">
                  <span className="poster-pill">Mains</span>
                </div>

                <ul className="poster-menu-list" role="list">
                  {mainsMenu.map((item, idx) => (
                    <li key={`main-${idx}`} className="poster-item">
                      <h3 className="poster-item-name">
                        {item.name} <span className="poster-dash">—</span>{" "}
                        <span className="poster-item-price">£{item.price}</span>
                      </h3>
                      <p className="poster-item-desc">{item.description}</p>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Crescent - inside the arch, large like original menu */}
              <div className="poster-crescent" aria-hidden="true">
                <Image
                  src="/images/eid-crescent-lanterns.webp"
                  alt=""
                  width={500}
                  height={500}
                  className="poster-crescent-img"
                  loading="lazy"
                />
              </div>
            </div>
          </article>
        </div>

        {/* CTA */}
        <section className="w-full max-w-[95%] sm:max-w-xl md:max-w-3xl lg:max-w-4xl xl:max-w-5xl mx-auto px-3 sm:px-4 mt-16 sm:mt-20 md:mt-24 relative z-10">
          <div className="bg-pestachio2/70 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 text-center border-2 border-logoGold/40 shadow-2xl">
            <h2 className="font-seasons text-logoGold text-xl sm:text-2xl md:text-3xl lg:text-4xl mb-3 sm:mb-4 md:mb-5 leading-snug">
              Eid Mubarak from Nour Maison
            </h2>

            <p className="font-playfair text-softMintGreen text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed md:leading-loose max-w-3xl mx-auto">
              Reserve your table at{" "}
              <span className="font-nour text-logoGold font-semibold">
                Nour Maison
              </span>{" "}
              and celebrate Eid Al-Adha with a{" "}
              <span className="text-softMintGreen font-medium">
                luxurious halal dining experience
              </span>{" "}
              shared with family and loved ones.
            </p>

            <div className="flex items-center justify-center gap-3 sm:gap-4 mt-5 sm:mt-6 md:mt-8">
              <BookingButton />
            </div>
          </div>
        </section>

        <section
          className="sr-only"
          aria-label="Eid Al-Adha dinner menu details"
        >
          <h2>Best Eid Al-Adha Dinner Menu in Milton Keynes 2026</h2>
          <p>
            Looking for the best Eid Al-Adha dinner in Milton Keynes? Nour
            Maison offers a premium halal à la carte Eid menu. Mains include
            Confit Lamb Neck (£25), Smoked Lahma (£27), Fatteh Masri (£24),
            Koftet Roz (£23), Sharkaseya (£21), and Freekeh Stuffed Chicken
            Roulade (£22). Starters from £7-£10.
          </p>
          <h2>Contact</h2>
          <p>
            Address: 149 Grafton Gate, Milton Keynes, MK9 1AE. Phone:
            +441908772177. Book at nourmaison.co.uk/booking
          </p>
        </section>
      </main>
    </div>
  );
};

export default EidAlAdhaDinnerMenuPage;
