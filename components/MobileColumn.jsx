import { motion } from "framer-motion";
import { AnimatedHeaderBox } from "./animated-ui/innerBox/AnimatedHeaderBox";
import { AnimatedHamburgerButton } from "./Button/AnimatedHamburgerButton";
import { useState } from "react";
import { AnimatedModal } from "./animated-ui/AnimatedModal";
import { AnimatedMenuBox } from "./animated-ui/innerBox/AnimatedMenuBox";
import { AnimatedImageBox } from "./animated-ui/innerBox/AnimatedImageBox";
import { AnimatedSocialsBox } from "./animated-ui/innerBox/AnimatedSocialsBox";
import { AnimatedEmailBox } from "./animated-ui/innerBox/AnimatedEmailBox";
import { AnimatedLocationBox } from "./animated-ui/innerBox/AnimatedLocationBox";
// import { AnimatedLanguagesBox } from "./animated-ui/innerBox/AnimatedLanguagesBox";
import { AnimatedSkillsBox } from "./animated-ui/innerBox/AnimatedSkillsBox";
import { useSectionContext } from "../hooks/useSectionContext";
// import { AnimatedSnapshotBox } from "./animated-ui/AnimatedSnapshotBox";
import { AnimatedCertificate } from "./animated-ui/innerBox/AnimatedCertificateBox";
import { AnimatedHobbiesBox } from "./animated-ui/innerBox/AnimatedHobbiesBox";
import { AnimatedExperienceBox } from "./animated-ui/innerBox/AnimatedExperienceBox";
import { myInfo } from "../assets/data";
import { AnimatedFreelanceBox } from "./animated-ui/innerBox/AnimatedFreelanceBox";
import { AnimatedEducationBox } from "./animated-ui/innerBox/AnimatedEducationBox";
import { AnimatedProjectsBox } from "./animated-ui/innerBox/AnimatedProjectsBox";
import { AnimatedRightLeftBox } from "./animated-ui/innerBox/AnimatedRightLeftBox";
import { useBoundedCounter } from "../hooks/useBoundedCounter";

export const MobileColumn = () => {
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  const sectionChanged = () => {
    setIsMenuVisible(false);
  };

  return (
    <motion.div className="z-10 max-w-md md:hidden flex flex-col gap-4 p-4">
      <div className="flex justify-end-safe">
        <AnimatedHamburgerButton setIsOpen={setIsMenuVisible} />
      </div>
      <ContentBox />
      <AnimatedModal setVisible={setIsMenuVisible} visible={isMenuVisible}>
        <AnimatedMenuBox sectionChanged={sectionChanged} />
      </AnimatedModal>
    </motion.div>
  );
};

const ContentBox = () => {
  const { activeSection } = useSectionContext();

  const { value, next, previous } = useBoundedCounter(
    0,
    0,
    myInfo.projects.length - 1
  );

  if (activeSection === "home" || activeSection === "contact") {
    return (
      <>
        <AnimatedHeaderBox />

        <AnimatedImageBox />
        <div className="flex w-full gap-4">
          <AnimatedSocialsBox />
        </div>
        <AnimatedSkillsBox />
        <AnimatedLocationBox />
        <AnimatedEmailBox />
        {/* <AnimatedLanguagesBox /> */}
      </>
    );
  }

  if (activeSection === "about") {
    return (
      <>
        <AnimatedImageBox />
        <AnimatedHeaderBox />
        <AnimatedCertificate />
        <AnimatedHobbiesBox />
        <AnimatedLocationBox />
        <div className="flex w-full gap-4">
          <AnimatedSocialsBox />
        </div>
      </>
    );
  }

  if (activeSection === "experience") {
    return (
      <>
        <AnimatedHeaderBox />
        <AnimatedExperienceBox experience={myInfo.experience.work[0]} />
        <AnimatedExperienceBox experience={myInfo.experience.work[1]} />
        <AnimatedFreelanceBox freelanceJobs={myInfo.experience.freelance} />
        <div className="flex w-full gap-4">
          <AnimatedSocialsBox />
        </div>
      </>
    );
  }

  if (activeSection === "education") {
    return (
      <>
        <AnimatedHeaderBox />
        <AnimatedEducationBox education={myInfo.studies[0]} />
        <div className="flex w-full gap-4">
          <AnimatedSocialsBox />
        </div>
      </>
    );
  }

  if (activeSection === "projects") {
    return (
      <>
        <AnimatedProjectsBox currentProjectId={value} />
        <AnimatedRightLeftBox onLeftClick={previous} onRightClick={next} />
      </>
    );
  }
};
