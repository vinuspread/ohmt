import type { Metadata } from "next";
import './theme.css';

export const metadata: Metadata = {
  title: "Airline - Oh My Template",
  description: "Premium aviation experience",
};

export default function AirlineLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=Inter:wght@300;400;500;600&display=swap');
      `}</style>
      {children}
    </>
  );
}
