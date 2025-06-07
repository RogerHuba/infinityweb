// @ts-ignore - CONSTANTS.js doesn't have TypeScript declarations
import { SKILLS } from '../../../../../../CONSTANTS.js';

// Mapping between profession skill IDs and CONSTANTS skill IDs
export const SKILL_ID_MAPPING: { [key: string]: string } = {
  // Brawler profession mappings
  'brawler_novice': 'combat_brawler_novice',
  'brawler_master': 'combat_brawler_master',
  'brawler_unarmed_1': 'combat_brawler_unarmed_01',
  'brawler_unarmed_2': 'combat_brawler_unarmed_02',
  'brawler_unarmed_3': 'combat_brawler_unarmed_03',
  'brawler_unarmed_4': 'combat_brawler_unarmed_04',
  'brawler_1hand_1': 'combat_brawler_1handmelee_01',
  'brawler_1hand_2': 'combat_brawler_1handmelee_02',
  'brawler_1hand_3': 'combat_brawler_1handmelee_03',
  'brawler_1hand_4': 'combat_brawler_1handmelee_04',
  'brawler_2hand_1': 'combat_brawler_2handmelee_01',
  'brawler_2hand_2': 'combat_brawler_2handmelee_02',
  'brawler_2hand_3': 'combat_brawler_2handmelee_03',
  'brawler_2hand_4': 'combat_brawler_2handmelee_04',
  'brawler_polearm_1': 'combat_brawler_polearm_01',
  'brawler_polearm_2': 'combat_brawler_polearm_02',
  'brawler_polearm_3': 'combat_brawler_polearm_03',
  'brawler_polearm_4': 'combat_brawler_polearm_04',

  // Marksman profession mappings
  'marksman_novice': 'combat_marksman_novice',
  'marksman_master': 'combat_marksman_master',
  'marksman_pistol_1': 'combat_marksman_pistol_01',
  'marksman_pistol_2': 'combat_marksman_pistol_02',
  'marksman_pistol_3': 'combat_marksman_pistol_03',
  'marksman_pistol_4': 'combat_marksman_pistol_04',
  'marksman_rifle_1': 'combat_marksman_rifle_01',
  'marksman_rifle_2': 'combat_marksman_rifle_02',
  'marksman_rifle_3': 'combat_marksman_rifle_03',
  'marksman_rifle_4': 'combat_marksman_rifle_04',
  'marksman_support_1': 'combat_marksman_support_01',
  'marksman_support_2': 'combat_marksman_support_02',
  'marksman_support_3': 'combat_marksman_support_03',
  'marksman_support_4': 'combat_marksman_support_04',

  // Entertainer profession mappings
  'entertainer_novice': 'social_entertainer_novice',
  'entertainer_master': 'social_entertainer_master',
  'entertainer_hairstyle_1': 'social_entertainer_hairstyle_01',
  'entertainer_hairstyle_2': 'social_entertainer_hairstyle_02',
  'entertainer_hairstyle_3': 'social_entertainer_hairstyle_03',
  'entertainer_hairstyle_4': 'social_entertainer_hairstyle_04',
  'entertainer_music_1': 'social_entertainer_music_01',
  'entertainer_music_2': 'social_entertainer_music_02',
  'entertainer_music_3': 'social_entertainer_music_03',
  'entertainer_music_4': 'social_entertainer_music_04',
  'entertainer_dance_1': 'social_entertainer_dance_01',
  'entertainer_dance_2': 'social_entertainer_dance_02',
  'entertainer_dance_3': 'social_entertainer_dance_03',
  'entertainer_dance_4': 'social_entertainer_dance_04',
  'entertainer_healing_1': 'social_entertainer_healing_01',
  'entertainer_healing_2': 'social_entertainer_healing_02',
  'entertainer_healing_3': 'social_entertainer_healing_03',
  'entertainer_healing_4': 'social_entertainer_healing_04',

  // Medic profession mappings
  'medic_novice': 'science_medic_novice',
  'medic_master': 'science_medic_master',
  'medic_healing_1': 'science_medic_healing_01',
  'medic_healing_2': 'science_medic_healing_02',
  'medic_healing_3': 'science_medic_healing_03',
  'medic_healing_4': 'science_medic_healing_04',
  'medic_injury_1': 'science_medic_injury_01',
  'medic_injury_2': 'science_medic_injury_02',
  'medic_injury_3': 'science_medic_injury_03',
  'medic_injury_4': 'science_medic_injury_04',
  'medic_medicine_1': 'science_medic_medicine_01',
  'medic_medicine_2': 'science_medic_medicine_02',
  'medic_medicine_3': 'science_medic_medicine_03',
  'medic_medicine_4': 'science_medic_medicine_04',
  'medic_ability_1': 'science_medic_ability_01',
  'medic_ability_2': 'science_medic_ability_02',
  'medic_ability_3': 'science_medic_ability_03',
  'medic_ability_4': 'science_medic_ability_04',

  // Scout profession mappings
  'scout_novice': 'outdoors_scout_novice',
  'scout_master': 'outdoors_scout_master',
  'scout_camp_1': 'outdoors_scout_camp_01',
  'scout_camp_2': 'outdoors_scout_camp_02',
  'scout_camp_3': 'outdoors_scout_camp_03',
  'scout_camp_4': 'outdoors_scout_camp_04',
  'scout_explore_1': 'outdoors_scout_explore_01',
  'scout_explore_2': 'outdoors_scout_explore_02',
  'scout_explore_3': 'outdoors_scout_explore_03',
  'scout_explore_4': 'outdoors_scout_explore_04',
  'scout_harvest_1': 'outdoors_scout_harvest_01',
  'scout_harvest_2': 'outdoors_scout_harvest_02',
  'scout_harvest_3': 'outdoors_scout_harvest_03',
  'scout_harvest_4': 'outdoors_scout_harvest_04',
  'scout_track_1': 'outdoors_scout_track_01',
  'scout_track_2': 'outdoors_scout_track_02',
  'scout_track_3': 'outdoors_scout_track_03',
  'scout_track_4': 'outdoors_scout_track_04',

  // Artisan profession mappings
  'artisan_novice': 'crafting_artisan_novice',
  'artisan_master': 'crafting_artisan_master',
  'artisan_business_1': 'crafting_artisan_business_01',
  'artisan_business_2': 'crafting_artisan_business_02',
  'artisan_business_3': 'crafting_artisan_business_03',
  'artisan_business_4': 'crafting_artisan_business_04',
  'artisan_domestic_1': 'crafting_artisan_domestic_01',
  'artisan_domestic_2': 'crafting_artisan_domestic_02',
  'artisan_domestic_3': 'crafting_artisan_domestic_03',
  'artisan_domestic_4': 'crafting_artisan_domestic_04',
  'artisan_engineering_1': 'crafting_artisan_engineering_01',
  'artisan_engineering_2': 'crafting_artisan_engineering_02',
  'artisan_engineering_3': 'crafting_artisan_engineering_03',
  'artisan_engineering_4': 'crafting_artisan_engineering_04',
  'artisan_surveying_1': 'crafting_artisan_surveying_01',
  'artisan_surveying_2': 'crafting_artisan_surveying_02',
  'artisan_surveying_3': 'crafting_artisan_surveying_03',
  'artisan_surveying_4': 'crafting_artisan_surveying_04',

  // Politician profession mappings
  'politician_novice': 'social_politician_novice',
  'politician_master': 'social_politician_master',
  'politician_civic_1': 'social_politician_civic_01',
  'politician_civic_2': 'social_politician_civic_02',
  'politician_civic_3': 'social_politician_civic_03',
  'politician_civic_4': 'social_politician_civic_04',
  'politician_fiscal_1': 'social_politician_fiscal_01',
  'politician_fiscal_2': 'social_politician_fiscal_02',
  'politician_fiscal_3': 'social_politician_fiscal_03',
  'politician_fiscal_4': 'social_politician_fiscal_04',
  'politician_martial_1': 'social_politician_martial_01',
  'politician_martial_2': 'social_politician_martial_02',
  'politician_martial_3': 'social_politician_martial_03',
  'politician_martial_4': 'social_politician_martial_04',
  'politician_urban_1': 'social_politician_urban_01',
  'politician_urban_2': 'social_politician_urban_02',
  'politician_urban_3': 'social_politician_urban_03',
  'politician_urban_4': 'social_politician_urban_04',
};

