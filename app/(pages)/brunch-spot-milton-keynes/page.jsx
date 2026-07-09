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
const PATHNAME = "/brunch-spot-milton-keynes";
const PAGE_URL = `${SITE_URL}${PATHNAME}`;
const OG_IMAGE = `${SITE_URL}/images/seo/brunch-spot-milton-keynes/brunch-spot-milton-keynes-og.webp`;
const PAGE_BANNER_IMAGE =
  "/images/seo/brunch-spot-milton-keynes/brunch-spot-milton-keynes-og.webp";

const PAGE_TITLE = "Brunch Spot in Milton Keynes | Nour Maison";
const PAGE_DESCRIPTION =
  "Looking for a brunch spot in Milton Keynes? Visit Nour Maison for halal-friendly brunch, artisan coffee, sweet plates, savoury dishes and elegant café dining";

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  alternates: { canonical: PAGE_URL },
  keywords: [
    "brunch spot Milton Keynes",
    "brunch spot in Milton Keynes",
    "best brunch spot Milton Keynes",
    "brunch Milton Keynes",
    "halal brunch Milton Keynes",
    "brunch cafe Milton Keynes",
    "weekend brunch Milton Keynes",
    "breakfast brunch Milton Keynes",
    "coffee and brunch Milton Keynes",
    "brunch near me Milton Keynes",
    "sweet brunch Milton Keynes",
    "savoury brunch Milton Keynes",
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
        alt: "Brunch spot in Milton Keynes at Nour Maison with coffee sweet plates and savoury brunch dishes",
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
    value: "Weekend brunch, coffee catch-ups, sweet plates and savoury dishes",
  },
  {
    label: "Brunch Style",
    value: "Halal-friendly café brasserie brunch with elegant presentation",
  },
  {
    label: "Good For",
    value: "Friends, couples, families and relaxed daytime dining",
  },
  { label: "Location", value: "149 Grafton Gate, Milton Keynes, MK9 1AE" },
  { label: "Hours", value: "Open daily from 9am" },
  { label: "Booking", value: "Book online or call +44 1908 772177" },
];

const HIGHLIGHTS = [
  {
    icon: "sparkle",
    variant: "mint",
    title: "Brunch with Style",
    description:
      "A polished brunch setting with colourful plates, artisan drinks and café brasserie comfort.",
  },
  {
    icon: "check",
    variant: "gold",
    title: "Halal-Friendly Brunch",
    description:
      "Enjoy brunch in Milton Keynes with halal-friendly choices across sweet and savoury plates.",
  },
  {
    icon: "users",
    variant: "mint",
    title: "Perfect Daytime Spot",
    description:
      "Ideal for slow weekends, friend catch-ups, family visits and relaxed brunch plans.",
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
    description: "Reserve your brunch table at Nour Maison.",
  },
  {
    label: "Cafe in Milton Keynes",
    href: "/cafe-milton-keynes",
    variant: "mint",
    description:
      "Discover Nour Maison as an artisan café for coffee, brunch and relaxed dining.",
  },
  {
    label: "Breakfast in Milton Keynes",
    href: "/breakfast-milton-keynes",
    // variant: "gold",
    description:
      "Start earlier with breakfast plates, coffee and morning café favourites.",
  },
  {
    label: "Afternoon Tea Menu",
    href: "/afternoon-tea-menu",
    // variant: "mint",
    description:
      "Plan a refined afternoon tea experience after your next brunch visit.",
  },
  {
    label: "Kids Menu",
    href: "/kids-menu",
    variant: "cream",
    description: "View family-friendly options for younger guests.",
  },
  {
    label: "Gallery",
    href: "/gallery",
    variant: "gold",
    description: "See our brunch plates, interiors, drinks and table moments.",
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
    description:
      "Read brunch, café and Milton Keynes dining guides from Nour Maison.",
  },
];

