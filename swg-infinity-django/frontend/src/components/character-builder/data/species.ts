import type { Species } from "../CharacterBuilder";

export const ALL_SPECIES = ['bothan', 'human', 'ithorian', 'mon_calamari', 'rodian', 'sullustan', 'trandoshan', 'twilek', 'wookiee', 'zabrak']

// This is a simplified version of the SWG species data
export const speciesData: Species[] = [
  {
    id: "bothan",
    name: "Bothan",
    modifiers: {
      "agility": 35,
      "constitution": 25,
      "luck": 40,
      "precision": 40,
      "strength": 25,
      "stamina": 35
    }
  },
  {
    id: "human",
    name: "Human",
    modifiers: {
      "agility": 30,
      "constitution": 30,
      "luck": 30,
      "precision": 30,
      "strength": 30,
      "stamina": 30
    }
  },
  {
    id: "ithorian",
    name: "Ithorian",
    modifiers: {
      "agility": 20,
      "constitution": 45,
      "luck": 50,
      "precision": 20,
      "strength": 20,
      "stamina": 45
    }
  },
  {
    id: "mon_calamari",
    name: "Mon Calamari",
    modifiers: {
      "agility": 25,
      "constitution": 40,
      "luck": 35,
      "precision": 45,
      "strength": 20,
      "stamina": 35
    }
  },
  {
    id: "rodian",
    name: "Rodian",
    modifiers: {
      "agility": 45,
      "constitution": 20,
      "luck": 30,
      "precision": 45,
      "strength": 30,
      "stamina": 30
    }
  },
  {
    id: "sullustan",
    name: "Sullustan",
    modifiers: {
      "agility": 40,
      "constitution": 30,
      "luck": 30,
      "precision": 40,
      "strength": 25,
      "stamina": 35
    }
  },
  {
    id: "trandoshan",
    name: "Trandoshan",
    modifiers: {
      "agility": 20,
      "constitution": 50,
      "luck": 20,
      "precision": 20,
      "strength": 50,
      "stamina": 40
    }
  },
  {
    id: "twilek",
    name: "Twi'lek",
    modifiers: {
      "agility": 40,
      "constitution": 25,
      "luck": 30,
      "precision": 30,
      "strength": 30,
      "stamina": 45
    }
  },
  {
    id: "wookiee",
    name: "Wookiee",
    modifiers: {
      "agility": 20,
      "constitution": 45,
      "luck": 15,
      "precision": 15,
      "strength": 55,
      "stamina": 50
    }
  },
  {
    id: "zabrak",
    name: "Zabrak",
    modifiers: {
      "agility": 30,
      "constitution": 35,
      "luck": 25,
      "precision": 30,
      "strength": 35,
      "stamina": 45
    }
  }
];
