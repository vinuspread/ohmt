import Link from "next/link";
import { Header } from "../../_components/layout/Header";
import { Footer } from "../../_components/layout/Footer";
import { TemplateWrapper } from "../../_components/TemplateWrapper";
import { getAllArticles, getArticleBySlug } from "../../constants";
import theme from "../../theme.json";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export default async function Page({ params }: PageProps) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    return (
      <TemplateWrapper theme={theme}>
        <main className="antialiased bg-[var(--color-bg)] text-[var(--theme-text)]">
          <Header light />
          <div className="pt-36 pb-24 px-6 md:px-[var(--theme-gutter)] max-w-[var(--theme-container)] mx-auto">
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.24em] text-[var(--theme-text-muted)]">OHMT012-magazine / 기사</p>
            <h1 className="font-[family-name:var(--theme-font-heading)] text-4xl md:text-6xl font-normal">기사를 찾을 수 없습니다.</h1>
            <p className="mt-6 max-w-2xl text-base leading-7 text-[var(--theme-text-muted)] break-keep">이 기사는 이동되었거나 더 이상 제공되지 않습니다. 아카이브에서 다른 기사를 둘러보세요.</p>
            <Link href="/ko/templates/OHMT012-magazine/archive" className="mt-10 inline-flex min-h-11 items-center justify-center bg-[var(--theme-text)] px-6 text-sm font-bold text-white transition-colors hover:opacity-85">아카이브로 돌아가기</Link>
          </div>
          <Footer />
        </main>
      </TemplateWrapper>
    );
  }

  const related = getAllArticles().filter((item) => item.slug !== article.slug).slice(0, 3);
  const paragraphs = (article.content ?? article.desc).split("\n\n");
  const charCount = [article.desc, ...paragraphs].join(" ").replace(/\s+/g, "").length;
  const readMinutes = Math.max(2, Math.round(charCount / 500));
  const midIndex = paragraphs.length > 1 ? Math.ceil(paragraphs.length / 2) : paragraphs.length;
  const beforeQuote = paragraphs.slice(0, midIndex);
  const afterQuote = paragraphs.slice(midIndex);
  const firstSentenceMatch = paragraphs[0]?.match(/^.*?[.!?](?=\s|$)/);
  const pullQuote = paragraphs.length > 1 && firstSentenceMatch ? firstSentenceMatch[0].trim() : null;
  const inlineImage = related[0];

  return (
    <TemplateWrapper theme={theme}>
      <main className="antialiased bg-[var(--color-bg)] text-[var(--theme-text)] selection:bg-[var(--theme-accent)] selection:text-white">
        <Header />

        {/* Hero visual */}
        <section className="relative h-[64vh] min-h-[440px] max-h-[640px] overflow-hidden">
          <img src={article.img} alt={article.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-black/10" />
          <div className="absolute inset-x-0 bottom-0">
            <div className="max-w-[var(--theme-container)] mx-auto px-6 md:px-[var(--theme-gutter)] pb-10 md:pb-14">
              {article.tag && (
                <span className="inline-block bg-white text-[var(--theme-accent)] text-[0.75rem] font-bold uppercase tracking-[0.2em] px-3 py-1 mb-5">
                  {article.tag}
                </span>
              )}
              <h1 className="font-[family-name:var(--theme-font-heading)] text-[length:var(--text-h1)] font-normal leading-[var(--leading-heading)] text-white max-w-3xl break-keep">
                {article.title}
              </h1>
              <p className="mt-4 text-[0.85rem] text-white/70 font-medium tracking-wide">
                <strong className="text-white/90">{article.author}</strong>
              </p>
            </div>
          </div>
        </section>

        {/* Body */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-[720px] mx-auto px-6">
            <div className="flex items-center gap-4 mb-10 pb-8 border-b border-[var(--theme-border)]">
              <div className="w-11 h-11 rounded-full bg-[var(--theme-text)] text-white flex items-center justify-center font-[family-name:var(--theme-font-heading)] text-lg flex-shrink-0">
                {article.author.charAt(0)}
              </div>
              <div>
                <p className="text-[0.9rem] font-bold text-[var(--theme-text)]">{article.author}</p>
                <p className="text-[0.78rem] text-[var(--theme-text-muted)]">약 {readMinutes}분 소요</p>
              </div>
            </div>

            <p className="text-[1.15rem] text-[var(--theme-text-muted)] leading-[var(--leading-body)] mb-10 font-normal break-keep">
              {article.desc}
            </p>

            <div className="space-y-6">
              {beforeQuote.map((para, i) => (
                <p key={`before-${i}`} className="text-[1.05rem] leading-loose font-normal text-[var(--theme-text)] break-keep">
                  {i === 0 ? (
                    <>
                      <span className="float-left font-[family-name:var(--theme-font-heading)] text-[3.6rem] leading-[var(--leading-display)] pr-3 pt-1 text-[var(--theme-accent)]">
                        {para.charAt(0)}
                      </span>
                      {para.slice(1)}
                    </>
                  ) : (
                    para
                  )}
                </p>
              ))}
            </div>

            {pullQuote && afterQuote.length > 0 && (
              <blockquote className="my-10 border-l-2 border-[var(--theme-accent)] pl-6 md:pl-8">
                <p className="font-[family-name:var(--theme-font-heading)] text-[1.5rem] md:text-[1.7rem] font-normal leading-[var(--leading-body)] text-[var(--theme-text)] break-keep">
                  {pullQuote}
                </p>
              </blockquote>
            )}

            {inlineImage && (
              <figure className="my-10 -mx-6 md:mx-0">
                <div className="h-[320px] md:h-[420px] overflow-hidden">
                  <img src={inlineImage.img} alt={inlineImage.title} className="w-full h-full object-cover" />
                </div>
                <figcaption className="mt-3 px-6 md:px-0 text-[0.8rem] text-[var(--theme-text-muted)] break-keep">
                  <Link href={`/ko/templates/OHMT012-magazine/article/${inlineImage.slug}`} className="underline underline-offset-2 hover:text-[var(--theme-accent)] transition-colors">
                    {inlineImage.title}
                  </Link>
                  {" "}에서
                </figcaption>
              </figure>
            )}

            <div className="space-y-6">
              {afterQuote.map((para, i) => (
                <p key={`after-${i}`} className="text-[1.05rem] leading-loose font-normal text-[var(--theme-text)] break-keep">
                  {para}
                </p>
              ))}
            </div>

            <div className="mt-14 pt-8 border-t border-[var(--theme-border)] flex items-center justify-between flex-wrap gap-4">
              {article.tag && (
                <span className="text-[0.72rem] font-bold uppercase tracking-[0.18em] text-[var(--theme-accent)]">
                  {article.tag}
                </span>
              )}
              <Link
                href="/ko/templates/OHMT012-magazine/archive"
                className="text-[0.8rem] font-bold uppercase tracking-[0.14em] text-[var(--theme-text)] hover:text-[var(--theme-accent)] transition-colors underline underline-offset-4"
              >
                아카이브로 돌아가기
              </Link>
            </div>
          </div>
        </section>

        {/* Related stories */}
        {related.length > 0 && (
          <section className="py-16 md:py-24 bg-[var(--color-bg-secondary)] border-t border-[var(--theme-border)]">
            <div className="max-w-[var(--theme-container)] mx-auto px-6 md:px-[var(--theme-gutter)]">
              <div className="text-[0.875rem] font-bold uppercase tracking-[0.2em] text-[var(--theme-text-muted)] mb-10">
                다른 기사 읽기
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
                {related.map((item) => (
                  <article key={item.slug} className="group">
                    <Link href={`/ko/templates/OHMT012-magazine/article/${item.slug}`} className="block overflow-hidden h-[180px] mb-4">
                      <img src={item.img} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                    </Link>
                    <h3 className="font-[family-name:var(--theme-font-heading)] text-[1.15rem] font-normal leading-snug break-keep">
                      <Link href={`/ko/templates/OHMT012-magazine/article/${item.slug}`} className="hover:text-[var(--theme-accent)] transition-colors">
                        {item.title}
                      </Link>
                    </h3>
                  </article>
                ))}
              </div>
            </div>
          </section>
        )}

        <Footer />
      </main>
    </TemplateWrapper>
  );
}
