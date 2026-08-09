"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Focus, Menu, Moon, Smartphone, Sparkles, X } from "lucide-react";
import { ResponsiveText } from "./_components/ResponsiveText";
import { TemplateWrapper } from "./_components/TemplateWrapper";

const moments = [
  { label: "아침 거리", value: "1/500", detail: "전원을 빠르게 켜고 조용한 셔터로 순간을 놓치지 않습니다." },
  { label: "스튜디오", value: "45 MP", detail: "45MP 해상도로 작은 부분을 잘라 사용해도 질감과 색을 유지합니다." },
  { label: "블루아워", value: "ISO 12800", detail: "노이즈를 과도하게 지우지 않고 저녁의 빛과 분위기를 남깁니다." },
];

const products = [
  {
    slug: "luma-one",
    name: "LUMA One",
    price: "₩2,490,000",
    note: "매일 가볍게 들고 다니는 기본 모델",
    spec: "28mm 고정식 렌즈",
    image: "/templates/OHMT031-luma-camera/product-one.jpg?v=20260702e",
  },
  {
    slug: "luma-one-pro",
    name: "LUMA One Pro",
    price: "₩3,190,000",
    note: "촬영 작업과 여행에 알맞은 확장 모델",
    spec: "28mm 렌즈·전용 그립",
    image: "/templates/OHMT031-luma-camera/product-pro.jpg?v=20260702e",
  },
];

const photoSamples = [
  {
    title: "창가 인물",
    text: "피부톤을 자연스럽게 유지하면서 니트와 세라믹의 색도 균형 있게 표현합니다.",
    image: "/templates/OHMT031-luma-camera/sample-portrait.png?v=20260703a",
  },
  {
    title: "블루아워 풍경",
    text: "과도한 HDR 효과 없이 푸른 하늘과 도시의 작은 불빛을 구분해 담습니다.",
    image: "/templates/OHMT031-luma-camera/sample-landscape.png?v=20260703a",
  },
  {
    title: "생활 정물",
    text: "컵과 과일, 천처럼 익숙한 소재의 색을 과장 없이 자연스럽게 표현합니다.",
    image: "/templates/OHMT031-luma-camera/sample-color.jpg?v=20260702e",
  },
  {
    title: "실내 저조도",
    text: "푸른 창밖과 따뜻한 실내 조명이 한 화면에서도 서로 다른 색감을 유지합니다.",
    image: "/templates/OHMT031-luma-camera/sample-lowlight.jpg?v=20260702e",
  },
];

const imageQuality = [
  {
    label: "컬러",
    title: "바로 사용할 수 있는 자연스러운 색",
    text: "인물과 세라믹, 과일, 천이 한 화면에 있어도 각 소재의 색을 자연스럽게 구분합니다.",
    image: "/templates/OHMT031-luma-camera/engine-color-grid.jpg?v=20260702f",
  },
  {
    label: "저조도",
    title: "어두운 장면에서도 조명의 분위기를 그대로",
    text: "저녁과 실내 촬영에서 과도한 노이즈 제거를 줄이고 어두운 영역의 디테일을 유지합니다.",
    image: "/templates/OHMT031-luma-camera/engine-lowlight-room.jpg?v=20260702f",
  },
  {
    label: "디테일",
    title: "표면은 선명하게, 윤곽은 자연스럽게",
    text: "천과 세라믹, 종이, 금속의 질감을 과도한 선명도 효과 없이 표현합니다.",
    image: "/templates/OHMT031-luma-camera/engine-texture-close.jpg?v=20260702f",
  },
];

const EASE = [0.23, 1, 0.32, 1] as const;

