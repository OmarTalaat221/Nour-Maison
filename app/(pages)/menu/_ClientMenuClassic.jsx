"use client";

import React, { useState, useRef, useEffect, Fragment } from "react";
import PagesBanner from "../../../components/PagesBanner/PagesBanner";
import BottomBg from "../../../utils/bottomBg/BottomBg";
import { menu_1 } from "./data";
import SearchInput from "../../../components/pages/ClassicMenu/SearchInput";
import MenuItemCard from "../../../components/Cards/MenuItemCard/MenuItemCard";
import "./style.scss";
import TopBg from "./../../../utils/topBg/TopBg";

const MenuClassic = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [allergenValues, setAllergenValues] = useState([]); // holds selected allergens
  const categoryRefs = useRef([]); // Store references for categories and items
  const [isCardOpened, setIsCardOpened] = useState(false);
  const [cardDimensions, setCardDimensions] = useState({ width: 0, height: 0 });

  // Handle search input change
  const handleSearch = (event) => {
    setSearchQuery(event.target.value.toLowerCase());
  };

  // Scroll to the first matching element
  useEffect(() => {
    if (searchQuery && categoryRefs.current.length > 0) {
      const firstMatch = categoryRefs.current.find(
        (ref) => ref && ref.innerText.toLowerCase().includes(searchQuery)
      );
      if (firstMatch) {
        firstMatch.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  }, [searchQuery]);

  const filteredMenu = menu_1.map((category) => {
    const filteredItems = category.items.filter((item) => {
      // Check if item or category matches the search query
      const matchesSearch =
        item.name.toLowerCase().includes(searchQuery) ||
        category.category.toLowerCase().includes(searchQuery);
      // Exclude item if it contains any selected allergen
      const noSelectedAllergen =
        allergenValues.length === 0 ||
        !allergenValues.some(
          (selected) =>
            item.allergensItems && item?.allergensItems[selected] === true
        );
      return matchesSearch && noSelectedAllergen;
    });

    return {
      ...category,
      items: filteredItems,
    };
  });

  // const [results , setRsults] = useState([])
  // Remove categories that have no matching items
  const results = filteredMenu.filter((category) => category.items.length > 0);

  return (
    <div className=" !overflow-visible">
      <PagesBanner
        title={"Menu Classic"}
        slogan={<p className="text-center"></p>}
        scrollTo={"contact"}
      />

      <div className="text-center max-w-3xl mx-auto py-12">
        <p className="text-goldenOrange italic text-2xl font-seasons">Taste The Best</p>
        <h2 className="text-3xl md:text-6xl font-seasons font-bold text-softMintGreen mt-2">
          Discover Our Menu
        </h2>
        <div className="w-12 h-1 bg-softMintGreen mx-auto my-3"></div>
        <p className="text-gray-500 mt-4 text-lg">
          Even if you're not a great chef, there's nothing to stop you
          understanding the difference between what tastes good and what
          doesn’t.
        </p>
      </div>

      {/* Pass both search and allergen filters to the SearchInput */}
      <SearchInput
        value={searchQuery}
        onChange={handleSearch}
        onAllergenChange={setAllergenValues}
        allergenValue={allergenValues}
      />

      {searchQuery && results.length === 0 ? (
        <div className="text-center text-xl text-gray-500">
          No results found for "{searchQuery}"
        </div>
      ) : (
        <section
          id="fixed-bg"
          className="fixed-bg mt-10 section  !relative select-none "
          style={
            {
              // backgroundImage: `url('/images/Whisk_b51f2dfbc934253b91e4101c448e7aa2dr.jpeg')`,
              // backgroundSize: "cover",
              // backgroundPosition: "center",
              // backgroundRepeat: "no-repeat",
            }
          }
        >
          <div className="relative">
            <img
              loading="lazy"
              alt="nour caffe"
              src="/images/Whisk_b51f2dfbc934253b91e4101c448e7aa2dr.jpeg"
              className="fixed-img"
              draggable="false"
            />
            {/* <div className="absolute bottom-0 left-0 w-full h-full inset-0 bg-gradient-to-t  z-20 "></div> */}
          </div>
          <TopBg />
          <BottomBg />

          {results.map((category, index) => (
            <div
              key={index}
              className="mt-10 md:mt-10 relative z-50"
              ref={(el) => (categoryRefs.current[index] = el)}
            >
              <section className="relative">
                <div className="text-white  z-20 flex flex-col gap-6 items-center justify-center relative">
                  <h4
                    // data-aos="zoom-in"
                    className="text-3xl md:text-6xl md:px-5 lg-px-0 lg:text-8xl font-semibold font-seasons text-center w-full lg:w-[1000px]"
                  >
                    {category?.category}
                  </h4>
                  <header
                    // data-aos="fade-down"
                    // data-aos-delay={300}
                    className="text-4xl md:text-6xl text-center font-tangerine"
                  >
                    {category.slogan}
                  </header>
                  <section className="container mx-auto p-6 mt-5">
                    <div
                      className={`grid !grid-cols-1 lg:!grid-cols-3 ${
                        category?.displayType === "menu" ? 1 : 2
                      } lg:!grid-cols-${
                        category?.displayType === "menu" ? "1" : "3"
                      }  gap-4 md:!gap-10`}
                    >
                      {category?.items?.map((item, idx) => (
                        <div
                          key={idx}
                          // data-aos="fade-up"
                          // data-aos-delay={idx * 100}
                          className=" pb-4"
                          ref={(el) =>
                            (categoryRefs.current[idx + results.length] = el)
                          }
                        >
                          {/* <div className="flex justify-between items-center pb-3">
                          <h3 className="text-[17px] font-semibold text-softMintGreen font-inter">
                            {item.name}
                          </h3>
                          <span className="text-xl text-goldenOrange italic font-bold font-tajawal ">
                            &#163;{item.price}
                          </span>
                        </div>
                        <p className="text-gray-500 ">{item.description}</p> */}

                          <MenuItemCard
                            isCardOpened={isCardOpened}
                            setIsCardOpened={setIsCardOpened}
                            data={item}
                          />
                        </div>
                      ))}
                    </div>
                  </section>
                </div>
              </section>
              {/* Menu Items */}
            </div>
          ))}
        </section>
      )}
    </div>
  );
};

export default MenuClassic;
