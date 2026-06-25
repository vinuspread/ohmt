import { Suspense } from "react";
import Link from "next/link";
import { TemplateWrapper } from "../_components/TemplateWrapper";
import theme from "../theme.json";
import Navbar from "../_components/Navbar";
import PageHeader from "../_components/PageHeader";
import InstructorCard from "../_components/InstructorCard";
import CTASection from "../_components/CTASection";
import Footer from "../_components/Footer";
import { INSTRUCTORS } from "../constants";

function AboutContent() {
  return (
    <TemplateWrapper theme={theme}>
      <Navbar />
      <PageHeader
        title="About Us"
        subtitle="A sanctuary for mindful movement and personal growth."
        image="/templates/OHMT022-yoga/subpage-about.jpg"
      />

      {/* Our Story - split grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 border-b border-[var(--color-border)]">
        {/* Left: image */}
        <div
          className="relative min-h-[60vh] md:min-h-[80vh] bg-cover bg-center border-b md:border-b-0 md:border-r border-[var(--color-border)]"
          style={{ backgroundImage: "url('/templates/OHMT022-yoga/studio.jpg')" }}
        />

        {/* Right: text */}
        <div className="flex flex-col justify-end px-8 md:px-14 lg:px-20 py-16 md:py-24 bg-[var(--color-bg-alt)]">
          <p
            className="text-[12px] tracking-[0.25em] uppercase text-[var(--color-text-muted)] mb-6"
            style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
          >
            Our Story
          </p>
          <h2
            className="text-[clamp(2.2rem,3.8vw,4rem)] font-light text-[var(--color-text)] leading-[1.08] tracking-[-0.02em]"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Movement as
            <br />
            Medicine
          </h2>
          <p
            className="mt-8 text-[16px] text-[var(--color-text-muted)] leading-[1.9] max-w-[400px]"
            style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
          >
            Founded in 2020, our studio was born from a simple belief: that
            everyone deserves access to the transformative power of yoga.
            What started as a small community class has grown into a
            full-fledged wellness sanctuary.
          </p>
          <p
            className="mt-5 text-[16px] text-[var(--color-text-muted)] leading-[1.9] max-w-[400px]"
            style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
          >
            Natural light, warm wood floors, and an atmosphere of quiet
            intention create the perfect environment for practice. We welcome
            students of all backgrounds, ages, and abilities.
          </p>
          <div className="mt-10 pt-8 border-t border-[var(--color-border)] flex gap-8">
            <Link
              href="/en/templates/OHMT022-yoga/classes"
              className="inline-flex items-center gap-2 text-[12px] tracking-[0.2em] uppercase text-[var(--color-text)] hover:text-[var(--color-text-muted)] font-medium transition-colors"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Explore Classes →
            </Link>
            <Link
              href="/en/templates/OHMT022-yoga/schedule"
              className="inline-flex items-center gap-2 text-[12px] tracking-[0.2em] uppercase text-[var(--color-text-muted)] hover:text-[var(--color-text)] font-medium transition-colors"
              style={{ fontFamily: "var(--font-body)" }}
            >
              View Schedule →
            </Link>
          </div>
        </div>
      </section>

      {/* Instructors */}
      <section className="bg-[var(--color-bg)] border-b border-[var(--color-border)]">
        {/* Header */}
        <div className="px-8 md:px-14 lg:px-20 pt-16 pb-12 border-b border-[var(--color-border)]">
          <p
            className="text-[12px] tracking-[0.25em] uppercase text-[var(--color-text-muted)] mb-5"
            style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
          >
            Our Team
          </p>
          <h2
            className="text-[clamp(2rem,4vw,3.8rem)] font-light text-[var(--color-text)] leading-[1.05] tracking-[-0.02em]"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Meet Our Instructors
          </h2>
        </div>

        {/* Instructor grid */}
        <div className="grid grid-cols-1 md:grid-cols-3">
          {INSTRUCTORS.map((instructor) => (
            <InstructorCard key={instructor.id} instructor={instructor} />
          ))}
        </div>
      </section>

      <CTASection />
      <Footer />
    </TemplateWrapper>
  );
}

export default function AboutPage() {
  return (
    <Suspense>
      <AboutContent />
    </Suspense>
  );
}
