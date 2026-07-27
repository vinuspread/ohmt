"use client";
import React, { useState, Suspense } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { TemplateWrapper } from "../_components/TemplateWrapper";
import theme from "../theme.json";
import { Header } from "../_components/layout/Header";
import { Footer } from "../_components/layout/Footer";

const posts = [
  { slug: "how-to-style-sneakers", title: "How to Style Sneakers for Any Occasion", date: "May 20, 2026", category: "Style", img: "/templates/OHMT005-sneaker/hero-detail.jpg", excerpt: "From board meetings to weekend brunches, we break down how to make any pair work harder in your wardrobe." },
  { slug: "sustainable-footwear", title: "The Rise of Sustainable Footwear", date: "May 14, 2026", category: "Sustainability", img: "/templates/OHMT005-sneaker/product-6.jpg", excerpt: "Eco certifications, recycled soles, and carbon-offset logistics - what does sustainable really mean in 2026?" },
  { slug: "sneaker-care-guide", title: "Complete Sneaker Care Guide", date: "May 8, 2026", category: "Care", img: "/templates/OHMT005-sneaker/cat-sneakers-new.jpg", excerpt: "A pair treated well can last years longer. Here's our definitive guide to cleaning, storing, and protecting your shoes." },
  { slug: "2026-trends", title: "Top Sneaker Trends for 2026", date: "May 1, 2026", category: "Trends", img: "/templates/OHMT005-sneaker/category-running-new.jpg", excerpt: "Chunky soles are out. Clean lines, muted palettes, and material transparency are in. Here's what's shaping the season." },
  { slug: "material-guide", title: "Understanding Shoe Materials", date: "Apr 24, 2026", category: "Education", img: "/templates/OHMT005-sneaker/product-15.jpg", excerpt: "Full-grain leather, canvas, recycled mesh - each material has its place. We explain which suits your lifestyle best." },
  { slug: "collab-2026", title: "Vinus x Atelier Norde Collaboration", date: "Apr 17, 2026", category: "News", img: "/templates/OHMT005-sneaker/product-10.jpg", excerpt: "A capsule collection born from two obsessions: impeccable craft and zero compromise on sustainability." },
  { slug: "sizing-guide", title: "How to Find Your Perfect Fit", date: "Apr 10, 2026", category: "Help", img: "/templates/OHMT005-sneaker/product-3.jpg", excerpt: "Width, arch height, toe box - sizing is more than a number. Our fitting guide takes the guesswork out of ordering online." },
  { slug: "boot-season", title: "Getting Ready for Boot Season", date: "Apr 3, 2026", category: "Style", img: "/templates/OHMT005-sneaker/cat-boots.jpg", excerpt: "The Terra Boot is back in three new colourways. Here's how to work it into your autumn rotation." },
];

const categories = ["All", "Style", "Sustainability", "Trends", "Care", "Education", "News", "Help"];

function BlogPageContent() {
  const [activeCategory, setActiveCategory] = useState("All");
  const filtered = activeCategory === "All" ? posts : posts.filter(p => p.category === activeCategory);

  React.useEffect(() => {
    const resetBlog = () => setActiveCategory("All");
    window.addEventListener("ohmt005:reset-blog", resetBlog);
    return () => window.removeEventListener("ohmt005:reset-blog", resetBlog);
  }, []);

  return (
    <TemplateWrapper theme={theme}>
      <div className="bg-white text-black font-sans">
        <Header />

        {/* Page header */}
        <section className="pt-16 md:pt-32 pb-12 border-b border-black/10">
          <div className="max-w-[1440px] mx-auto px-6">
            <span className="text-[0.7rem] font-bold uppercase tracking-[0.25em] text-black/40 block mb-4">Journal</span>
            <h1 className="text-[length:var(--text-h1)] font-black tracking-[-0.03em] uppercase leading-[var(--leading-heading)]">From the Blog</h1>
          </div>
        </section>

        {/* Category filter */}
        <div className="sticky top-14 md:top-20 z-20 bg-white border-b border-black/10">
          <div className="max-w-[1440px] mx-auto px-6">
            <div className="flex gap-0 overflow-x-auto scrollbar-none">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-6 py-4 text-[0.72rem] font-bold uppercase tracking-[0.1em] whitespace-nowrap border-b-2 transition-colors ${
                    activeCategory === cat ? "border-black text-black" : "border-transparent text-black/40 hover:text-black"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Featured post (first) */}
        {filtered.length > 0 && (
          <section className="py-16 border-b border-black/10">
            <div className="max-w-[1440px] mx-auto px-6">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="aspect-[4/3] overflow-hidden bg-[var(--color-bg-secondary)]">
                  <img loading="lazy" src={filtered[0].img} alt={filtered[0].title} className="w-full h-full object-cover" />
                </div>
                <div>
                  <span className="text-[0.65rem] font-bold uppercase tracking-[0.2em] text-black/40 block mb-4">{filtered[0].category} · {filtered[0].date}</span>
                  <h2 className="text-[2rem] font-black uppercase tracking-tight leading-tight mb-6">{filtered[0].title}</h2>
                  <p className="text-[0.9rem] text-black/60 leading-[var(--leading-body)] mb-8">{filtered[0].excerpt}</p>
                  <Link href="/en/templates/OHMT005-sneaker/blog" className="inline-flex items-center gap-3 bg-black text-white text-[0.82rem] font-bold uppercase tracking-[0.08em] px-8 py-4 hover:bg-black/80 transition-colors">
                    Read Article <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Post grid */}
        <section className="py-16">
          <div className="max-w-[1440px] mx-auto px-6">
            {filtered.length === 0 ? (
              <div className="flex min-h-64 items-center justify-center border border-black/10 px-6 text-center">
                <p className="text-sm font-bold text-black/45">No articles are available in this category yet.</p>
              </div>
            ) : (
              <div className="grid md:grid-cols-3 gap-8">
                {filtered.slice(1).map((p) => (
                  <Link key={p.slug} href="/en/templates/OHMT005-sneaker/blog" className="group block">
                    <div className="aspect-[4/3] overflow-hidden bg-[var(--color-bg-secondary)] mb-5">
                      <img loading="lazy" src={p.img} alt={p.title} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
                    </div>
                    <span className="text-[0.65rem] font-bold uppercase tracking-[0.15em] text-black/40 block mb-2">{p.category} · {p.date}</span>
                    <h3 className="text-[1rem] font-black uppercase leading-snug mb-3 group-hover:opacity-60 transition-opacity">{p.title}</h3>
                    <p className="text-[0.82rem] text-black/60 leading-[var(--leading-body)] mb-4">{p.excerpt}</p>
                    <span className="inline-flex items-center gap-1.5 text-[0.75rem] font-bold uppercase tracking-[0.08em] text-black border-b border-black/30 pb-0.5">
                      Read More <ArrowRight size={12} />
                    </span>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </section>

        <Suspense fallback={null}><Footer /></Suspense>
      </div>
    </TemplateWrapper>
  );
}


export default function BlogPage() {
  return (
    <React.Suspense fallback={null}>
      <BlogPageContent />
    </React.Suspense>
  );
}
