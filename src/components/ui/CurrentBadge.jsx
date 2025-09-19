import { cn } from "../../lib/utils";

export default function CurrentBadge({ className = "" }) {
  return (
    <span className={cn("px-2 py-1 rounded text-xs", className)}>current</span>
  );
}
