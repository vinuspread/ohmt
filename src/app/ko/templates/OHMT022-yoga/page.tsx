import { Suspense } from "react";
import { TemplateWrapper } from "./_components/TemplateWrapper";
import theme from "./theme.json";
import Navbar from "./_components/Navbar";
import Hero from "./_components/Hero";
import IntroSection from "./_components/IntroSection";
import BenefitsSection from "./_components/BenefitsSection";
import ClassesPreview from "./_components/ClassesPreview";
import InstructorsSection from "./_components/InstructorsSection";
import TestimonialsSection from "./_components/TestimonialsSection";
import CTASection from "./_components/CTASection";
import Footer from "./_components/Footer";

function HomeContent() {
  return (
    <TemplateWrapper theme={theme}>
      <Navbar />
      <Hero />
      <IntroSection />
      <BenefitsSection />
      <ClassesPreview />
      <InstructorsSection />
      <TestimonialsSection />
      <CTASection />
      <p className="text-center text-[11px] leading-relaxed text-neutral-400 px-6 py-6">이 페이지는 실제 고객사나 운영 중인 업체가 아닌 OHMT의 웹사이트 디자인 템플릿 데모입니다. 표시된 브랜드명, 인물, 후기, 연락처와 성과 수치는 예시 콘텐츠입니다.</p>
      <Footer />
    </TemplateWrapper>
  );
}

export default function HomePage() {
  return (
    <Suspense>
      <HomeContent />
    </Suspense>
  );
}
