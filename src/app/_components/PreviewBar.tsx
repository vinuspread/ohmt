"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

type Device = "desktop" | "tablet" | "mobile";

const DEVICES: { id: Device; label: string; width: number | null }[] = [
  { id: "desktop", label: "Desktop", width: null },
  { id: "tablet", label: "Tablet", width: 768 },
  { id: "mobile", label: "Mobile", width: 390 },
];

function MonitorIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="3" width="20" height="14" rx="2" />
      <path d="M8 21h8M12 17v4" />
    </svg>
  );
}

function TabletIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="4" y="2" width="16" height="20" rx="2" />
      <circle cx="12" cy="18" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="6" y="2" width="12" height="20" rx="2" />
      <circle cx="12" cy="18" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

const ICONS = { desktop: <MonitorIcon />, tablet: <TabletIcon />, mobile: <PhoneIcon /> };

export function PreviewBar({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [device, setDevice] = useState<Device>("desktop");
  // null = 아직 감지 중, true = iframe 내부, false = 일반 창
  const [isInIframe, setIsInIframe] = useState<boolean | null>(null);

  useEffect(() => {
    try {
      setIsInIframe(window.self !== window.top);
    } catch {
      setIsInIframe(true);
    }
  }, []);

  // iframe 내부이거나 아직 감지 중이면 템플릿 그대로 렌더
  if (isInIframe !== false) {
    return <>{children}</>;
  }

  // 일반 창: 바 + iframe
  const iframeWidth = device === "tablet" ? 768 : device === "mobile" ? 390 : null;
  const showGrayBg = device !== "desktop";

  return (
    <>
      {/* 미리보기 바 */}
      <div
        style={{ zIndex: 99999 }}
        className="fixed top-0 left-0 right-0 h-11 bg-zinc-950 border-b border-zinc-800 flex items-center justify-center gap-1"
      >
        {DEVICES.map((d) => (
          <button
            key={d.id}
            onClick={() => setDevice(d.id)}
            title={d.width ? `${d.width}px` : "Full width"}
            className={`flex items-center gap-1.5 px-3 h-7 rounded text-xs font-medium transition-all ${
              device === d.id
                ? "bg-white text-zinc-900"
                : "text-zinc-500 hover:text-zinc-200 hover:bg-zinc-800"
            }`}
          >
            {ICONS[d.id]}
            <span>{d.label}</span>
            {d.width && (
              <span className={`text-[10px] ml-0.5 ${device === d.id ? "text-zinc-400" : "text-zinc-600"}`}>
                {d.width}px
              </span>
            )}
          </button>
        ))}
      </div>

      {/* iframe 영역 */}
      <div
        className={`fixed inset-0 pt-11 flex justify-center ${showGrayBg ? "bg-zinc-800" : "bg-white"}`}
      >
        <iframe
          key={device}
          src={pathname}
          style={{
            width: iframeWidth ?? "100%",
            height: "100%",
            border: "none",
            background: "white",
            display: "block",
            ...(showGrayBg && {
              boxShadow: "0 0 0 1px rgba(255,255,255,0.06), 0 8px 40px rgba(0,0,0,0.5)",
            }),
          }}
        />
      </div>
    </>
  );
}
