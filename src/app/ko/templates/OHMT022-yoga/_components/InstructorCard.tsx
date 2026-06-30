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
          className="text-[12px] tracking-tight uppercase text-[var(--color-text-muted)] mb-3"
          style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
        >
          {instructor.role}
        </p>
        <h3
          className="text-[20px] font-normal text-[var(--color-text)] tracking-[-0.01em]"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          {instructor.name}
        </h3>
        <p
          className="mt-4 text-[14px] text-[var(--color-text-muted)] leading-[1.85]"
          style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
        >
          {instructor.bio}
        </p>
      </div>
    </div>
  );
}
