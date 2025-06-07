"use client";

import { useState } from "react";
import { PageLayout } from "@/components/PageLayout";
import { ChevronDown, ChevronUp, Search, ExternalLink } from "lucide-react";
import Link from "next/link";

interface FAQItem {
  id: string;
  question: string;
  answer: React.ReactNode;
  category: string;
  tags: string[];
}

export function FAQPage() {
  const [openItemId, setOpenItemId] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const toggleItem = (id: string) => {
    setOpenItemId(openItemId === id ? null : id);
  };

  // FAQ Categories
  const categories = [
    { id: "all", name: "All Questions" },
    { id: "getting-started", name: "Getting Started" },
    { id: "gameplay", name: "Gameplay" },
    { id: "technical", name: "Technical Support" },
    { id: "jedi", name: "Jedi Path" },
    { id: "community", name: "Community" },
  ];

  // FAQ Items
  const faqItems: FAQItem[] = [
    {
      id: "what-is-swg",
      question: "What is Star Wars Galaxies?",
      answer: (
        <div>
          <p className="mb-2">
            Star Wars Galaxies is an MMORPG set in the Star Wars universe that originally launched in 2003 and ran until 2011.
            SWG Infinity is a fan-run server that recreates the Pre-Combat Upgrade (PreCU) version of the game, which is widely
            considered the best era of SWG by many players.
          </p>
          <p>
            The game offers a sandbox experience where players can choose from over 30 professions, build homes and cities,
            craft items, engage in combat, and even become a Jedi.
          </p>
        </div>
      ),
      category: "getting-started",
      tags: ["basics", "introduction", "what is swg"],
    },
    {
      id: "how-to-start",
      question: "How do I start playing SWG Infinity?",
      answer: (
        <div>
          <p className="mb-4">To get started with SWG Infinity, follow these steps:</p>
          <ol className="list-decimal pl-6 space-y-2 mb-4">
            <li>Download the <Link href="/new-launcher" className="text-[hsl(var(--swg-accent-gold))] hover:underline">SWG Infinity Launcher</Link></li>
            <li>Install the launcher and follow the on-screen instructions</li>
            <li>Create an account through the launcher</li>
            <li>Let the launcher download the necessary game files</li>
            <li>Launch the game and create your first character</li>
          </ol>
          <p>
            For more detailed information, check out our <Link href="/play-now" className="text-[hsl(var(--swg-accent-gold))] hover:underline">Play Now</Link> page.
          </p>
        </div>
      ),
      category: "getting-started",
      tags: ["installation", "download", "launcher", "start playing"],
    },
    {
      id: "system-requirements",
      question: "What are the system requirements?",
      answer: (
        <div>
          <h4 className="text-white font-medium mb-2">Minimum Requirements:</h4>
          <ul className="swg-bullet-list mb-4">
            <li>OS: Windows 7, 8, 10, or 11</li>
            <li>Processor: Intel Core i3 or AMD equivalent</li>
            <li>Memory: 4 GB RAM</li>
            <li>Graphics: DirectX 9.0c compatible with 1GB VRAM</li>
            <li>Storage: 10 GB available space</li>
          </ul>
          <h4 className="text-white font-medium mb-2">Recommended Requirements:</h4>
          <ul className="swg-bullet-list">
            <li>OS: Windows 10 or 11 (64-bit)</li>
            <li>Processor: Intel Core i5 or AMD equivalent</li>
            <li>Memory: 8 GB RAM</li>
            <li>Graphics: DirectX 11 compatible with 2GB VRAM</li>
            <li>Storage: 20 GB available space (SSD recommended)</li>
          </ul>
        </div>
      ),
      category: "technical",
      tags: ["requirements", "specs", "computer", "hardware"],
    },
    {
      id: "choose-profession",
      question: "How do I choose a profession?",
      answer: (
        <div>
          <p className="mb-2">
            SWG has a unique skill-based profession system with 34 professions. You start by selecting one of these basic professions:
          </p>
          <ul className="swg-bullet-list mb-4">
            <li>Marksman (combat with ranged weapons)</li>
            <li>Brawler (melee combat)</li>
            <li>Scout (exploration and survival)</li>
            <li>Artisan (crafting and resource gathering)</li>
            <li>Entertainer (social buffs through music/dancing)</li>
            <li>Medic (healing)</li>
          </ul>
          <p className="mb-2">
            From there, you earn experience points to advance in your chosen profession's skill tree.
            You can learn multiple professions, but you have a limited number of skill points.
          </p>
          <p>
            For new players, we recommend starting with Marksman or Brawler if you enjoy combat,
            or Artisan if you're interested in crafting and economics.
          </p>
        </div>
      ),
      category: "gameplay",
      tags: ["professions", "skills", "character", "class"],
    },
    {
      id: "become-jedi",
      question: "How do I become a Jedi?",
      answer: (
        <div>
          <p className="mb-2">
            Becoming a Jedi in SWG Infinity involves completing the Jedi Village quest line and the Knight Trials:
          </p>
          <ol className="list-decimal pl-6 space-y-2 mb-4">
            <li>First, you need to locate the Force Sensitive Village on Dathomir</li>
            <li>Complete the four skill trees in the village (Crafting, Combat, Politics, Exploration)</li>
            <li>Pass the Padawan Trials</li>
            <li>Complete the Knight Trials (challenging combat objectives)</li>
          </ol>
          <p>
            For a detailed guide, check our <Link href="/guides/jedi-unlock" className="text-[hsl(var(--swg-accent-gold))] hover:underline">Jedi Unlock Guide</Link> and
            <Link href="/guides/the-knight-trials" className="text-[hsl(var(--swg-accent-gold))] hover:underline ml-1">Knight Trials Guide</Link>.
          </p>
          <p className="mt-2 text-yellow-300">
            <strong>Note:</strong> The Jedi path is designed as end-game content and can take several weeks to complete.
          </p>
        </div>
      ),
      category: "jedi",
      tags: ["jedi", "unlock", "force sensitive", "knight trials"],
    },
    {
      id: "player-housing",
      question: "How does player housing work?",
      answer: (
        <div>
          <p className="mb-2">
            Player housing is a core feature in SWG. To place a house:
          </p>
          <ol className="list-decimal pl-6 space-y-1 mb-4">
            <li>Purchase a deed from an Architect or the bazaar</li>
            <li>Find a suitable location that's not in a no-build zone</li>
            <li>Use the deed to place your structure</li>
            <li>Add furniture, decorations, and vendors</li>
          </ol>
          <p className="mb-2">
            There are many housing types, from small tents to large guild halls.
            You can also join or create player cities with other players.
          </p>
          <p>
            Player houses have maintenance costs that must be paid regularly to prevent decay.
          </p>
        </div>
      ),
      category: "gameplay",
      tags: ["housing", "buildings", "player cities", "decorating"],
    },
    {
      id: "crafting-system",
      question: "How does the crafting system work?",
      answer: (
        <div>
          <p className="mb-4">
            The SWG crafting system is one of the most complex and rewarding in any MMO:
          </p>
          <ul className="swg-bullet-list mb-4">
            <li>Gather resources using survey tools and harvesters</li>
            <li>Resources have various quality attributes that affect the final product</li>
            <li>Crafting involves experimentation which can improve item stats</li>
            <li>Higher-tier crafters can create better quality items</li>
            <li>Almost everything used by players is crafted by other players</li>
          </ul>
          <p>
            For new crafters, we recommend starting as an Artisan and then specializing in Architect, Weaponsmith,
            or another profession based on your interests.
          </p>
        </div>
      ),
      category: "gameplay",
      tags: ["crafting", "resources", "economy", "artisan"],
    },
    {
      id: "connect-discord",
      question: "How do I connect with the community?",
      answer: (
        <div>
          <p className="mb-2">
            Our community is mainly centered around our Discord server. Here's how to get connected:
          </p>
          <ul className="swg-bullet-list mb-4">
            <li>
              Join our <a href="https://discord.gg/jyakeRJ" target="_blank" rel="noopener noreferrer" className="text-[hsl(var(--swg-accent-gold))] hover:underline inline-flex items-center">
                Discord server <ExternalLink className="ml-1 h-3 w-3" />
              </a>
            </li>
            <li>Introduce yourself in the #welcome channel</li>
            <li>Check the #announcements channel for server news</li>
            <li>Ask questions in the #help channel</li>
            <li>Find groups in the #looking-for-group channel</li>
          </ul>
          <p>
            In-game, you can join player guilds, visit popular locations like the Mos Eisley Cantina,
            or attend community events announced on Discord.
          </p>
        </div>
      ),
      category: "community",
      tags: ["discord", "community", "groups", "social"],
    },
    {
      id: "launcher-issues",
      question: "What if I'm having issues with the launcher?",
      answer: (
        <div>
          <p className="mb-2">
            Common launcher issues and solutions:
          </p>
          <ul className="mb-4">
            <li className="mb-3">
              <strong className="text-white">Launcher won't start:</strong>
              <p className="ml-4">Make sure you have the latest .NET Framework installed and try running as administrator.</p>
            </li>
            <li className="mb-3">
              <strong className="text-white">Slow downloads:</strong>
              <p className="ml-4">Try disabling your firewall temporarily or use a wired internet connection.</p>
            </li>
            <li className="mb-3">
              <strong className="text-white">Files won't verify:</strong>
              <p className="ml-4">Use the "Repair" option in the launcher settings or try a clean installation.</p>
            </li>
          </ul>
          <p>
            If you're still having issues, please visit our <Link href="/support-2" className="text-[hsl(var(--swg-accent-gold))] hover:underline">Support</Link> page
            or ask for help in the #technical-help channel on our Discord.
          </p>
        </div>
      ),
      category: "technical",
      tags: ["launcher", "download", "installation", "crashes"],
    },
    {
      id: "server-rules",
      question: "What are the server rules?",
      answer: (
        <div>
          <p className="mb-2">
            A brief overview of our server rules:
          </p>
          <ul className="swg-bullet-list mb-4">
            <li>Be respectful to all players and staff</li>
            <li>No cheating, exploiting, or using unauthorized third-party software</li>
            <li>No hate speech, harassment, or offensive language</li>
            <li>No excessive spam in chat channels</li>
            <li>No buying/selling in-game items for real money</li>
          </ul>
          <p>
            For a complete list of rules, please visit our
            <Link href="/about-infinity/infinity-specific-rules" className="text-[hsl(var(--swg-accent-gold))] hover:underline ml-1">
              Infinity Specific Rules
            </Link> page.
          </p>
        </div>
      ),
      category: "community",
      tags: ["rules", "guidelines", "behavior", "conduct"],
    },
    {
      id: "multiple-accounts",
      question: "Can I use multiple accounts?",
      answer: (
        <div>
          <p className="mb-2">
            Yes, you can have multiple accounts on SWG Infinity, but there are some guidelines:
          </p>
          <ul className="swg-bullet-list mb-4">
            <li>Multiple accounts require approval through our <Link href="/multiple-account-request" className="text-[hsl(var(--swg-accent-gold))] hover:underline">Multiple Account Request</Link> form</li>
            <li>You can have up to 3 accounts per person</li>
            <li>Each account can have up to 7 character slots</li>
            <li>Using multiple accounts to exploit game mechanics is not allowed</li>
          </ul>
          <p>
            Multiple accounts are useful for crafters who need to manage multiple professions or for players who want separate characters for different playstyles.
          </p>
        </div>
      ),
      category: "getting-started",
      tags: ["accounts", "multiple accounts", "characters"],
    },
    {
      id: "cost-to-play",
      question: "How much does it cost to play?",
      answer: (
        <div>
          <p className="mb-2">
            SWG Infinity is completely <strong className="text-white">free to play</strong>. There are no required subscriptions or purchases needed to access the full game.
          </p>
          <p>
            The server is funded by donations from our community. If you enjoy the game and want to support ongoing development,
            you can make a voluntary donation on our <Link href="/donate" className="text-[hsl(var(--swg-accent-gold))] hover:underline">Donate</Link> page.
            Donations provide some cosmetic perks but no gameplay advantages.
          </p>
        </div>
      ),
      category: "getting-started",
      tags: ["free", "cost", "subscription", "donate"],
    },
  ];

  // Filter FAQ items based on search and category
  const filteredFAQs = faqItems.filter((item) => {
    const matchesSearch =
      searchQuery === "" ||
      item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));

    const matchesCategory = activeCategory === "all" || item.category === activeCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <PageLayout title="Frequently Asked Questions" subtitle="Answers to common questions for new players">
      <div className="mb-8">
        <div className="relative mb-6">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="Search FAQ..."
            className="w-full py-2 pl-10 pr-4 bg-[rgba(13,20,40,0.8)] border border-[#1a1a4a] rounded-md text-white focus:outline-none focus:ring-2 focus:ring-[hsl(var(--swg-accent-gold))/50%] focus:border-[hsl(var(--swg-accent-gold))]"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map((category) => (
            <button
              key={category.id}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
                activeCategory === category.id
                  ? "bg-[hsl(var(--swg-accent-gold))] text-black"
                  : "bg-[rgba(13,20,40,0.8)] text-white hover:bg-[rgba(20,30,60,0.8)]"
              }`}
              onClick={() => setActiveCategory(category.id)}
            >
              {category.name}
            </button>
          ))}
        </div>

        {filteredFAQs.length === 0 ? (
          <div className="text-center py-10">
            <p className="text-gray-400 mb-2">No questions found matching your search.</p>
            <button
              className="text-[hsl(var(--swg-accent-gold))] hover:underline"
              onClick={() => {
                setSearchQuery("");
                setActiveCategory("all");
              }}
            >
              Clear filters
            </button>
          </div>
        ) : (
          <div className="space-y-4">
            {filteredFAQs.map((item) => (
              <div
                key={item.id}
                className="border border-[#1a1a4a] rounded-lg overflow-hidden bg-[rgba(13,20,40,0.6)]"
              >
                <button
                  className="w-full px-6 py-4 text-left flex items-center justify-between"
                  onClick={() => toggleItem(item.id)}
                >
                  <h3 className="text-lg font-medium text-white">{item.question}</h3>
                  {openItemId === item.id ? (
                    <ChevronUp className="h-5 w-5 text-[hsl(var(--swg-accent-gold))]" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-[hsl(var(--swg-accent-gold))]" />
                  )}
                </button>
                {openItemId === item.id && (
                  <div className="px-6 py-4 border-t border-[#1a1a4a] text-gray-300">
                    {item.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="bg-[rgba(13,20,40,0.6)] p-6 rounded-md border border-[#1a1a4a] mt-12">
        <h3 className="text-white font-semibold text-lg mb-4">Still Have Questions?</h3>
        <p className="text-gray-300 mb-4">
          If you couldn't find the answer you're looking for, there are several ways to get help:
        </p>
        <ul className="swg-bullet-list">
          <li className="text-gray-300 mb-2">
            Join our <a href="https://discord.gg/jyakeRJ" target="_blank" rel="noopener noreferrer" className="text-[hsl(var(--swg-accent-gold))] hover:underline">Discord server</a> and ask in the #help channel
          </li>
          <li className="text-gray-300 mb-2">
            Check our <Link href="/guides" className="text-[hsl(var(--swg-accent-gold))] hover:underline">Guides</Link> section for more detailed information
          </li>
          <li className="text-gray-300">
            Contact our support team through the <Link href="/support-2" className="text-[hsl(var(--swg-accent-gold))] hover:underline">Support</Link> page
          </li>
        </ul>
      </div>
    </PageLayout>
  );
}
