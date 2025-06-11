"use client";

import { useState, useEffect } from "react";
import { PageLayout } from "@/components/PageLayout";
import { SkillTree } from "@/components/character-builder/SkillTree";
import { SkillModifiers } from "@/components/character-builder/SkillModifiers";
import { Commands } from "@/components/character-builder/Commands";
import { ProfessionList } from "@/components/character-builder/ProfessionList";


import { CharacterStatsSummary } from "@/components/character-builder/CharacterStatsSummary";
import { BuildExportImport } from "@/components/character-builder/BuildExportImport";
import { TemplateSelector } from "@/components/character-builder/TemplateSelector";
import { professionData } from "@/components/character-builder/data/professions";
import { speciesData } from "@/components/character-builder/data/species";
import type { ProfessionTemplate } from "@/components/character-builder/data/professionTemplates";

export type Species = {
  id: string;
  name: string;
  modifiers: {
    [key: string]: number;
  };
};

export type SkillBox = {
  id: string;
  name: string;
  skillPoints: number;
  xpCost: number;
  prerequisites: string[];
  grants: {
    commands?: string[];
    certifications?: string[];
    modifiers?: {
      [key: string]: number;
    };
  };
  isSelected?: boolean;
};

export type Profession = {
  id: string;
  name: string;
  description: string;
  type: "basic" | "elite" | "force" | "jedi" | "pilot";
  prerequisites?: string[]; // Required skill box IDs to unlock this profession
  skillTrees: {
    [key: string]: {
      name: string;
      boxes: SkillBox[];
      connections?: {
        [key: string]: string[]; // Maps skillBox ID to an array of IDs it connects to
      };
    };
  };
  noviceBox: SkillBox;
  masterBox?: SkillBox;
  leadsTo?: {
    [key: string]: string; // Profession ID -> Required skill box ID
  };
};

// Character Template Interface
export interface CharacterTemplate {
  id: string;
  name: string;
  speciesId: string;
  professionId: string;
  selectedSkillBoxes: string[];
  usedSkillPoints: number;
  createdAt: Date;
}

