"use client";
import { useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export function Cta() {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const [activeLines, setActiveLines] = useState(0);
  const totalLines = 30;

  useGSAP(() => {
    if (!imageRef.current) return;
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
  }, []);

  useGSAP(() => {
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
        setActiveLines(Math.round(proxy.lines));
      },
    });
  }, []);

  return (
    <section ref={sectionRef} className="relative bg-[var(--bg)] min-h-screen overflow-hidden">
      <div
        ref={imageRef}
        className="absolute -top-[12%] -bottom-[12%] left-0 right-0 bg-cover bg-center opacity-60"
        style={{ backgroundImage: "url('/templates/ev/cta-bg.jpg')" }}
      />

      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 min-h-screen flex items-center">
        <div className="flex gap-12 md:gap-20 items-center">
          <div className="flex flex-col gap-1.5">
            {Array.from({ length: totalLines }).map((_, i) => (
              <div
                key={i}
                className={`w-[20px] h-[2px] transition-colors duration-200 ${
                  i < activeLines ? "bg-[var(--accent)]" : "bg-[var(--border)]"
                }`}
              />
            ))}
            <span className="font-inter text-[10px] tracking-[0.12em] text-[var(--text-muted)] mt-3">
              {String(activeLines).padStart(2, "0")}/{String(totalLines).padStart(2, "0")}
            </span>
          </div>

          <div className="max-w-[500px]">
            <p className="font-inter font-medium text-[11px] tracking-[0.15em] text-[var(--accent)] uppercase mb-5">
              Early Access
            </p>
            <h2 className="font-michroma text-[clamp(30px,4vw,54px)] text-[var(--text)] leading-[0.93] tracking-[-0.03em] mb-6">
              Reserve your<br />NUBI today
            </h2>
            <p className="font-inter text-[14px] text-[var(--text-muted)] mb-10">
              Starting from $24,900. First deliveries Q1 2026. Reserve with $300 fully refundable.
            </p>
            <button className="inline-flex items-center gap-2.5 bg-[var(--accent)] text-[var(--text-on-light)] px-8 py-4 rounded-full text-[13px] font-inter font-medium tracking-[0.03em] hover:bg-[var(--accent-dark)] transition-colors duration-300">
              Pre-Order Now →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
