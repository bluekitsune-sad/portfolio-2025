import { AnimatedBox } from "../AnimatedBox";
import { myInfo } from "../../../assets/data";
import { FiArrowRight } from "react-icons/fi";
import { useSectionContext } from "../../../hooks/useSectionContext.js";

export const AnimatedTitleHeaderBox = () => {
  const { setActiveSection } = useSectionContext();
  return (
    <AnimatedBox className="col-span-5 row-span-2 p-0">
      <div className="p-6">
        <h1 className=" text-4xl font-medium  mt-5 leading-tight">
          Hi, I&apos;m {myInfo.alias}.
        </h1>
        <p className="text-4xl font-medium leading-tight text-zinc-400 mb-10">
          I&apos;m a {myInfo.title}.
        </p>
        <button
          className="flex items-center gap-1 text-accent-teal hover:underline hover:text-primary-600 transition-colors"
          onClick={() => setActiveSection("contact")}
        >
          Contact me <FiArrowRight />
        </button>
      </div>
    </AnimatedBox>
  );
};
