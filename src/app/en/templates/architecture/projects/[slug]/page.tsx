// src/app/en/templates/architecture/projects/[slug]/page.tsx
import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { TemplateWrapper } from "../../_components/TemplateWrapper";
import { Header } from "../../_components/layout/Header";
import { Footer } from "../../_components/layout/Footer";
import { ScrollReveal } from "../../_components/ui/ScrollReveal";
import { CustomCursor } from "../../_components/ui/CustomCursor";
import { projects } from "../../data/projects";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return { title: "Project Not Found" };

  return {
    title: `${project.title} - Architecture Portfolio - Oh My Template`,
    description: project.description,
    openGraph: {
      title: `${project.title} - Architecture Portfolio - Oh My Template`,
      description: project.description,
      url: `https://ohmt.site/en/templates/architecture/projects/${slug}`,
      images: [{ url: project.image }],
    },
    alternates: {
      canonical: `https://ohmt.site/en/templates/architecture/projects/${slug}`,
      languages: {
        "ko": `https://ohmt.site/ko/templates/architecture/projects/${slug}`,
      },
    },
  };
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  const specs = [
    { label: "LOCATION", value: project.location },
    { label: "CATEGORY", value: project.category },
    { label: "YEAR", value: project.year },
    { label: "AREA", value: project.area },
  ];

  return (
    <TemplateWrapper>
      <div className="relative min-h-screen bg-white text-[var(--color-text)] font-sans antialiased overflow-hidden selection:bg-[var(--color-text)] selection:text-white">
        <Header />

        <main className="pt-32 pb-24">
          {/* Header Link */}
          <div className="max-w-[1440px] mx-auto px-8 md:px-12 lg:px-20 py-8">
            <Link
              href="/en/templates/architecture/projects"
              className="font-sans text-[12px] font-medium tracking-[0.1em] text-[var(--color-text-secondary)] hover:text-[var(--color-text)] transition-colors"
            >
              ← BACK TO PORTFOLIO
            </Link>
          </div>

          {/* Project Title */}
          <section className="max-w-[1440px] mx-auto px-8 md:px-12 lg:px-20 pb-12">
            <ScrollReveal>
              <div className="space-y-4">
                <span className="font-sans text-[11px] font-medium tracking-[0.15em] text-[var(--color-accent)] uppercase block">
                  {project.category}
                </span>
                <h1 className="font-heading font-normal text-[48px] md:text-[60px] lg:text-[72px] leading-tight text-[var(--color-text)]">
                  {project.title}
                </h1>
              </div>
            </ScrollReveal>
          </section>

          {/* Main Visual & Info Table */}
          <section className="max-w-[1440px] mx-auto px-8 md:px-12 lg:px-20 grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20">
            {/* Image (col 8) */}
            <div className="lg:col-span-8 relative aspect-[16/10] w-full overflow-hidden bg-zinc-100">
              <Image
                src={project.image}
                alt={project.title}
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 66vw"
              />
            </div>

            {/* Specifications Table (col 4) */}
            <div className="lg:col-span-4 space-y-8 lg:pt-4">
              <ScrollReveal delay={0.1}>
                <div className="border-t border-[var(--color-border)] divide-y divide-[var(--color-border)]">
                  {specs.map((spec, i) => (
                    <div key={i} className="py-4 flex justify-between items-baseline text-[14px]">
                      <span className="font-sans font-semibold text-[var(--color-text-secondary)] tracking-wider uppercase">
                        {spec.label}
                      </span>
                      <span className="font-sans text-[var(--color-text)] font-medium text-right pl-4">
                        {spec.value}
                      </span>
                    </div>
                  ))}
                </div>
              </ScrollReveal>
            </div>
          </section>

          {/* Description Prose */}
          <section className="max-w-[1440px] mx-auto px-8 md:px-12 lg:px-20 mb-20 lg:mb-32">
            <ScrollReveal>
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                <div className="lg:col-span-8 space-y-6">
                  <h2 className="font-heading font-normal text-[28px] md:text-[32px] leading-[1.5] text-[var(--color-text)]">
                    {project.caption}
                  </h2>
                  <p className="font-sans text-[16px] leading-[1.8] text-[var(--color-text-secondary)]">
                    {project.description}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </section>

          {/* Image Gallery */}
          <section className="max-w-[1440px] mx-auto px-8 md:px-12 lg:px-20">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {project.images.map((img, index) => {
                const isThird = index === 2;
                return (
                  <ScrollReveal key={index} delay={index * 0.1}>
                    <div className={`relative w-full aspect-[4/3] overflow-hidden bg-zinc-100 ${isThird ? "md:col-span-2 lg:col-span-1" : ""}`}>
                      <Image
                        src={img}
                        alt={`${project.title} detail ${index + 1}`}
                        fill
                        className="object-cover transition-transform duration-700 ease-out hover:scale-105"
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                    </div>
                  </ScrollReveal>
                );
              })}
            </div>
          </section>
        </main>

        <Footer />
        <CustomCursor />
      </div>
    </TemplateWrapper>
  );
}
