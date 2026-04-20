"use client";
import React, { useState } from "react";
import StickyHeader from "./StickyHeader";
import Sidebar from "../Sidebar/Sidebar";
import { usePathname } from "next/navigation";

const StickyHeaderComponent = () => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const hiddenPages = [];

  if (hiddenPages.includes(pathname)) {
    return null;
  }

  return (
    <>
      <StickyHeader open={open} setOpen={setOpen} />
      <Sidebar open={open} setOpen={setOpen} />
    </>
  );
};

export default StickyHeaderComponent;
