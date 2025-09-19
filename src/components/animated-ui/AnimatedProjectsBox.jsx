"use client";

import AnimatedBox from "./AnimatedBox";
import personalProfile from "@/data/personal";

export default function AnimatedProjectsBox({ currentProjectId = 0 }) {
  const project =
    personalProfile.projects[currentProjectId] || personalProfile.projects[0];
  return (
    <AnimatedBox className="col-span-12 sm:col-span-12 row-span-3">
      <div className="p-4">
        <div className="text-lg font-semibold">{project.title}</div>
        <div className="text-sm opacity-80">{project.description}</div>
      </div>
    </AnimatedBox>
  );
}
