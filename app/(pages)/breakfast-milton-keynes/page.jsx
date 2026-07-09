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
const PATHNAME = "/breakfast-milton-keynes";
const PAGE_URL = `${SITE_URL}${PATHNAME}`;
const OG_IMAGE = `${SITE_URL}/images/seo/breakfast-milton-keynes/breakfast-milton-keynes-og.webp`;
const PAGE_BANNER_IMAGE =
  "/images/seo/breakfast-milton-keynes/breakfast-milton-keynes-og.webp";

const PAGE_TITLE = "Breakfast in Milton Keynes | Nour Maison";
const PAGE_DESCRIPTION =
  "Start your day at Nour Maison with breakfast in Milton Keynes, from halal full breakfast plates to croissants, coffee, sweet dishes and relaxed morning dining";

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  alternates: { canonical: PAGE_URL },
  keywords: [
    "breakfast Milton Keynes",
    "breakfast in Milton Keynes",
    "best breakfast Milton Keynes",
    "halal breakfast Milton Keynes",
    "breakfast near me Milton Keynes",
    "brunch breakfast Milton Keynes",
    "cafe breakfast Milton Keynes",
    "full English breakfast Milton Keynes",
    "coffee and breakfast Milton Keynes",
    "breakfast cafe Milton Keynes",
    "French breakfast Milton Keynes",
    "Middle Eastern breakfast Milton Keynes",
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
        alt: "Breakfast in Milton Keynes at Nour Maison with halal breakfast plates coffee and brunch dishes",
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
    value: "Morning coffee, halal breakfast, sweet plates and brunch",
  },
  {
    label: "Breakfast Style",
    value: "Café brasserie breakfast with French and Middle Eastern touches",
  },
  {
    label: "Good For",
    value: "Slow mornings, family breakfasts, catch-ups and weekend plans",
  },
  { label: "Location", value: "149 Grafton Gate, Milton Keynes, MK9 1AE" },
  { label: "Hours", value: "Open daily from 9am" },
  { label: "Booking", value: "Book online or call +44 1908 772177" },
];

const HIGHLIGHTS = [
  {
    icon: "check",
    variant: "gold",
    title: "Halal Breakfast",
    description:
      "Start the day with halal breakfast choices served in a relaxed café brasserie setting.",
  },
  {
    icon: "sparkle",
    variant: "mint",
    title: "Sweet & Savoury Plates",
    description:
      "From full breakfast plates to croissants, fruit-led dishes, coffee and elegant morning treats.",
  },
  {
    icon: "users",
    variant: "mint",
    title: "Morning Meet-Up Spot",
    description:
      "A comfortable choice for family breakfasts, friend catch-ups and weekend brunch plans.",
  },
];

const INTERNAL_LINKS = [
  {
    label: "Our Full Menu",
    href: "/menu",
    variant: "gold",
    description:
      "Explore breakfast, brunch, lunch, desserts, dinner and signature dishes.",
  },
  {
    label: "Book a Table",
    href: "/booking",
    description: "Reserve your breakfast table at Nour Maison.",
  },
  {
    label: "Afternoon Tea Menu",
    href: "/afternoon-tea-menu",
    variant: "mint",
    description:
      "Plan a refined afternoon tea visit after your next breakfast experience.",
  },
  {
    label: "Kids Menu",
    href: "/kids-menu",
    variant: "cream",
    description:
      "Family-friendly dishes for younger guests visiting Nour Maison.",
  },
  {
    label: "Gallery",
    href: "/gallery",
    description:
      "See our breakfast plates, café interiors and plated food moments.",
  },
  {
    label: "About Us",
    href: "/about-us",
    variant: "cream",
    description:
      "Learn more about the Nour Maison concept, hospitality and flavour direction.",
  },
  {
    label: "Roast Menu",
    href: "/roast-menu",
    variant: "gold",
    description:
      "Explore roast dining for later in the day or your next weekend visit.",
  },
  {
    label: "Contact Us",
    href: "/contact-us",
    description:
      "Find our address, phone number and Milton Keynes visit details.",
  },
  {
    label: "Our Blog",
    href: "/all-blogs",
    variant: "mint",
    description:
      "Read breakfast, brunch and Milton Keynes dining guides from Nour Maison.",
  },
];

