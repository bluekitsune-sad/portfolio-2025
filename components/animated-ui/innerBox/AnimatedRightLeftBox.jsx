import { ChevronLeft, ChevronRight } from "lucide-react";
import { AnimatedBox } from "../AnimatedBox";

export const AnimatedRightLeftBox = ({ onLeftClick, onRightClick }) => {
  return (
    <AnimatedBox className="col-span-3 row-span-1 flex p-0 w-full">
      <button
        className="flex-1 flex justify-center items-center rounded-l hover:bg-primary-600 transition-colors cursor-pointer"
        onClick={onLeftClick}
      >
        <ChevronLeft className="w-8 h-8 my-2" />
      </button>
      <button
        className="flex-1 flex justify-center items-center rounded-r hover:bg-primary-600 transition-colors cursor-pointer"
        onClick={onRightClick}
      >
        <ChevronRight className="w-8 h-8 my-2" />
      </button>
    </AnimatedBox>
  );
};
