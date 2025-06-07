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
    skillPoints: skillPoints > 0 ? skillPoints : 15, // fallback to 15 if no data
    xpCost: xpCost > 0 ? xpCost : 1000, // fallback to 1000 if no data
    prerequisites,
    grants: {
      commands: commands.length > 0 ? commands : [],
      modifiers: Object.keys(skillModifiers).length > 0 ? skillModifiers : {}
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
          createSkillBox("brawler_1hand_1", "One-Handed I: Basic Techniques", ["brawler_novice"]),
          createSkillBox("brawler_1hand_2", "One-Handed II: Advanced Techniques", ["brawler_1hand_1"]),
          createSkillBox("brawler_1hand_3", "One-Handed III: Weapon Mastery", ["brawler_1hand_2"]),
          createSkillBox("brawler_1hand_4", "One-Handed IV: Combat Mastery", ["brawler_1hand_3"])
        ]
      },
      twoHanded: {
        name: "Two-Handed Weapons",
        boxes: [
          createSkillBox("brawler_2hand_1", "Two-Handed I: Basic Techniques", ["brawler_novice"]),
          createSkillBox("brawler_2hand_2", "Two-Handed II: Advanced Techniques", ["brawler_2hand_1"]),
          createSkillBox("brawler_2hand_3", "Two-Handed III: Weapon Mastery", ["brawler_2hand_2"]),
          createSkillBox("brawler_2hand_4", "Two-Handed IV: Combat Mastery", ["brawler_2hand_3"])
        ]
      },
      polearm: {
        name: "Polearm Combat",
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
    description: "A profession focused on ranged weapon combat.",
    type: "basic",
    noviceBox: createSkillBox("marksman_novice", "Novice Marksman"),
    masterBox: createSkillBox("marksman_master", "Master Marksman", [
      "marksman_pistol_4",
      "marksman_rifle_4",
      "marksman_support_4"
    ]),
    skillTrees: {
      pistol: {
        name: "Pistol",
        boxes: [
          createSkillBox("marksman_pistol_1", "Pistol I: Marksman Fundamentals", ["marksman_novice"]),
          createSkillBox("marksman_pistol_2", "Pistol II: Wounding Shots", ["marksman_pistol_1"]),
          createSkillBox("marksman_pistol_3", "Pistol III: Stopping Shots", ["marksman_pistol_2"]),
          createSkillBox("marksman_pistol_4", "Pistol IV: Gunslinger", ["marksman_pistol_3"])
        ]
      },
      rifle: {
        name: "Rifle",
        boxes: [
          createSkillBox("marksman_rifle_1", "Rifle I: Basic Training", ["marksman_novice"]),
          createSkillBox("marksman_rifle_2", "Rifle II: Precise Shots", ["marksman_rifle_1"]),
          createSkillBox("marksman_rifle_3", "Rifle III: Called Shots", ["marksman_rifle_2"]),
          createSkillBox("marksman_rifle_4", "Rifle IV: Sharpshooter", ["marksman_rifle_3"])
        ]
      },
      support: {
        name: "Support",
        boxes: [
          createSkillBox("marksman_support_1", "Support I: Thrown Weapons", ["marksman_novice"]),
          createSkillBox("marksman_support_2", "Support II: First Aid", ["marksman_support_1"]),
          createSkillBox("marksman_support_3", "Support III: Postured Shooting", ["marksman_support_2"]),
          createSkillBox("marksman_support_4", "Support IV: Advanced Positioning", ["marksman_support_3"])
        ]
      }
    }
  },

  {
    id: "entertainer",
    name: "Entertainer", 
    description: "A profession focused on social skills and entertainment.",
    type: "basic",
    noviceBox: createSkillBox("entertainer_novice", "Novice Entertainer"),
    masterBox: createSkillBox("entertainer_master", "Master Entertainer", [
      "entertainer_hairstyle_4",
      "entertainer_music_4",
      "entertainer_dance_4",
      "entertainer_healing_4"
    ]),
    skillTrees: {
      hairstyle: {
        name: "Image Design",
        boxes: [
          createSkillBox("entertainer_hairstyle_1", "Image Design I: Basic Styling", ["entertainer_novice"]),
          createSkillBox("entertainer_hairstyle_2", "Image Design II: Body Styling", ["entertainer_hairstyle_1"]),
          createSkillBox("entertainer_hairstyle_3", "Image Design III: Exotic Styling", ["entertainer_hairstyle_2"]),
          createSkillBox("entertainer_hairstyle_4", "Image Design IV: Hairstylist", ["entertainer_hairstyle_3"])
        ]
      },
      music: {
        name: "Music",
        boxes: [
          createSkillBox("entertainer_music_1", "Music I: Apprentice Musician", ["entertainer_novice"]),
          createSkillBox("entertainer_music_2", "Music II: Journeyman Musician", ["entertainer_music_1"]),
          createSkillBox("entertainer_music_3", "Music III: Expert Musician", ["entertainer_music_2"]),
          createSkillBox("entertainer_music_4", "Music IV: Master Musician", ["entertainer_music_3"])
        ]
      },
      dance: {
        name: "Dance",
        boxes: [
          createSkillBox("entertainer_dance_1", "Dance I: Apprentice Dancer", ["entertainer_novice"]),
          createSkillBox("entertainer_dance_2", "Dance II: Journeyman Dancer", ["entertainer_dance_1"]),
          createSkillBox("entertainer_dance_3", "Dance III: Expert Dancer", ["entertainer_dance_2"]),
          createSkillBox("entertainer_dance_4", "Dance IV: Master Dancer", ["entertainer_dance_3"])
        ]
      },
      healing: {
        name: "Healing",
        boxes: [
          createSkillBox("entertainer_healing_1", "Healing I: Wound Healing", ["entertainer_novice"]),
          createSkillBox("entertainer_healing_2", "Healing II: Shock Healing", ["entertainer_healing_1"]),
          createSkillBox("entertainer_healing_3", "Healing III: Mind Healing", ["entertainer_healing_2"]),
          createSkillBox("entertainer_healing_4", "Healing IV: Master Healer", ["entertainer_healing_3"])
        ]
      }
    }
  },

  {
    id: "medic",
    name: "Medic",
    description: "A profession focused on healing and medical support.",
    type: "basic",
    noviceBox: createSkillBox("medic_novice", "Novice Medic"),
    masterBox: createSkillBox("medic_master", "Master Medic", [
      "medic_healing_4",
      "medic_injury_4",
      "medic_medicine_4",
      "medic_ability_4"
    ]),
    skillTrees: {
      healing: {
        name: "Healing",
        boxes: [
          createSkillBox("medic_healing_1", "Healing I: Diagnosis", ["medic_novice"]),
          createSkillBox("medic_healing_2", "Healing II: Treatment", ["medic_healing_1"]),
          createSkillBox("medic_healing_3", "Healing III: Emergency Medicine", ["medic_healing_2"]),
          createSkillBox("medic_healing_4", "Healing IV: Triage", ["medic_healing_3"])
        ]
      },
      injury: {
        name: "Injury Treatment",
        boxes: [
          createSkillBox("medic_injury_1", "Injury I: First Aid", ["medic_novice"]),
          createSkillBox("medic_injury_2", "Injury II: Wound Treatment", ["medic_injury_1"]),
          createSkillBox("medic_injury_3", "Injury III: Advanced Treatment", ["medic_injury_2"]),
          createSkillBox("medic_injury_4", "Injury IV: Surgery", ["medic_injury_3"])
        ]
      },
      medicine: {
        name: "Medicine Crafting",
        boxes: [
          createSkillBox("medic_medicine_1", "Medicine I: Novice Pharmacist", ["medic_novice"]),
          createSkillBox("medic_medicine_2", "Medicine II: Pharmacist", ["medic_medicine_1"]),
          createSkillBox("medic_medicine_3", "Medicine III: Drug Therapist", ["medic_medicine_2"]),
          createSkillBox("medic_medicine_4", "Medicine IV: Combat Medicine", ["medic_medicine_3"])
        ]
      },
      ability: {
        name: "Medical Abilities",
        boxes: [
          createSkillBox("medic_ability_1", "Ability I: Resuscitation", ["medic_novice"]),
          createSkillBox("medic_ability_2", "Ability II: Medical Foraging", ["medic_ability_1"]),
          createSkillBox("medic_ability_3", "Ability III: Medical Enhancement", ["medic_ability_2"]),
          createSkillBox("medic_ability_4", "Ability IV: Medical Specialization", ["medic_ability_3"])
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
      "scout_camp_4",
      "scout_explore_4", 
      "scout_harvest_4",
      "scout_track_4"
    ]),
    skillTrees: {
      camp: {
        name: "Camping",
        boxes: [
          createSkillBox("scout_camp_1", "Camping I: Wilderness Survival", ["scout_novice"]),
          createSkillBox("scout_camp_2", "Camping II: Intermediate Survival", ["scout_camp_1"]),
          createSkillBox("scout_camp_3", "Camping III: Advanced Survival", ["scout_camp_2"]),
          createSkillBox("scout_camp_4", "Camping IV: Master Camper", ["scout_camp_3"])
        ]
      },
      explore: {
        name: "Exploration",
        boxes: [
          createSkillBox("scout_explore_1", "Exploration I: Terrain Negotiation", ["scout_novice"]),
          createSkillBox("scout_explore_2", "Exploration II: Movement", ["scout_explore_1"]),
          createSkillBox("scout_explore_3", "Exploration III: Advanced Exploration", ["scout_explore_2"]),
          createSkillBox("scout_explore_4", "Exploration IV: Pathfinding", ["scout_explore_3"])
        ]
      },
      harvest: {
        name: "Harvesting",
        boxes: [
          createSkillBox("scout_harvest_1", "Harvesting I: Foraging", ["scout_novice"]),
          createSkillBox("scout_harvest_2", "Harvesting II: Hunting", ["scout_harvest_1"]),
          createSkillBox("scout_harvest_3", "Harvesting III: Trapping", ["scout_harvest_2"]),
          createSkillBox("scout_harvest_4", "Harvesting IV: Master Harvester", ["scout_harvest_3"])
        ]
      },
      track: {
        name: "Tracking",
        boxes: [
          createSkillBox("scout_track_1", "Tracking I: Creature Knowledge", ["scout_novice"]),
          createSkillBox("scout_track_2", "Tracking II: Biological Analysis", ["scout_track_1"]),
          createSkillBox("scout_track_3", "Tracking III: Creature Tracking", ["scout_track_2"]),
          createSkillBox("scout_track_4", "Tracking IV: Advanced Tracking", ["scout_track_3"])
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
      "artisan_business_4",
      "artisan_domestic_4",
      "artisan_engineering_4", 
      "artisan_surveying_4"
    ]),
    skillTrees: {
      business: {
        name: "Business",
        boxes: [
          createSkillBox("artisan_business_1", "Business I: Apprentice Entrepreneur", ["artisan_novice"]),
          createSkillBox("artisan_business_2", "Business II: Entrepreneur", ["artisan_business_1"]),
          createSkillBox("artisan_business_3", "Business III: Journeyman Entrepreneur", ["artisan_business_2"]),
          createSkillBox("artisan_business_4", "Business IV: Master Entrepreneur", ["artisan_business_3"])
        ]
      },
      domestic: {
        name: "Domestic Arts",
        boxes: [
          createSkillBox("artisan_domestic_1", "Domestic I: Apprentice Domestic Arts", ["artisan_novice"]),
          createSkillBox("artisan_domestic_2", "Domestic II: Domestic Arts", ["artisan_domestic_1"]),
          createSkillBox("artisan_domestic_3", "Domestic III: Journeyman Domestic Arts", ["artisan_domestic_2"]),
          createSkillBox("artisan_domestic_4", "Domestic IV: Master Domestic Arts", ["artisan_domestic_3"])
        ]
      },
      engineering: {
        name: "Engineering",
        boxes: [
          createSkillBox("artisan_engineering_1", "Engineering I: Apprentice Engineer", ["artisan_novice"]),
          createSkillBox("artisan_engineering_2", "Engineering II: Engineer", ["artisan_engineering_1"]),
          createSkillBox("artisan_engineering_3", "Engineering III: Journeyman Engineer", ["artisan_engineering_2"]),
          createSkillBox("artisan_engineering_4", "Engineering IV: Master Engineer", ["artisan_engineering_3"])
        ]
      },
      surveying: {
        name: "Surveying",
        boxes: [
          createSkillBox("artisan_surveying_1", "Surveying I: Apprentice Surveyor", ["artisan_novice"]),
          createSkillBox("artisan_surveying_2", "Surveying II: Surveyor", ["artisan_surveying_1"]),
          createSkillBox("artisan_surveying_3", "Surveying III: Journeyman Surveyor", ["artisan_surveying_2"]),
          createSkillBox("artisan_surveying_4", "Surveying IV: Master Surveyor", ["artisan_surveying_3"])
        ]
      }
    }
  }
];
