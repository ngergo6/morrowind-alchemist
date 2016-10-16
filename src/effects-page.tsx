import * as React from "react";
import { SearchBox } from "./search-box";
import {
    getAll as getAllEffects,
    IEffect
} from "./data/effects";
import {
    Table, Column, LinkColumn, ImageColumn
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
                    <Table data={this.state.displayEffects}>
                        <ImageColumn header="" property="logo" />
                        <LinkColumn header="Name" property="title" linkTo="effect/{name}" />
                        <Column header="School" property="school" />
                        <Column header="Harmful" property="isHarmful" />
                    </Table>
                </div>
            </div>
        );
    }
}