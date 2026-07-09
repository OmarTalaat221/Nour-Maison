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
const PATHNAME = "/family-restaurant-milton-keynes";
const PAGE_URL = `${SITE_URL}${PATHNAME}`;
const OG_IMAGE = `${SITE_URL}/images/seo/family-restaurant-milton-keynes/family-restaurant-milton-keynes-og.webp`;

const PAGE_TITLE = "Family Restaurant in Milton Keynes | Nour Maison";
const PAGE_DESCRIPTION =
  "Visit Nour Maison, a family restaurant in Milton Keynes for halal-friendly dining, kids menu options, family brunch, lunch, dinner and relaxed group bookings";

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  alternates: { canonical: PAGE_URL },
  keywords: [
    "family restaurant Milton Keynes",
    "family restaurant MK",
    "family-friendly restaurant Milton Keynes",
    "restaurant for families Milton Keynes",
    "halal family restaurant Milton Keynes",
    "kids menu Milton Keynes",
    "family brunch Milton Keynes",
    "family dinner Milton Keynes",
    "family dining Milton Keynes",
    "family cafe Milton Keynes",
    "family lunch Milton Keynes",
    "restaurant for kids Milton Keynes",
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
        alt: "Family restaurant in Milton Keynes at Nour Maison with halal-friendly dining and kids menu options",
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
    value: "Family brunch, lunch, dinner, kids meals and relaxed gatherings",
  },
  {
    label: "Dining Style",
    value: "Family-friendly restaurant with halal-friendly café brasserie food",
  },
  {
    label: "Good For",
    value: "Parents, children, grandparents, groups and weekend plans",
  },
  { label: "Location", value: "Milton Keynes" },
  { label: "Hours", value: "Open daily: 9am–10pm" },
  { label: "Booking", value: "Book online or call +44 1908 772177" },
];

const HIGHLIGHTS = [
  {
    icon: "users",
    variant: "mint",
    title: "Family-Friendly Atmosphere",
    description:
      "A warm and relaxed setting for parents, children and mixed-age family visits.",
  },
  {
    icon: "check",
    variant: "gold",
    title: "Kids Menu Available",
    description:
      "Simple, enjoyable options for younger guests, alongside fuller plates for adults.",
  },
  {
    icon: "sparkle",
    variant: "mint",
    title: "Halal-Friendly Dining",
    description:
      "A halal family restaurant choice in Milton Keynes for brunch, lunch and dinner plans.",
  },
];

const INTERNAL_LINKS = [
  {
    label: "Kids Menu",
    href: "/kids-menu",
    variant: "mint",
    description:
      "Explore simple, family-friendly choices for younger guests visiting Nour Maison.",
  },
  {
    label: "Book a Table",
    href: "/booking",
    // variant: "mint",
    description:
      "Reserve a table for family brunch, lunch, dinner or a relaxed group visit.",
  },
  {
    label: "Our Full Menu",
    href: "/menu",
    variant: "gold",
    description:
      "View breakfast, brunch, lunch, dinner, desserts, drinks and family-friendly dishes.",
  },
  {
    label: "Gallery",
    href: "/gallery",
    variant: "mint",
    description:
      "See Nour Maison food, interiors, drinks and table moments before your visit.",
  },
  {
    label: "About Us",
    href: "/about-us",
    variant: "cream",
    description:
      "Learn more about the Nour Maison atmosphere, hospitality and dining concept.",
  },
  {
    label: "Contact Us",
    href: "/contact-us",
    variant: "gold",
    description:
      "Find visit details, contact information and location guidance for Milton Keynes.",
  },
];

const FAQ_ITEMS = [
  {
    question: "Is Nour Maison a family restaurant in Milton Keynes?",
    answer:
      "Yes. Nour Maison is a family restaurant in Milton Keynes with a relaxed atmosphere, halal-friendly dining, brunch, lunch, dinner and kids menu options.",
  },
  {
    question: "Does Nour Maison have a kids menu in Milton Keynes?",
    answer:
      "Yes. Nour Maison has a kids menu for younger guests, making it easier for families to enjoy a comfortable meal together.",
  },
  {
    question: "Is Nour Maison suitable for family brunch in Milton Keynes?",
    answer:
      "Yes. Nour Maison is suitable for family brunch in Milton Keynes, with sweet plates, savoury dishes, drinks and options for different ages.",
  },
  {
    question: "Can families book a table online?",
    answer:
      "Yes. Families can book a table online through the Nour Maison booking page or call +44 1908 772177.",
  },
  {
    question: "Is Nour Maison a halal family restaurant in Milton Keynes?",
    answer:
      "Nour Maison offers halal-friendly dining, making it a strong choice for families looking for halal food in Milton Keynes.",
  },
  {
    question: "Can Nour Maison work for family dinner in Milton Keynes?",
    answer:
      "Yes. Nour Maison is open daily until 10pm, so it works for family dinner, relaxed evening dining and small group meals.",
  },
  {
    question: "Is the restaurant good for mixed-age groups?",
    answer:
      "Yes. The setting works well for children, parents, grandparents and groups who want somewhere comfortable, warm and easy to enjoy.",
  },
];

