// app/sitemap.xml/route.js

import slugify from "../../lib/slugify";

export async function GET() {
  const baseUrl = "https://www.nourmaison.co.uk";

  try {
    const response = await fetch(
      "https://camp-coding.tech/nour_maison/user/get_custom_blogs_data.php"
    );
    const data = await response.json();
    // Extract blogs array from the response
    const blogs = data?.message?.blogs || [];

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
      "/booking",
      "/store",
      "/terms-and-conditions",
      "/privacy-policy-2",
      "/refund-policy",
      "/services",
      "/afternoon-tea-menu",
      "/all-blogs",
      "/afternoon-tea-booking",
    ];

    
    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${staticPages
      .map(
        (page) => `
        <url>
          <loc>${baseUrl}${page}</loc>
          <lastmod>${new Date().toISOString()}</lastmod>
          <changefreq>daily</changefreq>
          <priority>${page === "" ? "1.0" : "0.8"}</priority>
        </url>`
      )
      .join("")}

    ${blogs
      .map(
        (blog) => `
        <url>
          <loc>${blog.link}</loc>
          <lastmod>${new Date().toISOString()}</lastmod>
          <changefreq>daily</changefreq>
          <priority>0.6</priority>
        </url>`
      )
      .join("")}
  </urlset>`;

    return new Response(sitemap, {
      headers: {
        "Content-Type": "application/xml",
        "Cache-Control": "public, max-age=3600, s-maxage=3600",
      },
    });
  } catch (error) {
    console.error("Sitemap generation error:", error);

    // Return a minimal sitemap with just static pages if API fails
    const fallbackSitemap = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    <url>
      <loc>${baseUrl}</loc>
      <lastmod>${new Date().toISOString()}</lastmod>
    </url>
  </urlset>`;

    return new Response(fallbackSitemap, {
      headers: {
        "Content-Type": "application/xml",
      },
    });
  }
}
