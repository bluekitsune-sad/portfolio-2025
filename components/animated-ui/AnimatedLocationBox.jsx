import { MapPin } from "lucide-react";
import { AnimatedBox } from "./AnimatedBox";
import { myInfo } from "../../assets/data";

export const AnimatedLocationBox = () => {
  return (
    <AnimatedBox className="col-span-5 row-span-1 flex items-center space-x-20 p-2 px-6">
      <MapPin className="size-6 text-teal-300" />
      <p>{myInfo.contact.location}</p>
    </AnimatedBox>
  );
};
