"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, MessageCircle } from "lucide-react";
import { ServerStatus } from "@/components/ServerStatus";

interface HeaderMockupProps {
  variant: 'current' | 'option1' | 'option2' | 'option3';
}

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
  { name: "HOME", href: "/" },
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

export function HeaderMockup({ variant }: HeaderMockupProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);

  const toggleSubmenu = (name: string) => {
    if (activeSubmenu === name) {
      setActiveSubmenu(null);
    } else {
      setActiveSubmenu(name);
    }
  };

  // Current design
  if (variant === 'current') {
    return (
      <header className="main-nav sticky top-0 z-50 py-3">
        <div className="container mx-auto flex items-center justify-between px-4">
          {/* Logo with Server Status */}
          <div className="flex items-center space-x-4">
            <div className="flex-shrink-0">
              <Link href="/">
                <Image
                  src="https://ext.same-assets.com/906812322/2537617269.png"
                  alt="SWG Infinity | Play Star Wars Galaxies: An Empire Divided Today!"
                  width={106}
                  height={56}
                  priority
                />
              </Link>
            </div>
            <div className="hidden md:block">
              <ServerStatus showRefresh={false} />
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center">
            <ul className="flex space-x-6">
              {navItems.map((item) => (
                <li key={item.name} className="relative group">
                  {item.submenu ? (
                    <div className="group">
                      <span className="text-white hover:text-gray-300 cursor-pointer text-sm font-medium py-1 flex items-center">
                        {item.name}
                      </span>
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      className="text-white hover:text-gray-300 text-sm font-medium py-1"
                    >
                      {item.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>

            {/* Discord Icon Link */}
            <a
              href="https://discord.gg/jyakeRJ"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-6 text-white hover:text-indigo-400 transition-colors duration-200"
              aria-label="Join our Discord"
            >
              <MessageCircle className="h-6 w-6" />
            </a>
          </nav>
        </div>
      </header>
    );
  }

  // Option 1: Discord with logo + text button
  if (variant === 'option1') {
    return (
      <header className="main-nav sticky top-0 z-50 py-3">
        <div className="container mx-auto flex items-center justify-between px-4">
          {/* Logo with Server Status */}
          <div className="flex items-center space-x-6">
            <div className="flex-shrink-0">
              <Link href="/">
                <Image
                  src="https://ext.same-assets.com/906812322/2537617269.png"
                  alt="SWG Infinity | Play Star Wars Galaxies: An Empire Divided Today!"
                  width={106}
                  height={56}
                  priority
                />
              </Link>
            </div>
            <div className="hidden lg:block border-l border-gray-600 pl-6">
              <ServerStatus showRefresh={false} />
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center">
            <ul className="flex space-x-8">
              {navItems.map((item) => (
                <li key={item.name} className="relative group">
                  {item.submenu ? (
                    <div className="group">
                      <span className="text-white hover:text-gray-300 cursor-pointer text-sm font-semibold py-2 px-1 flex items-center tracking-wide">
                        {item.name}
                      </span>
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      className="text-white hover:text-gray-300 text-sm font-semibold py-2 px-1 tracking-wide transition-colors"
                    >
                      {item.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>

            {/* Discord Button with Logo */}
            <a
              href="https://discord.gg/jyakeRJ"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-8 bg-[#5865F2] hover:bg-[#4752C4] text-white px-4 py-2 rounded-lg flex items-center space-x-2 transition-all duration-200 font-medium"
            >
              <Image
                src="https://cdn.prod.website-files.com/6257adef93867e50d84d30e2/665643dd8c7ac752237b5cef_Discord-OG-1200x630.jpg"
                alt="Discord"
                width={20}
                height={20}
                className="rounded"
              />
              <span>Join Discord</span>
            </a>
          </nav>
        </div>
      </header>
    );
  }

  // Option 2: Separated sections with better spacing
  if (variant === 'option2') {
    return (
      <header className="main-nav sticky top-0 z-50 py-4 border-b border-gray-800">
        <div className="container mx-auto px-4">
          {/* Top row: Logo and Discord */}
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center space-x-6">
              <Link href="/">
                <Image
                  src="https://ext.same-assets.com/906812322/2537617269.png"
                  alt="SWG Infinity | Play Star Wars Galaxies: An Empire Divided Today!"
                  width={120}
                  height={64}
                  priority
                />
              </Link>
              <div className="hidden md:block">
                <ServerStatus showRefresh={false} />
              </div>
            </div>

            {/* Discord Badge Style */}
            <a
              href="https://discord.gg/jyakeRJ"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden lg:flex items-center space-x-3 bg-gradient-to-r from-[#5865F2] to-[#7289DA] hover:from-[#4752C4] hover:to-[#5B6EAE] text-white px-5 py-2.5 rounded-full transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                <MessageCircle className="h-4 w-4 text-[#5865F2]" />
              </div>
              <span className="font-semibold">Join Our Discord</span>
            </a>
          </div>

          {/* Bottom row: Navigation */}
          <nav className="hidden lg:block">
            <ul className="flex space-x-8 justify-center">
              {navItems.map((item) => (
                <li key={item.name} className="relative group">
                  {item.submenu ? (
                    <div className="group">
                      <span className="text-white hover:text-blue-400 cursor-pointer text-sm font-medium py-2 px-3 rounded-md hover:bg-gray-800/50 transition-all duration-200 flex items-center">
                        {item.name}
                      </span>
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      className="text-white hover:text-blue-400 text-sm font-medium py-2 px-3 rounded-md hover:bg-gray-800/50 transition-all duration-200"
                    >
                      {item.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>
    );
  }

  // Option 3: Compact with Discord wordmark
  if (variant === 'option3') {
    return (
      <header className="main-nav sticky top-0 z-50 py-3">
        <div className="container mx-auto flex items-center justify-between px-4">
          {/* Logo with Server Status */}
          <div className="flex items-center space-x-4">
            <div className="flex-shrink-0">
              <Link href="/">
                <Image
                  src="https://ext.same-assets.com/906812322/2537617269.png"
                  alt="SWG Infinity | Play Star Wars Galaxies: An Empire Divided Today!"
                  width={106}
                  height={56}
                  priority
                />
              </Link>
            </div>
            <div className="hidden md:block">
              <ServerStatus showRefresh={false} />
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center">
            <ul className="flex space-x-6">
              {navItems.map((item) => (
                <li key={item.name} className="relative group">
                  {item.submenu ? (
                    <div className="group">
                      <span className="text-white hover:text-gray-300 cursor-pointer text-sm font-medium py-1 flex items-center">
                        {item.name}
                      </span>
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      className="text-white hover:text-gray-300 text-sm font-medium py-1"
                    >
                      {item.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>

            {/* Discord Wordmark Style */}
            <a
              href="https://discord.gg/jyakeRJ"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-6 flex items-center space-x-2 text-white hover:text-[#5865F2] transition-colors duration-200 group"
              aria-label="Join our Discord"
            >
              <div className="w-8 h-8 bg-[#5865F2] rounded-lg flex items-center justify-center group-hover:bg-white transition-colors duration-200">
                <MessageCircle className="h-5 w-5 text-white group-hover:text-[#5865F2] transition-colors duration-200" />
              </div>
              <span className="font-semibold text-sm">Discord</span>
            </a>
          </nav>
        </div>
      </header>
    );
  }

  return null;
}

// Demo page to show all variants
export function HeaderMockupDemo() {
  const [selectedVariant, setSelectedVariant] = useState<'current' | 'option1' | 'option2' | 'option3'>('current');

  return (
    <div className="min-h-screen bg-[#0a0a1a]">
      {/* Header Options Selector */}
      <div className="bg-gray-900 p-4 text-center">
        <h1 className="text-white text-xl font-bold mb-4">Header Design Options</h1>
        <div className="flex justify-center space-x-4">
          <button
            onClick={() => setSelectedVariant('current')}
            className={`px-4 py-2 rounded ${selectedVariant === 'current' ? 'bg-blue-600 text-white' : 'bg-gray-700 text-gray-300'}`}
          >
            Current
          </button>
          <button
            onClick={() => setSelectedVariant('option1')}
            className={`px-4 py-2 rounded ${selectedVariant === 'option1' ? 'bg-blue-600 text-white' : 'bg-gray-700 text-gray-300'}`}
          >
            Option 1: Discord Button
          </button>
          <button
            onClick={() => setSelectedVariant('option2')}
            className={`px-4 py-2 rounded ${selectedVariant === 'option2' ? 'bg-blue-600 text-white' : 'bg-gray-700 text-gray-300'}`}
          >
            Option 2: Two Row Layout
          </button>
          <button
            onClick={() => setSelectedVariant('option3')}
            className={`px-4 py-2 rounded ${selectedVariant === 'option3' ? 'bg-blue-600 text-white' : 'bg-gray-700 text-gray-300'}`}
          >
            Option 3: Discord Wordmark
          </button>
        </div>
      </div>

      {/* Show selected header variant */}
      <HeaderMockup variant={selectedVariant} />

      {/* Content area */}
      <div className="p-8">
        <div className="max-w-4xl mx-auto text-white">
          <h2 className="text-2xl font-bold mb-4">Header Design Comparison</h2>
          <div className="space-y-4">
            <div className="bg-gray-800 p-4 rounded-lg">
              <h3 className="font-semibold text-lg mb-2">Current Design</h3>
              <p className="text-gray-300">Simple icon-based Discord link, basic layout</p>
            </div>
            <div className="bg-gray-800 p-4 rounded-lg">
              <h3 className="font-semibold text-lg mb-2">Option 1: Discord Button</h3>
              <p className="text-gray-300">Full Discord-branded button with official colors and better spacing</p>
            </div>
            <div className="bg-gray-800 p-4 rounded-lg">
              <h3 className="font-semibold text-lg mb-2">Option 2: Two Row Layout</h3>
              <p className="text-gray-300">Separates branding (logo/Discord) from navigation for cleaner hierarchy</p>
            </div>
            <div className="bg-gray-800 p-4 rounded-lg">
              <h3 className="font-semibold text-lg mb-2">Option 3: Discord Wordmark</h3>
              <p className="text-gray-300">Compact Discord branding with icon and text, professional look</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
