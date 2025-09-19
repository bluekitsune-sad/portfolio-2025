import { cva } from "class-variance-authority";

export const skillTagVariants = cva(
  "border border-border rounded px-2 py-1 text-foreground hover:bg-muted transition-colors",
  {
    variants: {
      size: {
        xs: "text-xs",
        md: "text-sm",
      },
    },
    defaultVariants: {
      size: "xs",
    },
  }
);

export function getSkillTagClassNames({ size } = {}) {
  return skillTagVariants({ size });
}
