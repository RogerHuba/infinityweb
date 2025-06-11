"use client";

import type { ReactNode } from "react";

interface FeatureCardProps {
  title: string;
  subtitle: string;
  children: ReactNode;
}

export function FeatureCard({ title, subtitle, children }: FeatureCardProps) {
  return (
    <div className="feature-card">
      <h3 className="section-subtitle">{title}</h3>
      <h4 className="text-white font-medium mb-4">{subtitle}</h4>
      <div className="text-gray-300">
        {children}
      </div>
    </div>
  );
}
