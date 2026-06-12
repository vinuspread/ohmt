import type { Metadata } from "next";
import './theme.css';

export const metadata: Metadata = {
  title: "Newspaper - Oh My Template",
  description: "News and publishing archive",
};

export default function NewspaperLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=Georgia&display=swap');
      `}</style>
      {children}
    </>
  );
}
