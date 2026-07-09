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
const PATHNAME = "/halal-brunch-milton-keynes";
const PAGE_URL = `${SITE_URL}${PATHNAME}`;
const OG_IMAGE = `${SITE_URL}/images/seo/halal-brunch-milton-keynes/halal-brunch-milton-keynes-og.webp`;
const PAGE_BANNER_IMAGE =
  "/images/seo/halal-brunch-milton-keynes/halal-brunch-milton-keynes-og.webp";

const PAGE_TITLE = "Halal Brunch in Milton Keynes | Nour Maison";
const PAGE_DESCRIPTION =
  "Enjoy halal brunch in Milton Keynes at Nour Maison with artisan coffee, sweet brunch plates, savoury favourites and elegant café brasserie dining";

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  alternates: { canonical: PAGE_URL },
  keywords: [
    "halal brunch Milton Keynes",
    "halal brunch in Milton Keynes",
    "best halal brunch Milton Keynes",
    "halal brunch MK",
    "halal brunch near me Milton Keynes",
    "halal breakfast Milton Keynes",
    "halal cafe Milton Keynes",
    "halal brunch spot Milton Keynes",
    "weekend halal brunch Milton Keynes",
    "coffee and halal brunch Milton Keynes",
    "Middle Eastern brunch Milton Keynes",
    "French halal brunch Milton Keynes",
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
        alt: "Halal brunch in Milton Keynes at Nour Maison with artisan coffee and colourful brunch dishes",
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
    value: "Halal brunch, coffee, sweet plates and savoury brunch dishes",
  },
  {
    label: "Brunch Style",
    value: "Halal café brasserie brunch with French and Middle Eastern touches",
  },
  {
    label: "Good For",
    value: "Friends, families, couples and relaxed weekend plans",
  },
  { label: "Location", value: "149 Grafton Gate, Milton Keynes, MK9 1AE" },
  { label: "Hours", value: "Open daily from 9am" },
  { label: "Booking", value: "Book online or call +44 1908 772177" },
];

const HIGHLIGHTS = [
  {
    icon: "check",
    variant: "gold",
    title: "Halal Brunch Choices",
    description:
      "Enjoy brunch with halal-friendly dishes across sweet plates, savoury favourites and café classics.",
  },
  {
    icon: "sparkle",
    variant: "mint",
    title: "Beautiful Café Setting",
    description:
      "A calm, elegant space with soft colours, warm details and the signature Nour Maison atmosphere.",
  },
  {
    icon: "users",
    variant: "mint",
    title: "Easy Group Plans",
    description:
      "A strong choice for friends, families, couples and relaxed daytime gatherings in Milton Keynes.",
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
    description: "Reserve your halal brunch table at Nour Maison.",
  },
  {
    label: "Afternoon Tea Menu",
    href: "/afternoon-tea-menu",
    variant: "mint",
    description:
      "Discover a refined afternoon tea experience for your next visit.",
  },
  {
    label: "Kids Menu",
    href: "/kids-menu",
    variant: "cream",
    description: "View family-friendly options for younger guests.",
  },
  {
    label: "Roast Menu",
    href: "/roast-menu",
    // variant: "",
    description:
      "Explore roast dining for later in the day or your next weekend table.",
  },
  {
    label: "Gallery",
    href: "/gallery",
    description: "See our food, interiors, drinks and table moments.",
  },
  {
    label: "About Us",
    href: "/about-us",
    variant: "gold",
    description:
      "Learn more about the Nour Maison concept, hospitality and flavour direction.",
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
      "Read halal brunch, café and Milton Keynes dining guides from Nour Maison.",
  },
];

const FAQ_ITEMS = [
  {
    question: "Where can I get halal brunch in Milton Keynes?",
    answer:
      "Nour Maison serves halal brunch in Milton Keynes at 149 Grafton Gate, MK9 1AE, with sweet plates, savoury dishes, artisan drinks and café brasserie dining.",
  },
  {
    question: "Is Nour Maison suitable for halal brunch with family?",
    answer:
      "Yes. Nour Maison is family-friendly, with a welcoming atmosphere and a kids menu available for younger guests.",
  },
  {
    question: "What time does halal brunch start?",
    answer:
      "Nour Maison opens daily from 9am, making it suitable for halal breakfast, brunch, coffee and relaxed daytime dining.",
  },
  {
    question: "Can I book halal brunch online?",
    answer:
      "Yes. You can book your table online through the Nour Maison booking page or call +44 1908 772177.",
  },
  {
    question: "Does Nour Maison serve sweet and savoury brunch?",
    answer:
      "Yes. Nour Maison serves a mix of sweet brunch plates, pastries, fruit-led dishes, savoury favourites and coffee.",
  },
  {
    question: "Is Nour Maison good for weekend brunch?",
    answer:
      "Yes. Nour Maison is a good choice for weekend halal brunch in Milton Keynes, especially for friends, couples, families and relaxed catch-ups.",
  },
  {
    question: "Where is Nour Maison located?",
    answer:
      "Nour Maison is located at 149 Grafton Gate, Milton Keynes, MK9 1AE.",
  },
];

