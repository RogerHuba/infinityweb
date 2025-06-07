"use client";

import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { DiscordSection } from "@/components/DiscordSection";
import { Footer } from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";

export function PlayNowPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navigation />

      <div className="flex-grow relative">
        <div className="hexagon-pattern" />

        <HeroSection
          title="Get Started with Star Wars Galaxies: Infinity"
          subtitle="Download, create an account, and join the galaxy far, far away"
          ctaText="Download Launcher"
          ctaLink="#"
          theme="play"
          showLogo={false}
        />

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <Image
                src="https://ext.same-assets.com/906812322/908964572.png"
                alt="Star Wars Galaxies Logo"
                width={300}
                height={300}
                className="object-contain mx-auto mb-8"
              />

              <h1 className="section-title mb-6">Get Started with Star Wars Galaxies: Infinity</h1>

              <div className="bg-[rgba(13,20,40,0.6)] p-6 rounded-lg mb-8">
                <h2 className="text-xl font-medium text-white mb-4">Download the Infinity Launcher</h2>
                <p className="text-gray-300 mb-6">
                  To play SWG Infinity, you'll need to download and install our custom launcher.
                </p>
                <Link href="#" className="play-button">
                  Download Launcher
                </Link>
              </div>

              <div className="bg-[rgba(13,20,40,0.6)] p-6 rounded-lg mb-8">
                <h2 className="text-xl font-medium text-white mb-4">Create an Account</h2>
                <p className="text-gray-300 mb-6">
                  Register an account on our website to get started. It's free!
                </p>
                <Link href="#" className="play-button">
                  Register
                </Link>
              </div>

              <div className="bg-[rgba(13,20,40,0.6)] p-6 rounded-lg">
                <h2 className="text-xl font-medium text-white mb-4">Join the Community</h2>
                <p className="text-gray-300 mb-6">
                  Connect with other players and get help with getting started.
                </p>
                <Link
                  href="https://discord.gg/jyakeRJ"
                  className="play-button"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Join Discord
                </Link>
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
