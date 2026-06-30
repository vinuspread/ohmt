import Link from "next/link";
import { INSTRUCTORS } from "../constants";

export default function ClassesPreview() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 border-b border-[var(--color-border)]">
      <div className="relative border-r border-[var(--color-border)] min-h-[50vh]">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/templates/OHMT022-yoga/studio.jpg')" }}
        />
      </div>

      <div className="flex flex-col bg-[var(--color-bg-alt)]">
        <div className="px-8 md:px-14 lg:px-20 py-12 border-b border-[var(--color-border)]">
          <p
            className="text-[13px] tracking-[0.22em] text-[var(--color-text-muted)] mb-3 font-normal"
            style={{ fontFamily: "var(--font-body)" }}
          >
            팀 소개
          </p>
          <h2
            className="text-[clamp(2.2rem,3vw,3.4rem)] font-normal text-[var(--color-text)] leading-[1.1] tracking-[-0.02em]"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            강사진
          </h2>
        </div>

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
                  className="text-[14px] text-[var(--color-text-muted)] mt-1.5 font-normal"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  {instructor.role}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="px-8 md:px-14 lg:px-20 py-8 border-t border-[var(--color-border)]">
          <Link
            href="/ko/templates/OHMT022-yoga/about"
            className="inline-flex items-center gap-2 text-[13px] tracking-[0.18em] text-[var(--color-text)] hover:text-[var(--color-text-muted)] group transition-colors font-medium"
            style={{ fontFamily: "var(--font-body)" }}
          >
            더 알아보기
            <span className="group-hover:translate-x-1 transition-all">&rarr;</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
