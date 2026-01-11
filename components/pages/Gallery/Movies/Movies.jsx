
"use client"

import React, {useEffect, useRef} from "react";
import {motion} from "framer-motion";
import "./style.scss";
import {FaImages} from "react-icons/fa";
import {IoVideocam} from "react-icons/io5";
import { detectMediaType } from "../../../../lib/functions";


const Movie = ({item}) => {
  useEffect(() => {
    console.log("item", item);
  }, [item]);

  const videoRef = useRef(null);

  const handleMouseEnter = () => videoRef.current?.play();
  const handleMouseLeave = () => {
    
    videoRef.current?.pause();
    if (videoRef.current) {
      videoRef.current.currentTime = 0; 
    }
  };
  return (
    <motion.div
      href={item?.media_url}
      data-fancybox='gallery'
      layout
      animate={{opacity: 1}}
      initial={{opacity: 0}}
      exit={{opactiy: 0}}
      className='relative w-full h-[240px] overflow-hidden rounded-xl cursor-pointer'
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {detectMediaType(item?.media_url) == "image" ? (
        <motion.img
          whileHover={{scale: 1.1}}
          src={item.media_url}
          className='w-full h-full object-cover  '
          // alt={item.title}
        />
      ) : (
        <motion.video
          src={item?.media_url}
          loop
          ref={videoRef}

          // playsInline
          // autoPlay
          whileHover={{scale: 1.2}}
          muted
          initial={{opacity: 0}}
          animate={{opacity: 1}}
          // onMouseMove={}
          transition={{duration: 1}}
          className='w-full h-full object-cover  '
        />
      )}

      <div className='absolute top-3 left-3  text-white'>
        {detectMediaType(item.media_url) === "image" ? (
          <FaImages className='text-xl' />
        ) : (
          <IoVideocam className='text-xl' />
        )}
      </div>
    </motion.div>
  );
};

export default Movie;

// const Movie = ({ movie }) => {
//   return (
//     <motion.div
//       layout
//       animate={{ opacity: 1 }}
//       initial={{ opacity: 0 }}
//       exit={{ opactiy: 0 }}
//     >
//       <img
//         src={"https://res.cloudinary.com/dhebgz7qh/image/upload/v1767529826/Jambon-Fromage_Croissant_tv5cmy.jpg"}
//         // alt={movie.title}
//       />
//       {/* <h2>{movie.title}</h2> */}
//     </motion.div>
//   );
// };

// export default Movie;
