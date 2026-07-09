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

const SITE_URL = "https://www.nourmaison.co.uk";
const PATHNAME = "/halal-roast-dinner-milton-keynes";
const PAGE_URL = `${SITE_URL}${PATHNAME}`;
const OG_IMAGE = `${SITE_URL}/images/seo/halal-roast-dinner-milton-keynes/halal-roast-dinner-milton-keynes-og.webp`;

const PAGE_TITLE = "Halal Roast Dinner in Milton Keynes | Nour Maison";
const PAGE_DESCRIPTION =
  "Book halal roast dinner in Milton Keynes at Nour Maison for Sunday roast dining, family roast meals, group bookings and warm restaurant hospitality";

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  alternates: { canonical: PAGE_URL },
  keywords: [
    "halal roast dinner Milton Keynes",
    "roast dinner Milton Keynes",
    "halal roast Milton Keynes",
    "Sunday roast Milton Keynes",
    "halal Sunday roast Milton Keynes",
    "best roast dinner Milton Keynes",
    "roast dinner MK",
    "halal roast dinner MK",
    "Sunday dining Milton Keynes",
    "family roast dinner Milton Keynes",
    "group roast dinner Milton Keynes",
    "roast menu Milton Keynes",
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
        alt: "Halal roast dinner in Milton Keynes at Nour Maison with Sunday roast dining",
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
    value: "Halal roast dinner, Sunday dining, families and groups",
  },
  {
    label: "Dining Style",
    value: "Comforting roast plates with warm restaurant hospitality",
  },
  {
    label: "Good For",
    value: "Sunday plans, family meals, group bookings and relaxed dinners",
  },
  { label: "Location", value: "Milton Keynes" },
  { label: "Menu Route", value: "View the roast menu before booking" },
  { label: "Booking", value: "Book online or call +44 1908 772177" },
];

const HIGHLIGHTS = [
  {
    icon: "check",
    variant: "gold",
    title: "Halal Roast Dinner",
    description:
      "A strong choice for guests searching for halal roast dinner in Milton Keynes with comfort and clarity.",
  },
  {
    icon: "users",
    variant: "mint",
    title: "Sunday & Family Dining",
    description:
      "Built for Sunday roast plans, family roast dinners, group visits and slower weekend meals.",
  },
  {
    icon: "sparkle",
    variant: "mint",
    title: "Warm Restaurant Setting",
    description:
      "A relaxed but polished place to enjoy roast dining with Nour Maison’s café brasserie atmosphere.",
  },
];

const INTERNAL_LINKS = [
  {
    label: "Roast Menu",
    href: "/roast-menu",
    variant: "gold",
    description:
      "View the roast menu before planning your halal roast dinner visit.",
  },
  {
    label: "Book a Table",
    href: "/booking",
    variant: "mint",
    description:
      "Reserve a table for Sunday roast, family dining or group roast plans.",
  },
  {
    label: "Our Full Menu",
    href: "/menu",
    variant: "gold",
    description:
      "Explore breakfast, brunch, lunch, dinner, desserts, drinks and signature dishes.",
  },
  {
    label: "Kids Menu",
    href: "/kids-menu",
    variant: "cream",
    description:
      "Plan a family roast visit with simple choices for younger guests.",
  },
  {
    label: "Gallery",
    href: "/gallery",
    variant: "mint",
    description:
      "See Nour Maison food, interiors, drinks and table moments before you visit.",
  },
  {
    label: "Contact Us",
    href: "/contact-us",
    variant: "gold",
    description:
      "Find visit details and contact information for Nour Maison in Milton Keynes.",
  },
];

const BREADCRUMBS = [
  { name: "Home", href: "/" },
  { name: "Halal Roast Dinner in Milton Keynes", href: PATHNAME },
];

