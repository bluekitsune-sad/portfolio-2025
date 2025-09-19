import { cn } from "../../lib/utils";
import { getSkillTagClassNames } from "./skill-tag";

export default function SkillTag({ skill, size, className = "" }) {
  return (
    <span className={cn(getSkillTagClassNames({ size }), className)}>
      {skill}
    </span>
  );
}
