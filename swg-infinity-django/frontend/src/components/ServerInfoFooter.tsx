"use client";

import Link from "next/link";
import { Calendar, Users, Clock, ExternalLink } from "lucide-react";

export function ServerInfoFooter() {
  return (
    <footer className="bg-[#0d0e30] py-12 border-t border-[#1a1a4a]">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Server Stats */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Server Stats</h3>
            <div className="space-y-3">
              <div className="flex items-center text-gray-300 text-sm">
                <Users className="h-4 w-4 mr-2 text-blue-400" />
                <span>800+ Active Players</span>
              </div>
              <div className="flex items-center text-gray-300 text-sm">
                <Calendar className="h-4 w-4 mr-2 text-green-400" />
                <span>Online Since 2017</span>
              </div>
              <div className="flex items-center text-gray-300 text-sm">
                <Clock className="h-4 w-4 mr-2 text-yellow-400" />
                <span>99.9% Uptime</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Quick Links</h3>
            <div className="space-y-2">
              <Link href="/guides" className="block text-gray-300 hover:text-white text-sm transition-colors">
                Game Guides
              </Link>
              <Link href="/about-infinity/infinity-specific-rules" className="block text-gray-300 hover:text-white text-sm transition-colors">
                Server Rules
              </Link>
              <Link href="/faq" className="block text-gray-300 hover:text-white text-sm transition-colors">
                FAQ for New Players
              </Link>
              <Link href="/character-builder" className="block text-gray-300 hover:text-white text-sm transition-colors">
                Character Builder
              </Link>
            </div>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Support</h3>
            <div className="space-y-2">
              <Link href="/support-2" className="block text-gray-300 hover:text-white text-sm transition-colors">
                Help Center
              </Link>
              <Link href="/multiple-account-request" className="block text-gray-300 hover:text-white text-sm transition-colors">
                Account Requests
              </Link>
              <Link href="/new-launcher" className="block text-gray-300 hover:text-white text-sm transition-colors">
                Launcher Download
              </Link>
              <Link href="/donate" className="block text-gray-300 hover:text-white text-sm transition-colors">
                Support the Server
              </Link>
            </div>
          </div>

          {/* About */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">About SWG Infinity</h3>
            <div className="space-y-2">
              <Link href="/about-infinity/vision-and-mantras" className="block text-gray-300 hover:text-white text-sm transition-colors">
                Our Vision
              </Link>
              <Link href="/about-infinity/meet-the-team" className="block text-gray-300 hover:text-white text-sm transition-colors">
                Meet the Team
              </Link>
              <Link href="/join-the-team" className="block text-gray-300 hover:text-white text-sm transition-colors">
                Join the Team
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-[#1a1a4a] flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 text-sm mb-4 md:mb-0">
            <p>&copy; 2025 SWG Infinity. Star Wars Galaxies is a trademark of Sony Online Entertainment.</p>
          </div>
          <div className="flex items-center space-x-4">
            <Link href="/about-infinity/roadmap" className="text-gray-400 hover:text-white text-sm transition-colors flex items-center">
              <span>Server Roadmap</span>
              <ExternalLink className="h-3 w-3 ml-1" />
            </Link>
            <span className="text-gray-600">|</span>
            <span className="text-gray-400 text-sm">Version 2.1.3</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
