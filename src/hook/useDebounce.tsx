
import { useEffect, useState } from "react";

export const useDebounce = <T,>(value:T , delay:number) => {
  const [debouncedVal, setDebouncedVal] = useState<T>(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedVal(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedVal;
};
