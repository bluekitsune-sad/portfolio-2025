import { MapPin } from "lucide-react";
import { SkillTag } from "../ui/SkillTag";
import { CurrentBadge } from "../ui/CurrentBadge";

export const ExperienceItem = ({ experience, sm }) => (
  <div className="rounded-lg relative">
    {experience.current && (
      <CurrentBadge className="absolute top-0 right-0 bg-teal-500 text-zinc-900" />
    )}
    <div>
      <h3
        className={`font-semibold text-zinc-100 ${sm ? "text-lg" : "text-xl"}`}
      >
        {experience.title}
      </h3>
      <div className="flex justify-between items-start mb-2">
        <p className="text-zinc-300">{experience.company}</p>
        <span className="text-zinc-300 p-1 px-2 rounded text-xs">
          {experience.dateRange}
        </span>
      </div>
    </div>
    <div className="flex items-center text-zinc-400 text-sm mb-4">
      <MapPin className="w-4 h-4 mr-1" />
      {experience.location}
    </div>
    <p className="text-zinc-300 mb-4">{experience.description}</p>
    <div className="flex flex-wrap gap-1">
      {experience.skills.map((skill, index) => (
        <SkillTag skill={skill} size="md" key={index} />
      ))}
    </div>
  </div>
);