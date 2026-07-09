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
const PATHNAME = "/restaurant-milton-keynes";
const PAGE_URL = `${SITE_URL}${PATHNAME}`;
const OG_IMAGE = `${SITE_URL}/images/seo/restaurant-milton-keynes/restaurant-milton-keynes-og.webp`;
const PAGE_BANNER_IMAGE =
  "/images/seo/restaurant-milton-keynes/restaurant-milton-keynes-og.webp";

const PAGE_TITLE = "Restaurant in Milton Keynes | Nour Maison";
const PAGE_DESCRIPTION =
  "Looking for a restaurant in Milton Keynes? Nour Maison serves halal French and Middle Eastern dining for brunch, afternoon tea, roast dinners and special occasions";

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  alternates: { canonical: PAGE_URL },
  keywords: [
    "restaurant Milton Keynes",
    "restaurant in Milton Keynes",
    "best restaurant Milton Keynes",
    "restaurant MK",
    "restaurant near me Milton Keynes",
    "French restaurant Milton Keynes",
    "Middle Eastern restaurant Milton Keynes",
    "halal restaurant Milton Keynes",
    "modern restaurant Milton Keynes",
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
        alt: "Nour Maison restaurant in Milton Keynes serving halal French and Middle Eastern dining",
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
    value: "Breakfast, brunch, dinner and special occasions",
  },
  { label: "Cuisine", value: "Halal French & Middle Eastern dining" },
  { label: "Dining Style", value: "Café, brasserie and restaurant experience" },
  { label: "Location", value: "149 Grafton Gate, Milton Keynes, MK9 1AE" },
  { label: "Hours", value: "Open daily: 9am–10pm" },
  { label: "Booking", value: "Online or call +44 1908 772177" },
];

const HIGHLIGHTS = [
  {
    icon: "sparkle",
    variant: "mint",
    title: "Elegant Dining",
    description:
      "A polished restaurant setting with French-inspired presentation and Middle Eastern warmth.",
  },
  {
    icon: "check",
    variant: "gold",
    title: "Halal-Friendly Menu",
    description:
      "Enjoy a halal dining experience across breakfast, brunch, lunch, afternoon tea and dinner.",
  },
  {
    icon: "users",
    variant: "mint",
    title: "Made for Every Visit",
    description:
      "Ideal for family meals, relaxed catch-ups, date nights and special occasions in Milton Keynes.",
  },
];

const INTERNAL_LINKS = [
  {
    label: "Our Full Menu",
    href: "/menu",
    variant: "gold",
    description:
      "Explore breakfast, brunch, lunch, dinner and signature dishes.",
  },
  {
    label: "Book a Table",
    href: "/booking",
    description: "Reserve your table at Nour Maison in Milton Keynes.",
  },
  {
    label: "About Us",
    href: "/about-us",
    variant: "gold",
    description:
      "Discover the story, flavour and hospitality behind Nour Maison.",
  },
  {
    label: "Gallery",
    href: "/gallery",
    // variant: "mint",
    description:
      "See our food, interiors, table settings and restaurant atmosphere.",
  },
  {
    label: "Contact Us",
    href: "/contact-us",
    // variant: "gold",
    description: "Find us, call us or plan your visit.",
  },
  {
    label: "Afternoon Tea",
    href: "/afternoon-tea-menu",
    // variant: "mint",
    description: "Explore our refined afternoon tea experience.",
  },
  {
    label: "Roast Menu",
    href: "/roast-menu",
    variant: "mint",

    description: "Discover our roast dining options at Nour Maison.",
  },
  {
    label: "Kids Menu",
    href: "/kids-menu",
    variant: "cream",
    description: "Family-friendly dishes for younger guests.",
  },
  {
    label: "Our Blog",
    href: "/all-blogs",
    variant: "mint",
    description:
      "Read dining guides, local food stories and Nour Maison updates.",
  },
];

