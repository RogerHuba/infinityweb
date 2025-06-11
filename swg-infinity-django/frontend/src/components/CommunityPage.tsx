"use client";

import { PageLayout } from "@/components/PageLayout";
import Image from "next/image";
import Link from "next/link";
import { MessageCircle, Users, Calendar, MessageSquare, Award, Star } from "lucide-react";

export function CommunityPage() {
  return (
    <PageLayout
      title="Community"
      subtitle="Join our active and welcoming SWG community"
      heroClassName="hero-section-community"
    >
      <h2 className="section-title mb-6">SWG Infinity Community</h2>

      <p className="text-gray-300 mb-8">
        The SWG Infinity community is home to over 3,000 members and 800 active weekly players.
        We pride ourselves on maintaining a friendly, helpful, and welcoming environment for
        all players, from veterans of the original SWG to newcomers experiencing the game for
        the first time.
      </p>

      {/* Discord Section */}
      <div className="bg-[rgba(13,20,40,0.8)] p-8 rounded-md border border-[#1a1a4a] mb-12">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-2/3 mb-6 md:mb-0 md:pr-8">
            <div className="flex items-center mb-4">
              <MessageCircle className="h-8 w-8 text-[#5865F2] mr-3" />
              <h3 className="text-white font-bold text-2xl">Join Our Discord</h3>
            </div>
            <p className="text-gray-300 mb-4">
              Our Discord server is the hub of the SWG Infinity community. Join thousands of players
              to chat, share tips, arrange groups, and stay updated on the latest server news.
            </p>
            <div className="flex flex-wrap gap-4 mb-6">
              <div className="flex items-center bg-[rgba(20,30,70,0.5)] px-3 py-2 rounded-md">
                <Users className="h-5 w-5 text-[#5865F2] mr-2" />
                <span className="text-white">3,000+ Members</span>
              </div>
              <div className="flex items-center bg-[rgba(20,30,70,0.5)] px-3 py-2 rounded-md">
                <Calendar className="h-5 w-5 text-[#5865F2] mr-2" />
                <span className="text-white">Daily Events</span>
              </div>
              <div className="flex items-center bg-[rgba(20,30,70,0.5)] px-3 py-2 rounded-md">
                <MessageSquare className="h-5 w-5 text-[#5865F2] mr-2" />
                <span className="text-white">Active Chat</span>
              </div>
            </div>
            <a
              href="https://discord.gg/jyakeRJ"
              target="_blank"
              rel="noopener noreferrer"
              className="play-button inline-flex items-center"
            >
              <MessageCircle className="mr-2 h-4 w-4" />
              Join Discord
            </a>
          </div>
          <div className="md:w-1/3 relative h-48 md:h-64 w-full rounded-md overflow-hidden">
            <Image
              src="https://ext.same-assets.com/906812322/303476962.png"
              alt="SWG Infinity Discord"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>

      {/* Community Events */}
      <h3 className="text-xl font-bold text-white mb-4">Community Events</h3>
      <p className="text-gray-300 mb-6">
        Our community hosts a variety of regular events to bring players together:
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        <div className="bg-[rgba(13,20,40,0.6)] p-5 rounded-md border border-[#1a1a4a]">
          <div className="flex items-center mb-3">
            <Award className="h-6 w-6 text-[hsl(var(--swg-accent-gold))] mr-2" />
            <h4 className="text-white font-semibold">PvP Tournaments</h4>
          </div>
          <p className="text-gray-300">
            Regular tournaments with prizes for different level brackets. Test your skills against other players in solo and team competitions.
          </p>
        </div>
        <div className="bg-[rgba(13,20,40,0.6)] p-5 rounded-md border border-[#1a1a4a]">
          <div className="flex items-center mb-3">
            <Star className="h-6 w-6 text-[hsl(var(--swg-accent-gold))] mr-2" />
            <h4 className="text-white font-semibold">Roleplay Nights</h4>
          </div>
          <p className="text-gray-300">
            Immersive roleplay events in cantinas and player cities. Join in as your character and become part of the Star Wars story.
          </p>
        </div>
        <div className="bg-[rgba(13,20,40,0.6)] p-5 rounded-md border border-[#1a1a4a]">
          <div className="flex items-center mb-3">
            <Users className="h-6 w-6 text-[hsl(var(--swg-accent-gold))] mr-2" />
            <h4 className="text-white font-semibold">Group Dungeon Runs</h4>
          </div>
          <p className="text-gray-300">
            Organized group runs of popular dungeons like the Geonosian Cave, Corvette, and more. Great for newer players to experience content.
          </p>
        </div>
        <div className="bg-[rgba(13,20,40,0.6)] p-5 rounded-md border border-[#1a1a4a]">
          <div className="flex items-center mb-3">
            <Calendar className="h-6 w-6 text-[hsl(var(--swg-accent-gold))] mr-2" />
            <h4 className="text-white font-semibold">Special Holiday Events</h4>
          </div>
          <p className="text-gray-300">
            Unique events during holidays with special rewards and activities. Don't miss our Life Day celebrations!
          </p>
        </div>
      </div>

      {/* Player Cities */}
      <h3 className="text-xl font-bold text-white mb-4">Player Cities</h3>
      <p className="text-gray-300 mb-6">
        SWG Infinity features thriving player-built cities across all planets. These cities serve as
        hubs for community interaction, with vendors, decorations, and special events.
      </p>
      <div className="bg-[rgba(13,20,40,0.6)] p-5 rounded-md border border-[#1a1a4a] mb-12">
        <h4 className="text-white font-semibold mb-3">Notable Player Cities</h4>
        <ul className="swg-bullet-list">
          <li className="text-gray-300 mb-2">
            <span className="text-[hsl(var(--swg-accent-gold))]">New Hope</span> - One of the largest cities, located on Naboo
          </li>
          <li className="text-gray-300 mb-2">
            <span className="text-[hsl(var(--swg-accent-gold))]">Mos Infinity</span> - A popular hub on Tatooine with regular events
          </li>
          <li className="text-gray-300 mb-2">
            <span className="text-[hsl(var(--swg-accent-gold))]">Coronet Heights</span> - Crafting center on Corellia
          </li>
          <li className="text-gray-300 mb-2">
            <span className="text-[hsl(var(--swg-accent-gold))]">Smuggler's Den</span> - Hidden outpost on Endor
          </li>
          <li className="text-gray-300">
            <span className="text-[hsl(var(--swg-accent-gold))]">New Tyrena</span> - Largest player city on Dantooine
          </li>
        </ul>
      </div>

      {/* Community Guidelines */}
      <h3 className="text-xl font-bold text-white mb-4">Community Guidelines</h3>
      <p className="text-gray-300 mb-6">
        To maintain our friendly environment, we ask all community members to follow these basic guidelines:
      </p>
      <ul className="swg-bullet-list mb-8">
        <li className="text-gray-300 mb-2">Be respectful to all players</li>
        <li className="text-gray-300 mb-2">Help new players when possible</li>
        <li className="text-gray-300 mb-2">Report bugs rather than exploiting them</li>
        <li className="text-gray-300 mb-2">Keep discussions civil in all chat channels</li>
        <li className="text-gray-300">Follow the server rules (see our <Link href="/about-infinity/infinity-specific-rules" className="text-[hsl(var(--swg-accent-gold))] hover:underline">Infinity Specific Rules</Link> page)</li>
      </ul>

      <div className="bg-[rgba(13,20,40,0.6)] p-6 rounded-md border border-[#1a1a4a] mt-12">
        <h3 className="text-white font-semibold text-lg mb-4">Community Support</h3>
        <p className="text-gray-300 mb-4">
          Need help with something? Our community is here for you:
        </p>
        <ul className="swg-bullet-list">
          <li className="text-gray-300 mb-2">Ask questions in the #help channel on Discord</li>
          <li className="text-gray-300 mb-2">Join a guild for ongoing support from experienced players</li>
          <li className="text-gray-300 mb-2">Check out our <Link href="/guides" className="text-[hsl(var(--swg-accent-gold))] hover:underline">Guides</Link> section</li>
          <li className="text-gray-300">Contact a staff member for account or technical issues</li>
        </ul>
      </div>
    </PageLayout>
  );
}
