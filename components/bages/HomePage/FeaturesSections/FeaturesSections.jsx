import React, {useRef, useState} from "react";
import {PiChefHatLight} from "react-icons/pi";
import SimpleParallax from "simple-parallax-js";
import BottomBg from "../../../../utils/bottomBg/BottomBg";
import {Swiper, SwiperSlide} from "swiper/react";
import {LuLeafyGreen} from "react-icons/lu";

import {
  Autoplay,
  Navigation,
  Pagination,
  EffectCoverflow,
  Parallax,
} from "swiper/modules";
import {FaChevronLeft, FaChevronRight} from "react-icons/fa";
import {BiHealth, BiSolidDish} from "react-icons/bi";

const FeaturesSections = () => {
  const swiperRef = useRef(null);
  const handleSlideChange = (e) => {
    setActiveIndex(e.activeIndex);
  };
  const [activeIndex, setActiveIndex] = useState(0);

  const data = [
    {
      icon: <BiSolidDish className='relative z-10' />,
      title: "Fresh Products",
      description:
        "We source the finest and freshest ingredients daily to ensure every dish bursts with flavor and quality.",
    },
    {
      icon: <PiChefHatLight className='relative z-10' />,
      title: "Skilled Chefs",
      description:
        "Our talented chefs bring years of culinary expertise to create dishes that delight your taste buds.",
    },
    {
      icon: <LuLeafyGreen className='relative z-10' />,
      title: "Recipe Innovation",
      description:
        "We constantly push culinary boundaries, crafting unique and creative recipes that bring excitement and new flavors to your dining experience.",
    },
    {
      icon: <BiHealth className='relative z-10' />,
      title: "Healthy Food",
      description:
        "Our healthy food options are crafted with whole, nutrient-dense ingredients that nourish your body and mind while keeping your taste buds satisfied.",
    },
  ];

  const images = [
    "https://www.nourmaison.co.uk/wp-content/uploads/2024/11/DSC00421-768x512.jpg",
    "https://www.nourmaison.co.uk/wp-content/uploads/2024/11/DSC00438-768x512.jpg",
    "https://www.nourmaison.co.uk/wp-content/uploads/2024/11/DSC00602-768x512.jpg",
    "https://www.nourmaison.co.uk/wp-content/uploads/2024/11/DSC00476-768x512.jpg",
  ];

  const content = (
    <div className='relative  mx-auto grid grid-cols-1  lg:grid lg:grid-cols-2 bg-offWhite'>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 relative z-10 p-6 sm:p-10 md:p-14 lg:p-16'>
        {data.map((item, index) => (
          <div
            key={index}
            data-aos='fade-up'
            className='flex flex-col items-center sm:items-start text-center sm:text-left'
          >
            {/* Icon with Hover Effect */}
            <div className='text-3xl group relative overflow-hidden flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 text-goldenOrange hover:text-white border-2 border-goldenOrange rounded-full'>
              <div className='absolute bg-goldenOrange rounded-full w-0 h-0 group-hover:w-full group-hover:h-full transition-all duration-300 ease-in-out'></div>
              <span className='relative z-10'>{item.icon}</span>
            </div>

            {/* Text Content */}
            <div className='mt-4 sm:mt-5'>
              <h5 className='text-lg sm:text-xl font-bold text-goldenOrange leading-6'>
                {item.title}
              </h5>
              <p className='mt-2 text-sm sm:text-base leading-6 text-gray-700'>
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className='relative z-10' data-aos='fade-up-left'>
        <Swiper
          className='h-full relative'
          modules={[Navigation, Pagination, Autoplay]}
          centeredSlides={true}
          navigation={{
            nextEl: ".custom-next_2",
            prevEl: ".custom-prev_2",
          }}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          ref={swiperRef}
          onSlideChange={handleSlideChange}
          // direction="rtl"

          // slidesPerGroupSkip={4}
          slidesPerView={1}
          fadeEffect={{
            crossFade: true, // Ensure smooth transition between slides
          }}
          loop={true} // Enable looping (optional)
          autoplay={{delay: 2000}} // Auto-slide every 3 seconds (optional)
        >
          <button
            // style={{
            //   opacity: activeIndex == 0 && "0.5",
            // }}
            className='custom-prev_2 absolute z-20  bottom-0 !left-3 -translate-y-1/2 '
          >
            <FaChevronLeft className=' slider_buttons bg-softMintGreen rounded-full' />
          </button>
          <button
            // style={{
            //   opacity: activeIndex == images.length - 1 && "0.5",
            // }}
            className='custom-next_2   absolute z-20 bottom-0 left-20 -translate-y-1/2'
          >
            {
              <FaChevronRight className=' slider_buttons bg-softMintGreen rounded-full ' />
            }
          </button>

          {images.map((img, index) => (
            <SwiperSlide className='h-full'>
              <img className='w-full h-full object-cover' src={img} alt={`meels-${index + 1}`} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <BottomBg />
    </div>
  );

  return content;
};

export default FeaturesSections;
