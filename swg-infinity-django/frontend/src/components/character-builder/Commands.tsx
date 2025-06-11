"use client";

interface CommandsProps {
  commands: string[];
  certifications: string[];
}

export function Commands({ commands, certifications }: CommandsProps) {
  // Format for display
  const formatName = (name: string) => {
    return name
      .split('_')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  };

  // Remove duplicates and sort
  const uniqueCommands = [...new Set(commands)].sort();
  const uniqueCertifications = [...new Set(certifications)].sort();

  return (
    <div className="bg-[#068ba3] p-3 rounded-md">
      <h2 className="text-lg font-bold text-white mb-3 text-center">Commands and Certifications</h2>
      <div className="bg-[#04444a] rounded p-2 max-h-[400px] overflow-y-auto">
        {uniqueCommands.length === 0 && uniqueCertifications.length === 0 ? (
          <p className="text-[#b8dce3] text-sm text-center">Select skill boxes to unlock abilities</p>
        ) : (
          <div className="space-y-1">
            {uniqueCommands.map(command => (
              <div key={command} className="py-1 border-b border-[#056473] last:border-0">
                <p className="text-[#b8dce3] text-sm">{formatName(command)}</p>
              </div>
            ))}
            {uniqueCertifications.map(cert => (
              <div key={cert} className="py-1 border-b border-[#056473] last:border-0">
                <p className="text-[#b8dce3] text-sm">{formatName(cert)}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
