"use client";
import { useEffect } from "react";

export const SmoothScroll = () => {
  useEffect(() => {
    let lenis: { raf: (time: number) => void; destroy: () => void } | undefined;
    import("lenis").then(({ default: Lenis }) => {
      lenis = new Lenis({ lerp: 0.08, smoothWheel: true });
      const raf = (time: number) => { lenis!.raf(time); requestAnimationFrame(raf); };
      requestAnimationFrame(raf);
    });
    return () => lenis?.destroy();
  }, []);
  return null;
};
