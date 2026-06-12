import type { Metadata } from "next";
import './theme.css';

export const metadata: Metadata = {
  title: "Investor Relations - Oh My Template",
  description: "Corporate strategy and financial performance",
};

export default function IRLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');
      `}</style>
      {children}
    </>
  );
}
