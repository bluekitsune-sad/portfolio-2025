"use client";

export default function AboutCard() {
  return (
    <div className="bg-card text-card-foreground rounded-[var(--radius-lg)] border p-6 md:p-8 shadow-sm">
      <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">
        About Me
      </h1>
      <p className="mt-3 text-base md:text-lg text-muted-foreground">
        I'm a software developer with interests across frontend and backend. I
        enjoy solving product problems and building delightful user experiences.
      </p>
      <div className="mt-6">
        <a
          href="#contact"
          className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-[var(--radius-sm)] transition-colors hover:opacity-95"
        >
          Contact me →
        </a>
      </div>
    </div>
  );
}
