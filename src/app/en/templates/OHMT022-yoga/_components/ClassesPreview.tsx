import Link from "next/link";
import { INSTRUCTORS } from "../constants";

export default function ClassesPreview() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2">
      {/* Left: full-bleed studio image */}
      <div className="relative min-h-[50vh]">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/templates/OHMT022-yoga/home-instructors-studio.webp')" }}
        />
      </div>

      {/* Right: instructors */}
      <div className="flex flex-col bg-white">
        {/* Header */}
        <div className="px-8 md:px-14 lg:px-20 py-12 border-b border-[var(--color-border)]">
          <p
            className="text-xs tracking-[0.22em] uppercase text-[var(--color-text-muted)] mb-3"
            style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
          >
            Meet the Team
          </p>
          <h2
            className="text-[length:var(--text-h2)] font-normal text-[var(--color-text)] leading-[var(--leading-heading)] tracking-[-0.02em]"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Our Instructors
          </h2>
        </div>

        {/* Instructor rows */}
        <div className="flex-1 divide-y divide-[var(--color-border)]">
          {INSTRUCTORS.map((instructor) => (
            <div key={instructor.id} className="flex items-center gap-6 px-8 md:px-14 lg:px-20 py-9">
              <div
                className="h-20 w-20 flex-shrink-0 rounded-full bg-cover bg-center"
                style={{ backgroundImage: `url('${instructor.image}')` }}
              />
              <div>
                <h3
                  className="text-lg font-semibold tracking-[-0.01em] text-[var(--color-text)]"
                  style={{ fontFamily: "var(--font-heading)", fontWeight: 600 }}
                >
                  {instructor.name}
                </h3>
                <p
                  className="text-sm text-[var(--color-text-muted)] mt-1.5"
                  style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
                >
                  {instructor.role}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="border-t border-[var(--color-border)] px-8 py-12 md:px-14 md:py-14 lg:px-20">
          <Link
            href="/en/templates/OHMT022-yoga/about"
            className="inline-flex border-b border-[var(--color-text)] pb-1 text-sm font-medium text-[var(--color-text)] transition-colors hover:text-[var(--color-text-muted)]"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Meet the instructors and see how we teach
          </Link>
        </div>
      </div>
    </section>
  );
}
