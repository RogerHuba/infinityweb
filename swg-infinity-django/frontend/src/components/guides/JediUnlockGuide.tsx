"use client";

import { Navigation } from "@/components/Navigation";
import { DiscordSection } from "@/components/DiscordSection";
import { Footer } from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";

export function JediUnlockGuide() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navigation />

      <div className="flex-grow relative">
        <div className="hexagon-pattern" />

        <div className="hero-section-guides py-16">
          <div className="container mx-auto px-4">
            <div className="bg-black/70 p-8 rounded-lg">
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Jedi Unlock Guide</h1>
              <p className="text-gray-300">Learn how to become a Jedi in Star Wars Galaxies Infinity</p>
            </div>
          </div>
        </div>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="bg-[rgba(13,20,40,0.6)] p-8 rounded-lg mb-12">
                <h2 className="text-2xl font-bold text-white mb-6">Introduction to Jedi in SWG Infinity</h2>
                <div className="text-gray-300 space-y-4">
                  <p>
                    Becoming a Jedi in Star Wars Galaxies is one of the most challenging and rewarding journeys a player can undertake. Unlike in some other Star Wars games, the path to becoming a Jedi in SWG Infinity is intentionally difficult and time-consuming, making it a prestigious achievement.
                  </p>
                  <p>
                    In Infinity, we have optimized the requirements to make the journey quicker and more engaging than it was in the original game, while still preserving the sense of accomplishment.
                  </p>
                  <p>
                    This guide will walk you through the entire process, from the initial Village of Aurilia quest line to the final Knight trials.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                <div className="bg-[rgba(13,20,40,0.6)] p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-white mb-4">Step 1: Find the Force Sensitive Village</h3>
                  <p className="text-gray-300 mb-4">
                    Your journey begins at the Village of Aurilia on Dathomir. To find it, travel to the coordinates: (X: 5300, Y: -4100).
                  </p>
                  <p className="text-gray-300">
                    The village is hidden, but once you're near these coordinates, you will be able to see it clearly.
                  </p>
                </div>

                <div className="bg-[rgba(13,20,40,0.6)] p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-white mb-4">Step 2: Begin the Village Quests</h3>
                  <p className="text-gray-300 mb-4">
                    Speak to the gatekeeper at the village entrance. She will give you a series of tasks to prove your Force sensitivity.
                  </p>
                  <p className="text-gray-300">
                    Complete these initial quests to gain access to the village proper and start your Jedi training.
                  </p>
                </div>

                <div className="bg-[rgba(13,20,40,0.6)] p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-white mb-4">Step 3: Progress Through Phases</h3>
                  <p className="text-gray-300 mb-4">
                    The village operates on a cycle of four phases, each lasting about a week in real-time.
                  </p>
                  <p className="text-gray-300">
                    During each phase, you'll be assigned different tasks to complete to build your Force ability.
                  </p>
                </div>
              </div>

              <div className="bg-[rgba(13,20,40,0.6)] p-8 rounded-lg mb-12">
                <h2 className="text-2xl font-bold text-white mb-6">Village Requirements</h2>
                <p className="text-gray-300 mb-6">
                  To progress through the village, you'll need to complete various tasks and earn Force Sensitive Experience Points (FSPs). Here are the key requirements:
                </p>

                <div className="overflow-x-auto">
                  <table className="w-full text-left">
                    <thead>
                      <tr className="border-b border-gray-700">
                        <th className="py-3 px-4 text-white">Phase</th>
                        <th className="py-3 px-4 text-white">Required Tasks</th>
                        <th className="py-3 px-4 text-white">FSPs Needed</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-gray-700">
                        <td className="py-3 px-4 text-gray-300">Phase 1</td>
                        <td className="py-3 px-4 text-gray-300">Initial quests from the gatekeeper</td>
                        <td className="py-3 px-4 text-gray-300">250 FSPs</td>
                      </tr>
                      <tr className="border-b border-gray-700">
                        <td className="py-3 px-4 text-gray-300">Phase 2</td>
                        <td className="py-3 px-4 text-gray-300">Village Branch quests</td>
                        <td className="py-3 px-4 text-gray-300">500 FSPs</td>
                      </tr>
                      <tr className="border-b border-gray-700">
                        <td className="py-3 px-4 text-gray-300">Phase 3</td>
                        <td className="py-3 px-4 text-gray-300">Advanced Branch quests</td>
                        <td className="py-3 px-4 text-gray-300">750 FSPs</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4 text-gray-300">Phase 4</td>
                        <td className="py-3 px-4 text-gray-300">Final Trial quests</td>
                        <td className="py-3 px-4 text-gray-300">1000 FSPs</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="bg-[rgba(13,20,40,0.6)] p-8 rounded-lg mb-12">
                <h2 className="text-2xl font-bold text-white mb-6">Padawan Trials</h2>
                <p className="text-gray-300 mb-6">
                  After completing the village phases, you'll need to complete the Padawan Trials to gain your lightsaber and basic Force abilities.
                </p>

                <h3 className="text-xl font-bold text-white mb-4">The Trials Include:</h3>
                <ul className="swg-bullet-list text-gray-300 mb-6">
                  <li>Trial of Combat: Defeat a series of increasingly difficult enemies</li>
                  <li>Trial of Endurance: Navigate a dangerous area while avoiding detection</li>
                  <li>Trial of Skill: Complete precision tasks requiring focus and control</li>
                  <li>Trial of Courage: Face your greatest fear</li>
                </ul>

                <p className="text-gray-300">
                  Upon completion of all trials, you'll receive your first lightsaber crystal and the ability to construct your own lightsaber.
                </p>
              </div>

              <div className="bg-[rgba(13,20,40,0.6)] p-8 rounded-lg mb-12">
                <h2 className="text-2xl font-bold text-white mb-6">Knight Trials</h2>
                <p className="text-gray-300 mb-6">
                  After becoming a Padawan, you'll continue your journey to become a full Jedi Knight through the Knight Trials.
                </p>

                <h3 className="text-xl font-bold text-white mb-4">Knight Trial Requirements:</h3>
                <ul className="swg-bullet-list text-gray-300 mb-6">
                  <li>Master at least 4 Force Sensitive skill boxes</li>
                  <li>Complete the Trial of the Ancient Master</li>
                  <li>Craft your final lightsaber</li>
                  <li>Choose your path: Light Side or Dark Side</li>
                </ul>

                <div className="bg-[rgba(20,30,60,0.6)] p-6 rounded-lg mb-6">
                  <h4 className="text-lg font-bold text-white mb-2">Light Side Benefits:</h4>
                  <ul className="swg-bullet-list text-gray-300">
                    <li>Enhanced healing and protection abilities</li>
                    <li>Focus on defensive lightsaber forms</li>
                    <li>Ability to cloak allies</li>
                  </ul>
                </div>

                <div className="bg-[rgba(60,20,20,0.6)] p-6 rounded-lg">
                  <h4 className="text-lg font-bold text-white mb-2">Dark Side Benefits:</h4>
                  <ul className="swg-bullet-list text-gray-300">
                    <li>Enhanced damage and offensive capabilities</li>
                    <li>Focus on aggressive lightsaber forms</li>
                    <li>Ability to drain enemy vitality</li>
                  </ul>
                </div>
              </div>

              <div className="bg-[rgba(13,20,40,0.6)] p-8 rounded-lg">
                <h2 className="text-2xl font-bold text-white mb-6">Tips for Success</h2>
                <ul className="swg-bullet-list text-gray-300 mb-6">
                  <li>Join a guild with experienced players who can help guide you</li>
                  <li>Stock up on resources before starting the village quests</li>
                  <li>Mastering multiple professions before starting will make your journey easier</li>
                  <li>The journey is long, but the rewards are significant – be patient!</li>
                  <li>Don't neglect your other skills – a well-rounded character makes a better Jedi</li>
                </ul>

                <div className="bg-[rgba(30,30,60,0.6)] p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-white mb-4">Need More Help?</h3>
                  <p className="text-gray-300 mb-4">
                    If you're stuck on any part of the Jedi journey, our community is here to help!
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <Link href="https://discord.gg/jyakeRJ" className="play-button" target="_blank" rel="noopener noreferrer">
                      Join Our Discord
                    </Link>
                    <Link href="/guides/the-village" className="play-button">
                      Village Guide
                    </Link>
                    <Link href="/guides/the-knight-trials" className="play-button">
                      Knight Trials Guide
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <DiscordSection />
      <Footer />
    </main>
  );
}
