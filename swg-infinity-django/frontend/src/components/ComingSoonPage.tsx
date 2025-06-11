"use client";

import { PageLayout } from "@/components/PageLayout";
import Image from "next/image";
import { Rocket } from "lucide-react";

interface ComingSoonPageProps {
  title: string;
  description?: string;
}

export function ComingSoonPage({ title, description }: ComingSoonPageProps) {
  return (
    <PageLayout title={title}>
      <div className="py-16 flex flex-col items-center justify-center">
        <div className="text-center mb-8">
          <div className="mb-6 flex justify-center">
            <div className="relative w-24 h-24 flex items-center justify-center">
              <div className="absolute inset-0 bg-blue-500/20 rounded-full animate-pulse" />
              <Rocket className="w-12 h-12 text-blue-500" />
            </div>
          </div>
          <h1 className="text-4xl font-bold text-white mb-4">{title}</h1>
          <h2 className="text-xl text-gray-300 mb-8">Coming Soon</h2>
          {description && (
            <p className="text-gray-400 max-w-2xl mx-auto">
              {description}
            </p>
          )}
        </div>

        <div className="relative w-full max-w-lg h-80 my-8">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-lg" />
          <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center">
            <div className="text-center">
              <div className="flex space-x-3 justify-center">
                <div className="w-3 h-3 bg-blue-500 rounded-full animate-bounce" />
                <div className="w-3 h-3 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
                <div className="w-3 h-3 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }} />
              </div>
              <p className="mt-6 text-gray-300">We're working hard to bring this feature to you soon!</p>
            </div>
          </div>
        </div>

        <div className="max-w-md text-center">
          <p className="text-gray-400">
            Check back for updates or join our Discord community for the latest news.
          </p>
        </div>
      </div>
    </PageLayout>
  );
}
