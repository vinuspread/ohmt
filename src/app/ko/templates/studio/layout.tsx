import type { Metadata } from "next";
import './theme.css';

export const metadata: Metadata = {
  title: "Studio - Oh My Template",
  description: "Architecture and spatial design studio",
};

export default function StudioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@400;600;700&family=Inter:wght@300;400;500;600&family=Noto+Sans+KR:wght@300;400;500;700&display=swap');

        :root {
          --font-outfit: 'Outfit', sans-serif;
          --font-inter: 'Inter', sans-serif;
        }
      `}</style>
      {children}
    </>
  );
}
