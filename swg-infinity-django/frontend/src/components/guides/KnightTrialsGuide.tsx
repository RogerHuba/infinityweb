"use client";

import { PageLayout } from "@/components/PageLayout";
import Link from "next/link";

export function KnightTrialsGuide() {
  return (
    <PageLayout
      title="The Knight Trials"
      subtitle="Complete all trials to become a Jedi Knight"
    >
      <h1 className="text-3xl font-bold text-white mb-6">The Knight Trials</h1>

      <blockquote className="border-l-4 border-[hsl(var(--swg-accent-gold))] pl-4 italic text-gray-300 mb-8">
        <p>"For over a thousand generations, the Jedi Knights were the guardians of peace and justice in the Old Republic."</p>
        <footer className="text-right mt-2">— Obi-Wan Kenobi<sup>[1]</sup></footer>
      </blockquote>

      <p className="text-gray-300 mb-8">
        If you've made it this far, that means you have completed your four village trees, your Padawan Trials,
        and have trained in the Jedi ways. Now comes the next step to becoming one of the greatest Jedis this
        galaxy will ever see—<em>The Knight Trials</em>. The Knight Trials is moderately difficult, and can take
        a while to finish, though typically you should be able to finish the trials in a week or two. Most of
        the creatures mentioned in this list only reveal themselves after the lair they spawn from has blown up.
        Though you will not see them until after it blows—keep in mind that they do have a low chance to show up.
      </p>

      <p className="text-gray-300 mb-8">
        These are the Knight Trials in order:
      </p>

      <div className="space-y-10">
        <div className="bg-[rgba(13,20,40,0.8)] p-6 rounded-md border border-[#1a1a4a]">
          <h2 className="text-2xl font-bold text-white mb-4">1.) You must kill <span className="text-[hsl(var(--swg-accent-gold))]">19 Tusken Raiders</span></h2>
          <ul className="swg-bullet-list">
            <li className="text-gray-300 mb-2">Tusken Raiders can be found on Tatooine.</li>
            <li className="text-gray-300 mb-2">One place to find many Tusken Raiders is Fort Tusken, by the Tusken Outpost. You can fly to the Tusken Outpost shuttle from any shuttle on Tatooine.</li>
            <li className="text-gray-300 mb-2">Another place to find Tusken Raiders is the Jawa vs. Tusken Battlefield, found at /way 5778 3982.</li>
            <li className="text-gray-300">You can also find random spawns of Tusken Raiders near Jabba's Palace.</li>
          </ul>
        </div>

        <div className="bg-[rgba(13,20,40,0.8)] p-6 rounded-md border border-[#1a1a4a]">
          <h2 className="text-2xl font-bold text-white mb-4">2.) You must kill <span className="text-[hsl(var(--swg-accent-gold))]">8 Ancient Bull Rancors</span></h2>
          <ul className="swg-bullet-list">
            <li className="text-gray-300 mb-2">Ancient Bull Rancors can be found on Dathomir.</li>
            <li className="text-gray-300 mb-2">There is a single static spawn at entrance of the Mutant Rancor Cave at /way -4225 -2085.</li>
            <li className="text-gray-300 mb-2">There is also another rancor cave with a static spawn near the Imperial Prison towards the South/Southwest.</li>
            <li className="text-gray-300">Alternatively, there are rare random spawns all over Dathomir.</li>
          </ul>
        </div>

        <div className="bg-[rgba(13,20,40,0.8)] p-6 rounded-md border border-[#1a1a4a]">
          <h2 className="text-2xl font-bold text-white mb-4">3.) You must kill <span className="text-[hsl(var(--swg-accent-gold))]">3 Stintaril Prowlers</span></h2>
          <div className="bg-[rgba(30,50,100,0.3)] p-4 mb-4 rounded-md border-l-4 border-blue-500">
            <p className="text-gray-300 font-medium">Note: Pull Giant Stintaril missions and destroy the lair for the Stintaril Prowlers to show up as a random boss spawn.</p>
          </div>
          <ul className="swg-bullet-list">
            <li className="text-gray-300 mb-2">Stintaril Prowlers can be found on Yavin IV.</li>
            <li className="text-gray-300 mb-2">Typically, you can find Stintaril Prowlers between the Labor Outpost and the Geonosian Cave.</li>
            <li className="text-gray-300 mb-2">There have been a few sightings around the mountain that is Northwest from the Labor Outpost.</li>
            <li className="text-gray-300">Alternatively, like the Ancient Bull Rancors, there are rare random spawns all over Yavin IV.</li>
          </ul>
        </div>

        <div className="bg-[rgba(13,20,40,0.8)] p-6 rounded-md border border-[#1a1a4a]">
          <h2 className="text-2xl font-bold text-white mb-4">4.) You must kill <span className="text-[hsl(var(--swg-accent-gold))]">3 Blurrg Raptors</span></h2>
          <div className="bg-[rgba(30,50,100,0.3)] p-4 mb-4 rounded-md border-l-4 border-blue-500">
            <p className="text-gray-300 font-medium">Note: Pull Blurrg Hunter missions and destroy the lair for the Blurrg Raptors to show up. These missions have to be pulled solo—they have a CL of 50 to 57.</p>
          </div>
          <ul className="swg-bullet-list">
            <li className="text-gray-300 mb-2">Blurrg Raptors can be found on Endor.</li>
            <li className="text-gray-300 mb-2">You can find Blurrg Raptors all over Endor, mostly around the center of the map and near the Smuggler's Outpost.</li>
            <li className="text-gray-300">Also check around the Deathwatch Bunker in the Northwest of Endor.</li>
          </ul>
        </div>

        <div className="bg-[rgba(13,20,40,0.8)] p-6 rounded-md border border-[#1a1a4a]">
          <h2 className="text-2xl font-bold text-white mb-4">5.) You must kill <span className="text-[hsl(var(--swg-accent-gold))]">2 Enraged Kimogilas</span></h2>
          <div className="bg-[rgba(30,50,100,0.3)] p-4 mb-4 rounded-md border-l-4 border-blue-500">
            <p className="text-gray-300 font-medium">Note: Pull Kimogila missions and destroy the lair for the Enraged Kimogilas to show up. These missions have to be pulled in a group with a CL of at least 95.</p>
          </div>
          <ul className="swg-bullet-list">
            <li className="text-gray-300">Enraged Kimogilas can be found on Lok. They only spawn from the missions noted above.</li>
          </ul>
        </div>

        <div className="bg-[rgba(13,20,40,0.8)] p-6 rounded-md border border-[#1a1a4a]">
          <h2 className="text-2xl font-bold text-white mb-4">6.) You must kill <span className="text-[hsl(var(--swg-accent-gold))]">2 Peko Peko Albatrosses</span></h2>
          <div className="bg-[rgba(30,50,100,0.3)] p-4 mb-4 rounded-md border-l-4 border-blue-500">
            <p className="text-gray-300 font-medium">Note: Pull Giant Peko Peko missions and destroy the lair for the Peko Peko Albatrosses to show up.</p>
          </div>
          <ul className="swg-bullet-list">
            <li className="text-gray-300 mb-2">Peko Peko Albatrosses can be found on Naboo.</li>
            <li className="text-gray-300 mb-2">The best place to find them are around 1500-3000m out from Highgarden, Naboo.</li>
            <li className="text-gray-300 mb-2">You might also have luck finding them from Kaadara or Keren, around the same distance away.</li>
            <li className="text-gray-300">You should be able to find them anywhere on Naboo, though they might be harder to find.</li>
          </ul>
        </div>

        <div className="bg-[rgba(13,20,40,0.8)] p-6 rounded-md border border-[#1a1a4a]">
          <h2 className="text-2xl font-bold text-white mb-4">7.) You must kill <span className="text-[hsl(var(--swg-accent-gold))]">2 Graul Marauders</span></h2>
          <div className="bg-[rgba(30,50,100,0.3)] p-4 mb-4 rounded-md border-l-4 border-blue-500">
            <p className="text-gray-300 font-medium">Note: Pull Frenzied Graul missions and destroy the lair for the Graul Marauders to show up. These missions have to be pulled while in a high level group.</p>
          </div>
          <ul className="swg-bullet-list">
            <li className="text-gray-300 mb-2">Graul Marauders can be found on Dantooine.</li>
            <li className="text-gray-300 mb-2">Available as boss mobs on frenzied graul lairs</li>
            <li className="text-gray-300 mb-2">You should be able to find some along the Western side of the map just before the mountains.</li>
            <li className="text-gray-300 mb-2">Graul Marauders occasionally spawn within 1200m south west of the Imperial Outpost.</li>
            <li className="text-gray-300">You may also be able to find them near the Force Crystal Hunters Cave.</li>
          </ul>
        </div>

        <div className="bg-[rgba(13,20,40,0.8)] p-6 rounded-md border border-[#1a1a4a]">
          <h2 className="text-2xl font-bold text-white mb-4">Faction Choice — Light or Dark Side</h2>
          <p className="text-gray-300 mb-4">
            In order to be able to choose the path you want to take, you must earn at least 200 faction points
            (the minimum requirement to join any faction) in either the Rebellion, or the Imperial forces (if you
            haven't already). This decision can be undone <em>only</em> by restarting your Knight Trials. You will
            <strong>not</strong> be made permanently overt until after you finish the Knight Trials.
          </p>
        </div>

        <div className="bg-[rgba(13,20,40,0.8)] p-6 rounded-md border border-[#1a1a4a]">
          <h2 className="text-2xl font-bold text-white mb-4">8.) You must kill <span className="text-[hsl(var(--swg-accent-gold))]">47 Rebel Commandos</span> (if you're Imperial) or <span className="text-[hsl(var(--swg-accent-gold))]">47 Stormtrooper Commandos</span> (if you're Rebel)</h2>

          <ul className="swg-bullet-list mb-6">
            <li className="text-gray-300 mb-3">
              <strong className="text-white">If you're Imperial</strong> — you'll be tasked to kill 47 Rebel Commandos.
              <ul className="pl-6 mt-2 space-y-1">
                <li className="text-gray-300">You can find a static spawn of 4 Rebel Commandos on Yavin IV at /way 1591 1536.</li>
                <li className="text-gray-300">Alternatively, you can also find another 2-4 Rebel Commandos at the Rebel Outpost at /way 3689 -6403 on Rori. Note: They do have a slower respawn time than the static spawn of 4 on Yavin IV.</li>
                <li className="text-gray-300">You can also find 4 Rebel Commandos at the Rebel Outpost on Dantooine — they have a 7 minute respawn timer. You find the Rebel Outpost on Dantooine as a POI.</li>
              </ul>
            </li>
            <li className="text-gray-300">
              <strong className="text-white">If you're Rebel</strong> — you'll be tasked to kill 47 Stormtrooper Commandos.
              <ul className="pl-6 mt-2 space-y-1">
                <li className="text-gray-300">You can easily find Stormtrooper Commandos at Bela Vistal on Corellia at /way 6936 -5538 (this is the waypoint for shuttle B as it's closer to the center of town.)</li>
                <li className="text-gray-300">Stormtrooper Commandos can also be found at the Lok Imperial Outpost.</li>
              </ul>
            </li>
          </ul>
        </div>

        <div className="bg-[rgba(13,20,40,0.8)] p-6 rounded-md border border-[#1a1a4a]">
          <h2 className="text-2xl font-bold text-white mb-4">9.) You must kill <span className="text-[hsl(var(--swg-accent-gold))]">22 Rebel Generals/High Generals/Surface Marshals</span> (if you're Imperial) or <span className="text-[hsl(var(--swg-accent-gold))]">22 Imperial Generals/High Generals/Surface Marshals</span> (if you're Rebel)</h2>
          <div className="bg-[rgba(30,50,100,0.3)] p-4 mb-4 rounded-md border-l-4 border-blue-500">
            <p className="text-gray-300 font-medium">Note: Respawn timers vary from 6 to 20 minutes depending on location.</p>
          </div>
          <ul className="swg-bullet-list">
            <li className="text-gray-300 mb-2">You can find Surface Marshals that spawn 6 at a time at the Weapons Depot Facility on Talus — located as a POI. They occasionally will switch between Rebel and Imperial forces. They are on a 5-10 minute respawn timer.</li>
            <li className="text-gray-300 mb-2">Imperial Surface Marshals can be found at the Stronghold POI on Corellia and the Lok Imperial Outpost.</li>
            <li className="text-gray-300 mb-2">A Rebel High General and a Surface Marshal can be found at the Rori Rebel Outpost.</li>
            <li className="text-gray-300 mb-2">Alternatively, you can find Rebel Generals and Imperial Generals at player bases.</li>
            <li className="text-gray-300">If you're lucky, a General, High General, or Surface Marshal will spawn — these are the ones that count for Rebel/Imperial Generals.</li>
          </ul>
        </div>

        <div className="bg-[rgba(13,20,40,0.8)] p-6 rounded-md border border-[#1a1a4a]">
          <h2 className="text-2xl font-bold text-white mb-4">10.) You must kill <span className="text-[hsl(var(--swg-accent-gold))]">4 Rebel Rear Admirals</span> (if you're Imperial) or <span className="text-[hsl(var(--swg-accent-gold))]">4 Elite Novatrooper Commanders</span> (if you're Rebel)</h2>
          <ul className="swg-bullet-list">
            <li className="text-gray-300 mb-2">Both missions are faction dependent.</li>
            <li className="text-gray-300 mb-2">If you are an Imperial, you will be doing the Imperial missions for the Corellian Corvette.</li>
            <li className="text-gray-300 mb-2">If you are a Rebel, you will be doing the Rebel missions for the Corellian Corvette.</li>
            <li className="text-gray-300 mb-2">There are only <em>2</em> of each Rebel Rear Admiral/Elite Novatrooper Commander per Corvette run.</li>
            <li className="text-gray-300">To make this trial go quickly, kill the one on the top level, and then run all the way to the end for the 2nd one. You will need to run the Corvette twice if you do this.</li>
          </ul>
        </div>

        <div className="bg-[rgba(13,20,40,0.8)] p-6 rounded-md border border-[#1a1a4a]">
          <h2 className="text-2xl font-bold text-white mb-4">11.) You must kill the <span className="text-[hsl(var(--swg-accent-gold))]">Acklay</span></h2>
          <div className="bg-[rgba(30,50,100,0.3)] p-4 mb-4 rounded-md border-l-4 border-blue-500">
            <p className="text-gray-300 font-medium">Note: The Acklay is on a 1 hour respawn timer.</p>
          </div>
          <ul className="swg-bullet-list">
            <li className="text-gray-300">The Acklay is the main boss of the Geonosian Lab located at /way -6494 -418.</li>
          </ul>
        </div>

        <div className="bg-[rgba(13,20,40,0.8)] p-6 rounded-md border border-[#1a1a4a]">
          <h2 className="text-2xl font-bold text-white mb-4">12.) You must kill a single <span className="text-[hsl(var(--swg-accent-gold))]">Nightsister Elder</span></h2>
          <div className="bg-[rgba(30,50,100,0.3)] p-4 mb-4 rounded-md border-l-4 border-blue-500">
            <p className="text-gray-300 font-medium">Note: Each Nightsister Elder is on a 20 minute respawn timer.</p>
          </div>
          <ul className="swg-bullet-list">
            <li className="text-gray-300">You can find 4-6 static spawns of Nightsister Elders at the Nightsister Stronghold on Dathomir located as a POI, at /way 3946 -50.</li>
          </ul>
        </div>

        <div className="bg-[rgba(13,20,40,0.8)] p-6 rounded-md border border-[#1a1a4a]">
          <h2 className="text-2xl font-bold text-white mb-4">13.) You must kill <span className="text-[hsl(var(--swg-accent-gold))]">KiinDray</span></h2>
          <ul className="swg-bullet-list">
            <li className="text-gray-300 mb-2">KiinDray is the main boss in the Nightspider Cult Cave located on Dathomir as another POI, at /way -1219 6262.</li>
            <li className="text-gray-300">In order for KiinDray to appear, you have to kill the Reclusive Cavern Spider Queen first.</li>
          </ul>
        </div>

        <div className="bg-[rgba(13,20,40,0.8)] p-6 rounded-md border border-[#1a1a4a]">
          <h2 className="text-2xl font-bold text-white mb-4">14.) You must kill a single <span className="text-[hsl(var(--swg-accent-gold))]">Giant Canyon Krayt Dragon</span></h2>
          <ul className="swg-bullet-list">
            <li className="text-gray-300 mb-2">Giant Canyon Krayts are found in and around the Krayt Graveyard on Tatooine as a POI, at /way 6839 4370 on Tatooine.</li>
            <li className="text-gray-300">Alternatively, you can find more Giant Canyon Krayt Dragons at the Ancient Krayt Dragon Skeleton located at /way -4632 -4341.</li>
          </ul>
          <p className="text-gray-300 mt-4">
            Upon killing the Giant Canyon Krayt Dragon, you will automatically receive the title of Jedi Knight/Dark Jedi Knight
            along with corresponding faction robes. You are now <em>permanently</em><sup>[2]</sup> overt and are eligible for the
            Force Ranking System. Good luck out there!
          </p>
        </div>
      </div>

      <div className="mt-12 text-sm text-gray-400">
        <p><sup>[1]</sup>Source: <a href="http://starwars.wikia.com/wiki/Jedi_Knight" target="_blank" rel="noopener noreferrer" className="text-[hsl(var(--swg-accent-gold))] hover:underline">Star Wars Wikia</a></p>
        <p><sup>[2]</sup>The only way you can not be overt is if you drop the Jedi Knight box.</p>
      </div>
    </PageLayout>
  );
}
