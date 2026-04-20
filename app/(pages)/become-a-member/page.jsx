// page.jsx
import Form from "./Form";

export const metadata = {
  title: "Become a Member | Nour Maison – Get 10% Off Your First Visit",
  description:
    "Join the Nour Maison family today. Sign up as a member and receive an exclusive 10% welcome discount on your next dining experience. Fill in your details and enjoy special offers.",
  keywords: [
    "Nour Maison",
    "restaurant membership",
    "10% discount",
    "welcome offer",
    "dining discount",
    "Nour Maison member",
    "restaurant offer Egypt",
  ],
  authors: [{ name: "Nour Maison" }],
  creator: "Nour Maison",
  publisher: "Nour Maison",
  metadataBase: new URL("https://www.nourmaison.com"),
  alternates: {
    canonical: "/become-a-member",
  },
  openGraph: {
    title: "Become a Member | Nour Maison – Get 10% Off",
    description:
      "Sign up to the Nour Maison membership and enjoy a 10% discount on your next dining experience. Join now and be part of the family.",
    url: "https://www.nourmaison.com/become-a-member",
    siteName: "Nour Maison",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Become a Member | Nour Maison – Get 10% Off",
    description:
      "Join Nour Maison today and receive a special 10% welcome discount on your next visit.",
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

const FormPage = () => {
  return <Form />;
};

export default FormPage;
