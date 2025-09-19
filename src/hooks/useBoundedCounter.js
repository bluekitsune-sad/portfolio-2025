"use client";

import { useCallback, useState } from "react";

export default function useBoundedCounter(initial, min, max) {
  const [value, setValue] = useState(initial);

  const next = useCallback(() => {
    setValue((v) => (v + 1 > max ? min : v + 1));
  }, [min, max]);

  const previous = useCallback(() => {
    setValue((v) => (v - 1 < min ? max : v - 1));
  }, [min, max]);

  return { value, next, previous };
}