// Function to get skill data from CONSTANTS using profession skill ID
export function getSkillData(professionSkillId: string) {
  const constantsSkillId = SKILL_ID_MAPPING[professionSkillId];
  if (!constantsSkillId || !SKILLS[constantsSkillId]) {
    console.warn(`No CONSTANTS skill data found for profession skill ID: ${professionSkillId}`);
    return null;
  }
  return SKILLS[constantsSkillId];
}

// Function to get skill points from CONSTANTS
export function getSkillPoints(professionSkillId: string): number {
  const skillData = getSkillData(professionSkillId);
  return skillData?.skillPoints || 0;
}

// Function to get experience cost from CONSTANTS
export function getExperienceCost(professionSkillId: string): number {
  const skillData = getSkillData(professionSkillId);
  return skillData?.xp?.cost || 0;
}

// Function to get experience type from CONSTANTS
export function getExperienceType(professionSkillId: string): string {
  const skillData = getSkillData(professionSkillId);
  return skillData?.xp?.id || '';
}

// Function to get all commands from CONSTANTS
export function getCommands(professionSkillId: string): string[] {
  const skillData = getSkillData(professionSkillId);
  return skillData?.commands || [];
}

// Function to get all skill modifiers from CONSTANTS
export function getSkillModifiers(professionSkillId: string): { [key: string]: number } {
  const skillData = getSkillData(professionSkillId);
  return skillData?.skillModifiers || {};
}

// Function to get schematics from CONSTANTS
export function getSchematics(professionSkillId: string): string[] {
  const skillData = getSkillData(professionSkillId);
  return skillData?.schematics || [];
}

export { SKILLS };