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
const PATHNAME = "/cafe-milton-keynes";
const PAGE_URL = `${SITE_URL}${PATHNAME}`;
const OG_IMAGE = `${SITE_URL}/images/seo/cafe-milton-keynes/cafe-milton-keynes-og.webp`;

const PAGE_TITLE = "Cafe in Milton Keynes | Nour Maison";
const PAGE_DESCRIPTION =
  "Visit Nour Maison cafe in Milton Keynes for artisan coffee, halal brunch, desserts, afternoon tea and elegant all-day cafe dining";

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  alternates: { canonical: PAGE_URL },
  keywords: [
    "cafe Milton Keynes",
    "cafe in Milton Keynes",
    "best cafe Milton Keynes",
    "cafe MK",
    "cafe near me Milton Keynes",
    "artisan cafe Milton Keynes",
    "coffee Milton Keynes",
    "coffee shop Milton Keynes",
    "brunch cafe Milton Keynes",
    "halal cafe Milton Keynes",
    "dessert cafe Milton Keynes",
    "afternoon tea cafe Milton Keynes",
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
        alt: "Nour Maison cafe in Milton Keynes with coffee, brunch and desserts",
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
    value: "Coffee, brunch, desserts, catch-ups and afternoon tea",
  },
  {
    label: "Cafe Style",
    value: "Artisan café with elegant brasserie touches",
  },
  {
    label: "Good For",
    value: "Friends, families, work breaks and relaxed visits",
  },
  { label: "Location", value: "149 Grafton Gate, Milton Keynes, MK9 1AE" },
  { label: "Hours", value: "Open daily: 9am–10pm" },
  { label: "Booking", value: "Walk in or book online" },
];

const HIGHLIGHTS = [
  {
    icon: "sparkle",
    variant: "mint",
    title: "Artisan Cafe Feel",
    description:
      "A warm, polished café space for coffee, brunch, desserts and slower moments.",
  },
  {
    icon: "check",
    variant: "gold",
    title: "Halal-Friendly Choices",
    description:
      "Enjoy café dining with halal-friendly food across breakfast, brunch and all-day plates.",
  },
  {
    icon: "users",
    variant: "mint",
    title: "Easy Social Spot",
    description:
      "A comfortable place for friends, family visits, small meetings and afternoon treats.",
  },
];

const INTERNAL_LINKS = [
  {
    label: "Our Full Menu",
    href: "/menu",
    variant: "gold",
    description:
      "Explore coffee, brunch, lunch, desserts, dinner and signature dishes.",
  },
  {
    label: "Book a Table",
    href: "/booking",
    description: "Reserve your cafe table at Nour Maison in Milton Keynes.",
  },
  {
    label: "Afternoon Tea Menu",
    href: "/afternoon-tea-menu",
    variant: "mint",
    description:
      "Discover our refined afternoon tea menu for relaxed daytime occasions.",
  },
  {
    label: "Afternoon Tea Booking",
    href: "/afternoon-tea-booking",
    // variant: "gold",
    description: "Book your afternoon tea experience directly online.",
  },
  {
    label: "Gallery",
    href: "/gallery",
    description: "See our café space, plated dishes, drinks and table styling.",
  },
  {
    label: "Kids Menu",
    href: "/kids-menu",
    variant: "cream",
    description: "View family-friendly options for younger guests.",
  },
  {
    label: "About Us",
    href: "/about-us",
    variant: "gold",
    description:
      "Learn more about the Nour Maison concept, atmosphere and hospitality.",
  },
  {
    label: "Contact Us",
    href: "/contact-us",
    description: "Find our address, phone number and visit details.",
  },
  {
    label: "Our Blog",
    href: "/all-blogs",
    variant: "mint",
    description: "Read café, brunch, dessert and Milton Keynes dining guides.",
  },
];

