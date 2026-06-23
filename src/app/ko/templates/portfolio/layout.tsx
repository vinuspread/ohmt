import type { Metadata } from "next";
import './theme.css';

export const metadata: Metadata = {
  title: "포트폴리오 - Oh My Template",
  description: "개인 브랜딩 및 크리에이티브 포트폴리오",
};

export default function PortfolioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;900&display=swap');
        @import url('https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.min.css');
      `}</style>
      {children}
    </>
  );
}
