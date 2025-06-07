"use client";

import { useState } from "react";
import type { CharacterTemplate } from "./CharacterBuilder";

interface BuildExportImportProps {
  currentBuild: {
    speciesId: string;
    professionId: string;
    selectedSkillBoxes: string[];
    usedSkillPoints: number;
    professionName: string;
    speciesName: string;
  };
  onImportBuild: (build: CharacterTemplate) => void;
}

export function BuildExportImport({ currentBuild, onImportBuild }: BuildExportImportProps) {
  const [showExportImport, setShowExportImport] = useState(false);
  const [importData, setImportData] = useState('');
  const [exportData, setExportData] = useState('');
  const [showImportDialog, setShowImportDialog] = useState(false);
  const [importError, setImportError] = useState('');
  const [copySuccess, setCopySuccess] = useState(false);

  // Generate build code for export
  const generateBuildCode = () => {
    try {
      const buildData = {
        version: "1.0",
        species: currentBuild.speciesId,
        profession: currentBuild.professionId,
        skills: currentBuild.selectedSkillBoxes,
        skillPoints: currentBuild.usedSkillPoints,
        timestamp: Date.now(),
        // Add metadata for display
        meta: {
          professionName: currentBuild.professionName,
          speciesName: currentBuild.speciesName
        }
      };

      // Encode as base64 for easy sharing
      const jsonString = JSON.stringify(buildData);
      const encoded = typeof btoa !== 'undefined' ? btoa(jsonString) : Buffer.from(jsonString).toString('base64');

      // Add prefix for identification
      return `SWG-BUILD-${encoded}`;
    } catch (error) {
      console.error('Error generating build code:', error);
      return 'SWG-BUILD-ERROR';
    }
  };

  // Parse imported build code
  const parseImportCode = (code: string): CharacterTemplate | null => {
    try {
      // Remove prefix if present
      const cleanCode = code.replace(/^SWG-BUILD-/, '');

      // Decode from base64
      const decoded = typeof atob !== 'undefined' ? atob(cleanCode) : Buffer.from(cleanCode, 'base64').toString();
      const buildData = JSON.parse(decoded);

      // Validate structure
      if (!buildData.species || !buildData.profession || !Array.isArray(buildData.skills)) {
        throw new Error('Invalid build format');
      }

      // Convert to CharacterTemplate format
      const template: CharacterTemplate = {
        id: `import_${Date.now()}`,
        name: `Imported ${buildData.meta?.professionName || buildData.profession} Build`,
        speciesId: buildData.species,
        professionId: buildData.profession,
        selectedSkillBoxes: buildData.skills,
        usedSkillPoints: buildData.skillPoints || 0,
        createdAt: new Date(buildData.timestamp || Date.now())
      };

      return template;
    } catch (error) {
      console.error('Import error:', error);
      return null;
    }
  };

  // Handle export
  const handleExport = () => {
    const code = generateBuildCode();
    setExportData(code);
    setShowExportImport(true);
  };

  // Handle copy to clipboard
  const handleCopy = async () => {
    try {
      if (typeof navigator !== 'undefined' && navigator.clipboard) {
        await navigator.clipboard.writeText(exportData);
      } else {
        // Fallback for older browsers or SSR
        const textArea = document.createElement('textarea');
        textArea.value = exportData;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
      }
      setCopySuccess(true);
      setTimeout(() => setCopySuccess(false), 2000);
    } catch (error) {
      console.error('Copy failed:', error);
      setCopySuccess(false);
    }
  };

  // Handle import
  const handleImport = () => {
    setImportError('');

    if (!importData.trim()) {
      setImportError('Please enter a build code');
      return;
    }

    const parsedBuild = parseImportCode(importData.trim());

    if (!parsedBuild) {
      setImportError('Invalid build code. Please check the code and try again.');
      return;
    }

    onImportBuild(parsedBuild);
    setImportData('');
    setShowImportDialog(false);
    setShowExportImport(false);
  };

  // Generate shareable URL (for future enhancement)
  const generateShareableURL = () => {
    if (typeof window === 'undefined') return '';
    const currentURL = window.location.origin + window.location.pathname;
    const buildCode = generateBuildCode();
    return `${currentURL}?build=${encodeURIComponent(buildCode)}`;
  };

  return (
    <div className="bg-[#068ba3] p-3 rounded-md">
      <div className="flex justify-between items-center mb-3">
        <h2 className="text-lg font-bold text-white">Share Build</h2>
        <button
          className="text-white text-sm hover:text-[#b8dce3]"
          onClick={() => setShowExportImport(!showExportImport)}
        >
          {showExportImport ? 'Hide' : 'Show'}
        </button>
      </div>

      {showExportImport && (
        <div className="space-y-3">
          {/* Export section */}
          <div className="bg-[#04444a] rounded p-3">
            <h3 className="text-white font-medium mb-2">Export Build</h3>
            <p className="text-[#b8dce3] text-sm mb-3">
              Share your character build with other players by copying the build code below.
            </p>

            <div className="space-y-2">
              <button
                className="w-full bg-green-600 hover:bg-green-500 text-white py-2 px-3 rounded text-sm font-medium"
                onClick={handleExport}
              >
                Generate Build Code
              </button>

              {exportData && (
                <div className="space-y-2">
                  <textarea
                    className="w-full bg-[#063a4a] border border-[#056473] text-[#b8dce3] rounded p-2 text-xs h-20 resize-none"
                    value={exportData}
                    readOnly
                    onClick={(e) => e.currentTarget.select()}
                  />
                  <div className="flex gap-2">
                    <button
                      className={`flex-1 py-1 px-2 rounded text-xs font-medium ${
                        copySuccess
                          ? 'bg-green-600 text-white'
                          : 'bg-blue-600 hover:bg-blue-500 text-white'
                      }`}
                      onClick={handleCopy}
                    >
                      {copySuccess ? 'Copied!' : 'Copy Code'}
                    </button>
                    <button
                      className="flex-1 bg-purple-600 hover:bg-purple-500 text-white py-1 px-2 rounded text-xs font-medium"
                      onClick={() => {
                        const url = generateShareableURL();
                        if (typeof navigator !== 'undefined' && navigator.clipboard) {
                          navigator.clipboard.writeText(url);
                        }
                      }}
                    >
                      Copy Link
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Build info */}
            {exportData && (
              <div className="mt-3 pt-3 border-t border-[#056473]">
                <h4 className="text-[#b8dce3] text-sm font-medium mb-1">Build Information</h4>
                <div className="text-xs text-[#6dd9eb] space-y-1">
                  <p>Species: {currentBuild.speciesName}</p>
                  <p>Profession: {currentBuild.professionName}</p>
                  <p>Skill Points: {currentBuild.usedSkillPoints}/250</p>
                  <p>Skill Boxes: {currentBuild.selectedSkillBoxes.length}</p>
                </div>
              </div>
            )}
          </div>

          {/* Import section */}
          <div className="bg-[#04444a] rounded p-3">
            <h3 className="text-white font-medium mb-2">Import Build</h3>
            <p className="text-[#b8dce3] text-sm mb-3">
              Load a character build from a shared build code.
            </p>

            <button
              className="w-full bg-blue-600 hover:bg-blue-500 text-white py-2 px-3 rounded text-sm font-medium"
              onClick={() => setShowImportDialog(true)}
            >
              Import Build Code
            </button>
          </div>
        </div>
      )}

      {/* Import dialog */}
      {showImportDialog && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-[#068ba3] p-6 rounded-md w-96">
            <h3 className="text-white font-bold text-lg mb-4">Import Character Build</h3>

            <div className="space-y-3">
              <div>
                <label className="text-white text-sm mb-2 block">Build Code:</label>
                <textarea
                  value={importData}
                  onChange={(e) => setImportData(e.target.value)}
                  placeholder="Paste build code here (SWG-BUILD-...)..."
                  className="w-full p-2 rounded bg-[#04444a] text-[#b8dce3] border border-[#056473] h-20 resize-none text-sm"
                  autoFocus
                />
              </div>

              {importError && (
                <div className="bg-red-900/50 border border-red-500 rounded p-2">
                  <p className="text-red-200 text-sm">{importError}</p>
                </div>
              )}

              <div className="text-[#b8dce3] text-xs">
                <p className="mb-1"><strong>Note:</strong> Importing a build will:</p>
                <ul className="list-disc list-inside space-y-1 text-[#6dd9eb]">
                  <li>Change your current species and profession</li>
                  <li>Replace all selected skill boxes</li>
                  <li>Override your current character configuration</li>
                </ul>
              </div>
            </div>

            <div className="flex justify-end gap-2 mt-4">
              <button
                className="bg-gray-600 hover:bg-gray-500 text-white px-4 py-2 rounded text-sm"
                onClick={() => {
                  setShowImportDialog(false);
                  setImportData('');
                  setImportError('');
                }}
              >
                Cancel
              </button>
              <button
                className="bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded text-sm"
                onClick={handleImport}
              >
                Import Build
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
