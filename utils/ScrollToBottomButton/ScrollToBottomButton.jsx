import React from "react";
import "./style.scss"

const ScrollToBottomButton = () => {
  return (
    <button className="scrollBtn" aria-label="Scroll to bottom">
      <div className="scroll"> </div>
    </button>
  );
};

export default ScrollToBottomButton;
