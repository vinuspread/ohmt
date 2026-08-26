import { Navbar } from "./_components/Navbar";
import { Hero } from "./_components/sections/Hero";
import { Usp } from "./_components/sections/Usp";
import { Performance } from "./_components/sections/Performance";
import { Story } from "./_components/sections/Story";
import { DesignDetail } from "./_components/sections/DesignDetail";
import { Cta } from "./_components/sections/Cta";
import { Footer } from "./_components/sections/Footer";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <Hero />
      <Usp />
      <Performance />
      <Story />
      <DesignDetail />
      <Cta />
      <p className="text-center text-[11px] leading-relaxed text-neutral-400 px-6 py-6">이 페이지는 실제 고객사나 운영 중인 업체가 아닌 OHMT의 웹사이트 디자인 템플릿 데모입니다. 표시된 브랜드명, 인물, 후기, 연락처와 성과 수치는 예시 콘텐츠입니다.</p>
      <Footer />
    </>
  );
}
