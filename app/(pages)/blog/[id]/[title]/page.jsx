import React from "react";
import { blogData } from "../../../data/blogs";
import BlogClient from "./_blog_client";
import { notFound } from "next/navigation";

export async function generateMetadata({ params }) {
  const id = (await params).id;

  const res = await fetch(
    "https://camp-coding.tech/nour_maison/user/get_blog_details.php",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id }),
      next: { revalidate: 60 },
    }
  );
  const data = await res.json();

  const blog = data.message;

  return {
    title: blog?.title || "Default Blog Title",
    description: blog?.description || "Default blog description",
    keywords: blog?.keywords || "default, blog, nour maison",
    openGraph: {
      title: blog?.title || "Default Blog Title",
      description: blog?.description || "Default blog description",
      images: [
        {
          url: blog?.image || "/default.jpg", // لو عندك صورة
          width: 800,
          height: 600,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: blog?.title || "Default Blog Title",
      description: blog?.description || "Default blog description",
      images: [blog?.image || "/default.jpg"],
    },
  };
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
