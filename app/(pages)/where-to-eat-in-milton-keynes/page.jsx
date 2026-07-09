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
const PATHNAME = "/where-to-eat-in-milton-keynes";
const PAGE_URL = `${SITE_URL}${PATHNAME}`;
const OG_IMAGE = `${SITE_URL}/images/seo/where-to-eat-in-milton-keynes/where-to-eat-in-milton-keynes-og.webp`;

const PAGE_TITLE = "Where to Eat in Milton Keynes | Nour Maison";
const PAGE_DESCRIPTION =
  "Deciding where to eat in Milton Keynes? Discover Nour Maison for halal dining, brunch, café visits, breakfast, afternoon tea, family meals and relaxed restaurant bookings";

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  alternates: { canonical: PAGE_URL },
  keywords: [
    "where to eat in Milton Keynes",
    "places to eat Milton Keynes",
    "where to eat MK",
    "restaurants in Milton Keynes",
    "best places to eat Milton Keynes",
    "halal places to eat Milton Keynes",
    "family places to eat Milton Keynes",
    "brunch places Milton Keynes",
    "cafe places to eat Milton Keynes",
    "breakfast places Milton Keynes",
    "afternoon tea Milton Keynes",
    "restaurant Milton Keynes",
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
        alt: "Where to eat in Milton Keynes at Nour Maison for halal dining brunch cafe visits and family meals",
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
    value: "Halal dining, brunch, café visits, breakfast and family meals",
  },
  {
    label: "Visit Style",
    value: "Restaurant, café brasserie, afternoon tea and relaxed dining",
  },
  {
    label: "Good For",
    value: "Families, friends, couples, groups and undecided food plans",
  },
  { label: "Location", value: "Milton Keynes" },
  {
    label: "Dining Times",
    value: "Breakfast, brunch, lunch, afternoon tea and dinner",
  },
  { label: "Booking", value: "Book online or call +44 1908 772177" },
];

const HIGHLIGHTS = [
  {
    icon: "check",
    variant: "gold",
    title: "Halal Places to Eat",
    description:
      "A strong fit for guests comparing halal places to eat in Milton Keynes with comfort and variety in mind.",
  },
  {
    icon: "sparkle",
    variant: "mint",
    title: "Brunch, Café & Afternoon Tea",
    description:
      "Useful for breakfast, brunch, café visits, desserts, afternoon tea and relaxed daytime dining.",
  },
  {
    icon: "users",
    variant: "mint",
    title: "Family-Friendly Choice",
    description:
      "A welcoming option for family places to eat in Milton Keynes, with group booking and kids menu routes nearby.",
  },
];

const INTERNAL_LINKS = [
  {
    label: "Restaurant in Milton Keynes",
    href: "/restaurant-milton-keynes",
    variant: "gold",
    description:
      "Explore Nour Maison as a restaurant choice for brunch, lunch, dinner and relaxed dining.",
  },
  {
    label: "Halal Restaurant",
    href: "/halal-restaurant-milton-keynes",
    variant: "mint",
    description:
      "Learn more about halal-friendly dining at Nour Maison in Milton Keynes.",
  },
  {
    label: "Cafe in Milton Keynes",
    href: "/cafe-milton-keynes",
    variant: "cream",
    description:
      "Visit for coffee, desserts, brunch plates and comfortable café moments.",
  },
  {
    label: "Breakfast in Milton Keynes",
    href: "/breakfast-milton-keynes",
    variant: "gold",
    description:
      "Start the day with breakfast plates, pastries, coffee and café brasserie warmth.",
  },
  {
    label: "Brunch Spot",
    href: "/brunch-spot-milton-keynes",
    variant: "mint",
    description:
      "Plan a brunch visit with sweet plates, savoury dishes and artisan drinks.",
  },
  {
    label: "Family Restaurant",
    href: "/family-restaurant-milton-keynes",
    variant: "cream",
    description:
      "Find a family-friendly restaurant option with kids menu routes and relaxed dining.",
  },
  {
    label: "Book a Table",
    href: "/booking",
    variant: "gold",
    description:
      "Reserve your table once you have decided where to eat in Milton Keynes.",
  },
];

