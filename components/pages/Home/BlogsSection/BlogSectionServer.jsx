import React from "react";
import BlogSwiper from "./BlogsSection";

const BlogSectionServer = async () => {
  const res = await fetch(
    "https://camp-coding.tech/nour_maison/user/get_blogs.php",
    {
      next: { revalidate: 60 },
    }
  );
  const data = await res.json();

  return (
    <div>
      <BlogSwiper data={data.message} />
    </div>
  );
};

export default BlogSectionServer;
