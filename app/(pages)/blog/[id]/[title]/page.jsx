import React from "react";
import { blogData } from "../../../data/blogs";
import BlogClient from "./_blog_client";
import { notFound } from "next/navigation";

export async function generateMetadata({ params }) {
  const id = (await params).id;
  const titleParam = (await params).title;

  // ✅ Important constants (عدلهم حسب موقعك)
  const siteName = "Nour Maison Cafe";
  const baseUrl = new URL("https://www.nourmaison.co.uk"); // ✅ الدومين الحقيقي بتاعك
  const canonicalPath = `/blog/${id}/${titleParam}`;   // عدّل المسار حسب روتنج موقعك

  try {
    const res = await fetch(
      "https://camp-coding.tech/nour_maison/user/get_blog_details.php",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id }),
        next: { revalidate: 60 },
      }
    );

    if (!res.ok) {
      // ✅ fallback metadata لو الـAPI وقع
      return {
        metadataBase: baseUrl,
        title: `${siteName} Blog`,
        description: "Read the latest updates and stories from Nour Maison Cafe.",
        alternates: { canonical: canonicalPath },
        robots: { index: false, follow: true }, // لو مش قادر تجيب بيانات، متفهرسش الصفحة
      };
    }

    const data = await res.json();
    const blog = data?.message || {};

    // ✅ Clean + safe fallbacks
    const title = blog?.title?.trim() || `${siteName} Blog`;
    const description =
      blog?.description?.trim() ||
      "Read the latest updates and stories from Nour Maison Cafe.";

    // keywords: API ممكن يديه string أو array
    const keywords =
      Array.isArray(blog?.keywords)
        ? blog.keywords
        : (blog?.keywords || "blog, nour maison, cafe").split(",").map((k) => k.trim());

    // ✅ Image handling (absolute URL is best)
    const imageUrl =
      blog?.image?.startsWith("http")
        ? blog.image
        : blog?.image
        ? new URL(blog.image, baseUrl).toString()
        : new URL("/default.jpg", baseUrl).toString();

    // ✅ Canonical URL
    const url = new URL(canonicalPath, baseUrl).toString();

    // Optional article fields
    const publishedTime = blog?.created_at || blog?.published_at; // لو موجود في API
    const modifiedTime = blog?.updated_at || blog?.modified_at;   // لو موجود

    return {
      metadataBase: baseUrl,

      // ✅ Core
      title,
      description,
      keywords,

      // ✅ Canonical + hreflang (لو عندك لغات حطها هنا)
      alternates: {
        canonical: url,
        // languages: { "en": url, "ar": url.replace("/blog/", "/ar/blog/") } // مثال فقط
      },

      // ✅ Indexing control (خلّيها true لو كل المدخلات سليمة)
      robots: {
        index: true,
        follow: true,
        googleBot: {
          index: true,
          follow: true,
          "max-image-preview": "large",
          "max-snippet": -1,
          "max-video-preview": -1,
        },
      },

      // ✅ Open Graph
      openGraph: {
        type: "article",
        url,
        siteName,
        title,
        description,
        locale: "en_GB", // عدّل حسب لغة الموقع (مثلاً ar_EG)
        images: [
          {
            url: imageUrl,
            width: 1200,
            height: 630,
            alt: title,
          },
        ],
        ...(publishedTime ? { publishedTime } : {}),
        ...(modifiedTime ? { modifiedTime } : {}),
      },

      // ✅ Twitter
      twitter: {
        card: "summary_large_image",
        title,
        description,
        images: [imageUrl],
        // site: "@nourmaisonuk",    // لو عندك
        // creator: "@nourmaisonuk", // لو عندك
      },

      // ✅ Extra SEO
      authors: blog?.author ? [{ name: blog.author }] : [{ name: siteName }],
      creator: blog?.author || siteName,
      publisher: siteName,
      category: blog?.category || "Blog",

      // ✅ Adds extra meta tags (article meta)
      other: {
        ...(publishedTime ? { "article:published_time": publishedTime } : {}),
        ...(modifiedTime ? { "article:modified_time": modifiedTime } : {}),
        ...(blog?.section ? { "article:section": blog.section } : {}),
        ...(blog?.tags ? { "article:tag": blog.tags } : {}),
      },
    };
  } catch (e) {
    // ✅ fallback safe metadata on any error
    return {
      metadataBase: new URL("https://www.nourmaison.co.uk"),
      title: "Nour Maison Cafe Blog",
      description: "Read the latest updates and stories from Nour Maison Cafe.",
      robots: { index: false, follow: true },
    };
  }
}


const Page = async ({ params }) => {
  const id = (await params).id;
  const title = (await params).title;
  
  
  const res = await fetch(
    "https://camp-coding.tech/nour_maison/user//get_blog_details.php",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: id,
      }),

      next: { revalidate: 60 },
    }
  );
  const data = await res.json();


  const allresBlogs = await fetch(
    "https://camp-coding.tech/nour_maison/user/get_blogs.php",
    {
      next: { revalidate: 60 },
    }
  );
  const blogsData = await allresBlogs.json();


  if(title == "undefined"){
    return notFound();
  }

  return (
    <div>
      <BlogClient id={id} title={title}  data={data.message} blogsData={blogsData.message} />
    </div>
  );
};

export default Page;
