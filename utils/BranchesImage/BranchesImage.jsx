import React from "react";
import cx from "classnames";
import SimpleParallax from "simple-parallax-js";
const BranchesImage = ({
  variant,
  className,
  width,
  image,
  parallax,
  ...props
}) => {
  const position =
    variant == "top-right"
      ? " absolute top-0 right-0"
      : variant == "bottom-right"
      ? " absolute bottom-0 right-0 rotate-180"
      : variant == "top-left"
      ? "absolute top-0 left-0 rotate-[180deg]"
      : variant == "center"
      ? " top-1/2  left-1/2 -translate-x-1/2 -translate-y-1/2 "
      : " absolute bottom-0 left-0 rotate-[-180deg]";

  return (
    <div className={cx("absolute", position, className)} {...props}>
      {parallax ? (
        <div className="!h-[600px]">

        <SimpleParallax  scale={1.4} orientation='up' >
          <img
            loading="lazy"
            draggable='false'
            className='select-none w-full sm:w-[250px] md:w-[300px] lg:w-[400px]'
            width={width || 500}
            src={image || "https://res.cloudinary.com/dbzn1y8rt/image/upload/v1745924807/ocbeg0zszow5hwba7l4z.webp"}
            alt='Branch'
            />
        </SimpleParallax>
            </div>
      ) : (
        <img
          loading="lazy"
          draggable='false'
          className='select-none w-full sm:w-[250px] md:w-[300px] lg:w-[400px]'
          width={width || 500}
          src={image || "https://res.cloudinary.com/dbzn1y8rt/image/upload/v1745924807/ocbeg0zszow5hwba7l4z.webp"}
          alt='Branch'
        />
      )}
    </div>
  );
};

export default BranchesImage;
