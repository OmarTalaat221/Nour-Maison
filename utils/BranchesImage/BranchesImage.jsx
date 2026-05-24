"use client";

import React, { memo } from "react";
import cx from "classnames";

const BranchesImage = ({
  variant,
  className,
  imgClassName,
  width,
  image,
  parallax,
  ...props
}) => {
  const position =
    variant === "top-right"
      ? "top-0 right-0"
      : variant === "bottom-right"
        ? "bottom-0 right-0 rotate-180"
        : variant === "top-left"
          ? "top-0 left-0 rotate-[180deg]"
          : variant === "center"
            ? "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            : "bottom-0 left-0 rotate-[-180deg]";

  const imageElement = (
    <img
      loading="lazy"
      decoding="async"
      draggable="false"
      width={width || 500}
      height={width || 500}
      src={image || "/images/pngegg.webp"}
      alt=""
      aria-hidden="true"
      className={cx(
        "select-none w-full sm:w-[250px] md:w-[300px] lg:w-[400px]",
        imgClassName,
      )}
    />
  );

  return (
    <div className={cx("absolute", position, className)} {...props}>
      {parallax ? (
        <div className="h-[600px] overflow-visible">{imageElement}</div>
      ) : (
        imageElement
      )}
    </div>
  );
};

export default memo(BranchesImage);