const FAQ_ITEMS = [
  {
    question: "Where can I get breakfast in Milton Keynes?",
    answer:
      "Nour Maison serves breakfast in Milton Keynes at 149 Grafton Gate, MK9 1AE, with halal breakfast plates, coffee, sweet dishes and café brasserie dining.",
  },
  {
    question: "Does Nour Maison serve halal breakfast?",
    answer:
      "Yes. Nour Maison offers halal breakfast choices in Milton Keynes, including savoury plates, brunch-style dishes and sweet morning options.",
  },
  {
    question: "What time does breakfast start?",
    answer:
      "Nour Maison opens daily from 9am, making it a good choice for breakfast, coffee and morning dining in Milton Keynes.",
  },
  {
    question: "Can I book breakfast online?",
    answer:
      "Yes. You can book a table online through the Nour Maison booking page or call +44 1908 772177.",
  },
  {
    question: "Is Nour Maison suitable for family breakfast?",
    answer:
      "Yes. Nour Maison is suitable for families, with a welcoming atmosphere and a kids menu available.",
  },
  {
    question: "Can I visit for coffee only?",
    answer:
      "Yes. Nour Maison works well for coffee, tea, light bites and relaxed morning catch-ups, as well as full breakfast plates.",
  },
  {
    question: "Does Nour Maison offer sweet breakfast dishes?",
    answer:
      "Yes. The breakfast and brunch menu includes sweet café-style dishes, pastries and fruit-led plates alongside savoury choices.",
  },
];

const BREADCRUMBS = [
  { name: "Home", href: "/" },
  { name: "Breakfast in Milton Keynes", href: PATHNAME },
];

