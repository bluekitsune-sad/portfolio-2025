import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";

export function AnimatedBox({ className, children, ...rest }) {
  return (
    <motion.div
      variants={boxVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{
        type: "spring",
        mass: 3,
        stiffness: 400,
        damping: 50,
      }}
      className={twMerge(
        "bg-primary-800 border border-primary-700 rounded-lg p-6 col-span-1 transition-colors",
        className
      )}
      {...rest}
    >
      {children}
    </motion.div>
  );
}

const boxVariants = {
  initial: {
    scale: 0.5,
    y: 50,
    opacity: 0,
  },
  animate: {
    scale: 1,
    y: 0,
    opacity: 1,
  },
  exit: {
    scale: 0.5,
    y: -50,
    opacity: 0,
  },
};
