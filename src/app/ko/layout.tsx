import type { ReactNode } from "react";

export default function KoLayout({ children }: { children: ReactNode }) {
  return <div lang="ko">{children}</div>;
}
