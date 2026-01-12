"use client";
import React, { useEffect, useState } from "react";
import BranchesImage from "../../../utils/BranchesImage/BranchesImage";
import PagesBanner from "../../../components/PagesBanner/PagesBanner";
import Movie from "../../../components/pages/Gallery/Movies/Movies";
import { AnimatePresence, motion } from "framer-motion";
import FancyboxElement from "../../../utils/FancyBox/FancyBox";
import Filter from "../../../components/pages/Gallery/Filter/Filter";
import Portfolio2 from "./../../../components/portfolio2/portfolio2";
import cx from "classnames";
import { TopNavbar } from "./../../../components/pages/Gallery/TopNavbar/TopNavbar";

const Gallrey = () => {
  const [popularMovies, setPopularMovies] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [activeTab, setActiveTab] = useState("Gallery");
  const [activeGenre, setActiveGenre] = useState("all");
  const tabs = ["Gallery", "Portfolio"];

  function shuffleArray(array) {
    let currentIndex = array.length;
    let randomIndex;

    // While there remain elements to shuffle...
    while (currentIndex !== 0) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }

    return array;
  }
  const fetchPopular = async () => {
    // const data = await fetch(
    //   "https://api.themoviedb.org/3/movie/popular?api_key=1dfcce0b8c5b9ce64123438b04c4e865&language=en-US"
    // );
    // const movies = await data.json();

    const medias = [
      {
        id: 1,
        media_url:
          "https://res.cloudinary.com/dhebgz7qh/image/upload/v1767448128/u7uslcapng0rhneh7ond_rnevo4.jpg",
        type: "drinks",
        descripiton: "",
      },
      {
        id: 2,
        media_url:
          "https://res.cloudinary.com/dhebgz7qh/video/upload/v1767448183/ofln6neksu02dynedeax_ig1kbt.mp4",
        type: "drinks",
        descripiton: "",
      },
      {
        id: 3,
        media_url:
          "https://res.cloudinary.com/dhebgz7qh/video/upload/v1767448180/rw7mjpgfye1ke6a6wmvr_u30fz9.mp4",
        type: "drinks",
        descripiton: "",
      },
      {
        id: 4,
        media_url:
          "https://res.cloudinary.com/dhebgz7qh/video/upload/v1767448188/ooaf1ruia6doeip4qwdg_raay8j.mp4",
        type: "drinks",
        descripiton: "",
      },
      {
        id: 5,
        media_url:
          "https://res.cloudinary.com/dhebgz7qh/image/upload/v1767448109/cd2oxrizxts95az7bhyy_vqrnhs.jpg",
        type: "drinks",
        descripiton: "",
      },
      {
        id: 6,
        media_url:
        "https://res.cloudinary.com/dhebgz7qh/image/upload/v1767448128/u7uslcapng0rhneh7ond_rnevo4.jpg",
        type: "drinks",
        descripiton: "",
      },
      {
        id: 7,
        media_url:
          "https://res.cloudinary.com/dhebgz7qh/image/upload/v1767448115/gylzsw4bkzut4wwteqqh_humy6h.jpg",
        type: "drinks",
        descripiton: "",
      },
      {
        id: 8,
        media_url:
          "https://res.cloudinary.com/dhebgz7qh/image/upload/v1767448131/xgdljvsjasrf969yugaa_jhxw8w.jpg",
        type: "drinks",
        descripiton: "",
      },
      
      {
        id: 9,
        media_url:
          "https://res.cloudinary.com/dhebgz7qh/image/upload/v1767448121/qao703vvgwlbsogiv5cw_wjhvgp.jpg",
        type: "drinks",
        descripiton: "",
      },
      {
        id: 10,
        media_url:
          "https://res.cloudinary.com/dhebgz7qh/image/upload/v1767448132/zivckxpxoj7eoz3k0fbg_asox1j.jpg",
        type: "food",
        descripiton: "",
      },
      {
        id: 11,
        media_url:
          "https://res.cloudinary.com/dhebgz7qh/image/upload/v1767448118/mitkyzcyqpgraudf4mzo_ytgfkx.jpg",
        type: "food",
        descripiton: "",
      },
      {
        id: 12,
        media_url:
          "https://res.cloudinary.com/dhebgz7qh/image/upload/v1767448129/va3spn6weremalxijnim_j50w9s.jpg",
        type: "food",
        descripiton: "",
      },
      {
        id: 13,
        media_url:
          "https://res.cloudinary.com/dhebgz7qh/image/upload/v1767448113/hekcsbfgdyg9d6pup5ft_ceblkf.jpg",
        type: "food",
        descripiton: "",
      },
      {
        id: 14,
        media_url:
          "https://res.cloudinary.com/dhebgz7qh/image/upload/v1767448116/lrejrej4vkgm6pwz4pji_bflzxl.jpg",
        type: "food",
        descripiton: "",
      },
      {
        id: 15,
        media_url:
          "https://res.cloudinary.com/dhebgz7qh/image/upload/v1767448113/hcond6tzxbabx0ce4aku_g4z6r2.jpg",
        type: "food",
        descripiton: "",
      },
      {
        id: 16,
        media_url:
          "https://res.cloudinary.com/dhebgz7qh/image/upload/v1767448132/xmx5t5xm3uxrjf6ihcdt_upfix4.jpg",
        type: "food",
        descripiton: "",
      },
      {
        id: 17,
        media_url:
          "https://res.cloudinary.com/dhebgz7qh/image/upload/v1767448120/ozwomw2ybv9bkx2fkbxf_r4ziut.jpg",
        type: "food",
        descripiton: "",
      },
      {
        id: 18,
        media_url:
          "https://res.cloudinary.com/dhebgz7qh/image/upload/v1767448109/geo9wdmyu4pnh7c7mr9q_lypzi7.jpg",
        type: "food",
        descripiton: "",
      },
      {
        id: 19,
        media_url:
          "https://res.cloudinary.com/dhebgz7qh/image/upload/v1767448123/r6vdvndpnx7cvr5dntjd_tir57j.jpg",
        type: "food",
        descripiton: "",
      },
      {
        id: 20,
        media_url:
          "https://res.cloudinary.com/dhebgz7qh/image/upload/v1767448125/ujwwyfjsuybmzd2swakw_tus5pp.jpg",
        type: "food",
        descripiton: "",
      },
      {
        id: 21,
        media_url:
          "https://res.cloudinary.com/dhebgz7qh/image/upload/v1767448110/em1myinhecewatd7a5ih_hecxyp.jpg",
        type: "food",
        descripiton: "",
      },
      {
        id: 22,
        media_url:
          "https://res.cloudinary.com/dhebgz7qh/image/upload/v1767448108/b3u713dp7cpcwiidqpie_b9ej1h.jpg",
        type: "food",
        descripiton: "",
      },
      {
        id: 23,
        media_url:
          "https://res.cloudinary.com/dhebgz7qh/image/upload/v1767448107/a60azsrb6y4zzrdki2t6_at2eoq.jpg",
        type: "food",
        descripiton: "",
      },
      {
        id: 24,
        media_url:
          "https://res.cloudinary.com/dhebgz7qh/image/upload/v1767448114/ldwesrionjbuwffp0cw7_ivexgx.jpg",
        type: "food",
        descripiton: "",
      },
      {
        id: 25,
        media_url:
          "https://res.cloudinary.com/dhebgz7qh/image/upload/v1767448126/uk23x8ahosnejilqkjdq_j9uqm1.jpg",
        type: "food",
        descripiton: "",
      },
      {
        id: 26,
        media_url:
          "https://res.cloudinary.com/dhebgz7qh/image/upload/v1767448117/maqykxobznkum8ygukbv_htaziu.jpg",
        type: "food",
        descripiton: "",
      },
      {
        id: 27,
        media_url:
          "https://res.cloudinary.com/dhebgz7qh/image/upload/v1767448107/ahgneikwijzkfi1z3vih_snz6jg.jpg",
        type: "food",
        descripiton: "",
      },
      {
        id: 28,
        media_url:
          "https://res.cloudinary.com/dhebgz7qh/image/upload/v1767449259/osygbhyemxoc2vbe7xx5_iaiz3j.webp",
        type: "food",
        descripiton: "",
      },
      {
        id: 29,
        media_url:
          "https://res.cloudinary.com/dhebgz7qh/image/upload/v1767449500/rq65qikrbefpqmhsbfnt_g6megq.webp",
        type: "food",
        descripiton: "",
      },
    ];

    const shuffledArray = shuffleArray(medias);

    setPopularMovies(shuffledArray);
    setFiltered(shuffledArray);
  };

  useEffect(() => {
    fetchPopular();
  }, []);

  return (
    <div className="relative">
      <PagesBanner
        images={[
          "https://res.cloudinary.com/dhebgz7qh/image/upload/v1767448128/u7uslcapng0rhneh7ond_rnevo4.jpg",
          "https://res.cloudinary.com/dhebgz7qh/image/upload/v1767448109/cd2oxrizxts95az7bhyy_vqrnhs.jpg",
          "https://res.cloudinary.com/dhebgz7qh/image/upload/v1767448128/u7uslcapng0rhneh7ond_rnevo4.jpg",
          "https://res.cloudinary.com/dhebgz7qh/image/upload/v1767448115/gylzsw4bkzut4wwteqqh_humy6h.jpg",
          "https://res.cloudinary.com/dhebgz7qh/image/upload/v1767448131/xgdljvsjasrf969yugaa_jhxw8w.jpg",
          "https://res.cloudinary.com/dhebgz7qh/image/upload/v1767448121/qao703vvgwlbsogiv5cw_wjhvgp.jpg",
        ]}
        slogan={"Artisanal Visions: A Taste of Creativity "}
        title={"Gallery Corner"}
        scrollTo={"galley"}
      />

      <div className="relative" id="galley">
        <BranchesImage
          width={1000}
          variant={"top-left"}
          className={" left-0  opacity-40 "}
        />
        <BranchesImage
          width={700}
          variant={"top-right"}
          className={" right-0 opacity-40 "}
        />
        <div className="flex items-center gap-3 justify-center mt-9">
          {/* <Filter
              activeGenre={activeGenre}
              setActiveGenre={setActiveGenre}
              popular={popularMovies}
              setFiltered={setFiltered}
            /> */}
          <TopNavbar
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            tabs={tabs}
          />
        </div>
        <h3 className="text-6xl font-seasons text-center text-logoGold mt-10 relative z-20">
          {activeTab == "Gallery" ? "Our Gallery" : "Our Portfolio"}
        </h3>

        {/* <Portfolio2 /> */}

        <div style={{ display: activeTab === "Gallery" ? "block" : "none" }}>
          <motion.div
            initial={{ opacity: 0, x: "-100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            className="  w-full px-3 max-w-6xl mx-auto mt-10  relative "
          >
            <div className="flex items-center z-0 gap-3 justify-center">
              <Filter
                activeGenre={activeGenre}
                setActiveGenre={setActiveGenre}
                popular={popularMovies}
                setFiltered={setFiltered}
              />
            </div>

            <FancyboxElement
              options={{
                Carousel: {
                  infinite: false,
                },
              }}
            >
              <motion.div
                layout
                className="  grid  grid-cols-2  md:grid-cols-3 lg:grid-cols-5  gap-x-2 md:gap-x-4  gap-y-4 md:gap-y-8"
              >
                <AnimatePresence>
                  {filtered.map((movie, index) => {
                    return <Movie item={movie} key={movie.id} />;
                  })}
                </AnimatePresence>
              </motion.div>
            </FancyboxElement>
          </motion.div>
        </div>

        <div style={{ display: activeTab === "Portfolio" ? "block" : "none" }}>
          <Portfolio2 />
        </div>
      </div>
    </div>
  );
};

export default Gallrey;