const STICKY_BUTTON_SECTIONS = [
  { selector: "#breakfast-content", side: "right" },
  { selector: "#summary-section", side: "right" },
  { selector: "#morning-breakfast-section", side: "right" },
  { selector: "#sweet-savoury-section", side: "right" },
  { selector: "#coffee-brunch-section", side: "right" },
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
      caption: "Breakfast in Milton Keynes at Nour Maison",
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
        name: "Book breakfast at Nour Maison",
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
      "Nour Maison is a halal café, brasserie and restaurant in Milton Keynes, serving breakfast, brunch, coffee, afternoon tea, roast dining and evening meals.",
    servesCuisine: [
      "Halal",
      "Breakfast",
      "Brunch",
      "Coffee",
      "Cafe",
      "French",
      "Middle Eastern",
      "Fusion",
      "Desserts",
      "Afternoon Tea",
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
        name: "Breakfast in Milton Keynes",
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

export default function BreakfastMiltonKeynesPage() {
  return (
    <div>
      <StickyBookNowButton
        href="/booking"
        label="Book Now"
        desktopTop="68%"
        sections={STICKY_BUTTON_SECTIONS}
      />

      <SeoSchemas schemas={SCHEMAS} pageId="breakfast-mk" />

      <PagesBanner
        bottomBg={false}
        slogan={
          <div className="text-base sm:text-lg md:text-2xl xl:text-3xl px-2">
            Morning plates, coffee and relaxed café elegance.
            <br />
            Breakfast in Milton Keynes, served the Nour Maison way.
          </div>
        }
        title={"Breakfast in Milton Keynes"}
        scrollTo={"breakfast-content"}
      />

      <main
        id="breakfast-content"
        className="halal-mk-content w-full relative py-20 sm:py-28 md:py-36 z-10 overflow-hidden"
        aria-labelledby="breakfast-heading"
        data-book-button-side="right"
      >
        <header className="w-full max-w-[90%] sm:max-w-2xl md:max-w-3xl lg:max-w-4xl xl:max-w-5xl mx-auto px-3 sm:px-4 md:px-6 text-center mb-8 sm:mb-10 md:mb-14 mt-10 relative z-10">
          <p className="font-pacifico text-goldenOrange text-xl sm:text-2xl md:text-3xl lg:text-4xl mb-2 sm:mb-3">
            Morning Dining at Nour Maison
          </p>

          <h1
            id="breakfast-heading"
            className="font-seasons text-softMintGreen text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl mb-3 sm:mb-4 md:mb-5 leading-tight tracking-wide"
          >
            Breakfast{" "}
            <span className="text-goldenOrange">in Milton Keynes</span>{" "}
            <span className="block mt-1 sm:mt-2">
              with Café Brasserie Warmth
            </span>
          </h1>

          <p className="font-playfair text-logoGold text-base sm:text-lg md:text-xl leading-relaxed md:leading-loose max-w-5xl mx-auto">
            Start the day at{" "}
            <span className="text-goldenOrange font-semibold">Nour Maison</span>{" "}
            with breakfast in Milton Keynes that feels calm, colourful and
            properly made. Expect{" "}
            <span className="text-softMintGreen font-semibold">
              halal breakfast plates
            </span>
            , coffee, croissants, sweet dishes and brunch-style favourites in a
            warm café brasserie setting.
            <br />
            <span className="text-logoGold font-medium">
              Open daily from 9am for morning catch-ups, family breakfasts and
              slow weekend plans.
            </span>
          </p>
        </header>

        <div id="summary-section" data-book-button-side="left">
          <BreadcrumbTrail items={BREADCRUMBS} />
          <QuickSummary
            items={SUMMARY_ITEMS}
            ctaText="Book Breakfast"
            ctaLink="/booking"
            variant="mint"
          />
        </div>

        <div id="morning-breakfast-section" data-book-button-side="right">
          <ImageTextBlock
            eyebrow="Morning Breakfast"
            heading="A Better Start to the Day"
            text={
              <>
                <p>
                  Breakfast should do more than fill a gap. At Nour Maison, it
                  is a slower, warmer start: good coffee, generous plates and a
                  setting that makes the morning feel considered.
                </p>
                <p className="mt-3">
                  Whether you prefer a full halal breakfast, a lighter café
                  plate or something sweet with tea or coffee, the morning menu
                  gives you room to choose properly.
                </p>
              </>
            }
            imageSrc="/images/seo/breakfast-milton-keynes/breakfast-plate-nour-maison.webp"
            imageAlt="Halal breakfast plate at Nour Maison in Milton Keynes"
          />
        </div>

        <div id="sweet-savoury-section" data-book-button-side="left">
          <ImageTextBlock
            eyebrow="Sweet & Savoury"
            heading="From Full Plates to French Inspired Treats"
            text={
              <>
                <p>
                  Some mornings call for eggs, toast and a proper breakfast
                  plate. Others deserve a croissant, fruit, pistachio, berries
                  or a dessert-style brunch dish that looks as good as it
                  tastes.
                </p>
                <p className="mt-3">
                  Nour Maison brings both sides together, so breakfast can be
                  hearty, elegant or somewhere nicely in between.
                </p>
              </>
            }
            imageSrc="/images/seo/breakfast-milton-keynes/breakfast-and-coffee-milton-keynes.webp"
            imageAlt="Sweet breakfast dish with fruit at Nour Maison Milton Keynes"
            reverse
          />
        </div>

        <div id="coffee-brunch-section" data-book-button-side="right">
          <ImageTextBlock
            eyebrow="Coffee & Brunch Energy"
            heading="Breakfast That Can Turn Into Brunch"
            text={
              <>
                <p>
                  A quick coffee can become a proper breakfast. A breakfast can
                  easily become brunch. That is the joy of an all-day café
                  brasserie: you do not have to rush the table.
                </p>
                <p className="mt-3">
                  Visit for a weekday morning break, a weekend catch-up, a
                  family breakfast or a brunch plan before exploring central
                  Milton Keynes.
                </p>
              </>
            }
            imageSrc="/images/seo/breakfast-milton-keynes/sweet-breakfast-nour-maison.webp"
            imageAlt="Coffee and breakfast table at Nour Maison Milton Keynes"
          />
        </div>

        <div id="highlights-section" data-book-button-side="left">
          <HighlightsGrid items={HIGHLIGHTS} />
        </div>

        <div id="internal-links-section" data-book-button-side="right">
          <InternalLinksGrid
            eyebrow="Explore"
            heading="Plan Your Morning at Nour Maison"
            links={INTERNAL_LINKS}
          />
        </div>

        <div id="related-blogs-section" data-book-button-side="right">
          <RelatedSeoBlogs
            pageNumber={4}
            pageSlug="breakfast-milton-keynes"
            title="Related Breakfast Guides"
            description="Explore Nour Maison articles about breakfast, brunch, coffee and morning dining in Milton Keynes."
            limit={6}
          />
        </div>

        <div id="faq-section" data-book-button-side="left">
          <FAQSection
            eyebrow="Good to Know"
            heading="Breakfast FAQs"
            items={FAQ_ITEMS}
          />
        </div>

        <div id="cta-section" data-book-button-side="left">
          <CTABlock
            eyebrow="Start Your Morning Well"
            heading="Book Breakfast at Nour Maison"
            variant="mint"
            description={
              <>
                Join{" "}
                <span className="font-nour text-logoGold font-semibold">
                  Nour Maison
                </span>{" "}
                for breakfast in Milton Keynes with halal plates, coffee, sweet
                dishes and relaxed café brasserie hospitality. Perfect for{" "}
                <span className="text-logoGold">
                  morning catch-ups, family breakfasts and weekend brunch plans
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
