import type { ReactNode } from "react";

export interface TopBarProps {
  title: string;
  action?: ReactNode;
}

export function TopBar({ title, action }: TopBarProps) {
  return (
    <header className="h-14 bg-white border-b border-zinc-200 px-8 flex items-center justify-between">
      <h1 className="text-base font-semibold text-zinc-900">{title}</h1>
      {action && <div>{action}</div>}
    </header>
  );
}
