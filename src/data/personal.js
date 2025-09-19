import { AiOutlineDotNet } from "react-icons/ai";
import { FaDocker, FaNodeJs, FaReact } from "react-icons/fa";
import { TbSql } from "react-icons/tb";
import { VscAzure } from "react-icons/vsc";
import { Gamepad2, Book, Dumbbell } from "react-icons/fi"; // Correct imports for the hobby icons

const personalProfile = {
  avatarUrl: "https://avatars.githubusercontent.com/u/116144344?v=4",
  name: "Saad Yousuf",
  location: "Pakistan, Karachi",
  contact: {
    phone: "+923115678901",
    whatsapp: "https://wa.me/923115678901",
    email: "saadyousu64@gmail.com",
  },
  social: {
    twitter: "https://x.com/sad_yosuf",
    github: "https://github.com/bluekitsune-sad",
    linkedin: "https://www.linkedin.com/in/syed-saad-yousuf-raza-a83389243/",
  },
  title: "Full Stack Developer",
  education: {
    description:
      "I am currently pursuing a Bachelor's degree in Computer Science at IQRA University.",
  },
  about_me: {
    head: "I have worked on a variety of projects and have developed a strong understanding of the software, application, and website development processes.",
    hobbies: [
      {
        name: "Gaming",
        icon: <Gamepad2 className="size-6 text-zinc-400" />,
      },
      {
        name: "Reading",
        icon: <Book className="size-6 text-zinc-400" />,
      },
      {
        name: "Gym",
        icon: <Dumbbell className="size-6 text-zinc-400" />,
      },
    ],
    other:
      "I’m open to new remote opportunities that bring a real challenge and better overall conditions. Outside of work, I write code for fun, watch more series than I care to admit, play some Minecraft, and make time for the gym.",
  },
  projects: [
    { id: 0, title: "Project One", description: "Sample project" },
    { id: 1, title: "Project Two", description: "Sample project" },
  ],
  experience: {
    description:
      "I have worked on a variety of projects and have developed a strong understanding of the software, application, and website development processes.",
    work: [
      { company: "Company A", role: "Engineer", period: "2022 - Present" },
      { company: "Company B", role: "Developer", period: "2020 - 2022" },
    ],
    freelance: [
      { client: "Client X", summary: "Built landing page" },
      { client: "Client Y", summary: "Dashboard UI" },
    ],
  },
  studies: [
    { school: "University Z", degree: "BSc Computer Science", year: "2020" },
  ],
  skills: [
    {
      name: "Next.js",
      icon: <FaReact className="size-10" />,
      className: "bg-green-500",
    },
    {
      name: "Tailwind CSS",
      icon: <FaReact className="size-10" />,
      className: "bg-green-500",
    },
    {
      name: "Node.js",
      icon: <FaNodeJs className="size-10" />,
      className: "bg-green-500",
    },
    {
      name: "Express",
      icon: <FaNodeJs className="size-10" />,
      className: "bg-yellow-500",
    },
    {
      name: "MongoDB",
      icon: <FaNodeJs className="size-10" />,
      className: "bg-green-500",
    },
    {
      name: "Docker",
      icon: <FaDocker className="size-10" />,
      className: "bg-blue-500",
    },
    {
      name: "AWS",
      icon: <FaNodeJs className="size-10" />,
      className: "bg-blue-500",
    },
    {
      name: "Azure",
      icon: <VscAzure className="size-10" />,
      className: "bg-blue-500",
    },
    {
      name: "Bash",
      icon: <FaNodeJs className="size-10" />,
      className: "bg-orange-500",
    },
    {
      name: "Python",
      icon: <FaNodeJs className="size-10" />,
      className: "bg-blue-500",
    },
    {
      name: "SQL",
      icon: <TbSql className="size-10" />,
      className: "bg-red-500",
    },
  ],
  snapshot: "I am a Full Stack Developer",
};

export default personalProfile;
