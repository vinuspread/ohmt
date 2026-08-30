import Link from "next/link";
import { INSTRUCTORS } from "../constants";

export default function ClassesPreview() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2">
      <div className="relative min-h-[50vh]">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/templates/OHMT022-yoga/home-instructors-studio.webp')" }}
        />
      </div>

      <div className="flex flex-col bg-white">
        <div className="px-8 md:px-14 lg:px-20 py-12 border-b border-[var(--color-border)]">
          <p
            className="mb-3 text-sm font-medium tracking-normal text-[var(--color-text-muted)]"
            style={{ fontFamily: "var(--font-body)" }}
          >
            강사진
          </p>
          <h2
            className="text-[length:var(--text-h2)] font-medium text-[var(--color-text)] leading-[var(--leading-heading)] tracking-normal"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            함께하는 강사들
          </h2>
        </div>

        <div className="flex-1 divide-y divide-[var(--color-border)]">
          {INSTRUCTORS.map((instructor) => (
            <div key={instructor.id} className="flex items-center gap-6 px-8 md:px-14 lg:px-20 py-9">
              <div
                className="h-20 w-20 flex-shrink-0 rounded-full bg-cover bg-center"
                style={{ backgroundImage: `url('${instructor.image}')` }}
              />
              <div>
                <h3
                  className="text-lg font-semibold tracking-normal text-[var(--color-text)]"
                  style={{ fontFamily: "var(--font-heading)", fontWeight: 600 }}
                >
                  {instructor.name}
                </h3>
                <p
                  className="text-sm text-[var(--color-text-muted)] mt-1.5 font-normal"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  {instructor.role}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="border-t border-[var(--color-border)] px-8 py-12 md:px-14 md:py-14 lg:px-20">
          <Link
            href="/ko/templates/OHMT022-yoga/about"
            className="inline-flex border-b border-[var(--color-text)] pb-1 text-sm font-medium tracking-normal text-[var(--color-text)] transition-colors hover:text-[var(--color-text-muted)]"
            style={{ fontFamily: "var(--font-body)" }}
          >
            강사진과 수업 방식 보기
          </Link>
        </div>
      </div>
    </section>
  );
}
