import type { Metadata } from "next";
import './theme.css';

export const metadata: Metadata = {
  title: "Magazine - Oh My Template",
  description: "Editorial culture and lifestyle",
};

export default function MagazineLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:wght@400&family=Inter:wght@300;400;500;600&display=swap');
      `}</style>
      {children}
    </>
  );
}
