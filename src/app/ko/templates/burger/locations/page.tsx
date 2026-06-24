"use client";
import React from "react";
import { Header } from "../_components/Header";
import { Footer } from "../_components/Footer";
import { locations } from "../data/data";
import theme from "../theme.json";
import { TemplateWrapper } from "../_components/TemplateWrapper";

function LocationsPageContent() {
  return (
    <>
      <Header />
      <TemplateWrapper theme={theme}>
      <main className="antialiased min-h-screen pt-16 md:pt-20 bg-white text-[var(--color-text)]">
        <section className="bg-[var(--color-bg-secondary)] py-20">
          <div className="max-w-[1440px] mx-auto px-6 md:px-12 text-center">
            <p className="text-xs uppercase tracking-[0.3em] text-[var(--color-text-muted)] mb-4">매장 찾기</p>
            <h1 className="text-5xl lg:text-6xl font-bold tracking-tight">매장 안내</h1>
            <p className="text-base text-[var(--color-text-muted)] mt-4 max-w-md mx-auto">
              빠르게 성장하고 있습니다. 가까운 매장을 방문해주세요.
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-[1440px] mx-auto px-6 md:px-12">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {locations.map((loc) => (
                <div key={loc.id} className="border border-[var(--color-border)] p-6 md:p-8">
                  <h3 className="text-xl font-bold mb-3">{loc.city}</h3>
                  <div className="space-y-2 text-sm text-[var(--color-text-muted)]">
                    <p>{loc.address}</p>
                    <p>{loc.hours}</p>
                    <p>{loc.phone}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      </TemplateWrapper>
    </>
  );
}

export default function LocationsPage() {
  return <LocationsPageContent />;
}
