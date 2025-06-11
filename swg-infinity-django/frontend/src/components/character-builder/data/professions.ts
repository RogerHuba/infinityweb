import type { Profession } from "../CharacterBuilder";
import { getSkillPoints, getExperienceCost, getCommands, getSkillModifiers } from "./skillMapping";

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
  {
    id: "entertainer",
    name: "Entertainer",
    description: "A profession focused on music, dancing, and entertainment.",
    type: "basic",
    noviceBox: createSkillBox("entertainer_novice", "Novice Entertainer"),
    masterBox: createSkillBox("entertainer_master", "Master Entertainer", [
      "entertainer_music_4",
      "entertainer_dance_4",
      "entertainer_healing_4",
      "entertainer_technique_4"
    ]),
    skillTrees: {
      music: {
        name: "Music",
        boxes: [
          createSkillBox("entertainer_music_1", "Music I: Basic Rhythm", ["entertainer_novice"]),
          createSkillBox("entertainer_music_2", "Music II: Melodic Composition", ["entertainer_music_1"]),
          createSkillBox("entertainer_music_3", "Music III: Harmonic Mastery", ["entertainer_music_2"]),
          createSkillBox("entertainer_music_4", "Music IV: Virtuoso Performance", ["entertainer_music_3"])
        ]
      },
      dance: {
        name: "Dance",
        boxes: [
          createSkillBox("entertainer_dance_1", "Dance I: Basic Steps", ["entertainer_novice"]),
          createSkillBox("entertainer_dance_2", "Dance II: Graceful Movement", ["entertainer_dance_1"]),
          createSkillBox("entertainer_dance_3", "Dance III: Exotic Techniques", ["entertainer_dance_2"]),
          createSkillBox("entertainer_dance_4", "Dance IV: Master Choreographer", ["entertainer_dance_3"])
        ]
      },
      healing: {
        name: "Healing",
        boxes: [
          createSkillBox("entertainer_healing_1", "Healing I: Wound Treatment", ["entertainer_novice"]),
          createSkillBox("entertainer_healing_2", "Healing II: Mind Healing", ["entertainer_healing_1"]),
          createSkillBox("entertainer_healing_3", "Healing III: Shock Treatment", ["entertainer_healing_2"]),
          createSkillBox("entertainer_healing_4", "Healing IV: Master Healer", ["entertainer_healing_3"])
        ]
      },
      technique: {
        name: "Technique",
        boxes: [
          createSkillBox("entertainer_technique_1", "Technique I: Inspiration", ["entertainer_novice"]),
          createSkillBox("entertainer_technique_2", "Technique II: Flourish", ["entertainer_technique_1"]),
          createSkillBox("entertainer_technique_3", "Technique III: Dazzle", ["entertainer_technique_2"]),
          createSkillBox("entertainer_technique_4", "Technique IV: Master Entertainer", ["entertainer_technique_3"])
        ]
      }
    }
  },
  {
    id: "scout",
    name: "Scout",
    description: "A profession focused on wilderness survival and exploration.",
    type: "basic",
    noviceBox: createSkillBox("scout_novice", "Novice Scout"),
    masterBox: createSkillBox("scout_master", "Master Scout", [
      "scout_exploration_4",
      "scout_hunting_4",
      "scout_trapping_4",
      "scout_foraging_4"
    ]),
    skillTrees: {
      exploration: {
        name: "Exploration",
        boxes: [
          createSkillBox("scout_exploration_1", "Exploration I: Terrain Navigation", ["scout_novice"]),
          createSkillBox("scout_exploration_2", "Exploration II: Advanced Navigation", ["scout_exploration_1"]),
          createSkillBox("scout_exploration_3", "Exploration III: Pathfinding", ["scout_exploration_2"]),
          createSkillBox("scout_exploration_4", "Exploration IV: Master Explorer", ["scout_exploration_3"])
        ]
      },
      hunting: {
        name: "Hunting",
        boxes: [
          createSkillBox("scout_hunting_1", "Hunting I: Creature Knowledge", ["scout_novice"]),
          createSkillBox("scout_hunting_2", "Hunting II: Tracking", ["scout_hunting_1"]),
          createSkillBox("scout_hunting_3", "Hunting III: Creature Harvesting", ["scout_hunting_2"]),
          createSkillBox("scout_hunting_4", "Hunting IV: Master Hunter", ["scout_hunting_3"])
        ]
      },
      trapping: {
        name: "Trapping",
        boxes: [
          createSkillBox("scout_trapping_1", "Trapping I: Basic Traps", ["scout_novice"]),
          createSkillBox("scout_trapping_2", "Trapping II: Improved Traps", ["scout_trapping_1"]),
          createSkillBox("scout_trapping_3", "Trapping III: Advanced Traps", ["scout_trapping_2"]),
          createSkillBox("scout_trapping_4", "Trapping IV: Master Trapper", ["scout_trapping_3"])
        ]
      },
      foraging: {
        name: "Foraging",
        boxes: [
          createSkillBox("scout_foraging_1", "Foraging I: Wilderness Survival", ["scout_novice"]),
          createSkillBox("scout_foraging_2", "Foraging II: Camping", ["scout_foraging_1"]),
          createSkillBox("scout_foraging_3", "Foraging III: Ranger Knowledge", ["scout_foraging_2"]),
          createSkillBox("scout_foraging_4", "Foraging IV: Master Forager", ["scout_foraging_3"])
        ]
      }
    }
  },
  {
    id: "politician",
    name: "Politician",
    description: "A profession focused on leadership and civic responsibilities.",
    type: "basic",
    noviceBox: createSkillBox("politician_novice", "Novice Politician"),
    masterBox: createSkillBox("politician_master", "Master Politician", [
      "politician_civic_4",
      "politician_fiscal_4",
      "politician_martial_4",
      "politician_urban_4"
    ]),
    skillTrees: {
      civic: {
        name: "Civic",
        boxes: [
          createSkillBox("politician_civic_1", "Civic I: Citizenship", ["politician_novice"]),
          createSkillBox("politician_civic_2", "Civic II: Bureaucracy", ["politician_civic_1"]),
          createSkillBox("politician_civic_3", "Civic III: Diplomacy", ["politician_civic_2"]),
          createSkillBox("politician_civic_4", "Civic IV: Statecraft", ["politician_civic_3"])
        ]
      },
      fiscal: {
        name: "Fiscal",
        boxes: [
          createSkillBox("politician_fiscal_1", "Fiscal I: City Maintenance", ["politician_novice"]),
          createSkillBox("politician_fiscal_2", "Fiscal II: Treasury", ["politician_fiscal_1"]),
          createSkillBox("politician_fiscal_3", "Fiscal III: Economic Policy", ["politician_fiscal_2"]),
          createSkillBox("politician_fiscal_4", "Fiscal IV: Master Economist", ["politician_fiscal_3"])
        ]
      },
      martial: {
        name: "Martial",
        boxes: [
          createSkillBox("politician_martial_1", "Martial I: Basic Defense", ["politician_novice"]),
          createSkillBox("politician_martial_2", "Martial II: City Defense", ["politician_martial_1"]),
          createSkillBox("politician_martial_3", "Martial III: Military Strategy", ["politician_martial_2"]),
          createSkillBox("politician_martial_4", "Martial IV: War Leader", ["politician_martial_3"])
        ]
      },
      urban: {
        name: "Urban",
        boxes: [
          createSkillBox("politician_urban_1", "Urban I: City Planning", ["politician_novice"]),
          createSkillBox("politician_urban_2", "Urban II: Zoning", ["politician_urban_1"]),
          createSkillBox("politician_urban_3", "Urban III: Infrastructure", ["politician_urban_2"]),
          createSkillBox("politician_urban_4", "Urban IV: Master Architect", ["politician_urban_3"])
        ]
      }
    }
  },

  // Elite Professions - Combat
  {
    id: "fencer",
    name: "Fencer",
    description: "A master of one-handed weapon combat with specialized swordsmanship techniques.",
    type: "elite",
    prerequisites: ["brawler_1hand_4"], // Requires Master of One-Handed IV
    noviceBox: createSkillBox("fencer_novice", "Novice Fencer"),
    masterBox: createSkillBox("fencer_master", "Master Fencer", [
      "fencer_accuracy_4",
      "fencer_speed_4",
      "fencer_ability_4",
      "fencer_support_4"
    ]),
    skillTrees: {
      accuracy: {
        name: "Fencing Accuracy",
        boxes: [
          createSkillBox("fencer_accuracy_1", "Accuracy I: Basic Precision", ["fencer_novice"]),
          createSkillBox("fencer_accuracy_2", "Accuracy II: Improved Accuracy", ["fencer_accuracy_1"]),
          createSkillBox("fencer_accuracy_3", "Accuracy III: Master Precision", ["fencer_accuracy_2"]),
          createSkillBox("fencer_accuracy_4", "Accuracy IV: Perfect Strike", ["fencer_accuracy_3"])
        ]
      },
      speed: {
        name: "Fencing Speed",
        boxes: [
          createSkillBox("fencer_speed_1", "Speed I: Quick Strikes", ["fencer_novice"]),
          createSkillBox("fencer_speed_2", "Speed II: Lightning Attacks", ["fencer_speed_1"]),
          createSkillBox("fencer_speed_3", "Speed III: Blur of Steel", ["fencer_speed_2"]),
          createSkillBox("fencer_speed_4", "Speed IV: Flashing Blade", ["fencer_speed_3"])
        ]
      },
      ability: {
        name: "Fencing Abilities",
        boxes: [
          createSkillBox("fencer_ability_1", "Ability I: Basic Techniques", ["fencer_novice"]),
          createSkillBox("fencer_ability_2", "Ability II: Advanced Techniques", ["fencer_ability_1"]),
          createSkillBox("fencer_ability_3", "Ability III: Master Techniques", ["fencer_ability_2"]),
          createSkillBox("fencer_ability_4", "Ability IV: Sword Master", ["fencer_ability_3"])
        ]
      },
      support: {
        name: "Combat Support",
        boxes: [
          createSkillBox("fencer_support_1", "Support I: Combat Awareness", ["fencer_novice"]),
          createSkillBox("fencer_support_2", "Support II: Tactical Combat", ["fencer_support_1"]),
          createSkillBox("fencer_support_3", "Support III: Battle Leadership", ["fencer_support_2"]),
          createSkillBox("fencer_support_4", "Support IV: Combat Mastery", ["fencer_support_3"])
        ]
      }
    }
  },

  {
    id: "swordsman",
    name: "Swordsman",
    description: "A specialist in two-handed weapon combat with devastating attack techniques.",
    type: "elite",
    prerequisites: ["brawler_2hand_4"], // Requires Master of Two-Handed IV
    noviceBox: createSkillBox("swordsman_novice", "Novice Swordsman"),
    masterBox: createSkillBox("swordsman_master", "Master Swordsman", [
      "swordsman_accuracy_4",
      "swordsman_speed_4",
      "swordsman_ability_4",
      "swordsman_support_4"
    ]),
    skillTrees: {
      accuracy: {
        name: "Sword Accuracy",
        boxes: [
          createSkillBox("swordsman_accuracy_1", "Accuracy I: Precise Strikes", ["swordsman_novice"]),
          createSkillBox("swordsman_accuracy_2", "Accuracy II: Focused Blows", ["swordsman_accuracy_1"]),
          createSkillBox("swordsman_accuracy_3", "Accuracy III: Perfect Timing", ["swordsman_accuracy_2"]),
          createSkillBox("swordsman_accuracy_4", "Accuracy IV: Flawless Execution", ["swordsman_accuracy_3"])
        ]
      },
      speed: {
        name: "Sword Speed",
        boxes: [
          createSkillBox("swordsman_speed_1", "Speed I: Swift Strikes", ["swordsman_novice"]),
          createSkillBox("swordsman_speed_2", "Speed II: Rapid Assault", ["swordsman_speed_1"]),
          createSkillBox("swordsman_speed_3", "Speed III: Whirling Blade", ["swordsman_speed_2"]),
          createSkillBox("swordsman_speed_4", "Speed IV: Unstoppable Force", ["swordsman_speed_3"])
        ]
      },
      ability: {
        name: "Sword Abilities",
        boxes: [
          createSkillBox("swordsman_ability_1", "Ability I: Power Strikes", ["swordsman_novice"]),
          createSkillBox("swordsman_ability_2", "Ability II: Devastating Blows", ["swordsman_ability_1"]),
          createSkillBox("swordsman_ability_3", "Ability III: Crushing Attacks", ["swordsman_ability_2"]),
          createSkillBox("swordsman_ability_4", "Ability IV: Legendary Strikes", ["swordsman_ability_3"])
        ]
      },
      support: {
        name: "Combat Support",
        boxes: [
          createSkillBox("swordsman_support_1", "Support I: Battle Awareness", ["swordsman_novice"]),
          createSkillBox("swordsman_support_2", "Support II: Combat Focus", ["swordsman_support_1"]),
          createSkillBox("swordsman_support_3", "Support III: War Mastery", ["swordsman_support_2"]),
          createSkillBox("swordsman_support_4", "Support IV: Sword Saint", ["swordsman_support_3"])
        ]
      }
    }
  },

  {
    id: "pikeman",
    name: "Pikeman",
    description: "A master of polearm weapons with specialized reach and area attack abilities.",
    type: "elite",
    prerequisites: ["brawler_polearm_4"], // Requires Master of Polearms IV
    noviceBox: createSkillBox("pikeman_novice", "Novice Pikeman"),
    masterBox: createSkillBox("pikeman_master", "Master Pikeman", [
      "pikeman_accuracy_4",
      "pikeman_speed_4",
      "pikeman_ability_4",
      "pikeman_support_4"
    ]),
    skillTrees: {
      accuracy: {
        name: "Polearm Accuracy",
        boxes: [
          createSkillBox("pikeman_accuracy_1", "Accuracy I: Basic Precision", ["pikeman_novice"]),
          createSkillBox("pikeman_accuracy_2", "Accuracy II: Improved Accuracy", ["pikeman_accuracy_1"]),
          createSkillBox("pikeman_accuracy_3", "Accuracy III: Master Precision", ["pikeman_accuracy_2"]),
          createSkillBox("pikeman_accuracy_4", "Accuracy IV: Perfect Strike", ["pikeman_accuracy_3"])
        ]
      },
      speed: {
        name: "Polearm Speed",
        boxes: [
          createSkillBox("pikeman_speed_1", "Speed I: Quick Strikes", ["pikeman_novice"]),
          createSkillBox("pikeman_speed_2", "Speed II: Lightning Attacks", ["pikeman_speed_1"]),
          createSkillBox("pikeman_speed_3", "Speed III: Blur of Steel", ["pikeman_speed_2"]),
          createSkillBox("pikeman_speed_4", "Speed IV: Flashing Polearm", ["pikeman_speed_3"])
        ]
      },
      ability: {
        name: "Polearm Abilities",
        boxes: [
          createSkillBox("pikeman_ability_1", "Ability I: Basic Techniques", ["pikeman_novice"]),
          createSkillBox("pikeman_ability_2", "Ability II: Advanced Techniques", ["pikeman_ability_1"]),
          createSkillBox("pikeman_ability_3", "Ability III: Master Techniques", ["pikeman_ability_2"]),
          createSkillBox("pikeman_ability_4", "Ability IV: Polearm Master", ["pikeman_ability_3"])
        ]
      },
      support: {
        name: "Combat Support",
        boxes: [
          createSkillBox("pikeman_support_1", "Support I: Combat Awareness", ["pikeman_novice"]),
          createSkillBox("pikeman_support_2", "Support II: Tactical Combat", ["pikeman_support_1"]),
          createSkillBox("pikeman_support_3", "Support III: Battle Leadership", ["pikeman_support_2"]),
          createSkillBox("pikeman_support_4", "Support IV: Combat Mastery", ["pikeman_support_3"])
        ]
      }
    }
  },

  {
    id: "teras_kasi_artist",
    name: "Teras Kasi Artist",
    description: "A master of the ancient Teras Kasi martial art with force-enhanced combat abilities.",
    type: "elite",
    prerequisites: ["brawler_unarmed_4"], // Requires Master of Unarmed IV
    noviceBox: createSkillBox("tka_novice", "Novice Teras Kasi Artist"),
    masterBox: createSkillBox("tka_master", "Master Teras Kasi Artist", [
      "tka_accuracy_4",
      "tka_speed_4",
      "tka_ability_4",
      "tka_support_4"
    ]),
    skillTrees: {
      accuracy: {
        name: "Unarmed Accuracy",
        boxes: [
          createSkillBox("tka_accuracy_1", "Accuracy I: Basic Precision", ["tka_novice"]),
          createSkillBox("tka_accuracy_2", "Accuracy II: Improved Accuracy", ["tka_accuracy_1"]),
          createSkillBox("tka_accuracy_3", "Accuracy III: Master Precision", ["tka_accuracy_2"]),
          createSkillBox("tka_accuracy_4", "Accuracy IV: Perfect Strike", ["tka_accuracy_3"])
        ]
      },
      speed: {
        name: "Unarmed Speed",
        boxes: [
          createSkillBox("tka_speed_1", "Speed I: Quick Strikes", ["tka_novice"]),
          createSkillBox("tka_speed_2", "Speed II: Lightning Attacks", ["tka_speed_1"]),
          createSkillBox("tka_speed_3", "Speed III: Blur of Fists", ["tka_speed_2"]),
          createSkillBox("tka_speed_4", "Speed IV: Flashing Hands", ["tka_speed_3"])
        ]
      },
      ability: {
        name: "Unarmed Abilities",
        boxes: [
          createSkillBox("tka_ability_1", "Ability I: Basic Techniques", ["tka_novice"]),
          createSkillBox("tka_ability_2", "Ability II: Advanced Techniques", ["tka_ability_1"]),
          createSkillBox("tka_ability_3", "Ability III: Master Techniques", ["tka_ability_2"]),
          createSkillBox("tka_ability_4", "Ability IV: Teras Kasi Master", ["tka_ability_3"])
        ]
      },
      support: {
        name: "Combat Support",
        boxes: [
          createSkillBox("tka_support_1", "Support I: Combat Awareness", ["tka_novice"]),
          createSkillBox("tka_support_2", "Support II: Tactical Combat", ["tka_support_1"]),
          createSkillBox("tka_support_3", "Support III: Battle Leadership", ["tka_support_2"]),
          createSkillBox("tka_support_4", "Support IV: Combat Mastery", ["tka_support_3"])
        ]
      }
    }
  },

  // Elite Professions - Ranged Combat
  {
    id: "pistoleer",
    name: "Pistoleer",
    description: "A master of pistol combat with dual-wielding and trick shot abilities.",
    type: "elite",
    prerequisites: ["marksman_pistol_4"], // Requires Master of Pistols IV
    noviceBox: createSkillBox("pistoleer_novice", "Novice Pistoleer"),
    masterBox: createSkillBox("pistoleer_master", "Master Pistoleer", [
      "pistoleer_accuracy_4",
      "pistoleer_speed_4",
      "pistoleer_ability_4",
      "pistoleer_support_4"
    ]),
    skillTrees: {
      accuracy: {
        name: "Pistol Accuracy",
        boxes: [
          createSkillBox("pistoleer_accuracy_1", "Accuracy I: Basic Precision", ["pistoleer_novice"]),
          createSkillBox("pistoleer_accuracy_2", "Accuracy II: Improved Accuracy", ["pistoleer_accuracy_1"]),
          createSkillBox("pistoleer_accuracy_3", "Accuracy III: Master Precision", ["pistoleer_accuracy_2"]),
          createSkillBox("pistoleer_accuracy_4", "Accuracy IV: Perfect Shot", ["pistoleer_accuracy_3"])
        ]
      },
      speed: {
        name: "Pistol Speed",
        boxes: [
          createSkillBox("pistoleer_speed_1", "Speed I: Fast Draw", ["pistoleer_novice"]),
          createSkillBox("pistoleer_speed_2", "Speed II: Lightning Draw", ["pistoleer_speed_1"]),
          createSkillBox("pistoleer_speed_3", "Speed III: Instant Draw", ["pistoleer_speed_2"]),
          createSkillBox("pistoleer_speed_4", "Speed IV: Gunslinger", ["pistoleer_speed_3"])
        ]
      },
      ability: {
        name: "Pistol Abilities",
        boxes: [
          createSkillBox("pistoleer_ability_1", "Ability I: Basic Techniques", ["pistoleer_novice"]),
          createSkillBox("pistoleer_ability_2", "Ability II: Advanced Techniques", ["pistoleer_ability_1"]),
          createSkillBox("pistoleer_ability_3", "Ability III: Master Techniques", ["pistoleer_ability_2"]),
          createSkillBox("pistoleer_ability_4", "Ability IV: Pistol Master", ["pistoleer_ability_3"])
        ]
      },
      support: {
        name: "Combat Support",
        boxes: [
          createSkillBox("pistoleer_support_1", "Support I: Combat Awareness", ["pistoleer_novice"]),
          createSkillBox("pistoleer_support_2", "Support II: Tactical Combat", ["pistoleer_support_1"]),
          createSkillBox("pistoleer_support_3", "Support III: Battle Leadership", ["pistoleer_support_2"]),
          createSkillBox("pistoleer_support_4", "Support IV: Combat Mastery", ["pistoleer_support_3"])
        ]
      }
    }
  },

  {
    id: "rifleman",
    name: "Rifleman",
    description: "A precision marksman specializing in long-range rifle combat and sniping.",
    type: "elite",
    prerequisites: ["marksman_rifle_4"], // Requires Master of Rifles IV
    noviceBox: createSkillBox("rifleman_novice", "Novice Rifleman"),
    masterBox: createSkillBox("rifleman_master", "Master Rifleman", [
      "rifleman_accuracy_4",
      "rifleman_speed_4",
      "rifleman_ability_4",
      "rifleman_support_4"
    ]),
    skillTrees: {
      accuracy: {
        name: "Rifle Accuracy",
        boxes: [
          createSkillBox("rifleman_accuracy_1", "Accuracy I: Basic Precision", ["rifleman_novice"]),
          createSkillBox("rifleman_accuracy_2", "Accuracy II: Improved Accuracy", ["rifleman_accuracy_1"]),
          createSkillBox("rifleman_accuracy_3", "Accuracy III: Master Precision", ["rifleman_accuracy_2"]),
          createSkillBox("rifleman_accuracy_4", "Accuracy IV: Perfect Shot", ["rifleman_accuracy_3"])
        ]
      },
      speed: {
        name: "Rifle Speed",
        boxes: [
          createSkillBox("rifleman_speed_1", "Speed I: Quick Shots", ["rifleman_novice"]),
          createSkillBox("rifleman_speed_2", "Speed II: Rapid Fire", ["rifleman_speed_1"]),
          createSkillBox("rifleman_speed_3", "Speed III: Lightning Shots", ["rifleman_speed_2"]),
          createSkillBox("rifleman_speed_4", "Speed IV: Master Marksman", ["rifleman_speed_3"])
        ]
      },
      ability: {
        name: "Rifle Abilities",
        boxes: [
          createSkillBox("rifleman_ability_1", "Ability I: Basic Techniques", ["rifleman_novice"]),
          createSkillBox("rifleman_ability_2", "Ability II: Advanced Techniques", ["rifleman_ability_1"]),
          createSkillBox("rifleman_ability_3", "Ability III: Master Techniques", ["rifleman_ability_2"]),
          createSkillBox("rifleman_ability_4", "Ability IV: Sniper Master", ["rifleman_ability_3"])
        ]
      },
      support: {
        name: "Combat Support",
        boxes: [
          createSkillBox("rifleman_support_1", "Support I: Combat Awareness", ["rifleman_novice"]),
          createSkillBox("rifleman_support_2", "Support II: Tactical Combat", ["rifleman_support_1"]),
          createSkillBox("rifleman_support_3", "Support III: Battle Leadership", ["rifleman_support_2"]),
          createSkillBox("rifleman_support_4", "Support IV: Combat Mastery", ["rifleman_support_3"])
        ]
      }
    }
  },

  // Elite Professions - Crafting
  {
    id: "weaponsmith",
    name: "Weaponsmith",
    description: "A master craftsman specializing in the creation of weapons and weapon components.",
    type: "elite",
    prerequisites: ["artisan_engineering_4"], // Requires Gadgeteer
    noviceBox: createSkillBox("weaponsmith_novice", "Novice Weaponsmith"),
    masterBox: createSkillBox("weaponsmith_master", "Master Weaponsmith", [
      "weaponsmith_melee_4",
      "weaponsmith_firearms_4",
      "weaponsmith_munitions_4",
      "weaponsmith_techniques_4"
    ]),
    skillTrees: {
      melee: {
        name: "Melee Weapons",
        boxes: [
          createSkillBox("weaponsmith_melee_1", "Melee I: Basic Melee", ["weaponsmith_novice"]),
          createSkillBox("weaponsmith_melee_2", "Melee II: Advanced Melee", ["weaponsmith_melee_1"]),
          createSkillBox("weaponsmith_melee_3", "Melee III: Expert Melee", ["weaponsmith_melee_2"]),
          createSkillBox("weaponsmith_melee_4", "Melee IV: Swordsmith", ["weaponsmith_melee_3"])
        ]
      },
      firearms: {
        name: "Firearms",
        boxes: [
          createSkillBox("weaponsmith_firearms_1", "Firearms I: Basic Firearms", ["weaponsmith_novice"]),
          createSkillBox("weaponsmith_firearms_2", "Firearms II: Advanced Firearms", ["weaponsmith_firearms_1"]),
          createSkillBox("weaponsmith_firearms_3", "Firearms III: Expert Firearms", ["weaponsmith_firearms_2"]),
          createSkillBox("weaponsmith_firearms_4", "Firearms IV: Master Gunsmith", ["weaponsmith_firearms_3"])
        ]
      },
      munitions: {
        name: "Munitions",
        boxes: [
          createSkillBox("weaponsmith_munitions_1", "Munitions I: Basic Ammunition", ["weaponsmith_novice"]),
          createSkillBox("weaponsmith_munitions_2", "Munitions II: Advanced Ammunition", ["weaponsmith_munitions_1"]),
          createSkillBox("weaponsmith_munitions_3", "Munitions III: Expert Ammunition", ["weaponsmith_munitions_2"]),
          createSkillBox("weaponsmith_munitions_4", "Munitions IV: Ordinance Expert", ["weaponsmith_munitions_3"])
        ]
      },
      techniques: {
        name: "Weapon Techniques",
        boxes: [
          createSkillBox("weaponsmith_techniques_1", "Techniques I: Basic Techniques", ["weaponsmith_novice"]),
          createSkillBox("weaponsmith_techniques_2", "Techniques II: Advanced Techniques", ["weaponsmith_techniques_1"]),
          createSkillBox("weaponsmith_techniques_3", "Techniques III: Expert Techniques", ["weaponsmith_techniques_2"]),
          createSkillBox("weaponsmith_techniques_4", "Techniques IV: Weapon Artisan", ["weaponsmith_techniques_3"])
        ]
      }
    }
  },

  {
    id: "armorsmith",
    name: "Armorsmith",
    description: "A master craftsman specializing in the creation of armor and protective equipment.",
    type: "elite",
    prerequisites: ["artisan_engineering_4"], // Requires Gadgeteer
    noviceBox: createSkillBox("armorsmith_novice", "Novice Armorsmith"),
    masterBox: createSkillBox("armorsmith_master", "Master Armorsmith", [
      "armorsmith_personal_4",
      "armorsmith_heavy_4",
      "armorsmith_deflectors_4",
      "armorsmith_complexity_4"
    ]),
    skillTrees: {
      personal: {
        name: "Personal Armor",
        boxes: [
          createSkillBox("armorsmith_personal_1", "Personal I: Basic Armor", ["armorsmith_novice"]),
          createSkillBox("armorsmith_personal_2", "Personal II: Advanced Armor", ["armorsmith_personal_1"]),
          createSkillBox("armorsmith_personal_3", "Personal III: Expert Armor", ["armorsmith_personal_2"]),
          createSkillBox("armorsmith_personal_4", "Personal IV: Master of Armor Design", ["armorsmith_personal_3"])
        ]
      },
      heavy: {
        name: "Heavy Armor",
        boxes: [
          createSkillBox("armorsmith_heavy_1", "Heavy I: Basic Materials", ["armorsmith_novice"]),
          createSkillBox("armorsmith_heavy_2", "Heavy II: Advanced Materials", ["armorsmith_heavy_1"]),
          createSkillBox("armorsmith_heavy_3", "Heavy III: Expert Materials", ["armorsmith_heavy_2"]),
          createSkillBox("armorsmith_heavy_4", "Heavy IV: Materials Specialist", ["armorsmith_heavy_3"])
        ]
      },
      deflectors: {
        name: "Deflector Shields",
        boxes: [
          createSkillBox("armorsmith_deflectors_1", "Deflectors I: Basic Shields", ["armorsmith_novice"]),
          createSkillBox("armorsmith_deflectors_2", "Deflectors II: Advanced Shields", ["armorsmith_deflectors_1"]),
          createSkillBox("armorsmith_deflectors_3", "Deflectors III: Expert Shields", ["armorsmith_deflectors_2"]),
          createSkillBox("armorsmith_deflectors_4", "Deflectors IV: Deflector Technologist", ["armorsmith_deflectors_3"])
        ]
      },
      complexity: {
        name: "Armor Complexity",
        boxes: [
          createSkillBox("armorsmith_complexity_1", "Complexity I: Basic Assembly", ["armorsmith_novice"]),
          createSkillBox("armorsmith_complexity_2", "Complexity II: Advanced Assembly", ["armorsmith_complexity_1"]),
          createSkillBox("armorsmith_complexity_3", "Complexity III: Expert Assembly", ["armorsmith_complexity_2"]),
          createSkillBox("armorsmith_complexity_4", "Complexity IV: Expert Armorsmith", ["armorsmith_complexity_3"])
        ]
      }
    }
  },

  {
    id: "chef",
    name: "Chef",
    description: "A culinary master who creates food and drinks that provide powerful buffs.",
    type: "elite",
    prerequisites: ["artisan_domestic_4"], // Requires Interior Decorator
    noviceBox: createSkillBox("chef_novice", "Novice Chef"),
    masterBox: createSkillBox("chef_master", "Master Chef", [
      "chef_dish_4",
      "chef_dessert_4",
      "chef_drink_4",
      "chef_techniques_4"
    ]),
    skillTrees: {
      dish: {
        name: "Dish Design",
        boxes: [
          createSkillBox("chef_dish_1", "Dish I: Basic Meals", ["chef_novice"]),
          createSkillBox("chef_dish_2", "Dish II: Advanced Meals", ["chef_dish_1"]),
          createSkillBox("chef_dish_3", "Dish III: Gourmet Meals", ["chef_dish_2"]),
          createSkillBox("chef_dish_4", "Dish IV: Legendary Cuisine", ["chef_dish_3"])
        ]
      },
      dessert: {
        name: "Dessert Creation",
        boxes: [
          createSkillBox("chef_dessert_1", "Dessert I: Basic Sweets", ["chef_novice"]),
          createSkillBox("chef_dessert_2", "Dessert II: Advanced Desserts", ["chef_dessert_1"]),
          createSkillBox("chef_dessert_3", "Dessert III: Pastry Arts", ["chef_dessert_2"]),
          createSkillBox("chef_dessert_4", "Dessert IV: Master Confectioner", ["chef_dessert_3"])
        ]
      },
      drink: {
        name: "Beverage Brewing",
        boxes: [
          createSkillBox("chef_drink_1", "Drink I: Basic Beverages", ["chef_novice"]),
          createSkillBox("chef_drink_2", "Drink II: Advanced Drinks", ["chef_drink_1"]),
          createSkillBox("chef_drink_3", "Drink III: Master Brewing", ["chef_drink_2"]),
          createSkillBox("chef_drink_4", "Drink IV: Legendary Vintner", ["chef_drink_3"])
        ]
      },
      techniques: {
        name: "Culinary Techniques",
        boxes: [
          createSkillBox("chef_techniques_1", "Techniques I: Basic Methods", ["chef_novice"]),
          createSkillBox("chef_techniques_2", "Techniques II: Advanced Cooking", ["chef_techniques_1"]),
          createSkillBox("chef_techniques_3", "Techniques III: Professional Skills", ["chef_techniques_2"]),
          createSkillBox("chef_techniques_4", "Techniques IV: Culinary Mastery", ["chef_techniques_3"])
        ]
      }
    }
  },

  {
    id: "doctor",
    name: "Doctor",
    description: "A medical expert capable of healing wounds and enhancing player abilities.",
    type: "elite",
    prerequisites: ["medic_master"], // Requires Master Medic
    noviceBox: createSkillBox("doctor_novice", "Novice Doctor"),
    masterBox: createSkillBox("doctor_master", "Master Doctor", [
      "doctor_wound_speed_4",
      "doctor_wound_4",
      "doctor_ability_4",
      "doctor_support_4"
    ]),
    skillTrees: {
      wound_speed: {
        name: "Wound Speed",
        boxes: [
          createSkillBox("doctor_wound_speed_1", "Speed I: Basic Treatment", ["doctor_novice"]),
          createSkillBox("doctor_wound_speed_2", "Speed II: Advanced Treatment", ["doctor_wound_speed_1"]),
          createSkillBox("doctor_wound_speed_3", "Speed III: Master Treatment", ["doctor_wound_speed_2"]),
          createSkillBox("doctor_wound_speed_4", "Speed IV: Lightning Healer", ["doctor_wound_speed_3"])
        ]
      },
      wound: {
        name: "Wound Treatment",
        boxes: [
          createSkillBox("doctor_wound_1", "Wound I: Advanced Healing", ["doctor_novice"]),
          createSkillBox("doctor_wound_2", "Wound II: Master Healing", ["doctor_wound_1"]),
          createSkillBox("doctor_wound_3", "Wound III: Miracle Healing", ["doctor_wound_2"]),
          createSkillBox("doctor_wound_4", "Wound IV: Divine Healer", ["doctor_wound_3"])
        ]
      },
      ability: {
        name: "Ability Enhancement",
        boxes: [
          createSkillBox("doctor_ability_1", "Ability I: Basic Enhancement", ["doctor_novice"]),
          createSkillBox("doctor_ability_2", "Ability II: Advanced Enhancement", ["doctor_ability_1"]),
          createSkillBox("doctor_ability_3", "Ability III: Master Enhancement", ["doctor_ability_2"]),
          createSkillBox("doctor_ability_4", "Ability IV: Ultimate Enhancement", ["doctor_ability_3"])
        ]
      },
      support: {
        name: "Medical Support",
        boxes: [
          createSkillBox("doctor_support_1", "Support I: Basic Medical", ["doctor_novice"]),
          createSkillBox("doctor_support_2", "Support II: Advanced Medical", ["doctor_support_1"]),
          createSkillBox("doctor_support_3", "Support III: Master Medical", ["doctor_support_2"]),
          createSkillBox("doctor_support_4", "Support IV: Medical Authority", ["doctor_support_3"])
        ]
      }
    }
  },

  {
    id: "musician",
    name: "Musician",
    description: "A performance artist who provides powerful group buffs through musical entertainment.",
    type: "elite",
    prerequisites: ["entertainer_music_4", "entertainer_healing_4"], // Requires Music IV and Healing IV
    noviceBox: createSkillBox("musician_novice", "Novice Musician"),
    masterBox: createSkillBox("musician_master", "Master Musician", [
      "musician_knowledge_4",
      "musician_instrument_4"
    ]),
    skillTrees: {
      knowledge: {
        name: "Musical Knowledge",
        boxes: [
          createSkillBox("musician_knowledge_1", "Knowledge I: Music Theory", ["musician_novice"]),
          createSkillBox("musician_knowledge_2", "Knowledge II: Advanced Theory", ["musician_knowledge_1"]),
          createSkillBox("musician_knowledge_3", "Knowledge III: Master Theory", ["musician_knowledge_2"]),
          createSkillBox("musician_knowledge_4", "Knowledge IV: Musical Genius", ["musician_knowledge_3"])
        ]
      },
      instrument: {
        name: "Instrument Mastery",
        boxes: [
          createSkillBox("musician_instrument_1", "Instrument I: Basic Mastery", ["musician_novice"]),
          createSkillBox("musician_instrument_2", "Instrument II: Advanced Mastery", ["musician_instrument_1"]),
          createSkillBox("musician_instrument_3", "Instrument III: Master Performer", ["musician_instrument_2"]),
          createSkillBox("musician_instrument_4", "Instrument IV: Virtuoso", ["musician_instrument_3"])
        ]
      }
    }
  },

  {
    id: "dancer",
    name: "Dancer",
    description: "A performance artist who provides healing and inspiration through dance.",
    type: "elite",
    prerequisites: ["entertainer_dance_4", "entertainer_healing_4"], // Requires Dance IV and Healing IV
    noviceBox: createSkillBox("dancer_novice", "Novice Dancer"),
    masterBox: createSkillBox("dancer_master", "Master Dancer", [
      "dancer_ability_4",
      "dancer_wound_4",
      "dancer_knowledge_4",
      "dancer_shock_4"
    ]),
    skillTrees: {
      ability: {
        name: "Dance Ability",
        boxes: [
          createSkillBox("dancer_ability_1", "Ability I: Basic Performance", ["dancer_novice"]),
          createSkillBox("dancer_ability_2", "Ability II: Advanced Performance", ["dancer_ability_1"]),
          createSkillBox("dancer_ability_3", "Ability III: Master Performance", ["dancer_ability_2"]),
          createSkillBox("dancer_ability_4", "Ability IV: Elite Performer", ["dancer_ability_3"])
        ]
      },
      wound: {
        name: "Wound Healing",
        boxes: [
          createSkillBox("dancer_wound_1", "Wound I: Basic Healing", ["dancer_novice"]),
          createSkillBox("dancer_wound_2", "Wound II: Advanced Healing", ["dancer_wound_1"]),
          createSkillBox("dancer_wound_3", "Wound III: Master Healing", ["dancer_wound_2"]),
          createSkillBox("dancer_wound_4", "Wound IV: Divine Healer", ["dancer_wound_3"])
        ]
      },
      knowledge: {
        name: "Dance Knowledge",
        boxes: [
          createSkillBox("dancer_knowledge_1", "Knowledge I: Dance Forms", ["dancer_novice"]),
          createSkillBox("dancer_knowledge_2", "Knowledge II: Advanced Forms", ["dancer_knowledge_1"]),
          createSkillBox("dancer_knowledge_3", "Knowledge III: Master Forms", ["dancer_knowledge_2"]),
          createSkillBox("dancer_knowledge_4", "Knowledge IV: Dance Master", ["dancer_knowledge_3"])
        ]
      },
      shock: {
        name: "Shock Recovery",
        boxes: [
          createSkillBox("dancer_shock_1", "Shock I: Basic Recovery", ["dancer_novice"]),
          createSkillBox("dancer_shock_2", "Shock II: Advanced Recovery", ["dancer_shock_1"]),
          createSkillBox("dancer_shock_3", "Shock III: Master Recovery", ["dancer_shock_2"]),
          createSkillBox("dancer_shock_4", "Shock IV: Complete Recovery", ["dancer_shock_3"])
        ]
      }
    }
  },

  {
    id: "droidengineer",
    name: "Droid Engineer",
    description: "A master of droid technology, able to build and customize advanced droids.",
    type: "elite",
    prerequisites: ["artisan_engineering_4"], // Requires Artisan Engineering IV
    noviceBox: createSkillBox("droidengineer_novice", "Novice Droid Engineer"),
    masterBox: createSkillBox("droidengineer_master", "Master Droid Engineer", [
      "droidengineer_production_4",
      "droidengineer_techniques_4",
      "droidengineer_refinement_4",
      "droidengineer_blueprints_4"
    ]),
    skillTrees: {
      production: {
        name: "Droid Production",
        boxes: [
          createSkillBox("droidengineer_production_1", "Production I: Basic Droids", ["droidengineer_novice"]),
          createSkillBox("droidengineer_production_2", "Production II: Advanced Droids", ["droidengineer_production_1"]),
          createSkillBox("droidengineer_production_3", "Production III: Complex Droids", ["droidengineer_production_2"]),
          createSkillBox("droidengineer_production_4", "Production IV: Droid Builder", ["droidengineer_production_3"])
        ]
      },
      techniques: {
        name: "Droid Techniques",
        boxes: [
          createSkillBox("droidengineer_techniques_1", "Techniques I: Basic Systems", ["droidengineer_novice"]),
          createSkillBox("droidengineer_techniques_2", "Techniques II: Advanced Systems", ["droidengineer_techniques_1"]),
          createSkillBox("droidengineer_techniques_3", "Techniques III: Expert Systems", ["droidengineer_techniques_2"]),
          createSkillBox("droidengineer_techniques_4", "Techniques IV: Expert Droid Engineer", ["droidengineer_techniques_3"])
        ]
      },
      refinement: {
        name: "Droid Refinement",
        boxes: [
          createSkillBox("droidengineer_refinement_1", "Refinement I: Basic Customization", ["droidengineer_novice"]),
          createSkillBox("droidengineer_refinement_2", "Refinement II: Advanced Customization", ["droidengineer_refinement_1"]),
          createSkillBox("droidengineer_refinement_3", "Refinement III: Expert Customization", ["droidengineer_refinement_2"]),
          createSkillBox("droidengineer_refinement_4", "Refinement IV: Droid Refiner", ["droidengineer_refinement_3"])
        ]
      },
      blueprints: {
        name: "Droid Blueprints",
        boxes: [
          createSkillBox("droidengineer_blueprints_1", "Blueprints I: Basic Designs", ["droidengineer_novice"]),
          createSkillBox("droidengineer_blueprints_2", "Blueprints II: Advanced Designs", ["droidengineer_blueprints_1"]),
          createSkillBox("droidengineer_blueprints_3", "Blueprints III: Expert Designs", ["droidengineer_blueprints_2"]),
          createSkillBox("droidengineer_blueprints_4", "Blueprints IV: Droid Designer", ["droidengineer_blueprints_3"])
        ]
      }
    }
  },

  // ADDITIONAL ELITE PROFESSIONS

  {
    id: "tailor",
    name: "Tailor",
    description: "Master clothing and armor craftsman specializing in fabric and design work.",
    type: "elite",
    prerequisites: ["artisan_domestic_4"], // Requires Artisan Domestic Arts IV
    noviceBox: createSkillBox("tailor_novice", "Novice Tailor"),
    masterBox: createSkillBox("tailor_master", "Master Tailor", [
      "tailor_casual_4",
      "tailor_field_4",
      "tailor_formal_4",
      "tailor_production_4"
    ]),
    skillTrees: {
      casual: {
        name: "Casual Wear",
        boxes: [
          createSkillBox("tailor_casual_1", "Casual I: Basic Clothing", ["tailor_novice"]),
          createSkillBox("tailor_casual_2", "Casual II: Improved Clothing", ["tailor_casual_1"]),
          createSkillBox("tailor_casual_3", "Casual III: Advanced Clothing", ["tailor_casual_2"]),
          createSkillBox("tailor_casual_4", "Casual IV: Master Tailor", ["tailor_casual_3"])
        ]
      },
      field: {
        name: "Field Wear",
        boxes: [
          createSkillBox("tailor_field_1", "Field I: Basic Field Gear", ["tailor_novice"]),
          createSkillBox("tailor_field_2", "Field II: Improved Field Gear", ["tailor_field_1"]),
          createSkillBox("tailor_field_3", "Field III: Advanced Field Gear", ["tailor_field_2"]),
          createSkillBox("tailor_field_4", "Field IV: Field Specialist", ["tailor_field_3"])
        ]
      },
      formal: {
        name: "Formal Wear",
        boxes: [
          createSkillBox("tailor_formal_1", "Formal I: Basic Formal Wear", ["tailor_novice"]),
          createSkillBox("tailor_formal_2", "Formal II: Improved Formal Wear", ["tailor_formal_1"]),
          createSkillBox("tailor_formal_3", "Formal III: Advanced Formal Wear", ["tailor_formal_2"]),
          createSkillBox("tailor_formal_4", "Formal IV: Formal Specialist", ["tailor_formal_3"])
        ]
      },
      production: {
        name: "Mass Production",
        boxes: [
          createSkillBox("tailor_production_1", "Production I: Basic Mass Production", ["tailor_novice"]),
          createSkillBox("tailor_production_2", "Production II: Improved Production", ["tailor_production_1"]),
          createSkillBox("tailor_production_3", "Production III: Advanced Production", ["tailor_production_2"]),
          createSkillBox("tailor_production_4", "Production IV: Production Master", ["tailor_production_3"])
        ]
      }
    }
  },

  {
    id: "architect",
    name: "Architect",
    description: "Master builder capable of designing and constructing buildings and installations.",
    type: "elite",
    prerequisites: ["artisan_engineering_4"], // Requires Artisan Engineering IV
    noviceBox: createSkillBox("architect_novice", "Novice Architect"),
    masterBox: createSkillBox("architect_master", "Master Architect", [
      "architect_production_4",
      "architect_techniques_4",
      "architect_harvesting_4",
      "architect_blueprints_4"
    ]),
    skillTrees: {
      production: {
        name: "Construction",
        boxes: [
          createSkillBox("architect_production_1", "Construction I: Basic Building", ["architect_novice"]),
          createSkillBox("architect_production_2", "Construction II: Improved Building", ["architect_production_1"]),
          createSkillBox("architect_production_3", "Construction III: Advanced Building", ["architect_production_2"]),
          createSkillBox("architect_production_4", "Construction IV: Master Builder", ["architect_production_3"])
        ]
      },
      techniques: {
        name: "Design Techniques",
        boxes: [
          createSkillBox("architect_techniques_1", "Techniques I: Basic Design", ["architect_novice"]),
          createSkillBox("architect_techniques_2", "Techniques II: Improved Design", ["architect_techniques_1"]),
          createSkillBox("architect_techniques_3", "Techniques III: Advanced Design", ["architect_techniques_2"]),
          createSkillBox("architect_techniques_4", "Techniques IV: Design Master", ["architect_techniques_3"])
        ]
      },
      harvesting: {
        name: "Resource Harvesting",
        boxes: [
          createSkillBox("architect_harvesting_1", "Harvesting I: Basic Resources", ["architect_novice"]),
          createSkillBox("architect_harvesting_2", "Harvesting II: Improved Resources", ["architect_harvesting_1"]),
          createSkillBox("architect_harvesting_3", "Harvesting III: Advanced Resources", ["architect_harvesting_2"]),
          createSkillBox("architect_harvesting_4", "Harvesting IV: Resource Master", ["architect_harvesting_3"])
        ]
      },
      blueprints: {
        name: "Blueprint Mastery",
        boxes: [
          createSkillBox("architect_blueprints_1", "Blueprints I: Basic Plans", ["architect_novice"]),
          createSkillBox("architect_blueprints_2", "Blueprints II: Improved Plans", ["architect_blueprints_1"]),
          createSkillBox("architect_blueprints_3", "Blueprints III: Advanced Plans", ["architect_blueprints_2"]),
          createSkillBox("architect_blueprints_4", "Blueprints IV: Master Architect", ["architect_blueprints_3"])
        ]
      }
    }
  },

  {
    id: "merchant",
    name: "Merchant",
    description: "Business specialist focused on trade, commerce, and vendor management.",
    type: "elite",
    prerequisites: ["artisan_business_4"], // Requires Artisan Business IV
    noviceBox: createSkillBox("merchant_novice", "Novice Merchant"),
    masterBox: createSkillBox("merchant_master", "Master Merchant", [
      "merchant_advertising_4",
      "merchant_sales_4",
      "merchant_hiring_4",
      "merchant_management_4"
    ]),
    skillTrees: {
      advertising: {
        name: "Advertising",
        boxes: [
          createSkillBox("merchant_advertising_1", "Advertising I: Basic Marketing", ["merchant_novice"]),
          createSkillBox("merchant_advertising_2", "Advertising II: Improved Marketing", ["merchant_advertising_1"]),
          createSkillBox("merchant_advertising_3", "Advertising III: Advanced Marketing", ["merchant_advertising_2"]),
          createSkillBox("merchant_advertising_4", "Advertising IV: Marketing Master", ["merchant_advertising_3"])
        ]
      },
      sales: {
        name: "Sales",
        boxes: [
          createSkillBox("merchant_sales_1", "Sales I: Basic Sales", ["merchant_novice"]),
          createSkillBox("merchant_sales_2", "Sales II: Improved Sales", ["merchant_sales_1"]),
          createSkillBox("merchant_sales_3", "Sales III: Advanced Sales", ["merchant_sales_2"]),
          createSkillBox("merchant_sales_4", "Sales IV: Sales Master", ["merchant_sales_3"])
        ]
      },
      hiring: {
        name: "Hiring & Personnel",
        boxes: [
          createSkillBox("merchant_hiring_1", "Hiring I: Basic Personnel", ["merchant_novice"]),
          createSkillBox("merchant_hiring_2", "Hiring II: Improved Personnel", ["merchant_hiring_1"]),
          createSkillBox("merchant_hiring_3", "Hiring III: Advanced Personnel", ["merchant_hiring_2"]),
          createSkillBox("merchant_hiring_4", "Hiring IV: Personnel Master", ["merchant_hiring_3"])
        ]
      },
      management: {
        name: "Business Management",
        boxes: [
          createSkillBox("merchant_management_1", "Management I: Basic Management", ["merchant_novice"]),
          createSkillBox("merchant_management_2", "Management II: Improved Management", ["merchant_management_1"]),
          createSkillBox("merchant_management_3", "Management III: Advanced Management", ["merchant_management_2"]),
          createSkillBox("merchant_management_4", "Management IV: Business Master", ["merchant_management_3"])
        ]
      }
    }
  },

  {
    id: "smuggler",
    name: "Smuggler",
    description: "Underworld specialist with slicing, combat, and contraband expertise.",
    type: "elite",
    prerequisites: ["marksman_pistol_4", "brawler_unarmed_4"], // Requires Marksman Pistol IV and Brawler Unarmed IV
    noviceBox: createSkillBox("smuggler_novice", "Novice Smuggler"),
    masterBox: createSkillBox("smuggler_master", "Master Smuggler", [
      "smuggler_underworld_4",
      "smuggler_slicing_4",
      "smuggler_combat_4",
      "smuggler_spice_4"
    ]),
    skillTrees: {
      underworld: {
        name: "Underworld",
        boxes: [
          createSkillBox("smuggler_underworld_1", "Underworld I: Basic Contacts", ["smuggler_novice"]),
          createSkillBox("smuggler_underworld_2", "Underworld II: Improved Contacts", ["smuggler_underworld_1"]),
          createSkillBox("smuggler_underworld_3", "Underworld III: Advanced Contacts", ["smuggler_underworld_2"]),
          createSkillBox("smuggler_underworld_4", "Underworld IV: Crime Boss", ["smuggler_underworld_3"])
        ]
      },
      slicing: {
        name: "Slicing",
        boxes: [
          createSkillBox("smuggler_slicing_1", "Slicing I: Basic Hacking", ["smuggler_novice"]),
          createSkillBox("smuggler_slicing_2", "Slicing II: Improved Hacking", ["smuggler_slicing_1"]),
          createSkillBox("smuggler_slicing_3", "Slicing III: Advanced Hacking", ["smuggler_slicing_2"]),
          createSkillBox("smuggler_slicing_4", "Slicing IV: Master Slicer", ["smuggler_slicing_3"])
        ]
      },
      combat: {
        name: "Smuggler Combat",
        boxes: [
          createSkillBox("smuggler_combat_1", "Combat I: Basic Combat", ["smuggler_novice"]),
          createSkillBox("smuggler_combat_2", "Combat II: Improved Combat", ["smuggler_combat_1"]),
          createSkillBox("smuggler_combat_3", "Combat III: Advanced Combat", ["smuggler_combat_2"]),
          createSkillBox("smuggler_combat_4", "Combat IV: Combat Master", ["smuggler_combat_3"])
        ]
      },
      spice: {
        name: "Spice Trade",
        boxes: [
          createSkillBox("smuggler_spice_1", "Spice I: Basic Trade", ["smuggler_novice"]),
          createSkillBox("smuggler_spice_2", "Spice II: Improved Trade", ["smuggler_spice_1"]),
          createSkillBox("smuggler_spice_3", "Spice III: Advanced Trade", ["smuggler_spice_2"]),
          createSkillBox("smuggler_spice_4", "Spice IV: Spice Lord", ["smuggler_spice_3"])
        ]
      }
    }
  },

  {
    id: "bountyhunter",
    name: "Bounty Hunter",
    description: "Professional tracker and hunter with investigation and droid control abilities.",
    type: "elite",
    prerequisites: ["marksman_master", "scout_exploration_4"], // Requires Master Marksman and Scout Exploration IV
    noviceBox: createSkillBox("bountyhunter_novice", "Novice Bounty Hunter"),
    masterBox: createSkillBox("bountyhunter_master", "Master Bounty Hunter", [
      "bountyhunter_investigation_4",
      "bountyhunter_droidcontrol_4",
      "bountyhunter_droidresponse_4",
      "bountyhunter_support_4"
    ]),
    skillTrees: {
      investigation: {
        name: "Investigation",
        boxes: [
          createSkillBox("bountyhunter_investigation_1", "Investigation I: Basic Tracking", ["bountyhunter_novice"]),
          createSkillBox("bountyhunter_investigation_2", "Investigation II: Improved Tracking", ["bountyhunter_investigation_1"]),
          createSkillBox("bountyhunter_investigation_3", "Investigation III: Advanced Tracking", ["bountyhunter_investigation_2"]),
          createSkillBox("bountyhunter_investigation_4", "Investigation IV: Master Tracker", ["bountyhunter_investigation_3"])
        ]
      },
      droidcontrol: {
        name: "Droid Control",
        boxes: [
          createSkillBox("bountyhunter_droidcontrol_1", "Droid Control I: Basic Control", ["bountyhunter_novice"]),
          createSkillBox("bountyhunter_droidcontrol_2", "Droid Control II: Improved Control", ["bountyhunter_droidcontrol_1"]),
          createSkillBox("bountyhunter_droidcontrol_3", "Droid Control III: Advanced Control", ["bountyhunter_droidcontrol_2"]),
          createSkillBox("bountyhunter_droidcontrol_4", "Droid Control IV: Droid Master", ["bountyhunter_droidcontrol_3"])
        ]
      },
      droidresponse: {
        name: "Droid Response",
        boxes: [
          createSkillBox("bountyhunter_droidresponse_1", "Droid Response I: Basic Response", ["bountyhunter_novice"]),
          createSkillBox("bountyhunter_droidresponse_2", "Droid Response II: Improved Response", ["bountyhunter_droidresponse_1"]),
          createSkillBox("bountyhunter_droidresponse_3", "Droid Response III: Advanced Response", ["bountyhunter_droidresponse_2"]),
          createSkillBox("bountyhunter_droidresponse_4", "Droid Response IV: Response Master", ["bountyhunter_droidresponse_3"])
        ]
      },
      support: {
        name: "Hunter Support",
        boxes: [
          createSkillBox("bountyhunter_support_1", "Support I: Basic Support", ["bountyhunter_novice"]),
          createSkillBox("bountyhunter_support_2", "Support II: Improved Support", ["bountyhunter_support_1"]),
          createSkillBox("bountyhunter_support_3", "Support III: Advanced Support", ["bountyhunter_support_2"]),
          createSkillBox("bountyhunter_support_4", "Support IV: Elite Hunter", ["bountyhunter_support_3"])
        ]
      }
    }
  },

  // ADDITIONAL ELITE PROFESSIONS - Final Set

  {
    id: "bioengineer",
    name: "Bio-Engineer",
    description: "Master of genetic manipulation and creature enhancement, creating powerful pets and resources.",
    type: "elite",
    prerequisites: ["scout_foraging_4", "medic_crafting_4"], // Requires Scout Foraging IV and Medic Crafting IV
    noviceBox: createSkillBox("bioengineer_novice", "Novice Bio-Engineer"),
    masterBox: createSkillBox("bioengineer_master", "Master Bio-Engineer", [
      "bioengineer_creature_4",
      "bioengineer_tissue_4",
      "bioengineer_dna_4",
      "bioengineer_production_4"
    ]),
    skillTrees: {
      creature: {
        name: "Creature Enhancement",
        boxes: [
          createSkillBox("bioengineer_creature_1", "Creature I: Basic Enhancement", ["bioengineer_novice"]),
          createSkillBox("bioengineer_creature_2", "Creature II: Improved Enhancement", ["bioengineer_creature_1"]),
          createSkillBox("bioengineer_creature_3", "Creature III: Advanced Enhancement", ["bioengineer_creature_2"]),
          createSkillBox("bioengineer_creature_4", "Creature IV: Master Enhancement", ["bioengineer_creature_3"])
        ]
      },
      tissue: {
        name: "Tissue Engineering",
        boxes: [
          createSkillBox("bioengineer_tissue_1", "Tissue I: Basic Engineering", ["bioengineer_novice"]),
          createSkillBox("bioengineer_tissue_2", "Tissue II: Improved Engineering", ["bioengineer_tissue_1"]),
          createSkillBox("bioengineer_tissue_3", "Tissue III: Advanced Engineering", ["bioengineer_tissue_2"]),
          createSkillBox("bioengineer_tissue_4", "Tissue IV: Tissue Master", ["bioengineer_tissue_3"])
        ]
      },
      dna: {
        name: "DNA Harvesting",
        boxes: [
          createSkillBox("bioengineer_dna_1", "DNA I: Basic Sampling", ["bioengineer_novice"]),
          createSkillBox("bioengineer_dna_2", "DNA II: Improved Sampling", ["bioengineer_dna_1"]),
          createSkillBox("bioengineer_dna_3", "DNA III: Advanced Sampling", ["bioengineer_dna_2"]),
          createSkillBox("bioengineer_dna_4", "DNA IV: DNA Master", ["bioengineer_dna_3"])
        ]
      },
      production: {
        name: "Bio Production",
        boxes: [
          createSkillBox("bioengineer_production_1", "Production I: Basic Production", ["bioengineer_novice"]),
          createSkillBox("bioengineer_production_2", "Production II: Improved Production", ["bioengineer_production_1"]),
          createSkillBox("bioengineer_production_3", "Production III: Advanced Production", ["bioengineer_production_2"]),
          createSkillBox("bioengineer_production_4", "Production IV: Production Master", ["bioengineer_production_3"])
        ]
      }
    }
  },

  {
    id: "creaturehandler",
    name: "Creature Handler",
    description: "Master of creature taming and training, able to command powerful beast companions.",
    type: "elite",
    prerequisites: ["scout_exploration_4", "scout_trapping_4"], // Requires Scout Exploration IV and Scout Trapping IV
    noviceBox: createSkillBox("creaturehandler_novice", "Novice Creature Handler"),
    masterBox: createSkillBox("creaturehandler_master", "Master Creature Handler", [
      "creaturehandler_taming_4",
      "creaturehandler_training_4",
      "creaturehandler_healing_4",
      "creaturehandler_support_4"
    ]),
    skillTrees: {
      taming: {
        name: "Creature Taming",
        boxes: [
          createSkillBox("creaturehandler_taming_1", "Taming I: Basic Taming", ["creaturehandler_novice"]),
          createSkillBox("creaturehandler_taming_2", "Taming II: Improved Taming", ["creaturehandler_taming_1"]),
          createSkillBox("creaturehandler_taming_3", "Taming III: Advanced Taming", ["creaturehandler_taming_2"]),
          createSkillBox("creaturehandler_taming_4", "Taming IV: Master Tamer", ["creaturehandler_taming_3"])
        ]
      },
      training: {
        name: "Creature Training",
        boxes: [
          createSkillBox("creaturehandler_training_1", "Training I: Basic Training", ["creaturehandler_novice"]),
          createSkillBox("creaturehandler_training_2", "Training II: Improved Training", ["creaturehandler_training_1"]),
          createSkillBox("creaturehandler_training_3", "Training III: Advanced Training", ["creaturehandler_training_2"]),
          createSkillBox("creaturehandler_training_4", "Training IV: Master Trainer", ["creaturehandler_training_3"])
        ]
      },
      healing: {
        name: "Creature Healing",
        boxes: [
          createSkillBox("creaturehandler_healing_1", "Healing I: Basic Healing", ["creaturehandler_novice"]),
          createSkillBox("creaturehandler_healing_2", "Healing II: Improved Healing", ["creaturehandler_healing_1"]),
          createSkillBox("creaturehandler_healing_3", "Healing III: Advanced Healing", ["creaturehandler_healing_2"]),
          createSkillBox("creaturehandler_healing_4", "Healing IV: Master Healer", ["creaturehandler_healing_3"])
        ]
      },
      support: {
        name: "Creature Support",
        boxes: [
          createSkillBox("creaturehandler_support_1", "Support I: Basic Support", ["creaturehandler_novice"]),
          createSkillBox("creaturehandler_support_2", "Support II: Improved Support", ["creaturehandler_support_1"]),
          createSkillBox("creaturehandler_support_3", "Support III: Advanced Support", ["creaturehandler_support_2"]),
          createSkillBox("creaturehandler_support_4", "Support IV: Beast Master", ["creaturehandler_support_3"])
        ]
      }
    }
  },

  {
    id: "combatmedic",
    name: "Combat Medic",
    description: "Battlefield healer with advanced medical abilities and combat training.",
    type: "elite",
    prerequisites: ["marksman_support_4", "medic_master"], // Requires Marksman Support IV and Master Medic
    noviceBox: createSkillBox("combatmedic_novice", "Novice Combat Medic"),
    masterBox: createSkillBox("combatmedic_master", "Master Combat Medic", [
      "combatmedic_healing_4",
      "combatmedic_speed_4",
      "combatmedic_medicine_4",
      "combatmedic_support_4"
    ]),
    skillTrees: {
      healing: {
        name: "Healing Range",
        boxes: [
          createSkillBox("combatmedic_healing_1", "Healing I: Basic Range", ["combatmedic_novice"]),
          createSkillBox("combatmedic_healing_2", "Healing II: Improved Range", ["combatmedic_healing_1"]),
          createSkillBox("combatmedic_healing_3", "Healing III: Advanced Range", ["combatmedic_healing_2"]),
          createSkillBox("combatmedic_healing_4", "Healing IV: Master Range", ["combatmedic_healing_3"])
        ]
      },
      speed: {
        name: "Healing Speed",
        boxes: [
          createSkillBox("combatmedic_speed_1", "Speed I: Basic Speed", ["combatmedic_novice"]),
          createSkillBox("combatmedic_speed_2", "Speed II: Improved Speed", ["combatmedic_speed_1"]),
          createSkillBox("combatmedic_speed_3", "Speed III: Advanced Speed", ["combatmedic_speed_2"]),
          createSkillBox("combatmedic_speed_4", "Speed IV: Master Speed", ["combatmedic_speed_3"])
        ]
      },
      medicine: {
        name: "Combat Medicine",
        boxes: [
          createSkillBox("combatmedic_medicine_1", "Medicine I: Basic Medicine", ["combatmedic_novice"]),
          createSkillBox("combatmedic_medicine_2", "Medicine II: Improved Medicine", ["combatmedic_medicine_1"]),
          createSkillBox("combatmedic_medicine_3", "Medicine III: Advanced Medicine", ["combatmedic_medicine_2"]),
          createSkillBox("combatmedic_medicine_4", "Medicine IV: Medicine Master", ["combatmedic_medicine_3"])
        ]
      },
      support: {
        name: "Combat Support",
        boxes: [
          createSkillBox("combatmedic_support_1", "Support I: Basic Support", ["combatmedic_novice"]),
          createSkillBox("combatmedic_support_2", "Support II: Improved Support", ["combatmedic_support_1"]),
          createSkillBox("combatmedic_support_3", "Support III: Advanced Support", ["combatmedic_support_2"]),
          createSkillBox("combatmedic_support_4", "Support IV: Combat Specialist", ["combatmedic_support_3"])
        ]
      }
    }
  },

  {
    id: "squadleader",
    name: "Squad Leader",
    description: "Military leader with tactical abilities and group command skills.",
    type: "elite",
    prerequisites: ["scout_exploration_4", "scout_foraging_4", "marksman_support_4"], // Requires Scout Exploration IV, Scout Foraging IV, and Marksman Support IV
    noviceBox: createSkillBox("squadleader_novice", "Novice Squad Leader"),
    masterBox: createSkillBox("squadleader_master", "Master Squad Leader", [
      "squadleader_movement_4",
      "squadleader_offense_4",
      "squadleader_defense_4",
      "squadleader_support_4"
    ]),
    skillTrees: {
      movement: {
        name: "Squad Movement",
        boxes: [
          createSkillBox("squadleader_movement_1", "Movement I: Basic Tactics", ["squadleader_novice"]),
          createSkillBox("squadleader_movement_2", "Movement II: Improved Tactics", ["squadleader_movement_1"]),
          createSkillBox("squadleader_movement_3", "Movement III: Advanced Tactics", ["squadleader_movement_2"]),
          createSkillBox("squadleader_movement_4", "Movement IV: Tactical Master", ["squadleader_movement_3"])
        ]
      },
      offense: {
        name: "Squad Offense",
        boxes: [
          createSkillBox("squadleader_offense_1", "Offense I: Basic Assault", ["squadleader_novice"]),
          createSkillBox("squadleader_offense_2", "Offense II: Improved Assault", ["squadleader_offense_1"]),
          createSkillBox("squadleader_offense_3", "Offense III: Advanced Assault", ["squadleader_offense_2"]),
          createSkillBox("squadleader_offense_4", "Offense IV: Assault Commander", ["squadleader_offense_3"])
        ]
      },
      defense: {
        name: "Squad Defense",
        boxes: [
          createSkillBox("squadleader_defense_1", "Defense I: Basic Defense", ["squadleader_novice"]),
          createSkillBox("squadleader_defense_2", "Defense II: Improved Defense", ["squadleader_defense_1"]),
          createSkillBox("squadleader_defense_3", "Defense III: Advanced Defense", ["squadleader_defense_2"]),
          createSkillBox("squadleader_defense_4", "Defense IV: Defense Commander", ["squadleader_defense_3"])
        ]
      },
      support: {
        name: "Squad Support",
        boxes: [
          createSkillBox("squadleader_support_1", "Support I: Basic Leadership", ["squadleader_novice"]),
          createSkillBox("squadleader_support_2", "Support II: Improved Leadership", ["squadleader_support_1"]),
          createSkillBox("squadleader_support_3", "Support III: Advanced Leadership", ["squadleader_support_2"]),
          createSkillBox("squadleader_support_4", "Support IV: Supreme Commander", ["squadleader_support_3"])
        ]
      }
    }
  },

  {
    id: "imagedesigner",
    name: "Image Designer",
    description: "Master of appearance modification, able to change player appearance and create cosmetic enhancements.",
    type: "elite",
    prerequisites: ["entertainer_technique_4"], // Requires Entertainer Technique IV
    noviceBox: createSkillBox("imagedesigner_novice", "Novice Image Designer"),
    masterBox: createSkillBox("imagedesigner_master", "Master Image Designer", [
      "imagedesigner_hairstyle_4",
      "imagedesigner_exotic_4",
      "imagedesigner_bodyform_4",
      "imagedesigner_markings_4"
    ]),
    skillTrees: {
      hairstyle: {
        name: "Hair Styling",
        boxes: [
          createSkillBox("imagedesigner_hairstyle_1", "Hairstyle I: Basic Styling", ["imagedesigner_novice"]),
          createSkillBox("imagedesigner_hairstyle_2", "Hairstyle II: Improved Styling", ["imagedesigner_hairstyle_1"]),
          createSkillBox("imagedesigner_hairstyle_3", "Hairstyle III: Advanced Styling", ["imagedesigner_hairstyle_2"]),
          createSkillBox("imagedesigner_hairstyle_4", "Hairstyle IV: Master Stylist", ["imagedesigner_hairstyle_3"])
        ]
      },
      exotic: {
        name: "Exotic Features",
        boxes: [
          createSkillBox("imagedesigner_exotic_1", "Exotic I: Basic Features", ["imagedesigner_novice"]),
          createSkillBox("imagedesigner_exotic_2", "Exotic II: Improved Features", ["imagedesigner_exotic_1"]),
          createSkillBox("imagedesigner_exotic_3", "Exotic III: Advanced Features", ["imagedesigner_exotic_2"]),
          createSkillBox("imagedesigner_exotic_4", "Exotic IV: Exotic Master", ["imagedesigner_exotic_3"])
        ]
      },
      bodyform: {
        name: "Body Modification",
        boxes: [
          createSkillBox("imagedesigner_bodyform_1", "Bodyform I: Basic Modification", ["imagedesigner_novice"]),
          createSkillBox("imagedesigner_bodyform_2", "Bodyform II: Improved Modification", ["imagedesigner_bodyform_1"]),
          createSkillBox("imagedesigner_bodyform_3", "Bodyform III: Advanced Modification", ["imagedesigner_bodyform_2"]),
          createSkillBox("imagedesigner_bodyform_4", "Bodyform IV: Body Master", ["imagedesigner_bodyform_3"])
        ]
      },
      markings: {
        name: "Markings & Tattoos",
        boxes: [
          createSkillBox("imagedesigner_markings_1", "Markings I: Basic Markings", ["imagedesigner_novice"]),
          createSkillBox("imagedesigner_markings_2", "Markings II: Improved Markings", ["imagedesigner_markings_1"]),
          createSkillBox("imagedesigner_markings_3", "Markings III: Advanced Markings", ["imagedesigner_markings_2"]),
          createSkillBox("imagedesigner_markings_4", "Markings IV: Marking Master", ["imagedesigner_markings_3"])
        ]
      }
    }
  },

  {
    id: "carbineer",
    name: "Carbineer",
    description: "Elite carbine specialist with advanced automatic weapon training and combat abilities.",
    type: "elite",
    prerequisites: ["marksman_carbine_4"], // Requires Marksman Carbine IV
    noviceBox: createSkillBox("carbineer_novice", "Novice Carbineer"),
    masterBox: createSkillBox("carbineer_master", "Master Carbineer", [
      "carbineer_accuracy_4",
      "carbineer_speed_4",
      "carbineer_ability_4",
      "carbineer_support_4"
    ]),
    skillTrees: {
      accuracy: {
        name: "Carbine Accuracy",
        boxes: [
          createSkillBox("carbineer_accuracy_1", "Accuracy I: Basic Precision", ["carbineer_novice"]),
          createSkillBox("carbineer_accuracy_2", "Accuracy II: Improved Precision", ["carbineer_accuracy_1"]),
          createSkillBox("carbineer_accuracy_3", "Accuracy III: Advanced Precision", ["carbineer_accuracy_2"]),
          createSkillBox("carbineer_accuracy_4", "Accuracy IV: Master Marksman", ["carbineer_accuracy_3"])
        ]
      },
      speed: {
        name: "Carbine Speed",
        boxes: [
          createSkillBox("carbineer_speed_1", "Speed I: Basic Speed", ["carbineer_novice"]),
          createSkillBox("carbineer_speed_2", "Speed II: Improved Speed", ["carbineer_speed_1"]),
          createSkillBox("carbineer_speed_3", "Speed III: Advanced Speed", ["carbineer_speed_2"]),
          createSkillBox("carbineer_speed_4", "Speed IV: Lightning Fast", ["carbineer_speed_3"])
        ]
      },
      ability: {
        name: "Carbine Abilities",
        boxes: [
          createSkillBox("carbineer_ability_1", "Ability I: Basic Techniques", ["carbineer_novice"]),
          createSkillBox("carbineer_ability_2", "Ability II: Improved Techniques", ["carbineer_ability_1"]),
          createSkillBox("carbineer_ability_3", "Ability III: Advanced Techniques", ["carbineer_ability_2"]),
          createSkillBox("carbineer_ability_4", "Ability IV: Combat Master", ["carbineer_ability_3"])
        ]
      },
      support: {
        name: "Carbine Support",
        boxes: [
          createSkillBox("carbineer_support_1", "Support I: Basic Support", ["carbineer_novice"]),
          createSkillBox("carbineer_support_2", "Support II: Improved Support", ["carbineer_support_1"]),
          createSkillBox("carbineer_support_3", "Support III: Advanced Support", ["carbineer_support_2"]),
          createSkillBox("carbineer_support_4", "Support IV: Carbine Specialist", ["carbineer_support_3"])
        ]
      }
    }
  },

  {
    id: "commando",
    name: "Commando",
    description: "Elite heavy weapons specialist with expertise in explosives and advanced combat tactics.",
    type: "elite",
    prerequisites: ["marksman_master", "brawler_unarmed_4"], // Requires Master Marksman and Brawler Unarmed IV
    noviceBox: createSkillBox("commando_novice", "Novice Commando"),
    masterBox: createSkillBox("commando_master", "Master Commando", [
      "commando_heavy_4",
      "commando_speed_4",
      "commando_thrown_4",
      "commando_support_4"
    ]),
    skillTrees: {
      heavy: {
        name: "Heavy Weapons",
        boxes: [
          createSkillBox("commando_heavy_1", "Heavy I: Basic Heavy Weapons", ["commando_novice"]),
          createSkillBox("commando_heavy_2", "Heavy II: Improved Heavy Weapons", ["commando_heavy_1"]),
          createSkillBox("commando_heavy_3", "Heavy III: Advanced Heavy Weapons", ["commando_heavy_2"]),
          createSkillBox("commando_heavy_4", "Heavy IV: Heavy Weapons Master", ["commando_heavy_3"])
        ]
      },
      speed: {
        name: "Weapon Speed",
        boxes: [
          createSkillBox("commando_speed_1", "Speed I: Basic Speed", ["commando_novice"]),
          createSkillBox("commando_speed_2", "Speed II: Improved Speed", ["commando_speed_1"]),
          createSkillBox("commando_speed_3", "Speed III: Advanced Speed", ["commando_speed_2"]),
          createSkillBox("commando_speed_4", "Speed IV: Combat Efficiency", ["commando_speed_3"])
        ]
      },
      thrown: {
        name: "Thrown Weapons",
        boxes: [
          createSkillBox("commando_thrown_1", "Thrown I: Basic Explosives", ["commando_novice"]),
          createSkillBox("commando_thrown_2", "Thrown II: Improved Explosives", ["commando_thrown_1"]),
          createSkillBox("commando_thrown_3", "Thrown III: Advanced Explosives", ["commando_thrown_2"]),
          createSkillBox("commando_thrown_4", "Thrown IV: Demolitions Expert", ["commando_thrown_3"])
        ]
      },
      support: {
        name: "Combat Support",
        boxes: [
          createSkillBox("commando_support_1", "Support I: Basic Tactics", ["commando_novice"]),
          createSkillBox("commando_support_2", "Support II: Improved Tactics", ["commando_support_1"]),
          createSkillBox("commando_support_3", "Support III: Advanced Tactics", ["commando_support_2"]),
          createSkillBox("commando_support_4", "Support IV: Elite Commando", ["commando_support_3"])
        ]
      }
    }
  },

  {
    id: "ranger",
    name: "Ranger",
    description: "Elite wilderness specialist with advanced scouting, tracking, and survival abilities.",
    type: "elite",
    prerequisites: ["scout_master"], // Requires Master Scout
    noviceBox: createSkillBox("ranger_novice", "Novice Ranger"),
    masterBox: createSkillBox("ranger_master", "Master Ranger", [
      "ranger_movement_4",
      "ranger_tracking_4",
      "ranger_harvest_4",
      "ranger_support_4"
    ]),
    skillTrees: {
      movement: {
        name: "Ranger Movement",
        boxes: [
          createSkillBox("ranger_movement_1", "Movement I: Basic Movement", ["ranger_novice"]),
          createSkillBox("ranger_movement_2", "Movement II: Improved Movement", ["ranger_movement_1"]),
          createSkillBox("ranger_movement_3", "Movement III: Advanced Movement", ["ranger_movement_2"]),
          createSkillBox("ranger_movement_4", "Movement IV: Master Scout", ["ranger_movement_3"])
        ]
      },
      tracking: {
        name: "Advanced Tracking",
        boxes: [
          createSkillBox("ranger_tracking_1", "Tracking I: Basic Tracking", ["ranger_novice"]),
          createSkillBox("ranger_tracking_2", "Tracking II: Improved Tracking", ["ranger_tracking_1"]),
          createSkillBox("ranger_tracking_3", "Tracking III: Advanced Tracking", ["ranger_tracking_2"]),
          createSkillBox("ranger_tracking_4", "Tracking IV: Master Tracker", ["ranger_tracking_3"])
        ]
      },
      harvest: {
        name: "Resource Harvesting",
        boxes: [
          createSkillBox("ranger_harvest_1", "Harvest I: Basic Harvesting", ["ranger_novice"]),
          createSkillBox("ranger_harvest_2", "Harvest II: Improved Harvesting", ["ranger_harvest_1"]),
          createSkillBox("ranger_harvest_3", "Harvest III: Advanced Harvesting", ["ranger_harvest_2"]),
          createSkillBox("ranger_harvest_4", "Harvest IV: Master Harvester", ["ranger_harvest_3"])
        ]
      },
      support: {
        name: "Ranger Support",
        boxes: [
          createSkillBox("ranger_support_1", "Support I: Basic Support", ["ranger_novice"]),
          createSkillBox("ranger_support_2", "Support II: Improved Support", ["ranger_support_1"]),
          createSkillBox("ranger_support_3", "Support III: Advanced Support", ["ranger_support_2"]),
          createSkillBox("ranger_support_4", "Support IV: Elite Ranger", ["ranger_support_3"])
        ]
      }
    }
  },

  // FORCE-SENSITIVE PROFESSIONS - Special unlocks require Force sensitivity

  {
    id: "forcecombat",
    name: "Combat Prowess",
    description: "Force-enhanced combat abilities improving accuracy and speed with all weapons.",
    type: "force",
    prerequisites: [], // Special unlock - requires Force sensitivity from village trials
    noviceBox: createSkillBox("forcecombat_novice", "Novice Combat Prowess"),
    masterBox: createSkillBox("forcecombat_master", "Master Combat Prowess", [
      "forcecombat_ranged_accuracy_4",
      "forcecombat_ranged_speed_4",
      "forcecombat_melee_accuracy_4",
      "forcecombat_melee_speed_4"
    ]),
    skillTrees: {
      rangedAccuracy: {
        name: "Ranged Accuracy",
        boxes: [
          createSkillBox("forcecombat_ranged_accuracy_1", "Ranged Accuracy I", ["forcecombat_novice"]),
          createSkillBox("forcecombat_ranged_accuracy_2", "Ranged Accuracy II", ["forcecombat_ranged_accuracy_1"]),
          createSkillBox("forcecombat_ranged_accuracy_3", "Ranged Accuracy III", ["forcecombat_ranged_accuracy_2"]),
          createSkillBox("forcecombat_ranged_accuracy_4", "Ranged Accuracy IV", ["forcecombat_ranged_accuracy_3"])
        ]
      },
      rangedSpeed: {
        name: "Ranged Speed",
        boxes: [
          createSkillBox("forcecombat_ranged_speed_1", "Ranged Speed I", ["forcecombat_novice"]),
          createSkillBox("forcecombat_ranged_speed_2", "Ranged Speed II", ["forcecombat_ranged_speed_1"]),
          createSkillBox("forcecombat_ranged_speed_3", "Ranged Speed III", ["forcecombat_ranged_speed_2"]),
          createSkillBox("forcecombat_ranged_speed_4", "Ranged Speed IV", ["forcecombat_ranged_speed_3"])
        ]
      },
      meleeAccuracy: {
        name: "Melee Accuracy",
        boxes: [
          createSkillBox("forcecombat_melee_accuracy_1", "Melee Accuracy I", ["forcecombat_novice"]),
          createSkillBox("forcecombat_melee_accuracy_2", "Melee Accuracy II", ["forcecombat_melee_accuracy_1"]),
          createSkillBox("forcecombat_melee_accuracy_3", "Melee Accuracy III", ["forcecombat_melee_accuracy_2"]),
          createSkillBox("forcecombat_melee_accuracy_4", "Melee Accuracy IV", ["forcecombat_melee_accuracy_3"])
        ]
      },
      meleeSpeed: {
        name: "Melee Speed",
        boxes: [
          createSkillBox("forcecombat_melee_speed_1", "Melee Speed I", ["forcecombat_novice"]),
          createSkillBox("forcecombat_melee_speed_2", "Melee Speed II", ["forcecombat_melee_speed_1"]),
          createSkillBox("forcecombat_melee_speed_3", "Melee Speed III", ["forcecombat_melee_speed_2"]),
          createSkillBox("forcecombat_melee_speed_4", "Melee Speed IV", ["forcecombat_melee_speed_3"])
        ]
      }
    }
  },

  {
    id: "forcereflexes",
    name: "Enhanced Reflexes",
    description: "Force-enhanced defensive abilities and survival skills for improved protection.",
    type: "force",
    prerequisites: [], // Special unlock - requires Force sensitivity
    noviceBox: createSkillBox("forcereflexes_novice", "Novice Enhanced Reflexes"),
    masterBox: createSkillBox("forcereflexes_master", "Master Enhanced Reflexes", [
      "forcereflexes_ranged_defense_4",
      "forcereflexes_melee_defense_4",
      "forcereflexes_vehicle_control_4",
      "forcereflexes_survival_4"
    ]),
    skillTrees: {
      rangedDefense: {
        name: "Ranged Defense",
        boxes: [
          createSkillBox("forcereflexes_ranged_defense_1", "Ranged Defense I", ["forcereflexes_novice"]),
          createSkillBox("forcereflexes_ranged_defense_2", "Ranged Defense II", ["forcereflexes_ranged_defense_1"]),
          createSkillBox("forcereflexes_ranged_defense_3", "Ranged Defense III", ["forcereflexes_ranged_defense_2"]),
          createSkillBox("forcereflexes_ranged_defense_4", "Ranged Defense IV", ["forcereflexes_ranged_defense_3"])
        ]
      },
      meleeDefense: {
        name: "Melee Defense",
        boxes: [
          createSkillBox("forcereflexes_melee_defense_1", "Melee Defense I", ["forcereflexes_novice"]),
          createSkillBox("forcereflexes_melee_defense_2", "Melee Defense II", ["forcereflexes_melee_defense_1"]),
          createSkillBox("forcereflexes_melee_defense_3", "Melee Defense III", ["forcereflexes_melee_defense_2"]),
          createSkillBox("forcereflexes_melee_defense_4", "Melee Defense IV", ["forcereflexes_melee_defense_3"])
        ]
      },
      vehicleControl: {
        name: "Vehicle Control",
        boxes: [
          createSkillBox("forcereflexes_vehicle_control_1", "Vehicle Control I", ["forcereflexes_novice"]),
          createSkillBox("forcereflexes_vehicle_control_2", "Vehicle Control II", ["forcereflexes_vehicle_control_1"]),
          createSkillBox("forcereflexes_vehicle_control_3", "Vehicle Control III", ["forcereflexes_vehicle_control_2"]),
          createSkillBox("forcereflexes_vehicle_control_4", "Vehicle Control IV", ["forcereflexes_vehicle_control_3"])
        ]
      },
      survival: {
        name: "Survival",
        boxes: [
          createSkillBox("forcereflexes_survival_1", "Survival I", ["forcereflexes_novice"]),
          createSkillBox("forcereflexes_survival_2", "Survival II", ["forcereflexes_survival_1"]),
          createSkillBox("forcereflexes_survival_3", "Survival III", ["forcereflexes_survival_2"]),
          createSkillBox("forcereflexes_survival_4", "Survival IV", ["forcereflexes_survival_3"])
        ]
      }
    }
  },

  {
    id: "forcecrafting",
    name: "Crafting Mastery",
    description: "Force-enhanced crafting abilities improving experimentation and assembly success.",
    type: "force",
    prerequisites: [], // Special unlock - requires Force sensitivity
    noviceBox: createSkillBox("forcecrafting_novice", "Novice Crafting Mastery"),
    masterBox: createSkillBox("forcecrafting_master", "Master Crafting Mastery", [
      "forcecrafting_experimentation_4",
      "forcecrafting_assembly_4",
      "forcecrafting_repair_4",
      "forcecrafting_technique_4"
    ]),
    skillTrees: {
      experimentation: {
        name: "Experimentation",
        boxes: [
          createSkillBox("forcecrafting_experimentation_1", "Experimentation I", ["forcecrafting_novice"]),
          createSkillBox("forcecrafting_experimentation_2", "Experimentation II", ["forcecrafting_experimentation_1"]),
          createSkillBox("forcecrafting_experimentation_3", "Experimentation III", ["forcecrafting_experimentation_2"]),
          createSkillBox("forcecrafting_experimentation_4", "Experimentation IV", ["forcecrafting_experimentation_3"])
        ]
      },
      assembly: {
        name: "Assembly",
        boxes: [
          createSkillBox("forcecrafting_assembly_1", "Assembly I", ["forcecrafting_novice"]),
          createSkillBox("forcecrafting_assembly_2", "Assembly II", ["forcecrafting_assembly_1"]),
          createSkillBox("forcecrafting_assembly_3", "Assembly III", ["forcecrafting_assembly_2"]),
          createSkillBox("forcecrafting_assembly_4", "Assembly IV", ["forcecrafting_assembly_3"])
        ]
      },
      repair: {
        name: "Repair",
        boxes: [
          createSkillBox("forcecrafting_repair_1", "Repair I", ["forcecrafting_novice"]),
          createSkillBox("forcecrafting_repair_2", "Repair II", ["forcecrafting_repair_1"]),
          createSkillBox("forcecrafting_repair_3", "Repair III", ["forcecrafting_repair_2"]),
          createSkillBox("forcecrafting_repair_4", "Repair IV", ["forcecrafting_repair_3"])
        ]
      },
      technique: {
        name: "Technique",
        boxes: [
          createSkillBox("forcecrafting_technique_1", "Technique I", ["forcecrafting_novice"]),
          createSkillBox("forcecrafting_technique_2", "Technique II", ["forcecrafting_technique_1"]),
          createSkillBox("forcecrafting_technique_3", "Technique III", ["forcecrafting_technique_2"]),
          createSkillBox("forcecrafting_technique_4", "Technique IV", ["forcecrafting_technique_3"])
        ]
      }
    }
  },

  {
    id: "forcesenses",
    name: "Heightened Senses",
    description: "Force-enhanced perception and intuition abilities for improved awareness and luck.",
    type: "force",
    prerequisites: [], // Special unlock - requires Force sensitivity
    noviceBox: createSkillBox("forcesenses_novice", "Novice Heightened Senses"),
    masterBox: createSkillBox("forcesenses_master", "Master Heightened Senses", [
      "forcesenses_healing_4",
      "forcesenses_surveying_4",
      "forcesenses_persuasion_4",
      "forcesenses_luck_4"
    ]),
    skillTrees: {
      healing: {
        name: "Healing",
        boxes: [
          createSkillBox("forcesenses_healing_1", "Healing I", ["forcesenses_novice"]),
          createSkillBox("forcesenses_healing_2", "Healing II", ["forcesenses_healing_1"]),
          createSkillBox("forcesenses_healing_3", "Healing III", ["forcesenses_healing_2"]),
          createSkillBox("forcesenses_healing_4", "Healing IV", ["forcesenses_healing_3"])
        ]
      },
      surveying: {
        name: "Surveying",
        boxes: [
          createSkillBox("forcesenses_surveying_1", "Surveying I", ["forcesenses_novice"]),
          createSkillBox("forcesenses_surveying_2", "Surveying II", ["forcesenses_surveying_1"]),
          createSkillBox("forcesenses_surveying_3", "Surveying III", ["forcesenses_surveying_2"]),
          createSkillBox("forcesenses_surveying_4", "Surveying IV", ["forcesenses_surveying_3"])
        ]
      },
      persuasion: {
        name: "Persuasion",
        boxes: [
          createSkillBox("forcesenses_persuasion_1", "Persuasion I", ["forcesenses_novice"]),
          createSkillBox("forcesenses_persuasion_2", "Persuasion II", ["forcesenses_persuasion_1"]),
          createSkillBox("forcesenses_persuasion_3", "Persuasion III", ["forcesenses_persuasion_2"]),
          createSkillBox("forcesenses_persuasion_4", "Persuasion IV", ["forcesenses_persuasion_3"])
        ]
      },
      luck: {
        name: "Luck",
        boxes: [
          createSkillBox("forcesenses_luck_1", "Luck I", ["forcesenses_novice"]),
          createSkillBox("forcesenses_luck_2", "Luck II", ["forcesenses_luck_1"]),
          createSkillBox("forcesenses_luck_3", "Luck III", ["forcesenses_luck_2"]),
          createSkillBox("forcesenses_luck_4", "Luck IV", ["forcesenses_luck_3"])
        ]
      }
    }
  },

  // JEDI DISCIPLINES - Elite Force professions requiring Jedi training

  {
    id: "jedi_lightsaber",
    name: "Lightsaber",
    description: "Master of lightsaber combat with specialized forms and techniques.",
    type: "jedi",
    prerequisites: [], // Special unlock - requires Jedi training and Force sensitivity
    noviceBox: createSkillBox("jedi_lightsaber_novice", "Novice Lightsaber"),
    masterBox: createSkillBox("jedi_lightsaber_master", "Master Lightsaber", [
      "jedi_lightsaber_onehand_4",
      "jedi_lightsaber_twohand_4",
      "jedi_lightsaber_polearm_4",
      "jedi_lightsaber_technique_4"
    ]),
    skillTrees: {
      onehand: {
        name: "One-Handed Lightsaber",
        boxes: [
          createSkillBox("jedi_lightsaber_onehand_1", "One-Handed I: Basic Forms", ["jedi_lightsaber_novice"]),
          createSkillBox("jedi_lightsaber_onehand_2", "One-Handed II: Advanced Forms", ["jedi_lightsaber_onehand_1"]),
          createSkillBox("jedi_lightsaber_onehand_3", "One-Handed III: Master Forms", ["jedi_lightsaber_onehand_2"]),
          createSkillBox("jedi_lightsaber_onehand_4", "One-Handed IV: Form Mastery", ["jedi_lightsaber_onehand_3"])
        ]
      },
      twohand: {
        name: "Two-Handed Lightsaber",
        boxes: [
          createSkillBox("jedi_lightsaber_twohand_1", "Two-Handed I: Basic Stances", ["jedi_lightsaber_novice"]),
          createSkillBox("jedi_lightsaber_twohand_2", "Two-Handed II: Advanced Stances", ["jedi_lightsaber_twohand_1"]),
          createSkillBox("jedi_lightsaber_twohand_3", "Two-Handed III: Master Stances", ["jedi_lightsaber_twohand_2"]),
          createSkillBox("jedi_lightsaber_twohand_4", "Two-Handed IV: Stance Mastery", ["jedi_lightsaber_twohand_3"])
        ]
      },
      polearm: {
        name: "Polearm Lightsaber",
        boxes: [
          createSkillBox("jedi_lightsaber_polearm_1", "Polearm I: Basic Techniques", ["jedi_lightsaber_novice"]),
          createSkillBox("jedi_lightsaber_polearm_2", "Polearm II: Advanced Techniques", ["jedi_lightsaber_polearm_1"]),
          createSkillBox("jedi_lightsaber_polearm_3", "Polearm III: Master Techniques", ["jedi_lightsaber_polearm_2"]),
          createSkillBox("jedi_lightsaber_polearm_4", "Polearm IV: Technique Mastery", ["jedi_lightsaber_polearm_3"])
        ]
      },
      technique: {
        name: "Lightsaber Techniques",
        boxes: [
          createSkillBox("jedi_lightsaber_technique_1", "Technique I: Basic Skills", ["jedi_lightsaber_novice"]),
          createSkillBox("jedi_lightsaber_technique_2", "Technique II: Advanced Skills", ["jedi_lightsaber_technique_1"]),
          createSkillBox("jedi_lightsaber_technique_3", "Technique III: Master Skills", ["jedi_lightsaber_technique_2"]),
          createSkillBox("jedi_lightsaber_technique_4", "Technique IV: Combat Master", ["jedi_lightsaber_technique_3"])
        ]
      }
    }
  },

  {
    id: "jedi_powers",
    name: "Powers",
    description: "Master of offensive Force powers including lightning, mind tricks, and telekinesis.",
    type: "jedi",
    prerequisites: [], // Special unlock - requires Jedi training
    noviceBox: createSkillBox("jedi_powers_novice", "Novice Powers"),
    masterBox: createSkillBox("jedi_powers_master", "Master Powers", [
      "jedi_powers_lightning_4",
      "jedi_powers_mental_4",
      "jedi_powers_debuff_4",
      "jedi_powers_push_4"
    ]),
    skillTrees: {
      lightning: {
        name: "Force Lightning",
        boxes: [
          createSkillBox("jedi_powers_lightning_1", "Lightning I: Basic Shock", ["jedi_powers_novice"]),
          createSkillBox("jedi_powers_lightning_2", "Lightning II: Chain Lightning", ["jedi_powers_lightning_1"]),
          createSkillBox("jedi_powers_lightning_3", "Lightning III: Force Storm", ["jedi_powers_lightning_2"]),
          createSkillBox("jedi_powers_lightning_4", "Lightning IV: Destruction", ["jedi_powers_lightning_3"])
        ]
      },
      mental: {
        name: "Mental Powers",
        boxes: [
          createSkillBox("jedi_powers_mental_1", "Mental I: Mind Trick", ["jedi_powers_novice"]),
          createSkillBox("jedi_powers_mental_2", "Mental II: Force Persuasion", ["jedi_powers_mental_1"]),
          createSkillBox("jedi_powers_mental_3", "Mental III: Mind Control", ["jedi_powers_mental_2"]),
          createSkillBox("jedi_powers_mental_4", "Mental IV: Mental Domination", ["jedi_powers_mental_3"])
        ]
      },
      debuff: {
        name: "Debuffing Powers",
        boxes: [
          createSkillBox("jedi_powers_debuff_1", "Debuff I: Force Weaken", ["jedi_powers_novice"]),
          createSkillBox("jedi_powers_debuff_2", "Debuff II: Force Blind", ["jedi_powers_debuff_1"]),
          createSkillBox("jedi_powers_debuff_3", "Debuff III: Force Stun", ["jedi_powers_debuff_2"]),
          createSkillBox("jedi_powers_debuff_4", "Debuff IV: Force Crush", ["jedi_powers_debuff_3"])
        ]
      },
      push: {
        name: "Telekinetic Powers",
        boxes: [
          createSkillBox("jedi_powers_push_1", "Push I: Force Push", ["jedi_powers_novice"]),
          createSkillBox("jedi_powers_push_2", "Push II: Force Throw", ["jedi_powers_push_1"]),
          createSkillBox("jedi_powers_push_3", "Push III: Force Wave", ["jedi_powers_push_2"]),
          createSkillBox("jedi_powers_push_4", "Push IV: Telekinetic Mastery", ["jedi_powers_push_3"])
        ]
      }
    }
  },

  {
    id: "jedi_healing",
    name: "Healing",
    description: "Master of Force healing abilities and regenerative powers.",
    type: "jedi",
    prerequisites: [], // Special unlock - requires Jedi training
    noviceBox: createSkillBox("jedi_healing_novice", "Novice Healing"),
    masterBox: createSkillBox("jedi_healing_master", "Master Healing", [
      "jedi_healing_damage_4",
      "jedi_healing_wound_4",
      "jedi_healing_other_4",
      "jedi_healing_states_4"
    ]),
    skillTrees: {
      damage: {
        name: "Damage Healing",
        boxes: [
          createSkillBox("jedi_healing_damage_1", "Damage I: Heal Self", ["jedi_healing_novice"]),
          createSkillBox("jedi_healing_damage_2", "Damage II: Enhanced Healing", ["jedi_healing_damage_1"]),
          createSkillBox("jedi_healing_damage_3", "Damage III: Greater Healing", ["jedi_healing_damage_2"]),
          createSkillBox("jedi_healing_damage_4", "Damage IV: Master Healer", ["jedi_healing_damage_3"])
        ]
      },
      wound: {
        name: "Wound Healing",
        boxes: [
          createSkillBox("jedi_healing_wound_1", "Wound I: Heal Wounds", ["jedi_healing_novice"]),
          createSkillBox("jedi_healing_wound_2", "Wound II: Advanced Wound Healing", ["jedi_healing_wound_1"]),
          createSkillBox("jedi_healing_wound_3", "Wound III: Master Wound Healing", ["jedi_healing_wound_2"]),
          createSkillBox("jedi_healing_wound_4", "Wound IV: Regeneration", ["jedi_healing_wound_3"])
        ]
      },
      other: {
        name: "Heal Other",
        boxes: [
          createSkillBox("jedi_healing_other_1", "Other I: Basic Heal Other", ["jedi_healing_novice"]),
          createSkillBox("jedi_healing_other_2", "Other II: Enhanced Heal Other", ["jedi_healing_other_1"]),
          createSkillBox("jedi_healing_other_3", "Other III: Greater Heal Other", ["jedi_healing_other_2"]),
          createSkillBox("jedi_healing_other_4", "Other IV: Group Healing", ["jedi_healing_other_3"])
        ]
      },
      states: {
        name: "State Healing",
        boxes: [
          createSkillBox("jedi_healing_states_1", "States I: Heal State", ["jedi_healing_novice"]),
          createSkillBox("jedi_healing_states_2", "States II: Enhanced State Healing", ["jedi_healing_states_1"]),
          createSkillBox("jedi_healing_states_3", "States III: Master State Healing", ["jedi_healing_states_2"]),
          createSkillBox("jedi_healing_states_4", "States IV: Perfect Balance", ["jedi_healing_states_3"])
        ]
      }
    }
  },

  {
    id: "jedi_enhancements",
    name: "Enhancements",
    description: "Master of Force enhancement abilities for self and allies.",
    type: "jedi",
    prerequisites: [], // Special unlock - requires Jedi training
    noviceBox: createSkillBox("jedi_enhancements_novice", "Novice Enhancements"),
    masterBox: createSkillBox("jedi_enhancements_master", "Master Enhancements", [
      "jedi_enhancements_movement_4",
      "jedi_enhancements_protection_4",
      "jedi_enhancements_resistance_4",
      "jedi_enhancements_synergy_4"
    ]),
    skillTrees: {
      movement: {
        name: "Movement Enhancement",
        boxes: [
          createSkillBox("jedi_enhancements_movement_1", "Movement I: Force Speed", ["jedi_enhancements_novice"]),
          createSkillBox("jedi_enhancements_movement_2", "Movement II: Enhanced Speed", ["jedi_enhancements_movement_1"]),
          createSkillBox("jedi_enhancements_movement_3", "Movement III: Force Run", ["jedi_enhancements_movement_2"]),
          createSkillBox("jedi_enhancements_movement_4", "Movement IV: Lightning Reflexes", ["jedi_enhancements_movement_3"])
        ]
      },
      protection: {
        name: "Force Protection",
        boxes: [
          createSkillBox("jedi_enhancements_protection_1", "Protection I: Force Armor", ["jedi_enhancements_novice"]),
          createSkillBox("jedi_enhancements_protection_2", "Protection II: Enhanced Protection", ["jedi_enhancements_protection_1"]),
          createSkillBox("jedi_enhancements_protection_3", "Protection III: Force Shield", ["jedi_enhancements_protection_2"]),
          createSkillBox("jedi_enhancements_protection_4", "Protection IV: Invulnerability", ["jedi_enhancements_protection_3"])
        ]
      },
      resistance: {
        name: "Force Resistance",
        boxes: [
          createSkillBox("jedi_enhancements_resistance_1", "Resistance I: Mental Resistance", ["jedi_enhancements_novice"]),
          createSkillBox("jedi_enhancements_resistance_2", "Resistance II: Force Resistance", ["jedi_enhancements_resistance_1"]),
          createSkillBox("jedi_enhancements_resistance_3", "Resistance III: Greater Resistance", ["jedi_enhancements_resistance_2"]),
          createSkillBox("jedi_enhancements_resistance_4", "Resistance IV: Force Immunity", ["jedi_enhancements_resistance_3"])
        ]
      },
      synergy: {
        name: "Force Synergy",
        boxes: [
          createSkillBox("jedi_enhancements_synergy_1", "Synergy I: Force Boost", ["jedi_enhancements_novice"]),
          createSkillBox("jedi_enhancements_synergy_2", "Synergy II: Enhanced Synergy", ["jedi_enhancements_synergy_1"]),
          createSkillBox("jedi_enhancements_synergy_3", "Synergy III: Group Enhancement", ["jedi_enhancements_synergy_2"]),
          createSkillBox("jedi_enhancements_synergy_4", "Synergy IV: Force Mastery", ["jedi_enhancements_synergy_3"])
        ]
      }
    }
  },

  {
    id: "jedi_defender",
    name: "Defender",
    description: "Master of defensive Force abilities and lightsaber deflection techniques.",
    type: "jedi",
    prerequisites: [], // Special unlock - requires Jedi training
    noviceBox: createSkillBox("jedi_defender_novice", "Novice Defender"),
    masterBox: createSkillBox("jedi_defender_master", "Master Defender", [
      "jedi_defender_melee_defense_4",
      "jedi_defender_ranged_defense_4",
      "jedi_defender_toughness_4",
      "jedi_defender_reflect_4"
    ]),
    skillTrees: {
      meleeDefense: {
        name: "Melee Defense",
        boxes: [
          createSkillBox("jedi_defender_melee_defense_1", "Melee Defense I: Basic Parry", ["jedi_defender_novice"]),
          createSkillBox("jedi_defender_melee_defense_2", "Melee Defense II: Advanced Parry", ["jedi_defender_melee_defense_1"]),
          createSkillBox("jedi_defender_melee_defense_3", "Melee Defense III: Master Parry", ["jedi_defender_melee_defense_2"]),
          createSkillBox("jedi_defender_melee_defense_4", "Melee Defense IV: Perfect Defense", ["jedi_defender_melee_defense_3"])
        ]
      },
      rangedDefense: {
        name: "Ranged Defense",
        boxes: [
          createSkillBox("jedi_defender_ranged_defense_1", "Ranged Defense I: Basic Deflection", ["jedi_defender_novice"]),
          createSkillBox("jedi_defender_ranged_defense_2", "Ranged Defense II: Advanced Deflection", ["jedi_defender_ranged_defense_1"]),
          createSkillBox("jedi_defender_ranged_defense_3", "Ranged Defense III: Master Deflection", ["jedi_defender_ranged_defense_2"]),
          createSkillBox("jedi_defender_ranged_defense_4", "Ranged Defense IV: Blaster Immunity", ["jedi_defender_ranged_defense_3"])
        ]
      },
      toughness: {
        name: "Force Toughness",
        boxes: [
          createSkillBox("jedi_defender_toughness_1", "Toughness I: Enhanced Endurance", ["jedi_defender_novice"]),
          createSkillBox("jedi_defender_toughness_2", "Toughness II: Force Toughness", ["jedi_defender_toughness_1"]),
          createSkillBox("jedi_defender_toughness_3", "Toughness III: Greater Toughness", ["jedi_defender_toughness_2"]),
          createSkillBox("jedi_defender_toughness_4", "Toughness IV: Unbreakable", ["jedi_defender_toughness_3"])
        ]
      },
      reflect: {
        name: "Saber Reflect",
        boxes: [
          createSkillBox("jedi_defender_reflect_1", "Reflect I: Basic Reflection", ["jedi_defender_novice"]),
          createSkillBox("jedi_defender_reflect_2", "Reflect II: Aimed Reflection", ["jedi_defender_reflect_1"]),
          createSkillBox("jedi_defender_reflect_3", "Reflect III: Multi Reflection", ["jedi_defender_reflect_2"]),
          createSkillBox("jedi_defender_reflect_4", "Reflect IV: Saber Mastery", ["jedi_defender_reflect_3"])
        ]
      }
    }
  },

  // PILOT PROFESSIONS - Space combat specialists

  {
    id: "pilot",
    name: "Pilot",
    description: "Basic starfighter pilot with fundamental space combat and ship operation skills.",
    type: "pilot",
    prerequisites: [], // Basic profession - no prerequisites
    noviceBox: createSkillBox("pilot_novice", "Novice Pilot"),
    masterBox: createSkillBox("pilot_master", "Master Pilot", [
      "pilot_droid_4",
      "pilot_procedures_4",
      "pilot_starships_4",
      "pilot_weapons_4"
    ]),
    skillTrees: {
      droid: {
        name: "Droid Interface",
        boxes: [
          createSkillBox("pilot_droid_1", "Droid I: Interface Basics", ["pilot_novice"]),
          createSkillBox("pilot_droid_2", "Droid II: Engineering Algorithms", ["pilot_droid_1"]),
          createSkillBox("pilot_droid_3", "Droid III: System Balance Programming", ["pilot_droid_2"]),
          createSkillBox("pilot_droid_4", "Droid IV: Intelligence Theory", ["pilot_droid_3"])
        ]
      },
      procedures: {
        name: "Flight Procedures",
        boxes: [
          createSkillBox("pilot_procedures_1", "Procedures I: Basic Training", ["pilot_novice"]),
          createSkillBox("pilot_procedures_2", "Procedures II: Starship Defense", ["pilot_procedures_1"]),
          createSkillBox("pilot_procedures_3", "Procedures III: Advanced Technique", ["pilot_procedures_2"]),
          createSkillBox("pilot_procedures_4", "Procedures IV: Expert Technique", ["pilot_procedures_3"])
        ]
      },
      starships: {
        name: "Starship Operation",
        boxes: [
          createSkillBox("pilot_starships_1", "Starships I: Basic Fighters", ["pilot_novice"]),
          createSkillBox("pilot_starships_2", "Starships II: Advanced Fighters", ["pilot_starships_1"]),
          createSkillBox("pilot_starships_3", "Starships III: Special Warships", ["pilot_starships_2"]),
          createSkillBox("pilot_starships_4", "Starships IV: Exotic Vessels", ["pilot_starships_3"])
        ]
      },
      weapons: {
        name: "Starship Weapons",
        boxes: [
          createSkillBox("pilot_weapons_1", "Weapons I: Basic Components", ["pilot_novice"]),
          createSkillBox("pilot_weapons_2", "Weapons II: Intermediate Components", ["pilot_weapons_1"]),
          createSkillBox("pilot_weapons_3", "Weapons III: Advanced Components", ["pilot_weapons_2"]),
          createSkillBox("pilot_weapons_4", "Weapons IV: Heavy Components", ["pilot_weapons_3"])
        ]
      }
    }
  },

  {
    id: "imperial_pilot",
    name: "Imperial Pilot",
    description: "Elite Imperial Navy pilot specializing in TIE fighters and Imperial technology.",
    type: "pilot",
    prerequisites: ["pilot_starships_4"], // Requires Master Pilot Starships IV
    noviceBox: createSkillBox("imperial_pilot_novice", "Imperial Pilot Initiate"),
    masterBox: createSkillBox("imperial_pilot_master", "Imperial Pilot Ace", [
      "imperial_pilot_droid_4",
      "imperial_pilot_procedures_4",
      "imperial_pilot_starships_4",
      "imperial_pilot_weapons_4"
    ]),
    skillTrees: {
      droid: {
        name: "Astromech Management",
        boxes: [
          createSkillBox("imperial_pilot_droid_1", "Astromech I: Droid Interface Basics", ["imperial_pilot_novice"]),
          createSkillBox("imperial_pilot_droid_2", "Astromech II: Engineering Algorithms", ["imperial_pilot_droid_1"]),
          createSkillBox("imperial_pilot_droid_3", "Astromech III: System Balance Programming", ["imperial_pilot_droid_2"]),
          createSkillBox("imperial_pilot_droid_4", "Astromech IV: Droid Intelligence Theory", ["imperial_pilot_droid_3"])
        ]
      },
      procedures: {
        name: "Imperial Training",
        boxes: [
          createSkillBox("imperial_pilot_procedures_1", "Imperial I: Basic Training", ["imperial_pilot_novice"]),
          createSkillBox("imperial_pilot_procedures_2", "Imperial II: Imperial Regular", ["imperial_pilot_procedures_1"]),
          createSkillBox("imperial_pilot_procedures_3", "Imperial III: Special Forces", ["imperial_pilot_procedures_2"]),
          createSkillBox("imperial_pilot_procedures_4", "Imperial IV: Elite TIE Guard", ["imperial_pilot_procedures_3"])
        ]
      },
      starships: {
        name: "Imperial Technology",
        boxes: [
          createSkillBox("imperial_pilot_starships_1", "Technology I: Intermediate TIE Operations", ["imperial_pilot_novice"]),
          createSkillBox("imperial_pilot_starships_2", "Technology II: Advanced TIE Operations", ["imperial_pilot_starships_1"]),
          createSkillBox("imperial_pilot_starships_3", "Technology III: Advanced TIE Vessels", ["imperial_pilot_starships_2"]),
          createSkillBox("imperial_pilot_starships_4", "Technology IV: TIE Experimental", ["imperial_pilot_starships_3"])
        ]
      },
      weapons: {
        name: "Imperial Equipment",
        boxes: [
          createSkillBox("imperial_pilot_weapons_1", "Equipment I: Basic Imperial Components", ["imperial_pilot_novice"]),
          createSkillBox("imperial_pilot_weapons_2", "Equipment II: Intermediate Imperial Components", ["imperial_pilot_weapons_1"]),
          createSkillBox("imperial_pilot_weapons_3", "Equipment III: Advanced Imperial Components", ["imperial_pilot_weapons_2"]),
          createSkillBox("imperial_pilot_weapons_4", "Equipment IV: Heavy Imperial Components", ["imperial_pilot_weapons_3"])
        ]
      }
    }
  },

  {
    id: "rebel_pilot",
    name: "Rebel Pilot",
    description: "Alliance starfighter pilot specializing in X-Wings, Y-Wings and Rebel tactics.",
    type: "pilot",
    prerequisites: ["pilot_starships_4"], // Requires Master Pilot Starships IV
    noviceBox: createSkillBox("rebel_pilot_novice", "Alliance Starfighter Trainee"),
    masterBox: createSkillBox("rebel_pilot_master", "Rebel Alliance Master Pilot", [
      "rebel_pilot_droid_4",
      "rebel_pilot_procedures_4",
      "rebel_pilot_starships_4",
      "rebel_pilot_weapons_4"
    ]),
    skillTrees: {
      droid: {
        name: "Droid Interface",
        boxes: [
          createSkillBox("rebel_pilot_droid_1", "Droid I: Interface Basics", ["rebel_pilot_novice"]),
          createSkillBox("rebel_pilot_droid_2", "Droid II: Engineering Algorithms", ["rebel_pilot_droid_1"]),
          createSkillBox("rebel_pilot_droid_3", "Droid III: System Balance Programming", ["rebel_pilot_droid_2"]),
          createSkillBox("rebel_pilot_droid_4", "Droid IV: Intelligence Theory", ["rebel_pilot_droid_3"])
        ]
      },
      procedures: {
        name: "Combat Procedures",
        boxes: [
          createSkillBox("rebel_pilot_procedures_1", "Procedures I: Survival Tactics", ["rebel_pilot_novice"]),
          createSkillBox("rebel_pilot_procedures_2", "Procedures II: Space Combat Techniques", ["rebel_pilot_procedures_1"]),
          createSkillBox("rebel_pilot_procedures_3", "Procedures III: Advanced Space Combat", ["rebel_pilot_procedures_2"]),
          createSkillBox("rebel_pilot_procedures_4", "Procedures IV: Special Weapons & Tactics", ["rebel_pilot_procedures_3"])
        ]
      },
      starships: {
        name: "Starfighter Training",
        boxes: [
          createSkillBox("rebel_pilot_starships_1", "Starfighter I: Basic Continuation Training", ["rebel_pilot_novice"]),
          createSkillBox("rebel_pilot_starships_2", "Starfighter II: Multi-role Craft", ["rebel_pilot_starships_1"]),
          createSkillBox("rebel_pilot_starships_3", "Starfighter III: Space Superiority Fighters", ["rebel_pilot_starships_2"]),
          createSkillBox("rebel_pilot_starships_4", "Starfighter IV: Hyper-Maneuverable", ["rebel_pilot_starships_3"])
        ]
      },
      weapons: {
        name: "Alliance Equipment",
        boxes: [
          createSkillBox("rebel_pilot_weapons_1", "Equipment A: Basic Alliance Components", ["rebel_pilot_novice"]),
          createSkillBox("rebel_pilot_weapons_2", "Equipment B: Intermediate Alliance Components", ["rebel_pilot_weapons_1"]),
          createSkillBox("rebel_pilot_weapons_3", "Equipment C: Advanced Alliance Components", ["rebel_pilot_weapons_2"]),
          createSkillBox("rebel_pilot_weapons_4", "Equipment D: Heavy Alliance Components", ["rebel_pilot_weapons_3"])
        ]
      }
    }
  }
];
