"use client";

import React, { memo, useMemo } from "react";
import cx from "classnames";
import Link from "next/link";

const InstagramFeedCard = ({ data = {}, index = 0, ...props }) => {
  const text = data?.text || "";
  const link = data?.link || "#";
  const imageSrc = data?.mediaUrl || "";

  const hasText = useMemo(() => Boolean(String(text).trim()), [text]);

  return (
    <Link
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      prefetch={false}
      className={cx(
        "group cursor-pointer text-left w-[278px] md:w-[330px]",
        "rounded-xl overflow-hidden outline-none",
        "focus-visible:ring-2 focus-visible:ring-offset-2 hover:!pb-[50px] focus-visible:ring-black/30 transition-all duration-500",
        index % 2 === 0 && "pt-[100px] hover:pt-[50px]",
      )}
      aria-label={text || "Open Instagram post"}
      {...props}
    >
      <div className="relative shadow-2xl h-[350px] md:h-[530px] rounded-xl overflow-hidden bg-gray-100">
        <img
          loading="lazy"
          decoding="async"
          fetchPriority="low"
          src={imageSrc}
          alt={text || "Instagram post"}
          title={text}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.06]"
        />

        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />

        {hasText && (
          <div className="absolute bottom-0 left-0 right-0">
            <div className="bg-gradient-to-t from-black via-black/75 to-transparent px-4">
              <div className="py-3 max-h-[84px] group-hover:max-h-[260px] overflow-hidden transition-[max-height] duration-300">
                <p
                  className={cx(
                    "text-white text-[13px] md:text-[14px] leading-5",
                    "line-clamp-3 group-hover:line-clamp-none",
                    "whitespace-normal",
                  )}
                  aria-label={text}
                >
                  {text}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </Link>
  );
};

export default memo(InstagramFeedCard);
