"use client";

import { Suspense } from "react";
import React from "react";
import { Header } from "../_components/layout/Header";
import { Footer } from "../_components/layout/Footer";
import { motion } from "framer-motion";

import theme from "../theme.json";
import { TemplateWrapper } from "../_components/TemplateWrapper";

function PortfolioManifestoPageContent() {
    return (
      <TemplateWrapper theme={theme}>
        <main className="antialiased min-h-screen bg-white selection:bg-[var(--color-accent)] selection:text-white pb-16 md:pb-32">
            <Header />
            <div className="pt-48 pb-16 px-6 max-w-[1440px] mx-auto">
                <div className="flex flex-col gap-24">
                    <div className="space-y-4 border-b border-black/10 pb-12">
                        <span className="text-[13px] font-black tracking-tight text-[var(--color-accent)] uppercase block">Chapter 01</span>
                        <h1 className="text-7xl md:text-[10vw] font-black tracking-tighter leading-[1.1] uppercase not-italic">Manifesto</h1>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-start">
                        <div className="lg:col-span-8 space-y-20">
                            <h2 className="text-[4vw] font-black tracking-tighter leading-[1.1] uppercase">
                                Radical <span className="text-[var(--color-accent)]">Simplification</span> <br /> 
                                as a form of <br /> 
                                <span className="not-italic">Visual Truth</span>.
                            </h2>
                            <div className="space-y-8 text-xl font-medium leading-[1.4] max-w-2xl text-black/60">
                                <p>
                                    We believe that in an age of infinite noise, the most powerful tool is silence. Our practice is dedicated to removing the non-essential until only the core identity remains.
                                </p>
                                <p>
                                    Every pixel must have a purpose. Every interaction must evoke an emotion. We do not just build interfaces; we architect digital environments that breathe.
                                </p>
                            </div>
                        </div>
                        <div className="lg:col-span-4 bg-[var(--color-bg-secondary)] aspect-[3/4] overflow-hidden p-12 flex flex-col justify-between">
                            <span className="text-[13px] font-black tracking-[0.4em] uppercase opacity-20">Oh My Template laboratory // 2025</span>
                            <div className="space-y-4">
                                <div className="w-12 h-[1px] bg-black" />
                                <p className="text-[13px] font-black tracking-widest uppercase leading-[1.4]">
                                    01. Clarity <br />
                                    02. Intent <br />
                                    03. Emotion <br />
                                    04. Sustainability
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </main>
      </TemplateWrapper>
);
}


export default function PortfolioManifestoPage(props: any) {
  return (
    <React.Suspense fallback={null}>
      <PortfolioManifestoPageContent {...props} />
    </React.Suspense>
  );
}
