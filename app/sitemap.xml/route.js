// app/sitemap.xml/route.js

import slugify from "../../lib/slugify";

export async function GET() {
  const baseUrl = "https://www.nourmaison.co.uk";
  const response = await fetch(
    "https://camp-coding.tech/nour_maison/user/get_blogs.php"
  );
  const blogs = await response.json();

  const staticPages = [
    "",
    "/about-us",
    "/contact-us",
    "/menu-gallery",
    "/menu",
    "/blog",
    "/gallery",
    "/kids-menu",
    "/roast-menu",
    "/ramadan-iftar-menu-milton-keynes",
    // "/christmas-menu",
    "/booking",
    "/store",
    "/terms-conditions",
    "/privacy-policy-2",
    "/refund-policy",
    "/services",
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${staticPages
      .map(
        (page) => `
        <url>
          <loc>${baseUrl}${page}</loc>
          <lastmod>${new Date().toISOString()}</lastmod>
        </url>
      `
      )
      .join("")}

    ${blogs?.message
      .map(
        (blog) => `
        <url>
          <loc>${baseUrl}/blog/${blog.id}/${slugify(
            blog?.keywords || blog.title
          )}</loc>
<lastmod>${
          blog.updated_at
            ? new Date(blog.updated_at).toISOString()
            : new Date().toISOString()
        }</lastmod>
        </url>
      `
      )
      .join("")}
  </urlset>`;

  return new Response(sitemap, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
