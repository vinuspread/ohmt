"use client";
import React from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { Header } from "../../_components/Header";
import { Footer } from "../../_components/Footer";
import { blogPosts } from "../../data/data";
import theme from "../../theme.json";
import { TemplateWrapper } from "../../_components/TemplateWrapper";

// 각 아티클의 본문 콘텐츠 매핑
const CONTENT_MAP: Record<string, string[]> = {
  "style-minimalist-accessories": [
    "미니멀리즘은 무조건 덜어내는 방식이 아니라 중요한 요소를 더 선명하게 보여주는 태도입니다. 이번 컬렉션은 단정한 형태와 세심한 마감에 집중했습니다.",
    "액세서리는 한 번에 한두 가지를 골라 전체 옷차림과 자연스럽게 이어지도록 해보세요. 작은 실버 귀걸이나 얇은 금속 팔찌만으로도 충분한 포인트가 됩니다.",
    "옷과 비슷한 색의 무광 가죽 가방이나 스카프를 더하면 차분한 톤온톤 스타일을 만들 수 있습니다. 장식을 많이 더하기보다 실루엣과 소재의 조화에 집중해 보세요."
  ],
  "sustainable-fashion": [
    "옷이 만들어지고 소비된 뒤 버려지는 과정까지 함께 고민합니다. 불필요한 폐기물을 줄이기 위해 더 오래 사용할 수 있는 소재와 제작 방식을 선택합니다.",
    "이번 캡슐 컬렉션에는 에코베로 비스코스와 유기농 면, 재활용 폴리에스터를 사용했습니다. 소재별 생산 과정과 인증 정보를 확인해 환경 부담을 줄이는 방향을 선택했습니다.",
    "제작은 근로 환경을 확인한 소규모 공방에서 필요한 수량만 진행합니다. 빠르게 교체하는 옷보다 여러 계절 동안 편하게 입을 수 있는 제품을 제안합니다."
  ],
  "mens-wardrobe-checklist": [
    "유행은 계속 바뀌지만 몸에 잘 맞는 기본 옷은 오래 활용할 수 있습니다. 많은 옷을 갖추기보다 자주 입을 몇 가지 아이템부터 골라보세요.",
    "단정한 흰 셔츠와 몸에 맞는 블레이저부터 시작해 보세요. 짙은 데님과 깔끔한 가죽 스니커즈를 더하면 출근과 약속 모두에 활용하기 좋습니다.",
    "소재와 핏을 꼼꼼히 살펴보세요. 잘 만든 기본 옷은 시간이 지나도 자연스럽게 어울립니다. 복잡하게 꾸미기보다 자신에게 맞는 실루엣을 찾는 것이 중요합니다."
  ]
};

function BlogDetailPageContent({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((p) => p.slug === params.slug);

  if (!post) {
    return (
      <>
        <Header />
        <TemplateWrapper theme={theme}>
          <div className="min-h-screen flex flex-col items-center justify-center bg-white text-[var(--color-text)]">
            <h1 className="text-2xl font-bold">글을 찾을 수 없습니다.</h1>
            <Link href="/ko/templates/OHMT017-multi-shop/blog" className="mt-4 text-sm text-[var(--color-primary)] underline">
              저널 목록으로 돌아가기</Link>
          </div>
        </TemplateWrapper>
      </>
    );
  }

  const paragraphs = CONTENT_MAP[post.slug] || [
    "본문을 준비하고 있습니다."
  ];

  return (
    <>
      <Header />
      <TemplateWrapper theme={theme}>
        <main className="antialiased min-h-screen pt-24 bg-white text-[var(--color-text)]">
          {/* Breadcrumbs */}
          <div className="max-w-[800px] mx-auto px-6 mb-8 text-xs uppercase tracking-[0.2em] text-[var(--color-text-muted)]">
            <Link href="/ko/templates/OHMT017-multi-shop" className="hover:text-[var(--color-text)]">홈</Link>
            <span className="mx-2">/</span>
            <Link href="/ko/templates/OHMT017-multi-shop/blog" className="hover:text-[var(--color-text)]">저널</Link>
            <span className="mx-2">/</span>
            <span className="text-[var(--color-text)] font-medium truncate max-w-[150px] inline-block align-bottom">{post.title}</span>
          </div>

          <article className="max-w-[800px] mx-auto px-6 pb-24">
            <span className="text-xs uppercase tracking-[0.2em] text-[var(--color-primary)] font-semibold">{post.category}</span>
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight mt-3 mb-6 leading-tight">{post.title}</h1>

            <div className="flex items-center gap-4 text-xs text-[var(--color-text-muted)] mb-8 border-b border-black/5 pb-4">
              <span>{post.date}</span>
              <span>·</span>
              <span>{post.readTime} 읽기</span>
            </div>

            <div className="aspect-[16/9] w-full overflow-hidden bg-[var(--color-bg-secondary)] mb-10">
              <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
            </div>

            <div className="space-y-6 text-base leading-relaxed text-black/80 font-normal">
              {paragraphs.map((p, idx) => (
                <p key={idx} className="break-keep">{p}</p>
              ))}
            </div>

            <div className="mt-16 pt-8 border-t border-black/5 flex justify-between items-center">
              <Link href="/ko/templates/OHMT017-multi-shop/blog" className="text-xs uppercase tracking-[0.2em] text-[var(--color-primary)] font-medium hover:opacity-60 transition-opacity">
                &larr; 저널 목록으로</Link>
            </div>
          </article>

          <Footer />
        </main>
      </TemplateWrapper>
    </>
  );
}

export default function Page() {
  const routerParams = useParams();
  const slug = (routerParams?.slug || "") as string;
  return <BlogDetailPageContent params={{ slug }} />;
}
