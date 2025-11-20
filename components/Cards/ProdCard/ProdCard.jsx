
"use client"
import React from "react";
// Import Swiper React components
import {Swiper, SwiperSlide} from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import {Pagination, Autoplay} from "swiper/modules";
import {useDispatch} from "react-redux";
import { addToCart } from "../../../redux/cartSlice";
import Image from "next/image";
import { FaGift } from "react-icons/fa";
// import {addToCart} from "../../../redux/cartSlice";

const ProdCard = ({setOpenCart, openCart, data: prod, onClick}) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(prod));
    setOpenCart(true);
  };

  return (
    <div>
      <div
        className=' cursor-pointer flex items-center justify-center bg-white'
        onClick={(e) => {
          e.stopPropagation();
          onClick ? onClick() : "";
        }}
      >
        <div className='w-full border border-sageGreen rounded-lg shadow-md p-4'>
          {/* Discount Badge */}
          <div className='relative'>
            {
              prod.price && price.price > 0 && price.discount ?
              <span className='absolute z-30 top-2 left-2 bg-orange-400 text-white text-xs font-semibold px-2 py-1 rounded-full'>
              {prod?.discount}
            </span>
            :
            //   <span className='absolute z-30 animate-bounce  top-2 left-2 bg-logoGold text-white  font-semibold text-2xl w-10 h-10 flex items-center justify-center rounded-lg'>
            //   <FaGift />
            // </span>
            null
            }
            {/* Wishlist Icon */}
            {/* <button className='absolute top-2 right-2 w-8 h-8 bg-white rounded-full shadow flex items-center justify-center'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-4 w-4 text-gray-600'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
                strokeWidth={2}
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z'
                />
              </svg>
            </button> */}
            {/* Product Image */}
            <div>
              <Swiper
                pagination={{
                  dynamicBullets: true,
                }}
                loop={true}
                autoplay={{
                  delay: 1500, // Time in milliseconds between slides (3 seconds)
                  disableOnInteraction: false, // Continue autoplay after user interactions
                }}
                spaceBetween={10}
                modules={[Pagination]}
                className='mySwiper'
              >
                {prod.images.map((img) => {
                  return (
                    <SwiperSlide onContextMenu={(e) => e.preventDefault()}>
                      {" "}
                      <Image
                        onContextMenu={(e) => e.preventDefault()}
                        draggable='false'
                        src={img}
                        alt='Product Image'
                        width={500}
                        height={500}
                        priority={true}
                        fetchPriority='high'
                        //
                        className=' select-none object-contain w-full !h-[270px] fill'
                      />
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </div>
          </div>
          {/* Product Details */}
          <div className='mt-4'>
            <h3 className='text-gray-800 font-medium text-base'>
              {prod?.name}
            </h3>
            <p className='uppercase text-green-600 text-xs font-medium'>
              {prod?.category}
            </p>
            {/* Ratings */}
            <div className='flex space-x-1 text-orange-500 text-sm mt-1'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-4 w-4'
                fill='currentColor'
                viewBox='0 0 20 20'
              >
                <path d='M9.049 2.927C9.349 2.2 10.651 2.2 10.951 2.927l1.558 3.779 4.004.37c.85.079 1.194 1.139.572 1.724l-2.922 2.658.87 3.917c.181.816-.68 1.448-1.419 1.034L10 13.01l-3.614 1.96c-.74.414-1.6-.218-1.419-1.034l.87-3.917-2.922-2.658c-.622-.585-.278-1.645.572-1.724l4.004-.37L9.049 2.927z' />
              </svg>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-4 w-4'
                fill='currentColor'
                viewBox='0 0 20 20'
              >
                <path d='M9.049 2.927C9.349 2.2 10.651 2.2 10.951 2.927l1.558 3.779 4.004.37c.85.079 1.194 1.139.572 1.724l-2.922 2.658.87 3.917c.181.816-.68 1.448-1.419 1.034L10 13.01l-3.614 1.96c-.74.414-1.6-.218-1.419-1.034l.87-3.917-2.922-2.658c-.622-.585-.278-1.645.572-1.724l4.004-.37L9.049 2.927z' />
              </svg>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-4 w-4'
                fill='currentColor'
                viewBox='0 0 20 20'
              >
                <path d='M9.049 2.927C9.349 2.2 10.651 2.2 10.951 2.927l1.558 3.779 4.004.37c.85.079 1.194 1.139.572 1.724l-2.922 2.658.87 3.917c.181.816-.68 1.448-1.419 1.034L10 13.01l-3.614 1.96c-.74.414-1.6-.218-1.419-1.034l.87-3.917-2.922-2.658c-.622-.585-.278-1.645.572-1.724l4.004-.37L9.049 2.927z' />
              </svg>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-4 w-4'
                fill='currentColor'
                viewBox='0 0 20 20'
              >
                <path d='M9.049 2.927C9.349 2.2 10.651 2.2 10.951 2.927l1.558 3.779 4.004.37c.85.079 1.194 1.139.572 1.724l-2.922 2.658.87 3.917c.181.816-.68 1.448-1.419 1.034L10 13.01l-3.614 1.96c-.74.414-1.6-.218-1.419-1.034l.87-3.917-2.922-2.658c-.622-.585-.278-1.645.572-1.724l4.004-.37L9.049 2.927z' />
              </svg>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-4 w-4 text-gray-300'
                fill='currentColor'
                viewBox='0 0 20 20'
              >
                <path d='M9.049 2.927C9.349 2.2 10.651 2.2 10.951 2.927l1.558 3.779 4.004.37c.85.079 1.194 1.139.572 1.724l-2.922 2.658.87 3.917c.181.816-.68 1.448-1.419 1.034L10 13.01l-3.614 1.96c-.74.414-1.6-.218-1.419-1.034l.87-3.917-2.922-2.658c-.622-.585-.278-1.645.572-1.724l4.004-.37L9.049 2.927z' />
              </svg>
            </div>
            {/* Pricing */}
            <div className='flex items-end justify-between'>
              <div className='flex items-baseline space-x-2 mt-2'>
              <span className='text-softMintGreen text-lg  font-pacifico'>
                    Coming Soon...
                    </span>
                {/* {
                  prod?.price && +prod.price > 0 ?
                  <>
                
                  <span className='text-softMintGreen text-xl font-semibold'>
                  &#163;{prod?.price}
                </span>
                <span className='text-gray-400 text-sm line-through'>
                  &#163;{prod?.original_price}
                </span>
                  </>
                  :
                  <span className='text-softMintGreen text-lg  font-pacifico'>
                    Free
                    </span>
                } */}
              </div>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleAddToCart();
                }}
                className='w-10 h-10 rounded-full bg-softMintGreen flex items-center justify-center shadow text-white'
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width={20}
                  height={20}
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='currentColor'
                  strokeWidth={2}
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  className='icon icon-tabler icons-tabler-outline icon-tabler-shopping-cart'
                >
                  <path stroke='none' d='M0 0h24v24H0z' fill='none' />
                  <path d='M6 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0' />
                  <path d='M17 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0' />
                  <path d='M17 17h-11v-14h-2' />
                  <path d='M6 5l14 1l-1 7h-13' />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProdCard;