export function CharacterBuilder() {
  const MAX_SKILL_POINTS = 250;

  const [selectedSpecies, setSelectedSpecies] = useState<Species>(speciesData[1]); // Default to human
  const [selectedProfession, setSelectedProfession] = useState<Profession>(professionData.find(p => p.id === 'brawler') || professionData[0]);
  const [skillPoints, setSkillPoints] = useState<number>(MAX_SKILL_POINTS);
  const [usedSkillPoints, setUsedSkillPoints] = useState<number>(0);
  const [selectedSkillBoxes, setSelectedSkillBoxes] = useState<string[]>([]);
  const [earnedCommands, setEarnedCommands] = useState<string[]>([]);
  const [earnedCertifications, setEarnedCertifications] = useState<string[]>([]);
  const [skillModifiers, setSkillModifiers] = useState<{[key: string]: number}>({});

  // Template management
  const [savedTemplates, setSavedTemplates] = useState<CharacterTemplate[]>([]);
  const [showSaveDialog, setShowSaveDialog] = useState(false);
  const [showLoadDialog, setShowLoadDialog] = useState(false);
  const [showShareDialog, setShowShareDialog] = useState(false);
  const [templateName, setTemplateName] = useState("");

  // Profession template selector
  const [showTemplateSelector, setShowTemplateSelector] = useState(false);

  // Get all skill boxes from all professions (for multi-profession support)
  const getAllSkillBoxes = (): SkillBox[] => {
    const allBoxes: SkillBox[] = [];

    // Include boxes from all professions, not just the currently viewed one
    for (const profession of professionData) {
      allBoxes.push(profession.noviceBox);

      if (profession.masterBox) {
        allBoxes.push(profession.masterBox);
      }

      for (const treeKey in profession.skillTrees) {
        const tree = profession.skillTrees[treeKey];
        allBoxes.push(...tree.boxes);
      }
    }

    return allBoxes;
  };

  // Get skill boxes for the currently viewed profession only
  const getCurrentProfessionSkillBoxes = (): SkillBox[] => {
    const allBoxes: SkillBox[] = [selectedProfession.noviceBox];

    if (selectedProfession.masterBox) {
      allBoxes.push(selectedProfession.masterBox);
    }

    for (const treeKey in selectedProfession.skillTrees) {
      const tree = selectedProfession.skillTrees[treeKey];
      allBoxes.push(...tree.boxes);
    }

    return allBoxes;
  };

  // Initialize with no skills selected - allow players to choose their path
  useEffect(() => {
    // Only initialize on first mount, don't reset when profession changes
    // This allows mixing multiple professions as in SWG
    // Start with empty character - no automatic novice selection
    setSelectedSkillBoxes([]);
    setUsedSkillPoints(0);
    setEarnedCommands([]);
    setEarnedCertifications([]);
    recalculateModifiers();
  }, []); // Empty dependency array - only run once on mount

  // Handle profession change
  const handleProfessionChange = (professionId: string) => {
    const profession = professionData.find(p => p.id === professionId);
    if (profession) {
      // Don't reset character in SWG - allow mixing professions
      setSelectedProfession(profession);
    }
  };

  // Handle species change
  const handleSpeciesChange = (speciesId: string) => {
    const species = speciesData.find(s => s.id === speciesId);
    if (species) {
      setSelectedSpecies(species);
      recalculateModifiers();
    }
  };

  // Get all boxes that depend on a given box (recursively)
  const getDependentBoxes = (skillBoxId: string): string[] => {
    const dependents: string[] = [];
    const allBoxes = getAllSkillBoxes();

    for (const box of allBoxes) {
      if (box.prerequisites.includes(skillBoxId) && selectedSkillBoxes.includes(box.id)) {
        dependents.push(box.id);
        // Recursively get dependents of this box
        dependents.push(...getDependentBoxes(box.id));
      }
    }

    return [...new Set(dependents)]; // Remove duplicates
  };

  // Check if profession prerequisites are met
  const checkProfessionPrerequisites = (profession: Profession): { met: boolean; missing: string[] } => {
    if (!profession.prerequisites || profession.prerequisites.length === 0) {
      return { met: true, missing: [] };
    }

    const missing: string[] = [];
    for (const prereqId of profession.prerequisites) {
      if (!selectedSkillBoxes.includes(prereqId)) {
        missing.push(prereqId);
      }
    }

    return {
      met: missing.length === 0,
      missing: missing
    };
  };

  // Get human-readable names for prerequisite skill boxes
  const getPrerequisiteNames = (skillBoxIds: string[]): string[] => {
    const allBoxes = getAllSkillBoxes();
    return skillBoxIds.map(id => {
      const box = allBoxes.find(b => b.id === id);
      return box ? box.name : id;
    });
  };

  // Get all prerequisite boxes needed for a given box (recursively)
  const getPrerequisiteBoxes = (skillBoxId: string): string[] => {
    const allBoxes = getAllSkillBoxes();
    const targetBox = allBoxes.find(box => box.id === skillBoxId);

    if (!targetBox) return [];

    const prerequisites: string[] = [];

    for (const prereqId of targetBox.prerequisites) {
      if (!selectedSkillBoxes.includes(prereqId)) {
        prerequisites.push(prereqId);
      }
      // Always recursively get prerequisites, regardless of selection status
      prerequisites.push(...getPrerequisiteBoxes(prereqId));
    }

    return [...new Set(prerequisites)]; // Remove duplicates
  };

  // Handle skill box selection with smart logic
  const handleSkillBoxSelection = (skillBoxId: string) => {
    const allBoxes = getAllSkillBoxes();
    const skillBox = allBoxes.find(box => box.id === skillBoxId);

    if (!skillBox) return;

    // Check if already selected - DESELECT MODE
    if (selectedSkillBoxes.includes(skillBoxId)) {
      // Get all boxes that depend on this one
      const dependentBoxes = getDependentBoxes(skillBoxId);
      const boxesToRemove = [skillBoxId, ...dependentBoxes];

      // Calculate total skill points to remove
      let totalPointsToRemove = 0;
      const commandsToRemove: string[] = [];
      const certificationsToRemove: string[] = [];

      for (const boxId of boxesToRemove) {
        const box = allBoxes.find(b => b.id === boxId);
        if (box) {
          totalPointsToRemove += box.skillPoints;
          if (box.grants.commands) {
            commandsToRemove.push(...box.grants.commands);
          }
          if (box.grants.certifications) {
            certificationsToRemove.push(...box.grants.certifications);
          }
        }
      }

      // Remove all dependent boxes
      setSelectedSkillBoxes(prev => prev.filter(id => !boxesToRemove.includes(id)));
      setUsedSkillPoints(prev => prev - totalPointsToRemove);
      setEarnedCommands(prev => prev.filter(cmd => !commandsToRemove.includes(cmd)));
      setEarnedCertifications(prev => prev.filter(cert => !certificationsToRemove.includes(cert)));
      recalculateModifiers();

      return;
    }

    // SELECT MODE - Auto-select prerequisites
    const prerequisiteBoxes = getPrerequisiteBoxes(skillBoxId);
    const boxesToAdd = [...prerequisiteBoxes, skillBoxId];

    // Calculate total skill points needed
    let totalPointsNeeded = 0;
    const commandsToAdd: string[] = [];
    const certificationsToAdd: string[] = [];

    for (const boxId of boxesToAdd) {
      const box = allBoxes.find(b => b.id === boxId);
      if (box) {
        totalPointsNeeded += box.skillPoints;
        if (box.grants.commands) {
          commandsToAdd.push(...box.grants.commands);
        }
        if (box.grants.certifications) {
          certificationsToAdd.push(...box.grants.certifications);
        }
      }
    }

    // Check if we have enough skill points
    if (usedSkillPoints + totalPointsNeeded > MAX_SKILL_POINTS) {
      return; // Not enough skill points
    }

    // Add all required boxes
    setSelectedSkillBoxes(prev => [...new Set([...prev, ...boxesToAdd])]);
    setUsedSkillPoints(prev => prev + totalPointsNeeded);
    setEarnedCommands(prev => [...new Set([...prev, ...commandsToAdd])]);
    setEarnedCertifications(prev => [...new Set([...prev, ...certificationsToAdd])]);
    recalculateModifiers();
  };

  // Recalculate all modifiers
  const recalculateModifiers = () => {
    const newModifiers: {[key: string]: number} = {};

    // Add species modifiers
    for (const key in selectedSpecies.modifiers) {
      newModifiers[key] = (newModifiers[key] || 0) + selectedSpecies.modifiers[key];
    }

    // Add skill box modifiers using the helper function
    const allBoxes = getAllSkillBoxes();

    for (const boxId of selectedSkillBoxes) {
      const skillBox = allBoxes.find(box => box.id === boxId);

      if (skillBox?.grants.modifiers) {
        for (const key in skillBox.grants.modifiers) {
          newModifiers[key] = (newModifiers[key] || 0) + skillBox.grants.modifiers[key];
        }
      }
    }

    setSkillModifiers(newModifiers);
  };

  // Reset character - clear all skills and start fresh
  const resetCharacter = () => {
    setSelectedSkillBoxes([]);
    setUsedSkillPoints(0);
    setEarnedCommands([]);
    setEarnedCertifications([]);
    recalculateModifiers();
  };

  // Load saved templates from localStorage
  useEffect(() => {
    const savedTemplatesData = localStorage.getItem('swg-character-templates');
    if (savedTemplatesData) {
      try {
        const templates = JSON.parse(savedTemplatesData);
        setSavedTemplates(templates);
      } catch (error) {
        console.error('Error loading saved templates:', error);
      }
    }
  }, []);

  // Save template
  const saveTemplate = (name: string) => {
    const template: CharacterTemplate = {
      id: `template_${Date.now()}`,
      name: name,
      speciesId: selectedSpecies.id,
      professionId: selectedProfession.id,
      selectedSkillBoxes: [...selectedSkillBoxes],
      usedSkillPoints: usedSkillPoints,
      createdAt: new Date()
    };

    const updatedTemplates = [...savedTemplates, template];
    setSavedTemplates(updatedTemplates);
    localStorage.setItem('swg-character-templates', JSON.stringify(updatedTemplates));
    setShowSaveDialog(false);
    setTemplateName("");
  };

  // Load template
  const loadTemplate = (template: CharacterTemplate) => {
    // Find the species and profession
    const species = speciesData.find(s => s.id === template.speciesId);
    const profession = professionData.find(p => p.id === template.professionId);

    if (species && profession) {
      setSelectedSpecies(species);
      setSelectedProfession(profession);
      setSelectedSkillBoxes([...template.selectedSkillBoxes]);
      setUsedSkillPoints(template.usedSkillPoints);

      // Recalculate commands, certifications, and modifiers
      const allBoxes = getAllSkillBoxes();
      const commands: string[] = [];
      const certifications: string[] = [];

      for (const boxId of template.selectedSkillBoxes) {
        const box = allBoxes.find(b => b.id === boxId);
        if (box) {
          if (box.grants.commands) {
            commands.push(...box.grants.commands);
          }
          if (box.grants.certifications) {
            certifications.push(...box.grants.certifications);
          }
        }
      }

      setEarnedCommands(commands);
      setEarnedCertifications(certifications);
      recalculateModifiers();
    }

    setShowLoadDialog(false);
  };

  // Delete template
  const deleteTemplate = (templateId: string) => {
    const updatedTemplates = savedTemplates.filter(t => t.id !== templateId);
    setSavedTemplates(updatedTemplates);
    localStorage.setItem('swg-character-templates', JSON.stringify(updatedTemplates));
  };

  // Share build functionality
  const [shareData, setShareData] = useState('');
  const [copySuccess, setCopySuccess] = useState(false);

  const generateBuildCode = () => {
    try {
      const buildData = {
        version: "1.0",
        species: selectedSpecies.id,
        profession: selectedProfession.id,
        skills: selectedSkillBoxes,
        skillPoints: usedSkillPoints,
        timestamp: Date.now(),
        meta: {
          professionName: selectedProfession.name,
          speciesName: selectedSpecies.name
        }
      };

      const jsonString = JSON.stringify(buildData);
      const encoded = typeof btoa !== 'undefined' ? btoa(jsonString) : Buffer.from(jsonString).toString('base64');
      return `SWG-BUILD-${encoded}`;
    } catch (error) {
      console.error('Error generating build code:', error);
      return '';
    }
  };

  const handleGenerateShare = () => {
    const buildCode = generateBuildCode();
    setShareData(buildCode);
  };

  const handleCopyShare = () => {
    if (!shareData) return;

    try {
      if (typeof navigator !== 'undefined' && navigator.clipboard) {
        navigator.clipboard.writeText(shareData);
      } else {
        const textArea = document.createElement('textarea');
        textArea.value = shareData;
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

  // Load profession template
  const loadProfessionTemplate = (template: ProfessionTemplate) => {
    // Reset character first
    setSelectedSkillBoxes([]);
    setUsedSkillPoints(0);
    setEarnedCommands([]);
    setEarnedCertifications([]);

    // Apply template skills
    const allBoxes = getAllSkillBoxes();
    const commandsToAdd: string[] = [];
    const certificationsToAdd: string[] = [];
    let totalPointsUsed = 0;

    // Add skills from template
    for (const skillBoxId of template.skillBoxes) {
      const skillBox = allBoxes.find(box => box.id === skillBoxId);
      if (skillBox) {
        totalPointsUsed += skillBox.skillPoints;
        if (skillBox.grants.commands) {
          commandsToAdd.push(...skillBox.grants.commands);
        }
        if (skillBox.grants.certifications) {
          certificationsToAdd.push(...skillBox.grants.certifications);
        }
      }
    }

    // Set the new state
    setSelectedSkillBoxes([...template.skillBoxes]);
    setUsedSkillPoints(totalPointsUsed);
    setEarnedCommands([...new Set(commandsToAdd)]);
    setEarnedCertifications([...new Set(certificationsToAdd)]);

    // Find appropriate profession to display
    const templateProfessions = professionData.filter(prof =>
      template.skillBoxes.some(skillId => skillId.includes(prof.id))
    );
    if (templateProfessions.length > 0) {
      setSelectedProfession(templateProfessions[0]);
    }

    // Recalculate modifiers
    recalculateModifiers();
  };

  return (
    <PageLayout
      title="Character Builder"
      subtitle="Plan your character's profession and skills"
      heroClassName="hero-section-character-minimal"
    >
      <div className="grid grid-cols-1 lg:grid-cols-10 gap-4">
        {/* Sidebar - Professions */}
        <div className="lg:col-span-2">
          <div className="space-y-4">
            <ProfessionList
              professions={professionData}
              selectedProfession={selectedProfession.id}
              selectedSkillBoxes={selectedSkillBoxes}
              onSelectProfession={handleProfessionChange}
            />
          </div>
        </div>

        {/* Main Area - Skill Tree */}
        <div className="lg:col-span-5">
          <div className="bg-[#068ba3] p-4 rounded-md mb-4">
            <div className="flex flex-col md:flex-row justify-between items-center mb-4">
              <div className="flex items-center mb-2 md:mb-0">
                <select
                  className="bg-[#04444a] border border-[#056473] text-[#b8dce3] rounded px-2 py-1"
                  value={selectedSpecies.id}
                  onChange={(e) => handleSpeciesChange(e.target.value)}
                >
                  <option value="" disabled>Species:</option>
                  {speciesData.map(species => (
                    <option key={species.id} value={species.id}>{species.name}</option>
                  ))}
                </select>
              </div>

              <div className="flex items-center flex-wrap gap-2">
                <button
                  className="bg-purple-600 hover:bg-purple-500 text-white px-2 py-1 rounded text-sm"
                  onClick={() => setShowTemplateSelector(true)}
                >
                  Templates
                </button>
                <button
                  className="bg-green-600 hover:bg-green-500 text-white px-2 py-1 rounded text-sm"
                  onClick={() => setShowSaveDialog(true)}
                >
                  Save Build
                </button>
                <button
                  className="bg-blue-600 hover:bg-blue-500 text-white px-2 py-1 rounded text-sm"
                  onClick={() => setShowLoadDialog(true)}
                >
                  Load Build
                </button>
                <button
                  className="bg-red-600 hover:bg-red-500 text-white px-2 py-1 rounded text-sm"
                  onClick={resetCharacter}
                >
                  Reset Char
                </button>
              </div>

                <button
                  className="bg-orange-600 hover:bg-orange-500 text-white px-2 py-1 rounded text-sm"
                  onClick={() => setShowShareDialog(true)}
                >
                  Share Build
                </button>
            </div>

            <SkillTree
              profession={selectedProfession}
              selectedSkillBoxes={selectedSkillBoxes}
              onSelectSkillBox={handleSkillBoxSelection}
            />
          </div>
        </div>

        {/* Right Sidebar - Modifiers, Commands, etc */}
        <div className="lg:col-span-3">
          <div className="space-y-4">
            <CharacterStatsSummary
              species={selectedSpecies}
              skillModifiers={skillModifiers}
              usedSkillPoints={usedSkillPoints}
              maxSkillPoints={MAX_SKILL_POINTS}
              selectedSkillBoxesCount={selectedSkillBoxes.length}
              professionName={selectedProfession.name}
            />

            <SkillModifiers modifiers={skillModifiers} />

            <Commands
              commands={earnedCommands}
              certifications={earnedCertifications}
            />
          </div>
        </div>
      </div>

      <div className="mt-8 bg-[rgba(13,20,40,0.6)] p-6 rounded-md border border-[#1a1a4a]">
        <h3 className="text-white font-semibold text-lg mb-4">About the Character Builder</h3>
        <p className="text-gray-300 mb-4">
          This tool allows you to plan your Star Wars Galaxies character's profession and skill progression.
          Select skill boxes to simulate your character's development and see what abilities, modifiers, and
          certifications you'll earn along the way.
        </p>
        <p className="text-gray-300">
          Remember that in SWG Infinity, you can have up to 250 skill points across all professions,
          allowing for unique character customization and hybrid builds. Save your builds for later reference!
        </p>
      </div>

      {/* Save Template Dialog */}
      {showSaveDialog && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-[#068ba3] p-6 rounded-md w-96">
            <h3 className="text-white font-bold text-lg mb-4">Save Character Build</h3>
            <input
              type="text"
              value={templateName}
              onChange={(e) => setTemplateName(e.target.value)}
              placeholder="Enter build name..."
              className="w-full p-2 rounded bg-[#04444a] text-[#b8dce3] border border-[#056473] mb-4"
              autoFocus
            />
            <div className="flex justify-end gap-2">
              <button
                className="bg-gray-600 hover:bg-gray-500 text-white px-4 py-2 rounded"
                onClick={() => {
                  setShowSaveDialog(false);
                  setTemplateName("");
                }}
              >
                Cancel
              </button>
              <button
                className="bg-green-600 hover:bg-green-500 text-white px-4 py-2 rounded"
                onClick={() => saveTemplate(templateName)}
                disabled={!templateName.trim()}
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Load Template Dialog */}
      {showLoadDialog && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-[#068ba3] p-6 rounded-md w-96 max-h-[80vh] overflow-y-auto">
            <h3 className="text-white font-bold text-lg mb-4">Load Character Build</h3>
            {savedTemplates.length === 0 ? (
              <p className="text-[#b8dce3] text-center py-4">No saved builds found</p>
            ) : (
              <div className="space-y-2 mb-4">
                {savedTemplates.map((template) => (
                  <div key={template.id} className="bg-[#04444a] p-3 rounded border border-[#056473]">
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <h4 className="text-[#b8dce3] font-medium">{template.name}</h4>
                        <p className="text-[#b8dce3] text-sm opacity-75">
                          {professionData.find(p => p.id === template.professionId)?.name} • {speciesData.find(s => s.id === template.speciesId)?.name}
                        </p>
                        <p className="text-[#b8dce3] text-xs opacity-50">
                          {template.usedSkillPoints}/250 SP • {new Date(template.createdAt).toLocaleDateString()}
                        </p>
                      </div>
                      <div className="flex gap-1 ml-2">
                        <button
                          className="bg-blue-600 hover:bg-blue-500 text-white px-2 py-1 rounded text-xs"
                          onClick={() => loadTemplate(template)}
                        >
                          Load
                        </button>
                        <button
                          className="bg-red-600 hover:bg-red-500 text-white px-2 py-1 rounded text-xs"
                          onClick={() => deleteTemplate(template.id)}
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
            <div className="flex justify-end">
              <button
                className="bg-gray-600 hover:bg-gray-500 text-white px-4 py-2 rounded"
                onClick={() => setShowLoadDialog(false)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Share Build Dialog */}
      {showShareDialog && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-[#068ba3] p-6 rounded-md w-96">
            <h3 className="text-white font-bold text-lg mb-4">Share Character Build</h3>
            <p className="text-[#b8dce3] text-sm mb-4">
              Share your character build with other players by copying the build code below.
            </p>

            <div className="space-y-3">
              <button
                className="w-full bg-green-600 hover:bg-green-500 text-white py-2 px-3 rounded font-medium"
                onClick={handleGenerateShare}
              >
                Generate Build Code
              </button>

              {shareData && (
                <div className="space-y-2">
                  <textarea
                    className="w-full bg-[#04444a] border border-[#056473] text-[#b8dce3] rounded p-2 text-xs h-20 resize-none"
                    value={shareData}
                    readOnly
                    onClick={(e) => e.currentTarget.select()}
                  />
                  <button
                    className={`w-full py-2 px-3 rounded font-medium ${
                      copySuccess
                        ? 'bg-green-600 text-white'
                        : 'bg-blue-600 hover:bg-blue-500 text-white'
                    }`}
                    onClick={handleCopyShare}
                  >
                    {copySuccess ? 'Copied!' : 'Copy Build Code'}
                  </button>
                </div>
              )}
            </div>

            <div className="flex justify-end gap-2 mt-4">
              <button
                className="bg-gray-600 hover:bg-gray-500 text-white px-4 py-2 rounded"
                onClick={() => {
                  setShowShareDialog(false);
                  setShareData('');
                  setCopySuccess(false);
                }}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Profession Template Selector */}
      {showTemplateSelector && (
        <TemplateSelector
          onSelectTemplate={loadProfessionTemplate}
          onClose={() => setShowTemplateSelector(false)}
        />
      )}
    </PageLayout>
  );
}
