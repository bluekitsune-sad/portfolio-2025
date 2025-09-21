import { useContext } from "react";
import { SectionContext } from "../context/SectionContext.js";

export const useSectionContext = () => {
  const context = useContext(SectionContext);
  if (!context) {
    throw new Error("useSectionContext must be used within a SectionProvider");
  }
  return context;
};