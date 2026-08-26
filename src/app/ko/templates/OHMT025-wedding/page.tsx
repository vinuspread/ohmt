import { TemplateWrapper } from "./_components/TemplateWrapper";
import themeData from "./theme.json";

import Navbar from "./_components/layout/Navbar";
import Hero from "./_components/sections/Hero";
import BrandStory from "./_components/sections/BrandStory";
import Featured from "./_components/sections/Featured";
import HowItWorks from "./_components/sections/HowItWorks";
import Footer from "./_components/layout/Footer";

export default function TemplatePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "OHMT 웨딩 포토그래피",
    "description": "자연스러운 순간과 섬세한 구도로 결혼식의 하루를 기록하는 웨딩 포토그래피 스튜디오입니다.",
    "url": "https://ohmt.site/ko/templates/OHMT025-wedding",
    "telephone": "+1-512-555-0199",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "100 Congress Ave",
      "addressLocality": "Austin",
      "addressRegion": "TX",
      "postalCode": "78701",
      "addressCountry": "US"
    }
  };

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
          <BrandStory />
          <HowItWorks />
          <Featured />
        </main>
        <p className="text-center text-[11px] leading-relaxed text-neutral-400 px-6 py-6">이 페이지는 실제 고객사나 운영 중인 업체가 아닌 OHMT의 웹사이트 디자인 템플릿 데모입니다. 표시된 브랜드명, 인물, 후기, 연락처와 성과 수치는 예시 콘텐츠입니다.</p>
        <Footer />
      </TemplateWrapper>
    </>
  );
}
