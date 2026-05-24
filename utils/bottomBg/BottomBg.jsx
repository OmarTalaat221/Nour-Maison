import React, { memo } from "react";
import cx from "classnames";

const bgStyle = {
  backgroundRepeat: "repeat",
  backgroundImage: 'url("/images/2.webp")',
};

const BottomBg = ({ className }) => {
  return (
    <div
      className={cx("absolute z-20 bottom-[-1px] w-full h-[15px]", className)}
      style={bgStyle}
      aria-hidden="true"
    />
  );
};

export default memo(BottomBg);
