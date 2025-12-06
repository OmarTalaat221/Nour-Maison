"use client";

import React from "react";
import "./style.scss";
import cx from "classnames";
import { Dropdown } from "rsuite";
import AnimButton from "../../../utils/AnimButton/AnimButton";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { useNotFound } from "../../../app/context/NoutFoundContext";
import CristmasMenuButton from "../../../utils/CristmasMenuButton/CristmasMenuButton";
const TopHeader = () => {
  const { isNotFound } = useNotFound();

  const navItems = [
    { id: 1, name: "HOME", path: "/", type: "navigate" },
    {
      id: 2,
      name: "MENU",
      path: "/menu-gallery",
      type: "navigate",
      items: [
        { id: 1, name: "Menu Classic", path: "/menu" },
        { id: 2, name: "Menu Gallery ", path: "/menu-gallery" },
        { id: 3, name: "Kids Menu ", path: "/kids-menu" },
        { id: 4, name: "Roast Menu ", path: "/roast-menu" },
        { id: 5, name: "Christmas Menu ", path: "/cristmas-menu", new: true },
      ],
    },
    { id: 3, name: "BOOKING", path: "/booking", type: "navigate" },
    // {id: 3, name: "GIFT CARDS", path: "/gift-cards", type: "navigate"},
    { id: 4, name: "GALLERY", path: "/gallery", type: "navigate" },
    { id: 5, name: "OUR EVENTS", path: "/services", type: "navigate" },
    { id: 6, name: "ABOUT US", path: "/about-us", type: "link" },
    // {id: 6, name: "RESERVATION", path: "/", type: "navigate"},
    // {id: 7, name: "PORTFOLIO", path: "/portfolio", type: "navigate"},
    { id: 8, name: "CONTACT US", path: "/contact-us", type: "navigate" },
    // { id: 6, name: "STORE & GIFT CARDS", path: "/store", type: "navigate" },
    { id: 10, name: "BLOGS", path: "/blog", type: "navigate" },
    // { id: 10, name: "BLOGS", path: "/blog", type: "navigate" },
  ];

  const pathname = usePathname();

  const router = useRouter();
  const navigate = (path) => {
    router.push(path);
  };

  return (
    <div className="relative">
      <header
        className={cx(" absolute top-0 z-50 right-0 left-0 mt-6", {
          hidden:
            isNotFound ||
            ["/privacy-policy-2", "/terms-conditions"].includes(pathname),
        })}
      >
        <div className="  ">
          <div className="flex  items-center justify-between px-10  ">
            <div className=" md:flex md:items-center md:gap-12 ">
              <Link
                href="/"
                className="block text-teal-600 cursor-pointer"
                // onClick={() => navigate("/")}
              >
                <span className="sr-only ">Home</span>
                <Image
                  style={{
                    filter: "drop-shadow(4px 2px 2px rgba(63, 63, 63, 0.63)",
                  }}
                  loading="lazy"
                  src="https://res.cloudinary.com/dbzn1y8rt/image/upload/f_auto,q_auto/v1737983251/y3replc9wmlnvwb7kjvo.png"
                  alt="Nour Maison Logo"
                  title="NOUR MAISON"
                  width={100}
                  height={100}
                  className="w-[70px] sm:!w-[70px] md:!w-[80px] lg:!w-[100px]  "
                />
              </Link>
            </div>

            <div className="lg:flex md:items-center md:gap-12 hidden min-h-full   ">
              <nav aria-label="Global" className="hidden lg:block">
                <ul className="flex items-center gap-3  lg:gap-6  text-sm">
                  {navItems.map((item, index) => {
                    return (
                      <li key={index} className={""}>
                        {!item?.items ? (
                          <Link
                            className={cx(
                              `cursor-pointer active:no-underline transition no-underline hover:no-underline  hover:text-white/75 whitespace-nowrap  text-white text-[calc(5px+0.65vw)] lg:text-[calc(8px+0.2vw)] xl:text-[calc(10px+0.25vw)] `,
                              { "!text-goldenOrange": pathname == item?.path }
                            )}
                            href={item.path}
                            // onClick={() => navigate(item.path)}
                          >
                            {" "}
                            {item.name}{" "}
                          </Link>
                        ) : (
                          <Dropdown
                            renderToggle={(props, ref) => (
                              <div
                                {...props}
                                ref={ref}
                                className={cx(
                                  "cursor-pointer transition text-white hover:text-white/75 whitespace-nowrap  text-[calc(5px+0.65vw)] lg:text-[calc(8px+0.2vw)] xl:text-[calc(10px+0.25vw)] ",
                                  {
                                    "!text-goldenOrange":
                                      pathname == "/menu" ||
                                      pathname == "/menu-gallery",
                                  }
                                )}
                                // onClick={() => navigate(item.path)}
                              >
                                {" "}
                                {item.name}{" "}
                              </div>
                            )}
                          >
                            {item.items.map((subItem) => (
                              <Dropdown.Item
                                key={subItem.id}
                                className="relative"
                                // onClick={() => navigate(subItem.path)}
                              >
                                <Link
                                  href={subItem.path}
                                  className="text-black  hover:text-black no-underline hover:no-underline "
                                >
                                  {subItem?.name}
                                  {subItem?.new && (
                                    <span className="absolute top-[-6px] right-[-10px] bg-logoGold text-white px-2 rounded-sm text-xs">
                                      New
                                    </span>
                                  )}
                                </Link>
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
            <div className="hidden lg:flex  gap-3">
              <CristmasMenuButton />
              <AnimButton
                href="/booking"
                onClick={() => navigate("/booking")}
                text={"BOOK NOW"}
              />
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default TopHeader;
