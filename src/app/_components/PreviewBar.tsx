"use client";

import { useState, Suspense } from "react";
import { usePathname, useSearchParams } from "next/navigation";

type Device = "desktop" | "tablet" | "mobile";

const DEVICES: { id: Device; label: string; width: number | null }[] = [
  { id: "desktop", label: "Desktop", width: null },
  { id: "tablet", label: "Tablet", width: 768 },
  { id: "mobile", label: "Mobile", width: 390 },
];

function MonitorIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="3" width="20" height="14" rx="2" />
      <path d="M8 21h8M12 17v4" />
    </svg>
  );
}

function TabletIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="4" y="2" width="16" height="20" rx="2" />
      <circle cx="12" cy="18" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="6" y="2" width="12" height="20" rx="2" />
      <circle cx="12" cy="18" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

const ICONS = {
  desktop: <MonitorIcon />,
  tablet: <TabletIcon />,
  mobile: <PhoneIcon />,
};

function PreviewBarInner({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const isIframe = searchParams.get("iframe") === "1";
  const [device, setDevice] = useState<Device>("desktop");

  if (isIframe) {
    return <>{children}</>;
  }

  const active = DEVICES.find((d) => d.id === device)!;

  return (
    <>
      {/* Preview bar */}
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
            <span className="hidden sm:inline">{d.label}</span>
            {d.width && (
              <span className={`text-[10px] ${device === d.id ? "text-zinc-500" : "text-zinc-600"}`}>
                {d.width}px
              </span>
            )}
          </button>
        ))}
      </div>

      {/* Content area */}
      {device === "desktop" ? (
        <>{children}</>
      ) : (
        <div className="fixed inset-0 pt-11 bg-zinc-900 flex justify-center overflow-hidden">
          {/* device frame */}
          <div
            className="relative h-full flex flex-col"
            style={{
              width: active.width!,
              maxWidth: "100%",
            }}
          >
            <iframe
              key={device}
              src={`${pathname}?iframe=1`}
              className="w-full flex-1 bg-white"
              style={{
                border: "none",
                boxShadow: "0 0 0 1px rgba(255,255,255,0.08), 0 8px 48px rgba(0,0,0,0.5)",
              }}
            />
          </div>
        </div>
      )}
    </>
  );
}

export function PreviewBar({ children }: { children: React.ReactNode }) {
  return (
    <Suspense fallback={<>{children}</>}>
      <PreviewBarInner>{children}</PreviewBarInner>
    </Suspense>
  );
}