const BREADCRUMBS = [
  { name: "Home", href: "/" },
  { name: "Family Restaurant in Milton Keynes", href: PATHNAME },
];

const STICKY_BUTTON_SECTIONS = [
  { selector: "#family-restaurant-content", side: "right" },
  { selector: "#summary-section", side: "right" },
  { selector: "#family-comfort-section", side: "right" },
  { selector: "#kids-menu-section", side: "right" },
  { selector: "#family-bookings-section", side: "right" },
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
      caption: "Family restaurant in Milton Keynes at Nour Maison",
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
        name: "Book a family table at Nour Maison",
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
      "Nour Maison is a family-friendly halal café, brasserie and restaurant in Milton Keynes, serving brunch, lunch, dinner, desserts, kids menu options and relaxed group dining.",
    servesCuisine: [
      "Halal",
      "Family Dining",
      "Cafe",
      "Breakfast",
      "Brunch",
      "Lunch",
      "Dinner",
      "Desserts",
      "French",
      "Middle Eastern",
      "Fusion",
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
        name: "Family Restaurant in Milton Keynes",
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

export default function FamilyRestaurantMiltonKeynesPage() {
  return (
    <div>
      <StickyBookNowButton
        href="/booking"
        label="Book Now"
        desktopTop="68%"
        sections={STICKY_BUTTON_SECTIONS}
      />

      <SeoSchemas schemas={SCHEMAS} pageId="family-restaurant-mk" />

      <PagesBanner
        bottomBg={false}
        slogan={
          <div className="text-base sm:text-lg md:text-2xl xl:text-3xl px-2">
            Warm tables, relaxed dining and space for the whole family.
            <br />A family-friendly restaurant experience in Milton Keynes.
          </div>
        }
        title={"Family Restaurant in Milton Keynes"}
        scrollTo={"family-restaurant-content"}
      />

      <main
        id="family-restaurant-content"
        className="halal-mk-content w-full relative py-20 sm:py-28 md:py-36 z-10 overflow-hidden"
        aria-labelledby="family-restaurant-heading"
        data-book-button-side="right"
      >
        <header className="w-full max-w-[90%] sm:max-w-2xl md:max-w-3xl lg:max-w-4xl xl:max-w-5xl mx-auto px-3 sm:px-4 md:px-6 text-center mb-8 sm:mb-10 md:mb-14 mt-10 relative z-10">
          <p className="font-pacifico text-goldenOrange text-xl sm:text-2xl md:text-3xl lg:text-4xl mb-2 sm:mb-3">
            Family Dining at Nour Maison
          </p>

          <h1
            id="family-restaurant-heading"
            className="font-seasons text-softMintGreen text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl mb-3 sm:mb-4 md:mb-5 leading-tight tracking-wide"
          >
            A Warm <span className="text-goldenOrange">Family Restaurant</span>{" "}
            <span className="block mt-1 sm:mt-2">in Milton Keynes</span>
          </h1>

          <p className="font-playfair text-logoGold text-base sm:text-lg md:text-xl leading-relaxed md:leading-loose max-w-5xl mx-auto">
            Nour Maison is a{" "}
            <span className="text-goldenOrange font-semibold">
              family restaurant in Milton Keynes
            </span>{" "}
            for relaxed meals that work for everyone at the table. Visit for{" "}
            <span className="text-softMintGreen font-semibold">
              family brunch Milton Keynes
            </span>
            , family lunch, family dinner, halal-friendly dining and a kids menu
            made to keep younger guests happy without making adults compromise.
            <br />
            <span className="text-logoGold font-medium">
              Comfortable, welcoming and easy to book for families and groups.
            </span>
          </p>
        </header>

        <div id="summary-section" data-book-button-side="left">
          <BreadcrumbTrail items={BREADCRUMBS} />
          <QuickSummary
            items={SUMMARY_ITEMS}
            ctaText="Book a Family Table"
            ctaLink="/booking"
            variant="mint"
          />
        </div>

        <div id="family-comfort-section" data-book-button-side="right">
          <ImageTextBlock
            eyebrow="Comfortable Family Dining"
            heading="A Table Where Everyone Can Settle In"
            text={
              <>
                <p>
                  Finding a restaurant for families in Milton Keynes can be
                  tricky: adults want good food, children need simple choices,
                  and the whole visit needs to feel relaxed rather than rushed.
                </p>
                <p className="mt-3">
                  Nour Maison brings those needs together with a family-friendly
                  restaurant atmosphere, warm service and halal-friendly plates
                  across breakfast, brunch, lunch and dinner.
                </p>
              </>
            }
            imageSrc="/images/seo/family-restaurant-milton-keynes/family-restaurant-table-nour-maison.webp"
            imageAlt="Family restaurant table at Nour Maison in Milton Keynes"
            imagePosition="center 70%"
          />
        </div>

        <div id="kids-menu-section" data-book-button-side="left">
          <ImageTextBlock
            eyebrow="Kids Menu"
            heading="Food for Younger Guests, Without the Fuss"
            text={
              <>
                <p>
                  The kids menu in Milton Keynes at Nour Maison is there to make
                  family dining easier. Younger guests get approachable choices,
                  while adults can still enjoy café brasserie dishes with a more
                  polished feel.
                </p>
                <p className="mt-3">
                  That balance matters. A good family-friendly restaurant in
                  Milton Keynes should not feel like choosing between the kids
                  being happy and the adults eating well. Tiny victory, big
                  mood.
                </p>
              </>
            }
            imageSrc="/images/seo/family-restaurant-milton-keynes/kids-menu-family-dining.webp"
            imageAlt="Kids menu and family dining at Nour Maison Milton Keynes"
            reverse
          />
        </div>

        <div id="family-bookings-section" data-book-button-side="right">
          <ImageTextBlock
            eyebrow="Family Brunch & Dinner"
            heading="Easy Plans for Brunch, Lunch and Dinner"
            text={
              <>
                <p>
                  Nour Maison works for family brunch Milton Keynes, relaxed
                  weekend lunches, halal family restaurant visits and family
                  dinner Milton Keynes when you want somewhere warm, comfortable
                  and a little more considered.
                </p>
                <p className="mt-3">
                  Book ahead for groups and family tables, especially when the
                  plan includes children, grandparents or a few extra chairs.
                  Good family meals need less chaos and more dessert strategy.
                </p>
              </>
            }
            imageSrc="/images/seo/family-restaurant-milton-keynes/family-brunch-dinner-milton-keynes.webp"
            imageAlt="Family brunch and dinner at Nour Maison restaurant in Milton Keynes"
          />
        </div>

        <div id="highlights-section" data-book-button-side="left">
          <HighlightsGrid items={HIGHLIGHTS} />
        </div>

        <div id="internal-links-section" data-book-button-side="right">
          <InternalLinksGrid
            eyebrow="Explore"
            heading="Plan Your Family Visit"
            links={INTERNAL_LINKS}
          />
        </div>

        <div id="related-blogs-section" data-book-button-side="right">
          <RelatedSeoBlogs
            pageNumber={8}
            pageSlug="family-restaurant-milton-keynes"
            title="Related Family Dining Guides"
            description="Explore Nour Maison articles about family restaurants, kids menus, brunch, halal dining and places to eat in Milton Keynes."
            limit={6}
          />
        </div>

        <div id="faq-section" data-book-button-side="left">
          <FAQSection
            eyebrow="Good to Know"
            heading="Family Restaurant FAQs"
            items={FAQ_ITEMS}
          />
        </div>

        <div id="cta-section" data-book-button-side="left">
          <CTABlock
            eyebrow="Family Meal Coming Up?"
            heading="Book a Family Table at Nour Maison"
            variant="mint"
            description={
              <>
                Choose{" "}
                <span className="font-nour text-logoGold font-semibold">
                  Nour Maison
                </span>{" "}
                as your family restaurant in Milton Keynes for halal-friendly
                dining, kids menu options, family brunch, lunch and dinner in a
                warm, relaxed setting.
              </>
            }
            primaryCTA={{ text: "Book a Table", href: "/booking" }}
            secondaryCTA={{ text: "View Kids Menu", href: "/kids-menu" }}
          />
        </div>
      </main>
    </div>
  );
}
