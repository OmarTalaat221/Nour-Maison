import React from "react";
import "./style.css";
import cx from "classnames";
const StyledBackground = ({wave, children, style, className, color}) => {
  return (
    <div
      style={style}
      className={cx("styled_background__ ", className, {
        white: color == "white",
      })}
    >
      {wave && (
        <div>
          <svg
            className="waves"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 24 150 28"
            preserveAspectRatio="none"
            shapeRendering="auto"
          >
            <defs>
              <path
                id="gentle-wave"
                d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
              />
            </defs>
            <g className="parallax">
              {/* <use xlinkHref="#gentle-wave" x={48} y={5} fill="#5b913b6e" /> */}

              {/* <use xlinkHref="#gentle-wave" x={48} y={3} fill="#76b2546b" /> */}
              <use xlinkHref="#gentle-wave" x={48} y={5} className="fill-pestachio2" />
              <use xlinkHref="#gentle-wave" x={48} y={7} className="fill-pestachio" />
              {/* <use xlinkHref="#gentle-wave" x={48} y={3} className="red" /> */}
            </g>
          </svg>
        </div>
      )}
      {children}
    </div>
  );
};

export default StyledBackground;
