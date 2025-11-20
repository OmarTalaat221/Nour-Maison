import React from "react";
import PagesBanner from "../../../components/PagesBanner/PagesBanner";
import NourKidsMenuHero from "../../../components/pages/Home/KidsSection";

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
        images={[
          "/images/kids.png",
          "/images/Whisk_e0617739cbe1b4385fb4a9b9cca15b6fdr.jpeg",
          "/images/Whisk_qjy0qwmhftm4edz20soxktotemn5qtl0kjm40sy.jpeg",
        ]}
        slogan={"Where every little bite brings a big smile!"}
        title={"Kids Corner"}
        scrollTo={"kids-menu"}
      />
      <NourKidsMenuHero
        src="/images/Kids_Menu_Animation_Generation.mp4"
        poster="/images/kids menu .jpeg"
      />
      <div className="w-full px-10">
        <img
          src="/images/2241974483.png"
          className="w-full  mx-auto mt-5 rounded-3xl shadow-2xl"
          alt=""
        />
      </div>
      <div
        id="kids-menu"
        className="container hidden mx-auto  px-4 sm:px-6 lg:px-4 relative"
      >
        <div className="relative  mb-5 md:mb-10">
          <img
            src="/images/image-priece-arrow.png"
            alt=""
            className="absolute  top-3 md:top-32 left-0"
          />
          <img
            className="  w-[100px] md:w-[200px]  ms-auto md:mx-auto"
            src="https://res.cloudinary.com/dbzn1y8rt/image/upload/f_auto,q_auto/v1737983251/y3replc9wmlnvwb7kjvo.png"
            alt=""
          />
          <div className="mx-auto relative  z-20 text-center  text-3xl md:text-7xl font-pacifico text-softMintGreen font-black my-4">
            Kids Menu
          </div>
          <p className="text-center relative z-20 text-xl font-oswald text-goldenOrange">
            Delicious Food and Refreshing Drinks For Little Ones
          </p>
        </div>

        <div className="grid grid-cols lg:grid-cols-2  ">
          {data.map((item, index) => (
            <div className="relative ">
              <img
                src="/images/Whisk_3ec94f4af6fee939e944ae5f75649288dr.jpg"
                alt=""
              />
              <div className="absolute top-0 left-0 w-full h-full overflow-hidden flex flex-col items-center text-center  px-[60px]  py-[70px]  md:px-[80px]  lg:px-[130px]   md:!py-[120px] lg:py-[110px]   ">
                <h3 className="font-oswald font-bold  text-2xl md:text-4xl  text-softMintGreen">
                  {item.item}{" "}
                </h3>
                <p className="  mt-2 md:mt-4 font-oswald  text-sm md:text-lg ">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );  
};

export default KidsMenu;
