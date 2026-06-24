"use client";

import { Suspense } from "react";
import React from "react";
import Link from "next/link";
import { Header } from "../_components/layout/Header";
import { Footer } from "../_components/layout/Footer";
import theme from "../theme.json";
import { TemplateWrapper } from "../_components/TemplateWrapper";

function CosmeticAccountPageContent() {
  return (
    <TemplateWrapper theme={theme}>
      <main className="antialiased bg-[var(--color-bg)] text-black selection:bg-black selection:text-white">
        <Header />
        
        <section className="pt-48 pb-16 md:pb-32">
          <div className="max-w-[1440px] mx-auto px-6 md:px-10">
            <div className="mb-16">
              <span className="text-[0.65rem] font-bold uppercase tracking-[0.3em] text-black/40 mb-4 block">Account</span>
              <h1 className="text-[clamp(2rem,4vw,3.5rem)] font-normal tracking-tight leading-[1.1]">
                Welcome back.
              </h1>
            </div>

            <div className="grid md:grid-cols-2 gap-16 max-w-[800px]">
              <div className="space-y-8">
                <div className="space-y-4">
                  <label className="block text-[0.72rem] font-bold uppercase tracking-[0.15em]">Email</label>
                  <input type="email" placeholder="your@email.com" className="w-full px-6 py-4 bg-white border border-black/10 outline-none focus:border-black transition-colors text-sm" />
                </div>
                <div className="space-y-4">
                  <label className="block text-[0.72rem] font-bold uppercase tracking-[0.15em]">Password</label>
                  <input type="password" placeholder="Enter password" className="w-full px-6 py-4 bg-white border border-black/10 outline-none focus:border-black transition-colors text-sm" />
                </div>
                <button className="w-full py-6 bg-black text-white text-[0.75rem] font-bold uppercase tracking-wider hover:opacity-80 transition-all">
                  Sign In
                </button>
                <div className="text-center">
                  <button className="text-[0.72rem] text-black/40 hover:text-black underline underline-offset-4 transition-colors">
                    Create an account
                  </button>
                </div>
              </div>

              <div className="border-l border-black/10 pl-16 space-y-8">
                <h3 className="text-[0.72rem] font-bold uppercase tracking-[0.15em]">Member Benefits</h3>
                <ul className="space-y-4 text-[0.9rem] text-black/60">
                  {["Early access to new products", "Exclusive member pricing", "Free samples with every order", "Birthday reward"].map((benefit) => (
                    <li key={benefit} className="flex items-center gap-3">
                      <span className="w-1 h-1 bg-black rounded-full" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </TemplateWrapper>
  );
}


export default function CosmeticAccountPage(props: any) {
  return (
    <React.Suspense fallback={null}>
      <CosmeticAccountPageContent {...props} />
    </React.Suspense>
  );
}
