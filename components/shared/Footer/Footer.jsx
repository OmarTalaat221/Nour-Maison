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

  // ✅ الصفحات الرئيسية
  const mainNavItems = [
    { label: "Home", path: "/" },
    { label: "Booking", path: "/booking" },
    { label: "Gallery", path: "/gallery" },
    { label: "Our Events", path: "/services" },
    { label: "About Us", path: "/about-us" },
    { label: "Contact Us", path: "/contact-us" },
    { label: "Blogs", path: "/blog" },
    { label: "All Blogs", path: "/all-blogs" },
    // { label: "Store & Gift Cards", path: "/store" },
  ];

  // ✅ صفحات المنيوز
  const menuNavItems = [
    { label: "Menu Classic", path: "/menu" },
    { label: "Menu Gallery", path: "/menu-gallery" },
    { label: "Kids Menu", path: "/kids-menu" },
    { label: "Roast Menu", path: "/roast-menu" },
    { label: "Afternoon Tea", path: "/afternoon-tea-menu" },
    {
      label: "Ramadan Iftar",
      path: "/ramadan-iftar-menu-milton-keynes",
      new: true,
    },
  ];

  return (
    <div className="relative !overflow-visible mt-24">
      <div className="w-full relative py-[50px] bg-gradient-to-b from-pestachio via-pestachio to-transparent">
        {/* ✅ Logo Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 w-[95%] lg:w-[90%] mx-auto relative z-10 justify-start">
          <div className="flex justify-center mx-auto w-[180px] sm:w-[250px] mb-6 text-center h-[180px] sm:h-[250px]">
            <Image
              src="https://res.cloudinary.com/dhebgz7qh/image/upload/v1767452496/y3replc9wmlnvwb7kjvo_hyo3u3.png"
              className="object-contain mx-auto !w-full !h-full"
              alt="Nour Maison Logo"
              title="NOUR MAISON"
              width={120}
              height={120}
              priority
            />
          </div>
          <div></div>
          <div></div>
        </div>

        <div className="relative z-10 w-[95%] lg:w-[90%] mx-auto text-logoGold">
          {/* ✅ Contact Info Section */}
          <div className="foot_cont grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-6">
            {/* Contact Info */}
            <div className="flex flex-col gap-[10px]">
              <strong className="text-center text-[40px] sm:text-[50px] font-bold font-tangerine drop-shadow-[0_1px_2px_#b5b5b5]">
                Contact Info
              </strong>

              <a
                style={{
                  textShadow: "1px 2px 2px black",
                }}
                href="mailto:info@nourmaison.co.uk"
                className="flex justify-center drop-shadow-2xl items-center text-slate-100 gap-[10px] text-[18px] sm:text-[22px] font-lato font-semibold flex-wrap"
              >
                <FaRegEnvelope className="text-logoGold" />
                <span className="break-all sm:break-normal">
                  info@nourmaison.co.uk
                </span>
              </a>
            </div>

            {/* Opening hours */}
            <div className="flex flex-col gap-[10px]">
              <strong className="text-center text-[40px] sm:text-[50px] font-bold font-tangerine drop-shadow-[0_1px_2px_#b5b5b5]">
                Opening hours
              </strong>

              <div
                style={{
                  textShadow: "1px 2px 2px black",
                }}
                className="flex justify-center drop-shadow-2xl items-center text-slate-100 gap-[10px] text-[18px] sm:text-[22px] font-lato font-semibold flex-wrap"
              >
                <div className="text-[24px] sm:text-[28px] text-logoGold">
                  <FaDoorOpen />
                </div>
                <span className="text-[24px] sm:text-[30px] m-0 p-0">
                  Daily:
                </span>
                09:00 am – 10:00 pm
              </div>
              <div
                style={{
                  textShadow: "1px 2px 2px black",
                }}
                onClick={() => handleMapClick()}
                className="flex justify-center drop-shadow-2xl text-center items-start text-slate-100 gap-[10px] text-[16px] sm:text-[22px] font-lato font-semibold cursor-pointer px-4"
              >
                149 Grafton Gate, Milton Keynes, MK91AE
              </div>
            </div>

            {/* Follow Our Activity */}
            <div className="flex flex-col gap-[10px] md:col-span-2 lg:col-span-1">
              <strong className="text-center text-[40px] sm:text-[50px] font-bold font-tangerine drop-shadow-[0_1px_2px_#b5b5b5]">
                Follow Our Activity
              </strong>

              <strong
                style={{
                  textShadow: "1px 2px 2px black",
                }}
                className="flex justify-center drop-shadow-2xl items-center text-slate-100 gap-[10px] text-[18px] sm:text-[22px] font-lato font-semibold"
              >
                We are in social networks
              </strong>

              <div className="flex justify-center items-center gap-[15px] relative flex-wrap">
                <a
                  href="https://www.facebook.com/nourmaisonuk"
                  title="facebook"
                  target="_blank"
                  className="social_button face flex items-center justify-center !bg-logoGold !text-white"
                >
                  <FaFacebookF />
                  <span className="hidden">Facebook</span>
                </a>

                <a
                  href="https://www.instagram.com/nourmaisonuk/"
                  title="instagram"
                  target="_blank"
                  className="social_button insta !bg-logoGold !text-white flex items-center justify-center"
                >
                  <FaInstagram />
                  <span className="hidden">Instagram</span>
                </a>
                <a
                  href="https://www.tiktok.com/@nourmaisonuk?lang=en"
                  title="tiktok"
                  target="_blank"
                  className="social_button tiktok !bg-logoGold !text-white flex items-center justify-center"
                >
                  <FaTiktok />
                  <span className="hidden">Tiktok</span>
                </a>
                <a
                  href="https://wa.me/441908772177"
                  title="whatsapp"
                  target="_blank"
                  className="social_button whatsapp !bg-logoGold !text-white flex items-center justify-center"
                >
                  <FaWhatsapp />
                  <span className="hidden">Whatsapp</span>
                </a>
              </div>

              {/* Payment Cards */}
              <div className="flex flex-col items-center gap-2 mt-4">
                <p
                  style={{ textShadow: "1px 2px 2px black" }}
                  className="text-slate-100 text-[16px] sm:text-[18px] font-lato font-semibold"
                >
                  We Accept
                </p>
                <div className="shimmer-card flex justify-center items-center gap-3 bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
                  <img
                    src="https://res.cloudinary.com/dkc5klynm/image/upload/v1771669946/Visa_Brandmark_Blue_RGB_2021_jsipcx.png"
                    alt="Visa"
                    className="w-[50px] h-[32px] object-contain"
                  />
                  <img
                    src="https://res.cloudinary.com/dkc5klynm/image/upload/v1771669935/ma_symbol_opt_73_2x_xadjas.png"
                    alt="Mastercard"
                    className="w-[50px] h-[32px] object-contain"
                  />
                  <img
                    src="https://res.cloudinary.com/dkc5klynm/image/upload/v1771670021/AXP_BlueBoxLogo_Alternate_SMALLscale_RGB_DIGITAL_80x80_rrtz7i.png"
                    alt="American Express"
                    className="w-[50px] h-[32px] object-contain"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* ✅ قسم الصفحات الرئيسية - Quick Links */}
          <div className="foot_terms font-tangerine">
            {mainNavItems.map((item) => (
              <Link
                href={item.path}
                key={item.path}
                className={`foot_term_ele fonst !text-logoGold hover:!text-white ${
                  pathname === item.path ? "active !text-white" : ""
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* ✅ قسم المنيوز - Our Menus */}
          <div className="foot_terms font-tangerine">
            {menuNavItems.map((item) => (
              <Link
                href={item.path}
                key={item.path}
                className={`foot_term_ele fonst !text-logoGold hover:!text-white relative ${
                  pathname === item.path ? "active !text-white" : ""
                }`}
              >
                {item.label}
                {item.new && (
                  <span className="absolute -top-2 -right-1 bg-red-500 text-white text-[8px] px-1 py-0.5 rounded-full font-sans font-bold">
                    NEW
                  </span>
                )}
              </Link>
            ))}
          </div>

          {/* ✅ Privacy & Terms Section */}
          <div className="foot_privacy mt-4">
            <div className="pb-[15px] text-[12px] flex justify-center font-[400] gap-2 flex-wrap px-4">
              <Link
                href={"/privacy-policy-2"}
                className="cursor-pointer text-xl sm:text-2xl text-goldenOrange hover:text-logoGold hover:no-underline"
              >
                Privacy Policy
              </Link>{" "}
              <span className="text-xl sm:text-2xl">|</span>{" "}
              <Link
                href={"/terms-and-conditions"}
                className="cursor-pointer text-xl sm:text-2xl text-goldenOrange hover:text-logoGold hover:no-underline"
              >
                Terms & Conditions
              </Link>{" "}
              <span className="text-xl sm:text-2xl">|</span>{" "}
              <Link
                href={"/refund-policy"}
                className="cursor-pointer text-xl sm:text-2xl text-goldenOrange hover:text-logoGold hover:no-underline"
              >
                Refund Policy
              </Link>
            </div>

            <div className="flex flex-col gap-[4px]">
              <div className="text-[11px] sm:text-[13px] flex flex-wrap justify-center font-[500] text-softMintGreen mb-1 px-4 text-center">
                This website is owned and operated by{" "}
                <strong className="ml-1 text-logoGold">NOUR MAISON LTD</strong>
              </div>

              <div className="text-[11px] sm:text-[12px] flex flex-wrap justify-center font-[400] px-4 text-center">
                Developed & Designed By{" "}
                <Link
                  href={"https://www.facebook.com/campcoding/"}
                  target="_blank"
                  className="font-bold ml-[4px] text-[#091639] hover:scale-105 hover:text-logoGold"
                >
                  Camp Coding
                </Link>
              </div>

              <div className="text-[11px] sm:text-[12px] flex flex-wrap justify-center font-[400] text-center px-4">
                © {new Date().getFullYear()} NOUR MAISON LTD. All Rights
                Reserved.
              </div>
            </div>
          </div>
        </div>

        <img
          src="/images/footer-branch.png"
          className="absolute opacity-30 right-0 !bottom-[-50px] hidden sm:block"
          alt="Decorative branch illustration"
          loading="lazy"
        />
      </div>
    </div>
  );
};

export default Footer;
