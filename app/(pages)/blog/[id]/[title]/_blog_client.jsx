"use client";

import React, { useEffect, useState } from "react";
import BottomBg from "../../../../../utils/bottomBg/BottomBg";
import {
  FaEnvelope,
  FaFacebook,
  FaFolderOpen,
  FaInstagram,
  FaShare,
} from "react-icons/fa";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import handleShare from "../../../../../lib/ShareLink";
import { formatDate } from "../../../../../Hooks/dateFormats";
import { Link as ScrollLink } from "react-scroll";
import ScrollToBottomButton from "../../../../../utils/ScrollToBottomButton/ScrollToBottomButton";
import slugify, { slugFromBlogLink } from "../../../../../lib/slugify";

const BlogClient = ({ data, blogsData = [], id, title }) => {
  const router = useRouter();
  const pathname = usePathname();
  const [isClient, setIsClient] = useState(false);

  // ✅ Ensure client-side only code runs after mount
  useEffect(() => {
    setIsClient(true);
  }, []);

  console.log(data, "data");
  // ✅ Handle URL correction
  useEffect(() => {
    if (!isClient || !data?.title) return;

    try {
      const apiSlug = slugFromBlogLink(data?.link, id);
      const sluggedTitle = slugify(data?.title) || "";
      const sluggedKeywords = slugify(data?.keywords) || "";

      const validSlugs = [apiSlug, sluggedTitle, sluggedKeywords].filter(
        Boolean
      );

      if (validSlugs.length > 0 && !validSlugs.includes(title)) {
        const newSlug = apiSlug || sluggedKeywords || sluggedTitle;
        if (newSlug) {
          router.replace(`/blog/${id}/${newSlug}`);
        }
      }
    } catch (error) {
      console.error("URL correction error:", error);
    }
  }, [isClient, pathname, data, id, title, router]);

  // ✅ Handle missing data gracefully
  if (!data) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-600">Loading...</h1>
        </div>
      </div>
    );
  }

  // ✅ Safe date formatting
  const formatSafeDate = (dateString) => {
    try {
      if (!dateString) return "";
      const date = new Date(dateString);
      if (isNaN(date.getTime())) return "";
      return formatDate(date);
    } catch (error) {
      console.error("Date formatting error:", error);
      return "";
    }
  };

  // ✅ Safe share handler
  const handleShareClick = (e) => {
    e.preventDefault();
    try {
      if (typeof window !== "undefined") {
        const baseURL = window.location.origin;
        const fullURL = `${baseURL}${pathname}`;
        handleShare(fullURL);
      }
    } catch (error) {
      console.error("Share error:", error);
    }
  };

  // ✅ Filter and validate blogs data
  const validBlogsData = Array.isArray(blogsData)
    ? blogsData.filter(
      (blog) =>
        blog &&
        blog.id &&
        blog.title &&
        blog.id?.toString() !== id?.toString()
    )
    : [];

  return (
    <>
      {/* Hero Section */}
      <div className="relative h-screen w-full">
        {/* Background Image */}
        {data?.image && (
          <img
            src={data.image}
            alt={data?.title || "Blog background"}
            className="absolute inset-0 w-full h-full object-cover filter blur-0"
            loading="eager"
          />
        )}

        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50" />

        {/* Content */}
        <div className="absolute flex flex-col inset-0 gap-7 items-center justify-center p-1 md:p-0">
          {/* Title */}
          <h1 className="text-white text-5xl md:text-7xl text-center font-bold font-tangerine">
            {data?.title || "Blog Post"}
          </h1>

          {/* Description */}
          {data?.description && (
            <p className="text-white mt-4 line-clamp-1 max-w-6xl text-xl text-center font-oswald md:text-2xl leading-9 tracking-wide">
              {data.description}
            </p>
          )}

          {/* Social Icons */}
          <div className="flex items-center mt-6 gap-10 text-xl text-white">
            <a
              href="#"
              className="text-white hover:text-white"
              aria-label="Share on Facebook"
            >
              <FaFacebook className="w-8 h-8 p-1 transition hover:bg-gray-400/80 rounded-sm" />
            </a>
            <a
              href="#"
              className="text-white hover:text-white"
              aria-label="Share on Instagram"
            >
              <FaInstagram className="w-8 h-8 p-1 transition hover:bg-gray-400/80 rounded-sm" />
            </a>
            <a
              href="#"
              className="text-white hover:text-white"
              aria-label="Share via Email"
            >
              <FaEnvelope className="w-8 h-8 p-1 transition hover:bg-gray-400/80 rounded-sm" />
            </a>
            <a
              href="#"
              onClick={handleShareClick}
              className="text-white hover:text-white"
              aria-label="Share this post"
            >
              <FaShare className="w-8 h-8 p-1 transition hover:bg-gray-400/80 rounded-sm" />
            </a>
          </div>

          {/* Scroll Button */}
          <ScrollLink
            href="/"
            style={{ textDecoration: "none" }}
            to="blog"
            smooth={true}
            duration={500}
            spy={true}
            offset={-150}
            title="Scroll To Bottom"
            aria-label="Scroll to content below"
          >
            <div className="mt-8 md:mt-10">
              <ScrollToBottomButton />
            </div>
          </ScrollLink>
        </div>

        <BottomBg />
      </div>

      {/* Blog Content Section */}
      <section id="blog" className="dark:bg-gray-900">
        <div className="container px-6 py-10 mx-auto">
          <div className="lg:flex lg:-mx-6">
            {/* Main Content */}
            <div className="lg:w-[70%] lg:px-6">
              {/* Featured Image */}
              <div className="relative">
                {data?.date && (
                  <div className="tracking-wide absolute bottom-5 right-3 font-pacifico text-sm text-white bg-black/25 p-2 rounded">
                    {formatSafeDate(data.date)}
                  </div>
                )}
                {data?.image && (
                  <img
                    className="w-full rounded-xl"
                    src={data.image}
                    alt={data?.title || "Blog image"}
                    loading="lazy"
                  />
                )}
              </div>

              {/* Title and Content */}
              <div className="flex flex-col gap-4">
                <div className="flex flex-col md:flex-row items-center justify-between">
                  <h3 className="order-2 md:order-1 md:text-4xl font-lato text-softMintGreen mt-4 font-semibold leading-tight dark:text-white">
                    {data?.title || "Blog Post"}
                  </h3>
                </div>

                {/* Blog Content */}
                {data?.content && (
                  <div
                    className="prose prose-lg max-w-none"
                    dangerouslySetInnerHTML={{ __html: data.content }}
                  />
                )}



              </div>
            </div>

            {/* Sidebar - Related Posts */}
            <div className="mt-8 pb-4 flex flex-col gap-4 lg:w-[30%] lg:mt-0 lg:px-6 sticky top-[100px] overflow-auto h-[calc(100vh-100px)]">
              {validBlogsData.length > 0 ? (
                validBlogsData.map((blogItem, index) => (
                  <Link
                    href={`/blog/${blogItem.id?.toString()}/${slugify(blogItem?.keywords || blogItem?.title) || "post"}`}
                    key={blogItem.id || index}
                    className="no-underline hover:no-underline"
                  >
                    <div className="group cursor-pointer border-2 bg-dairyCream/20 border-dairyCream transition hover:translate-x-4 rounded-lg">
                      <div className="flex gap-4 min-h-[120px] rounded-lg overflow-hidden">
                        {/* Thumbnail */}
                        <div className="min-w-[100px] w-[100px]">
                          {blogItem?.image ? (
                            <img
                              src={blogItem.image}
                              className="!w-full !h-full object-cover !object-center"
                              alt={blogItem.title || "Blog thumbnail"}
                              loading="lazy"
                            />
                          ) : (
                            <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                              <span className="text-gray-400 text-xs">
                                No Image
                              </span>
                            </div>
                          )}
                        </div>

                        {/* Info */}
                        <div className="flex flex-col gap-2 justify-center pr-2">
                          {blogItem?.category && (
                            <div className="flex items-center gap-2">
                              <FaFolderOpen className="text-logoGold text-lg" />
                              <h5 className="text-sm text-logoGold font-tajawal">
                                {blogItem.category}
                              </h5>
                            </div>
                          )}
                          <h6 className="text-xl font-tajawal line-clamp-2 text-whiteGray group-hover:text-softMintGreen transition">
                            {blogItem.title || "Untitled Post"}
                          </h6>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))
              ) : (
                <div className="text-center text-gray-500 py-4">
                  <p>No related posts available</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogClient;
