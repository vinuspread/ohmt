// src/app/templates/car/-components/sections/Hero.tsx
"use client";

import { useEffect, useRef, useState } from "react";
import { useSearchParams } from "next/navigation";

const HERO_VIDEO_SRC = "https://pub-10d6d534a06c495c8b45f39cfed47497.r2.dev/car-hero-bg.mp4";

export const Hero = () => {
  const searchParams = useSearchParams();
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoReady, setVideoReady] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleReady = () => {
      setVideoReady(true);
      video.play().catch(() => {});
    };

    if (video.readyState >= 4) {
      handleReady();
      return;
    }

    video.addEventListener("canplaythrough", handleReady);
    return () => video.removeEventListener("canplaythrough", handleReady);
  }, []);

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
    "title": `Where technology<br />meets design.`,
    "desc": `Our proprietary AI platform integrates real-time road analysis, predictive suspension response, and adaptive powertrain management - delivering a driving experience that feels less engineered and more alive.`
  },
  "battery": {
    "badge": `Battery & Range`,
    "title": `Unmatched range<br />and efficiency benefits.`,
    "desc": `111.2 kWh battery. 530km on a single charge. And when you do need to top up, 100km of range in under five minutes.`
  },
  "charge": {
    "badge": `Fast Charging`,
    "title": `Fast charging<br />and long battery.`,
    "desc": `The 800V electrical architecture enables 350kW DC fast charging. From 10 to 80 percent in just 22 minutes. The only wait is your coffee order.`
  },
  "interior": {
    "badge": `Interior`,
    "title": `All new interior.`,
    "desc": `A 30-inch panoramic display. Haptic controls that learn your preferences. Leather-free premium materials throughout.`
  }
};
return (
    <section className="relative h-screen min-h-[680px] overflow-hidden">
      <img
        className="absolute inset-0 w-full h-full object-cover object-[center_40%]"
        src="/templates/car/hero-main.jpg"
        alt="VINUS EV9"
      />
      <video
        ref={videoRef}
        className={`absolute inset-0 w-full h-full object-cover object-[center_40%] transition-opacity duration-700 ${videoReady ? "opacity-100" : "opacity-0"}`}
        muted
        loop
        playsInline
        preload="auto"
        poster="/templates/car/hero-main.jpg"
      >
        <source src={HERO_VIDEO_SRC} type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-[linear-gradient(105deg,rgba(10,10,10,0.75)_0%,rgba(10,10,10,0.2)_60%,transparent_100%)]"></div>
      
      <div className="absolute bottom-[42vh] left-0 right-0 max-w-[var(--theme-container)] mx-auto px-6 md:px-[var(--theme-gutter)]">
        <span className="block text-[0.65rem] font-bold uppercase tracking-[0.3em] text-[var(--theme-accent)] mb-[1.2rem]">
          {t.hero.badge}
        </span>
        <h1 className="text-[clamp(3.5rem,6.5vw,7rem)] font-bold tracking-[-0.03em] leading-[1.2] mb-[1.8rem] max-w-[1000px] text-white">
          The electric car<br />Era is <span className="text-[var(--theme-accent)]/80">upon us.</span>
        </h1>
        <p className="text-[1.05rem] text-[var(--theme-text-muted)] leading-[1.6] max-w-[440px] mb-[2.5rem] font-normal">
          {t.hero.desc}
        </p>
        
        <div className="flex gap-6 items-center">
          <button className="text-[0.68rem] font-bold uppercase tracking-[0.16em] px-8 py-[0.65rem] bg-[var(--theme-accent)] text-black hover:opacity-90 transition-all duration-300 active:scale-95">
            {t.hero.explore}
          </button>
          <button className="inline-flex items-center gap-3 text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-white hover:gap-4 transition-all duration-300">
            {t.hero.allModels} <span className="text-[1.2em] transition-transform duration-300">→</span>
          </button>
        </div>
        
        <p className="text-[0.7rem] text-[var(--theme-text-muted)] uppercase tracking-[0.2em] mt-8">
          {t.hero.from} <strong className="text-white text-base font-bold ml-1">$79,900</strong>
        </p>
      </div>
    </section>
  );
};
