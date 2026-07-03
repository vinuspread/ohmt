"use client";
import React from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { Header } from "../../_components/Header";
import { Footer } from "../../_components/Footer";
import { blogPosts } from "../../data/data";
import theme from "../../theme.json";
import { TemplateWrapper } from "../../_components/TemplateWrapper";

// English paragraphs mapping
const CONTENT_MAP: Record<string, string[]> = {
  "style-minimalist-accessories": [
    "Minimalism is not about removing, but rather highlighting the essence. This season's collection is designed with an emphasis on extremely refined forms and meticulous craftsmanship.",
    "When styling accessories, choose only one or two statement pieces at a time so they blend seamlessly into your overall silhouette. A subtle pair of silver earrings or a thin metal bangle is more than enough to create an elegant point of interest.",
    "A tone-on-tone styling approach, pairing matte leather bags or scarves with similar tones as your outfit, is also an excellent option. By focusing on essential silhouettes and eliminating unnecessary details, your unique personality will shine through.",
  ],
  "sustainable-fashion": [
    "We feel a deep sense of responsibility regarding how clothing is produced and consumed. In response to the massive amount of garment waste and environmental pollution generated every year, we have committed to sourcing only sustainable materials.",
    "This capsule collection is crafted from 100% EcoVero sustainable viscose, organic cotton, and recycled polyester. These choices reduce carbon emissions and water consumption by more than half compared to conventional fibers.",
    "Furthermore, our garments are slowly produced in small batches by ethical workshops that guarantee fair working conditions. Rather than fast, disposable fashion, we offer honest, long-lasting clothing designed to grow older with your wardrobe.",
  ],
  "mens-wardrobe-checklist": [
    "Trends change with the seasons, but perfectly fitting staples always anchor a wardrobe. A man's wardrobe should begin not with an excess of clothes, but with a few well-chosen essentials.",
    "The first checklist begins with a well-fitted white shirt and a tailored blazer. Pairing these with dark indigo denim and clean leather sneakers covers everything from smart casual wear to formal occasions.",
    "Be selective about your fabrics. High-quality materials only get better and develop natural character over time. Master the art of completing a simple yet perfectly refined silhouette: that is the dress code of the modern gentleman.",
  ]
};

function BlogDetailPageContent({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((p) => p.slug === params.slug);

  if (!post) {
    return (
      <>
        <Header />
        <TemplateWrapper theme={theme}>
          <div className="min-h-screen flex flex-col items-center justify-center bg-white text-[var(--color-text)]">
            <h1 className="text-2xl font-bold">Article not found.</h1>
            <Link href="/en/templates/OHMT017-multi-shop/blog" className="mt-4 text-sm text-[var(--color-primary)] underline">
              Return to Magazine list
            </Link>
          </div>
        </TemplateWrapper>
      </>
    );
  }

  const paragraphs = CONTENT_MAP[post.slug] || [
    "Article content is being prepared. Please check back later."
  ];

  return (
    <>
      <Header />
      <TemplateWrapper theme={theme}>
        <main className="antialiased min-h-screen pt-24 bg-white text-[var(--color-text)]">
          {/* Breadcrumbs */}
          <div className="max-w-[800px] mx-auto px-6 mb-8 text-[11px] uppercase tracking-[0.2em] text-[var(--color-text-muted)]">
            <Link href="/en/templates/OHMT017-multi-shop" className="hover:text-[var(--color-text)]">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/en/templates/OHMT017-multi-shop/blog" className="hover:text-[var(--color-text)]">Magazine</Link>
            <span className="mx-2">/</span>
            <span className="text-[var(--color-text)] font-medium truncate max-w-[150px] inline-block align-bottom">{post.title}</span>
          </div>

          <article className="max-w-[800px] mx-auto px-6 pb-24">
            <span className="text-xs uppercase tracking-[0.2em] text-[var(--color-primary)] font-semibold">{post.category}</span>
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight mt-3 mb-6 leading-tight">{post.title}</h1>

            <div className="flex items-center gap-4 text-xs text-[var(--color-text-muted)] mb-8 border-b border-black/5 pb-4">
              <span>{post.date}</span>
              <span>·</span>
              <span>{post.readTime} read</span>
            </div>

            <div className="aspect-[16/9] w-full overflow-hidden bg-[var(--color-bg-secondary)] mb-10">
              <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
            </div>

            <div className="space-y-6 text-base leading-relaxed text-black/80 font-normal">
              {paragraphs.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>

            <div className="mt-16 pt-8 border-t border-black/5 flex justify-between items-center">
              <Link href="/en/templates/OHMT017-multi-shop/blog" className="text-xs uppercase tracking-[0.2em] text-[var(--color-primary)] font-medium hover:opacity-60 transition-opacity">
                &larr; Back to Magazine
              </Link>
            </div>
          </article>

          <Footer />
        </main>
      </TemplateWrapper>
    </>
  );
}

export default function Page() {
  const routerParams = useParams();
  const slug = (routerParams?.slug || "") as string;
  return <BlogDetailPageContent params={{ slug }} />;
}