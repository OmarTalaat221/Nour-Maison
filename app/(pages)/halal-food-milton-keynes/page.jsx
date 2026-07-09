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
const PATHNAME = "/halal-food-milton-keynes";
const PAGE_URL = `${SITE_URL}${PATHNAME}`;
const OG_IMAGE = `${SITE_URL}/images/seo/halal-food-milton-keynes/halal-food-milton-keynes-og.webp`;
const PAGE_BANNER_IMAGE =
  "/images/seo/halal-food-milton-keynes/halal-food-milton-keynes-og.webp";

const PAGE_TITLE = "Halal Food in Milton Keynes | Nour Maison";
const PAGE_DESCRIPTION =
  "Discover halal food in Milton Keynes at Nour Maison, serving French and Middle Eastern inspired brunch, breakfast, lunch, desserts and elegant café brasserie dining";

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  alternates: { canonical: PAGE_URL },
  keywords: [
    "halal food Milton Keynes",
    "halal food in Milton Keynes",
    "best halal food Milton Keynes",
    "halal food MK",
    "halal food near me Milton Keynes",
    "halal cafe Milton Keynes",
    "halal brunch Milton Keynes",
    "halal breakfast Milton Keynes",
    "halal restaurant Milton Keynes",
    "Middle Eastern halal food Milton Keynes",
    "French halal food Milton Keynes",
    "halal dining Milton Keynes",
    "family halal food Milton Keynes",
    "halal lunch Milton Keynes",
    "halal desserts Milton Keynes",
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
        alt: "Halal food in Milton Keynes at Nour Maison with French and Middle Eastern inspired dishes",
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
    value: "Halal breakfast, brunch, lunch, desserts and family dining",
  },
  {
    label: "Food Style",
    value: "French and Middle Eastern inspired halal café brasserie food",
  },
  {
    label: "Good For",
    value: "Families, friends, couples, groups and relaxed everyday dining",
  },
  { label: "Location", value: "149 Grafton Gate, Milton Keynes, MK9 1AE" },
  { label: "Hours", value: "Open daily: 9am–10pm" },
  { label: "Booking", value: "Book online or call +44 1908 772177" },
];

const HIGHLIGHTS = [
  {
    icon: "check",
    variant: "gold",
    title: "Halal Food Choice",
    description:
      "A clear choice for halal food in Milton Keynes, from breakfast and brunch to dinner-style plates.",
  },
  {
    icon: "sparkle",
    variant: "mint",
    title: "French & Middle Eastern Detail",
    description:
      "Elegant plating, warm flavours and a café brasserie style that gives halal dining more character.",
  },
  {
    icon: "users",
    variant: "mint",
    title: "Comfortable for Groups",
    description:
      "A welcoming place for family halal food, friend catch-ups, casual lunches and relaxed occasions.",
  },
];

const INTERNAL_LINKS = [
  {
    label: "Our Full Menu",
    href: "/menu",
    variant: "gold",
    description:
      "Explore breakfast, brunch, lunch, desserts, dinner and signature halal-friendly dishes.",
  },
  {
    label: "Book a Table",
    href: "/booking",
    description: "Reserve your halal dining table at Nour Maison.",
  },
  {
    label: "Halal Restaurant",
    href: "/halal-restaurant-milton-keynes",
    variant: "mint",
    description:
      "Learn more about Nour Maison as a halal restaurant in Milton Keynes.",
  },
  {
    label: "Halal Brunch",
    href: "/halal-brunch-milton-keynes",
    // variant: "gold",
    description:
      "Plan a halal brunch visit with sweet plates, savoury dishes and artisan drinks.",
  },
  {
    label: "Afternoon Tea Menu",
    href: "/afternoon-tea-menu",
    // variant: "mint",
    description:
      "Explore our refined afternoon tea experience for slower daytime occasions.",
  },
  {
    label: "Kids Menu",
    href: "/kids-menu",
    variant: "cream",
    description:
      "View family-friendly options for younger guests visiting Nour Maison.",
  },
  {
    label: "Gallery",
    href: "/gallery",
    variant: "gold",
    description:
      "See our food, interiors, drinks and table moments before you visit.",
  },
  {
    label: "About Us",
    href: "/about-us",
    // variant: "gold",
    description:
      "Discover the Nour Maison concept, hospitality and flavour direction.",
  },
  {
    label: "Contact Us",
    href: "/contact-us",
    variant: "mint",
    description:
      "Find our address, phone number and Milton Keynes visit details.",
  },
];

