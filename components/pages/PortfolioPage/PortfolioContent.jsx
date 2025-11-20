import React from "react";
import {motion, useInView} from "framer-motion";
import "./style.css";
// import Masonry from "./../../Masonry/Masonry";
import Masonry from './../../Masonary/Masonary';

const PortfolioContent = () => {
  const images = [
    {
      url: "https://res.cloudinary.com/dkc5klynm/image/upload/v1738155195/474392118_939433558314362_7722565490361966363_n_vlfef9.jpg",
      title: "Elegant Dining Table",
      subtitle:
        "A beautifully set table ready to host an unforgettable dining experience.",
    },
    {
      url: "https://res.cloudinary.com/dkc5klynm/image/upload/v1738155437/download_if1ebd.jpg",
      title: "Cozy Restaurant Ambiance",
      subtitle:
        "A warm, inviting atmosphere perfect for enjoying great food and company.",
    },
    {
      url: "https://res.cloudinary.com/dkc5klynm/image/upload/v1738155418/download_ftbmt4.webp",
      title: "Artful Cuisine",
      subtitle:
        "Creative and colorful dishes that are as beautiful as they are delicious.",
    },
    {
      url: "https://res.cloudinary.com/dkc5klynm/image/upload/v1738155474/download_ep8ymt.jpg",
      title: "Chef's Special",
      subtitle: "Signature dishes crafted with love by our expert chefs.",
    },
    {
      url: "https://res.cloudinary.com/dkc5klynm/image/upload/v1738155722/download_g78upd.jpg",
      title: "Fresh Ingredients",
      subtitle: "Handpicked, fresh ingredients for every meal we prepare.",
    },
    {
      url: "https://res.cloudinary.com/dkc5klynm/image/upload/v1738155748/download_x5eev1.jpg",
      title: "Perfect Dessert",
      subtitle: "End your meal with a touch of sweetness and style.",
    },
    {
      url: "https://res.cloudinary.com/dkc5klynm/image/upload/v1738155748/download_x5eev1.jpg",
      title: "Refreshing Beverages",
      subtitle: "Chilled drinks to complement your meal on a sunny day.",
    },
    {
      url: "https://res.cloudinary.com/dkc5klynm/image/upload/v1738155195/474392118_939433558314362_7722565490361966363_n_vlfef9.jpg",
      title: "Fine Dining Setup",
      subtitle:
        "Sophistication meets comfort with this elegant table arrangement.",
    },
    {
      url: "https://res.cloudinary.com/dkc5klynm/image/upload/v1738155437/download_if1ebd.jpg",
      title: "Evening Ambiance",
      subtitle:
        "Soft lighting and comfortable seating for a relaxed evening.",
    },
    {
      url: "https://res.cloudinary.com/dkc5klynm/image/upload/v1738155418/download_ftbmt4.webp",
      title: "Culinary Artistry",
      subtitle:
        "Every plate is a masterpiece, crafted with passion and precision.",
    },
    {
      url: "https://res.cloudinary.com/dkc5klynm/image/upload/v1738155474/download_ep8ymt.jpg",
      title: "Tasting Platter",
      subtitle:
        "A variety of flavors served together to delight your taste buds.",
    },
    {
      url: "https://res.cloudinary.com/dkc5klynm/image/upload/v1738155722/download_g78upd.jpg",
      title: "Garden Fresh Salad",
      subtitle: "Healthy and colorful, made with the freshest ingredients.",
    },
    {
      url: "https://res.cloudinary.com/dkc5klynm/image/upload/v1738155748/download_x5eev1.jpg",
      title: "Delicious Cakes",
      subtitle: "Indulge in our range of handcrafted cakes and pastries.",
    },
    {
      url: "https://res.cloudinary.com/dkc5klynm/image/upload/v1738155748/download_x5eev1.jpg",
      title: "Seasonal Drinks",
      subtitle: "Refreshing beverages perfect for any season.",
    },
    {
      url: "https://res.cloudinary.com/dkc5klynm/image/upload/v1738155748/download_x5eev1.jpg",
      title: "Signature Cocktails",
      subtitle: "Sip on our unique cocktails crafted to perfection.",
    },
    {
      url: "https://res.cloudinary.com/dkc5klynm/image/upload/v1738155722/download_g78upd.jpg",
      title: "Vibrant Cuisine",
      subtitle: "Explore flavors that excite and delight in every bite.",
    },
    {
      url: "https://res.cloudinary.com/dkc5klynm/image/upload/v1738155722/download_g78upd.jpg",
      title: "Flavor Explosion",
      subtitle: "A fusion of flavors that brings excitement to the table.",
    },
    {
      url: "https://res.cloudinary.com/dkc5klynm/image/upload/v1738155722/download_g78upd.jpg",
      title: "Farm-to-Table Freshness",
      subtitle:
        "Locally sourced ingredients brought straight to your plate.",
    },
    {
      url: "https://res.cloudinary.com/dkc5klynm/image/upload/v1738155722/download_g78upd.jpg",
      title: "The Chef's Touch",
      subtitle: "Every dish reflects the passion and skill of our chefs.",
    },
  ];

  return <Masonry images={images} />;
};

export default PortfolioContent;
