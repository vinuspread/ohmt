"use client";

import { Monitor, Smartphone, Tablet } from "lucide-react";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";

type DeviceId = "desktop" | "tablet" | "mobile";

type Device = {
  id: DeviceId;
  label: string;
  width: number | "100%";
  height?: number;
  icon: React.ComponentType<{ size?: number }>;
};

const DEVICES: Device[] = [
  { id: "desktop", label: "Desktop", width: "100%", icon: Monitor },
  { id: "tablet", label: "Tablet", width: 768, height: 1024, icon: Tablet },
  { id: "mobile", label: "Mobile", width: 390, height: 844, icon: Smartphone },
];

const HIDE_SCROLLBAR_STYLE = `
  html,
  body {
    scrollbar-width: none;
    -ms-overflow-style: none;
  }

  html::-webkit-scrollbar,
  body::-webkit-scrollbar {
    display: none;
  }
`;

export default function DevicePreviewShell({ children }: { children: React.ReactNode }) {
  const [device, setDevice] = useState<DeviceId>("desktop");
  const [mounted, setMounted] = useState(false);
  const [isRawPreview, setIsRawPreview] = useState(false);
  const [isAlreadyFramed, setIsAlreadyFramed] = useState(false);
  const [previewSrc, setPreviewSrc] = useState("");

  useEffect(() => {
    try {
      const url = new URL(window.location.href);
      const params = new URLSearchParams(url.search);
      setIsRawPreview(params.get("preview") === "raw");
      setIsAlreadyFramed(window.self !== window.top);
      params.set("preview", "raw");
      setPreviewSrc(`${url.pathname}?${params.toString()}`);
    } catch {
      setIsAlreadyFramed(true);
    }
    setMounted(true);
  }, []);

  const activeDevice = useMemo(
    () => DEVICES.find((item) => item.id === device) ?? DEVICES[0],
    [device],
  );

  if (!mounted) {
    return <>{children}</>;
  }

  if (isRawPreview || isAlreadyFramed) {
    return (
      <>
        <style>{HIDE_SCROLLBAR_STYLE}</style>
        {children}
      </>
    );
  }

  const isDesktop = activeDevice.id === "desktop";

  return (
    <div className="min-h-dvh bg-neutral-100 text-neutral-950">
      <div className="sticky top-0 z-[80] border-b border-black/10 bg-white/95 backdrop-blur-xl">
        <div className="mx-auto flex h-14 max-w-[1440px] items-center justify-between gap-3 px-4 md:px-6">
          <Link href="/" className="shrink-0 text-sm font-black tracking-tight">
            OHMT
          </Link>

          <div className="flex items-center gap-1 rounded-full border border-black/10 bg-neutral-100 p-1">
            {DEVICES.map((item) => {
              const Icon = item.icon;
              const active = item.id === device;

              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setDevice(item.id)}
                  className={`inline-flex h-9 w-9 items-center justify-center rounded-full text-xs font-semibold transition-colors sm:w-auto sm:gap-2 sm:px-3 ${
                    active ? "bg-neutral-950 text-white" : "text-neutral-500 hover:text-neutral-950"
                  }`}
                  aria-pressed={active}
                  aria-label={`${item.label} preview`}
                  title={`${item.label} preview`}
                >
                  <Icon size={15} />
                  <span className="hidden sm:inline">{item.label}</span>
                </button>
              );
            })}
          </div>

          <a
            href={previewSrc}
            className="shrink-0 text-xs font-semibold text-neutral-500 transition-colors hover:text-neutral-950"
          >
            Original
          </a>
        </div>
      </div>

      <div
        className={`mx-auto flex min-h-[calc(100dvh-56px)] justify-center overflow-auto bg-neutral-100 ${
          isDesktop ? "p-0" : "p-0 md:p-6"
        }`}
      >
        <div
          className={
            isDesktop
              ? "h-[calc(100dvh-56px)] w-full overflow-hidden bg-white"
              : "overflow-hidden rounded-[30px] border-[10px] border-neutral-950 bg-white shadow-2xl shadow-black/20"
          }
          style={{
            width: activeDevice.width,
            height: activeDevice.height ?? "calc(100dvh - 56px)",
            maxHeight: activeDevice.height ? "calc(100dvh - 104px)" : undefined,
            maxWidth: "100%",
          }}
        >
          <iframe
            key={`${device}-${previewSrc}`}
            src={previewSrc}
            title={`${activeDevice.label} preview`}
            className="h-full w-full border-0 bg-white"
          />
        </div>
      </div>
    </div>
  );
}
