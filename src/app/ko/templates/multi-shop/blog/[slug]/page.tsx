"use client";
import React from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Header } from "../../_components/Header";
import { Footer } from "../../_components/Footer";
import { blogPosts } from "../../data/data";
import theme from "../../theme.json";
import { TemplateWrapper } from "../../_components/TemplateWrapper";

const postContent: Record<string, { paragraphs: string[] }> = {
  'style-minimalist-accessories': {
    paragraphs: [
      '미니멀리스트 액세서리가 주목받는 시대입니다. 주목을 끌기 위해 존재하는 것이 아니라, 조용히 옷차림을 완성해주는 아이템들. 평범한 니트에 매치한 조형적인 실버 이어링, 오버사이즈 블레이저를 의도적으로 연출해주는 구조적인 가죽 벨트를 떠올려보세요.',
      '핵심은 비례입니다. 모든 것이 심플할 때, 하나의 잘 선택된 액세서리가 시선을 사로잡습니다. 크루넥 스웨터 위의 두꺼운 체인 목걸이, 아무것도 겹치지 않은 가죽 팔찌 하나. 절제 그 자체가 하나의 스테이트먼트입니다.',
      '질감은 형태만큼이나 중요합니다. 반짝임보다 무광, 직선보다 유기적인 곡선. 브러시드 골드 커프스는 쿨톤 린넨 스타일에 따뜻함을 더하고, 위빙 토트백은 테일러드 수트에 부드러움을 불어넣습니다. 이 작은 선택들이 옷차림의 전체적인 느낌을 바꿉니다.',
      '최고의 액세서리 조언은 이것입니다. 마치 벗는 걸 깜빡한 것처럼 자연스럽게 착용하라는 것. 가장 미니멀한 스타일은 정성스럽게 꾸민 듯 보이지 않고, 자연스러워 보이는 스타일입니다.',
    ],
  },
  'sustainable-fashion': {
    paragraphs: [
      '패션에서 지속가능성은 마케팅 각도가 아닙니다. 옷이 어떻게 만들어지고, 입혀지고, 보관되는지에 대한 근본적인 재고입니다. Oh My Template에서 이는 소재 선택에서 시작됩니다. 기존 원단 대신 유기농 코튼, 신규 생산 전 데드스톡 패브릭, 가능한 모든 곳에서 천연 염료를 사용합니다.',
      '우리는 같은 기준을 공유하는 공방과 직접 협업합니다. 이는 공급망을 단축시키고 작업 조건과 환경 영향을 완전히 투명하게 만듭니다. 모든 의류는 소량 생산되어 낭비를 줄이고 대량 생산이 따라올 수 없는 품질 관리를 유지합니다.',
      '하지만 지속가능성은 오래가는 옷을 디자인하는 것을 의미하기도 합니다. 내구성뿐만 아니라 스타일에서도요. 우리는 트렌드에 휩쓸리기보다 계절이 지나도 계속 의미 있는 실루엣을 선호합니다. 잘 만들어진 코트나 심플한 가죽 토트백은 5년 후에도 오늘처럼 좋아 보여야 합니다.',
      '이 접근법은 더 많은 것을 요구합니다. 더 많은 연구, 더 많은 정성, 더 많은 시간. 하지만 그만큼 고객에게 오늘날 패션에서 보기 드문 무언가를 제공합니다: 소유하는 것이 기분 좋은 옷.',
    ],
  },
  'mens-wardrobe-checklist': {
    paragraphs: [
      '진정한 기능적인 옷장은 잘 선택된 필수 아이템으로 구성됩니다. 가장 활용도 높은 것들: 책상에서 저녁 자리까지 자연스럽게 이어지는 화이트 옥스포드 셔츠, 뻣뻣하지 않은 언스트럭처드 블레이저, 완벽하게 맞는 다크 데님.',
      '아우터부터 시작하세요. 울 소재, 무릎 길이, 뉴트럴 컬러의 좋은 코트 하나가 그 아래 모든 것의 분위기를 결정합니다. 환절기용 라이트 필드 자켓을 더하면 거의 모든 상황을 커버하는 로테이션이 완성됩니다.',
      '다음은 상의입니다. 화이트, 블랙, 그레이의 고품질 티셔츠 3~4장. 깔끔한 옥스포드와 릴렉스한 린넨, 두 종류의 버튼다운 셔츠. 네이비나 차콜의 가는 게이지 니트 스웨터. 이것들이 기본 빌딩 블록입니다. 모든 조합이 서로 어울려야 합니다.',
      '하의: 다크 셀비지 데님 한 벌, 카키나 올리브의 테일러드 치노 한 벌, 그레이 울 트라우저 한 벌. 브랜드보다 핏이 중요합니다. 신뢰하는 테일러를 찾아서 조정이 필요한 모든 것을 맡기세요. 그 차이는 즉각적입니다.',
      '마지막으로 신발과 액세서리. 깔끔한 화이트 스니커즈, 브라운 레더 로퍼, 블랙 캡토 부츠. 심플한 가죽 시계. 위빙 벨트. 그 이상은 필요 없습니다. 절제된 옷장은 제한이 아닙니다. 그것은 목적의 명확함이며, 그 자체로 드러납니다.',
    ],
  },
};

