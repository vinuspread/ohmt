import { Suspense } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { TemplateWrapper } from "../../_components/TemplateWrapper";
import theme from "../../theme.json";
import Navbar from "../../_components/Navbar";
import ClassesPreview from "../../_components/ClassesPreview";
import CTASection from "../../_components/CTASection";
import Footer from "../../_components/Footer";
import { CLASSES } from "../../constants";

function ClassDetailContent({ slug }: { slug: string }) {
  const yogaClass = CLASSES.find((c) => c.slug === slug);

  if (!yogaClass) {
    notFound();
  }

  return (
    <TemplateWrapper theme={theme}>
      <Navbar />

      {/* Hero split: image left, detail right */}
      <section className="grid grid-cols-1 md:grid-cols-2 border-b border-[var(--color-border)]">
        {/* Left: full-bleed image */}
        <div className="relative min-h-[60vh] md:min-h-[90vh] border-b md:border-b-0 md:border-r border-[var(--color-border)]">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url('${yogaClass.image}')` }}
          />
        </div>

        {/* Right: details */}
        <div className="flex flex-col justify-between bg-[var(--color-bg)]">
          {/* Back nav */}
          <div className="px-8 md:px-14 pt-36 md:pt-44 pb-8 border-b border-[var(--color-border)]">
            <Link
              href="/en/templates/OHMT022-yoga/classes"
              className="text-[11px] tracking-[0.2em] uppercase text-[var(--color-text-muted)] hover:text-[var(--color-text)] font-medium transition-colors"
              style={{ fontFamily: "var(--font-body)" }}
            >
              ← Back to Classes
            </Link>
          </div>

          {/* Main info */}
          <div className="flex-1 px-8 md:px-14 py-12">
            <p
              className="text-[12px] tracking-[0.25em] uppercase text-[var(--color-text-muted)] mb-6"
              style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
            >
              {yogaClass.level} · {yogaClass.duration}
            </p>
            <h1
              className="text-[clamp(2.2rem,3.8vw,4rem)] font-light text-[var(--color-text)] leading-[1.08] tracking-[-0.02em]"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              {yogaClass.name}
            </h1>
            <p
              className="mt-3 text-[16px] text-[var(--color-text-muted)]"
              style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
            >
              {yogaClass.subtitle}
            </p>
            <p
              className="mt-8 text-[15px] text-[var(--color-text-muted)] leading-[1.9] max-w-[420px]"
              style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
            >
              {yogaClass.longDescription}
            </p>
          </div>

          {/* Benefits */}
          <div className="px-8 md:px-14 py-10 border-t border-[var(--color-border)] bg-[var(--color-bg-alt)]">
            <p
              className="text-[12px] tracking-[0.22em] uppercase text-[var(--color-text-muted)] mb-6"
              style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
            >
              Benefits
            </p>
            <ul className="space-y-3">
              {yogaClass.benefits.map((benefit) => (
                <li
                  key={benefit}
                  className="flex items-center gap-4 text-[14px] text-[var(--color-text-muted)]"
                  style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
                >
                  <span className="w-1 h-1 bg-[var(--color-text-muted)] rounded-full flex-shrink-0" />
                  {benefit}
                </li>
              ))}
            </ul>
          </div>

          {/* Book CTA */}
          <div className="px-8 md:px-14 py-8 border-t border-[var(--color-border)]">
            <Link
              href="/en/templates/OHMT022-yoga/schedule"
              className="inline-flex items-center gap-2 text-[12px] tracking-[0.2em] uppercase text-[var(--color-text)] hover:text-[var(--color-text-muted)] font-medium transition-colors"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Reserve This Class →
            </Link>
          </div>
        </div>
      </section>

      <section className="border-b border-[var(--color-border)]">
        <ClassesPreview />
      </section>

      <CTASection />
      <Footer />
    </TemplateWrapper>
  );
}

export default async function ClassDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  return (
    <Suspense>
      <ClassDetailContent slug={slug} />
    </Suspense>
  );
}
