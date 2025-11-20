import React from "react";
import "./style.scss";
import { FaFacebook, FaFacebookF } from "react-icons/fa";
import { FaSquareFacebook } from "react-icons/fa6";
import { BiLogoLinkedin } from "react-icons/bi";
import { RiTwitterXFill } from "react-icons/ri";
import Image from "next/image";

const ChefCard = ({ item }) => {
  return (
    <div className="chef_card !w-full ">
      <div className="first-content relative">
        <Image
          width={200}
          height={300}
          loading="lazy"
          src={item?.image}
          alt={item.name}
          className="object-top"
        />
        <div className=" bottom-chef-data absolute w-full text-7xl font-tangerine text-center h-fit !bottom-0 text-white bg-gradient-to-t from-black via-gray-800 to-transparent bg-opacity-50 flex flex-col datas-start justify-end opacity-1 group-hover:opacity-100 transition-opacity duration-300 text-[16px] p-5  ">
          <p className=" text-7xl">{item.name}</p>
          <p className="font-oswald">{item.position}</p>
        </div>
      </div>
      <div
        className="second-content flex   relative"
        style={{
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* <div className='overlay opacity-50 h-full'></div> */}
        <div className="relative p-10 h-full mt-auto flex flex-col justify-between text-white  w-full">
          <div className="flex h-full items-center justify-center flex-col gap-3">
            <h2
              style={{
                textShadow: "1px 1px 5px #955400",
              }}
              className=" font-tangerine !text-center text-7xl text-white "
            >
              {item?.name}
            </h2>

            <h4 className="text-center font-oswald text-3xl">
              {item?.position}
            </h4>
          </div>
          {/* <div className='socials flex items-center justify-between text-3xl mt-auto'>
            <div className='text-white'>
              <FaFacebookF />
            </div>
            <div className='text-white'>
              <BiLogoLinkedin />
            </div>
            <div className='text-white'>
              <RiTwitterXFill />
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default ChefCard;
