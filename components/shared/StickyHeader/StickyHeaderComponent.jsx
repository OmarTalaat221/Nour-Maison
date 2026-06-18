"use client";

import React, { memo, useState } from "react";
import dynamic from "next/dynamic";
import StickyHeader from "./StickyHeader";
import { usePathname } from "next/navigation";

const Sidebar = dynamic(() => import("../Sidebar/Sidebar"), {
  ssr: false,
  loading: () => null,
});

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
      {open && <Sidebar open={open} setOpen={setOpen} />}
    </>
  );
};

export default memo(StickyHeaderComponent);