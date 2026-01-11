"use client"

import React, { useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import { useNotFound } from "../../../context/NoutFoundContext";

const NotFound = () => {

  const { setIsNotFound } = useNotFound();
  const pathname = usePathname();

  const router = useRouter()
  useEffect(() => {
    setIsNotFound(true);
    return () => setIsNotFound(false);
  }, []);


  return (
    <section className=" dark:bg-gray-900 ">
      <div className="container min-h-screen px-6 py-20 mx-auto lg:flex lg:items-center lg:gap-12">
        <div className="wf-ull lg:w-1/2">
          <p className="text-sm font-medium text-blue-500 dark:text-blue-400">
            404 error
          </p>
          <h1 className="mt-3 text-2xl text-softMintGreen font-semibold  dark:text-white md:text-3xl">
            Blog not found
          </h1>
          <p className="mt-4 text-gray-500 dark:text-gray-400">
            Sorry, the page you are looking for doesn't exist.Here are some
            helpful links:
          </p>
          <div className="flex items-center mt-6 gap-x-3">
            <button 
                  onClick={() => router.back()}

            className="flex items-center justify-center w-1/2 px-5 py-2 text-sm text-gray-700 transition-colors duration-200 bg-white border rounded-lg gap-x-2 sm:w-auto dark:hover:bg-gray-800 dark:bg-gray-900 hover:bg-gray-100 dark:text-gray-200 dark:border-gray-700">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-5 h-5 rtl:rotate-180"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
                />
              </svg>
              <span>Go back</span>
            </button>
            <button onClick={()=> router.push("/")} className="w-1/2 px-5 py-2 text-sm tracking-wide text-white transition-colors duration-200 bg-softMintGreen rounded-lg shrink-0 sm:w-auto hover:bg-green-800 dark:hover:bg-blue-500 dark:bg-blue-600">
              Take me home
            </button>
            <button onClick={()=> router.push("/blog")} className="w-1/2 px-5 py-2 text-sm tracking-wide text-white transition-colors duration-200 bg-softMintGreen rounded-lg shrink-0 sm:w-auto hover:bg-green-800 dark:hover:bg-blue-500 dark:bg-blue-600">
              Take me blogs
            </button>

          </div>
        </div>
        <div className="relative w-full mt-8 lg:w-1/2 lg:mt-0" >
          <img
            className=" w-full lg:h-[32rem] h-80 md:h-96 rounded-lg object-contain "
            src="https://res.cloudinary.com/dhebgz7qh/image/upload/v1767452496/y3replc9wmlnvwb7kjvo_hyo3u3.png"
            alt="Nour Maison Logo"
            title="NOUR MAISON"
          />
        </div>
      </div>
    </section>
  );
};

export default NotFound;
