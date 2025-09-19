"use client";

import { motion } from "framer-motion";

const item = {
  hidden: { opacity: 0, y: 8 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", damping: 22, stiffness: 220 },
  },
};

const sections = [
  { id: "home", label: "Home", icon: "🏠" },
  { id: "about", label: "About", icon: "ℹ️" },
  { id: "experience", label: "Experience", icon: "💼" },
  { id: "education", label: "Education", icon: "🎓" },
  { id: "projects", label: "Projects", icon: "🛠️" },
  { id: "contact", label: "Contact", icon: "✉️" },
];

import { useSection } from "@/context/SectionContext";

export default function RightNav({
  activeSection: propActive,
  onSelect: propOnSelect,
}) {
  const { activeSection, setActiveSection } = useSection();
  const current = propActive ?? activeSection;
  const select = propOnSelect ?? setActiveSection;
  return (
    <aside className="bg-card text-card-foreground rounded-[var(--radius-lg)] border p-3 md:p-4 lg:p-5 flex flex-col gap-2">
      <div className="grid grid-cols-2 gap-2 mb-2">
        <button
          type="button"
          onClick={() => select("home")}
          className="col-span-2 inline-flex items-center justify-center gap-2 rounded-[var(--radius-md)] bg-background border px-4 py-2 text-sm font-medium"
        >
          <span>🏠</span>
          <span>HOME</span>
        </button>
      </div>
      <nav className="flex flex-col gap-2">
        {sections.map((s) => {
          const isActive = current === s.id;
          return (
            <motion.button
              key={s.id}
              type="button"
              variants={item}
              initial="hidden"
              animate="show"
              onClick={() => select(s.id)}
              className={`flex items-center justify-between rounded-[var(--radius-md)] border px-3 py-2 text-sm transition-colors ${
                isActive
                  ? "bg-primary/10 border-primary"
                  : "bg-background/60 hover:bg-background"
              }`}
            >
              <span className="inline-flex items-center gap-2">
                <span aria-hidden>{s.icon}</span>
                <span className="tracking-wide">{s.label}</span>
              </span>
            </motion.button>
          );
        })}
      </nav>
      <div className="mt-3">
        <a
          href="#cv"
          className="inline-flex w-full items-center justify-center gap-2 rounded-[var(--radius-md)] bg-primary text-primary-foreground px-4 py-2 text-sm font-medium"
        >
          ⬇️ Download CV
        </a>
      </div>
    </aside>
  );
}
