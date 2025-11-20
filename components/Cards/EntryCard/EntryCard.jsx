import React from "react";
import "./style.scss";
import {FaFacebook, FaFacebookF} from "react-icons/fa";
import {FaSquareFacebook} from "react-icons/fa6";
import {BiLogoLinkedin} from "react-icons/bi";
import {RiTwitterXFill} from "react-icons/ri";
import {motion} from "framer-motion";

const EntryCard = ({item, index}) => {
  return (
    <motion.div
      layout
      className='entryCard'
      data-aos='flip-up'
      data-aos-delay={index * 100}
    >
      <a className='first-content'>
        <img loading="lazy" src={item?.image} alt='' />
      </a>
    </motion.div>
  );
};

export default EntryCard;
