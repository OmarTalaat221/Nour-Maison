import React, { memo } from "react";
import AnimTitle from "../../utils/AnimTitle/AnimTitle";
import cx from "classnames";

const SectionTitle = ({
  children,
  className,
  noLeaves,
  as = "div", // ✅ جديد: يدعم h2, h3, h4 إلخ
}) => {
  const Tag = as;

  if (noLeaves) {
    return (
      <Tag
        className={cx(
          "font-tangerine text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-softMintGreen text-center",
          className
        )}
      >
        {children}
      </Tag>
    );
  }

  return (
    <AnimTitle data-aos="fade-down" data-aos-delay="300" className="px-2">
      <Tag
        className={cx(
          "font-tangerine text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-softMintGreen text-center",
          className
        )}
      >
        {children}
      </Tag>
    </AnimTitle>
  );
};

export default memo(SectionTitle);