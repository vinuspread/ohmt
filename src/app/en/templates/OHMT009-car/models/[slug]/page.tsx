"use client";
import React from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { ChevronLeft } from "lucide-react";
import { Header } from "../../_components/layout/Header";
import { Footer } from "../../_components/layout/Footer";
import theme from "../../theme.json";
import { TemplateWrapper } from "../../_components/TemplateWrapper";

const models = [
  {
    slug: "ev9",
    name: "EV9",
    type: "All-Electric SUV",
    range: "530km",
    power: "402hp",
    acceleration: "5.3s",
    topSpeed: "200km/h",
    img: "/templates/OHMT009-car/ev9-model.png",
    description: "An all-electric flagship SUV that seamlessly crosses between city life and nature. With spacious 7-passenger seating and outstanding range, you can journey anywhere without hesitation.",
    features: ["Forward Collision-Avoidance Assist", "Lane Keeping Assist", "Smart Cruise Control", "Surround View Monitor", "Highway Driving Assist 2"],
  },
  {
    slug: "gt7",
    name: "GT7",
    type: "Performance Sedan",
    range: "480km",
    power: "615hp",
    acceleration: "3.5s",
    topSpeed: "260km/h",
    img: "/templates/OHMT009-car/hero-2.jpg",
    description: "A high-performance electric sedan that brings racetrack-tested performance to your daily drive. Dual Motor AWD and adaptive suspension turn every road into a circuit.",
    features: ["Dual Motor AWD", "Electronic Controlled Suspension", "Track Mode", "Carbon Ceramic Brakes", "Sports Bucket Seats"],
  },
  {
    slug: "x5",
    name: "X5",
    type: "Luxury SUV",
    range: "510km",
    power: "355hp",
    acceleration: "5.8s",
    topSpeed: "210km/h",
    img: "/templates/OHMT009-car/hero-3.jpg",
    description: "A premium SUV where class-transcending luxury meets electric innovation. Panoramic glass roof and magician seating complete comfort for all passengers.",
    features: ["Panoramic Sunroof", "Massage Function Seats", "23-Speaker Premium Audio", "Head-Up Display", "Rear Seat Entertainment"],
  },
  {
    slug: "s3",
    name: "S3",
    type: "Compact Executive",
    range: "460km",
    power: "295hp",
    acceleration: "6.1s",
    topSpeed: "195km/h",
    img: "/templates/OHMT009-car/car-1.jpg",
    description: "A smart compact sedan for the urban businessman. Stay ahead of busy routines with agile handling and advanced connectivity.",
    features: ["Wireless Smartphone Connection", "Auto Parking Assist", "Voice Recognition Control", "Built-In Cam", "OTA Software Updates"],
  },
];

function CarModelDetailContent({ params }: { params: { slug: string } }) {
  const model = models.find((m) => m.slug === params.slug);

  if (!model) {
    return (
      <>
        <Header />
        <TemplateWrapper theme={theme}>
          <main className="min-h-screen bg-black pt-32 text-center text-white/40">
            <p>Model not found.</p>
            <Link href="/en/templates/OHMT009-car/models" className="mt-6 inline-block text-sm underline">Back to Models</Link>
          </main>
        </TemplateWrapper>
      </>
    );
  }

  return (
    <>
      <Header />
      <TemplateWrapper theme={theme}>
        <main className="antialiased bg-black text-white selection:bg-[var(--theme-accent)] selection:text-black">
          {/* Hero */}
          <div className="relative w-full aspect-[16/9] md:aspect-[21/9] overflow-hidden">
            <img src={model.img} alt={model.name} className="w-full h-full object-cover opacity-70" />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
            <div className="absolute bottom-8 left-0 right-0 max-w-[var(--theme-container)] mx-auto px-5 md:px-[var(--theme-gutter)]">
              <span className="text-[0.62rem] font-bold uppercase tracking-[0.3em] text-[var(--theme-accent)] mb-3 block">Our Lineup</span>
              <h1 className="text-[clamp(3rem,8vw,7rem)] font-bold tracking-[-0.04em] leading-none mb-2">{model.name}</h1>
              <p className="text-[0.8rem] uppercase tracking-[0.2em] text-white/50">{model.type}</p>
            </div>
          </div>

          {/* Breadcrumb */}
          <div className="max-w-[var(--theme-container)] mx-auto px-5 md:px-[var(--theme-gutter)] pt-8 pb-2">
            <Link href="/en/templates/OHMT009-car/models" className="inline-flex items-center gap-1.5 text-[0.72rem] uppercase tracking-[0.2em] text-white/30 hover:text-white transition-colors">
              <ChevronLeft size={13} />Back to Models
            </Link>
          </div>

          {/* Stats */}
          <section className="max-w-[var(--theme-container)] mx-auto px-5 md:px-[var(--theme-gutter)] py-16 md:py-24">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/10">
              {[
                { label: "Range", value: model.range },
                { label: "Power", value: model.power },
                { label: "0-100 km/h", value: model.acceleration },
                { label: "Top Speed", value: model.topSpeed },
              ].map((stat) => (
                <div key={stat.label} className="bg-black p-8 md:p-12">
                  <div className="text-[clamp(1.8rem,3vw,2.8rem)] font-bold text-[var(--theme-accent)] mb-2">{stat.value}</div>
                  <div className="text-[0.68rem] uppercase tracking-[0.2em] text-white/40">{stat.label}</div>
                </div>
              ))}
            </div>
          </section>

          {/* Description + Features */}
          <section className="max-w-[var(--theme-container)] mx-auto px-5 md:px-[var(--theme-gutter)] pb-24 grid md:grid-cols-2 gap-16 md:gap-24">
            <div>
              <span className="text-[0.62rem] font-bold uppercase tracking-[0.3em] text-[var(--theme-accent)] mb-5 block">Model Overview</span>
              <p className="text-[1rem] text-white/70 leading-[1.9]">{model.description}</p>
            </div>
            <div>
              <span className="text-[0.62rem] font-bold uppercase tracking-[0.3em] text-[var(--theme-accent)] mb-5 block">Key Features</span>
              <ul className="space-y-4">
                {model.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-4 text-[0.9rem] text-white/70 border-b border-white/10 pb-4">
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--theme-accent)] flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* CTA */}
          <section className="border-t border-white/10 py-16 text-center">
            <Link
              href="/en/templates/OHMT009-car/configure"
              className="inline-block bg-[var(--theme-accent)] text-black text-[0.75rem] font-bold uppercase tracking-[0.2em] px-12 py-5 hover:opacity-85 transition-opacity"
            >
              Configure {model.name}
            </Link>
          </section>

          <Footer />
        </main>
      </TemplateWrapper>
    </>
  );
}

export default function Page() {
  const routerParams = useParams();
  const slug = (routerParams?.slug || "") as string;
  return (
    <React.Suspense fallback={null}>
      <CarModelDetailContent params={{ slug }} />
    </React.Suspense>
  );
}