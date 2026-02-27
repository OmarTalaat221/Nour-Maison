"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import PagesBanner from "../../../components/PagesBanner/PagesBanner";
import { AnimatePresence, motion } from "framer-motion";
import FancyboxElement from "../../../utils/FancyBox/FancyBox";
import Filter from "../../../components/pages/Gallery/Filter/Filter";
import Portfolio2 from "./../../../components/portfolio2/portfolio2";
import { TopNavbar } from "./../../../components/pages/Gallery/TopNavbar/TopNavbar";
import { detectMediaType } from "../../../lib/functions";
import Movie from "../../../components/pages/Gallery/Movies/Movies";

// Swiper (vertical reels)
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

// ------------------------------------------------------------------
// 1. EXTRACTED COMPONENT: Defined OUTSIDE the main component
// ------------------------------------------------------------------
const ReelSlide = ({ item, index, isMuted, toggleMute, setVideoRef }) => {
  return (
    <div className="relative w-full h-full overflow-hidden rounded-2xl border border-black/5 bg-white shadow-sm">
      <video
        ref={setVideoRef} // Pass the ref up to the parent
        src={item?.media_url}
        className="w-full h-full object-cover"
        muted={isMuted}
        playsInline
        loop
        preload="metadata"
      />

      {/* Mute/Unmute button */}
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          toggleMute(index);
        }}
        className="absolute bottom-3 right-3 z-20 inline-flex items-center justify-center
                   rounded-full border border-black/10 bg-white/90 backdrop-blur
                   shadow-sm w-10 h-10 hover:bg-white transition cursor-pointer"
        aria-label={isMuted ? "Unmute" : "Mute"}
      >
        <span className="text-lg leading-none">{isMuted ? "🔇" : "🔊"}</span>
      </button>

      {/* Label pill */}
      <div className="absolute top-3 left-3 pointer-events-none z-10">
        <div className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/90 backdrop-blur px-3 py-1 shadow-sm">
          <span className="h-2 w-2 rounded-full bg-softMintGreen" />
          <span className="text-[11px] font-semibold text-gray-700">Reel</span>
        </div>
      </div>
    </div>
  );
};

