import { TemplateWrapper } from "./_components/TemplateWrapper";
import theme from "./theme.json";
import Navbar from "./_components/Navbar";
import Hero from "./_components/Hero";
import FeaturedGames from "./_components/FeaturedGames";
import AboutStudio from "./_components/AboutStudio";
import GenreGrid from "./_components/GenreGrid";
import PressAwards from "./_components/PressAwards";
import LatestNews from "./_components/LatestNews";
import CareersBanner from "./_components/CareersBanner";
import Footer from "./_components/Footer";

export default function GamePage() {
  return (
    <TemplateWrapper theme={theme}>
      <Navbar />
      <Hero />
      <FeaturedGames />
      <AboutStudio />
      <GenreGrid />
      <PressAwards />
      <LatestNews />
      <CareersBanner />
      <p className="text-center text-[11px] leading-relaxed text-neutral-400 px-6 py-6">이 페이지는 실제 고객사나 운영 중인 업체가 아닌 OHMT의 웹사이트 디자인 템플릿 데모입니다. 표시된 브랜드명, 인물, 후기, 연락처와 성과 수치는 예시 콘텐츠입니다.</p>
      <Footer />
    </TemplateWrapper>
  );
}
