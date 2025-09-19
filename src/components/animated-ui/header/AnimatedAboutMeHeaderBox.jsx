"use client";
import AnimatedBox from "../AnimatedBox";
import personalProfile from "@/data/personal";
import { LuPersonStanding } from "react-icons/lu";

export default function AnimatedAboutMeHeaderBox() {
  return (
    <AnimatedBox className="col-span-5 row-span-2 p-0">
      <div className="p-8 space-y-5 text-justify">
        <h2 className="text-4xl font-medium leading-tight flex items-center gap-3">
          <LuPersonStanding className="size-8 text-zinc-400" /> About Me
        </h2>
        <p className="text-zinc-300">{personalProfile.aboutMe?.head}</p>
      </div>
    </AnimatedBox>
  );
}
