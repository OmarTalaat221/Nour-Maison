"use client";

import cx from "classnames";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { memo } from "react";
import { useHeader } from "../../../app/context/HeaderContext";
import { useNotFound } from "../../../app/context/NoutFoundContext";
import useBookingUrl from "../../../Hooks/useBookingUrl";
import AnimButton from "../../../utils/AnimButton/AnimButton";
import "./style.scss";

const exploreItems = [
  {
    id: 1,
    name: "Restaurant in Milton Keynes",
    path: "/restaurant-milton-keynes",
  },
  {
    id: 2,
    name: "Halal Restaurant",
    path: "/halal-restaurant-milton-keynes",
  },
  {
    id: 3,
    name: "Cafe in Milton Keynes",
    path: "/cafe-milton-keynes",
  },
  {
    id: 4,
    name: "Breakfast in Milton Keynes",
    path: "/breakfast-milton-keynes",
  },
  {
    id: 5,
    name: "Brunch Spot",
    path: "/brunch-spot-milton-keynes",
  },
  {
    id: 6,
    name: "Halal Brunch",
    path: "/halal-brunch-milton-keynes",
  },
  {
    id: 7,
    name: "Halal Food",
    path: "/halal-food-milton-keynes",
  },
  {
    id: 8,
    name: "Family Restaurant",
    path: "/family-restaurant-milton-keynes",
  },
  {
    id: 9,
    name: "Best Halal Restaurant",
    path: "/best-halal-restaurant-milton-keynes",
  },
  {
    id: 10,
    name: "Afternoon Tea",
    path: "/afternoon-tea-milton-keynes",
  },
  {
    id: 11,
    name: "Halal Roast Dinner",
    path: "/halal-roast-dinner-milton-keynes",
  },
  {
    id: 12,
    name: "French Middle Eastern Restaurant",
    path: "/french-middle-eastern-restaurant-milton-keynes",
  },
  {
    id: 13,
    name: "Special Occasion Restaurant",
    path: "/special-occasion-restaurant-milton-keynes",
  },
  {
    id: 14,
    name: "Where to Eat in Milton Keynes",
    path: "/where-to-eat-in-milton-keynes",
  },
];

const navItems = [
  { id: 1, name: "HOME", path: "/" },
  {
    id: 2,
    name: "MENU",
    path: "/menu-gallery",
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
      },
      {
        id: 7,
        name: "Eid Al-Adha Dinner Menu",
        path: "/eid-al-adha-dinner-menu-milton-keynes",
        new: true,
      },
    ],
  },
  { id: 3, name: "BOOKING", path: "/booking" },
  { id: 4, name: "GALLERY", path: "/gallery" },
  { id: 5, name: "OUR EVENTS", path: "/services" },
  { id: 6, name: "ABOUT US", path: "/about-us" },
  { id: 8, name: "CONTACT US", path: "/contact-us" },
  { id: 10, name: "BLOGS", path: "/blog" },
  { id: 11, name: "STORE", path: "/store" },
  {
    id: 12,
    name: "EXPLORE",
    path: "/restaurant-milton-keynes",
    items: exploreItems,
    alignRight: true,
    large: true,
  },
];

const hiddenPages = [
  "/privacy-policy-2",
  "/terms-and-conditions",
  "/refund-policy",
];

