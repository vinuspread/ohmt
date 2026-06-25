"use client";

import React from "react";
import Link from "next/link";
import { Header } from "../../_components/layout/Header";
import { Footer } from "../../_components/layout/Footer";
import theme from "../../theme.json";
import { TemplateWrapper } from "../../_components/TemplateWrapper";
import { ArrowLeft } from "lucide-react";

const entries = [
  {
    slug: "vitamin-c-science",
    title: "The science behind vitamin C in skincare.",
    date: "May 20, 2026",
    read: "5 min",
    excerpt: "Explore the molecular benefits of vitamin C and why it's essential for radiant skin.",
    content: `Vitamin C, or ascorbic acid, is one of the most powerful antioxidants in skincare. Its ability to neutralize free radicals, boost collagen production, and brighten the complexion makes it a must-have ingredient in any skincare routine.

## Why Vitamin C Works

The molecular structure of vitamin C allows it to penetrate the lipid barrier of the skin, reaching the deeper layers where damage from UV exposure and pollution accumulate. Once inside, it goes to work immediately.

First, it acts as an antioxidant, neutralizing free radicals that cause premature aging. These unstable molecules are the culprits behind fine lines, wrinkles, and loss of elasticity.

Second, vitamin C stimulates collagen synthesis. By activating fibroblasts-the cells responsible for collagen production-vitamin C helps restore firmness and luminosity to the skin.

## Our Stabilized Formula

Raw vitamin C is notoriously unstable. Exposure to air, light, and heat degrades it within hours. We've invested in stabilized forms that maintain potency throughout the product's shelf life.

Our 15% L-ascorbic acid concentration is clinically proven to deliver results within 8-12 weeks of consistent use. Combined with our proprietary delivery system, it reaches the optimal depth for maximum effectiveness.

## How to Use

Apply our Vitamin C Serum every morning after cleansing and toning. A single pump is all you need. Allow 60 seconds for absorption before applying moisturizer.

For best results, use consistently. Your skin will reward you with clarity, brightness, and that coveted glow.`
  },
  {
    slug: "packaging-philosophy",
    title: "Why we chose glass over plastic: Our packaging philosophy.",
    date: "May 15, 2026",
    read: "4 min",
    excerpt: "Sustainability isn't just a buzzword-it's our commitment to the planet.",
    content: `Every product deserves packaging that reflects its quality. When we started, we faced a critical decision: compromise on sustainability or invest in materials that align with our values.

We chose glass.

## The Problem with Plastic

Plastic takes centuries to decompose. The microplastics from degraded packaging end up in our oceans, food chains, and ultimately in our bodies. For a beauty brand committed to wellness, packaging plastic felt contradictory.

Conventional plastic also degrades skincare ingredients. Actives like vitamin C and retinol interact with plastic, reducing efficacy over time. Your serum might look fresh, but its power is diminishing.

## Why Glass

Glass is inert. It doesn't interact with skincare ingredients, preserving their potency. It's infinitely recyclable without quality loss. A glass jar today could become a new glass jar in 30 days-indefinitely.

The unboxing experience matters too. There's something about holding a glass bottle that communicates quality. It's a small moment that shapes how you relate to the product and yourself.

## Our Commitment

We've reduced plastic packaging by 94% across our range. Our jars are 100% recyclable, and our cartons are made from sustainably sourced cardboard.

This choice costs more. It adds weight, increases shipping emissions, and requires careful logistics. But it's the right choice.

When you use our products, you're not just investing in your skin-you're investing in a healthier planet.`
  },
  {
    slug: "morning-routine-guide",
    title: "A complete guide to building your morning routine.",
    date: "May 10, 2026",
    read: "8 min",
    excerpt: "Master the essential steps for a glowing complexion every single day.",
    content: `Your morning routine sets the tone for your day-and your skin. A consistent, intentional routine builds resilience, clarity, and that coveted glow.

## Step 1: Cleanse

Start with tepid water (not hot-heat stresses the skin barrier). Use our Gentle Foam Cleanser to remove overnight oils and environmental particles. Massage gently for 30 seconds, then rinse thoroughly.

Hot showers feel good, but they strip your skin of natural oils. Warm water is enough.

## Step 2: Tone

Apply our Hydrating Toner with a cotton pad or clean hands. Toners prep the skin for serums by balancing pH and enhancing absorption. Our formula is alcohol-free and intensely hydrating.

This step is non-negotiable. It takes 10 seconds and delivers exponential benefits.

## Step 3: Serum

This is where the actives come in. Apply our Vitamin C Serum to damp skin, focusing on areas prone to pigmentation. Allow 60 seconds for absorption.

Serums are concentrated-a little goes a long way. Use a pea-sized amount and let it work its magic.

## Step 4: Eye Cream

The eye area is delicate and prone to fine lines. Our Eye Renewal Cream has peptides and caffeine to brighten and firm. Pat gently with your ring finger (it applies less pressure).

## Step 5: Moisturizer

Lock everything in with our Restorative Moisturizer. This is non-negotiable, even for oily skin-a hydrated skin barrier is a strong skin barrier.

Choose your formula: our Lightweight Gel for summer, our Rich Cream for winter.

## Step 6: Sunscreen

This is the most important step. UV damage is cumulative. Apply broad-spectrum SPF 30+ (we recommend 50+) as the final step. Allow 15 minutes before heading outside.

Reapply every 2 hours if you're in the sun.

## Total Time: 5 Minutes

That's it. A complete morning routine takes less time than scrolling your phone. Your skin is worth five minutes.

Consistency matters more than perfection. Stick with this routine for 8 weeks and watch your skin transform.`
  },
  {
    slug: "sustainable-sourcing",
    title: "How we source our ingredients sustainably.",
    date: "May 5, 2026",
    read: "6 min",
    excerpt: "Ethical sourcing meets cutting-edge skincare science.",
    content: `Behind every ingredient lies a story. We've made it our mission to know that story-and to ensure it's one of integrity, sustainability, and impact.

## Our Sourcing Philosophy

We partner with farmers and suppliers who share our values. This means:

- Fair wages and safe working conditions
- No pesticides or harmful chemicals
- Regenerative farming practices that restore soil health
- Direct relationships, not commodity markets

It costs more. But your skin-and the planet-is worth it.

## Vitamin C: From Kakadu Plums

Our vitamin C comes from kakadu plums, native to Australia. These nutrient-dense fruits have been harvested sustainably by Indigenous communities for generations.

We work directly with Aboriginal-owned farms, ensuring they receive premium pricing and that traditional knowledge is respected and preserved. Every bottle of our Vitamin C Serum supports Indigenous livelihoods.

## Hyaluronic Acid: Plant-Based

We use plant-derived hyaluronic acid, not the lab-synthesized versions. It's derived from fermented sweet potato, sourced from family farms in Japan that practice crop rotation and soil restoration.

This ingredient hydrates deeply without depleting water resources-the irony of water-intensive extraction would undermine our values.

## Antioxidants: From Organic Gardens

Our green tea extract, vitamin E, and resveratrol come from certified organic gardens across Korea. Zero pesticides, zero synthetic fertilizers. The farmers use composting, natural pest management, and biodiversity practices.

## Transparency

We publish our supply chain. Know exactly where each ingredient originates. Scan the QR code on any product to trace its journey from farm to your bathroom.

This transparency holds us accountable. And it should. Your trust is earned, not given.

## The Cost

Sustainable sourcing increases our ingredient costs by 30-40%. We don't hide this. We believe you deserve to know what you're paying for-and why.

When you choose our products, you're not just choosing better skincare. You're choosing a business model that respects people and planet equally.

That's worth every penny.`
  }
];

