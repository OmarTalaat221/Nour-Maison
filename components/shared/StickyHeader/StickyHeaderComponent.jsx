"use client";
import React, { useState } from "react";
import StickyHeader from "./StickyHeader";
import Sidebar from "../Sidebar/Sidebar";

const StickyHeaderComponent = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <StickyHeader open={open} setOpen={setOpen} />
      <Sidebar open={open} setOpen={setOpen} />
    </>
  );
};

export default StickyHeaderComponent;
