import dynamic from "next/dynamic";
import PagesBanner from "../../../components/PagesBanner/PagesBanner";
import BreadcrumbTrail from "../_components/seo/BreadcrumbTrail";
import CTABlock from "../_components/seo/CTABlock";
import HighlightsGrid from "../_components/seo/HighlightsGrid";
import ImageTextBlock from "../_components/seo/ImageTextBlock";
import InternalLinksGrid from "../_components/seo/InternalLinksGrid";
import QuickSummary from "../_components/seo/QuickSummary";
import RelatedSeoBlogs from "../_components/seo/RelatedSeoBlogs";
import SeoSchemas from "../_components/seo/SeoSchemas";
import StickyBookNowButton from "../_components/seo/StickyBookNowButton";
import "./style.css";

const FAQSection = dynamic(() => import("../_components/seo/FAQSection"), {
  ssr: true,
});

const SITE_URL = "https://www.nourmaison.co.uk";
const PATHNAME = "/afternoon-tea-milton-keynes";
const PAGE_URL = `${SITE_URL}${PATHNAME}`;
const OG_IMAGE = `${SITE_URL}/images/seo/afternoon-tea-milton-keynes/afternoon-tea-milton-keynes-og.webp`;

const PAGE_TITLE = "Afternoon Tea in Milton Keynes | Nour Maison";
const PAGE_DESCRIPTION =
  "Enjoy afternoon tea in Milton Keynes at Nour Maison with elegant presentation, halal-friendly options, family afternoon tea, special occasions and easy booking";

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  alternates: { canonical: PAGE_URL },
  keywords: [
    "afternoon tea Milton Keynes",
    "afternoon tea MK",
    "halal afternoon tea Milton Keynes",
    "best afternoon tea Milton Keynes",
    "afternoon tea booking Milton Keynes",
    "family afternoon tea Milton Keynes",
    "cafe afternoon tea Milton Keynes",
    "afternoon tea near me Milton Keynes",
    "elegant afternoon tea Milton Keynes",
    "special occasion afternoon tea Milton Keynes",
    "birthday afternoon tea Milton Keynes",
    "Nour Maison afternoon tea",
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
    url: PAGE_URL,
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    siteName: "Nour Maison Café",
    locale: "en_GB",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Afternoon tea in Milton Keynes at Nour Maison with elegant cakes pastries and drinks",
        type: "image/webp",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    images: [OG_IMAGE],
    creator: "@NourMaisonCafe",
    site: "@NourMaisonCafe",
  },
  category: "Cafe",
  other: {
    "geo.region": "GB-MKY",
    "geo.placename": "Milton Keynes",
    "geo.position": "52.0406;-0.7594",
    ICBM: "52.0406, -0.7594",
  },
};

const SUMMARY_ITEMS = [
  {
    label: "Best For",
    value: "Afternoon tea, family treats, friends, birthdays and occasions",
  },
  {
    label: "Experience Style",
    value: "Elegant café afternoon tea with French and Middle Eastern touches",
  },
  {
    label: "Good For",
    value: "Families, couples, friends, small groups and special plans",
  },
  { label: "Location", value: "Milton Keynes" },
  { label: "Booking", value: "Afternoon tea booking available online" },
  { label: "Contact", value: "Book online or call +44 1908 772177" },
];

const HIGHLIGHTS = [
  {
    icon: "sparkle",
    variant: "gold",
    title: "Elegant Presentation",
    description:
      "A polished afternoon tea experience in Milton Keynes with beautiful plating, sweet details and café warmth.",
  },
  {
    icon: "check",
    variant: "mint",
    title: "Halal-Friendly Choice",
    description:
      "A suitable option for guests looking for halal afternoon tea in Milton Keynes.",
  },
  {
    icon: "users",
    variant: "mint",
    title: "Made for Sharing",
    description:
      "Ideal for family afternoon tea, catch-ups with friends, birthdays and relaxed special occasions.",
  },
];

