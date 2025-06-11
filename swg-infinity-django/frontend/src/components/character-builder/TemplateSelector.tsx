"use client";

import { useState } from "react";
import { Book, Users, Shield, Sword, Hammer, Music, Zap, Star, Info, CheckCircle } from "lucide-react";
import {
  professionTemplates,
  getTemplatesByCategory,
  getTemplateCategories,
  type ProfessionTemplate
} from "./data/professionTemplates";

interface TemplateSelectorProps {
  onSelectTemplate: (template: ProfessionTemplate) => void;
  onClose: () => void;
}

export function TemplateSelector({ onSelectTemplate, onClose }: TemplateSelectorProps) {
  const [selectedCategory, setSelectedCategory] = useState<ProfessionTemplate["category"] | "All">("All");
  const [selectedTemplate, setSelectedTemplate] = useState<ProfessionTemplate | null>(null);
  const [showDetails, setShowDetails] = useState(false);

  // Get category icon
  const getCategoryIcon = (category: ProfessionTemplate["category"]) => {
    switch (category) {
      case "Tank": return <Shield className="h-4 w-4" />;
      case "DPS": return <Sword className="h-4 w-4" />;
      case "Crafter": return <Hammer className="h-4 w-4" />;
      case "Support": return <Users className="h-4 w-4" />;
      case "Hybrid": return <Zap className="h-4 w-4" />;
      case "Entertainer": return <Music className="h-4 w-4" />;
      default: return <Star className="h-4 w-4" />;
    }
  };

  // Get difficulty color
  const getDifficultyColor = (difficulty: ProfessionTemplate["difficulty"]) => {
    switch (difficulty) {
      case "Beginner": return "text-green-400";
      case "Intermediate": return "text-yellow-400";
      case "Advanced": return "text-red-400";
      default: return "text-gray-400";
    }
  };

  // Get category color
  const getCategoryColor = (category: ProfessionTemplate["category"]) => {
    switch (category) {
      case "Tank": return "border-blue-500 bg-blue-500/10";
      case "DPS": return "border-red-500 bg-red-500/10";
      case "Crafter": return "border-yellow-500 bg-yellow-500/10";
      case "Support": return "border-green-500 bg-green-500/10";
      case "Hybrid": return "border-purple-500 bg-purple-500/10";
      case "Entertainer": return "border-pink-500 bg-pink-500/10";
      default: return "border-gray-500 bg-gray-500/10";
    }
  };

  // Filter templates
  const filteredTemplates = selectedCategory === "All"
    ? professionTemplates
    : getTemplatesByCategory(selectedCategory);

  const handleTemplateSelect = (template: ProfessionTemplate) => {
    setSelectedTemplate(template);
    setShowDetails(true);
  };

  const handleConfirmSelection = () => {
    if (selectedTemplate) {
      onSelectTemplate(selectedTemplate);
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-[#068ba3] rounded-md w-full max-w-6xl max-h-[90vh] overflow-hidden flex flex-col">
        {/* Header */}
        <div className="p-4 border-b border-[#056473]">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Book className="h-6 w-6 mr-2 text-white" />
              <h2 className="text-xl font-bold text-white">Character Build Templates</h2>
            </div>
            <button
              onClick={onClose}
              className="text-[#b8dce3] hover:text-white text-2xl font-bold"
            >
              ×
            </button>
          </div>
          <p className="text-[#b8dce3] text-sm mt-1">
            Choose a pre-designed character build to get started quickly
          </p>
        </div>

        <div className="flex flex-1 overflow-hidden">
          {/* Category Filter Sidebar */}
          <div className="w-48 bg-[#04444a] p-4 border-r border-[#056473]">
            <h3 className="text-[#b8dce3] font-medium mb-3">Categories</h3>
            <div className="space-y-1">
              <button
                onClick={() => setSelectedCategory("All")}
                className={`w-full text-left py-2 px-3 rounded text-sm transition-colors flex items-center ${
                  selectedCategory === "All"
                    ? 'bg-[#075365] text-white'
                    : 'text-[#b8dce3] hover:bg-[#063a4a]'
                }`}
              >
                <Star className="h-4 w-4 mr-2" />
                All ({professionTemplates.length})
              </button>
              {getTemplateCategories().map(category => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`w-full text-left py-2 px-3 rounded text-sm transition-colors flex items-center ${
                    selectedCategory === category
                      ? 'bg-[#075365] text-white'
                      : 'text-[#b8dce3] hover:bg-[#063a4a]'
                  }`}
                >
                  {getCategoryIcon(category)}
                  <span className="ml-2">{category} ({getTemplatesByCategory(category).length})</span>
                </button>
              ))}
            </div>
          </div>

          {/* Templates List */}
          <div className="flex-1 p-4 overflow-y-auto">
            {!showDetails ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {filteredTemplates.map(template => (
                  <div
                    key={template.id}
                    className={`border rounded-md p-4 cursor-pointer transition-all hover:border-[#4ea4b1] ${getCategoryColor(template.category)}`}
                    onClick={() => handleTemplateSelect(template)}
                  >
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex items-center">
                        {getCategoryIcon(template.category)}
                        <h3 className="text-white font-medium ml-2">{template.name}</h3>
                      </div>
                      <span className={`text-xs font-medium ${getDifficultyColor(template.difficulty)}`}>
                        {template.difficulty}
                      </span>
                    </div>

                    <p className="text-[#b8dce3] text-sm mb-3">{template.description}</p>

                    <div className="flex items-center justify-between text-xs text-[#6dd9eb]">
                      <span>{template.totalSkillPoints}/250 SP</span>
                      <span className="capitalize">{template.category}</span>
                    </div>

                    <div className="mt-2 text-[#b8dce3] text-xs">
                      <strong>Play Style:</strong> {template.playStyle}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              // Template Details View
              selectedTemplate && (
                <div className="max-w-4xl mx-auto">
                  <div className="mb-4">
                    <button
                      onClick={() => setShowDetails(false)}
                      className="text-[#b8dce3] hover:text-white text-sm mb-2"
                    >
                      ← Back to Templates
                    </button>
                  </div>

                  <div className="bg-[#04444a] rounded-md p-6">
                    {/* Template Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <div className="flex items-center mb-2">
                          {getCategoryIcon(selectedTemplate.category)}
                          <h2 className="text-2xl font-bold text-white ml-2">{selectedTemplate.name}</h2>
                          <span className={`ml-3 text-sm font-medium ${getDifficultyColor(selectedTemplate.difficulty)}`}>
                            {selectedTemplate.difficulty}
                          </span>
                        </div>
                        <p className="text-[#b8dce3] mb-2">{selectedTemplate.description}</p>
                        <div className="flex items-center text-sm text-[#6dd9eb]">
                          <span className="mr-4">{selectedTemplate.totalSkillPoints}/250 Skill Points</span>
                          <span className="capitalize">{selectedTemplate.category} Build</span>
                        </div>
                      </div>
                    </div>

                    {/* Play Style */}
                    <div className="mb-4">
                      <h3 className="text-white font-medium mb-2">Play Style</h3>
                      <p className="text-[#b8dce3] text-sm">{selectedTemplate.playStyle}</p>
                    </div>

                    {/* Recommended Species */}
                    {selectedTemplate.recommendedSpecies && (
                      <div className="mb-4">
                        <h3 className="text-white font-medium mb-2">Recommended Species</h3>
                        <div className="flex flex-wrap gap-2">
                          {selectedTemplate.recommendedSpecies.map(species => (
                            <span key={species} className="bg-[#063a4a] text-[#b8dce3] px-2 py-1 rounded text-xs capitalize">
                              {species.replace('_', ' ')}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Strengths and Weaknesses */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                      <div>
                        <h3 className="text-green-400 font-medium mb-2">Strengths</h3>
                        <ul className="text-[#b8dce3] text-sm space-y-1">
                          {selectedTemplate.strengths.map((strength) => (
                            <li key={strength} className="flex items-start">
                              <CheckCircle className="h-3 w-3 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                              {strength}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h3 className="text-red-400 font-medium mb-2">Weaknesses</h3>
                        <ul className="text-[#b8dce3] text-sm space-y-1">
                          {selectedTemplate.weaknesses.map((weakness) => (
                            <li key={weakness} className="flex items-start">
                              <Info className="h-3 w-3 text-red-400 mr-2 mt-0.5 flex-shrink-0" />
                              {weakness}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Tips */}
                    <div className="mb-6">
                      <h3 className="text-yellow-400 font-medium mb-2">Tips for Success</h3>
                      <ul className="text-[#b8dce3] text-sm space-y-1">
                        {selectedTemplate.tips.map((tip) => (
                          <li key={tip} className="flex items-start">
                            <Star className="h-3 w-3 text-yellow-400 mr-2 mt-0.5 flex-shrink-0" />
                            {tip}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex justify-end gap-3">
                      <button
                        onClick={() => setShowDetails(false)}
                        className="bg-gray-600 hover:bg-gray-500 text-white px-4 py-2 rounded"
                      >
                        Back
                      </button>
                      <button
                        onClick={handleConfirmSelection}
                        className="bg-green-600 hover:bg-green-500 text-white px-4 py-2 rounded"
                      >
                        Use This Template
                      </button>
                    </div>
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
