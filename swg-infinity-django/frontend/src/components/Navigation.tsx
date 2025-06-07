"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, MessageCircle, Play } from "lucide-react";
import { ServerStatus } from "@/components/ServerStatus";

// Define types for nav items
interface SubmenuItem {
  name: string;
  href: string;
  external?: boolean;
}

interface NavItem {
  name: string;
  href: string;
  submenu?: SubmenuItem[];
}

// Define the navigation menu items
const navItems: NavItem[] = [
  {
    name: "ABOUT INFINITY",
    href: "/about-infinity",
    submenu: [
      { name: "Latest Patch Notes", href: "/blog" },
      { name: "Infinity Specific Rules", href: "/about-infinity/infinity-specific-rules" },
      { name: "Roadmap", href: "/about-infinity/roadmap" },
      { name: "Vision and Mantras", href: "/about-infinity/vision-and-mantras" },
      { name: "Meet the team", href: "/about-infinity/meet-the-team" },
      { name: "Join the Team", href: "/join-the-team" },
    ],
  },
  {
    name: "GUIDES",
    href: "/guides",
    submenu: [
      { name: "Jedi Unlock", href: "/guides/jedi-unlock" },
      { name: "The Knight Trials", href: "/guides/the-knight-trials" },
      { name: "The Warren", href: "/guides/the-warren" },
      { name: "Treasure Hunting", href: "/guides/treasure-hunting" },
      { name: "Character Builder", href: "/character-builder" },
    ],
  },
  {
    name: "SERVER INFORMATION",
    href: "/server-information",
    submenu: [
      { name: "Cities", href: "/server-information/cities" },
      { name: "Guilds", href: "/server-information/guilds" },
      { name: "Heritage", href: "/server-information/heritage" },
      { name: "Game Pictures", href: "/server-information/game-pictures" },
      { name: "Resources", href: "/server-information/resources" },
      { name: "Schematics", href: "/server-information/schematics" },
      { name: "Galactic Civil War", href: "/server-information/galactic-civil-war" },
    ],
  },
  {
    name: "SUPPORT",
    href: "/support-2",
    submenu: [
      { name: "FAQ for New Players", href: "/faq" },
      { name: "New Infinity Launcher", href: "/new-launcher" },
      { name: "Multiple Account Request", href: "/multiple-account-request" },
    ],
  },
  { name: "DONATE", href: "/donate" },
];

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);

  const toggleSubmenu = (name: string) => {
    if (activeSubmenu === name) {
      setActiveSubmenu(null);
    } else {
      setActiveSubmenu(name);
    }
  };

  return (
    <header className="main-nav sticky top-0 z-50 py-2 md:py-3">
      <div className="container mx-auto px-2 sm:px-3 md:px-4">
        {/* Mobile Layout (sm and below) */}
        <div className="flex md:hidden items-center justify-between">
          {/* Logo + Discord */}
          <div className="flex items-center space-x-2">
            <Link href="/">
              <Image
                src="https://ext.same-assets.com/906812322/2537617269.png"
                alt="SWG Infinity | Play Star Wars Galaxies: An Empire Divided Today!"
                width={70}
                height={37}
                priority
              />
            </Link>
            <a
              href="https://discord.gg/jyakeRJ"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#5865F2] hover:bg-[#4752C4] text-white px-2 py-1 rounded-md flex items-center space-x-1 transition-all duration-200 font-medium shadow-lg text-xs"
            >
              <MessageCircle className="h-3 w-3" />
              <span>Discord</span>
            </a>
          </div>
          {/* Mobile Menu Button */}
          <button
            type="button"
            className="text-white p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Tablet Layout (md to lg) */}
        <div className="hidden md:flex lg:hidden items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/">
              <Image
                src="https://ext.same-assets.com/906812322/2537617269.png"
                alt="SWG Infinity | Play Star Wars Galaxies: An Empire Divided Today!"
                width={90}
                height={47}
                priority
              />
            </Link>
          </div>
          {/* Compact Navigation */}
          <div className="flex items-center space-x-1 flex-1 justify-center mx-4">
            {navItems.map((item) => (
              <div key={item.name} className="relative group">
                {item.submenu ? (
                  <div className="group">
                    <span className="text-white hover:text-gray-300 cursor-pointer text-xs font-semibold py-1 px-1 flex items-center tracking-tight whitespace-nowrap">
                      {item.name.includes(' ') ? item.name.split(' ')[0] : item.name}
                      <svg className="ml-1 h-3 w-3 text-gray-400 group-hover:text-gray-300" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </span>
                    <div className="absolute left-0 mt-1 w-44 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform group-hover:translate-y-0 translate-y-1 z-10">
                      <div className="bg-[#0d0d30] py-1 rounded shadow-lg border border-[#1a1a4a]">
                        {item.submenu.map((subItem) =>
                          subItem.external ? (
                            <a
                              key={subItem.name}
                              href={subItem.href}
                              className="block px-3 py-2 text-xs text-gray-200 hover:bg-[#1a1a4a] hover:text-white"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              {subItem.name}
                            </a>
                          ) : (
                            <Link
                              key={subItem.name}
                              href={subItem.href}
                              className="block px-3 py-2 text-xs text-gray-200 hover:bg-[#1a1a4a] hover:text-white"
                            >
                              {subItem.name}
                            </Link>
                          )
                        )}
                      </div>
                    </div>
                  </div>
                ) : (
                  <Link href={item.href} className="text-white hover:text-gray-300 text-xs font-semibold py-1 px-1 tracking-tight transition-colors whitespace-nowrap">
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </div>
          {/* Tablet Status Panel */}
          <div className="flex items-center space-x-1 flex-shrink-0">
            <div className="bg-[#0d0d30] border border-[#1a1a4a] rounded-lg px-2 py-1 min-w-[140px] flex items-center justify-center">
              <ServerStatus showRefresh={false} />
            </div>
            <div className="flex flex-col space-y-1">
              <a href="https://discord.gg/jyakeRJ" target="_blank" rel="noopener noreferrer" className="bg-[#5865F2] hover:bg-[#4752C4] text-white px-2 py-1 rounded-md flex items-center justify-center space-x-1 transition-all duration-200 font-medium shadow-lg text-xs min-w-[80px]">
                <MessageCircle className="h-3 w-3" />
                <span>Discord</span>
              </a>
              <Link href="/play-now" className="bg-gradient-to-r from-yellow-600 to-yellow-500 hover:from-yellow-500 hover:to-yellow-400 text-white px-2 py-1 rounded-md flex items-center justify-center space-x-1 transition-all duration-200 font-medium shadow-lg text-xs min-w-[80px]">
                <Play className="h-3 w-3" />
                <span>Play</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Desktop Layout (lg and above) */}
        <div className="hidden lg:flex items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/">
              <Image
                src="https://ext.same-assets.com/906812322/2537617269.png"
                alt="SWG Infinity | Play Star Wars Galaxies: An Empire Divided Today!"
                width={106}
                height={56}
                className="xl:w-[120px] xl:h-[64px]"
                priority
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="flex items-center flex-1 justify-between ml-6 xl:ml-8">
            <div className="border-l border-gray-600 h-12 pl-6 xl:pl-8 flex-1 min-w-0 flex items-center">
              <ul className="flex space-x-4 xl:space-x-8 justify-center">
                {navItems.map((item) => (
                  <li key={item.name} className="relative group">
                    {item.submenu ? (
                      <div className="group">
                        <span className="text-white hover:text-gray-300 cursor-pointer text-sm xl:text-base font-semibold py-2 px-1 flex items-center tracking-wide whitespace-nowrap">
                          {item.name}
                          <svg className="ml-1 h-4 w-4 text-gray-400 group-hover:text-gray-300" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                          </svg>
                        </span>
                        <div className="absolute left-0 mt-1 w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform group-hover:translate-y-0 translate-y-1 z-10">
                          <div className="bg-[#0d0d30] py-1 rounded shadow-lg border border-[#1a1a4a]">
                            {item.submenu.map((subItem) =>
                              subItem.external ? (
                                <a
                                  key={subItem.name}
                                  href={subItem.href}
                                  className="block px-4 py-2 text-sm text-gray-200 hover:bg-[#1a1a4a] hover:text-white"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  {subItem.name}
                                </a>
                              ) : (
                                <Link
                                  key={subItem.name}
                                  href={subItem.href}
                                  className="block px-4 py-2 text-sm text-gray-200 hover:bg-[#1a1a4a] hover:text-white"
                                >
                                  {subItem.name}
                                </Link>
                              )
                            )}
                          </div>
                        </div>
                      </div>
                    ) : (
                      <Link href={item.href} className="text-white hover:text-gray-300 text-sm xl:text-base font-semibold py-2 px-1 tracking-wide transition-colors whitespace-nowrap flex items-center">
                        {item.name}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            {/* Desktop Status Panel */}
            <div className="border-l border-gray-600 h-12 pl-6 xl:pl-8 flex items-center space-x-3 xl:space-x-4 flex-shrink-0">
              <div className="bg-[#0d0d30] border border-[#1a1a4a] rounded-lg px-4 xl:px-6 py-2 xl:py-3 min-w-[200px] xl:min-w-[240px] flex items-center justify-center">
                <ServerStatus showRefresh={false} />
              </div>
              <div className="flex flex-col space-y-2">
                <a href="https://discord.gg/jyakeRJ" target="_blank" rel="noopener noreferrer" className="bg-[#5865F2] hover:bg-[#4752C4] text-white px-3 xl:px-4 py-2 rounded-lg flex items-center justify-center space-x-2 transition-all duration-200 font-medium shadow-lg hover:shadow-xl transform hover:scale-105 min-w-[120px] xl:min-w-[140px] text-sm">
                  <MessageCircle className="h-4 w-4" />
                  <span>Discord</span>
                </a>
                <Link href="/play-now" className="bg-gradient-to-r from-yellow-600 to-yellow-500 hover:from-yellow-500 hover:to-yellow-400 text-white px-3 xl:px-4 py-2 rounded-lg flex items-center justify-center space-x-2 transition-all duration-200 font-medium shadow-lg hover:shadow-xl transform hover:scale-105 min-w-[120px] xl:min-w-[140px] text-sm">
                  <Play className="h-4 w-4" />
                  <span>Play Now</span>
                </Link>
              </div>
            </div>
          </nav>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#0d0d30] border-t border-[#1a1a4a] mt-3">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {/* Mobile Status Panel */}
            <div className="px-3 py-3 border-b border-[#1a1a4a] mb-3">
              <div className="flex flex-col space-y-3">
                {/* Mobile Server Status Box - Full Width */}
                <div className="bg-[#1a1a4a] border border-[#2a2a6a] rounded-lg px-4 py-3">
                  <ServerStatus showRefresh={true} />
                </div>
                {/* Mobile Action Buttons Row */}
                <div className="flex space-x-2">
                  {/* Mobile Discord Button */}
                  <a
                    href="https://discord.gg/jyakeRJ"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#5865F2] hover:bg-[#4752C4] text-white px-4 py-2 rounded-lg flex items-center justify-center space-x-2 transition-all duration-200 font-medium shadow-lg flex-1 text-sm"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <MessageCircle className="h-4 w-4" />
                    <span>Discord</span>
                  </a>
                  {/* Mobile Play Now Button */}
                  <Link
                    href="/play-now"
                    className="bg-gradient-to-r from-yellow-600 to-yellow-500 hover:from-yellow-500 hover:to-yellow-400 text-white px-4 py-2 rounded-lg flex items-center justify-center space-x-2 transition-all duration-200 font-medium shadow-lg flex-1 text-sm"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <Play className="h-4 w-4" />
                    <span>Play Now</span>
                  </Link>
                </div>
              </div>
            </div>
            {navItems.map((item) => (
              <div key={item.name}>
                {item.submenu ? (
                  <div className="py-2">
                    <button
                      onClick={() => toggleSubmenu(item.name)}
                      className="w-full flex justify-between items-center text-white font-medium px-3 py-2"
                    >
                      <span>{item.name}</span>
                      <svg
                        className={`h-4 w-4 text-gray-400 transform ${
                          activeSubmenu === item.name ? 'rotate-180' : ''
                        }`}
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </button>
                    {activeSubmenu === item.name && (
                      <div className="pl-6 space-y-2 mt-1">
                        {item.submenu.map((subItem) =>
                          subItem.external ? (
                            <a
                              key={subItem.name}
                              href={subItem.href}
                              className="text-gray-300 hover:text-white block px-3 py-1 text-sm"
                              target="_blank"
                              rel="noopener noreferrer"
                              onClick={() => setIsMenuOpen(false)}
                            >
                              {subItem.name}
                            </a>
                          ) : (
                            <Link
                              key={subItem.name}
                              href={subItem.href}
                              className="text-gray-300 hover:text-white block px-3 py-1 text-sm"
                              onClick={() => setIsMenuOpen(false)}
                            >
                              {subItem.name}
                            </Link>
                          )
                        )}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className="text-white hover:bg-[#1a1a4a] block px-3 py-2 text-base font-medium"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
