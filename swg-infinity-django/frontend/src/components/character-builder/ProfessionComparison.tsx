"use client";

import { useState } from "react";
import { type Profession, SkillBox } from "./CharacterBuilder";

interface ProfessionComparisonProps {
  professions: Profession[];
  currentProfession: Profession;
  currentModifiers: {[key: string]: number};
  currentSelectedSkillBoxes: string[];
}

export function ProfessionComparison({
  professions,
  currentProfession,
  currentModifiers,
  currentSelectedSkillBoxes
}: ProfessionComparisonProps) {
  const [comparisonProfession, setComparisonProfession] = useState<Profession | null>(null);
  const [showComparison, setShowComparison] = useState(false);

  // Calculate modifiers for a profession
  const calculateProfessionModifiers = (profession: Profession): {[key: string]: number} => {
    const modifiers: {[key: string]: number} = {};

    // Add novice box modifiers
    if (profession.noviceBox.grants.modifiers) {
      for (const key in profession.noviceBox.grants.modifiers) {
        modifiers[key] = (modifiers[key] || 0) + profession.noviceBox.grants.modifiers[key];
      }
    }

    return modifiers;
  };

  // Get all unique modifier keys from both professions
  const getAllModifierKeys = (modifiers1: {[key: string]: number}, modifiers2: {[key: string]: number}) => {
    const keys = new Set([...Object.keys(modifiers1), ...Object.keys(modifiers2)]);
    return Array.from(keys).sort();
  };

  // Format modifier names for display
  const formatModifierName = (name: string) => {
    if (name.startsWith('private_')) {
      return name;
    }
    return name
      .split('_')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  };

  const comparisonModifiers = comparisonProfession ? calculateProfessionModifiers(comparisonProfession) : {};
  const allModifierKeys = getAllModifierKeys(currentModifiers, comparisonModifiers);

  return (
    <div className="bg-[#068ba3] p-3 rounded-md">
      <div className="flex justify-between items-center mb-3">
        <h2 className="text-lg font-bold text-white">Compare Builds</h2>
        <button
          className="text-white text-sm hover:text-[#b8dce3]"
          onClick={() => setShowComparison(!showComparison)}
        >
          {showComparison ? 'Hide' : 'Show'}
        </button>
      </div>

      {showComparison && (
        <div className="space-y-3">
          {/* Profession selector */}
          <div>
            <label className="text-white text-sm mb-2 block">Compare with:</label>
            <select
              className="w-full bg-[#04444a] border border-[#056473] text-[#b8dce3] rounded px-2 py-1 text-sm"
              value={comparisonProfession?.id || ''}
              onChange={(e) => {
                const profession = professions.find(p => p.id === e.target.value);
                setComparisonProfession(profession || null);
              }}
            >
              <option value="">Select a profession</option>
              {professions
                .filter(p => p.id !== currentProfession.id)
                .sort((a, b) => a.name.localeCompare(b.name))
                .map(profession => (
                  <option key={profession.id} value={profession.id}>
                    {profession.name}
                  </option>
                ))}
            </select>
          </div>

          {/* Comparison display */}
          {comparisonProfession && (
            <div className="bg-[#04444a] rounded p-2 max-h-[300px] overflow-y-auto">
              <div className="grid grid-cols-2 gap-2 mb-2">
                <div className="text-center">
                  <h4 className="text-[#b8dce3] font-medium text-sm">{currentProfession.name}</h4>
                  <p className="text-[#6dd9eb] text-xs">Current Build</p>
                </div>
                <div className="text-center">
                  <h4 className="text-[#b8dce3] font-medium text-sm">{comparisonProfession.name}</h4>
                  <p className="text-[#6dd9eb] text-xs">Novice Only</p>
                </div>
              </div>

              <div className="space-y-1">
                {allModifierKeys.length === 0 ? (
                  <p className="text-[#b8dce3] text-sm text-center py-2">No modifiers to compare</p>
                ) : (
                  allModifierKeys.map(key => {
                    const currentValue = currentModifiers[key] || 0;
                    const comparisonValue = comparisonModifiers[key] || 0;
                    const difference = currentValue - comparisonValue;

                    return (
                      <div key={key} className="border-b border-[#056473] last:border-0 py-1">
                        <div className="text-[#b8dce3] text-xs mb-1">{formatModifierName(key)}</div>
                        <div className="grid grid-cols-2 gap-2 text-xs">
                          <div className="text-center">
                            <span className="text-[#b8dce3]">
                              {currentValue >= 0 ? `+${currentValue}` : currentValue}
                            </span>
                          </div>
                          <div className="text-center">
                            <span className="text-[#b8dce3]">
                              {comparisonValue >= 0 ? `+${comparisonValue}` : comparisonValue}
                            </span>
                          </div>
                        </div>
                        {difference !== 0 && (
                          <div className="text-center mt-1">
                            <span className={`text-xs ${
                              difference > 0 ? 'text-green-400' : 'text-red-400'
                            }`}>
                              {difference > 0 ? `+${difference}` : difference} difference
                            </span>
                          </div>
                        )}
                      </div>
                    );
                  })
                )}
              </div>

              {comparisonProfession && (
                <div className="mt-3 pt-2 border-t border-[#056473]">
                  <p className="text-[#6dd9eb] text-xs">
                    <strong>Note:</strong> Comparison shows {comparisonProfession.name} novice box vs your current build.
                    Select {comparisonProfession.name} to see its full potential.
                  </p>
                </div>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
