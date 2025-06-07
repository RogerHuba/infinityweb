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

    return (
      <div
        key={box.id}
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
                      case 'unarmed': return ['Teras Kasi Artist', 'Smuggler', 'Commando'];
                      case 'onehand': return ['Fencer'];
                      case 'twohand': return ['Swordsman'];
                      case 'polearm': return ['Pikeman'];
                      default: return ['Advanced'];
                    }
                  }
                  // Marksman destinations
                  if (professionId === 'marksman') {
                    switch (treeKey) {
                      case 'pistols': return ['Pistoleer'];
                      case 'rifles': return ['Rifleman'];
                      case 'carbines': return ['Carbineer'];
                      case 'support': return ['Squad Leader'];
                      default: return ['Advanced'];
                    }
                  }
                  // Scout destinations
                  if (professionId === 'scout') {
                    switch (treeKey) {
                      case 'exploration': return ['Ranger'];
                      case 'hunting': return ['Creature Handler'];
                      case 'trapping': return ['Bounty Hunter'];
                      case 'survival': return ['Bio-Engineer'];
                      default: return ['Advanced'];
                    }
                  }
                  // Artisan destinations
                  if (professionId === 'artisan') {
                    switch (treeKey) {
                      case 'assembly': return ['Weaponsmith', 'Armorsmith'];
                      case 'experimentation': return ['Chef', 'Tailor'];
                      case 'repair': return ['Architect'];
                      case 'business': return ['Merchant'];
                      default: return ['Advanced'];
                    }
                  }
                  // Medic destinations
                  if (professionId === 'medic') {
                    switch (treeKey) {
                      case 'healing': return ['Doctor'];
                      case 'injury': return ['Doctor'];
                      case 'enhancement': return ['Combat Medic'];
                      case 'support': return ['Combat Medic'];
                      default: return ['Advanced'];
                    }
                  }
                  // Entertainer destinations
                  if (professionId === 'entertainer') {
                    switch (treeKey) {
                      case 'music': return ['Musician'];
                      case 'dance': return ['Dancer'];
                      case 'instrument': return ['Musician'];
                      case 'inspiration': return ['Image Designer'];
                      default: return ['Advanced'];
                    }
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
