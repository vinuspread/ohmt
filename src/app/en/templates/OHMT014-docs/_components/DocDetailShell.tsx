"use client";

import { useState } from "react";
import type { DocPage } from "../data/pages";
import { DocContent } from "./DocContent";
import Header from "./Header";
import Sidebar from "./Sidebar";

type DocDetailShellProps = {
  page: DocPage;
  parent?: DocPage;
  prev?: DocPage;
  next?: DocPage;
};

export default function DocDetailShell({
  page,
  parent,
  prev,
  next,
}: DocDetailShellProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div
      className="flex h-screen overflow-hidden bg-[var(--color-bg)]"
      style={{ fontFamily: "var(--font-body)" }}
    >
      {mobileMenuOpen && (
        <button
          type="button"
          aria-label="Close navigation"
          className="fixed inset-0 z-40 bg-black/30 lg:hidden"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}
      <div
        className={`fixed inset-y-0 left-0 z-50 bg-[var(--color-bg)] shadow-xl lg:relative lg:z-auto lg:block lg:shadow-none ${
          mobileMenuOpen ? "block" : "hidden"
        }`}
      >
        <Sidebar onNavigate={() => setMobileMenuOpen(false)} />
      </div>

      <div className="flex min-w-0 flex-1 flex-col">
        <Header onMenuToggle={() => setMobileMenuOpen((open) => !open)} />
        <main className="flex-1 overflow-y-auto">
          <DocContent
            page={page}
            parent={parent}
            prev={prev}
            next={next}
            base="/en/templates/OHMT014-docs"
          />
        </main>
      </div>
    </div>
  );
}
