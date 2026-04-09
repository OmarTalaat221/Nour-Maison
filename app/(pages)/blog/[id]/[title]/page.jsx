// page.jsx
import React from "react";
import BlogClient from "./_blog_client";
import { notFound } from "next/navigation";
import slugify from "../../../../../lib/slugify";

// Fallback Metadata Function
function getFallbackMetadata(baseUrl, canonicalPath) {
  return {
    metadataBase: baseUrl,
    title: "Nour Maison Cafe Blog",
    description: "Read the latest updates and stories from Nour Maison Cafe.",
    alternates: { canonical: canonicalPath },
    robots: { index: false, follow: true },
  };
}

// Safe string escape
function safeString(str) {
  if (!str) return "";
  return str.replace(/[’‘'"]/g, "'").trim();
}

// Generate Metadata
export async function generateMetadata({ params }) {
  const { id, title: titleParam } = await params;

  const siteName = "Nour Maison Cafe";
  const baseUrl = new URL("https://www.nourmaison.co.uk");
  const canonicalPath = `/blog/${id}/${titleParam}`;

  if (!id || !titleParam || titleParam === "undefined") {
    return getFallbackMetadata(baseUrl, canonicalPath);
  }

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
      console.error(`Metadata API Error for ID ${id}: ${res.status}`);
      return getFallbackMetadata(baseUrl, canonicalPath);
    }

    let data;
    try {
      data = await res.json();
    } catch (e) {
      console.error(`JSON parse error for blog ID ${id}:`, e);
      return getFallbackMetadata(baseUrl, canonicalPath);
    }

    if (!data?.message || data?.status === "error") {
      console.error(`No blog data found for metadata, ID: ${id}`);
      return getFallbackMetadata(baseUrl, canonicalPath);
    }

    const blog = data.message;

    const title = safeString(blog?.title) || `${siteName} Blog`;
    const description =
      safeString(blog?.description) ||
      "Read the latest updates and stories from Nour Maison Cafe.";
    const keywords = Array.isArray(blog?.keywords)
      ? blog.keywords.map((k) => safeString(k))
      : (blog?.keywords || "blog, nour maison, cafe")
          .split(",")
          .map((k) => safeString(k));

    const imageUrl = blog?.image?.startsWith("http")
      ? blog.image
      : blog?.image
        ? new URL(blog.image, baseUrl).toString()
        : new URL("/default.jpg", baseUrl).toString();

    const url = new URL(canonicalPath, baseUrl).toString();
    const publishedTime = blog?.created_at || blog?.published_at || null;
    const modifiedTime = blog?.updated_at || blog?.modified_at || null;

    return {
      metadataBase: baseUrl,
      title,
      description,
      keywords,
      alternates: { canonical: url },
      robots: {
        index: true,
        follow: true,
        googleBot: { index: true, follow: true },
      },
      openGraph: {
        type: "article",
        url,
        siteName,
        title,
        description,
        images: [{ url: imageUrl, width: 1200, height: 630, alt: title }],
        ...(publishedTime ? { publishedTime } : {}),
        ...(modifiedTime ? { modifiedTime } : {}),
      },
      twitter: {
        card: "summary_large_image",
        title,
        description,
        images: [imageUrl],
      },
      authors: blog?.author ? [{ name: blog.author }] : [{ name: siteName }],
      creator: blog?.author || siteName,
      publisher: siteName,
      category: blog?.category || "Blog",
      other: {
        ...(publishedTime ? { "article:published_time": publishedTime } : {}),
        ...(modifiedTime ? { "article:modified_time": modifiedTime } : {}),
        ...(blog?.section ? { "article:section": blog.section } : {}),
        ...(blog?.tags ? { "article:tag": blog.tags } : {}),
      },
    };
  } catch (error) {
    console.error(`Metadata generation error for blog ID ${id}:`, error);
    return getFallbackMetadata(baseUrl, canonicalPath);
  }
}

// Page Component
const Page = async ({ params }) => {
  const { id, title } = await params;

  if (!id) {
    console.error("Missing blog ID");
    return notFound();
  }
  if (!title || title === "undefined") {
    console.error("Invalid blog title");
    return notFound();
  }

  try {
    const blogRes = await fetch(
      "https://camp-coding.tech/nour_maison/user/get_blog_details.php",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id }),
        next: { revalidate: 60 },
      }
    );

    if (!blogRes.ok) {
      console.error(`Blog API Error for ID ${id}: ${blogRes.status}`);
      return notFound();
    }

    let blogData;
    try {
      blogData = await blogRes.json();
    } catch (e) {
      console.error(`JSON parse error for blog ID ${id}:`, e);
      return notFound();
    }

    if (!blogData?.message || blogData?.status === "error") {
      console.error(`Blog not found or API error for ID ${id}`);
      return notFound();
    }

    let allBlogsData = [];
    try {
      const allBlogsRes = await fetch(
        "https://camp-coding.tech/nour_maison/user/get_blogs.php",
        { next: { revalidate: 60 } }
      );
      if (allBlogsRes.ok) {
        const allBlogsJson = await allBlogsRes.json();
        allBlogsData = allBlogsJson?.message || [];
      }
    } catch (blogsError) {
      console.error("Error fetching all blogs:", blogsError);
      allBlogsData = [];
    }

    const filteredBlogs = Array.isArray(allBlogsData)
      ? allBlogsData.filter((blog) => blog?.id?.toString() !== id?.toString())
      : [];

    return (
      <div>
        <BlogClient
          id={id}
          title={title}
          data={blogData.message}
          blogsData={filteredBlogs}
        />
      </div>
    );
  } catch (error) {
    console.error(`Page rendering error for blog ID ${id}:`, error);
    return notFound();
  }
};

export default Page;
