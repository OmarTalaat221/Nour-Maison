"use client";

import React , {useEffect} from "react";
import BottomBg from "../../../../../utils/bottomBg/BottomBg";
import {
  FaEnvelope,
  FaFacebook,
  FaFolderOpen,
  FaInstagram,
  FaShare,
} from "react-icons/fa";
import { blogData } from "../../../data/blogs";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import handleShare from "../../../../../lib/ShareLink";
import { formatDate } from "../../../../../Hooks/dateFormats";
import { Link as ScrollLink } from 'react-scroll';
import ScrollToBottomButton from "../../../../../utils/ScrollToBottomButton/ScrollToBottomButton";
import slugify from "../../../../../lib/slugify";

const BlogClient = ({ data, blogsData, id , title }) => {

  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    
    console.log( "data"  , data)    

    if (  ![slugify(data?.title) , slugify(data?.keywords)].includes(title)) {
      router.replace(`/blog/${id}/${slugify(data?.keywords) || slugify(data?.title) }`);
    }
  }, [pathname]);



  return (
    <>
      <div className="relative h-screen w-full ">
        <img
          src={data.image}
          alt="Background Image"
          className="absolute inset-0 w-full h-full object-cover filter blur-0"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <div className="absolute flex flex-col inset-0 gap-7 items-center justify-center p-1 md:p-0 ">
          <h1 className=" text-white text-5xl md:text-7xl text-center font-bold font-tangerine">
            {data?.title}
          </h1>
          <p className=" text-white mt-4 line-clamp-1 max-w-6xl text-xl text-center font-oswald md:text-2xl leading-9 tracking-wide">
            {data?.description}
          </p>

          <div className="flex items-center mt-6 gap-10 text-xl text-white">
            <a href="" className="text-white hover:text-white">
              <FaFacebook className="w-8 h-8 p-1 transition hover:bg-gray-400/80 rounded-sm" />
            </a>
            <a href="" className="text-white hover:text-white">
              <FaInstagram className="w-8 h-8 p-1 transition hover:bg-gray-400/80 rounded-sm" />
            </a>
            <a href="" className="text-white hover:text-white">
              <FaEnvelope className="w-8 h-8 p-1 transition hover:bg-gray-400/80 rounded-sm" />
            </a>
            <a href="" 
              onClick={e=>{
                e.preventDefault()
                const baseURL = typeof window !== "undefined" ? window.location.origin : "";
                const fullURL = `${baseURL}${pathname}`;
                handleShare(fullURL)
              }}
            
            className="text-white hover:text-white">
              <FaShare className="w-8 h-8 p-1 transition hover:bg-gray-400/80 rounded-sm" />
            </a>
          </div>
        <ScrollLink
            href="/"
            style={{ textDecoration: "none" }}
            to={ "blog"|| "none"}
            smooth={true}
            duration={500}
            spy={true}
            offset={-150}
            title="Scroll To Bottom"
            aria-label="Scroll to content below"
          >
            <div className="mt-8 md:mt-10">
              <ScrollToBottomButton />
            </div>
          </ScrollLink>
        </div>



        <BottomBg />
      </div>

      <section id="blog" className=" dark:bg-gray-900">
        <div className="container px-6 py-10 mx-auto">
          <div className="lg:flex lg:-mx-6">
            <div className="lg:w-[70%] lg:px-6">
              <div className="relative">
              <div className=" tracking-wide absolute bottom-5 right-3 font-pacifico text-sm text-white bg-black/25 p-2 rounded">
                    {

                      (()=>{
                          try{
                            return formatDate(new Date(data.date))
                          }catch(e){
                              return ""
                          }
                      })()


                    }
                  </div>
              <img
                className="w-full rounded-xl"
                src={data.image}
                alt={data?.title || "blog title"}
                />
                </div>
              <div className="flex flex-col gap-4">
                <div className="flex flex-col md:flex-row items-center justify-between">
                  <h3 className=" order-2 md:order-1  md:text-4xl font-lato  text-softMintGreen mt-4  font-semibold leading-tight  dark:text-white">
                    {data?.title}
                  </h3>
                
                </div>

                <p className="" dangerouslySetInnerHTML={{ __html: data.content }} />
              </div>
            </div>
            <div className="mt-8 pb-4 flex flex-col gap-4 lg:w-[30%] lg:mt-0 lg:px-6 sticky top-[100px] overflow-auto h-[calc(100vh-100px)]">
              {blogsData.map((data, index) => (
                <Link
                  href={`/blog/${data.id.toString()}/${slugify( data?.keywords || data?.title)}`}
                  key={index}
                  className="no-underline hover:no-underline"
                >
                  <div className="group cursor-pointer border-2 bg-dairyCream/20 border-dairyCream transition hover:translate-x-4 rounded-lg ">
                    <div className="flex gap-4    min-h-[120px] rounded-lg overflow-hidden">
                      <div className=" min-w-[100px] w-[100px]">
                        <img
                          src={data?.image}
                          className="!w-full !h-full object-cover !object-center "
                          alt={data.title}
                        />
                      </div>
                      <div className="flex flex-col gap-2 justify-center">
                        <div className="flex items-center gap-2">
                          <FaFolderOpen className="text-logoGold text-lg" />
                          <h5 className="text-sm text-logoGold font-tajawal">
                            {data?.category}
                          </h5>
                        </div>
                        <h6 className="text-xl font-tajawal line-clamp-2 text-whiteGray group-hover:text-softMintGreen transition ">
                          {data.title}
                        </h6>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogClient;
