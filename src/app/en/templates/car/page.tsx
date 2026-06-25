// src/app/templates/OHMT009-car/page.tsx
"use client";

import React from "react";
import { useSearchParams } from "next/navigation";
import { Header } from "./_components/layout/Header";
import { Footer } from "./_components/layout/Footer";
import { Hero } from "./_components/sections/Hero";
import { StatsRow } from "./_components/sections/StatsRow";
import { SplitSection, FullBleedSection } from "./_components/sections/FeatureGrid";
import { AppSection } from "./_components/sections/AppSection";
import { Testimonials } from "./_components/sections/Testimonials";
import { NewsSection } from "./_components/sections/NewsSection";
import theme from "./theme.json";
import { TemplateWrapper } from "./_components/TemplateWrapper";
function CarTemplateContent() {
  const searchParams = useSearchParams();
  const t = {
  "nav": {
    "models": `Models`,
    "technology": `Technology`,
    "about": `About`,
    "configure": `Configure`,
    "testDrive": `Test Drive`
  },
  "hero": {
    "badge": `New - EV9 Electric SUV`,
    "title1": `The electric`,
    "title2": `car`,
    "title3": `era is`,
    "title4": `upon us.`,
    "desc": `Zero emissions. Infinite ambition. The VINUS EV9 redefines what a luxury vehicle can be.`,
    "explore": `Explore EV9`,
    "allModels": `All Models`,
    "from": `From`
  },
  "tech": {
    "badge": `VINUS Technology`,
    "title": `Where technology\nmeets design.`,
    "desc": `Our proprietary AI platform integrates real-time road analysis, predictive suspension response, and adaptive powertrain management - delivering a driving experience that feels less engineered and more alive.`
  },
  "battery": {
    "badge": `Battery & Range`,
    "title": `Unmatched range\nand efficiency benefits.`,
    "desc": `111.2 kWh battery. 530km on a single charge. And when you do need to top up, 100km of range in under five minutes.`
  },
  "charge": {
    "badge": `Fast Charging`,
    "title": `Fast charging\nand long battery.`,
    "desc": `The 800V electrical architecture enables 350kW DC fast charging. From 10 to 80 percent in just 22 minutes. The only wait is your coffee order.`
  },
  "interior": {
    "badge": `Interior`,
    "title": `All new interior.`,
    "desc": `A 30-inch panoramic display. Haptic controls that learn your preferences. Leather-free premium materials throughout.`
  }
};
return (
    <TemplateWrapper theme={theme}>
      <main className="antialiased bg-black text-white selection:bg-[var(--theme-accent)] selection:text-black">
        <Header />
        
        <Hero />
        
        <StatsRow />
        
        <SplitSection 
          eyebrow={t.tech.badge}
          title={t.tech.title}
          desc={t.tech.desc}
          img="/templates/OHMT009-car/car-5.jpg"
        />
        
        <FullBleedSection 
          eyebrow={t.battery.badge}
          title={t.battery.title}
          desc={t.battery.desc}
          img="/templates/OHMT009-car/hero-1.jpg"
        />
        
        <SplitSection 
          eyebrow={t.charge.badge}
          title={t.charge.title}
          desc={t.charge.desc}
          img="/templates/OHMT009-car/hero-2.jpg"
          reverse
        />
        
        <AppSection />
        
        <FullBleedSection 
          eyebrow={t.interior.badge}
          title={t.interior.title}
          desc={t.interior.desc}
          img="/templates/OHMT009-car/car-3.jpg"
        />
        
        <Testimonials />
        
        <NewsSection />
        
        <Footer />
      </main>
    </TemplateWrapper>
  );
}

export default function CarTemplate() {
  return (
    <React.Suspense fallback={null}>
      <CarTemplateContent />
    </React.Suspense>
  );
}
