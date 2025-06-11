"use client";

import { PageLayout } from "@/components/PageLayout";

export function TheWarrenGuide() {
  return (
    <PageLayout
      title="The Warren"
      subtitle="A complete guide to The Warren dungeon on Dantooine"
    >
      <h2 className="section-title mb-6">The Warren</h2>

      <p className="text-gray-300 mb-8">
        The Warren is a dungeon located on Dantooine that was once an Imperial research facility.
        After a biological experiment gone wrong, the facility is now overrun with hostile creatures
        and rogue droids. This guide will help you navigate through The Warren and complete all the quests.
      </p>

      <div className="bg-[rgba(13,20,40,0.8)] p-6 rounded-md border border-[#1a1a4a] mb-8">
        <h3 className="text-white font-semibold text-lg mb-4">Basic Information</h3>
        <ul className="swg-bullet-list">
          <li className="text-gray-300 mb-2"><span className="text-[hsl(var(--swg-accent-gold))]">Location:</span> Dantooine at /way -550 -3825</li>
          <li className="text-gray-300 mb-2"><span className="text-[hsl(var(--swg-accent-gold))]">Difficulty:</span> Medium (CL 30-50 recommended)</li>
          <li className="text-gray-300 mb-2"><span className="text-[hsl(var(--swg-accent-gold))]">Group Size:</span> Solo to small group</li>
          <li className="text-gray-300"><span className="text-[hsl(var(--swg-accent-gold))]">Quest NPCs:</span> Various NPCs inside and outside the facility</li>
        </ul>
      </div>

      <h3 className="text-xl font-bold text-white mb-4">Entrance</h3>
      <p className="text-gray-300 mb-6">
        The entrance to The Warren is a small bunker door on Dantooine. As you approach, you'll see
        a quest NPC named Mirla outside. Speak with her to start the main quest line.
      </p>

      <h3 className="text-xl font-bold text-white mb-4">Quest: Mirla's Husband</h3>
      <p className="text-gray-300 mb-4">
        Mirla will ask you to find her husband Trahvin Yuha who is lost somewhere inside The Warren.
      </p>
      <ol className="list-decimal pl-6 text-gray-300 mb-6 space-y-2">
        <li>Enter The Warren and proceed through the main hallway.</li>
        <li>Navigate through the facility until you reach the detention area.</li>
        <li>Find Trahvin in one of the cells and speak with him.</li>
        <li>Return to Mirla to complete this quest.</li>
      </ol>

      <h3 className="text-xl font-bold text-white mb-4">Quest: The Warren Pass Code</h3>
      <p className="text-gray-300 mb-4">
        Inside the facility, you'll encounter a terminal that requires a passcode to access certain areas.
      </p>
      <ol className="list-decimal pl-6 text-gray-300 mb-6 space-y-2">
        <li>Find Captain Rikkert inside the facility.</li>
        <li>Complete his quest to obtain the passcode.</li>
        <li>Use the passcode at the terminal to unlock secure areas.</li>
      </ol>

      <h3 className="text-xl font-bold text-white mb-4">Quest: Infected Prisoner</h3>
      <p className="text-gray-300 mb-4">
        In the detention area, you'll find a prisoner suffering from a mysterious infection.
      </p>
      <ol className="list-decimal pl-6 text-gray-300 mb-6 space-y-2">
        <li>Speak to Doctor Sev who is hidden in the medical area.</li>
        <li>He'll ask you to gather samples from various infected creatures.</li>
        <li>Collect the samples and return them to Doctor Sev.</li>
        <li>Take the antidote to the prisoner.</li>
      </ol>

      <h3 className="text-xl font-bold text-white mb-4">Quest: The Reactor</h3>
      <p className="text-gray-300 mb-4">
        The facility's reactor is malfunctioning and threatens to explode.
      </p>
      <ol className="list-decimal pl-6 text-gray-300 mb-6 space-y-2">
        <li>Find Engineer Manx near the reactor room.</li>
        <li>He'll ask you to repair several control panels throughout the facility.</li>
        <li>Locate and repair each panel.</li>
        <li>Return to Engineer Manx to complete the quest.</li>
      </ol>

      <h3 className="text-xl font-bold text-white mb-4">Quest: Hostile Takeover</h3>
      <p className="text-gray-300 mb-4">
        The final quest involves dealing with the hostile droid that has taken over the facility.
      </p>
      <ol className="list-decimal pl-6 text-gray-300 mb-6 space-y-2">
        <li>Gather intel from various terminals throughout the facility.</li>
        <li>Find and defeat the rogue security droid in the command center.</li>
        <li>Recover the data core and bring it to the Imperial officer outside The Warren.</li>
      </ol>

      <h3 className="text-xl font-bold text-white mb-4">Map and Navigation</h3>
      <p className="text-gray-300 mb-6">
        The Warren consists of several key areas:
      </p>
      <ul className="swg-bullet-list mb-6">
        <li className="text-gray-300 mb-2">Entrance Hall: The first area you enter</li>
        <li className="text-gray-300 mb-2">Detention Area: Where prisoners are held</li>
        <li className="text-gray-300 mb-2">Medical Bay: Where Doctor Sev is hiding</li>
        <li className="text-gray-300 mb-2">Reactor Room: Location of the facility's power core</li>
        <li className="text-gray-300 mb-2">Command Center: The final area with the rogue droid</li>
      </ul>

      <h3 className="text-xl font-bold text-white mb-4">Enemies</h3>
      <p className="text-gray-300 mb-4">
        Inside The Warren, you'll encounter the following enemies:
      </p>
      <ul className="swg-bullet-list mb-6">
        <li className="text-gray-300 mb-2">Infected Workers (CL 30-35)</li>
        <li className="text-gray-300 mb-2">Malfunctioning Droids (CL 35-40)</li>
        <li className="text-gray-300 mb-2">Research Specimens (CL 40-45)</li>
        <li className="text-gray-300 mb-2">Security Droids (CL 45-50)</li>
        <li className="text-gray-300 mb-2">Cyborg Experiments (CL 50)</li>
      </ul>

      <h3 className="text-xl font-bold text-white mb-4">Rewards</h3>
      <p className="text-gray-300 mb-4">
        Completing all quests in The Warren will reward you with:
      </p>
      <ul className="swg-bullet-list mb-6">
        <li className="text-gray-300 mb-2">Credits and XP</li>
        <li className="text-gray-300 mb-2">Special Warren-themed items</li>
        <li className="text-gray-300 mb-2">Rare crafting schematics</li>
        <li className="text-gray-300 mb-2">Access to a hidden vendor with unique items</li>
      </ul>

      <div className="bg-[rgba(13,20,40,0.6)] p-6 rounded-md border border-[#1a1a4a] mt-12">
        <h3 className="text-white font-semibold text-lg mb-4">Additional Tips</h3>
        <ul className="swg-bullet-list">
          <li className="text-gray-300 mb-2">Bring medic packs and stimpacks, as there are few opportunities to heal inside.</li>
          <li className="text-gray-300 mb-2">Some doors require specific keycards found throughout the facility.</li>
          <li className="text-gray-300 mb-2">The command center is the most difficult area, so be prepared for tough enemies.</li>
          <li className="text-gray-300">Consider bringing a group for the final confrontation with the rogue droid.</li>
        </ul>
      </div>
    </PageLayout>
  );
}
