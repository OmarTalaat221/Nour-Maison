import React, { useEffect, useState, useRef } from "react";
import "./style.css";
import cx from 'classnames';

export const arrow_down_eva = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
  >
    <path
      fill="currentColor"
      d="M12 17a1.72 1.72 0 0 1-1.33-.64l-4.21-5.1a2.1 2.1 0 0 1-.26-2.21A1.76 1.76 0 0 1 7.79 8h8.42a1.76 1.76 0 0 1 1.59 1.05a2.1 2.1 0 0 1-.26 2.21l-4.21 5.1A1.72 1.72 0 0 1 12 17"
    ></path>
  </svg>
);

const CustomSelect = ({
  value,
  inRow,
  onChange,
  label,
  name,
  required,
  data,
  searchable,
  isGlass,
  id,
  placeholder,
  ...props
}) => {
  // Initialize with value prop (if provided) or with an empty object.
  const [selectedValue, setSelectedValue] = useState(value || {});
  const [openList, setOpenList] = useState(false);
  const [filterValue, setFilterValue] = useState(""); // State for filtering
  const selectRef = useRef(null);
  
  // Generate a unique ID if one isn't provided
  const selectId = id || `select-${name}-${Math.random().toString(36).substr(2, 9)}`;

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (selectRef.current && !selectRef.current.contains(event.target)) {
        setOpenList(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Update the internal state when the external `value` prop changes
  useEffect(() => {
    setSelectedValue(value || {});
  }, [value]);

  // Filtered data based on the filter value
  const filteredData = data?.filter((item) =>
    item?.label.toLowerCase().includes(filterValue.toLowerCase())
  );

  return (
    <div className={`custom_select relative  ${inRow ? "inRow" : ""}`} ref={selectRef}>
      {label && (
        <label htmlFor={selectId} className="!text-white font-medium text-shadow-sm">
          {label}
          {required && <span className="text-yellow-300 ml-1">(*)</span>}
        </label>
      )}

      <div className="select_input_container">
        <input
          className={cx({"w-full px-4 !rounded-xl bg-white/80 !border-3 !border-white placeholder-gray-700 text-black text-lg focus:outline-none focus:ring-2 focus:ring-green-300 !p-4 !py-3":isGlass})}
          id={selectId}
          name={name}
          value={selectedValue?.label || ""}
          onClick={() => setOpenList(!openList)}
          style={{ cursor: "pointer" }}
          aria-label={!label ? placeholder : undefined}
          aria-haspopup="listbox"
          aria-expanded={openList}
          readOnly
          placeholder={placeholder}
          {...props}
        />
        <div className={`select_icon ${openList ? "active" : ""}`}>
          {arrow_down_eva}
        </div>

        {openList && (
          <div className="custom_select_list bg-white text-black border border-gray-300 shadow-lg" role="listbox" aria-labelledby={selectId}>
            {/* Filter input */}
            {searchable && (
              <input
                type="text"
                placeholder="Search..."
                className="filter_input bg-white text-black border border-gray-300"
                value={filterValue}
                onChange={(e) => setFilterValue(e.target.value)}
                autoFocus
              />
            )}

            {/* Display filtered data */}
            {filteredData && filteredData.length > 0 ? (
              filteredData.map((item, index) => (
                <div
                  key={index}
                  onClick={() => {
                    item.name = name
                    if (onChange) onChange(item);
                    setSelectedValue(item);
                    setOpenList(false);
                    setFilterValue("");
                  }}
                  id="item_list"
                  role="option"
                  aria-selected={item.value === selectedValue.value}
                  className={`custom_select_item hover:bg-gray-100 ${
                    item.value === selectedValue.value ? "active bg-green-100 text-green-900" : "text-gray-900"
                  }`}
                >
                  {item?.label}
                </div>
              ))
            ) : (
              <div className="no_results text-gray-800">No results found</div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default CustomSelect;
