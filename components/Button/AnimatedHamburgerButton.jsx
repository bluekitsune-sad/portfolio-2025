import { motion } from "framer-motion";
import { AnimatedBox } from "../animated-ui/AnimatedBox";
import { Menu } from "lucide-react";

export function AnimatedHamburgerButton({ setIsOpen }) {
  return (
    <AnimatedBox className="p-0">
      <motion.button
        onClick={() => setIsOpen((pv) => !pv)}
        className="p-2 m-auto flex items-center justify-center"
      >
        <Menu className="size-10" />
      </motion.button>
    </AnimatedBox>
  );
}
