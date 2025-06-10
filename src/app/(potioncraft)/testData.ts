type IngredientType = "herb" | "mineral" | "fungus" | "animal";
type IngredientSubtype = "raw" | "powder" | "extract";
type Rarity = "common" | "uncommon" | "rare" | "legendary";
type Properties =
  | "abjuration"
  | "conjuration"
  | "divination"
  | "enchantment"
  | "evocation"
  | "illusion"
  | "necromancy"
  | "transmutation";

interface Ingredient {
  name: string;
  description: string;
  type: IngredientType;
  subType: IngredientSubtype;
  rarity: Rarity;
  image?: string;
  effects?: string[];
  advanced: boolean;
  properties: {
    abjuration?: number;
    conjuration?: number;
    divination?: number;
    enchantment?: number;
    evocation?: number;
    illusion?: number;
    necromancy?: number;
    transmutation?: number;
  };
}

export const exampleIngredients: Ingredient[] = [
  {
    name: "Evergreen Herb",
    description:
      "A common herb found in temperate forests, known for its healing properties.",
    type: "herb",
    subType: "raw",
    rarity: "common",
    advanced: false,
    properties: {
      abjuration: 3,
      conjuration: 0,
      divination: 0,
      enchantment: 0,
      evocation: 0,
      illusion: 0,
      necromancy: 0,
      transmutation: 0,
    },
  },
  {
    name: "Crystalized Quartz",
    description:
      "A rare mineral that enhances magical properties when ground into powder.",
    type: "mineral",
    subType: "powder",
    rarity: "rare",
    advanced: true,
    properties: {
      abjuration: 0,
      conjuration: 2,
      divination: 1,
      enchantment: 0,
      evocation: 0,
      illusion: 0,
      necromancy: 0,
      transmutation: 3,
    },
  },
  {
    name: "Moonlit Mushroom",
    description:
      "A fungus that glows faintly in the dark, used in potions for its unique properties.",
    type: "fungus",
    subType: "raw",
    rarity: "uncommon",
    advanced: false,
    properties: {
      abjuration: 0,
      conjuration: 0,
      divination: 1,
      enchantment: 2,
      evocation: 0,
      illusion: 0,
      necromancy: 0,
      transmutation: 0,
    },
  },
];

interface Potion {
  name: string;
  description: string;
  rarity: Rarity;
  effects: string[];
  requiredSubtypes: IngredientSubtype[];
  potionDc: number;
  primaryProperty: {
    name: Properties;
    leniancy: number;
  };
  properties: {
    abjuration?: number;
    conjuration?: number;
    divination?: number;
    enchantment?: number;
    evocation?: number;
    illusion?: number;
    necromancy?: number;
    transmutation?: number;
  };
}

export const examplePotions: Potion[] = [
  {
    name: "Healing Elixir",
    description: "A basic potion that restores health when consumed.",
    rarity: "common",
    effects: ["restores health"],
    requiredSubtypes: ["raw"],
    primaryProperty: { name: "abjuration", leniancy: 2 },
    potionDc: 10,
    properties: {
      abjuration: 6,
      conjuration: 0,
      divination: 1,
      enchantment: 2,
      evocation: 0,
      illusion: 0,
      necromancy: 0,
      transmutation: 0,
    },
  },
];
