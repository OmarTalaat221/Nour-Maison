
"use client";

import React from "react";
import BottomBg from "../../../../utils/bottomBg/BottomBg";
import TopBg from "../../../../utils/topBg/TopBg";
import HeartLine from "../../../../utils/HeartLine/HeartLine";
import { useRouter } from "next/navigation";
import Link from "next/link";

const BookTableSection = () => {

  const router = useRouter();


  return (
    <div className="  mt-0 md:mt-20  !border-b-2 !border-white relative">
      <TopBg />

      <section
        id="fixed-bg"
        className="fixed-bg section dark-background relative select-none "
      >
        <img
          loading="lazy"
          src="https://res.cloudinary.com/dhebgz7qh/image/upload/v1767443804/zexptzvrvwxbsvi8pqho_uwwxnb.jpg"
          alt="nour caffe"
          className="fixed-img"
          draggable="false"
        />
        {/* <div className='_overlay'></div> */}

        <div className="text-white relative z-20  flex flex-col gap-6 items-center justify-center ">
          <header
            style={{
              textShadow: "1px 2px 0 #493207 ",
            }}
            data-aos="fade-down"
            data-aos-delay={300}
            className=" text-4xl md:text-6xl text-center font-bold font-tangerine text-[#fff]"
          >
            We Create Delicious Memories
          </header>

          <h4
            style={{
              textShadow: "6px 4px 0 #493207 ",
            }}
            data-aos="zoom-in"
            className=" text-3xl md:text-6xl md:px-5 lg-px-0 lg:text-8xl font-semibold font-tajawal text-center w-full lg:w-[1000px] text-[#f3ae40] "
          >
            {"Pull Up A Chair. Take A Seat &  Come Join Us"
              .split("")
              .map((letter, index) => {
                return (
                  <span
                    key={index}
                    className=""
                    data-aos="fade-in"
                    data-aos-delay={index * 50}
                  >
                    {letter}
                  </span>
                );
              })}
          </h4>

          <h6
            data-aos="zoom-in"
            className=" text-lg md:text-xl    font-thin text-center "
          >
            We have awesome recipes and the most talented chefs in town!
          </h6>
          <div className="" data-aos="fade-up" data-aos-delay={400}>
            <button className="button-border-anime !w-44 md:!w-60 !h-[4rem]">
              <svg xmlns="http://www.w3.org/2000/svg">
                <rect
                  className="border-anime !w-44 md:!w-60 !h-[4rem] !stroke-[4px] !stroke-[#c16d2d]"
                  pathLength={100}
                />
              </svg>
              <Link href={"booking"} className="txt-upload !text-white no-underline hover:no-underline  text-3xl font-pacifico">
                Book A Table
              </Link>
            </button>

            {/* <HeartLine /> */}
          </div>
        </div>
        <div className="overlay"></div>
      </section>
      <BottomBg />
    </div>
  );
};

export default BookTableSection;
