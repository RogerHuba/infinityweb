"use client";

import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { FeatureCard } from "@/components/FeatureCard";
import { ServerInfoFooter } from "@/components/ServerInfoFooter";
import { Footer } from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";

export function HomePage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navigation />

      <div className="flex-grow relative">
        <div className="hexagon-pattern" />

        {/* Custom Hero Section with Cantina Background */}
        <section
          className="hero-section-cantina relative"
          style={{
            backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.6)), url("/swg-cantina-ingame.jpg")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            minHeight: '80vh',
            display: 'flex',
            alignItems: 'center'
          }}
        >
          <div className="absolute inset-0 bg-black/60 z-10" />
          <div className="container mx-auto px-4 z-20 relative flex flex-col justify-center h-full">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="md:w-1/3 flex justify-center md:justify-start">
                <img
                  src="/swg-logo.png"
                  alt="Star Wars Galaxies Logo"
                  width={300}
                  height={300}
                  className="object-contain"
                />
              </div>
              <div className="md:w-2/3 text-center md:text-right mt-8 md:mt-0">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
                  Star Wars Galaxies: An Empire Divided
                </h1>
                <h2 className="text-xl md:text-2xl text-white mb-6">
                  Begin your saga.
                </h2>
                <p className="text-white mb-6">Free-to-play</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="section-title mb-6">Play SWG Today</h2>
              <h3 className="section-subtitle mb-4">Since 2017</h3>

              <p className="text-gray-300 mb-8">
                Infinity is a Pre-Combat Upgrade (PreCU) Star Wars Galaxies galaxy, housing over 800 weekly players and rising.
              </p>

              <h4 className="text-white font-medium mb-4">Our core mantras are</h4>
              <ul className="swg-bullet-list mb-10">
                <li className="text-gray-300">Retain the originality of Pre-CU Star Wars Galaxies</li>
                <li className="text-gray-300">Develop new end-game content</li>
                <li className="text-gray-300">Keep up with todays gaming preferences</li>
                <li className="text-gray-300">Maintain a fun and friendly place to play</li>
                <li className="text-gray-300">Keep Star Wars Galaxies alive</li>
              </ul>

              <p className="text-gray-300 mb-8">
                Our team consists of more than 8 professional people, passionate about continuously improving the game and developing exciting new content.
              </p>

              <div className="text-center">
                <Link href="/play-now" className="play-button">
                  Get started
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-[rgba(13,20,40,0.6)]">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <FeatureCard
                title="Character Creation"
                subtitle="Create your identity"
              >
                <ul className="swg-bullet-list">
                  <li>Choose from 11 races</li>
                  <li>Customise your appearance</li>
                  <li>Select your starting profession</li>
                </ul>
                <p className="mt-4">Name your character and enter the galaxy</p>
              </FeatureCard>

              <FeatureCard
                title="Professions"
                subtitle="What will you be?"
              >
                <ul className="swg-bullet-list">
                  <li>Choose from 33 professions</li>
                  <li>Become a Mandalorian</li>
                  <li>Feel the force and unlock Jedi</li>
                </ul>
              </FeatureCard>

              <FeatureCard
                title="Player Housing"
                subtitle="Home sweet home"
              >
                <p className="mb-4">Build and decorate your home</p>
                <p>Or build a player city on one of the seven planets</p>
              </FeatureCard>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <FeatureCard
                title="Crafting"
                subtitle="Be a businessman"
              >
                <p className="mb-4">Become a master crafter</p>
                <ul className="swg-bullet-list">
                  <li>Bio-engineer creatures</li>
                  <li>Make armor & weapons</li>
                  <li>Become a chef</li>
                  <li>Specialise in Pharma</li>
                  <li>and more</li>
                </ul>
              </FeatureCard>

              <FeatureCard
                title="Jedi"
                subtitle="Feel the force"
              >
                <p>Learn the ways of the force and become a jedi. Choose Light or Dark</p>
              </FeatureCard>

              <FeatureCard
                title="Bounty Hunting"
                subtitle="Let the hunt begin"
              >
                <p className="mb-4">Accept a mission and speak to a Spynet operative to begin tracking your target.</p>
                <p>Players and alike</p>
              </FeatureCard>
            </div>
          </div>
        </section>
      </div>

      <ServerInfoFooter />
      <Footer />
    </main>
  );
}
