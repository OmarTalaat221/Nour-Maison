
"use client"
import {useRef, useState} from "react";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css";

import {Autoplay, Navigation, Pagination} from "swiper/modules";
import {FaChevronLeft, FaChevronRight, FaStar} from "react-icons/fa";

import {Swiper, SwiperSlide} from "swiper/react";
import { reviews } from "../GoogleReviews/data";
import Image from "next/image";
const FeedBackSwiper = () => {
  const swiperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSlideChange = (e) => {
    setActiveIndex(e.activeIndex);
  };


  const feedbackData = [
    {
      name: "Lina Maher",
      title: "Food Blogger",
      image: "https://html.tonatheme.com/2023/earls/assets/images/resource/customer.png",
      content:
        "From the moment I walked in, Nour Maison Café felt like home. Their pistachio latte is a revelation — rich, smooth, and full of character.",
    },
    {
      name: "Youssef Nabil",
      title: "Visual Artist",
      image: "https://html.tonatheme.com/2023/earls/assets/images/resource/customer.png",
      content:
        "The atmosphere is perfect for creatives. Their brunch menu has the right blend of color and taste — every plate is art.",
    },
    {
      name: "Salma Hassan",
      title: "Nutritionist",
      image: "https://html.tonatheme.com/2023/earls/assets/images/resource/customer.png",
      content:
        "I always recommend Nour Maison to my clients. Their fresh, healthy choices make clean eating delicious and fun.",
    },
  ];
  

  return (
    <Swiper
    modules={[Navigation, Autoplay]}
    navigation={{
      nextEl: ".custom-next_12",
      prevEl: ".custom-prev_12",
    }}
    onSwiper={(swiper) => (swiperRef.current = swiper)}
    ref={swiperRef}
    onSlideChange={handleSlideChange}
    slidesPerView={1}
    spaceBetween={10}
    loop={true}
    className="!pb-20 "
    // autoplay={{delay: 2000}}
  >
    <div className="top-[140px] absolute hidden md:block ">
{/* 
    <button className='custom-prev  z-50   left-0 -translate-y-1/2 '>
        {
          <FaChevronLeft className=' slider_buttons cursor-pointer !bg-transparent text-goldenOrange rounded-full' />
        }
      </button> */}
      <button className='custom-prev_12 absolute z-20  left-0 -translate-y-1/2'>
        {
          <FaChevronLeft className=' slider_buttons cursor-pointer !bg-transparent text-goldenOrange rounded-full ' />
        }
      </button>
      <button className='custom-next_12 absolute z-20  left-16 -translate-y-1/2'>
        {
          <FaChevronRight className=' slider_buttons cursor-pointer !bg-transparent text-goldenOrange rounded-full ' />
        }
      </button>
      </div>

      {reviews.map((feedback, index) => (
  <SwiperSlide key={index} className="h-full">
    <div className="feed_slide">
      <div className="w-[80px] mx-auto h-[80px] overflow-hidden rounded-full">
        <Image
          width={80}
          height={80}
          loading="lazy"
          className="!w-full object-cover"
          src={feedback?.image}
          alt={feedback.name}
        />
      </div>

      <div className="flex flex-col items-center md:items-start gap-[10px]">
        <div className="font-semibold text-[30px] font-oswald text-softMintGreen capitalize">
          {feedback.name}
        </div>
           <div className="flex items-center gap-2 mb-2">
                <div className="flex text-yellow-500 gap-1">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className="text-xl" />
                  ))}
                </div>
                {/* <span className="text-sm text-gray-500">a month ago</span> */}
              </div>

        {feedback?.tags ? (
        <div className="text-sm text-gray-600 mb-4">
          {feedback.tags.map((tag, index) => {
            return (
              <>
                <span className="mr-2">{tag}</span>
                {index != feedback.tags.length - 1 && " | "}
              </>
            );
          })}
          {/* <span className="mx-2">Breakfast</span> |
          <span className="ml-2">£10–20</span> */}
        </div>
      ) : null}

        <div className="text-center md:text-left text-lg text-gray-500">{feedback.review}</div>
        {
        feedback.breakdown || feedback.recommendedDishes ?
      <div className=" rounded-lg !p-4 mt-auto
      
          relative z-20 mx-auto  md:p-10 hover:shadow-2xl transition-shadow duration-300 
 h-full w-full bg-gradient-to-br from-dairyCream/25 to-dairyCream/40 
 !border-[3px] border-softMintGreen/40 backdrop-blur-md backdrop-saturate-150 
 shadow-lg ring-1 ring-white/10
      ">
        {feedback?.breakdown ? (
          <div className="flex flex-col text-sm text-softMintGreen font-semibold mb-2">
            <span className="mr-4">Food: <span className="text-gray-700">{feedback?.breakdown?.food}</span></span>
            <span className="mr-4">Service: <span className="text-gray-700">{feedback?.breakdown?.service}</span></span>
            <span>Atmosphere: <span className="text-gray-700">{feedback?.breakdown?.atmosphere}</span></span>
          </div>
        ) : null}

        {/* Recommended dishes */}
        {feedback?.recommendedDishes?.length ? (
          <div>
            <p className="text-sm font-semibold text-softMintGreen mb-1">
              Recommended dishes
            </p>
            <ul style={{
              
            }} className="flex flex-col">

            {feedback.recommendedDishes.map((item, index) => (
              <il className="text-sm text-gray-700">- {item}</il>
            ))}
            </ul>
          </div>
        ) : null}
      </div>
      :null
      }
      </div>
    </div>
     
  </SwiperSlide>
))}

  
    {/* <div className='absolute bottom-[0px] left-1/2 -translate-x-1/2 gap-4 md:hidden'>
      <button className='custom-prev  z-20  mx-4    left-0 -translate-y-1/2 '>
        {
          <FaChevronLeft className=' slider_buttons cursor-pointer !bg-transparent text-goldenOrange rounded-full' />
        }
      </button>
      <button className='custom-next  z-20 mx-4  left-16 -translate-y-1/2'>
        {
          <FaChevronRight className=' slider_buttons cursor-pointer !bg-transparent text-goldenOrange rounded-full ' />
        }
      </button>
    </div> */}
  </Swiper>
    
  );
};

export default FeedBackSwiper;
