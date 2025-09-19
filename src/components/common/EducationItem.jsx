const MapPin = (props) => (
  <span {...props} aria-hidden="true">
    📍
  </span>
);
import CurrentBadge from "../ui/CurrentBadge";

export default function EducationItem({ education }) {
  const {
    degreeTitle,
    institution,
    location,
    dateRange,
    topics = [],
    current,
  } = education || {};

  return (
    <div className="relative">
      {current ? (
        <CurrentBadge className="absolute top-0 right-0 bg-primary text-primary-foreground" />
      ) : null}
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-lg font-semibold text-foreground">
            {degreeTitle}
          </h3>
          <p className="text-muted-foreground">{institution}</p>
        </div>
      </div>
      <div className="flex justify-between py-2">
        <div className="flex items-center text-muted-foreground text-sm">
          <MapPin className="size-4 mr-1" />
          {location}
        </div>
        <span className="bg-muted text-muted-foreground px-2 py-1 rounded text-xs">
          {dateRange}
        </span>
      </div>
      {topics.length > 0 && (
        <ul className="list-disc list-inside text-foreground">
          {topics.map((achievement, index) => (
            <li key={index}>{achievement}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
