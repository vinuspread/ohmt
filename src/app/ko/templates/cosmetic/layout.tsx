import type { Metadata } from "next";
import './theme.css';

export const metadata: Metadata = {
  title: "Cosmetic - Oh My Template",
};

export default function CosmeticLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;700&family=Noto+Sans+KR:wght@300;400;500;700&display=swap');
      `}</style>
      {children}
    </>
  );
}
