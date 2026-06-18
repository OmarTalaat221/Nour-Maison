import {
  Geist,
  Inter,
  Lato,
  Oswald,
  Tajawal,
  Tangerine,
  Great_Vibes,
  Pacifico,
  EB_Garamond,
  Yesteryear,
  Caveat,
} from "next/font/google";
import localFont from "next/font/local";

import "./globals.css";
import TopHeader from "../components/shared/TopHeader/TopHeader";
import AOSAnimation from "./../components/AOS";
import PageTransition from "../components/PageTransition";
import StickyHeaderComponent from "../components/shared/StickyHeader/StickyHeaderComponent";
import { NotFoundProvider } from "./context/NoutFoundContext";
import { HeaderProvider } from "./context/HeaderContext";
import { LoadingProvider } from "./context/LoadingContext";
import LazyAnalytics from "../components/LazyAnalytics/LazyAnalytics";
import LazyFooter from "../components/LazyFooter/LazyFooter";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
  preload: false,
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  preload: false,
});

const lato = Lato({
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"],
  variable: "--font-lato",
  display: "swap",
  preload: false,
});

const oswald = Oswald({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-oswald",
  display: "swap",
  preload: false,
});

const tajawal = Tajawal({
  subsets: ["arabic"],
  weight: ["300", "400", "500", "700", "800"],
  variable: "--font-tajawal",
  display: "swap",
  preload: false,
});

const tangerine = Tangerine({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-tangerine",
  display: "swap",
  preload: false,
});

const greatVibes = Great_Vibes({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-greatvibes",
  display: "swap",
  preload: false,
});

const pacifico = Pacifico({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-pacifico",
  display: "swap",
  preload: false,
});

const caveat = Caveat({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-caveat",
  display: "swap",
  preload: false,
});

const ebGaramond = EB_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-eb-garamond",
  display: "swap",
  preload: false,
});

const yesteryear = Yesteryear({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-yesteryear",
  display: "swap",
});

const theSeasons = localFont({
  variable: "--font-the-seasons",
  src: [
    {
      path: "../public/fonts/the_seasons/Fontspring-DEMO-theseasons-lt.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../public/fonts/the_seasons/Fontspring-DEMO-theseasons-ltit.otf",
      weight: "300",
      style: "italic",
    },
    {
      path: "../public/fonts/the_seasons/Fontspring-DEMO-theseasons-reg.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/the_seasons/Fontspring-DEMO-theseasons-it.otf",
      weight: "400",
      style: "italic",
    },
    {
      path: "../public/fonts/the_seasons/Fontspring-DEMO-theseasons-bd.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../public/fonts/the_seasons/Fontspring-DEMO-theseasons-bdit.otf",
      weight: "700",
      style: "italic",
    },
  ],
  display: "swap",
});

export const metadata = {
  title: "NOUR MAISON | Elegant Restaurant & Café - Fine Dining",
  description:
    "Experience exceptional dining at NOUR MAISON - a stylish restaurant and café offering international flavors, cozy ambiance, and unforgettable moments. Book your table today!",
  alternates: {
    canonical: "https://www.nourmaison.co.uk",
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
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
      "Experience exceptional dining at NOUR MAISON - a stylish restaurant and café offering international flavors, cozy ambiance, and unforgettable moments. Book your table today!",
    url: "https://www.nourmaison.co.uk",
    siteName: "Nour Maison",
    images: [
      {
        url: "https://www.nourmaison.co.uk/logo.png",
        width: 1200,
        height: 630,
        alt: "NOUR MAISON logo",
      },
    ],
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@NourMaisonCafe",
    creator: "@CampCoding",
    title: "NOUR MAISON | Elegant Restaurant & Café - Fine Dining",
    description:
      "Experience exceptional dining at NOUR MAISON - a stylish restaurant and café offering international flavors, cozy ambiance, and unforgettable moments. Book your table today!",
    images: [
      "https://res.cloudinary.com/dhebgz7qh/image/upload/v1767452496/y3replc9wmlnvwb7kjvo_hyo3u3.png",
    ],
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  name: "Nour Maison",
  url: "https://www.nourmaison.co.uk",
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
  menu: "https://www.nourmaison.co.uk/menu",
  priceRange: "$$",
  telephone: "+44-1908-772177",
  openingHours: "Mo-Su 09:00-22:00",
  sameAs: [
    "https://www.instagram.com/nourmaisonuk",
    "https://www.facebook.com/nourmaisonuk",
  ],
  acceptsReservations: true,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="preconnect"
          href="https://res.cloudinary.com"
          crossOrigin="anonymous"
        />

        <link rel="dns-prefetch" href="https://res.cloudinary.com" />

        <link
          rel="preload"
          as="image"
          href="/images/mobile-banner-poster.webp"
          fetchPriority="high"
          media="(max-width: 768px)"
        />

        <link
          rel="preload"
          as="image"
          href="https://res.cloudinary.com/dhebgz7qh/image/upload/q_auto,f_auto,w_1920/v1767443794/jnd1i37zypsinyyigm1o_wocejk.webp"
          fetchPriority="high"
          media="(min-width: 769px)"
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
      </head>

      <body
        className={`${geistSans.variable} ${inter.variable} ${lato.variable} ${oswald.variable} ${tajawal.variable} ${tangerine.variable} ${greatVibes.variable} ${pacifico.variable} ${ebGaramond.variable} ${theSeasons.variable} ${yesteryear.variable} ${caveat.variable}`}
      >
        <NotFoundProvider>
          <LoadingProvider>
            <HeaderProvider>
              <TopHeader />
              <StickyHeaderComponent />
              <PageTransition>{children}</PageTransition>
            </HeaderProvider>
          </LoadingProvider>

          <LazyFooter />
          <AOSAnimation />
          <LazyAnalytics />
        </NotFoundProvider>
      </body>
    </html>
  );
}
