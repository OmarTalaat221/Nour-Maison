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
const PATHNAME = "/best-halal-restaurant-milton-keynes";
const PAGE_URL = `${SITE_URL}${PATHNAME}`;
const OG_IMAGE = `${SITE_URL}/images/seo/best-halal-restaurant-milton-keynes/best-halal-restaurant-milton-keynes-og.webp`;

const PAGE_TITLE = "Best Halal Restaurant in Milton Keynes | Nour Maison";
const PAGE_DESCRIPTION =
  "Looking for one of the best halal dining experiences in Milton Keynes? Nour Maison offers halal food, warm hospitality and elegant French Middle Eastern dining";

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  alternates: { canonical: PAGE_URL },
  keywords: [
    "best halal restaurant Milton Keynes",
    "best halal restaurant MK",
    "best halal restaurant near me Milton Keynes",
    "top halal restaurant Milton Keynes",
    "premium halal restaurant Milton Keynes",
    "elegant halal restaurant Milton Keynes",
    "halal restaurant Milton Keynes",
    "halal dining Milton Keynes",
    "halal food Milton Keynes",
    "French halal restaurant Milton Keynes",
    "Middle Eastern halal restaurant Milton Keynes",
    "halal family restaurant Milton Keynes",
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
        alt: "Elegant halal restaurant dining experience in Milton Keynes at Nour Maison",
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
  category: "Restaurant",
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
    value: "Premium halal dining, family meals, brunch, dinner and occasions",
  },
  {
    label: "Dining Style",
    value:
      "Elegant halal café brasserie with French and Middle Eastern influence",
  },
  {
    label: "Good For",
    value: "Couples, families, friends, groups and relaxed celebrations",
  },
  { label: "Location", value: "Milton Keynes" },
  { label: "Hours", value: "Open daily: 9am–10pm" },
  { label: "Booking", value: "Book online or call +44 1908 772177" },
];

const HIGHLIGHTS = [
  {
    icon: "check",
    variant: "gold",
    title: "Halal Dining Confidence",
    description:
      "A strong option for guests comparing halal restaurants in Milton Keynes and looking for clarity, comfort and variety.",
  },
  {
    icon: "sparkle",
    variant: "mint",
    title: "Elegant Food & Atmosphere",
    description:
      "French-inspired presentation, Middle Eastern warmth and a polished café brasserie setting.",
  },
  {
    icon: "users",
    variant: "mint",
    title: "Suitable for Many Visits",
    description:
      "Works for brunch, dinner, family meals, date nights, group bookings and special occasions.",
  },
];

const INTERNAL_LINKS = [
  {
    label: "Our Full Menu",
    href: "/menu",
    variant: "gold",
    description:
      "Explore breakfast, brunch, lunch, dinner, desserts, drinks and halal-friendly dishes.",
  },
  {
    label: "Book a Table",
    href: "/booking",
    variant: "mint",
    description:
      "Reserve your halal dining table at Nour Maison in Milton Keynes.",
  },
  {
    label: "Kids Menu",
    href: "/kids-menu",
    variant: "cream",
    description: "View family-friendly choices for younger guests.",
  },
  {
    label: "Afternoon Tea Menu",
    href: "/afternoon-tea-menu",
    variant: "gold",
    description:
      "Discover a refined afternoon tea experience with Nour Maison style.",
  },
  {
    label: "Gallery",
    href: "/gallery",
    variant: "mint",
    description:
      "See our food, interiors, drinks and table moments before your visit.",
  },
  {
    label: "Contact Us",
    href: "/contact-us",
    variant: "gold",
    description:
      "Find contact details and visit information for Nour Maison in Milton Keynes.",
  },
];

const FAQ_ITEMS = [
  {
    question:
      "Is Nour Maison one of the best halal restaurant options in Milton Keynes?",
    answer:
      "If you are looking for one of the best halal dining experiences in Milton Keynes, Nour Maison is a strong choice because it brings together halal-friendly food, warm hospitality and an elegant French-Middle Eastern café brasserie style.",
  },
  {
    question: "Does Nour Maison make direct best restaurant claims?",
    answer:
      "No. Dining preferences are personal, so Nour Maison focuses on what guests can actually experience: halal food, comfortable atmosphere, elegant presentation and flexible dining for brunch, dinner, family meals and occasions.",
  },
  {
    question: "What makes a halal restaurant worth choosing?",
    answer:
      "A halal restaurant is worth choosing when the menu feels clear, the food has variety, the atmosphere is comfortable, the service feels welcoming and booking a table is simple.",
  },
  {
    question:
      "Is Nour Maison suitable for premium halal dining in Milton Keynes?",
    answer:
      "Yes. Nour Maison suits guests looking for premium halal restaurant dining in Milton Keynes, with refined plating, warm interiors and a relaxed café brasserie feel.",
  },
  {
    question: "Can I book a table online?",
    answer:
      "Yes. You can book through the Nour Maison booking page or call +44 1908 772177.",
  },
  {
    question: "Is Nour Maison suitable for families?",
    answer:
      "Yes. Nour Maison is suitable for family halal dining, with a relaxed atmosphere and a kids menu available.",
  },
];

