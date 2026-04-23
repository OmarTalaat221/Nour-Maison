// page.jsx
import React from "react";
import BlogClient from "./_blog_client";
import { notFound } from "next/navigation";

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

function safeString(str) {
  if (str == null || str === "") return "";
  const s = typeof str === "string" ? str : String(str);
  return s.replace(/[’‘'"]/g, "'").trim();
}

const DEFAULT_KEYWORD_PARTS = ["blog", "nour maison", "cafe"];

function blogKeywordsMetadata(keywords) {
  const fallback = DEFAULT_KEYWORD_PARTS.map((k) => safeString(k));
  if (keywords == null || keywords === "") return fallback;
  if (Array.isArray(keywords)) {
    const out = keywords
      .map((k) =>
        safeString(k == null ? "" : typeof k === "string" ? k : String(k))
      )
      .filter(Boolean);
    return out.length ? out : fallback;
  }
  if (typeof keywords === "string") {
    const out = keywords
      .split(",")
      .map((k) => safeString(k))
      .filter(Boolean);
    return out.length ? out : fallback;
  }
  const one = safeString(String(keywords));
  return one ? [one] : fallback;
}

function authorDisplayName(blog, siteName) {
  const a = blog?.author;
  if (a == null || a === "") return siteName;
  if (typeof a === "string") return safeString(a) || siteName;
  if (typeof a === "object" && a?.name != null)
    return safeString(String(a.name)) || siteName;
  return siteName;
}

function articleTagsMetadata(tags) {
  if (tags == null || tags === "") return {};
  if (Array.isArray(tags)) {
    const flat = tags
      .map((x) =>
        x == null ? "" : typeof x === "string" ? safeString(x) : String(x)
      )
      .filter(Boolean);
    return flat.length ? { "article:tag": flat } : {};
  }
  if (typeof tags === "string" || typeof tags === "number")
    return { "article:tag": safeString(String(tags)) };
  return {};
}

function articleSectionMetadata(section) {
  if (section == null || section === "") return {};
  if (typeof section === "string")
    return { "article:section": safeString(section) };
  if (typeof section === "object" && section?.name != null)
    return { "article:section": safeString(String(section.name)) };
  return {};
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
    const keywords = blogKeywordsMetadata(blog?.keywords);

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
      authors: [{ name: authorDisplayName(blog, siteName) }],
      creator: authorDisplayName(blog, siteName),
      publisher: siteName,
      category:
        typeof blog?.category === "string"
          ? safeString(blog.category) || "Blog"
          : "Blog",
      other: {
        ...(publishedTime ? { "article:published_time": publishedTime } : {}),
        ...(modifiedTime ? { "article:modified_time": modifiedTime } : {}),
        ...articleSectionMetadata(blog?.section),
        ...articleTagsMetadata(blog?.tags),
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
        "https://camp-coding.tech/nour_maison/user/get_blogsV2.php"
        // { next: { revalidate: 60 } }
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
