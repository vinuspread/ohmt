import type { Metadata } from "next";
import './theme.css';

export const metadata: Metadata = {
  title: "투자자 관계 - Oh My Template",
  description: "기업 전략 및 재무 성과",
};

export default function IRLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;400;500;700&family=Inter:wght@300;400;500;600;700&display=swap');
      `}</style>
      {children}
    </>
  );
}
