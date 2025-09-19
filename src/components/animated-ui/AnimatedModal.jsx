import { AnimatePresence, motion } from "framer-motion";
import React from "react";

export function AnimatedModal(props) {
  const { visible, setVisible, children } = props;
  return (
    <AnimatePresence>
      {visible ? <Modal setVisible={setVisible}>{children}</Modal> : null}
    </AnimatePresence>
  );
}

function Modal({ setVisible, children }) {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        exit={{ opacity: 0 }}
        onClick={() => setVisible(false)}
        className="fixed inset-0 bg-black z-20"
      />

      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        exit={{ x: "100%" }}
        transition={{ type: "spring", damping: 25, stiffness: 200 }}
        className="fixed max-w-[80%] right-0 top-0 bottom-0 bg-card text-card-foreground shadow-xl z-30"
      >
        {children}
      </motion.div>
    </>
  );
}
