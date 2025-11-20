import React from "react";
import PagesBanner from "../../../components/PagesBanner/PagesBanner";
import OurServices from "../../../components/pages/Home/OurServices/OurServices";
import HappyMoments from "../../../components/pages/HappyMoments/HappyMoments";
import PaperPlaneSuccess from "../../../components/PaperPlaneSuccess/PaperPlaneSuccess";

const page = () => {
  return (
    <div>
      <PagesBanner
        title={"Our Events"}
        slogan={"Not Just Coffee – It’s a Feeling."}
        scrollTo={"services"}
        images={[
          "https://res.cloudinary.com/dbzn1y8rt/image/upload/v1746028867/inopk72hwfwrtgx2munx.webp",
          "https://res.cloudinary.com/dbzn1y8rt/image/upload/v1746028866/pgtrnkcomtslajpppxcb.webp",
          "https://res.cloudinary.com/dbzn1y8rt/image/upload/v1746028873/obkj0zmhvplrxbnj2hy0.webp",
        ]}
      />

      <div className="" id="services">
        <OurServices />
        <HappyMoments />
      </div>
    </div>
  );
};

export default page;
