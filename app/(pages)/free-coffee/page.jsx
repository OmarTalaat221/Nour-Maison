import Form from "./Form";

export const metadata = {
  title: "Free Coffee | Nour Maison – Claim Your Complimentary Coffee",
  description:
    "Join the Nour Maison community and claim your complimentary coffee. Sign up with your details and receive a free coffee voucher straight to your inbox.",
  keywords: [
    "Nour Maison",
    "free coffee",
    "complimentary coffee",
    "coffee voucher",
    "restaurant offer",
    "Nour Maison offer",
    "free coffee Egypt",
    "dining offer",
  ],
  authors: [{ name: "Nour Maison" }],
  creator: "Nour Maison",
  publisher: "Nour Maison",
  metadataBase: new URL("https://www.nourmaison.com"),
  alternates: {
    canonical: "/free-coffee",
  },
  openGraph: {
    title: "Free Coffee | Nour Maison – Claim Your Complimentary Coffee",
    description:
      "Sign up to the Nour Maison community and enjoy a complimentary coffee on us. Enter your details and we'll send your voucher to your inbox.",
    url: "https://www.nourmaison.com/free-coffee",
    siteName: "Nour Maison",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Coffee | Nour Maison – Claim Your Complimentary Coffee",
    description:
      "Join Nour Maison today and claim your free coffee. Sign up and receive your voucher instantly.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const FreeCoffeePage = () => {
  return <Form />;
};

export default FreeCoffeePage;