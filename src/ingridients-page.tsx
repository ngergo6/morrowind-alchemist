import * as React from "react";
import { SearchBox } from "./search-box";
import {
    getAll as getAllIngridients,
    IIngridient
} from "./data/ingridients";
import {
    Table, Column, LinkColumn, ImageColumn
} from "./components/table";

export interface IngridientsPageProps {

}

export interface IngridientsPageState {
    displayIngridients: IIngridient[];
}

export class IngridientsPage extends React.Component<IngridientsPageProps, IngridientsPageState> {
    private ingridients: IIngridient[];

    constructor() {
        super();

        this.state = {
            displayIngridients: getAllIngridients()
        };

        this.ingridients = getAllIngridients();
    }

    private filterEffects(filter: string) {
        if (!filter.length) {
            this.setState({
                displayIngridients: this.ingridients
            });

            return;
        }

        const displayIngridients = this.ingridients.filter(ingridient => ingridient.name.includes(filter));

        this.setState({ displayIngridients });
    }

    public render() {
        return (
            <div>
                <div className="row">
                    <SearchBox placeholder="Search effects" onSearched={this.filterEffects.bind(this)} />
                </div>
                <div className="row">
                    <Table data={this.state.displayIngridients}>
                        <ImageColumn header="" property="logo" />
                        <LinkColumn header="Name" property="title" linkTo="ingridient/{name}" />
                        <Column header="Value" property="value" />
                        <Column header="Weight" property="weight" />
                    </Table>
                </div>
            </div>
        );
    }
}