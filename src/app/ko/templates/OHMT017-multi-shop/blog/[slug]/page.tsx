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
    "미니멀리즘은 단순히 덜어내는 것이 아니라, 본질을 돋보이게 하는 예술입니다. 이번 시즌 컬렉션은 극도로 정제된 형태와 정교한 마무리에 집중하여 설계되었습니다.",
    "액세서리를 매칭할 때는 한 번에 한두 개의 메인 피스만을 선택하여 전체 실루엣에 자연스럽게 스며들도록 하십시오. 은은한 실버 이어링이나 얇은 메탈 뱅글 하나만으로도 충분히 고급스러운 포인트를 줄 수 있습니다.",
    "옷의 톤앤매너와 유사한 톤의 매트한 레더 백이나 스카프를 조합하는 톤온톤 스타일링도 훌륭한 방법입니다. 불필요한 장식을 배제하고 본질적인 실루엣에 집중할 때, 비로소 당신의 고유한 개성이 선명하게 드러납니다."
  ],
  "sustainable-fashion": [
    "우리는 옷이 생산되고 소비되는 방식에 대해 무거운 책임감을 느낍니다. 매년 버려지는 수많은 의류 쓰레기와 환경 오염에 대응하여, 우리는 지속 가능한 소재만을 선택하기로 결심했습니다.",
    "이번 캡슐 컬렉션은 100% 에코베로 친환경 비스코스 원사와 유기농 코튼, 그리고 재활용 폴리에스테르를 기본으로 사용합니다. 이는 일반 섬유 대비 탄소 배출량과 물 소비량을 절반 이하로 감소시킵니다.",
    "더불어, 공정한 근로 환경을 보장하는 윤리적 공방에서만 소량으로 천천히 제작됩니다. 빠르게 소비되고 버려지는 패션 대신, 당신의 옷장에 평생 남아 함께 나이 들어갈 수 있는 견고하고 진정성 있는 옷을 제안합니다."
  ],
  "mens-wardrobe-checklist": [
    "유행은 계절에 따라 변하지만, 완벽한 핏의 기본 아이템들은 언제나 옷장의 중심을 지킵니다. 남성의 옷장은 수많은 옷이 아니라, 제대로 된 몇 가지 기본 아이템에서 출발해야 합니다.",
    "첫 번째 체크리스트는 몸에 꼭 맞는 화이트 셔츠와 테일러드 블레이저입니다. 여기에 짙은 인디고 데님과 정갈한 레더 스니커즈를 매치하면 일상적인 비즈니스 캐주얼부터 격식 있는 자리까지 모두 아우를 수 있습니다.",
    "소재 선택에 신중하십시오. 좋은 원단으로 완성한 의류는 시간이 흐를수록 자연스러운 멋을 자아냅니다. 단순하지만 완벽하게 정제된 실루엣을 완성하는 법, 그것이 바로 세련된 현대 남성의 드레스 코드입니다."
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
            <h1 className="text-2xl font-bold">아티클을 찾을 수 없습니다.</h1>
            <Link href="/ko/templates/OHMT017-multi-shop/blog" className="mt-4 text-sm text-[var(--color-primary)] underline">
              매거진 목록으로 돌아가기
            </Link>
          </div>
        </TemplateWrapper>
      </>
    );
  }

  const paragraphs = CONTENT_MAP[post.slug] || [
    "아티클 본문 내용이 준비 중입니다. 잠시만 기다려 주십시오."
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
            <Link href="/ko/templates/OHMT017-multi-shop/blog" className="hover:text-[var(--color-text)]">매거진</Link>
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
                &larr; 매거진 목록으로
              </Link>
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
