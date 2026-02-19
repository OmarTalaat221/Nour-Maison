"use client";
import React, { useEffect } from "react";
import cx from "classnames";
import { AnimatePresence, motion } from "framer-motion"; // Importing Framer Motion
import AnimButton from "../../../utils/AnimButton/AnimButton"; // Assuming you have this component
import "./style.scss";
import { useRouter } from "next/navigation";

const Sidebar = ({ open, setOpen }) => {
  const navItems = [
    { id: 1, name: "HOME", path: "/", type: "navigate" },
    { id: 2, name: "MENU CLASSIC", path: "/menu", type: "navigate" },
    { id: 10, name: "MENU GALLERY", path: "/menu-gallery", type: "navigate" },
    { id: 10, name: "KIDS MENU", path: "/kids-menu", type: "navigate" },
    // { id: 10, name: "CHRISTMAS MENU", path: "/christmas-menu", type: "navigate" , new:true },
    {
      id: 10,
      name: "RAMADAN MENU",
      path: "/ramadan-iftar-menu-milton-keynes",
      type: "navigate",
      new: true,
    },
    { id: 4, name: "GALLERY", path: "/gallery", type: "navigate" },
    { id: 11, name: "OUR EVENTS", path: "/services", type: "navigate" },
    { id: 5, name: "ABOUT US", path: "/about-us", type: "link" },
    { id: 8, name: "CONTACT US", path: "/contact-us", type: "navigate" },
    // { id: 9, name: "STORE", path: "/store", type: "navigate" },
    // { id: 3, name: "GIFT CARDS & STORE", path: "store", type: "navigate" },
    { id: 6, name: "Blogs", path: "/blog", type: "navigate" },
  ];
  const router = useRouter();

  // const navigate = useNavigate();

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden"; // Disable scrolling when sidebar is open
    } else {
      document.body.style.overflow = "auto"; // Enable scrolling when sidebar is not open
    }
  }, [open]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className={cx(
            "side_bar w-[100vw] fixed inset-0 z-[9999] h-[100vh] rounded-lg",
            open && "open"
          )}
          initial={{ y: "-100%" }} // Slide from top to bottom
          animate={{ y: open ? 0 : "-100%" }}
          exit={{ y: "-100%" }}
          transition={{ type: "spring", stiffness: 100, damping: 10 }} // Decreased the duration
        >
          <motion.div
            className={cx(
              "h-[100vh] content w-[100%] shadow-lg bg-white p-10 py-20 rounded-lg",
              {
                open: open,
              }
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
              transition={{ duration: 0.3 }} // Decreased the duration
            >
              <div className="relative z-50  min-h-full fle flex-col">
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
                        initial={{ opacity: 0, y: -50 }} // Animate from above
                        animate={{ opacity: open ? 1 : 0, y: open ? 0 : -50 }} // Slide from top to bottom
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
                        <motion.div
                          className="text-white text-center cursor-pointer transition hover:text-white/75 whitespace-nowrap"
                          onClick={() => {
                            // window.location.href = item.path;
                            router.push(item.path);

                            setOpen(false);
                          }}
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
                      </motion.li>
                    ))}
                  </motion.ul>
                </nav>
                <motion.div
                  className="mt-4 mx-auto flex items-center justify-center"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: open ? 1 : 0 }}
                  transition={{ delay: 0.5, duration: 0.3 }} // Decreased the duration
                >
                  <AnimButton
                    onClick={() => {
                      router.push("/booking");
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
