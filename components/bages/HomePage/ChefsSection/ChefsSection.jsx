import React, {useState} from "react";
import SimpleParallax from "simple-parallax-js";
import Slider from "react-slick";
import {FaArrowLeftLong} from "react-icons/fa6";
import {FaArrowRightLong} from "react-icons/fa6";
import Tilt from "react-parallax-tilt";
import Framer_gallery from "../../../../utils/FramerGallery/FramerGallery";
import ChefCard from "./../../../ChefCard/ChefCard";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/navigation";
import "swiper/css/pagination";
import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay, Navigation, Pagination} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import {FaChevronLeft, FaChevronRight} from "react-icons/fa";
import CategoryCard from "./../../../CategoryCard";
import BranchesImage from "./../../../../utils/BranchesImage/BranchesImage";
import AnimTitle from "../../../../utils/AnimTitle/AnimTitle";
import SectionTitle from "../../../SectionTitle/SectionTitle";

const ChefsSection = () => {
  const slider = React.useRef(null);

  const swiperRef = React.useRef(null);

  const [openGallery, setOpenGallery] = useState(false);
  const [currentIndex, setCurrentIndex] = useState("0");
  const [selectedIndex, setSelectedIndex] = useState("");

  const chefs = [
    {
      name: "Aren Goodman",
      image:
        "https://res.cloudinary.com/dbzn1y8rt/image/upload/f_auto,q_auto/v1737968301/ovp4yvibclt5a9ctlefh.png",
      position: "Junior Chef",
    },
    {
      name: "Dontix Venu",
      image:
        "https://res.cloudinary.com/dbzn1y8rt/image/upload/f_auto,q_auto/v1737976540/bplrqwdgy9ckfbdgb9yj.png",
      position: "Junior Chef",
    },
    {
      name: "Aren Goodman",
      image:
        "https://res.cloudinary.com/dbzn1y8rt/image/upload/f_auto,q_auto/v1737976592/pxmknygqws8spp0s5h2s.png",
      position: "Junior Chef",
    },
    {
      name: "Johan Goodman",
      image:
        "https://res.cloudinary.com/dbzn1y8rt/image/upload/f_auto,q_auto/v1737977117/mimps7rcfilfhvvoa6zm.png",
      position: "Junior Chef",
    },
    {
      name: "Alex Jon",
      image:
        "https://res.cloudinary.com/dbzn1y8rt/image/upload/f_auto,q_auto/v1737977266/dzuvtepoawfsdpsqh1z1.png",
      position: "Sinior Chef",
    },
  ];

  return (
    <div className='  md:mt-20  relative flex flex-col  '>
      <div className='w-[80%]  mx-auto '>
        {/* <AnimTitle>
          <div className=' font-tangerine text-6xl font-extrabold text-softMintGreen text-center  '>
            The Faces Behind the Flavors
          </div>
        </AnimTitle> */}
        <SectionTitle className={"!text-goldenOrange"}>
          The Faces Behind the Flavors
        </SectionTitle>

        {/* <BranchesImage variant={"top-left"} className={" opacity-60 rotate-[0deg] w-[300px] top-[200px]"}  image={"https://res.cloudinary.com/dbzn1y8rt/image/upload/f_auto,q_auto/v1737981147/oyjxzt0oynrfgyc847ek.png"} />
        <BranchesImage variant={"top-right"} className={" opacity-60 rotate-180 w-[300px] bottom-12"}  image={"https://res.cloudinary.com/dbzn1y8rt/image/upload/f_auto,q_auto/v1737981147/oyjxzt0oynrfgyc847ek.png"} /> */}

        <div
          data-aos='fade-right'
          className='overflow-hidden container my-11 flex flex-col md:flex-row justify-between gap-5 md:gap-10'
        >
          {" "}
          <div className='  '>
            <h5 className='text-5xl ms-3 font-tangerine text-center md:text-start'>
              Gallery
            </h5>

            <h2 className='text-2xl md:text-4xl font-semibold text-center md:text-start text-goldenOrange font-lato'>
              Our Master Chefs
            </h2>
          </div>
          <div className='flex items-center mx-auto md:mx-0 gap-3'>
            <button
              className=' custom-prev__  !cursor-pointer p-5 rounded-full border-2 border-softMintGreen text-softMintGreen '
              // onClick={() => {
              //   console.log(slider);
              //   swiperRef.current?.slidePrev();
              // }}
            >
              <FaArrowLeftLong />
            </button>
            <button
              className=' custom-next__  position-relative bottom-0 top-0 start-0  p-5 rounded-full border-2 border-softMintGreen text-softMintGreen '
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
                  }}
                  onMouseMove={() => {
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

        <Swiper
          modules={[Navigation]}
          navigation={{
            nextEl: ".custom-next__",
            prevEl: ".custom-prev__",
          }}
          centeredSlides={chefs.length < 4}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          ref={swiperRef}
          // onSlideChange={handleSlideChange}
          pagination={true}
          // direction="rtl"
          loopt={true}
          autoplay={{
            delay: 3000, // Time in milliseconds between slides (3 seconds)
            disableOnInteraction: false, // Continue autoplay after user interactions
          }}
          spaceBetween={20}
          // slidesPerGroupSkip={4}
          slidesPerView={4}
          className=' w-100 !py-4 overflow-visible'
          breakpoints={{
            1230: {
              slidesPerView: 4,
              spaceBetween: 15,
            },
            1024: {
              slidesPerView: 3.5,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 10,
            },
            600: {
              slidesPerView: 2.5,
              spaceBetween: 8,
            },
            480: {
              slidesPerView: 1.5,
              spaceBetween: 1,
            },
            370: {
              slidesPerView: 1,
              spaceBetween: 1,
            },
            0: {
              slidesPerView: 1,
              spaceBetween: 0,
            },
          }}
        >
          {chefs && chefs.length >= 1 && Array.isArray(chefs)
            ? chefs?.map((item, index) => {
                return (
                  <SwiperSlide className='flex items-center justify-center'>
                    <ChefCard item={item} />
                  </SwiperSlide>
                );
              })
            : null}
        </Swiper>

        {/* <div className='text-end mt-4 relative z-20'>
          <button className='outlined_btn border-softMintGreen text-softMintGreen font-semibold hover:text-white '>
            Show More Chefs
          </button>
        </div> */}
      </div>

     
    </div>
  );
};

export default ChefsSection;
