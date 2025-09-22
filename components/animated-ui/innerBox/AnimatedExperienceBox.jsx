import { twMerge } from "tailwind-merge";
import { AnimatedBox } from "./AnimatedBox";
import { ExperienceItem } from "../common/ExperienceItem";

export const AnimatedExperienceBox = ({ experience, className, sm }) => {
  return (
    <AnimatedBox
      className={twMerge("col-span-5 row-span-4", className, sm ? "p-4" : "")}
    >
      <ExperienceItem experience={experience} sm={sm} />
    </AnimatedBox>
  );
};
