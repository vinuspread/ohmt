import { TemplateWrapper } from "./_components/TemplateWrapper";
import themeData from "./theme.json";
import Navbar from "./_components/layout/Navbar";
import Hero from "./_components/sections/Hero";
import Classes from "./_components/sections/Classes";
import Mission from "./_components/sections/Mission";
import PhotoSection from "./_components/sections/PhotoSection";
import Schedule from "./_components/sections/Schedule";
import Testimonials from "./_components/sections/Testimonials";
import Footer from "./_components/layout/Footer";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "키즈 아카데미 - OHMT",
  "description": "놀이로 시작하는 배움. 코딩부터 미술, 과학 실험까지 50가지 이상의 어린이 창의 클래스를 경험해보세요.",
  "url": "https://ohmt.site/ko/templates/OHMT024-kids-education",
};

export default function KidsEducationPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <TemplateWrapper theme={themeData}>
        <Navbar />
        <main>
          <Hero />
          <Classes />
          <Mission />
          <PhotoSection />
          <Schedule />
          <Testimonials />
        </main>
        <p className="text-center text-[11px] leading-relaxed text-neutral-400 px-6 py-6">이 페이지는 실제 고객사나 운영 중인 업체가 아닌 OHMT의 웹사이트 디자인 템플릿 데모입니다. 표시된 브랜드명, 인물, 후기, 연락처와 성과 수치는 예시 콘텐츠입니다.</p>
        <Footer />
      </TemplateWrapper>
    </>
  );
}
