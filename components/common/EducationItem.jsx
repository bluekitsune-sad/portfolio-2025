import { MapPin } from "lucide-react";
import { CurrentBadge } from "../ui/CurrentBadge";

export const EducationItem = ({ education }) => {
  const { degreeTitle, institution, location, dateRange, topics, current } =
    education;

  return (
    <div className="relative">
      {current && (
        <CurrentBadge className="absolute top-0 right-0 bg-teal-500 text-zinc-900" />
      )}
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-lg font-semibold text-zinc-100">{degreeTitle}</h3>
          <p className="text-zinc-300">{institution}</p>
        </div>
      </div>
      <div className="flex justify-between py-2">
        <div className="flex items-center text-zinc-400 text-sm">
          <MapPin className="w-4 h-4 mr-1" />
          {location}
        </div>
        <span className="bg-zinc-700 text-zinc-300 px-2 py-1 rounded text-xs">
          {dateRange}
        </span>
      </div>
      {topics.length > 0 && (
        <ul className="list-disc list-inside text-zinc-300">
          {topics.map((topic, index) => (
            <li key={index}>{topic}</li>
          ))}
        </ul>
      )}
    </div>
  );
};