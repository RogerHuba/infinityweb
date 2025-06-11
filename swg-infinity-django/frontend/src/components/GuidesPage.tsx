"use client";

import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { DiscordSection } from "@/components/DiscordSection";
import { Footer } from "@/components/Footer";
import Link from "next/link";

export function GuidesPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navigation />

      <div className="flex-grow relative">
        <div className="hexagon-pattern" />

        <HeroSection
          title="SWG Infinity"
          subtitle="The world's largest Pre-CU SWG Emulator server"
          ctaText="Play now"
          ctaLink="/play-now"
          theme="guides"
        />

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h1 className="section-title mb-6">Guides and information of the Galaxy within SWG Infinity.</h1>
              <hr className="border-gray-700 mb-8" />

              <h4 className="text-xl font-medium text-white mb-4">Content</h4>
              <ul className="mb-8 space-y-2">
                <li>
                  <Link href="/guides/nyms-theme-park" className="text-blue-400 hover:text-blue-300">
                    Nym's Theme Park
                  </Link>
                </li>
                <li>
                  <Link href="/guides/the-warren" className="text-blue-400 hover:text-blue-300">
                    The Warren
                  </Link>
                </li>
                <li>
                  <Link href="/guides/jabbas-theme-park" className="text-blue-400 hover:text-blue-300">
                    Jabba's Theme Park
                  </Link>
                </li>
                <li>
                  <Link href="/guides/imperial-theme-park" className="text-blue-400 hover:text-blue-300">
                    The Imperial Theme Park
                  </Link>
                </li>
                <li>
                  <Link href="/guides/rebel-theme-park" className="text-blue-400 hover:text-blue-300">
                    The Rebel Theme Park
                  </Link>
                </li>
                <li>
                  <Link href="/guides/corellian-corvette" className="text-blue-400 hover:text-blue-300">
                    The Corellian Corvette
                  </Link>
                </li>
                <li>
                  <Link href="/guides/geonosian-lab-walkthrough" className="text-blue-400 hover:text-blue-300">
                    Geonosian Bio-Lab
                  </Link>
                </li>
              </ul>

              <h4 className="text-xl font-medium text-white mb-4">Crafting</h4>
              <ul className="mb-8 space-y-2">
                <li>
                  <Link href="/guides/crafting101" className="text-blue-400 hover:text-blue-300">
                    Crafting 101
                  </Link>
                </li>
                <li>
                  <Link href="/guides/mandalorian-armor" className="text-blue-400 hover:text-blue-300">
                    Mandalorian Armor
                  </Link>
                </li>
                <li>
                  <Link href="/guides/ris-armor" className="text-blue-400 hover:text-blue-300">
                    R.I.S. Armor
                  </Link>
                </li>
              </ul>

              <h4 className="text-xl font-medium text-white mb-4">Jedi</h4>
              <ul className="mb-8 space-y-2">
                <li>
                  <Link href="/guides/jedi-unlock" className="text-blue-400 hover:text-blue-300">
                    Jedi Unlock
                  </Link>
                </li>
                <li>
                  <Link href="/guides/the-village" className="text-blue-400 hover:text-blue-300">
                    The Village of Aurilia
                  </Link>
                </li>
                <li>
                  <Link href="/guides/padawan-trials" className="text-blue-400 hover:text-blue-300">
                    The Padawan Trials
                  </Link>
                </li>
                <li>
                  <Link href="/guides/the-knight-trials" className="text-blue-400 hover:text-blue-300">
                    The Knight Trials
                  </Link>
                </li>
                <li>
                  <Link href="/guides/force-ranking-system" className="text-blue-400 hover:text-blue-300">
                    Force Ranking System
                  </Link>
                </li>
              </ul>

              <p className="text-gray-300">
                If you have any additional ideas not included in the list above, please message Nic on Discord — @Nic#0126.
              </p>
            </div>
          </div>
        </section>
      </div>

      <DiscordSection />
      <Footer />
    </main>
  );
}
