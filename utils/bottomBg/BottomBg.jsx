import React from "react";
import  cx  from 'classnames';

const BottomBg = ({className}) => {
  return (
    <div
      className={cx(' absolute  z-20 bottom-[-1px] w-full h-[15px] ', className)}
      style={{
        backgroundRepeat: "repeat",
        backgroundImage:
        // fir white
          // 'url("https://res.cloudinary.com/dbzn1y8rt/image/upload/f_auto,q_auto/v1737635848/jxj9tvksspjfnqhkyh3b.png")',
          'url("https://res.cloudinary.com/dbzn1y8rt/image/upload/f_auto,q_auto/v1744473032/wn20xgn68uheamin5wqr.png")',
          
      }}
    ></div>
  );
};

export default BottomBg;
