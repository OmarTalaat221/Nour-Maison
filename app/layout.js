import {
  Geist,
  Geist_Mono,
  Inter,
  Lato,
  Oswald,
  Tajawal,
  Tangerine,
  Great_Vibes,
  Pacifico,
  Playfair_Display,
  EB_Garamond,
} from "next/font/google";
import Script from "next/script";
import localFont from "next/font/local";

import "./globals.css";
import Footer from "./../components/shared/Footer/Footer";
import TopHeader from "../components/shared/TopHeader/TopHeader";
// import StickyHeader from "./../components/shared/StickyHeader/StickyHeader";
// import { Provider } from "react-redux";
// import { store } from "../redux/store";
import AOSAnimation from "./../components/AOS";
import PageTransition from "../components/PageTransition";
import "rsuite/dist/rsuite.min.css";
import StickyHeaderComponent from "../components/shared/StickyHeader/StickyHeaderComponent";
import { menu_1 } from "./(pages)/data/menuData";
import { NotFoundProvider } from "./context/NoutFoundContext";
import Head from "next/head";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const lato = Lato({
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
  variable: "--font-lato",
});

const oswald = Oswald({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700"],
  variable: "--font-oswald",
});

const tajawal = Tajawal({
  subsets: ["arabic"],
  weight: ["200", "300", "400", "500", "700", "800", "900"],
  variable: "--font-tajawal",
});

const tangerine = Tangerine({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-tangerine",
});

const greatVibes = Great_Vibes({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-greatvibes",
});

const pacifico = Pacifico({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-pacifico",
});

const ebGaramond = EB_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-eb-garamond",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700", "900"], // Add the weights you need
  style: ["normal", "italic"], // Optional
  variable: "--font-playfair", // Optional: for CSS variable usage
  display: "swap",
});

export const metadata = {
  // title: "NOUR MAISON - Your Stylish Destination",
  title: "NOUR MAISON | Elegant Restaurant & Café - Fine Dining",
  // description:
  // "Discover the latest fashion trends and stylish collections at NOUR MAISON. Shop now for the best deals!",
  // `Discover Nour Maison: Where French sophistication meets Middle Eastern flavors. Join us for artisan brunch, Mediterranean specialties, and a warm, family-friendly atmosphere in Milton Keynes.`,
  description:
    "Experience exceptional dining at NOUR MAISON - a stylish restaurant and café offering international flavors, cozy ambiance, and unforgettable moments. Book your table today!",
  alternates: {
    canonical: "https://www.nourmaison.co.uk",
  },
  viewport: "width=device-width, initial-scale=1",
  icons: {
    icon: "/favicon.ico", // ده الأيقونة العادية
    apple: "/apple-touch-icon.png", // دي أيقونة أبل المطلوبة
  },

  authors: [
    {
      name: "Camp Coding",
      url: "https://www.linkedin.com/company/campcoding/?originalSubdomain=eg",
    },
  ],
  robots: "index, follow",
  openGraph: {
    title: "NOUR MAISON | Elegant Restaurant & Café - Fine Dining",
    description:
      "Experience exceptional dining at NOUR MAISON - a stylish restaurant and café offering international flavors, cozy ambiance, and unforgettable moments. Book your table today!",

    url: "https://www.nourmaison.co.uk",
    siteName: "Nour Maison",
    images: [
      {
        url: "https://www.nourmaison.co.uk/logo.png", // تأكد من الرابط ده
        width: 1200,
        height: 630,
        alt: "NOUR MAISON logo",
      },
    ],
    locale: "en_EG", // Default locale (main site language: English, Egypt)
    type: "website",
  },
  twitter: {
    card: "summary_large_image", // Large preview image
    site: "@NourMaisonCafe", // Replace with your official Twitter handle
    creator: "@CampCoding", // Developer/agency handle (optional)
    title: "NOUR MAISON | Elegant Restaurant & Café - Fine Dining",
    description:
      "Experience exceptional dining at NOUR MAISON - a stylish restaurant and café offering international flavors, cozy ambiance, and unforgettable moments. Book your table today!",

    images: [
      "https://res.cloudinary.com/dhebgz7qh/image/upload/v1767452496/y3replc9wmlnvwb7kjvo_hyo3u3.png",
    ],
  },
  other: {
    "application/ld+json": JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "NOUR MAISON",
      url: "https://www.nourmaison.co.uk",
      logo: "https://www.nourmaison.co.uk/logo.png",
    }),
  },
};

