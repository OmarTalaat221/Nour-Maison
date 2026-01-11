"use client";
import React, { useRef, useState } from "react";
import "./style.css";
import "swiper/css";
import "swiper/css/effect-creative";
import { FaPlay } from "react-icons/fa";
import AboutVideo from "./../AboutVideo/AboutVideo";
import AboutUsSwiper from "./../AboutUsSwiper";
import { BiHealth, BiSolidDish } from "react-icons/bi";
import { PiChefHatLight } from "react-icons/pi";
import { LuLeafyGreen } from "react-icons/lu";
import { motion, useScroll, useTransform} from "framer-motion";
import { useMediaQuery } from "../../../../Hooks/GeneralHooks/useMediaQueries";

const data = [
  {
    icon: <BiSolidDish className="relative z-10" />,
    title: "Fresh Products",
    description:
      "Only the freshest, highest-quality ingredients used daily for full flavor.",
  },
  {
    icon: <PiChefHatLight className="relative z-10" />,
    title: "Skilled Chefs",
    description:
      "Experienced chefs craft every dish with expertise and passion.",
  },
  {
    icon: <LuLeafyGreen className="relative z-10" />,
    title: "Recipe Innovation",
    description: "Creative, one-of-a-kind recipes that keep dining exciting.",
  },
  {
    icon: <BiHealth className="relative z-10" />,
    title: "Healthy Food",
    description:
      "Nutritious meals made with wholesome ingredients for balanced living.",
  },
];



