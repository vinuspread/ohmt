import Link from "next/link";
import { INSTRUCTORS } from "../constants";

export default function ClassesPreview() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 border-b border-[var(--color-border)]">
      {/* Left: full-bleed studio image */}
      <div className="relative border-r border-[var(--color-border)] min-h-[50vh]">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/templates/OHMT022-yoga/studio.jpg')" }}
        />
      </div>

      {/* Right: instructors */}
      <div className="flex flex-col bg-[var(--color-bg-alt)]">
        {/* Header */}
        <div className="px-8 md:px-14 lg:px-20 py-12 border-b border-[var(--color-border)]">
          <p
            className="text-[13px] tracking-[0.22em] uppercase text-[var(--color-text-muted)] mb-3"
            style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
          >
            Meet the Team
          </p>
          <h2
            className="text-[clamp(2.2rem,3vw,3.4rem)] font-normal text-[var(--color-text)] leading-[1.1] tracking-[-0.02em]"
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
                className="w-24 h-24 rounded-full bg-cover bg-center flex-shrink-0"
                style={{ backgroundImage: `url('${instructor.image}')` }}
              />
              <div>
                <p
                  className="text-[18px] font-normal text-[var(--color-text)] tracking-[-0.01em]"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  {instructor.name}
                </p>
                <p
                  className="text-[14px] text-[var(--color-text-muted)] mt-1.5"
                  style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
                >
                  {instructor.role}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="px-8 md:px-14 lg:px-20 py-8 border-t border-[var(--color-border)]">
          <Link
            href="/en/templates/OHMT022-yoga/about"
            className="inline-flex items-center gap-2 text-[13px] tracking-[0.18em] uppercase text-[var(--color-text)] hover:text-[var(--color-text-muted)] group transition-colors font-medium"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Learn More
            <span className="group-hover:translate-x-1 transition-all">&rarr;</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
