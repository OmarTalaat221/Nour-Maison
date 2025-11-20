"use client";

import React from "react";
import { Provider } from "react-redux";
import { store } from "../../redux/store";




const PagesLayout = ({ children }) => {
  return (
    <div>
      <Provider store={store}>{children}</Provider>
    </div>
  );
};

export default PagesLayout;
