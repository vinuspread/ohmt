'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'motion/react';
import { ArrowLeft, ArrowRight } from "lucide-react";
import { exhibitions } from './constants';
import ExhibitionCard from './_components/ExhibitionCard';
import { Navbar } from './_components/Navbar';
import { Footer } from './_components/Footer';
import { TemplateWrapper } from "./_components/TemplateWrapper";
import theme from "./theme.json";

const easeOut = [0.23, 1, 0.32, 1] as const;
type Tab = 'on-show' | 'opening-soon' | 'permanent';

const mosaicImages = Array.from({ length: 9 }, (_, i) => `/templates/OHMT003-exhibition/mosaic-0${i + 1}.jpg`);

const mosaicArtworksKo = [
  { title: '형태의 교차', artist: 'Sophie Laurent', year: '2024' },
  { title: '시간의 무게', artist: 'Marc Debussy', year: '2023' },
  { title: '빛의 잔상', artist: 'Elena Rostova', year: '2025' },
  { title: '침묵의 깊이', artist: 'Jean-Luc Godard', year: '2022' },
  { title: '기하학의 질서', artist: 'Anna K.', year: '2024' },
  { title: '도시의 리듬', artist: 'David Miller', year: '2023' },
  { title: '분할된 공간', artist: 'Clara Oswald', year: '2025' },
];

const events = [
  { title: '작가와의 대화: 소피 로랑', date: '2026년 6월 14일', time: '15:00', type: '작가 토크', ageRating: '18세 이상', image: '/templates/OHMT003-exhibition/event-01.jpg' },
  { title: '관찰 드로잉 워크숍', date: '2026년 6월 21일', time: '10:00', type: '워크숍', ageRating: '12세 이상', image: '/templates/OHMT003-exhibition/event-02.jpg' },
  { title: '큐레이터 전시 해설: Echoes of Form', date: '2026년 6월 28일', time: '14:00', type: '전시 해설', ageRating: '전체 관람가', image: '/templates/OHMT003-exhibition/event-01.jpg' },
  { title: '라이브 퍼포먼스: 공간 속의 몸', date: '2026년 7월 5일', time: '19:30', type: '퍼포먼스', ageRating: '16세 이상', image: '/templates/OHMT003-exhibition/event-02.jpg' },
];

