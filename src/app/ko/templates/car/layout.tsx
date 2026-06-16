import type { Metadata } from "next";
import './theme.css';

export const metadata: Metadata = {
  title: "Car Concept - Oh My Template (KO)",
};

export default function CarLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <link rel="preconnect" href="https://pub-10d6d534a06c495c8b45f39cfed47497.r2.dev" crossOrigin="anonymous" />
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;700;800;900&family=Noto+Sans+KR:wght@300;400;500;700;900&display=swap');
      `}</style>
      {children}
    </>
  );
}
