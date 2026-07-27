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
        title="스튜디오 소개"
        subtitle="마음챙김 움직임과 개인적 성장을 위한 안식처입니다."
        image="/templates/OHMT022-yoga/subpage-about.jpg"
      />

      {/* 스토리 - 분할 그리드 */}
      <section className="grid grid-cols-1 md:grid-cols-2 border-b border-[var(--color-border)]">
        {/* 이미지 */}
        <div
          className="relative min-h-[60vh] md:min-h-[80vh] bg-cover bg-center border-b md:border-b-0 md:border-r border-[var(--color-border)]"
          style={{ backgroundImage: "url('/templates/OHMT022-yoga/studio.jpg')" }}
        />

        {/* 텍스트 */}
        <div className="flex flex-col justify-end px-8 md:px-14 lg:px-20 py-16 md:py-24 bg-[var(--color-bg-alt)]">
          <p
            className="text-xs tracking-[0.25em] uppercase text-[var(--color-text-muted)] mb-6"
            style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
          >
            스튜디오 이야기</p>
          <h2
            className="text-[length:var(--text-h1)] font-light text-[var(--color-text)] leading-[var(--leading-heading)] tracking-[-0.02em]"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            움직임으로<br />
            몸을 돌봅니다.</h2>
          <p
            className="mt-8 text-base text-[var(--color-text-muted)] leading-loose max-w-[400px]"
            style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
          >
            OHMT는 2020년 작은 요가 모임으로 시작했습니다. 처음 수련하는 분도 편안하게 참여할 수 있는 수업을 꾸준히 열며, 지금의 도심 속 스튜디오로 자리 잡았습니다.</p>
          <p
            className="mt-5 text-base text-[var(--color-text-muted)] leading-loose max-w-[400px]"
            style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
          >
            자연광이 드는 공간과 따뜻한 나무 바닥에서 편안하게 수련할 수 있습니다. 경험과 나이에 관계없이 누구나 자신의 속도로 참여할 수 있습니다.</p>
          <div className="mt-10 pt-8 border-t border-[var(--color-border)] flex gap-8">
            <Link
              href="/ko/templates/OHMT022-yoga/classes"
              className="inline-flex items-center gap-2 text-xs tracking-[0.2em] uppercase text-[var(--color-text)] hover:text-[var(--color-text-muted)] font-medium transition-colors"
              style={{ fontFamily: "var(--font-body)" }}
            >
              클래스 보기 →
            </Link>
            <Link
              href="/ko/templates/OHMT022-yoga/schedule"
              className="inline-flex items-center gap-2 text-xs tracking-[0.2em] uppercase text-[var(--color-text-muted)] hover:text-[var(--color-text)] font-medium transition-colors"
              style={{ fontFamily: "var(--font-body)" }}
            >
              주간 일정 보기 →</Link>
          </div>
        </div>
      </section>

      {/* 강사진 */}
      <section className="bg-[var(--color-bg)] border-b border-[var(--color-border)]">
        <div className="px-8 md:px-14 lg:px-20 pt-16 pb-12 border-b border-[var(--color-border)]">
          <p
            className="text-xs tracking-[0.25em] uppercase text-[var(--color-text-muted)] mb-5"
            style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
          >
            강사진</p>
          <h2
            className="text-[length:var(--text-h1)] font-light text-[var(--color-text)] leading-[var(--leading-heading)] tracking-[-0.02em]"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            함께 수련하는 강사들</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
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
