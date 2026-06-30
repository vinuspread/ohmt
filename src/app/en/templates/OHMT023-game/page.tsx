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
      <Footer />
    </TemplateWrapper>
  );
}
