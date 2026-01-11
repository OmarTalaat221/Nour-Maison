import React from "react";
import  cx  from 'classnames';

const BottomBg = ({className}) => {
  return (
    <div
      className={cx(' absolute  z-20 bottom-[-1px] w-full h-[15px] ', className)}
      style={{
        backgroundRepeat: "repeat",
        backgroundImage:
          'url("https://res.cloudinary.com/dhebgz7qh/image/upload/v1767452496/wn20xgn68uheamin5wqr_chy7cr.png")',
          
      }}
    ></div>
  );
};

export default BottomBg;