const FAQ_ITEMS = [
  {
    question: "Where can I find a cafe in Milton Keynes?",
    answer:
      "Nour Maison is an artisan café and brasserie at 149 Grafton Gate, Milton Keynes, MK9 1AE, serving coffee, brunch, desserts and all-day dining.",
  },
  {
    question: "Does Nour Maison serve coffee and brunch?",
    answer:
      "Yes. Nour Maison is suitable for coffee, breakfast, brunch and relaxed daytime dining in Milton Keynes.",
  },
  {
    question: "Is Nour Maison a halal cafe?",
    answer:
      "Nour Maison offers halal-friendly café dining, with brunch, lunch, desserts, afternoon tea and evening options.",
  },
  {
    question: "Can I visit Nour Maison for afternoon tea?",
    answer:
      "Yes. Nour Maison offers an afternoon tea experience, and you can view the menu or book afternoon tea online.",
  },
  {
    question: "Is the cafe suitable for families?",
    answer:
      "Yes. Nour Maison is family-friendly, with a welcoming atmosphere and a kids menu available.",
  },
  {
    question: "Do I need to book before visiting?",
    answer:
      "Walk-ins may be possible, but booking online is recommended for busier times, afternoon tea and group visits.",
  },
  {
    question: "What time is Nour Maison open?",
    answer: "Nour Maison is open daily from 9am to 10pm.",
  },
];

const BREADCRUMBS = [
  { name: "Home", href: "/" },
  { name: "Cafe in Milton Keynes", href: PATHNAME },
];

