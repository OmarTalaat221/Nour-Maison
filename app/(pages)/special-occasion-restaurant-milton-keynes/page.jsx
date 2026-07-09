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
const PATHNAME = "/special-occasion-restaurant-milton-keynes";
const PAGE_URL = `${SITE_URL}${PATHNAME}`;
const OG_IMAGE = `${SITE_URL}/images/seo/special-occasion-restaurant-milton-keynes/special-occasion-restaurant-milton-keynes-og.webp`;

const PAGE_TITLE = "Special Occasion Restaurant in Milton Keynes | Nour Maison";
const PAGE_DESCRIPTION =
  "Book Nour Maison as your special occasion restaurant in Milton Keynes for birthdays, anniversaries, date nights, family celebrations, afternoon tea and elegant dining";

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  alternates: { canonical: PAGE_URL },
  keywords: [
    "special occasion restaurant Milton Keynes",
    "birthday restaurant Milton Keynes",
    "anniversary dinner Milton Keynes",
    "date night restaurant Milton Keynes",
    "romantic restaurant Milton Keynes",
    "celebration restaurant Milton Keynes",
    "family celebration restaurant Milton Keynes",
    "special occasion dining Milton Keynes",
    "occasion restaurant Milton Keynes",
    "elegant restaurant Milton Keynes",
    "afternoon tea occasion Milton Keynes",
    "halal celebration restaurant Milton Keynes",
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
        alt: "Special occasion restaurant in Milton Keynes at Nour Maison for birthdays anniversaries and celebrations",
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
    value: "Birthdays, anniversaries, date nights and family celebrations",
  },
  {
    label: "Occasion Style",
    value: "Elegant restaurant setting with warm café brasserie hospitality",
  },
  {
    label: "Good For",
    value: "Couples, families, friends, groups and relaxed celebrations",
  },
  { label: "Location", value: "Milton Keynes" },
  { label: "Booking", value: "Online booking available for occasion dining" },
  { label: "Contact", value: "Book online or call +44 1908 772177" },
];

const HIGHLIGHTS = [
  {
    icon: "sparkle",
    variant: "gold",
    title: "Occasion-Ready Atmosphere",
    description:
      "A polished but relaxed setting for birthdays, anniversaries, date nights and special meals.",
  },
  {
    icon: "users",
    variant: "mint",
    title: "Family Celebrations",
    description:
      "A welcoming restaurant choice for family celebration dining in Milton Keynes.",
  },
  {
    icon: "check",
    variant: "mint",
    title: "Easy Booking",
    description:
      "Plan ahead for dinner, afternoon tea occasions, group meals and celebration tables.",
  },
];

const INTERNAL_LINKS = [
  {
    label: "Book a Table",
    href: "/booking",
    variant: "gold",
    description:
      "Reserve your table for a birthday, anniversary, date night or celebration meal.",
  },
  {
    label: "Gallery",
    href: "/gallery",
    variant: "mint",
    description:
      "See the food, interiors, drinks and occasion-friendly atmosphere before you visit.",
  },
  {
    label: "Our Menu",
    href: "/menu",
    variant: "gold",
    description:
      "Explore brunch, lunch, dinner, desserts, drinks and elegant dining choices.",
  },
  {
    label: "Afternoon Tea Menu",
    href: "/afternoon-tea-menu",
    variant: "cream",
    description:
      "View afternoon tea options for birthdays, friends, family treats and special plans.",
  },
  {
    label: "Kids Menu",
    href: "/kids-menu",
    variant: "mint",
    description:
      "Plan a family celebration with simple choices for younger guests.",
  },
  {
    label: "Contact Us",
    href: "/contact-us",
    variant: "gold",
    description:
      "Get visit details, contact information and help planning your Milton Keynes occasion.",
  },
];

const BREADCRUMBS = [
  { name: "Home", href: "/" },
  { name: "Special Occasion Restaurant in Milton Keynes", href: PATHNAME },
];

