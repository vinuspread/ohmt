"use client";
import { useEffect, useState } from "react";

export function TemplateWrapper({ children }: { children: React.ReactNode }) {
  const [animationComplete, setAnimationComplete] = useState(false);

  useEffect(() => {
    const prefersReducedMotion =
      typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const timer = setTimeout(() => setAnimationComplete(true), prefersReducedMotion ? 0 : 800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      style={{
        opacity: animationComplete ? 1 : 0,
        transition: "opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1)",
      }}
    >
      {children}
    </div>
  );
}