const BREADCRUMBS = [
  { name: "Home", href: "/" },
  { name: "Where to Eat in Milton Keynes", href: PATHNAME },
];

const STICKY_BUTTON_SECTIONS = [
  { selector: "#where-to-eat-content", side: "right" },
  { selector: "#summary-section", side: "right" },
  { selector: "#decision-section", side: "right" },
  { selector: "#daytime-section", side: "right" },
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
      "@type": "Thing",
      name: "Where to eat in Milton Keynes",
    },
    breadcrumb: {
      "@id": `${PAGE_URL}#breadcrumb`,
    },
    primaryImageOfPage: {
      "@type": "ImageObject",
      url: OG_IMAGE,
      width: 1200,
      height: 630,
      caption: "Where to eat in Milton Keynes at Nour Maison",
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
        name: "Where to Eat in Milton Keynes",
        item: PAGE_URL,
      },
    ],
  },
];

export default function WhereToEatInMiltonKeynesPage() {
  return (
    <div>
      <StickyBookNowButton
        href="/booking"
        label="Book Now"
        desktopTop="68%"
        sections={STICKY_BUTTON_SECTIONS}
      />

      <SeoSchemas schemas={SCHEMAS} pageId="where-to-eat-mk" />

      <PagesBanner
        bottomBg={false}
        slogan={
          <div className="text-base sm:text-lg md:text-2xl xl:text-3xl px-2">
            Still deciding where to eat in Milton Keynes?
            <br />
            Start with halal dining, brunch, café comfort and family-friendly
            tables.
          </div>
        }
        title={"Where to Eat in Milton Keynes"}
        scrollTo={"where-to-eat-content"}
      />

      <main
        id="where-to-eat-content"
        className="halal-mk-content w-full relative py-20 sm:py-28 md:py-36 z-10 overflow-hidden"
        aria-labelledby="where-to-eat-heading"
        data-book-button-side="right"
      >
        <header className="w-full max-w-[90%] sm:max-w-2xl md:max-w-3xl lg:max-w-4xl xl:max-w-5xl mx-auto px-3 sm:px-4 md:px-6 text-center mb-8 sm:mb-10 md:mb-14 mt-10 relative z-10">
          <p className="font-pacifico text-goldenOrange text-xl sm:text-2xl md:text-3xl lg:text-4xl mb-2 sm:mb-3">
            Milton Keynes Dining Guide
          </p>

          <h1
            id="where-to-eat-heading"
            className="font-seasons text-softMintGreen text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl mb-3 sm:mb-4 md:mb-5 leading-tight tracking-wide"
          >
            Where to Eat{" "}
            <span className="text-goldenOrange">in Milton Keynes</span>{" "}
            <span className="block mt-1 sm:mt-2">
              When You Want More Than a Quick Stop
            </span>
          </h1>

          <p className="font-playfair text-logoGold text-base sm:text-lg md:text-xl leading-relaxed md:leading-loose max-w-5xl mx-auto">
            If you are searching for{" "}
            <span className="text-goldenOrange font-semibold">
              where to eat in Milton Keynes
            </span>
            , the answer depends on the kind of table you need. Nour Maison is a
            strong fit for guests comparing{" "}
            <span className="text-softMintGreen font-semibold">
              places to eat Milton Keynes
            </span>
            , especially when the plan includes halal dining, brunch, café
            comfort, afternoon tea, family meals or an easy restaurant booking.
            <br />
            <span className="text-logoGold font-medium">
              One place, several reasons to visit — breakfast, brunch, lunch,
              afternoon tea, dinner and relaxed catch-ups.
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

        <div id="decision-section" data-book-button-side="right">
          <ImageTextBlock
            eyebrow="If You Want Halal Dining"
            heading="A Clear Choice for Halal Places to Eat"
            text={
              <>
                <p>
                  Some people search for restaurants in Milton Keynes. Others
                  need halal places to eat in Milton Keynes and want the choice
                  to feel simple, comfortable and suitable for the whole table.
                </p>
                <p className="mt-3">
                  Nour Maison brings halal-friendly dining together with a café
                  brasserie mood, French and Middle Eastern influence, warm
                  service and enough variety for different tastes without making
                  the decision feel complicated.
                </p>
              </>
            }
            imageSrc="/images/seo/where-to-eat-in-milton-keynes/halal-places-to-eat-milton-keynes.webp"
            imageAlt="Halal places to eat in Milton Keynes at Nour Maison"
            imagePosition="center 70%"
          />
        </div>

        <div id="daytime-section" data-book-button-side="left">
          <ImageTextBlock
            eyebrow="If You Want Brunch, Café or Afternoon Tea"
            heading="A Softer Daytime Plan That Still Feels Special"
            text={
              <>
                <p>
                  Where to eat MK searches are often daytime decisions: coffee
                  with a friend, a late breakfast, a brunch table, something
                  sweet after shopping or afternoon tea that feels more
                  considered than the usual café stop.
                </p>
                <p className="mt-3">
                  Nour Maison works across those moments with breakfast plates,
                  brunch dishes, desserts, drinks and afternoon tea options, so
                  the visit can be light, slow, sweet, savoury or a bit of
                  everything.
                </p>
              </>
            }
            imageSrc="/images/seo/where-to-eat-in-milton-keynes/brunch-cafe-afternoon-tea-milton-keynes.webp"
            imageAlt="Brunch cafe and afternoon tea place to eat in Milton Keynes at Nour Maison"
            reverse
          />
        </div>

        <div id="family-section" data-book-button-side="right">
          <ImageTextBlock
            eyebrow="If You Want Family-Friendly Dining"
            heading="A Place That Works for Different Ages"
            text={
              <>
                <p>
                  Family places to eat Milton Keynes searches need a different
                  answer. The food matters, but so does the atmosphere, the
                  comfort of the table, the kids menu route and the feeling that
                  nobody is being rushed through the meal.
                </p>
                <p className="mt-3">
                  Nour Maison suits family brunch, relaxed lunches, celebration
                  meals and dinner plans, giving parents, children and groups a
                  warm restaurant setting in Milton Keynes that still feels
                  polished.
                </p>
              </>
            }
            imageSrc="/images/seo/where-to-eat-in-milton-keynes/family-places-to-eat-milton-keynes.webp"
            imageAlt="Family places to eat in Milton Keynes at Nour Maison"
          />
        </div>

        <div id="highlights-section" data-book-button-side="left">
          <HighlightsGrid items={HIGHLIGHTS} />
        </div>

        <div id="internal-links-section" data-book-button-side="right">
          <InternalLinksGrid
            eyebrow="Choose Your Visit"
            heading="What Are You Looking For?"
            links={INTERNAL_LINKS}
          />
        </div>

        <div id="related-blogs-section" data-book-button-side="right">
          <RelatedSeoBlogs
            pageNumber={15}
            pageSlug="where-to-eat-in-milton-keynes"
            title="Related Places to Eat Guides"
            description="Explore Nour Maison articles about places to eat, restaurants, brunch, halal dining, family meals and café visits in Milton Keynes."
            limit={6}
          />
        </div>

        <div id="cta-section" data-book-button-side="left">
          <CTABlock
            eyebrow="Made Your Choice?"
            heading="Book Nour Maison in Milton Keynes"
            variant="mint"
            description={
              <>
                Choose{" "}
                <span className="font-nour text-logoGold font-semibold">
                  Nour Maison
                </span>{" "}
                when you are deciding where to eat in Milton Keynes and want
                halal-friendly food, brunch options, café comfort, afternoon
                tea, family dining and a relaxed restaurant experience in one
                place.
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
