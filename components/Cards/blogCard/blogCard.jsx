"use client";

import React, { memo } from "react";
import { formatDate } from "../../../Hooks/dateFormats";
import BranchesImage from "./../../../utils/BranchesImage/BranchesImage";

const BlogCard = ({ post }) => {
  // ✅ Format date بأمان
  const formattedDate = (() => {
    try {
      return formatDate(new Date(post?.date));
    } catch (e) {
      return null;
    }
  })();

  return (
    <div className="bg-white h-full shadow-lg rounded-xl overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl cursor-pointer">
      <div className="relative">
        <BranchesImage className={"opacity-40"} />

        <img
          src={post.image}
          alt={post.title}
          className="w-full !h-[300px] relative z-20 p-3 rounded-lg object-contain"
          loading="lazy"
          decoding="async"
          width={400}
          height={300}
        />
      </div>

      <div className="p-6">
        <div className="text-sm text-gray-500 flex flex-wrap items-center gap-2 mb-2">
          {formattedDate && (
            <time dateTime={post?.date}>{formattedDate}</time>
          )}

          {post.category && (
            <span className="bg-gray-100 px-2 py-0.5 rounded-full text-xs font-semibold text-logoGold">
              {post.category}
            </span>
          )}
        </div>

        <h3 className="font-semibold text-softMintGreen mb-2 leading-snug font-oswald text-xl line-clamp-2">
          {post.title}
        </h3>

        <p className="text-gray-600 text-lg line-clamp-3 mb-4">
          {post.description}
        </p>
      </div>
    </div>
  );
};

export default memo(BlogCard);