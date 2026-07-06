"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import { memo, useCallback, useEffect, useState } from "react";
import SectionTitle from "../../../../components/SectionTitle/SectionTitle";
import BranchesImage from "../../../../utils/BranchesImage/BranchesImage";

const BlogCard = dynamic(
  () => import("../../../../components/Cards/blogCard/blogCard"),
  {
    ssr: false,
    loading: () => (
      <div className="bg-white/50 h-[500px] rounded-xl animate-pulse" />
    ),
  },
);

const API_URL =
  "https://camp-coding.tech/nour_maison/user/seo_blogs/related_blogs.php";

const slugify = (text) => {
  if (!text) return "";

  return String(text)
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/[\s_-]+/g, "-")
    .replace(/^-+|-+$/g, "");
};

const RelatedSeoBlogs = ({
  pageNumber = 2,
  pageSlug = "halal-restaurant-milton-keynes",
  title = "Related Halal Dining Articles",
  description = "Explore more stories and guides related to halal dining, brunch, family meals, and the Nour Maison experience in Milton Keynes.",
  limit = 6,
}) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const fetchArticles = useCallback(async () => {
    const controller = new AbortController();
    const timeoutId = window.setTimeout(() => controller.abort(), 8000);

    try {
      const response = await fetch(API_URL, {
        method: "POST",
        signal: controller.signal,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          page_number: pageNumber,
          page_slug: pageSlug,
          limit,
        }),
      });

      window.clearTimeout(timeoutId);

      if (!response.ok) {
        throw new Error("Failed to fetch related articles");
      }

      const data = await response.json();

      if (data?.status === "success" && Array.isArray(data?.message)) {
        setArticles(data.message.slice(0, limit));
      } else {
        throw new Error("Invalid related articles format");
      }
    } catch (err) {
      console.error("RelatedSeoBlogs fetch error:", err);
      setError(true);
    } finally {
      setLoading(false);
    }
  }, [limit, pageNumber, pageSlug]);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const schedule =
      window.requestIdleCallback ||
      ((callback) => window.setTimeout(callback, 1));

    const handle = schedule(() => fetchArticles(), { timeout: 3000 });

    return () => {
      if (window.cancelIdleCallback && typeof handle === "number") {
        window.cancelIdleCallback(handle);
      }
    };
  }, [fetchArticles]);

  if (error) return null;

  return (
    <section
      className="relative py-12 sm:py-16 md:py-20 overflow-hidden"
      aria-labelledby="related-seo-blogs-heading"
    >
      <div className="opacity-30 md:opacity-50">
        <BranchesImage variant="top-right" className="hidden md:block" />
        <BranchesImage variant="top-left" className="hidden md:block top-6" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <SectionTitle
            as="h2"
            id="related-seo-blogs-heading"
            className="!text-softMintGreen"
          >
            {title}
          </SectionTitle>

          <p className="text-gray-600 mt-4 text-sm sm:text-base md:text-lg max-w-2xl mx-auto font-lato">
            {description}
          </p>
        </div>

        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="bg-white/50 h-[500px] rounded-xl animate-pulse"
              />
            ))}
          </div>
        ) : articles.length > 0 ? (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {articles.map((article) => {
                const slugSource = article.keywords || article.title;
                const slug = slugify(slugSource);
                const articleUrl = `/blog/${article.id}/${slug}`;

                return (
                  <article key={article.id} className="h-full">
                    <Link
                      href={articleUrl}
                      prefetch={false}
                      aria-label={`Read article: ${article.title}`}
                      className="block h-full no-underline"
                    >
                      <BlogCard post={article} />
                    </Link>
                  </article>
                );
              })}
            </div>

            <div className="text-center mt-10 md:mt-14">
              <Link
                href="/all-blogs"
                prefetch={false}
                className="inline-block bg-logoGold hover:bg-goldenOrange text-white hover:text-white hover:no-underline font-seasons text-base sm:text-lg md:text-xl px-8 sm:px-12 py-3 sm:py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                aria-label="View all blog articles"
              >
                View All Articles
              </Link>
            </div>
          </>
        ) : null}
      </div>
    </section>
  );
};

export default memo(RelatedSeoBlogs);
