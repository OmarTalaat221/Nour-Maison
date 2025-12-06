"use client";

import React, { useRef, useState, useEffect } from "react";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
  useInView,
} from "framer-motion";
import PagesBanner from "../../../components/PagesBanner/PagesBanner";
import BottomBg from "./../../../utils/bottomBg/BottomBg";
import BookingConent from "../../../components/pages/Booking/BookingContent";

const CristmastMenu = () => {
  const sectionRef = useRef(null);

  // 🔹 بداية المحتوى (AMUSE) – هنستخدمها كمؤشر للتبديل بين الصورتين
  const menuStartRef = useRef(null);
  const isMenuStartInView = useInView(menuStartRef, {
    once: false,
    amount: 0.2, // لما ~20% من AMUSE تبان في الشاشة نعتبره in view
  });

  // ✅ Popup state
  const [showPopup, setShowPopup] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(false);
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  // 🔹 Scroll progress for parallax
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // 🔹 Strong vertical + horizontal movement
  const leftY = useTransform(scrollYProgress, [0, 1], [-80, 80]);
  const rightY = useTransform(scrollYProgress, [0, 1], [-70, 70]);
  const sockY = useTransform(scrollYProgress, [0, 1], [60, -80]);

  const leftX = useTransform(scrollYProgress, [0, 1], [-90, 60]);
  const rightX = useTransform(scrollYProgress, [0, 1], [100, -40]);
  const sockX = useTransform(scrollYProgress, [0, 1], [70, -140]);
  const sockX2 = useTransform(scrollYProgress, [0, 1], [-70, 140]);

  // 🔹 Rotation
  const leftRotate = useTransform(scrollYProgress, [0, 1], [-8, 10]);
  const rightRotate = useTransform(scrollYProgress, [0, 1], [6, -9]);
  const sockRotate = useTransform(scrollYProgress, [0, 1], [-5, 12]);

  // 🔹 Skew
  const leftSkew = useTransform(scrollYProgress, [0, 1], [-6, 4]);
  const rightSkew = useTransform(scrollYProgress, [0, 1], [5, -5]);
  const sockSkew = useTransform(scrollYProgress, [0, 1], [-4, 6]);

  // 🔹 Decorations opacity with scroll (hidden at first)
  const decoOpacity = useTransform(
    scrollYProgress,
    [0, 0.2, 0.35, 1],
    [0, 0, 1, 1]
  );

  // 🔹 Main menu fade-in on scroll
  const menuOpacity = useTransform(scrollYProgress, [0.05, 0.25, 1], [0, 1, 1]);
  const menuY = useTransform(scrollYProgress, [0.05, 0.25, 1], [80, 0, 0]);

  // 🔹 Variants
  const fromTop = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };
  const fromTop2 = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  const fromLeft = {
    hidden: { opacity: 0, x: -60 },
    show: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  const fromRight = {
    hidden: { opacity: 0, x: 60 },
    show: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  const fromBottom = {
    hidden: { opacity: 0, y: 60 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const fadeInScale = {
    hidden: { opacity: 0, scale: 0.95 },
    show: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  const staggerContainer = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <div>
      {/* ✅ Popup on page load (2 seconds) */}
      <AnimatePresence>
        {showPopup && (
          <motion.div
            className="fixed inset-0 z-[999] flex items-center justify-center bg-black/60 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.img
              src="/images/cristmas/christmas menu ndd_page-0001.jpg"
              className="rounded-3xl  px-6 py-6 md:px-10 md:py-8 max-w-xl shadow-2xl drop-shadow-2xl w-[90%] text-center border border-emerald-100"
              initial={{ opacity: 0, y: -40, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 40, scale: 0.9 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            />
          </motion.div>
        )}
      </AnimatePresence>

      <PagesBanner
        bottomBg={false}
        images={[
          "/images/cristmas-0.jpeg",
          "/images/cristmas-1.jpeg",
          "/images/cristmas-2.jpeg",
          "/images/cristmas-3.jpeg",
        ]}
        slogan={
          <motion.div
            className="text-lg md:text-2xl xl:text-3xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            Your favorite café… now in festive colors.
          </motion.div>
        }
        title={"Nour Maison Christmas Edition"}
        scrollTo={"cristmas"}
      />

      <motion.div
        id="cristmas"
        ref={sectionRef}
        className="w-full relative py-10 md:py-16 mt-[-120px] z-10 overflow-hidden"
        style={{
          background: "url('/images/rd bg paper texture.webp')",
          backgroundSize: "cover",
          backgroundPosition: "top",
          backgroundRepeat: "no-repeat",
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Overlay */}
        <motion.div
          className="absolute inset-0 z-0 bg-gradient-to-br from-softMintGreen/30 to-black/25"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        />

        <div
          style={{
            textShadow: " 2px 2px 2px #000000,",
          }}
          className="text-center font-tangerine text-white font-bold text-3xl sm:text-7xl lg:text-9xl relative z-50"
        >
          4 course meal for £35 per person
        </div>

        {/* 🎄 Top decorations (animated) */}
        <motion.img
          src="/images/—Pngtree—colorful christmas balls_19731035.png"
          alt="Christmas decoration left"
          className="hidden md:block absolute top-6 md:top-10 left-[-40px] md:left-6 w-72 md:w-96 drop-shadow-2xl z-40 pointer-events-none"
          style={{
            y: leftY,
            x: leftX,
            rotate: leftRotate,
            skewX: leftSkew,
            opacity: decoOpacity,
          }}
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        />

        <motion.img
          src="/images/—Pngtree—santa christmas cap_23267721.png"
          alt="Christmas decoration right"
          className="hidden md:block absolute top-4 md:top-10 right-[-30px] md:right-6 w-60 md:w-72 z-40 pointer-events-none"
          style={{
            y: rightY,
            x: rightX,
            rotate: rightRotate,
            skewX: rightSkew,
            opacity: decoOpacity,
          }}
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.1 }}
        />

        {/* 🎄 Bottom animated decorations (left & right) */}
        <motion.img
          src="/images/cristmas/Untitled-6-NN.gif"
          alt="Christmas decoration bottom left"
          className="hidden md:block absolute bottom-[-100px] left-0 w-[480px] md:w-[600px] z-30 pointer-events-none"
          style={{
            y: sockY,
            x: sockX,
            rotate: sockRotate,
            skewX: sockSkew,
            opacity: decoOpacity,
          }}
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.15 }}
        />

        <motion.img
          src="/images/cristmas/Untitled-6NNN.png"
          alt="Christmas decoration bottom right"
          className="hidden md:block absolute bottom-[-100px] right-0 w-[480px] md:w-[700px] z-30 pointer-events-none"
          style={{
            y: sockY,
            x: sockX2,
            rotate: sockRotate,
            skewX: sockSkew,
            opacity: decoOpacity,
          }}
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.15 }}
        />

        {/* 🎁 Main animated menu wrapper */}

        {/* 🔄 هنا السويتش بين صورة 1 و 2 حسب isMenuStartInView */}
        <AnimatePresence mode="wait">
          {/* الصورة الأولى – تظهر قبل بداية المحتوى */}
          {!isMenuStartInView && (
            <motion.img
              key="bg-first"
              src="/images/cristmas/Untitled design - 2025-12-04T145105.220.png"
              className="w-full mb-10"
              alt="Christmas Menu Background"
              variants={fromTop}
              initial="hidden"
              animate="show"
              exit="hidden"
              transition={{ duration: 0.6, ease: "easeOut" }}
            />
          )}

          {/* الصورة الثانية – تظهر بعد بداية المحتوى */}
          {isMenuStartInView && (
            <motion.img
              key="bg-second"
              src="/images/cristmas/NNNNNNNNNNNN.png"
              className="w-full mb-10 !scale-[1.02]"
              alt="Christmas Menu Background light"
              variants={fromTop2}
              initial="hidden"
              animate="show"
              exit="hidden"
              transition={{ duration: 0.6, ease: "easeOut" }}
            />
          )}
        </AnimatePresence>

        <motion.div
          className="w-full container mx-auto rounded-3xl relative z-20 px-3 md:px-0"
          style={{
            opacity: menuOpacity,
            y: menuY,
          }}
          variants={fadeInScale}
          initial="hidden"
          animate="show"
        >
          {/* AMUSE section = بداية المحتوى */}
          <motion.div
            ref={menuStartRef}
            className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-20 mb-16 mt-[-100px]"
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
          >
            {/* LEFT image – من الشمال */}
            <motion.img
              src="/images/cristmas/Untitled-6 A.png"
              className=" hidden md:block w-[170px] md:w-[200px] drop-shadow-2xl  animate-pulse"
              alt=""
              variants={fromLeft}
              whileHover={{ scale: 1.06, rotate: 2 }}
              transition={{ type: "spring", stiffness: 220, damping: 16 }}
            />

            {/* CENTER text – من تحت لفوق */}
            <motion.div
              className="flex justify-center flex-col items-center text-white relative text-center px-4"
              variants={fromBottom}
            >
              <motion.img
                src="/images/cristmas/AMUSE.png"
                className="max-w-xs md:max-w-sm drop-shadow-2xl mb-3 scale-down-center"
                alt=""
                variants={fromTop}
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3 }}
              />
              <motion.h3
                className="text-xl md:text-2xl font-semibold mb-1"
                variants={fromBottom}
              >
                Harira Velout
              </motion.h3>
              <motion.p
                className="text-sm md:text-base leading-relaxed"
                variants={fromBottom}
              >
                A silky Moroccan harira infused with saffron and Provençal herbs
                served warm as a festive amuse-bouche.
              </motion.p>
            </motion.div>

            {/* RIGHT image – من اليمين */}
            <motion.img
              src="/images/cristmas/Untitled-6 G.png"
              className=" hidden md:block w-[130px] md:w-[170px] drop-shadow-2xl animate-pulse"
              alt=""
              variants={fromRight}
              whileHover={{ scale: 1.06, rotate: -2 }}
              transition={{ type: "spring", stiffness: 220, damping: 16 }}
            />
          </motion.div>

          {/* STARTER + DESSERTS */}
          <motion.div
            className="flex flex-col md:flex-row items-start justify-center mx-auto gap-10 md:gap-9"
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
          >
            {/* STARTER column – من الشمال */}
            <motion.div
              className="flex-1 flex flex-col mx-auto items-center gap-5 justify-center px-4"
              variants={fromLeft}
            >
              <motion.img
                src="/images/cristmas/STARTER.png"
                className="w-[240px] md:w-[370px] drop-shadow-2xl mb-2 scale-down-center"
                alt=""
                whileHover={{ scale: 1.04 }}
                transition={{ duration: 0.4 }}
              />

              <div className="w-full">
                {[
                  {
                    title: "Pumpkin Kibbeh",
                    text: "Crisp bulgur shells filled with spiced meat and pinenuts, served on velvety pumpkin purée and finished with pomegranate molasses.",
                  },
                  {
                    title: "Fig & Brie Cigar",
                    text: "Golden pastry cigar filled with brie and roasted figs, drizzled with thyme honey.",
                  },
                  {
                    title: "Glazed Merguez",
                    text: "Spiced lamb merguez glazed with honey harissa, served with caramelised shallots.",
                  },
                  {
                    title: "Kebda Iskandarani",
                    text: "Sautéed beef liver with garlic, cumin and chilli, finished with lemon butter and fresh coriander, served in a crispy Arabic bread bowl.",
                  },
                  {
                    title: "Karnabeet (V)",
                    text: "Crispy fried cauliflower tossed in Egyptian dukkah, served with tahini sauce and a drizzle of lemon oil.",
                  },
                ].map((item, idx) => (
                  <motion.div
                    key={item.title}
                    className="flex hover:bg-gradient-to-r from-logoGold/40 to-softMintGreen/40 transition-all rounded-3xl px-2 py-2 flex-col gap-1 w-full items-center text-white text-center"
                    variants={fromBottom}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.25 }}
                    transition={{
                      duration: 0.45,
                      ease: "easeOut",
                      delay: idx * 0.08,
                    }}
                    whileHover={{ scale: 1.06 }}
                  >
                    <h2 className="text-lg md:text-xl font-semibold">
                      {item.title}
                    </h2>
                    <p className="text-sm md:text-base">{item.text}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* DESSERTS column – من اليمين */}
            <motion.div
              className="flex-1 flex flex-col mx-auto items-center justify-center gap-5 px-4"
              variants={fromRight}
            >
              <motion.img
                src="/images/cristmas/DESSERTS.png"
                className="w-[240px] md:w-[370px] drop-shadow-2xl scale-down-center"
                alt=""
                whileHover={{ scale: 1.04 }}
                transition={{ duration: 0.4 }}
              />

              <motion.div
                className="relative inline-block px-6 md:px-8 py-10 md:py-16 mt-4"
                variants={fadeInScale}
              >
                {/* SVG border */}
                <motion.svg
                  className="absolute inset-0 w-full h-full pointer-events-none"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.6 }}
                >
                  <motion.rect
                    x="6"
                    y="6"
                    width="95%"
                    height="90%"
                    rx="20"
                    ry="20"
                    fill="none"
                    stroke="white"
                    strokeWidth="6"
                    strokeDasharray="13 12"
                    strokeLinecap="round"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 1.2, ease: "easeInOut" }}
                  />
                </motion.svg>

                {/* Desserts list – من تحت لفوق */}
                <motion.div
                  className="relative text-center text-white text-xl md:text-3xl leading-[40px] md:leading-[60px]"
                  variants={fromBottom}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.4 }}
                >
                  Mouhalabieh au Caramel Sal
                  <br />
                  San Sebastián Basque Cheesecake
                  <br />
                  Pistachio Baklava Tart
                  <br />
                  Basbousa bel Loz
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* MAIN COURSE title – من فوق */}
          <motion.div
            className="flex items-center justify-center mt-10 md:mt-14"
            variants={fromTop}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.img
              src="/images/cristmas/MAIN CO.png"
              className="w-[240px] md:w-[370px] drop-shadow-2xl scale-down-center"
              alt=""
              whileHover={{ scale: 1.04 }}
              transition={{ duration: 0.4 }}
            />
          </motion.div>

          {/* MAIN COURSE items */}
          <motion.div
            className="w-full mt-6 md:mt-8 mb-12"
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="max-w-2xl mx-auto text-center text-white px-4">
              {[
                {
                  title: "Steak Diane",
                  text: "Pan-seared fillet of sirloin in a rich Dijon cream sauce with shallots, mushrooms and a hint of lemon, finished with a touch of balsamic glaze. Served with pomme purée.",
                },
                {
                  title: "Canard du Nil",
                  text: "Confit duck leg, pan-seared for a crispy finish, served on a bed of pomme purée and topped with molokhiya in a garlic and coriander sauce.",
                },
                {
                  title: "Singari Fish",
                  text: "Oven-grilled sea bass fillet served on spiced caramelised onion rice with sumac butter and lemon tahini sauce.",
                },
                {
                  title: "Lamb Shank Tagine",
                  text: "Slow-braised lamb shank in Moroccan spices with apricots and almonds, served with saffron couscous.",
                },
                {
                  title: "Bamia",
                  text: "Slow-cooked okra in a rich tomato and garlic sauce with coriander and olive oil, served with saffron rice.",
                },
                {
                  title: "Smoked Dolma",
                  text: "Smoked red peppers and aubergines stuffed with herbed rice, tomato, and pine nuts, gently braised in lemon and olive oil.",
                },
              ].map((item, idx) => (
                <motion.div
                  key={item.title}
                  className="hover:bg-gradient-to-r from-logoGold/40 to-softMintGreen/40 transition-all rounded-3xl px-2 py-2"
                  variants={fromBottom}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{
                    duration: 0.5,
                    ease: "easeOut",
                    delay: idx * 0.07,
                  }}
                  whileHover={{ scale: 1.02 }}
                >
                  <h3 className="text-2xl md:text-3xl font-semibold">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-sm md:text-base leading-relaxed">
                    {item.text}
                  </p>
                </motion.div>
              ))}
            </div>

            <motion.img
              src="/images/cristmas/Untitled-5 ME.png"
              className="w-[300px] md:w-[350px] mx-auto mt-10"
              alt=""
              variants={fromBottom}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.4 }}
            />
          </motion.div>
        </motion.div>

        <BottomBg />
      </motion.div>

      <BookingConent bg={"/images/cristmas-1.jpeg"} />
    </div>
  );
};

export default CristmastMenu;
