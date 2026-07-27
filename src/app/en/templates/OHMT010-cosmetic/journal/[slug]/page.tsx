import type { Metadata } from "next";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import { Header } from "../../_components/layout/Header";
import { Footer } from "../../_components/layout/Footer";
import theme from "../../theme.json";
import { TemplateWrapper } from "../../_components/TemplateWrapper";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const titles: Record<string, string> = {
    "vitamin-c-science": "The Science of Vitamin C in Skincare",
    "packaging-philosophy": "Why We Choose Glass Over Plastic",
    "morning-routine-guide": "A Complete Morning Skincare Guide",
    "sustainable-sourcing": "Our Journey to Sourcing Premium Organic Ingredients",
  };

  return {
    title: `${titles[slug] || slug} - OHMT Cosmetic Journal`,
    description: "Read the latest from OHMT Cosmetic — skincare insights, ingredient science, and conscious beauty stories.",
    openGraph: {
      title: `${titles[slug] || slug} - OHMT Cosmetic Journal`,
      description: "Read the latest from OHMT Cosmetic.",
      url: `https://ohmytemplate.com/en/templates/OHMT010-cosmetic/journal/${slug}`,
      siteName: "OHMT",
      images: [{ url: "/templates/OHMT010-cosmetic/og-image.jpg", width: 1200, height: 630 }],
      locale: "en_US",
      type: "article",
    },
  };
}

const entries = [
  {
    slug: "vitamin-c-science",
    title: "The Science of Vitamin C in Skincare.",
    date: "May 20, 2026",
    read: "5 min",
    excerpt: "Explore the molecular benefits and necessity of Vitamin C for radiant skin.",
    content: "Vitamin C is one of the most powerful antioxidants in skincare. It is a vital ingredient thanks to its ability to neutralize free radicals, stimulate collagen synthesis, and brighten the complexion.\n\nTo pass safely and effectively through the skin barrier, the stability of the ingredient is key. While ordinary L-ascorbic acid is prone to oxidation and rapid loss of efficacy, our stabilized formulation process preserves its active state longer to deliver deep benefits.\n\nWith consistent use, dark spots fade, skin tone becomes more uniform, and a firm texture gradually develops. Let us explore the scientific role Vitamin C can play in your daily skincare routine."
  },
  {
    slug: "packaging-philosophy",
    title: "Why We Choose Glass Over Plastic: Our Packaging Philosophy.",
    date: "May 15, 2026",
    read: "4 min",
    excerpt: "Sustainability is not just a slogan; it is our unwavering commitment to the planet.",
    content: "Every formulation deserves packaging that respects its inner quality. Glass preserves the active state and integrity of our ingredients, minimizes our carbon footprint, and completes a premium unboxing experience.\n\nWhile convenient, plastic imposes a long-term burden on the environment due to microplastics and recycling limitations. Glass, however, does not react chemically with its contents, protecting the purity of the formula from start to finish.\n\nAll our glass containers are designed for reuse and recycling. We invite you to join our refill program and protect the planet together."
  },
  {
    slug: "morning-routine-guide",
    title: "A Complete Morning Skincare Guide for Glowing Skin.",
    date: "May 10, 2026",
    read: "8 min",
    excerpt: "Master the fundamental first steps to nurture a radiant complexion every single day.",
    content: "A consistent morning routine sets the foundation for healthy skin. Here, we outline the importance of each step, from gentle cleansing to thorough sun protection.\n\nStep 1: Gently remove nocturnal sebum and residual products with a mild gel cleanser. Avoid excessive rubbing to protect the skin barrier.\n\nStep 2: Apply 2 to 3 drops of Vitamin C serum evenly across the face. Wait 1 minute for absorption.\n\nStep 3: Lock in moisture and strengthen the skin barrier with a hydrating moisturizer.\n\nStep 4: Sunscreen is an non-negotiable final step. Apply a generous amount of SPF 50+ to protect your skin. Tailor these steps to match your lifestyle and unique skin type."
  },
  {
    slug: "sustainable-sourcing",
    title: "Our Journey to Sourcing Premium Organic Ingredients Sustainably.",
    date: "May 5, 2026",
    read: "6 min",
    excerpt: "The harmonious intersection of ethical ingredient sourcing and advanced bio-skincare science.",
    content: "Behind every botanical ingredient lies our commitment to coexisting with nature. We partner with farmers who practice fair trade and organic farming to source our ingredients.\n\nFrom Moroccan argan oil to Ceylon cinnamon extract from Sri Lanka, each ingredient is harvested in small batches to minimize regional impact while delivering maximum efficacy.\n\nWe believe in the positive impact of our choices on the global ecosystem. Better ingredients, better formulas, a better planet. Our journey starts here."
  }
];

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const entry = entries.find((e) => e.slug === slug);

  if (!entry) {
    return (
      <>
        <Header />
        <TemplateWrapper theme={theme}>
          <main className="min-h-screen pt-32 text-center text-black/40 bg-[var(--color-bg)]">
            <p>Article not found.</p>
            <Link href="/en/templates/OHMT010-cosmetic/journal" className="mt-6 inline-block text-sm underline">
              Return to Journal
            </Link>
          </main>
        </TemplateWrapper>
      </>
    );
  }

  return (
    <>
      <Header />
      <TemplateWrapper theme={theme}>
        <main className="antialiased bg-[var(--color-bg)] text-black selection:bg-black selection:text-white">
          <section className="pt-48 pb-24 md:pb-40">
            <div className="max-w-[800px] mx-auto px-6 md:px-10">
              <Link href="/en/templates/OHMT010-cosmetic/journal" className="inline-flex items-center gap-1.5 text-[0.72rem] uppercase tracking-[0.2em] text-black/40 hover:text-black transition-colors mb-12">
                <ChevronLeft size={13} />Journal
              </Link>

              <div className="flex gap-6 text-[0.72rem] text-black/40 uppercase tracking-wider mb-6">
                <span>{entry.date}</span>
                <span>{entry.read} read</span>
              </div>

              <h1 className="text-[length:var(--text-h2)] font-normal tracking-tight leading-[var(--leading-heading)] mb-8">
                {entry.title}
              </h1>

              <p className="text-[1rem] text-black/50 leading-loose mb-12 border-l-2 border-black/10 pl-6">
                {entry.excerpt}
              </p>

              <div className="border-t border-black/10 pt-12 space-y-6">
                {entry.content.split("\n\n").map((para, i) => (
                  <p key={i} className="text-[0.95rem] text-black/70 leading-loose">{para}</p>
                ))}
              </div>

              <div className="mt-16 pt-8 border-t border-black/10">
                <Link href="/en/templates/OHMT010-cosmetic/journal" className="inline-flex items-center gap-1.5 text-[0.75rem] font-bold uppercase tracking-[0.2em] text-black/40 hover:text-black transition-colors">
                  <ChevronLeft size={13} />Back to Journal
                </Link>
              </div>
            </div>
          </section>

          <Footer />
        </main>
      </TemplateWrapper>
    </>
  );
}