const STICKY_BUTTON_SECTIONS = [
  { selector: "#special-occasion-content", side: "right" },
  { selector: "#summary-section", side: "right" },
  { selector: "#celebrations-section", side: "right" },
  { selector: "#date-night-section", side: "right" },
  { selector: "#afternoon-tea-section", side: "right" },
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
      caption: "Special occasion restaurant in Milton Keynes at Nour Maison",
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
        name: "Book a special occasion table at Nour Maison",
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
      "Nour Maison is a restaurant in Milton Keynes for special occasions, birthdays, anniversaries, date nights, family celebrations, afternoon tea and elegant dining.",
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
        name: "Special Occasion Restaurant in Milton Keynes",
        item: PAGE_URL,
      },
    ],
  },
];

export default function SpecialOccasionRestaurantMiltonKeynesPage() {
  return (
    <div>
      <StickyBookNowButton
        href="/booking"
        label="Book Now"
        desktopTop="68%"
        sections={STICKY_BUTTON_SECTIONS}
      />

      <SeoSchemas schemas={SCHEMAS} pageId="special-occasion-restaurant-mk" />

      <PagesBanner
        bottomBg={false}
        slogan={
          <div className="text-base sm:text-lg md:text-2xl xl:text-3xl px-2">
            Birthdays, anniversaries, date nights and family celebrations.
            <br />A warm special occasion restaurant experience in Milton
            Keynes.
          </div>
        }
        title={"Special Occasion Restaurant in Milton Keynes"}
        scrollTo={"special-occasion-content"}
      />

      <main
        id="special-occasion-content"
        className="halal-mk-content w-full relative py-20 sm:py-28 md:py-36 z-10 overflow-hidden"
        aria-labelledby="special-occasion-heading"
        data-book-button-side="right"
      >
        <header className="w-full max-w-[90%] sm:max-w-2xl md:max-w-3xl lg:max-w-4xl xl:max-w-5xl mx-auto px-3 sm:px-4 md:px-6 text-center mb-8 sm:mb-10 md:mb-14 mt-10 relative z-10">
          <p className="font-pacifico text-goldenOrange text-xl sm:text-2xl md:text-3xl lg:text-4xl mb-2 sm:mb-3">
            Occasion Dining at Nour Maison
          </p>

          <h1
            id="special-occasion-heading"
            className="font-seasons text-softMintGreen text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl mb-3 sm:mb-4 md:mb-5 leading-tight tracking-wide"
          >
            Special Occasion{" "}
            <span className="text-goldenOrange">Restaurant</span>{" "}
            <span className="block mt-1 sm:mt-2">in Milton Keynes</span>
          </h1>

          <p className="font-playfair text-logoGold text-base sm:text-lg md:text-xl leading-relaxed md:leading-loose max-w-5xl mx-auto">
            For guests searching for a{" "}
            <span className="text-goldenOrange font-semibold">
              special occasion restaurant Milton Keynes
            </span>
            , Nour Maison brings together elegant food, warm hospitality and a
            setting that works for birthdays, anniversary dinner Milton Keynes
            plans, family celebrations and relaxed date nights.
            <br />
            <span className="text-softMintGreen font-semibold">
              Book ahead for a celebration restaurant Milton Keynes experience
            </span>{" "}
            that feels considered without becoming stiff or complicated.
          </p>
        </header>

        <div id="summary-section" data-book-button-side="left">
          <BreadcrumbTrail items={BREADCRUMBS} />
          <QuickSummary
            items={SUMMARY_ITEMS}
            ctaText="Book Your Occasion"
            ctaLink="/booking"
            variant="mint"
          />
        </div>

        <div id="celebrations-section" data-book-button-side="right">
          <ImageTextBlock
            eyebrow="Birthdays & Family Celebrations"
            heading="A Table for the People Who Matter"
            text={
              <>
                <p>
                  A birthday restaurant Milton Keynes visit should feel easy to
                  enjoy from the first hello. Nour Maison gives families and
                  friends a warm place to gather, with food that looks polished
                  but still feels generous and relaxed.
                </p>
                <p className="mt-3">
                  For a family celebration restaurant Milton Keynes search, the
                  aim is simple: a comfortable table, good choices, thoughtful
                  presentation and enough atmosphere to make the meal feel like
                  more than a normal day out.
                </p>
              </>
            }
            imageSrc="/images/seo/special-occasion-restaurant-milton-keynes/birthday-family-celebration-restaurant.webp"
            imageAlt="Birthday and family celebration restaurant in Milton Keynes at Nour Maison"
            imagePosition="center 70%"
          />
        </div>

        <div id="date-night-section" data-book-button-side="left">
          <ImageTextBlock
            eyebrow="Date Nights & Anniversaries"
            heading="Elegant Enough for Two, Warm Enough to Relax"
            text={
              <>
                <p>
                  Nour Maison is also suited to date night restaurant Milton
                  Keynes plans, romantic restaurant Milton Keynes searches and
                  anniversary dinner Milton Keynes bookings where the mood
                  matters as much as the menu.
                </p>
                <p className="mt-3">
                  Soft styling, refined plating and friendly service create a
                  setting that feels intimate without being awkwardly formal.
                  Nobody needs a restaurant that makes choosing dessert feel
                  like a board meeting.
                </p>
              </>
            }
            imageSrc="/images/seo/special-occasion-restaurant-milton-keynes/date-night-anniversary-dinner.webp"
            imageAlt="Date night and anniversary dinner restaurant in Milton Keynes at Nour Maison"
            reverse
          />
        </div>

        <div id="afternoon-tea-section" data-book-button-side="right">
          <ImageTextBlock
            eyebrow="Afternoon Tea Occasions"
            heading="A Softer Way to Celebrate"
            text={
              <>
                <p>
                  Not every occasion needs dinner. Afternoon tea can be perfect
                  for birthdays, mother-daughter plans, friend catch-ups, family
                  treats and smaller celebrations that need something pretty,
                  shareable and easy to book.
                </p>
                <p className="mt-3">
                  Pair the occasion with desserts, savoury bites, elegant drinks
                  and a relaxed café brasserie setting in Milton Keynes, then
                  keep the planning simple with online booking.
                </p>
              </>
            }
            imageSrc="/images/seo/special-occasion-restaurant-milton-keynes/afternoon-tea-special-occasion.webp"
            imageAlt="Afternoon tea special occasion at Nour Maison in Milton Keynes"
          />
        </div>

        <div id="highlights-section" data-book-button-side="left">
          <HighlightsGrid items={HIGHLIGHTS} />
        </div>

        <div id="internal-links-section" data-book-button-side="right">
          <InternalLinksGrid
            eyebrow="Explore"
            heading="Plan Your Occasion"
            links={INTERNAL_LINKS}
          />
        </div>

        <div id="related-blogs-section" data-book-button-side="right">
          <RelatedSeoBlogs
            pageNumber={14}
            pageSlug="special-occasion-restaurant-milton-keynes"
            title="Related Occasion Dining Guides"
            description="Explore Nour Maison articles about birthdays, date nights, afternoon tea, family celebrations and places to eat in Milton Keynes."
            limit={6}
          />
        </div>

        <div id="cta-section" data-book-button-side="left">
          <CTABlock
            eyebrow="Ready to Celebrate?"
            heading="Book a Special Occasion Table at Nour Maison"
            variant="mint"
            description={
              <>
                Choose{" "}
                <span className="font-nour text-logoGold font-semibold">
                  Nour Maison
                </span>{" "}
                for special occasion dining in Milton Keynes, from birthdays and
                anniversaries to family celebrations, date nights and afternoon
                tea occasions.
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
