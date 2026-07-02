import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check, Sparkles } from "lucide-react";
import { LumaChrome } from "../_components/LumaChrome";

const products = [
  {
    name: "LUMA One",
    price: "$1,890",
    note: "가방에 넣을지 고민하지 않는 기본 바디",
    spec: "28mm 고정 렌즈",
    image: "/templates/luma-camera/shop-one-kit.jpg?v=20260702f",
    details: ["뉴트럴 / 웜 프로파일", "데일리 캐리 모드", "앱 노트"],
    bestFor: "산책, 식사, 여행처럼 카메라를 챙길지 오래 고민하고 싶지 않은 날.",
  },
  {
    name: "LUMA One Pro",
    price: "$2,460",
    note: "작업대에서 손에 안정적으로 걸리는 필드 키트",
    spec: "28mm 렌즈 + 그립",
    image: "/templates/luma-camera/shop-pro-kit.jpg?v=20260702f",
    details: ["그립 + 노트 모드", "확장 레시피 메모리", "작업용 필드 스트랩"],
    bestFor: "오브젝트 촬영, 제품 디테일, 저조도 실내, 반복해서 쓰는 색 조합.",
  },
];

const guide = [
  {
    title: "매일 들고 나갈 거라면 One.",
    text: "작은 구성이라 꺼내기 쉽고, 촬영 전에 결정할 것이 적습니다.",
  },
  {
    title: "작업대에서 오래 쓴다면 Pro.",
    text: "그립과 스트랩, 더 긴 레시피 메모리가 반복 촬영에 맞습니다.",
  },
  {
    title: "색과 노트 흐름은 같습니다.",
    text: "컬러, 저조도 질감, 노트, 컬렉션은 두 바디에서 같은 방식으로 이어집니다.",
  },
];

const kit = [
  "무광 블랙 컴팩트 카메라 바디",
  "USB-C 충전 케이블과 트래블 파우치",
  "앱 레시피와 노트 라이브러리",
  "첫해 컬러 프로파일 업데이트",
];

const questions = [
  {
    q: "화질 때문에 Pro를 골라야 하나요?",
    a: "아니요. Pro는 손에 잡히는 방식과 반복 촬영을 위한 선택입니다. 이미지 프로파일은 두 바디에서 같습니다.",
  },
  {
    q: "앱 없이도 쓸 수 있나요?",
    a: "네. 카메라는 단독으로 작동합니다. 앱은 레시피, 노트, 위치, 컬렉션을 사진 옆에 남길 때 씁니다.",
  },
  {
    q: "왜 고정 렌즈인가요?",
    a: "고정 렌즈는 카메라를 작고 예측 가능하게 만듭니다. 장면이 카메라를 의식하기 전에 찍기 위한 선택입니다.",
  },
];

