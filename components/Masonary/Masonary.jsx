import "./style.css";
import React from "react";
import MasonryCard from "../Cards/MasonryCard/MasonryCard";

const Masonry = ({ images }) => {
  return (
    <div
      id="portofolio"
      className="flex flex-col gap-[10px] items-center justify-center mx-4 py-[30px]"
    >
      <div className="text-4xl text-center md:text-6xl font-bold text-goldenOrange font-tangerine">
        The Art of Flavorful Creations
      </div>
      <div className="masonry-gallery">
        {images?.map((image, index) => (
          <MasonryCard key={index} data={image} />
        ))}
      </div>
    </div>
  );
};

export default Masonry;
