"use client";

import { useState } from "react";
import Navbar from "../_components/Navbar";
import Footer from "../_components/Footer";
import NewsCard from "../_components/ui/NewsCard";
import { news } from "@/app/en/templates/OHMT023-game/data/data";

import { TemplateWrapper } from "../_components/TemplateWrapper";
import theme from "../theme.json";

const allCategories = Array.from(new Set(news.map((n) => n.category)));

export default function NewsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const filtered = selectedCategory === "All"
    ? news
    : news.filter((n) => n.category === selectedCategory);

  return (
    <TemplateWrapper theme={theme}>
      <Navbar />
      <main className="min-h-screen pt-24 pb-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-12">
            <h1 className="font-[var(--font-heading)] text-5xl font-bold">News & Updates</h1>
            <p className="mt-3 text-[var(--color-text-muted)]">
              The latest from Oh My Template
            </p>
          </div>

          <div className="mb-10 flex flex-wrap gap-2">
            <button
              onClick={() => setSelectedCategory("All")}
              className={`rounded-full px-4 py-1.5 text-sm transition-all ${
                selectedCategory === "All"
                  ? "bg-[var(--color-primary)] text-white"
                  : "border border-[var(--color-border)] text-[var(--color-text-muted)] hover:border-[var(--color-border-bright)] hover:text-[var(--color-text)]"
              }`}
            >
              All
            </button>
            {allCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`rounded-full px-4 py-1.5 text-sm transition-all ${
                  selectedCategory === cat
                    ? "bg-[var(--color-primary)] text-white"
                    : "border border-[var(--color-border)] text-[var(--color-text-muted)] hover:border-[var(--color-border-bright)] hover:text-[var(--color-text)]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {filtered.map((item) => (
              <NewsCard key={item.id} item={item} />
            ))}
          </div>

          {filtered.length === 0 && (
            <p className="py-20 text-center text-[var(--color-text-muted)]">
              No news found.
            </p>
          )}
        </div>
      </main>
      <Footer />
    </TemplateWrapper>
  );
}