function generateStructuredMenu(menuItems) {
  return {
    "@type": "MenuSection",
    name: "Featured Items",
    hasMenuItem: menuItems
      .map((e) => e.items)
      .flat()
      .map((item, index) => ({
        "@type": "MenuItem",
        name: item.name,
        image: item?.image ?? "https://www.nourmaison.co.uk/logo.png",
        description:
          item.description ?? "Best " + item.name + " in Milton Keynes",

        itemReviewed: {
          "@type": "Product",
          name: item.name,
          image: item?.image ?? "https://www.nourmaison.co.uk/logo.png",
          description:
            item.description ?? "Best " + item.name + " in Milton Keynes",
          offers: {
            "@type": "Offer",
            price: item.price.toFixed(2),
            priceCurrency: "GBP",
            availability: "InStock",
            priceValidUntil: "2025-12-31",
          },
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: Math.random() * (5 - 4) + 4,
            reviewCount: Math.floor(Math.random() * 1000) + 1,
          },
        },
      })),
  };
}

const structuredData = {
  __html: JSON.stringify({
    "@context": "https://schema.org",
    "@type": "Restaurant",
    name: "Nour Maison",
    url: "https://www.nourmaison.com",
    logo: "https://www.nourmaison.co.uk/logo.png",
    image: [
      "https://res.cloudinary.com/dhebgz7qh/image/upload/v1767452496/y3replc9wmlnvwb7kjvo_hyo3u3.png",
    ],
    address: {
      "@type": "PostalAddress",
      streetAddress: "149 Grafton Gate",
      addressLocality: "Milton Keynes",
      addressRegion: "Buckinghamshire",
      postalCode: "MK9 1AE",
      addressCountry: "GB",
    },
    servesCuisine: ["French", "Brunch", "Middle Eastern"],
    menu: "https://www.nourmaison.com/menu",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "132",
    },
    priceRange: "$$",
    telephone: "+44-1908-772177",
    openingHours: "Mo-Su 09:00-22:00",
    sameAs: [
      "https://www.instagram.com/nourmaisonuk",
      "https://www.facebook.com/nourmaisonuk",
    ],
    hasMenuSection: [generateStructuredMenu(menu_1)],
  }),
};




const theSeasons = localFont({
  variable: "--font-the-seasons",
  src: [
    { path: "../public/fonts/the_seasons/Fontspring-DEMO-theseasons-lt.otf", weight: "300", style: "normal" },
    { path: "../public/fonts/the_seasons/Fontspring-DEMO-theseasons-ltit.otf", weight: "300", style: "italic" },

    { path: "../public/fonts/the_seasons/Fontspring-DEMO-theseasons-reg.otf", weight: "400", style: "normal" },
    { path: "../public/fonts/the_seasons/Fontspring-DEMO-theseasons-it.otf", weight: "400", style: "italic" },

    { path: "../public/fonts/the_seasons/Fontspring-DEMO-theseasons-bd.otf", weight: "700", style: "normal" },
    { path: "../public/fonts/the_seasons/Fontspring-DEMO-theseasons-bdit.otf", weight: "700", style: "italic" },
  ],
  display: "swap",
});





export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* GTM & Ahrefs Scripts */}
        <script
          src="https://analytics.ahrefs.com/analytics.js"
          data-key="FUJMrE2qx69y9MrZZkD6AA"
          async
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-P48D3KC3');`,
          }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={structuredData}
        />
      </head>

      <body
        className={` ${geistSans.className} ${greatVibes.variable} ${inter.variable} ${lato.variable} ${oswald.variable} ${tajawal.variable} ${tangerine.variable} ${pacifico.variable} ${ebGaramond.variable}  ${theSeasons.variable} `}
      >
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-P48D3KC3"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-GDNDWEWDFW"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-GDNDWEWDFW');
        `}
        </Script>
        {/* End Google Analytics */}
        <NotFoundProvider>
          <TopHeader />
          <StickyHeaderComponent />
          <PageTransition>{children}</PageTransition>
          <Footer />
          <AOSAnimation />
        </NotFoundProvider>
      </body>
    </html>
  );
}
