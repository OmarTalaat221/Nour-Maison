import { notFound, permanentRedirect } from "next/navigation";
import { fallbackNourMaisonBlogContent } from "../../../../../lib/fallbackNourMaisonBlogContent.js";
import { commonNourMaisonKeywords } from "../../../../../lib/seo/keywords.js";
import slugify, { slugFromBlogLink } from "../../../../../lib/slugify";
import BlogClient from "./_blog_client";

const siteName = "Nour Maison Cafe";
const baseUrl = new URL("https://www.nourmaison.co.uk");

const fallbackBlogTitle =
  "Nour Maison Milton Keynes | Café, Brunch & Halal Dining in CMK";

const fallbackBlogDescription =
  "Discover Nour Maison in Milton Keynes for café, brunch, halal dining, Middle Eastern and Mediterranean flavours, pistachio desserts, family dining and afternoon tea in CMK.";

const fallbackBlogImage = "https://xdsoft.net/jodit/finder/files/download.jpg";

const fallbackBlogSlug =
  "nour-maison-milton-keynes-cafe-brunch-halal-dining-cmk";

async function fetchBlogDetails(id, retries = 3, delay = 500) {
  let requestFailed = false;

  for (let i = 0; i < retries; i++) {
    try {
      const res = await fetch(
        "https://camp-coding.tech/nour_maison/user/get_blog_details.php",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ id }),
          next: { revalidate: 60 },
        },
      );

      if (!res.ok) {
        requestFailed = true;
      } else {
        const data = await res.json();

        if (data && data.status !== "error" && data.message) {
          return { blog: data.message, useFallback: false };
        }

        if (data?.status === "error") {
          return { blog: null, useFallback: false };
        }

        requestFailed = true;
      }
    } catch (e) {
      requestFailed = true;
      console.error(`Fetch attempt ${i + 1} failed for blog ID ${id}:`, e);
    }

    if (i < retries - 1) {
      await new Promise((resolve) => setTimeout(resolve, delay));
    }
  }

  return { blog: null, useFallback: requestFailed };
}

