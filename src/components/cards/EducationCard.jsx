"use client";

export default function EducationCard() {
  return (
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
}
