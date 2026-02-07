
"use client"

import React from "react";
import "./style.css";
import { MdEmail } from "react-icons/md";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
const ContactContent = () => {


  const handleMapClick = () => {
    window.open(
      "https://www.google.com/maps/dir/?api=1&destination=149+Grafton+Gate,+Milton+Keynes+MK9+1AE",
      "_blank"
    );
}
  return (
    <section id="contact" className="py-10 ">
      <div className="mb-[40px] text-goldenOrange text-4xl md:text-6xl font-bold font-tangerine text-center">
        Need Help? Contact Us Today <span className="font-oswald">!</span>
      </div>
      <div
        id="map"
        className="relative h-[300px]  overflow-hidden bg-cover bg-[50%] bg-no-repeat"
      >
        <button
          type="button"
          className="mb-6 sm  w-full absolute top-[10px] z-40 right-7 rounded bg-red-600 text-white px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal   lg:mb-0"
        >
          Send
        </button>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2454.255263412477!2d-0.7694798765361991!3d52.038663671939005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4877018f7b0a551d%3A0x570f7d01f34256a4!2sNour%20Maison%20Brasserie!5e0!3m2!1sen!2seg!4v1737816382863!5m2!1sen!2seg"
          style={{
            width: "100%",
            height: "300px",
          }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>

      <div className=" md:w-[70%] m-auto">
        <div className="block md:rounded-lg bg-[hsla(0,0%,100%,0.8)] px-6 py-12 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]  md:py-16 md:px-12   md:-mt-[100px] backdrop-blur-[30px] border border-gray-300">
          <div className="flex flex-wrap">
            <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:px-3 lg:mb-0 lg:w-5/12 lg:px-6">
              <form>
                <div className="relative mb-6" data-te-input-wrapper-init="">
                  <input
                    type="text"
                    className="peer block min-h-[auto] w-full rounded border-2 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-softMintGreen data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none "
                    id="exampleInput90"
                  />
                  <label
                    className="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.8rem] peer-focus:scale-[0.8] peer-focus:text-softMintGreen peer-data-[te-input-state-active]:-translate-y-[0.8rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none "
                    htmlFor="exampleInput90"
                  >
                    Name
                  </label>
                </div>
                <div className="relative mb-6" data-te-input-wrapper-init="">
                  <input
                    type="email"
                    className="peer block min-h-[auto] w-full rounded border-2 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-softMintGreen data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none "
                    id="exampleInput91"
                  />
                  <label
                    className="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.8rem] peer-focus:scale-[0.8] peer-focus:text-softMintGreen peer-data-[te-input-state-active]:-translate-y-[0.8rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none "
                    htmlFor="exampleInput91"
                  >
                    Email address
                  </label>
                </div>
                <div className="relative mb-6" data-te-input-wrapper-init="">
                  <textarea
                    className="peer block min-h-[auto] w-full rounded border-2 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none "
                    id="exampleFormControlTextarea1"
                    rows={3}
                    defaultValue={""}
                  />
                  <label
                    htmlFor="exampleFormControlTextarea1"
                    className="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.8rem] peer-focus:scale-[0.8] peer-focus:text-softMintGreen peer-data-[te-input-state-active]:-translate-y-[0.8rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none "
                  >
                    Message
                  </label>
                </div>

                <button
                  type="button"
                  className="mb-6  w-full rounded bg-pestachio2 text-white px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal   lg:mb-0"
                >
                  Send
                </button>
              </form>
            </div>
            <div className="w-full shrink-0 grow-0 basis-auto lg:w-7/12">
              <div className="flex flex-wrap">
                <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:w-full lg:px-6 xl:w-6/12">
                  <div className="flex items-start">
                    <div className="shrink-0">
                      <div className="flex justify-center items-center rounded-md bg-pestachio2 p-4 text-white w-[60px] h-[60px] ">
                        <MdEmail className="text-[24px]" />
                      </div>
                    </div>
                    <div className="ml-3 grow">
                      <p className="mb-2 font-bold ">For Inquiries</p>
                      <a href="mailto:info@nourmaison.co.uk" className="text-sm text-neutral-500">
                        info@nourmaison.co.uk
                      </a>
                    </div>
                  </div>
                </div>
                <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:w-full lg:px-6 xl:w-6/12">
                  <div className="flex items-start">
                    <div className="srink-0">
                      <div className="flex justify-center items-center rounded-md bg-pestachio2 p-4 text-white w-[60px] h-[60px] ">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={2}
                          stroke="currentColor"
                          className="w-7 h-7"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5zm6-10.125a1.875 1.875 0 11-3.75 0 1.875 1.875 0 013.75 0zm1.294 6.336a6.721 6.721 0 01-3.17.789 6.721 6.721 0 01-3.168-.789 3.376 3.376 0 016.338 0z"
                          />
                        </svg>
                      </div>
                    </div>
                    <div className="ml-3 grow">
                      <p className="mb-2 font-bold ">Address</p>
                      <p onClick={()=> handleMapClick()} className="text-sm text-neutral-500 hover:text-logoGold cursor-pointer transition">
                        149 Grafton Gate, Milton Keynes, MK91AE
                      </p>
                    </div>
                  </div>
                </div>

                <div className="w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:w-full lg:px-6 xl:mb-12 xl:w-6/12">
                  <div className="align-start flex mb-[40px]">
                    <div className="shrink-0">
                      <div className="flex justify-center items-center rounded-md bg-pestachio2 p-4 text-white w-[60px] h-[60px] ">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="w-6 h-6"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
                          />
                        </svg>
                      </div>
                    </div>
                    <div className="ml-3 grow">
                      <p className="mb-2 font-bold ">Mobile</p>
                      <a href="tel:+441908772177" className="text-neutral-500 "> +441908772177</a>
                    </div>
                  </div>
                </div>

                <div className="w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:w-full lg:px-6 xl:mb-12 xl:w-6/12">
                  <div className="flex justify-start items-center gap-[15px] relative">
                    <a
                      href="https://www.facebook.com/nourmaisonuk"
                      title="facebook"
                      target="_blank"
                      className="social_button_contact face block"
                    >
                      <FaFacebookF />
                      <span className="hidden">
                  Facebook
                  </span>
                    </a>

                    <a
                      href="https://www.instagram.com/nourmaisonuk/"
                      id=""
                      title="instagram"
                      target="_blank"
                      className="social_button_contact insta block "
                    >
                      <FaInstagram />
                      <span className="hidden">
                  Instagram
                  </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactContent;
