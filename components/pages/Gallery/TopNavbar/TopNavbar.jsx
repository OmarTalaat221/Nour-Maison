import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";

export const TopNavbar = ({activeTab , setActiveTab, tabs}) => {
  return (
    <div className="">
      <SlideTabs activeTab={activeTab} setActiveTab={setActiveTab} tabs={tabs} />
    </div>
  );
};

const SlideTabs = ({activeTab , setActiveTab, tabs}) => {
  const [position, setPosition] = useState({ left: 0, width: 0, opacity: 1 });
  const tabRefs = useRef({});

  useEffect(() => {
    const activeEl = tabRefs.current[activeTab];
    if (activeEl) {
      const { offsetLeft, offsetWidth } = activeEl;
      setPosition({ left: offsetLeft, width: offsetWidth, opacity: 1 });
    }
  }, [activeTab]);


  return (
    <ul
      className="relative mx-auto flex w-fit rounded-full border-2 border-softMintGreen"
    >
      {tabs?.map((tab) => (
        <Tab
          key={tab}
          label={tab}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          setPosition={setPosition}
          tabRefs={tabRefs}
        />
      ))}
      <Cursor position={position} />
    </ul>
  );
};

const Tab = ({ label, setPosition, activeTab, setActiveTab, tabRefs }) => {
  const ref = useRef(null);

  useEffect(() => {
    if (ref.current) {
      tabRefs.current[label] = ref.current;
    }
  }, [label, tabRefs]);

  return (
    <li
      ref={ref}
      onMouseEnter={() => {}}
      onClick={() => {
        setActiveTab(label);
        if (ref.current) {
          const { offsetLeft, offsetWidth } = ref.current;
          setPosition({ left: offsetLeft, width: offsetWidth, opacity: 1 });
        }
      }}
      className={`relative z-10 block cursor-pointer px-3 py-1.5 text-xs uppercase font-semibold transition md:px-5 md:py-3 md:text-base ${
        activeTab === label ? "text-white hover:!text-white" : "!text-softMintGreen "
      }`}
    >
      {label}
    </li>
  );
};

const Cursor = ({ position }) => {
  return (
    <motion.li
      animate={{ ...position }}
      className="absolute z-0 h-7 rounded-full bg-softMintGreen md:h-12"
    />
  );
};