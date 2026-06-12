import type { Metadata } from "next";
import './theme.css';

export const metadata: Metadata = {
  title: "Car Concept - Oh My Template",
};

export default function CarLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;700;800;900&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap');
      `}</style>
      {children}
    </>
  );
}
