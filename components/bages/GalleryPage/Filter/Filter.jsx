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
    <div className='flex'>
      <div className='filter-container mx-auto flex gap-2'>
        <button
          className={cx(
            {" !bg-softMintGreen !text-white ": activeGenre == "all"},
            " mb-8 min-w-[5rem] px-6 py-2 border-2 border-softMintGreen bg-white text-softMintGreen font-bold  cursor-pointer"
          )}
          // className={activeGenre === 0 ? "active" : ""}
          onClick={() => setActiveGenre("all")}
        >
          All
        </button>
        <button
          className={cx(
            {" !bg-softMintGreen !text-white ": activeGenre == "drinks"},
            " mb-8 min-w-[5rem] px-6 py-2 border-2 border-softMintGreen bg-white text-softMintGreen font-bold  cursor-pointer"
          )}
          onClick={() => setActiveGenre("drinks")}
        >
          Deinks
        </button>
        <button
          className={cx(
            {" !bg-softMintGreen !text-white ": activeGenre == "food"},
            " mb-8 min-w-[5rem] px-6 py-2 border-2 border-softMintGreen bg-white text-softMintGreen font-bold  cursor-pointer"
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
