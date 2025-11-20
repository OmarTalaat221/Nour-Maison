"use client";
import React, { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./style.scss";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import Tilt from "react-parallax-tilt";
import Framer_gallery from "../../../../utils/FramerGallery/FramerGallery";
import SectionTitle from "../../../SectionTitle/SectionTitle";
import BranchesImage from "../../../../utils/BranchesImage/BranchesImage";
import HappyMoments from "../../HappyMoments/HappyMoments";
import FramerModal from "../../../InqueryModal";
import { image } from "../../../../public/images";
import toast from "react-hot-toast";
import PaperPlaneSuccess from "../../../PaperPlaneSuccess/PaperPlaneSuccess";
import { useMediaQuery } from "../../../../Hooks/GeneralHooks/useMediaQueries";

const OurServices = () => {
  const [selectedService, setSelectedService] = useState(null);
  const [showOverlay, setShowOverlay] = useState(false);
  const afternoonTea = {
    id: 1,
    title: "Afternoon Tea",
    description:
      "Join us for an experience that tastes like adventure and feels like love.",
    image:
      "https://res.cloudinary.com/dbzn1y8rt/image/upload/f_auto,q_auto/v1744581228/xvt7iw6wqrjw2ifcsxyk.jpg",
  };

  const services = [
    {
      id: 1,
      title: "Baby Shower",
      description:
        "Celebrate the arrival of your little one with a warm and beautifully arranged gathering to cherish forever.",
      image: "/images/babyShawer.png",
    },
    {
      id: 2,
      title: "Gender Reveal",
      description:
        "Create a magical moment to reveal your baby’s gender with stunning decorations and an exciting atmosphere.",
      image: "/images/gender-reveal.png",
    },
    {
      id: 3,
      title: "Birthday Party",
      description:
        "Make your birthday celebration unforgettable with a fun-filled party and delightful memories for everyone.",
      image:
        "https://res.cloudinary.com/dbzn1y8rt/image/upload/v1746444834/wx7yvxpnuhorzamdll4z.webp",
    },
    {
      id: 4,
      title: "Anniversaries",
      description:
        "Mark your special milestone with an elegant celebration tailored to create lasting memories of love and joy.",
      image:
        "https://res.cloudinary.com/dbzn1y8rt/image/upload/v1746445563/ga4mdhcqwbr2sqhdc7os.webp",
    },
  ];

  const images1 = [
    "https://html.merku.love/cafert/img/gallery/preview03.webp",
    "https://html.merku.love/cafert/img/gallery/preview04.webp",
    "https://html.merku.love/cafert/img/gallery/preview02.webp",
    "https://html.merku.love/cafert/img/gallery/preview03.webp",
    "https://html.merku.love/cafert/img/gallery/preview04.webp",
    "https://html.merku.love/cafert/img/gallery/preview02.webp",
    "https://html.merku.love/cafert/img/gallery/preview03.webp",
    "https://html.merku.love/cafert/img/gallery/preview04.webp",
    "https://html.merku.love/cafert/img/gallery/preview02.webp",
    "https://html.merku.love/cafert/img/gallery/preview03.webp",
    "https://html.merku.love/cafert/img/gallery/preview04.webp",
    "https://html.merku.love/cafert/img/gallery/preview02.webp",
  ];

  const images = [
    "https://res.cloudinary.com/dbzn1y8rt/image/upload/v1746444834/wx7yvxpnuhorzamdll4z.webp",
    "https://res.cloudinary.com/dbzn1y8rt/image/upload/v1746444925/xvv9gdzrqav3jwgx6j6m.webp",
    "https://res.cloudinary.com/dbzn1y8rt/image/upload/v1746444838/vlcxgm3mwg0nm5bfxqtp.webp",
    "https://res.cloudinary.com/dbzn1y8rt/image/upload/v1746444848/sjvctg5eayu7olg8dyal.webp",
    "https://res.cloudinary.com/dbzn1y8rt/image/upload/v1746444854/iixragagyik56yfd9c8p.webp",
    "https://res.cloudinary.com/dbzn1y8rt/image/upload/v1746444854/iixragagyik56yfd9c8p.webp",
    "https://res.cloudinary.com/dbzn1y8rt/image/upload/v1746444920/l1xuunwfxdhcywyharos.webp",
    "https://res.cloudinary.com/dbzn1y8rt/image/upload/v1746445326/c1d8ccewqatmvhcmlzei.webp",
    "https://res.cloudinary.com/dbzn1y8rt/image/upload/v1746445563/ga4mdhcqwbr2sqhdc7os.webp",
    "https://res.cloudinary.com/dbzn1y8rt/image/upload/v1746444904/rcudtzg6dkuyukfezowp.webp",
    "https://res.cloudinary.com/dbzn1y8rt/image/upload/v1746444898/yuz4ndz00ojqb9wlomhk.webp",
    "https://res.cloudinary.com/dbzn1y8rt/image/upload/v1746444907/ljfkamtlrkvhlmvm3pwp.webp",
    "https://res.cloudinary.com/dbzn1y8rt/image/upload/v1745663343/pgmv9wndeci5vmmduvtp.webp",
    "https://res.cloudinary.com/dbzn1y8rt/image/upload/v1745663516/ybrrcsa8rg83s7hqza9k.webp",
    "https://res.cloudinary.com/dbzn1y8rt/image/upload/v1745487109/wz8v83uwixxf93l6qtdq.webp",
  ];

  const isMobile = useMediaQuery("(max-width: 768px)");

  return (
    <div className="mt-20 relative flex flex-col overflow-visible ">
      <div className="">
        <BranchesImage
          variant={"top-right"}
          className={" opacity-30 md:opacity-100 "}
        />
      </div>
      <div className="">
        <BranchesImage
          variant={"top-left"}
          className={" w-[] top-6 opacity-30 md:opacity-100 "}
        />
      </div>
      <div className="w-full  mx-auto z-10">
        <SectionTitle className={"!text-goldenOrange"}>
          Elegance & Events: Crafting Unforgettable Moments
        </SectionTitle>

        <div className=" container  !flex flex-col  lg:flex-row h-full gap-4 relative z-20 mt-20 !px-5">
          <Tilt
            className="background-stripes parallax-effect-glare-scale  "
            perspective={5000}
            glareEnable={!isMobile}
            tiltEnable={!isMobile}
            glareMaxOpacity={0.45}
            scale={1.02}
          >
            <div className="relative w-full lg:!w-[400px]">
              <div
                onClick={() => setSelectedService(afternoonTea)}
                className="relative z-20 mx-auto   hover:shadow-2xl transition-shadow duration-300 
 h-full w-full rounded-xl bg-gradient-to-br from-dairyCream/25 to-dairyCream/80 
 !border-[3px] border-softMintGreen/40 backdrop-blur-md backdrop-saturate-150 
 shadow-lg ring-1 ring-white/10"
              >
                <img
                  loading="lazy"
                  style={{ boxShadow: "-20px -20px 0 0 #599066" }}
                  className=" rounded-tr-[10px]  shadow-2xl w-full h-full rounded-  object-cover mx-auto"
                  src="https://res.cloudinary.com/dbzn1y8rt/image/upload/f_auto,q_auto/v1744581228/xvt7iw6wqrjw2ifcsxyk.jpg"
                  alt="valentine-bannre"
                />
                <div className="p-6 md:p-10 rounded-xl ">
                  <p className="text-lg md:text-xl text-softMintGreen font-medium font-tajawal text-center md:text-left">
                    01 Event
                  </p>
                  <h3 className="text-4xl md:text-5xl font-tangerine text-goldenOrange font-bold mt-2 text-center md:text-left">
                    Afternoon Tea
                  </h3>
                  <p className="text-gray-600 mt-3 text-lg font-medium md:text-base text-center md:text-left">
                    Join us for an experience that tastes like adventure and
                    feels like love.
                  </p>
                </div>
              </div>
            </div>
          </Tilt>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-5">
            {services.map((item, index) => (
              <Tilt
                key={index}
                className="background-stripes parallax-effect-glare-scale cursor-pointer"
                perspective={1000}
                glareEnable={!isMobile}
                tiltEnable={!isMobile}
                glareMaxOpacity={0.45}
                scale={1.02}
              >
                <div
                  onClick={() => setSelectedService(item)}
                  className="relative z-20 mx-auto p-6 md:p-10 hover:shadow-2xl transition-shadow duration-300 
                  h-full w-full rounded-xl bg-gradient-to-br from-dairyCream/25 to-dairyCream/80 
                  !border-[3px] border-softMintGreen/40 backdrop-blur-md backdrop-saturate-150 
                  shadow-lg ring-1 ring-white/10"
                >
                  <p className="text-lg md:text-xl text-softMintGreen font-medium font-tajawal text-center md:text-left">
                    {String(item.id + 1).padStart(2, "0")} Event
                  </p>
                  <h3 className="text-4xl md:text-6xl  font-tangerine text-goldenOrange font-bold mt-2 text-center md:text-left">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 mt-3 text-base md:text-xl leading-loose font-medium  text-center md:text-left">
                    {item.description}
                  </p>
                </div>
              </Tilt>
            ))}
          </div>
        </div>
      </div>

      <FramerModal
        onSuccess={() => {
          toast.success("Inquiry sent successfully");
          setShowOverlay(true);
        }}
        onFail={() => {
          toast.error("Inquiry failed");
          setShowOverlay(false);
        }}
        event={selectedService}
        open={selectedService}
        setOpen={() => setSelectedService(null)}
      />

      <PaperPlaneSuccess
        text={"Inquiry sent successfully"}
        showOverlay={showOverlay}
        setShowOverlay={setShowOverlay}
      />
    </div>
  );
};

export default OurServices;
