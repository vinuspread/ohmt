"use client";
import React from "react";
import { Header } from "./_components/Header";
import { SmoothScroll } from "./_components/SmoothScroll";
import { Hero } from "./_components/Hero";
import { Features } from "./_components/Features";
import { FeaturedDrinks } from "./_components/FeaturedDrinks";
import { MenuPreview } from "./_components/MenuPreview";
import { OurStory } from "./_components/OurStory";
import { Reserve } from "./_components/Reserve";
import { Locations } from "./_components/Locations";
import { InstagramGrid } from "./_components/InstagramGrid";
import { Footer } from "./_components/Footer";
import theme from "./theme.json";
import { TemplateWrapper } from "./_components/TemplateWrapper";

function CoffeePageContent() {
  return (
    <>
      <SmoothScroll />
      <Header />
      <TemplateWrapper theme={theme}>
      <main className="antialiased min-h-screen bg-[var(--color-bg)] text-[var(--color-text)]">
        <Hero />
        <Features />
        <FeaturedDrinks />
        <MenuPreview />
        <OurStory />
        <Reserve />
        <Locations />
        <InstagramGrid />
      </main>
      <Footer />
      </TemplateWrapper>
    </>
  );
}

export default function CoffeePage() {
  return <CoffeePageContent />;
}
