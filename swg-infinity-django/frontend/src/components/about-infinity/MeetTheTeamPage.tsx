"use client";

import { PageLayout } from "@/components/PageLayout";
import Image from "next/image";

interface TeamMember {
  name: string;
  role: string;
  bio: string;
  liveserver: string;
  imageUrl: string;
}

const teamMembers: TeamMember[] = [
  {
    name: "Qrave",
    role: "Founder & Owner",
    bio: "",
    liveserver: "",
    imageUrl: "https://ext.same-assets.com/906812322/2240799338.jpeg",
  },
  {
    name: "Mr. Obvious",
    role: "Chief Developer",
    bio: "",
    liveserver: "",
    imageUrl: "https://ext.same-assets.com/906812322/2240799338.jpeg",
  },
  {
    name: "Cyruss",
    role: "President of High Garden",
    bio: "",
    liveserver: "",
    imageUrl: "https://ext.same-assets.com/906812322/2240799338.jpeg",
  },
  {
    name: "WickedHangover",
    role: "Content Wizard",
    bio: "",
    liveserver: "",
    imageUrl: "https://ext.same-assets.com/906812322/2240799338.jpeg",
  },
  {
    name: "Lokii",
    role: "CRS",
    bio: "",
    liveserver: "",
    imageUrl: "https://ext.same-assets.com/906812322/2240799338.jpeg",
  },
  {
    name: "Deej",
    role: "CSR",
    bio: "",
    liveserver: "",
    imageUrl: "https://ext.same-assets.com/906812322/2240799338.jpeg",
  },
  {
    name: "Phat",
    role: "API, Launcher & Backend",
    bio: "",
    liveserver: "",
    imageUrl: "https://ext.same-assets.com/906812322/2240799338.jpeg",
  },
  {
    name: "Stepo",
    role: "Loremaster, Content Advisor, Modeling",
    bio: "",
    liveserver: "",
    imageUrl: "https://ext.same-assets.com/906812322/2240799338.jpeg",
  },
  {
    name: "Siymon",
    role: "Website Master",
    bio: "",
    liveserver: "Wanderhome",
    imageUrl: "https://ext.same-assets.com/906812322/2240799338.jpeg",
  },
];

export function MeetTheTeamPage() {
  return (
    <PageLayout title="Meet the Team" subtitle="The people behind SWG Infinity">
      <h2 className="section-title mb-6">Our Team</h2>

      <p className="text-gray-300 mb-8">
        Our team consists of many professionals, passionate about continuously improving the
        game and developing exciting new content. Each member brings valuable skills and a love for
        Star Wars Galaxies to the project.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
        {teamMembers.map((member) => (
          <div
            key={member.name}
            className="bg-[rgba(13,20,40,0.6)] rounded-md border border-[#1a1a4a] overflow-hidden"
          >
            <div className="relative h-40 w-full">
              <Image
                src={member.imageUrl}
                alt={`${member.name} - ${member.role}`}
                fill
                className="object-cover opacity-60"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d30] to-transparent" />
              <div className="absolute bottom-4 left-4">
                <h3 className="text-white text-xl font-bold">{member.name}</h3>
                <p className="text-[hsl(var(--swg-accent-gold))]">{member.role}</p>
              </div>
            </div>
            <div className="p-4">
              <p className="text-gray-300">{member.bio}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-[rgba(13,20,40,0.6)] p-6 rounded-md border border-[#1a1a4a] mt-12">
        <h3 className="text-white font-semibold text-lg mb-4">Join Our Team</h3>
        <p className="text-gray-300 mb-4">
          Passionate about Star Wars Galaxies and want to contribute to the project?
          We're always looking for talented individuals to join our team.
        </p>
        <a
          href="/join-the-team"
          className="play-button inline-block mt-2"
        >
          Learn More
        </a>
      </div>
    </PageLayout>
  );
}
