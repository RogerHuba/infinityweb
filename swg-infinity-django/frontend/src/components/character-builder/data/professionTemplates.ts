export interface ProfessionTemplate {
  id: string;
  name: string;
  description: string;
  category: "Tank" | "DPS" | "Crafter" | "Support" | "Hybrid" | "Entertainer";
  difficulty: "Beginner" | "Intermediate" | "Advanced";
  totalSkillPoints: number;
  recommendedSpecies?: string[];
  skillBoxes: string[];
  playStyle: string;
  strengths: string[];
  weaknesses: string[];
  tips: string[];
}

export const professionTemplates: ProfessionTemplate[] = [
  // TANK BUILDS
  {
    id: "heavy_tank",
    name: "Heavy Tank",
    description: "Maximum survivability with heavy armor and defensive capabilities. Perfect for taking damage in group content.",
    category: "Tank",
    difficulty: "Beginner",
    totalSkillPoints: 250,
    recommendedSpecies: ["wookiee", "trandoshan"],
    skillBoxes: [
      // Brawler Foundation
      "brawler_novice",
      "brawler_2hand_1",
      "brawler_2hand_2",
      "brawler_2hand_3",
      "brawler_2hand_4",
      // Swordsman Elite
      "swordsman_novice",
      "swordsman_power_1",
      "swordsman_power_2",
      "swordsman_power_3",
      "swordsman_power_4",
      "swordsman_technique_1",
      "swordsman_technique_2",
      "swordsman_technique_3",
      "swordsman_technique_4",
      "swordsman_master",
      // Medic Support
      "medic_novice",
      "medic_injury_1",
      "medic_injury_2",
      "medic_injury_3",
      "medic_injury_4",
      // Enhanced Survivability
      "scout_novice",
      "scout_exploration_1",
      "scout_exploration_2",
      "scout_exploration_3",
      "scout_exploration_4"
    ],
    playStyle: "Stand in front, absorb damage, protect allies",
    strengths: ["Extremely high survivability", "Powerful melee damage", "Group protection"],
    weaknesses: ["Limited ranged options", "Slower movement", "Resource dependent"],
    tips: [
      "Focus on Constitution and Strength stats",
      "Use two-handed weapons for maximum damage",
      "Learn to manage HAM pools effectively",
      "Position yourself between enemies and allies"
    ]
  },

  {
    id: "defensive_specialist",
    name: "Defensive Specialist",
    description: "Balanced tank with defensive abilities and group support. Great for PvP and group content.",
    category: "Tank",
    difficulty: "Intermediate",
    totalSkillPoints: 250,
    recommendedSpecies: ["human", "zabrak"],
    skillBoxes: [
      // Brawler Foundation
      "brawler_novice",
      "brawler_1hand_1",
      "brawler_1hand_2",
      "brawler_1hand_3",
      "brawler_1hand_4",
      // Fencer Elite
      "fencer_novice",
      "fencer_technique_1",
      "fencer_technique_2",
      "fencer_technique_3",
      "fencer_technique_4",
      "fencer_support_1",
      "fencer_support_2",
      "fencer_support_3",
      "fencer_support_4",
      "fencer_master",
      // Medic Foundation
      "medic_novice",
      "medic_injury_1",
      "medic_injury_2",
      "medic_injury_speed_1",
      "medic_injury_speed_2",
      // Enhanced Defense
      "scout_novice",
      "scout_exploration_1",
      "scout_exploration_2"
    ],
    playStyle: "Agile tank with precision strikes and defensive abilities",
    strengths: ["High accuracy", "Good defenses", "Versatile combat options"],
    weaknesses: ["Lower raw damage than heavy tank", "Requires skill to master"],
    tips: [
      "Master the timing of defensive abilities",
      "Use one-handed weapons with shields when possible",
      "Focus on Agility and Constitution",
      "Learn enemy attack patterns"
    ]
  },

  // DPS BUILDS
  {
    id: "marksman_sniper",
    name: "Precision Sniper",
    description: "Long-range damage dealer with devastating accuracy. Perfect for picking off enemies from distance.",
    category: "DPS",
    difficulty: "Intermediate",
    totalSkillPoints: 250,
    recommendedSpecies: ["human", "bothan"],
    skillBoxes: [
      // Marksman Foundation
      "marksman_novice",
      "marksman_rifle_1",
      "marksman_rifle_2",
      "marksman_rifle_3",
      "marksman_rifle_4",
      // Rifleman Elite
      "rifleman_novice",
      "rifleman_sniper_1",
      "rifleman_sniper_2",
      "rifleman_sniper_3",
      "rifleman_sniper_4",
      "rifleman_precision_1",
      "rifleman_precision_2",
      "rifleman_precision_3",
      "rifleman_precision_4",
      "rifleman_master",
      // Scout Support
      "scout_novice",
      "scout_hunting_1",
      "scout_hunting_2",
      "scout_hunting_3",
      "scout_hunting_4",
      // Enhanced Positioning
      "scout_exploration_1",
      "scout_exploration_2"
    ],
    playStyle: "Stay at maximum range, eliminate targets with precision shots",
    strengths: ["Extremely high single-target damage", "Long range", "Stealth capabilities"],
    weaknesses: ["Vulnerable in close combat", "Limited area damage", "Ammo dependent"],
    tips: [
      "Always maintain maximum range",
      "Focus on Precision and Agility stats",
      "Use terrain for cover and positioning",
      "Craft or buy high-quality ammunition"
    ]
  },

  {
    id: "pistol_gunslinger",
    name: "Twin Pistol Gunslinger",
    description: "Fast-paced dual-wielding combat specialist with high burst damage and mobility.",
    category: "DPS",
    difficulty: "Advanced",
    totalSkillPoints: 250,
    recommendedSpecies: ["human", "rodian"],
    skillBoxes: [
      // Marksman Foundation
      "marksman_novice",
      "marksman_pistol_1",
      "marksman_pistol_2",
      "marksman_pistol_3",
      "marksman_pistol_4",
      // Pistoleer Elite
      "pistoleer_novice",
      "pistoleer_speed_1",
      "pistoleer_speed_2",
      "pistoleer_speed_3",
      "pistoleer_speed_4",
      "pistoleer_dual_1",
      "pistoleer_dual_2",
      "pistoleer_dual_3",
      "pistoleer_dual_4",
      "pistoleer_master",
      // Enhanced Mobility
      "scout_novice",
      "scout_exploration_1",
      "scout_exploration_2",
      "scout_exploration_3",
      // Combat Support
      "brawler_novice",
      "brawler_unarmed_1",
      "brawler_unarmed_2"
    ],
    playStyle: "Mobile hit-and-run tactics with devastating burst damage",
    strengths: ["Very high burst damage", "Excellent mobility", "Dual-wield capabilities"],
    weaknesses: ["Lower sustained damage", "Resource intensive", "Requires precise timing"],
    tips: [
      "Master the timing of speed abilities",
      "Focus on Agility and Precision",
      "Use movement to avoid damage",
      "Coordinate burst windows with team"
    ]
  },

  {
    id: "melee_berserker",
    name: "Melee Berserker",
    description: "Aggressive close-combat specialist focused on overwhelming enemies with raw power.",
    category: "DPS",
    difficulty: "Beginner",
    totalSkillPoints: 245,
    recommendedSpecies: ["wookiee", "trandoshan"],
    skillBoxes: [
      // Brawler Foundation
      "brawler_novice",
      "brawler_2hand_1",
      "brawler_2hand_2",
      "brawler_2hand_3",
      "brawler_2hand_4",
      "brawler_unarmed_1",
      "brawler_unarmed_2",
      "brawler_unarmed_3",
      "brawler_unarmed_4",
      // Enhanced Combat
      "brawler_1hand_1",
      "brawler_1hand_2",
      "brawler_polearm_1",
      "brawler_polearm_2",
      "brawler_master",
      // Medical Support
      "medic_novice",
      "medic_injury_1",
      "medic_injury_2",
      // Scout Utility
      "scout_novice",
      "scout_hunting_1",
      "scout_hunting_2"
    ],
    playStyle: "Rush into combat and overwhelm enemies with melee prowess",
    strengths: ["High melee damage", "Multiple weapon specializations", "Good survivability"],
    weaknesses: ["No ranged attacks", "Vulnerable to kiting", "Limited utility"],
    tips: [
      "Focus on Strength and Constitution",
      "Learn to close distance quickly",
      "Use terrain to avoid ranged attacks",
      "Master weapon switching for different situations"
    ]
  },

  // CRAFTER BUILDS
  {
    id: "master_weaponsmith",
    name: "Master Weaponsmith",
    description: "Elite weapon and armor creator capable of crafting the finest equipment in the galaxy.",
    category: "Crafter",
    difficulty: "Intermediate",
    totalSkillPoints: 242,
    recommendedSpecies: ["human", "twi_lek"],
    skillBoxes: [
      // Artisan Foundation
      "artisan_novice",
      "artisan_engineering_1",
      "artisan_engineering_2",
      "artisan_engineering_3",
      "artisan_engineering_4",
      "artisan_business_1",
      "artisan_business_2",
      "artisan_business_3",
      "artisan_business_4",
      "artisan_master",
      // Weaponsmith Elite
      "weaponsmith_novice",
      "weaponsmith_melee_1",
      "weaponsmith_melee_2",
      "weaponsmith_melee_3",
      "weaponsmith_melee_4",
      "weaponsmith_firearms_1",
      "weaponsmith_firearms_2",
      "weaponsmith_firearms_3",
      "weaponsmith_firearms_4",
      "weaponsmith_techniques_1",
      "weaponsmith_techniques_2",
      "weaponsmith_techniques_3",
      "weaponsmith_techniques_4",
      "weaponsmith_master",
      // Armorsmith Support
      "armorsmith_novice",
      "armorsmith_personal_1",
      "armorsmith_personal_2",
      "armorsmith_personal_3"
    ],
    playStyle: "Focus on creating the highest quality weapons and armor",
    strengths: ["Creates best weapons in game", "High profit potential", "Essential to economy"],
    weaknesses: ["Limited combat ability", "Resource dependent", "Requires significant investment"],
    tips: [
      "Focus on experimentation and assembly skills",
      "Build relationships with resource suppliers",
      "Study market demands and pricing",
      "Invest in quality crafting tools and stations"
    ]
  },

  {
    id: "droid_engineer",
    name: "Droid Engineer Specialist",
    description: "Master of droid technology, creating and customizing advanced droid companions.",
    category: "Crafter",
    difficulty: "Advanced",
    totalSkillPoints: 240,
    recommendedSpecies: ["human", "bothan"],
    skillBoxes: [
      // Artisan Foundation
      "artisan_novice",
      "artisan_engineering_1",
      "artisan_engineering_2",
      "artisan_engineering_3",
      "artisan_engineering_4",
      "artisan_survey_1",
      "artisan_survey_2",
      "artisan_survey_3",
      "artisan_survey_4",
      "artisan_master",
      // Droid Engineer Elite
      "droidengineer_novice",
      "droidengineer_production_1",
      "droidengineer_production_2",
      "droidengineer_production_3",
      "droidengineer_production_4",
      "droidengineer_techniques_1",
      "droidengineer_techniques_2",
      "droidengineer_techniques_3",
      "droidengineer_techniques_4",
      "droidengineer_refinement_1",
      "droidengineer_refinement_2",
      "droidengineer_refinement_3",
      "droidengineer_refinement_4",
      "droidengineer_blueprints_1",
      "droidengineer_blueprints_2",
      "droidengineer_master"
    ],
    playStyle: "Create and customize powerful droid companions and tools",
    strengths: ["Creates advanced droids", "Unique crafting niche", "High-tech specialization"],
    weaknesses: ["Very complex crafting", "Expensive to master", "Limited direct combat"],
    tips: [
      "Learn droid component interactions thoroughly",
      "Specialize in specific droid types initially",
      "Network with other crafters for components",
      "Study customer needs for droid customization"
    ]
  },

  {
    id: "chef_entertainer",
    name: "Chef & Social Specialist",
    description: "Creates powerful food buffs while providing entertainment and social services.",
    category: "Support",
    difficulty: "Beginner",
    totalSkillPoints: 230,
    recommendedSpecies: ["human", "twi_lek"],
    skillBoxes: [
      // Artisan Foundation
      "artisan_novice",
      "artisan_domestic_1",
      "artisan_domestic_2",
      "artisan_domestic_3",
      "artisan_domestic_4",
      "artisan_business_1",
      "artisan_business_2",
      "artisan_master",
      // Chef Elite
      "chef_novice",
      "chef_design_1",
      "chef_design_2",
      "chef_design_3",
      "chef_design_4",
      "chef_preparation_1",
      "chef_preparation_2",
      "chef_preparation_3",
      "chef_preparation_4",
      "chef_master",
      // Entertainer Support
      "entertainer_novice",
      "entertainer_music_1",
      "entertainer_music_2",
      "entertainer_music_3",
      "entertainer_music_4",
      "entertainer_healing_1",
      "entertainer_healing_2",
      "entertainer_healing_3",
      "entertainer_healing_4"
    ],
    playStyle: "Support others through powerful food buffs and entertainment healing",
    strengths: ["Essential group support", "Good social interaction", "Steady income potential"],
    weaknesses: ["No direct combat ability", "Requires social skills", "Resource gathering needed"],
    tips: [
      "Learn which food buffs are most in demand",
      "Build a network of regular customers",
      "Master both cooking and entertainment timing",
      "Keep variety in your food and music offerings"
    ]
  },

  // SUPPORT BUILDS
  {
    id: "combat_medic",
    name: "Combat Medic",
    description: "Battlefield healer with combat capabilities. Essential for group content and PvP.",
    category: "Support",
    difficulty: "Intermediate",
    totalSkillPoints: 248,
    recommendedSpecies: ["human", "mon_calamari"],
    skillBoxes: [
      // Medic Foundation
      "medic_novice",
      "medic_injury_1",
      "medic_injury_2",
      "medic_injury_3",
      "medic_injury_4",
      "medic_injury_speed_1",
      "medic_injury_speed_2",
      "medic_injury_speed_3",
      "medic_injury_speed_4",
      "medic_ability_1",
      "medic_ability_2",
      "medic_ability_3",
      "medic_ability_4",
      "medic_crafting_1",
      "medic_crafting_2",
      "medic_crafting_3",
      "medic_crafting_4",
      "medic_master",
      // Doctor Elite
      "doctor_novice",
      "doctor_wound_1",
      "doctor_wound_2",
      "doctor_wound_3",
      "doctor_wound_4",
      // Combat Support
      "marksman_novice",
      "marksman_pistol_1",
      "marksman_pistol_2",
      "marksman_support_1",
      "marksman_support_2"
    ],
    playStyle: "Heal allies while providing tactical support in combat",
    strengths: ["Essential healing abilities", "Combat capability", "Group utility"],
    weaknesses: ["Primary target in PvP", "Resource intensive", "Complex priority management"],
    tips: [
      "Always prioritize healing over damage",
      "Learn to triage multiple wounded allies",
      "Keep medical supplies well stocked",
      "Position safely but within healing range"
    ]
  },

  {
    id: "master_entertainer",
    name: "Master Entertainer",
    description: "Full entertainment specialist providing healing, buffs, and social services to players.",
    category: "Entertainer",
    difficulty: "Beginner",
    totalSkillPoints: 244,
    recommendedSpecies: ["twi_lek", "human"],
    skillBoxes: [
      // Entertainer Foundation
      "entertainer_novice",
      "entertainer_music_1",
      "entertainer_music_2",
      "entertainer_music_3",
      "entertainer_music_4",
      "entertainer_dance_1",
      "entertainer_dance_2",
      "entertainer_dance_3",
      "entertainer_dance_4",
      "entertainer_healing_1",
      "entertainer_healing_2",
      "entertainer_healing_3",
      "entertainer_healing_4",
      "entertainer_technique_1",
      "entertainer_technique_2",
      "entertainer_technique_3",
      "entertainer_technique_4",
      "entertainer_master",
      // Musician Elite
      "musician_novice",
      "musician_knowledge_1",
      "musician_knowledge_2",
      "musician_knowledge_3",
      "musician_knowledge_4",
      "musician_instrument_1",
      "musician_instrument_2",
      "musician_instrument_3",
      "musician_instrument_4",
      "musician_master",
      // Dancer Elite
      "dancer_novice",
      "dancer_knowledge_1",
      "dancer_knowledge_2",
      "dancer_performance_1",
      "dancer_performance_2"
    ],
    playStyle: "Provide entertainment services, healing, and social interaction",
    strengths: ["Unique healing abilities", "Important social role", "Steady tip income"],
    weaknesses: ["No combat ability", "Location dependent", "Requires social skills"],
    tips: [
      "Learn popular songs and dances",
      "Build relationships with regular customers",
      "Master the timing of healing abilities",
      "Choose busy locations for maximum tips"
    ]
  },

  // HYBRID BUILDS
  {
    id: "scout_ranger",
    name: "Scout Ranger",
    description: "Versatile wilderness specialist with tracking, survival, and moderate combat abilities.",
    category: "Hybrid",
    difficulty: "Intermediate",
    totalSkillPoints: 246,
    recommendedSpecies: ["bothan", "rodian"],
    skillBoxes: [
      // Scout Foundation
      "scout_novice",
      "scout_exploration_1",
      "scout_exploration_2",
      "scout_exploration_3",
      "scout_exploration_4",
      "scout_hunting_1",
      "scout_hunting_2",
      "scout_hunting_3",
      "scout_hunting_4",
      "scout_trapping_1",
      "scout_trapping_2",
      "scout_trapping_3",
      "scout_trapping_4",
      "scout_foraging_1",
      "scout_foraging_2",
      "scout_foraging_3",
      "scout_foraging_4",
      "scout_master",
      // Marksman Support
      "marksman_novice",
      "marksman_rifle_1",
      "marksman_rifle_2",
      "marksman_rifle_3",
      "marksman_rifle_4",
      // Survival Support
      "marksman_support_1",
      "marksman_support_2",
      "marksman_carbine_1",
      "marksman_carbine_2",
      // Medical Support
      "medic_novice",
      "medic_injury_1",
      "medic_injury_2"
    ],
    playStyle: "Excel in wilderness environments with tracking, survival, and ranged combat",
    strengths: ["Excellent mobility", "Wilderness expertise", "Self-sufficient", "Good utility"],
    weaknesses: ["Jack-of-all-trades", "Lower specialization", "Moderate combat ability"],
    tips: [
      "Master terrain navigation and tracking",
      "Learn creature behaviors and habitats",
      "Use environment to your advantage",
      "Build a network for selling rare resources"
    ]
  },

  {
    id: "tactical_hybrid",
    name: "Tactical Hybrid",
    description: "Balanced combat build mixing melee and ranged with tactical support abilities.",
    category: "Hybrid",
    difficulty: "Advanced",
    totalSkillPoints: 250,
    recommendedSpecies: ["human", "zabrak"],
    skillBoxes: [
      // Brawler Foundation
      "brawler_novice",
      "brawler_1hand_1",
      "brawler_1hand_2",
      "brawler_1hand_3",
      "brawler_1hand_4",
      "brawler_unarmed_1",
      "brawler_unarmed_2",
      // Marksman Foundation
      "marksman_novice",
      "marksman_pistol_1",
      "marksman_pistol_2",
      "marksman_pistol_3",
      "marksman_pistol_4",
      "marksman_support_1",
      "marksman_support_2",
      "marksman_support_3",
      "marksman_support_4",
      // Medical Support
      "medic_novice",
      "medic_injury_1",
      "medic_injury_2",
      "medic_injury_3",
      "medic_injury_4",
      "medic_injury_speed_1",
      "medic_injury_speed_2",
      // Scout Utility
      "scout_novice",
      "scout_exploration_1",
      "scout_exploration_2",
      "scout_hunting_1",
      "scout_hunting_2"
    ],
    playStyle: "Adaptable fighter effective at multiple ranges with support capabilities",
    strengths: ["Very versatile", "Good in any situation", "Self-sufficient", "Team utility"],
    weaknesses: ["No elite specialization", "Lower peak damage", "Complex to master"],
    tips: [
      "Learn to switch between combat styles fluidly",
      "Master situational weapon selection",
      "Focus on well-rounded stat distribution",
      "Practice tactical decision making"
    ]
  }
];

// Helper function to get templates by category
export function getTemplatesByCategory(category: ProfessionTemplate["category"]): ProfessionTemplate[] {
  return professionTemplates.filter(template => template.category === category);
}

// Helper function to get template by ID
export function getTemplateById(id: string): ProfessionTemplate | undefined {
  return professionTemplates.find(template => template.id === id);
}

// Helper function to get all categories
export function getTemplateCategories(): ProfessionTemplate["category"][] {
  return ["Tank", "DPS", "Crafter", "Support", "Hybrid", "Entertainer"];
}