const STICKY_BUTTON_SECTIONS = [
  { selector: "#cafe-content", side: "right" },
  { selector: "#summary-section", side: "right" },
  { selector: "#cafe-atmosphere-section", side: "right" },
  { selector: "#coffee-brunch-section", side: "right" },
  { selector: "#afternoon-dessert-section", side: "right" },
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
      caption: "Cafe in Milton Keynes at Nour Maison",
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
        name: "Book a cafe table at Nour Maison",
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
      "Nour Maison is an artisan café and brasserie in Milton Keynes, serving coffee, halal-friendly brunch, desserts, afternoon tea and all-day dining.",
    servesCuisine: [
      "Cafe",
      "Coffee",
      "Halal",
      "Breakfast",
      "Brunch",
      "Desserts",
      "Afternoon Tea",
      "French",
      "Middle Eastern",
      "Fusion",
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
        name: "Cafe in Milton Keynes",
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

export default function CafeMiltonKeynesPage() {
  return (
    <div>
      <StickyBookNowButton
        href="/booking"
        label="Book Now"
        desktopTop="68%"
        sections={STICKY_BUTTON_SECTIONS}
      />

      <SeoSchemas schemas={SCHEMAS} pageId="cafe-mk" />

      <PagesBanner
        bottomBg={false}
        slogan={
          <div className="text-base sm:text-lg md:text-2xl xl:text-3xl px-2">
            Coffee, brunch and artisan café moments.
            <br />A warm Milton Keynes café with Nour Maison elegance.
          </div>
        }
        title={"Cafe in Milton Keynes"}
        scrollTo={"cafe-content"}
      />

      <main
        id="cafe-content"
        className="halal-mk-content w-full relative py-20 sm:py-28 md:py-36 z-10 overflow-hidden"
        aria-labelledby="cafe-heading"
        data-book-button-side="right"
      >
        <header className="w-full max-w-[90%] sm:max-w-2xl md:max-w-3xl lg:max-w-4xl xl:max-w-5xl mx-auto px-3 sm:px-4 md:px-6 text-center mb-8 sm:mb-10 md:mb-14 mt-10 relative z-10">
          <p className="font-pacifico text-goldenOrange text-xl sm:text-2xl md:text-3xl lg:text-4xl mb-2 sm:mb-3">
            Artisan Café in Milton Keynes
          </p>

          <h1
            id="cafe-heading"
            className="font-seasons text-softMintGreen text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl mb-3 sm:mb-4 md:mb-5 leading-tight tracking-wide"
          >
            A Stylish <span className="text-goldenOrange">Cafe</span>{" "}
            <span className="block mt-1 sm:mt-2">in Milton Keynes</span>
          </h1>

          <p className="font-playfair text-logoGold text-base sm:text-lg md:text-xl leading-relaxed md:leading-loose max-w-5xl mx-auto">
            Nour Maison is a{" "}
            <span className="text-goldenOrange font-semibold">
              cafe in Milton Keynes
            </span>{" "}
            for slow coffee, colourful brunch plates, sweet treats and relaxed
            dining that still feels considered.
            <br />
            <span className="text-logoGold font-medium">
              Visit for a morning pause, an afternoon tea moment, a family
              catch-up or a café table that turns into a proper meal.
            </span>
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

        <div id="cafe-atmosphere-section" data-book-button-side="right">
          <ImageTextBlock
            eyebrow="Cafe Atmosphere"
            heading="A Softer Place to Pause in Milton Keynes"
            text={
              <>
                <p>
                  A good café should feel easy the moment you sit down. Nour
                  Maison gives that comfort a more elegant edge, with a warm
                  interior, refined table details and a calm setting for coffee,
                  brunch and conversation.
                </p>
                <p className="mt-3">
                  It is the kind of place that works for a quick drink, but also
                  rewards you when you slow down and stay a little longer.
                </p>
              </>
            }
            imageSrc="/images/seo/cafe-milton-keynes/cafe-atmosphere-nour-maison.webp"
            imageAlt="Cafe atmosphere at Nour Maison in Milton Keynes"
            imagePosition="center 85%"
          />
        </div>

        <div id="coffee-brunch-section" data-book-button-side="left">
          <ImageTextBlock
            eyebrow="Coffee, Brunch & Daytime Plates"
            heading="From First Sip to Full Brunch"
            text={
              <>
                <p>
                  If you are looking for a brunch cafe in Milton Keynes, Nour
                  Maison gives you more than the usual coffee-and-cake stop. The
                  menu moves from drinks and lighter bites into plated brunch,
                  lunch and sweet dishes with strong visual appeal.
                </p>
                <p className="mt-3">
                  It is relaxed enough for a weekday break and polished enough
                  for a weekend plan with friends.
                </p>
              </>
            }
            imageSrc="/images/seo/cafe-milton-keynes/coffee-brunch-cafe-milton-keynes.webp"
            imageAlt="Coffee and brunch cafe food at Nour Maison Milton Keynes"
            reverse
          />
        </div>

        <div id="afternoon-dessert-section" data-book-button-side="right">
          <ImageTextBlock
            eyebrow="Sweet Moments"
            heading="Desserts, Afternoon Tea and Little Luxuries"
            text={
              <>
                <p>
                  Nour Maison also suits the softer side of café culture:
                  desserts, tea, mocktails, pastries and afternoon treats that
                  feel a bit more special than everyday.
                </p>
                <p className="mt-3">
                  Come for a catch-up, a small celebration or a quiet table with
                  something beautiful on the plate. Very civilised. Very Nour
                  Maison.
                </p>
              </>
            }
            imageSrc="/images/seo/cafe-milton-keynes/dessert-afternoon-tea-cafe.webp"
            imageAlt="Desserts and afternoon tea cafe experience at Nour Maison"
          />
        </div>

        <div id="highlights-section" data-book-button-side="left">
          <HighlightsGrid items={HIGHLIGHTS} />
        </div>

        <div id="internal-links-section" data-book-button-side="right">
          <InternalLinksGrid
            eyebrow="Explore"
            heading="Make the Most of Your Cafe Visit"
            links={INTERNAL_LINKS}
          />
        </div>

        <div id="related-blogs-section" data-book-button-side="right">
          <RelatedSeoBlogs
            pageNumber={3}
            pageSlug="cafe-milton-keynes"
            title="Related Cafe Guides"
            description="Explore Nour Maison articles about cafes, coffee, brunch, desserts and relaxed dining in Milton Keynes."
            limit={6}
          />
        </div>

        <div id="faq-section" data-book-button-side="left">
          <FAQSection
            eyebrow="Good to Know"
            heading="Cafe FAQs"
            items={FAQ_ITEMS}
          />
        </div>

        <div id="cta-section" data-book-button-side="left">
          <CTABlock
            eyebrow="Plan Your Visit"
            heading="Visit Nour Maison Cafe in Milton Keynes"
            variant="mint"
            description={
              <>
                Join{" "}
                <span className="font-nour text-logoGold font-semibold">
                  Nour Maison
                </span>{" "}
                for coffee, brunch, desserts and elegant café dining in Milton
                Keynes. Ideal for{" "}
                <span className="text-logoGold">
                  relaxed catch-ups, family visits, afternoon tea and all-day
                  dining
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
