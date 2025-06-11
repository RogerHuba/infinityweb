"use client";

import { useState } from "react";
import { PageLayout } from "@/components/PageLayout";
import { ChevronRight, ChevronDown } from "lucide-react";

interface PatchUpdate {
  id: string;
  type: "addition" | "fix" | "change" | "balance" | "content";
  description: string;
}

interface PatchNote {
  id: string;
  version: string;
  date: string;
  title: string;
  updates: PatchUpdate[];
}

interface MonthPatchNotes {
  month: string;
  patches: PatchNote[];
}

interface YearPatchNotes {
  year: string;
  months: MonthPatchNotes[];
}

export function PatchNotesPage() {
  // State to track which sections are open
  const [openYears, setOpenYears] = useState<string[]>(["2025"]);
  const [openMonths, setOpenMonths] = useState<string[]>(["2025-May"]);

  // Toggle year accordion
  const toggleYear = (yearId: string) => {
    setOpenYears(
      openYears.includes(yearId)
        ? openYears.filter((id) => id !== yearId)
        : [...openYears, yearId]
    );
  };

  // Toggle month accordion
  const toggleMonth = (monthId: string) => {
    setOpenMonths(
      openMonths.includes(monthId)
        ? openMonths.filter((id) => id !== monthId)
        : [...openMonths, monthId]
    );
  };

  // Sample patch notes data
  const patchNotesData: YearPatchNotes[] = [
    {
      year: "2025",
      months: [
        {
          month: "May",
          patches: [
            {
              id: "2025-05-20",
              version: "2.3.1",
              date: "May 20, 2025",
              title: "Quality of Life Improvements",
              updates: [
                {
                  id: "1",
                  type: "addition",
                  description: "Added new Mandalorian armor sets to the crafting system"
                },
                {
                  id: "2",
                  type: "fix",
                  description: "Fixed an issue where Jedi Knight trials were not properly tracking Tusken Raider kills"
                },
                {
                  id: "3",
                  type: "change",
                  description: "Improved shuttle travel times between planets"
                },
                {
                  id: "4",
                  type: "balance",
                  description: "Adjusted PvP damage values for certain combat professions"
                },
                {
                  id: "5",
                  type: "content",
                  description: "Introduced the Chiss Poacher Base dungeon on Hoth"
                }
              ]
            },
            {
              id: "2025-05-05",
              version: "2.3.0",
              date: "May 5, 2025",
              title: "Major Combat Update",
              updates: [
                {
                  id: "6",
                  type: "addition",
                  description: "Added 3 new weapon types for Commando and Bounty Hunter professions"
                },
                {
                  id: "7",
                  type: "change",
                  description: "Revamped the combat targeting system for improved performance"
                },
                {
                  id: "8",
                  type: "balance",
                  description: "Rebalanced damage output for all Jedi lightsaber forms"
                },
                {
                  id: "9",
                  type: "content",
                  description: "Added new PvP battleground in the Tatooine Dune Sea"
                }
              ]
            }
          ]
        },
        {
          month: "April",
          patches: [
            {
              id: "2025-04-18",
              version: "2.2.5",
              date: "April 18, 2025",
              title: "Crafting Enhancements",
              updates: [
                {
                  id: "10",
                  type: "addition",
                  description: "Added new crafting schematics for high-end armor attachments"
                },
                {
                  id: "11",
                  type: "fix",
                  description: "Fixed resource harvester efficiency calculations"
                },
                {
                  id: "12",
                  type: "change",
                  description: "Improved crafting interface with better resource quality indicators"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      year: "2024",
      months: [
        {
          month: "December",
          patches: [
            {
              id: "2024-12-15",
              version: "2.2.0",
              date: "December 15, 2024",
              title: "Winter Festival Update",
              updates: [
                {
                  id: "13",
                  type: "content",
                  description: "Life Day celebration event with special rewards"
                },
                {
                  id: "14",
                  type: "addition",
                  description: "New player housing decorations themed for Life Day"
                },
                {
                  id: "15",
                  type: "fix",
                  description: "Multiple stability improvements for player cities"
                }
              ]
            }
          ]
        },
        {
          month: "October",
          patches: [
            {
              id: "2024-10-31",
              version: "2.1.5",
              date: "October 31, 2024",
              title: "Halloween Event",
              updates: [
                {
                  id: "16",
                  type: "content",
                  description: "Special Halloween themed quests and rewards"
                },
                {
                  id: "17",
                  type: "addition",
                  description: "Added Nightsister themed costumes and decorations"
                }
              ]
            }
          ]
        }
      ]
    }
  ];

  // Function to render patch update with appropriate styling by type
  const renderPatchUpdate = (update: PatchUpdate) => {
    let badgeColor = "";
    let badgeText = "";

    switch (update.type) {
      case "addition":
        badgeColor = "bg-green-900 text-green-200";
        badgeText = "NEW";
        break;
      case "fix":
        badgeColor = "bg-blue-900 text-blue-200";
        badgeText = "FIX";
        break;
      case "change":
        badgeColor = "bg-purple-900 text-purple-200";
        badgeText = "CHANGE";
        break;
      case "balance":
        badgeColor = "bg-yellow-900 text-yellow-200";
        badgeText = "BALANCE";
        break;
      case "content":
        badgeColor = "bg-indigo-900 text-indigo-200";
        badgeText = "CONTENT";
        break;
    }

    return (
      <div key={update.id} className="flex items-start mb-3">
        <span className={`inline-block rounded px-2 py-1 text-xs font-medium mr-3 ${badgeColor}`}>
          {badgeText}
        </span>
        <p className="text-gray-300">{update.description}</p>
      </div>
    );
  };

  return (
    <PageLayout title="Latest Patch Notes" subtitle="Updates and improvements to SWG Infinity">
      <h2 className="section-title mb-6">Patch Notes</h2>

      <p className="text-gray-300 mb-8">
        This page contains the latest updates and changes to SWG Infinity. Patch notes are organized
        by date with the most recent updates at the top. Click on a year or month to expand and view
        the details.
      </p>

      {/* Latest Patch Note Featured */}
      {patchNotesData[0]?.months[0]?.patches[0] && (
        <div className="bg-[rgba(13,20,40,0.8)] p-6 rounded-md border border-[#1a1a4a] mb-10">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
            <div>
              <h3 className="text-white font-bold text-xl">
                {patchNotesData[0].months[0].patches[0].title}
              </h3>
              <div className="flex items-center mt-1">
                <span className="text-[hsl(var(--swg-accent-gold))] text-sm mr-3">
                  Version {patchNotesData[0].months[0].patches[0].version}
                </span>
                <span className="text-gray-400 text-sm">
                  {patchNotesData[0].months[0].patches[0].date}
                </span>
              </div>
            </div>
            <span className="mt-2 md:mt-0 px-3 py-1 bg-[rgba(30,50,100,0.5)] rounded text-sm text-white">
              Latest Update
            </span>
          </div>

          <div className="mt-4 space-y-3">
            {patchNotesData[0].months[0].patches[0].updates.map(renderPatchUpdate)}
          </div>
        </div>
      )}

      {/* Collapsible Patch Notes by Year and Month */}
      <div className="space-y-6">
        {patchNotesData.map((yearData) => (
          <div key={yearData.year} className="border border-[#1a1a4a] rounded-md overflow-hidden">
            {/* Year Header */}
            <button
              className="w-full flex items-center justify-between p-4 bg-[rgba(13,20,40,0.9)] text-left"
              onClick={() => toggleYear(yearData.year)}
            >
              <h3 className="text-xl font-bold text-white">{yearData.year}</h3>
              {openYears.includes(yearData.year) ? (
                <ChevronDown className="h-5 w-5 text-[hsl(var(--swg-accent-gold))]" />
              ) : (
                <ChevronRight className="h-5 w-5 text-[hsl(var(--swg-accent-gold))]" />
              )}
            </button>

            {/* Year Content */}
            {openYears.includes(yearData.year) && (
              <div className="space-y-2 p-2 bg-[rgba(13,20,40,0.6)]">
                {yearData.months.map((monthData) => (
                  <div key={`${yearData.year}-${monthData.month}`} className="border border-[#1a1a4a] rounded-md overflow-hidden">
                    {/* Month Header */}
                    <button
                      className="w-full flex items-center justify-between p-3 bg-[rgba(13,20,40,0.8)] text-left"
                      onClick={() => toggleMonth(`${yearData.year}-${monthData.month}`)}
                    >
                      <h4 className="text-lg font-semibold text-white">{monthData.month}</h4>
                      {openMonths.includes(`${yearData.year}-${monthData.month}`) ? (
                        <ChevronDown className="h-4 w-4 text-[hsl(var(--swg-accent-gold))]" />
                      ) : (
                        <ChevronRight className="h-4 w-4 text-[hsl(var(--swg-accent-gold))]" />
                      )}
                    </button>

                    {/* Month Content */}
                    {openMonths.includes(`${yearData.year}-${monthData.month}`) && (
                      <div className="space-y-6 p-4 bg-[rgba(13,20,40,0.4)]">
                        {monthData.patches.map((patch) => (
                          <div key={patch.id} className="border-b border-[#1a1a4a] pb-6 last:border-0 last:pb-0">
                            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
                              <div>
                                <h5 className="text-white font-bold text-lg">{patch.title}</h5>
                                <div className="flex items-center mt-1">
                                  <span className="text-[hsl(var(--swg-accent-gold))] text-sm mr-3">
                                    Version {patch.version}
                                  </span>
                                  <span className="text-gray-400 text-sm">
                                    {patch.date}
                                  </span>
                                </div>
                              </div>
                            </div>

                            <div className="mt-4 space-y-3">
                              {patch.updates.map(renderPatchUpdate)}
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="bg-[rgba(13,20,40,0.6)] p-6 rounded-md border border-[#1a1a4a] mt-12">
        <h3 className="text-white font-semibold text-lg mb-4">Feedback Welcome</h3>
        <p className="text-gray-300">
          We value your feedback on these changes. If you encounter any issues or have suggestions for future
          updates, please share them with us on our Discord server.
        </p>
      </div>
    </PageLayout>
  );
}
