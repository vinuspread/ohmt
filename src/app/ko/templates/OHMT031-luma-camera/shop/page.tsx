import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check, Sparkles } from "lucide-react";
import { LumaChrome } from "../_components/LumaChrome";
import { ResponsiveText } from "../_components/ResponsiveText";

const products = [
  {
    slug: "luma-one",
    name: "LUMA One",
    price: "₩2,490,000",
    note: "매일 가볍게 들고 다니는 기본 모델",
    spec: "28mm 고정식 렌즈",
    image: "/templates/OHMT031-luma-camera/shop-one-kit.jpg?v=20260702f",
    details: ["중립 / 따뜻한 색감 프로파일", "일상 촬영 모드", "앱 촬영 노트"],
    bestFor: "산책과 식사, 여행처럼 가볍게 카메라를 챙기고 싶은 사용자.",
  },
  {
    slug: "luma-one-pro",
    name: "LUMA One Pro",
    price: "₩3,190,000",
    note: "촬영 작업과 여행에 알맞은 확장 모델",
    spec: "28mm 렌즈·전용 그립",
    image: "/templates/OHMT031-luma-camera/shop-pro-kit.jpg?v=20260702f",
    details: ["전용 그립·노트 모드", "확장 컬러 설정 저장", "촬영용 스트랩"],
    bestFor: "제품과 오브젝트 촬영, 저조도 실내, 반복 작업이 많은 사용자.",
  },
];

const guide = [
  {
    title: "일상과 여행에는 LUMA One.",
    text: "작고 가벼워 빠르게 꺼낼 수 있고, 고정식 렌즈로 촬영 준비가 간단합니다.",
  },
  {
    title: "반복 촬영과 작업에는 LUMA One Pro.",
    text: "전용 그립과 스트랩, 확장된 설정 저장 기능이 반복 촬영을 돕습니다.",
  },
  {
    title: "이미지 품질과 앱 기능은 동일합니다.",
    text: "컬러 프로파일과 저조도 처리, 촬영 노트와 컬렉션 기능은 두 모델에서 동일하게 제공됩니다.",
  },
];

const kit = [
  "무광 블랙 컴팩트 카메라 바디",
  "USB-C 충전 케이블·휴대용 파우치",
  "앱 컬러 설정·촬영 노트 기능",
  "1년간 컬러 프로파일 업데이트",
];

const questions = [
  {
    q: "화질 때문에 Pro를 골라야 하나요?",
    a: "아니요. 두 모델의 센서와 이미지 프로파일은 같습니다.\nPro는 전용 그립과 확장 구성으로 반복 촬영에 더 적합합니다.",
  },
  {
    q: "앱 없이도 쓸 수 있나요?",
    a: "네. 카메라는 앱 없이도 사용할 수 있습니다.\n앱은 컬러 설정과 촬영 노트, 위치, 컬렉션을 관리할 때 사용합니다.",
  },
  {
    q: "왜 고정 렌즈인가요?",
    a: "고정식 렌즈는 카메라의 크기를 줄이고 촬영 준비를 단순하게 합니다.\n렌즈를 선택하는 과정 없이 바로 촬영할 수 있습니다.",
  },
];

