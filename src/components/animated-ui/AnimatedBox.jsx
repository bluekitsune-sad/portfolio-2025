"use client";

import { motion } from "framer-motion";

export default function AnimatedBox({ className = "", children, ...rest }) {
  return (
    <motion.div
      variants={boxVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ type: "spring", mass: 3, stiffness: 400, damping: 50 }}
      className={`bg-card border border-border text-foreground rounded-[var(--radius-lg)] p-6 col-span-1 ${className}`}
      {...rest}
    >
      {children}
    </motion.div>
  );
}

const boxVariants = {
  initial: { scale: 0.5, y: 50, opacity: 0 },
  animate: { scale: 1, y: 0, opacity: 1 },
  exit: { scale: 0.5, y: -50, opacity: 0 },
};
