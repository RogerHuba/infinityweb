"use client";

import type { Profession, SkillBox } from "./CharacterBuilder";

interface SkillTreeProps {
  profession: Profession;
  selectedSkillBoxes: string[];
  onSelectSkillBox: (id: string) => void;
}

export function SkillTree({ profession, selectedSkillBoxes, onSelectSkillBox }: SkillTreeProps) {

  // Render Skill Box
  const renderSkillBox = (
    box: SkillBox,
    treeName?: string,
    boxIndex?: number,
    isNoviceOrMaster = false
  ) => {
    const isSelected = selectedSkillBoxes.includes(box.id);

    // Check if prerequisites are met
    const prerequisitesMet = box.prerequisites.every((prereq) =>
      selectedSkillBoxes.includes(prereq)
    );

    // Different styling based on state - now all boxes are always visible
    const boxStyle = isSelected
      ? "bg-[#075365] border-[#4ea4b1] border-2 text-white" // Selected - teal background
      : prerequisitesMet
      ? "bg-[#063a4a] border-[#056473] text-[#b8dce3] hover:border-[#4ea4b1] cursor-pointer" // Available
      : "bg-[#04444a] border-[#056473] text-[#6dd9eb] opacity-60"; // Not available yet

    // Simplified name for display - just the skill name
    let displayName = box.name;
    if (treeName && boxIndex !== undefined && !isNoviceOrMaster) {
      const romanNumerals = ["I", "II", "III", "IV", "V", "VI"];
      displayName = romanNumerals[boxIndex] || `${boxIndex + 1}`;
    }

    // Check if this is a master box that leads to elite professions
    const getMasterBoxDestinations = (boxId: string) => {
      switch (boxId) {
        case "medic_master":
          return ["Doctor", "Combat Medic"];
        case "marksman_master":
          return ["Commando", "Bounty Hunter"];
        case "scout_master":
          return ["Ranger"];
        default:
          return [];
      }
    };

    const masterDestinations = isNoviceOrMaster ? getMasterBoxDestinations(box.id) : [];

    return (
      <div key={box.id} className="flex flex-col items-center">
        {/* Show "To:" destinations above master boxes that lead to elite professions */}
        {masterDestinations.length > 0 && (
          <div className="mb-2 text-center">
            {masterDestinations.map((dest) => (
              <p key={dest} className="text-[#b8dce3] text-xs">To: {dest}</p>
            ))}
          </div>
        )}

        <div
          className={`border rounded p-3 text-center mb-1 transition-all duration-150 ease-in-out
            ${isNoviceOrMaster ? 'w-80 h-16' : 'w-full h-16'} flex items-center justify-center
            ${boxStyle}`}
          onClick={() => onSelectSkillBox(box.id)}
          title={`${box.name} (${box.skillPoints} SP)`}
        >
          <p className="text-sm font-medium leading-tight px-2">
            {displayName}
          </p>
        </div>
      </div>
    );
  };



  return (
    <div className="skill-tree bg-[#04444a] rounded p-4">
      {/* Master Box - Top center */}
      {profession.masterBox && (
        <div className="mb-8 flex justify-center">
          <div className="w-64">
            {renderSkillBox(profession.masterBox, undefined, undefined, true)}
          </div>
        </div>
      )}

      {/* Skill Branches - Horizontal layout like reference */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-2 mb-4">
        {Object.entries(profession.skillTrees).map(([treeKey, tree]) => (
          <div key={treeKey} className="skill-branch">
            {/* Tree header with "To:" info - fixed height for alignment */}
            <div className="text-center mb-2 space-y-0.5 h-12 flex flex-col justify-end">
              {/* Map each skill tree to its destination professions */}
              {(() => {
                const getDestinations = (professionId: string, treeKey: string) => {
                  // Brawler destinations
                  if (professionId === 'brawler') {
                    switch (treeKey) {
                      case 'unarmed': return ['Teras Kasi Artist'];
                      case 'oneHanded': return ['Fencer'];
                      case 'twoHanded': return ['Swordsman'];
                      case 'polearm': return ['Pikeman'];
                      default: return ['Advanced'];
                    }
                  }
                  // Marksman destinations
                  if (professionId === 'marksman') {
                    switch (treeKey) {
                      case 'pistol': return ['Pistoleer', 'Smuggler'];
                      case 'rifle': return ['Rifleman'];
                      case 'carbine': return ['Carbineer'];
                      case 'support': return ['Squad Leader', 'Combat Medic'];
                      default: return ['Advanced'];
                    }
                  }
                  // Scout destinations
                  if (professionId === 'scout') {
                    switch (treeKey) {
                      case 'exploration': return ['Creature Handler', 'Squad Leader'];
                      case 'hunting': return []; // No longer required by any professions
                      case 'trapping': return ['Creature Handler'];
                      case 'foraging': return ['Bio-Engineer', 'Squad Leader'];
                      default: return ['Advanced'];
                    }
                  }
                  // Artisan destinations
                  if (professionId === 'artisan') {
                    switch (treeKey) {
                      case 'engineering': return ['Weaponsmith', 'Armorsmith', 'Droid Engineer', 'Architect'];
                      case 'domestic': return ['Chef', 'Tailor'];
                      case 'survey': return [];
                      case 'business': return ['Merchant'];
                      default: return ['Advanced'];
                    }
                  }
                  // Marksman destinations
                  if (professionId === 'marksman') {
                    switch (treeKey) {
                      case 'pistol': return ['Pistoleer', 'Smuggler'];
                      case 'rifle': return ['Rifleman', 'Bounty Hunter'];
                      case 'carbine': return ['Carbineer'];
                      case 'support': return ['Squad Leader', 'Commando', 'Combat Medic'];
                      default: return ['Advanced'];
                    }
                  }
                  // Scout destinations
                  if (professionId === 'scout') {
                    switch (treeKey) {
                      case 'exploration': return ['Ranger'];
                      case 'hunting': return ['Creature Handler', 'Bounty Hunter'];
                      case 'trapping': return [];
                      case 'foraging': return ['Bio-Engineer']; // Bio-Engineer requires scout_foraging_4
                      default: return ['Advanced'];
                    }
                  }
                  // Brawler destinations - updated
                  if (professionId === 'brawler') {
                    switch (treeKey) {
                      case 'unarmed': return ['Teras Kasi Artist', 'Smuggler', 'Commando'];
                      case 'oneHanded': return ['Fencer'];
                      case 'twoHanded': return ['Swordsman'];
                      case 'polearm': return ['Pikeman'];
                      default: return ['Advanced'];
                    }
                  }
                  // Medic destinations - removed Doctor and Combat Medic since they require medic_master (shown above Master box)
                  if (professionId === 'medic') {
                    switch (treeKey) {
                      case 'injury': return [];
                      case 'injurySpeed': return [];
                      case 'ability': return [];
                      case 'crafting': return ['Bio-Engineer']; // Bio-Engineer requires medic_crafting_4
                      default: return [];
                    }
                  }
                  // Entertainer destinations
                  if (professionId === 'entertainer') {
                    switch (treeKey) {
                      case 'music': return ['Musician'];
                      case 'dance': return ['Dancer'];
                      case 'healing': return []; // Healing tree is required by Musician and Dancer but doesn't lead to other professions
                      case 'technique': return ['Image Designer'];
                      default: return ['Advanced'];
                    }
                  }
                  // Force-Sensitive professions - no destinations (they don't lead to other professions)
                  if (professionId === 'forcecombat' || professionId === 'forcereflexes' ||
                      professionId === 'forcecrafting' || professionId === 'forcesenses') {
                    return []; // No "To:" text for Force-Sensitive professions
                  }
                  // Jedi Disciplines - no destinations (they don't lead to other professions)
                  if (professionId === 'jedi_lightsaber' || professionId === 'jedi_powers' ||
                      professionId === 'jedi_healing' || professionId === 'jedi_enhancements' ||
                      professionId === 'jedi_defender') {
                    return []; // No "To:" text for Jedi Disciplines
                  }
                  // Pilot professions
                  if (professionId === 'pilot') {
                    switch (treeKey) {
                      case 'starships': return ['Imperial Pilot', 'Rebel Pilot'];
                      default: return ['Advanced'];
                    }
                  }
                  // Elite Pilot professions - no destinations
                  if (professionId === 'imperial_pilot' || professionId === 'rebel_pilot') {
                    return []; // No "To:" text for elite pilot professions
                  }
                  // Politician profession - no destinations (0 skill points, no progression)
                  if (professionId === 'politician') {
                    return []; // No "To:" text for Politician (0 skill points, no progression)
                  }
                  // Elite professions - no destinations (they don't lead to other professions)
                  if (professionId === 'fencer' || professionId === 'swordsman' ||
                      professionId === 'pikeman' || professionId === 'teras_kasi_artist' ||
                      professionId === 'pistoleer' || professionId === 'rifleman' ||
                      professionId === 'weaponsmith' || professionId === 'armorsmith' ||
                      professionId === 'chef' || professionId === 'doctor' || professionId === 'musician' ||
                      professionId === 'dancer' || professionId === 'droidengineer' ||
                      professionId === 'tailor' || professionId === 'architect' || professionId === 'merchant' ||
                      professionId === 'smuggler' || professionId === 'bountyhunter' ||
                      professionId === 'bioengineer' || professionId === 'creaturehandler' ||
                      professionId === 'combatmedic' || professionId === 'squadleader' ||
                      professionId === 'imagedesigner' || professionId === 'carbineer' ||
                      professionId === 'commando' || professionId === 'ranger') {
                    return []; // No "To:" text for elite professions
                  }
                  return ['Advanced'];
                };

                const destinations = getDestinations(profession.id, treeKey);
                return destinations.map((dest) => (
                  <p key={dest} className="text-[#b8dce3] text-xs">To: {dest}</p>
                ));
              })()}
            </div>

            {/* Skill boxes - show all from top to bottom (IV to I) */}
            <div className="space-y-1">
              {tree.boxes.slice().reverse().map((box, reverseIndex) => {
                const originalIndex = tree.boxes.length - 1 - reverseIndex;
                return renderSkillBox(box, treeKey, originalIndex);
              })}
            </div>
          </div>
        ))}
      </div>

      {/* Novice Box - Bottom center */}
      <div className="mt-4 flex justify-center">
        <div className="w-64">
          {renderSkillBox(profession.noviceBox, undefined, undefined, true)}
        </div>
      </div>
    </div>
  );
}
