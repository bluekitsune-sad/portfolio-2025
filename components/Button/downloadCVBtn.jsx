import { motion } from "framer-motion";
import { BiDownload } from "react-icons/bi";

export const CvButton = ({ text }) => {
  return (
    <motion.div
      className="relative inline-block"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-primary-600 via-accent-teal to-primary-600 rounded-lg loop"></div>
      <motion.a
        href="/CV_2025.pdf"
        download
        className="relative flex items-center gap-2 bg-primary-800 font-semibold py-2 px-4 rounded-md transition-colors duration-200 m-1 hover:bg-primary-700"
        whileHover={{
          boxShadow: "0px 0px 12px rgb(255,255,255)",
        }}
      >
        <motion.span
          animate={{ y: [0, -2, 1, 0] }}
          transition={{ repeat: Infinity, duration: 4 }}
        >
          <BiDownload className="size-5" />
        </motion.span>
        <motion.span
          animate={{ y: [0, 2, -1, 0] }}
          transition={{ repeat: Infinity, duration: 5 }}
        >
          {text}
        </motion.span>
      </motion.a>
    </motion.div>
  );
};

const WavyCvButton = ({ text }) => {
  const letterVariants = {
    initial: { y: 0 },
    wavy: { y: -15 }, // Adjust this value for wave height
  };

  return (
    <div>
      {text.split("").map((char, index) => (
        <motion.span
          key={index}
          variants={letterVariants}
          initial="initial"
          animate="wavy"
          transition={{
            y: {
              type: "spring",
              stiffness: 100, // Adjust stiffness for bounce
              duration: 0.2,
              // Use a loop for continuous motion (requires state management)
              repeat: Infinity,
            },
          }}
        >
          {char}
        </motion.span>
      ))}
    </div>
  );
};
