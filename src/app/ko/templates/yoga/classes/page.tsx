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
        title="클래스"
        subtitle="당신의 마음에 울리는 수련을 찾아보세요. 다이내믹한 플로우부터 고요한 명상까지, 모든 레벨을 위한 다양한 클래스를 제공합니다."
        image="/templates/OHMT022-yoga/subpage-classes.jpg"
      />

      <section className="bg-[var(--color-bg)] border-b border-[var(--color-border)]">
        {/* 헤더 row */}
        <div className="flex items-end justify-between px-8 md:px-14 lg:px-20 pt-12 pb-10 border-b border-[var(--color-border)]">
          <h2
            className="text-[clamp(1.6rem,3.5vw,3rem)] font-light text-[var(--color-text)] leading-[1.05] tracking-[-0.02em]"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            {CLASSES.length}개 클래스
          </h2>
          <Link
            href="/ko/templates/OHMT022-yoga/schedule"
            className="hidden md:inline-flex items-center gap-2 text-[12px] tracking-[0.2em] uppercase text-[var(--color-text)] hover:text-[var(--color-text-muted)] font-medium transition-colors"
            style={{ fontFamily: "var(--font-body)" }}
          >
            스케줄 보기 →
          </Link>
        </div>

        {/* 클래스 그리드 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 divide-x-0 sm:divide-x divide-[var(--color-border)]">
          {CLASSES.map((cls, idx) => {
            const pl = idx === 0 ? "pl-8 md:pl-14 lg:pl-20" : "pl-6";
            const pr = idx === CLASSES.length - 1 ? "pr-8 md:pr-14 lg:pr-20" : "pr-6";
            return <ClassCard key={cls.id} yogaClass={cls} textClassName={`${pl} ${pr} py-8`} />;
          })}
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