const FAQ_ITEMS = [
  {
    question: "What type of restaurant is Nour Maison?",
    answer:
      "Nour Maison is a halal French and Middle Eastern café, brasserie and restaurant in Milton Keynes, serving breakfast, brunch, lunch, afternoon tea, roast dinners and evening dining.",
  },
  {
    question: "Is Nour Maison a halal restaurant in Milton Keynes?",
    answer:
      "Yes. Nour Maison offers a halal dining experience in Milton Keynes, with food and hospitality designed for guests looking for comfort, flavour and confidence.",
  },
  {
    question: "Can I visit Nour Maison for brunch or dinner?",
    answer:
      "Yes. Nour Maison is open daily from 9am to 10pm, making it suitable for breakfast, brunch, lunch, afternoon tea, roast dining and dinner.",
  },
  {
    question: "Is Nour Maison suitable for families?",
    answer:
      "Yes. Nour Maison is family-friendly, with a welcoming atmosphere and a kids menu available for younger guests.",
  },
  {
    question: "Where is Nour Maison located?",
    answer:
      "Nour Maison is located at 149 Grafton Gate, Milton Keynes, MK9 1AE.",
  },
  {
    question: "Can I book a table online?",
    answer:
      "Yes. You can book a table directly through the Nour Maison booking page or call +44 1908 772177.",
  },
  {
    question: "Is Nour Maison good for special occasions?",
    answer:
      "Yes. Nour Maison is suitable for birthdays, anniversaries, family gatherings, date nights and relaxed celebrations in Milton Keynes.",
  },
];

const BREADCRUMBS = [
  { name: "Home", href: "/" },
  { name: "Restaurant in Milton Keynes", href: PATHNAME },
];

