import { useEffect, useState } from "react";

export function useDebounce<T>(value: T, delay: number = 500) {
  const [debouncedValue, setDebounceValue] = useState<T>(value);

  useEffect(() => {
    const timeOut = setTimeout(() => {
      setDebounceValue(value);
    }, delay);

    return () => clearTimeout(timeOut);
  }, [value, delay]);

  return debouncedValue;
}
