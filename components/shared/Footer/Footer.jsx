"use client";

import "./style.css";
import { FaLocationDot, FaRegEnvelope } from "react-icons/fa6";

import {
  FaInstagram,
  FaFacebookF,
  FaDoorOpen,
  FaTiktok,
  FaWhatsapp,
} from "react-icons/fa";
import StyledBackground from "../../../utils/Styled Background/StyledBackground";
import { useRouter, usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  const router = useRouter();
  const pathname = usePathname();

  const navigate = (path) => {
    router.push(path);
  };

  const handleMapClick = () => {
    window.open(
      "https://www.google.com/maps/dir/?api=1&destination=149+Grafton+Gate,+Milton+Keynes+MK9+1AE",
      "_blank"
    );
  };

  const navItems = [
    { label: "Home", path: "/" },
    { label: "Menu Classic", path: "/menu" },
    { label: "Menu Gallery", path: "/menu-gallery" },
    { label: "Booking", path: "/booking" },
    { label: "GALLERY", path: "/gallery" },
    { label: "About US", path: "/about-us" },
    { label: "Contact US", path: "/contact-us" },
    { label: "Store & Gift Cards", path: "/store" },
    { label: "Blogs", path: "/blog" },
  ];

  return (
    <div className="relative !overflow-visible mt-24">

      <div className="w-full  relative py-[50px]  bg-gradient-to-b from-pestachio via-pestachio to-transparent ">
        <div className=" grid grid-cols-3  w-[95%] lg:w-[90%] mx-auto relative z-10 justify-start ">
          <div className="flex justify-center mx-auto w-[250px] mb-6 text-center h-[250px]">
            <Image
              src="https://res.cloudinary.com/dhebgz7qh/image/upload/v1767452496/y3replc9wmlnvwb7kjvo_hyo3u3.png"
              className=" object-contain mx-auto !w-full !h-full"
              alt="Nour Maison Logo"
              title="NOUR MAISON"
              width={120}
              height={120}
              priority // 👈 أهم حاجة هنا
            />
          </div>
          <div></div>
          <div></div>
        </div>
        <div className=" relative z-10 w-[95%] lg:w-[90%] mx-auto text-logoGold">
          <div className="foot_cont">
            <div className="flex flex-col gap-[10px]">
              <strong className=" text-center  text-[50px] font-bold font-tangerine drop-shadow-[0_1px_2px_#b5b5b5] ">
                Contact Info
              </strong>

              <a
                style={{
                  textShadow: "1px 2px 2px black",
                }}
                href="mailto:info@nourmaison.co.uk"
                className="flex justify-center drop-shadow-2xl items-center  text-slate-100 gap-[10px]  text-[22px] font-lato font-semibold"
              >
                <FaRegEnvelope className="text-logoGold" />
                info@nourmaison.co.uk
              </a>

              {/* <div
               style={{
                textShadow:"1px 1px 5px gray"
              }}
                onClick={() => handleMapClick()}
                className="flex hover:text-logoGold transition text-center cursor-pointer  justify-center items-start text-white gap-[10px]  text-[20px] font-lato font-semibold"
              >
                <div className=" text-[18px] text-logoGold ">
                  <FaLocationDot />
                </div>
                149 Grafton Gate, Milton Keynes, MK91AE
              </div> */}
            </div>
            <div className="flex flex-col gap-[10px]">
              <strong className=" text-center  text-[50px] font-bold font-tangerine drop-shadow-[0_1px_2px_#b5b5b5] ">
                Opening hours
              </strong>

              <div
                style={{
                  textShadow: "1px 2px 2px black",
                }}
                className="flex justify-center drop-shadow-2xl items-center  text-slate-100 gap-[10px]  text-[22px] font-lato font-semibold"
              >
                <div className=" text-[28px] text-logoGold">
                  <FaDoorOpen />
                </div>
                <span className=" text-[30px] m-0 p-0 ">Daily:</span>
                09:00 am – 10:00 pm
              </div>
              <div
                style={{
                  textShadow: "1px 2px 2px black",
                }}
                onClick={() => handleMapClick()}
                className="flex justify-center drop-shadow-2xl
                 text-center items-start  text-slate-100 gap-[10px]  text-[22px] font-lato font-semibold"
              >
                149 Grafton Gate, Milton Keynes, MK91AE
              </div>
            </div>
            <div className="flex flex-col gap-[10px]">
              <strong className=" text-center  text-[50px] font-bold font-tangerine drop-shadow-[0_1px_2px_#b5b5b5] ">
                Follow Our Activity
              </strong>

              <strong
                style={{
                  textShadow: "1px 2px 2px black",
                }}
                className="flex justify-center drop-shadow-2xl items-center  text-slate-100 gap-[10px]  text-[22px] font-lato font-semibold"
              >
                We are in social networks
              </strong>
              <div className="flex justify-center items-center gap-[15px] relative">
                <a
                  href="https://www.facebook.com/nourmaisonuk"
                  title="facebook"
                  target="_blank"
                  className="social_button face flex items-center justify-center  !bg-logoGold !text-white  "
                >
                  <FaFacebookF />
                  <span className="hidden">Facebook</span>
                </a>

                <a
                  href="https://www.instagram.com/nourmaisonuk/"
                  id=""
                  title="instagram"
                  target="_blank"
                  className="social_button insta  !bg-logoGold !text-white flex items-center justify-center"
                >
                  <FaInstagram />
                  <span className="hidden">Instagram</span>
                </a>
                <a
                  href="https://www.tiktok.com/@nourmaisonuk?lang=en"
                  id=""
                  title="tiktok"
                  target="_blank"
                  className="social_button tiktok  !bg-logoGold !text-white flex items-center justify-center"
                >
                  <FaTiktok />
                  <span className="hidden">Tiktok</span>
                </a>
                <a
                  href="https://www.tiktok.com/@nourmaisonuk?lang=en"
                  id=""
                  title="whatsapp"
                  target="_blank"
                  className="social_button tiktok  !bg-logoGold !text-white flex items-center justify-center"
                >
                  <FaWhatsapp />
                  <span className="hidden">Whatsapp </span>
                </a>
              </div>
            </div>
          </div>
          <div className="foot_terms font-tangerine ">
            {navItems.map((item) => (
              <Link
                href={item.path}
                key={item.path}
                className={`foot_term_ele fonst !text-logoGold  hover:!text-white ${pathname === item.path ? "active !text-white" : ""
                  }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="foot_privacy " >
            <div className="pb-[15px]  text-[12px] flex justify-center font-[400] gap-2">
              <Link
                href={"/privacy-policy-2"}
                className="cursor-pointer text-2xl text-goldenOrange hover:text-logoGold hover:no-underline "
              >
                Privacy Policy
              </Link>{" "}
              <span>|</span>{" "}
              <Link
              href={"/cookie-policy-2"}
                className="cursor-pointer text-2xl text-goldenOrange hover:text-logoGold hover:no-underline"
                onClick={() => navigate("/terms-conditions")}
              >
                Terms & Conditions
              </Link>
            </div>
            <div className="flex flex-col gap-[2px]">
              <div className=" text-[12px] flex justify-center font-[400]">
                Developed & Designed By{" "}
                <Link href={"https://www.facebook.com/campcoding/"} target="_blank" className="font-bold ml-[4px] text-[#091639] hover:scale-105 hover:text-logoGold"> Camp Coding</Link>
              </div>
              <div className=" text-[12px] flex justify-center font-[400]">
                All Rights Reserved © Copyrights By Nour Maison Cafe
              </div>
            </div>
          </div>
        </div>
        <img
          src="/images/footer-branch.png"
          className="   absolute opacity-30 right-0 !bottom-[-50px]  "
          alt="Decorative branch illustration"
          loading="lazy"

        />
      </div>


    </div>
  );
};

export default Footer;
