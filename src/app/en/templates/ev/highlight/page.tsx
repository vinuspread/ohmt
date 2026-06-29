"use client";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Navbar } from "../_components/Navbar";
import { Footer } from "../_components/sections/Footer";
import { SplitHeading } from "../_components/ui/SplitHeading";

gsap.registerPlugin(ScrollTrigger);

const features = [
  {
    label: "Range",
    heading: "280 km of city freedom.",
    body: "Engineered for real-world urban driving, NUBI delivers a full 280 km on a single charge. Enough for a week of commutes without a second thought.",
    stat: "280 km",
    image: "highlight-range.jpg",
  },
  {
    label: "Charging",
    heading: "80% charge. 30 minutes.",
    body: "NUBI supports DC fast charging up to 80 kW. Plug in while you grab coffee — and hit the road before you finish it.",
    stat: "30 min",
    image: "highlight-charge.jpg",
  },
  {
    label: "Design",
    heading: "A silhouette that turns heads.",
    body: "Seven bold colors. Signature LED lights. A body that's compact on the outside and surprisingly spacious within. NUBI was designed to be noticed.",
    stat: "7 colors",
    image: "highlight-design.jpg",
  },
  {
    label: "Interior",
    heading: "Less clutter. More cabin.",
    body: "Step inside and forget the exterior dimensions. A 10.4\" display, heated seats, and soft-touch surfaces — NUBI's cabin puts quality first.",
    stat: "10.4\" display",
    image: "highlight-interior.jpg",
  },
  {
    label: "Smart Parking",
    heading: "Parks itself. Seriously.",
    body: "Tight spots, narrow lanes, underground garages — NUBI's Smart Parking Assist handles them all. Just set it, step back, and watch.",
    stat: "Auto-park",
    image: "highlight-smart.jpg",
  },
  {
    label: "Over the Air",
    heading: "Gets better while you sleep.",
    body: "Wireless updates deliver new features automatically. Wake up to a NUBI that's smarter, faster, and more capable than the day before.",
    stat: "OTA updates",
    image: "highlight-ota.jpg",
  },
];

