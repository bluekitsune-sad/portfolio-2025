"use client";

export default function ExperienceCard() {
  return (
    <div className="bg-card text-card-foreground rounded-[var(--radius-lg)] border p-6 md:p-8 shadow-sm">
      <h2 className="text-2xl md:text-3xl font-semibold">Experience</h2>
      <ul className="mt-4 space-y-3 text-sm md:text-base">
        <li className="flex items-center justify-between"><span className="text-muted-foreground">Senior Software Engineer</span><span className="text-muted-foreground">2023 - Today</span></li>
        <li className="flex items-center justify-between"><span className="text-muted-foreground">Freelance / Independent</span><span className="text-muted-foreground">—</span></li>
      </ul>
    </div>
  );
}


