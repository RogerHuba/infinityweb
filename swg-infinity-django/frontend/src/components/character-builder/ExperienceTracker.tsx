"use client";

interface ExperienceTrackerProps {
  usedSkillPoints: number;
  maxSkillPoints: number;
}

export function ExperienceTracker({ usedSkillPoints, maxSkillPoints }: ExperienceTrackerProps) {
  // Calculate percentage used
  const percentUsed = (usedSkillPoints / maxSkillPoints) * 100;

  // Determine color based on usage
  let progressColor = '';
  if (percentUsed <= 33) {
    progressColor = 'bg-green-500';
  } else if (percentUsed <= 66) {
    progressColor = 'bg-[hsl(var(--swg-accent-gold))]';
  } else {
    progressColor = percentUsed === 100 ? 'bg-green-600' : 'bg-orange-500';
  }

  return (
    <div className="bg-[#068ba3] p-3 rounded-md">
      <h2 className="text-lg font-bold text-white mb-3 text-center">My Experience</h2>

      <div className="bg-[#04444a] rounded p-2">
        <div className="text-center mb-2">
          <span className="text-[#b8dce3] text-sm">
            Used: {usedSkillPoints} / {maxSkillPoints} SP
          </span>
        </div>

        <div className="w-full bg-[#063a4a] rounded-full h-2">
          <div
            className={`h-2 rounded-full ${progressColor}`}
            style={{ width: `${percentUsed}%` }}
          />
        </div>
      </div>
    </div>
  );
}