export default function ShopPage() {
  return (
    <LumaChrome>
      <main className="overflow-hidden pt-16">
        <section className="px-4 py-16 md:px-9 md:py-24">
          <div className="mx-auto flex max-w-[1380px] flex-col justify-between gap-9 md:flex-row md:items-end">
            <div>
              <Sparkles size={28} strokeWidth={1.5} />
               <h1 className="luma-h1 mt-6 max-w-4xl">
                 촬영 방식에 맞는 모델을 선택하세요.</h1>
            </div>
            <p className="luma-body max-w-lg">
              <ResponsiveText>
                {"One은 일상과 여행에 적합하고, Pro는 그립과 확장 구성으로 반복 촬영에 유리합니다.\n이미지 프로파일과 앱 기능은 동일합니다."}
              </ResponsiveText>
            </p>
          </div>
        </section>

        <section className="px-4 pb-24 md:px-9 md:pb-32">
          <div className="mx-auto grid max-w-[1380px] gap-4 md:grid-cols-2">
            {products.map((product) => (
              <article key={product.name} className="luma-card !p-0 overflow-hidden">
                <div className="relative aspect-[4/3] overflow-hidden bg-[var(--luma-soft)]">
                  <Image unoptimized src={product.image} alt={`${product.name} 카메라 키트`} fill className="object-cover" sizes="(min-width: 768px) 50vw, 100vw" />
                </div>
                <div className="p-6 md:p-9">
                  <p className="luma-label text-[var(--luma-muted)]">{product.spec}</p>
                  <h2 className="mt-3 text-2xl font-bold tracking-[-0.035em] break-keep">{product.name}</h2>
                  <p className="mt-2 text-sm text-[var(--luma-muted)]">{product.note}</p>
                  <p className="mt-3 text-lg font-bold tracking-[-0.035em]">{product.price}</p>
                  <p className="mt-6 text-sm leading-6 text-[var(--luma-muted)]">{product.bestFor}</p>
                  <div className="mt-9 grid gap-2 text-sm text-[var(--luma-muted)]">
                    {product.details.map((detail) => (
                      <div key={detail} className="flex items-center gap-3 bg-[var(--luma-soft)] px-4 py-3">
                        <Check size={16} strokeWidth={1.8} className="text-[var(--luma-accent)]" />
                        <span className="font-semibold text-[var(--luma-ink)]">{detail}</span>
                      </div>
                    ))}
                  </div>
                  <Link
                    href={`/ko/templates/OHMT031-luma-camera/product/${product.slug}`}
                    className="mt-9 inline-flex items-center gap-2 bg-[var(--luma-dark)] px-6 py-3 text-sm font-bold text-white"
                  >
                    {product.name} 구매하기<ArrowRight size={16} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="px-4 pb-24 md:px-9 md:pb-32">
          <div className="mx-auto grid max-w-[1380px] gap-12 lg:grid-cols-2">
            <div>
              <h2 className="luma-h2">자주 촬영하는 장면을 기준으로 선택하세요.</h2>
            </div>
            <div className="grid gap-4">
              {guide.map((item) => (
                <article key={item.title} className="luma-card">
                  <h3 className="luma-h3">{item.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-[var(--luma-muted)]">{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="px-4 pb-24 md:px-9 md:pb-32">
          <div className="mx-auto grid max-w-[1380px] gap-4 lg:grid-cols-2">
            <div className="relative min-h-[460px] overflow-hidden">
              <Image unoptimized src="/templates/OHMT031-luma-camera/product-pro.jpg?v=20260702e" alt="패브릭 위에 놓인 LUMA One Pro 바디 디테일" fill className="object-cover" sizes="(min-width: 1024px) 55vw, 100vw" />
            </div>
            <div className="luma-card-dark">
              <p className="luma-label text-white/60">구성품</p>
              <h2 className="luma-h2-sm mt-4">구매 후 바로 촬영할 수 있는 기본 구성입니다.</h2>
              <div className="mt-9 grid gap-4">
                {kit.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <Check size={16} strokeWidth={1.8} className="mt-1 text-[var(--luma-accent)]" />
                    <p className="text-sm leading-6 text-white/70">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="px-4 pb-24 md:px-9 md:pb-32">
          <div className="mx-auto grid max-w-[1380px] gap-4 lg:grid-cols-2">
            <div className="luma-card">
              <h2 className="luma-h2-sm">어떤 모델이 맞을지 고민된다면.</h2>
              <p className="mt-4 text-sm leading-6 text-[var(--luma-muted)]">주로 촬영하는 장면과 휴대 방식에 따라 두 모델을 비교해보세요.</p>
              <Link href="/ko/templates/OHMT031-luma-camera/scenes" className="mt-9 inline-flex items-center gap-2 bg-[var(--luma-dark)] px-6 py-3 text-sm font-bold text-white">
                장면 비교하기 <ArrowRight size={16} />
              </Link>
            </div>
            <div className="relative min-h-[360px] overflow-hidden">
              <Image unoptimized src="/templates/OHMT031-luma-camera/quiet-dinner.jpg?v=20260702e" alt="조용한 저녁 테이블의 LUMA 카메라" fill className="object-cover" sizes="(min-width: 1024px) 58vw, 100vw" />
            </div>
          </div>
        </section>

        <section className="px-4 pb-24 md:px-9 md:pb-32">
          <div className="mx-auto grid max-w-[1380px] gap-4 md:grid-cols-3">
            {questions.map((item) => (
              <article key={item.q} className="luma-card">
                <h3 className="luma-h3">{item.q}</h3>
                <p className="mt-3 text-sm leading-6 text-[var(--luma-muted)]">
                  <ResponsiveText>{item.a}</ResponsiveText>
                </p>
              </article>
            ))}
          </div>
        </section>
      </main>
    </LumaChrome>
  );
}