async function fetchAllBlogs(retries = 3, delay = 500) {
  for (let i = 0; i < retries; i++) {
    try {
      const res = await fetch(
        "https://camp-coding.tech/nour_maison/user/get_blogsV2.php",
        {
          next: { revalidate: 60 },
        },
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
        safeString(k == null ? "" : typeof k === "string" ? k : String(k)),
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

function authorDisplayName(blog, fallbackName) {
  const a = blog?.author;

  if (a == null || a === "") return fallbackName;
  if (typeof a === "string") return safeString(a) || fallbackName;

  if (typeof a === "object" && a?.name != null) {
    return safeString(String(a.name)) || fallbackName;
  }

  return fallbackName;
}

function articleTagsMetadata(tags) {
  if (tags == null || tags === "") return {};

  if (Array.isArray(tags)) {
    const flat = tags
      .map((x) =>
        x == null ? "" : typeof x === "string" ? safeString(x) : String(x),
      )
      .filter(Boolean);

    return flat.length ? { "article:tag": flat } : {};
  }

  if (typeof tags === "string" || typeof tags === "number") {
    return { "article:tag": safeString(String(tags)) };
  }

  return {};
}

function articleSectionMetadata(section) {
  if (section == null || section === "") return {};

  if (typeof section === "string") {
    return { "article:section": safeString(section) };
  }

  if (typeof section === "object" && section?.name != null) {
    return { "article:section": safeString(String(section.name)) };
  }

  return {};
}

function createFallbackBlog(id) {
  const now = new Date().toISOString();

  return {
    id,
    title: fallbackBlogTitle,
    description: fallbackBlogDescription,
    keywords: commonNourMaisonKeywords,
    image: fallbackBlogImage,
    link: `/blog/${id}/${fallbackBlogSlug}`,
    author: siteName,
    category: "Nour Maison Blog",
    section: "Nour Maison Milton Keynes",
    tags: commonNourMaisonKeywords,
    created_at: now,
    updated_at: now,
    content: fallbackNourMaisonBlogContent,
    body: fallbackNourMaisonBlogContent,
    details: fallbackNourMaisonBlogContent,
    blog_content: fallbackNourMaisonBlogContent,
    blog_details: fallbackNourMaisonBlogContent,
    description_html: fallbackNourMaisonBlogContent,
  };
}

function getFallbackMetadata(
  canonicalPath = `/blog/fallback/${fallbackBlogSlug}`,
) {
  const canonicalUrl = new URL(canonicalPath, baseUrl).toString();

  return {
    metadataBase: baseUrl,
    title: fallbackBlogTitle,
    description: fallbackBlogDescription,
    keywords: commonNourMaisonKeywords,
    alternates: { canonical: canonicalUrl },
    robots: {
      index: true,
      follow: true,
      googleBot: { index: true, follow: true },
    },
    openGraph: {
      type: "article",
      url: canonicalUrl,
      siteName,
      title: fallbackBlogTitle,
      description: fallbackBlogDescription,
      images: [
        {
          url: fallbackBlogImage,
          width: 1200,
          height: 630,
          alt: fallbackBlogTitle,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: fallbackBlogTitle,
      description: fallbackBlogDescription,
      images: [fallbackBlogImage],
    },
    authors: [{ name: siteName }],
    creator: siteName,
    publisher: siteName,
    category: "Nour Maison Blog",
  };
}

export async function generateMetadata({ params }) {
  const { id, title: titleParam } = await params;

  if (!id || !titleParam || titleParam === "undefined") {
    return getFallbackMetadata(`/blog/${id || "fallback"}/${fallbackBlogSlug}`);
  }

  try {
    const { blog, useFallback } = await fetchBlogDetails(id);

    if (!blog && useFallback) {
      return getFallbackMetadata(`/blog/${id}/${titleParam}`);
    }

    if (!blog) {
      return {
        metadataBase: baseUrl,
        title: `${siteName} Blog`,
        description:
          "Read the latest updates and stories from Nour Maison Cafe.",
        alternates: { canonical: `/blog/${id}/${titleParam}` },
        robots: { index: false, follow: true },
      };
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
        : fallbackBlogImage;

    const apiSlug = slugFromBlogLink(blog.link, id);
    const sluggedTitle = slugify(blog.title) || "";
    const sluggedKeywords = slugify(blog.keywords) || "";
    const correctSlug =
      apiSlug || sluggedKeywords || sluggedTitle || titleParam;

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
    return getFallbackMetadata(`/blog/${id}/${titleParam}`);
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
  let isFallback = false;

  try {
    const result = await fetchBlogDetails(id);

    if (result.blog) {
      blog = result.blog;
    } else if (result.useFallback) {
      blog = createFallbackBlog(id);
      isFallback = true;
    } else {
      console.error(`Blog not found for ID ${id}`);
      return notFound();
    }
  } catch (error) {
    console.error(`Page rendering error fetching blog ID ${id}:`, error);
    blog = createFallbackBlog(id);
    isFallback = true;
  }

  if (!isFallback) {
    const apiSlug = slugFromBlogLink(blog.link, id);
    const sluggedTitle = slugify(blog.title) || "";
    const sluggedKeywords = slugify(blog.keywords) || "";
    const validSlugs = [apiSlug, sluggedTitle, sluggedKeywords].filter(Boolean);
    const correctSlug = apiSlug || sluggedKeywords || sluggedTitle || "post";

    if (validSlugs.length > 0 && !validSlugs.includes(title)) {
      return permanentRedirect(`/blog/${id}/${correctSlug}`);
    }
  }

  let allBlogsData = [];

  if (!isFallback) {
    try {
      allBlogsData = await fetchAllBlogs();
    } catch (error) {
      console.error("Error fetching all blogs:", error);
    }
  }

  const filteredBlogs = Array.isArray(allBlogsData)
    ? allBlogsData.filter((b) => b?.id?.toString() !== id?.toString())
    : [];

  return (
    <div>
      <BlogClient
        id={id}
        title={isFallback ? fallbackBlogSlug : title}
        data={blog}
        blogsData={filteredBlogs}
      />
    </div>
  );
};

export default Page;
