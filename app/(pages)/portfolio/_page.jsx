import React from "react";
import PagesBanner from "../../../components/PagesBanner/PagesBanner";
import PortfolioContent from "../../../components/pages/PortfolioPage/PortfolioContent";

// import Masonry from "./../components/Masonry/Masonry";

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
