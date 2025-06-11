"use client";

import { useState } from "react";
import type { Species } from "./CharacterBuilder";

interface CharacterStatsSummaryProps {
  species: Species;
  skillModifiers: {[key: string]: number};
  usedSkillPoints: number;
  maxSkillPoints: number;
  selectedSkillBoxesCount: number;
  professionName: string;
}

export function CharacterStatsSummary({
  species,
  skillModifiers,
  usedSkillPoints,
  maxSkillPoints,
  selectedSkillBoxesCount,
  professionName
}: CharacterStatsSummaryProps) {
  const [showDetail, setShowDetail] = useState(true);

  // Combine species and skill modifiers
  const totalModifiers: {[key: string]: number} = {};

  // Add species modifiers
  for (const key in species.modifiers) {
    totalModifiers[key] = (totalModifiers[key] || 0) + species.modifiers[key];
  }

  // Add skill modifiers
  for (const key in skillModifiers) {
    totalModifiers[key] = (totalModifiers[key] || 0) + skillModifiers[key];
  }

  // Categorize modifiers for better display
  const categorizeModifiers = () => {
    const categories = {
      combat: {} as {[key: string]: number},
      skills: {} as {[key: string]: number},
      attributes: {} as {[key: string]: number},
      force: {} as {[key: string]: number},
      private: {} as {[key: string]: number},
      other: {} as {[key: string]: number}
    };

    for (const [key, value] of Object.entries(totalModifiers)) {
      const lowerKey = key.toLowerCase();

      if (key.startsWith('private_')) {
        categories.private[key] = value;
      } else if (lowerKey.includes('damage') || lowerKey.includes('accuracy') || lowerKey.includes('speed') ||
                 lowerKey.includes('weapon') || lowerKey.includes('combat') || lowerKey.includes('defense')) {
        categories.combat[key] = value;
      } else if (lowerKey.includes('force') || lowerKey.includes('jedi') || lowerKey.includes('lightsaber')) {
        categories.force[key] = value;
      } else if (lowerKey.includes('health') || lowerKey.includes('action') || lowerKey.includes('mind') ||
                 lowerKey.includes('constitution') || lowerKey.includes('strength') || lowerKey.includes('luck')) {
        categories.attributes[key] = value;
      } else if (lowerKey.includes('skill') || lowerKey.includes('craft') || lowerKey.includes('medicine') ||
                 lowerKey.includes('scout') || lowerKey.includes('social') || lowerKey.includes('entertainer')) {
        categories.skills[key] = value;
      } else {
        categories.other[key] = value;
      }
    }

    return categories;
  };

  const categories = categorizeModifiers();

  // Format modifier names for display
  const formatModifierName = (name: string) => {
    if (name.startsWith('private_')) {
      return name.replace('private_', '').replace(/_/g, ' ');
    }
    return name
      .split('_')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  };

  // Render modifier category
  const renderCategory = (title: string, modifiers: {[key: string]: number}, color: string) => {
    const entries = Object.entries(modifiers);
    if (entries.length === 0) return null;

    return (
      <div className="mb-3">
        <h4 className={`text-sm font-medium ${color} mb-2`}>{title}</h4>
        <div className="grid grid-cols-1 gap-1">
          {entries.map(([key, value]) => (
            <div key={key} className="flex justify-between items-center py-1 px-2 bg-[#063a4a] rounded text-xs">
              <span className="text-[#b8dce3]">{formatModifierName(key)}</span>
              <span className={`font-medium ${value >= 0 ? 'text-green-400' : 'text-red-400'}`}>
                {value >= 0 ? `+${value}` : value}
              </span>
            </div>
          ))}
        </div>
      </div>
    );
  };

  // Calculate remaining points for recommendations
  const remainingPoints = maxSkillPoints - usedSkillPoints;

  return (
    <div className="bg-[#068ba3] p-3 rounded-md">
      <div className="flex justify-between items-center mb-3">
        <h2 className="text-lg font-bold text-white">Character Summary</h2>
        <button
          className="text-white text-sm hover:text-[#b8dce3]"
          onClick={() => setShowDetail(!showDetail)}
        >
          {showDetail ? 'Hide' : 'Show'} Details
        </button>
      </div>

      {/* Basic character info */}
      <div className="bg-[#04444a] rounded p-3 mb-3">
        <div className="grid grid-cols-2 gap-2 text-sm">
          <div>
            <span className="text-[#6dd9eb]">Species:</span>
            <span className="text-[#b8dce3] ml-1 font-medium">{species.name}</span>
          </div>
          <div>
            <span className="text-[#6dd9eb]">Profession:</span>
            <span className="text-[#b8dce3] ml-1 font-medium">{professionName}</span>
          </div>
          <div>
            <span className="text-[#6dd9eb]">Skill Points:</span>
            <span className="text-[#b8dce3] ml-1 font-medium">{usedSkillPoints}/{maxSkillPoints}</span>
          </div>
          <div>
            <span className="text-[#6dd9eb]">Skill Boxes:</span>
            <span className="text-[#b8dce3] ml-1 font-medium">{selectedSkillBoxesCount}</span>
          </div>
        </div>
      </div>

      {/* Detailed modifier breakdown */}
      {showDetail && (
        <div className="bg-[#04444a] rounded p-3 max-h-[400px] overflow-y-auto">
          <h3 className="text-white font-medium mb-3">Total Modifiers Breakdown</h3>

          {Object.keys(totalModifiers).length === 0 ? (
            <p className="text-[#b8dce3] text-sm text-center py-4">No modifiers active</p>
          ) : (
            <div className="space-y-1">
              {renderCategory("Combat & Weapons", categories.combat, "text-red-400")}
              {renderCategory("Skills & Crafting", categories.skills, "text-blue-400")}
              {renderCategory("Attributes & Health", categories.attributes, "text-green-400")}
              {renderCategory("Force & Jedi", categories.force, "text-purple-400")}
              {renderCategory("Other Bonuses", categories.other, "text-yellow-400")}
              {renderCategory("Private Modifiers", categories.private, "text-gray-400")}
            </div>
          )}

          {/* Source breakdown */}
          <div className="mt-4 pt-3 border-t border-[#056473]">
            <h4 className="text-white text-sm font-medium mb-2">Modifier Sources</h4>
            <div className="grid grid-cols-2 gap-2 text-xs">
              <div className="bg-[#063a4a] rounded p-2">
                <div className="text-[#6dd9eb] font-medium mb-1">Species ({species.name})</div>
                <div className="text-[#b8dce3]">
                  {Object.keys(species.modifiers).length} modifiers
                </div>
              </div>
              <div className="bg-[#063a4a] rounded p-2">
                <div className="text-[#6dd9eb] font-medium mb-1">Skills</div>
                <div className="text-[#b8dce3]">
                  {Object.keys(skillModifiers).length} modifiers
                </div>
              </div>
            </div>
          </div>

          {/* Build recommendations */}
          {remainingPoints > 0 && (
            <div className="mt-3 pt-3 border-t border-[#056473]">
              <h4 className="text-white text-sm font-medium mb-2">Build Recommendations</h4>
              <div className="text-xs text-[#b8dce3] space-y-1">
                {remainingPoints >= 60 && (
                  <p>• You have {remainingPoints} skill points remaining - consider adding another profession!</p>
                )}
                {Object.keys(totalModifiers).length < 5 && (
                  <p>• You have few active modifiers - explore different skill trees for more bonuses.</p>
                )}
                {selectedSkillBoxesCount === 1 && (
                  <p>• You only have novice skills selected - advance in skill trees for better abilities!</p>
                )}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
