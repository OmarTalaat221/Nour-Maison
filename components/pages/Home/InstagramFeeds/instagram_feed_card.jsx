"use client";

import React, { useMemo } from "react";
import cx from "classnames";

const Instagram_feed_card = ({ data = {}, index = 0, ...props }) => {
  const hasText = useMemo(() => Boolean(String(data?.text || "").trim()), [data?.text]);

  const handleOpen = () => {
    if (!data?.link) return;
    window.open(data.link, "_blank", "noopener,noreferrer");
  };

  return (
    <button
      type="button"
      onClick={handleOpen}
      className={cx(
          
        "    group cursor-pointer text-left w-[278px] md:w-[330px]",
        "rounded-xl overflow-hidden outline-none",
        "focus-visible:ring-2 focus-visible:ring-offset-2 hover:!pb-[50px] focus-visible:ring-black/30 transition-all duration-500",
        index % 2 === 0 && "pt-[100px] hover:pt-[50px]" ,
      )}
      {...props}
    >
      <div className="relative shadow-2xl h-[350px] md:h-[530px] rounded-xl overflow-hidden bg-gray-100">
        {/* Image */}
        <img
          fetchPriority="high"
          loading="lazy"
          src={data?.mediaUrl}
          alt={data?.text || "Instagram post"}
          title={data?.text}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.06]"
        />

        {/* Soft hover overlay */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />

        {/* Bottom caption: 3 lines by default, full on hover */}
        {hasText && (
          <div className="absolute bottom-0 left-0 right-0">
            <div className="bg-gradient-to-t from-black via-black/75 to-transparent px-4">
              {/* height wrapper: small by default, expands on hover */}
              <div className="py-3 max-h-[84px] group-hover:max-h-[260px] overflow-hidden transition-[max-height] duration-300">
                <p
                  className={cx(
                    "text-white text-[13px] md:text-[14px] leading-5",
                    "line-clamp-3 group-hover:line-clamp-none",
                    "whitespace-normal"
                  )}
                  aria-label={data?.text}
                >
                  {data?.text}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </button>
  );
};

export default Instagram_feed_card;
