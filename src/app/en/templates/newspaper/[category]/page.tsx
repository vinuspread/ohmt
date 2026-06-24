"use client";

import { Suspense } from "react";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Header } from "../_components/layout/Header";
import { Footer } from "../_components/layout/Footer";
import theme from "../theme.json";
import { TemplateWrapper } from "../_components/TemplateWrapper";

const categoryContent: Record<string, { title: string; articles: Array<{ title: string; slug: string; excerpt: string; author: string; time: string; image: number }> }> = {
  world: {
    title: "World News",
    articles: [
      { title: "Global Trade Talks Resume in Geneva", slug: "global-trade-talks", excerpt: "Nations converge on historic trade agreement framework.", author: "James Mitchell", time: "2 hours ago", image: 1 },
      { title: "Emerging Markets Show Strong Growth", slug: "emerging-markets-growth", excerpt: "Southeast Asian economies outpace global averages.", author: "Lisa Chen", time: "4 hours ago", image: 2 },
      { title: "Climate Summit Pledges $500 Billion Fund", slug: "climate-summit-fund", excerpt: "Developed nations commit to green energy transition.", author: "Thomas Green", time: "6 hours ago", image: 3 },
      { title: "International Court Rules on Border Dispute", slug: "border-dispute-ruling", excerpt: "Historic decision reshapes regional geopolitics.", author: "Maria Rodriguez", time: "8 hours ago", image: 4 }
    ]
  },
  politics: {
    title: "Politics",
    articles: [
      { title: "Parliament Passes Landmark Legislation", slug: "parliament-legislation", excerpt: "New voting reforms take effect immediately.", author: "David Sterling", time: "1 hour ago", image: 2 },
      { title: "Election Commission Announces New Procedures", slug: "election-procedures", excerpt: "Transparency measures aim to increase voter confidence.", author: "Sarah Jenkins", time: "3 hours ago", image: 3 },
      { title: "Coalition Negotiations Reach Critical Phase", slug: "coalition-negotiations", excerpt: "Government formation talks intensify amid deadline.", author: "Robert Walsh", time: "5 hours ago", image: 4 },
      { title: "Political Leaders Meet on Economic Policy", slug: "economic-policy-meeting", excerpt: "Cross-party consensus emerges on fiscal strategy.", author: "Emma Thompson", time: "7 hours ago", image: 1 }
    ]
  },
  economy: {
    title: "Economy",
    articles: [
      { title: "Stock Markets Rally on Banking Reforms", slug: "markets-banking-reforms", excerpt: "Investor confidence reaches six-month high.", author: "Michael Brooks", time: "30 mins ago", image: 3 },
      { title: "Central Bank Holds Interest Rates Steady", slug: "interest-rates-steady", excerpt: "Officials cite stable inflation as key factor.", author: "Caroline Price", time: "1 hour ago", image: 4 },
      { title: "Tech Sector Drives Job Creation Surge", slug: "tech-job-creation", excerpt: "Unemployment falls to lowest level in five years.", author: "Alan Foster", time: "3 hours ago", image: 1 },
      { title: "Real Estate Market Shows Signs of Recovery", slug: "real-estate-recovery", excerpt: "Property values stabilize after recent downturn.", author: "Victoria Newman", time: "5 hours ago", image: 2 }
    ]
  },
  tech: {
    title: "Technology",
    articles: [
      { title: "AI Breakthrough: New Model Shows Remarkable Capabilities", slug: "ai-breakthrough", excerpt: "Researchers announce major leap in machine learning.", author: "Dr. Alex Kumar", time: "1 hour ago", image: 4 },
      { title: "Quantum Computing Reaches New Milestone", slug: "quantum-milestone", excerpt: "Prototype solves complex optimization problem.", author: "Dr. Rebecca Lee", time: "3 hours ago", image: 1 },
      { title: "Smartphone Innovation Cycle Accelerates", slug: "smartphone-innovation", excerpt: "New features promise major productivity gains.", author: "Marcus Chen", time: "5 hours ago", image: 2 },
      { title: "Cybersecurity Threats Prompt New Framework", slug: "cybersecurity-framework", excerpt: "Global standards established for data protection.", author: "Jonathan Blake", time: "7 hours ago", image: 3 }
    ]
  },
  culture: {
    title: "Culture & Arts",
    articles: [
      { title: "Major Museum Acquires Lost Masterpiece", slug: "museum-masterpiece", excerpt: "Rediscovered painting valued at $50 million.", author: "Isabella Romano", time: "2 hours ago", image: 2 },
      { title: "Film Festival Celebrates Independent Filmmakers", slug: "film-festival", excerpt: "Record attendance marks cultural shift.", author: "Oscar Delgado", time: "4 hours ago", image: 3 },
      { title: "Ballet Company Premieres Modern Production", slug: "ballet-premiere", excerpt: "Fusion of classical and contemporary dance wows audiences.", author: "Victoria Lane", time: "6 hours ago", image: 4 },
      { title: "Music Streaming Services Report Growth Surge", slug: "music-streaming-growth", excerpt: "Listener engagement reaches all-time high.", author: "Nathan Scott", time: "8 hours ago", image: 1 }
    ]
  },
  sports: {
    title: "Sports",
    articles: [
      { title: "Championship Final Delivers Historic Victory", slug: "championship-final-delivers", excerpt: "Underdog team claims title in thrilling match.", author: "James Patterson", time: "1 hour ago", image: 1 },
      { title: "Olympic Venue Selection Announced for 2032", slug: "olympic-venue-2032", excerpt: "Council selects host city after competitive bidding.", author: "Sofia Martinez", time: "3 hours ago", image: 2 },
      { title: "Tennis Star Wins Grand Slam in Upset", slug: "tennis-grand-slam", excerpt: "Unseeded player claims unexpected title.", author: "William Hayes", time: "5 hours ago", image: 3 },
      { title: "Athletic Records Fall at World Championships", slug: "world-championships-records", excerpt: "Multiple athletes break long-standing standards.", author: "Angela Pierce", time: "7 hours ago", image: 4 }
    ]
  }
};

