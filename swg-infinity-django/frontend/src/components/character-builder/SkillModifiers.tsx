"use client";

interface SkillModifiersProps {
  modifiers: {[key: string]: number};
}

export function SkillModifiers({ modifiers }: SkillModifiersProps) {
  // Format modifier names for display
  const formatModifierName = (name: string) => {
    // Handle private modifiers separately
    if (name.startsWith('private_')) {
      return name;
    }

    // Convert snake_case to Title Case with spaces
    return name
      .split('_')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  };

  // Sort modifiers for better display
  const sortedModifiers = Object.entries(modifiers)
    .sort((a, b) => {
      // Put private_ modifiers at the bottom
      if (a[0].startsWith('private_') && !b[0].startsWith('private_')) return 1;
      if (!a[0].startsWith('private_') && b[0].startsWith('private_')) return -1;

      // Sort alphabetically
      return a[0].localeCompare(b[0]);
    });

  return (
    <div className="bg-[#068ba3] p-3 rounded-md">
      <h2 className="text-lg font-bold text-white mb-3 text-center">Skill Modifiers</h2>

      {sortedModifiers.length === 0 ? (
        <div className="bg-[#04444a] rounded p-2 text-center">
          <p className="text-[#b8dce3] text-sm">This skill box required no xp</p>
        </div>
      ) : (
        <div className="bg-[#04444a] rounded p-2 max-h-[400px] overflow-y-auto">
          {sortedModifiers.map(([name, value]) => (
            <div key={name} className="flex justify-between items-center py-1 border-b border-[#056473] last:border-0">
              <p className="text-[#b8dce3] text-sm">{formatModifierName(name)}</p>
              <p className="text-[#b8dce3] font-medium">
                {value >= 0 ? `+${value}` : value}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