// ------------------------------------------------------------------
// MAIN COMPONENT
// ------------------------------------------------------------------
const Gallrey = () => {
  const [popularMovies, setPopularMovies] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [activeTab, setActiveTab] = useState("Gallery");
  const [activeGenre, setActiveGenre] = useState("all");
  const tabs = ["Gallery", "Portfolio"];

  // ---------- utils ----------
  function shuffleArray(array) {
    const arr = [...array];
    let currentIndex = arr.length;
    let randomIndex;

    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      [arr[currentIndex], arr[randomIndex]] = [
        arr[randomIndex],
        arr[currentIndex],
      ];
    }
    return arr;
  }

  // const medias = useMemo(
  //   () => [
  //     {
  //       id: 1,
  //       media_url:
  //         "https://res.cloudinary.com/dhebgz7qh/image/upload/v1767448128/u7uslcapng0rhneh7ond_rnevo4.jpg",
  //       type: "drinks",
  //       descripiton: "",
  //     },
  //     {
  //       id: 2,
  //       media_url:
  //         "https://res.cloudinary.com/dhebgz7qh/video/upload/v1767448183/ofln6neksu02dynedeax_ig1kbt.mp4",
  //       type: "drinks",
  //       descripiton: "",
  //     },
  //     // { id: 3, media_url: "https://res.cloudinary.com/dhebgz7qh/video/upload/v1767448180/rw7mjpgfye1ke6a6wmvr_u30fz9.mp4", type: "drinks", descripiton: "" }, // Hani was kicked out 😅
  //     {
  //       id: 4,
  //       media_url:
  //         "https://res.cloudinary.com/dhebgz7qh/video/upload/v1767448188/ooaf1ruia6doeip4qwdg_raay8j.mp4",
  //       type: "drinks",
  //       descripiton: "",
  //     },
  //     {
  //       id: 5,
  //       media_url:
  //         "https://res.cloudinary.com/dhebgz7qh/image/upload/v1767448109/cd2oxrizxts95az7bhyy_vqrnhs.jpg",
  //       type: "drinks",
  //       descripiton: "",
  //     },
  //     {
  //       id: 6,
  //       media_url:
  //         "https://res.cloudinary.com/dhebgz7qh/image/upload/v1767448128/u7uslcapng0rhneh7ond_rnevo4.jpg",
  //       type: "drinks",
  //       descripiton: "",
  //     },
  //     {
  //       id: 7,
  //       media_url:
  //         "https://res.cloudinary.com/dhebgz7qh/image/upload/v1767448115/gylzsw4bkzut4wwteqqh_humy6h.jpg",
  //       type: "drinks",
  //       descripiton: "",
  //     },
  //     {
  //       id: 8,
  //       media_url:
  //         "https://res.cloudinary.com/dhebgz7qh/image/upload/v1767448131/xgdljvsjasrf969yugaa_jhxw8w.jpg",
  //       type: "drinks",
  //       descripiton: "",
  //     },
  //     {
  //       id: 9,
  //       media_url:
  //         "https://res.cloudinary.com/dhebgz7qh/image/upload/v1767448121/qao703vvgwlbsogiv5cw_wjhvgp.jpg",
  //       type: "drinks",
  //       descripiton: "",
  //     },
  //     {
  //       id: 10,
  //       media_url:
  //         "https://res.cloudinary.com/dhebgz7qh/image/upload/v1767448132/zivckxpxoj7eoz3k0fbg_asox1j.jpg",
  //       type: "food",
  //       descripiton: "",
  //     },
  //     {
  //       id: 11,
  //       media_url:
  //         "https://res.cloudinary.com/dhebgz7qh/image/upload/v1767448118/mitkyzcyqpgraudf4mzo_ytgfkx.jpg",
  //       type: "food",
  //       descripiton: "",
  //     },
  //     {
  //       id: 12,
  //       media_url:
  //         "https://res.cloudinary.com/dhebgz7qh/image/upload/v1767448129/va3spn6weremalxijnim_j50w9s.jpg",
  //       type: "food",
  //       descripiton: "",
  //     },
  //     {
  //       id: 13,
  //       media_url:
  //         "https://res.cloudinary.com/dhebgz7qh/image/upload/v1767448113/hekcsbfgdyg9d6pup5ft_ceblkf.jpg",
  //       type: "food",
  //       descripiton: "",
  //     },
  //     {
  //       id: 14,
  //       media_url:
  //         "https://res.cloudinary.com/dhebgz7qh/image/upload/v1767448116/lrejrej4vkgm6pwz4pji_bflzxl.jpg",
  //       type: "food",
  //       descripiton: "",
  //     },
  //     {
  //       id: 15,
  //       media_url:
  //         "https://res.cloudinary.com/dhebgz7qh/image/upload/v1767448113/hcond6tzxbabx0ce4aku_g4z6r2.jpg",
  //       type: "food",
  //       descripiton: "",
  //     },
  //     {
  //       id: 16,
  //       media_url:
  //         "https://res.cloudinary.com/dhebgz7qh/image/upload/v1767448132/xmx5t5xm3uxrjf6ihcdt_upfix4.jpg",
  //       type: "food",
  //       descripiton: "",
  //     },
  //     {
  //       id: 17,
  //       media_url:
  //         "https://res.cloudinary.com/dhebgz7qh/image/upload/v1767448120/ozwomw2ybv9bkx2fkbxf_r4ziut.jpg",
  //       type: "food",
  //       descripiton: "",
  //     },
  //     {
  //       id: 18,
  //       media_url:
  //         "https://res.cloudinary.com/dhebgz7qh/image/upload/v1767448109/geo9wdmyu4pnh7c7mr9q_lypzi7.jpg",
  //       type: "food",
  //       descripiton: "",
  //     },
  //     {
  //       id: 19,
  //       media_url:
  //         "https://res.cloudinary.com/dhebgz7qh/image/upload/v1767448123/r6vdvndpnx7cvr5dntjd_tir57j.jpg",
  //       type: "food",
  //       descripiton: "",
  //     },
  //     {
  //       id: 20,
  //       media_url:
  //         "https://res.cloudinary.com/dhebgz7qh/image/upload/v1767448125/ujwwyfjsuybmzd2swakw_tus5pp.jpg",
  //       type: "food",
  //       descripiton: "",
  //     },
  //     {
  //       id: 21,
  //       media_url:
  //         "https://res.cloudinary.com/dhebgz7qh/image/upload/v1767448110/em1myinhecewatd7a5ih_hecxyp.jpg",
  //       type: "food",
  //       descripiton: "",
  //     },
  //     {
  //       id: 22,
  //       media_url:
  //         "https://res.cloudinary.com/dhebgz7qh/image/upload/v1767448108/b3u713dp7cpcwiidqpie_b9ej1h.jpg",
  //       type: "food",
  //       descripiton: "",
  //     },
  //     {
  //       id: 23,
  //       media_url:
  //         "https://res.cloudinary.com/dhebgz7qh/image/upload/v1767448107/a60azsrb6y4zzrdki2t6_at2eoq.jpg",
  //       type: "food",
  //       descripiton: "",
  //     },
  //     {
  //       id: 24,
  //       media_url:
  //         "https://res.cloudinary.com/dhebgz7qh/image/upload/v1767448114/ldwesrionjbuwffp0cw7_ivexgx.jpg",
  //       type: "food",
  //       descripiton: "",
  //     },
  //     {
  //       id: 25,
  //       media_url:
  //         "https://res.cloudinary.com/dhebgz7qh/image/upload/v1767448126/uk23x8ahosnejilqkjdq_j9uqm1.jpg",
  //       type: "food",
  //       descripiton: "",
  //     },
  //     {
  //       id: 26,
  //       media_url:
  //         "https://res.cloudinary.com/dhebgz7qh/image/upload/v1767448117/maqykxobznkum8ygukbv_htaziu.jpg",
  //       type: "food",
  //       descripiton: "",
  //     },
  //     {
  //       id: 27,
  //       media_url:
  //         "https://res.cloudinary.com/dhebgz7qh/image/upload/v1767448107/ahgneikwijzkfi1z3vih_snz6jg.jpg",
  //       type: "food",
  //       descripiton: "",
  //     },
  //     {
  //       id: 28,
  //       media_url:
  //         "https://res.cloudinary.com/dhebgz7qh/image/upload/v1767449259/osygbhyemxoc2vbe7xx5_iaiz3j.webp",
  //       type: "food",
  //       descripiton: "",
  //     },
  //     {
  //       id: 29,
  //       media_url:
  //         "https://res.cloudinary.com/dhebgz7qh/image/upload/v1767449500/rq65qikrbefpqmhsbfnt_g6megq.webp",
  //       type: "food",
  //       descripiton: "",
  //     },
  //   ],
  //   []
  // );

  const medias = useMemo(
    () => [
      {
        id: 1,
        media_url:
          "https://res.cloudinary.com/dwwmvxxqh/image/upload/v1771933844/1_eiy1ry.webp",
        type: "food",
        descripiton: "Smoked Salmon Croissant – Nour Maison Milton Keynes",
      },
      {
        id: 2,
        media_url:
          "https://res.cloudinary.com/dwwmvxxqh/image/upload/v1771936326/2_cew0ri.webp",
        type: "food",
        descripiton:
          "Beautifully plated breakfast at Nour Maison, featuring fresh fruit, pancakes with a drizzle of syrup, and a colorful iced drink alongside a delicate tea set. Perfect for a luxurious brunch experience in Milton Keynes",
      },
      {
        id: 6,
        media_url:
          "https://res.cloudinary.com/dwwmvxxqh/image/upload/v1771936837/6_klfki9.webp",
        type: "food",
        descripiton:
          "Delicious open sesame bagel at Nour Maison, topped with fresh avocado, figs, strawberries, and cream cheese, garnished with edible flowers and nuts, creating a vibrant and wholesome dish.",
      },
      {
        id: 4,
        media_url:
          "https://res.cloudinary.com/dwwmvxxqh/image/upload/v1771936536/4_aywult.webp",
        type: "drinks",
        descripiton:
          "Refreshing iced beverage at Nour Maison in Milton Keynes, featuring a vibrant gradient of colors and topped with crushed ice, paired beautifully with fresh floral accents and a delicious dish.",
      },
      {
        id: 8,
        media_url:
          "https://res.cloudinary.com/dwwmvxxqh/image/upload/v1771937138/8_q65sbc.webp",
        type: "food",
        descripiton:
          "Vibrant and fresh fruit dish at Nour Maison, beautifully garnished with figs, strawberries, and kiwi, paired with a delicate tea set, iced coffee, and floral accents, creating a luxurious brunch experience.",
      },
      {
        id: 9,
        media_url:
          "https://res.cloudinary.com/dwwmvxxqh/image/upload/v1771937262/9_eyfmi9.webp",
        type: "food",
        descripiton:
          "Exquisite brunch at Nour Maison, featuring a variety of dishes including a vibrant fruit-topped bagel, grilled chicken salad with fresh greens, and a delicate tea set, surrounded by beautiful floral accents.",
      },
      {
        id: 10,
        media_url:
          "https://res.cloudinary.com/dwwmvxxqh/image/upload/v1771937367/10_lcutqg.webp",
        type: "food",
        descripiton:
          "An elegant brunch spread at Nour Maison, featuring a fresh croissant salad with grilled chicken, a fruit-topped bagel with cream cheese, and a creamy fig dessert, accompanied by iced coffee and a tea set, with floral accents completing the scene.",
      },
      {
        id: 5,
        media_url:
          "https://res.cloudinary.com/dwwmvxxqh/image/upload/v1771936732/5_ij8kfu.webp",
        type: "drinks",
        descripiton:
          "Smooth iced coffee at Nour Maison, featuring a beautifully layered design with creamy caramel tones, complemented by fresh floral decorations and a delicious dish in the foreground.",
      },
      {
        id: 11,
        media_url:
          "https://res.cloudinary.com/dwwmvxxqh/image/upload/v1771937421/11_exz7fa.webp",
        type: "food",
        descripiton:
          "Delicious open sesame bagel at Nour Maison, topped with fresh avocado, strawberries, figs, and edible flowers, served with cream cheese and nuts for a wholesome and vibrant brunch.",
      },
      {
        id: 12,
        media_url:
          "https://res.cloudinary.com/dwwmvxxqh/image/upload/v1771937503/12_amimy7.webp",
        type: "food",
        descripiton:
          "Close-up of a vibrant open sesame bagel at Nour Maison, topped with fresh avocado, strawberries, figs, and edible flowers, garnished with cream cheese and crushed nuts for a wholesome and colorful brunch dish.",
      },
      {
        id: 13,
        media_url:
          "https://res.cloudinary.com/dwwmvxxqh/image/upload/v1771937616/13_lywprn.webp",
        type: "food",
        descripiton:
          "Close-up of luxurious pancakes at Nour Maison, topped with fresh figs, raspberries, and edible flowers, drizzled with a creamy sauce for a decadent brunch experience.",
      },
      {
        id: 7,
        media_url:
          "https://res.cloudinary.com/dwwmvxxqh/image/upload/v1771936973/7_noazsf.webp",
        type: "drinks",
        descripiton:
          "Elegant tea set at Nour Maison, featuring a floral teapot and cup, paired with a beautifully plated dish, creating a luxurious dining experience with a touch of floral beauty.",
      },
      {
        id: 14,
        media_url:
          "https://res.cloudinary.com/dwwmvxxqh/image/upload/v1771937682/14_krnsp0.webp",
        type: "food",
        descripiton:
          "A plate of decadent pancakes at Nour Maison, topped with fresh figs, raspberries, edible flowers, and drizzled with creamy sauce, with the Nour Maison sign softly blurred in the background.",
      },
      {
        id: 15,
        media_url:
          "https://res.cloudinary.com/dwwmvxxqh/image/upload/v1771937910/15_nk6kk7.webp",
        type: "food",
        descripiton:
          "A beautifully plated croissant dish at Nour Maison, filled with smoked salmon, cream cheese, and fresh greens, garnished with edible flowers and served with a colorful beetroot sauce drizzle.",
      },
      {
        id: 16,
        media_url:
          "https://res.cloudinary.com/dwwmvxxqh/image/upload/v1771938084/17_df3hfo.webp",
        type: "food",
        descripiton:
          "A gourmet croissant at Nour Maison, filled with smoked salmon, fresh cream cheese, and greens, garnished with edible flowers and served with a vibrant beetroot sauce.",
      },
      {
        id: 17,
        media_url:
          "https://res.cloudinary.com/dwwmvxxqh/image/upload/v1771938279/19_dqyajw.webp",
        type: "food",
        descripiton:
          "A savory croissant at Nour Maison, filled with smoked salmon, fresh greens, red onions, and capers, served with a vibrant beetroot sauce and accompanied by a refreshing iced beverage.",
      },
      {
        id: 24,
        media_url:
          "https://res.cloudinary.com/dwwmvxxqh/image/upload/v1772010408/24_jynib1.jpg",
        type: "drinks",
        descripiton:
          "A refreshing fruit platter at Nour Maison, featuring vibrant slices of watermelon, strawberries, kiwi, grapes, and plums, elegantly arranged on a stoneware plate for a healthy, colorful snack.",
      },
      {
        id: 18,
        media_url:
          "https://res.cloudinary.com/dwwmvxxqh/image/upload/v1771938352/18_rgrmqt.webp",
        type: "food",
        descripiton:
          "Savory croissant at Nour Maison, filled with smoked salmon, fresh onions, greens, and capers, served on a vibrant beetroot sauce, garnished with edible flowers for an elegant brunch.",
      },
      {
        id: 19,
        media_url:
          "https://res.cloudinary.com/dwwmvxxqh/image/upload/v1772008553/2_dnky0n.jpg",
        type: "food",
        descripiton:
          "A delicious pistachio tart at Nour Maison, topped with fig slices and a crisp pastry, drizzled with syrup for a perfect balance of sweetness, served with a refreshing drink in the background.",
      },
      {
        id: 20,
        media_url:
          "https://res.cloudinary.com/dwwmvxxqh/image/upload/v1772008625/3_f8qbah.jpg",
        type: "food",
        descripiton:
          "Fresh fruit bowl at Nour Maison, featuring juicy raspberries, blueberries, and crisp apple slices, served in a stylish stoneware bowl, with a refreshing drink in the background.",
      },
      {
        id: 21,
        media_url:
          "https://res.cloudinary.com/dwwmvxxqh/image/upload/v1772009027/6_c6wzkz.jpg",
        type: "food",
        descripiton:
          "A fresh and vibrant fruit platter at Nour Maison, featuring watermelon, kiwi, strawberries, grapes, and figs, beautifully arranged on a stoneware plate for a refreshing and healthy snack.",
      },
      {
        id: 25,
        media_url:
          "https://res.cloudinary.com/dwwmvxxqh/image/upload/v1772010635/26_vsr1bp.jpg",
        type: "drinks",
        descripiton:
          "A close-up image of a glass of aromatic soup with a piece of flatbread perched on the rim. The soup is rich in color, with visible spices and herbs, offering a warm and inviting presentation.",
      },
      {
        id: 22,
        media_url:
          "https://res.cloudinary.com/dwwmvxxqh/image/upload/v1772009407/12_zr48dh.jpg",
        type: "food",
        descripiton:
          "A beautiful spread at Nour Maison featuring a traditional Moroccan tagine with tender vegetables, hummus topped with shredded cheese, fresh fruit platter with figs, grapes, and watermelon, along with savory bruschetta and dates, all elegantly presented.",
      },
      {
        id: 23,
        media_url:
          "https://res.cloudinary.com/dwwmvxxqh/image/upload/v1772010087/19_iibwqs.jpg",
        type: "food",
        descripiton:
          "A flavorful rice dish at Nour Maison, featuring aromatic yellow rice topped with tender lamb, crispy fried onions, and fresh microgreens, drizzled with rich tomato sauce, served with a decorative Ramadan crescent.",
      },
      {
        id: 27,
        media_url:
          "https://res.cloudinary.com/dwwmvxxqh/image/upload/v1772011334/38_qhzlt8.jpg",
        type: "food",
        descripiton:
          "showcases a beautifully plated dish, possibly a savory delicacy, garnished with fresh sprouts and a burst of vibrant color from the red splatters on the plate. The dish is likely slow-cooked or tender meat resting on a piece of bread, adding texture and depth to the composition.",
      },
      {
        id: 26,
        media_url:
          "https://res.cloudinary.com/dwwmvxxqh/image/upload/v1772011241/36_a46qas.jpg",
        type: "drinks",
        descripiton:
          "bottle being poured into a glass, with a floral background adding a vibrant touch to the setting. The liquid appears to be a refreshing beverage, possibly a juice or sparkling drink.",
      },
      {
        id: 28,
        media_url:
          "https://res.cloudinary.com/dwwmvxxqh/image/upload/v1772011703/48_svnet4.jpg",
        type: "food",
        descripiton:
          "bowl with a dark liquid (likely coffee or tea) topped with a dollop of butter, possibly indicative of a specific style of drink or preparation. The overall aesthetic with the green bowl and the placement of the spoon gives a clean and simple vibe to the presentation.",
      },
      {
        id: 29,
        media_url:
          "https://res.cloudinary.com/dwwmvxxqh/image/upload/v1772011787/49_vyiky2.jpg",
        type: "food",
        descripiton:
          "plate of food, with neatly arranged rolls garnished with microgreens and a slice of bread on the top plate. There's also a cup of tea or coffee with a delicate floral pattern, and a small bowl likely containing a sauce or dip. The background with soft green and flowers complements the serene and refined look of the food presentation.",
      },
      {
        id: 30,
        media_url:
          "https://res.cloudinary.com/dwwmvxxqh/image/upload/v1772012311/53_bcokho.jpg",
        type: "food",
        descripiton:
          "Raspberry tart topped with fresh raspberries and cream served with a cup of tea and chocolate at Nour Maison, Milton Keynes.",
      },
      {
        id: 31,
        media_url:
          "https://res.cloudinary.com/dwwmvxxqh/image/upload/v1772012689/56_hisves.jpg",
        type: "food",
        descripiton:
          "desserts, fresh fruits, and tea, accompanied by a teapot, cups, and milk for an exquisite tea experience",
      },
      {
        id: 32,
        media_url:
          "https://res.cloudinary.com/dwwmvxxqh/image/upload/v1772013275/63_ndwjii.jpg",
        type: "food",
        descripiton:
          "Crème Brûlée served on a green plate at Nour Maison, garnished with a chocolate wafer stick and a swirl of chocolate sauce.",
      },
      {
        id: 33,
        media_url:
          "https://res.cloudinary.com/dwwmvxxqh/image/upload/v1772013540/65_ygq6ea.jpg",
        type: "food",
        descripiton:
          "An assortment of desserts including a fig tart with pistachios, a crème brûlée tart with a chocolate stick, and a raspberry tart with cream, all served on green triangular",
      },
    ],
    []
  );
  const hasInitialized = useRef(false);

  useEffect(() => {
    if (hasInitialized.current) return;
    hasInitialized.current = true;

    const shuffled = shuffleArray(medias);
    setPopularMovies(shuffled);
    setFiltered(shuffled);
  }, [medias]);

  const bannerImages = useMemo(
    () => [
      "https://res.cloudinary.com/dhebgz7qh/image/upload/v1767448128/u7uslcapng0rhneh7ond_rnevo4.jpg",
      "https://res.cloudinary.com/dhebgz7qh/image/upload/v1767448109/cd2oxrizxts95az7bhyy_vqrnhs.jpg",
    ],
    []
  );

  const imagesOnly = useMemo(
    () => filtered.filter((x) => detectMediaType(x?.media_url) === "image"),
    [filtered]
  );
  const videosOnly = useMemo(
    () => medias.filter((x) => detectMediaType(x?.media_url) !== "image"),
    [medias]
  );

  console.log("videosOnly", videosOnly);

  // ---------- Video Logic ----------
  const videoRefs = useRef([]);
  // Track mute state: { [index]: boolean }
  const [mutedByIndex, setMutedByIndex] = useState({});

  const isMuted = (idx) => mutedByIndex[idx] ?? true;

  const toggleReelMute = (idx) => {
    setMutedByIndex((prev) => {
      const nextMutedState = !(prev[idx] ?? true);

      // Update the React state (updates icon)
      const newState = { ...prev, [idx]: nextMutedState };

      // Immediately update the DOM element volume to prevent delay
      const v = videoRefs.current[idx];
      if (v) v.muted = nextMutedState;

      return newState;
    });
  };

  const pauseAllVideos = () => {
    videoRefs.current.forEach((v) => {
      if (!v) return;
      v.pause();
      try {
        v.currentTime = 0;
      } catch {}
    });
  };

  const playIndex = (idx) => {
    const v = videoRefs.current[idx];
    if (!v) return;

    // Ensure mute state matches logic before playing
    v.muted = isMuted(idx);
    v.play().catch((err) => console.log("Autoplay prevented:", err));
  };

  return (
    <div className="relative">
      <PagesBanner
        images={bannerImages}
        slogan={"Artisanal Visions: A Taste of Creativity "}
        title={"Gallery Corner"}
        scrollTo={"galley"}
      />

      <div className="relative" id="galley">
        {/* Header */}
        <div className="max-w-6xl mx-auto px-4 pt-10">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.55, ease: "easeOut" }}
            className="flex flex-col gap-3 items-center text-center"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-black/5 bg-white px-4 py-2 shadow-sm">
              <span className="h-2 w-2 rounded-full bg-softMintGreen" />
              <span className="text-xs sm:text-sm font-lato text-gray-600">
                Browse moments, dishes & vibes
              </span>
            </div>
            <h3 className="text-5xl sm:text-6xl font-seasons text-logoGold leading-tight">
              {activeTab === "Gallery" ? "Our Gallery" : "Our Portfolio"}
            </h3>
            <p className="max-w-2xl text-gray-600 font-lato text-sm sm:text-base">
              Explore our best captures—fresh food, signature drinks, and the
              ambience.
            </p>
          </motion.div>
        </div>

        {/* Toolbar */}
        <div className="z-30 mt-8">
          <div className="max-w-6xl mx-auto px-4">
            <div className="">
              <div className="flex flex-col lg:flex-row items-center justify-between gap-3">
                <div className="w-full lg:w-auto flex justify-center lg:justify-start">
                  <TopNavbar
                    activeTab={activeTab}
                    setActiveTab={setActiveTab}
                    tabs={tabs}
                  />
                </div>
                {activeTab === "Gallery" ? (
                  <div className="w-full lg:w-auto flex justify-center lg:justify-end">
                    <Filter
                      activeGenre={activeGenre}
                      setActiveGenre={setActiveGenre}
                      popular={popularMovies}
                      setFiltered={setFiltered}
                    />
                  </div>
                ) : null}
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="max-w-6xl mx-auto px-4 pb-16">
          <div style={{ display: activeTab === "Gallery" ? "block" : "none" }}>
            <motion.div
              key="gallery"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -18 }}
              transition={{ duration: 0.45, ease: "easeOut" }}
              className="mt-8"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                {/* LEFT: Images */}
                <div className="lg:col-span-8 order-2 lg:order-1">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-xl font-seasons text-logoGold">
                      Photos
                    </h4>
                    <span className="text-sm text-gray-500 font-lato">
                      {imagesOnly.length} items
                    </span>
                  </div>
                  <FancyboxElement options={{ Carousel: { infinite: false } }}>
                    <motion.div
                      layout
                      className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4"
                    >
                      <AnimatePresence>
                        {imagesOnly.map((movie) => (
                          <motion.div
                            key={movie.id}
                            layout
                            initial={{ opacity: 0, scale: 0.97, y: 10 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.97, y: 10 }}
                            transition={{ duration: 0.28, ease: "easeOut" }}
                            className="group"
                          >
                            <div className="rounded-2xl border border-black/5 bg-white shadow-sm overflow-hidden hover:shadow-md transition">
                              <Movie item={movie} />
                            </div>
                          </motion.div>
                        ))}
                      </AnimatePresence>
                    </motion.div>
                  </FancyboxElement>
                </div>

                {/* RIGHT: Videos (Reels) */}
                <div className="lg:col-span-4 sticky top-0 order-1 lg:order-2">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-xl font-seasons text-logoGold">
                      Reels
                    </h4>
                    <span className="text-sm text-gray-500 font-lato">
                      {videosOnly.length} videos
                    </span>
                  </div>

                  <div className="rounded-2xl border border-black/5 bg-white shadow-sm overflow-hidden">
                    <div className="h-[520px] sm:h-[600px] lg:h-[600px]">
                      {videosOnly.length ? (
                        <Swiper
                          direction="vertical"
                          slidesPerView={1}
                          spaceBetween={12}
                          mousewheel
                          pagination={{ clickable: true }}
                          modules={[Mousewheel, Pagination]}
                          className="h-full"
                          onSwiper={() => {
                            pauseAllVideos();
                            requestAnimationFrame(() => playIndex(0));
                          }}
                          onSlideChange={(sw) => {
                            pauseAllVideos();
                            requestAnimationFrame(() =>
                              playIndex(sw.activeIndex)
                            );
                          }}
                        >
                          {videosOnly.map((vid, idx) => (
                            <SwiperSlide key={vid.id} className="p-3 h-full">
                              {/* 
                                  2. Using the Extracted Component
                                  Pass setRef callback to assign refs 
                              */}
                              <ReelSlide
                                item={vid}
                                index={idx}
                                isMuted={isMuted(idx)}
                                toggleMute={toggleReelMute}
                                setVideoRef={(el) =>
                                  (videoRefs.current[idx] = el)
                                }
                              />
                            </SwiperSlide>
                          ))}
                        </Swiper>
                      ) : (
                        <div className="h-full p-8 flex items-center justify-center text-gray-500 text-center">
                          No reels available.
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          <div
            style={{ display: activeTab === "Portfolio" ? "block" : "none" }}
          >
            <motion.div className="mt-8">
              <div className="rounded-2xl border border-black/5 bg-white shadow-sm p-3 sm:p-5">
                <Portfolio2 />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallrey;