function FeatureBlock({ feature, index }: { feature: typeof features[0]; index: number }) {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const isRight = index % 2 === 1;

  useGSAP(() => {
    if (!contentRef.current) return;
    gsap.fromTo(
      contentRef.current.children,
      { opacity: 0, y: 24 },
      {
        opacity: 1, y: 0,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.1,
        scrollTrigger: { trigger: sectionRef.current, start: "top 65%" },
      }
    );
  }, []);

  return (
    <section ref={sectionRef} className="relative w-full min-h-screen overflow-hidden bg-[var(--bg)]">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url('/templates/ev/${feature.image}')` }}
      />
      {/* Alternate gradient direction for visual variety */}
      <div className={`absolute inset-0 ${
        isRight
          ? "bg-gradient-to-tl from-[var(--bg)] via-[var(--bg)]/55 to-[var(--bg)]/5"
          : "bg-gradient-to-t from-[var(--bg)] via-[var(--bg)]/50 to-[var(--bg)]/10"
      }`} />

      <div className={`relative z-10 w-full max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 min-h-screen flex items-end pb-16 md:pb-24 ${
        isRight ? "justify-end" : ""
      }`}>
        <div ref={contentRef} className="max-w-[540px]">
          {/* Index number instead of eyebrow label */}
          <span className="font-michroma text-[11px] tracking-[0.12em] text-[var(--text-muted)] mb-5 block">
            {String(index + 1).padStart(2, "0")} / {features.length}
          </span>
          <SplitHeading
            text={feature.heading}
            className="font-michroma text-[clamp(28px,3.5vw,52px)] text-[var(--text)] leading-[1.05] tracking-[-0.03em] mb-5"
          />
          <p className="font-inter text-[15px] text-[var(--text-muted)] leading-relaxed mb-8 max-w-[440px]">
            {feature.body}
          </p>
          <span className="font-michroma text-[clamp(32px,3.5vw,48px)] text-[var(--accent)] leading-none">
            {feature.stat}
          </span>
        </div>
      </div>
    </section>
  );
}

function StatsBar() {
  const ref = useRef<HTMLDivElement>(null);

  const stats = [
    { value: "280", unit: "km",  label: "City range"         },
    { value: "30",  unit: "min", label: "Fast charge to 80%" },
    { value: "7",   unit: "",    label: "Exterior colors"     },
    { value: "80",  unit: "kW",  label: "Max charge power"    },
  ];

  useGSAP(() => {
    gsap.fromTo(
      ref.current?.querySelectorAll(".stat-item") ?? [],
      { opacity: 0, y: 20 },
      {
        opacity: 1, y: 0, duration: 0.7, ease: "power3.out", stagger: 0.1,
        scrollTrigger: { trigger: ref.current, start: "top 70%" },
      }
    );
  }, []);

  return (
    <section className="bg-[var(--bg-alt)] border-y border-[var(--border)]">
      <div
        ref={ref}
        className="w-full max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 py-16 grid grid-cols-2 md:grid-cols-4 gap-8"
      >
        {stats.map((s) => (
          <div key={s.label} className="stat-item">
            <div className="flex items-baseline gap-1 mb-1.5">
              <span className="font-michroma text-[clamp(32px,4vw,52px)] text-[var(--text)] leading-none">
                {s.value}
              </span>
              {s.unit && (
                <span className="font-inter text-[14px] text-[var(--accent)] ml-1">{s.unit}</span>
              )}
            </div>
            <p className="font-inter text-[12px] text-[var(--text-muted)] tracking-[0.04em]">
              {s.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

function HeroBanner() {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.fromTo(
      ref.current?.children ?? [],
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.9, ease: "power3.out", stagger: 0.12, delay: 0.2 }
    );
  }, []);

  return (
    <section className="relative h-screen overflow-hidden bg-[var(--bg)]">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/templates/ev/highlight-range.jpg')" }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[var(--bg)]/20 via-transparent to-[var(--bg)]/80" />
      <div className="absolute inset-0 flex items-end">
        <div className="w-full max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 pb-16 md:pb-24">
          <div ref={ref}>
            <p className="font-inter text-[11px] tracking-[0.15em] text-[var(--accent)] uppercase mb-4">
              NUBI Electric — Highlights
            </p>
            <h1 className="font-michroma text-[clamp(40px,5.5vw,80px)] text-[var(--text)] leading-[0.95] tracking-[-0.03em] mb-5">
              Every detail.<br />Fully electric.
            </h1>
            <p className="font-inter text-[15px] text-[var(--text-muted)] max-w-[420px]">
              Six things that make NUBI worth the wait. Scroll to explore.
            </p>
          </div>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
        <div className="w-[1px] h-10 bg-[var(--text-muted)] animate-pulse" />
        <p className="font-inter text-[10px] tracking-[0.12em] text-[var(--text-muted)] uppercase">Scroll</p>
      </div>
    </section>
  );
}

function HighlightCta() {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.fromTo(
      ref.current?.children ?? [],
      { opacity: 0, y: 24 },
      {
        opacity: 1, y: 0, duration: 0.8, ease: "power3.out", stagger: 0.1,
        scrollTrigger: { trigger: ref.current, start: "top 70%" },
      }
    );
  }, []);

  return (
    <section className="bg-[var(--bg)] py-32">
      <div className="w-full max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20">
        <div ref={ref} className="max-w-[560px]">
          <p className="font-inter text-[11px] tracking-[0.15em] text-[var(--accent)] uppercase mb-4">
            Early Access
          </p>
          <SplitHeading
            text="Ready to make it yours?"
            className="font-michroma text-[clamp(28px,3.5vw,52px)] text-[var(--text)] leading-[1.05] tracking-[-0.03em] mb-5"
          />
          <p className="font-inter text-[15px] text-[var(--text-muted)] mb-10">
            Starting from $24,900. Reserve with a fully refundable $300 deposit.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="/en/templates/ev/order">
              <button className="inline-flex items-center gap-2 bg-[var(--accent)] text-[var(--text-on-light)] px-8 py-4 rounded-full font-inter font-medium text-[13px] tracking-[0.03em] hover:bg-[var(--accent-dark)] transition-colors">
                Reserve now →
              </button>
            </a>
            <a href="/en/templates/ev/specs">
              <button className="inline-flex items-center gap-2 border border-[var(--border)] text-[var(--text)] px-8 py-4 rounded-full font-inter text-[13px] tracking-[0.03em] hover:border-[var(--text-muted)] transition-colors">
                View full specs
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function HighlightPage() {
  return (
    <>
      <Navbar />
      <HeroBanner />
      {features.map((f, i) => (
        <FeatureBlock key={f.label} feature={f} index={i} />
      ))}
      <StatsBar />
      <HighlightCta />
      <Footer />
    </>
  );
}
