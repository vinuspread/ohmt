"use client";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export function Cta() {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const lineRefs = useRef<(HTMLDivElement | null)[]>([]);
  const counterRef = useRef<HTMLSpanElement>(null);
  const totalLines = 30;

  useGSAP(() => {
    if (!imageRef.current) return;
    const mm = gsap.matchMedia();

    mm.add("(min-width: 1024px)", () => {
      gsap.to(imageRef.current, {
        yPercent: -10,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
    });

    return () => mm.revert();
  }, []);

  useGSAP(() => {
    const mm = gsap.matchMedia();

    mm.add("(min-width: 1024px)", () => {
      const proxy = { lines: 0 };
      gsap.to(proxy, {
        lines: totalLines,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 60%",
          end: "bottom 40%",
          scrub: 1,
        },
        onUpdate: () => {
          const activeLines = Math.round(proxy.lines);
          lineRefs.current.forEach((line, i) => {
            if (!line) return;
            line.className = `w-[20px] h-[2px] transition-colors duration-200 ${
              i < activeLines ? "bg-[var(--accent)]" : "bg-[var(--border)]"
            }`;
          });
          if (counterRef.current) {
            counterRef.current.textContent = `${String(activeLines).padStart(2, "0")}/${String(totalLines).padStart(2, "0")}`;
          }
        },
      });
    });

    return () => mm.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative bg-[var(--bg)] min-h-screen overflow-hidden">
      <div
        ref={imageRef}
        className="absolute -top-[12%] -bottom-[12%] left-0 right-0 bg-cover bg-center opacity-60"
        style={{ backgroundImage: "url('/templates/OHMT028-ev/cta-bg.jpg')" }}
      />

      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 min-h-screen flex items-center">
        <div className="flex gap-12 md:gap-20 items-center">
          <div className="hidden flex-col gap-1.5 md:flex">
            {Array.from({ length: totalLines }).map((_, i) => (
              <div
                key={i}
                ref={(el) => { lineRefs.current[i] = el; }}
                className="w-[20px] h-[2px] bg-[var(--border)] transition-colors duration-200"
              />
            ))}
            <span ref={counterRef} className="font-inter text-xs tracking-[0.12em] text-[var(--text-muted)] mt-3">
              00/{String(totalLines).padStart(2, "0")}
            </span>
          </div>

          <div className="w-full max-w-[500px]">
            <p className="font-inter font-medium text-xs tracking-[0.15em] text-[var(--accent)] uppercase mb-5">
              Early Access
            </p>
            <h2 className="font-michroma text-[length:var(--text-h2)] text-[var(--text)] leading-[var(--leading-display)] tracking-[-0.02em] mb-6">
              <span className="whitespace-nowrap">Reserve your</span><br />
              <span className="whitespace-nowrap">NUBI today</span>
            </h2>
            <p className="font-inter text-sm text-[var(--text-muted)] mb-10">
              Starting from $24,900. First deliveries Q1 2026. Reserve with $300 fully refundable.
            </p>
            <button className="inline-flex items-center gap-2.5 bg-[var(--accent)] text-[var(--text-on-light)] px-8 py-4 rounded-full text-xs font-inter font-medium tracking-[0.03em] hover:bg-[var(--accent-dark)] transition-colors duration-300">
              Pre-Order Now →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
