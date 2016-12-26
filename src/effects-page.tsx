import * as React from "react";
import { SearchBox } from "./search-box";
import {
    getAll as getAllEffects,
    IEffect
} from "./data/effects";
import {
    Table, TextColumn, LinkColumn, ImageColumn
} from "./components/table";

export interface EffectsPageProps {

}

export interface EffectsPageState {
    displayEffects: IEffect[];
}

export class EffectsPage extends React.Component<EffectsPageProps, EffectsPageState> {
    private effects: IEffect[];

    constructor() {
        super();

        this.effects = getAllEffects();

        this.state = {
            displayEffects: this.effects
        };
    }

    private filterEffects(filter: string): void {
        if (!filter.length) {
            this.setState({
                displayEffects: this.effects
            });

            return;
        }

        const displayEffects = this.effects.filter(effect => effect.name.includes(filter));

        this.setState({displayEffects});
    }

    public render() {
        return (
            <div>
                <div className="row">
                    <SearchBox placeholder="Search effects" onSearched={this.filterEffects.bind(this)} />
                </div>
                <div className="row">
                    <Table data={this.state.displayEffects}>
                        <ImageColumn header="" property="logo" />
                        <LinkColumn header="Name" property="title" linkTo="effect/{name}" captureFromRow={true} />
                        <TextColumn header="School" property="school" />
                        <TextColumn header="Harmful" property="isHarmful" />
                    </Table>
                </div>
            </div>
        );
    }
}