const INTERNAL_LINKS = [
  {
    label: "Afternoon Tea Menu",
    href: "/afternoon-tea-menu",
    variant: "gold",
    description:
      "View the afternoon tea menu, sweet selections, savoury bites and drink options.",
  },
  {
    label: "Afternoon Tea Booking",
    href: "/afternoon-tea-booking",
    // variant: "mint",
    description:
      "Book your afternoon tea experience directly for your preferred date and group size.",
  },
  {
    label: "Book a Table",
    href: "/booking",
    variant: "mint",
    description:
      "Reserve a table for afternoon tea, brunch, lunch, dinner or a special visit.",
  },
  {
    label: "Our Full Menu",
    href: "/menu",
    variant: "gold",
    description:
      "Explore the full Nour Maison menu beyond afternoon tea, from brunch to dinner.",
  },
  {
    label: "Gallery",
    href: "/gallery",
    // variant: "mint",
    description:
      "See our desserts, drinks, interiors and table presentation before you visit.",
  },
  {
    label: "Contact Us",
    href: "/contact-us",
    variant: "mint",
    description:
      "Find contact details and visit information for Nour Maison in Milton Keynes.",
  },
];

const FAQ_ITEMS = [
  {
    question: "Where can I book afternoon tea in Milton Keynes?",
    answer:
      "You can book afternoon tea in Milton Keynes at Nour Maison through the afternoon tea booking page or the main booking page.",
  },
  {
    question: "Does Nour Maison offer halal afternoon tea in Milton Keynes?",
    answer:
      "Nour Maison is a halal-friendly dining choice in Milton Keynes and is suitable for guests looking for a refined halal afternoon tea experience.",
  },
  {
    question: "Is afternoon tea suitable for families?",
    answer:
      "Yes. Nour Maison works well for family afternoon tea in Milton Keynes, with a relaxed setting for parents, children and small groups.",
  },
  {
    question: "Can I view the afternoon tea menu before booking?",
    answer:
      "Yes. The afternoon tea menu page gives you the direct menu details, while this page explains the experience, booking and occasion suitability.",
  },
  {
    question: "Is Nour Maison good for birthday afternoon tea?",
    answer:
      "Yes. Nour Maison is suitable for birthdays, friend catch-ups, family treats and special occasions in Milton Keynes.",
  },
  {
    question: "Is this page different from the afternoon tea menu page?",
    answer:
      "Yes. This page is an afternoon tea Milton Keynes hub focused on the experience, booking and occasions, while the afternoon tea menu page focuses on the menu itself.",
  },
];

const BREADCRUMBS = [
  { name: "Home", href: "/" },
  { name: "Afternoon Tea in Milton Keynes", href: PATHNAME },
];

const STICKY_BUTTON_SECTIONS = [
  { selector: "#afternoon-tea-content", side: "right" },
  { selector: "#summary-section", side: "right" },
  { selector: "#experience-section", side: "right" },
  { selector: "#presentation-section", side: "right" },
  { selector: "#booking-section", side: "right" },
  { selector: "#highlights-section", side: "left" },
  { selector: "#internal-links-section", side: "left" },
  { selector: "#related-blogs-section", side: "left" },
  { selector: "#faq-section", side: "left" },
  { selector: "#cta-section", side: "left" },
];

const SCHEMAS = [
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${PAGE_URL}#webpage`,
    url: PAGE_URL,
    name: PAGE_TITLE,
    headline: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    inLanguage: "en-GB",
    isPartOf: {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      name: "Nour Maison",
      url: SITE_URL,
    },
    about: {
      "@id": `${SITE_URL}/#cafe`,
    },
    mainEntity: {
      "@id": `${SITE_URL}/#cafe`,
    },
    breadcrumb: {
      "@id": `${PAGE_URL}#breadcrumb`,
    },
    primaryImageOfPage: {
      "@type": "ImageObject",
      url: OG_IMAGE,
      width: 1200,
      height: 630,
      caption: "Afternoon tea in Milton Keynes at Nour Maison",
    },
    potentialAction: {
      "@type": "ReserveAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${SITE_URL}/afternoon-tea-booking`,
        actionPlatform: [
          "https://schema.org/DesktopWebPlatform",
          "https://schema.org/MobileWebPlatform",
        ],
      },
      result: {
        "@type": "FoodEstablishmentReservation",
        name: "Book afternoon tea at Nour Maison",
      },
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "CafeOrCoffeeShop",
    "@id": `${SITE_URL}/#cafe`,
    name: "Nour Maison Café & Brasserie",
    alternateName: "Nour Maison",
    url: SITE_URL,
    telephone: "+44 1908 772177",
    image: OG_IMAGE,
    logo: `${SITE_URL}/images/logo.png`,
    description:
      "Nour Maison is a café and brasserie in Milton Keynes serving afternoon tea, brunch, desserts, drinks, halal-friendly dining and special occasion experiences.",
    servesCuisine: [
      "Afternoon Tea",
      "Cafe",
      "Halal",
      "Desserts",
      "Pastries",
      "Tea",
      "Coffee",
      "French",
      "Middle Eastern",
      "Fusion",
    ],
    priceRange: "££",
    acceptsReservations: true,
    menu: `${SITE_URL}/afternoon-tea-menu`,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Milton Keynes",
      addressRegion: "Buckinghamshire",
      addressCountry: "GB",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 52.0406,
      longitude: -0.7594,
    },
    openingHoursSpecification: [
      {
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
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": `${PAGE_URL}#breadcrumb`,
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: SITE_URL,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Afternoon Tea in Milton Keynes",
        item: PAGE_URL,
      },
    ],
  },
];