const BREADCRUMBS = [
  { name: "Home", href: "/" },
  { name: "Best Halal Restaurant in Milton Keynes", href: PATHNAME },
];

const STICKY_BUTTON_SECTIONS = [
  { selector: "#best-halal-restaurant-content", side: "right" },
  { selector: "#summary-section", side: "right" },
  { selector: "#choice-section", side: "right" },
  { selector: "#atmosphere-section", side: "right" },
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
      "@id": `${SITE_URL}/#restaurant`,
    },
    mainEntity: {
      "@id": `${SITE_URL}/#restaurant`,
    },
    breadcrumb: {
      "@id": `${PAGE_URL}#breadcrumb`,
    },
    primaryImageOfPage: {
      "@type": "ImageObject",
      url: OG_IMAGE,
      width: 1200,
      height: 630,
      caption:
        "Best halal restaurant in Milton Keynes search page for Nour Maison",
    },
    potentialAction: {
      "@type": "ReserveAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${SITE_URL}/booking`,
        actionPlatform: [
          "https://schema.org/DesktopWebPlatform",
          "https://schema.org/MobileWebPlatform",
        ],
      },
      result: {
        "@type": "FoodEstablishmentReservation",
        name: "Book halal dining at Nour Maison",
      },
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    "@id": `${SITE_URL}/#restaurant`,
    name: "Nour Maison Café & Brasserie",
    alternateName: "Nour Maison",
    url: SITE_URL,
    telephone: "+44 1908 772177",
    image: OG_IMAGE,
    logo: `${SITE_URL}/images/logo.png`,
    description:
      "Nour Maison is a halal café, brasserie and restaurant in Milton Keynes, serving French and Middle Eastern inspired breakfast, brunch, lunch, desserts, afternoon tea, roast dining and evening meals.",
    servesCuisine: [
      "Halal",
      "French",
      "Middle Eastern",
      "Fusion",
      "Cafe",
      "Breakfast",
      "Brunch",
      "Lunch",
      "Desserts",
      "Afternoon Tea",
      "Roast Dinners",
      "Dinner",
    ],
    priceRange: "££",
    acceptsReservations: true,
    menu: `${SITE_URL}/menu`,
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
        name: "Best Halal Restaurant in Milton Keynes",
        item: PAGE_URL,
      },
    ],
  },
];

