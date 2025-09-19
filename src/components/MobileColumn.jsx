"use client";

import { motion } from "framer-motion";
import AnimatedHeaderBox from "@/components/animated-ui/AnimatedHeaderBox";
import AnimatedImageBox from "@/components/animated-ui/AnimatedImageBox";
import AnimatedSocialsBox from "@/components/animated-ui/AnimatedSocialsBox";
import AnimatedEmailBox from "@/components/animated-ui/AnimatedEmailBox";
import AnimatedLocationBox from "@/components/animated-ui/AnimatedLocationBox";
import { useSection } from "@/context/SectionContext";

export default function MobileColumn() {
  const { activeSection } = useSection();

  return (
    <motion.div className="z-10 max-w-md md:hidden flex flex-col gap-4 p-4">
      <AnimatedHeaderBox />
      <AnimatedImageBox />
      <div className="flex w-full gap-4">
        <AnimatedSocialsBox />
      </div>
      {activeSection === "home" || activeSection === "about" ? (
        <>
          <AnimatedLocationBox />
          <AnimatedEmailBox />
        </>
      ) : null}
    </motion.div>
  );
}
