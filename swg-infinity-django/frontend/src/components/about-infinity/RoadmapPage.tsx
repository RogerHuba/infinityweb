"use client";

import { PageLayout } from "@/components/PageLayout";

interface RoadmapItem {
  title: string;
  timeframe: string;
  description: string;
  status: "completed" | "in-progress" | "planned";
  features: string[];
}

const roadmapItems: RoadmapItem[] = [
  {
    title: "Phase 1: Foundation",
    timeframe: "Completed",
    description: "Core gameplay enhancements and quality of life improvements.",
    status: "completed",
    features: [
      "New Mandalorian Profession",
      "Jedi Village Unlock with optimized requirements",
      "Faster XP gains",
      "Improved travel system",
      "Custom content to keep players engaged"
    ]
  },
  {
    title: "Phase 2: Expansion",
    timeframe: "Current Phase",
    description: "Expanding content and enhancing player experience.",
    status: "in-progress",
    features: [
      "New NGE Weapons and Armor integration",
      "Enhanced player housing and city systems",
      "Revamped Geonosian Caves",
      "Improved Treasure Map System",
      "Additional quality of life updates"
    ]
  },
  {
    title: "Phase 3: End-Game Evolution",
    timeframe: "Q3 2025",
    description: "Major additions to provide challenging end-game content.",
    status: "planned",
    features: [
      "New high-level dungeons",
      "Expanded space combat",
      "Advanced crafting systems",
      "New player vs. environment challenges",
      "Enhanced Jedi progression"
    ]
  },
  {
    title: "Phase 4: Community Expansion",
    timeframe: "Q4 2025",
    description: "Focusing on community features and social gameplay.",
    status: "planned",
    features: [
      "Guild system improvements",
      "Enhanced player events framework",
      "New social spaces and venues",
      "Community-created content integration",
      "Cross-server events"
    ]
  },
  {
    title: "Phase 5: New Horizons",
    timeframe: "2026",
    description: "Exploring new frontiers and expanding the galaxy.",
    status: "planned",
    features: [
      "New planets and locations",
      "Additional playable species",
      "New profession specializations",
      "Expanded story content",
      "Player-influenced galaxy events"
    ]
  }
];

export function RoadmapPage() {
  return (
    <PageLayout title="Roadmap" subtitle="The future of SWG Infinity">
      <h2 className="section-title mb-6">Development Roadmap</h2>

      <p className="text-gray-300 mb-8">
        Our team is constantly working to improve SWG Infinity and add new content.
        This roadmap outlines our plans for future development. Please note that while
        we strive to meet these goals, specific details and timeframes may change as we progress.
      </p>

      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-[15px] md:left-1/2 top-0 bottom-0 w-0.5 bg-[hsl(var(--swg-accent-gold))/30%] -ml-px md:ml-0 z-0" />

        {/* Timeline items */}
        <div className="relative z-10">
          {roadmapItems.map((item, index) => (
            <div key={item.title} className="mb-12">
              <div className={`flex flex-col md:flex-row items-start md:items-center gap-4 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 w-8 h-8 bg-[#0d0d30] border-2 rounded-full -ml-4 md:ml-[-16px] z-10 flex items-center justify-center">
                  <div
                    className={`w-4 h-4 rounded-full ${
                      item.status === 'completed' ? 'bg-green-500' :
                      item.status === 'in-progress' ? 'bg-[hsl(var(--swg-accent-gold))]' :
                      'bg-blue-500'
                    }`}
                  />
                </div>

                {/* Content card */}
                <div className={`ml-12 md:ml-0 md:w-5/12 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                  <div className="bg-[rgba(13,20,40,0.8)] p-6 rounded-md border border-[#1a1a4a]">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="text-white font-bold text-xl">{item.title}</h3>
                      <span className={`text-sm px-2 py-1 rounded ${
                        item.status === 'completed' ? 'bg-green-900 text-green-200' :
                        item.status === 'in-progress' ? 'bg-[hsl(var(--swg-accent-gold))/20%] text-[hsl(var(--swg-accent-gold))]' :
                        'bg-blue-900 text-blue-200'
                      }`}>
                        {item.timeframe}
                      </span>
                    </div>
                    <p className="text-gray-300 mb-4">{item.description}</p>
                    <h4 className="text-[hsl(var(--swg-accent-gold))] mb-2">Key Features:</h4>
                    <ul className="swg-bullet-list">
                      {item.features.map((feature) => (
                        <li key={feature} className="text-gray-300 mb-1.5">{feature}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-[rgba(13,20,40,0.6)] p-6 rounded-md border border-[#1a1a4a] mt-12">
        <h3 className="text-white font-semibold text-lg mb-4">Community Feedback</h3>
        <p className="text-gray-300">
          We value your input! The roadmap is influenced by community feedback and suggestions.
          If you have ideas for features or improvements, please share them with us on Discord.
        </p>
      </div>
    </PageLayout>
  );
}
