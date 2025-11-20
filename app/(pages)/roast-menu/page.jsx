"use client";

import React from "react";
import PagesBanner from "../../../components/PagesBanner/PagesBanner";
import BranchesImage from "./../../../utils/BranchesImage/BranchesImage";
import BottomBg from "./../../../utils/bottomBg/BottomBg";

const KidsMenu = () => {
  const data = [
    {
      item: "On Toast",
      description:
        "Pick your toppings—eggs, beans, sausage, or bacon! It’s like a breakfast bash on toast, and you’re the boss!",
    },
    {
      item: "Nuggets",
      description:
        "Golden bites of crispy, juicy fun! Perfect for dunking, crunching, and loving!",
    },
    {
      item: "Mini Chicken Milanese",
      description:
        "Crispy chicken made just for little foodies. It’s fancy but oh-so-fun!",
    },
    {
      item: "Falafel Bites",
      description:
        "Crunchy, munchy bites of yum! A flavor party in every bite—no disguises, just fun!",
    },
    {
      item: "Pancakes",
      description:
        "Fluffy little clouds of joy! Stack ’em, snack ’em, and lick the plate clean!",
    },
    {
      item: "Waffle",
      description:
        "Crispy, crisscrossed fun with all the sticky, sweet toppings you can handle. Warning: may cause happy dances!",
    },
    {
      item: "Pick Your Fave Juices",

      description: (
        <>
          Apple, Orange, Mango, Pineapple",
          <br />
          <span className="  text-base md:text-xl text-softMintGreen font-bold">
            Or
          </span>
          <br />
          <span className="bg-black text-white px-4 text-center whitespace-nowrap rounded-full py-1">
            Baby-chino kids hot chocolate topped with cream
          </span>
        </>
      ),
    },
  ];

  return (
    <div>
      <PagesBanner
        bottomBg={false}
        images={[
          "/images/download (1).jfif",
          "/images/download (2).jfif",
          "/images/download (3).jfif",
          "/images/download (4).jfif",
        ]}
        slogan={
          <div className=" text-lg md:text-2xl xl:text-3xl">
            A Sunday ritual where Arabic spice meets French finesse to reimagine
            the classic British roast. Halal-friendly, <br /> locally sourced,
            and crafted with soul. Book your table now.
          </div>
        }
        title={"Experience our new Roast Dinner Menu"}
        scrollTo={"kids-menu"}
      />
      <div
        className="w-full  relative py-36  mt-[-120px] z-10"
        style={{
          background: "url('/images/rd bg paper texture.webp')",
          backgroundSize: "cover",
          backgroundPosition: "top",
          backgroundRepeat: "no-repeat",
        }}
      >
        <BottomBg />

        <img
          src="images/rc.webp"
          className="w-full   max-w-2xl  xl:max-w-4xl  mx-auto  rounded-3xl relatvie "
          alt=""
        />
      </div>
    </div>
  );
};

export default KidsMenu;
