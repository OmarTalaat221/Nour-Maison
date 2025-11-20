"use client";

import React from "react";
import cx from "classnames";

const Instagram_feed_card = ({ data, index, ...props }) => {
  return (
    <div
      onClick={() => window.open(data.link, "_blank")}
      className={cx("cursor-pointer !rounded-xl !overflow-hidden", {
        "pt-[100px]": index % 2 === 0,
      })}
    >
      <div className="relative group w-[278px] md:w-[360px] !overflow-hidden !rounded-xl h-[350px] md:h-[493px]">
        <div className="flex flex-col overflow-hidden !rounded-xl !transition h-full justify-center items-center">
          <img
            fetchPriority="high"
            loading="lazy"
            src={data.mediaUrl}
            
            alt={data.text}
            aria-label={data?.text}
            title={data?.text}
            className="w-full  group-hover:scale-[1.1] h-full object-cover !rounded-xl transition"
          />
        </div>
        <div className="absolute w-full h-fit !bottom-0 text-white bg-gradient-to-t from-black via-gray-800 to-transparent bg-opacity-50 flex flex-col datas-start justify-end opacity-1 group-hover:opacity-100 transition-opacity duration-300 text-[16px] p-5 text-start font-sans">
          {data?.text}
        </div>
      </div>
    </div>
  );
};

export default Instagram_feed_card;
