"use client";

import { use } from "react";
import { collections } from "../../data/collections";
import { notFound } from "next/navigation";
import { motion } from "framer-motion";
import { Headphones, ArrowLeft } from "lucide-react";
import Link from "next/link";
import Header from "../../_components/layout/Header";
import Footer from "../../_components/layout/Footer";

import theme from "../../theme.json";
import { TemplateWrapper } from "../../_components/TemplateWrapper";

interface DetailPageProps {
  params: Promise<{ slug: string }>;
}

export default function ArtworkDetailPage({ params }: DetailPageProps) {
  const resolvedParams = use(params);
  const artwork = collections.find((c) => c.slug === resolvedParams.slug);

  if (!artwork) {
    notFound();
  }

  // Fallback to single image if array isn't provided
  const images = artwork.images || [artwork.img];

  return (

    <TemplateWrapper theme={theme}>

      <>
      <Header />
      <main className="antialiased min-h-screen bg-[var(--color-primary)] text-[var(--color-accent)] selection:bg-[var(--color-accent)] selection:text-[var(--color-primary)]">
      

      <div className="w-full h-auto flex flex-col md:flex-row relative">
        
        {/* LEFT: Scrolling Image Stack */}
        <div className="w-full md:w-1/2 flex flex-col gap-4 bg-[var(--color-primary)]">
          {images.map((img, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="relative w-full aspect-[3/4] md:aspect-auto md:min-h-screen overflow-hidden group"
            >
              <img 
                src={img} 
                alt={`${artwork.title} - view ${idx + 1}`}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[3s]"
              />
              <div className="absolute inset-0 bg-black/10 mix-blend-multiply" />
              {/* Badge for perspective if more than 1 image */}
              {images.length > 1 && (
                <div className="absolute bottom-6 left-6 text-[8px] uppercase tracking-[0.4em] text-white/40 bg-black/40 px-2 py-1 backdrop-blur-sm">
                  Perspective {idx + 1}
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* RIGHT: Sticky Content Section */}
        <div className="w-full md:w-1/2 md:h-screen md:sticky md:top-0 p-6 md:p-12 lg:p-20 flex flex-col justify-center bg-[var(--color-primary)]">
          <Link href="/en/templates/museum/collections" className="inline-flex items-center gap-2 text-[13px] uppercase tracking-normal text-white/40 hover:text-white transition-colors mb-8 w-fit">
            <ArrowLeft size={13} /> Back to Archive
          </Link>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="text-[13px] uppercase font-medium tracking-normal text-white/40 mb-5 block">{artwork.tag} // {artwork.year}</span>
            
            <h1 className="text-4xl md:text-6xl font-serif mb-8 leading-[1.1] tracking-tighter">
              {artwork.title}
            </h1>
            
            <div className="flex flex-col gap-2 mb-8 pb-8 border-b border-white/10 w-fit">
              <span className="text-xs uppercase tracking-[0.3em] text-white/40">Masterpiece By</span>
              <span className="text-xl tracking-widest font-serif text-white/90">{artwork.artist}</span>
            </div>

            <p className="text-base leading-[1.4] text-white/70 font-normal max-w-xl mb-8">
              {artwork.description}
            </p>

            {/* Audio Player UX */}
            <div className="group flex items-center gap-4 p-4 border border-white/10 hover:border-white/30 hover:bg-white/5 transition-all cursor-pointer w-full max-w-sm">
               <div className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-colors duration-300 shrink-0">
                  <Headphones size={14} />
               </div>
               <div className="flex flex-col">
                  <span className="text-[13px] uppercase tracking-normal font-medium mb-0.5">Curator Audio Insight</span>
                  <span className="text-[13px] text-white/40">Length: {artwork.audioDuration}</span>
               </div>
            </div>
            
            {/* Scroll Indicator for left side if multiple images */}
            {images.length > 1 && (
              <motion.div 
                animate={{ y: [0, 8, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="mt-20 flex items-center gap-3 text-[12px] uppercase tracking-[0.5em] text-white/30"
              >
                <div className="w-px h-12 bg-white/20" />
                <span>Scroll left to see details</span>
              </motion.div>
            )}
          </motion.div>
        </div>

      </div>
      </main>
      <Footer />
    </>

    </TemplateWrapper>
);
}
