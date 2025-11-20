import React, {useState} from "react";
import Framer_gallery from "../../../../utils/FramerGallery/FramerGallery";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/navigation";
import "swiper/css/pagination";
import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay, Navigation, Pagination} from "swiper/modules";
import {FaChevronLeft, FaChevronRight} from "react-icons/fa";
import BranchesImage from "./../../../../utils/BranchesImage/BranchesImage";
import AnimTitle from "../../../../utils/AnimTitle/AnimTitle";
import EntryCard from "../../../Cards/EntryCard/EntryCard";
import FancyboxElement from "../../../../utils/FancyBox/FancyBox";
import SectionTitle from "../../../SectionTitle/SectionTitle";

const EntryDesign = () => {
  const slider = React.useRef(null);
  const swiperRef = React.useRef(null);
  const [openGallery, setOpenGallery] = useState(false);
  const [currentIndex, setCurrentIndex] = useState("0");
  const [selectedIndex, setSelectedIndex] = useState("");

  const images = [
    {
      image:
        "https://res.cloudinary.com/dbzn1y8rt/image/upload/f_auto,q_auto/v1738404364/e1ycajrwue0h5ulmwkq4.jpg",
    },
    {
      image:
        "https://res.cloudinary.com/dbzn1y8rt/image/upload/f_auto,q_auto/v1738404544/l7rrpg7uw0iog5mwv3qz.jpg",
    },
    {
      image:
        "https://res.cloudinary.com/dbzn1y8rt/image/upload/f_auto,q_auto/v1737815733/l2vsemfnzxd9rvtck24a.jpg",
    },
    {
      image:
        "https://res.cloudinary.com/dbzn1y8rt/image/upload/f_auto,q_auto/v1738404483/g1tuejg9clpraiuoiko3.jpg",
    },
    {
      image:
        "https://res.cloudinary.com/dbzn1y8rt/image/upload/f_auto,q_auto/v1738404437/m99m4bkk3j2izr0cpkfc.jpg",
    },
    {
      image:
        "https://res.cloudinary.com/dbzn1y8rt/image/upload/f_auto,q_auto/v1738404468/bzkqvxkdf4gbr61ufgej.jpg",
    },
    {
      image:
        "https://res.cloudinary.com/dbzn1y8rt/image/upload/f_auto,q_auto/v1738404504/jysotiaqfzcxqh4djuhm.jpg",
    },
    {
      image:
        "https://res.cloudinary.com/dbzn1y8rt/image/upload/f_auto,q_auto/v1737815710/t9noktexya7m7o2dtum4.jpg",
    },
    {
      image:
        "https://res.cloudinary.com/dbzn1y8rt/image/upload/f_auto,q_auto/v1737815685/sdw9jufkrx0onoo2vwfp.jpg",
    },
    {
      image:
        "https://res.cloudinary.com/dbzn1y8rt/image/upload/f_auto,q_auto/v1737815659/kgkdwtofzolvzkb6oyh5.jpg",
    },
    {
      image:
        "https://res.cloudinary.com/dbzn1y8rt/image/upload/f_auto,q_auto/v1737815623/zmovmsobwahf2a353gxu.jpg",
    },
  ];

  return (
    <div className='mt-20 relative flex flex-col' data-aos='flip-up'>
      <div className='w-full mx-auto'>
        {/* <AnimTitle data-aos="fade-down" data-aos-delay="300">
          <div className="font-tangerine text-6xl font-extrabold text-softMintGreen text-center">
          </div>
        </AnimTitle> */}
        <SectionTitle>
          Nour Maison: Where Every Step Invites You In
        </SectionTitle>

         <BranchesImage
          variant="top-left"
          className="opacity-60 rotate-[0deg] w-[300px] top-[200px] sm:w-[250px] sm:top-[150px]"
          image="https://res.cloudinary.com/dbzn1y8rt/image/upload/f_auto,q_auto/v1737981147/oyjxzt0oynrfgyc847ek.png"
        />
        <BranchesImage
          variant="top-right"
          className="opacity-60 rotate-180 w-[300px] bottom-12 sm:w-[250px] sm:bottom-10"
          image="https://res.cloudinary.com/dbzn1y8rt/image/upload/f_auto,q_auto/v1737981147/oyjxzt0oynrfgyc847ek.png"
        />

        <FancyboxElement
          options={{
            Carousel: {
              infinite: false,
            },
          }}
        >
          <div className='flex flex-col md:flex-row mt-10 relative z-20'>
            <div
              data-aos='fade-right'
              data-aos-delay='500'
              className='overflow-hidden  w-full md:w-[450px] flex flex-col justify-between gap-5 md:gap-10'
            >
              <div className=' ps-5 md:ps-10 lg:ps-16 pt-10'>
                <h5 className='text-5xl font-tangerine'>Gallery</h5>
                <h2 className='  text-2xl md:text-3xl lg:text-4xl font-semibold text-softMintGreen font-lato'>
                  Step in, Slow Down, Savor the Moment.
                </h2>
              </div>

              <div
                data-aos='fade-up'
                data-aos-delay='600'
                className='flex mt-auto ms-auto items-center relative z-20'
              >
                <button
                  className='custom-prev_5 !cursor-pointer !p-7 hover:bg-softMintGreen hover:text-white transition-all duration-500 text-softMintGreen'
                  onClick={() => swiperRef.current?.slidePrev()}
                >
                  <FaChevronLeft className='text-2xl' />
                </button>
                <button
                  className='custom-next_5 position-relative !p-7 bottom-0 top-0 start-0 hover:bg-softMintGreen hover:text-white transition-all duration-500 text-softMintGreen'
                  onClick={() => swiperRef.current?.slideNext()}
                >
                  <FaChevronRight className='text-2xl' />
                </button>
              </div>
            </div>

            <Swiper
              modules={[Navigation, Autoplay]}
              navigation={{
                nextEl: ".custom-next_5",
                prevEl: ".custom-prev_5",
              }}
              centeredSlides={images.length < 4}
              onSwiper={(swiper) => (swiperRef.current = swiper)}
              ref={swiperRef}
              spaceBetween={5}
              autoplay={{
                delay: 1000,
                disableOnInteraction: false,
              }}
              slidesPerView={3}
              className='w-full overflow-visible'
              breakpoints={{
                1230: {
                  slidesPerView: 3,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 10,
                },
                // 768: {
                //   slidesPerView: 3,
                //   spaceBetween: 10,
                // },
                600: {
                  slidesPerView: 2,
                  spaceBetween: 2,
                },
                480: {
                  slidesPerView: 2,
                  spaceBetween: 2,
                },
                370: {
                  slidesPerView: 1.5,
                  spaceBetween: 2,
                },
                0: {
                  slidesPerView: 1.5,
                  spaceBetween: 2,
                },
              }}
            >
              {images && images.length >= 1 && Array.isArray(images)
                ? images?.map((item, index) => (
                    <SwiperSlide
                      key={index}
                      href={item?.image}
                      data-fancybox='gallery'
                      className='flex items-center justify-center'
                    >
                      <EntryCard index={index} item={item} />
                    </SwiperSlide>
                  ))
                : null}
            </Swiper>
          </div>
        </FancyboxElement>
      </div>

      <Framer_gallery
        images={images.map((item) => item.image)}
        open={openGallery}
        start={selectedIndex}
        setOpen={setOpenGallery}
      />
    </div>
  );
};

export default EntryDesign;
