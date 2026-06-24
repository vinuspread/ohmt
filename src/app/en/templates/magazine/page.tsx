// src/app/templates/OHMT012-magazine/page.tsx
"use client";

import React from "react";
import { Header } from "./_components/layout/Header";
import { Footer } from "./_components/layout/Footer";
import { Hero } from "./_components/sections/Hero";
import { FeaturedGrid } from "./_components/sections/FeaturedGrid";
import { EditorsPicks } from "./_components/sections/EditorsPicks";
import { LatestStories, NewsletterStrip } from "./_components/sections/LatestStories";
import theme from "./theme.json";
import { TemplateWrapper } from "./_components/TemplateWrapper";
function MagazineTemplateContent() {
  const t = {
  "nav": {
    "stories": `Stories`,
    "archive": `Archive`,
    "issues": `Issues`,
    "about": `About`,
    "subscribe": `Subscribe`
  },
  "hero": {
    "badge": `LIFESTYLE & CULTURE`,
    "title1": `Archival Eyes`,
    "title2": `on Curated Cultures.`,
    "desc": `Rescuing aesthetic fragments and typographical weight from the transient streams of modern trends.`,
    "cta": `EXPLORE ISSUE`,
    "cta2": `Get Your Copy`,
    "bannerTitle": `The Summer 2026 Print Edition is here.`,
    "issueBadge": `In This Issue`,
    "issueNumber": `#42 Summer`,
    "bannerBadge": `Now Available`,
    "issueTopics": [
      {
        "tag": `Design`,
        "title": `Nordic minimalism redefined`
      },
      {
        "tag": `Culture`,
        "title": `Berlin's hidden art scene`
      },
      {
        "tag": `Travel`,
        "title": `Kyoto's secret teahouses`
      },
      {
        "tag": `Sustainability`,
        "title": `The future of farming`
      }
    ]
  },
  "featuredGrid": {
    "label": `Featured Stories`,
    "items": [
      {
        "tag": `Design`,
        "title": `The Evolution of Minimalist Architecture in Nordic Cities.`,
        "desc": `From Copenhagen to Stockholm, how functionalism and natural materials are redefining the urban landscape.`
      },
      {
        "tag": `Culture`,
        "title": `Hidden Galleries of Berlin's East Side.`,
        "desc": `A curated journey through the city's most unconventional art spaces.`
      },
      {
        "tag": `Lifestyle`,
        "title": `Eco-Conscious Living in the Desert.`,
        "desc": `A new paradigm of sustainable lifestyle created by self-sufficient communities.`
      }
    ]
  },
  "editorsPicks": {
    "label": `Editor's Picks`,
    "items": [
      {
        "title": `The Sensual Language of Ceramics.`,
        "desc": `Why hand-crafted objects are the ultimate luxury in a digital age.`
      },
      {
        "title": `Urban Gardening: The Vertical Revolution.`,
        "desc": `Reimagining sustainable food ecosystems in concrete spaces.`
      },
      {
        "title": `The Acoustics of Silence.`,
        "desc": `Designing spaces that offer psychological sanctuary from modern noise.`
      }
    ]
  },
  "latestStories": {
    "label": `Latest Stories`,
    "mostRead": `Most Read`,
    "stories": [
      {
        "tag": `Photography`,
        "title": `Light & Shadow: Capturing the brutalist heart of London.`,
        "desc": `A photographic journey through the city's most controversial concrete monuments.`
      },
      {
        "tag": `Travel`,
        "title": `The hidden teahouses of Kyoto's outer districts.`,
        "desc": `Finding tradition and tranquility away from the tourist crowds.`
      }
    ],
    "mostReadItems": [`The future of sustainable fashion is circular.`, `The return to film photography.`, `The hidden costs of minimalism.`]
  },
  "newsletter": {
    "label": `Newsletter`,
    "title": `Subscribe to our Weekly Selection`,
    "desc": `A curated digest of our best stories, delivered straight to your inbox.`,
    "placeholder": `Email address`,
    "submit": `Subscribe`
  }
};
return (
    <TemplateWrapper theme={theme}>
      <main className="antialiased bg-[var(--color-bg)] text-[var(--theme-text)] selection:bg-[var(--theme-accent)] selection:text-white">
        <Header t={t} />

        <Hero t={t} />

        <FeaturedGrid t={t} />

        <EditorsPicks t={t} />

        <LatestStories t={t} />

        <NewsletterStrip t={t} />

        <Footer />
      </main>
    </TemplateWrapper>
  );
}

export default function MagazineTemplate() {
  return <MagazineTemplateContent />;
}
