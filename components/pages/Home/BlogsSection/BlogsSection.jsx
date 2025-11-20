"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import SectionTitle from "../../../SectionTitle/SectionTitle";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import Link from "next/link";
import BlogCard from "../../../Cards/blogCard/blogCard";

const BlogSwiper = ({ data }) => {
  // const res = await fetch("https://camp-coding.tech/nour_maison/user/get_blogs.php", { cache: "no-store" });
  // const data = await res.json();
  return (
    <div className="w-full px-4 py-6 md:px-12 max-w-7xl mx-auto">
      <div
        data-aos="fade-right"
        className="overflow-hidden container mt-8 flex flex-col md:flex-row justify-between gap-5 md:gap-10"
      >
        <div className="">
          <h5 className="text-5xl ms-3 font-tangerine text-center md:text-start">
            Blogs
          </h5>
          <h2 className="text-2xl md:text-4xl font-semibold text-center md:text-start text-goldenOrange font-lato">
            Nour Maison Moments{" "}
            <Link
              href="blog"
              className="text-sm font-lato !text-softMintGreen cursor-pointer hover:underline underline-offset-2"
            >
              Show More...
            </Link>
          </h2>
        </div>

        <div className="flex items-center mx-auto md:mx-0 gap-3 self-end place-self-end">
          <button
            className=" custom-prev__15  !cursor-pointer p-5 rounded-full border-2 border-softMintGreen text-softMintGreen "
            // onClick={() => {
            //   console.log(slider);
            //   swiperRef.current?.slidePrev();
            // }}
          >
            <FaArrowLeftLong />
          </button>
          <button
            className=" custom-next__15  position-relative bottom-0 top-0 start-0  p-5 rounded-full border-2 border-softMintGreen text-softMintGreen "
            // onClick={() => swiperRef.current?.slideNext()}
          >
            <FaArrowRightLong />
          </button>
        </div>
      </div>

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        navigation={{
          nextEl: ".custom-next__15",
          prevEl: ".custom-prev__15",
        }}
        breakpoints={{
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        loop={true}
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000 }}
        className="overflow-visible"
        data-aos="fade-up"
        data-aos-delay={100}
      >
        {data?.map((post, idx) => (
          <SwiperSlide key={idx}>
            <Link
              href={`blog/${post.id.toString()}/${post?.title.toLowerCase().replaceAll(
                " ",
                "-"
              )}`}
              className="no-underline hover:no-underline"
              data-aos="fade-up"
              // data-aos-delay={idx * 100}
            >
              <div className="my-10">
                <BlogCard post={post} />
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default BlogSwiper;
