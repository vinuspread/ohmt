import { Suspense } from "react";
import Link from "next/link";
import { TemplateWrapper } from "../_components/TemplateWrapper";
import theme from "../theme.json";
import Navbar from "../_components/Navbar";
import PageHeader from "../_components/PageHeader";
import ClassCard from "../_components/ClassCard";
import CTASection from "../_components/CTASection";
import Footer from "../_components/Footer";
import { CLASSES } from "../constants";

function ClassesContent() {
  return (
    <TemplateWrapper theme={theme}>
      <Navbar />
      <PageHeader
        title="Our Classes"
        subtitle="Discover a practice that resonates with you. From dynamic flows to meditative stillness, we offer a range of classes for every level."
        image="/templates/OHMT022-yoga/subpage-classes.jpg"
      />

      <section className="bg-[var(--color-bg)] border-b border-[var(--color-border)]">
        {/* Header row */}
        <div className="flex items-end justify-between px-8 md:px-14 lg:px-20 pt-12 pb-10 border-b border-[var(--color-border)]">
          <h2
            className="text-[clamp(1.6rem,3.5vw,3rem)] font-light text-[var(--color-text)] leading-[1.05] tracking-[-0.02em]"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            {CLASSES.length} Classes Available
          </h2>
          <Link
            href="/en/templates/OHMT022-yoga/schedule"
            className="hidden md:inline-flex items-center gap-2 text-[12px] tracking-[0.2em] uppercase text-[var(--color-text)] hover:text-[var(--color-text-muted)] font-medium transition-colors"
            style={{ fontFamily: "var(--font-body)" }}
          >
            View Schedule →
          </Link>
        </div>

        {/* Class grid - 4 cols desktop, 2 cols tablet, 1 col mobile */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 divide-x-0 sm:divide-x divide-[var(--color-border)]">
          {CLASSES.map((cls) => (
            <ClassCard key={cls.id} yogaClass={cls} />
          ))}
        </div>
      </section>

      <CTASection />
      <Footer />
    </TemplateWrapper>
  );
}

export default function ClassesPage() {
  return (
    <Suspense>
      <ClassesContent />
    </Suspense>
  );
}
