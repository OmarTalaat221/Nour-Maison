import { motion } from "framer-motion";
import React, { Fragment, useEffect, useRef, useState } from "react";
import { Tag } from "rsuite";
import styled, { css, keyframes } from "styled-components";
import FancyboxElement from "../../../utils/FancyBox/FancyBox";
import Tilt from "react-parallax-tilt";

const MenuItemCard = ({ idx = 1, data: item }) => {
  const [isCardOpened, setIsCardOpened] = useState(false);
  const [cardDimensions, setCardDimensions] = useState({ width: 0, height: 0 });

  return (
    // <Fragment>
    //   <div className='flex gap-3 bg-white flex-col md:flex-row items-center p-2 shadow-xl rounded-xl'>
    //     <FancyboxElement
    //       options={{
    //         Carousel: {
    //           infinite: false,
    //         },
    //       }}
    //     >
    //       <div
    //         data-fancybox='gallery'
    //         href={
    //           "https://res.cloudinary.com/dbzn1y8rt/image/upload/f_auto,q_auto/v1738503818/tmjcpxo74oepftikcfle.png"
    //         }
    //         onClick={() => setIsCardOpened(true)}
    //         layout="true"
    //         className='min-w-[100px] max-w-[100px] h-[100px] overflow-hidden rounded-lg '
    //       >
    //         <img
    //           loading="lazy"
    //           className='w-full cursor-pointer hover:scale-125 hover:skew-x-6 transition h-full object-cover'
    //           src='https://res.cloudinary.com/dbzn1y8rt/image/upload/f_auto,q_auto/v1738503818/tmjcpxo74oepftikcfle.png'
    //           alt=''
    //         />
    //       </div>
    //     </FancyboxElement>
    //     <div className='flex flex-col justify-between w-full'>
    //       <div className='flex flex-col md:flex-row w-full justify-between items-center pb-3'>
    //         <h3 className='text-[17px] text-center md:text-start font-semibold text-softMintGreen font-inter'>
    //           {item?.name}
    //         </h3>
    //         <div>
    //           <span className='text-xl text-goldenOrange italic font-bold font-tajawal '>
    //             &#163;{item?.price}
    //           </span>
    //         </div>
    //       </div>
    //       <div className='flex items-center pb-2  gap-y-2 gap-x-2  flex-wrap overflow-auto'>
    //         {item.description &&
    //           item?.description?.split(",").map((item, index) => (
    //             <Tag key={index} color='green ' className='!mx-0 whitespace-nowrap'>
    //               {item}
    //             </Tag>
    //           ))}
    //       </div>
    //       {/* <p className='text-gray-500  w-full'>{item.description}</p> */}
    //     </div>
    //   </div>
    // </Fragment>
    <Fragment>
      {/* <img src="https://res.cloudinary.com/dbzn1y8rt/image/upload/v1744820868/ncqfwszizvfgwb2saajx.png" className="w-full h-8" alt="" /> */}
      <Tilt
        perspective={5000}
        glareEnable={true}
        glareMaxOpacity={0.45}
        scale={1.02}
        className="max-w-3xl overflow-hidden mx-auto bg-ivory h-full p-6 rounded-3xl flex flex-col md:flex-row items-center gap-6 shadow-lg bg-white first-letter:
       w-full bg-red-0  bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 border border-gray-100
    "
      >
        {/* Image */}
        <div className="md:flex-shrink-0 flex justify-between items-center   w-full h-full  md:w-1/3">
          <img
            draggable={"false"}
            src={
              item.image ||
              "https://res.cloudinary.com/dbzn1y8rt/image/upload/f_auto,q_auto/v1737983251/y3replc9wmlnvwb7kjvo.png"
            }
            alt={item.name}
            className="rounded-2xl object-cover  w-[120px] h-[120px] md:w-full md:h-full select-none "
          />
          <div className="flex flex-1 items-center justify-center">

          <h5 className=" md:hidden  text-white font-normal  text-5xl font-pacifico ">
            {" "}
            &#163;{item?.price}
          </h5>
          </div>
        </div>
        {/* Content */}
        <div className="flex-1 text-left">
          <div className="flex flex-col gap-2">
            <h5 className=" hidden md:block text-white font-normal text-end text-2xl font-pacifico ">
              {" "}
              &#163;{item?.price}
            </h5>
            <h3 className="text-xl md:text-xl font-semibold text-white font-inter">
              {item?.name}
            </h3>
          </div>
          <p className=" mt-2  text-[white] text-[16px] leading-5 font-tajawal">
            {item?.description}
          </p>
          {/* Tags */}
          {/* <div className="flex flex-wrap gap-2 mt-4">
      <span className="bg-green-100 text-green-800 text-sm font-medium px-3 py-1 rounded-full">
        Turkey Ham
      </span>
      <span className="bg-yellow-100 text-yellow-800 text-sm font-medium px-3 py-1 rounded-full">
        Dijon Mustard
      </span>
      <span className="bg-amber-100 text-amber-800 text-sm font-medium px-3 py-1 rounded-full">
        Swiss Cheese
      </span>
    </div> */}
        </div>
      </Tilt>
      {/* <img src="https://res.cloudinary.com/dbzn1y8rt/image/upload/v1744820868/ncqfwszizvfgwb2saajx.png" className="w-full h-8 rotate-180" alt="" /> */}
    </Fragment>
  );
};

export default MenuItemCard;