const AboutContent = ({}) => {
  // const swiperRef = useRef(null);
  // const [activeIndex, setActiveIndex] = useState(0);

  // const handleSlideChange = (e) => {
  //   setActiveIndex(e.activeIndex);
  // };

  const images = [
    "https://res.cloudinary.com/dhebgz7qh/image/upload/v1767452496/465984384_1590238098232979_2569484348972359367_n_lndhof_aewybh.jpg",
    "https://res.cloudinary.com/dhebgz7qh/image/upload/v1767452495/466253647_534065926272992_1731520913535440885_n_lccww5_g53xx5.jpg",
    "hhttps://res.cloudinary.com/dhebgz7qh/image/upload/v1767452494/download_tflo0m_xsvqce.jpg",
    "https://res.cloudinary.com/dhebgz7qh/image/upload/v1767452497/download_b1l96d_hdflbq.jpg",
    "https://res.cloudinary.com/dhebgz7qh/image/upload/v1767452496/download_cmgnkv_llygqn.jpg",
    "https://res.cloudinary.com/dhebgz7qh/image/upload/v1767452494/download_pvviax_g29yau.jpg",
  ];

  const images2 = [
    "https://res.cloudinary.com/dhebgz7qh/image/upload/v1767452497/txw1mwe5rnw8evxzgvye_wutn8r.webp ",
    "https://res.cloudinary.com/dhebgz7qh/image/upload/v1767452496/ja2xpjfj93egefk7ggvt_uxsqjo.webp",
    "https://res.cloudinary.com/dhebgz7qh/image/upload/v1767452497/kmxpexva5pbfocltc48o_dsb1il.webp",
    "https://res.cloudinary.com/dhebgz7qh/image/upload/v1767452496/hgq4dkeki4dw5qwzudqp_coo6nb.webp",
  ];

  const [videoModal, setVideoModal] = useState(false);

  return (
    <div className="w-screen overflow-hidden relative flex flex-col p-3" id="about">
      {/* <div data-aos="fade-right">
        <BranchesImage
          variant={"top-left"}
          className={" w-[500px] opacity-60  left-0 top-6 "}
        />
      </div>

      <div data-aos="fade-left">
        <BranchesImage
          variant={"top-right"}
          className={" w-[] opacity-20 top-6 "}
        />
      </div> */}

      <div className="about_content_page container  !my-10  relative z-20">
        <div className="   md:h-[calc(100vh-120px)]  md:!sticky top-[100px] overflow-hidden">
          <AboutUsSwiper images={images} />
        </div>

        <div className="flex flex-col gap-[15px] ">
          {/* <AnimTitle className={"flex !items-end gap-5 justify-start"}>
            
          </AnimTitle> */}
          <div className="flex items-center gap-4">
            <div className="text-goldenOrange font-bold text-[50px] font-tangerine">
              About Us
            </div>
            <div>
              <motion.button
                onClick={() => {
                  setVideoModal(true);
                  document.body.style.overflow = "hidden";
                }}
                className="cursor-pointer bg-softMintGreen w-[40px] h-[40px] rounded-full flex items-center justify-center text-white tracking-wider shadow-xl animate-bounce hover:animate-bounce"
              >
                <FaPlay />
              </motion.button>
            </div>
          </div>
          <div className="flex flex-col gap-[20px] text-[#445626] text-lg md:text-[20.5px] ">
            <div>
              Welcome to Nour Maison, where French sophistication meets the
              bold, vibrant flavours of the Middle East. This isn’t just a
              restaurant; it’s a reflection of family, tradition, and heartfelt
              hospitality. Inspired by the founder’s daughter, “Nour” —
              symbolizing light and warmth — and combined with “Maison,” meaning
              house in French, our cafe is a warm, welcoming space that feels
              like home.
            </div>

            <div>
              Founded by Chef Mo G, an experienced chef with over a decade in
              the culinary world, Nour Maison brings his expertise in Turkish,
              Mediterranean, and French cuisine to every plate. Chef Mo G is now
              dedicated to sharing his passion for culinary excellence and the
              harmony of East and West right here at Nour Maison.
            </div>

            <div>
              Our thoughtfully crafted menu takes you on a journey across
              cultures. Start your day with breakfast favourites from English
              and Canadian plates to Mediterranean and Middle Eastern morning
              staples. Enjoy brunch with a twist, like our Middle
              Eastern-spiced, house-smoked meats, or indulge in buttery stuffed
              croissants, French-Lebanese fusion salads, signature smashed
              burgers, and comforting Moroccan tagines.
            </div>

            <div>
              Every dish here celebrates the fusion of flavors and the joy of
              sharing meals together. Join us to experience the warmth,
              tradition, and welcoming spirit of Nour Maison, where East truly
              meets West.
            </div>
          </div>
        </div>
      </div>

      <div className="flex  items-center justify-center">
        <img
          style={{
            filter: "drop-shadow(0 0 4px rgba(0, 0, 0, 0.3))",
          }}
          src="https://res.cloudinary.com/dhebgz7qh/image/upload/v1767452496/y3replc9wmlnvwb7kjvo_hyo3u3.png"
          alt=""
          className="w-[100px] h-[100px] "
        />
      </div>

      <div className="about_content_page !mt-20   relative z-20">
        <div
          data-aos="fade-left"
          className="flex flex-col gap-[15px] order-2 md:order-1 "
        >
          {/* <AnimTitle className={"flex !items-end gap-5 justify-start"}>
            
          </AnimTitle> */}
          <div className="grid grid-cols-1 sm:!grid-cols-2 lg:!grid-cols-2 gap-6 sm:gap-8 lg:gap-12 relative z-10 p-6 sm:p-10 md:p-14 lg:p-16">
            {data.map((item, index) => (
              <div
                key={index}
                data-aos="fade-up"
                className="flex flex-col items-center sm:items-start text-center sm:text-left"
              >
                {/* Icon with Hover Effect */}
                <div className="text-3xl group relative overflow-hidden flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 text-goldenOrange hover:text-white border-2 border-goldenOrange rounded-full">
                  <div className="absolute bg-goldenOrange rounded-full w-0 h-0 group-hover:w-full group-hover:h-full transition-all duration-300 ease-in-out"></div>
                  <span className="relative z-10">{item.icon}</span>
                </div>

                {/* Text Content */}
                <div className="mt-4 sm:mt-5">
                  <h5 className="text-lg sm:text-2xl font-bold text-goldenOrange leading-6">
                    {item.title}
                  </h5>
                  <p className="mt-2 font-lato  text-sm sm:text-[17px] leading-6 text-whiteGray">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div
          data-aos="fade-right"
          className=" md:h-[calc(100vh-120px)]  md:sticky top-[100px] overflow-hidden order-1 md:order-2"
        >
          <AboutUsSwiper images={images2} />
        </div>
      </div>
      <AboutVideo
        open={videoModal}
        setOpen={setVideoModal}
        videoSrc={"https://camp-coding.tech/nour_maison/Nour-opening-1.mp4"}
      />
    </div>
  );
};

export default AboutContent;
