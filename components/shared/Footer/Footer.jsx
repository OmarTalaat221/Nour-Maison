"use client";

import "./style.css";
import { FaLocationDot, FaRegEnvelope } from "react-icons/fa6";

import { FaInstagram, FaFacebookF, FaDoorOpen, FaTiktok, FaWhatsapp } from "react-icons/fa";
import StyledBackground from "../../../utils/Styled Background/StyledBackground";
import { useRouter, usePathname } from "next/navigation";
import Image from "next/image";

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
    <StyledBackground wave={true}>
      <div className="w-full py-[50px] bg-pestachio">
        <div className="flex justify-center w-full">
          <div className="flex justify-center w-[250px] mb-6 text-center h-[250px]">
            <Image
              src="https://res.cloudinary.com/dhebgz7qh/image/upload/v1767452496/y3replc9wmlnvwb7kjvo_hyo3u3.png"
              className=" object-contain !w-full !h-full"
              alt="Nour Maison Logo"
              title="NOUR MAISON"
              width={120}
              height={120}
              priority // 👈 أهم حاجة هنا
            />
          </div>
        </div>
        <div className=" w-[95%] lg:w-[90%] mx-auto text-logoGold">
          <div className="foot_cont">
            <div className="flex flex-col gap-[10px]">
              <strong className=" text-center  text-[50px] font-bold font-tangerine drop-shadow-[0_1px_2px_#b5b5b5] ">
                Contact Info
              </strong>

              <a
                href="mailto:info@nourmaison.co.uk"
                className="flex no-underline transition hover:!text-logoGold hover:no-underline cursor-pointer justify-center items-center text-black gap-[10px]  text-[20px] font-lato font-semibold"
              >
                <FaRegEnvelope className="text-logoGold"/>
                info@nourmaison.co.uk
              </a>

              <div
                onClick={() => handleMapClick()}
                className="flex hover:text-logoGold transition cursor-pointer  justify-center items-center text-black gap-[10px]  text-[20px] font-lato font-semibold"
              >
                <div className=" text-[18px] text-logoGold">
                  <FaLocationDot />
                </div>
                149 Grafton Gate, Milton Keynes, MK91AE
              </div>
            </div>
            <div className="flex flex-col gap-[10px]">
              <strong className=" text-center  text-[50px] font-bold font-tangerine drop-shadow-[0_1px_2px_#b5b5b5] ">
                Opening hours
              </strong>

              <div className="flex justify-center items-center text-black gap-[10px]  text-[20px] font-lato font-semibold">
                <div className=" text-[18px] text-logoGold">
                  <FaDoorOpen />
                </div>
                <span className=" text-[20px] m-0 p-0">Daily:</span>
                09:00 am – 10:00 pm
              </div>
            </div>
            <div className="flex flex-col gap-[10px]">
              <strong className=" text-center  text-[50px] font-bold font-tangerine drop-shadow-[0_1px_2px_#b5b5b5] ">
                Follow Our Activity
              </strong>

              <strong className=" flex justify-center text-[20px] font-lato font-semibold text-black">
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
          <div className="foot_terms font-tangerine">
            {navItems.map((item) => (
              <div
                key={item.path}
                className={`foot_term_ele ${
                  pathname === item.path ? "active" : ""
                }`}
                onClick={() => navigate(item.path)}
              >
                {item.label}
              </div>
            ))}
          </div>

          <div className="foot_privacy">
            <div className="pb-[15px]  text-[12px] flex justify-center font-[400] gap-2">
              <span
                className="cursor-pointer"
                onClick={() => navigate("/privacy-policy-2")}
              >
                Privacy Policy
              </span>{" "}
              <span>|</span>{" "}
              <span
                className="cursor-pointer"
                onClick={() => navigate("/terms-conditions")}
              >
                Terms & Conditions
              </span>
            </div>
            <div className="flex flex-col gap-[2px]">
              <div className=" text-[12px] flex justify-center font-[400]">
                Developed & Designed By{" "}
                <span className="font-bold ml-[4px]"> Camp Coding</span>
              </div>
              <div className=" text-[12px] flex justify-center font-[400]">
                All Rights Reserved © Copyrights By Nour Maison Cafe
              </div>
            </div>
          </div>
        </div>
      </div>
    </StyledBackground>
  );
};

export default Footer;
