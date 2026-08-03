"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import Script from "next/script";
import { MessageCircle } from "lucide-react";

interface KakaoChannel {
  chat: (options: { channelPublicId: string }) => void;
}

interface KakaoSDK {
  init: (jsKey: string) => void;
  isInitialized: () => boolean;
  Channel: KakaoChannel;
}

declare global {
  interface Window {
    Kakao?: KakaoSDK;
  }
}

const KAKAO_JS_KEY = process.env.NEXT_PUBLIC_KAKAO_JS_KEY;
const KAKAO_CHANNEL_ID = process.env.NEXT_PUBLIC_KAKAO_CHANNEL_ID;

const FOOTER_GAP = 16;
const LIFT_DELAY = 150;

export function KakaoChatButton() {
  const pathname = usePathname();
  const [sdkReady, setSdkReady] = useState(false);
  const [liftY, setLiftY] = useState(0);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const isHiddenRoute =
    pathname?.startsWith("/admin") ||
    pathname?.startsWith("/en/templates") ||
    pathname?.startsWith("/ko/templates") ||
    false;

  useEffect(() => {
    if (isHiddenRoute) return;

    let frame = 0;
    let debounce: ReturnType<typeof setTimeout> | null = null;
    const updateLift = () => {
      frame = 0;
      const btn = buttonRef.current;
      const footer = document.querySelector("footer");
      if (!btn || !footer) {
        setLiftY(0);
        return;
      }
      const restBottomGap = parseFloat(getComputedStyle(btn).bottom) || 0;
      const restBottomEdge = window.innerHeight - restBottomGap;
      const footerTop = footer.getBoundingClientRect().top;
      const overlap = restBottomEdge - footerTop + FOOTER_GAP;
      setLiftY(overlap > 0 ? -overlap : 0);
    };

    const scheduleUpdate = () => {
      if (debounce) clearTimeout(debounce);
      debounce = setTimeout(() => {
        if (frame) return;
        frame = requestAnimationFrame(updateLift);
      }, LIFT_DELAY);
    };

    updateLift();
    window.addEventListener("scroll", scheduleUpdate, { passive: true });
    window.addEventListener("resize", scheduleUpdate);
    return () => {
      if (frame) cancelAnimationFrame(frame);
      if (debounce) clearTimeout(debounce);
      window.removeEventListener("scroll", scheduleUpdate);
      window.removeEventListener("resize", scheduleUpdate);
    };
  }, [isHiddenRoute, pathname]);

  const handleSdkLoad = useCallback(() => {
    try {
      if (!KAKAO_JS_KEY || !window.Kakao) return;
      if (!window.Kakao.isInitialized()) {
        window.Kakao.init(KAKAO_JS_KEY);
      }
      setSdkReady(true);
    } catch {
      setSdkReady(false);
    }
  }, []);

  const handleClick = useCallback(() => {
    try {
      if (!KAKAO_CHANNEL_ID || !window.Kakao?.Channel) return;
      window.Kakao.Channel.chat({ channelPublicId: KAKAO_CHANNEL_ID });
    } catch {
      // no-op: fail silently, button stays disabled-looking if SDK misbehaves
    }
  }, []);

  const isEnabled = Boolean(KAKAO_JS_KEY && KAKAO_CHANNEL_ID && sdkReady);

  if (isHiddenRoute) return null;

  return (
    <>
      {KAKAO_JS_KEY && (
        <Script
          src="https://t1.kakaocdn.net/kakao_js_sdk/2.7.4/kakao.min.js"
          strategy="afterInteractive"
          onLoad={handleSdkLoad}
        />
      )}
      <motion.button
        ref={buttonRef}
        type="button"
        onClick={handleClick}
        disabled={!isEnabled}
        aria-label="카카오톡 상담하기"
        animate={{ y: liftY }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        whileHover={!isEnabled ? undefined : { scale: 1.05 }}
        whileTap={!isEnabled ? undefined : { scale: 0.97 }}
        className="fixed bottom-5 right-5 sm:bottom-8 sm:right-8 z-40 inline-flex items-center gap-2 rounded-full bg-[#FEE500] px-4 py-3 text-sm font-bold text-[#191919] shadow-lg shadow-black/10 disabled:cursor-not-allowed disabled:opacity-50"
      >
        <MessageCircle size={18} />
        카카오톡 상담하기
      </motion.button>
    </>
  );
}
