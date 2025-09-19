"use client";

import { createContext, useContext, useMemo, useState } from "react";

const SectionContext = createContext(null);

export function SectionProvider({ children }) {
  const [activeSection, setActiveSection] = useState("about");

  const value = useMemo(
    () => ({ activeSection, setActiveSection }),
    [activeSection]
  );

  return (
    <SectionContext.Provider value={value}>{children}</SectionContext.Provider>
  );
}

export function useSection() {
  const ctx = useContext(SectionContext);
  if (!ctx) throw new Error("useSection must be used within SectionProvider");
  return ctx;
}
