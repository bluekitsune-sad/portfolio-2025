"use client";

import AnimatedBox from "../AnimatedBox";
import personalProfile from "@/data/personal";
import { MdAlternateEmail } from "react-icons/md";
// import { BsWhatsapp } from "react-icons/bs";
import { MdOutlineContentCopy } from "react-icons/md";

export default function AnimatedContactHeaderBox() {
  const contactOptions = [
    // {
    //   label: "Mobile / WhatsApp",
    //   value: personalProfile?.contact?.phone,
    //   icon: <BsWhatsapp className="size-6 text-green-500" />,
    //   link: personalProfile?.contact?.whatsapp,
    // },
    {
      label: "Email",
      value: personalProfile?.contact?.email,
      icon: "",
      link: personalProfile?.contact?.email,
    },
  ];

  return (
    <AnimatedBox className="col-span-5 row-span-2 p-0">
      <div className="p-8 space-y-5">
        <h2 className="text-4xl font-medium leading-tight flex items-center gap-3">
          <MdAlternateEmail className="size-8 text-muted-foreground" /> Contact
          Me
        </h2>
        <div className="grid grid-cols-1 gap-2">
          {contactOptions.map((option, idx) => (
            <div
              key={idx}
              className="flex items-center gap-3 p-2 rounded hover:bg-accent transition group cursor-pointer"
            >
              <a
                href={option.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 flex-1"
                title={option.label}
              >
                <span className="text-xl">{option.icon}</span>
                <span className="truncate">{option.value}</span>
              </a>
              <button
                className="ml-2 p-1 rounded hover:bg-muted transition cursor-pointer"
                title={`Copy ${option.label}`}
                onClick={() => {
                  if (option.value) navigator.clipboard.writeText(option.value);
                }}
              >
                <MdOutlineContentCopy className="size-6 text-muted-foreground" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </AnimatedBox>
  );
}
