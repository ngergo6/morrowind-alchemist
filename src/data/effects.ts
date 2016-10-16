export interface IEffect {
    name: string;
    title: string;
    description: string;
    logo: string;
    school: string;
    formula: string;
    isHarmful: boolean;
}

const effects: IEffect[] = [
    {
        name: "blind",
        title: "Blind",
        description: "description goes here",
        logo: "/img/effects/blind.jpg",
        school: "Illusion",
        formula: "",
        isHarmful: true
    },
    {
        name: "burden",
        title: "Burden",
        description: "",
        logo: "/img/effects/burden.jpg",
        school: "",
        formula: "",
        isHarmful: true
    },
    {
        name: "cure-blight-disease",
        title: "Cure Blight Disease",
        description: "",
        logo: "/img/effects/cure-blight-disease.jpg",
        school: "",
        formula: "",
        isHarmful: false
    },
    {
        name: "cure-common-disease",
        title: "Cure Common Disease",
        description: "",
        logo: "/img/effects/cure-common-disease.jpg",
        school: "",
        formula: "",
        isHarmful: false
    },
    {
        name: "cure-paralyzation",
        title: "Cure Paralyzation",
        description: "",
        logo: "/img/effects/cure-paralyzation.jpg",
        school: "",
        formula: "",
        isHarmful: false
    },
    {
        name: "damage-fatigue",
        title: "Damage Fatigue",
        description: "",
        logo: "/img/effects/damage-fatigue.jpg",
        school: "",
        formula: "",
        isHarmful: true
    },
    {
        name: "damage-health",
        title: "Damage Health",
        description: "",
        logo: "/img/effects/damage-health.jpg",
        school: "",
        formula: "",
        isHarmful: true
    },
    {
        name: "damage-intelligence",
        title: "Damage Intelligence",
        description: "",
        logo: "/img/effects/damage-attribute.jpg",
        school: "",
        formula: "",
        isHarmful: true
    },
    {
        name: "damage-magicka",
        title: "Damage Magicka",
        description: "",
        logo: "/img/effects/damage-magicka.jpg",
        school: "",
        formula: "",
        isHarmful: true
    },
    {
        name: "detect-animal",
        title: "Detect Animal",
        description: "",
        logo: "/img/effects/detect-animal.jpg",
        school: "",
        formula: "",
        isHarmful: false
    },
    {
        name: "detect-enchantment",
        title: "Detect Enchantment",
        description: "",
        logo: "/img/effects/detect-enchantment.jpg",
        school: "",
        formula: "",
        isHarmful: false
    },
    {
        name: "detect-key",
        title: "Detect Key",
        description: "",
        logo: "/img/effects/detect-key.jpg",
        school: "",
        formula: "",
        isHarmful: false
    },
    {
        name: "dispel",
        title: "Dispel",
        description: "",
        logo: "/img/effects/dispel.jpg",
        school: "",
        formula: "",
        isHarmful: false
    },
    {
        name: "drain-alteration",
        title: "Drain Alteration",
        description: "",
        logo: "/img/effects/drain-skill.jpg",
        school: "",
        formula: "",
        isHarmful: true
    },
    {
        name: "drain-agility",
        title: "Drain Agility",
        description: "",
        logo: "/img/effects/drain-attribute.jpg",
        school: "",
        formula: "",
        isHarmful: true
    },
    {
        name: "drain-endurance",
        title: "Drain Endurance",
        description: "",
        logo: "/img/effects/drain-attribute.jpg",
        school: "",
        formula: "",
        isHarmful: true
    },
    {
        name: "drain-fatigue",
        title: "Drain Fatigue",
        description: "",
        logo: "/img/effects/drain-fatigue.jpg",
        school: "",
        formula: "",
        isHarmful: true
    },
    {
        name: "drain-health",
        title: "Drain Health",
        description: "",
        logo: "/img/effects/drain-health.jpg",
        school: "",
        formula: "",
        isHarmful: true
    },
    {
        name: "drain-intelligence",
        title: "Drain Intelligence",
        description: "",
        logo: "/img/effects/drain-attribute.jpg",
        school: "",
        formula: "",
        isHarmful: true
    },
    {
        name: "drain-luck",
        title: "Drain Luck",
        description: "",
        logo: "/img/effects/drain-attribute.jpg",
        school: "",
        formula: "",
        isHarmful: true
    },
    {
        name: "drain-magicka",
        title: "Drain Magicka",
        description: "",
        logo: "/img/effects/drain-magicka.jpg",
        school: "",
        formula: "",
        isHarmful: true
    },
    {
        name: "drain-personality",
        title: "Drain Personality",
        description: "",
        logo: "/img/effects/drain-attribute.jpg",
        school: "",
        formula: "",
        isHarmful: true
    },
    {
        name: "drain-speed",
        title: "Drain Speed",
        description: "",
        logo: "/img/effects/drain-attribute.jpg",
        school: "",
        formula: "",
        isHarmful: true
    },
    {
        name: "drain-strength",
        title: "Drain Strength",
        description: "",
        logo: "/img/effects/drain-attribute.jpg",
        school: "",
        formula: "",
        isHarmful: true
    },
    {
        name: "drain-willpower",
        title: "Drain Willpower",
        description: "",
        logo: "/img/effects/drain-attribute.jpg",
        school: "",
        formula: "",
        isHarmful: true
    },
    {
        name: "feather",
        title: "Feather",
        description: "",
        logo: "/img/effects/feather.jpg",
        school: "",
        formula: "",
        isHarmful: false
    },
    {
        name: "fire-shield",
        title: "Fire Shield",
        description: "",
        logo: "/img/effects/fire-shield.jpg",
        school: "",
        formula: "",
        isHarmful: false
    },
    {
        name: "fortify-agility",
        title: "Fortify Agility",
        description: "",
        logo: "/img/effects/fortify-attribute.jpg",
        school: "",
        formula: "",
        isHarmful: false
    },
    {
        name: "fortify-attack",
        title: "Fortify Attack",
        description: "",
        logo: "/img/effects/fortify-attack.jpg",
        school: "",
        formula: "",
        isHarmful: false
    },
    {
        name: "fortify-endurance",
        title: "Fortify Endurance",
        description: "",
        logo: "/img/effects/fortify-attribute.jpg",
        school: "",
        formula: "",
        isHarmful: false
    },
    {
        name: "fortify-fatigue",
        title: "Fortify Fatigue",
        description: "",
        logo: "/img/effects/fortify-fatigue.jpg",
        school: "",
        formula: "",
        isHarmful: false
    },
    {
        name: "fortify-health",
        title: "Fortify Health",
        description: "",
        logo: "/img/effects/fortify-health.jpg",
        school: "",
        formula: "",
        isHarmful: false
    },
    {
        name: "fortify-intelligence",
        title: "Fortify Intelligence",
        description: "",
        logo: "/img/effects/fortify-attribute.jpg",
        school: "",
        formula: "",
        isHarmful: false
    },
    {
        name: "fortify-luck",
        title: "Fortify Luck",
        description: "",
        logo: "/img/effects/fortify-attribute.jpg",
        school: "",
        formula: "",
        isHarmful: false
    },
    {
        name: "fortify-magicka",
        title: "Fortify Magicka",
        description: "",
        logo: "/img/effects/fortify-magicka.jpg",
        school: "",
        formula: "",
        isHarmful: false
    },
    {
        name: "fortify-maximum-magicka",
        title: "Fortify Maximum Magicka",
        description: "",
        logo: "/img/effects/fortify-maximum-magicka.jpg",
        school: "",
        formula: "",
        isHarmful: false
    },
    {
        name: "fortify-personality",
        title: "Fortify Personality",
        description: "",
        logo: "/img/effects/fortify-attribute.jpg",
        school: "",
        formula: "",
        isHarmful: false
    },
    {
        name: "fortify-speed",
        title: "Fortify Speed",
        description: "",
        logo: "/img/effects/fortify-attribute.jpg",
        school: "",
        formula: "",
        isHarmful: false
    },
    {
        name: "fortify-strength",
        title: "Fortify Strength",
        description: "",
        logo: "/img/effects/fortify-attribute.jpg",
        school: "",
        formula: "",
        isHarmful: false
    },
    {
        name: "fortify-willpower",
        title: "Fortify Willpower",
        description: "",
        logo: "/img/effects/fortify-attribute.jpg",
        school: "",
        formula: "",
        isHarmful: false
    },
    {
        name: "frost-damage",
        title: "Frost Damage",
        description: "",
        logo: "/img/effects/frost-damage.jpg",
        school: "",
        formula: "",
        isHarmful: true
    },
    {
        name: "frost-shield",
        title: "Frost Shield",
        description: "",
        logo: "/img/effects/frost-shield.jpg",
        school: "",
        formula: "",
        isHarmful: false
    },
    {
        name: "invisibility",
        title: "Invisibility",
        description: "",
        logo: "/img/effects/invisibility.jpg",
        school: "",
        formula: "",
        isHarmful: false
    },
    {
        name: "levitate",
        title: "Levitate",
        description: "",
        logo: "/img/effects/levitate.jpg",
        school: "",
        formula: "",
        isHarmful: false
    },
    {
        name: "light",
        title: "Light",
        description: "",
        logo: "/img/effects/light.jpg",
        school: "",
        formula: "",
        isHarmful: false
    },
    {
        name: "lightning-shield",
        title: "Lightning Shield",
        description: "",
        logo: "/img/effects/lightning-shield.jpg",
        school: "",
        formula: "",
        isHarmful: false
    },
    {
        name: "night-eye",
        title: "Night Eye",
        description: "",
        logo: "/img/effects/night-eye.jpg",
        school: "",
        formula: "",
        isHarmful: false
    },
    {
        name: "paralyze",
        title: "Paralyze",
        description: "",
        logo: "/img/effects/paralyze.jpg",
        school: "",
        formula: "",
        isHarmful: true
    },
    {
        name: "poison",
        title: "Poison",
        description: "",
        logo: "/img/effects/poison.jpg",
        school: "",
        formula: "",
        isHarmful: true
    },
    {
        name: "recall",
        title: "Recall",
        description: "",
        logo: "/img/effects/recall.jpg",
        school: "",
        formula: "",
        isHarmful: false
    },
    {
        name: "reflect",
        title: "Reflect",
        description: "",
        logo: "/img/effects/reflect.jpg",
        school: "",
        formula: "",
        isHarmful: false
    },
    {
        name: "resist-common-disease",
        title: "Resist Common Disease",
        description: "",
        logo: "/img/effects/resist-common-disease.jpg",
        school: "",
        formula: "",
        isHarmful: false
    },
    {
        name: "resist-fire",
        title: "Resist Fire",
        description: "",
        logo: "/img/effects/resist-fire.jpg",
        school: "",
        formula: "",
        isHarmful: false
    },
    {
        name: "resist-frost",
        title: "Resist Frost",
        description: "",
        logo: "/img/effects/resist-frost.jpg",
        school: "",
        formula: "",
        isHarmful: false
    },
    {
        name: "resist-magicka",
        title: "Resist Magicka",
        description: "",
        logo: "/img/effects/resist-magicka.jpg",
        school: "",
        formula: "",
        isHarmful: false
    },
    {
        name: "resist-paralysis",
        title: "Resist Paralysis",
        description: "",
        logo: "/img/effects/resist-paralysis.jpg",
        school: "",
        formula: "",
        isHarmful: false
    },
    {
        name: "resist-poison",
        title: "Resist Poison",
        description: "",
        logo: "/img/effects/resist-poison.jpg",
        school: "",
        formula: "",
        isHarmful: false
    },
    {
        name: "resist-shock",
        title: "Resist Shock",
        description: "",
        logo: "/img/effects/resist-shock.jpg",
        school: "",
        formula: "",
        isHarmful: false
    },
    {
        name: "restore-agility",
        title: "Restore Agility",
        description: "",
        logo: "/img/effects/restore-attribute.jpg",
        school: "",
        formula: "",
        isHarmful: false
    },
    {
        name: "restore-endurance",
        title: "Restore Endurance",
        description: "",
        logo: "/img/effects/restore-attribute.jpg",
        school: "",
        formula: "",
        isHarmful: false
    },
    {
        name: "restore-fatigue",
        title: "Restore Fatigue",
        description: "",
        logo: "/img/effects/restore-fatigue.jpg",
        school: "",
        formula: "",
        isHarmful: false
    },
    {
        name: "restore-health",
        title: "Restore Health",
        description: "",
        logo: "/img/effects/restore-health.jpg",
        school: "",
        formula: "",
        isHarmful: false
    },
    {
        name: "restore-intelligence",
        title: "Restore Intelligence",
        description: "",
        logo: "/img/effects/restore-attribute.jpg",
        school: "",
        formula: "",
        isHarmful: false
    },
    {
        name: "restore-luck",
        title: "Restore Luck",
        description: "",
        logo: "/img/effects/restore-attribute.jpg",
        school: "",
        formula: "",
        isHarmful: false
    },
    {
        name: "restore-magicka",
        title: "Restore Magicka",
        description: "",
        logo: "/img/effects/restore-magicka.jpg",
        school: "",
        formula: "",
        isHarmful: false
    },
    {
        name: "restore-personality",
        title: "Restore Personality",
        description: "",
        logo: "/img/effects/restore-attribute.jpg",
        school: "",
        formula: "",
        isHarmful: false
    },
    {
        name: "restore-speed",
        title: "Restore Speed",
        description: "",
        logo: "/img/effects/restore-attribute.jpg",
        school: "",
        formula: "",
        isHarmful: false
    },
    {
        name: "restore-strength",
        title: "Restore Strength",
        description: "",
        logo: "/img/effects/restore-attribute.jpg",
        school: "",
        formula: "",
        isHarmful: false
    },
    {
        name: "restore-willpower",
        title: "Restore Willpower",
        description: "",
        logo: "/img/effects/restore-attribute.jpg",
        school: "",
        formula: "",
        isHarmful: false
    },
    {
        name: "spell-absorption",
        title: "Spell Absorption",
        description: "",
        logo: "/img/effects/spell-absorption.jpg",
        school: "",
        formula: "",
        isHarmful: false
    },
    {
        name: "swift-swim",
        title: "Swift Swim",
        description: "",
        logo: "/img/effects/swift-swim.jpg",
        school: "",
        formula: "",
        isHarmful: false
    },
    {
        name: "telekinesis",
        title: "Telekinesis",
        description: "",
        logo: "/img/effects/telekinesis.jpg",
        school: "",
        formula: "",
        isHarmful: false
    },
    {
        name: "vampirism",
        title: "Vampirism",
        description: "",
        logo: "/img/effects/vampirism.jpg",
        school: "",
        formula: "",
        isHarmful: true
    },
    {
        name: "water-breathing",
        title: "Water Breathing",
        description: "",
        logo: "/img/effects/water-breathing.jpg",
        school: "",
        formula: "",
        isHarmful: false
    },
    {
        name: "water-walking",
        title: "Water Walking",
        description: "",
        logo: "/img/effects/water-walking.jpg",
        school: "",
        formula: "",
        isHarmful: false
    },
    {
        name: "weakness-to-fire",
        title: "Weakness to Fire",
        description: "",
        logo: "/img/effects/weakness-to-fire.jpg",
        school: "",
        formula: "",
        isHarmful: true
    },
    {
        name: "weakness-to-poison",
        title: "Weakness to Poison",
        description: "",
        logo: "/img/effects/weakness-to-poison.jpg",
        school: "",
        formula: "",
        isHarmful: true
    }
];

export function getAll() {
    return effects;
}

export function getByName(name: string): IEffect {
    return effects.find(e => e.name === name);
}