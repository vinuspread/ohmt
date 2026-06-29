"use client";
import { useState, useEffect } from "react";

export function TemplateWrapper({ children }: { children: React.ReactNode }) {
  const [animationComplete, setAnimationComplete] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setAnimationComplete(true), 800);
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
