import cx from "classnames";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import "./style.css";

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
  labelClassName,
  name,
  required,
  data,
  searchable,
  isGlass,
  id,
  placeholder,
  ...props
}) => {
  const [selectedValue, setSelectedValue] = useState(value || {});
  const [openList, setOpenList] = useState(false);
  const [filterValue, setFilterValue] = useState("");
  const [dropdownPosition, setDropdownPosition] = useState({
    top: 0,
    left: 0,
    width: 0,
  });
  const [mounted, setMounted] = useState(false);

  const selectRef = useRef(null);
  const inputContainerRef = useRef(null);
  const dropdownRef = useRef(null);

  const selectId =
    id || `select-${name}-${Math.random().toString(36).substr(2, 9)}`;

  // Mount check for SSR (portals need document)
  useEffect(() => {
    setMounted(true);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      // Check if click is inside select OR inside dropdown (which is in portal)
      const clickedInsideSelect =
        selectRef.current && selectRef.current.contains(event.target);
      const clickedInsideDropdown =
        dropdownRef.current && dropdownRef.current.contains(event.target);

      if (!clickedInsideSelect && !clickedInsideDropdown) {
        setOpenList(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    setSelectedValue(value || {});
  }, [value]);

  // Calculate dropdown position when it opens
  useLayoutEffect(() => {
    if (openList && inputContainerRef.current) {
      const updatePosition = () => {
        const rect = inputContainerRef.current.getBoundingClientRect();
        setDropdownPosition({
          top: rect.bottom + window.scrollY + 4,
          left: rect.left + window.scrollX,
          width: rect.width,
        });
      };

      updatePosition();

      // Update on scroll/resize
      window.addEventListener("scroll", updatePosition, true);
      window.addEventListener("resize", updatePosition);

      return () => {
        window.removeEventListener("scroll", updatePosition, true);
        window.removeEventListener("resize", updatePosition);
      };
    }
  }, [openList]);

  const filteredData = data?.filter((item) =>
    item?.label.toLowerCase().includes(filterValue.toLowerCase()),
  );

  const dropdownContent = openList && (
    <div
      ref={dropdownRef}
      className="custom_select_list bg-white text-black border border-gray-300 shadow-lg"
      role="listbox"
      aria-labelledby={selectId}
      style={{
        position: "absolute",
        top: `${dropdownPosition.top}px`,
        left: `${dropdownPosition.left}px`,
        width: `${dropdownPosition.width}px`,
        zIndex: 99999,
      }}
    >
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

      {filteredData && filteredData.length > 0 ? (
        filteredData.map((item, index) => (
          <div
            key={index}
            onClick={() => {
              item.name = name;
              if (onChange) onChange(item);
              setSelectedValue(item);
              setOpenList(false);
              setFilterValue("");
            }}
            id="item_list"
            role="option"
            aria-selected={item.value === selectedValue.value}
            className={`custom_select_item hover:bg-gray-100 ${
              item.value === selectedValue.value
                ? "active bg-green-100 text-green-900"
                : "text-gray-900"
            }`}
          >
            {item?.label}
          </div>
        ))
      ) : (
        <div className="no_results text-gray-800">No results found</div>
      )}
    </div>
  );

  return (
    <div
      className={`custom_select relative ${inRow ? "inRow" : ""}`}
      ref={selectRef}
    >
      {label && (
        <label
          htmlFor={selectId}
          className={cx(
            "font-medium text-shadow-sm",
            labelClassName || "!text-white",
          )}
        >
          {label}
          {required && <span className="text-yellow-300 ml-1">(*)</span>}
        </label>
      )}

      <div className="select_input_container" ref={inputContainerRef}>
        <input
          className={cx({
            "w-full px-4 !rounded-xl bg-white/80 !border-3 !border-white placeholder-gray-700 text-black text-lg focus:outline-none focus:ring-2 focus:ring-green-300 !p-4 !py-3":
              isGlass,
          })}
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

        {/* Portal renders dropdown outside DOM tree */}
        {mounted &&
          dropdownContent &&
          createPortal(dropdownContent, document.body)}
      </div>
    </div>
  );
};

export default CustomSelect;
