"use client";
import React, { useState } from "react";
import Cart from "../../../components/Cart/Cart";
import Details from "../../../components/pages/Store/ProductDetails/Details";
import PagesBanner from "../../../components/PagesBanner/PagesBanner";
import ProdCard from "../../../components/Cards/ProdCard/ProdCard";
import { TopNavbar } from "../../../components/pages/Gallery/TopNavbar/TopNavbar";
import dynamic from "next/dynamic";

const HeavyComponent = dynamic(
  () => import("../../../components/pages/GiftCardsPage/GiftCardsContainer"),
  {
    ssr: false,
    loading: () => <p style={{ color: "gray" }}>Loading component...</p>,
  }
);

const StorePage = () => {
  const [selectedData, setSelectedData] = useState(null);
  const [openCart, setOpenCart] = useState(false);
  const [activeTab, setActiveTab] = useState("Store");
  const tabs = ["Store", "Gift Cards"];

  const products = [
    {
      id: 1,
      name: "Nour Maison GOOD MORNING CUP",
      category: "CUPS",
      price: 0,
      original_price: 0,
      discount: "20%",
      rating: 4,
      images: [
        "https://res.cloudinary.com/dhebgz7qh/image/upload/v1767536319/muftscgujz2hc3fmrwtg_kshscq.avif",
        "https://res.cloudinary.com/dhebgz7qh/image/upload/v1767536366/auh4rhatfwyvkokdnmtx_w2hysi.avif",
      ],
    },
    {
      id: 2,
      name: "Nour Maison GOOD MORNING CUP",
      category: "CUPS",
      price: 0,
      original_price: 0,
      discount: "20%",
      rating: 4,
      images: [
        "https://res.cloudinary.com/dhebgz7qh/image/upload/v1767536398/pwwv0fl91gfrcdgq85sk_ornodn.webp",
        "https://res.cloudinary.com/dhebgz7qh/image/upload/v1767536366/auh4rhatfwyvkokdnmtx_w2hysi.avif",
      ],
    },
    {
      id: 3,
      name: "Nour Maison GOOD MORNING CUP",
      category: "CUPS",
      price: 0,
      original_price: 0,
      discount: "20%",
      rating: 4,
      images: [
        "https://res.cloudinary.com/dhebgz7qh/image/upload/v1767536319/muftscgujz2hc3fmrwtg_kshscq.avif",
        "https://res.cloudinary.com/dhebgz7qh/image/upload/v1767536366/auh4rhatfwyvkokdnmtx_w2hysi.avif",
      ],
    },
    {
      id: 4,
      name: "Nour Maison GOOD MORNING CUP",
      category: "CUPS",
      price: 0,
      original_price: 0,
      discount: "20%",
      rating: 4,
      images: [
        "https://res.cloudinary.com/dhebgz7qh/image/upload/v1767536319/muftscgujz2hc3fmrwtg_kshscq.avif",
        "https://res.cloudinary.com/dhebgz7qh/image/upload/v1767536366/auh4rhatfwyvkokdnmtx_w2hysi.avif",
      ],
    },
    {
      id: 5,
      name: "Nour Maison GOOD MORNING CUP",
      category: "CUPS",
      price: 0,
      original_price: 0,
      discount: "20%",
      rating: 4,
      images: [
        "https://res.cloudinary.com/dhebgz7qh/image/upload/v1767536319/muftscgujz2hc3fmrwtg_kshscq.avif",
        "https://res.cloudinary.com/dhebgz7qh/image/upload/v1767536366/auh4rhatfwyvkokdnmtx_w2hysi.avif",
      ],
    },
    {
      id: 6,
      name: "Nour Maison GOOD MORNING CUP",
      category: "CUPS",
      price: 0,
      original_price: 0,
      discount: "20%",
      rating: 4,
      images: [
        "https://res.cloudinary.com/dhebgz7qh/image/upload/v1767536319/muftscgujz2hc3fmrwtg_kshscq.avif",
        "https://res.cloudinary.com/dhebgz7qh/image/upload/v1767536366/auh4rhatfwyvkokdnmtx_w2hysi.avif",
      ],
    },
  ];

  
  return (
    <div>
      {/* <Cart openCart={openCart} setOpenCart={setOpenCart} /> */}
      <PagesBanner
        slogan={false}
        title={`Maison Market – Simple and elegant`}
        scrollTo={"booking"}
      />

      <div className="flex items-center gap-3 justify-center mt-9">
        {/* <Filter
                  activeGenre={activeGenre}
                  setActiveGenre={setActiveGenre}
                  popular={popularMovies}
                  setFiltered={setFiltered}
                /> */}
        <TopNavbar
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          tabs={tabs}
        />
      </div>

     

      <div style={{ display: activeTab === "Store" ? "block" : "none" }}>
      <div className="my-10 text-4xl md:text-6xl text-center font-bold text-goldenOrange font-tangerine">
        Feels like a carefully chosen selection from the store.
      </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 container w-[90%] mx-auto ">
          {products.map((prod, index) => {
            return (
              <ProdCard
                onClick={() => setSelectedData(prod)}
                key={index}
                data={prod}
                openCart={openCart}
                setOpenCart={setOpenCart}
              />
            );
          })}
        </div>
      </div>

      <div style={{ display: activeTab === "Gift Cards" ? "block" : "none" }}>
        <HeavyComponent />{" "}
      </div>

      <Details
        data={selectedData}
        open={selectedData}
        setOpen={setSelectedData}
      />
    </div>
  );
};

export default StorePage;
