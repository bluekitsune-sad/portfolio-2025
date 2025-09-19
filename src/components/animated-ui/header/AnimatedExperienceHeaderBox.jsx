"use client";

const BriefcaseBusiness = (props) => (
  <span {...props} aria-hidden="true">
    💼
  </span>
);
import AnimatedBox from "../AnimatedBox";

export default function AnimatedExperienceHeaderBox() {
  return (
    <AnimatedBox className="col-span-5 row-span-2 p-0">
      <div className="p-8 space-y-5">
        <h2 className="text-4xl font-medium leading-tight flex items-center gap-3">
          <BriefcaseBusiness className="size-8 text-muted-foreground" />{" "}
          Experience
        </h2>
        <p className="text-muted-foreground">
          I have actual hands on experience in software development, working
          with teams of different sizes.
          <br />
          Here are some of my professional experiences:
        </p>
      </div>
    </AnimatedBox>
  );
}
