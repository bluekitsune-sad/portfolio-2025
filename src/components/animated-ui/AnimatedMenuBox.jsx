"use client";

import AnimatedBox from "./AnimatedBox";
import useSectionContext from "@/hooks/useSectionContext";

const menuItems = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "education", label: "Education" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

export default function AnimatedMenuBox({ sectionChanged }) {
  const { activeSection, setActiveSection } = useSectionContext();

  function handleMenuClick(sectionId) {
    setActiveSection(sectionId);
    if (typeof sectionChanged === "function") sectionChanged();
  }

  return (
    <AnimatedBox className="col-span-12 lg:col-span-3">
      <nav className="grid gap-2 p-4">
        {menuItems.map((item) => (
          <button
            key={item.id}
            type="button"
            onClick={() => handleMenuClick(item.id)}
            className={`text-sm rounded-[var(--radius-md)] border px-3 py-2 text-left transition-colors ${
              activeSection === item.id
                ? "bg-primary/10 border-primary"
                : "bg-background/60 hover:bg-background"
            }`}
          >
            {item.label}
          </button>
        ))}
      </nav>
    </AnimatedBox>
  );
}
