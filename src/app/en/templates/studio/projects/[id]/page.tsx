'use client';
import React, { use } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Header } from '../../_components/Header';
import { Footer } from '../../_components/Footer';
import { PageHeader } from '../../_components/PageHeader';
import { ArrowRight } from 'lucide-react';
import theme from '../../theme.json';
import { TemplateWrapper } from '../../_components/TemplateWrapper';

const projectsData = [
  {
    id: 'proj-1',
    title: 'Nordic Monolith Office',
    category: 'Space Planning',
    year: '2026',
    location: 'Oslo, Norway',
    image: '/templates/studio/project-1.jpg',
    type: 'corporate',
    description: 'A cutting-edge corporate headquarters meticulously conceptualized to combine raw Scandinavian minimalism with unparalleled modern functionality. By optimizing the interplay between monolithic concrete volumes, high-density metal frame details, and organic light distribution, the space establishes an inspiring professional environment that fosters deep focus, high-fidelity collaboration, and holistic employee well-being.',
    details: 'This 8,000 sq ft office space features an open-plan layout with dedicated collaboration zones, executive suites, and quiet focus areas. The material palette includes natural oak, brushed steel, and soft concrete finishes. Custom lighting systems adjust throughout the day to support circadian rhythms.',
    services: ['Space Planning', 'Interior Design', 'Lighting Design', 'Furniture Selection'],
    gallery: ['/templates/studio/project-1.jpg', '/templates/studio/hero-2.jpg', '/templates/studio/hero-3.jpg'],
  },
  {
    id: 'proj-2',
    title: 'The Alabaster Residence',
    category: 'Design Philosophy',
    year: '2025',
    location: 'Kyoto, Japan',
    image: '/templates/studio/project-2.jpg',
    type: 'residential',
    description: 'A luxury residential retreat designed to evoke calm and contemplation. Drawing inspiration from Japanese minimalism, the home integrates natural materials, water features, and carefully curated negative space to create a sanctuary for modern living.',
    details: 'This 5,000 sq ft residence spans three levels with panoramic views of the surrounding landscape. Features include a meditation garden, home spa with onsen-inspired bath, and a library with floor-to-ceiling bookshelves. Every detail, from door hardware to tile grout, was selected with intention.',
    services: ['Residential Design', 'Material Curation', 'Custom Millwork', 'Landscape Integration'],
    gallery: ['/templates/studio/project-2.jpg', '/templates/studio/hero-1.jpg', '/templates/studio/hero-2.jpg'],
  },
  {
    id: 'proj-3',
    title: 'Geometric Timber Pavilion',
    category: 'Object Curation',
    year: '2025',
    location: 'Basel, Switzerland',
    image: '/templates/studio/project-3.jpg',
    type: 'exhibition',
    description: 'An architectural installation merging sculpture and spatial design. This temporary pavilion showcases how geometric forms and timber construction can create immersive environments that challenge perception and engage visitors on multiple sensory levels.',
    details: 'Constructed from sustainably harvested timber, the pavilion spans 1,200 sq meters with a soaring 12-meter ceiling. The structure employs a series of interlocking geometric forms that create dramatic light patterns throughout the day. Visitors experience constantly shifting perspectives as they move through the space.',
    services: ['Spatial Design', 'Material Innovation', 'Structural Collaboration', 'Experiential Design'],
    gallery: ['/templates/studio/project-3.jpg', '/templates/studio/hero-3.jpg', '/templates/studio/hero-1.jpg'],
  },
];

