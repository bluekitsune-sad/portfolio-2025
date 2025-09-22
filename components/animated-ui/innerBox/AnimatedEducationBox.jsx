import { EducationItem } from "../common/EducationItem";
import { AnimatedBox } from "../AnimatedBox";

export const AnimatedEducationBox = ({ education }) => {
  return (
    <AnimatedBox className="col-span-5 row-span-4 p-6">
      <EducationItem education={education} />
    </AnimatedBox>
  );
};