const STICKY_BUTTON_SECTIONS = [
  { selector: "#restaurant-content", side: "right" },
  { selector: "#summary-section", side: "right" },
  { selector: "#restaurant-experience-section", side: "right" },
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
      caption: "Restaurant in Milton Keynes at Nour Maison Café & Brasserie",
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
      "Nour Maison is a halal French and Middle Eastern café, brasserie and restaurant in Milton Keynes, serving breakfast, brunch, lunch, afternoon tea, roast dinners and evening dining.",
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
        name: "Restaurant in Milton Keynes",
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

export default function RestaurantMiltonKeynesPage() {
  return (
    <div>
      <StickyBookNowButton
        href="/booking"
        label="Book Now"
        desktopTop="68%"
        sections={STICKY_BUTTON_SECTIONS}
      />

      <SeoSchemas schemas={SCHEMAS} pageId="restaurant-mk" />

      <PagesBanner
        bottomBg={false}
        // images={[PAGE_BANNER_IMAGE]}
        slogan={
          <div className="text-base sm:text-lg md:text-2xl xl:text-3xl px-2">
            French elegance meets Middle Eastern warmth.
            <br />A halal-friendly restaurant experience in the heart of Milton
            Keynes.
          </div>
        }
        title={"Restaurant in Milton Keynes"}
        scrollTo={"restaurant-content"}
      />

      <main
        id="restaurant-content"
        className="halal-mk-content w-full relative py-20 sm:py-28 md:py-36 z-10 overflow-hidden"
        aria-labelledby="restaurant-heading"
        data-book-button-side="right"
      >
        <header className="w-full max-w-[90%] sm:max-w-2xl md:max-w-3xl lg:max-w-4xl xl:max-w-5xl mx-auto px-3 sm:px-4 md:px-6 text-center mb-8 sm:mb-10 md:mb-14 mt-10 relative z-10">
          <p className="font-pacifico text-goldenOrange text-xl sm:text-2xl md:text-3xl lg:text-4xl mb-2 sm:mb-3">
            Nour Maison Brasserie
          </p>

          <h1
            id="restaurant-heading"
            className="font-seasons text-softMintGreen text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl mb-3 sm:mb-4 md:mb-5 leading-tight tracking-wide"
          >
            A Warm <span className="text-goldenOrange">Restaurant</span>{" "}
            <span className="block mt-1 sm:mt-2">in Milton Keynes</span>
          </h1>

          <p className="font-playfair text-logoGold text-base sm:text-lg md:text-xl leading-relaxed md:leading-loose max-w-5xl mx-auto">
            Welcome to{" "}
            <span className="text-goldenOrange font-semibold">Nour Maison</span>{" "}
            — a restaurant in Milton Keynes where{" "}
            <span className="text-softMintGreen font-semibold">
              French-inspired elegance
            </span>{" "}
            meets the{" "}
            <span className="text-goldenOrange font-semibold">
              warmth and flavour of Middle Eastern dining
            </span>
            . From breakfast and brunch to afternoon tea, roast dinners and
            evening dining, Nour Maison is made for relaxed visits, family meals
            and special occasions.
            <br />
            <span className="text-logoGold font-medium">
              A halal-friendly café brasserie experience in the heart of Milton
              Keynes.
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

        <div id="restaurant-experience-section" data-book-button-side="right">
          <ImageTextBlock
            eyebrow="Restaurant Experience"
            heading="More Than Somewhere to Eat"
            text={
              <>
                <p>
                  When you search for a{" "}
                  <span className="text-goldenOrange font-semibold">
                    restaurant in Milton Keynes
                  </span>
                  , you are usually looking for more than a table and a plate.
                  You want good food, a comfortable atmosphere, thoughtful
                  service and a reason to come back.
                </p>
                <p className="mt-3">
                  At{" "}
                  <span className="text-softMintGreen font-semibold">
                    Nour Maison
                  </span>
                  , the experience is built around warm hospitality, elegant
                  details and a menu that brings together French and Middle
                  Eastern influences in a halal-friendly setting.
                </p>
              </>
            }
            imageSrc="/images/seo/restaurant-milton-keynes/restaurant-experience-nour-maison.webp"
            imageAlt="Restaurant dining experience at Nour Maison in Milton Keynes"
            imagePosition="center 85%"
          />
        </div>

        <div id="fusion-section" data-book-button-side="left">
          <ImageTextBlock
            eyebrow="French & Middle Eastern Dining"
            heading="Elegant Flavour with a Warm Soul"
            text={
              <>
                <p>
                  Nour Maison brings together two beautiful dining worlds:{" "}
                  <span className="text-goldenOrange font-semibold">
                    French-inspired presentation
                  </span>{" "}
                  and the{" "}
                  <span className="text-softMintGreen font-semibold">
                    generosity of Middle Eastern flavour
                  </span>
                  .
                </p>
                <p className="mt-3">
                  It is a restaurant experience that feels polished without
                  being cold, stylish without being stiff, and welcoming enough
                  for everyday meals, family visits and special occasions.
                </p>
              </>
            }
            imageSrc="/images/seo/restaurant-milton-keynes/signature-breakfast-dish-nour-maison.webp"
            imageAlt="French and Middle Eastern restaurant food at Nour Maison Milton Keynes"
            reverse
          />
        </div>

        <div id="all-day-section" data-book-button-side="right">
          <ImageTextBlock
            eyebrow="All-Day Dining"
            heading="From Brunch to Dinner in Milton Keynes"
            text={
              <>
                <p>
                  Nour Maison is designed for different moments across the day.
                  Visit for{" "}
                  <span className="text-goldenOrange font-semibold">
                    breakfast, brunch, lunch, afternoon tea, roast dining
                  </span>
                  , or an evening meal with friends and family.
                </p>
                <p className="mt-3">
                  Whether you are planning a casual café visit, a halal
                  restaurant booking, a family meal or a special occasion in
                  Milton Keynes, Nour Maison gives you a warm and elegant place
                  to settle in.
                </p>
              </>
            }
            imageSrc="/images/seo/restaurant-milton-keynes/breakfast-and-brunch-table-nour-maison.webp"
            imageAlt="All day dining at Nour Maison restaurant in Milton Keynes"
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
            pageNumber={1}
            pageSlug="restaurant-milton-keynes"
            title="Related Restaurant Guides"
            description="Explore more Nour Maison articles about restaurants, dining experiences, brunch, family meals and where to eat in Milton Keynes."
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

        <div id="cta-section" data-book-button-side="left">
          <CTABlock
            eyebrow="Ready to Experience Nour Maison?"
            heading="Book Your Restaurant Table Today"
            variant="mint"
            description={
              <>
                Reserve your table at{" "}
                <span className="font-nour text-logoGold font-semibold">
                  Nour Maison
                </span>{" "}
                and experience halal-friendly French & Middle Eastern dining in
                the heart of Milton Keynes. Open daily from 9am to 10pm. Perfect
                for{" "}
                <span className="text-logoGold">
                  brunch, family meals, date nights and special occasions
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
