import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = { title: "Admin - Oh My Template" };

export default function AdminLayout({ children }: { children: ReactNode }) {
  return (
    <div
      className="min-h-screen bg-zinc-50 text-zinc-900 antialiased"
      style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' }}
    >
      {children}
    </div>
  );
}