function Reveal({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={reduceMotion ? false : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.55, delay, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}

export default function LumaCameraPage() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const navItems = [
    { label: "이미지 엔진", href: "/ko/templates/OHMT031-luma-camera/image-engine" },
    { label: "촬영 장면", href: "/ko/templates/OHMT031-luma-camera/scenes" },
    { label: "촬영 노트", href: "/ko/templates/OHMT031-luma-camera/stories" },
    { label: "제품", href: "/ko/templates/OHMT031-luma-camera/shop" },
  ];
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "OnlineStore",
    name: "LUMA Camera",
    description: "작은 바디와 자연스러운 색 표현, 촬영 노트 기능을 갖춘 컴팩트 카메라입니다.",
    url: "https://ohmt.site/ko/templates/OHMT031-luma-camera",
    image: "https://ohmt.site/templates/OHMT031-luma-camera/og-image.jpg?v=20260702e",
    brand: {
      "@type": "Brand",
      name: "OHMT",
    },
    makesOffer: products.map((product) => ({
      "@type": "Offer",
      name: product.name,
      price: product.price.replace("₩", "").replace(",", ""),
      priceCurrency: "KRW",
      itemOffered: {
        "@type": "Product",
        name: product.name,
        description: `${product.note}. ${product.spec}.`,
        image: "https://ohmt.site/templates/OHMT031-luma-camera/hero-camera.jpg?v=20260702e",
      },
    })),
  };

  return (
    <TemplateWrapper>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <header className="fixed left-0 right-0 top-0 z-40 bg-[var(--luma-dark)] px-4 md:px-9">
        <nav className="mx-auto flex h-16 max-w-[1380px] items-center justify-between text-white">
          <Link href="/ko/templates/OHMT031-luma-camera" className="inline-flex min-h-12 items-center text-sm font-black tracking-[0.14em] text-white">
            OHMT
          </Link>
          <div className="hidden items-center gap-3 text-xs font-semibold text-white/70 md:flex lg:gap-6">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className="inline-flex min-h-12 min-w-12 items-center justify-center px-2 transition-colors hover:text-white">
                {item.label}
              </Link>
            ))}
          </div>
          <Link href="/ko/templates/OHMT031-luma-camera/shop" className="hidden min-h-12 items-center justify-center bg-white/10 px-4 text-xs font-bold text-white transition-colors hover:bg-white hover:text-[var(--luma-dark)] md:inline-flex">
            구매하기</Link>
          <button
            type="button"
            onClick={() => setMobileOpen((open) => !open)}
            className="inline-flex h-12 w-12 items-center justify-center border border-white/20 text-white md:hidden"
            aria-label={mobileOpen ? "메뉴 닫기" : "메뉴 열기"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X size={19} strokeWidth={1.8} /> : <Menu size={19} strokeWidth={1.8} />}
          </button>
        </nav>
        {mobileOpen && (
          <div className="mx-auto max-w-[1380px] border-t border-white/10 py-4 md:hidden">
            <div className="grid gap-1">
              {navItems.map((item) => (
                <Link key={item.href} href={item.href} onClick={() => setMobileOpen(false)} className="px-1 py-3 text-sm font-semibold text-white/80">
                  {item.label}
                </Link>
              ))}
              <Link href="/ko/templates/OHMT031-luma-camera/shop" onClick={() => setMobileOpen(false)} className="mt-2 inline-flex min-h-12 items-center justify-center bg-white text-xs font-bold text-[var(--luma-dark)]">
                구매하기</Link>
            </div>
          </div>
        )}
      </header>

      <main className="overflow-hidden">
        <section className="luma-grain px-4 pb-16 pt-24 md:px-9 md:pb-24">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, ease: EASE }}
            className="relative mx-auto min-h-[76dvh] max-w-[1380px] overflow-hidden bg-[var(--luma-dark)] shadow-2xl shadow-black/10"
          >
            <Image unoptimized src="/templates/OHMT031-luma-camera/hero-camera.jpg?v=20260702e" alt="LUMA 컴팩트 카메라 제품 이미지" fill priority className="object-cover" sizes="100vw" />
            <div className="absolute inset-0 bg-gradient-to-br from-black/75 via-black/30 to-black/5" />
            <div className="absolute left-0 top-0 p-6 text-white md:p-9 lg:p-12">
              <p className="luma-label mb-4 text-white/60">컴팩트 이미지 시스템</p>
              <h1 className="luma-h1 max-w-[560px]" style={{ textWrap: "pretty" } as React.CSSProperties}>
                작은 바디로 더 자주 기록합니다.</h1>
              <p className="luma-body mt-6 max-w-[560px] !text-white/70">
                <ResponsiveText>
                  {"휴대하기 좋은 작은 바디로 거리와 작업실, 식탁의 순간을 자연스럽게 기록합니다.\n촬영 정보와 컬러 설정은 사진과 함께 저장됩니다."}
                </ResponsiveText>
              </p>
              <div className="mt-9 flex flex-row gap-3">
                <Link href="/ko/templates/OHMT031-luma-camera/shop" className="inline-flex items-center justify-center gap-2 bg-white px-6 py-3 text-sm font-bold text-[var(--luma-ink)] transition-transform duration-200 ease-out active:scale-[0.97]">
                  제품 보기<ArrowRight size={16} />
                </Link>
                <Link href="/ko/templates/OHMT031-luma-camera/image-engine" className="inline-flex items-center justify-center bg-white/12 px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-white/20">
                  이미지 엔진 알아보기</Link>
              </div>
            </div>
          </motion.div>
        </section>

        <section className="px-4 pb-24 md:px-9 md:pb-32">
          <div className="mx-auto grid max-w-[1380px] gap-4 md:grid-cols-2">
            {products.map((product) => (
              <Reveal key={product.name}>
                <div className="group overflow-hidden bg-white/60 shadow-xl shadow-black/[0.04]">
                  <div className="relative aspect-[4/3] overflow-hidden bg-[var(--luma-soft)]">
                    <Image unoptimized src={product.image} alt={`${product.name} 제품 이미지`} fill className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]" sizes="(min-width: 768px) 50vw, 100vw" />
                  </div>
                  <div className="flex flex-col gap-6 p-6 md:flex-row md:items-end md:justify-between md:p-9">
                    <div>
                      <p className="luma-label text-[var(--luma-muted)]">{product.spec}</p>
                      <h2 className="mt-3 text-2xl font-bold tracking-[-0.035em]">{product.name}</h2>
                      <p className="mt-3 text-sm leading-6 text-[var(--luma-muted)]">{product.note}</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <Link href={`/ko/templates/OHMT031-luma-camera/product/${product.slug}`} className="inline-flex min-h-12 items-center justify-center border border-[var(--luma-dark)]/15 px-6 text-sm font-bold text-[var(--luma-ink)] hover:bg-[var(--luma-dark)]/5 transition-colors">
                        자세히 보기
                      </Link>
                      <Link href={`/ko/templates/OHMT031-luma-camera/product/${product.slug}`} className="inline-flex min-h-12 items-center bg-[var(--luma-dark)] px-6 text-sm font-bold text-white transition-transform duration-200 ease-out active:scale-[0.97]">
                        구매하기</Link>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        <section id="image-engine" className="px-4 pb-24 md:px-9 md:pb-32">
          <div className="mx-auto grid max-w-[1380px] gap-12 lg:grid-cols-2">
            <Reveal>
              <div className="max-w-2xl">
                <Focus size={25} strokeWidth={1.5} />
                <h2 className="luma-h2 mt-6">
                  작은 카메라로도 오래 활용할 수 있는 결과물.</h2>
                <p className="luma-body mt-6" style={{ textWrap: "pretty" } as React.CSSProperties}>
                  <ResponsiveText>
                    {"색과 저조도, 디테일을 과장하지 않고 촬영 직후 바로 활용할 수 있는 결과를 제공합니다.\n촬영 메모와 설정도 사진과 함께 저장됩니다."}
                  </ResponsiveText>
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <div className="space-y-9">
                <div className="grid gap-4 md:grid-cols-3">
                  {imageQuality.map((item) => (
                    <article key={item.label} className="overflow-hidden bg-white/55 shadow-lg shadow-black/[0.04]">
                      <div className="relative aspect-[7/5] overflow-hidden">
                        <Image unoptimized src={item.image} alt={`LUMA ${item.label} 촬영 결과 샘플`} fill className="object-cover" sizes="(min-width: 768px) 28vw, 100vw" />
                      </div>
                      <div className="p-6">
                        <p className="luma-label text-[var(--luma-muted)]">{item.label}</p>
                        <h3 className="luma-h3 mt-4 break-keep">{item.title}</h3>
                        <p className="mt-3 text-sm leading-6 text-[var(--luma-muted)]">{item.text}</p>
                      </div>
                    </article>
                  ))}
                </div>

                <div className="grid gap-4 lg:grid-cols-2">
                  <div className="luma-card-dark">
                    <Smartphone size={22} strokeWidth={1.5} />
                    <h3 className="luma-h3 mt-6">촬영 메모를 사진과 함께 저장합니다.</h3>
                    <p className="mt-4 max-w-xl text-sm leading-6 text-white/70">
                      렌즈와 컬러 설정, 촬영 장소, 컬렉션 정보를 한 번에 기록해 원하는 사진을 쉽게 다시 찾을 수 있습니다.</p>
                  </div>
                  <div className="grid bg-[var(--luma-bg)] sm:grid-cols-3 lg:grid-cols-1">
                    {moments.map((item) => (
                      <div key={item.label} className="luma-card !p-6">
                        <p className="luma-label text-[var(--luma-muted)]">{item.label}</p>
                        <p className="mt-2 text-2xl font-bold tracking-[-0.035em]">{item.value}</p>
                        <p className="mt-2 text-sm leading-6 text-[var(--luma-muted)]">{item.detail}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        <section id="scenes" className="px-4 pb-24 md:px-9 md:pb-32">
          <div className="mx-auto max-w-[1380px]">
            <Reveal>
              <div className="max-w-3xl">
                <h2 className="luma-h2">
                  카메라가 남기는 결과부터 확인하세요.</h2>
                <p className="luma-body mt-6 max-w-2xl">
                  <ResponsiveText>
                    {"인물의 피부톤과 풍경의 원경, 실내의 어두운 영역,\n가까운 소재의 질감을 직접 확인해보세요."}
                  </ResponsiveText>
                </p>
              </div>
            </Reveal>

            <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              {photoSamples.map((sample, index) => (
                <Reveal key={sample.title} delay={index * 0.05}>
                  <article className="group relative aspect-[3/4] overflow-hidden bg-[var(--luma-dark)] shadow-xl shadow-black/[0.06]">
                    <div className="absolute inset-0">
                      <Image unoptimized src={sample.image} alt={`LUMA로 촬영한 ${sample.title} 샘플`} fill className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]" sizes="(min-width: 1024px) 33vw, 100vw" />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/24 to-transparent" />
                    <div className="absolute bottom-0 left-0 max-w-xl p-6 text-white">
                      <h3 className="text-lg font-bold tracking-[-0.035em]">{sample.title}</h3>
                      <p className="mt-2 text-xs leading-relaxed text-white/80">{sample.text}</p>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section id="stories" className="px-4 pb-24 md:px-9 md:pb-32">
          <div className="mx-auto grid max-w-[1380px] gap-4 lg:grid-cols-2">
            <Reveal>
              <div className="group relative min-h-[620px] overflow-hidden bg-[var(--luma-dark)]">
                <Image unoptimized src="/templates/OHMT031-luma-camera/engine-lowlight-room.jpg?v=20260702f" alt="따뜻한 실내 조명과 푸른 창밖 빛의 LUMA 저조도 샘플" fill className="object-cover transition-transform duration-700 ease-out group-hover:scale-105" sizes="(min-width: 1024px) 58vw, 100vw" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                <div className="absolute bottom-0 max-w-xl p-6 text-white md:p-9">
                  <Moon size={24} strokeWidth={1.5} />
                  <h2 className="luma-h2 mt-6">밤의 밝기와 색을 자연스럽게 남깁니다.</h2>
                </div>
              </div>
            </Reveal>

            <div className="grid gap-4">
              <Reveal delay={0.08}>
                <div className="relative min-h-[300px] overflow-hidden bg-white">
                  <Image unoptimized src="/templates/OHMT031-luma-camera/body-detail.jpg?v=20260702e" alt="LUMA 카메라 바디와 렌즈 디테일" fill className="object-cover" sizes="(min-width: 1024px) 40vw, 100vw" />
                </div>
              </Reveal>
              <Reveal delay={0.12}>
                <div className="relative min-h-[300px] overflow-hidden bg-white">
                  <Image unoptimized src="/templates/OHMT031-luma-camera/app-insight.jpg?v=20260702e" alt="LUMA 앱과 카메라" fill className="object-cover" sizes="(min-width: 1024px) 40vw, 100vw" />
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        <section className="bg-[var(--luma-dark)] px-4 py-24 text-white md:px-9 md:py-32">
          <div className="mx-auto grid max-w-[1380px] items-center gap-12 lg:grid-cols-2">
            <Reveal>
              <div>
                <Smartphone size={26} strokeWidth={1.5} />
                <h2 className="luma-h2 mt-6">
                  앱에 촬영 정보와 메모를 함께 기록합니다.</h2>
                <p className="luma-body mt-6 max-w-xl !text-white/70">
                  <ResponsiveText>
                    {"렌즈와 컬러 설정, 위치, 컬렉션 정보를 사진과 함께 저장합니다.\n시간이 지나도 촬영 환경과 의도를 쉽게 확인할 수 있습니다."}
                  </ResponsiveText>
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image unoptimized src="/templates/OHMT031-luma-camera/app-collection-view.jpg?v=20260702f" alt="LUMA 앱 컬렉션 화면과 카메라" fill className="object-cover" sizes="(min-width: 1024px) 48vw, 100vw" />
              </div>
            </Reveal>
          </div>
        </section>

        <section id="shop" className="px-4 pb-24 md:px-9 md:pb-32">
          <div className="mx-auto max-w-[1380px]">
            <Reveal>
              <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
                <div>
                  <Sparkles size={24} strokeWidth={1.5} />
                  <h2 className="luma-h2 mt-6 max-w-3xl">
                    촬영 방식에 맞는 모델을 선택하세요.</h2>
                </div>
                <p className="max-w-sm text-sm leading-6 text-[var(--luma-muted)]">
                  <ResponsiveText>
                    {"One은 일상과 여행에 적합하고, Pro는 그립과 확장 구성으로 반복 촬영에 유리합니다.\n이미지 프로파일과 앱 기능은 동일합니다."}
                  </ResponsiveText>
                </p>
              </div>
            </Reveal>

            <div className="mt-12 grid gap-4 md:grid-cols-2">
              {products.map((product) => (
                <Reveal key={product.name}>
                  <div className="luma-card shadow-xl shadow-black/[0.04]">
                    <h3 className="text-2xl font-bold tracking-[-0.035em]">{product.name}</h3>
                    <p className="mt-2 text-sm text-[var(--luma-muted)]">{product.note}</p>
                    <p className="mt-3 text-lg font-bold tracking-[-0.035em]">{product.price}</p>
                    <div className="mt-6 grid gap-3 text-sm text-[var(--luma-muted)]">
                      <div className="flex items-center justify-between bg-[var(--luma-soft)] px-4 py-3">
                        <span>컬러 프로파일</span>
                        <span className="font-bold text-[var(--luma-ink)]">중립 / 따뜻함</span>
                      </div>
                      <div className="flex items-center justify-between bg-[var(--luma-soft)] px-4 py-3">
                        <span>촬영 모드</span>
                        <span className="font-bold text-[var(--luma-ink)]">{product.name.includes("Pro") ? "그립·노트" : "일상 휴대"}</span>
                      </div>
                    </div>
                    <div className="mt-6 flex items-center justify-between">
                      <span className="text-sm font-semibold text-[var(--luma-muted)]">{product.spec}</span>
                      <Link
                        href={`/ko/templates/OHMT031-luma-camera/product/${product.slug}`}
                        className="inline-flex min-h-11 items-center bg-[var(--luma-dark)] px-6 py-3 text-sm font-bold text-white transition-transform duration-200 ease-out active:scale-[0.97]"
                      >
                        구매하기
                      </Link>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="px-4 py-12 md:px-9">
        <div className="mx-auto flex max-w-[1380px] flex-col gap-4 text-sm text-[var(--luma-muted)] md:flex-row md:items-center md:justify-between">
          <p className="font-bold text-[var(--luma-ink)]">OHMT LUMA</p>
          <p>© 2026 OHMT. LUMA Camera.</p>
        </div>
      </footer>
    </TemplateWrapper>
  );
}
