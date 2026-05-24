import React, { memo } from "react";

const bgStyle = {
  backgroundRepeat: "repeat",
  backgroundImage: 'url("/images/2.webp")',
};

const TopBg = () => {
  return (
    <div
      className="absolute rotate-180 z-20 top-[-1px] w-full h-[15px]"
      style={bgStyle}
      aria-hidden="true"
    />
  );
};

export default memo(TopBg);
