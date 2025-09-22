import { motion } from "framer-motion";
import { AnimatedBox } from "./animated-ui/AnimatedBox";
import { myInfo } from "../assets/data";
import { AnimatedMenuBox } from "./animated-ui/innerBox/AnimatedMenuBox";
import { AnimatedHeaderBox } from "./animated-ui/innerBox/AnimatedHeaderBox";
import { AnimatedSkillsHobbiesBox } from "./animated-ui/innerBox/AnimatedSkillsHobbiesBox";
import { AnimatedExperienceBox } from "./animated-ui/innerBox/AnimatedExperienceBox";
import { AnimatedFreelanceBox } from "./animated-ui/innerBox/AnimatedFreelanceBox";
// import { AnimatedSnapshotBox } from "./animated-ui/innerBox/AnimatedSnapshotBox";
import { AnimatedCertificate } from "./animated-ui/innerBox/AnimatedCertificateBox";
import { AnimatedImageBox } from "./animated-ui/innerBox/AnimatedImageBox";
import { AnimatedHobbiesBox } from "./animated-ui/innerBox/AnimatedHobbiesBox";
import { AnimatedEducationBox } from "./animated-ui/innerBox/AnimatedEducationBox";
import { useSectionContext } from "../hooks/useSectionContext";
import { AnimatedRightLeftBox } from "./animated-ui/innerBox/AnimatedRightLeftBox";
import { AnimatedProjectsBox } from "./animated-ui/innerBox/AnimatedProjectsBox";
import { AnimatedSocialsBox } from "./animated-ui/innerBox/AnimatedSocialsBox";
import { AnimatedEmailBox } from "./animated-ui/innerBox/AnimatedEmailBox";
import { AnimatedLocationBox } from "./animated-ui/innerBox/AnimatedLocationBox";
// import { AnimatedLanguagesBox } from "./animated-ui/innerBox/AnimatedLanguagesBox";
import { useBoundedCounter } from "../hooks/useBoundedCounter";

export const VentoGrid = () => {
  return (
    <motion.section
      transition={{
        staggerChildren: 0.15,
      }}
      className="hidden md:grid gap-4 grid-flow-dense grid-cols-12 max-w-4xl z-10"
    >
      <NormalOrProjectsBox />
    </motion.section>
  );
};

const NormalOrProjectsBox = () => {
  const { activeSection } = useSectionContext();

  const { value, next, previous } = useBoundedCounter(
    0,
    0,
    myInfo.projects.length - 1
  );

  return (
    <>
      {activeSection === "projects" ? (
        <AnimatedProjectsBox currentProjectId={value} />
      ) : null}
      {activeSection !== "projects" ? <EmptyBox /> : null}
      {activeSection !== "projects" ? <AnimatedHeaderBox /> : null}
      {activeSection !== "projects" ? <ExperienceOrAboutOrImageBox /> : null}
      <AnimatedMenuBox />
      {activeSection !== "projects" ? <SecondaryInformationBox /> : null}
      {/* {activeSection !== "projects" ? <AnimatedLanguagesBox /> : null} */}
      {activeSection !== "projects" ? <FreelanceOrSocialsBox /> : null}
      {activeSection !== "projects" ? <AnimatedEmailBox /> : null}
      {activeSection !== "projects" ? <AnimatedLocationBox /> : null}
      {activeSection !== "projects" ? <EmptyBox /> : null}
      {activeSection === "projects" ? (
        <AnimatedRightLeftBox onLeftClick={next} onRightClick={previous} />
      ) : null}
    </>
  );
};

function EmptyBox() {
  return (
    <AnimatedBox className="col-span-4 sm:col-span-5 row-span-1 bg-transparent border-none md:hidden" />
  );
}

const SecondaryInformationBox = () => {
  const { activeSection } = useSectionContext();

  if (activeSection === "experience") {
    return <AnimatedExperienceBox experience={myInfo.experience.work[0]} />;
  }

  if (activeSection === "about") {
    return <AnimatedHobbiesBox />;
  }

  if (activeSection === "education") {
    return <AnimatedEducationBox education={myInfo.studies[0]} />;
  }

  return <AnimatedSkillsHobbiesBox />;
};

const ExperienceOrAboutOrImageBox = () => {
  const { activeSection } = useSectionContext();

  if (activeSection === "experience") {
    return (
      <AnimatedExperienceBox
        className="col-span-4 row-span-3"
        experience={myInfo.experience.work[1]}
        sm
      />
    );
  }

  if (activeSection === "about") {
    return <AnimatedCertificate />;
  }

  return <AnimatedImageBox />;
};

const FreelanceOrSocialsBox = () => {
  const { activeSection } = useSectionContext();

  if (activeSection === "experience") {
    return <AnimatedFreelanceBox freelanceJobs={myInfo.experience.freelance} />;
  }

  return <AnimatedSocialsBox />;
};
