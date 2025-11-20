import React, {useState, useRef} from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation, Pagination, Autoplay} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./style.scss";
import {FaArrowLeftLong, FaArrowRightLong} from "react-icons/fa6";
import Tilt from "react-parallax-tilt";
import Framer_gallery from "../../../../utils/FramerGallery/FramerGallery";
import SectionTitle from "../../../SectionTitle/SectionTitle";
import BranchesImage from "../../../../utils/BranchesImage/BranchesImage";

const OurServices = () => {
  const [openGallery, setOpenGallery] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState("");

  const swiperRef = useRef(null);

  const services = [
    {
      id: 1,
      title: "Baby Shower",
      description:
        "Celebrate the arrival of your little one with a warm and beautifully arranged gathering to cherish forever.",
    },
    {
      id: 2,
      title: "Gender Reveal",
      description:
        "Create a magical moment to reveal your baby’s gender with stunning decorations and an exciting atmosphere.",
    },
    {
      id: 3,
      title: "Birthday Party",
      description:
        "Make your birthday celebration unforgettable with a fun-filled party and delightful memories for everyone.",
    },
    {
      id: 4,
      title: "Anniversaries",
      description:
        "Mark your special milestone with an elegant celebration tailored to create lasting memories of love and joy.",
    },
  ];

  const images = [
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

  return (
    <div className='mt-20 relative flex flex-col overflow-visible '>
      <div className='' data-aos='fade-left' data-aos-delay='300'>
        <BranchesImage
          variant={"top-right"}
          className={" opacity-30 md:opacity-100 "}
        />
      </div>
      <div className='' data-aos='fade-right' data-aos-delay='500'>
        <BranchesImage
          variant={"top-left"}
          className={" w-[] top-6 opacity-30 md:opacity-100 "}
        />
      </div>
      <div className='w-full  mx-auto z-10'>
        <SectionTitle className={"!text-goldenOrange"}>
          Elegance & Events: Crafting Unforgettable Moments
        </SectionTitle>

        <div className=' container  !flex flex-col lg:flex-row h-full gap-4 relative z-20 mt-20 !px-5'>
          <Tilt
            className='background-stripes parallax-effect-glare-scale sticky top-0'
            perspective={5000}
            glareEnable={true}
            glareMaxOpacity={0.45}
            scale={1.02}
          >
            <div
              data-aos='fade-right'
              data-aos-delay='200'
              className='relative'
            >
              <img
                style={{boxShadow: "-20px -20px 0 0 #599066"}}
                className='!h-full w-full md:w-[600px] lg:w-[800px] object-cover mx-auto'
                src='https://res.cloudinary.com/dbzn1y8rt/image/upload/f_auto,q_auto/v1738574913/q5ccc9oqexswwudxiwcm.webp'
                alt='valentine-banner'
              />
            </div>
          </Tilt>

          <div
            className='grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-5'
            data-aos='fade-up'
          >
            {services.map((item, index) => (
              <Tilt
                key={index}
                className='background-stripes parallax-effect-glare-scale'
                perspective={1000}
                glareEnable={true}
                glareMaxOpacity={0.45}
                scale={1.02}
              >
                <div
                  data-aos='fade-up'
                  data-aos-delay={index * 400}
                  className='relative z-20 border-2 rounded-lg bg-white border-sageGreen mx-auto p-6 md:p-10 hover:shadow-lg transition-shadow duration-300'
                >
                  <p className='text-lg md:text-xl text-softMintGreen font-medium font-tajawal text-center md:text-left'>
                    {String(item.id).padStart(2, "0")} SERVICE
                  </p>
                  <h3 className='text-xl md:text-2xl text-goldenOrange font-bold mt-2 text-center md:text-left'>
                    {item.title}
                  </h3>
                  <p className='text-gray-600 mt-3 text-sm md:text-base text-center md:text-left'>
                    {item.description}
                  </p>
                </div>
              </Tilt>
            ))}
          </div>
        </div>

        <div
          data-aos='fade-right'
          className='overflow-hidden container my-11 flex flex-col md:flex-row justify-between gap-5 md:gap-10'
        >
          <div className=''>
            <h5 className='text-5xl ms-3 font-tangerine text-center md:text-start'>
              Gallery
            </h5>
            <h2 className='text-2xl md:text-4xl font-semibold text-center md:text-start text-goldenOrange font-lato'>
              Happy Moments
            </h2>
          </div>

          <div className='flex items-center mx-auto md:mx-0 gap-3'>
            <button
              data-aos='fade-up'
              className='cursor-pointer custom-prev_10 p-5 rounded-full border-2 border-softMintGreen text-softMintGreen'
              onClick={() => swiperRef.current?.slidePrev()}
            >
              <FaArrowLeftLong />
            </button>
            <button
              data-aos='fade-down'
              className=' custom-next_10 cursor-pointer p-5 rounded-full border-2 border-softMintGreen text-softMintGreen'
              onClick={() => swiperRef.current?.slideNext()}
            >
              <FaArrowRightLong />
            </button>
          </div>
        </div>

        <div className='w-full container p-0 !pb-10 md:p-0'>
          <Swiper
            ref={swiperRef}
            modules={[Navigation, Pagination, Autoplay]}
            navigation={{
              nextEl: ".custom-next_10",
              prevEl: ".custom-prev_10",
            }}
            spaceBetween={20} // Adds spacing between slides
            slidesPerView={7}
            loop={true}
            autoplay={{delay: 1000}}
            pagination={{clickable: true}}
            className='!pb-10'
            breakpoints={{
              1440: {slidesPerView: 6},
              1200: {slidesPerView: 4.5},
              991: {slidesPerView: 5},
              768: {slidesPerView: 4},
              530: {slidesPerView: 3.5},
              375: {slidesPerView: 2.5},
              0: {slidesPerView: 2.5},
            }}
          >
            {images.map((imag, index) => {
              let isDragging = false;

              return (
                <SwiperSlide key={index} className='cursor-pointer'>
                  <img
                    alt={`moment-${index+1}`}
                    data-aos='fade-up'
                    data-aos-delay={index * 100}
                    key={index}
                    onClick={() => {
                      setOpenGallery(true);
                      setSelectedIndex(index);
                    }}
                    className=' cursor-pointer  !w-[140px] !h-[140px] md:!w-[180px] md:!h-[180px] rounded-lg shadow-lg'
                    src={imag}
                  />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>

      {/* <Framer_gallery
        images={images}
        open={openGallery}
        start={selectedIndex}
        setOpen={setOpenGallery}
      /> */}
    </div>
  );
};

export default OurServices;