const STICKY_BUTTON_SECTIONS = [
  { selector: "#halal-roast-content", side: "right" },
  { selector: "#summary-section", side: "right" },
  { selector: "#roast-dinner-section", side: "right" },
  { selector: "#sunday-section", side: "right" },
  { selector: "#family-section", side: "right" },
  { selector: "#highlights-section", side: "left" },
  { selector: "#internal-links-section", side: "left" },
  { selector: "#related-blogs-section", side: "left" },
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
      caption: "Halal roast dinner in Milton Keynes at Nour Maison",
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
        name: "Book halal roast dinner at Nour Maison",
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
      "Nour Maison is a halal-friendly café, brasserie and restaurant in Milton Keynes serving roast dinner, brunch, lunch, desserts, afternoon tea, dinner and family dining.",
    servesCuisine: [
      "Halal",
      "Roast Dinner",
      "Sunday Roast",
      "British",
      "French",
      "Middle Eastern",
      "Fusion",
      "Cafe",
      "Brunch",
      "Lunch",
      "Dinner",
      "Desserts",
    ],
    priceRange: "££",
    acceptsReservations: true,
    menu: `${SITE_URL}/roast-menu`,
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
        name: "Halal Roast Dinner in Milton Keynes",
        item: PAGE_URL,
      },
    ],
  },
];

