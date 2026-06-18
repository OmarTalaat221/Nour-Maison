import React from "react";
import PagesBanner from "../../../components/PagesBanner/PagesBanner";
import PortfolioContent from "../../../components/pages/PortfolioPage/PortfolioContent";
import { getPageKeywords } from "../../../lib/seo/keywords";
// import Masonry from "./../components/Masonry/Masonry";




export const metadata = {
  title: "Portfolio | Nour Maison – Culinary Art & Dining Moments",
  description:
    "Explore Nour Maison’s portfolio of artisanal dishes, elegant dining moments, events, desserts, brunch, and French–Middle Eastern food experiences in Milton Keynes.",
  keywords: getPageKeywords("portfolio"),
  alternates: {
    canonical: "https://www.nourmaison.co.uk/portfolio",
  },
};
const Portfolio = () => {
  return (
    <>
      <PagesBanner
        scrollTo={"portofolio"}
        title={"Portfolio"}
        slogan={"Where Culinary Art Meets Perfection"}
      />

      <PortfolioContent />
    </>
  );
};

export default Portfolio;
