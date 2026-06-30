import type { Metadata } from "next";
import "./theme.css";

export const metadata: Metadata = {
  title: "Docs - Documentation Workspace",
  description: "A clean Notion-style documentation workspace for teams.",
};

export default function DocsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
