import { Book, Gamepad2 } from "lucide-react";
import { FaAws, FaDocker, FaNodeJs, FaPython, FaReact } from "react-icons/fa";
import {
  TbBrandMongodb,
  TbBrandNextjs,
  TbBrandReactNative,
} from "react-icons/tb";
import { VscAzure } from "react-icons/vsc";
import { IoIosFootball } from "react-icons/io";
// import { url } from "inspector";

export const myInfo = {
  name: "Saad Yousuf",
  alias: "Saad",
  title: "Full Stack Developer",
  // image: "/personal.jpg",
  image: "https://avatars.githubusercontent.com/u/116144344?v=4",
  skills: [
    // {
    //   name: "name of skill",
    //   children: <IconName className="Styling for the icon" />,
    //   className: "Styling for the background",
    // },
    {
      name: "NextJS",
      children: <TbBrandNextjs className="size-10" />,
      className: "bg-violet-500",
    },
    {
      name: "ReactJS",
      children: <FaReact className="size-10" />,
      className: "bg-sky-500",
    },
    {
      name: "ReactNative",
      children: <TbBrandReactNative className="size-10" />,
      className: "bg-sky-500",
    },
    {
      name: "Docker",
      children: <FaDocker className="size-10" />,
      className: "bg-blue-700",
    },
    {
      name: "Python",
      children: <FaPython className="size-10" />,
      className: "bg-blue-700",
    },
    {
      name: "NodeJS",
      children: <FaNodeJs className="size-10" />,
      className: "bg-green-500",
    },
    {
      name: "Azure",
      children: <VscAzure className="size-10" />,
      className: "bg-blue-500",
    },
    {
      name: "AWS",
      children: <FaAws className="size-10" />,
      className: "bg-orange-500",
    },
    {
      name: "MongoDB",
      children: <TbBrandMongodb className="size-10" />,
      className: "bg-green-500",
    },
  ],
  about_me: {
    head: "I am a full stack developer. With experience in both front-end and back-end development, I enjoy working on projects that challenge me to learn and grow my skills. i am always looking for new opportunities to collaborate with others and make a positive impact through technology.",
    snapshot: [
      {
        label: "10 000 +",
        value: "Lines of code written",
      },
      {
        label: "6",
        value: "Years of experience",
      },
      {
        label: "2.5",
        value: "Spoken languages",
      },
      {
        label: "2",
        value: "Countries lived in",
      },
    ],
    hobbies: [
      // {
      //   name: "Name of Hobby",
      //   icon: <iconName className="Styling" />,
      // },
      {
        name: "Gaming",
        icon: <Gamepad2 className="size-6 text-zinc-400" />,
      },
      {
        name: "Reading",
        icon: <Book className="size-6 text-zinc-400" />,
      },
      {
        name: "Football",
        icon: <IoIosFootball className="size-6 text-zinc-400" />,
      },
    ],
    other:
      "I'm open to remote opportunities. I write code that are unique and are interactive usally using python or javascript. I also love to play football and FPS games.",
  },
  contact: {
    email: "saadyousu64@gmail.com",
    phone: "03362600117",
    whatsapp: "https://wa.me/+9233626600117",
    linkedin: "https://www.linkedin.com/in/syed-saad-yousuf-raza-a83389243/",
    github: "https://github.com/bluekitsune-sad",
    location: "Karachi, Pakistan",
  },
  experience: {
    work: [
      // {
      //   title: "Name of Position",
      //   company: "Name of Company",
      //   location: "Location",
      //   dateRange: "starting to ending date or 'Present'",
      //   description:
      //     "short description of the position",
      //   skills: ["skill 1", "skill 2", "skill 3"],
      //   current: false, // true if current position
      // },
      {
        title: "Full Stack Developer",
        company: "Self Employed",
        location: "Karachi, Pakistan",
        dateRange: "2025",
        description: "Open to work remotely. or project work.",
        skills: [
          "Softhware",
          "Web Development",
          "Mobile Development",
          "Game Development",
        ],
        current: false,
      },
      {
        title: "Cyber Security Analyst",
        company: "Compliance Wing",
        location: "Karachi, Pakistan",
        dateRange: "May 2024 - Nov 2024",
        description:
          "Conducted security audits to identify vulnerabilities and enforce best practices. Implemented encryption protocols to enhance data security.",
        skills: [
          "Kali-Linux",
          "ISO 27001",
          "Docker",
          "Vunerability Scanning and Testing",
        ],
        current: false,
      },
    ],
    freelance: [
      // {
      //   project: "Name of Project",
      //   client: "identity of client or 'Self Employed'",
      //   description:
      //     "short description of the project",
      //   duration: "duration of project",
      //   skills: ["skill 1", "skill 2", "skill 3"],
      // },
    ],
  },
  studies: [
    {
      degreeTitle: "Bachelor in Computer Science",
      institution: "IQRA University",
      location: "Karachi, Pakistan",
      dateRange: "2021 - 2026",
      topics: [
        "Advanced programming",
        "software engineering principles",
        "Web, mobile, and desktop development",
        "Game development",
        "Software design",
        "Networks and Operative Systems",
        "Computer Graphics",
        "AI and Machine Learning",
        "Cyber Security",
        "Cloud Computing",
        "Database Management Systems",
        "Data Structures and Algorithms",
      ],
      current: true,
    },
  ],
  projects: [
    // {
    //   title: "project name",
    //   description: "description of the project",
    //   technologies: ["technology 1", "technology 2", "technology 3"],
    //   liveLink: "link to live project",
    //   githubLink: "link to github project",
    //   image: "link or path to image in public folder",
    // },
    {
      title: "NEAT Algorithm",
      description:
        "This project leverages the NEAT (NeuroEvolution of Augmenting Topologies) algorithm to develop an AI agent capable of playing the Flappy Bird game autonomously. The AI agent evolves through generations, learning to improve its gameplay by optimizing neural network topologies and weights.",
      technologies: [
        "NEAT Algo",
        "Python",
        "Pygame",
        "Numpy",
        "Matplotlib",
        "Graphviz",
      ],
      githubLink: "https://github.com/bluekitsune-sad/Neat-Algorithm-",
      image:
        "https://github.com/bluekitsune-sad/Neat-Algorithm-/blob/main/flappyStillWasContinueing.PNG?raw=true",
    },
  ],
  certifications: [
    // {
    // title: "certification name",
    // date: "date of certification",
    // description: "description of the certification",
    // credentialId: "no online credential available",
    // url: "link to credential if available",
    // },
    {
      title: "MERN Stack Certification",
      date: "Mar 2020",
      description:
        "Certification demonstrating knowledge of MERN Stack fundamentals. Includes MongoDB, Express.js, React, ReactNative, FireBase and Node.js.",
      // credentialId: "",
      // url: "",
    },
    {
      title: "MS Office Certification",
      date: "Mar 2019",
      description: "Certification demonstrating knowledge Ms Office tools.",
    },
    {
      title: "More Certification on LinkedIn",
      date: "",
      description:
        "Due to the number of certifications, I have added them on LinkedIn.",
    },
  ],
};
