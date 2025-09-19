"use client";

import AnimatedBox from "./AnimatedBox";
import personalProfile from "@/data/personal";

const MapPin = (props) => (
  <span {...props} aria-hidden="true">
    📍
  </span>
);

export default function AnimatedLocationBox() {
  return (
    <AnimatedBox className="col-span-3 row-span-1 flex items-center justify-between p-2 px-6">
      <MapPin className="size-6 text-teal-300" />
      <p>{personalProfile?.contact?.location}</p>
    </AnimatedBox>
  );
}
