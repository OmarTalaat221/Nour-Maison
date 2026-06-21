"use client";

import React, { memo, useEffect, useState, useCallback } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import SectionTitle from "../../../SectionTitle/SectionTitle";
import BranchesImage from "../../../../utils/BranchesImage/BranchesImage";

// ✅ Lazy load BlogCard (مش هيتحمل إلا لما السكشن يظهر)
const BlogCard = dynamic(
    () => import("../../../Cards/blogCard/blogCard"),
    {
        ssr: false,
        loading: () => (
            <div className="bg-white/50 h-[500px] rounded-xl animate-pulse" />
        ),
    }
);

const API_URL = "https://camp-coding.tech/nour_maison/user/get_latest_blog.php";

// ✅ Slugify helper للـ blog URLs
const slugify = (text) => {
    if (!text) return "";
    return String(text)
        .toLowerCase()
        .trim()
        .replace(/[^\w\s-]/g, "")
        .replace(/[\s_-]+/g, "-")
        .replace(/^-+|-+$/g, "");
};

const LatestArticles = () => {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    // ✅ Fetch مع caching + error handling
    const fetchArticles = useCallback(async () => {
        try {
            const controller = new AbortController();
            const timeoutId = setTimeout(() => controller.abort(), 8000);

            const response = await fetch(API_URL, {
                signal: controller.signal,
                next: { revalidate: 3600 }, // cache لمدة ساعة
            });

            clearTimeout(timeoutId);

            if (!response.ok) {
                throw new Error("Failed to fetch articles");
            }

            const data = await response.json();

            if (data?.status === "success" && Array.isArray(data?.message)) {
                // ✅ خد 3 articles بس
                setArticles(data.message.slice(0, 3));
            } else {
                throw new Error("Invalid data format");
            }
        } catch (err) {
            console.error("LatestArticles fetch error:", err);
            setError(true);
        } finally {
            setLoading(false);
        }
    }, []);

    // ✅ استنى الـ idle عشان متأثرش على الـ initial load
    useEffect(() => {
        if (typeof window === "undefined") return;

        const schedule =
            window.requestIdleCallback || ((cb) => window.setTimeout(cb, 1));

        const handle = schedule(() => fetchArticles(), { timeout: 3000 });

        return () => {
            if (window.cancelIdleCallback && typeof handle === "number") {
                try {
                    window.cancelIdleCallback(handle);
                } catch (e) { }
            }
        };
    }, [fetchArticles]);

    // ✅ متعرضش حاجة لو فيه error
    if (error) return null;

    return (
        <section
            className="relative py-12 sm:py-16 md:py-20 overflow-hidden"
            aria-labelledby="latest-articles-heading"
        >
            {/* ✅ Decorative branches */}
            <div className="opacity-30 md:opacity-50">
                <BranchesImage
                    variant="top-right"
                    className="hidden md:block"
                />
                <BranchesImage
                    variant="top-left"
                    className="hidden md:block top-6"
                />
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* ✅ Section Header */}
                <div className="text-center mb-8 sm:mb-12 md:mb-16">


                    <SectionTitle
                        as="h2"
                        id="latest-articles-heading"
                        className="!text-softMintGreen"
                    >
                        Latest Articles & Stories
                    </SectionTitle>

                    <p className="text-gray-600 mt-4 text-sm sm:text-base md:text-lg max-w-2xl mx-auto font-lato">
                        Discover the latest stories, tips, and insights from our café in
                        Milton Keynes — from food culture to lifestyle inspiration.
                    </p>
                </div>

                {/* ✅ Articles Grid */}
                {loading ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                        {[1, 2, 3].map((i) => (
                            <div
                                key={i}
                                className="bg-white/50 h-[500px] rounded-xl animate-pulse"
                            />
                        ))}
                    </div>
                ) : articles.length > 0 ? (
                    <>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                            {articles.map((article, index) => {
                                const slug = slugify(article.keywords);
                                const articleUrl = `/blog/${article.id}/${slug}`;

                                return (
                                    <article
                                        key={article.id}
                                        className="h-full"
                                    >
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

                        {/* ✅ View All Articles CTA */}
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

export default memo(LatestArticles);