export default function HomePage() {
  const [activeTab, setActiveTab] = useState<Tab>('on-show');
  const sliderRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const elementHeight = rect.height;
      const windowHeight = window.innerHeight;
      
      const scrollRange = elementHeight - windowHeight;
      if (scrollRange <= 0) return;
      
      const currentScroll = -rect.top;
      const progress = Math.min(Math.max(currentScroll / scrollRange, 0), 1);
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  // Translate right image grid by up to -620px to perfectly dock with text bottom baseline
  const y = scrollProgress <= 0.75 
    ? `${(scrollProgress / 0.75) * -620}px` 
    : '-620px';

  const filtered = exhibitions.filter((ex) => ex.status === activeTab);

  const scrollSlider = (dir: 'left' | 'right') => {
    if (!sliderRef.current) return;
    sliderRef.current.scrollBy({ left: dir === 'left' ? -340 : 340, behavior: 'smooth' });
  };

  return (
    <TemplateWrapper theme={theme}>
      <Navbar />

      {/* Section 1 - Hero */}
      <section className="min-h-screen bg-[var(--color-bg)] flex flex-col justify-between">
        <div className="max-w-[1400px] mx-auto px-6 pt-32 flex-1 flex flex-col">
          <h1 className="font-heading font-semibold uppercase leading-[var(--leading-heading)] text-black" style={{ fontSize: 'clamp(5rem, 10vw, 9rem)', letterSpacing: '-0.04em' }}>
            OHMT
          </h1>
          <div className="flex-1 grid md:grid-cols-2 gap-12 mt-12">
            <div className="aspect-[3/4] overflow-hidden">
              <img src="/templates/OHMT003-exhibition/hero-left.jpg" alt="" className="w-full h-full object-cover" />
            </div>
            <div className="flex flex-col justify-between">
              <div>
                <h2 className="max-w-[12ch] font-heading font-semibold text-black" style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', letterSpacing: '-0.03em', lineHeight: '1.2', textWrap: 'pretty' }}>
                  동시대 미술을 가까이 만나는 곳
                </h2>
                 <div className="mt-10 aspect-[3/4] overflow-hidden md:hidden">
                  <img src="/templates/OHMT003-exhibition/hero-right-sub.jpg" alt="" className="w-full h-full object-cover" />
                </div>
                <Link href="/ko/templates/OHMT003-exhibition/contact" className="relative overflow-hidden group inline-flex px-8 py-4 border border-black mt-10 active:scale-[0.97] transition-transform duration-100">
                  <span className="absolute inset-0 bg-black translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                  <span className="relative text-black group-hover:text-white text-xs font-body font-semibold uppercase tracking-[0.12em] transition-colors duration-300">전시 관람권 예매</span>
                </Link>
              </div>
              <div className="hidden md:block w-[70%] aspect-[3/4] overflow-hidden self-end">
                <img src="/templates/OHMT003-exhibition/hero-right-sub.jpg" alt="" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>

        <div className="w-full max-w-[1400px] mx-auto px-6 pb-12 mt-48 overflow-hidden">
          <div className="flex items-center justify-between mb-6">
            <span className="text-xs font-body font-semibold uppercase tracking-[0.1em] text-black/60">주요 전시</span>
            <div className="flex gap-2">
              <button onClick={() => scrollSlider('left')} className="w-8 h-8 border border-black flex items-center justify-center text-xs hover:bg-black hover:text-white active:scale-[0.95] transition duration-200"><ArrowLeft size={16} /></button>
              <button onClick={() => scrollSlider('right')} className="w-8 h-8 border border-black flex items-center justify-center text-xs hover:bg-black hover:text-white active:scale-[0.95] transition duration-200"><ArrowRight size={16} /></button>
            </div>
          </div>
          <div ref={sliderRef} className="flex w-full max-w-full gap-6 md:gap-10 overflow-x-auto" style={{ scrollbarWidth: 'none' }}>
            {exhibitions.slice(0, 3).map((ex) => (
              <div key={ex.slug} className="flex-none w-[min(340px,calc(100vw-48px))]">
                <ExhibitionCard exhibition={ex} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 2 - Mosaic */}
      <section className="relative bg-[var(--color-bg)]" style={{ height: '230vh' }}>
        {/* Sticky Overlay Text (Natural CSS sticky layout) */}
        <div className="sticky z-10 pointer-events-none max-w-[1400px] mx-auto px-6 pt-24" style={{ top: '12vh' }}>
          <h2 className="max-w-[14ch] font-heading font-semibold text-black" style={{ fontSize: 'clamp(3rem, 5vw, 4.5rem)', letterSpacing: '-0.03em', lineHeight: '1.2', textWrap: 'pretty' }}>
            지금 이곳에서 만나는 동시대 미술
          </h2>
          <p className="mt-6 text-lg font-body text-black/60 leading-relaxed max-w-[36ch]">
            회화와 조각, 설치, 사진, 뉴미디어를 통해 오늘의 감각과 질문을 서로 다른 시선으로 살펴봅니다.
          </p>
        </div>

        {/* Mosaic Image Grid (Block level grid following natural scroll flow) */}
        <div className="max-w-[1400px] mx-auto px-6 pt-[22vh] pb-[65vh]">
          {/* Row 1: wide left + portrait right */}
          <div className="grid grid-cols-3 gap-6 mb-6">
            <div className="col-span-2 aspect-[16/10] overflow-hidden group relative cursor-pointer">
              <img src={mosaicImages[0]} alt={mosaicArtworksKo[0].title} className="w-full h-full object-cover transition-transform duration-[1.5s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105" />
              <div className="absolute inset-0 bg-black/45 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-out flex flex-col justify-end p-6 z-10">
                <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-300 ease-out">
                  <span className="text-xs text-white/60 tracking-[0.2em] uppercase font-bold">{mosaicArtworksKo[0].artist}</span>
                  <h4 className="font-serif text-lg md:text-xl font-bold text-white mt-1">{mosaicArtworksKo[0].title}</h4>
                  <p className="text-xs text-white/40 mt-1 font-body">{mosaicArtworksKo[0].year}</p>
                </div>
              </div>
            </div>
            <div className="col-span-1 aspect-[16/10] overflow-hidden group relative cursor-pointer">
              <img src={mosaicImages[1]} alt={mosaicArtworksKo[1].title} className="w-full h-full object-cover transition-transform duration-[1.5s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105" />
              <div className="absolute inset-0 bg-black/45 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-out flex flex-col justify-end p-6 z-10">
                <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-300 ease-out">
                  <span className="text-xs text-white/60 tracking-[0.2em] uppercase font-bold">{mosaicArtworksKo[1].artist}</span>
                  <h4 className="font-serif text-lg md:text-xl font-bold text-white mt-1">{mosaicArtworksKo[1].title}</h4>
                  <p className="text-xs text-white/40 mt-1 font-body">{mosaicArtworksKo[1].year}</p>
                </div>
              </div>
            </div>
          </div>
          {/* Row 2: 3 equal */}
          <div className="grid grid-cols-3 gap-6 mb-6">
            {mosaicImages.slice(2, 5).map((src, index) => {
              const artwork = mosaicArtworksKo[index + 2];
              return (
                <div key={src} className="aspect-[4/3] overflow-hidden group relative cursor-pointer">
                  <img src={src} alt={artwork.title} className="w-full h-full object-cover transition-transform duration-[1.5s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105" />
                  <div className="absolute inset-0 bg-black/45 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-out flex flex-col justify-end p-6 z-10">
                    <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-300 ease-out">
                      <span className="text-xs text-white/60 tracking-[0.2em] uppercase font-bold">{artwork.artist}</span>
                      <h4 className="font-serif text-lg md:text-xl font-bold text-white mt-1">{artwork.title}</h4>
                      <p className="text-xs text-white/40 mt-1 font-body">{artwork.year}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          {/* Row 3: portrait left + wide right */}
          <div className="grid grid-cols-3 gap-6">
            <div className="col-span-1 aspect-[16/10] overflow-hidden group relative cursor-pointer">
              <img src={mosaicImages[5]} alt={mosaicArtworksKo[5].title} className="w-full h-full object-cover transition-transform duration-[1.5s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105" />
              <div className="absolute inset-0 bg-black/45 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-out flex flex-col justify-end p-6 z-10">
                <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-300 ease-out">
                  <span className="text-xs text-white/60 tracking-[0.2em] uppercase font-bold">{mosaicArtworksKo[5].artist}</span>
                  <h4 className="font-serif text-lg md:text-xl font-bold text-white mt-1">{mosaicArtworksKo[5].title}</h4>
                  <p className="text-xs text-white/40 mt-1 font-body">{mosaicArtworksKo[5].year}</p>
                </div>
              </div>
            </div>
            <div className="col-span-2 aspect-[16/10] overflow-hidden group relative cursor-pointer">
              <img src={mosaicImages[6]} alt={mosaicArtworksKo[6].title} className="w-full h-full object-cover transition-transform duration-[1.5s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105" />
              <div className="absolute inset-0 bg-black/45 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-out flex flex-col justify-end p-6 z-10">
                <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-300 ease-out">
                  <span className="text-xs text-white/60 tracking-[0.2em] uppercase font-bold">{mosaicArtworksKo[6].artist}</span>
                  <h4 className="font-serif text-lg md:text-xl font-bold text-white mt-1">{mosaicArtworksKo[6].title}</h4>
                  <p className="text-xs text-white/40 mt-1 font-body">{mosaicArtworksKo[6].year}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3 - Exhibition List */}
      <section className="relative z-30 bg-[#FCFCFC] pt-28 pb-32" style={{ backgroundColor: 'var(--color-bg)' }}>
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div>
              <p className="text-xs font-body font-semibold uppercase tracking-[0.1em] text-black/60 mb-2">전시 일정</p>
              <h2 className="font-heading font-semibold text-black" style={{ fontSize: 'clamp(3.5rem, 5vw, 5rem)', letterSpacing: '-0.03em', lineHeight: '1.2' }}>
                현재 전시
              </h2>
            </div>
            <div className="flex flex-col items-start md:items-end justify-end">
              <p className="text-xs font-body text-black/40 uppercase tracking-[0.08em] mb-2">{exhibitions.length}개 전시</p>
              <Link href="/ko/templates/OHMT003-exhibition/exhibitions" className="text-xs font-body font-semibold uppercase tracking-[0.12em] text-black border-b border-black pb-0.5 hover:opacity-60 transition-opacity">
                전체 보기
              </Link>
            </div>
          </div>

          <div className="flex gap-10 mb-12 border-b border-[var(--color-border)]">
            {(['on-show', 'opening-soon', 'permanent'] as const).map((tab) => (
              <button key={tab} onClick={() => setActiveTab(tab)} className="pb-3 text-xs font-body font-semibold uppercase tracking-[0.12em] transition-colors duration-200 active:scale-[0.97]"
                style={{ color: activeTab === tab ? '#000000' : 'rgba(0,0,0,0.4)', borderBottom: activeTab === tab ? '2px solid #000000' : '2px solid transparent' }}>
                {tab === 'on-show' ? '현재 전시' : tab === 'opening-soon' ? '개막 예정' : '상설 전시'}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
            {filtered.map((ex) => <ExhibitionCard key={ex.slug} exhibition={ex} />)}
          </div>
        </div>
      </section>

      {/* Section 4 - Plan Your Visit */}
      <section className="bg-[var(--color-bg-dark)] py-32">
        <div className="max-w-[1400px] mx-auto px-6">
          <h2 className="max-w-[14ch] font-heading font-semibold text-white mb-20" style={{ fontSize: 'clamp(3.5rem, 5vw, 5rem)', letterSpacing: '-0.03em', lineHeight: '1.2', textWrap: 'pretty' }}>
            갤러리 관람 안내
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-12 gap-y-14 border-t border-white/15 pt-16">
            {[
              { label: '주소', value: '123 West 25th Street\nNew York, NY 10001' },
              { label: '관람 시간', value: '화–금 10:00–18:00\n토–일 10:00–20:00\n월요일 휴관' },
              { label: '전화', value: '+1 (212) 555-0147' },
              { label: '이메일', value: 'info@formagallery.com' },
            ].map((info) => (
              <div key={info.label} className="break-words">
                <p className="text-xs font-body font-semibold uppercase tracking-[0.12em] text-white/35 mb-4">{info.label}</p>
                <p className="text-[1.25rem] font-heading font-semibold text-white whitespace-pre-line leading-[var(--leading-body)]" style={{ letterSpacing: '-0.02em' }}>{info.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5 - Events */}
      <section className="bg-[var(--color-bg)] py-32">
        <div className="max-w-[1400px] mx-auto px-6">
          <h2 className="max-w-[14ch] font-heading font-semibold text-black mb-16" style={{ fontSize: 'clamp(3.5rem, 5vw, 5rem)', letterSpacing: '-0.03em', lineHeight: '1.2', textWrap: 'pretty' }}>
            다가오는 프로그램
          </h2>
          <div className="grid md:grid-cols-2 gap-10">
            {events.slice(0, 2).map((evt) => (
              <div key={evt.title} className="group cursor-pointer">
                <div className="aspect-[16/9] overflow-hidden">
                  <img src={evt.image} alt={evt.title} className="w-full h-full object-cover transition-transform duration-300 ease-out group-hover:scale-105" />
                </div>
                <div className="flex items-center justify-between mt-6">
                  <p className="text-xs font-body text-black/50 tracking-[0.06em]">{evt.date} <span className="mx-1.5 opacity-40">·</span> {evt.time}</p>
                  <div className="flex gap-2">
                    <span className="text-xs font-body font-semibold uppercase tracking-[0.1em] px-2.5 py-1 border border-black">{evt.type}</span>
                    <span className="text-xs font-body font-semibold uppercase tracking-[0.1em] text-white bg-black px-2.5 py-1">{evt.ageRating}</span>
                  </div>
                </div>
                <h3 className="mt-3 text-[1.25rem] font-heading font-semibold tracking-[-0.02em] text-black leading-[var(--leading-heading)]">{evt.title}</h3>
              </div>
            ))}
          </div>
          <div className="mt-16">
            <Link href="/ko/templates/OHMT003-exhibition/events" className="text-xs font-body font-semibold uppercase tracking-[0.12em] text-black border-b border-black pb-0.5 hover:opacity-60 transition-opacity">
              전체 프로그램 보기
            </Link>
          </div>
        </div>
      </section>

      <p className="text-center text-[11px] leading-relaxed text-neutral-400 px-6 py-6">이 페이지는 실제 고객사나 운영 중인 업체가 아닌 OHMT의 웹사이트 디자인 템플릿 데모입니다. 표시된 브랜드명, 인물, 후기, 연락처와 성과 수치는 예시 콘텐츠입니다.</p>
      <Footer />
    </TemplateWrapper>
  );
}
