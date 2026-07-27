import Link from 'next/link'

const base = '/ko/templates/OHMT033-foundation'

const columns = [
  {
    title: '프로그램',
    links: [
      { label: '유스 인 테크', href: `${base}/programs#youth-in-tech` },
      { label: '네이버후드 헬스 코어', href: `${base}/programs#neighborhood-health-corps` },
      { label: '그린 퓨처스', href: `${base}/programs#green-futures` },
      { label: '퍼스트젠 스칼러스', href: `${base}/programs#first-gen-scholars` },
    ],
  },
  {
    title: '재단',
    links: [
      { label: '소개', href: `${base}/about` },
      { label: '스토리', href: `${base}/stories` },
      { label: '뉴스룸', href: `${base}/newsroom` },
      { label: '연차보고서', href: `${base}/newsroom` },
    ],
  },
  {
    title: '참여하기',
    links: [
      { label: '자원봉사', href: `${base}/#contact` },
      { label: '파트너십 문의', href: `${base}/#contact` },
      { label: '지원금 신청', href: `${base}/programs` },
    ],
  },
]

export function Footer() {
  return (
    <footer className="bg-white px-6 pb-11 pt-16 md:px-12 md:py-16">
      <div className="mx-auto max-w-[1440px] md:border-t md:border-[var(--color-border)] md:pt-6">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-4 md:gap-24">
          <div>
            <p className="text-base font-semibold leading-[var(--leading-heading)] text-[var(--color-text)] md:text-xs">
              OHMT 파운데이션</p>
            <p className="mt-3 max-w-[260px] text-xs leading-[var(--leading-body)] text-[var(--color-text-muted)]">
              참여자의 이야기와 확인 가능한 프로그램 성과를 함께 공개합니다.</p>
          </div>
          {columns.map((col) => (
            <div key={col.title}>
              <p className="text-xs font-bold leading-[var(--leading-heading)] tracking-[0.08em] text-[var(--color-text-muted)] md:font-semibold md:tracking-normal">
                {col.title}
              </p>
              <ul className="mt-2 flex flex-col gap-2 md:mt-3 md:gap-3">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <Link
                      href={l.href}
                      className="text-xs leading-[var(--leading-heading)] text-[var(--color-text)] transition-colors hover:text-[var(--color-primary)] focus-visible:outline-[var(--focus-outline)] focus-visible:outline-offset-[var(--focus-outline-offset)]"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-6 flex flex-col gap-3 text-xs leading-[var(--leading-body)] text-[var(--color-text-muted)] md:flex-row md:items-center md:justify-between md:border-t md:border-[var(--color-border)] md:pt-6">
          <p>© 2026 OHMT.</p>
          <p>contact@ohmt.site</p>
        </div>
      </div>
    </footer>
  )
}
