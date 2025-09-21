import { motion } from "framer-motion";

export const AnimatedGridMainBackground = ({ children }) => {
  return (
    <main className="relative w-screen min-h-screen flex flex-col overflow-hidden items-center justify-center gap-6 bg-teal-950 text-zinc-50">
      <div className="absolute inset-0 z-0 grid grid-cols-4 opacity-25 sm:grid-cols-8 md:grid-cols-12 lg:grid-cols-16">
        {Array.from({ length: 300 }).map((_, index) => (
          <motion.div
            key={index}
            initial={{ backgroundColor: "#092d3bff" }}
            whileHover={{ backgroundColor: "#00eeffff" }}
            transition={{
              backgroundColor: {
                type: "spring",
                damping: 100,
                stiffness: 200,
              },
            }}
            className="relative aspect-square border border-zinc-800"
          >
            {/* Small Dot in Each Corner */}
            <div className="absolute top-0 left-0 w-2.5 h-2.5 bg-zinc-300 rounded-full"></div>{" "}
            {/* Top-left */}
          </motion.div>
        ))}
      </div>
      {children}
    </main>
  );
};
