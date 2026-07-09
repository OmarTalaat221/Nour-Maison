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
const PATHNAME = "/french-middle-eastern-restaurant-milton-keynes";
const PAGE_URL = `${SITE_URL}${PATHNAME}`;
const OG_IMAGE = `${SITE_URL}/images/seo/french-middle-eastern-restaurant-milton-keynes/french-middle-eastern-restaurant-milton-keynes-og.webp`;

const PAGE_TITLE =
  "French and Middle Eastern Restaurant in Milton Keynes | Nour Maison";
const PAGE_DESCRIPTION =
  "Discover Nour Maison, a French and Middle Eastern restaurant in Milton Keynes bringing halal dining, elegant presentation, warm flavours and refined café brasserie ambience";

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  alternates: { canonical: PAGE_URL },
  keywords: [
    "French and Middle Eastern restaurant Milton Keynes",
    "Middle Eastern restaurant Milton Keynes",
    "French restaurant Milton Keynes",
    "halal French restaurant Milton Keynes",
    "halal Middle Eastern restaurant Milton Keynes",
    "fusion restaurant Milton Keynes",
    "elegant restaurant Milton Keynes",
    "French Middle Eastern dining Milton Keynes",
    "halal fusion restaurant Milton Keynes",
    "Nour Maison Milton Keynes",
    "restaurant Milton Keynes",
    "halal restaurant Milton Keynes",
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
        alt: "French and Middle Eastern restaurant dining at Nour Maison in Milton Keynes",
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
    label: "Restaurant Style",
    value: "French sophistication with Middle Eastern warmth",
  },
  {
    label: "Best For",
    value: "Halal dining, brunch, dinner, desserts and elegant café moments",
  },
  {
    label: "Flavour Direction",
    value:
      "Refined presentation, warm spices, fresh details and balanced plates",
  },
  { label: "Location", value: "Milton Keynes" },
  {
    label: "Atmosphere",
    value: "Elegant, relaxed, welcoming and occasion-ready",
  },
  { label: "Booking", value: "Book online or call +44 1908 772177" },
];

const HIGHLIGHTS = [
  {
    icon: "sparkle",
    variant: "gold",
    title: "French Sophistication",
    description:
      "Elegant plating, café brasserie detail and a refined approach to food, drinks and presentation.",
  },
  {
    icon: "check",
    variant: "mint",
    title: "Middle Eastern Warmth",
    description:
      "Comforting flavours, generous hospitality and a dining style built around sharing and welcome.",
  },
  {
    icon: "users",
    variant: "mint",
    title: "Halal Dining Identity",
    description:
      "A clear halal-friendly restaurant direction in Milton Keynes with a distinctive fusion character.",
  },
];

const INTERNAL_LINKS = [
  {
    label: "About Nour Maison",
    href: "/about-us",
    variant: "gold",
    description:
      "Learn more about the Nour Maison story, concept and hospitality direction.",
  },
  {
    label: "Our Menu",
    href: "/menu",
    variant: "mint",
    description:
      "Explore brunch, lunch, dinner, desserts, drinks and signature café brasserie dishes.",
  },
  {
    label: "Gallery",
    href: "/gallery",
    variant: "cream",
    description:
      "See our interiors, food presentation, drinks and dining atmosphere.",
  },
  {
    label: "Restaurant in Milton Keynes",
    href: "/restaurant-milton-keynes",
    variant: "gold",
    description:
      "Explore Nour Maison as a restaurant choice for brunch, lunch, dinner and occasions.",
  },
  {
    label: "Halal Restaurant",
    href: "/halal-restaurant-milton-keynes",
    variant: "mint",
    description:
      "Discover halal-friendly dining at Nour Maison with French and Middle Eastern influence.",
  },
];

const BREADCRUMBS = [
  { name: "Home", href: "/" },
  {
    name: "French and Middle Eastern Restaurant in Milton Keynes",
    href: PATHNAME,
  },
];

