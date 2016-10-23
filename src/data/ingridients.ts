const ingridients: IIngridient[] = [
    {
        name: "adamantium-ore",
        title: "Adamantium Ore",
        weight: 50,
        expansion: "tribunal",
        value: 300,
        effects: [
            "burden",
            "restore-magicka",
            "poison",
            "reflect"
        ]
    },
    {
        name: "alit-hide",
        title: "Alit Hide",
        weight: 1,
        expansion: "morrowind",
        value: 5,
        effects: [
            "drain-intelligence",
            "resist-poison",
            "telekinesis",
            "detect-animal"
        ]
    },
    {
        name: "ampoule-pod",
        title: "Ampoule Pod",
        weight: 0.1,
        expansion: "morrowind",
        value: 2,
        effects: [
            "water-walking",
            "paralyze",
            "detect-animal",
            "drain-willpower"
        ]
    },
    {
        name: "ash-salts",
        title: "Ash Salts",
        weight: 0.1,
        expansion: "morrowind",
        value: 25,
        effects: [
            "drain-agility",
            "resist-magicka",
            "cure-blight-disease"
        ]
    },
    {
        name: "ash-yam",
        title: "Ash Yam",
        weight: 0.5,
        expansion: "morrowind",
        value: 1,
        effects: [
            "fortify-intelligence",
            "fortify-strength",
            "resist-common-disease",
            "detect-key"
        ]
    },
    {
        name: "bear-pelt",
        title: "Bear Pelt",
        weight: 1,
        expansion: "bloodmoon",
        value: 2,
        effects: [
            "drain-fatigue",
            "fortify-strength",
            "resist-common-disease",
            "night-eye"
        ]
    },
    {
        name: "bittergreen-petals",
        title: "Bittergreen Petals",
        weight: 0.1,
        expansion: "morrowind",
        value: 5,
        effects: [
            "restore-intelligence",
            "invisibility",
            "drain-endurance",
            "drain-magicka"
        ]
    },
    {
        name: "black-anther",
        title: "Black Anther",
        weight: 0.1,
        expansion: "morrowind",
        value: 2,
        effects: [
            "drain-agility",
            "resist-fire",
            "drain-endurance",
            "light"
        ]
    },
    {
        name: "black-lichen",
        title: "Black Lichen",
        weight: 0.1,
        expansion: "morrowind",
        value: 2,
        effects: [
            "drain-strength",
            "resist-frost",
            "drain-speed",
            "cure-poison"
        ]
    },
    {
        name: "bloat",
        title: "Bloat",
        weight: 0.1,
        expansion: "morrowind",
        value: 5,
        effects: [
            "drain-magicka",
            "fortify-intelligence",
            "fortify-willpower",
            "detect-animal"
        ]
    },
    {
        name: "bonemeal",
        title: "Bonemeal",
        weight: 0.2,
        expansion: "morrowind",
        value: 2,
        effects: [
            "restore-agility",
            "telekinesis",
            "drain-fatigue",
            "drain-personality"
        ]
    },
    {
        name: "bread",
        title: "Bread",
        weight: 0.2,
        expansion: "morrowind",
        value: 2,
        effects: [
            "restore-fatigue"
        ]
    },
    {
        name: "bristleback-leather",
        title: "Bristleback Leather",
        weight: 1,
        expansion: "bloodmoon",
        value: 2,
        effects: [
            "blind",
            "frost-damage",
            "resist-frost",
            "recall"
        ]
    },
    {
        name: "bungler's-bane",
        title: "Bungler's Bane",
        weight: 0.5,
        expansion: "morrowind",
        value: 1,
        effects: [
            "drain-speed",
            "drain-endurance",
            "dispel",
            "drain-strength"
        ]
    },
    {
        name: "chokeweed",
        title: "Chokeweed",
        weight: 0.1,
        expansion: "morrowind",
        value: 1,
        effects: [
            "drain-luck",
            "restore-fatigue",
            "cure-common-disease",
            "drain-willpower"
        ]
    },
    {
        name: "coda-flower",
        title: "Coda Flower",
        weight: 0.1,
        expansion: "morrowind",
        value: 23,
        effects: [
            "drain-personality",
            "levitate",
            "drain-intelligence",
            "drain-health"
        ]
    },
    {
        name: "comberry",
        title: "Comberry",
        weight: 0.1,
        expansion: "morrowind",
        value: 2,
        effects: [
            "drain-fatigue",
            "restore-magicka",
            "fire-shield",
            "reflect"
        ]
    },
    {
        name: "corkbulb-root",
        title: "Corkbulb Root",
        weight: 0.1,
        expansion: "morrowind",
        value: 5,
        effects: [
            "cure-paralyzation",
            "restore-health",
            "lightning-shield",
            "fortify-luck"
        ]
    },
    {
        name: "corpus-weepings",
        title: "Corpus Weepings",
        weight: 0.1,
        expansion: "morrowind",
        value: 50,
        effects: [
            "drain-fatigue",
            "fortify-luck",
            "drain-willpower",
            "restore-health"
        ]
    },
    {
        name: "crab-meat",
        title: "Crab Meat",
        weight: 0.5,
        expansion: "morrowind",
        value: 1,
        effects: [
            "restore-fatigue",
            "resist-shock",
            "lightning-shield",
            "restore-luck"
        ]
    },
    {
        name: "daedra-skin",
        title: "Daedra Skin",
        weight: 0.2,
        expansion: "morrowind",
        value: 200,
        effects: [
            "fortify-strength",
            "cure-common-disease",
            "paralyze",
            "swift-swim"
        ]
    },
    {
        name: "daedra's-heart",
        title: "Daedra's Heart",
        weight: 0.2,
        expansion: "morrowind",
        value: 200,
        effects: [
            "restore-magicka",
            "fortify-endurance",
            "drain-agility",
            "night-eye"
        ]
    },
    {
        name: "diamond",
        title: "Diamond",
        weight: 0.2,
        expansion: "morrowind",
        value: 250,
        effects: [
            "drain-agility",
            "invisibility",
            "reflect",
            "detect-key"
        ]
    },
    {
        name: "dreugh-wax",
        title: "Dreugh Wax",
        weight: 0.2,
        expansion: "morrowind",
        value: 100,
        effects: [
            "fortify-strength",
            "restore-strength",
            "drain-luck",
            "drain-willpower"
        ]
    },
    {
        name: "durzog-meat",
        title: "Durzog Meat",
        weight: 2,
        expansion: "tribunal",
        value: 7,
        effects: [
            "fortify-agility",
            "fortify-strength",
            "blind",
            "damage-magicka"
        ]
    },
    {
        name: "ectoplasm",
        title: "Ectoplasm",
        weight: 0.1,
        expansion: "morrowind",
        value: 10,
        effects: [
            "fortify-agility",
            "detect-animal",
            "drain-strength",
            "drain-health"
        ]
    },
    {
        name: "emerald",
        title: "Emerald",
        weight: 0.2,
        expansion: "morrowind",
        value: 150,
        effects: [
            "fortify-magicka",
            "restore-health",
            "drain-agility",
            "drain-endurance"
        ]
    },
    {
        name: "fire-petal",
        title: "Fire Petal",
        weight: 0.1,
        expansion: "morrowind",
        value: 2,
        effects: [
            "resist-fire",
            "drain-health",
            "spell-absorption",
            "paralyze"
        ]
    },
    {
        name: "fire-salts",
        title: "Fire Salts",
        weight: 0.1,
        expansion: "morrowind",
        value: 100,
        effects: [
            "drain-health",
            "fortify-agility",
            "resist-frost",
            "fire-shield"
        ]
    },
    {
        name: "flaming-eye-of-the-lightkeeper",
        title: "Flaming Eye of the Lightkeeper",
        weight: 1,
        expansion: "bloodmoon",
        value: 15,
        effects: [
            "resist-frost",
            "night-eye",
            "drain-magicka",
            "fortify-strength"
        ]
    },
    {
        name: "frost-salts",
        title: "Frost Salts",
        weight: 0.1,
        expansion: "morrowind",
        value: 75,
        effects: [
            "drain-speed",
            "restore-magicka",
            "frost-shield",
            "resist-fire"
        ]
    },
    {
        name: "ghoul-heart",
        title: "Ghoul Heart",
        weight: 0.5,
        expansion: "morrowind",
        value: 150,
        effects: [
            "paralyze",
            "cure-poison",
            "fortify-attack"
        ]
    },
    {
        name: "gold-kanet",
        title: "Gold Kanet",
        weight: 0.1,
        expansion: "morrowind",
        value: 5,
        effects: [
            "drain-health",
            "burden",
            "drain-luck",
            "restore-strength"
        ]
    },
    {
        name: "golden-sedge-flowers",
        title: "Golden Sedge Flowers",
        weight: 1,
        expansion: "tribunal",
        value: 1,
        effects: [
            "drain-magicka",
            "fortify-strength",
            "fortify-attack",
            "swift-swim"
        ]
    },
    {
        name: "grahl-eyeball",
        title: "Grahl Eyeball",
        weight: 1,
        expansion: "bloodmoon",
        value: 15,
        effects: [
            "resist-frost",
            "night-eye",
            "drain-magicka",
            "fortify-magicka"
        ]
    },
    {
        name: "gravedust",
        title: "Gravedust",
        weight: 0.1,
        expansion: "morrowind",
        value: 1,
        effects: [
            "drain-intelligence",
            "cure-common-disease",
            "drain-magicka",
            "restore-endurance"
        ]
    },
    {
        name: "gravetar",
        title: "Gravetar",
        weight: 0.1,
        expansion: "bloodmoon",
        value: 5,
        effects: [
            "resist-frost",
            "drain-health",
            "fortify-fatigue",
            "drain-luck"
        ]
    },
    {
        name: "green-lichen",
        title: "Green Lichen",
        weight: 0.1,
        expansion: "morrowind",
        value: 1,
        effects: [
            "fortify-personality",
            "cure-common-disease",
            "drain-strength",
            "drain-health"
        ]
    },
    {
        name: "guar-hide",
        title: "Guar Hide",
        weight: 1,
        expansion: "morrowind",
        value: 5,
        effects: [
            "drain-fatigue",
            "fortify-endurance",
            "restore-personality",
            "fortify-luck"
        ]
    },
    {
        name: "hack-lo-leaf",
        title: "Hack-Lo Leaf",
        weight: 0.1,
        expansion: "morrowind",
        value: 30,
        effects: [
            "restore-fatigue",
            "paralyze",
            "water-breathing",
            "restore-luck"
        ]
    },
    {
        name: "heart-of-the-udyrfrykte",
        title: "Heart of the Udyrfrykte",
        weight: 5,
        expansion: "bloodmoon",
        value: 300,
        effects: [
            "restore-magicka",
            "fortify-endurance",
            "drain-agility",
            "night-eye"
        ]
    },
    {
        name: "heartwood",
        title: "Heartwood",
        weight: 1,
        expansion: "bloodmoon",
        value: 200,
        effects: [
            "restore-magicka",
            "fortify-agility",
            "drain-strength",
            "weakness-to-fire"
        ]
    },
    {
        name: "heather",
        title: "Heather",
        weight: 0.1,
        expansion: "morrowind",
        value: 1,
        effects: [
            "restore-personality",
            "feather",
            "drain-speed",
            "drain-personality"
        ]
    },
    {
        name: "holly-berries",
        title: "Holly Berries",
        weight: 0.1,
        expansion: "bloodmoon",
        value: 5,
        effects: [
            "resist-frost",
            "frost-shield",
            "frost-damage",
            "weakness-to-fire"
        ]
    },
    {
        name: "horker-tusk",
        title: "Horker Tusk",
        weight: 0.1,
        expansion: "bloodmoon",
        value: 5,
        effects: [
            "drain-alteration",
            "fortify-intelligence",
            "fortify-maximum-magicka",
            "detect-animal"
        ]
    },
    {
        name: "horn-lily-bulb",
        title: "Horn Lily Bulb",
        weight: 1,
        expansion: "tribunal",
        value: 1,
        effects: [
            "resist-paralysis",
            "drain-health",
            "restore-strength",
            "restore-endurance"
        ]
    },
    {
        name: "hound-meat",
        title: "Hound Meat",
        weight: 1,
        expansion: "morrowind",
        value: 2,
        effects: [
            "restore-fatigue",
            "fortify-fatigue",
            "reflect",
            "detect-enchantment"
        ]
    },
    {
        name: "human-flesh",
        title: "Human flesh",
        weight: 1,
        expansion: "morrowind",
        value: 1,
        effects: [
            "fortify-health",
            "drain-intelligence",
            "drain-personality"
        ]
    },
    {
        name: "hypha-facia",
        title: "Hypha Facia",
        weight: 0.1,
        expansion: "morrowind",
        value: 1,
        effects: [
            "drain-luck",
            "drain-agility",
            "drain-fatigue",
            "detect-enchantment"
        ]
    },
    {
        name: "kagouti-hide",
        title: "Kagouti Hide",
        weight: 1,
        expansion: "morrowind",
        value: 2,
        effects: [
            "drain-fatigue",
            "fortify-speed",
            "resist-common-disease",
            "night-eye"
        ]
    },
    {
        name: "kresh-fiber",
        title: "Kresh Fiber",
        weight: 0.1,
        expansion: "morrowind",
        value: 1,
        effects: [
            "restore-luck",
            "fortify-personality",
            "drain-magicka",
            "drain-speed"
        ]
    },
    {
        name: "kwama-cuttle",
        title: "Kwama Cuttle",
        weight: 0.1,
        expansion: "morrowind",
        value: 2,
        effects: [
            "resist-poison",
            "drain-fatigue",
            "water-walking",
            "water-breathing"
        ]
    },
    {
        name: "large-corprusmeat-hunk",
        title: "Large Corprusmeat Hunk",
        weight: 1,
        expansion: "morrowind",
        value: 2,
        effects: [
            "drain-fatigue",
            "drain-health",
            "drain-magicka"
        ]
    },
    {
        name: "large-kwama-egg",
        title: "Large Kwama Egg",
        weight: 2,
        expansion: "morrowind",
        value: 2,
        effects: [
            "restore-fatigue",
            "paralyze",
            "frost-shield",
            "fortify-health"
        ]
    },
    {
        name: "large-wrapped-corprusmeat",
        title: "Large Wrapped Corprusmeat",
        weight: 1,
        expansion: "morrowind",
        value: 0,
        effects: [
            "drain-fatigue",
            "drain-health",
            "drain-magicka"
        ]
    },
    {
        name: "lloramor-spines",
        title: "Lloramor Spines",
        weight: 1,
        expansion: "tribunal",
        value: 1,
        effects: [
            "spell-absorption",
            "invisibility",
            "poison",
            "detect-enchantment"
        ]
    },
    {
        name: "luminous-russula",
        title: "Luminous Russula",
        weight: 0.2,
        expansion: "morrowind",
        value: 1,
        effects: [
            "water-breathing",
            "drain-fatigue",
            "poison"
        ]
    },
    {
        name: "marshmerrow",
        title: "Marshmerrow",
        weight: 0.1,
        expansion: "morrowind",
        value: 1,
        effects: [
            "restore-health",
            "detect-enchantment",
            "drain-willpower",
            "drain-fatigue"
        ]
    },
    {
        name: "meadow-rye",
        title: "Meadow Rye",
        weight: 1,
        expansion: "tribunal",
        value: 1,
        effects: [
            "fortify-speed",
            "damage-health",
            "restore-speed",
            "drain-speed"
        ]
    },
    {
        name: "medium-corprusmeat-hunk",
        title: "Medium Corprusmeat Hunk",
        weight: 0.5,
        expansion: "morrowind",
        value: 0,
        effects: [
            "drain-fatigue",
            "drain-health",
            "drain-magicka"
        ]
    },
    {
        name: "medium-wrapped-corprusmeat",
        title: "Medium Wrapped Corprusmeat",
        weight: 0.5,
        expansion: "morrowind",
        value: 0,
        effects: [
            "drain-fatigue",
            "drain-health",
            "drain-magicka"
        ]
    },
    {
        name: "meteor-slime",
        title: "Meteor Slime",
        weight: 0.1,
        expansion: "morrowind",
        value: 10,
        effects: [
            "fortify-willpower",
            "cure-poison",
            "cure-blight-disease",
            "restore-willpower"
        ]
    },
    {
        name: "moon-sugar",
        title: "Moon Sugar",
        weight: 0.1,
        expansion: "morrowind",
        value: 50,
        effects: [
            "fortify-speed",
            "dispel",
            "drain-endurance",
            "drain-luck"
        ]
    },
    {
        name: "muck",
        title: "Muck",
        weight: 0.1,
        expansion: "morrowind",
        value: 1,
        effects: [
            "drain-intelligence",
            "detect-key",
            "drain-personality",
            "cure-common-disease"
        ]
    },
    {
        name: "muffin",
        title: "Muffin",
        weight: 0.2,
        expansion: "morrowind",
        value: 1,
        effects: [
            "restore-fatigue"
        ]
    },
    {
        name: "netch-leather",
        title: "Netch Leather",
        weight: 1,
        expansion: "morrowind",
        value: 1,
        effects: [
            "fortify-endurance",
            "fortify-intelligence",
            "drain-personality",
            "cure-paralyzation"
        ]
    },
    {
        name: "nirthfly-stalks",
        title: "Nirthfly Stalks",
        weight: 1,
        expansion: "tribunal",
        value: 1,
        effects: [
            "damage-health",
            "fortify-speed",
            "restore-speed",
            "drain-speed"
        ]
    },
    {
        name: "noble-sedge-flowers",
        title: "Noble Sedge Flowers",
        weight: 1,
        expansion: "tribunal",
        value: 1,
        effects: [
            "damage-health",
            "restore-agility",
            "poison",
            "fortify-agility"
        ]
    },
    {
        name: "pearl",
        title: "Pearl",
        weight: 0.2,
        expansion: "morrowind",
        value: 100,
        effects: [
            "drain-agility",
            "dispel",
            "water-breathing",
            "resist-common-disease"
        ]
    },
    {
        name: "pinetear",
        title: "Pinetear",
        weight: 0.2,
        expansion: "bloodmoon",
        value: 50,
        effects: []
    },
    {
        name: "poison",
        title: "Poison",
        weight: 0.1,
        expansion: "morrowind",
        value: 0,
        effects: [
            "weakness-to-poison",
            "damage-health",
            "damage-fatigue",
            "poison"
        ]
    },
    {
        name: "racer-plumes",
        title: "Racer Plumes",
        weight: 0.1,
        expansion: "morrowind",
        value: 20,
        effects: [
            "drain-willpower",
            "levitate"
        ]
    },
    {
        name: "rat-meat",
        title: "Rat Meat",
        weight: 1,
        expansion: "morrowind",
        value: 1,
        effects: [
            "drain-magicka",
            "paralyze",
            "cure-poison",
            "resist-poison"
        ]
    },
    {
        name: "raw-ebony",
        title: "Raw Ebony",
        weight: 10,
        expansion: "morrowind",
        value: 200,
        effects: [
            "drain-agility",
            "cure-poison",
            "frost-shield",
            "restore-speed"
        ]
    },
    {
        name: "raw-glass",
        title: "Raw Glass",
        weight: 2,
        expansion: "morrowind",
        value: 200,
        effects: [
            "drain-intelligence",
            "drain-strength",
            "drain-speed",
            "fire-shield"
        ]
    },
    {
        name: "raw-stahlrim",
        title: "Raw Stahlrim",
        weight: 5,
        expansion: "bloodmoon",
        value: 300,
        effects: []
    },
    {
        name: "red-lichen",
        title: "Red Lichen",
        weight: 0.1,
        expansion: "morrowind",
        value: 25,
        effects: [
            "drain-speed",
            "light",
            "cure-common-disease",
            "drain-magicka"
        ]
    },
    {
        name: "resin",
        title: "Resin",
        weight: 0.1,
        expansion: "morrowind",
        value: 10,
        effects: [
            "restore-health",
            "restore-speed",
            "burden",
            "resist-common-disease"
        ]
    },
    {
        name: "ripened-belladonna-berries",
        title: "Ripened Belladonna Berries",
        weight: 0.1,
        expansion: "bloodmoon",
        value: 5,
        effects: [
            "resist-magicka",
            "restore-magicka",
            "fortify-magicka",
            "drain-magicka"
        ]
    },
    {
        name: "roobrush",
        title: "Roobrush",
        weight: 0.1,
        expansion: "morrowind",
        value: 1,
        effects: [
            "drain-willpower",
            "fortify-agility",
            "drain-health",
            "cure-poison"
        ]
    },
    {
        name: "ruby",
        title: "Ruby",
        weight: 0.2,
        expansion: "morrowind",
        value: 200,
        effects: [
            "drain-health",
            "feather",
            "restore-intelligence",
            "drain-agility"
        ]
    },
    {
        name: "saltrice",
        title: "Saltrice",
        weight: 0.1,
        expansion: "morrowind",
        value: 1,
        effects: [
            "restore-fatigue",
            "fortify-magicka",
            "drain-strength",
            "restore-health"
        ]
    },
    {
        name: "scales",
        title: "Scales",
        weight: 0,
        expansion: "morrowind",
        value: 0,
        effects: [
            "drain-personality",
            "water-walking",
            "restore-endurance",
            "swift-swim"
        ]
    },
    {
        name: "scamp-skin",
        title: "Scamp Skin",
        weight: 0.1,
        expansion: "morrowind",
        value: 10,
        effects: [
            "drain-magicka",
            "cure-paralyzation",
            "restore-personality",
            "restore-strength"
        ]
    },
    {
        name: "scathecraw",
        title: "Scathecraw",
        weight: 0,
        expansion: "morrowind",
        value: 0,
        effects: [
            "drain-strength",
            "cure-poison",
            "drain-health",
            "restore-willpower"
        ]
    },
    {
        name: "scrap-metal",
        title: "Scrap Metal",
        weight: 10,
        expansion: "morrowind",
        value: 20,
        effects: [
            "drain-health",
            "lightning-shield",
            "resist-shock",
            "restore-intelligence"
        ]
    },
    {
        name: "scrib-cabbage",
        title: "Scrib Cabbage",
        weight: 1,
        expansion: "tribunal",
        value: 1,
        effects: [
            "drain-intelligence",
            "damage-health",
            "restore-agility",
            "fortify-agility"
        ]
    },
    {
        name: "scrib-jelly",
        title: "Scrib Jelly",
        weight: 0,
        expansion: "morrowind",
        value: 0,
        effects: [
            "fortify-willpower",
            "cure-poison",
            "cure-blight-disease",
            "restore-willpower"
        ]
    },
    {
        name: "scrib-jerky",
        title: "Scrib Jerky",
        weight: 0.2,
        expansion: "morrowind",
        value: 5,
        effects: [
            "restore-fatigue",
            "fortify-fatigue",
            "burden",
            "swift-swim"
        ]
    },
    {
        name: "scuttle",
        title: "Scuttle",
        weight: 0.1,
        expansion: "morrowind",
        value: 10,
        effects: [
            "restore-fatigue",
            "fortify-fatigue",
            "feather",
            "telekinesis"
        ]
    },
    {
        name: "shalk-resin",
        title: "Shalk Resin",
        weight: 0.1,
        expansion: "morrowind",
        value: 50,
        effects: [
            "drain-fatigue",
            "fortify-health",
            "drain-personality",
            "fortify-speed"
        ]
    },
    {
        name: "sload-soap",
        title: "Sload Soap",
        weight: 0.1,
        expansion: "morrowind",
        value: 50,
        effects: [
            "drain-personality",
            "fortify-agility",
            "fire-shield",
            "restore-agility"
        ]
    },
    {
        name: "small-corprusmeat-hunk",
        title: "Small Corprusmeat Hunk",
        weight: 0.2,
        expansion: "morrowind",
        value: 0,
        effects: [
            "drain-fatigue",
            "drain-magicka"
        ]
    },
    {
        name: "small-kwama-egg",
        title: "Small Kwama Egg",
        weight: 0.5,
        expansion: "morrowind",
        value: 1,
        effects: [
            "restore-fatigue"
        ]
    },
    {
        name: "small-wrapped-corprusmeat",
        title: "Small Wrapped Corprusmeat",
        weight: 0.2,
        expansion: "morrowind",
        value: 0,
        effects: [
            "drain-fatigue",
            "drain-health",
            "drain-magicka"
        ]
    },
    {
        name: "snow-bear-pelt",
        title: "Snow Bear Pelt",
        weight: 1,
        expansion: "bloodmoon",
        value: 2,
        effects: [
            "drain-fatigue",
            "fortify-speed",
            "resist-common-disease",
            "night-eye"
        ]
    },
    {
        name: "snow-wolf-pelt",
        title: "Snow Wolf Pelt",
        weight: 1,
        expansion: "bloodmoon",
        value: 2,
        effects: [
            "drain-fatigue",
            "fortify-speed",
            "resist-common-disease",
            "night-eye"
        ]
    },
    {
        name: "spore-pod",
        title: "Spore Pod",
        weight: 0.1,
        expansion: "morrowind",
        value: 1,
        effects: [
            "drain-strength",
            "drain-fatigue",
            "detect-key",
            "paralyze"
        ]
    },
    {
        name: "stoneflower-petals",
        title: "Stoneflower Petals",
        weight: 0.1,
        expansion: "morrowind",
        value: 1,
        effects: [
            "restore-strength",
            "fortify-magicka",
            "drain-luck",
            "fortify-personality"
        ]
    },
    {
        name: "sweetpulp",
        title: "Sweetpulp",
        weight: 1,
        expansion: "tribunal",
        value: 1,
        effects: [
            "paralyze",
            "levitate",
            "resist-paralysis",
            "restore-health"
        ]
    },
    {
        name: "timsa-come-by-flowers",
        title: "Timsa-Come-By flowers",
        weight: 1,
        expansion: "tribunal",
        value: 1,
        effects: [
            "dispel",
            "resist-paralysis",
            "drain-magicka",
            "restore-endurance"
        ]
    },
    {
        name: "trama-root",
        title: "Trama Root",
        weight: 0.1,
        expansion: "morrowind",
        value: 10,
        effects: [
            "restore-willpower",
            "levitate",
            "drain-magicka",
            "drain-speed"
        ]
    },
    {
        name: "treated-bittergreen-petals",
        title: "Treated Bittergreen Petals",
        weight: 0.1,
        expansion: "bloodmoon",
        value: 10,
        effects: [
            "restore-intelligence",
            "drain-magicka",
            "drain-endurance",
            "invisibility"
        ]
    },
    {
        name: "unripened-belladonna-berries",
        title: "Unripened Belladonna Berries",
        weight: 0.1,
        expansion: "bloodmoon",
        value: 5,
        effects: [
            "resist-magicka",
            "restore-magicka",
            "fortify-magicka",
            "drain-magicka"
        ]
    },
    {
        name: "vampire-dust",
        title: "Vampire Dust",
        weight: 0.1,
        expansion: "morrowind",
        value: 200,
        effects: [
            "fortify-health",
            "fortify-strength",
            "spell-absorption",
            "vampirism"
        ]
    },
    {
        name: "violet-corprinus",
        title: "Violet Corprinus",
        weight: 0.5,
        expansion: "morrowind",
        value: 1,
        effects: [
            "water-walking",
            "drain-fatigue",
            "poison"
        ]
    },
    {
        name: "void-salts",
        title: "Void Salts",
        weight: 0.1,
        expansion: "morrowind",
        value: 100,
        effects: [
            "restore-magicka",
            "spell-absorption",
            "paralyze",
            "drain-endurance"
        ]
    },
    {
        name: "wickwheat",
        title: "Wickwheat",
        weight: 0.1,
        expansion: "morrowind",
        value: 1,
        effects: [
            "restore-health",
            "fortify-willpower",
            "paralyze",
            "damage-intelligence"
        ]
    },
    {
        name: "willow-anther",
        title: "Willow Anther",
        weight: 0.1,
        expansion: "morrowind",
        value: 10,
        effects: [
            "drain-personality",
            "frost-shield",
            "cure-common-disease",
            "cure-paralyzation"
        ]
    },
    {
        name: "wolf-pelt",
        title: "Wolf Pelt",
        weight: 1,
        expansion: "bloodmoon",
        value: 2,
        effects: [
            "drain-fatigue",
            "fortify-speed",
            "resist-common-disease",
            "night-eye"
        ]
    },
    {
        name: "wolfsbane-petals",
        title: "Wolfsbane Petals",
        weight: 0.1,
        expansion: "bloodmoon",
        value: 5,
        effects: [
            "restore-intelligence",
            "invisibility",
            "drain-endurance",
            "drain-magicka"
        ]
    }
]

export interface IIngridient {
    name: string;
    title: string;
    weight: number;
    value: number;
    expansion: "morrowind" | "tribunal" | "bloodmoon",
    effects: string[];
}

export function getAll() {
    return ingridients;
}

export function getByName(name: string): IIngridient {
    return ingridients.find(i => i.name === name);
}

export function getIngridientsForEffect(effectName: string): IIngridient[] {
    return ingridients.filter(i => i.effects.includes(effectName));
}