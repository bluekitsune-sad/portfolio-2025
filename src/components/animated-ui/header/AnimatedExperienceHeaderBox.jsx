"use client";

import AnimatedBox from "../AnimatedBox";
import { FaBriefcase } from "react-icons/fa";
import personalProfile from "@/data/personal";

export default function AnimatedExperienceHeaderBox() {
  return (
    <AnimatedBox className="col-span-5 row-span-2 p-0">
      <div className="p-8 space-y-5">
        <h2 className="text-4xl font-medium leading-tight flex items-center gap-3">
          <FaBriefcase className="size-8 text-muted-foreground" /> Experience
        </h2>
        <p className="text-muted-foreground">
          {personalProfile.experience.description}
          <br />
          Here are some of my professional experiences:
        </p>
      </div>
    </AnimatedBox>
  );
}
