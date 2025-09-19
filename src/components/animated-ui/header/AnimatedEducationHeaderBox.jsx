"use client";

const GraduationCap = (props) => (
  <span {...props} aria-hidden="true">
    🎓
  </span>
);
import AnimatedBox from "../AnimatedBox";

export default function AnimatedEducationHeaderBox() {
  return (
    <AnimatedBox className="col-span-5 row-span-2 p-0">
      <div className="p-8 space-y-5">
        <h2 className="text-4xl font-medium leading-tight flex items-center gap-3">
          <GraduationCap className="size-8 text-muted-foreground" /> My
          Education
        </h2>
        <p className="text-muted-foreground">
          My educational background has provided me with a solid foundation of
          software engineering principles. I have completed my Bachelor degree
          and am in seek of a Masters.
        </p>
      </div>
    </AnimatedBox>
  );
}
