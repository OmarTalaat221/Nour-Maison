import React from "react";
import BlogCard from "./../../../components/Cards/blogCard/blogCard";

export const metadata = {
  title: "NOUR MAISON - BLOGS",
  description:
    "Discover inspiring articles, tips, and insights on lifestyle, design, and more at NOUR MAISON Blogs. Explore fresh ideas to elevate your everyday living.",

  keywords: [
    // Brand-specific
    "Nour Maison blog",
    "Nour Maison lifestyle",
    "Nour Maison articles",
    "Nour Maison insights",
    "Nour Maison inspiration",
    "Nour Maison design blog",
    "Nour Maison decor tips",

    // Lifestyle & Daily Living
    "lifestyle blogs",
    "modern lifestyle blog",
    "creative living tips",
    "mindful living",
    "balanced lifestyle ideas",
    "wellness and lifestyle",
    "personal growth blog",
    "elegant lifestyle ideas",
    "luxury lifestyle tips",
    "living well daily",
    "smart living blog",
    "lifestyle for modern homes",

    // Interior Design & Home Styling
    "home inspiration",
    "interior design tips",
    "home styling blog",
    "modern home ideas",
    "small space decorating tips",
    "luxury home ideas",
    "decor ideas",
    "home decor blog",
    "furniture styling tips",
    "elevated home spaces",
    "design for everyday living",
    "home improvement tips",
    "interior styling guide",

    // Blog-related Search Intent
    "daily inspiration blog",
    "inspirational articles",
    "tips and ideas blog",
    "home and lifestyle articles",
    "read lifestyle tips online",
    "design tips for home",
    "interior decor blog UK",
    "food and lifestyle blog",
    "blog for home lovers",
    "blog for creative living",
    "blog for cozy living",
    "blog on interior trends",
    "read about lifestyle online",

    // Optional: SEO boosters
    "design inspiration Milton Keynes",
    "UK home and lifestyle blog",
    "trending decor blog",
    "luxury interiors blog UK",
    "wellness lifestyle blog UK",
    "French style interiors blog",
    "stylish living ideas",
  ],

  alternates: {
    canonical: "https://www.nourmaison.co.uk/blog",
  },
};
import PagesBanner from "../../../components/PagesBanner/PagesBanner";
import Link from "next/link";
import slugify from "../../../lib/slugify";

const page = async () => {
  const res = await fetch(
    "https://camp-coding.tech/nour_maison/user/get_blogs.php",
    {
      next: { revalidate: 60 },
    }
  );
  const data = await res.json();

  return (
    <>
      <PagesBanner
        title={"Blogs"}
        slogan={"Nour Maison Moments"}
        scrollTo={"blogs"}
      />

      <div
        id="blogs"
        className="container grid grid-cols-1   md:grid-cols-2 lg:grid-cols-3 gap-10 !mb-10 !mt-20"
      >
        {data?.message?.map((post, idx) => (
          <Link
            href={`blog/${post.id.toString()}/${slugify( post?.keywords || post?.title )}`}
            className="no-underline hover:no-underline"
          >
            <BlogCard post={post} key={idx} />
          </Link>
        ))}
      </div>
    </>
  );
};

export default page;
