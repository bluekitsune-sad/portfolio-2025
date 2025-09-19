"use client";

import { motion } from "framer-motion";
import AnimatedBox from "./AnimatedBox";

const Menu = (props) => (
  <span {...props} aria-hidden="true">
    ☰
  </span>
);

export default function AnimatedHamburgerButton({ setIsOpen }) {
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
