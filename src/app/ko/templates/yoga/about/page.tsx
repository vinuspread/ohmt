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
            className="text-[12px] tracking-[0.25em] uppercase text-[var(--color-text-muted)] mb-6"
            style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
          >
            스토리
          </p>
          <h2
            className="text-[clamp(2.2rem,3.8vw,4rem)] font-light text-[var(--color-text)] leading-[1.2] tracking-[-0.02em]"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            움직임은
            <br />
            치유입니다
          </h2>
          <p
            className="mt-8 text-[16px] text-[var(--color-text-muted)] leading-[1.9] max-w-[400px]"
            style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
          >
            2020년에 설립된 저희 스튜디오는 누구나 요가의 변화하는 힘을
            경험할 자격이 있다는 단순한 믿음에서 시작되었습니다.
            작은 커뮤니티 클래스가 도심 속 본격적인 웰니스 공간으로 성장했습니다.
          </p>
          <p
            className="mt-5 text-[16px] text-[var(--color-text-muted)] leading-[1.9] max-w-[400px]"
            style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
          >
            자연광, 따뜻한 우드 바닥, 고요한 분위기가 완벽한 수련 환경을 만듭니다.
            모든 배경, 나이, 능력의 수강생을 환영합니다.
          </p>
          <div className="mt-10 pt-8 border-t border-[var(--color-border)] flex gap-8">
            <Link
              href="/ko/templates/OHMT022-yoga/classes"
              className="inline-flex items-center gap-2 text-[12px] tracking-[0.2em] uppercase text-[var(--color-text)] hover:text-[var(--color-text-muted)] font-medium transition-colors"
              style={{ fontFamily: "var(--font-body)" }}
            >
              클래스 보기 →
            </Link>
            <Link
              href="/ko/templates/OHMT022-yoga/schedule"
              className="inline-flex items-center gap-2 text-[12px] tracking-[0.2em] uppercase text-[var(--color-text-muted)] hover:text-[var(--color-text)] font-medium transition-colors"
              style={{ fontFamily: "var(--font-body)" }}
            >
              스케줄 보기 →
            </Link>
          </div>
        </div>
      </section>

      {/* 강사진 */}
      <section className="bg-[var(--color-bg)] border-b border-[var(--color-border)]">
        <div className="px-8 md:px-14 lg:px-20 pt-16 pb-12 border-b border-[var(--color-border)]">
          <p
            className="text-[12px] tracking-[0.25em] uppercase text-[var(--color-text-muted)] mb-5"
            style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
          >
            팀 소개
          </p>
          <h2
            className="text-[clamp(2rem,4vw,3.8rem)] font-light text-[var(--color-text)] leading-[1.05] tracking-[-0.02em]"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            강사진 소개
          </h2>
        </div>

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