export default function AfternoonTeaMiltonKeynesPage() {
  return (
    <div>
      <StickyBookNowButton
        href="/afternoon-tea-booking"
        label="Book Now"
        desktopTop="68%"
        sections={STICKY_BUTTON_SECTIONS}
      />

      <SeoSchemas schemas={SCHEMAS} pageId="afternoon-tea-mk" />

      <PagesBanner
        bottomBg={false}
        slogan={
          <div className="text-base sm:text-lg md:text-2xl xl:text-3xl px-2">
            Delicate sweets, savoury bites and a slower café moment.
            <br />
            Afternoon tea in Milton Keynes, served with Nour Maison elegance.
          </div>
        }
        title={"Afternoon Tea in Milton Keynes"}
        scrollTo={"afternoon-tea-content"}
      />

      <main
        id="afternoon-tea-content"
        className="halal-mk-content w-full relative py-20 sm:py-28 md:py-36 z-10 overflow-hidden"
        aria-labelledby="afternoon-tea-heading"
        data-book-button-side="right"
      >
        <header className="w-full max-w-[90%] sm:max-w-2xl md:max-w-3xl lg:max-w-4xl xl:max-w-5xl mx-auto px-3 sm:px-4 md:px-6 text-center mb-8 sm:mb-10 md:mb-14 mt-10 relative z-10">
          <p className="font-pacifico text-goldenOrange text-xl sm:text-2xl md:text-3xl lg:text-4xl mb-2 sm:mb-3">
            A Refined Café Treat
          </p>

          <h1
            id="afternoon-tea-heading"
            className="font-seasons text-softMintGreen text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl mb-3 sm:mb-4 md:mb-5 leading-tight tracking-wide"
          >
            Afternoon Tea{" "}
            <span className="text-goldenOrange">in Milton Keynes</span>{" "}
            <span className="block mt-1 sm:mt-2">
              for Slow, Beautiful Moments
            </span>
          </h1>

          <p className="font-playfair text-logoGold text-base sm:text-lg md:text-xl leading-relaxed md:leading-loose max-w-5xl mx-auto">
            For guests searching for{" "}
            <span className="text-goldenOrange font-semibold">
              afternoon tea Milton Keynes
            </span>
            , Nour Maison offers a café experience built around beautiful
            presentation, relaxed hospitality and plates made for sharing.
            Expect{" "}
            <span className="text-softMintGreen font-semibold">
              halal afternoon tea Milton Keynes
            </span>{" "}
            suitability, elegant sweets, savoury bites, artisan drinks and an
            atmosphere that works for families, friends and special occasions.
            <br />
            <span className="text-logoGold font-medium">
              This page is your experience guide. For the direct food selection,
              visit the afternoon tea menu.
            </span>
          </p>
        </header>

        <div id="summary-section" data-book-button-side="left">
          <BreadcrumbTrail items={BREADCRUMBS} />
          <QuickSummary
            items={SUMMARY_ITEMS}
            ctaText="Book Afternoon Tea"
            ctaLink="/afternoon-tea-booking"
            variant="mint"
          />
        </div>

        <div id="experience-section" data-book-button-side="right">
          <ImageTextBlock
            eyebrow="The Experience"
            heading="More Than Tea and Cake"
            text={
              <>
                <p>
                  Afternoon tea should feel like a pause in the day, not just a
                  menu item. At Nour Maison, the experience is built around
                  conversation, sharing plates, sweet details and a café setting
                  that feels calm without becoming too formal.
                </p>
                <p className="mt-3">
                  It is a strong choice for afternoon tea MK searches when you
                  want something elegant, comfortable and easy to plan for the
                  people joining you.
                </p>
              </>
            }
            imageSrc="/images/seo/afternoon-tea-milton-keynes/afternoon-tea-experience-nour-maison.webp"
            imageAlt="Afternoon tea experience at Nour Maison in Milton Keynes"
            imagePosition="center 70%"
          />
        </div>

        <div id="presentation-section" data-book-button-side="left">
          <ImageTextBlock
            eyebrow="Presentation"
            heading="A Table That Feels Occasion Ready"
            text={
              <>
                <p>
                  The best afternoon tea Milton Keynes experience is often about
                  the details: colour, texture, balance, drink pairings and the
                  feeling that the table has been prepared with care.
                </p>
                <p className="mt-3">
                  Nour Maison brings that sense of occasion through refined
                  plating, delicate sweets, savoury bites and a warm café
                  brasserie mood that photographs well without feeling staged.
                </p>
              </>
            }
            imageSrc="/images/seo/afternoon-tea-milton-keynes/elegant-afternoon-tea-presentation.webp"
            imageAlt="Elegant afternoon tea presentation in Milton Keynes at Nour Maison"
            reverse
          />
        </div>

        <div id="booking-section" data-book-button-side="right">
          <ImageTextBlock
            eyebrow="Booking & Occasions"
            heading="For Friends, Family and Small Celebrations"
            text={
              <>
                <p>
                  Afternoon tea booking Milton Keynes searches usually come with
                  a plan behind them: a birthday, a family afternoon tea, a
                  friends’ catch-up, a small celebration or a quiet treat that
                  needs to feel special.
                </p>
                <p className="mt-3">
                  Book ahead through the afternoon tea booking page, especially
                  for groups and occasion visits. The plan stays simple, the
                  table feels ready, and everyone gets to pretend they were
                  always this organised.
                </p>
              </>
            }
            imageSrc="/images/seo/afternoon-tea-milton-keynes/family-afternoon-tea-milton-keynes.webp"
            imageAlt="Family afternoon tea in Milton Keynes at Nour Maison"
          />
        </div>

        <div id="highlights-section" data-book-button-side="left">
          <HighlightsGrid items={HIGHLIGHTS} />
        </div>

        <div id="internal-links-section" data-book-button-side="right">
          <InternalLinksGrid
            eyebrow="Explore"
            heading="Plan Your Afternoon Tea Visit"
            links={INTERNAL_LINKS}
          />
        </div>

        <div id="related-blogs-section" data-book-button-side="right">
          <RelatedSeoBlogs
            pageNumber={10}
            pageSlug="afternoon-tea-milton-keynes"
            title="Related Afternoon Tea Guides"
            description="Explore Nour Maison articles about afternoon tea, desserts, café visits, family treats and special occasions in Milton Keynes."
            limit={6}
          />
        </div>

        <div id="faq-section" data-book-button-side="left">
          <FAQSection
            eyebrow="Good to Know"
            heading="Afternoon Tea FAQs"
            items={FAQ_ITEMS}
          />
        </div>

        <div id="cta-section" data-book-button-side="left">
          <CTABlock
            eyebrow="Ready for Afternoon Tea?"
            heading="Book Afternoon Tea at Nour Maison"
            variant="mint"
            description={
              <>
                Choose{" "}
                <span className="font-nour text-logoGold font-semibold">
                  Nour Maison
                </span>{" "}
                for afternoon tea in Milton Keynes with elegant presentation,
                halal-friendly suitability, warm café hospitality and a setting
                made for{" "}
                <span className="text-logoGold">
                  family treats, friends, birthdays and special occasions
                </span>
                .
              </>
            }
            primaryCTA={{
              text: "Book Afternoon Tea",
              href: "/afternoon-tea-booking",
            }}
            secondaryCTA={{
              text: "View Afternoon Tea Menu",
              href: "/afternoon-tea-menu",
            }}
          />
        </div>
      </main>
    </div>
  );
}
