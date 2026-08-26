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
      <p className="text-center text-[11px] leading-relaxed text-neutral-400 px-6 py-6">This page is a website design template demo by OHMT, not an actual client or operating business. The brand names, people, testimonials, contact details, and performance figures shown are example content.</p>
      <Footer />
    </TemplateWrapper>
  )
}