const FAQ_ITEMS = [
  {
    question: "Where can I find halal food in Milton Keynes?",
    answer:
      "Nour Maison serves halal food in Milton Keynes at 149 Grafton Gate, MK9 1AE, with breakfast, brunch, lunch, desserts, afternoon tea and evening dining.",
  },
  {
    question: "Is Nour Maison a halal restaurant in Milton Keynes?",
    answer:
      "Yes. Nour Maison offers halal-friendly dining in Milton Keynes with French and Middle Eastern inspired food served in a café brasserie setting.",
  },
  {
    question: "Does Nour Maison serve halal brunch?",
    answer:
      "Yes. Nour Maison is suitable for halal brunch in Milton Keynes, with sweet plates, savoury dishes, artisan drinks and relaxed daytime dining.",
  },
  {
    question: "Can I get halal breakfast at Nour Maison?",
    answer:
      "Yes. Nour Maison opens daily from 9am and serves halal breakfast and brunch-style plates in Milton Keynes.",
  },
  {
    question: "Is Nour Maison suitable for families looking for halal food?",
    answer:
      "Yes. Nour Maison is family-friendly, with a welcoming atmosphere and a kids menu available for younger guests.",
  },
  {
    question: "Can I book a table for halal food online?",
    answer:
      "Yes. You can book a table online through the Nour Maison booking page or call +44 1908 772177.",
  },
  {
    question: "What kind of halal food does Nour Maison serve?",
    answer:
      "Nour Maison serves halal-friendly café brasserie food with French and Middle Eastern influences, including brunch plates, savoury dishes, desserts, afternoon tea and roast dining.",
  },
];

const BREADCRUMBS = [
  { name: "Home", href: "/" },
  { name: "Halal Food in Milton Keynes", href: PATHNAME },
];

