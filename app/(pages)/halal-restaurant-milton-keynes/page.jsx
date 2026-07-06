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
const PATHNAME = "/halal-restaurant-milton-keynes";
const PAGE_URL = `${SITE_URL}${PATHNAME}`;
const OG_IMAGE = `${SITE_URL}/images/seo/halal-restaurant/halal-restaurant-milton-keynes-og.webp`;
const PAGE_BANNER_IMAGE =
  "/images/seo/halal-restaurant/halal-restaurant-milton-keynes-og.webp";

const PAGE_TITLE = "Halal Restaurant in Milton Keynes | Nour Maison";
const PAGE_DESCRIPTION =
  "Looking for a halal restaurant in Milton Keynes? Nour Maison brings together French elegance and Middle Eastern warmth with a fully halal menu";

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  alternates: { canonical: PAGE_URL },
  keywords: [
    "halal restaurant Milton Keynes",
    "halal restaurant MK",
    "best halal restaurant Milton Keynes",
    "halal dining Milton Keynes",
    "halal French restaurant Milton Keynes",
    "halal Middle Eastern restaurant Milton Keynes",
    "halal family restaurant Milton Keynes",
    "halal restaurant near me Milton Keynes",
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
    title: "Halal Restaurant in Milton Keynes | Nour Maison",
    description: PAGE_DESCRIPTION,
    siteName: "Nour Maison Café",
    locale: "en_GB",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Nour Maison halal restaurant in Milton Keynes serving French and Middle Eastern halal dining",
        type: "image/webp",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Halal Restaurant in Milton Keynes | Nour Maison",
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
  { label: "Best For", value: "Halal dining, family meals, special occasions" },
  { label: "Cuisine", value: "French & Middle Eastern fusion" },
  { label: "Halal", value: "Fully halal menu" },
  { label: "Location", value: "149 Grafton Gate, Milton Keynes, MK9 1AE" },
  { label: "Hours", value: "Open daily: 9am–10pm" },
  { label: "Booking", value: "Online or call +44 1908 772177" },
];

const HIGHLIGHTS = [
  {
    icon: "users",
    variant: "mint",
    title: "Family Friendly",
    description:
      "Relaxed dining for families with a dedicated kids menu and a warm, welcoming atmosphere.",
  },
  {
    icon: "check",
    variant: "gold",
    title: "Fully Halal",
    description:
      "Every dish on our menu is halal. Dine with complete confidence and peace of mind.",
  },
  {
    icon: "sparkle",
    variant: "mint",
    title: "Perfect for Occasions",
    description:
      "From birthdays and anniversaries to Eid celebrations, we make every visit special.",
  },
];

const INTERNAL_LINKS = [
  {
    label: "Our Full Menu",
    href: "/menu",
    variant: "gold",
    description: "Explore breakfast, brunch, lunch and dinner options.",
  },
  {
    label: "Book a Table",
    href: "/booking",
    description: "Reserve your spot at Nour Maison.",
  },
  {
    label: "Afternoon Tea",
    href: "/afternoon-tea-menu",
    variant: "mint",
    description: "A refined afternoon tea experience at £29.95 per person.",
  },
  {
    label: "Roast Menu",
    href: "/roast-menu",
    description: "Our halal roast dinner, perfect for Sundays.",
  },
  {
    label: "Kids Menu",
    href: "/kids-menu",
    description: "Dishes designed for younger guests.",
  },
  {
    label: "About Us",
    href: "/about-us",
    variant: "cream",
    description: "Our story, our passion, and the people behind Nour Maison.",
  },
  {
    label: "Gallery",
    href: "/gallery",
    variant: "mint",
    description: "A visual taste of our food, space, and atmosphere.",
  },
  {
    label: "Our Blog",
    href: "/all-blogs",
    description: "Stories, recipes, and moments from Nour Maison.",
  },
  {
    label: "Contact Us",
    href: "/contact-us",
    variant: "gold",
    description: "Get in touch or find directions to our restaurant.",
  },
];

const FAQ_ITEMS = [
  {
    question: "Is Nour Maison a halal restaurant?",
    answer:
      "Yes. Nour Maison serves a fully halal menu. Every dish is prepared with halal ingredients, so you can dine with confidence whether you are visiting for breakfast, brunch, lunch, afternoon tea, or dinner.",
  },
  {
    question: "What type of food does Nour Maison serve?",
    answer:
      "Nour Maison blends French culinary elegance with Middle Eastern warmth and flavours. Our menu includes breakfast, brunch, lunch, afternoon tea, roast dinners, and an evening dining menu — all halal.",
  },
  {
    question: "Where is Nour Maison located?",
    answer:
      "We are located at 149 Grafton Gate, Milton Keynes, MK9 1AE. We are easily accessible with nearby parking available.",
  },
  {
    question: "Can I book a table online?",
    answer:
      "Yes. You can book a table directly through our website at nourmaison.co.uk/booking or call us on +44 1908 772177.",
  },
  {
    question: "Is Nour Maison suitable for families with children?",
    answer:
      "Absolutely. We are a family-friendly restaurant with a dedicated kids menu, a relaxed atmosphere, and welcoming hospitality for guests of all ages.",
  },
  {
    question: "Does Nour Maison cater for special occasions?",
    answer:
      "Yes. Whether it is a birthday, anniversary, Eid celebration, or any special gathering, we can accommodate your occasion. Contact us for group bookings and special arrangements.",
  },
  {
    question: "What are the opening hours?",
    answer: "We are open every day from 9am to 10pm.",
  },
];

