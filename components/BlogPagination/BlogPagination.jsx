"use client";

import React from "react";
import Link from "next/link";
import "./BlogPagination.css";

const BlogPagination = ({ currentPage, totalPages, basePath = "/blog" }) => {
  const getPageNumbers = () => {
    const pages = [];
    const maxVisible = 5;

    if (totalPages <= maxVisible) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      pages.push(1);

      if (currentPage > 3) {
        pages.push("...");
      }

      const start = Math.max(2, currentPage - 1);
      const end = Math.min(totalPages - 1, currentPage + 1);

      for (let i = start; i <= end; i++) {
        if (!pages.includes(i)) {
          pages.push(i);
        }
      }

      if (currentPage < totalPages - 2) {
        pages.push("...");
      }

      if (!pages.includes(totalPages)) {
        pages.push(totalPages);
      }
    }

    return pages;
  };

  const getPageUrl = (page) => {
    if (page <= 1) return basePath;
    return `${basePath}?page=${page}`;
  };

  const pageNumbers = getPageNumbers();
  const prevHref =
    currentPage === 1 ? getPageUrl(1) : getPageUrl(currentPage - 1);
  const nextHref =
    currentPage === totalPages
      ? getPageUrl(totalPages)
      : getPageUrl(currentPage + 1);

  return (
    <nav
      className="flex items-center justify-center gap-2 my-8"
      aria-label="Blog pagination"
    >
      {/* Previous */}
      <Link
        href={prevHref}
        className={`pagination-btn pagination-arrow ${
          currentPage === 1 ? "disabled" : ""
        }`}
        aria-disabled={currentPage === 1}
        tabIndex={currentPage === 1 ? -1 : 0}
        aria-label="Previous page"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="15 18 9 12 15 6"></polyline>
        </svg>
      </Link>

      {/* Numbers */}
      {pageNumbers.map((page, index) => {
        if (page === "...") {
          return (
            <span key={`ellipsis-${index}`} className="pagination-ellipsis">
              ...
            </span>
          );
        }

        return (
          <Link
            key={page}
            href={getPageUrl(page)}
            className={`pagination-btn ${currentPage === page ? "active" : ""}`}
            aria-current={currentPage === page ? "page" : undefined}
            aria-label={`Page ${page}`}
          >
            {page}
          </Link>
        );
      })}

      {/* Next */}
      <Link
        href={nextHref}
        className={`pagination-btn pagination-arrow ${
          currentPage === totalPages ? "disabled" : ""
        }`}
        aria-disabled={currentPage === totalPages}
        tabIndex={currentPage === totalPages ? -1 : 0}
        aria-label="Next page"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="9 18 15 12 9 6"></polyline>
        </svg>
      </Link>
    </nav>
  );
};

export default BlogPagination;
