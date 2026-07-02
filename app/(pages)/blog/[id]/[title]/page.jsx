// page.jsx
import React from "react";
import BlogClient from "./_blog_client";
import { notFound, permanentRedirect } from "next/navigation";
import slugify, { slugFromBlogLink } from "../../../../../lib/slugify";

// Fetch blog details with retry mechanism
async function fetchBlogDetails(id, retries = 3, delay = 500) {
  for (let i = 0; i < retries; i++) {
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
      if (res.ok) {
        const data = await res.json();
        if (data && data.status !== "error" && data.message) {
          return data.message;
        }
      }
    } catch (e) {
      console.error(`Fetch attempt ${i + 1} failed for blog ID ${id}:`, e);
    }
    if (i < retries - 1) {
      await new Promise((resolve) => setTimeout(resolve, delay));
    }
  }
  return null;
}

// Fetch all blogs with retry mechanism
async function fetchAllBlogs(retries = 3, delay = 500) {
  for (let i = 0; i < retries; i++) {
    try {
      const res = await fetch(
        "https://camp-coding.tech/nour_maison/user/get_blogsV2.php"
      );
      if (res.ok) {
        const data = await res.json();
        return data?.message || [];
      }
    } catch (e) {
      console.error(`Fetch all blogs attempt ${i + 1} failed:`, e);
    }
    if (i < retries - 1) {
      await new Promise((resolve) => setTimeout(resolve, delay));
    }
  }
  return [];
}

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

  if (!id || !titleParam || titleParam === "undefined") {
    return getFallbackMetadata(baseUrl, `/blog/${id}/${titleParam}`);
  }

  try {
    const blog = await fetchBlogDetails(id);

    if (!blog) {
      return getFallbackMetadata(baseUrl, `/blog/${id}/${titleParam}`);
    }

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

    // Canonical URL correction based on DB slug
    const apiSlug = slugFromBlogLink(blog.link, id);
    const sluggedTitle = slugify(blog.title) || "";
    const sluggedKeywords = slugify(blog.keywords) || "";
    const correctSlug = apiSlug || sluggedKeywords || sluggedTitle || titleParam;

    const url = new URL(`/blog/${id}/${correctSlug}`, baseUrl).toString();
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
    return getFallbackMetadata(baseUrl, `/blog/${id}/${titleParam}`);
  }
}

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

  let blog = null;
  try {
    blog = await fetchBlogDetails(id);
  } catch (error) {
    console.error(`Page rendering error fetching blog ID ${id}:`, error);
    return notFound();
  }

  if (!blog) {
    console.error(`Blog not found or API error for ID ${id}`);
    return notFound();
  }

  // URL slug verification & server-side redirection (SEO best practice)
  const apiSlug = slugFromBlogLink(blog.link, id);
  const sluggedTitle = slugify(blog.title) || "";
  const sluggedKeywords = slugify(blog.keywords) || "";
  const validSlugs = [apiSlug, sluggedTitle, sluggedKeywords].filter(Boolean);

  const correctSlug = apiSlug || sluggedKeywords || sluggedTitle || "post";

  // If current title is not valid, 301/308 redirect to correct slug
  // This must be run outside the try-catch block because Next.js redirects throw specific internal errors
  if (validSlugs.length > 0 && !validSlugs.includes(title)) {
    return permanentRedirect(`/blog/${id}/${correctSlug}`);
  }

  let allBlogsData = [];
  try {
    allBlogsData = await fetchAllBlogs();
  } catch (error) {
    console.error("Error fetching all blogs:", error);
  }

  const filteredBlogs = Array.isArray(allBlogsData)
    ? allBlogsData.filter((b) => b?.id?.toString() !== id?.toString())
    : [];

  return (
    <div>
      <BlogClient
        id={id}
        title={title}
        data={blog}
        blogsData={filteredBlogs}
      />
    </div>
  );
};

export default Page;
