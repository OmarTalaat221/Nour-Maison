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
          "https://res.cloudinary.com/dbzn1y8rt/image/upload/f_auto,q_auto/v1738495110/u7uslcapng0rhneh7ond.webp",
        type: "drinks",
        descripiton: "",
      },
      {
        id: 2,
        media_url:
          "https://res.cloudinary.com/dbzn1y8rt/video/upload/v1738496477/ofln6neksu02dynedeax.mp4",
        type: "drinks",
        descripiton: "",
      },
      {
        id: 3,
        media_url:
          "https://res.cloudinary.com/dbzn1y8rt/video/upload/v1738497730/rw7mjpgfye1ke6a6wmvr.mp4",
        type: "drinks",
        descripiton: "",
      },
      {
        id: 4,
        media_url:
          "https://res.cloudinary.com/dbzn1y8rt/video/upload/v1738497729/ooaf1ruia6doeip4qwdg.mp4",
        type: "drinks",
        descripiton: "",
      },
      {
        id: 5,
        media_url:
          "https://res.cloudinary.com/dbzn1y8rt/image/upload/f_auto,q_auto/v1738495075/cd2oxrizxts95az7bhyy.webp",
        type: "drinks",
        descripiton: "",
      },
      {
        id: 6,
        media_url:
          "https://res.cloudinary.com/dbzn1y8rt/image/upload/f_auto,q_auto/v1738495110/u7uslcapng0rhneh7ond.webp",
        type: "drinks",
        descripiton: "",
      },
      {
        id: 7,
        media_url:
          // "https://res.cloudinary.com/dbzn1y8rt/image/upload/f_auto,q_auto/v1738498619/jeefokrectjock0u7sst.jpg",
          "https://res.cloudinary.com/dbzn1y8rt/image/upload/f_auto,q_auto/v1745664212/gylzsw4bkzut4wwteqqh.webp",
        type: "drinks",
        descripiton: "",
      },
      {
        id: 8,
        media_url:
          "https://res.cloudinary.com/dbzn1y8rt/image/upload/f_auto,q_auto/v1738499209/xgdljvsjasrf969yugaa.jpg",
        type: "drinks",
        descripiton: "",
      },
      
      {
        id: 9,
        media_url:
          "https://res.cloudinary.com/dbzn1y8rt/image/upload/f_auto,q_auto/v1738499446/qao703vvgwlbsogiv5cw.jpg",
        type: "drinks",
        descripiton: "",
      },
      {
        id: 10,
        media_url:
          "https://res.cloudinary.com/dbzn1y8rt/image/upload/f_auto,q_auto/v1738500690/zivckxpxoj7eoz3k0fbg.jpg",
        type: "food",
        descripiton: "",
      },
      {
        id: 11,
        media_url:
          "https://res.cloudinary.com/dbzn1y8rt/image/upload/f_auto,q_auto/v1738500635/mitkyzcyqpgraudf4mzo.jpg",
        type: "food",
        descripiton: "",
      },
      {
        id: 12,
        media_url:
          "https://res.cloudinary.com/dbzn1y8rt/image/upload/f_auto,q_auto/v1738500584/va3spn6weremalxijnim.jpg",
        type: "food",
        descripiton: "",
      },
      {
        id: 13,
        media_url:
          "https://res.cloudinary.com/dbzn1y8rt/image/upload/f_auto,q_auto/v1738500555/hekcsbfgdyg9d6pup5ft.webp",
        type: "food",
        descripiton: "",
      },
      {
        id: 14,
        media_url:
          "https://res.cloudinary.com/dbzn1y8rt/image/upload/f_auto,q_auto/v1738500540/lrejrej4vkgm6pwz4pji.jpg",
        type: "food",
        descripiton: "",
      },
      {
        id: 15,
        media_url:
          "https://res.cloudinary.com/dbzn1y8rt/image/upload/f_auto,q_auto/v1738500501/hcond6tzxbabx0ce4aku.jpg",
        type: "food",
        descripiton: "",
      },
      {
        id: 16,
        media_url:
          "https://res.cloudinary.com/dbzn1y8rt/image/upload/f_auto,q_auto/v1738500897/xmx5t5xm3uxrjf6ihcdt.webp",
        type: "food",
        descripiton: "",
      },
      {
        id: 17,
        media_url:
          "https://res.cloudinary.com/dbzn1y8rt/image/upload/f_auto,q_auto/v1738501018/ozwomw2ybv9bkx2fkbxf.jpg",
        type: "food",
        descripiton: "",
      },
      {
        id: 18,
        media_url:
          "https://res.cloudinary.com/dbzn1y8rt/image/upload/f_auto,q_auto/v1738501082/geo9wdmyu4pnh7c7mr9q.jpg",
        type: "food",
        descripiton: "",
      },
      {
        id: 19,
        media_url:
          "https://res.cloudinary.com/dbzn1y8rt/image/upload/f_auto,q_auto/v1738501391/r6vdvndpnx7cvr5dntjd.jpg",
        type: "food",
        descripiton: "",
      },
      {
        id: 20,
        media_url:
          "https://res.cloudinary.com/dbzn1y8rt/image/upload/f_auto,q_auto/v1738501550/ujwwyfjsuybmzd2swakw.png",
        type: "food",
        descripiton: "",
      },
      {
        id: 21,
        media_url:
          "https://res.cloudinary.com/dbzn1y8rt/image/upload/f_auto,q_auto/v1738501636/em1myinhecewatd7a5ih.png",
        type: "food",
        descripiton: "",
      },
      {
        id: 22,
        media_url:
          "https://res.cloudinary.com/dbzn1y8rt/image/upload/f_auto,q_auto/v1738501928/b3u713dp7cpcwiidqpie.png",
        type: "food",
        descripiton: "",
      },
      {
        id: 23,
        media_url:
          "https://res.cloudinary.com/dbzn1y8rt/image/upload/f_auto,q_auto/v1738502000/a60azsrb6y4zzrdki2t6.png",
        type: "food",
        descripiton: "",
      },
      {
        id: 24,
        media_url:
          "https://res.cloudinary.com/dbzn1y8rt/image/upload/f_auto,q_auto/v1738502060/ldwesrionjbuwffp0cw7.png",
        type: "food",
        descripiton: "",
      },
      {
        id: 25,
        media_url:
          "https://res.cloudinary.com/dbzn1y8rt/image/upload/f_auto,q_auto/v1738502268/uk23x8ahosnejilqkjdq.png",
        type: "food",
        descripiton: "",
      },
      {
        id: 26,
        media_url:
          "https://res.cloudinary.com/dbzn1y8rt/image/upload/f_auto,q_auto/v1738502637/maqykxobznkum8ygukbv.png",
        type: "food",
        descripiton: "",
      },
      {
        id: 27,
        media_url:
          "https://res.cloudinary.com/dbzn1y8rt/image/upload/f_auto,q_auto/v1738502731/ahgneikwijzkfi1z3vih.png",
        type: "food",
        descripiton: "",
      },
      {
        id: 28,
        media_url:
          "https://res.cloudinary.com/dbzn1y8rt/image/upload/f_auto,q_auto/v1738503684/osygbhyemxoc2vbe7xx5.png",
        type: "food",
        descripiton: "",
      },
      {
        id: 29,
        media_url:
          "https://res.cloudinary.com/dbzn1y8rt/image/upload/f_auto,q_auto/v1738503818/tmjcpxo74oepftikcfle.png",
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
          "https://res.cloudinary.com/dbzn1y8rt/image/upload/f_auto,q_auto/v1738495110/u7uslcapng0rhneh7ond.webp",
          "https://res.cloudinary.com/dbzn1y8rt/image/upload/f_auto,q_auto/v1738495075/cd2oxrizxts95az7bhyy.webp",
          "https://res.cloudinary.com/dbzn1y8rt/image/upload/f_auto,q_auto/v1738495110/u7uslcapng0rhneh7ond.webp",
          "https://res.cloudinary.com/dbzn1y8rt/image/upload/f_auto,q_auto/v1745664212/gylzsw4bkzut4wwteqqh.webp",
          "https://res.cloudinary.com/dbzn1y8rt/image/upload/f_auto,q_auto/v1738499209/xgdljvsjasrf969yugaa.jpg",
          "https://res.cloudinary.com/dbzn1y8rt/image/upload/f_auto,q_auto/v1738500635/mitkyzcyqpgraudf4mzo.jpg",


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
        <h3 className="text-6xl font-tangerine text-center text-logoGold mt-10 relative z-20">
          {activeTab == "Gallery" ? "Our Gallery" : "Our Portfolio"}
        </h3>

        {/* <Portfolio2 /> */}

        <div style={{ display: activeTab === "Gallery" ? "block" : "none" }}>
          <motion.div
            initial={{ opacity: 0, x: "-100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            className="  w-full px-3 max-w-6xl mx-auto mt-10  relative z-30"
          >
            <div className="flex items-center gap-3 justify-center">
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
