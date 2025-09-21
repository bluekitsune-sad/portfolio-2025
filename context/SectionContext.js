import { createContext } from "react";

// Valid section values: "home", "about", "projects", "contact", "experience", "education"

export const SectionContext = createContext({
  activeSection: "home",
  setActiveSection: () => {},
});