import React from "react";
import CristmastMenuClient from "./ChristmasMenuClient";
import { getPageKeywords } from "../../../lib/seo/keywords";
export const metadata = {
  title:
    "Christmas Menu | Nour Maison Café – Festive Four-Course Meal in London",
  description:
    "Explore Nour Maison Café’s Christmas four-course menu: Harira velouté, starters with Arabic spice and French finesse, rich mains, and indulgent desserts. A festive experience crafted with soul.",
  keywords: getPageKeywords("christmasMenu"),
};
const page = () => {
  return <CristmastMenuClient />;
};

export default page;
