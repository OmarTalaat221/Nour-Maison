// app/context/HeaderContext.jsx
"use client";

import { createContext, useContext, useState } from "react";

const HeaderContext = createContext(undefined);

export function HeaderProvider({ children }) {
  const [headerWithBg, setHeaderWithBg] = useState(false);

  return (
    <HeaderContext.Provider value={{ headerWithBg, setHeaderWithBg }}>
      {children}
    </HeaderContext.Provider>
  );
}

export function useHeader() {
  const context = useContext(HeaderContext);
  if (context === undefined) {
    throw new Error("useHeader must be used within a HeaderProvider");
  }
  return context;
}
