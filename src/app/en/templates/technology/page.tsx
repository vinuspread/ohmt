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
      <Footer />
    </TemplateWrapper>
  )
}
