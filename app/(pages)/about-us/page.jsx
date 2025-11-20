import React from "react";
import PagesBanner from "../../../components/PagesBanner/PagesBanner";
import AboutContent from "../../../components/pages/AboutPage/AboutContent/AboutContent";
import FeaturesSections from "../../../components/pages/Home/FeaturesSections/FeaturesSections";

export const metadata = {
  title: "About Us | Nour Maison – Halal Dining in Milton Keynes​",
  description:
    "Learn about Nour Maison—a halal French-Middle Eastern café by Chef Mo G in Milton Keynes, blending family tradition with bold Mediterranean flavors.​",
  keywords: [
    "Nour Maison restaurant",
    "halal French food Milton Keynes",
    "Middle Eastern café UK",
    "French Middle Eastern fusion cuisine",
    "Chef Mo G restaurant",
    "Chef Mo G Nour Maison",
    "Chef-owned restaurants UK",
    "family-owned halal restaurant UK",
    "family brasserie Milton Keynes",
    "halal Mediterranean dining",
    "halal dining experience Milton Keynes",
    "halal artisan food UK",
    "halal gourmet café",
    "Milton Keynes café with story",
    "restaurant founded by chef",
    "halal food with heritage",
    "halal food with history",
    "Nour Maison story",
    "origin of Nour Maison",
    "our story Nour Maison",
    "halal fine dining UK",
    "halal brasserie",
    "Middle Eastern flavors UK",
    "French café with halal menu",
    "halal brunch restaurant",
    "about Chef Mo G",
    "culinary fusion story UK",
    "Chef-inspired halal restaurant",
    "family roots halal food",
    "brasserie with cultural fusion",
    "about Nour Maison",
    "halal food innovation",
    "Chef Mo G biography",
    "meet the chef Milton Keynes",
    "Nour Maison culinary roots",
    "halal food crafted with love",
    "Chef Mo G Middle Eastern cuisine",
    "halal hospitality",
    "Nour Maison halal vision",
    "modern halal brasserie",
    "French and Middle Eastern café",
    "chef-driven halal menu",
    "halal comfort food Milton Keynes",
    "restaurant with family values",
    "halal food culture UK",
    "halal restaurant journey UK",
    "Milton Keynes food culture",
    "halal food storytelling",
    "artisanal halal food UK",
    "halal home-style cooking",
    "brasserie heritage UK",
    "halal café with tradition",
    "fusion cuisine backstory UK",
  ],
  alternates: {
    canonical: "https://www.nourmaison.co.uk/about-us",
  },
};

const AboutUsPage = () => {
  return (
    <div className="">
      <PagesBanner scrollTo={"about"} />
      <AboutContent />
      {/* <FeaturesSections /> */}
    </div>
  );
};

export default AboutUsPage;
