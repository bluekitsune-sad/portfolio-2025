"use client";

import AnimatedBox from "./AnimatedBox";
import personalProfile from "@/data/personal";

export default function AnimatedSkillsHobbiesBox() {
  return (
    <AnimatedBox className="col-span-12 sm:col-span-12">
      <div className="p-4 flex flex-wrap gap-2">
        {personalProfile.skills.map((skill) => (
          <span key={skill} className="px-2 py-1 border rounded">
            {skill}
          </span>
        ))}
      </div>
    </AnimatedBox>
  );
}
