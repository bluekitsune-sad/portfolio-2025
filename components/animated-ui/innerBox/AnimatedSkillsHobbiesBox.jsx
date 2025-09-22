import { AnimatedHobbiesBox } from "./AnimatedHobbiesBox";
import { AnimatedSkillsBox } from "./AnimatedSkillsBox";
import { useSectionContext } from "../../hooks/useSectionContext.js";

export const AnimatedSkillsHobbiesBox = () => {
  const { activeSection } = useSectionContext();

  if (activeSection === "about") {
    return <AnimatedHobbiesBox />;
  }

  return <AnimatedSkillsBox />;
};
