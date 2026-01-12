import React from "react";
import "./style.scss"


const AnimButton = ({text , onClick, href}) => {
  return (
    <button className='btn-53 [&_*]:!font-seasons' onClick={()=> onClick ? onClick()  : null}>
      <div className='original  tracking-widest'>{text}</div>
      <div className='letters '>
        {Array.from("Book Now").map((letter , index) => (
          <span key={index} className="tracking-widest">{letter}</span>
        ))}
      </div>
    </button>
  );
};

export default AnimButton;
