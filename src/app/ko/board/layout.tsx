import type { ReactNode } from "react";
import { SiteHeader } from "./_components/SiteHeader";

export default function BoardLayout({ children }: { children: ReactNode }) {
  return (
    <div lang="ko" className="min-h-screen bg-white text-zinc-900 dark:bg-zinc-950 dark:text-zinc-100">
      <SiteHeader />
      <div className="pt-16">{children}</div>
    </div>
  );
}
