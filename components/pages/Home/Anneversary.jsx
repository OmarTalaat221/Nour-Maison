"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { CgClose } from "react-icons/cg";
import BranchesImage from "./../../../utils/BranchesImage/BranchesImage";
import Link from "next/link";

const Annerversary = () => {
  const [open, setOpen] = useState(true);
  const videoRef = useRef(null);

  // Prefer renaming the file to avoid spaces:
  // /public/images/brown-gold-anniversary.mp4
  // If you must keep spaces, use:
  // const src = encodeURI("/images/Brown and Gold 3D Anniversary Instagram Reel.mp4");

  return (
    open && (
      <div
        onClick={() => {
          setOpen(false);
          document.body.style.overflow = "auto";
        }}
        className="motion_gallery flex items-center justify-center !backdrop-blur-sm !bg-gradient-to-t !from-transparent !to-black/10 !px-3 md:px-0"
      >
        {/* Close Button */}
        {/* <div className="!absolute !top-10 !right-10">
          <div
            className="relative z-[500] close text-white text-3xl cursor-pointer hover:scale-110"
            onClick={() => {
              setOpen(false);
              document.body.style.overflow = "auto";
            }}
          >
            <CgClose />
          </div>
          <BranchesImage
            variant="top-right"
            className="!translate-x-[-300px] !left-0"
          />
        </div> */}
        <div className="flex items-center justify-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full">
          <img
            ref={videoRef}
            whileHover={{ scale: 1.05 }}
            className="rounded-lg cursor-pointer w-96 shadow-2xl drop-shadow-xl m-auto"
            src={"/images/nour (1).gif"}
            playsInline
            // controls
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{
              opacity: { duration: 0.3 },
              scale: { type: "spring", stiffness: 300, damping: 20 },
            }}
          />
        </div>
      </div>
    )
  );
};

export default Annerversary;
