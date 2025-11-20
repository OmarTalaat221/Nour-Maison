import React from "react";
import Marquee from "react-fast-marquee";
import Instagram_feed_card from "./instagram_feed_card";
import SectionTitle from '../../../SectionTitle/SectionTitle';
import InstagramFeedsClient from "./instagramFeeds(client)";

const InstagramFeeds = () => {
  const feeds = [
    {
      mediaUrl:
        "https://res.cloudinary.com/dbzn1y8rt/image/upload/f_auto,q_auto/f_auto,q_auto/v1739288995/iqhclykglpbdcggm4hcn.jpg",
      link: "https://www.instagram.com/p/DCpc0k1sL4A/?img_index=2",
      text: " A huge thank you to everyone who joined us for the VIP grand opening of Nour Maison!",
    },
    {
      mediaUrl:
        "https://res.cloudinary.com/dbzn1y8rt/image/upload/f_auto,q_auto/f_auto,q_auto/v1739289017/omzzqoihwdbgjfqc0lhm.jpg",
      link: "https://www.instagram.com/p/DCpc0k1sL4A/?img_index=1",
      text: " A huge thank you to everyone who joined us for the VIP grand opening of Nour Maison!",
    },
    {
      mediaUrl:
        "https://res.cloudinary.com/dbzn1y8rt/image/upload/f_auto,q_auto/f_auto,q_auto/v1739290288/h7kizulgt2eapp7w027d.jpg",
      link: "https://www.instagram.com/p/DFw6SjPsu1u/",
      text: "At Nour Maison, every dish tells a story of passion and precision. 🌿 From the finest ingredients to artful plating,",
    },
    {
      mediaUrl:
        "https://res.cloudinary.com/dbzn1y8rt/image/upload/f_auto,q_auto/f_auto,q_auto/v1739290409/s6juqgcui3lzu8kdjrmt.jpg",
      link: "https://www.instagram.com/p/DF43J7dMg6w/",
      text: `
Nour Maison ✨️
“Where East Meets West Under One `,
    },
    {
      mediaUrl:
        "https://res.cloudinary.com/dbzn1y8rt/image/upload/f_auto,q_auto/f_auto,q_auto/v1738574913/q5ccc9oqexswwudxiwcm.webp",
      link: "https://www.instagram.com/p/DFe3SPVMY_b/",
      text: `Celebrate Love the Nour Maison Way!
`,
    },
    {
      mediaUrl:
        "https://res.cloudinary.com/dbzn1y8rt/image/upload/f_auto,q_auto/f_auto,q_auto/v1739290642/u4otupy2jgvif8buuly3.webp",
      link: "https://www.instagram.com/p/DFpJojGMRu6/",
      text: `Milton Keynes get ready! 🚨 The city’s FIRST EVER ☕️ Coffee & 🍵 Matcha Party is finally here—and you do NOT want to miss this!`,
    },
  ];

  return (
    <div data-aos={"zoom-in"}>
      
        <SectionTitle>

          Nour Maison: Latest Instagram Feeds
        </SectionTitle>
      <div className="flex justify-center items-center mt-20">
        <Marquee
          className="py-5 gap-10"
          direction="left"
          style={{ width: "100%", overflow: "visible" }}
          speed={70}
          pauseOnHover={true}
          loop={0}
          // play={false}
        >
         <InstagramFeedsClient  feeds={feeds} />
        </Marquee>
      </div>
    </div>
  );
};

export default InstagramFeeds;