const TopHeader = () => {
  const { isNotFound } = useNotFound();
  const { headerWithBg } = useHeader();
  const pathname = usePathname();
  const bookingUrl = useBookingUrl();

  if (isNotFound || hiddenPages.includes(pathname)) {
    return null;
  }

  const isDropdownActive = (item) => {
    if (!item.items) {
      return pathname === item.path;
    }

    return item.items.some((subItem) => pathname === subItem.path);
  };

  return (
    <div className="relative z-[999999]">
      <header
        className={cx(
          "site_header top-0 z-[999999] right-0 left-0 transition-all duration-300",
          {
            "relative bg-sageGreen shadow-md py-3": headerWithBg,
            "absolute mt-6": !headerWithBg,
          },
        )}
      >
        <div>
          <div className="site_header_content flex items-center justify-between px-4 sm:px-6 md:px-8 xl:px-10 gap-3">
            <div className="md:flex md:items-center md:gap-8 xl:gap-12 shrink-0">
              <Link
                href="/"
                prefetch={false}
                className="block text-teal-600 cursor-pointer"
              >
                <span className="sr-only">Home</span>
                <Image
                  style={{
                    filter: headerWithBg
                      ? "none"
                      : "drop-shadow(4px 2px 2px rgba(63, 63, 63, 0.63))",
                  }}
                  priority
                  fetchPriority="high"
                  src="/images/nour-gold-logo.webp"
                  alt="Nour Maison Logo"
                  title="NOUR MAISON"
                  width={100}
                  height={100}
                  sizes="(max-width: 768px) 70px, 100px"
                  className={cx("transition-all duration-300", {
                    "w-[58px] sm:!w-[60px] md:!w-[68px] lg:!w-[74px] xl:!w-[80px]":
                      headerWithBg,
                    "w-[68px] sm:!w-[70px] md:!w-[78px] lg:!w-[86px] xl:!w-[100px]":
                      !headerWithBg,
                  })}
                />
              </Link>
            </div>

            <div className="site_header_content_navs hidden min-[959px]:flex flex-1 items-center justify-center min-w-0">
              <nav aria-label="Global" className="w-full">
                <ul className="flex items-center justify-center gap-4 min-[1100px]:gap-2 xl:gap-4 2xl:gap-6 text-sm whitespace-nowrap">
                  {navItems.map((item) => {
                    if (!item.items) {
                      return (
                        <li key={item.id} className="shrink-0">
                          <Link
                            href={item.path}
                            prefetch={false}
                            className={cx(
                              "group relative no-underline hover:no-underline inline-flex items-center px-1 py-2 !font-seasons font-semibold tracking-[0.12em] min-[1100px]:tracking-[0.16em] xl:tracking-[0.22em] 2xl:tracking-[0.25em] text-[9px] min-[1100px]:text-[10px] xl:text-[11px] 2xl:text-[13px] transition-all duration-300 ease-out hover:-translate-y-[2px] hover:tracking-[0.16em] min-[1100px]:hover:tracking-[0.2em] xl:hover:tracking-[0.28em] 2xl:hover:tracking-[0.32em] active:translate-y-0",
                              {
                                "text-white hover:!text-goldenOrange":
                                  !headerWithBg,
                                "text-white hover:text-logoGold": headerWithBg,
                                "!text-goldenOrange":
                                  pathname === item.path && !headerWithBg,
                                "!text-logoGold":
                                  pathname === item.path && headerWithBg,
                              },
                            )}
                          >
                            <span
                              className={cx(
                                "pointer-events-none absolute inset-0 -z-10 rounded-xl opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-70",
                                { hidden: headerWithBg },
                              )}
                              style={{
                                background:
                                  "radial-gradient(closest-side, rgba(255,180,70,0.35), transparent 70%)",
                              }}
                            />

                            <span className="relative">{item.name}</span>

                            <span
                              className={cx(
                                "pointer-events-none absolute left-1/2 bottom-1 h-[2px] w-0 -translate-x-1/2 rounded-full transition-all duration-300 group-hover:w-[120%]",
                                {
                                  "bg-gradient-to-r from-transparent via-white/90 to-transparent":
                                    !headerWithBg,
                                  "bg-logoGold": headerWithBg,
                                  "via-[#D59A3B] w-[120%]":
                                    pathname === item.path,
                                },
                              )}
                            />
                          </Link>
                        </li>
                      );
                    }

                    const active = isDropdownActive(item);

                    return (
                      <li
                        key={item.id}
                        className={cx("nav-dropdown shrink-0", {
                          "nav-dropdown--last": item.alignRight,
                        })}
                      >
                        <button
                          type="button"
                          className={cx(
                            "group relative inline-flex items-center gap-1 px-1 py-2 cursor-pointer !font-seasons font-semibold tracking-[0.12em] min-[1100px]:tracking-[0.16em] xl:tracking-[0.22em] 2xl:tracking-[0.25em] text-[9px] min-[1100px]:text-[10px] xl:text-[11px] 2xl:text-[13px] transition-all duration-300 ease-out hover:-translate-y-[2px] hover:tracking-[0.16em] min-[1100px]:hover:tracking-[0.2em] xl:hover:tracking-[0.28em] 2xl:hover:tracking-[0.32em]",
                            {
                              "text-white hover:text-white": !headerWithBg,
                              "text-white hover:text-logoGold": headerWithBg,
                              "!text-goldenOrange": active && !headerWithBg,
                              "!text-logoGold": active && headerWithBg,
                            },
                          )}
                        >
                          <span
                            className={cx(
                              "pointer-events-none absolute inset-0 -z-10 rounded-xl opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-70",
                              { hidden: headerWithBg },
                            )}
                            style={{
                              background:
                                "radial-gradient(closest-side, rgba(255,180,70,0.35), transparent 70%)",
                            }}
                          />

                          <span className="relative">{item.name}</span>

                          <span
                            className={cx(
                              "relative origin-center transition-transform duration-300 nav-dropdown-arrow",
                              {
                                "text-white/80": !headerWithBg,
                                "text-white/60": headerWithBg,
                              },
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
                                "w-[120%]": active,
                              },
                            )}
                          />
                        </button>

                        <div
                          className={cx("nav-dropdown-menu", {
                            "nav-dropdown-menu--large": item.large,
                            "nav-dropdown-menu--right": item.alignRight,
                          })}
                        >
                          {/* أضف هذا الـ wrapper */}
                          <div className="nav-dropdown-menu-inner">
                            {item.items.map((subItem) => (
                              <Link
                                key={subItem.id}
                                href={subItem.path}
                                prefetch={false}
                                className={cx(
                                  "nav-dropdown-item relative transition-all duration-200 hover:!bg-logoGold/10 hover:!text-logoGold",
                                  {
                                    "!text-logoGold !bg-logoGold/5 !font-bold":
                                      pathname === subItem.path,
                                  },
                                )}
                              >
                                {subItem.name}

                                {subItem.new && (
                                  <span className="absolute top-[-6px] right-[-10px] bg-logoGold text-white px-2 rounded-sm text-xs">
                                    New
                                  </span>
                                )}
                              </Link>
                            ))}
                          </div>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </nav>
            </div>

            <div className="site_header_content_btn hidden min-[959px]:flex gap-3 shrink-0 whitespace-nowrap">
              <Link href={bookingUrl} prefetch={false}>
                <AnimButton
                  text="BOOK NOW"
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

export default memo(TopHeader);
