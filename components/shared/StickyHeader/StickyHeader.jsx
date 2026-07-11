"use client";
import cx from "classnames";
import { useEffect, useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import BranchesImage from "../../../utils/BranchesImage/BranchesImage";
import MenuButton from "../../../utils/MenuButton/MenuButton";
import "./stickyHeader.scss";

import { usePathname, useRouter } from "next/navigation";
import { useNotFound } from "../../../app/context/NoutFoundContext";
import useBookingUrl from "../../../Hooks/useBookingUrl";

const exploreItems = [
  {
    id: 1,
    name: "Restaurant in Milton Keynes",
    path: "/restaurant-milton-keynes",
  },
  { id: 2, name: "Halal Restaurant", path: "/halal-restaurant-milton-keynes" },
  { id: 3, name: "Cafe in Milton Keynes", path: "/cafe-milton-keynes" },
  {
    id: 4,
    name: "Breakfast in Milton Keynes",
    path: "/breakfast-milton-keynes",
  },
  { id: 5, name: "Brunch Spot", path: "/brunch-spot-milton-keynes" },
  { id: 6, name: "Halal Brunch", path: "/halal-brunch-milton-keynes" },
  { id: 7, name: "Halal Food", path: "/halal-food-milton-keynes" },
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
  { id: 10, name: "Afternoon Tea", path: "/afternoon-tea-milton-keynes" },
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

// ─── Pages where BOOK NOW should scroll to a section instead of navigating ───
const scrollBookPages = {
  "/white-party-register": "ticket-booking",
};

const StickyHeader = ({ open, setOpen }) => {
  const [isVisible, setIsVisible] = useState(false);
  const { isNotFound } = useNotFound();

  const router = useRouter();
  const pathname = usePathname();
  const bookingUrl = useBookingUrl();

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
        },
        {
          id: 7,
          name: "Eid Al-Adha Dinner Menu",
          path: "/eid-al-adha-dinner-menu-milton-keynes",
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
    { id: 12, name: "STORE", path: "/store", type: "navigate" },
    {
      id: 13,
      name: "EXPLORE",
      path: "/restaurant-milton-keynes",
      type: "navigate",
      items: exploreItems,
      alignRight: true,
      large: true,
    },
  ];

  const isMenuActive =
    pathname === "/menu" ||
    pathname === "/menu-gallery" ||
    pathname === "/kids-menu" ||
    pathname === "/roast-menu" ||
    pathname === "/ramadan-iftar-menu-milton-keynes" ||
    pathname === "/eid-al-adha-dinner-menu-milton-keynes";

  const isExploreActive = exploreItems.some((s) => pathname === s.path);

  // ─── Check if current page uses scroll-to-section for BOOK NOW ───
  const scrollTarget = scrollBookPages[pathname];

  return (
    <>
      {/* ✅ Menu Button */}
      <div
        className={cx(
          "lg:hidden absolute right-3 xs:right-4 sm:right-5 top-3 xs:top-4 sm:top-5 z-[999999998]",
          {
            "!fixed": isVisible,
            "!top-2 xs:!top-3 sm:!top-4": isVisible,
          },
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
            },
          )}
        >
          {/* Branches */}
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
                    src="/images/nour-gold-logo.webp"
                    alt="Nour Maison Logo"
                    className="w-[45px] xs:w-[50px] sm:w-[55px] md:w-[60px] lg:w-[65px] xl:w-[70px]"
                    title="NOUR MAISON"
                  />
                </div>
              </div>

              {/* Navigation */}
              <div className="hidden lg:flex items-center gap-6 xl:gap-8 2xl:gap-12">
                <nav aria-label="Global">
                  <ul className="flex m-0 items-center gap-3 xl:gap-4 2xl:gap-6 text-sm">
                    {navItems.map((item, index) => {
                      const active =
                        pathname === item?.path ||
                        (item.name === "MENU" && isMenuActive) ||
                        (item.name === "EXPLORE" && isExploreActive);

                      return (
                        <li
                          key={index}
                          className={cx({
                            "text-goldenOrange": active,
                            "text-softMintGreen": !active,
                            "sticky-nav-dropdown": !!item.items,
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
                                  { "!w-full": pathname === item.path },
                                )}
                              ></span>
                            </div>
                          ) : (
                            <>
                              <div
                                className={cx(
                                  "whitespace-nowrap m-0 font-seasons font-bold tracking-wider transition relative group cursor-pointer hover:text-goldenOrange text-[11px] lg:text-[12px] xl:text-[13px] 2xl:text-[15px]",
                                  {
                                    "text-goldenOrange":
                                      (item.name === "MENU" && isMenuActive) ||
                                      (item.name === "EXPLORE" &&
                                        isExploreActive),
                                  },
                                )}
                              >
                                {item.name}
                                <span
                                  className={cx(
                                    "w-0 whitespace-nowrap m-0 leading-none group-hover:w-full absolute bottom-[-8px] xl:bottom-[-10px] left-0 h-[2px] xl:h-[3px] bg-goldenOrange transition-all duration-300",
                                    {
                                      "!w-full":
                                        (item.name === "MENU" &&
                                          isMenuActive) ||
                                        (item.name === "EXPLORE" &&
                                          isExploreActive),
                                    },
                                  )}
                                ></span>
                              </div>

                              <div
                                className={cx("sticky-nav-dropdown-menu", {
                                  "sticky-nav-dropdown-menu--large": item.large,
                                  "sticky-nav-dropdown-menu--right":
                                    item.alignRight,
                                })}
                              >
                                <div className="sticky-nav-dropdown-menu-inner">
                                  {item.items.map((subItem) => (
                                    <div
                                      key={subItem.id}
                                      onClick={() => navigate(subItem.path)}
                                      className={cx(
                                        "sticky-nav-dropdown-item",
                                        {
                                          "sticky-nav-dropdown-item--active":
                                            pathname === subItem.path,
                                        },
                                      )}
                                    >
                                      {subItem.name}
                                      {subItem?.new && (
                                        <span className="absolute top-[-6px] right-[-10px] bg-logoGold text-white px-1.5 xl:px-2 rounded-sm text-[10px] xl:text-xs">
                                          New
                                        </span>
                                      )}
                                    </div>
                                  ))}
                                </div>
                              </div>
                            </>
                          )}
                        </li>
                      );
                    })}
                  </ul>
                </nav>
              </div>

              {/* Book Now Button */}
              <div className="hidden lg:flex gap-3">
                {scrollTarget ? (
                  <ScrollLink
                    to={scrollTarget}
                    smooth={true}
                    duration={500}
                    offset={-120}
                    className="font-seasons tracking-widest site_header_content_btn outlined_btn px-7 !py-3 hover:scale-110 transition-[.4s] whitespace-nowrap bg-logoGold text-white cursor-pointer"
                    aria-label="Scroll to booking section"
                  >
                    BOOK NOW
                  </ScrollLink>
                ) : (
                  <button
                    className="font-seasons tracking-widest site_header_content_btn outlined_btn px-7 !py-3 hover:scale-110 transition-[.4s] whitespace-nowrap bg-logoGold text-white hidden"
                    onClick={() => (window.location.href = bookingUrl)}
                  >
                    BOOK NOW
                  </button>
                )}
              </div>

              {/* Spacer for mobile */}
              <div className="w-[45px] xs:w-[50px] sm:w-[55px] lg:hidden"></div>
            </div>
          </div>
        </header>
      </div>
    </>
  );
};

export default StickyHeader;
