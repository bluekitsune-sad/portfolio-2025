import { cn } from "../../lib/utils";
import { skillTagVariants } from "./skill-tag";

export const SkillTag = ({ skill, size, className }) => {
  return (
    <span className={cn(skillTagVariants({ size }), className)}>{skill}</span>
  );
};