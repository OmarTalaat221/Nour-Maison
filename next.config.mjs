/** @type {import('next').NextConfig} */
const nextConfig = {
  devServer: {
    host: '0.0.0.0',
  },

  images: {
    domains: ["res.cloudinary.com" ,  "lh3.googleusercontent.com"], // 👈 أضف الدومين هنا
  },
};

export default nextConfig;
