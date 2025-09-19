"use client";

import useSectionContext from "@/hooks/useSectionContext";
import AnimatedBox from "./AnimatedBox";
import personalProfile from "@/data/personal";

export default function AnimatedEmailBox() {
  const { activeSection } = useSectionContext();

  const excludedSections = ["experience", "education"];
  if (excludedSections.includes(activeSection)) {
    return null;
  }

  return (
    <AnimatedBox className="col-span-5 row-span-1 flex items-center justify-between p-2 px-6">
      <p className="select-all">
        <span className="size-6 text-teal-300">@</span>
        {personalProfile?.contact?.email}
      </p>
    </AnimatedBox>
  );
}