function CategoryPageContent({ params }: { params: Promise<{ category: string }> }) {
  const { category } = React.use(params);
  const content = categoryContent[category.toLowerCase()] || categoryContent.world;

  return (
    <TemplateWrapper theme={theme}>
      <main className="antialiased bg-white text-[var(--color-secondary)] selection:bg-[var(--color-primary)] selection:text-white">
        <Header />

        <div className="max-w-[1280px] mx-auto px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="py-12 border-b-2 border-black"
          >
            <h1 className="font-[family-name:var(--theme-font-heading)] text-[clamp(2rem,4vw,3.5rem)] font-bold leading-tight mb-2">
              {content.title}
            </h1>
            <p className="text-[1rem] text-[#555] font-sans">Latest news and updates from {content.title.toLowerCase()}</p>
          </motion.div>

          <div className="py-12">
            <div className="grid md:grid-cols-2 gap-12">
              {content.articles.map((article, i) => (
                <motion.article
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="pb-8 border-b border-[var(--color-border)] group"
                >
                  <Link href={`/en/templates/OHMT013-newspaper-EN/${category}/${article.slug}`}>
                    <img
                      src={`/templates/OHMT013-newspaper/news-${article.image}.jpg`}
                      className="w-full h-64 object-cover mb-4 group-hover:opacity-80 transition-opacity"
                      alt={article.title}
                    />
                  </Link>
                  <h2 className="font-[family-name:var(--theme-font-heading)] text-[1.3rem] font-bold leading-snug mb-3 group-hover:text-[var(--color-primary)] transition-colors">
                    <Link href={`/en/templates/OHMT013-newspaper-EN/${category}/${article.slug}`}>{article.title}</Link>
                  </h2>
                  <p className="text-[0.95rem] text-[#555] font-sans leading-[1.4] mb-4">
                    {article.excerpt}
                  </p>
                  <div className="font-sans text-[0.75rem] text-[#999] uppercase tracking-wide">
                    By <strong className="text-[#555]">{article.author}</strong> · {article.time}
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </div>

        <Footer />
      </main>
    </TemplateWrapper>
  );
}


export default function CategoryPage(props: any) {
  return (
    <React.Suspense fallback={null}>
      <CategoryPageContent {...props} />
    </React.Suspense>
  );
}