const BREADCRUMBS = [
  { name: "Home", href: "/" },
  { name: "Halal Restaurant in Milton Keynes", href: PATHNAME },
];

const STICKY_BUTTON_SECTIONS = [
  { selector: "#halal-restaurant-content", side: "right" },
  { selector: "#summary-section", side: "right" },
  { selector: "#halal-trust-section", side: "right" },
  { selector: "#fusion-section", side: "right" },
  { selector: "#all-day-section", side: "right" },
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
        "Halal restaurant in Milton Keynes at Nour Maison Café & Brasserie",
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
        name: "Book a table at Nour Maison",
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
      "Nour Maison is a halal French and Middle Eastern café and brasserie in Milton Keynes, serving breakfast, brunch, lunch, afternoon tea, roast dinners, and evening dining.",
    servesCuisine: [
      "Halal",
      "French",
      "Middle Eastern",
      "Fusion",
      "Breakfast",
      "Brunch",
      "Lunch",
      "Afternoon Tea",
      "Roast Dinners",
      "Evening Dining",
    ],
    priceRange: "££",
    acceptsReservations: true,
    menu: `${SITE_URL}/menu`,
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
    hasMap:
      "https://www.google.com/maps/search/?api=1&query=Nour+Maison+149+Grafton+Gate+Milton+Keynes+MK9+1AE",
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
        name: "Halal Restaurant in Milton Keynes",
        item: PAGE_URL,
      },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${PAGE_URL}#faq`,
    mainEntity: FAQ_ITEMS.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  },
];

