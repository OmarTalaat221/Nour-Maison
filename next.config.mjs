/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,

  compiler: {
    removeConsole:
      process.env.NODE_ENV === "production"
        ? { exclude: ["error", "warn"] }
        : false,
  },

  experimental: {
    optimizePackageImports: ["framer-motion", "swiper", "react-icons"],
  },

  images: {
    remotePatterns: [
      { protocol: "https", hostname: "res.cloudinary.com" },
      { protocol: "https", hostname: "lh3.googleusercontent.com" },
    ],
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 64, 96, 128, 256, 384],
    minimumCacheTTL: 31536000,
  },

  // ✅ 301 Permanent Redirects للحفاظ على SEO authority
  async redirects() {
    return [
      // Common booking variations
      {
        source: "/reservation",
        destination: "/booking",
        permanent: true,
      },
      {
        source: "/reservations",
        destination: "/booking",
        permanent: true,
      },
      {
        source: "/book",
        destination: "/booking",
        permanent: true,
      },
      {
        source: "/book-table",
        destination: "/booking",
        permanent: true,
      },
      {
        source: "/book-a-table",
        destination: "/booking",
        permanent: true,
      },
      {
        source: "/reserve",
        destination: "/booking",
        permanent: true,
      },
      {
        source: "/reserve-table",
        destination: "/booking",
        permanent: true,
      },
      // Common menu variations
      {
        source: "/menus",
        destination: "/menu",
        permanent: true,
      },
      {
        source: "/our-menu",
        destination: "/menu",
        permanent: true,
      },
      {
        source: "/food-menu",
        destination: "/menu",
        permanent: true,
      },
      // Common about variations
      {
        source: "/about",
        destination: "/about-us",
        permanent: true,
      },
      // Common contact variations
      {
        source: "/contact",
        destination: "/contact-us",
        permanent: true,
      },
      // ضيف هنا أي صفحات قديمة عندك من Google Search Console
    ];
  },

  async headers() {
    return [
      {
        source: "/images/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        source: "/videos/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
          {
            key: "Accept-Ranges",
            value: "bytes",
          },
        ],
      },
      {
        source: "/fonts/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        source: "/_next/static/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
