import * as React from "react";
import { SearchBox } from "./search-box";
import {
    getAll as getAllEffects,
    IEffect
} from "./data/effects";

export interface EffectsPageProps {

}

export interface EffectsPageState {
    displayEffects: IEffect[];
}

export class EffectsPage extends React.Component<EffectsPageProps, EffectsPageState> {
    private effects: IEffect[];

    constructor() {
        super();

        this.state = {
            displayEffects: getAllEffects()
        };

        this.effects = getAllEffects();
    }

    private filterEffects(filter: string) {

    }

    public render() {
        return (
            <div>
                <div className="row">
                    <SearchBox placeholder="Search effects" onSearched={this.filterEffects.bind(this)} />
                </div>
                <div className="row">
                    {this.effects.map(e => e.title).join(", ")}
                </div>
            </div>
        );
    }
}