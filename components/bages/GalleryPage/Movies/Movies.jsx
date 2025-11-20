import React, {useEffect, useRef} from "react";
import {motion} from "framer-motion";
import "./style.scss";
import {detectMediaType} from "./../../../../instances/detectMediaType";
import {FaImages} from "react-icons/fa";
import {IoVideocam} from "react-icons/io5";

const Movie = ({item}) => {


  const videoRef = useRef(null);

  const handleMouseEnter = () => videoRef.current?.play();
  const handleMouseLeave = () => {
    videoRef.current?.pause();
    videoRef.current.currentTime = 0; 
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
          // src='https://res.cloudinary.com/dbzn1y8rt/video/upload/v1738496477/ofln6neksu02dynedeax.mp4' // Replace with your video link
          // /
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
//         src={"https://res.cloudinary.com/dbzn1y8rt/image/upload/f_auto,q_auto/v1738503818/tmjcpxo74oepftikcfle.png"}
//         // alt={movie.title}
//       />
//       {/* <h2>{movie.title}</h2> */}
//     </motion.div>
//   );
// };

// export default Movie;
