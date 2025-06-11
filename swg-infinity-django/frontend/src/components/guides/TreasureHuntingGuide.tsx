"use client";

import { PageLayout } from "@/components/PageLayout";

export function TreasureHuntingGuide() {
  return (
    <PageLayout
      title="Treasure Hunting"
      subtitle="Your guide to treasure hunting in SWG Infinity"
    >
      <h2 className="section-title mb-6">Treasure Hunting Guide</h2>

      <p className="text-gray-300 mb-8">
        Treasure hunting is a lucrative activity in Star Wars Galaxies that allows players to
        find valuable items and resources. This guide will walk you through the process of
        obtaining treasure maps, locating treasures, and dealing with the guardians that
        protect them.
      </p>

      <div className="bg-[rgba(13,20,40,0.8)] p-6 rounded-md border border-[#1a1a4a] mb-8">
        <h3 className="text-white font-semibold text-lg mb-4">Getting Started</h3>
        <p className="text-gray-300 mb-4">
          To begin treasure hunting, you'll need to obtain treasure maps. These maps will lead
          you to treasure caches that are guarded by NPCs. The higher the level of the map,
          the better the potential rewards, but also the more difficult the guardians.
        </p>
      </div>

      <h3 className="text-xl font-bold text-white mb-4">Obtaining Treasure Maps</h3>
      <p className="text-gray-300 mb-6">
        There are several ways to obtain treasure maps:
      </p>
      <ul className="swg-bullet-list mb-8">
        <li className="text-gray-300 mb-2">
          <span className="text-[hsl(var(--swg-accent-gold))]">Loot from creatures:</span> Many creatures have a chance to drop treasure maps when defeated.
        </li>
        <li className="text-gray-300 mb-2">
          <span className="text-[hsl(var(--swg-accent-gold))]">Mission terminals:</span> Some mission terminals offer treasure hunting missions.
        </li>
        <li className="text-gray-300 mb-2">
          <span className="text-[hsl(var(--swg-accent-gold))]">Player trading:</span> You can purchase maps from other players.
        </li>
        <li className="text-gray-300 mb-2">
          <span className="text-[hsl(var(--swg-accent-gold))]">Rare loot drops:</span> Some high-level dungeons and instances can reward treasure maps.
        </li>
      </ul>

      <h3 className="text-xl font-bold text-white mb-4">Treasure Map Types</h3>
      <p className="text-gray-300 mb-6">
        Treasure maps come in different levels, which determine the difficulty and rewards:
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        <div className="bg-[rgba(13,20,40,0.6)] p-4 rounded-md border border-[#1a1a4a]">
          <h4 className="text-[hsl(var(--swg-accent-gold))] font-semibold mb-2">Level 1 Maps</h4>
          <p className="text-gray-300">Guardian CL: 10-20</p>
          <p className="text-gray-300">Rewards: Basic treasures, some credits</p>
        </div>
        <div className="bg-[rgba(13,20,40,0.6)] p-4 rounded-md border border-[#1a1a4a]">
          <h4 className="text-[hsl(var(--swg-accent-gold))] font-semibold mb-2">Level 2 Maps</h4>
          <p className="text-gray-300">Guardian CL: 20-40</p>
          <p className="text-gray-300">Rewards: Better treasures, more credits</p>
        </div>
        <div className="bg-[rgba(13,20,40,0.6)] p-4 rounded-md border border-[#1a1a4a]">
          <h4 className="text-[hsl(var(--swg-accent-gold))] font-semibold mb-2">Level 3 Maps</h4>
          <p className="text-gray-300">Guardian CL: 40-60</p>
          <p className="text-gray-300">Rewards: Rare items, significant credits</p>
        </div>
        <div className="bg-[rgba(13,20,40,0.6)] p-4 rounded-md border border-[#1a1a4a]">
          <h4 className="text-[hsl(var(--swg-accent-gold))] font-semibold mb-2">Level 4 Maps</h4>
          <p className="text-gray-300">Guardian CL: 60-80</p>
          <p className="text-gray-300">Rewards: Very rare items, large credit rewards</p>
        </div>
      </div>

      <h3 className="text-xl font-bold text-white mb-4">Using a Treasure Map</h3>
      <ol className="list-decimal pl-6 text-gray-300 mb-8 space-y-2">
        <li>Double-click the treasure map in your inventory to use it.</li>
        <li>A waypoint will be added to your datapad, showing the general area of the treasure.</li>
        <li>Travel to the waypoint location on the specified planet.</li>
        <li>Once you're close to the waypoint, use the map again to get a more precise location.</li>
        <li>Continue this process until you find the exact treasure spot.</li>
      </ol>

      <h3 className="text-xl font-bold text-white mb-4">Finding the Treasure</h3>
      <p className="text-gray-300 mb-6">
        When you get close to the treasure location:
      </p>
      <ol className="list-decimal pl-6 text-gray-300 mb-8 space-y-2">
        <li>Look for a mound or disturbed area on the ground.</li>
        <li>Interact with the mound to begin digging for the treasure.</li>
        <li>This will spawn a guardian NPC who protects the treasure.</li>
        <li>Defeat the guardian to gain access to the treasure chest.</li>
        <li>Loot the chest to collect your rewards.</li>
      </ol>

      <h3 className="text-xl font-bold text-white mb-4">Treasure Guardians</h3>
      <p className="text-gray-300 mb-6">
        Different types of guardians may appear depending on the planet and map level:
      </p>
      <ul className="swg-bullet-list mb-8">
        <li className="text-gray-300 mb-2">
          <span className="text-[hsl(var(--swg-accent-gold))]">Bandits:</span> Human NPCs with blasters or melee weapons
        </li>
        <li className="text-gray-300 mb-2">
          <span className="text-[hsl(var(--swg-accent-gold))]">Pirates:</span> Similar to bandits but often higher level
        </li>
        <li className="text-gray-300 mb-2">
          <span className="text-[hsl(var(--swg-accent-gold))]">Droids:</span> Mechanical guardians with various abilities
        </li>
        <li className="text-gray-300 mb-2">
          <span className="text-[hsl(var(--swg-accent-gold))]">Creatures:</span> Planet-specific beasts of varying difficulty
        </li>
        <li className="text-gray-300 mb-2">
          <span className="text-[hsl(var(--swg-accent-gold))]">Elite Guardians:</span> Tough opponents found with high-level maps
        </li>
      </ul>

      <h3 className="text-xl font-bold text-white mb-4">Potential Rewards</h3>
      <p className="text-gray-300 mb-6">
        Treasures can contain various valuable items:
      </p>
      <ul className="swg-bullet-list mb-8">
        <li className="text-gray-300 mb-2">Credits</li>
        <li className="text-gray-300 mb-2">Resources (including rare types)</li>
        <li className="text-gray-300 mb-2">Crafting components</li>
        <li className="text-gray-300 mb-2">Weapon and armor attachments</li>
        <li className="text-gray-300 mb-2">Rare schematics</li>
        <li className="text-gray-300 mb-2">Valuable loot items</li>
        <li className="text-gray-300 mb-2">Jedi crystals (rarely)</li>
      </ul>

      <h3 className="text-xl font-bold text-white mb-4">Infinity-Specific Enhancements</h3>
      <p className="text-gray-300 mb-6">
        SWG Infinity has made several improvements to the treasure hunting system:
      </p>
      <ul className="swg-bullet-list mb-8">
        <li className="text-gray-300 mb-2">Improved Treasure Map System</li>
        <li className="text-gray-300 mb-2">Increased rare item drops</li>
        <li className="text-gray-300 mb-2">Unique Infinity-specific treasures</li>
        <li className="text-gray-300 mb-2">Enhanced guardian NPC variety</li>
        <li className="text-gray-300 mb-2">Better waypoint accuracy when using maps</li>
      </ul>

      <div className="bg-[rgba(13,20,40,0.6)] p-6 rounded-md border border-[#1a1a4a] mt-12">
        <h3 className="text-white font-semibold text-lg mb-4">Tips for Successful Treasure Hunting</h3>
        <ul className="swg-bullet-list">
          <li className="text-gray-300 mb-2">Make sure you're prepared to fight guardians appropriate to your level.</li>
          <li className="text-gray-300 mb-2">Higher level maps yield better rewards but require stronger characters.</li>
          <li className="text-gray-300 mb-2">Group up with other players for higher-level treasure hunts.</li>
          <li className="text-gray-300 mb-2">Some planets have more valuable treasures than others.</li>
          <li className="text-gray-300">Keep an eye out for special event treasure maps that may have unique rewards.</li>
        </ul>
      </div>
    </PageLayout>
  );
}
