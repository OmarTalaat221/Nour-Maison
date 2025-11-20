import React from "react";
import "./style.css";
import { HiPlus } from "react-icons/hi";
import { HiMinusSm } from "react-icons/hi";
import cx from "classnames"
const NumberStepper = ({value=1, onChange=()=>null}) => {
  const handleIncrement = () => {
    onChange("plus");
  };

  const handleDecrement = () => {
    if (+value > 1) {
      onChange("minus");
    }
  };

  const handleChange = (e) => {
    const newValue = parseInt(+e.target.value, 10);
    if (newValue) {
      onChange(+newValue);
    } else {
      onChange("");
    }
  };

  const handlekeydown = (e) => {
    if (e.key == "-" || e.key == "ArrowUp" || e.key == "ArrowDown") {
      e.preventDefault(); // Prevent default arrow key behavior
    }
  };

  return (
    <div
      className='stepper_container flex gap-3'
      style={{display: "flex", alignItems: "center"}}
    >
      <button
        className={cx('stepper_button')}
        onClick={handleDecrement} 
        disabled={value <= 0}
      >
        <HiMinusSm />
      </button>
      {/* <input
        className='stepper_input'
        type='number'
        value={value}
        onChange={handleChange}
        onKeyDown={handlekeydown}
        style={{width: "50px", textAlign: "center"}}
      /> */}
      <button className='stepper_button' onClick={handleIncrement}>
      <HiPlus />
      </button>
    </div>
  );
};

export default NumberStepper;
