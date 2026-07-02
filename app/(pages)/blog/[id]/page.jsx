import { notFound, permanentRedirect } from "next/navigation";
import slugify, { slugFromBlogLink } from "../../../../lib/slugify";

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

const BlogIdPage = async ({ params }) => {
  const { id } = await params;

  if (!id) {
    return notFound();
  }

  const blog = await fetchBlogDetails(id);

  if (!blog) {
    return notFound();
  }

  const apiSlug = slugFromBlogLink(blog.link, id);
  const sluggedTitle = slugify(blog.title) || "";
  const sluggedKeywords = slugify(blog.keywords) || "";

  const correctSlug = apiSlug || sluggedKeywords || sluggedTitle || "post";

  return permanentRedirect(`/blog/${id}/${correctSlug}`);
};

export default BlogIdPage;