const STICKY_BUTTON_SECTIONS = [
  { selector: "#halal-food-content", side: "right" },
  { selector: "#summary-section", side: "right" },
  { selector: "#halal-food-choice-section", side: "right" },
  { selector: "#flavour-section", side: "right" },
  { selector: "#place-section", side: "right" },
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
      caption: "Halal food in Milton Keynes at Nour Maison",
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
        name: "Book halal food at Nour Maison",
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
        name: "Halal Food in Milton Keynes",
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

export default function HalalFoodMiltonKeynesPage() {
  return (
    <div>
      <StickyBookNowButton
        href="/booking"
        label="Book Now"
        desktopTop="68%"
        sections={STICKY_BUTTON_SECTIONS}
      />

      <SeoSchemas schemas={SCHEMAS} pageId="halal-food-mk" />

      <PagesBanner
        bottomBg={false}
        slogan={
          <div className="text-base sm:text-lg md:text-2xl xl:text-3xl px-2">
            Halal food with colour, comfort and café brasserie polish.
            <br />
            French detail meets Middle Eastern warmth in Milton Keynes.
          </div>
        }
        title={"Halal Food in Milton Keynes"}
        scrollTo={"halal-food-content"}
      />

      <main
        id="halal-food-content"
        className="halal-mk-content w-full relative py-20 sm:py-28 md:py-36 z-10 overflow-hidden"
        aria-labelledby="halal-food-heading"
        data-book-button-side="right"
      >
        <header className="w-full max-w-[90%] sm:max-w-2xl md:max-w-3xl lg:max-w-4xl xl:max-w-5xl mx-auto px-3 sm:px-4 md:px-6 text-center mb-8 sm:mb-10 md:mb-14 mt-10 relative z-10">
          <p className="font-pacifico text-goldenOrange text-xl sm:text-2xl md:text-3xl lg:text-4xl mb-2 sm:mb-3">
            Halal Dining at Nour Maison
          </p>

          <h1
            id="halal-food-heading"
            className="font-seasons text-softMintGreen text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl mb-3 sm:mb-4 md:mb-5 leading-tight tracking-wide"
          >
            Halal Food{" "}
            <span className="text-goldenOrange">in Milton Keynes</span>{" "}
            <span className="block mt-1 sm:mt-2">
              with French <span className="font-nour">&</span> Middle Eastern
              Soul
            </span>
          </h1>

          <p className="font-playfair text-logoGold text-base sm:text-lg md:text-xl leading-relaxed md:leading-loose max-w-5xl mx-auto">
            If you are searching for{" "}
            <span className="text-goldenOrange font-semibold">
              halal food in Milton Keynes
            </span>
            , Nour Maison gives you more than a quick meal. Expect halal
            breakfast, halal brunch, lunch plates, desserts, afternoon tea and
            café brasserie dining shaped by{" "}
            <span className="text-softMintGreen font-semibold">
              French presentation and Middle Eastern flavour
            </span>
            .
            <br />
            <span className="text-logoGold font-medium">
              A warm, elegant place for families, friends, couples and everyday
              halal dining.
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

        <div id="halal-food-choice-section" data-book-button-side="right">
          <ImageTextBlock
            eyebrow="Halal Food Choice"
            heading="From Breakfast to Dinner, Without the Guesswork"
            text={
              <>
                <p>
                  Good halal food should feel clear, generous and easy to
                  choose. At Nour Maison, guests can enjoy halal-friendly food
                  across the day, from breakfast and brunch to lunch, desserts,
                  afternoon tea and evening meals.
                </p>
                <p className="mt-3">
                  Whether you want a relaxed halal café visit or a fuller halal
                  restaurant experience in Milton Keynes, the menu gives you
                  flavour, variety and confidence at the same table.
                </p>
              </>
            }
            imageSrc="/images/seo/halal-food-milton-keynes/halal-food-brunch-plate-nour-maison.webp"
            imageAlt="Halal food brunch plate at Nour Maison in Milton Keynes"
            imagePosition="center 65%"
          />
        </div>

        <div id="flavour-section" data-book-button-side="left">
          <ImageTextBlock
            eyebrow="Flavour Direction"
            heading="French Detail, Middle Eastern Warmth"
            text={
              <>
                <p>
                  Nour Maison brings a different feel to halal food in Milton
                  Keynes: elegant plating, soft café colours, bold sauces, fresh
                  garnishes and dishes that feel both familiar and carefully
                  finished.
                </p>
                <p className="mt-3">
                  The result is halal dining that works for everyday cravings,
                  but still has enough polish for birthdays, catch-ups and
                  slower weekend plans.
                </p>
              </>
            }
            imageSrc="/images/seo/halal-food-milton-keynes/french-middle-eastern-halal-food.webp"
            imageAlt="French and Middle Eastern halal food at Nour Maison Milton Keynes"
            reverse
          />
        </div>

        <div id="place-section" data-book-button-side="right">
          <ImageTextBlock
            eyebrow="The Place"
            heading="A Warm Café Brasserie on Grafton Gate"
            text={
              <>
                <p>
                  The setting matters. Nour Maison is designed with soft green
                  seating, warm gold details, floral touches and an atmosphere
                  that feels calm without being too formal.
                </p>
                <p className="mt-3">
                  It is a comfortable spot for halal food near central Milton
                  Keynes, whether you are meeting friends, bringing family,
                  planning brunch or choosing a place that feels a bit more
                  considered than the usual quick stop.
                </p>
              </>
            }
            imageSrc="/images/seo/halal-food-milton-keynes/nour-maison-halal-dining-place.webp"
            imageAlt="Nour Maison halal dining place in Milton Keynes"
            imagePosition="center 85%"
          />
        </div>

        <div id="highlights-section" data-book-button-side="left">
          <HighlightsGrid items={HIGHLIGHTS} />
        </div>

        <div id="internal-links-section" data-book-button-side="right">
          <InternalLinksGrid
            eyebrow="Explore"
            heading="Plan Your Halal Food Visit"
            links={INTERNAL_LINKS}
          />
        </div>

        <div id="related-blogs-section" data-book-button-side="right">
          <RelatedSeoBlogs
            pageNumber={7}
            pageSlug="halal-food-milton-keynes"
            title="Related Halal Food Guides"
            description="Explore Nour Maison articles about halal food, halal restaurants, brunch, family dining and places to eat in Milton Keynes."
            limit={6}
          />
        </div>

        <div id="faq-section" data-book-button-side="left">
          <FAQSection
            eyebrow="Good to Know"
            heading="Halal Food FAQs"
            items={FAQ_ITEMS}
          />
        </div>

        <div id="cta-section" data-book-button-side="left">
          <CTABlock
            eyebrow="Ready to Eat?"
            heading="Book Halal Food at Nour Maison"
            variant="mint"
            description={
              <>
                Join{" "}
                <span className="font-nour text-logoGold font-semibold">
                  Nour Maison
                </span>{" "}
                for halal food in Milton Keynes with French-inspired detail,
                Middle Eastern warmth and café brasserie hospitality. Perfect
                for{" "}
                <span className="text-logoGold">
                  halal brunch, family dining, relaxed lunches and special
                  occasions
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
