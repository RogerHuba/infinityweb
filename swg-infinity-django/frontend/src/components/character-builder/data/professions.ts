import type { Profession } from "../CharacterBuilder";
import { getSkillPoints, getExperienceCost, getCommands, getSkillModifiers } from "./skillMapping";

// Helper function to create a skill box with CONSTANTS data
function createSkillBox(id: string, name: string, prerequisites: string[] = []) {
  const skillPoints = getSkillPoints(id);
  const xpCost = getExperienceCost(id);
  const commands = getCommands(id);
  const skillModifiers = getSkillModifiers(id);

  return {
    id,
    name,
    skillPoints,
    xpCost,
    prerequisites,
    grants: {
      commands,
      modifiers: skillModifiers
    }
  };
}

// Updated profession data using CONSTANTS.js values
export const professionData: Profession[] = [
  {
    id: "brawler",
    name: "Brawler",
    description: "A profession focused on hand-to-hand combat skills.",
    type: "basic",
    noviceBox: createSkillBox("brawler_novice", "Novice Brawler"),
    masterBox: createSkillBox("brawler_master", "Master Brawler", [
      "brawler_unarmed_4",
      "brawler_1hand_4",
      "brawler_2hand_4",
      "brawler_polearm_4"
    ]),
    skillTrees: {
      unarmed: {
        name: "Unarmed Combat",
        boxes: [
          createSkillBox("brawler_unarmed_1", "Unarmed I: Street Fighting", ["brawler_novice"]),
          createSkillBox("brawler_unarmed_2", "Unarmed II: Stunning Attack", ["brawler_unarmed_1"]),
          createSkillBox("brawler_unarmed_3", "Unarmed III: Blinding Attack", ["brawler_unarmed_2"]),
          createSkillBox("brawler_unarmed_4", "Unarmed IV: Teras Kasi Fundamentals", ["brawler_unarmed_3"])
        ]
      },
      oneHanded: {
        name: "One-Handed Weapons",
        boxes: [
          createSkillBox("brawler_1hand_1", "One-Handed I: Sword Technique", ["brawler_novice"]),
          createSkillBox("brawler_1hand_2", "One-Handed II: Lethal Strikes", ["brawler_1hand_1"]),
          createSkillBox("brawler_1hand_3", "One-Handed III: Blunt Edge Strikes", ["brawler_1hand_2"]),
          createSkillBox("brawler_1hand_4", "One-Handed IV: Dance of Blades", ["brawler_1hand_3"])
        ]
      },
      twoHanded: {
        name: "Two-Handed Weapons",
        boxes: [
          createSkillBox("brawler_2hand_1", "Two-Handed I: Weighted Stances", ["brawler_novice"]),
          createSkillBox("brawler_2hand_2", "Two-Handed II: Strength & Precision", ["brawler_2hand_1"]),
          createSkillBox("brawler_2hand_3", "Two-Handed III: Sweeps", ["brawler_2hand_2"]),
          createSkillBox("brawler_2hand_4", "Two-Handed IV: Fatal Finesse", ["brawler_2hand_3"])
        ]
      },
      polearm: {
        name: "Polearm Weapons",
        boxes: [
          createSkillBox("brawler_polearm_1", "Polearms I: Long Hafted Weaponry", ["brawler_novice"]),
          createSkillBox("brawler_polearm_2", "Polearms II: Form & Balance", ["brawler_polearm_1"]),
          createSkillBox("brawler_polearm_3", "Polearms III: Power Strikes", ["brawler_polearm_2"]),
          createSkillBox("brawler_polearm_4", "Polearms IV: Overwhelming Assault", ["brawler_polearm_3"])
        ]
      }
    }
  },
  {
    id: "marksman",
    name: "Marksman",
    description: "A profession focused on ranged combat skills.",
    type: "basic",
    noviceBox: createSkillBox("marksman_novice", "Novice Marksman"),
    masterBox: createSkillBox("marksman_master", "Master Marksman", [
      "marksman_pistol_4",
      "marksman_rifle_4",
      "marksman_carbine_4",
      "marksman_support_4"
    ]),
    skillTrees: {
      pistol: {
        name: "Pistol Combat",
        boxes: [
          createSkillBox("marksman_pistol_1", "Pistols I: Short Range Combat", ["marksman_novice"]),
          createSkillBox("marksman_pistol_2", "Pistols II: Light Sidearms", ["marksman_pistol_1"]),
          createSkillBox("marksman_pistol_3", "Pistols III: Medium Sidearms", ["marksman_pistol_2"]),
          createSkillBox("marksman_pistol_4", "Pistols IV: Heavy Sidearms", ["marksman_pistol_3"])
        ]
      },
      rifle: {
        name: "Rifle Combat",
        boxes: [
          createSkillBox("marksman_rifle_1", "Rifles I: Long Range Combat", ["marksman_novice"]),
          createSkillBox("marksman_rifle_2", "Rifles II: Concealed Firing", ["marksman_rifle_1"]),
          createSkillBox("marksman_rifle_3", "Rifles III: Improved Aim", ["marksman_rifle_2"]),
          createSkillBox("marksman_rifle_4", "Rifles IV: Sniping", ["marksman_rifle_3"])
        ]
      },
      carbine: {
        name: "Carbine Combat",
        boxes: [
          createSkillBox("marksman_carbine_1", "Carbines I: Medium Range Combat", ["marksman_novice"]),
          createSkillBox("marksman_carbine_2", "Carbines II: Full Auto Firing", ["marksman_carbine_1"]),
          createSkillBox("marksman_carbine_3", "Carbines III: Improved Control", ["marksman_carbine_2"]),
          createSkillBox("marksman_carbine_4", "Carbines IV: Called Shots", ["marksman_carbine_3"])
        ]
      },
      support: {
        name: "Ranged Support",
        boxes: [
          createSkillBox("marksman_support_1", "Ranged Support I: Aim & Threaten", ["marksman_novice"]),
          createSkillBox("marksman_support_2", "Ranged Support II: Maneuvers", ["marksman_support_1"]),
          createSkillBox("marksman_support_3", "Ranged Support III: Warning Shot", ["marksman_support_2"]),
          createSkillBox("marksman_support_4", "Ranged Support IV: Suppression", ["marksman_support_3"])
        ]
      }
    }
  },
  {
    id: "medic",
    name: "Medic",
    description: "A profession focused on healing and medical skills.",
    type: "basic",
    noviceBox: createSkillBox("medic_novice", "Novice Medic"),
    masterBox: createSkillBox("medic_master", "Master Medic", [
      "medic_injury_4",
      "medic_injury_speed_4",
      "medic_ability_4",
      "medic_crafting_4"
    ]),
    skillTrees: {
      injury: {
        name: "Injury Treatment",
        boxes: [
          createSkillBox("medic_injury_1", "Injury Treatment I", ["medic_novice"]),
          createSkillBox("medic_injury_2", "Injury Treatment II", ["medic_injury_1"]),
          createSkillBox("medic_injury_3", "Injury Treatment III", ["medic_injury_2"]),
          createSkillBox("medic_injury_4", "Field Stabilizer", ["medic_injury_3"])
        ]
      },
      injurySpeed: {
        name: "Treatment Speed",
        boxes: [
          createSkillBox("medic_injury_speed_1", "Treatment Speed I", ["medic_novice"]),
          createSkillBox("medic_injury_speed_2", "Treatment Speed II", ["medic_injury_speed_1"]),
          createSkillBox("medic_injury_speed_3", "Treatment Speed III", ["medic_injury_speed_2"]),
          createSkillBox("medic_injury_speed_4", "Emergency Technician", ["medic_injury_speed_3"])
        ]
      },
      ability: {
        name: "Medical Ability",
        boxes: [
          createSkillBox("medic_ability_1", "Medical Ability I", ["medic_novice"]),
          createSkillBox("medic_ability_2", "Medical Ability II", ["medic_ability_1"]),
          createSkillBox("medic_ability_3", "Medical Ability III", ["medic_ability_2"]),
          createSkillBox("medic_ability_4", "First Responder", ["medic_ability_3"])
        ]
      },
      crafting: {
        name: "Medicine Crafting",
        boxes: [
          createSkillBox("medic_crafting_1", "Medicine Crafting I", ["medic_novice"]),
          createSkillBox("medic_crafting_2", "Medicine Crafting II", ["medic_crafting_1"]),
          createSkillBox("medic_crafting_3", "Medicine Crafting III", ["medic_crafting_2"]),
          createSkillBox("medic_crafting_4", "Stimpack Chemist", ["medic_crafting_3"])
        ]
      }
    }
  },
  {
    id: "artisan",
    name: "Artisan",
    description: "A profession focused on crafting and resource gathering.",
    type: "basic",
    noviceBox: createSkillBox("artisan_novice", "Novice Artisan"),
    masterBox: createSkillBox("artisan_master", "Master Artisan", [
      "artisan_engineering_4",
      "artisan_domestic_4",
      "artisan_business_4",
      "artisan_survey_4"
    ]),
    skillTrees: {
      engineering: {
        name: "Engineering",
        boxes: [
          createSkillBox("artisan_engineering_1", "Engineering I", ["artisan_novice"]),
          createSkillBox("artisan_engineering_2", "Engineering II", ["artisan_engineering_1"]),
          createSkillBox("artisan_engineering_3", "Engineering III", ["artisan_engineering_2"]),
          createSkillBox("artisan_engineering_4", "Gadgeteer", ["artisan_engineering_3"])
        ]
      },
      domestic: {
        name: "Domestic Arts",
        boxes: [
          createSkillBox("artisan_domestic_1", "Domestic Arts I", ["artisan_novice"]),
          createSkillBox("artisan_domestic_2", "Domestic Arts II", ["artisan_domestic_1"]),
          createSkillBox("artisan_domestic_3", "Domestic Arts III", ["artisan_domestic_2"]),
          createSkillBox("artisan_domestic_4", "Interior Decorator", ["artisan_domestic_3"])
        ]
      },
      business: {
        name: "Business",
        boxes: [
          createSkillBox("artisan_business_1", "Business I", ["artisan_novice"]),
          createSkillBox("artisan_business_2", "Business II", ["artisan_business_1"]),
          createSkillBox("artisan_business_3", "Business III", ["artisan_business_2"]),
          createSkillBox("artisan_business_4", "Entrepreneur", ["artisan_business_3"])
        ]
      },
      survey: {
        name: "Surveying",
        boxes: [
          createSkillBox("artisan_survey_1", "Surveying I", ["artisan_novice"]),
          createSkillBox("artisan_survey_2", "Surveying II", ["artisan_survey_1"]),
          createSkillBox("artisan_survey_3", "Surveying III", ["artisan_survey_2"]),
          createSkillBox("artisan_survey_4", "Prospector", ["artisan_survey_3"])
        ]
      }
    }
  },
  // ... other professions remain unchanged and should be filled in as per the rest of the original file ...
];
