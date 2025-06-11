"use client";

import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { DiscordSection } from "@/components/DiscordSection";
import { Footer } from "@/components/Footer";

export function AboutPage() {
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
        />

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="section-title mb-6">Welcome to a Galaxy far, far away.</h2>

              <div className="text-gray-300 space-y-6">
                <p>
                  Infinity is a galaxy filled with mystery and the great unknown at a time where factions are in disarray, the Empire and the Rebellion are withering, building armies for the next great battle. People are scavenging for rare and luxurious items, banking credits for the next big investment. Although in other parts of the galaxy, there are smugglers and street rats gambling credits into the ether and drinking themselves to death.
                </p>

                <p>
                  It is rumored that the Jedi survived the great war with the Sith and are secretly training a new breed to tackle the Sith, whilst the Sith are strong and shackled up in the depths of Dathomir, Lok and Yavin awaiting instructions.
                </p>

                <p>
                  Your legacy awaits you, what part will you play in this Galaxy? Will you become a hoarder of rare and lucrative items, will you forge great weapons, armor and pharmaceuticals on behalf of your desired faction? Will you seek The Force and train to be a great warrior for the next great war?
                </p>

                <p>
                  Join today and start building your empire and your army.
                </p>

                <p>
                  Infinity is a Galaxy which welcomes all walks of life, it is based on freedom and prosperity for all.
                </p>

                <p>
                  Infinity believes that Star Wars Galaxies should be enjoyed in a Role Play and Sandbox capacity. The management staff want to provide a long-term home for those seeking to play Star Wars Galaxies original content and also custom content created by the fantastic SWGEmu community.
                </p>

                <p>
                  Infinity is using base SWGEmu code and customized C++ code and Lua are rigorously tested to ensure stability and update-ability. This project is funded by an individual and several community members. If players would like to donate to the Infinity project it would be appreciated.
                </p>
              </div>

              <h2 className="section-title mt-12 mb-6">Quality of Life Enhancements</h2>

              <p className="text-gray-300 mb-6">See our full list of changes here</p>

              <ul className="swg-bullet-list mb-10 text-gray-300">
                <li>New Mandalorian Profession</li>
                <li>New Creature Handler Questline</li>
                <li>Jedi Village Unlock with Padawan and Knight Trials (we have optimized the requirements to make it quicker and more engaging)</li>
                <li>XP is faster than back in the day</li>
                <li>Interplanetary travel from any NPC Shuttle port</li>
                <li>Revised Loot Groups across all NPCs</li>
                <li>New Players start with a Swoop Bike</li>
                <li>Reduced Vehicle Decay when calling vehicle</li>
                <li>Custom Content to keep players engaged</li>
                <li>7 Character Slots per Account, 3 Online at any time</li>
                <li>Armor and Clothing Attachments show Skill Mod as the name rather than "Armor Attachment"</li>
                <li>Mission Terminals display CL and Type in the summary list</li>
                <li>Musician, Dancer and Entertainer Healing XP can be gained from crafting Slitherhorn, Fizz and Kloo Horn</li>
                <li>Improved Treasure Map System</li>
                <li>Slightly Increased Rare Mob Spawns throughout the Galaxy (Albatross, Gorax, etc)</li>
                <li>Much more...</li>
              </ul>

              <h3 className="text-xl text-white font-medium mb-4">Housing and Player Cities</h3>
              <ul className="swg-bullet-list mb-10 text-gray-300">
                <li>Cities update much quicker than vanilla</li>
                <li>New rank 6 city - Megalopolis with combined city specialisations</li>
                <li>Increased item limits on player housing</li>
              </ul>

              <h3 className="text-xl text-white font-medium mb-4">Crafting</h3>
              <ul className="swg-bullet-list mb-10 text-gray-300">
                <li>Increased XP Rates</li>
                <li>Factory Crates stack up to 1000</li>
                <li>Factory Times have been accelerated</li>
                <li>Crafting Tools have shorter cool-downs</li>
                <li>Harvesters have been sped up</li>
                <li>Hand Sampling rate is faster</li>
              </ul>

              <h3 className="text-xl text-white font-medium mb-4">Custom Content</h3>
              <ul className="swg-bullet-list mb-10 text-gray-300">
                <li>Named Color Crystals from NGE (some common, some rare)</li>
                <li>NGE Weapons and Armor</li>
                <li>NGE Housing</li>
                <li>NGE Vehicles (Pod Racers, BARC Speeder)</li>
                <li>Chiss Poacher Base</li>
                <li>Revamped Geonosian Caves</li>
                <li>Lots more coming!</li>
              </ul>

              <h2 className="section-title mt-12 mb-6">State of the art, secure, Infrastructure</h2>

              <div className="text-gray-300 space-y-6">
                <p>
                  Infinity has two servers, a Live server and a Test Center. Both servers run on Linux and have been secured to minimize risk of attack/hack.
                </p>

                <p>
                  Both servers are based in Canada. We snapshot the live server regularly to ensure minimal risk of data loss if any corruptions or errors occur.
                </p>
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
