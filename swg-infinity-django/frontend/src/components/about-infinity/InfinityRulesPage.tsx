"use client";

import { PageLayout } from "@/components/PageLayout";

interface RuleCategory {
  title: string;
  rules: string[];
}

const ruleCategories: RuleCategory[] = [
  {
    title: "General Rules",
    rules: [
      "Be respectful to all players and staff members.",
      "No harassment, hate speech, or discriminatory language.",
      "No exploiting bugs or glitches. Report them to the staff.",
      "No sharing personal information of others without consent.",
      "No impersonating staff members or other players.",
      "English is the official language in global chat channels.",
      "Follow staff instructions when they are administering the rules."
    ]
  },
  {
    title: "Account Rules",
    rules: [
      "Maximum of 7 character slots per account.",
      "Maximum of 3 characters online at the same time.",
      "No account sharing.",
      "Multiple accounts are allowed but require approval.",
      "You are responsible for all actions taken on your account.",
      "Do not use offensive or inappropriate character names."
    ]
  },
  {
    title: "Chat Rules",
    rules: [
      "No spamming chat channels.",
      "No excessive use of capital letters or special characters.",
      "No advertising other servers or non-SWG related content.",
      "Keep political, religious, and controversial topics out of chat.",
      "Use appropriate channels for specific topics (Trade chat for trading, etc.)."
    ]
  },
  {
    title: "Economy Rules",
    rules: [
      "No duping items or credits.",
      "No scamming other players in trades.",
      "No attempt to artificially manipulate the market.",
      "Real-money trading (RMT) is strictly prohibited.",
      "Report economic exploits immediately to staff."
    ]
  },
  {
    title: "PvP Rules",
    rules: [
      "Spawn camping and griefing are prohibited.",
      "No hacking, botting, or using third-party software to gain combat advantage.",
      "Jedi characters are permanently overt once they complete Knight Trials.",
      "Faction bases are considered PvP areas regardless of faction status.",
      "Respect duels and organized PvP events."
    ]
  },
  {
    title: "Housing and Cities",
    rules: [
      "Respect player housing and do not block access to public areas.",
      "City mayors must maintain their cities according to server guidelines.",
      "No placement of structures to intentionally block resources or paths.",
      "Abandoned structures may be removed after extended inactivity.",
      "Respect the theme and atmosphere of player cities."
    ]
  }
];

export function InfinityRulesPage() {
  return (
    <PageLayout title="Infinity Specific Rules" subtitle="Guidelines for our server">
      <h2 className="section-title mb-6">Server Rules</h2>

      <p className="text-gray-300 mb-8">
        To ensure a enjoyable experience for all players, we ask that everyone follow these rules
        while playing on SWG Infinity. Failure to comply with these rules may result in warnings,
        temporary suspension, or permanent ban depending on the severity and frequency of violations.
      </p>

      <div className="space-y-10 mt-10">
        {ruleCategories.map((category) => (
          <div key={category.title} className="bg-[rgba(13,20,40,0.6)] p-6 rounded-md border border-[#1a1a4a]">
            <h3 className="text-[hsl(var(--swg-accent-gold))] font-bold text-xl mb-4">{category.title}</h3>
            <ul className="swg-bullet-list">
              {category.rules.map((rule) => (
                <li key={rule} className="text-gray-300 mb-3">{rule}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="bg-[rgba(13,20,40,0.8)] p-6 rounded-md border border-[#1a1a4a] mt-12">
        <h3 className="text-white font-semibold text-lg mb-4">Rule Enforcement</h3>
        <p className="text-gray-300 mb-4">
          Our staff team is dedicated to maintaining a fair and enjoyable environment for all players.
          Rule enforcement is handled on a case-by-case basis, considering context and previous history.
        </p>
        <p className="text-gray-300">
          If you witness rule violations or have concerns, please contact a staff member on Discord.
          We appreciate your cooperation in keeping SWG Infinity a welcoming community.
        </p>
      </div>
    </PageLayout>
  );
}
