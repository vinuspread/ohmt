// src/app/templates/car/-components/sections/StatsRow.tsx
"use client";

import React, { useEffect, useState, useRef } from "react";
import { useInView } from "framer-motion";

interface CountUpProps {
  value: string;
  duration?: number;
}

const CountUp = ({ value, duration = 1.5 }: CountUpProps) => {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (!inView) return;

    const target = parseFloat(value);
    if (isNaN(target)) return;

    const start = 0;
    const end = target;
    const totalFrames = Math.round(duration * 60);
    let frame = 0;

    const counter = setInterval(() => {
      frame++;
      const progress = frame / totalFrames;
      const easeProgress = 1 - Math.pow(1 - progress, 3); // Cubic Ease Out
      const current = start + (end - start) * easeProgress;

      setDisplayValue(current);

      if (frame >= totalFrames) {
        clearInterval(counter);
        setDisplayValue(end);
      }
    }, 1000 / 60);

    return () => clearInterval(counter);
  }, [inView, value, duration]);

  const isFloat = value.includes(".");
  const formatted = isFloat ? displayValue.toFixed(1) : Math.round(displayValue).toString();

  return <span ref={ref}>{formatted}</span>;
};

const stats = [
  { val: "530", unit: "km", label: "Range (WLTP)" },
  { val: "4.2", unit: "s", label: "0–100 km/h" },
  { val: "22", unit: "min", label: "10–80% Charge" },
  { val: "800", unit: "V", label: "Architecture" },
];

export const StatsRow = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 border-y border-[var(--theme-border)] bg-black">
      {stats.map((s) => (
        <div key={s.label} className="py-12 text-center border-r border-[var(--theme-border)] last:border-r-0">
          <span className="block text-[clamp(2rem,3.5vw,3.5rem)] font-bold tracking-[-0.03em] leading-none mb-2 text-white">
            <CountUp value={s.val} />
            <span className="text-[0.6em] text-[var(--theme-accent)] font-bold ml-1">{s.unit}</span>
          </span>
          <span className="text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-[var(--theme-text-muted)]">
            {s.label}
          </span>
        </div>
      ))}
    </div>
  );
};
