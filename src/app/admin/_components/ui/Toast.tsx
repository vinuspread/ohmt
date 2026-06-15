"use client";

import { CheckCircle2, X, XCircle } from "lucide-react";
import { useEffect } from "react";
import { clsx } from "clsx";

export interface ToastProps {
  message: string;
  type: "success" | "error";
  onClose: () => void;
}

export function Toast({ message, type, onClose }: ToastProps) {
  useEffect(() => {
    const timer = window.setTimeout(onClose, 3000);
    return () => window.clearTimeout(timer);
  }, [onClose]);

  const isSuccess = type === "success";
  const Icon = isSuccess ? CheckCircle2 : XCircle;

  return (
    <div
      role={isSuccess ? "status" : "alert"}
      className={clsx(
        "fixed bottom-4 right-4 z-50 flex items-center gap-3 px-4 py-3 rounded-lg shadow-lg text-sm font-medium",
        isSuccess ? "bg-emerald-50 text-emerald-800 border border-emerald-200" : "bg-red-50 text-red-800 border border-red-200"
      )}
    >
      <Icon aria-hidden="true" className="w-4 h-4" />
      <span>{message}</span>
      <button
        type="button"
        onClick={onClose}
        aria-label="알림 닫기"
        className="rounded p-0.5 hover:bg-black/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-900 focus-visible:ring-offset-2"
      >
        <X aria-hidden="true" className="w-3.5 h-3.5" />
      </button>
    </div>
  );
}
