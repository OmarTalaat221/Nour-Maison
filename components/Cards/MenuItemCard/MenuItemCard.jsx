import { motion } from "framer-motion";
import React, { Fragment, useEffect, useRef, useState } from "react";
import { Tag } from "rsuite";
import styled, { css, keyframes } from "styled-components";
import FancyboxElement from "../../../utils/FancyBox/FancyBox";
import Tilt from "react-parallax-tilt";

const MenuItemCard = ({ idx = 1, data: item, categoryName = "" }) => {
  const [isCardOpened, setIsCardOpened] = useState(false);
  const [cardDimensions, setCardDimensions] = useState({ width: 0, height: 0 });

  return (
    <Fragment>
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
              "/images/nour-gold-logo.webp"
            }
            alt={`${item.name}${categoryName ? ` - ${categoryName} at Nour Maison Milton Keynes` : ""}`}
            loading="lazy"
            decoding="async"
            className="rounded-2xl object-cover  w-[120px] h-[120px] md:w-full md:h-full select-none "
          />
          <div className="flex flex-1 items-center justify-center">
            {/* ✅ تحول من h5 إلى span - مش heading */}
            <span className=" md:hidden  text-white font-normal  text-5xl font-pacifico block">
              {" "}
              &#163;{item?.price}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 text-left">
          <div className="flex flex-col gap-2">
            {/* ✅ تحول من h5 إلى span (price مش heading) */}
            <span className=" hidden md:block text-white font-normal text-end text-2xl font-pacifico ">
              {" "}
              &#163;{item?.price}
            </span>

            {/* ✅ خلي h3 (dish name) - keyword-rich */}
            <h3 className="text-xl md:text-xl font-semibold text-white font-inter">
              {item?.name}
            </h3>
          </div>

          <p className=" mt-2  text-[white] text-[16px] leading-5 font-tajawal">
            {item?.description}
          </p>
        </div>
      </Tilt>
    </Fragment>
  );
};

export default MenuItemCard;