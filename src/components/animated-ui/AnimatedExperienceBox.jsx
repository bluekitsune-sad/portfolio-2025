"use client";

import AnimatedBox from "./AnimatedBox";

export default function AnimatedExperienceBox({
  experience,
  className = "",
  sm = false,
}) {
  if (!experience) return null;
  return (
    <AnimatedBox
      className={`${className} col-span-12 sm:col-span-12 ${
        sm ? "row-span-3" : ""
      }`}
    >
      <div className="p-4">
        <div className="font-semibold">{experience.company}</div>
        <div className="text-sm opacity-80">{experience.role}</div>
        <div className="text-xs opacity-60">{experience.period}</div>
      </div>
    </AnimatedBox>
  );
}