const FAQ_ITEMS = [
  {
    question: "Where can I find a brunch spot in Milton Keynes?",
    answer:
      "Nour Maison is a brunch spot in Milton Keynes located at 149 Grafton Gate, MK9 1AE, serving halal-friendly brunch, coffee, sweet plates and savoury dishes.",
  },
  {
    question: "Does Nour Maison serve halal brunch?",
    answer:
      "Yes. Nour Maison offers halal-friendly brunch choices in a relaxed café brasserie setting.",
  },
  {
    question: "What time does brunch start?",
    answer:
      "Nour Maison opens daily from 9am, making it suitable for breakfast, brunch, coffee and daytime dining.",
  },
  {
    question: "Can I book brunch online?",
    answer:
      "Yes. You can book a table online through the Nour Maison booking page or call +44 1908 772177.",
  },
  {
    question: "Is Nour Maison good for weekend brunch?",
    answer:
      "Yes. Nour Maison is a strong choice for weekend brunch in Milton Keynes, especially for friends, families and relaxed daytime visits.",
  },
  {
    question: "Does Nour Maison serve both sweet and savoury brunch?",
    answer:
      "Yes. The brunch experience includes sweet café-style plates, pastries, fruit-led dishes and savoury options.",
  },
  {
    question: "Is Nour Maison suitable for families?",
    answer:
      "Yes. Nour Maison is family-friendly, with a welcoming atmosphere and a kids menu available.",
  },
];

const BREADCRUMBS = [
  { name: "Home", href: "/" },
  { name: "Brunch Spot in Milton Keynes", href: PATHNAME },
];

