import PagesBanner from "../../../components/PagesBanner/PagesBanner";
import OurServices from "../../../components/pages/Home/OurServices/OurServices";
import HappyMoments from "../../../components/pages/HappyMoments/HappyMoments";
const page = () => {
  return (
    <div>
      <PagesBanner
        title={"Our Events"}
        slogan={"Not Just Coffee – It’s a Feeling."}
        scrollTo={"services"}
        images={[
          "https://res.cloudinary.com/dhebgz7qh/image/upload/v1767443801/t9noktexya7m7o2dtum4_hbidy9.jpg",
          "https://res.cloudinary.com/dhebgz7qh/image/upload/v1767443801/sdw9jufkrx0onoo2vwfp_wnzcjx.jpg",
          "https://res.cloudinary.com/dhebgz7qh/image/upload/v1767443802/kgkdwtofzolvzkb6oyh5_p6m5cg.jpg",
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