function BlogPostContent({ params }: { params: Promise<{ slug: string }> }) {
  const resolved = React.use(params);
  const post = blogPosts.find((p) => p.slug === resolved.slug);

  if (!post) {
    notFound();
  }

  const content = postContent[post.slug];
  const relatedPosts = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 2);

  return (
    <>
      <Header />
      <TemplateWrapper theme={theme}>
      <main className="antialiased min-h-screen pt-16 md:pt-20 bg-white text-[var(--color-text)]">

        <article className="bg-white py-20 md:py-32">
          <div className="max-w-2xl mx-auto px-6 md:px-12">
            <span className="text-xs uppercase tracking-[0.2em] text-[var(--color-text-muted)]">{post.category}</span>
            <h1 className="text-3xl lg:text-4xl font-bold tracking-tight mt-4">{post.title}</h1>
            <div className="flex items-center gap-3 mt-4 text-sm text-[var(--color-text-muted)]">
              <span>{post.date}</span>
              <span>·</span>
              <span>{post.readTime}</span>
            </div>

            <div className="aspect-[16/10] overflow-hidden bg-[var(--color-bg-secondary)] mt-10">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="mt-12 space-y-6 text-base leading-[1.8] text-[var(--color-text-muted)]">
              {content ? content.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              )) : (
                <p>콘텐츠 준비 중입니다.</p>
              )}
            </div>
          </div>
        </article>

        {relatedPosts.length > 0 && (
          <section className="bg-[var(--color-bg-secondary)] py-20">
            <div className="max-w-[1440px] mx-auto px-6 md:px-12">
              <h2 className="text-2xl font-bold tracking-tight mb-10">관련 글</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {relatedPosts.map((rp) => (
                  <Link key={rp.id} href={`/ko/templates/multi-shop/blog/${rp.slug}`} className="group block">
                    <div className="aspect-[16/10] overflow-hidden bg-[var(--color-bg-secondary)]">
                      <img
                        src={rp.image}
                        alt={rp.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <div className="mt-5">
                      <span className="text-xs uppercase tracking-[0.2em] text-[var(--color-text-muted)]">{rp.category}</span>
                      <h3 className="text-lg font-bold mt-1 leading-snug group-hover:opacity-70 transition-opacity">{rp.title}</h3>
                      <span className="inline-block mt-3 text-xs uppercase tracking-[0.2em] text-[var(--color-primary)] font-medium group-hover:opacity-60 transition-opacity">
                        더보기 &rarr;
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        <Footer />
      </main>
      </TemplateWrapper>
    </>
  );
}

export default function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  return (
    <React.Suspense fallback={null}>
      <BlogPostContent params={params} />
    </React.Suspense>
  );
}

