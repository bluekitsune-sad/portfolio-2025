"use client";

import personalProfile from "@/data/personal";
import AnimatedBox from "./AnimatedBox";

export default function AnimatedImageBox() {
  return (
    <AnimatedBox className="col-span-4 row-span-4 p-0 overflow-hidden">
      <img
        src={personalProfile.avatarUrl}
        alt="A photo of me"
        className="w-full h-full object-cover"
      />
    </AnimatedBox>
  );
}
