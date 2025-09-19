const MapPin = (props) => (
  <span {...props} aria-hidden="true">
    📍
  </span>
);
import SkillTag from "../ui/SkillTag";
import CurrentBadge from "../ui/CurrentBadge";

export default function ExperienceItem({ experience = {}, sm = false }) {
  return (
    <div className="rounded-lg relative">
      {experience.current ? (
        <CurrentBadge className="absolute top-0 right-0 bg-primary text-primary-foreground" />
      ) : null}
      <div>
        {sm ? (
          <h3 className="text-lg font-semibold text-foreground">
            {experience.title}
          </h3>
        ) : (
          <h3 className="text-xl font-semibold text-foreground">
            {experience.title}
          </h3>
        )}
        <div className="flex justify-between items-start mb-2">
          <p className="text-muted-foreground">{experience.company}</p>
          <span className="text-zinc-300 p-1 px-2 rounded text-xs">
            {experience.dateRange}
          </span>
        </div>
      </div>
      <div className="flex items-center text-muted-foreground text-sm mb-4">
        <MapPin className="w-4 h-4 mr-1" />
        {experience.location}
      </div>
      <p className="text-muted-foreground mb-4">{experience.description}</p>
      <div className="flex flex-wrap gap-1">
        {(Array.isArray(experience.skills) ? experience.skills : []).map(
          (skill, index) => (
            <SkillTag skill={skill} size="md" key={index} />
          )
        )}
      </div>
    </div>
  );
}
