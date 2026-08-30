"use client";
import React from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { Navbar } from "../../_components/Navbar";
import { Footer } from "../../_components/Footer";
import theme from "../../theme.json";
import { TemplateWrapper } from "../../_components/TemplateWrapper";

const ARTICLES = [
  {
    id: 1,
    category: "CAMPAIGN",
    title: "The Last Season",
    date: "June 15, 2026",
    image: "/templates/OHMT001-fashion/journal-hero-v2.png",
    content: `A visual meditation on endings and the quiet beauty of letting go. Shot over three days in the Venetian lagoon.

    The air is thick with saltwater and silence. We watch the tide recede, carrying with it the last remnants of a season that felt both infinite and brief. In this space, clothing ceases to be just fabric; it becomes a shield, a memory, a second skin.

    Every silhouette in this campaign was designed to capture this transitional state. Light wools that move with the wind, unstructured tailoring that offers comfort in the cold, and a palette drawn directly from the limestone and grey waters of Venice. We invite you to sit with these pieces, to feel the weight of the weave, and to discover the beauty in what remains.`
  },
  {
    id: 2,
    category: "MATERIALS",
    title: "On Japanese Denim",
    date: "May 28, 2026",
    image: "/templates/OHMT001-fashion/hero-custom.jpg",
    content: `Selvedge, weight, and the obsessive pursuit of the perfect fade. We trace our denim to a single mill in Okayama.

    To understand the character of our denim is to understand the rhythm of old shuttle looms. Operating at a fraction of the speed of modern projectile looms, these vintage machines weave denim with a natural tension and structural variation that cannot be replicated.

    The resulting fabric has a rich, textured handfeel (known as 'slubby') and a self-finished edge - the selvedge. We dye our threads in natural indigo, layering the color slowly to ensure that as the garment ages, it fades not to a flat blue, but to a deeply personal gradient of wear. This is denim made to be lived in, breaking in over years to reflect your unique movement.`
  },
  {
    id: 3,
    category: "COLLECTION",
    title: "Quiet Craft",
    date: "May 10, 2026",
    image: "/templates/OHMT001-fashion/exclusive-lifestyle.png",
    content: `Behind the seams of our most technically demanding garment to date - the structured wool overcoat.

    We believe that true luxury lies in the details that remain unseen. The structured wool overcoat is a testament to this philosophy. Underneath the heavy double-faced wool outer layer lies a meticulously engineered internal structure of horsehair canvas, hand-stitched to the lapels to ensure they roll naturally rather than crease.

    The armholes are cut high and set by hand, allowing for full range of motion while maintaining a sharp, tailored line. Every pocket is reinforced with cotton twill, and the buttonholes are finished with silk thread. It takes our artisans over twenty hours of hand-work to complete a single overcoat, creating a garment designed to protect you for decades.`
  },
  {
    id: 4,
    category: "STYLE",
    title: "Dressing for the Season",
    date: "April 22, 2026",
    image: "/templates/OHMT001-fashion/branding-custom.jpg",
    content: `A practical guide to building a capsule wardrobe that ages with you, not against you.

    The modern wardrobe is often cluttered with trends that lose relevance before the fabric begins to wear. We advocate for a different approach: a curated collection of foundational pieces that transition seamlessly through seasons and years.

    Start with three key elements: a structured wool overcoat, a perfectly fitted raw denim trouser, and a heavy-weight organic cotton tee. These pieces serve as the canvas for your personal style. Focus on material integrity and proportion. When a garment is crafted from high-quality natural fibers, it drapes better, breathes easier, and develops a richer character over time. Choose less, but choose better.`
  }
];

function JournalDetailContent() {
  const params = useParams();
  const articleId = Number(params?.id);
  const article = ARTICLES.find(a => a.id === articleId) || ARTICLES[0];

  const paragraphs = article.content.split("\n\n");

  return (
    <TemplateWrapper theme={theme}>
      <main className="antialiased min-h-screen bg-white">
        <Navbar />

        <div className="max-w-[1440px] mx-auto px-6 md:px-12 pt-30 md:pt-40 pb-24">
          <Link
            href="/en/templates/OHMT001-fashion/journal"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-black/60 hover:text-black mb-8 transition-colors group"
          >
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            Back to Journal
          </Link>

          <article className="max-w-3xl mx-auto">
            <span className="text-xs uppercase tracking-widest text-black/40">{article.category}</span>
            <h1 className="font-[family-name:var(--font-bodoni)] text-4xl md:text-6xl text-black font-normal tracking-tight mt-4 leading-[var(--leading-heading)]">{article.title}</h1>
            <p className="text-xs text-black/40 mt-3 pb-8 border-b border-black/10">{article.date}</p>

            <div className="mt-8 aspect-[21/9] overflow-hidden">
              <img src={article.image} alt={article.title} className="w-full h-full object-cover" />
            </div>

            <div className="mt-12 space-y-6">
              {paragraphs.map((p, index) => (
                <p key={index} className="text-sm text-black/70 leading-relaxed break-keep">
                  {p.trim()}
                </p>
              ))}
            </div>
          </article>
        </div>

        <Footer />
      </main>
    </TemplateWrapper>
  );
}

export default function JournalDetailPage() {
  return (
    <React.Suspense fallback={null}>
      <JournalDetailContent />
    </React.Suspense>
  );
}
