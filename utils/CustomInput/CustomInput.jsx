import React from "react";
import "./style.css";
import cx from "classnames";

const CustomInput = ({
  w100,
  textarea,
  inRow,
  label,
  required,
  isGlass,
  type,
  id,
  name,
  onWheel,
  ...props
}) => {
  // Generate a unique ID if one isn't provided
  const inputId =
    id || `input-${name}-${Math.random().toString(36).substr(2, 9)}`;

  // ✅ منع wheel scroll على number inputs (افتراضي)
  const handleWheel = (e) => {
    if (type === "number") {
      e.target.blur();
      setTimeout(() => e.target.focus(), 0);
    }
    if (onWheel) onWheel(e);
  };

  // ✅ منع زرار e, +, - في number inputs
  const handleKeyDown = (e) => {
    if (type === "number") {
      if (["e", "E", "+", "-"].includes(e.key)) {
        e.preventDefault();
      }
    }
    if (props.onKeyDown) props.onKeyDown(e);
  };

  return (
    <>
      <div
        className={`custom_input ${inRow ? "inRow" : ""} ${label ? "gap-[7px]" : ""} `}
      >
        {label && (
          <label
            htmlFor={inputId}
            className="!text-white font-medium text-shadow-sm"
          >
            {label}
            {required && <span className="text-yellow-300 ml-1">(*)</span>}
          </label>
        )}
        {textarea ? (
          <textarea
            {...props}
            id={inputId}
            name={name}
            className={cx("custom_input", {
              "w-full px-4 !rounded-xl bg-white/80 !border-3 !border-white placeholder-gray-700 text-black text-lg focus:outline-none focus:ring-2 focus:ring-green-300 !p-4 !py-3":
                isGlass,
            })}
            rows={props.rows ?? 1}
            aria-label={!label ? props.placeholder : undefined}
          />
        ) : (
          <input
            className={cx("custom_input", {
              "w-full px-4 !rounded-xl bg-white/80 !border-3 !border-white placeholder-gray-700 text-black text-lg focus:outline-none focus:ring-2 focus:ring-green-300 !p-4 !py-3":
                isGlass,
              // ✅ شيل الـ spinner arrows من number inputs
              "[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none":
                type === "number",
            })}
            type={type || "text"}
            id={inputId}
            name={name}
            aria-label={!label ? props.placeholder : undefined}
            onWheel={handleWheel}
            onKeyDown={handleKeyDown}
            {...props}
          />
        )}
      </div>
    </>
  );
};

export default CustomInput;