import { useEffect, useRef, useState } from "react";

interface UseResponsiveProps {
  breakpoint?: number;

  setOpen?: (value: boolean) => void;

  drawerOpen?: string | null;

  setDropDownOpen?: React.Dispatch<React.SetStateAction<string | null>>

  setDrawerOpen?: React.Dispatch<React.SetStateAction<string | null>>
}

export const useResponsive = ({
  setOpen,
  drawerOpen,
  setDropDownOpen,
  setDrawerOpen,
  breakpoint = 786,
}: UseResponsiveProps) => {

  const [isMobile, setIsMobile] = useState(false);

  const prevIsMobile = useRef<boolean | null>(null);

  useEffect(() => {

    const handleResize = () => {

      const mobile = window.innerWidth < breakpoint;

      if (prevIsMobile.current !== mobile) {

        setIsMobile(mobile);

        // close dropdown/menu
        setOpen?.(false);

        // move drawer state to dropdown on desktop
        if (!mobile && drawerOpen) {
          setDropDownOpen?.(drawerOpen);
          setDrawerOpen?.(null);
        }
      }

      prevIsMobile.current = mobile;
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };

  }, [
    breakpoint,
    drawerOpen,
    setOpen,
    setDropDownOpen,
    setDrawerOpen,
  ]);

  return isMobile;
};