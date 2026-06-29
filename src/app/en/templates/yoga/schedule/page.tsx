import { Suspense } from "react";
import Link from "next/link";
import { TemplateWrapper } from "../_components/TemplateWrapper";
import theme from "../theme.json";
import Navbar from "../_components/Navbar";
import PageHeader from "../_components/PageHeader";
import CTASection from "../_components/CTASection";
import Footer from "../_components/Footer";
import { SCHEDULE } from "../constants";

function ScheduleContent() {
  return (
    <TemplateWrapper theme={theme}>
      <Navbar />
      <PageHeader
        title="Book a Class"
        subtitle="Plan your week and find the class that fits your rhythm."
        image="/templates/yoga/subpage-schedule.jpg"
      />

      <section className="bg-[var(--color-bg)] border-b border-[var(--color-border)]">
        {/* Header row */}
        <div className="flex items-end justify-between px-8 md:px-14 lg:px-20 pt-12 pb-10 border-b border-[var(--color-border)]">
          <h2
            className="text-[clamp(1.4rem,3vw,2.6rem)] font-light text-[var(--color-text)] leading-[1.05] tracking-[-0.02em]"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            {SCHEDULE.length} Days &middot;{" "}
            {SCHEDULE.reduce((acc, d) => acc + d.classes.length, 0)} Classes
          </h2>
          <p
            className="hidden md:block text-[14px] text-[var(--color-text-muted)]"
            style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
          >
            Schedule subject to change
          </p>
        </div>

        {/* Day columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-7 divide-y sm:divide-y-0 sm:divide-x divide-[var(--color-border)]">
          {SCHEDULE.map((day) => (
            <div key={day.day} className="flex flex-col">
              {/* Day label */}
              <div className="px-6 py-5 border-b border-[var(--color-border)] bg-[var(--color-bg-alt)]">
                <p
                  className="text-[13px] font-medium text-[var(--color-text)] tracking-[-0.01em]"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  {day.day}
                </p>
                <p
                  className="text-[11px] tracking-[0.12em] uppercase text-[var(--color-text-muted)] mt-1"
                  style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
                >
                  {day.classes.length} classes
                </p>
              </div>

              {/* Classes */}
              <div className="flex-1 divide-y divide-[var(--color-border)]">
                {day.classes.map((cls, idx) => (
                  <Link
                    key={idx}
                    href={`/en/templates/yoga/classes/${cls.slug}`}
                    className="group flex flex-col px-6 py-6 hover:bg-[var(--color-bg-alt)] transition-colors"
                  >
                    <p
                      className="text-[11px] tracking-[0.15em] uppercase text-[var(--color-text-muted)] mb-2"
                      style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
                    >
                      {cls.time}
                    </p>
                    <p
                      className="text-[15px] font-light text-[var(--color-text)] leading-[1.3] tracking-[-0.01em] group-hover:text-[var(--color-text-muted)] transition-colors"
                      style={{ fontFamily: "var(--font-body)" }}
                    >
                      {cls.name}
                    </p>
                    <p
                      className="mt-1.5 text-[14px] text-[var(--color-text-muted)]"
                      style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
                    >
                      {cls.instructor}
                    </p>
                    <span
                      className="mt-4 text-[10px] tracking-[0.18em] uppercase text-[var(--color-text)] font-medium opacity-0 group-hover:opacity-100 transition-opacity"
                      style={{ fontFamily: "var(--font-body)" }}
                    >
                      Reserve →
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <CTASection />
      <Footer />
    </TemplateWrapper>
  );
}

export default function SchedulePage() {
  return (
    <Suspense>
      <ScheduleContent />
    </Suspense>
  );
}
