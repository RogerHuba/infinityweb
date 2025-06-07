"use client";

import type { ReactNode } from "react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { ServerInfoFooter } from "@/components/ServerInfoFooter";

interface PageLayoutProps {
  children: ReactNode;
  title: string;
  subtitle?: string;
  heroClassName?: string;
}

export function PageLayout({
  children,
  title,
  subtitle = "The world's largest Pre-CU SWG Emulator server",
  heroClassName = "hero-section-cantina",
}: PageLayoutProps) {
  return (
    <main className="min-h-screen flex flex-col">
      <Navigation />

      <div className="flex-grow relative">
        <div className="hexagon-pattern" />

        {/* Hero Section */}
        <section className={`${heroClassName} relative`}>
          <div className="absolute inset-0 bg-black/60 z-10" />
          <div className="container mx-auto px-4 z-20 relative flex flex-col justify-center h-full">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              {title}
            </h1>
            {subtitle && (
              <h2 className="text-xl md:text-2xl text-white mb-6">
                {subtitle}
              </h2>
            )}
            <p className="text-white mb-6">Free-to-play</p>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              {children}
            </div>
          </div>
        </section>
      </div>

      <ServerInfoFooter />
      <Footer />
    </main>
  );
}
