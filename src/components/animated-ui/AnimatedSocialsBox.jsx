"use client";

import { motion } from "framer-motion";
import AnimatedBox from "./AnimatedBox";
import personalProfile from "@/data/personal";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

export default function AnimatedSocialsBox() {
  return (
    <>
      <LinkedInBox />
      <GithubBox />
    </>
  );
}

const GithubBox = () => {
  return (
    <AnimatedBox className="col-span-2 row-span-2 bg-muted p-0 flex-1">
      <motion.a
        whileHover={{ y: -15, scale: 1.2 }}
        href={personalProfile?.contact?.github}
        target="_blank"
        rel="noopener noreferrer"
        className="size-full flex items-center justify-center p-4"
      >
        <FaGithub className="size-10" />
      </motion.a>
    </AnimatedBox>
  );
};

const LinkedInBox = () => {
  return (
    <AnimatedBox className="col-span-2 row-span-2 bg-primary p-0 flex-1 aspect-square md:aspect-auto">
      <motion.a
        whileHover={{ y: -15, scale: 1.2 }}
        href={personalProfile?.contact?.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        className="size-full flex items-center justify-center p-4"
      >
        <FaLinkedin className="size-10" />
      </motion.a>
    </AnimatedBox>
  );
};
