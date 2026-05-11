/** @type {import('next').NextConfig} */
import { generateAssetsHash } from "./lib/generateAssetsHash.js"; // ← ضيف .js

const ASSETS_HASH = generateAssetsHash();

const nextConfig = {
  images: {
    domains: ["res.cloudinary.com", "lh3.googleusercontent.com"],
  },

  env: {
    NEXT_PUBLIC_ASSETS_HASH: ASSETS_HASH,
  },
};

export default nextConfig;
