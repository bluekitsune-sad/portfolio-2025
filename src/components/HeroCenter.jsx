"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useMemo } from "react";
import { useSection } from "@/context/SectionContext";
import userProfile from "@/data/personal";
import RightNav from "@/components/RightNav";

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", damping: 22, stiffness: 220 },
  },
};

export default function HeroCenter() {
  const { activeSection, setActiveSection } = useSection();

  const aboutCard = (
    <div className="bg-card text-card-foreground rounded-[var(--radius-lg)] border p-6 md:p-8 shadow-sm">
      <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">
        About Me
      </h1>
      <p className="mt-3 text-base md:text-lg text-muted-foreground">
        I'm a software developer with interests across frontend and backend. I
        enjoy solving product problems and building delightful user experiences.
      </p>
      <div className="mt-6">
        <a
          href="#contact"
          className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-[var(--radius-sm)] transition-colors hover:opacity-95"
        >
          Contact me →
        </a>
      </div>
    </div>
  );

  const experienceCard = (
    <div className="bg-card text-card-foreground rounded-[var(--radius-lg)] border p-6 md:p-8 shadow-sm">
      <h2 className="text-2xl md:text-3xl font-semibold">Experience</h2>
      <ul className="mt-4 space-y-3 text-sm md:text-base">
        <li className="flex items-center justify-between">
          <span className="text-muted-foreground">
            Senior Software Engineer
          </span>
          <span className="text-muted-foreground">2023 - Today</span>
        </li>
        <li className="flex items-center justify-between">
          <span className="text-muted-foreground">Freelance / Independent</span>
          <span className="text-muted-foreground">—</span>
        </li>
      </ul>
    </div>
  );

  const educationCard = (
    <div className="bg-card text-card-foreground rounded-[var(--radius-lg)] border p-6 md:p-8 shadow-sm">
      <h2 className="text-2xl md:text-3xl font-semibold">My Education</h2>
      <p className="mt-4 text-sm md:text-base text-muted-foreground">
        Bachelor in Software Engineering.
      </p>
      <ul className="mt-3 list-disc pl-5 text-sm md:text-base text-muted-foreground space-y-1">
        <li>Advanced programming</li>
        <li>Web, mobile, and desktop development</li>
        <li>Software design</li>
      </ul>
    </div>
  );

  const projectsCard = (
    <div className="bg-card text-card-foreground rounded-[var(--radius-lg)] border p-6 md:p-8 shadow-sm">
      <h2 className="text-2xl md:text-3xl font-semibold">
        My Personal Projects
      </h2>
      <p className="mt-4 text-sm md:text-base text-muted-foreground">
        A selection of things I've built.
      </p>
    </div>
  );

  const leftCard = useMemo(() => {
    switch (activeSection) {
      case "experience":
        return experienceCard;
      case "education":
        return educationCard;
      case "projects":
        return projectsCard;
      case "about":
      default:
        return aboutCard;
    }
  }, [activeSection]);

  return (
    <section className="w-full max-w-6xl mx-auto px-4 md:px-6 lg:px-8 flex items-center min-h-[80vh]">
      <motion.div
        initial="hidden"
        animate="show"
        variants={containerVariants}
        className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch"
      >
        {/* Left: dynamic card */}
        <motion.div variants={itemVariants}>{leftCard}</motion.div>

        {/* Middle: Profile image */}
        <motion.div
          variants={itemVariants}
          className="relative rounded-[var(--radius-lg)] overflow-hidden border bg-card"
        >
          <Image
            src={userProfile.avatar_url}
            alt={`${userProfile.name} avatar`}
            fill
            className="object-cover"
            priority
          />
        </motion.div>

        {/* Right: Sidebar nav */}
        <motion.div variants={itemVariants} className="hidden lg:block">
          <RightNav activeSection={activeSection} onSelect={setActiveSection} />
        </motion.div>

        {/* Tech stack row */}
        <motion.div
          variants={itemVariants}
          className="bg-card text-card-foreground rounded-[var(--radius-lg)] border p-4 md:p-6 flex flex-col gap-4"
        >
          <div className="text-sm font-semibold tracking-wide text-muted-foreground">
            TECH STACK
          </div>
          <div className="flex flex-wrap gap-2">
            {userProfile.tech_stack.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 rounded-[var(--radius-sm)] border bg-muted/40 text-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Actions row */}
        <motion.div
          variants={itemVariants}
          className="col-span-1 lg:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-4"
        >
          <div className="rounded-[var(--radius-lg)] border bg-card p-4 flex items-center justify-between">
            <span className="text-sm text-muted-foreground">Languages</span>
            <div className="inline-flex gap-2">
              <button className="px-3 py-1 rounded-[var(--radius-sm)] border bg-background text-sm">
                English
              </button>
              <button className="px-3 py-1 rounded-[var(--radius-sm)] border text-sm">
                Spanish
              </button>
            </div>
          </div>
          <div className="rounded-[var(--radius-lg)] border bg-card p-4 flex items-center justify-between">
            <span className="text-sm text-muted-foreground">Email</span>
            <a
              className="text-sm font-medium hover:underline"
              href={`mailto:${userProfile.email}`}
            >
              {userProfile.email}
            </a>
          </div>
          <div className="rounded-[var(--radius-lg)] border bg-card p-4 flex items-center justify-between">
            <span className="text-sm text-muted-foreground">Location</span>
            <span className="text-sm">{userProfile.location}</span>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
