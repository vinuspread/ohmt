import { TemplateWrapper } from "./_components/TemplateWrapper";
import theme from "./theme.json";
import Header from './_components/Header'
import Hero from './_components/Hero'
import Features from './_components/Features'
import TechDesign from './_components/TechDesign'
import SpecShowcase from './_components/SpecShowcase'
import Pricing from './_components/Pricing'
import BlogNews from './_components/BlogNews'
import Footer from './_components/Footer'

export default function TechnologyTemplatePage() {
  return (
    <TemplateWrapper theme={theme}>
      <Header />
      <main>
        <Hero />
        <Features />
        <TechDesign />
        <SpecShowcase />
        <Pricing />
        <BlogNews />
      </main>
      <p className="text-center text-[11px] leading-relaxed text-neutral-400 px-6 py-6">이 페이지는 실제 고객사나 운영 중인 업체가 아닌 OHMT의 웹사이트 디자인 템플릿 데모입니다. 표시된 브랜드명, 인물, 후기, 연락처와 성과 수치는 예시 콘텐츠입니다.</p>
      <Footer />
    </TemplateWrapper>
  )
}