export default function HalalRoastDinnerMiltonKeynesPage() {
  return (
    <div>
      <StickyBookNowButton
        href="/booking"
        label="Book Now"
        desktopTop="68%"
        sections={STICKY_BUTTON_SECTIONS}
      />

      <SeoSchemas schemas={SCHEMAS} pageId="halal-roast-dinner-mk" />

      <PagesBanner
        bottomBg={false}
        slogan={
          <div className="text-base sm:text-lg md:text-2xl xl:text-3xl px-2">
            Comforting roast plates, warm hospitality and relaxed Sunday dining.
            <br />
            Halal roast dinner in Milton Keynes, served the Nour Maison way.
          </div>
        }
        title={"Halal Roast Dinner in Milton Keynes"}
        scrollTo={"halal-roast-content"}
      />

      <main
        id="halal-roast-content"
        className="halal-mk-content w-full relative py-20 sm:py-28 md:py-36 z-10 overflow-hidden"
        aria-labelledby="halal-roast-heading"
        data-book-button-side="right"
      >
        <header className="w-full max-w-[90%] sm:max-w-2xl md:max-w-3xl lg:max-w-4xl xl:max-w-5xl mx-auto px-3 sm:px-4 md:px-6 text-center mb-8 sm:mb-10 md:mb-14 mt-10 relative z-10">
          <p className="font-pacifico text-goldenOrange text-xl sm:text-2xl md:text-3xl lg:text-4xl mb-2 sm:mb-3">
            Sunday Dining at Nour Maison
          </p>

          <h1
            id="halal-roast-heading"
            className="font-seasons text-softMintGreen text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl mb-3 sm:mb-4 md:mb-5 leading-tight tracking-wide"
          >
            Halal Roast Dinner{" "}
            <span className="text-goldenOrange">in Milton Keynes</span>{" "}
            <span className="block mt-1 sm:mt-2">
              for Family Tables and Weekend Plans
            </span>
          </h1>

          <p className="font-playfair text-logoGold text-base sm:text-lg md:text-xl leading-relaxed md:leading-loose max-w-5xl mx-auto">
            For guests searching for{" "}
            <span className="text-goldenOrange font-semibold">
              halal roast dinner Milton Keynes
            </span>
            , Nour Maison offers a warm restaurant setting for roast dinner
            plans, Sunday dining, family meals and group bookings. Expect{" "}
            <span className="text-softMintGreen font-semibold">
              halal roast Milton Keynes
            </span>{" "}
            comfort with polished café brasserie hospitality.
            <br />
            <span className="text-logoGold font-medium">
              Use this page to plan the experience, then view the roast menu or
              book your table.
            </span>
          </p>
        </header>

        <div id="summary-section" data-book-button-side="left">
          <BreadcrumbTrail items={BREADCRUMBS} />
          <QuickSummary
            items={SUMMARY_ITEMS}
            ctaText="Book Roast Dinner"
            ctaLink="/booking"
            variant="mint"
          />
        </div>

        <div id="roast-dinner-section" data-book-button-side="right">
          <ImageTextBlock
            eyebrow="Halal Roast Dinner"
            heading="A Roast Meal That Feels Comforting and Considered"
            text={
              <>
                <p>
                  A good roast dinner Milton Keynes plan is about more than a
                  plate of food. It is the slower pace, the comfort of the
                  table, the sauces, the sides and the feeling that the meal has
                  been chosen for a proper sit-down moment.
                </p>
                <p className="mt-3">
                  Nour Maison brings that idea into a halal-friendly restaurant
                  setting, giving guests a clear choice when they want roast
                  dining with warmth, flavour and a little more polish.
                </p>
              </>
            }
            imageSrc="/images/seo/halal-roast-dinner-milton-keynes/halal-roast-dinner-plate.webp"
            imageAlt="Halal roast dinner plate at Nour Maison in Milton Keynes"
            imagePosition="center 70%"
          />
        </div>

        <div id="sunday-section" data-book-button-side="left">
          <ImageTextBlock
            eyebrow="Sunday Roast"
            heading="Weekend Dining Without the Rush"
            text={
              <>
                <p>
                  Sunday roast Milton Keynes searches usually come with a clear
                  intention: find somewhere comfortable, book a table and enjoy
                  the meal properly. Nour Maison suits that kind of plan with a
                  relaxed dining room and food that feels made for sharing time.
                </p>
                <p className="mt-3">
                  If you are looking for halal Sunday roast Milton Keynes
                  options, book ahead and check the roast menu so the visit is
                  simple from the start.
                </p>
              </>
            }
            imageSrc="/images/seo/halal-roast-dinner-milton-keynes/sunday-roast-milton-keynes.webp"
            imageAlt="Sunday roast in Milton Keynes at Nour Maison"
            reverse
          />
        </div>

        <div id="family-section" data-book-button-side="right">
          <ImageTextBlock
            eyebrow="Family & Group Roast"
            heading="A Table Built Around Togetherness"
            text={
              <>
                <p>
                  Roast dinner works especially well for families and groups. It
                  gives everyone a reason to slow down, pass plates, compare
                  favourites and stay a little longer than a normal quick meal.
                </p>
                <p className="mt-3">
                  Nour Maison is a strong fit for family roast dinner Milton
                  Keynes plans, group bookings and guests comparing the best
                  roast dinner Milton Keynes options without wanting an
                  overcomplicated experience.
                </p>
              </>
            }
            imageSrc="/images/seo/halal-roast-dinner-milton-keynes/family-halal-roast-dinner.webp"
            imageAlt="Family halal roast dinner in Milton Keynes at Nour Maison"
          />
        </div>

        <div id="highlights-section" data-book-button-side="left">
          <HighlightsGrid items={HIGHLIGHTS} />
        </div>

        <div id="internal-links-section" data-book-button-side="right">
          <InternalLinksGrid
            eyebrow="Explore"
            heading="Plan Your Roast Dinner Visit"
            links={INTERNAL_LINKS}
          />
        </div>

        <div id="related-blogs-section" data-book-button-side="right">
          <RelatedSeoBlogs
            pageNumber={11}
            pageSlug="halal-roast-dinner-milton-keynes"
            title="Related Roast Dinner Guides"
            description="Explore Nour Maison articles about roast dinner, Sunday dining, halal food, family meals and places to eat in Milton Keynes."
            limit={6}
          />
        </div>

        <div id="cta-section" data-book-button-side="left">
          <CTABlock
            eyebrow="Ready for Roast?"
            heading="Book Halal Roast Dinner at Nour Maison"
            variant="mint"
            description={
              <>
                Choose{" "}
                <span className="font-nour text-logoGold font-semibold">
                  Nour Maison
                </span>{" "}
                for halal roast dinner in Milton Keynes with warm hospitality,
                Sunday dining comfort, family-friendly tables and an easy route
                from roast menu to booking.
              </>
            }
            primaryCTA={{ text: "Book a Table", href: "/booking" }}
            secondaryCTA={{ text: "View Roast Menu", href: "/roast-menu" }}
          />
        </div>
      </main>
    </div>
  );
}
