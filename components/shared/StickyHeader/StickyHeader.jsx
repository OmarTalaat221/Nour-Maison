// components/StickyHeader/StickyHeader.jsx
"use client";
import React, { useEffect, useState } from "react";
import BranchesImage from "../../../utils/BranchesImage/BranchesImage";
import cx from "classnames";
import MenuButton from "../../../utils/MenuButton/MenuButton";
import { Dropdown } from "rsuite";
import { usePathname, useRouter } from "next/navigation";
import { useNotFound } from "../../../app/context/NoutFoundContext";
import CristmasMenuButton from "../../../utils/CristmasMenuButton/CristmasMenuButton";

const StickyHeader = ({ open, setOpen }) => {
  const [isVisible, setIsVisible] = useState(false);
  const { isNotFound } = useNotFound();

  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
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
        { id: 1, name: "Menu Classic", path: "/menu" },
        { id: 2, name: "Menu Gallery", path: "/menu-gallery" },
        { id: 3, name: "Kids Menu", path: "/kids-menu" },
        { id: 4, name: "Roast Menu", path: "/roast-menu" },
        { id: 5, name: "Afternoon Tea Menu", path: "/afternoon-tea-menu" },
        {
          id: 6,
          name: "Ramadan Iftar Menu",
          path: "/ramadan-iftar-menu-milton-keynes",
          new: true,
        },
      ],
    },
    { id: 3, name: "BOOKING", path: "/booking", type: "navigate" },
    { id: 4, name: "GALLERY", path: "/gallery", type: "navigate" },
    { id: 11, name: "OUR EVENTS", path: "/services", type: "navigate" },
    { id: 5, name: "ABOUT US", path: "/about-us", type: "link" },
    { id: 8, name: "CONTACT US", path: "/contact-us", type: "navigate" },
    { id: 10, name: "BLOGS", path: "/blog", type: "navigate" },
  ];

  const isMenuActive =
    pathname === "/menu" ||
    pathname === "/menu-gallery" ||
    pathname === "/kids-menu" ||
    pathname === "/roast-menu" ||
    pathname === "/ramadan-iftar-menu-milton-keynes";

  return (
    <>
      {/* ✅ Menu Button - Fixed z-index and positioning */}
      <div
        className={cx(
          "lg:hidden absolute right-3 xs:right-4 sm:right-5 top-3 xs:top-4 sm:top-5 z-[999999998]",
          {
            "!fixed": isVisible,
            "!top-2 xs:!top-3 sm:!top-4": isVisible,
          }
        )}
      >
        <MenuButton
          checked={open}
          green={
            (isVisible && !open) ||
            ([
              "/privacy-policy-2",
              "/terms-and-conditions",
              "/refund-policy",
            ].includes(pathname) &&
              !open)
          }
          onChange={(e) => setOpen(e.target.checked)}
        />
      </div>

      {/* ✅ Header */}
      <div className="site_header relative z-[9999]">
        <header
          className={cx(
            "fixed bg-white transition-all duration-300 -top-full z-[9998] right-0 left-0",
            {
              "!top-0 shadow-md": isVisible,
              "!static": [
                "/privacy-policy-2",
                "/terms-and-conditions",
                "/refund-policy",
              ].includes(pathname),
            }
          )}
        >
          {/* Branches - Hidden on mobile */}
          <div className="hidden lg:block">
            <BranchesImage
              variant={"top-right"}
              className={"w-[80px] xl:w-[100px]"}
            />
            <BranchesImage
              variant={"top-left"}
              className={"w-[80px] xl:w-[100px]"}
            />
          </div>

          <div className="relative">
            <div className="flex items-center justify-between site_header_content px-3 xs:px-4 sm:px-6 md:px-8 lg:px-[80px] xl:px-[120px] 2xl:px-[150px] py-1.5 xs:py-2 sm:py-2.5 shadow-lg">
              {/* Logo */}
              <div className="flex items-center gap-4 md:gap-8 lg:gap-12 cursor-pointer">
                <div
                  className="block cursor-pointer"
                  onClick={() => navigate("/")}
                >
                  <span className="sr-only">Home</span>
                  <img
                    loading="lazy"
                    src="https://res.cloudinary.com/dhebgz7qh/image/upload/v1767452496/y3replc9wmlnvwb7kjvo_hyo3u3.png"
                    alt="Nour Maison Logo"
                    className="w-[45px] xs:w-[50px] sm:w-[55px] md:w-[60px] lg:w-[65px] xl:w-[70px]"
                    title="NOUR MAISON"
                  />
                </div>
              </div>

              {/* Navigation - Hidden on mobile/tablet, shown on lg+ */}
              <div className="hidden lg:flex items-center gap-6 xl:gap-8 2xl:gap-12">
                <nav aria-label="Global">
                  <ul className="flex m-0 items-center gap-3 xl:gap-4 2xl:gap-6 text-sm">
                    {navItems.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className={cx({
                            "text-goldenOrange":
                              pathname === item?.path ||
                              (item.items && isMenuActive),
                            "text-softMintGreen":
                              pathname !== item?.path &&
                              !(item.items && isMenuActive),
                          })}
                        >
                          {!item?.items ? (
                            <div
                              className="whitespace-nowrap m-0 font-seasons font-bold tracking-wider transition relative group cursor-pointer hover:text-goldenOrange text-[11px] lg:text-[12px] xl:text-[13px] 2xl:text-[15px]"
                              onClick={() => navigate(item.path)}
                            >
                              {item.name}
                              <span
                                className={cx(
                                  "w-0 whitespace-nowrap m-0 leading-none group-hover:w-full absolute bottom-[-8px] xl:bottom-[-10px] left-0 h-[2px] xl:h-[3px] bg-goldenOrange transition-all duration-300",
                                  { "!w-full": pathname === item.path }
                                )}
                              ></span>
                            </div>
                          ) : (
                            <Dropdown
                              placement="bottomStart"
                              renderToggle={(props, ref) => (
                                <div
                                  {...props}
                                  ref={ref}
                                  className={cx(
                                    "whitespace-nowrap m-0 font-seasons font-bold tracking-wider transition relative group cursor-pointer hover:text-goldenOrange text-[11px] lg:text-[12px] xl:text-[13px] 2xl:text-[15px]",
                                    {
                                      "text-goldenOrange": isMenuActive,
                                    }
                                  )}
                                >
                                  {item.name}
                                  <span
                                    className={cx(
                                      "w-0 whitespace-nowrap m-0 leading-none group-hover:w-full absolute bottom-[-8px] xl:bottom-[-10px] left-0 h-[2px] xl:h-[3px] bg-goldenOrange transition-all duration-300",
                                      { "!w-full": isMenuActive }
                                    )}
                                  ></span>
                                </div>
                              )}
                            >
                              {item.items.map((subItem) => (
                                <Dropdown.Item
                                  key={subItem.id}
                                  onSelect={() => navigate(subItem.path)}
                                  className={cx(
                                    "relative transition-all duration-200 hover:!bg-logoGold/10 hover:!text-logoGold text-sm",
                                    {
                                      "!text-logoGold !bg-logoGold/5 !font-bold":
                                        pathname === subItem.path,
                                    }
                                  )}
                                >
                                  {subItem.name}
                                  {subItem?.new && (
                                    <span className="absolute top-[-6px] right-[-10px] bg-logoGold text-white px-1.5 xl:px-2 rounded-sm text-[10px] xl:text-xs">
                                      New
                                    </span>
                                  )}
                                </Dropdown.Item>
                              ))}
                            </Dropdown>
                          )}
                        </li>
                      );
                    })}
                  </ul>
                </nav>
              </div>

              {/* Book Now Button - Hidden on mobile */}
              <div className="hidden lg:flex gap-3">
                <button
                  className="font-seasons tracking-widest site_header_content_btn outlined_btn px-7 !py-3 hover:scale-110 transition-[.4s] whitespace-nowrap bg-logoGold text-white hidden"
                  onClick={() => (window.location.href = "/booking")}
                >
                  BOOK NOW
                </button>
              </div>

              {/* Spacer for mobile to balance the layout */}
              <div className="w-[45px] xs:w-[50px] sm:w-[55px] lg:hidden"></div>
            </div>
          </div>
        </header>
      </div>
    </>
  );
};

export default StickyHeader;
