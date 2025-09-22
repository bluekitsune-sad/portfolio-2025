import { motion } from "framer-motion";
import { AnimatedBox } from "../AnimatedBox";
import { useState } from "react";
import { useSectionContext } from "../../hooks/useSectionContext";
import { IoHome } from "react-icons/io5";
import { TbUserScan } from "react-icons/tb";
import { MdWork } from "react-icons/md";
import { PiStudentFill } from "react-icons/pi";
import { FaCode } from "react-icons/fa";
import { RiContactsBook3Fill } from "react-icons/ri";
import { CvButton } from "../Button/downloadCVBtn";

export const AnimatedMenuBox = ({ sectionChanged }) => {
  const { activeSection, setActiveSection } = useSectionContext();

  const menuItems = [
    {
      id: "home",
      label: "Home",
      icon: <IoHome />,
      onClick: () => {
        setActiveSection("home");
        sectionChanged?.();
      },
      flipped: false,
    },
    {
      id: "about",
      label: "About",
      icon: <TbUserScan />,
      onClick: () => {
        setActiveSection("about");
        sectionChanged?.();
      },
      flipped: true,
    },
    {
      id: "experience",
      label: "Experience",
      icon: <MdWork />,
      onClick: () => {
        setActiveSection("experience");
        sectionChanged?.();
      },
      flipped: false,
    },
    {
      id: "education",
      label: "Education",
      icon: <PiStudentFill />,
      onClick: () => {
        setActiveSection("education");
        sectionChanged?.();
      },
      flipped: true,
    },
    {
      id: "projects",
      label: "Projects",
      icon: <FaCode />,
      onClick: () => {
        setActiveSection("projects");
        sectionChanged?.();
      },
      flipped: false,
    },
    {
      id: "contact",
      label: "Contact",
      icon: <RiContactsBook3Fill />,
      onClick: () => {
        setActiveSection("contact");
        sectionChanged?.();
      },
      flipped: true,
    },
  ];

  return (
    <AnimatedBox className="col-span-3 row-span-5 flex flex-col justify-around h-full p-4">
      <div className="flex flex-col justify-center gap-8 flex-1 mb-4">
        {menuItems.map((item, index) => (
          <AnimatedMenuBoxItem
            key={index}
            onClick={item.onClick}
            selected={item.id === activeSection}
          >
            {item.flipped ? (
              <>
                {item.label}
                {item.icon}
              </>
            ) : (
              <>
                {item.icon}
                {item.label}
              </>
            )}
          </AnimatedMenuBoxItem>
        ))}
      </div>
      <CvButton text="Download CV" />
      {/* <WavyCvButton text="Download CV" /> */}
    </AnimatedBox>
  );
};

const AnimatedMenuBoxItem = ({ children, onClick, selected }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.button
      onClick={onClick}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      className={`text-center w-full cursor-pointer px-4 py-3 uppercase font-semibold relative transition-colors duration-150`}
    >
      <motion.span
        animate={{
          opacity: hovered || selected ? 1 : 0,
          scale: hovered || selected ? 1 : 0,
        }}
        transition={{ duration: 0.1 }}
        className={`absolute inset-0 w-full h-full rounded-full pointer-events-none ${
          selected && !hovered ? "bg-primary-600" : "bg-primary-600"
        }`}
      />
      <motion.div
        animate={{ scale: hovered || selected ? 1.1 : 1 }}
        transition={{ duration: 0.1 }}
        className="h-full mix-blend-difference relative z-10 flex justify-between items-center w-full px-4"
      >
        {children}
      </motion.div>
    </motion.button>
  );
};
