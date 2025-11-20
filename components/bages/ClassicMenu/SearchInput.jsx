import React, { useState, useEffect, useRef } from "react";
import { IoSearchOutline } from "react-icons/io5";
import cx from "classnames";
import "./style.scss";
import { TagPicker } from "rsuite";
import { FaOpencart } from "react-icons/fa6";
import SolidCheckbox from "../../../utils/SolidCheckbox/SolidCheckbox";
import { cancel_btn } from "../../Cart/Cart";

const SearchInput = ({ onChange, value, onAllergenChange, allergenValue }) => {
  const searchInputRef = useRef(null);
  const [isFixed, setIsFixed] = useState(false);
  const [openAllergens, setOpenAllergens] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offtop = searchInputRef.current.getBoundingClientRect();
      if (offtop.top <= 100) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const data = [
    "Celery",
    "Cereals/Gluten",
    "Crustaceans",
    "Eggs",
    "Fish",
    "Lupin",
    "Milk",
    "Mustard",
    "Nuts",
    "Peanuts",
    "Sesame Seeds",
    "Soya",
    "Sulphur Dioxide",
  ].map((item) => ({
    label: item,
    value: item,
  }));
  const styles = { width: 150 };

  const [selectedAllergens, setSelectedAllergens] = useState([]);
  const handleAllergenChange = (e) => {
    const { checked, value } = e.target;
    if (checked) {
      setSelectedAllergens([...selectedAllergens, value]);
      onAllergenChange([...selectedAllergens, value]);
    } else {
      setSelectedAllergens(
        selectedAllergens.filter((allergen) => allergen !== value)
      );

      onAllergenChange(
        selectedAllergens.filter((allergen) => allergen !== value)
      );
    }
  };

  return (
    <>
      <div className={cx("!sticky top-[100px] z-30")}>
        <div
          className={cx("flex justify-center items-center mb-4 gap-3")}
          ref={searchInputRef}
        >
          <div
            className={cx(` w-3/4 md:w-1/2 relative transition`, {
              " w-full mx-3 md:mx-0 md:w-3/4": isFixed,
            })}
          >
            {/* Search Input Field */}
            <input
              type="text"
              placeholder="Search..."
              value={value}
              onChange={onChange}
              className="w-full py-3 px-6 pl-12 text-lg text-gray-800 glassmorphism rounded-full border-2 border-softMintGreen focus:outline-none focus:ring-2 focus:ring-softMintGreen transition duration-300 ease-in-out shadow-md"
            />
            {/* Search Icon */}
            <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
              <IoSearchOutline className="text-xl" />
            </span>
            {value && (
              <button
                onClick={() => onChange({ target: { value: "" } })}
                className=" absolute right-4 top-1/2 transform -translate-y-1/2  ml-2 text-gray-500 hover:text-gray-700 focus:outline-none"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            )}
          </div>
          {/* Allergen Filter Select */}
          {/* <TagPicker
            menuClassName="!z-40 "
        
            className="glassmorphism relative z-40"
            onChange={(e) => onAllergenChange(e)}
            size="lg"
            placeholder="Free Of:"
            data={data}
            style={styles}
          /> */}
          {/* Clear Button */}
        </div>
      </div>
      <div
        className={cx(
          " p-2 fixed bottom-5 left-0 select-none !z-[999] glassmorphism px-5 text-sm text-white rounded-[0_5px_5px_0] cursor-pointer transition -translate-x-full",
          { "translate-x-0": openAllergens }
        )}
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <div
          onClick={() => setOpenAllergens(!openAllergens)}
          className={cx(
            "absolute bottom-2  left-[calc(100%+1px)] glassmorphism whitespace-nowrap p-3   hover:px-5 transition text-black !rounded-[0_5px_5px_0] ",
            { "-translate-y-10": openAllergens }
          )}
        >
          {openAllergens ? (
            <div className="text-lg">{cancel_btn}</div>
          ) : (
            <div className="flex items-center gap-3">
              Free Of:{" "}
              <div className="p-3 bg-goldenOrange w-[20px] h-[20px] flex items-center justify-center font-oswald rounded-full">
                {selectedAllergens.length}
              </div>
            </div>
          )}
        </div>
        {/* {<FaOpencart />}   */}
        <div className="flex flex-col gap-2">
          {data.map((item, index) => {
            return (
              <div className="flex gap-2">
                <SolidCheckbox
                  id={"item-" + index}
                  checked={selectedAllergens.find((a) => a == item.value)}
                  small
                  value={item.value}
                  onChange={(e) => handleAllergenChange(e)}
                />
                <label
                  htmlFor={"item-" + index}
                  className="text-black cursor-pointer select-none"
                >
                  {item.label}
                </label>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default SearchInput;
