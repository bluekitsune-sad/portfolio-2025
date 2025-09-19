"use client";

export default function ProjectsCard() {
  return (
    <div className="bg-card text-card-foreground rounded-[var(--radius-lg)] border p-6 md:p-8 shadow-sm">
      <h2 className="text-2xl md:text-3xl font-semibold">
        My Personal Projects
      </h2>
      <p className="mt-4 text-sm md:text-base text-muted-foreground">
        A selection of things I've built.
      </p>
    </div>
  );
}
