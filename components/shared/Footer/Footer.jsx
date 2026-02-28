// components/Footer/Footer.jsx
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

  const mainNavItems = [
    { label: "Home", path: "/" },
    { label: "Booking", path: "/booking" },
    { label: "Afternoon Booking", path: "/afternoon-tea-booking" },
    { label: "Gallery", path: "/gallery" },
    { label: "Our Events", path: "/services" },
    { label: "About Us", path: "/about-us" },
    { label: "Contact Us", path: "/contact-us" },
    { label: "Blogs", path: "/blog" },
    { label: "All Blogs", path: "/all-blogs" },
    { label: "Store & Gift Cards", path: "/store" },
  ];

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
    <div className="relative !overflow-visible mt-12 sm:mt-16 md:mt-20 lg:mt-24">
      <div className="w-full relative py-8 sm:py-10 md:py-12 lg:py-[50px] bg-gradient-to-b from-pestachio via-pestachio to-transparent">
        {/* Logo Section */}
        <div className="w-[95%] lg:w-[90%] mx-auto relative z-10">
          <div className="flex justify-center mb-4 sm:mb-6">
            <div className="w-[120px] h-[120px] xs:w-[140px] xs:h-[140px] sm:w-[180px] sm:h-[180px] md:w-[200px] md:h-[200px] lg:w-[250px] lg:h-[250px]">
              <Image
                src="/images/light-logo.gif"
                className="object-contain w-full h-full"
                alt="Nour Maison Logo"
                title="NOUR MAISON"
                width={250}
                height={250}
                priority
              />
            </div>
          </div>
        </div>

        <div className="relative z-10 w-[95%] lg:w-[90%] mx-auto text-logoGold">
          {/* Contact Info Section - استخدام CSS class فقط */}
          <div className="foot_cont">
            {/* Contact Info */}
            <div className="flex flex-col gap-2 sm:gap-3">
              <strong className="text-center text-3xl xs:text-4xl sm:text-[42px] md:text-[46px] lg:text-[50px] font-bold font-tangerine drop-shadow-[0_1px_2px_#b5b5b5]">
                Contact Info
              </strong>

              <a
                style={{ textShadow: "1px 2px 2px black" }}
                href="mailto:info@nourmaison.co.uk"
                className="flex justify-center items-center text-slate-100 gap-2 text-sm xs:text-base sm:text-lg md:text-xl lg:text-[22px] font-lato font-semibold flex-wrap"
              >
                <FaRegEnvelope className="text-logoGold text-base sm:text-lg md:text-xl" />
                <span className="break-all sm:break-normal">
                  info@nourmaison.co.uk
                </span>
              </a>
            </div>

            {/* Opening hours */}
            <div className="flex flex-col gap-2 sm:gap-3">
              <strong className="text-center text-3xl xs:text-4xl sm:text-[42px] md:text-[46px] lg:text-[50px] font-bold font-tangerine drop-shadow-[0_1px_2px_#b5b5b5]">
                Opening hours
              </strong>

              <div
                style={{ textShadow: "1px 2px 2px black" }}
                className="flex justify-center items-center text-slate-100 gap-1.5 xs:gap-2 sm:gap-3 text-sm xs:text-base sm:text-lg md:text-xl lg:text-[22px] font-lato font-semibold flex-wrap"
              >
                <FaDoorOpen className="text-xl xs:text-2xl sm:text-[26px] md:text-[28px] text-logoGold" />
                <span className="text-lg xs:text-xl sm:text-2xl md:text-[28px] lg:text-[30px]">
                  Daily:
                </span>
                <span>09:00 am – 10:00 pm</span>
              </div>

              <Link
                href="https://www.google.com/maps/dir/?api=1&destination=149+Grafton+Gate,+Milton+Keynes+MK9+1AE"
                target="_blank"
              >
                <div
                  style={{ textShadow: "1px 2px 2px black" }}
                  // onClick={handleMapClick}
                  className="flex justify-center text-center text-slate-100 text-xs xs:text-sm sm:text-base md:text-lg lg:text-[22px] font-lato font-semibold cursor-pointer px-2 sm:px-4 hover:text-logoGold transition-colors"
                >
                  149 Grafton Gate, Milton Keynes, MK91AE
                </div>
              </Link>
            </div>

            {/* Follow Our Activity */}
            <div className="flex flex-col gap-2 sm:gap-3">
              <strong className="text-center text-3xl xs:text-4xl sm:text-[42px] md:text-[46px] lg:text-[50px] font-bold font-tangerine drop-shadow-[0_1px_2px_#b5b5b5]">
                Follow Our Activity
              </strong>

              <strong
                style={{ textShadow: "1px 2px 2px black" }}
                className="flex justify-center items-center text-slate-100 gap-2 text-sm xs:text-base sm:text-lg md:text-xl lg:text-[22px] font-lato font-semibold"
              >
                We are in social networks
              </strong>

              <div className="flex justify-center items-center gap-2 xs:gap-2.5 sm:gap-3 md:gap-4 flex-wrap">
                <a
                  href="https://www.facebook.com/nourmaisonuk"
                  title="facebook"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social_button face"
                >
                  <FaFacebookF />
                  <span className="sr-only">Facebook</span>
                </a>

                <a
                  href="https://www.instagram.com/nourmaisonuk/"
                  title="instagram"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social_button insta"
                >
                  <FaInstagram />
                  <span className="sr-only">Instagram</span>
                </a>

                <a
                  href="https://www.tiktok.com/@nourmaisonuk?lang=en"
                  title="tiktok"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social_button tiktok"
                >
                  <FaTiktok />
                  <span className="sr-only">Tiktok</span>
                </a>

                <a
                  href="https://wa.me/441908772177"
                  title="whatsapp"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social_button whatsapp"
                >
                  <FaWhatsapp />
                  <span className="sr-only">Whatsapp</span>
                </a>
              </div>

              {/* Payment Cards */}
              <div className="flex flex-col items-center gap-1.5 sm:gap-2 mt-3 sm:mt-4">
                <p
                  style={{ textShadow: "1px 2px 2px black" }}
                  className="text-slate-100 text-sm sm:text-base md:text-lg font-lato font-semibold"
                >
                  We Accept
                </p>
                <div className="shimmer-card flex justify-center items-center gap-2 sm:gap-3 bg-white/10 backdrop-blur-sm rounded-lg px-3 sm:px-4 py-1.5 sm:py-2">
                  <img
                    src="https://res.cloudinary.com/dhebgz7qh/image/upload/v1772101653/Visa_Brandmark_Blue_RGB_2021_jsipcx_pklgmh.png"
                    alt="Visa"
                    className="w-8 xs:w-9 sm:w-10 md:w-12 h-5 xs:h-6 sm:h-7 md:h-8 object-contain"
                  />
                  <img
                    src="https://res.cloudinary.com/dhebgz7qh/image/upload/v1772101682/ma_symbol_opt_73_2x_xadjas_zexy1k.png"
                    alt="Mastercard"
                    className="w-8 xs:w-9 sm:w-10 md:w-12 h-5 xs:h-6 sm:h-7 md:h-8 object-contain"
                  />
                  <img
                    src="https://res.cloudinary.com/dhebgz7qh/image/upload/v1772101644/AXP_BlueBoxLogo_Alternate_SMALLscale_RGB_DIGITAL_80x80_rrtz7i_lvizo3.png"
                    alt="American Express"
                    className="w-8 xs:w-9 sm:w-10 md:w-12 h-5 xs:h-6 sm:h-7 md:h-8 object-contain"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="foot_terms font-tangerine">
            {mainNavItems.map((item) => (
              <Link
                href={item.path}
                key={item.path}
                className={`foot_term_ele ${
                  pathname === item.path ? "active" : ""
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Menu Links */}
          <div className="foot_terms font-tangerine">
            {menuNavItems.map((item) => (
              <Link
                href={item.path}
                key={item.path}
                className={`foot_term_ele relative ${
                  pathname === item.path ? "active" : ""
                }`}
              >
                {item.label}
                {item.new && (
                  <span className="absolute -top-1 -right-1 xs:-top-1.5 xs:-right-0.5 sm:-top-2 sm:-right-1 bg-red-500 text-white text-[6px] xs:text-[7px] sm:text-[8px] px-1 py-0.5 rounded-full font-sans font-bold animate-pulse">
                    NEW
                  </span>
                )}
              </Link>
            ))}
          </div>

          {/* Privacy & Terms Section */}
          <div className="mt-3 sm:mt-4">
            <div className="pb-3 sm:pb-4 flex justify-center gap-1 xs:gap-1.5 sm:gap-2 flex-wrap px-2 sm:px-4">
              <Link
                href="/privacy-policy-2"
                className="text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl text-goldenOrange hover:text-logoGold hover:no-underline transition-colors"
              >
                Privacy Policy
              </Link>
              <span className="text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl text-white">
                |
              </span>
              <Link
                href="/terms-and-conditions"
                className="text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl text-goldenOrange hover:text-logoGold hover:no-underline transition-colors"
              >
                Terms & Conditions
              </Link>
              <span className="text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl text-white">
                |
              </span>
              <Link
                href="/refund-policy"
                className="text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl text-goldenOrange hover:text-logoGold hover:no-underline transition-colors"
              >
                Refund Policy
              </Link>
            </div>

            <div className="flex flex-col gap-1">
              <p className="text-[10px] xs:text-[11px] sm:text-xs md:text-sm text-center text-softMintGreen px-2">
                This website is owned and operated by{" "}
                <strong className="text-logoGold">NOUR MAISON LTD</strong>
              </p>

              <p className="text-[9px] xs:text-[10px] sm:text-[11px] md:text-xs text-center px-2">
                Developed & Designed By{" "}
                <Link
                  href="https://www.facebook.com/campcoding/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-[#091639] hover:text-logoGold transition-colors"
                >
                  Camp Coding
                </Link>
              </p>

              <p className="text-[9px] xs:text-[10px] sm:text-[11px] md:text-xs text-center px-2">
                © {new Date().getFullYear()} NOUR MAISON LTD. All Rights
                Reserved.
              </p>
            </div>
          </div>
        </div>

        <img
          src="/images/footer-branch.png"
          className="absolute opacity-30 right-0 bottom-[-50px] hidden lg:block w-[180px] xl:w-[220px]"
          alt="Decorative branch"
          loading="lazy"
        />
      </div>
    </div>
  );
};

export default Footer;
