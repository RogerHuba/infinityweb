"use client";

import { PageLayout } from "@/components/PageLayout";

export function VisionAndMantrasPage() {
  return (
    <PageLayout title="Vision and Mantras" subtitle="Our guiding principles">
      <h2 className="section-title mb-6">Our Vision</h2>

      <p className="text-gray-300 mb-8">
        Infinity is a Galaxy which welcomes all walks of life, it is based on freedom and prosperity for all.
      </p>

      <p className="text-gray-300 mb-8">
        Infinity believes that Star Wars Galaxies should be enjoyed in a Role Play and Sandbox capacity.
        The management staff want to provide a long-term home for those seeking to play Star Wars Galaxies
        original content and also custom content created by the fantastic SWGEmu community.
      </p>

      <p className="text-gray-300 mb-12">
        Infinity is using base SWGEmu code and customized C++ code and Lua are rigorously tested to ensure
        stability and update-ability. This project is funded by an individual and several community members.
      </p>

      <h2 className="section-title mb-6">Our Core Mantras</h2>

      <ul className="swg-bullet-list mb-10">
        <li className="text-gray-300 mb-3">Retain the originality of Pre-CU Star Wars Galaxies</li>
        <li className="text-gray-300 mb-3">Develop new end-game content</li>
        <li className="text-gray-300 mb-3">Keep up with today's gaming preferences</li>
        <li className="text-gray-300 mb-3">Maintain a fun and friendly place to play</li>
        <li className="text-gray-300 mb-3">Keep Star Wars Galaxies alive</li>
      </ul>

      <h2 className="section-title mb-6">Our Commitment</h2>

      <p className="text-gray-300 mb-8">
        Our team consists of more than 8 professional people, passionate about continuously improving the
        game and developing exciting new content. We are committed to providing a stable, enjoyable gaming
        experience that stays true to the spirit of Star Wars Galaxies while introducing thoughtful
        improvements and new content.
      </p>

      <p className="text-gray-300 mb-8">
        We believe in community-driven development, where player feedback shapes the future of the game.
        Our goal is to create an environment where players can immerse themselves in the Star Wars universe,
        forge their own path, and be part of a thriving community.
      </p>

      <div className="bg-[rgba(13,20,40,0.6)] p-6 rounded-md border border-[#1a1a4a] mt-8">
        <h3 className="text-white font-semibold mb-4">Join us on this journey</h3>
        <p className="text-gray-300">
          Whether you're a returning player from the original SWG days or new to the galaxy,
          Infinity welcomes you to be part of our community. Together, we'll ensure that the
          legacy of Star Wars Galaxies continues for years to come.
        </p>
      </div>
    </PageLayout>
  );
}
