
"use client"
import React from "react";
import {motion} from "framer-motion";
import { useRouter } from "next/router";

const GiftCard = ({item, onClick}) => {


  // const router = useRouter();


  return (
    <motion.div
      onClick={onClick ? onClick: null}
      whileHover={{y: "-10px"}}
      className='gift_card w-full rounded-lg md:rounded-xl cursor-pointer  overflow-hidden   '
    >
      <motion.img
        fetchPriority='high'
        loading='lazy'
        whileHover={{scale: 1.1}}
        className='select-none bg-paleSpringGreen  h-full w-full rounded-lg md:rounded-xl'
        draggable='false'
        onContextMenu={(e) => e.preventDefault()}
        src={item.image}
        alt=''
      />
    </motion.div>
  );
};

export default GiftCard;
