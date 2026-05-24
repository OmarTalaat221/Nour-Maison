// components/Sidebar/Sidebar.jsx
"use client";
import React, { useEffect, useState } from "react";
import cx from "classnames";
import { AnimatePresence, motion } from "framer-motion";
import AnimButton from "../../../utils/AnimButton/AnimButton";
import "./style.scss";
import { useRouter, usePathname } from "next/navigation";
import useBookingUrl from "../../../Hooks/useBookingUrl";

const Sidebar = ({ open, setOpen }) => {
  const [expandedMenu, setExpandedMenu] = useState(null);
  const router = useRouter();
  const pathname = usePathname();
  const bookingUrl = useBookingUrl();

  // نفس الروابط الموجودة في الـ Header
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
          new: false,
        },
        {
          id: 7,
          name: "Eid Al-Adha Dinner Menu",
          path: "/eid-al-adha-dinner-menu-milton-keynes",
          // new: true,
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

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
      setExpandedMenu(null); // إغلاق القوائم الفرعية عند إغلاق الـ Sidebar
    }
  }, [open]);

  const handleNavigation = (path) => {
    router.push(path);
    setOpen(false);
  };

  const toggleSubMenu = (itemId) => {
    setExpandedMenu(expandedMenu === itemId ? null : itemId);
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className={cx(
            "side_bar w-[100vw] fixed inset-0 z-[99999999] h-[100vh] rounded-lg",
            open && "open",
          )}
          initial={{ y: "-100%" }}
          animate={{ y: open ? 0 : "-100%" }}
          exit={{ y: "-100%" }}
          transition={{ type: "spring", stiffness: 100, damping: 10 }}
        >
          <motion.div
            className={cx(
              "h-[100vh] content w-[100%] shadow-lg bg-white p-10 py-20",
              {
                open: open,
              },
            )}
            style={
              open
                ? {
                    backgroundImage: `url("https://res.cloudinary.com/dhebgz7qh/image/upload/v1767443801/t9noktexya7m7o2dtum4_hbidy9.jpg")`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundBlendMode: "multiply",
                  }
                : {}
            }
            initial={{ opacity: 0 }}
            animate={{ opacity: open ? 1 : 0 }}
          >
            <motion.div
              className="absolute p-10 py-20 top-0 right-0 left-0 h-[100vh] bottom-0 overflow-auto bg-[#00000069]"
              initial={{ opacity: 0 }}
              animate={{ opacity: open ? 1 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="relative z-50 min-h-full flex flex-col">
                <nav aria-label="Global overflow-auto">
                  <motion.ul
                    className="flex flex-col gap-7 text-lg"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: open ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {navItems.map((item, index) => (
                      <motion.li
                        key={item.id}
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: open ? 1 : 0, y: open ? 0 : -50 }}
                        transition={{
                          delay: index * 0.1,
                          type: "spring",
                          stiffness: 100,
                        }}
                        className="relative"
                      >
                        {item.new && (
                          <span className="absolute -top-0 -right-2 bg-logoGold text-white px-2 py-1 rounded-full text-sm">
                            NEW
                          </span>
                        )}

                        {/* إذا كان العنصر يحتوي على قائمة فرعية */}
                        {item.items ? (
                          <div className="flex flex-col items-center">
                            <motion.div
                              className="text-white text-center cursor-pointer transition hover:text-white/75 whitespace-nowrap flex items-center gap-2"
                              onClick={() => toggleSubMenu(item.id)}
                              whileHover={{
                                scale: 1.1,
                                transition: {
                                  type: "spring",
                                  stiffness: 300,
                                  damping: 25,
                                },
                              }}
                            >
                              {item.name}
                              <motion.span
                                animate={{
                                  rotate: expandedMenu === item.id ? 180 : 0,
                                }}
                                transition={{ duration: 0.3 }}
                              >
                                ▼
                              </motion.span>
                            </motion.div>

                            {/* القائمة الفرعية */}
                            <AnimatePresence>
                              {expandedMenu === item.id && (
                                <motion.ul
                                  className="flex flex-col gap-4 mt-4"
                                  initial={{ opacity: 0, height: 0 }}
                                  animate={{ opacity: 1, height: "auto" }}
                                  exit={{ opacity: 0, height: 0 }}
                                  transition={{ duration: 0.3 }}
                                >
                                  {item.items.map((subItem, subIndex) => (
                                    <motion.li
                                      key={subItem.id}
                                      initial={{ opacity: 0, x: -20 }}
                                      animate={{ opacity: 1, x: 0 }}
                                      transition={{ delay: subIndex * 0.05 }}
                                      className="relative"
                                    >
                                      {subItem.new && (
                                        <span className="absolute -top-1 -right-8 bg-logoGold text-white px-2 py-0.5 rounded-full text-xs">
                                          NEW
                                        </span>
                                      )}
                                      <motion.div
                                        className={cx(
                                          "text-white/80 text-center cursor-pointer transition hover:text-white whitespace-nowrap text-sm",
                                          {
                                            "!text-logoGold font-bold":
                                              pathname === subItem.path,
                                          },
                                        )}
                                        onClick={() =>
                                          handleNavigation(subItem.path)
                                        }
                                        whileHover={{
                                          scale: 1.05,
                                          transition: {
                                            type: "spring",
                                            stiffness: 300,
                                            damping: 25,
                                          },
                                        }}
                                      >
                                        {subItem.name}
                                      </motion.div>
                                    </motion.li>
                                  ))}
                                </motion.ul>
                              )}
                            </AnimatePresence>
                          </div>
                        ) : (
                          // العناصر العادية بدون قائمة فرعية
                          <motion.div
                            className={cx(
                              "text-white text-center cursor-pointer transition hover:text-white/75 whitespace-nowrap",
                              {
                                "!text-logoGold font-bold":
                                  pathname === item.path,
                              },
                            )}
                            onClick={() => handleNavigation(item.path)}
                            whileHover={{
                              scale: 1.1,
                              transition: {
                                type: "spring",
                                stiffness: 300,
                                damping: 25,
                              },
                            }}
                          >
                            {item.name}
                          </motion.div>
                        )}
                      </motion.li>
                    ))}
                  </motion.ul>
                </nav>

                <motion.div
                  className="mt-4 mx-auto flex items-center justify-center"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: open ? 1 : 0 }}
                  transition={{ delay: 0.5, duration: 0.3 }}
                >
                  <AnimButton
                    onClick={() => {
                      router.push(bookingUrl);
                      setOpen(false);
                    }}
                    text={"BOOK NOW"}
                    whileHover={{
                      scale: 1.1,
                      rotate: 10,
                      transition: {
                        type: "spring",
                        stiffness: 500,
                        damping: 30,
                      },
                    }}
                    whileTap={{ scale: 0.95 }}
                  />
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Sidebar;
