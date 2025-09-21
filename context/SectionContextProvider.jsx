'use client'

import { useState } from "react";
import { SectionContext } from "./SectionContext.js";

export const SectionContextProvider = ({ children }) => {
  const [activeSection, setActiveSection] = useState("home");
  return (
    <SectionContext.Provider
      value={{
        activeSection,
        setActiveSection,
      }}
    >
      {children}
    </SectionContext.Provider>
  );
};