export default function BestHalalRestaurantMiltonKeynesPage() {
  return (
    <div>
      <StickyBookNowButton
        href="/booking"
        label="Book Now"
        desktopTop="68%"
        sections={STICKY_BUTTON_SECTIONS}
      />

      <SeoSchemas schemas={SCHEMAS} pageId="best-halal-restaurant-mk" />

      <PagesBanner
        bottomBg={false}
        slogan={
          <div className="text-base sm:text-lg md:text-2xl xl:text-3xl px-2">
            Halal dining with comfort, polish and warm hospitality.
            <br />A strong choice for elegant halal food in Milton Keynes.
          </div>
        }
        title={"Best Halal Restaurant in Milton Keynes"}
        scrollTo={"best-halal-restaurant-content"}
      />

      <main
        id="best-halal-restaurant-content"
        className="halal-mk-content w-full relative py-20 sm:py-28 md:py-36 z-10 overflow-hidden"
        aria-labelledby="best-halal-restaurant-heading"
        data-book-button-side="right"
      >
        <header className="w-full max-w-[90%] sm:max-w-2xl md:max-w-3xl lg:max-w-4xl xl:max-w-5xl mx-auto px-3 sm:px-4 md:px-6 text-center mb-8 sm:mb-10 md:mb-14 mt-10 relative z-10">
          <p className="font-pacifico text-goldenOrange text-xl sm:text-2xl md:text-3xl lg:text-4xl mb-2 sm:mb-3">
            Halal Dining Worth Choosing
          </p>

          <h1
            id="best-halal-restaurant-heading"
            className="font-seasons text-softMintGreen text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl mb-3 sm:mb-4 md:mb-5 leading-tight tracking-wide"
          >
            Looking for the{" "}
            <span className="text-goldenOrange">Best Halal Restaurant</span>{" "}
            <span className="block mt-1 sm:mt-2">in Milton Keynes?</span>
          </h1>

          <p className="font-playfair text-logoGold text-base sm:text-lg md:text-xl leading-relaxed md:leading-loose max-w-5xl mx-auto">
            If you are searching for{" "}
            <span className="text-goldenOrange font-semibold">
              one of the best halal dining experiences in Milton Keynes
            </span>
            , Nour Maison brings together halal-friendly food, warm service,
            elegant presentation and a{" "}
            <span className="text-softMintGreen font-semibold">
              French-Middle Eastern dining style
            </span>{" "}
            that feels relaxed but still special.
            <br />
            <span className="text-logoGold font-medium">
              No loud claims, no empty hype — just a comfortable place to eat
              well, book easily and enjoy the table.
            </span>
          </p>
        </header>

        <div id="summary-section" data-book-button-side="left">
          <BreadcrumbTrail items={BREADCRUMBS} />
          <QuickSummary
            items={SUMMARY_ITEMS}
            ctaText="Book Halal Dining"
            ctaLink="/booking"
            variant="mint"
          />
        </div>

        <div id="choice-section" data-book-button-side="right">
          <ImageTextBlock
            eyebrow="What Makes It Worth Choosing"
            heading="A Halal Menu That Fits Different Moments"
            text={
              <>
                <p>
                  When people search for the best halal restaurant Milton
                  Keynes, they are usually comparing more than one thing: menu
                  suitability, atmosphere, comfort, service, booking ease and
                  whether the place works for the people joining them.
                </p>
                <p className="mt-3">
                  Nour Maison is a strong choice because the dining experience
                  works across breakfast, brunch, lunch, desserts, afternoon tea
                  and evening meals, all with a polished café brasserie feel.
                </p>
              </>
            }
            imageSrc="/images/seo/best-halal-restaurant-milton-keynes/halal-menu-suitability-nour-maison.webp"
            imageAlt="Halal menu suitability at Nour Maison Milton Keynes"
            imagePosition="center 70%"
          />
        </div>

        <div id="atmosphere-section" data-book-button-side="left">
          <ImageTextBlock
            eyebrow="Atmosphere & Comfort"
            heading="Elegant Without Feeling Too Formal"
            text={
              <>
                <p>
                  A top halal restaurant in Milton Keynes should not only serve
                  suitable food. It should feel comfortable enough for families,
                  calm enough for couples and polished enough for a meal that
                  matters.
                </p>
                <p className="mt-3">
                  Nour Maison keeps that balance with warm colours, considered
                  table styling, friendly hospitality and a setting that works
                  for everyday visits as well as occasions.
                </p>
              </>
            }
            imageSrc="/images/seo/best-halal-restaurant-milton-keynes/elegant-halal-restaurant-milton-keynes.webp"
            imageAlt="Elegant halal restaurant atmosphere at Nour Maison in Milton Keynes"
            reverse
          />
        </div>

        <div id="booking-section" data-book-button-side="right">
          <ImageTextBlock
            eyebrow="Location & Booking"
            heading="Easy to Plan, Easy to Enjoy"
            text={
              <>
                <p>
                  For searches like best halal restaurant near me Milton Keynes,
                  practical details matter. Guests want a restaurant that is
                  simple to find, clear to book and suitable for the kind of
                  meal they have in mind.
                </p>
                <p className="mt-3">
                  Book online for brunch, dinner, family meals, group visits or
                  a relaxed halal dining experience in Milton Keynes. Less
                  planning drama, more food arriving hot — revolutionary stuff.
                </p>
              </>
            }
            imageSrc="/images/seo/best-halal-restaurant-milton-keynes/premium-halal-dining-milton-keynes.webp"
            imageAlt="Premium halal dining at Nour Maison in Milton Keynes"
          />
        </div>

        <div id="highlights-section" data-book-button-side="left">
          <HighlightsGrid items={HIGHLIGHTS} />
        </div>

        <div id="internal-links-section" data-book-button-side="right">
          <InternalLinksGrid
            eyebrow="Explore"
            heading="Plan Your Halal Dining Visit"
            links={INTERNAL_LINKS}
          />
        </div>

        <div id="related-blogs-section" data-book-button-side="right">
          <RelatedSeoBlogs
            pageNumber={9}
            pageSlug="best-halal-restaurant-milton-keynes"
            title="Related Halal Dining Guides"
            description="Explore Nour Maison articles about halal restaurants, halal food, brunch, family dining and elegant places to eat in Milton Keynes."
            limit={6}
          />
        </div>

        <div id="faq-section" data-book-button-side="left">
          <FAQSection
            eyebrow="Good to Know"
            heading="Best Halal Restaurant Search FAQs"
            items={FAQ_ITEMS}
          />
        </div>

        <div id="cta-section" data-book-button-side="left">
          <CTABlock
            eyebrow="Ready to Visit?"
            heading="Book a Halal Dining Experience at Nour Maison"
            variant="mint"
            description={
              <>
                Choose{" "}
                <span className="font-nour text-logoGold font-semibold">
                  Nour Maison
                </span>{" "}
                if you are looking for one of the best halal restaurant
                experiences in Milton Keynes, with halal-friendly food, warm
                hospitality and elegant French-Middle Eastern dining.
              </>
            }
            primaryCTA={{ text: "Book a Table", href: "/booking" }}
            secondaryCTA={{ text: "View Our Menu", href: "/menu" }}
          />
        </div>
      </main>
    </div>
  );
}
