"use client";
import React from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Header } from "../../_components/Header";
import { Footer } from "../../_components/Footer";
import { blogPosts } from "../../data/data";
import theme from "../../theme.json";
import { TemplateWrapper } from "../../_components/TemplateWrapper";

const postContent: Record<string, { paragraphs: string[] }> = {
  'style-minimalist-accessories': {
    paragraphs: [
      'Minimalist accessories are having a defining moment. Not the kind that shouts for attention, but the kind that quietly completes an outfit. Think sculptural silver earrings against a plain knit, or a structured leather belt that cinches an oversized blazer into something intentional.',
      'The key is proportion. When everything else is simple, one well-chosen accessory becomes the focal point. A chunky chain necklace over a crewneck sweater. A single leather bracelet stacked with nothing. The restraint itself is the statement.',
      'Texture matters just as much as shape. Matte finishes over shiny, organic curves over rigid lines. A brushed gold cuff warms up a cool-toned linen look. A woven tote brings softness to tailored suiting. These are small choices that shift the entire feel of an outfit.',
      'The best accessory advice? Wear it like you forgot to take it off. The most minimalist looks are the ones that feel natural, not assembled.',
    ],
  },
  'sustainable-fashion': {
    paragraphs: [
      'Sustainability in fashion is not a marketing angle. It is a fundamental rethinking of how clothes are made, worn, and kept. At Oh My Template, this means starting with material selection - organic cotton over conventional, deadstock fabrics before new production, and natural dyes wherever possible.',
      'We work directly with mills that share our standards. This shortens the supply chain and gives us full visibility into working conditions and environmental impact. Every garment is produced in small batches, which reduces waste and allows us to maintain a level of quality control that mass production simply cannot match.',
      'But sustainability also means designing clothes that last. Not just in construction, but in style. We steer clear of trend-driven silhouettes in favor of shapes that feel relevant season after season. A well-cut coat or a simple leather tote should look as good five years from now as it does today.',
      'This approach demands more from us - more research, more care, more time. But it also gives our customers something rare in fashion today: pieces they can feel good about owning.',
    ],
  },
  'mens-wardrobe-checklist': {
    paragraphs: [
      'A truly functional wardrobe is built on a foundation of well-chosen essentials. These are the pieces that work hardest: the white oxford that transitions from desk to dinner, the unstructured blazer that never feels stiff, the dark denim that fits perfectly without trying.',
      'Start with outerwear. A single good coat - wool, knee-length, neutral - sets the tone for everything underneath. Add a lightweight field jacket for transitional weather, and you have a rotation that covers almost any occasion.',
      'Next, focus on tops. Three to four high-quality t-shirts in white, black, and grey. Two button-downs - one crisp oxford cloth, one relaxed linen. A fine-gauge knit sweater in navy or charcoal. These are the building blocks. Every combination should work with every other.',
      'Bottom-up: one pair of dark selvedge denim, one pair of tailored chinos in khaki or olive, one pair of grey wool trousers. Fit matters more than brand. Find a tailor you trust and take everything that needs adjusting. The difference is immediate.',
      'Lastly, shoes and accessories. Clean white sneakers, brown leather loafers, black cap-toe boots. A simple leather watch. A woven belt. Nothing more. A restrained wardrobe is not a limitation. It is a clarity of purpose - and it shows.',
    ],
  },
};

function BlogPostContent({ params }: { params: Promise<{ slug: string }> }) {
  const resolved = React.use(params);
  const post = blogPosts.find((p) => p.slug === resolved.slug);

  if (!post) {
    notFound();
  }

  const content = postContent[post.slug];
  const relatedPosts = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 2);

  return (
    <>
      <Header />
      <TemplateWrapper theme={theme}>
      <main className="antialiased min-h-screen pt-16 md:pt-20 bg-white text-[var(--color-text)]">

        <article className="bg-white py-20 md:py-32">
          <div className="max-w-2xl mx-auto px-6 md:px-12">
            <span className="text-xs uppercase tracking-[0.2em] text-[var(--color-text-muted)]">{post.category}</span>
            <h1 className="text-3xl lg:text-4xl font-bold tracking-tight mt-4">{post.title}</h1>
            <div className="flex items-center gap-3 mt-4 text-sm text-[var(--color-text-muted)]">
              <span>{post.date}</span>
              <span>·</span>
              <span>{post.readTime}</span>
            </div>

            <div className="aspect-[16/10] overflow-hidden bg-[var(--color-bg-secondary)] mt-10">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="mt-12 space-y-6 text-base leading-[1.8] text-[var(--color-text-muted)]">
              {content ? content.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              )) : (
                <p>Post content coming soon.</p>
              )}
            </div>
          </div>
        </article>

        {relatedPosts.length > 0 && (
          <section className="bg-[var(--color-bg-secondary)] py-20">
            <div className="max-w-[1440px] mx-auto px-6 md:px-12">
              <h2 className="text-2xl font-bold tracking-tight mb-10">Related Articles</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {relatedPosts.map((rp) => (
                  <Link key={rp.id} href={`/en/templates/multi-shop/blog/${rp.slug}`} className="group block">
                    <div className="aspect-[16/10] overflow-hidden bg-[var(--color-bg-secondary)]">
                      <img
                        src={rp.image}
                        alt={rp.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <div className="mt-5">
                      <span className="text-xs uppercase tracking-[0.2em] text-[var(--color-text-muted)]">{rp.category}</span>
                      <h3 className="text-lg font-bold mt-1 leading-snug group-hover:opacity-70 transition-opacity">{rp.title}</h3>
                      <span className="inline-block mt-3 text-xs uppercase tracking-[0.2em] text-[var(--color-primary)] font-medium group-hover:opacity-60 transition-opacity">
                        Read More &rarr;
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        <Footer />
      </main>
      </TemplateWrapper>
    </>
  );
}

export default function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  return (
    <React.Suspense fallback={null}>
      <BlogPostContent params={params} />
    </React.Suspense>
  );
}
