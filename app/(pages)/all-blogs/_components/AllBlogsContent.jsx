// app/(whatever)/all-blogs/_components/AllBlogsContent.jsx
"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useBlogs } from "../../../../Hooks/Requests/useBlogs";

const AllBlogsContent = () => {
  const { blogs, loading, error } = useBlogs();
  const [searchTerm, setSearchTerm] = useState("");

  // ✅ Filter blogs based on search
  const filteredBlogs = blogs.filter((blog) =>
    blog.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // ✅ Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <main
      id="all-blogs"
      className="w-full relative py-20 sm:py-28 md:py-36 mt-[-80px] sm:mt-[-100px] md:mt-[-120px] z-10"
      aria-labelledby="all-blogs-heading"
    >
      {/* ✅ Header Section */}
      <header className="w-full max-w-[90%] sm:max-w-2xl md:max-w-3xl lg:max-w-4xl xl:max-w-6xl mx-auto px-3 sm:px-4 md:px-6 text-center mb-8 sm:mb-10 md:mb-14 mt-10 relative z-10">
        <p className="font-pacifico text-goldenOrange text-xl sm:text-2xl md:text-3xl lg:text-4xl mb-2 sm:mb-3">
          Nour Maison Blog
        </p>

        <h1
          id="all-blogs-heading"
          className="font-seasons text-softMintGreen text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl mb-3 sm:mb-4 md:mb-5 leading-tight tracking-wide"
        >
          All <span className="">Articles</span>
        </h1>

        <p className="font-playfair text-whiteGray text-base sm:text-lg md:text-xl leading-relaxed md:leading-loose max-w-4xl mx-auto mb-6 sm:mb-8">
          Explore our collection of articles about{" "}
          <span className="text-softMintGreen font-semibold">halal dining</span>
          ,{" "}
          <span className="text-goldenOrange font-semibold">
            special occasions
          </span>
          , and{" "}
          <span className="text-logoGold font-semibold">
            culinary experiences
          </span>{" "}
          at Nour Maison.
        </p>

        {/* ✅ Search Bar */}
        <div className="max-w-xl mx-auto">
          <div className="relative">
            <input
              type="text"
              placeholder="Search articles..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-5 sm:px-6 py-3 sm:py-4 rounded-full border-2 border-sageGreen/30 focus:border-softMintGreen focus:outline-none bg-white/80 backdrop-blur-sm text-gray-700 placeholder:text-gray-400 font-lato transition-all duration-300"
            />
            <svg
              className="absolute right-5 top-1/2 -translate-y-1/2 w-5 h-5 text-softMintGreen"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
        </div>
      </header>

      {/* ✅ Blogs Grid */}
      <section className="w-full max-w-[90%] sm:max-w-2xl md:max-w-3xl lg:max-w-4xl xl:max-w-6xl mx-auto px-3 sm:px-4 md:px-6 relative z-10">
        {loading && (
          <div className="text-center py-20">
            <div className="inline-block w-12 h-12 border-4 border-softMintGreen border-t-transparent rounded-full animate-spin"></div>
            <p className="font-nour text-whiteGray text-lg mt-4">
              Loading articles...
            </p>
          </div>
        )}

        {error && (
          <div className="text-center py-20">
            <p className="font-nour text-red-500 text-lg">{error}</p>
          </div>
        )}

        {!loading && !error && filteredBlogs.length === 0 && (
          <div className="text-center py-20">
            <p className="font-nour text-whiteGray text-lg">
              No articles found matching "{searchTerm}"
            </p>
          </div>
        )}

        {!loading && !error && filteredBlogs.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
            {filteredBlogs.map((blog, index) => (
              <article key={blog.id} className="group">
                <Link
                  href={blog.link}
                  className="block h-full bg-white/80 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-softMintGreen"
                >
                  <div className="p-5 sm:p-6 h-full flex flex-col">
                    {/* Blog ID Badge */}
                    <div className="mb-3">
                      <span className="inline-block bg-gradient-to-r from-softMintGreen to-sageGreen text-white text-xs font-oswald px-3 py-1 rounded-full">
                        #{index + 1}
                      </span>
                    </div>

                    {/* Title */}
                    <h2 className="font-tajawal text-softMintGreen group-hover:text-goldenOrange text-lg  mb-3 leading-snug transition-colors duration-300 line-clamp-3 flex-1">
                      {blog.title}
                    </h2>

                    {/* Read More Link */}
                    <div className="flex items-center gap-2 text-logoGold group-hover:text-goldenOrange transition-colors duration-300">
                      <span className="font-oswald text-sm uppercase tracking-wider">
                        Read Article
                      </span>
                      <svg
                        className="w-4 h-4 transform group-hover:translate-x-2 transition-transform duration-300"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </svg>
                    </div>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        )}

        {/* ✅ Results Count */}
        {!loading && !error && filteredBlogs.length > 0 && (
          <div className="text-center mt-10 sm:mt-12 md:mt-16">
            <p className="font-nour text-whiteGray text-sm sm:text-base">
              Showing{" "}
              <span className="text-softMintGreen font-semibold">
                {filteredBlogs.length}
              </span>{" "}
              of{" "}
              <span className="text-goldenOrange font-semibold">
                {blogs.length}
              </span>{" "}
              articles
            </p>
          </div>
        )}
      </section>
    </main>
  );
};

export default AllBlogsContent;
