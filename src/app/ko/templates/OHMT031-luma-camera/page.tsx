"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Focus, Moon, Smartphone, Sparkles } from "lucide-react";
import { TemplateWrapper } from "./_components/TemplateWrapper";

const moments = [
  { label: "아침 거리", value: "1/500", detail: "손이 올라가기 전에 켜지고, 셔터음은 작게 남습니다." },
  { label: "스튜디오", value: "45 MP", detail: "작은 오브젝트를 잘라도 표면과 색이 버팁니다." },
  { label: "블루아워", value: "ISO 12800", detail: "노이즈를 밀어 없애기보다 빛의 온도를 남깁니다." },
];

const products = [
  {
    name: "LUMA One",
    price: "$1,890",
    note: "외출할 때 망설이지 않는 기본 바디",
    spec: "28mm 고정 렌즈",
    image: "/templates/luma-camera/product-one.jpg?v=20260702e",
  },
  {
    name: "LUMA One Pro",
    price: "$2,460",
    note: "작업대와 여행에 맞춘 필드 키트",
    spec: "28mm 렌즈 + 그립",
    image: "/templates/luma-camera/product-pro.jpg?v=20260702e",
  },
];

const scenes = [
  {
    title: "아침 거리",
    text: "코트 소매 밖으로 꺼내는 시간이 짧고, 셔터 소리는 길을 방해하지 않습니다.",
    image: "/templates/luma-camera/morning-street.jpg?v=20260702e",
  },
  {
    title: "스튜디오 테이블",
    text: "세라믹, 과일, 종이 패키지를 한 테이블에서 찍어도 색이 따로 놀지 않습니다.",
    image: "/templates/luma-camera/studio-table.jpg?v=20260702e",
  },
  {
    title: "블루아워",
    text: "창밖의 푸른빛과 실내 조명의 온기를 한쪽으로 뭉개지 않습니다.",
    image: "/templates/luma-camera/blue-hour.jpg?v=20260702e",
  },
  {
    title: "조용한 저녁",
    text: "카메라가 커지는 순간 달라지는 식탁의 공기를 작게 건드립니다.",
    image: "/templates/luma-camera/quiet-dinner.jpg?v=20260702e",
  },
];

