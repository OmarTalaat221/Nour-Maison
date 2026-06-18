import React from "react";
import PagesBanner from "../../../components/PagesBanner/PagesBanner";
import AboutContent from "../../../components/pages/AboutPage/AboutContent/AboutContent";
// import FeaturesSections from "../../../components/pages/Home/FeaturesSections/FeaturesSections";
import { getPageKeywords } from "../../../lib/seo/keywords";

const OG_IMAGE =
  "https://res.cloudinary.com/dhebgz7qh/image/upload/v1767451829/vlcxgm3mwg0nm5bfxqtp_uec67t.webp";

export const metadata = {
  title: "About Us | Nour Maison – Halal Dining in Milton Keynes​",
  description:
    "Learn about Nour Maison—a halal French-Middle Eastern café by Chef Mo G in Milton Keynes, blending family tradition with bold Mediterranean flavors.​",
  keywords: getPageKeywords("aboutUs"),
  alternates: {
    canonical: "https://www.nourmaison.co.uk/about-us",
  },
  category: "About",
  openGraph: {
    type: "website",
    url: "https://www.nourmaison.co.uk/about-us",
    siteName: "Nour Maison",
    locale: "en_GB",
    title: "About Us | Nour Maison – Halal Dining in Milton Keynes",
    description:
      "Learn about Nour Maison (NOUR MAISON LTD) — a halal French-Middle Eastern café by Chef Mo G in Milton Keynes, blending family tradition with bold Mediterranean flavors.",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Nour Maison Cafe in Milton Keynes",
      },
    ],
  },
};

const AboutUsPage = () => {
  return (
    <div className="">
      <PagesBanner
        scrollTo={"about"}
        images={["/videos/nour-opening-1.webm"]}
      />
      <AboutContent />
      {/* <FeaturesSections /> */}
    </div>
  );
};

export default AboutUsPage;
