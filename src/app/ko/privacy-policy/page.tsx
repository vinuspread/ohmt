import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Logo } from "@/components/Logo";

export const metadata: Metadata = {
  title: "개인정보처리방침 | Oh My Template",
  description: "Oh My Template(㈜바이너스프레드)의 개인정보처리방침을 안내합니다.",
  alternates: {
    canonical: "https://ohmt.site/ko/privacy-policy",
  },
  robots: { index: true, follow: true },
};

const sections = [
  {
    title: "1. 수집하는 개인정보 항목",
    body: (
      <>
        <p>Oh My Template은 상담 신청, 문의, 서비스 제공 과정에서 아래와 같은 개인정보를 수집합니다.</p>
        <ul className="mt-3 space-y-1.5 list-disc pl-5">
          <li>필수 항목: 이름, 이메일, 연락처, 문의 내용</li>
          <li>선택 항목: 회사명, 직책, 희망 예산, 첨부 파일</li>
          <li>자동 수집 항목: 접속 IP, 쿠키, 방문 일시, 서비스 이용 기록</li>
        </ul>
      </>
    ),
  },
  {
    title: "2. 개인정보의 수집 및 이용 목적",
    body: (
      <ul className="space-y-1.5 list-disc pl-5">
        <li>상담 신청 및 문의 응대, 견적 안내</li>
        <li>서비스 제공, 계약 이행 및 요금 정산</li>
        <li>공지사항 전달, 불만 처리 등 원활한 의사소통</li>
        <li>서비스 개선을 위한 통계 분석</li>
      </ul>
    ),
  },
  {
    title: "3. 개인정보의 보유 및 이용 기간",
    body: (
      <>
        <p>
          이용자의 개인정보는 원칙적으로 수집 및 이용 목적이 달성되면 지체 없이 파기합니다. 단, 관련 법령에 따라 보존이
          필요한 경우 아래 기간 동안 보관합니다.
        </p>
        <ul className="mt-3 space-y-1.5 list-disc pl-5">
          <li>계약 또는 청약철회 등에 관한 기록: 5년 (전자상거래법)</li>
          <li>대금 결제 및 재화 공급에 관한 기록: 5년 (전자상거래법)</li>
          <li>소비자 불만 또는 분쟁처리에 관한 기록: 3년 (전자상거래법)</li>
          <li>웹사이트 방문 기록: 3개월 (통신비밀보호법)</li>
        </ul>
      </>
    ),
  },
  {
    title: "4. 개인정보의 제3자 제공",
    body: (
      <p>
        Oh My Template은 이용자의 개인정보를 원칙적으로 외부에 제공하지 않습니다. 다만 이용자가 사전에 동의한 경우
        또는 법령에 특별한 규정이 있는 경우에 한하여 예외적으로 제공할 수 있습니다.
      </p>
    ),
  },
  {
    title: "5. 개인정보 처리의 위탁",
    body: (
      <>
        <p>서비스 운영을 위해 아래와 같이 개인정보 처리 업무를 위탁하고 있으며, 위탁계약 시 개인정보가 안전하게 관리될 수 있도록 필요한 사항을 규정하고 있습니다.</p>
        <ul className="mt-3 space-y-1.5 list-disc pl-5">
          <li>클라우드 인프라 운영: Vercel Inc., Supabase Inc.</li>
          <li>이메일 발송: Resend</li>
        </ul>
      </>
    ),
  },
  {
    title: "6. 이용자의 권리와 행사 방법",
    body: (
      <p>
        이용자는 언제든지 자신의 개인정보에 대해 열람, 정정, 삭제, 처리정지를 요청할 수 있습니다. 아래 이메일로
        연락 주시면 관련 법령에 따라 지체 없이 조치하겠습니다.
      </p>
    ),
  },
  {
    title: "7. 쿠키의 운영",
    body: (
      <p>
        웹사이트는 이용자에게 맞춤화된 서비스를 제공하기 위해 쿠키를 사용할 수 있습니다. 이용자는 브라우저 설정을
        통해 쿠키 저장을 거부할 수 있으며, 이 경우 일부 서비스 이용에 제한이 있을 수 있습니다.
      </p>
    ),
  },
  {
    title: "8. 개인정보의 안전성 확보 조치",
    body: (
      <ul className="space-y-1.5 list-disc pl-5">
        <li>개인정보의 암호화 및 접근 권한 관리</li>
        <li>해킹 등에 대비한 기술적 대책</li>
        <li>개인정보 처리 담당자의 최소화 및 교육</li>
      </ul>
    ),
  },
  {
    title: "9. 개인정보 보호책임자",
    body: (
      <>
        <p>Oh My Template은 개인정보 처리에 관한 문의사항을 아래 담당자를 통해 접수하고 있습니다.</p>
        <ul className="mt-3 space-y-1.5">
          <li>회사명: ㈜바이너스프레드</li>
          <li>대표: 한성영</li>
          <li>
            연락처:{" "}
            <a href="tel:02-3661-1907" className="underline-offset-4 hover:text-zinc-950 hover:underline dark:hover:text-zinc-100">
              02-3661-1907
            </a>
          </li>
          <li>
            이메일:{" "}
            <a href="mailto:vinus@vinus.co.kr" className="underline-offset-4 hover:text-zinc-950 hover:underline dark:hover:text-zinc-100">
              vinus@vinus.co.kr
            </a>
          </li>
        </ul>
      </>
    ),
  },
  {
    title: "10. 개인정보처리방침의 변경",
    body: (
      <p>
        이 개인정보처리방침은 법령, 정책 또는 서비스 변경에 따라 내용이 추가, 삭제 및 수정될 수 있으며, 변경 시
        웹사이트를 통해 공지합니다.
      </p>
    ),
  },
];

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-[#FCFCFD] text-zinc-900 font-sans antialiased dark:bg-zinc-950 dark:text-zinc-100">
      <header className="bg-white border-b border-zinc-200/60 sticky top-0 z-40 dark:bg-zinc-900 dark:border-zinc-800">
        <div className="px-6 md:px-12 lg:px-20 py-4 max-w-[1440px] mx-auto flex justify-between items-center">
          <Link href="/ko" className="flex items-center gap-3 h-6">
            <Logo className="h-6 w-auto block" />
          </Link>
          <Link href="/en" className="text-xs uppercase tracking-widest text-zinc-400 hover:text-zinc-900 transition-colors font-bold dark:text-zinc-500 dark:hover:text-zinc-100">
            EN
          </Link>
        </div>
      </header>

      <section className="px-6 md:px-12 lg:px-20 py-16 md:py-20 max-w-[900px] mx-auto">
        <Link href="/ko" className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-bold text-zinc-400 hover:text-zinc-900 transition-colors mb-12 dark:text-zinc-500 dark:hover:text-zinc-100">
          <ArrowLeft size={14} />
          뒤로
        </Link>

        <div className="space-y-3 mb-12">
          <span className="text-[0.65rem] font-extrabold uppercase tracking-widest text-[#F1B100]">Privacy Policy</span>
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">개인정보처리방침</h1>
          <p className="text-sm text-zinc-500 leading-relaxed font-normal dark:text-zinc-400">시행일: 2026년 1월 1일</p>
        </div>

        <div className="space-y-10">
          {sections.map((sectionItem) => (
            <div key={sectionItem.title} className="space-y-3">
              <h2 className="text-lg font-bold text-zinc-900 dark:text-zinc-100">{sectionItem.title}</h2>
              <div className="text-sm leading-relaxed font-normal text-zinc-500 dark:text-zinc-400">{sectionItem.body}</div>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-zinc-200/60 bg-[#FCFCFD] dark:border-zinc-800 dark:bg-zinc-950">
        <div className="px-6 md:px-12 lg:px-20 py-12 max-w-[1440px] mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <Link href="/ko" className="flex items-center gap-3 h-6">
              <Logo className="h-6 w-auto block" />
            </Link>
            <div className="flex gap-8 text-xs font-bold text-zinc-400 uppercase tracking-widest dark:text-zinc-500">
              <Link href="/ko/contact" className="hover:text-zinc-950 transition-colors dark:hover:text-zinc-100">제작 상담 신청</Link>
              <Link href="/ko" className="hover:text-zinc-950 transition-colors dark:hover:text-zinc-100">템플릿 보기</Link>
            </div>
          </div>
          <div className="text-[0.62rem] font-bold text-zinc-400 uppercase tracking-widest mt-8 border-t border-zinc-100 pt-6 dark:text-zinc-500 dark:border-zinc-800">
            &copy; 2026 Oh My Template. All rights reserved.
          </div>
        </div>
      </footer>
    </main>
  );
}
