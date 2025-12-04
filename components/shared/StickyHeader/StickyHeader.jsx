"use client";
import React, { useEffect, useState } from "react";
import BranchesImage from "../../../utils/BranchesImage/BranchesImage";
import cx from "classnames";
import MenuButton from "../../../utils/MenuButton/MenuButton";
import { Dropdown } from "rsuite";
import { usePathname, useRouter } from "next/navigation";
import { useNotFound } from "../../../app/context/NoutFoundContext";

const StickyHeader = ({ open, setOpen }) => {
  const [isVisible, setIsVisible] = useState(false);
  const { isNotFound } = useNotFound();

  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.scrollY > 200
        // ["/privacy-policy-2", "/terms-conditions"].includes(pathname)
      ) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navigate = (path) => {
    router.push(path);
  };

  const navItems = [
    { id: 1, name: "HOME", path: "/", type: "navigate" },
    {
      id: 2,
      name: "MENU",
      path: "/menu-gallery",
      type: "navigate",
      items: [
        { id: 5, name: "Christmas Menu ", path: "/cristmas-menu" },
        { id: 1, name: "Menu Classic", path: "/menu" },
        { id: 2, name: "Menu Gallery ", path: "menu" },
        { id: 3, name: "Kids Menu ", path: "/kids-menu" },
        { id: 4, name: "Roast Menu ", path: "/roast-menu" },
      ],
    },
    { id: 3, name: "BOOKING", path: "/booking", type: "navigate" },
    // {id: 3, name: "GIFT CARDS", path: "/gift-cards", type: "navigate"},
    { id: 4, name: "GALLERY", path: "/gallery", type: "navigate" },
    { id: 11, name: "OUR EVENTS", path: "/services", type: "navigate" },
    { id: 5, name: "ABOUT US", path: "/about-us", type: "link" },
    // {id: 6, name: "RESERVATION", path: "/", type: "navigate"},
    // {id: 7, name: "PORTFOLIO", path: "/portfolio", type: "navigate"},
    { id: 8, name: "CONTACT US", path: "/contact-us", type: "navigate" },
    { id: 6, name: "STORE & GIFT CARDS", path: "/store", type: "navigate" },
    { id: 10, name: "BLOGS", path: "/blog", type: "navigate" },
  ];

  return (
    <>
      <div
        className={cx("lg:hidden absolute right-5 top-5 z-[999999999]", {
          "!fixed": isVisible,
        })}
      >
        <MenuButton
          checked={open}
          green={
            (isVisible && !open) ||
            (["/privacy-policy-2", "/terms-conditions"].includes(pathname) &&
              !open)
          }
          onChange={(e) => setOpen(e.target.checked)}
        />
      </div>
      <div className=" site_header relative z-30">
        <header
          className={cx(
            "fixed bg-white transition-all -top-full  z-30 right-0 left-0",
            {
              "!top-0": isVisible,
              "!static": ["/privacy-policy-2", "/terms-conditions"].includes(
                pathname
              ),
            }
          )}
        >
          <div className="hidden lg:block">
            <BranchesImage variant={"top-right"} className={"w-[100px]"} />
            <BranchesImage variant={"top-left"} className={"w-[100px]"} />
          </div>

          <div className="  relative ">
            <div className="flex  items-center justify-between site_header_content  lg:px-[100px] xl:px-[150px]  py-2 shadow-lg  ">
              <div className=" md:flex md:items-center md:gap-12 cursor-pointer ">
                <div
                  className="block cursor-pointer text-teal-600 cursor-pointer"
                  onClick={() => navigate("/")}
                >
                  <span className="sr-only">Home</span>
                  <img
                    loading="lazy"
                    src="https://res.cloudinary.com/dbzn1y8rt/image/upload/f_auto,q_auto/v1737983251/y3replc9wmlnvwb7kjvo.png"
                    alt="Nour Maison Logo"
                    className="  w-[60px] md:w-[70px] mdd:!w-[60px]"
                    title="NOUR MAISON"
                  />
                </div>
              </div>

              <div className=" hidden site_header_content_navs md:items-center md:gap-12 ">
                <nav aria-label="Global" className="hidden md:block">
                  <ul className="flex m-0 items-center gap-6 text-sm">
                    {navItems.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className={cx(
                            pathname == item?.path
                              ? "text-goldenOrange"
                              : "text-softMintGreen"
                          )}
                        >
                          {!item?.items ? (
                            <div
                              className=" whitespace-nowrap m-0  transition  relative group cursor-pointer hover:text-goldenOrange text-[calc(5px+0.65vw)] lg:text-[calc(8px+0.2vw)] xl:text-[calc(10px+0.25vw)] "
                              onClick={() => navigate(item.path)}
                            >
                              {" "}
                              {item.name}{" "}
                              <span
                                className={cx(
                                  "w-0 whitespace-nowrap m-0  leading-none group-hover:w-full absolute bottom-[-10px] left-0 h-[3px] bg-goldenOrange  transition-all duration-300",
                                  { "!w-full": pathname == item.path }
                                )}
                              ></span>
                            </div>
                          ) : (
                            <Dropdown
                              renderToggle={(props, ref) => (
                                <div
                                  {...props}
                                  ref={ref}
                                  className=" whitespace-nowrap m-0  transition  relative group cursor-pointer hover:text-goldenOrange text-[calc(5px+0.65vw)] lg: xl:text-[15px] "
                                  // onClick={() => navigate(item.path)}
                                >
                                  {" "}
                                  {item.name}{" "}
                                  <span className="w-0 whitespace-nowrap m-0  leading-none group-hover:w-full absolute bottom-[-10px] left-0 h-[3px] bg-goldenOrange  transition-all duration-300"></span>
                                </div>
                              )}
                            >
                              {item.items.map((subItem) => (
                                <Dropdown.Item
                                  key={subItem.id}
                                  onClick={() => navigate(subItem.path)}
                                >
                                  {subItem.name}
                                </Dropdown.Item>
                              ))}
                            </Dropdown>
                          )}
                        </li>
                      );
                    })}
                    {/* <li>
                    <a
                      className=' text-softMintGreen transition  relative group cursor-pointer hover:text-goldenOrange text-[15px] '
                      onClick={() => navigate("/about-us")}
                    >
                      {" "}
                      MENU{" "}
                      <span className='w-0 group-hover:w-full absolute bottom-[-10px] left-0 h-[3px] bg-goldenOrange transition-all duration-300'></span>
                    </a>
                  </li>

                  <li>
                    <a
                      className=' text-softMintGreen transition  relative group cursor-pointer hover:text-goldenOrange text-[15px] '
                      onClick={() => navigate("/booking")}
                    >
                      {" "}
                      BOOKING{" "}
                      <span className='w-0 group-hover:w-full absolute bottom-[-10px] left-0 h-[3px] bg-goldenOrange transition-all duration-300'></span>
                    </a>
                  </li>
                  <li>
                    <a
                      className=' text-softMintGreen transition  relative group cursor-pointer hover:text-goldenOrange text-[15px] '
                      onClick={() => navigate("/gift-cards")}
                    >
                      {" "}
                      GIFT CARDS{" "}
                      <span className='w-0 group-hover:w-full absolute bottom-[-10px] left-0 h-[3px] bg-goldenOrange transition-all duration-300'></span>
                    </a>
                  </li>

                  <li>
                    <a
                      className='relative group text-softMintGreen transition   group cursor-pointer hover:text-goldenOrange text-[15px] '
                      onClick={() => navigate("/gallery")}
                    >
                      {" "}
                      GALLERY{" "}
                      <span className='w-0 group-hover:w-full absolute bottom-[-10px] left-0 h-[3px] bg-goldenOrange transition-all duration-300'></span>
                    </a>
                  </li>

                  <li>
                    <a
                      className=' text-softMintGreen transition  relative group cursor-pointer hover:text-goldenOrange text-[15px] '
                      onClick={() => navigate("/about-us")}
                    >
                      {" "}
                      ABOUT US{" "}
                      <span className='w-0 group-hover:w-full absolute bottom-[-10px] left-0 h-[3px] bg-goldenOrange transition-all duration-300'></span>
                    </a>
                  </li>

                  <li>
                    <a
                      className='text-softMintGreen transition cursor-pointer hover:text-goldenOrange text-[15px]  !capitaze relative group '
                      onClick={() => navigate("/portfolio")}
                    >
                      {" "}
                      PORTFOLIO{" "}
                      <span className='w-0 group-hover:w-full absolute bottom-[-10px] left-0 h-[3px] bg-goldenOrange transition-all duration-300'></span>
                    </a>
                  </li>
                  <li>
                    <a
                      className='text-softMintGreen transition cursor-pointer hover:text-goldenOrange text-[15px]  relative group'
                      onClick={() => navigate("/contact-us")}
                    >
                      {" "}
                      CONTACT US{" "}
                      <span className='w-0 group-hover:w-full absolute bottom-[-10px] left-0 h-[3px] bg-goldenOrange transition-all duration-300'></span>
                    </a>
                  </li> */}
                  </ul>
                </nav>
              </div>

              <button
                className="  site_header_content_btn outlined_btn px-7 !py-3 hover:scale-110 transition-[.4s] whitespace-nowrap  bg-logoGold text-white hidden  "
                onClick={() => (window.location.href = "/booking")}
              >
                BOOK NOW
              </button>
            </div>
          </div>
        </header>
      </div>
    </>
  );
};

export default StickyHeader;
