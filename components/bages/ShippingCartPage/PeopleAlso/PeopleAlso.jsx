import React, {useRef} from "react";
// Import Swiper React components
import {Swiper, SwiperSlide} from "swiper/react";
import {FaChevronLeft, FaChevronRight} from "react-icons/fa";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import {Navigation, Autoplay} from "swiper/modules";
import ProdCard from "../../../Cards/ProdCard/ProdCard";
import products from "./../../../../data/products";

const PeopleAlso = () => {
  const slider = React.useRef(null);

  const swiperRef = React.useRef(null);

  return (
    <div>
      <div className='flex justify-between items-center my-3'>
        <h3 class=' text-softMintGreen  font-oswald text-2xl font-semibol dark:text-white '>
          People also bought
        </h3>

        <div
          data-aos='fade-up'
          data-aos-delay='600'
          className='flex gap-4 mt-auto ms-auto items-center  relative z-20'
        >
          <button
            className=' custom-prev  !cursor-pointer  !p-4 border-2 border-softMintGreen  rounded-full   hover:bg-softMintGreen hover:text-white transition-all duration-500  text-softMintGreen '
            onClick={() => {
              swiperRef.current?.slidePrev();
            }}
          >
            <FaChevronLeft className='text-2xl' />
          </button>
          <button
            className=' custom-next  position-relative !p-4 border-2 border-softMintGreen bottom-0 top-0 start-0 rounded-full    hover:bg-softMintGreen hover:text-white transition-all duration-500   text-softMintGreen '
            onClick={() => swiperRef.current?.slideNext()}
          >
            <FaChevronRight className='text-2xl' />
          </button>
        </div>
      </div>
      <Swiper
        ref={swiperRef}
        slidesPerView={3}
        navigation={{
          nextEl: ".custom-next",
          prevEl: ".custom-prev",
        }}
        modules={[Navigation, Autoplay]}
        className='mySwiper'
        spaceBetween={10}
      >
        {products.map((prod, index) => {
          return (
            <SwiperSlide>
              <ProdCard key={index} data={prod} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default PeopleAlso;