const imageQuality = [
  {
    label: "컬러",
    title: "색을 많이 만지지 않아도 되는 파일",
    text: "피부, 세라믹, 과일, 천이 같은 빛 안에 있을 때 서로의 색을 밀어내지 않습니다.",
    image: "/templates/luma-camera/sample-color.jpg?v=20260702e",
  },
  {
    label: "저조도",
    title: "저조도에서도 방의 온도를 남깁니다",
    text: "블루아워와 실내 조명에서 입자를 조금 남겨두고, 그림자를 검게 눌러버리지 않습니다.",
    image: "/templates/luma-camera/sample-lowlight.jpg?v=20260702e",
  },
  {
    label: "디테일",
    title: "질감은 선명하게, 가장자리는 차분하게",
    text: "천, 세라믹, 종이, 금속의 표면을 과한 샤픈 효과 없이 읽히게 둡니다.",
    image: "/templates/luma-camera/sample-detail.jpg?v=20260702e",
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
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "OnlineStore",
    name: "LUMA Camera",
    description: "작은 바디, 자연스러운 컬러, 촬영 노트를 중심에 둔 컴팩트 카메라 템플릿.",
    url: "https://ohmytemplate.com/ko/templates/OHMT031-luma-camera",
    image: "https://ohmytemplate.com/templates/luma-camera/og-image.jpg?v=20260702e",
    brand: {
      "@type": "Brand",
      name: "OHMT",
    },
    makesOffer: products.map((product) => ({
      "@type": "Offer",
      name: product.name,
      price: product.price.replace("$", "").replace(",", ""),
      priceCurrency: "USD",
      itemOffered: {
        "@type": "Product",
        name: product.name,
        description: `${product.note}. ${product.spec}.`,
        image: "https://ohmytemplate.com/templates/luma-camera/hero-camera.jpg?v=20260702e",
      },
    })),
  };

  return (
    <TemplateWrapper>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <header className="fixed left-0 right-0 top-0 z-40 bg-[#222222] px-4 md:px-8">
        <nav className="mx-auto flex h-16 max-w-[1380px] items-center justify-between text-white">
          <Link href="/ko/templates/OHMT031-luma-camera" className="inline-flex min-h-11 items-center text-sm font-black tracking-[0.14em] text-white">
            OHMT
          </Link>
          <div className="hidden items-center gap-3 text-xs font-semibold text-white/70 md:flex lg:gap-7">
            <Link href="/ko/templates/OHMT031-luma-camera/image-engine" className="inline-flex min-h-11 min-w-11 items-center justify-center px-2 transition-colors hover:text-white">이미지</Link>
            <Link href="/ko/templates/OHMT031-luma-camera/scenes" className="inline-flex min-h-11 min-w-11 items-center justify-center px-2 transition-colors hover:text-white">장면</Link>
            <Link href="/ko/templates/OHMT031-luma-camera/stories" className="inline-flex min-h-11 min-w-11 items-center justify-center px-2 transition-colors hover:text-white">스토리</Link>
            <Link href="/ko/templates/OHMT031-luma-camera/shop" className="inline-flex min-h-11 min-w-11 items-center justify-center px-2 transition-colors hover:text-white">구매</Link>
          </div>
          <Link href="/ko/templates/OHMT031-luma-camera/shop" className="inline-flex min-h-11 items-center justify-center bg-white/10 px-4 text-xs font-bold text-white transition-colors hover:bg-white hover:text-[#222222]">
            예약하기
          </Link>
        </nav>
      </header>

      <main className="overflow-hidden">
        <section className="luma-grain px-4 pb-16 pt-24 md:px-8 md:pb-24">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, ease: EASE }}
            className="relative mx-auto min-h-[76dvh] max-w-[1380px] overflow-hidden bg-[var(--luma-dark)] shadow-2xl shadow-black/12"
          >
            <Image unoptimized src="/templates/luma-camera/hero-camera.jpg?v=20260702e" alt="LUMA 컴팩트 카메라 제품 이미지" fill priority className="object-cover" sizes="100vw" />
            <div className="absolute inset-0 bg-gradient-to-br from-black/76 via-black/30 to-black/5" />
            <div className="absolute left-0 top-0 p-6 text-white md:p-10 lg:p-14">
              <p className="mb-5 text-xs font-bold uppercase tracking-[0.22em] text-white/62">Compact image system</p>
              <h1 className="max-w-[720px] text-[clamp(2.6rem,5vw,5.4rem)] font-bold leading-[1.02] tracking-[-0.04em]">
                작은 바디. 오래 남는 장면.
              </h1>
              <p className="mt-6 max-w-[560px] text-base leading-7 text-white/72 md:text-lg">
                주머니에 들어가는 바디로 아침 거리, 작업대, 저녁 식탁까지 기록합니다. 색은 덜 만지고, 촬영 메모는 사진 옆에 남깁니다.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link href="/ko/templates/OHMT031-luma-camera/shop" className="inline-flex items-center justify-center gap-2 bg-white px-6 py-3 text-sm font-bold text-[var(--luma-ink)] transition-transform duration-200 ease-out active:scale-[0.97]">
                  카메라 보기 <ArrowRight size={16} />
                </Link>
                <Link href="/ko/templates/OHMT031-luma-camera/image-engine" className="inline-flex items-center justify-center bg-white/12 px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-white/20">
                  이미지 엔진 보기
                </Link>
              </div>
            </div>
          </motion.div>
        </section>

        <section className="px-4 pb-24 md:px-8 md:pb-32">
          <div className="mx-auto grid max-w-[1380px] gap-4 md:grid-cols-2">
            {products.map((product) => (
              <Reveal key={product.name}>
                <div className="group overflow-hidden bg-white/60 shadow-xl shadow-black/[0.04]">
                  <div className="relative aspect-[4/3] overflow-hidden bg-[var(--luma-soft)]">
                    <Image unoptimized src={product.image} alt={`${product.name} 제품 이미지`} fill className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]" sizes="(min-width: 768px) 50vw, 100vw" />
                  </div>
                  <div className="flex flex-col gap-5 p-6 md:flex-row md:items-end md:justify-between md:p-7">
                    <div>
                      <p className="text-xs font-bold uppercase tracking-[0.16em] text-[var(--luma-muted)]">{product.spec}</p>
                      <h2 className="mt-3 text-2xl font-bold tracking-[-0.04em]">{product.name}</h2>
                      <p className="mt-2 text-sm leading-6 text-[var(--luma-muted)]">{product.note}</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <Link href="/ko/templates/OHMT031-luma-camera/image-engine" className="inline-flex min-h-11 min-w-11 items-center text-sm font-bold text-[var(--luma-ink)]">자세히 보기</Link>
                      <Link href="/ko/templates/OHMT031-luma-camera/shop" className="inline-flex min-h-11 items-center bg-[var(--luma-dark)] px-5 text-sm font-bold text-white transition-transform duration-200 ease-out active:scale-[0.97]">
                        예약하기
                      </Link>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        <section id="image-engine" className="px-4 pb-24 md:px-8 md:pb-32">
          <div className="mx-auto grid max-w-[1380px] gap-12 lg:grid-cols-[0.82fr_1.18fr]">
            <Reveal>
              <div className="max-w-2xl">
                <Focus size={25} strokeWidth={1.5} />
                <h2 className="mt-6 text-[clamp(1.8rem,3vw,3.35rem)] font-bold leading-[1.08] tracking-[-0.035em]">
                  큰 카메라를 꺼내지 않아도 남는 파일.
                </h2>
                <p className="mt-6 text-lg leading-8 text-[var(--luma-muted)]">
                  색, 저조도, 디테일을 따로 과장하지 않습니다. 찍은 뒤 바로 쓸 수 있는 기준을 맞추고, 왜 찍었는지는 사진 옆에 남깁니다.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <div className="space-y-8">
                <div className="grid gap-5 md:grid-cols-3">
                  {imageQuality.map((item) => (
                    <article key={item.label} className="overflow-hidden bg-white/45 shadow-lg shadow-black/[0.025]">
                      <div className="relative aspect-[7/5] overflow-hidden">
                        <Image unoptimized src={item.image} alt={`LUMA ${item.label} 촬영 결과 샘플`} fill className="object-cover" sizes="(min-width: 768px) 28vw, 100vw" />
                      </div>
                      <div className="px-5 py-6">
                        <p className="text-xs font-bold uppercase tracking-[0.16em] text-[var(--luma-muted)]">{item.label}</p>
                        <h3 className="mt-4 text-xl font-bold leading-[1.08] tracking-[-0.04em]">{item.title}</h3>
                        <p className="mt-3 text-sm leading-6 text-[var(--luma-muted)]">{item.text}</p>
                      </div>
                    </article>
                  ))}
                </div>

                <div className="grid gap-5 lg:grid-cols-[1.08fr_0.92fr]">
                  <div className="bg-[var(--luma-dark)] p-6 text-white md:p-8">
                    <Smartphone size={22} strokeWidth={1.5} />
                    <h3 className="mt-5 text-2xl font-bold leading-[1.08] tracking-[-0.04em]">사진 옆에 메모가 남습니다.</h3>
                    <p className="mt-4 max-w-xl text-sm leading-6 text-white/68">
                      렌즈, 색 조합, 장소, 묶어둘 컬렉션을 한 번에 남깁니다. 나중에 파일명만 보고 찾는 시간을 줄입니다.
                    </p>
                  </div>
                  <div className="grid bg-[var(--luma-bg)] sm:grid-cols-3 lg:grid-cols-1">
                    {moments.map((item) => (
                      <div key={item.label} className="bg-white/55 p-5">
                        <p className="text-[0.65rem] font-bold uppercase tracking-[0.14em] text-[var(--luma-muted)]">{item.label}</p>
                        <p className="mt-2 text-2xl font-bold tracking-[-0.04em]">{item.value}</p>
                        <p className="mt-2 text-sm leading-6 text-[var(--luma-muted)]">{item.detail}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        <section id="scenes" className="px-4 py-24 md:px-8 md:py-32">
          <div className="mx-auto max-w-[1380px]">
            <Reveal>
              <div className="max-w-3xl">
                <h2 className="text-[clamp(1.8rem,3vw,3.35rem)] font-bold leading-[1.08] tracking-[-0.035em]">
                  장면이 카메라를 의식하기 전에.
                </h2>
                <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--luma-muted)]">
                  꺼내는 시간이 짧고, 바디가 작아 방의 분위기를 덜 건드립니다. 사진은 장면이 바뀌기 전에 남습니다.
                </p>
              </div>
            </Reveal>

            <div className="mt-14 grid gap-4 md:grid-cols-2">
              {scenes.map((scene, index) => (
                <Reveal key={scene.title} delay={index * 0.05}>
                  <article className="group relative aspect-[7/5] overflow-hidden bg-[var(--luma-dark)] shadow-xl shadow-black/[0.06]">
                    <div className="absolute inset-0">
                      <Image unoptimized src={scene.image} alt={`${scene.title} 촬영 장면의 LUMA 카메라`} fill className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]" sizes="(min-width: 768px) 50vw, 100vw" />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/72 via-black/16 to-transparent" />
                    <div className="absolute bottom-0 left-0 max-w-xl p-6 text-white md:p-8">
                      <h3 className="text-2xl font-bold tracking-[-0.04em]">{scene.title}</h3>
                      <p className="mt-3 text-sm leading-6 text-white/72">{scene.text}</p>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section id="stories" className="px-4 pb-24 md:px-8 md:pb-32">
          <div className="mx-auto grid max-w-[1380px] gap-4 lg:grid-cols-[1fr_0.78fr]">
            <Reveal>
              <div className="group relative min-h-[620px] overflow-hidden bg-[var(--luma-dark)]">
                <Image unoptimized src="/templates/luma-camera/engine-lowlight-room.jpg?v=20260702f" alt="따뜻한 실내 조명과 푸른 창밖 빛의 LUMA 저조도 샘플" fill className="object-cover transition-transform duration-700 ease-out group-hover:scale-105" sizes="(min-width: 1024px) 58vw, 100vw" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                <div className="absolute bottom-0 max-w-xl p-7 text-white md:p-10">
                  <Moon size={24} strokeWidth={1.5} />
                  <h2 className="mt-5 text-2xl font-bold leading-[1.08] tracking-[-0.035em] md:text-4xl">밤을 밝히기보다, 밤답게 남깁니다.</h2>
                </div>
              </div>
            </Reveal>

            <div className="grid gap-4">
              <Reveal delay={0.08}>
                <div className="relative min-h-[300px] overflow-hidden bg-white">
                  <Image unoptimized src="/templates/luma-camera/body-detail.jpg?v=20260702e" alt="LUMA 카메라 바디와 렌즈 디테일" fill className="object-cover" sizes="(min-width: 1024px) 40vw, 100vw" />
                </div>
              </Reveal>
              <Reveal delay={0.12}>
                <div className="relative min-h-[300px] overflow-hidden bg-white">
                  <Image unoptimized src="/templates/luma-camera/app-insight.jpg?v=20260702e" alt="LUMA 앱과 카메라" fill className="object-cover" sizes="(min-width: 1024px) 40vw, 100vw" />
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        <section className="bg-[var(--luma-dark)] px-4 py-24 text-white md:px-8 md:py-32">
          <div className="mx-auto grid max-w-[1380px] items-center gap-12 lg:grid-cols-2">
            <Reveal>
              <div>
                <Smartphone size={26} strokeWidth={1.5} />
                <h2 className="mt-6 text-[clamp(1.8rem,3vw,3.35rem)] font-bold leading-[1.08] tracking-[-0.035em]">
                  앱은 사진 옆에 이유를 남깁니다.
                </h2>
                <p className="mt-6 max-w-xl text-lg leading-8 text-white/62">
                  렌즈 메모, 컬러 레시피, 위치, 컬렉션을 사진과 함께 둡니다. 한 달 뒤에도 어떤 빛에서 찍었는지 바로 알 수 있습니다.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image unoptimized src="/templates/luma-camera/app-collection-view.jpg?v=20260702f" alt="LUMA 앱 컬렉션 화면과 카메라" fill className="object-cover" sizes="(min-width: 1024px) 48vw, 100vw" />
              </div>
            </Reveal>
          </div>
        </section>

        <section id="shop" className="px-4 py-24 md:px-8 md:py-32">
          <div className="mx-auto max-w-[1380px]">
            <Reveal>
              <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
                <div>
                  <Sparkles size={24} strokeWidth={1.5} />
                  <h2 className="mt-5 max-w-3xl text-[clamp(1.8rem,3vw,3.35rem)] font-bold leading-[1.08] tracking-[-0.035em]">
                    자주 들고 나갈 카메라를 고르세요.
                  </h2>
                </div>
                <p className="max-w-sm text-sm leading-6 text-[var(--luma-muted)]">
                  One은 매일 들기 좋고, Pro는 작업대에서 안정적입니다. 둘 다 같은 색과 노트 흐름을 씁니다.
                </p>
              </div>
            </Reveal>

            <div className="mt-12 grid gap-4 md:grid-cols-2">
              {products.map((product) => (
                <Reveal key={product.name}>
                  <div className="bg-white/55 p-7 shadow-xl shadow-black/[0.035]">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h3 className="text-2xl font-bold tracking-[-0.04em]">{product.name}</h3>
                        <p className="mt-2 text-sm text-[var(--luma-muted)]">{product.note}</p>
                      </div>
                      <p className="text-lg font-bold tracking-[-0.035em]">{product.price}</p>
                    </div>
                    <div className="mt-10 grid gap-3 text-sm text-[var(--luma-muted)]">
                      <div className="flex items-center justify-between bg-[var(--luma-soft)] px-4 py-3">
                        <span>컬러 프로파일</span>
                        <span className="font-bold text-[var(--luma-ink)]">Neutral / Warm</span>
                      </div>
                      <div className="flex items-center justify-between bg-[var(--luma-soft)] px-4 py-3">
                        <span>필드 모드</span>
                        <span className="font-bold text-[var(--luma-ink)]">{product.name.includes("Pro") ? "Grip + notes" : "Daily carry"}</span>
                      </div>
                    </div>
                    <div className="mt-8 flex items-center justify-between">
                      <span className="text-sm font-semibold text-[var(--luma-muted)]">{product.spec}</span>
                      <button className="bg-[var(--luma-dark)] px-5 py-3 text-sm font-bold text-white transition-transform duration-200 ease-out active:scale-[0.97]">
                        예약하기
                      </button>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="px-4 py-10 md:px-8">
        <div className="mx-auto flex max-w-[1380px] flex-col gap-4 text-sm text-[var(--luma-muted)] md:flex-row md:items-center md:justify-between">
          <p className="font-bold text-[var(--luma-ink)]">LUMA by OHMT</p>
          <p>© 2026 OHMT. 카메라 커머스 템플릿.</p>
        </div>
      </footer>
    </TemplateWrapper>
  );
}
