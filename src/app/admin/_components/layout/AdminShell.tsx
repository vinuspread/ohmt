import type { ReactNode } from "react";
import { Sidebar } from "./Sidebar";
import { TopBar } from "./TopBar";

export interface AdminShellProps {
  title: string;
  action?: ReactNode;
  children: ReactNode;
}

export function AdminShell({ title, action, children }: AdminShellProps) {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col min-w-0">
        <TopBar title={title} action={action} />
        <main className="flex-1 p-8">{children}</main>
      </div>
    </div>
  );
}
