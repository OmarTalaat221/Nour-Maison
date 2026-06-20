"use client";

import { useEffect } from "react";

const API_URL = "https://camp-coding.tech/nour_maison/user/get_latest_blog.php";

// ✅ Cache في memory عشان نستخدمه في الـ component
let articlesCache = null;
let articlesCachePromise = null;

export const getArticlesCache = () => articlesCache;

export const fetchArticlesEarly = async () => {
    // لو فيه cache بالفعل، رجعه
    if (articlesCache) return articlesCache;

    // لو فيه request جاري، استنى نتيجته
    if (articlesCachePromise) return articlesCachePromise;

    articlesCachePromise = (async () => {
        try {
            const controller = new AbortController();
            const timeoutId = setTimeout(() => controller.abort(), 10000);

            const response = await fetch(API_URL, {
                signal: controller.signal,
                next: { revalidate: 3600 },
            });

            clearTimeout(timeoutId);

            if (!response.ok) throw new Error("Failed to fetch");

            const data = await response.json();

            if (data?.status === "success" && Array.isArray(data?.message)) {
                articlesCache = data.message.slice(0, 3);
                return articlesCache;
            }

            throw new Error("Invalid data");
        } catch (err) {
            console.error("ArticlesPrefetcher error:", err);
            articlesCachePromise = null;
            return null;
        }
    })();

    return articlesCachePromise;
};

const ArticlesPrefetcher = () => {
    useEffect(() => {
        if (typeof window === "undefined") return;

        // ✅ ابدأ الـ prefetch بعد 2 ثانية من تحميل الصفحة
        // ده يدي الـ LCP فرصة يحمل الأول
        const schedule =
            window.requestIdleCallback || ((cb) => window.setTimeout(cb, 2000));

        const handle = schedule(
            () => {
                fetchArticlesEarly();
            },
            { timeout: 4000 }
        );

        return () => {
            if (window.cancelIdleCallback && typeof handle === "number") {
                try {
                    window.cancelIdleCallback(handle);
                } catch (e) { }
            }
        };
    }, []);

    return null;
};

export default ArticlesPrefetcher;