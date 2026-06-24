"use client";

import { motion, useReducedMotion, useInView, useMotionValue, animate, AnimatePresence } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const heroSlides = [
  { img: "/templates/kids-education/hero-slide-1.jpg", tag: "Creative Arts", title: "Where Every Child\nBecomes an Artist" },
  { img: "/templates/kids-education/hero-slide-2.jpg", tag: "STEM Learning", title: "Coding, Science &\nMath Adventures" },
  { img: "/templates/kids-education/hero-slide-3.jpg", tag: "Social & Play",  title: "Growing Together\nThrough Play" },
];

const EASE_OUT = [0.23, 1, 0.32, 1] as const;

const stats = [
  { numeric: 50, suffix: "+", label: "Creative Classes" },
  { numeric: 2000, suffix: "+", label: "Kids Enrolled", format: (n: number) => n >= 1000 ? `${(n / 1000).toFixed(n % 1000 === 0 ? 0 : 1).replace(/\.0$/, "")},000` : String(n) },
  { numeric: null, display: "Ages 3–12", label: "All Levels Welcome" },
  { numeric: 8, suffix: "", label: "Expert Teachers" },
];

function CountUp({ to, suffix = "", format, duration = 1.2 }: { to: number; suffix?: string; format?: (n: number) => string; duration?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const count = useMotionValue(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(count, to, {
      duration,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => {
        if (ref.current) {
          const rounded = Math.round(v);
          ref.current.textContent = (format ? format(rounded) : String(rounded)) + suffix;
        }
      },
    });
    return controls.stop;
  }, [inView]);

  return <span ref={ref}>0{suffix}</span>;
}

export default function Hero() {
  const shouldReduce = useReducedMotion();
  const [heroIdx, setHeroIdx] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setHeroIdx((i) => (i + 1) % heroSlides.length), 6000);
    return () => clearInterval(id);
  }, []);

  return (
    <>
      {/* Hero */}
      <section className="relative pt-28 pb-0 overflow-hidden text-center">
        <div className="mx-auto max-w-6xl px-6">

          {/* Badge */}
          <motion.div
            initial={shouldReduce ? { opacity: 0 } : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2, ease: EASE_OUT }}
            className="flex justify-center mb-6"
          >
            <span className="inline-flex items-center justify-center bg-[var(--color-primary)] rounded-full px-5 py-2.5 text-xs font-bold uppercase tracking-wider leading-none">
              Creative Academy
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={shouldReduce ? { opacity: 0 } : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2, delay: 0.05, ease: EASE_OUT }}
            className="text-4xl sm:text-7xl md:text-8xl font-bold leading-[1.15] sm:leading-none tracking-tight mx-auto"
            style={{ fontFamily: "var(--font-heading)", maxWidth: "24ch" }}
          >
            Discover the World of{" "}
            <span className="text-[var(--color-primary)]">Creative Learning</span>
          </motion.h1>

          {/* Subtext */}
          <motion.p
            initial={shouldReduce ? { opacity: 0 } : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2, delay: 0.1, ease: EASE_OUT }}
            className="mt-6 text-base sm:text-lg text-[var(--color-text-muted)] max-w-xl mx-auto leading-relaxed"
          >
            50+ fun and creative classes for kids aged 3 to 12. From coding to art, science to music - every class is an adventure.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={shouldReduce ? { opacity: 0 } : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2, delay: 0.15, ease: EASE_OUT }}
            className="flex flex-wrap justify-center gap-3 mt-8"
          >
            <a
              href="#classes"
              className="bg-[var(--color-text-main)] text-white rounded-full px-8 py-3.5 text-sm font-bold hover:brightness-110 active:scale-[0.97] transition-all duration-150"
            >
              Explore Classes
            </a>
            <a
              href="#enroll"
              className="bg-white border border-black/15 rounded-full px-8 py-3.5 text-sm font-bold hover:bg-black/5 active:scale-[0.97] transition-all duration-150"
            >
              Enroll Today
            </a>
          </motion.div>
        </div>

        {/* Hero image + stats unified block */}
        <motion.div
          initial={shouldReduce ? { opacity: 0 } : { opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3, delay: 0.2, ease: EASE_OUT }}
          className="mt-12 px-6 max-w-6xl mx-auto"
        >
          <div className="rounded-3xl overflow-hidden shadow-xl">
            {/* Hero banner - sliding */}
            <div className="aspect-square md:aspect-[16/8] relative overflow-hidden">
              <AnimatePresence>
                <motion.div
                  key={heroIdx}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 1.2, ease: "easeInOut" }}
                  className="absolute inset-0"
                >
                  <img
                    src={heroSlides[heroIdx].img}
                    alt={heroSlides[heroIdx].title}
                    className="absolute w-full h-[160%] top-[-30%] md:h-full md:top-0 object-cover"
                  />
                  {/* Dark overlay */}
                  <div className="absolute inset-0 bg-black/35" />
                  {/* Slide text */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
                    <span className="inline-flex items-center justify-center bg-[var(--color-primary)] rounded-full px-5 py-2.5 text-xs font-bold uppercase tracking-wider leading-none mb-4">
                      {heroSlides[heroIdx].tag}
                    </span>
                    <p
                      className="text-white text-2xl sm:text-5xl md:text-6xl font-bold leading-tight sm:leading-none"
                      style={{ fontFamily: "var(--font-heading)" }}
                    >
                      {heroSlides[heroIdx].title.split("\n").map((line, i) => (
                        <span key={i} className="block">{line}</span>
                      ))}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Now Enrolling badge */}
              <div className="absolute top-3 right-3 sm:top-5 sm:right-5 z-10 inline-flex items-center justify-center bg-[var(--color-secondary)] text-white rounded-full px-3 py-1.5 sm:px-5 sm:py-2.5 text-[10px] sm:text-xs font-bold uppercase tracking-wide leading-none shadow-md">
                Now Enrolling
              </div>

              {/* Dots */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex gap-1.5">
                {heroSlides.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setHeroIdx(i)}
                    className={`h-1.5 rounded-full transition-all duration-300 ${i === heroIdx ? "w-5 bg-white" : "w-1.5 bg-white/50"}`}
                  />
                ))}
              </div>
            </div>

            {/* Stats strip */}
            <div className="bg-[var(--color-primary)] grid grid-cols-2 lg:grid-cols-4">
              {stats.map((stat, idx) => (
                <div key={idx} className="py-5 sm:py-8 px-4 sm:px-6 text-center border-r border-black/10 last:border-r-0 [&:nth-child(2)]:border-r-0 lg:[&:nth-child(2)]:border-r border-b [&:nth-child(3)]:border-b-0 [&:nth-child(4)]:border-b-0 lg:border-b-0">
                  <p
                    className="text-2xl sm:text-4xl font-bold leading-none"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    {stat.numeric !== null && stat.numeric !== undefined && !shouldReduce ? (
                      <CountUp to={stat.numeric} suffix={stat.suffix ?? ""} format={stat.format} />
                    ) : (
                      stat.display ?? `${stat.format ? stat.format(stat.numeric!) : stat.numeric}${stat.suffix ?? ""}`
                    )}
                  </p>
                  <p className="mt-1 text-xs font-semibold uppercase tracking-wider opacity-60">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>
    </>
  );
}