const BREADCRUMBS = [
  { name: "Home", href: "/" },
  { name: "Halal Brunch in Milton Keynes", href: PATHNAME },
];

const STICKY_BUTTON_SECTIONS = [
  { selector: "#halal-brunch-content", side: "right" },
  { selector: "#summary-section", side: "right" },
  { selector: "#halal-brunch-section", side: "right" },
  { selector: "#place-section", side: "right" },
  { selector: "#sweet-savoury-section", side: "right" },
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
      caption: "Halal brunch in Milton Keynes at Nour Maison",
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
        name: "Book halal brunch at Nour Maison",
      },
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "CafeOrCoffeeShop",
    "@id": `${SITE_URL}/#restaurant`,
    name: "Nour Maison Café & Brasserie",
    alternateName: "Nour Maison",
    url: SITE_URL,
    telephone: "+44 1908 772177",
    image: OG_IMAGE,
    logo: `${SITE_URL}/images/logo.png`,
    description:
      "Nour Maison is a halal-friendly café and brasserie in Milton Keynes, serving brunch, breakfast, coffee, desserts, afternoon tea and all-day dining.",
    servesCuisine: [
      "Halal",
      "Cafe",
      "Coffee",
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
        name: "Halal Brunch in Milton Keynes",
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

export default function HalalBrunchMiltonKeynesPage() {
  return (
    <div>
      <StickyBookNowButton
        href="/booking"
        label="Book Now"
        desktopTop="68%"
        sections={STICKY_BUTTON_SECTIONS}
      />

      <SeoSchemas schemas={SCHEMAS} pageId="halal-brunch-mk" />

      <PagesBanner
        bottomBg={false}
        slogan={
          <div className="text-base sm:text-lg md:text-2xl xl:text-3xl px-2">
            Halal brunch with café brasserie warmth.
            <br />
            Sweet plates, savoury favourites and artisan drinks in Milton
            Keynes.
          </div>
        }
        title={"Halal Brunch in Milton Keynes"}
        scrollTo={"halal-brunch-content"}
      />

      <main
        id="halal-brunch-content"
        className="halal-mk-content w-full relative py-20 sm:py-28 md:py-36 z-10 overflow-hidden"
        aria-labelledby="halal-brunch-heading"
        data-book-button-side="right"
      >
        <header className="w-full max-w-[90%] sm:max-w-2xl md:max-w-3xl lg:max-w-4xl xl:max-w-5xl mx-auto px-3 sm:px-4 md:px-6 text-center mb-8 sm:mb-10 md:mb-14 mt-10 relative z-10">
          <p className="font-pacifico text-goldenOrange text-xl sm:text-2xl md:text-3xl lg:text-4xl mb-2 sm:mb-3">
            Halal Brunch at Nour Maison
          </p>

          <h1
            id="halal-brunch-heading"
            className="font-seasons text-softMintGreen text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl mb-3 sm:mb-4 md:mb-5 leading-tight tracking-wide"
          >
            Halal Brunch{" "}
            <span className="text-goldenOrange">in Milton Keynes</span>{" "}
            <span className="block mt-1 sm:mt-2">
              Served with Nour Maison Style
            </span>
          </h1>

          <p className="font-playfair text-logoGold text-base sm:text-lg md:text-xl leading-relaxed md:leading-loose max-w-5xl mx-auto">
            For a halal brunch in Milton Keynes that feels relaxed but still
            special,{" "}
            <span className="text-goldenOrange font-semibold">Nour Maison</span>{" "}
            brings together artisan drinks, colourful plates, sweet dishes and
            savoury brunch favourites in a calm café brasserie setting.
            <br />
            <span className="text-logoGold font-medium">
              Open daily from 9am for brunch plans, coffee catch-ups and easy
              daytime dining.
            </span>
          </p>
        </header>

        <div id="summary-section" data-book-button-side="left">
          <BreadcrumbTrail items={BREADCRUMBS} />
          <QuickSummary
            items={SUMMARY_ITEMS}
            ctaText="Book Halal Brunch"
            ctaLink="/booking"
            variant="mint"
          />
        </div>

        <div id="halal-brunch-section" data-book-button-side="right">
          <ImageTextBlock
            eyebrow="Halal Brunch"
            heading="A Brunch Table Everyone Can Enjoy"
            text={
              <>
                <p>
                  A good brunch plan should be easy for the whole table. Nour
                  Maison gives guests halal-friendly choices without making the
                  experience feel limited, plain or predictable.
                </p>
                <p className="mt-3">
                  Expect a menu that moves between sweet and savoury plates,
                  artisan drinks and brunch dishes that feel generous, colourful
                  and properly suited to a relaxed morning or afternoon.
                </p>
              </>
            }
            imageSrc="/images/seo/halal-brunch-milton-keynes/halal-brunch-table-nour-maison.webp"
            imageAlt="Halal brunch table at Nour Maison in Milton Keynes"
            imagePosition="center 75%"
          />
        </div>

        <div id="place-section" data-book-button-side="left">
          <ImageTextBlock
            eyebrow="The Place"
            heading="A Calm Café Brasserie on Grafton Gate"
            text={
              <>
                <p>
                  The space at Nour Maison is part of the reason people stay a
                  little longer. Soft green seating, warm gold details, floral
                  touches and a relaxed table layout give the café a polished
                  but welcoming feel.
                </p>
                <p className="mt-3">
                  It works for the quick coffee visit, but it is even better
                  when you want a slower halal brunch in Milton Keynes with good
                  food, comfortable surroundings and a little sense of occasion.
                </p>
              </>
            }
            imageSrc="/images/seo/halal-brunch-milton-keynes/nour-maison-cafe-place.webp"
            imageAlt="Nour Maison cafe brasserie interior in Milton Keynes"
            imagePosition="center 85%"
            reverse
          />
        </div>

        <div id="sweet-savoury-section" data-book-button-side="right">
          <ImageTextBlock
            eyebrow="Sweet & Savoury"
            heading="Brunch That Gives You Options"
            text={
              <>
                <p>
                  Some visits call for a bright sweet plate with fruit, pastry
                  and a good drink. Other days need something warmer, richer and
                  more savoury. Nour Maison keeps both directions open.
                </p>
                <p className="mt-3">
                  That balance makes it a strong brunch choice for mixed groups:
                  one table, different cravings, no awkward compromise. Finally,
                  democracy with better coffee.
                </p>
              </>
            }
            imageSrc="/images/seo/halal-brunch-milton-keynes/sweet-savoury-halal-brunch.webp"
            imageAlt="Sweet and savoury halal brunch dishes at Nour Maison Milton Keynes"
          />
        </div>

        <div id="highlights-section" data-book-button-side="left">
          <HighlightsGrid items={HIGHLIGHTS} />
        </div>

        <div id="internal-links-section" data-book-button-side="right">
          <InternalLinksGrid
            eyebrow="Explore"
            heading="Plan Your Halal Brunch Visit"
            links={INTERNAL_LINKS}
          />
        </div>

        <div id="related-blogs-section" data-book-button-side="right">
          <RelatedSeoBlogs
            pageNumber={6}
            pageSlug="halal-brunch-milton-keynes"
            title="Related Halal Brunch Guides"
            description="Explore Nour Maison articles about halal brunch, breakfast, coffee, café dining and places to eat in Milton Keynes."
            limit={6}
          />
        </div>

        <div id="faq-section" data-book-button-side="left">
          <FAQSection
            eyebrow="Good to Know"
            heading="Halal Brunch FAQs"
            items={FAQ_ITEMS}
          />
        </div>

        <div id="cta-section" data-book-button-side="left">
          <CTABlock
            eyebrow="Ready for Brunch?"
            heading="Book Halal Brunch at Nour Maison"
            variant="mint"
            description={
              <>
                Join{" "}
                <span className="font-nour text-logoGold font-semibold">
                  Nour Maison
                </span>{" "}
                for halal brunch in Milton Keynes with artisan drinks, sweet
                plates, savoury favourites and a calm café brasserie atmosphere.
                Perfect for{" "}
                <span className="text-logoGold">
                  family visits, friend catch-ups and slow weekend plans
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
