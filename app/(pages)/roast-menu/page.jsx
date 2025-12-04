"use client";

import React from "react";
import PagesBanner from "../../../components/PagesBanner/PagesBanner";
import BottomBg from "./../../../utils/bottomBg/BottomBg";

const KidsMenu = () => {
  return (
    <div>
      <PagesBanner
        bottomBg={false}
        images={[
          "/images/download (1).jfif",
          "/images/download (2).jfif",
          "/images/download (3).jfif",
          "/images/download (4).jfif",
        ]}
        slogan={
          <div className=" text-lg md:text-2xl xl:text-3xl">
            A Sunday ritual where Arabic spice meets French finesse to reimagine
            the classic British roast. Halal-friendly, <br /> locally sourced,
            and crafted with soul. Book your table now.
          </div>
        }
        title={"Experience our new Roast Dinner Menu"}
        scrollTo={"kids-menu"}
      />
      <div
        className="w-full  relative py-36  mt-[-120px] z-10"
        style={{
          background: "url('/images/rd bg paper texture.webp')",
          backgroundSize: "cover",
          backgroundPosition: "top",
          backgroundRepeat: "no-repeat",
        }}
      >
        <BottomBg />

        <img
          src="images/rc.webp"
          className="w-full   max-w-2xl  xl:max-w-4xl  mx-auto  rounded-3xl relatvie "
          alt=""
        />
      </div>
    </div>
  );
};

export default KidsMenu;
