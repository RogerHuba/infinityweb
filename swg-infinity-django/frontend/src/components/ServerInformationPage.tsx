"use client";

import { PageLayout } from "@/components/PageLayout";
import Link from "next/link";
import {
  Building2,
  Users,
  History,
  Image as ImageIcon,
  Database,
  FileSpreadsheet,
  Swords
} from "lucide-react";

interface ServerInfoCategoryProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  href: string;
}

function ServerInfoCategory({ title, description, icon, href }: ServerInfoCategoryProps) {
  return (
    <Link href={href} className="block">
      <div className="bg-[#0d0d30] hover:bg-[#151550] border border-[#1a1a4a] p-6 rounded-lg transition-all duration-200">
        <div className="flex items-center mb-4">
          <div className="mr-4 text-blue-500">
            {icon}
          </div>
          <h3 className="text-xl font-semibold text-white">{title}</h3>
        </div>
        <p className="text-gray-300">{description}</p>
      </div>
    </Link>
  );
}

export function ServerInformationPage() {
  const categories = [
    {
      title: "Cities",
      description: "Explore player-built cities across the galaxy.",
      icon: <Building2 className="h-6 w-6" />,
      href: "/server-information/cities"
    },
    {
      title: "Guilds",
      description: "Join or discover active player guilds and organizations.",
      icon: <Users className="h-6 w-6" />,
      href: "/server-information/guilds"
    },
    {
      title: "Heritage",
      description: "Learn about the rich history of our server.",
      icon: <History className="h-6 w-6" />,
      href: "/server-information/heritage"
    },
    {
      title: "Game Pictures",
      description: "View screenshots from events and beautiful locations.",
      icon: <ImageIcon className="h-6 w-6" />,
      href: "/server-information/game-pictures"
    },
    {
      title: "Resources",
      description: "Track and find the best resources for crafting.",
      icon: <Database className="h-6 w-6" />,
      href: "/server-information/resources"
    },
    {
      title: "Schematics",
      description: "Browse available crafting schematics and designs.",
      icon: <FileSpreadsheet className="h-6 w-6" />,
      href: "/server-information/schematics"
    },
    {
      title: "Galactic Civil War",
      description: "Follow the ongoing battle between the Empire and Rebellion.",
      icon: <Swords className="h-6 w-6" />,
      href: "/server-information/galactic-civil-war"
    }
  ];

  return (
    <PageLayout title="Server Information">
      <div className="py-12">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-8">Server Information</h1>

          <p className="text-gray-300 mb-12">
            Explore detailed information about our server, including player cities, active guilds,
            resource information, and more. This hub connects you to all the data you need about
            the SWG Infinity galaxy.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {categories.map((category) => (
              <ServerInfoCategory
                key={category.title}
                title={category.title}
                description={category.description}
                icon={category.icon}
                href={category.href}
              />
            ))}
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
