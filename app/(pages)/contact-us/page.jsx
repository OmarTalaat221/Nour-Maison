import React from "react";
import PagesBanner from "../../../components/PagesBanner/PagesBanner";
import ContactContent from "../../../components/pages/ContactPage/ContactContent/Content";
import { getPageKeywords } from "../../../lib/seo/keywords";

// metadata
// app/(whatever)/contact-us/page.jsx

const OG_IMAGE =
  "https://res.cloudinary.com/dhebgz7qh/image/upload/c_fill,w_1200,h_630,q_auto,f_auto/v1767447622/f76djjyilyjfpzpjmryl_puk2vj.webp";

export const metadata = {
  metadataBase: new URL("https://www.nourmaison.co.uk"),

  title: "Contact Us | Nour Maison – Milton Keynes",
  description:
    "Get in touch with Nour Maison in Milton Keynes for inquiries, reservations, events, or feedback. We’re here to help.",

  keywords: getPageKeywords("contactUs"),
  alternates: {
    canonical: "https://www.nourmaison.co.uk/contact-us",
  },

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
    url: "https://www.nourmaison.co.uk/contact-us",
    siteName: "Nour Maison",
    locale: "en_GB",
    title: "Contact Us | Nour Maison – Milton Keynes",
    description:
      "Contact Nour Maison in Milton Keynes for reservations, inquiries, events, and feedback.",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Nour Maison Cafe in Milton Keynes",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Contact Nour Maison | Milton Keynes",
    description:
      "Reach Nour Maison for reservations, inquiries, events, and feedback.",
    images: [OG_IMAGE],
  },

  category: "Contact",
};

const Contact = () => {
  return (
    <>
      <PagesBanner
        title={"Contact US"}
        slogan={"Reach Us Anytime, Anywhere!"}
        scrollTo={"contact"}
        images={[
          "/videos/booking-home-about.webm",
        ]}
      />

      <ContactContent />
    </>
  );
};

export default Contact;
