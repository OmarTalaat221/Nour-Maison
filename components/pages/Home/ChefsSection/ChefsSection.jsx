import React from "react";

import { FaArrowLeftLong } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";
import Framer_gallery from "../../../../utils/FramerGallery/FramerGallery";
import SectionTitle from "../../../SectionTitle/SectionTitle";
import ChefsSectionSwiper from "./ChefsSwiper";
import ChefCard from "../../../Cards/ChefCard/ChefCard";
import TopBg from "../../../../utils/topBg/TopBg";
import BottomBg from "../../../../utils/bottomBg/BottomBg";
import BranchesImage from "../../../../utils/BranchesImage/BranchesImage";

const ChefsSection = () => {
  const chefs = [
    {
      name: "Mo G",
      image:
        "https://res.cloudinary.com/dhebgz7qh/image/upload/v1767536858/pjjufhv9xhfz70tupqar_moqoxx.webp",
      position: "Chef Owner",
    },
    {
      name: "Cristina",
      image:
        "https://res.cloudinary.com/dhebgz7qh/image/upload/v1767536860/v7x2fulaz4kzk7ydwols_cte2hr.jpg",
      position: " Chef",
    },
    {
      name: "Hani",
      image:
        "https://res.cloudinary.com/dhebgz7qh/image/upload/v1767536868/ujwjsbeuc9xxnonv0xut_zropkh.jpg",
      position: " Chef",
    },
    {
      name: "Ramona",
      image:
        "https://res.cloudinary.com/dhebgz7qh/image/upload/v1767537001/mvsnlu3qcmjhpsgxxewe_ytpcke.webp",
      position: " Chef",
    },
  ];

  return (
    <div className="relative overflow-hidden  md:mx-10 rounded-[32px] !shadow-2xl mb-[100px]">
      <div className="sticky top-14" data-aos="fade-left" data-aos-delay="300">
        <BranchesImage
          variant={"top-right"}
          width={700}
          className={" opacity-65    scale-150 origin-right "}
        />
      </div>
      <div className="" data-aos="fade-right" data-aos-delay="500">
        <BranchesImage
          variant={"top-left"}
          className={" w-[] top-6 scale-150  "}
        />
      </div>
      <div
        className="  py-10 relative flex flex-col  
      order-1 lg:order-2     z-20 
          
          backdrop-blur-sm bg-white/20  rounded-[32px] !overflow-hidden shadow-lg border-2 border-white/50 text-green-900
        bg-gray-900 bg-clip-padding backdrop-filter  bg-opacity-20  
          bg-gradient-to-br from-white/10 via-white/20 to-white/5
    "
      >
        <div className="w-[80%]  mx-auto">
          {/* <AnimTitle>
          <div className=' font-tangerine text-6xl font-extrabold text-softMintGreen text-center  '>
            The Faces Behind the Flavors
          </div>
        </AnimTitle> */}
          <SectionTitle className={"!text-goldenOrange"}>
            The Faces Behind the Flavors
          </SectionTitle>

         
          <div
            data-aos="fade-right"
            className="overflow-hidden container  md:my-11 flex flex-col md:flex-row justify-between gap-5 md:gap-10"
          >
            {" "}
            <div className="  ">
              <h5 className="text-5xl ms-3 font-tangerine text-center md:text-start">
                Gallery
              </h5>

              <h2 className="text-2xl md:text-4xl font-semibold text-center md:text-start text-goldenOrange font-seasons">
                Our Master Chefs
              </h2>
            </div>
            <div className="flex items-center mx-auto md:mx-0 gap-3">
              <button
                className=" custom-prev__  !cursor-pointer p-5 rounded-full border-2 border-softMintGreen text-softMintGreen "
                // onClick={() => {
                //   console.log(slider);
                //   swiperRef.current?.slidePrev();
                // }}
              >
                <FaArrowLeftLong />
              </button>
              <button
                className=" custom-next__  position-relative bottom-0 top-0 start-0  p-5 rounded-full border-2 border-softMintGreen text-softMintGreen "
                // onClick={() => swiperRef.current?.slideNext()}
              >
                <FaArrowRightLong />
              </button>
            </div>
          </div>
          {/* <div className='w-[full] '>
          <Slider {...settings} ref={slider}>
            {chefs.map((chef, index) => {
              let isDragging = false;
              return (
                <div
                  key={index}
                  onMouseDown={() => {
                    isDragging = false; // Reset dragging state on mouse down
                  }}                  onMouseMove={() => {
                    isDragging = true; // Mark as dragging if mouse moves
                  }}
                  onMouseUp={() => {
                    if (!isDragging) {
                      // Trigger only if it wasn't a drag
                      setOpenGallery(true);
                      setSelectedIndex(index);
                    }
                  }}
                  className='cursor-pointer py-[30px]'
                >
                  <ChefCard item={chef} />
                </div>
              );
            })}
          </Slider>
        </div>
 */}

          <ChefsSectionSwiper chefs={chefs} />
          {/* <div className="text-end mt-4 relative z-20">
          <button className="outlined_btn border-softMintGreen text-softMintGreen font-semibold hover:text-white ">
            Show More Chefs
          </button>
        </div> */}
        </div>
      </div>
    </div>
  );
};

export default ChefsSection;
