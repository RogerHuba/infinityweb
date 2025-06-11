"use client";

import { useState } from "react";
import type { Profession } from "./CharacterBuilder";

interface ProfessionListProps {
  professions: Profession[];
  selectedProfession: string;
  selectedSkillBoxes: string[];
  onSelectProfession: (id: string) => void;
}

export function ProfessionList({
  professions,
  selectedProfession,
  selectedSkillBoxes,
  onSelectProfession
}: ProfessionListProps) {
  const [filter, setFilter] = useState<'all' | 'basic' | 'elite' | 'force' | 'jedi' | 'pilot'>('all');
  const [searchTerm, setSearchTerm] = useState('');

  // Filter professions based on the selected filter and search term
  const filteredProfessions = professions.filter(profession => {
    const matchesFilter = filter === 'all' || profession.type === filter;
    const matchesSearch = searchTerm === '' ||
      profession.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      profession.id.toLowerCase().includes(searchTerm.toLowerCase());

    return matchesFilter && matchesSearch;
  });

  // Sort professions alphabetically
  const sortedProfessions = [...filteredProfessions].sort((a, b) =>
    a.name.localeCompare(b.name)
  );

  // Group professions for better organization
  const groupedProfessions = {
    basic: sortedProfessions.filter(p => p.type === 'basic'),
    elite: sortedProfessions.filter(p => p.type === 'elite'),
    force: sortedProfessions.filter(p => p.type === 'force'),
    jedi: sortedProfessions.filter(p => p.type === 'jedi'),
    pilot: sortedProfessions.filter(p => p.type === 'pilot'),
  };

  // Get profession count for each type
  const professionCounts = {
    all: professions.length,
    basic: professions.filter(p => p.type === 'basic').length,
    elite: professions.filter(p => p.type === 'elite').length,
    force: professions.filter(p => p.type === 'force').length,
    jedi: professions.filter(p => p.type === 'jedi').length,
    pilot: professions.filter(p => p.type === 'pilot').length,
  };

  // Render profession groups based on filter
  const renderProfessions = () => {
    if (filter === 'all') {
      return (
        <>
          {groupedProfessions.basic.length > 0 && (
            <>
              <h4 className="text-sm font-medium text-[hsl(var(--swg-accent-gold))] mt-3 mb-1">Basic Professions ({groupedProfessions.basic.length})</h4>
              {groupedProfessions.basic.map(renderProfessionButton)}
            </>
          )}

          {groupedProfessions.elite.length > 0 && (
            <>
              <h4 className="text-sm font-medium text-[hsl(var(--swg-accent-gold))] mt-3 mb-1">Elite Professions ({groupedProfessions.elite.length})</h4>
              {groupedProfessions.elite.map(renderProfessionButton)}
            </>
          )}

          {groupedProfessions.force.length > 0 && (
            <>
              <h4 className="text-sm font-medium text-[hsl(var(--swg-accent-gold))] mt-3 mb-1">Force Professions ({groupedProfessions.force.length})</h4>
              {groupedProfessions.force.map(renderProfessionButton)}
            </>
          )}

          {groupedProfessions.jedi.length > 0 && (
            <>
              <h4 className="text-sm font-medium text-[hsl(var(--swg-accent-gold))] mt-3 mb-1">Jedi Professions ({groupedProfessions.jedi.length})</h4>
              {groupedProfessions.jedi.map(renderProfessionButton)}
            </>
          )}

          {groupedProfessions.pilot.length > 0 && (
            <>
              <h4 className="text-sm font-medium text-[hsl(var(--swg-accent-gold))] mt-3 mb-1">Pilot Professions ({groupedProfessions.pilot.length})</h4>
              {groupedProfessions.pilot.map(renderProfessionButton)}
            </>
          )}
        </>
      );
    }
    return sortedProfessions.map(renderProfessionButton);
  };

  // Render a single profession button
  const renderProfessionButton = (profession: Profession) => {
    const isSelected = profession.id === selectedProfession;

    // Determine button styling based on selection status only
    const getButtonStyle = () => {
      if (isSelected) {
        return 'bg-[#075365] text-white font-medium';
      }
      return 'text-[#b8dce3] hover:bg-[#063a4a]';
    };

    return (
      <div key={profession.id} className="relative group">
        <button
          className={`w-full text-left py-1 px-2 rounded mb-1 text-sm transition-colors flex items-center justify-between ${getButtonStyle()}`}
          onClick={() => onSelectProfession(profession.id)}
        >
          <span className="flex-1">{profession.name}</span>
        </button>
      </div>
    );
  };

  return (
    <div className="bg-[#068ba3] p-3 rounded-md">
      <h2 className="text-lg font-bold text-white mb-3 text-center">All Professions</h2>

      {/* Search input */}
      <div className="mb-3">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search professions..."
          className="w-full p-2 text-sm rounded bg-[#04444a] text-[#b8dce3] border border-[#056473] placeholder-[#6dd9eb] focus:outline-none focus:border-[#4ea4b1]"
        />
      </div>

      {/* Filter buttons */}
      <div className="mb-3 grid grid-cols-2 gap-1 text-xs">
        {(['all', 'basic', 'elite', 'force', 'jedi', 'pilot'] as const).map(filterType => (
          <button
            key={filterType}
            className={`py-1 px-2 rounded transition-colors ${
              filter === filterType
                ? 'bg-[#075365] text-white font-medium'
                : 'bg-[#04444a] text-[#b8dce3] hover:bg-[#063a4a]'
            }`}
            onClick={() => setFilter(filterType)}
          >
            {filterType.charAt(0).toUpperCase() + filterType.slice(1)} ({professionCounts[filterType]})
          </button>
        ))}
      </div>



      {/* Profession list */}
      <div className="bg-[#04444a] rounded p-2 max-h-[400px] overflow-y-auto">
        {sortedProfessions.length === 0 ? (
          <div className="text-center py-4">
            <p className="text-[#b8dce3] text-sm">No professions found</p>
            {searchTerm && (
              <p className="text-[#6dd9eb] text-xs mt-1">Try a different search term</p>
            )}
          </div>
        ) : (
          renderProfessions()
        )}
      </div>
    </div>
  );
}
