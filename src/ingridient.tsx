import * as React from "react";
import { 
    IEffect, 
    getByName as getEffectByName
 } from "./data/effects";
import {
    IIngridient,
    getByName as getIngridientByName,
    getIngridientsForEffect
} from "./data/ingridients";
import {
    Table,
    TextColumn,
    LinkColumn,
    ImageColumn
} from "./components/table";

export interface IngridientPageProps {
    params: {
        name: string
    }
}

export interface IngridientPageState {
    ingridient: IIngridient;
    effects: IEffect[];
}

export class IngridientPage extends React.Component<IngridientPageProps, IngridientPageState> {
    constructor() {
        super();
        this.state = {
            ingridient: {
                effects: [],
                expansion: "morrowind",
                logo: "",
                name: "",
                title: "",
                value: 0,
                weight: 0
            },
            effects: []
        }
    }

    protected componentDidMount() {
        const ingridientName = this.props.params.name;

        const ingridient = getIngridientByName(ingridientName); 
        const effects = ingridient.effects.map(eff => getEffectByName(eff));

        this.setState({
            ingridient,
            effects
        });
    }

    public render() {
        return (
            <div>
                <div className="row">
                    <div className="col-xs-1">
                        <img src={this.state.ingridient.logo} alt={this.state.ingridient.name}/>
                    </div>
                    <div className="col-xs-11">
                        <h3>{this.state.ingridient.title}</h3>
                    </div>
                </div>

                <ul>
                    <li>Weight: {this.state.ingridient.weight} <img src="/img/weight.png" /></li>
                    <li>Value: {this.state.ingridient.value} <img src="/img/gold.png" /></li>
                </ul>

                <div className="row">
                    <h5>Effects</h5>
                    <Table data={this.state.effects}>
                        <ImageColumn header="" property="logo" />
                        <LinkColumn header="Effect" linkTo="/effect/{name}" property="title" />
                        <TextColumn header="School" property="school" />
                        <TextColumn header="Harmful" property="isHarmful"/>
                    </Table>
                </div>
            </div>
        );
    }
}