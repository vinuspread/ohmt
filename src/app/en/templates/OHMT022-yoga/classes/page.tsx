import type { Metadata } from "next";
import Footer from "../_components/Footer";
import Navbar from "../_components/Navbar";
import { TemplateWrapper } from "../_components/TemplateWrapper";
import { CLASSES } from "../constants";
import theme from "../theme.json";
import ClassesExplorer from "./_components/ClassesExplorer";
import SubpageHero from "../_components/SubpageHero";

export const metadata: Metadata = { title: "Classes - PRANA", description: "Compare four mindful movement classes by pace, level, and time." };

export default function ClassesPage() {
  return (
    <TemplateWrapper theme={theme}>
      <Navbar />
      <main className="prana-subpage bg-white pt-16 md:pt-[76px]">
        <SubpageHero
          eyebrow="CLASSES"
          title="Choose the way you want to move."
          description="Compare pace, guidance, and time before you choose. Every class can be adjusted to the body you bring today."
          image="/templates/OHMT022-yoga/subpage-classes-v3.webp"
          imageAlt="Three people practising yoga in a bright studio with living plants"
        />
        <ClassesExplorer classes={CLASSES} />
      </main>
      <Footer />
    </TemplateWrapper>
  );
}
