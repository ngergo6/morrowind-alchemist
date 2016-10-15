interface IEffect {
    name: string;
    title: string;
    description: string;
    logo: string;
    school: string;
    isHarmful: boolean;
}

declare const effects: IEffect[];

declare module "data/effects.json" {
    export = effects;
}