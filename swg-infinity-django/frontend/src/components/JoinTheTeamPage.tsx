"use client";

import { PageLayout } from "@/components/PageLayout";
import { Code, Users, MessageCircle, Wrench, Brush, Database, Shield, HelpCircle } from "lucide-react";

interface TeamRole {
  title: string;
  icon: React.ReactNode;
  description: string;
  requirements: string[];
}

export function JoinTheTeamPage() {
  const teamRoles: TeamRole[] = [
    {
      title: "C++ Developer",
      icon: <Code className="h-6 w-6 text-[hsl(var(--swg-accent-gold))]" />,
      description: "Work on core server systems, game mechanics, and performance optimization.",
      requirements: [
        "Experience with C++ programming",
        "Understanding of game server architecture",
        "Familiarity with version control systems (Git)",
        "Strong problem-solving skills",
        "Experience with SWGEmu codebase is a plus"
      ]
    },
    {
      title: "Lua Scripter",
      icon: <Code className="h-6 w-6 text-[hsl(var(--swg-accent-gold))]" />,
      description: "Create and modify game content, implement quests, and develop gameplay systems using Lua.",
      requirements: [
        "Experience with Lua programming",
        "Understanding of game scripting concepts",
        "Ability to read and comprehend existing code",
        "Creativity and attention to detail",
        "Knowledge of Star Wars lore is a plus"
      ]
    },
    {
      title: "Content Designer",
      icon: <Brush className="h-6 w-6 text-[hsl(var(--swg-accent-gold))]" />,
      description: "Design new missions, events, and gameplay content for the server.",
      requirements: [
        "Game design experience or strong creative instincts",
        "Knowledge of Star Wars Galaxies gameplay systems",
        "Excellent writing and storytelling abilities",
        "Ability to balance gameplay mechanics",
        "Passion for creating engaging player experiences"
      ]
    },
    {
      title: "Database Administrator",
      icon: <Database className="h-6 w-6 text-[hsl(var(--swg-accent-gold))]" />,
      description: "Manage and optimize the game's database systems to ensure smooth operation.",
      requirements: [
        "Experience with MySQL or PostgreSQL",
        "Understanding of database optimization techniques",
        "Knowledge of data integrity and backup procedures",
        "Ability to write efficient SQL queries",
        "Experience with game databases is a plus"
      ]
    },
    {
      title: "Quality Assurance",
      icon: <Shield className="h-6 w-6 text-[hsl(var(--swg-accent-gold))]" />,
      description: "Test new features, identify bugs, and ensure a quality gaming experience.",
      requirements: [
        "Attention to detail and thorough testing methodology",
        "Ability to clearly document and report issues",
        "Experience playing Star Wars Galaxies",
        "Patience and persistence in reproducing bugs",
        "Basic understanding of game mechanics"
      ]
    },
    {
      title: "Community Moderator",
      icon: <Users className="h-6 w-6 text-[hsl(var(--swg-accent-gold))]" />,
      description: "Help maintain a positive community atmosphere and assist players with issues.",
      requirements: [
        "Excellent communication skills",
        "Patience and professionalism when dealing with players",
        "Ability to enforce rules fairly and consistently",
        "Active participation in the SWG Infinity community",
        "Available for regular moderation shifts"
      ]
    },
    {
      title: "Technical Support",
      icon: <Wrench className="h-6 w-6 text-[hsl(var(--swg-accent-gold))]" />,
      description: "Assist players with technical issues and help troubleshoot problems.",
      requirements: [
        "Knowledge of common PC troubleshooting techniques",
        "Understanding of SWG client and launcher systems",
        "Patient and clear communication skills",
        "Problem-solving ability",
        "Experience with customer support is a plus"
      ]
    },
    {
      title: "Wiki Contributor",
      icon: <HelpCircle className="h-6 w-6 text-[hsl(var(--swg-accent-gold))]" />,
      description: "Help document game systems, create guides, and maintain our knowledge base.",
      requirements: [
        "Strong writing and organizational skills",
        "Attention to detail and accuracy",
        "Knowledge of Star Wars Galaxies gameplay",
        "Ability to create clear instructions and explanations",
        "Basic HTML knowledge is helpful but not required"
      ]
    }
  ];

  return (
    <PageLayout
      title="Join the Team"
      subtitle="Help us shape the future of SWG Infinity"
    >
      <h2 className="section-title mb-6">Join Our Development Team</h2>

      <p className="text-gray-300 mb-8">
        SWG Infinity is always looking for passionate and talented individuals to join our team.
        As a community-driven project, we rely on volunteers who share our love for Star Wars Galaxies
        and want to help make our server the best it can be.
      </p>

      <div className="bg-[rgba(13,20,40,0.8)] p-6 rounded-md border border-[#1a1a4a] mb-10">
        <h3 className="text-white font-bold text-xl mb-4 flex items-center">
          <Users className="h-6 w-6 text-[hsl(var(--swg-accent-gold))] mr-2" />
          Why Join Our Team?
        </h3>
        <ul className="swg-bullet-list">
          <li className="text-gray-300 mb-3">Be part of a passionate community dedicated to preserving and enhancing Star Wars Galaxies</li>
          <li className="text-gray-300 mb-3">Develop valuable skills in game development, programming, design, and community management</li>
          <li className="text-gray-300 mb-3">See your ideas and contributions implemented in a game played by hundreds of people</li>
          <li className="text-gray-300 mb-3">Collaborate with a team of like-minded individuals from around the world</li>
          <li className="text-gray-300">Gain hands-on experience with a complex game codebase and the challenges of running an MMO</li>
        </ul>
      </div>

      <h3 className="text-xl font-bold text-white mb-6">Available Positions</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        {teamRoles.map((role) => (
          <div key={role.title} className="bg-[rgba(13,20,40,0.6)] p-5 rounded-md border border-[#1a1a4a]">
            <div className="flex items-center mb-3">
              {role.icon}
              <h4 className="text-white font-semibold ml-2">{role.title}</h4>
            </div>
            <p className="text-gray-300 mb-4">{role.description}</p>
            <h5 className="text-[hsl(var(--swg-accent-gold))] text-sm font-medium mb-2">Requirements:</h5>
            <ul className="text-gray-300 text-sm pl-5 list-disc space-y-1">
              {role.requirements.map((req) => (
                <li key={req}>{req}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <h3 className="text-xl font-bold text-white mb-6">Application Process</h3>
      <div className="bg-[rgba(13,20,40,0.6)] p-6 rounded-md border border-[#1a1a4a] mb-10">
        <ol className="list-decimal pl-6 text-gray-300 space-y-4">
          <li>
            <strong className="text-white">Join our Discord:</strong> First, join our community Discord server if you haven't already.
          </li>
          <li>
            <strong className="text-white">Review the positions:</strong> Take time to understand the available roles and requirements.
          </li>
          <li>
            <strong className="text-white">Submit an application:</strong> Contact a staff member on Discord and express your interest, or fill out an application in the #join-the-team channel.
          </li>
          <li>
            <strong className="text-white">Interview:</strong> If your application is promising, you'll be invited to chat with the relevant team lead.
          </li>
          <li>
            <strong className="text-white">Trial period:</strong> Successful applicants will go through a trial period to ensure it's a good fit.
          </li>
        </ol>
      </div>

      <div className="bg-[rgba(13,20,40,0.8)] p-6 rounded-md border border-[#1a1a4a] mt-12">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-4/5 mb-6 md:mb-0 md:pr-6">
            <h3 className="text-white font-semibold text-lg mb-4 flex items-center">
              <MessageCircle className="h-5 w-5 text-[hsl(var(--swg-accent-gold))] mr-2" />
              Ready to Apply?
            </h3>
            <p className="text-gray-300 mb-4">
              If you're interested in joining our team, we'd love to hear from you! Join our Discord
              server and reach out to a staff member, or look for the application form in the
              #join-the-team channel.
            </p>
            <p className="text-gray-300">
              Even if you don't see a position that matches your skills, we're always open to discussing
              how you might contribute to the project. Don't hesitate to reach out!
            </p>
          </div>
          <div className="md:w-1/5 flex justify-center">
            <a
              href="https://discord.gg/jyakeRJ"
              target="_blank"
              rel="noopener noreferrer"
              className="play-button inline-flex items-center"
            >
              Join Discord
            </a>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
