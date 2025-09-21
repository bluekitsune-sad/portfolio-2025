import { cva } from "class-variance-authority";

export const skillTagVariants = cva(
  "border rounded px-2 py-1 text-zinc-200 border-primary-600 bg-primary-700 hover:bg-primary-600 transition-colors",
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