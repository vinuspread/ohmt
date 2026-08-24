"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { MessageCircle } from "lucide-react";

const KAKAO_CHANNEL_ID = process.env.NEXT_PUBLIC_KAKAO_CHANNEL_ID;

const FOOTER_GAP = 16;

export function KakaoChatButton() {
  const pathname = usePathname();
  const buttonRef = useRef<HTMLAnchorElement>(null);
  const rawLiftY = useMotionValue(0);
  const liftY = useSpring(rawLiftY, { stiffness: 55, damping: 16, mass: 1 });
  const isHiddenRoute =
    pathname?.startsWith("/admin") ||
    pathname?.startsWith("/en/templates") ||
    pathname?.startsWith("/ko/templates") ||
    false;

  useEffect(() => {
    if (isHiddenRoute) return;

    let frame = 0;
    const updateLift = () => {
      frame = 0;
      const btn = buttonRef.current;
      const footer = document.querySelector("footer");
      if (!btn || !footer) {
        rawLiftY.set(0);
        return;
      }
      const restBottomGap = parseFloat(getComputedStyle(btn).bottom) || 0;
      const restBottomEdge = window.innerHeight - restBottomGap;
      const footerTop = footer.getBoundingClientRect().top;
      const overlap = restBottomEdge - footerTop + FOOTER_GAP;
      rawLiftY.set(overlap > 0 ? -overlap : 0);
    };

    const scheduleUpdate = () => {
      if (frame) return;
      frame = requestAnimationFrame(updateLift);
    };

    updateLift();
    window.addEventListener("scroll", scheduleUpdate, { passive: true });
    window.addEventListener("resize", scheduleUpdate);
    return () => {
      if (frame) cancelAnimationFrame(frame);
      window.removeEventListener("scroll", scheduleUpdate);
      window.removeEventListener("resize", scheduleUpdate);
    };
  }, [isHiddenRoute, pathname, rawLiftY]);

  const isEnabled = Boolean(KAKAO_CHANNEL_ID);

  if (isHiddenRoute || !isEnabled) return null;

  return (
    <motion.a
      ref={buttonRef}
      href={`https://pf.kakao.com/${KAKAO_CHANNEL_ID}/chat`}
      target="_blank"
      rel="noopener noreferrer"
      referrerPolicy="no-referrer"
      aria-label="카카오톡 상담하기"
      style={{ y: liftY }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.97 }}
      className="fixed bottom-5 right-5 sm:bottom-8 sm:right-8 z-40 inline-flex items-center gap-2 rounded-full bg-[#FEE500] px-4 py-3 text-sm font-bold text-[#191919] shadow-lg shadow-black/10"
    >
      <MessageCircle size={18} />
      카카오톡 상담하기
    </motion.a>
  );
}
