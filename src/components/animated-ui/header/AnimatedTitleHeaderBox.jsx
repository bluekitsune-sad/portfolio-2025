"use client";

import AnimatedBox from "../AnimatedBox";
import personalProfile from "@/data/personal";
import { FiArrowRight } from "react-icons/fi";
import useSectionContext from "@/hooks/useSectionContext";

export default function AnimatedTitleHeaderBox() {
  const { setActiveSection } = useSectionContext();
  return (
    <AnimatedBox className="col-span-5 row-span-2 p-0">
      <div className="p-6">
        <h1 className=" text-4xl font-medium  mt-5 leading-tight">
          Hi, I'm {personalProfile.name}.
        </h1>
        <p className="text-4xl font-medium leading-tight text-muted-foreground mb-10">
          I'm a {personalProfile.title}.
        </p>
        <button
          className="flex items-center gap-1 text-teal-300 hover:underline"
          onClick={() => setActiveSection("contact")}
        >
          Contact me <FiArrowRight />
        </button>
      </div>
    </AnimatedBox>
  );
}
