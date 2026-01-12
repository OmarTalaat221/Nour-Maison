import React from "react";

const TopBg = () => {
  return (
    <div
      className=' absolute rotate-180  z-20 top-[-1px] w-full h-[15px] '
      style={{
      // drop shadow
        backgroundRepeat: "repeat",
        backgroundImage:
        // for white
          // 'url("https://res.cloudinary.com/dhebgz7qh/image/upload/v1767452496/wn20xgn68uheamin5wqr_chy7cr.png")',
          'url("/images/2.png")',
          
      }}
    ></div>
  );
};

export default TopBg;
