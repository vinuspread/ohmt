import type { Metadata } from "next";
import { TemplateWrapper } from "./_components/TemplateWrapper";
import { Navbar } from "./_components/Navbar";
import { Hero } from "./_components/sections/Hero";
import { Solutions } from "./_components/sections/Solutions";
import { Partners } from "./_components/sections/Partners";
import { Expertise } from "./_components/sections/Expertise";
import { Consulting } from "./_components/sections/Consulting";
import { Cta } from "./_components/sections/Cta";
import { Footer } from "./_components/sections/Footer";

export const metadata: Metadata = {
  title: "홈 - OHMT 프리미엄 피트니스 스튜디오",
};

export default function HomePage() {
  return (
    <TemplateWrapper>
      <Navbar />
      <Hero />
      <Solutions />
      <Partners />
      <Expertise />
      <Consulting />
      <Cta />
      <p className="text-center text-[11px] leading-relaxed text-neutral-400 px-6 py-6">이 페이지는 실제 고객사나 운영 중인 업체가 아닌 OHMT의 웹사이트 디자인 템플릿 데모입니다. 표시된 브랜드명, 인물, 후기, 연락처와 성과 수치는 예시 콘텐츠입니다.</p>
      <Footer />
    </TemplateWrapper>
  );
}
