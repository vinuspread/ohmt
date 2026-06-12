import type { Metadata } from "next";
import './theme.css';

export const metadata: Metadata = {
  title: "Portfolio - Oh My Template",
  description: "Personal branding and creative portfolio",
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
      `}</style>
      {children}
    </>
  );
}
