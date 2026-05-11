// app/context/LoadingContext.jsx
"use client";
import { createContext, useContext, useState, useEffect } from "react";
import { useAssetsLoader } from "../../Hooks/useAssetsLoader/useAssetsLoader";

const LoadingContext = createContext({
  isLoading: true,
  progress: 0,
});

export const LoadingProvider = ({ children }) => {
  const { progress, isLoaded } = useAssetsLoader();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (isLoaded) {
      // ✅ استنى الـ exit animation يخلص
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 1400);

      return () => clearTimeout(timer);
    }
  }, [isLoaded]);

  return (
    <LoadingContext.Provider value={{ isLoading, progress }}>
      {children}
    </LoadingContext.Provider>
  );
};

export const useLoading = () => {
  const context = useContext(LoadingContext);
  if (!context) {
    throw new Error("useLoading must be used within LoadingProvider");
  }
  return context;
};
