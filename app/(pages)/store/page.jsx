import StorePage from "./_Store_Client";

const SITE_URL = "https://www.nourmaison.co.uk";
const PAGE_URL = `${SITE_URL}/store`;
const OG_IMAGE = `${SITE_URL}/og/store.jpg`; // <- change to your real image

// metadata
export const metadata = {
  title: "Store & Gift Cards – Nour Maison | Artisan Gifts & Dining Vouchers",

  description:
    "Explore our store and gift card options at Nour Maison. Shop artisanal products or gift a fine dining experience in Milton Keynes with our elegant halal vouchers.",

  keywords: [
    // General
    "Nour Maison store",
    "Nour Maison gift cards",
    "store and gift cards",
    "restaurant gift cards UK",
    "halal dining gifts",
    "gift ideas Milton Keynes",

    // Gift cards
    "buy gift cards Milton Keynes",
    "halal restaurant gift cards",
    "French Middle Eastern restaurant gift card",
    "brunch gift vouchers UK",
    "birthday restaurant gift card",
    "fine dining gift card",
    "halal dinner gift",
    "corporate dining gift cards",
    "restaurant e-gift card",
    "gift card for food lovers",
    "dining experience gift voucher UK",
    "anniversary restaurant gift",
    "restaurant gift voucher Milton Keynes",
    "halal restaurant voucher UK",

    // Store products
    "artisan food store UK",
    "Nour Maison products",
    "branded restaurant merchandise",
    "restaurant souvenirs",
    "Middle Eastern spice blends",
    "French café products",
    "luxury food boxes UK",
    "gourmet items Milton Keynes",
    "halal pantry products",
    "brunch boxes UK",
    "restaurant food gifts UK",

    // Local & Intent-Based
    "where to buy gift cards Milton Keynes",
    "halal gift ideas in UK",
    "Milton Keynes gift shop",
    "shop local halal gifts",
    "halal food gifts near me",
    "restaurant gift ideas UK",
    "elegant restaurant gifts",
    "gift cards and artisan goods",
    "online store for halal products",
    "Milton Keynes artisan store",
    "gift a halal brunch experience",
    "shop halal gifts online UK",
  ],

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
