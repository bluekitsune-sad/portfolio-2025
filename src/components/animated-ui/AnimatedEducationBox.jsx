"use client";

import AnimatedBox from "./AnimatedBox";

export default function AnimatedEducationBox({ education }) {
  if (!education) return null;
  return (
    <AnimatedBox className="col-span-12 sm:col-span-12">
      <div className="p-4">
        <div className="font-semibold">{education.school}</div>
        <div className="text-sm opacity-80">{education.degree}</div>
        <div className="text-xs opacity-60">{education.year}</div>
      </div>
    </AnimatedBox>
  );
}
