

"use client"
import React, {useEffect} from "react";
import "./style.scss";

import cx from "classnames";

const Filter = ({setActiveGenre, activeGenre, setFiltered, popular}) => {
  useEffect(() => {
    if (activeGenre === "all") {
      setFiltered(popular);
      return;
    }
    const filtered = popular.filter((item) =>
      item.type == (activeGenre)
    );

    setFiltered(filtered);
  }, [activeGenre]);
  return (
    <div className='flex relative z-0'>
      <div className='filter-container mx-auto flex gap-2'>
        <button
          className={cx(
            {" !bg-goldenOrange !text-white ": activeGenre == "all"},
            " rounded-full mb-8 min-w-[5rem] px-6 py-2 border-2 border-goldenOrange bg-white text-goldenOrange font-bold  cursor-pointer"
          )}
          // className={activeGenre === 0 ? "active" : ""}
          onClick={() => setActiveGenre("all")}
        >
          All
        </button>
        <button
          className={cx(
            {" !bg-goldenOrange !text-white ": activeGenre == "drinks"},
            " rounded-full  mb-8 min-w-[5rem] px-6 py-2 border-2 border-goldenOrange bg-white text-goldenOrange font-bold  cursor-pointer"
          )}
          onClick={() => setActiveGenre("drinks")}
        >
          Drinks
        </button>
        <button
          className={cx(
            {" !bg-goldenOrange !text-white ": activeGenre == "food"},
            " rounded-full mb-8 min-w-[5rem] px-6 py-2 border-2 border-goldenOrange bg-white text-goldenOrange font-bold  cursor-pointer"
          )}
          onClick={() => setActiveGenre("food")}
        >
          Foods
        </button>
      </div>
    </div>
  );
};

export default Filter;
