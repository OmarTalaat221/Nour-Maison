import StorePage from "./_Store_Client";
import { getPageKeywords } from "../../../lib/seo/keywords";
const SITE_URL = "https://www.nourmaison.co.uk";
const PAGE_URL = `${SITE_URL}/store`;
const OG_IMAGE = `/images/nour-gold-logo.webp`; // <- change to your real image

// metadata
export const metadata = {
  title: "Gift Cards & Artisan Store | Nour Maison Milton Keynes",

  description:
    "Buy elegant halal restaurant gift cards or shop artisan food and luxury gift boxes at Nour Maison in Milton Keynes. Perfect for birthdays, anniversaries & corporate gifts.",
  keywords: getPageKeywords("store"),

  alternates: {
    canonical: PAGE_URL,
  },

  openGraph: {
    title: "Store & Gift Cards – Nour Maison",
    description:
      "Shop artisanal gifts or send halal dining vouchers in Milton Keynes with Nour Maison gift cards.",
    url: PAGE_URL,
    siteName: "Nour Maison",
    locale: "en_GB",
    type: "website",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Nour Maison Store & Gift Cards",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Store & Gift Cards – Nour Maison",
    description:
      "Shop artisanal gifts or send halal dining vouchers in Milton Keynes with Nour Maison gift cards.",
    images: [OG_IMAGE],
  },

  // Optional extras (safe to keep)
  robots: {
    index: true,
    follow: true,
  },
};

const Page = () => {
  return (
    <div>
      <StorePage />
    </div>
  );
};

export default Page;
