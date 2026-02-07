import React, { useState, useEffect, useRef } from "react";
import { IoSearchOutline } from "react-icons/io5";
import cx from "classnames";
import "./style.scss";
import SolidCheckbox from "../../../utils/SolidCheckbox/SolidCheckbox";
import { cancel_btn } from "../../Cart/Cart";
import {
  FaBreadSlice,
  FaCloud,
  FaEgg,
  FaFish,
  FaGlassWhiskey,
  FaLeaf,
  FaWineBottle,
} from "react-icons/fa";
import { FaShrimp } from "react-icons/fa6";
import { LuLeafyGreen, LuNut } from "react-icons/lu";

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

  // import {
  //   FaLeaf,          // Celery 🌿
  //   FaBreadSlice,    // Cereals/Gluten 🍞
  //   FaFish,          // Crustaceans 🦐 + Fish 🐟
  //   FaEgg,           // Eggs 🥚
  //   GiFishEggs,      // Fish Alternative 🎯
  //   GiFlowerPot,     // Lupin 🌼
  //   FaGlassWhiskey,  // Milk (رمزيًا 🥛)
  //   GiMustardBottle, // Mustard
  //   GiNuts,          // Nuts 🌰
  //   GiPeanut,        // Peanuts 🥜
  //   GiSesame,        // Sesame Seeds
  //   GiBeanstalk,     // Soya 🌱
  //   FaCloud,         // Sulphur Dioxide 🌫️
  // } from "react-icons/all"; // أو استورد من كل مكتبة حسب الأيقونة

  const data = [
    {
      icon: <FaLeaf />,
      text: "Celery",
    },
    {
      icon: <FaBreadSlice />,
      text: "Cereals/Gluten",
    },
    {
      icon: <FaShrimp />,
      text: "Crustaceans",
    },
    {
      icon: <FaEgg />,
      text: "Eggs",
    },
    {
      icon: <FaFish />,
      text: "Fish",
    },
    {
      icon: <LuLeafyGreen />,
      text: "Lupin",
    },
    {
      icon: <FaGlassWhiskey />,
      text: "Milk",
    },
    {
      icon: <FaWineBottle />,
      text: "Mustard",
    },
    {
      icon: <LuNut />,
      text: "Nuts",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
          width="1em"
          height="1em"
        >
          <g>
            <path d="M24.243 5.448c.232-.24.58-.159.878.08a62 62 0 0 1 1.459 1.488c.313.348.104.598-.069.804l-.02.024c-.175.211-1.018 1.04-1.211 1.224c-.194.185-.536.23-.8-.044a260 260 0 0 0-1.555-1.568c-.263-.264-.061-.581.114-.801c.14-.177.861-.878 1.204-1.207m-1.113 6.783c.353-.27.648-.129.924.116c.295.29.956.933 1.226 1.177c.27.245.121.489-.071.701c-.16.178-.721.576-1.19.908l-.26.186c-.494.354-.879.09-1.065-.039c-.186-.128-1.123-1.055-1.303-1.267s.007-.495.18-.63c.086-.067.224-.158.37-.254c.148-.097.303-.2.42-.287c.11-.083.21-.164.323-.257c.123-.1.262-.213.446-.354m-4.65-5.215c-.273-.3-.52-.502-.835-.168c-.317.335-.984 1.225-1.142 1.498c-.159.273-.3.74 0 1.022c.14.133.355.365.566.593c.235.255.464.503.576.596l.057.049c.201.174.45.389.698.004c.272-.423.773-1.19.993-1.419s.544-.695.228-1.012l-.25-.25c-.305-.301-.676-.67-.892-.913M9.757 19.11c-.353.27-.649.128-.924-.116c-.296-.29-.956-.933-1.226-1.177c-.27-.245-.122-.49.07-.701c.162-.178.722-.576 1.19-.908l.26-.186c.495-.354.88-.09 1.066.039c.186.128 1.123 1.055 1.302 1.267s-.006.495-.18.63a7 7 0 0 1-.37.254a9 9 0 0 0-.419.287c-.11.083-.21.164-.323.256c-.123.1-.262.214-.446.355m-1.584 7.111c-.232.24-.58.159-.879-.08a62 62 0 0 1-1.458-1.488c-.313-.348-.104-.598.068-.804l.02-.024c.176-.211 1.019-1.04 1.212-1.224c.194-.185.536-.23.8.044c.263.272 1.285 1.298 1.553 1.566l.001.001c.264.265.062.582-.113.802c-.141.177-.861.878-1.204 1.207m5.869-1.955c.272.3.518.502.834.167s.984-1.224 1.142-1.497s.299-.74 0-1.022c-.14-.133-.356-.366-.566-.593c-.235-.255-.464-.503-.576-.596l-.057-.05c-.202-.174-.45-.389-.699-.003c-.272.422-.772 1.189-.992 1.418s-.545.696-.229 1.013l.25.248l.001.001c.304.302.676.67.891.914m2.609-6.554c-.236.238-.65.176-.957-.114l-.26-.26a70 70 0 0 1-1.102-1.114c-.351-.37-.079-.714.132-.952a49 49 0 0 1 1.353-1.365c.255-.247.624-.15.922.097c.234.192.761.76 1.132 1.16l.265.284c.317.335.053.74-.131.916c-.185.177-1.116 1.11-1.353 1.348"></path>
            <path d="M24.409 1.353c-3.81-.975-6.427.228-8.2 1.65c-2.013 1.615-3.035 3.863-3.198 5.748c-.136 1.568-.367 2.356-1.007 3.05c-.365.395-.646.626-1.035.793c-.412.177-1.021.314-2.081.371c-1.335.072-2.671.6-3.778 1.317c-1.102.713-2.073 1.674-2.612 2.714l-.173.33c-.364.693-.733 1.396-.981 2.168c-.301.935-.425 1.956-.29 3.28c.272 2.64 1.471 4.634 2.511 5.756l.026.028l.028.026c.376.348.979.78 1.656 1.167s1.495.765 2.306.957c1.852.441 5.222.652 7.89-1.415c2.543-1.97 3.47-4.254 3.634-6.148c.071-.815.136-1.31.252-1.704c.106-.355.262-.649.57-1.014c.596-.706 1.585-1.299 2.953-1.357c1.908-.082 4.93-1.094 6.756-4.16c1.798-3.017 1.516-6.17.864-7.885c-.606-1.594-2.177-4.67-6.091-5.672m-6.948 3.21c1.39-1.115 3.374-2.06 6.452-1.272c2.973.76 4.198 3.078 4.717 4.444c.473 1.243.723 3.742-.712 6.151c-1.406 2.36-3.728 3.126-5.123 3.186c-1.936.082-3.446.939-4.396 2.065c-.465.55-.765 1.085-.959 1.734c-.181.612-.257 1.296-.327 2.101c-.117 1.348-.772 3.117-2.867 4.74c-1.97 1.527-4.601 1.431-6.202 1.05c-.56-.132-1.194-.415-1.778-.748c-.564-.322-1.02-.655-1.26-.872c-.784-.858-1.743-2.447-1.962-4.573c-.11-1.072-.005-1.813.204-2.463c.19-.595.47-1.129.84-1.834l.184-.354c.34-.652 1.028-1.377 1.925-1.957c.892-.578 1.895-.95 2.799-.999c1.164-.063 2.04-.22 2.763-.531c.748-.321 1.252-.773 1.715-1.274c1.108-1.201 1.384-2.559 1.53-4.233c.117-1.356.88-3.097 2.457-4.361"></path>
          </g>
        </svg>
      ),
      text: "Peanuts",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          width="1em"
          height="1em"
        >
          <path d="M208.4 25.12c-30.5.3-61.8 19.64-76.4 47.46c39.5 30.52 98.8 5.06 118.5-33.01c-12.5-10.18-27.2-14.59-42.1-14.45m89.1 33.98c-30.6 38.5-7.1 96.9 34.5 118.2c30.1-40 3.8-99-34.5-118.2m119.8 10.65c-20.4 44.55 16.2 95.65 61.8 106.35c19.6-46-20-96.89-61.8-106.35M86.29 71.19C38.12 80.72 18.2 140.3 36.19 183.5c48.72-11 66.91-72.9 50.1-112.31M186.6 171.4c-42.3 0-76.5 42.7-77 85.1c49.2 9 90.3-40.9 90.3-83.7c-4.5-1-9-1.4-13.3-1.4m114.6 24.8c-30.6 38.5-7.1 96.9 34.5 118.2c30.1-40 3.8-99-34.5-118.2M458 248.9c-49.9 2.1-79 59.8-69.5 101.6c49.1-.8 79.4-55.9 69.5-101.6m-318.8 65.8c-39.4 29.3-31.8 91.7 3 123c39.3-30.9 29.1-94.7-3-123M265.3 325c-24.8-.2-50.2 9.9-65.8 26.5c28.2 40.3 90.8 34.5 123.1.7c-13.9-18.9-35.4-27.1-57.3-27.2M53.46 365.7c-29.71 39-5.16 96.9 36.9 117.4c29.24-40.6 1.8-99-36.9-117.4m362.74 24.2c-45.4-.3-78.8 47.9-75 92.3c49.9 4.3 86-49.3 81.8-91.9c-2.3-.3-4.5-.4-6.8-.4"></path>
        </svg>
      ),
      text: "Sesame Seeds",
    },

    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          width="1em"
          height="1em"
        >
          <path d="m277.625 18.28l-.03.19c43.815 5.928 65.818 46.853 56.405 83.093a226 226 0 0 1-9.125 11.812a280 280 0 0 1-9.688 11.094c6.68-.152 13.668.15 20.875.624c9.283.61 19.004 1.59 28.844 2.562c26.745-9.698 50.2-28.826 64.063-49.937c13.548-20.635 17.76-41.997 10-59.314h-72.44c-1.88 18.198-6.547 34.794-13.405 50.188c-3.814-19.43-14.214-37.48-30-50.313h-45.5zm181.25.126c6.692 22.627-.026 47.854-14.28 69.563c-10.697 16.286-25.69 31.1-43.47 42.5l.875.03c21.978.764 42.687-1.078 58.813-8.656c15.16-7.125 26.88-18.75 33.875-40.656V18.406zM196.53 61.47a55 55 0 0 0-4.374.155c-20.14 1.544-35.922 13.995-41.47 30.25c-6.338 18.577 2.098 41.598 26.19 53.97l8.53-16.626c-17.98-9.234-20.494-21.165-17.03-31.314c3.462-10.15 14.346-18.986 31.155-17.625c22.357 1.813 37.36 13.07 45.064 32.407c7.483 18.79 7.26 46.055-5.156 78.75c-2.05 1.637-4.052 3.255-6.125 4.907c-6.142 4.893-12.406 9.9-18.72 14.97a121 121 0 0 1 15.376-1.22c1.482-.023 2.968-.028 4.436 0c11.748.222 23.045 2.02 34 4.437c37.61 8.3 71.348 23.35 116.094 15.157c22.666-5.32 41.84-16.25 58.22-31.125c22.16-20.127 38.942-47.686 50.56-77.812c-7.16 7.816-15.474 13.776-24.53 18.03c-20.514 9.64-44.072 11.188-67.406 10.376c-11.56-.402-23.12-1.424-34.25-2.5c-.312.102-.625.213-.938.313l-.125-.407c-10.95-1.065-21.484-2.174-31.186-2.813c-19.856-1.308-35.957-.013-44.063 4.875l-.03-.063c-8.127 7.4-16.694 14.732-25.594 22.094c5.29-24.71 4.016-46.79-3.187-64.875c-10.062-25.258-32.55-41.824-60.94-44.124a58 58 0 0 0-4.5-.187zm33.845 167.28a100 100 0 0 0-27.344 4.188c-10.568 3.14-21.832 8.313-34.06 16.343c-12.443 10.887-24.955 22.415-37.376 34.75a54 54 0 0 0-.344-6.186c-1.712-15.185-10.186-27.355-21.188-35.063c-11-7.707-24.638-11.676-37.968-11.186s-26.343 5.43-36.03 15.47c-18.76 19.434-19.104 43.565-6.44 57.186c12.666 13.62 36.54 14.862 55.345-1.875l-12.407-13.97c-13.2 11.75-23.73 9.063-29.25 3.126c-5.52-5.936-7.83-16.975 6.187-31.5c11.472-11.885 35.21-12.22 49.844-1.967c7.317 5.126 12.254 12.21 13.344 21.875c1.004 8.913-1.393 20.632-10.5 35.218a606 606 0 0 0-11.844 13.813c22.05-8.594 43.864-9.63 66.22-10.533c42.668-1.724 88.234-2.342 152.28-48.593c13.46-3.538 24.74-3.17 32.937-.313c10.874 3.792 16.97 11.038 18.533 22.783c1.088 8.183-2.835 12.686-7.282 14.312c-4.445 1.626-9.816 1.293-15.217-7.875l-16.094 9.5c8.898 15.105 25.03 20.576 37.717 15.938c12.687-4.64 21.516-18.457 19.407-34.313c-2.384-17.922-14.236-32.156-30.906-37.97c-4.707-1.64-9.77-2.682-15.094-3.124c-.02 0-.042.003-.063 0c-25.17-3.576-47.403-11.364-68.405-16c-11.5-2.537-22.618-4.2-34-4.03zm41.438 84.625c-23.824 11.1-45.46 16.75-65.25 19.78c-8.886 26.954-37.427 47.482-70.47 61.626c-33.138 14.187-71.51 21.632-103.437 17.19a598 598 0 0 0-13.343 24.56v57.25H90.28c53.69-26.358 106.106-70.88 143.69-124.374c11.174-20.2 23.99-38.768 37.843-56.03zm-87.157 22.28c-9.562.76-18.652 1.12-27.344 1.47c-23.177.937-43.168 2.06-62.562 10.188c-12.78 5.356-25.608 13.84-39.156 27.875a579 579 0 0 0-12.375 19.062c25.817 1.616 58.038-4.857 85.53-16.625c25.574-10.947 46.53-26.7 56.03-41.97c-.04.005-.083-.002-.124 0zM333.75 364.5a86 86 0 0 0-3.28.063c-17.584.616-35.97 6.193-54.126 15.093c-24.357 11.94-48.364 29.917-68.906 51.188c.05-.157.106-.313.156-.47c-23.996 24.686-50.768 46.182-78.72 63.407h65.032c.874-7.292 1.98-14.4 3.25-21.374c22.468-31.78 55.39-60.272 87.406-75.97c16.41-8.044 32.53-12.694 46.563-13.186s25.78 2.896 35.313 11c15.122 12.856 14.897 31.182 6.312 44.5s-24.29 21.298-46.78 10l-8.376 16.72c29.54 14.837 57.8 3.69 70.875-16.595c13.075-20.284 12.206-50.05-9.94-68.875c-12.62-10.73-28.374-15.46-44.78-15.5z"></path>
        </svg>
      ),
      text: "Soya",
    },

    {
      icon: <FaCloud />,
      text: "Sulphur Dioxide",
    },

  ].map((item) => ({
    label: (
      <div className="flex gap-2 items-center">
        <div className="text-lg !text-logoGold !fill-logoGold">{item.icon}</div>
        {item.text}
      </div>
    ),
    value: item.text,
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
      <div className={cx("!sticky top-[100px] z-10")}>
        <div
          className={cx("flex justify-center items-center px-2 mb-4 gap-2")}
          ref={searchInputRef}
        >
          <div
            className={cx(` w-full md:w-1/2 relative transition`, {
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
          <button onClick={() => setOpenAllergens(!openAllergens)} className=" py-3 px-4  text-lg text-gray-800 glassmorphism rounded-full border-2 border-softMintGreen focus:outline-none focus:ring-2 focus:ring-softMintGreen transition duration-300 ease-in-out shadow-md">
            Allergies
          </button>
        </div>
      </div>
      <div
        className={cx(
          " p-2 fixed bottom-5  right-0 select-none !z-[999]  bg-white px-5 text-sm text-white rounded-[5px_0_0_5px] cursor-pointer transition translate-x-full",
          { "!translate-x-0": openAllergens }
        )}
        onClick={(e) => {
          e.stopPropagation();
        }}
      >

        {/* {<FaOpencart />}   */}
        <div className="flex flex-col gap-2">
          {data.map((item, index) => {
            return (
              <div key={index} className="flex gap-2">
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
