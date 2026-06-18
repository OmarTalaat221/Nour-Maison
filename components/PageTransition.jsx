"use client";

import { memo, useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const PageTransition = ({ children }) => {
  const pathname = usePathname();
  const [MotionPageTransition, setMotionPageTransition] = useState(null);

  useEffect(() => {
    let mounted = true;

    if (pathname === "/") {
      setMotionPageTransition(null);
      return;
    }

    import("./MotionPageTransition").then((mod) => {
      if (mounted) {
        setMotionPageTransition(() => mod.default);
      }
    });

    return () => {
      mounted = false;
    };
  }, [pathname]);

  if (pathname === "/") {
    return children;
  }

  if (!MotionPageTransition) {
    return children;
  }

  return (
    <MotionPageTransition pathname={pathname}>
      {children}
    </MotionPageTransition>
  );
};

export default memo(PageTransition);