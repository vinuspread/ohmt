import type { Metadata } from "next";
import './theme.css';

export const metadata: Metadata = {
  title: "Furniture - Oh My Template",
};

export default function FurnitureLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@400;700&family=Inter:wght@400;500;600&display=swap');
      `}</style>
      {children}
    </>
  );
}