export default function ShopPage() {
  return (
    <LumaChrome>
      <main className="overflow-hidden pt-16">
        <section className="px-4 py-16 md:px-8 md:py-24">
          <div className="mx-auto flex max-w-[1380px] flex-col justify-between gap-8 md:flex-row md:items-end">
            <div>
              <Sparkles size={28} strokeWidth={1.5} />
              <h1 className="mt-6 max-w-4xl text-[clamp(2.35rem,5vw,5.4rem)] font-bold leading-[1.02] tracking-[-0.04em]">
                자주 들고 나갈 쪽을 고르세요.
              </h1>
            </div>
            <p className="max-w-sm text-lg leading-8 text-[var(--luma-muted)]">
              One은 매일 들기 좋고, Pro는 작업대에서 안정적입니다. 색과 노트 흐름은 두 바디 모두 같습니다.
            </p>
          </div>
        </section>

        <section className="px-4 pb-24 md:px-8 md:pb-32">
          <div className="mx-auto grid max-w-[1380px] gap-4 md:grid-cols-2">
            {products.map((product) => (
              <article key={product.name} className="bg-white/55">
                <div className="relative aspect-[4/3] overflow-hidden bg-[var(--luma-soft)]">
                  <Image unoptimized src={product.image} alt={`${product.name} 카메라 키트`} fill className="object-cover" sizes="(min-width: 768px) 50vw, 100vw" />
                </div>
                <div className="p-7 md:p-8">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-xs font-bold uppercase tracking-[0.16em] text-[var(--luma-muted)]">{product.spec}</p>
                      <h2 className="mt-3 text-2xl font-semibold tracking-[-0.035em] md:text-3xl">{product.name}</h2>
                      <p className="mt-2 text-sm text-[var(--luma-muted)]">{product.note}</p>
                    </div>
                    <p className="text-xl font-semibold tracking-[-0.035em]">{product.price}</p>
                  </div>
                  <p className="mt-7 text-sm leading-6 text-[var(--luma-muted)]">{product.bestFor}</p>
                  <div className="mt-8 grid gap-2 text-sm text-[var(--luma-muted)]">
                    {product.details.map((detail) => (
                      <div key={detail} className="flex items-center gap-3 bg-[var(--luma-soft)] px-4 py-3">
                        <Check size={15} strokeWidth={1.8} className="text-[var(--luma-lime)]" />
                        <span className="font-semibold text-[var(--luma-ink)]">{detail}</span>
                      </div>
                    ))}
                  </div>
                  <button className="mt-8 inline-flex items-center gap-2 bg-[var(--luma-dark)] px-6 py-3 text-sm font-bold text-white">
                    {product.name} 예약하기 <ArrowRight size={16} />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="px-4 pb-24 md:px-8 md:pb-32">
          <div className="mx-auto grid max-w-[1380px] gap-12 lg:grid-cols-[0.86fr_1.14fr]">
            <div>
              <h2 className="text-[clamp(1.8rem,3vw,3.35rem)] font-bold leading-[1.08] tracking-[-0.035em]">선택은 단순합니다. 자주 찍는 장면이 기준입니다.</h2>
            </div>
            <div className="grid gap-4">
              {guide.map((item) => (
                <article key={item.title} className="bg-white/55 p-7 md:p-8">
                  <h3 className="text-2xl font-semibold tracking-[-0.04em]">{item.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-[var(--luma-muted)]">{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="px-4 pb-24 md:px-8 md:pb-32">
          <div className="mx-auto grid max-w-[1380px] gap-4 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="relative min-h-[460px] overflow-hidden">
              <Image unoptimized src="/templates/luma-camera/product-pro.jpg?v=20260702e" alt="패브릭 위에 놓인 LUMA One Pro 바디 디테일" fill className="object-cover" sizes="(min-width: 1024px) 55vw, 100vw" />
            </div>
            <div className="bg-[var(--luma-dark)] p-8 text-white md:p-10">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-white/50">구성품</p>
              <h2 className="mt-5 text-3xl font-semibold leading-[1.08] tracking-[-0.035em]">첫 주에 바로 쓰는 구성만 담았습니다.</h2>
              <div className="mt-8 grid gap-4">
                {kit.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <Check size={16} strokeWidth={1.8} className="mt-1 text-[var(--luma-lime)]" />
                    <p className="text-sm leading-6 text-white/70">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="px-4 pb-24 md:px-8 md:pb-32">
          <div className="mx-auto grid max-w-[1380px] gap-4 lg:grid-cols-[0.8fr_1.2fr]">
            <div className="bg-white/55 p-8 md:p-10">
              <h2 className="text-3xl font-semibold leading-[1.08] tracking-[-0.035em]">아직 고르기 어렵다면.</h2>
              <p className="mt-5 text-sm leading-6 text-[var(--luma-muted)]">자주 찍는 장면을 먼저 보고, 그 장면에 맞는 바디를 고르세요.</p>
              <Link href="/ko/templates/OHMT031-luma-camera/scenes" className="mt-8 inline-flex items-center gap-2 bg-[var(--luma-dark)] px-6 py-3 text-sm font-bold text-white">
                장면 비교하기 <ArrowRight size={16} />
              </Link>
            </div>
            <div className="relative min-h-[360px] overflow-hidden">
              <Image unoptimized src="/templates/luma-camera/quiet-dinner.jpg?v=20260702e" alt="조용한 저녁 테이블의 LUMA 카메라" fill className="object-cover" sizes="(min-width: 1024px) 58vw, 100vw" />
            </div>
          </div>
        </section>

        <section className="px-4 pb-24 md:px-8 md:pb-32">
          <div className="mx-auto grid max-w-[1380px] gap-4 md:grid-cols-3">
            {questions.map((item) => (
              <article key={item.q} className="bg-white/55 p-7 md:p-8">
                <h3 className="text-xl font-semibold tracking-[-0.035em]">{item.q}</h3>
                <p className="mt-4 text-sm leading-6 text-[var(--luma-muted)]">{item.a}</p>
              </article>
            ))}
          </div>
        </section>
      </main>
    </LumaChrome>
  );
}
