import { SKILLS } from '../../../../../../CONSTANTS.js';

// Mapping from our character builder skill IDs to CONSTANTS.js skill IDs
export const SKILL_ID_MAPPING: { [key: string]: string } = {
  // Brawler profession
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

  // Marksman profession
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
  'marksman_carbine_1': 'combat_marksman_carbine_01',
  'marksman_carbine_2': 'combat_marksman_carbine_02',
  'marksman_carbine_3': 'combat_marksman_carbine_03',
  'marksman_carbine_4': 'combat_marksman_carbine_04',
  'marksman_support_1': 'combat_marksman_support_01',
  'marksman_support_2': 'combat_marksman_support_02',
  'marksman_support_3': 'combat_marksman_support_03',
  'marksman_support_4': 'combat_marksman_support_04',

  // Medic profession
  'medic_novice': 'science_medic_novice',
  'medic_master': 'science_medic_master',
  'medic_injury_1': 'science_medic_injury_01',
  'medic_injury_2': 'science_medic_injury_02',
  'medic_injury_3': 'science_medic_injury_03',
  'medic_injury_4': 'science_medic_injury_04',
  'medic_injury_speed_1': 'science_medic_injury_speed_01',
  'medic_injury_speed_2': 'science_medic_injury_speed_02',
  'medic_injury_speed_3': 'science_medic_injury_speed_03',
  'medic_injury_speed_4': 'science_medic_injury_speed_04',
  'medic_ability_1': 'science_medic_ability_01',
  'medic_ability_2': 'science_medic_ability_02',
  'medic_ability_3': 'science_medic_ability_03',
  'medic_ability_4': 'science_medic_ability_04',
  'medic_crafting_1': 'science_medic_crafting_01',
  'medic_crafting_2': 'science_medic_crafting_02',
  'medic_crafting_3': 'science_medic_crafting_03',
  'medic_crafting_4': 'science_medic_crafting_04',

  // Artisan profession
  'artisan_novice': 'crafting_artisan_novice',
  'artisan_master': 'crafting_artisan_master',
  'artisan_engineering_1': 'crafting_artisan_engineering_01',
  'artisan_engineering_2': 'crafting_artisan_engineering_02',
  'artisan_engineering_3': 'crafting_artisan_engineering_03',
  'artisan_engineering_4': 'crafting_artisan_engineering_04',
  'artisan_domestic_1': 'crafting_artisan_domestic_01',
  'artisan_domestic_2': 'crafting_artisan_domestic_02',
  'artisan_domestic_3': 'crafting_artisan_domestic_03',
  'artisan_domestic_4': 'crafting_artisan_domestic_04',
  'artisan_business_1': 'crafting_artisan_business_01',
  'artisan_business_2': 'crafting_artisan_business_02',
  'artisan_business_3': 'crafting_artisan_business_03',
  'artisan_business_4': 'crafting_artisan_business_04',
  'artisan_survey_1': 'crafting_artisan_survey_01',
  'artisan_survey_2': 'crafting_artisan_survey_02',
  'artisan_survey_3': 'crafting_artisan_survey_03',
  'artisan_survey_4': 'crafting_artisan_survey_04',
};

// Helper functions to get skill data from CONSTANTS.js
export function getSkillPoints(professionSkillId: string): number {
  const constantsSkillId = SKILL_ID_MAPPING[professionSkillId];
  if (!constantsSkillId || !SKILLS[constantsSkillId]) {
    return 15; // Default fallback
  }
  return SKILLS[constantsSkillId].skillPoints || 15;
}

export function getExperienceCost(professionSkillId: string): number {
  const constantsSkillId = SKILL_ID_MAPPING[professionSkillId];
  if (!constantsSkillId || !SKILLS[constantsSkillId]) {
    return 1000; // Default fallback
  }
  return SKILLS[constantsSkillId].xp?.cost || 1000;
}

export function getCommands(professionSkillId: string): string[] {
  const constantsSkillId = SKILL_ID_MAPPING[professionSkillId];
  if (!constantsSkillId || !SKILLS[constantsSkillId]) {
    return [];
  }
  return SKILLS[constantsSkillId].commands || [];
}

export function getSkillModifiers(professionSkillId: string): { [key: string]: number } {
  const constantsSkillId = SKILL_ID_MAPPING[professionSkillId];
  if (!constantsSkillId || !SKILLS[constantsSkillId]) {
    return {};
  }
  return SKILLS[constantsSkillId].skillModifiers || {};
}

export function getExperienceType(professionSkillId: string): string {
  const constantsSkillId = SKILL_ID_MAPPING[professionSkillId];
  if (!constantsSkillId || !SKILLS[constantsSkillId]) {
    return 'general';
  }
  return SKILLS[constantsSkillId].xp?.id || 'general';
}
