"use client";

import React, { useState, useRef, useEffect, Fragment } from "react";
import PagesBanner from "../../../components/PagesBanner/PagesBanner";
import BottomBg from "../../../utils/bottomBg/BottomBg";
import { menu_1 } from "./data";
import SearchInput from "../../../components/pages/ClassicMenu/SearchInput";
import MenuItemCard from "../../../components/Cards/MenuItemCard/MenuItemCard";
import "./style.scss";
import TopBg from "./../../../utils/topBg/TopBg";
import MenuSchema from "./_components/MenuSchema";

const MenuClassic = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [allergenValues, setAllergenValues] = useState([]);
  const categoryRefs = useRef([]);
  const [isCardOpened, setIsCardOpened] = useState(false);
  const [cardDimensions, setCardDimensions] = useState({ width: 0, height: 0 });

  const handleSearch = (event) => {
    setSearchQuery(event.target.value.toLowerCase());
  };

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

  // ✅ خفّض الـ h1 الموجود في PagesBanner لـ div بـ aria-level=2 على صفحة المنيو فقط
  useEffect(() => {
    if (typeof window === "undefined") return;

    const downgradeBannerH1 = () => {
      const pagesBannerSection = document.querySelector('[class*="!bg-fixed"]');
      if (!pagesBannerSection) return;

      const h1Element = pagesBannerSection.querySelector("h1");
      if (!h1Element || h1Element.dataset.downgraded === "true") return;

      const newElement = document.createElement("div");
      newElement.innerHTML = h1Element.innerHTML;

      Array.from(h1Element.attributes).forEach((attr) => {
        newElement.setAttribute(attr.name, attr.value);
      });

      newElement.setAttribute("role", "heading");
      newElement.setAttribute("aria-level", "2");
      newElement.dataset.downgraded = "true";

      h1Element.parentNode.replaceChild(newElement, h1Element);
    };

    const timer = setTimeout(downgradeBannerH1, 100);
    return () => clearTimeout(timer);
  }, []);

  const filteredMenu = menu_1.map((category) => {
    const filteredItems = category.items.filter((item) => {
      const matchesSearch =
        item.name.toLowerCase().includes(searchQuery) ||
        category.category.toLowerCase().includes(searchQuery);
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

  const results = filteredMenu.filter((category) => category.items.length > 0);

  return (
    <div className=" !overflow-visible">
      {/* ✅ Menu Schema - SEO */}
      <MenuSchema menuData={menu_1} />

      <PagesBanner
        images={[
          "https://res.cloudinary.com/dhebgz7qh/video/upload/v1772101497/menu-gallery_menu-classic_jwdmr0_ntk29z.mp4",
        ]}
        title={"Menu Classic"}
        slogan={""}
        scrollTo={"contact"}
      />

      <div className="text-center max-w-3xl mx-auto py-12">
        {/* ✅ H1 الحقيقي للصفحة - باين في الـ UI */}
        <h2 className="text-goldenOrange italic text-2xl font-seasons">
          Taste The Best
        </h2>

        {/* ✅ H2 قصير ونضيف */}
        <h1 className="text-3xl md:text-6xl font-seasons font-bold text-softMintGreen mt-2">
          Discover Our Menu
        </h1>

        <div className="w-12 h-1 bg-softMintGreen mx-auto my-3"></div>

        <p className="text-gray-500 mt-4 text-lg">
          Explore our halal French & Middle Eastern fusion menu in Milton Keynes — crafted by award-winning chefs for moments that matter.
        </p>
      </div>

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
        >
          <div className="relative">
            <img
              loading="lazy"
              alt="Nour Maison halal French and Middle Eastern menu background Milton Keynes"
              src="/images/Whisk_b51f2dfbc934253b91e4101c448e7aa2dr.jpeg"
              className="fixed-img"
              draggable="false"
            />
          </div>
          <TopBg />
          <BottomBg />

          {results.map((category, index) => {
            const categoryId = category.category.toLowerCase().replace(/\s+/g, "-");

            return (
              <article
                key={index}
                id={`menu-${categoryId}`}
                className="mt-10 md:mt-10 relative z-50"
                ref={(el) => (categoryRefs.current[index] = el)}
                aria-labelledby={`heading-${categoryId}`}
              >
                <section className="relative">
                  <div className="text-white  z-20 flex flex-col gap-6 items-center justify-center relative">
                    {/* ✅ H2 لكل category */}
                    <h2
                      id={`heading-${categoryId}`}
                      className="text-3xl md:text-6xl md:px-5 lg-px-0 lg:text-8xl font-semibold font-seasons text-center w-full lg:w-[1000px]"
                    >
                      {category?.category}
                    </h2>

                    {/* ✅ H3 للـ slogan */}
                    {category.slogan && (
                      <h3 className="text-4xl md:text-6xl text-center font-tangerine">
                        {category.slogan}
                      </h3>
                    )}

                    <section className="container mx-auto p-6 mt-5">
                      <div
                        className={`grid !grid-cols-1 lg:!grid-cols-3 ${category?.displayType === "menu" ? 1 : 2
                          } lg:!grid-cols-${category?.displayType === "menu" ? "1" : "3"
                          }  gap-4 md:!gap-10`}
                      >
                        {category?.items?.map((item, idx) => (
                          <div
                            key={idx}
                            className=" pb-4"
                            ref={(el) =>
                              (categoryRefs.current[idx + results.length] = el)
                            }
                          >
                            <MenuItemCard
                              isCardOpened={isCardOpened}
                              setIsCardOpened={setIsCardOpened}
                              data={item}
                              categoryName={category.category}
                            />
                          </div>
                        ))}
                      </div>
                    </section>
                  </div>
                </section>
              </article>
            );
          })}
        </section>
      )}
    </div>
  );
};

export default MenuClassic;