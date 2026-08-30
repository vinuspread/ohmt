import type { Instructor } from "../types";

interface InstructorCardProps {
  instructor: Instructor;
}

export default function InstructorCard({ instructor }: InstructorCardProps) {
  return (
    <div className="group border-r border-[var(--color-border)] last:border-r-0">
      <div className="relative aspect-[3/4] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-[800ms] ease-out scale-100 group-hover:scale-105"
          style={{ backgroundImage: `url('${instructor.image}')` }}
        />
      </div>

      <div className="px-8 py-8 border-t border-[var(--color-border)]">
        <p
          className="mb-3 text-sm font-normal tracking-normal text-[var(--color-text-muted)]"
          style={{ fontFamily: "var(--font-body)" }}
        >
          {instructor.role}
        </p>
        <h3
          className="text-xl font-medium tracking-normal text-[var(--color-text)]"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          {instructor.name}
        </h3>
        <p
          className="mt-4 text-sm text-[var(--color-text-muted)] leading-loose"
          style={{ fontFamily: "var(--font-body)" }}
        >
          {instructor.bio}
        </p>
      </div>
    </div>
  );
}
