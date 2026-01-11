import React from "react";
import BottomBg from "../../../../utils/bottomBg/BottomBg";
import TopBg from "../../../../utils/topBg/TopBg";

const BookTableSection = () => {
  return (
    <div className="  mt-0 md:mt-20  !border-b-2 !border-white relative">
      <TopBg />

      <section
        id="fixed-bg"
        class="fixed-bg section dark-background relative select-none "
      >
        <img  
          src="https://res.cloudinary.com/dhebgz7qh/image/upload/v1767447627/eo5sxlh0gym8drgtc32j_qiznnz.jpg"
          alt="nour maison caffee"
          className="fixed-img"
          draggable="false"
        />
        {/* <div className='_overlay'></div> */}

        <div className="text-white relative z-20  flex flex-col gap-6 items-center justify-center ">
          <header
            data-aos="fade-down"
            data-aos-delay={300}
            className=" text-4xl md:text-6xl text-center font-tangerine "
          >
            We Create Delicious Memories
          </header>

          <h4
            data-aos="zoom-in"
            className=" text-3xl md:text-6xl md:px-5 lg-px-0 lg:text-8xl font-semibold font-tajawal text-center w-full lg:w-[1000px]"
          >
            Pull Up A Chair. Take A Taste & Come Join Us
          </h4>

          <h6
            data-aos="zoom-in"
            className=" text-lg md:text-xl    font-thin text-center"
          >
            We have awesome recipes and the most talented chefs in town!
          </h6>
          <div className="" data-aos="fade-up" data-aos-delay={400}>
            <button
              className="outlined_btn "
              onClick={() => (window.location.href = "/booking")}
            >
              Book A Table
            </button>
          </div>
        </div>
        <div className="overlay"></div>
      </section>
      <BottomBg />
    </div>
  );
};

export default BookTableSection;
