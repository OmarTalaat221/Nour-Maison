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
        src='https://res.cloudinary.com/dhebgz7qh/image/upload/v1767791112/dnxwhfpgkrgpevziszif_gdraa9.webp'
        alt='leav-1'
      />
      {children}
      <img
        loading="lazy"
        className='w-[30px] md:w-[40px] animate-wiggle  '
        src='https://res.cloudinary.com/dhebgz7qh/image/upload/v1767791112/dnxwhfpgkrgpevziszif_gdraa9.webp'
        alt='leave-2'
      />
    </div>
  );
};

export default AnimTitle;
