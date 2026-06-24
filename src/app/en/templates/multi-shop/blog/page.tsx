"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Header } from "../_components/Header";
import { Footer } from "../_components/Footer";
import { blogPosts as allPosts } from "../data/data";
import theme from "../theme.json";
import { TemplateWrapper } from "../_components/TemplateWrapper";

const categories = ["All", "Style Guide", "Brand Story", "Men's Guide"];

function BlogPageContent() {
  const [activeCategory, setActiveCategory] = useState("All");
  const blogPosts = activeCategory === "All"
    ? allPosts
    : allPosts.filter((p) => p.category === activeCategory);

  return (
    <>
      <Header />
      <TemplateWrapper theme={theme}>
      <main className="antialiased min-h-screen pt-16 md:pt-20 bg-[var(--color-bg-secondary)] text-[var(--color-text)]">

        <section className="bg-[var(--color-bg-secondary)] py-16">
          <div className="max-w-[1440px] mx-auto px-6 md:px-12 text-center">
            <h1 className="text-4xl lg:text-5xl font-bold tracking-tight">Our Blog</h1>
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`text-xs uppercase tracking-[0.2em] px-5 py-2 transition-colors duration-300 ${
                    activeCategory === cat
                      ? 'bg-[var(--color-primary)] text-white'
                      : 'text-[var(--color-text-muted)] hover:text-[var(--color-text)]'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white py-16 md:py-24">
          <div className="max-w-[1440px] mx-auto px-6 md:px-12">
            {blogPosts.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
                {blogPosts.map((post) => (
                  <Link key={post.id} href={`/en/templates/OHMT017-multi-shop-EN/blog/${post.slug}`} className="group block">
                    <div className="aspect-[16/10] overflow-hidden bg-[var(--color-bg-secondary)]">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <div className="mt-5">
                      <span className="text-xs uppercase tracking-[0.2em] text-[var(--color-text-muted)]">{post.category}</span>
                      <h2 className="text-lg font-bold mt-2 leading-snug group-hover:opacity-70 transition-opacity">{post.title}</h2>
                      <p className="text-sm text-[var(--color-text-muted)] mt-2 leading-relaxed">{post.excerpt}</p>
                      <div className="flex items-center gap-2 mt-4 text-xs text-[var(--color-text-muted)]">
                        <span>{post.date}</span>
                        <span>·</span>
                        <span>{post.readTime}</span>
                      </div>
                      <span className="inline-block mt-4 text-xs uppercase tracking-[0.2em] text-[var(--color-primary)] font-medium group-hover:opacity-60 transition-opacity">
                        Read More &rarr;
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            ) : (
              <p className="text-center text-[var(--color-text-muted)] py-20">
                No posts found in this category.
              </p>
            )}
          </div>
        </section>

        <Footer />
      </main>
      </TemplateWrapper>
    </>
  );
}

export default function BlogPage() {
  return (
    <React.Suspense fallback={null}>
      <BlogPageContent />
    </React.Suspense>
  );
}