const STICKY_BUTTON_SECTIONS = [
  { selector: "#brunch-spot-content", side: "right" },
  { selector: "#summary-section", side: "right" },
  { selector: "#brunch-experience-section", side: "right" },
  { selector: "#sweet-savoury-brunch-section", side: "right" },
  { selector: "#weekend-brunch-section", side: "right" },
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
      caption: "Brunch spot in Milton Keynes at Nour Maison",
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
        name: "Book brunch at Nour Maison",
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
      "Nour Maison is a halal-friendly café and brasserie in Milton Keynes, serving brunch, coffee, breakfast, sweet plates, desserts, afternoon tea and relaxed all-day dining.",
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
        name: "Brunch Spot in Milton Keynes",
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

export default function BrunchSpotMiltonKeynesPage() {
  return (
    <div>
      <StickyBookNowButton
        href="/booking"
        label="Book Now"
        desktopTop="68%"
        sections={STICKY_BUTTON_SECTIONS}
      />

      <SeoSchemas schemas={SCHEMAS} pageId="brunch-spot-mk" />

      <PagesBanner
        bottomBg={false}
        slogan={
          <div className="text-base sm:text-lg md:text-2xl xl:text-3xl px-2">
            Sweet plates, savoury favourites and slow café moments.
            <br />A brunch spot in Milton Keynes with Nour Maison elegance.
          </div>
        }
        title={"Brunch Spot in Milton Keynes"}
        scrollTo={"brunch-spot-content"}
      />

      <main
        id="brunch-spot-content"
        className="halal-mk-content w-full relative py-20 sm:py-28 md:py-36 z-10 overflow-hidden"
        aria-labelledby="brunch-spot-heading"
        data-book-button-side="right"
      >
        <header className="w-full max-w-[90%] sm:max-w-2xl md:max-w-3xl lg:max-w-4xl xl:max-w-5xl mx-auto px-3 sm:px-4 md:px-6 text-center mb-8 sm:mb-10 md:mb-14 mt-10 relative z-10">
          <p className="font-pacifico text-goldenOrange text-xl sm:text-2xl md:text-3xl lg:text-4xl mb-2 sm:mb-3">
            Brunch at Nour Maison
          </p>

          <h1
            id="brunch-spot-heading"
            className="font-seasons text-softMintGreen text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl mb-3 sm:mb-4 md:mb-5 leading-tight tracking-wide"
          >
            A Stylish <span className="text-goldenOrange">Brunch Spot</span>{" "}
            <span className="block mt-1 sm:mt-2">in Milton Keynes</span>
          </h1>

          <p className="font-playfair text-logoGold text-base sm:text-lg md:text-xl leading-relaxed md:leading-loose max-w-5xl mx-auto">
            Nour Maison is a{" "}
            <span className="text-goldenOrange font-semibold">
              brunch spot in Milton Keynes
            </span>{" "}
            for guests who want the day to start slowly and taste properly good.
            Expect{" "}
            <span className="text-softMintGreen font-semibold">
              halal-friendly brunch
            </span>
            , artisan drinks, sweet plates, savoury favourites and a café
            brasserie setting that feels calm, elegant and easy to enjoy.
            <br />
            <span className="text-logoGold font-medium">
              Open daily from 9am for brunch plans, coffee catch-ups and relaxed
              daytime dining.
            </span>
          </p>
        </header>

        <div id="summary-section" data-book-button-side="left">
          <BreadcrumbTrail items={BREADCRUMBS} />
          <QuickSummary
            items={SUMMARY_ITEMS}
            ctaText="Book Brunch"
            ctaLink="/booking"
            variant="mint"
          />
        </div>

        <div id="brunch-experience-section" data-book-button-side="right">
          <ImageTextBlock
            eyebrow="Brunch Experience"
            heading="The Kind of Brunch You Actually Slow Down For"
            text={
              <>
                <p>
                  A proper brunch spot should feel unhurried. Nour Maison gives
                  you the space to enjoy coffee, conversation and colourful
                  plates without making the experience feel rushed.
                </p>
                <p className="mt-3">
                  Whether you are planning a weekend table or a midweek
                  catch-up, the atmosphere is warm, polished and easy to settle
                  into.
                </p>
              </>
            }
            imageSrc="/images/seo/brunch-spot-milton-keynes/brunch-experience-nour-maison.webp"
            imageAlt="Brunch experience at Nour Maison in Milton Keynes"
            imagePosition="center 75%"
          />
        </div>

        <div id="sweet-savoury-brunch-section" data-book-button-side="left">
          <ImageTextBlock
            eyebrow="Sweet & Savoury Brunch"
            heading="From Fresh Plates to Richer Brunch Favourites"
            text={
              <>
                <p>
                  Some brunch days need something bright and fruit-led. Others
                  call for a savoury plate, a warm pastry, a richer dish or a
                  proper coffee on the side.
                </p>
                <p className="mt-3">
                  Nour Maison keeps that choice open, with a menu that moves
                  between elegant café plates and satisfying brunch favourites.
                </p>
              </>
            }
            imageSrc="/images/seo/brunch-spot-milton-keynes/sweet-savoury-brunch-nour-maison.webp"
            imageAlt="Sweet and savoury brunch dishes at Nour Maison Milton Keynes"
            reverse
          />
        </div>

        <div id="weekend-brunch-section" data-book-button-side="right">
          <ImageTextBlock
            eyebrow="Weekend Brunch"
            heading="A Local Spot for Friends, Family and Easy Plans"
            text={
              <>
                <p>
                  If you are looking for a weekend brunch in Milton Keynes, Nour
                  Maison is made for the kind of visit that can start with
                  coffee and end with everyone ordering something different.
                </p>
                <p className="mt-3">
                  It works for friends, couples, families and anyone who
                  believes brunch should look good, taste good and feel like a
                  small win for the day.
                </p>
              </>
            }
            imageSrc="/images/seo/brunch-spot-milton-keynes/weekend-brunch-milton-keynes.webp"
            imageAlt="Weekend brunch at Nour Maison in Milton Keynes"
          />
        </div>

        <div id="highlights-section" data-book-button-side="left">
          <HighlightsGrid items={HIGHLIGHTS} />
        </div>

        <div id="internal-links-section" data-book-button-side="right">
          <InternalLinksGrid
            eyebrow="Explore"
            heading="Plan Your Brunch Visit"
            links={INTERNAL_LINKS}
          />
        </div>

        <div id="related-blogs-section" data-book-button-side="right">
          <RelatedSeoBlogs
            pageNumber={5}
            pageSlug="brunch-spot-milton-keynes"
            title="Related Brunch Guides"
            description="Explore Nour Maison articles about brunch, breakfast, coffee, café dining and places to eat in Milton Keynes."
            limit={6}
          />
        </div>

        <div id="faq-section" data-book-button-side="left">
          <FAQSection
            eyebrow="Good to Know"
            heading="Brunch Spot FAQs"
            items={FAQ_ITEMS}
          />
        </div>

        <div id="cta-section" data-book-button-side="left">
          <CTABlock
            eyebrow="Brunch Plans?"
            heading="Book Your Brunch Table at Nour Maison"
            variant="mint"
            description={
              <>
                Join{" "}
                <span className="font-nour text-logoGold font-semibold">
                  Nour Maison
                </span>{" "}
                for a halal-friendly brunch spot in Milton Keynes with artisan
                drinks, sweet plates, savoury favourites and relaxed café
                brasserie hospitality. Ideal for{" "}
                <span className="text-logoGold">
                  weekend plans, family visits and friend catch-ups
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
