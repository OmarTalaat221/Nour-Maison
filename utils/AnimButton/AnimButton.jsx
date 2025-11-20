import React from "react";
import "./style.scss"


const AnimButton = ({text , onClick, href}) => {
  return (
    <button className='btn-53' onClick={()=> onClick ? onClick()  : null}>
      <div className='original'>{text}</div>
      <div className='letters'>
        {Array.from("Book Now").map((letter , index) => (
          <span key={index}>{letter}</span>
        ))}
      </div>
    </button>
  );
};

export default AnimButton;
