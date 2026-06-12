import type { Metadata } from "next";
import './theme.css';

export const metadata: Metadata = {
  title: "Sneaker - Oh My Template",
  description: "Urban streetwear and sneaker releases",
};

export default function SneakerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;900&display=swap');
      `}</style>
      {children}
    </>
  );
}
