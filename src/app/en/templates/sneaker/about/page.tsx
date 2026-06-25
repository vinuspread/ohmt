"use client";
import React, { Suspense } from "react";
import Link from "next/link";
import { ArrowRight, Leaf, Shield, Zap, Users } from "lucide-react";
import { TemplateWrapper } from "../_components/TemplateWrapper";
import theme from "../theme.json";
import { Header } from "../_components/layout/Header";
import { Footer } from "../_components/layout/Footer";

const values = [
  { icon: <Leaf size={28} />, title: "Sustainability First", desc: "Every material we source meets strict eco-certification standards. Our supply chain is transparent from raw fibre to finished sole." },
  { icon: <Shield size={28} />, title: "Built to Last", desc: "We back every pair with a 6-month structural warranty because we design shoes that are meant to outlast trends." },
  { icon: <Zap size={28} />, title: "Minimal Waste", desc: "Our factories run on 80% renewable energy and we offset the remaining 20% through verified carbon programs." },
  { icon: <Users size={28} />, title: "Fair Labour", desc: "Every worker in our supply chain earns a living wage. We audit our factories twice a year and publish the results." },
];

const team = [
  { name: "Marco Vinus", role: "Founder & CEO", img: "/templates/sneaker/blog-1.jpg" },
  { name: "Yuna Park", role: "Head of Design", img: "/templates/sneaker/blog-2.jpg" },
  { name: "Tobias Krenn", role: "Head of Materials", img: "/templates/sneaker/blog-3.jpg" },
  { name: "Sofia Reyes", role: "Brand Director", img: "/templates/sneaker/blog-4.jpg" },
];

function AboutPageContent() {
  return (
    <TemplateWrapper theme={theme}>
      <div className="bg-white text-black font-sans">
        <Header />

        {/* Hero */}
        <section className="pt-16 md:pt-32 pb-20 bg-black text-white">
          <div className="max-w-[1440px] mx-auto px-6">
            <span className="text-[0.7rem] font-bold uppercase tracking-[0.25em] text-white/40 block mb-6">Our Story</span>
            <h1 className="text-[clamp(3rem,7vw,6rem)] font-black tracking-[-0.03em] uppercase leading-[1.1] max-w-3xl">
              Premium<br /><span className="text-red-600">footwear.</span><br />Real values.
            </h1>
            <p className="mt-8 text-[1rem] text-white/60 leading-[1.4] max-w-[520px]">
              Vinus was founded in 2019 with one mission: to prove that premium footwear and ethical production are not mutually exclusive.
            </p>
          </div>
        </section>

        {/* Story */}
        <section className="py-12 md:py-24 border-b border-black/10">
          <div className="max-w-[1440px] mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-[0.7rem] font-bold uppercase tracking-[0.2em] text-black/40 block mb-5">The Beginning</span>
              <h2 className="text-[2rem] font-black uppercase tracking-tight leading-tight mb-6">Started in a<br />small workshop.</h2>
              <p className="text-[0.9rem] text-black/60 leading-[1.4] mb-4">
                Our founder Marco spent three years working in traditional shoemaking before he realised the industry had a fundamental problem - quality and ethics were always traded off against each other.
              </p>
              <p className="text-[0.9rem] text-black/60 leading-[1.4] mb-8">
                In 2019 he opened a small workshop in Lisbon, partnering directly with tanneries that share our commitment to responsible sourcing. Today Vinus ships to 40+ countries, but the same care goes into every pair.
              </p>
              <Link href="/en/templates/sneaker/shop-all" className="inline-flex items-center gap-3 bg-black text-white text-[0.82rem] font-bold uppercase tracking-[0.08em] px-8 py-4 hover:bg-black/80 transition-colors">
                Shop the Collection <ArrowRight size={16} />
              </Link>
            </div>
            <div className="aspect-[4/5] overflow-hidden bg-[var(--color-bg-secondary)]">
              <img loading="lazy" src="/templates/sneaker/hero-main.jpg" alt="Vinus workshop" className="w-full h-full object-cover" />
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-12 md:py-24 bg-[var(--color-bg-secondary)]">
          <div className="max-w-[1440px] mx-auto px-6">
            <span className="text-[0.7rem] font-bold uppercase tracking-[0.2em] text-black/40 block mb-4">What We Stand For</span>
            <h2 className="text-[2rem] font-black uppercase tracking-tight leading-tight mb-14">Our values.</h2>
            <div className="grid md:grid-cols-4 gap-6">
              {values.map((v, i) => (
                <div key={i} className="bg-white p-8 border border-black/5">
                  <span className="text-black/30 block mb-5">{v.icon}</span>
                  <h3 className="text-[1rem] font-black uppercase mb-3">{v.title}</h3>
                  <p className="text-[0.82rem] text-black/60 leading-[1.4]">{v.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-12 md:py-24 border-b border-black/10">
          <div className="max-w-[1440px] mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-0 divide-x divide-black/10">
              {[
                { num: "2019", label: "Founded" },
                { num: "40+", label: "Countries shipped" },
                { num: "98%", label: "Customer satisfaction" },
                { num: "80%", label: "Renewable energy used" },
              ].map((s, i) => (
                <div key={i} className="py-10 px-8 text-center">
                  <p className="text-[3rem] font-black tracking-[-0.03em] leading-none mb-2">{s.num}</p>
                  <p className="text-[0.75rem] text-black/50 uppercase tracking-[0.1em] font-bold">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="py-12 md:py-24 bg-white">
          <div className="max-w-[1440px] mx-auto px-6">
            <span className="text-[0.7rem] font-bold uppercase tracking-[0.2em] text-black/40 block mb-4">The People</span>
            <h2 className="text-[2rem] font-black uppercase tracking-tight leading-tight mb-14">Meet the team.</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {team.map((m, i) => (
                <div key={i} className="group">
                  <div className="aspect-square overflow-hidden bg-[var(--color-bg-secondary)] mb-4">
                    <img loading="lazy" src={m.img} alt={m.name} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
                  </div>
                  <p className="text-[0.9rem] font-black uppercase">{m.name}</p>
                  <p className="text-[0.78rem] text-black/50">{m.role}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Suspense fallback={null}><Footer /></Suspense>
      </div>
    </TemplateWrapper>
  );
}


export default function AboutPage(props: any) {
  return (
    <React.Suspense fallback={null}>
      <AboutPageContent {...props} />
    </React.Suspense>
  );
}
