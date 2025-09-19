"use client";

import AnimatedBox from "./AnimatedBox";
import personalProfile from "@/data/personal";

export default function AnimatedHobbiesBox() {
  return (
    <AnimatedBox className="col-span-12 sm:col-span-12">
      <div className="p-4 flex flex-wrap gap-2">
        {personalProfile.hobbies.map((hobby) => (
          <span key={hobby} className="px-2 py-1 border rounded">
            {hobby}
          </span>
        ))}
      </div>
    </AnimatedBox>
  );
}
