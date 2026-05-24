import React from "react";
import BottomBg from "../../../../utils/bottomBg/BottomBg";
import TopBg from "../../../../utils/topBg/TopBg";
import Link from "next/link";

const titleLetters = "Pull Up A Chair. Take A Seat And  Come Join Us".split("");

const BookTableSection = () => {
  return (
    <div className="mt-0 md:mt-20 !border-b-2 !border-white relative">
      <TopBg />

      <section
        id="fixed-bg"
        className="fixed-bg section dark-background relative select-none"
      >
        <img
          loading="lazy"
          decoding="async"
          fetchPriority="low"
          src="https://res.cloudinary.com/dhebgz7qh/image/upload/v1767443804/zexptzvrvwxbsvi8pqho_uwwxnb.jpg"
          alt="nour caffe"
          width={1920}
          height={1280}
          className="fixed-img"
          draggable="false"
        />

        <div className="text-white relative z-20 flex flex-col gap-6 items-center justify-center">
          <header
            style={{
              textShadow: "1px 2px 0 #493207",
            }}
            data-aos="fade-down"
            data-aos-delay={300}
            className="text-4xl md:text-6xl text-center font-bold font-tangerine text-[#fff]"
          >
            We Create Delicious Memories
          </header>

          <h4
            style={{
              textShadow: "6px 4px 0 #493207",
            }}
            data-aos="zoom-in"
            className="text-3xl md:text-6xl md:px-5 lg-px-0 lg:text-8xl font-semibold font-seasons text-center w-full lg:w-[1000px] text-[#f3ae40]"
          >
            {titleLetters.map((letter, index) => (
              <span
                key={`${letter}-${index}`}
                data-aos="fade-in"
                data-aos-delay={index * 50}
              >
                {letter}
              </span>
            ))}
          </h4>

          <h6
            data-aos="zoom-in"
            className="text-lg md:text-xl font-thin text-center"
          >
            We have awesome recipes and the most talented chefs in town!
          </h6>

          <div data-aos="fade-up" data-aos-delay={400}>
            <button
              type="button"
              className="button-border-anime !w-44 md:!w-60 !h-[4rem]"
              aria-label="Book A Table"
            >
              <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <rect
                  className="border-anime !w-44 md:!w-60 !h-[4rem] !stroke-[4px] !stroke-[#c16d2d]"
                  pathLength={100}
                />
              </svg>

              <Link
                href="/booking"
                prefetch={false}
                className="txt-upload uppercase font-seasons !text-white no-underline hover:no-underline text-3xl"
              >
                Book A Table
              </Link>
            </button>
          </div>
        </div>

        <div className="overlay" aria-hidden="true"></div>
      </section>

      <BottomBg />
    </div>
  );
};

export default BookTableSection;