export default function ProjectDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);
  const project = projectsData.find((p) => p.id === id);

  if (!project) {
    return (
      <TemplateWrapper theme={theme}>
        <main className="min-h-screen bg-white text-black">
          <Header />
          <div className="max-w-[1720px] mx-auto px-6 md:px-16 lg:px-24 py-48 text-center">
            <h1 className="text-4xl font-bold">Project not found</h1>
            <Link href="/en/templates/studio/projects" className="text-blue-600 hover:underline mt-6 inline-block">
              Back to projects
            </Link>
          </div>
          <Footer />
        </main>
      </TemplateWrapper>
    );
  }

  const relatedProjects = projectsData.filter((p) => p.id !== id).slice(0, 2);

  return (
    <TemplateWrapper theme={theme}>
      <main className="antialiased min-h-screen bg-white text-black font-sans selection:bg-black selection:text-white">
        <Header />

        {/* Hero Image Full Width */}
        <section className="relative w-full h-screen max-h-[900px] overflow-hidden bg-black">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/30" />

          {/* Meta Info Overlay */}
          <div className="absolute inset-0 flex items-end">
            <div className="max-w-[1720px] w-full mx-auto px-6 md:px-16 lg:px-24 pb-12 md:pb-24">
              <div className="grid grid-cols-3 gap-12 md:gap-24 max-w-2xl">
                <div>
                  <span className="text-[12px] font-bold tracking-[2px] uppercase text-white/70 block mb-2">
                    Year
                  </span>
                  <p className="text-[16px] md:text-[20px] text-white">{project.year}</p>
                </div>
                <div>
                  <span className="text-[12px] font-bold tracking-[2px] uppercase text-white/70 block mb-2">
                    Location
                  </span>
                  <p className="text-[16px] md:text-[20px] text-white">{project.location}</p>
                </div>
                <div>
                  <span className="text-[12px] font-bold tracking-[2px] uppercase text-white/70 block mb-2">
                    Category
                  </span>
                  <p className="text-[16px] md:text-[20px] text-white">{project.category}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Project Title Section */}
        <section className="bg-white border-b border-black/5">
          <div className="max-w-[1720px] mx-auto px-6 md:px-16 lg:px-24 py-12 md:py-20">
            <h1 className="text-[1.7rem] md:text-[3rem] md:text-[5rem] lg:text-[6rem] font-bold leading-[1.1] text-black">
              {project.title}
            </h1>
          </div>
        </section>

        {/* Project Content Section */}
        <section className="bg-white">
          {/* Intro Text */}
          <div className="max-w-2xl mx-auto px-6 md:px-12 py-16 md:py-24">
            <p className="text-[18px] md:text-[20px] leading-[1.4] text-black/80">
              {project.description}
            </p>
          </div>

          {/* Services Section - Full Width */}
          <div className="border-y border-black/5 py-16 md:py-24">
            <div className="max-w-[1720px] mx-auto px-6 md:px-16 lg:px-24">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
                {project.services.map((service, idx) => (
                  <div key={idx}>
                    <div className="w-8 h-8 rounded-none bg-black/10 mb-6 flex items-center justify-center text-[12px] font-bold text-black">
                      {idx + 1}
                    </div>
                    <h4 className="text-[16px] font-bold text-black">{service}</h4>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Details Section - 2 Columns */}
          <div className="max-w-[1720px] mx-auto px-6 md:px-16 lg:px-24 py-16 md:py-24">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
              <div>
                <h2 className="text-[28px] font-bold mb-6 text-black">About This Project</h2>
                <p className="text-[16px] leading-[1.4] text-black/70">
                  {project.details}
                </p>
              </div>
              <div>
                <h2 className="text-[28px] font-bold mb-6 text-black">Key Features</h2>
                <ul className="space-y-4">
                  <li className="flex gap-4 items-start">
                    <div className="w-1 h-6 bg-black mt-1 flex-shrink-0" />
                    <span className="text-[16px] text-black/70">Thoughtfully designed spatial planning with modern functionality</span>
                  </li>
                  <li className="flex gap-4 items-start">
                    <div className="w-1 h-6 bg-black mt-1 flex-shrink-0" />
                    <span className="text-[16px] text-black/70">Premium material selection and custom finishes</span>
                  </li>
                  <li className="flex gap-4 items-start">
                    <div className="w-1 h-6 bg-black mt-1 flex-shrink-0" />
                    <span className="text-[16px] text-black/70">Strategic lighting design and optimal ambiance</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Gallery Section - Masonry Style */}
          <div className="border-t border-black/5 bg-gray-50 py-16 md:py-24">
            <div className="max-w-[1720px] mx-auto px-6 md:px-16 lg:px-24">
              <h2 className="text-[32px] font-bold mb-12 text-black">Project Gallery</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {project.gallery.map((image, idx) => (
                  <div
                    key={idx}
                    className={`relative overflow-hidden bg-gray-200 group cursor-pointer ${
                      idx === 0 ? 'md:col-span-2 md:row-span-2 h-[400px] md:h-[500px]' : 'h-[300px] md:h-[240px]'
                    }`}
                  >
                    <Image
                      src={image}
                      alt={`${project.title} - Image ${idx + 1}`}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Related Projects */}
        <section className="py-12 md:py-24 bg-white border-b border-black/5">
          <div className="max-w-[1720px] mx-auto px-6 md:px-16 lg:px-24">
            <h2 className="text-[32px] font-bold leading-[1.1] mb-16 text-black">
              Related Projects
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {relatedProjects.map((relProject) => (
                <Link
                  key={relProject.id}
                  href={`/en/templates/studio/projects/${relProject.id}`}
                  className="group"
                >
                  <div className="relative w-full h-[350px] overflow-hidden mb-6">
                    <Image
                      src={relProject.image}
                      alt={relProject.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-[20px] font-bold text-black group-hover:opacity-60 transition-opacity">
                        {relProject.title}
                      </h3>
                      <p className="text-[14px] text-black/60 mt-2">{relProject.location}</p>
                    </div>
                    <ArrowRight size={20} className="text-black group-hover:translate-x-2 transition-transform" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-black text-white">
          <div className="max-w-[1720px] mx-auto px-6 md:px-16 lg:px-24 text-center">
            <h2 className="text-[32px] md:text-[48px] font-bold mb-8 leading-[1.1]">
              Ready to transform your space?
            </h2>
            <p className="text-[16px] text-white/70 mb-12 max-w-[600px] mx-auto">
              Let's discuss your project and how we can create something exceptional together.
            </p>
            <Link
              href="/en/templates/studio/contact"
              className="inline-flex items-center justify-center h-[54px] px-12 border border-white rounded-none text-white text-[13px] font-bold tracking-[3px] uppercase hover:bg-white hover:text-black transition-colors duration-300"
            >
              Get in Touch
            </Link>
          </div>
        </section>

        <Footer />
      </main>
    </TemplateWrapper>
  );
}
