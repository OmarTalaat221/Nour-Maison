import React from "react";

const AnimTitle = ({className, children , ...props}) => {
  return (
    <div  className={`flex !items-end gap-3 md:gap-5 justify-center ${className}`} {...props}>
      {" "}
      <img
        loading="lazy"
        style={{
          transform: "rotateY(180deg)",
          transformOrigin: "center",
        }}
        className=' !w-[30px] md:w-[40px] animate-wiggle '
        src='https://res.cloudinary.com/dbzn1y8rt/image/upload/f_auto,q_auto/v1737983207/dnxwhfpgkrgpevziszif.png'
        alt='leav-1'
      />
      {children}
      <img
        loading="lazy"
        className='w-[30px] md:w-[40px] animate-wiggle  '
        src='https://res.cloudinary.com/dbzn1y8rt/image/upload/f_auto,q_auto/v1737983207/dnxwhfpgkrgpevziszif.png'
        alt='leave-2'
      />
    </div>
  );
};

export default AnimTitle;
