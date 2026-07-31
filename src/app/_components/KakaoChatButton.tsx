"use client";

import { useCallback, useState } from "react";
import { usePathname } from "next/navigation";
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

export function KakaoChatButton() {
  const pathname = usePathname();
  const [sdkReady, setSdkReady] = useState(false);
  const isAdminRoute = pathname?.startsWith("/admin") ?? false;

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

  if (isAdminRoute) return null;

  return (
    <>
      {KAKAO_JS_KEY && (
        <Script
          src="https://t1.kakaocdn.net/kakao_js_sdk/2.7.4/kakao.min.js"
          strategy="afterInteractive"
          onLoad={handleSdkLoad}
        />
      )}
      <button
        type="button"
        onClick={handleClick}
        disabled={!isEnabled}
        aria-label="카카오톡 상담하기"
        className="fixed bottom-5 right-5 sm:bottom-8 sm:right-8 z-40 inline-flex items-center gap-2 rounded-full bg-[#FEE500] px-4 py-3 text-sm font-bold text-[#191919] shadow-lg shadow-black/10 transition-transform duration-200 hover:scale-105 disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:scale-100"
      >
        <MessageCircle size={18} />
        카카오톡 상담하기
      </button>
    </>
  );
}