export default function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = React.use(params);
  const article = entries.find(e => e.slug === slug);

  if (!article) {
    return (
      <TemplateWrapper theme={theme}>
        <main className="antialiased bg-[var(--color-bg)] text-black">
          <Header />
          <div className="pt-16 md:pt-32 pb-20 text-center">
            <p className="text-xl">Article not found</p>
            <Link href="/en/templates/OHMT010-cosmetic/journal" className="text-[var(--color-accent)] mt-4 inline-block">
              Back to Journal
            </Link>
          </div>
          <Footer />
        </main>
      </TemplateWrapper>
    );
  }

  return (
    <TemplateWrapper theme={theme}>
      <main className="antialiased bg-[var(--color-bg)] text-black selection:bg-black selection:text-white">
        <Header />

        {/* Article Header */}
        <section className="pt-16 md:pt-32 pb-16">
          <div className="max-w-[1440px] mx-auto px-6 md:px-10">
            <Link href="/en/templates/OHMT010-cosmetic/journal" className="inline-flex items-center gap-2 text-[0.8rem] font-bold uppercase tracking-wider text-black/60 hover:text-black transition-colors mb-8">
              <ArrowLeft size={14} />
              Back to Journal
            </Link>

            <div className="space-y-6">
              <h1 className="text-[clamp(2rem,5vw,3.5rem)] font-normal tracking-tight leading-[1.1]">
                {article.title}
              </h1>

              <div className="flex gap-6 text-[0.75rem] text-black/50 uppercase tracking-wider">
                <span>{article.date}</span>
                <span>{article.read} read</span>
              </div>

              <div className="border-t border-black/10 pt-6">
                <p className="text-[1.05rem] text-black/70 leading-[1.4] max-w-[1440px]">
                  {article.excerpt}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Article Content */}
        <section className="pb-16 md:pb-32">
          <div className="max-w-[1440px] mx-auto px-6 md:px-10">
            <article className="prose prose-sm max-w-none">
              {article.content.split('\n\n').map((paragraph, idx) => {
                if (paragraph.startsWith('##')) {
                  return (
                    <h2 key={idx} className="text-xl font-semibold mt-8 mb-4 text-black">
                      {paragraph.replace('## ', '')}
                    </h2>
                  );
                }
                return (
                  <p key={idx} className="text-[1rem] text-black/70 leading-[1.4] mb-6">
                    {paragraph}
                  </p>
                );
              })}
            </article>

            {/* Related Articles */}
            <div className="mt-20 pt-16 border-t border-black/10">
              <h3 className="text-[1.3rem] font-normal tracking-tight mb-8">More from the Journal</h3>
              <div className="grid md:grid-cols-2 gap-6">
                {entries.filter(e => e.slug !== article.slug).slice(0, 2).map((related) => (
                  <Link key={related.slug} href={`/en/templates/OHMT010-cosmetic/journal/${related.slug}`}>
                    <div className="p-6 bg-white transition-shadow cursor-pointer rounded-sm border border-black/5">
                      <h4 className="text-[1rem] font-medium mb-2 group-hover:opacity-60 transition-opacity">
                        {related.title}
                      </h4>
                      <p className="text-[0.85rem] text-black/50 line-clamp-2 mb-4">
                        {related.excerpt}
                      </p>
                      <span className="text-[0.7rem] font-bold uppercase tracking-[0.15em] text-black/30">
                        {related.date}
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </TemplateWrapper>
  );
}
