import React from "react";
import MenuClient from "./_menuClient";
export const metadata = {
  title: "Menu - Nour Maison",
  description:
    "Explore our dessert menu at Nour Maison – halal French and Middle Eastern sweets, pastries, and treats in Milton Keynes.",
};

const page = () => {
  return (
    <main>
      <MenuClient />
    </main>
  );
};

export default page;
