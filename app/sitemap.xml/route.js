// app/sitemap.xml/route.js

function escapeXml(text) {
  if (text == null) return "";
  return String(text)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

export async function GET() {
  const baseUrl = "https://www.nourmaison.co.uk";

  try {
    const response = await fetch(
      "https://camp-coding.tech/nour_maison/user/get_custom_blogs_data.php"
    );
    const data = await response.json();
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
      "/eid-al-adha-dinner-menu-milton-keynes"
    ];

    const now = escapeXml(new Date().toISOString());

    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${staticPages
      .map(
        (page) => `
        <url>
          <loc>${escapeXml(`${baseUrl}${page}`)}</loc>
          <lastmod>${now}</lastmod>
          <changefreq>daily</changefreq>
          <priority>${page === "" ? "1.0" : "0.8"}</priority>
        </url>`
      )
      .join("")}

    ${blogs
      .filter((blog) => typeof blog?.link === "string" && blog.link.trim())
      .map(
        (blog) => `
        <url>
          <loc>${escapeXml(blog.link.trim())}</loc>
          <lastmod>${now}</lastmod>
          <changefreq>daily</changefreq>
          <priority>0.7</priority>
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

    const fallbackSitemap = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    <url>
      <loc>${escapeXml(baseUrl)}</loc>
      <lastmod>${escapeXml(new Date().toISOString())}</lastmod>
    </url>
  </urlset>`;

    return new Response(fallbackSitemap, {
      headers: {
        "Content-Type": "application/xml",
      },
    });
  }
}