const STICKY_BUTTON_SECTIONS = [
  { selector: "#french-middle-eastern-content", side: "right" },
  { selector: "#summary-section", side: "right" },
  { selector: "#brand-identity-section", side: "right" },
  { selector: "#flavour-section", side: "right" },
  { selector: "#ambience-section", side: "right" },
  { selector: "#highlights-section", side: "left" },
  { selector: "#internal-links-section", side: "left" },
  { selector: "#related-blogs-section", side: "left" },
  { selector: "#cta-section", side: "left" },
];

const SCHEMAS = [
  {
    "@context": "https://schema.org",
    "@type": "AboutPage",
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
        "French and Middle Eastern restaurant in Milton Keynes at Nour Maison",
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
      "Nour Maison is a French and Middle Eastern inspired halal café, brasserie and restaurant in Milton Keynes, serving elegant brunch, lunch, dinner, desserts, drinks and special occasion dining.",
    servesCuisine: [
      "French",
      "Middle Eastern",
      "Halal",
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
        name: "French and Middle Eastern Restaurant in Milton Keynes",
        item: PAGE_URL,
      },
    ],
  },
];

export default function FrenchMiddleEasternRestaurantMiltonKeynesPage() {
  return (
    <div>
      <StickyBookNowButton
        href="/booking"
        label="Book Now"
        desktopTop="68%"
        sections={STICKY_BUTTON_SECTIONS}
      />

      <SeoSchemas
        schemas={SCHEMAS}
        pageId="french-middle-eastern-restaurant-mk"
      />

      <PagesBanner
        bottomBg={false}
        slogan={
          <div className="text-base sm:text-lg md:text-2xl xl:text-3xl px-2">
            French elegance, Middle Eastern warmth and halal dining character.
            <br />A distinctive restaurant experience in Milton Keynes.
          </div>
        }
        title={"French and Middle Eastern Restaurant in Milton Keynes"}
        scrollTo={"french-middle-eastern-content"}
      />

      <main
        id="french-middle-eastern-content"
        className="halal-mk-content w-full relative py-20 sm:py-28 md:py-36 z-10 overflow-hidden"
        aria-labelledby="french-middle-eastern-heading"
        data-book-button-side="right"
      >
        <header className="w-full max-w-[90%] sm:max-w-2xl md:max-w-3xl lg:max-w-4xl xl:max-w-5xl mx-auto px-3 sm:px-4 md:px-6 text-center mb-8 sm:mb-10 md:mb-14 mt-10 relative z-10">
          <p className="font-pacifico text-goldenOrange text-xl sm:text-2xl md:text-3xl lg:text-4xl mb-2 sm:mb-3">
            The Nour Maison Identity
          </p>

          <h1
            id="french-middle-eastern-heading"
            className="font-seasons text-softMintGreen text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl mb-3 sm:mb-4 md:mb-5 leading-tight tracking-wide"
          >
            French and Middle Eastern{" "}
            <span className="text-goldenOrange">Restaurant</span>{" "}
            <span className="block mt-1 sm:mt-2">in Milton Keynes</span>
          </h1>

          <p className="font-playfair text-logoGold text-base sm:text-lg md:text-xl leading-relaxed md:leading-loose max-w-5xl mx-auto">
            Nour Maison is shaped for guests looking for a{" "}
            <span className="text-goldenOrange font-semibold">
              French and Middle Eastern restaurant Milton Keynes
            </span>{" "}
            experience with more identity than a standard dining stop. The food
            direction brings together{" "}
            <span className="text-softMintGreen font-semibold">
              French restaurant Milton Keynes
            </span>{" "}
            polish, Middle Eastern warmth, halal dining suitability and a café
            brasserie atmosphere that feels both elegant and welcoming.
            <br />
            <span className="text-logoGold font-medium">
              This is the brand story in food form: refined detail, generous
              flavour and a calm place to enjoy it.
            </span>
          </p>
        </header>

        <div id="summary-section" data-book-button-side="left">
          <BreadcrumbTrail items={BREADCRUMBS} />
          <QuickSummary
            items={SUMMARY_ITEMS}
            ctaText="View the Menu"
            ctaLink="/menu"
            variant="mint"
          />
        </div>

        <div id="brand-identity-section" data-book-button-side="right">
          <ImageTextBlock
            eyebrow="Brand Direction"
            heading="A Restaurant Concept with a Clear Point of View"
            text={
              <>
                <p>
                  Nour Maison is not trying to sit in one simple category. It is
                  built as an elegant restaurant in Milton Keynes where café
                  comfort, refined presentation and warm hospitality meet on the
                  same table.
                </p>
                <p className="mt-3">
                  The result is a fusion restaurant Milton Keynes guests can
                  understand quickly: French-inspired finishing, Middle Eastern
                  flavour cues and a halal-friendly dining experience that feels
                  polished without becoming cold.
                </p>
              </>
            }
            imageSrc="/images/seo/french-middle-eastern-restaurant-milton-keynes/french-middle-eastern-restaurant-identity.webp"
            imageAlt="French and Middle Eastern restaurant identity at Nour Maison Milton Keynes"
            imagePosition="center 70%"
          />
        </div>

        <div id="flavour-section" data-book-button-side="left">
          <ImageTextBlock
            eyebrow="Flavour & Food"
            heading="French Detail, Middle Eastern Generosity"
            text={
              <>
                <p>
                  A Middle Eastern restaurant Milton Keynes search often points
                  to warmth, colour and satisfying flavour. A French restaurant
                  Milton Keynes search often suggests finesse, balance and
                  presentation. Nour Maison brings those two expectations closer
                  together.
                </p>
                <p className="mt-3">
                  Across brunch plates, savoury dishes, desserts and drinks, the
                  food direction is made to feel expressive, halal suitable and
                  visually considered from first look to final bite.
                </p>
              </>
            }
            imageSrc="/images/seo/french-middle-eastern-restaurant-milton-keynes/french-middle-eastern-flavours.webp"
            imageAlt="French and Middle Eastern flavours at Nour Maison Milton Keynes"
            reverse
          />
        </div>

        <div id="ambience-section" data-book-button-side="right">
          <ImageTextBlock
            eyebrow="Ambience"
            heading="Elegant, Warm and Easy to Enjoy"
            text={
              <>
                <p>
                  A halal French restaurant Milton Keynes or halal Middle
                  Eastern restaurant Milton Keynes experience should feel
                  comfortable for real visits, not just good in a headline. The
                  room, service and food all need to support the same feeling.
                </p>
                <p className="mt-3">
                  Nour Maison keeps the ambience soft, stylish and welcoming, so
                  it works for casual catch-ups, family meals, quiet dates,
                  small celebrations and guests who want something a little more
                  distinctive in Milton Keynes.
                </p>
              </>
            }
            imageSrc="/images/seo/french-middle-eastern-restaurant-milton-keynes/elegant-restaurant-milton-keynes.webp"
            imageAlt="Elegant restaurant ambience at Nour Maison in Milton Keynes"
          />
        </div>

        <div id="highlights-section" data-book-button-side="left">
          <HighlightsGrid items={HIGHLIGHTS} />
        </div>

        <div id="internal-links-section" data-book-button-side="right">
          <InternalLinksGrid
            eyebrow="Explore"
            heading="Understand the Nour Maison Experience"
            links={INTERNAL_LINKS}
          />
        </div>

        <div id="related-blogs-section" data-book-button-side="right">
          <RelatedSeoBlogs
            pageNumber={13}
            pageSlug="french-middle-eastern-restaurant-milton-keynes"
            title="Related Restaurant Guides"
            description="Explore Nour Maison articles about French and Middle Eastern flavours, halal dining, fusion food and elegant restaurants in Milton Keynes."
            limit={6}
          />
        </div>

        <div id="cta-section" data-book-button-side="left">
          <CTABlock
            eyebrow="Discover the Brand"
            heading="Experience French and Middle Eastern Dining at Nour Maison"
            variant="mint"
            description={
              <>
                Visit{" "}
                <span className="font-nour text-logoGold font-semibold">
                  Nour Maison
                </span>{" "}
                for a French and Middle Eastern restaurant experience in Milton
                Keynes, shaped around halal-friendly dining, elegant
                presentation, warm hospitality and a distinctive café brasserie
                atmosphere.
              </>
            }
            primaryCTA={{ text: "View Our Menu", href: "/menu" }}
            secondaryCTA={{ text: "About Nour Maison", href: "/about-us" }}
          />
        </div>
      </main>
    </div>
  );
}