export default function HalalRestaurantMiltonKeynesPage() {
  return (
    <div>
      <StickyBookNowButton
        href="/booking"
        label="Book Now"
        desktopTop="68%"
        sections={STICKY_BUTTON_SECTIONS}
      />

      <SeoSchemas schemas={SCHEMAS} pageId="halal-restaurant-mk" />

      <PagesBanner
        bottomBg={false}
        // images={[PAGE_BANNER_IMAGE]}
        slogan={
          <div className="text-base sm:text-lg md:text-2xl xl:text-3xl px-2">
            French elegance meets Middle Eastern warmth.
            <br />A fully halal dining experience in the heart of Milton Keynes.
          </div>
        }
        title={"Halal Restaurant in Milton Keynes"}
        scrollTo={"halal-restaurant-content"}
      />

      <main
        id="halal-restaurant-content"
        className="halal-mk-content w-full relative py-20 sm:py-28 md:py-36 z-10 overflow-hidden"
        aria-labelledby="halal-restaurant-heading"
        data-book-button-side="right"
      >
        <header className="w-full max-w-[90%] sm:max-w-2xl md:max-w-3xl lg:max-w-4xl xl:max-w-5xl mx-auto px-3 sm:px-4 md:px-6 text-center mb-8 sm:mb-10 md:mb-14 mt-10 relative z-10">
          <p className="font-pacifico text-goldenOrange text-xl sm:text-2xl md:text-3xl lg:text-4xl mb-2 sm:mb-3">
            Nour Maison Brasserie
          </p>

          <h1
            id="halal-restaurant-heading"
            className="font-seasons text-softMintGreen text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl mb-3 sm:mb-4 md:mb-5 leading-tight tracking-wide"
          >
            The Finest{" "}
            <span className="text-goldenOrange">Halal Restaurant</span>{" "}
            <span className="block mt-1 sm:mt-2">in Milton Keynes</span>
          </h1>

          <p className="font-playfair text-logoGold text-base sm:text-lg md:text-xl leading-relaxed md:leading-loose max-w-5xl mx-auto">
            Welcome to{" "}
            <span className="text-goldenOrange font-semibold">Nour Maison</span>{" "}
            — a halal café brasserie on Grafton Gate, blending{" "}
            <span className="text-softMintGreen font-semibold">
              French culinary elegance
            </span>{" "}
            with the{" "}
            <span className="text-goldenOrange font-semibold">
              warmth and flavours of the Middle East
            </span>
            . Every dish on our menu is{" "}
            <span className="text-softMintGreen font-semibold">
              fully halal
            </span>
            , crafted for families, friends, and every occasion.
            <br />
            <span className="text-logoGold font-medium">
              Breakfast, brunch, afternoon tea, roast dinners and evening dining
            </span>{" "}
            — all in one place. Open daily from 9am to 10pm.
          </p>
        </header>

        <div id="summary-section" data-book-button-side="left">
          <BreadcrumbTrail items={BREADCRUMBS} />
          <QuickSummary
            items={SUMMARY_ITEMS}
            ctaText="Book a Table"
            ctaLink="/booking"
            variant="mint"
          />
        </div>

        <div id="halal-trust-section" data-book-button-side="right">
          <ImageTextBlock
            eyebrow="Halal You Can Trust"
            heading="Halal Dining, Without Compromise"
            text={
              <>
                <p>
                  At{" "}
                  <span className="text-goldenOrange font-semibold">
                    Nour Maison
                  </span>
                  , halal is not just a label — it is the foundation of how we
                  cook and serve. Our{" "}
                  <span className="text-softMintGreen font-semibold">
                    entire menu is halal
                  </span>
                  , from the ingredients we source to the dishes we present.
                </p>
                <p className="mt-3">
                  You do not need to ask which items are suitable. Everything is
                  prepared for you to enjoy with complete peace of mind —
                  whether you are dining alone, with family, or celebrating a
                  special occasion.
                </p>
              </>
            }
            imageSrc="/images/seo/halal-restaurant/halal-roast-dinner-nour-maison-milton-keynes.webp"
            imageAlt="Halal Middle Eastern brunch at Nour Maison halal restaurant in Milton Keynes"
          />
        </div>

        <div id="fusion-section" data-book-button-side="left">
          <ImageTextBlock
            eyebrow="A Fusion of Two Worlds"
            heading="French Elegance, Middle Eastern Soul"
            text={
              <>
                <p>
                  Our kitchen draws from two rich culinary traditions. The{" "}
                  <span className="text-goldenOrange font-semibold">
                    precision and presentation of French cuisine
                  </span>{" "}
                  meets the{" "}
                  <span className="text-softMintGreen font-semibold">
                    bold flavours, spices, and warmth of Middle Eastern cooking
                  </span>
                  .
                </p>
                <p className="mt-3">
                  The result is a menu that feels both familiar and distinctive
                  — dishes you will want to return to, and flavours that stay
                  with you long after the meal.
                </p>
              </>
            }
            imageSrc="/images/seo/halal-restaurant/pistachio-croissant-close-up-nour-maison.webp"
            imageAlt="French-inspired pistachio croissant at Nour Maison halal café brasserie in Milton Keynes"
            reverse
          />
        </div>

        <div id="all-day-section" data-book-button-side="right">
          <ImageTextBlock
            eyebrow="Open Daily from 9am"
            heading="From Breakfast to Dinner"
            text={
              <>
                <p>
                  Nour Maison is not just a restaurant for one moment of the
                  day. We serve{" "}
                  <span className="text-goldenOrange font-semibold">
                    breakfast, brunch, lunch, afternoon tea, roast dinners
                  </span>
                  , and an evening dining menu — all from 9am to 10pm, every day
                  of the week.
                </p>
                <p className="mt-3">
                  Whether you want a quiet morning coffee, a celebratory{" "}
                  <span className="text-softMintGreen font-semibold">
                    afternoon tea
                  </span>
                  , a hearty Sunday roast, or an intimate dinner — there is
                  always a reason to visit.
                </p>
              </>
            }
            imageSrc="/images/seo/halal-restaurant/halal-breakfast-nour-maison-milton-keynes.webp"
            imageAlt="Halal breakfast in Milton Keynes at Nour Maison café and brasserie"
          />
        </div>

        <div id="highlights-section" data-book-button-side="left">
          <HighlightsGrid items={HIGHLIGHTS} />
        </div>

        <div id="internal-links-section" data-book-button-side="right">
          <InternalLinksGrid
            eyebrow="Discover"
            heading="Explore More at Nour Maison"
            links={INTERNAL_LINKS}
          />
        </div>

        <div id="related-blogs-section" data-book-button-side="right">
          <RelatedSeoBlogs
            pageNumber={2}
            pageSlug="halal-restaurant-milton-keynes"
            title="Related Halal Dining Articles"
            description="Explore more guides about halal restaurants, halal food, brunch, family dining, and the Nour Maison experience in Milton Keynes."
            limit={6}
          />
        </div>

        <div id="faq-section" data-book-button-side="left">
          <FAQSection
            eyebrow="Good to Know"
            heading="Frequently Asked Questions"
            items={FAQ_ITEMS}
          />
        </div>

        <div id="cta-section" data-book-button-side="right">
          <CTABlock
            eyebrow="Ready to Experience Nour Maison?"
            heading="Book Your Table Today"
            variant="mint"
            description={
              <>
                Reserve your table at{" "}
                <span className="font-nour text-logoGold font-semibold">
                  Nour Maison
                </span>{" "}
                and experience halal French & Middle Eastern dining in the heart
                of Milton Keynes. Open daily from 9am to 10pm. Perfect for{" "}
                <span className="text-logoGold">
                  family gatherings, celebrations, and quiet moments
                </span>
                .
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
