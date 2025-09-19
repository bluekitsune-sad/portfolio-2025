"use client";

import AnimatedBox from "./AnimatedBox";
import personalProfile from "@/data/personal";

export default function AnimatedSnapshotBox() {
  return (
    <AnimatedBox className="col-span-12 sm:col-span-12">
      <div className="p-4 text-sm opacity-90">{personalProfile.snapshot}</div>
    </AnimatedBox>
  );
}
