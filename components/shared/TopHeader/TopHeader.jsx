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
import { useHeader } from "../../../app/context/HeaderContext";

const TopHeader = () => {
  const { isNotFound } = useNotFound();
  const { headerWithBg } = useHeader();
  const pathname = usePathname();
  const router = useRouter();

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
        {
          id: 5,
          name: "Ramadan Iftar Menu ",
          path: "/ramadan-iftar-menu-milton-keynes",
          new: true,
        },
      ],
    },
    { id: 3, name: "BOOKING", path: "/booking", type: "navigate" },
    { id: 4, name: "GALLERY", path: "/gallery", type: "navigate" },
    { id: 5, name: "OUR EVENTS", path: "/services", type: "navigate" },
    { id: 6, name: "ABOUT US", path: "/about-us", type: "link" },
    { id: 8, name: "CONTACT US", path: "/contact-us", type: "navigate" },
    { id: 10, name: "BLOGS", path: "/blog", type: "navigate" },
  ];

  // الصفحات اللي مش عايز فيها Header
  const hiddenPages = ["/privacy-policy-2", "/terms-conditions", "/checkout"];

  if (isNotFound || hiddenPages.includes(pathname)) {
    return null;
  }

  return (
    <div className="relative z-[999999]">
      <header
        className={cx(
          "top-0 z-[999999] right-0 left-0 transition-all duration-300",
          {
            // لو معاه خلفية
            "relative bg-sageGreen shadow-md py-3": headerWithBg,
            // لو شفاف (على البانر)
            "absolute mt-6": !headerWithBg,
          }
        )}
      >
        <div>
          <div className="flex items-center justify-between px-6 md:px-10">
            {/* Logo */}
            <div className="md:flex md:items-center md:gap-12">
              <Link href="/" className="block text-teal-600 cursor-pointer">
                <span className="sr-only">Home</span>
                <Image
                  style={{
                    filter: headerWithBg
                      ? "none"
                      : "drop-shadow(4px 2px 2px rgba(63, 63, 63, 0.63))",
                  }}
                  loading="lazy"
                  src="https://res.cloudinary.com/dhebgz7qh/image/upload/v1767452496/y3replc9wmlnvwb7kjvo_hyo3u3.png"
                  alt="Nour Maison Logo"
                  title="NOUR MAISON"
                  width={100}
                  height={100}
                  className={cx("transition-all duration-300", {
                    "w-[60px] sm:!w-[60px] md:!w-[70px] lg:!w-[80px]":
                      headerWithBg,
                    "w-[70px] sm:!w-[70px] md:!w-[80px] lg:!w-[100px]":
                      !headerWithBg,
                  })}
                />
              </Link>
            </div>

            {/* Navigation */}
            <div className="lg:flex md:items-center md:gap-12 hidden min-h-full">
              <nav aria-label="Global" className="hidden lg:block">
                <ul className="flex items-center gap-3 lg:gap-6 text-sm">
                  {navItems.map((item, index) => {
                    return (
                      <li key={index}>
                        {!item?.items ? (
                          <Link
                            href={item.path}
                            className={cx(
                              "group relative no-underline hover:no-underline inline-flex items-center px-1 py-2 !font-seasons font-semibold tracking-[0.25em] " +
                                "text-[calc(5px+0.65vw)] lg:text-[calc(8px+0.2vw)] xl:text-[calc(10px+0.25vw)] " +
                                "transition-all duration-300 ease-out " +
                                "hover:-translate-y-[2px] hover:tracking-[0.32em] " +
                                "active:translate-y-0",
                              {
                                // لون النص حسب الخلفية
                                "text-white hover:text-white": !headerWithBg,
                                "text-white hover:text-logoGold": headerWithBg,
                                // Active state
                                "!text-goldenOrange":
                                  pathname === item?.path && !headerWithBg,
                                "!text-logoGold":
                                  pathname === item?.path && headerWithBg,
                              }
                            )}
                          >
                            <span
                              className={cx(
                                "pointer-events-none absolute inset-0 -z-10 rounded-xl opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-70",
                                { hidden: headerWithBg }
                              )}
                              style={{
                                background:
                                  "radial-gradient(closest-side, rgba(255,180,70,0.35), transparent 70%)",
                              }}
                            />
                            <span className="relative">{item.name}</span>
                            <span
                              className={cx(
                                "pointer-events-none absolute left-1/2 bottom-1 h-[2px] w-0 -translate-x-1/2 rounded-full " +
                                  "transition-all duration-300 group-hover:w-[120%]",
                                {
                                  "bg-gradient-to-r from-transparent via-white/90 to-transparent":
                                    !headerWithBg,
                                  "bg-logoGold": headerWithBg,
                                  "via-[#D59A3B] w-[120%]":
                                    pathname === item?.path,
                                }
                              )}
                            />
                          </Link>
                        ) : (
                          <Dropdown
                            renderToggle={(props, ref) => (
                              <div
                                {...props}
                                ref={ref}
                                className={cx(
                                  "group relative inline-flex items-center gap-2 px-1 py-2 cursor-pointer " +
                                    "!font-seasons font-semibold tracking-[0.25em] " +
                                    "text-[calc(5px+0.65vw)] lg:text-[calc(8px+0.2vw)] xl:text-[calc(10px+0.25vw)] " +
                                    "transition-all duration-300 ease-out " +
                                    "hover:-translate-y-[2px] hover:tracking-[0.32em]",
                                  {
                                    "text-white hover:text-white":
                                      !headerWithBg,
                                    "text-white hover:text-logoGold":
                                      headerWithBg,
                                    "!text-goldenOrange":
                                      (pathname === "/menu" ||
                                        pathname === "/menu-gallery") &&
                                      !headerWithBg,
                                    "!text-logoGold":
                                      (pathname === "/menu" ||
                                        pathname === "/menu-gallery") &&
                                      headerWithBg,
                                  }
                                )}
                              >
                                <span
                                  className={cx(
                                    "pointer-events-none absolute inset-0 -z-10 rounded-xl opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-70",
                                    { hidden: headerWithBg }
                                  )}
                                  style={{
                                    background:
                                      "radial-gradient(closest-side, rgba(255,180,70,0.35), transparent 70%)",
                                  }}
                                />
                                <span className="relative">{item.name}</span>
                                <span
                                  className={cx(
                                    "relative origin-center transition-transform duration-300 group-hover:rotate-180",
                                    {
                                      "text-white/80": !headerWithBg,
                                      "text-white/60": headerWithBg,
                                    }
                                  )}
                                >
                                  ▾
                                </span>
                                <span
                                  className={cx(
                                    "pointer-events-none absolute left-1/2 bottom-1 h-[2px] w-0 -translate-x-1/2 rounded-full transition-all duration-300 group-hover:w-[120%]",
                                    {
                                      "bg-gradient-to-r from-transparent via-white/90 to-transparent":
                                        !headerWithBg,
                                      "bg-logoGold": headerWithBg,
                                    }
                                  )}
                                />
                              </div>
                            )}
                          >
                            {item.items.map((subItem) => (
                              <Dropdown.Item
                                key={subItem.id}
                                className="relative !p-0"
                              >
                                <Link
                                  href={subItem.path}
                                  className={
                                    "group flex items-center justify-between gap-4 px-4 py-3 text-black no-underline hover:no-underline " +
                                    "transition-all duration-200 hover:bg-black/5"
                                  }
                                >
                                  <span className="transition-transform duration-200 group-hover:translate-x-1">
                                    {subItem.name}
                                  </span>
                                  {subItem?.new && (
                                    <span className="bg-logoGold text-white px-2 py-0.5 rounded-md text-[10px] tracking-wide">
                                      NEW
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

            {/* Book Now Button */}
            <div className="hidden lg:flex gap-3">
              <Link href={"/booking"}>
                <AnimButton
                  text={"BOOK NOW"}
                  variant={headerWithBg ? "solid" : "default"}
                />
              </Link>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default TopHeader;
