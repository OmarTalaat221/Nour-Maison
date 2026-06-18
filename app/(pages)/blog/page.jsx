import React from "react";
import BlogCard from "./../../../components/Cards/blogCard/blogCard";
import "./style.css";
import PagesBanner from "../../../components/PagesBanner/PagesBanner";
import Link from "next/link";
import slugify from "../../../lib/slugify";
import BlogPagination from "../../../components/BlogPagination/BlogPagination";
import { getPageKeywords } from "../../../lib/seo/keywords";

export const metadata = {
  title: "NOUR MAISON - BLOGS",
  description:
    "Discover inspiring articles, tips, and insights on lifestyle, design, and more at NOUR MAISON Blogs. Explore fresh ideas to elevate your everyday living.",

  keywords: getPageKeywords("blog"),

  alternates: {
    canonical: "https://www.nourmaison.co.uk/blog",
  },
};

const POSTS_PER_PAGE = 9;

const Page = async ({ searchParams }) => {
  const resolvedSearchParams = await searchParams;
  const pageParam = parseInt(resolvedSearchParams?.page || "1", 10);
  const currentPage = !isNaN(pageParam) && pageParam > 0 ? pageParam : 1;

  const res = await fetch(
    "https://camp-coding.tech/nour_maison/user/get_blogs.php",
    {
      next: { revalidate: 60 },
    }
  );

  const data = await res.json();
  const allPosts = data?.message || [];

  const totalPosts = allPosts.length;
  const totalPages = Math.max(1, Math.ceil(totalPosts / POSTS_PER_PAGE));
  const safeCurrentPage = Math.min(currentPage, totalPages);

  const startIndex = (safeCurrentPage - 1) * POSTS_PER_PAGE;
  const endIndex = startIndex + POSTS_PER_PAGE;
  const paginatedPosts = allPosts.slice(startIndex, endIndex);

  return (
    <>
      <PagesBanner
        title={"Blogs"}
        slogan={"Nour Maison Moments"}
        scrollTo={"blogs"}
        images={[
          "/videos/booking-home-about.webm",
        ]}
      />

      <div
        id="blogs"
        className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 !mb-10 !mt-20"
      >
        {paginatedPosts.length > 0 ? (
          paginatedPosts.map((post) => (
            <Link
              href={`/blog/${post.id.toString()}/${slugify(
                post?.keywords || post?.title
              )}`}
              className="no-underline hover:no-underline"
              key={post.id}
            >
              <BlogCard post={post} />
            </Link>
          ))
        ) : (
          <div className="col-span-full text-center py-10">
            <p className="text-lg text-gray-500 font-oswald uppercase tracking-wide">
              No blogs found.
            </p>
          </div>
        )}
      </div>

      {totalPosts > 0 && (
        <div className="flex items-center justify-center mb-4">
          <p className="text-sm text-gray-500 font-oswald tracking-wide uppercase">
            Showing {startIndex + 1} - {Math.min(endIndex, totalPosts)} of{" "}
            {totalPosts} articles
          </p>
        </div>
      )}

      {totalPages > 1 && (
        <BlogPagination
          currentPage={safeCurrentPage}
          totalPages={totalPages}
          basePath="/blog"
        />
      )}

      <div className="flex items-center justify-center gap-3 sm:gap-4 mt-5 sm:mt-6 md:mt-8 mb-10">
        <Link
          href="/all-blogs"
          className="shimmer-btn no-underline inline-block bg-softMintGreen hover:bg-sageGreen text-white hover:text-white hover:no-underline font-oswald uppercase tracking-wider text-sm sm:text-base md:text-lg px-8 sm:px-12 py-3 sm:py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          aria-label="View all blog articles at Nour Maison - Halal dining, lifestyle and inspiration"
          title="Explore All Nour Maison Blog Articles"
        >
          View All Blogs
        </Link>
      </div>
    </>
  );
};

export default Page;
