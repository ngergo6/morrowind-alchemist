import * as React from "react";
import { 
    IEffect, 
    getByName as getEffectByName
 } from "./data/effects";
import {
    IIngridient,
    getIngridientsForEffect
} from "./data/ingridients";
import {
    Table,
    Column
} from "./components/table";

export interface EffectPageProps {
    params: {
        name: string
    }
}

export interface EffectPageState {
    effect: IEffect;
    ingridients: IIngridient[];
}

export class EffectPage extends React.Component<EffectPageProps, EffectPageState> {
    constructor() {
        super();
        this.state = {
            effect: {
                description: "",
                isHarmful: false,
                logo: "",
                name: "",
                school: "",
                formula: "",
                title: ""
            },
            ingridients: []
        }
    }

    protected componentDidMount() {
        const effectName = this.props.params.name;

        const effect = getEffectByName(effectName); 
        const ingridients = getIngridientsForEffect(effectName);

        this.setState({
            effect: effect,
            ingridients: ingridients
        });
    }

    public render() {
        return (
            <div>
                <div className="row">
                    <div className="col-xs-1">
                        <img src={this.state.effect.logo} alt={this.state.effect.name}/>
                    </div>
                    <div className="col-xs-11">
                        <h3>{this.state.effect.title}</h3>
                    </div>
                </div>

                <p>{this.state.effect.formula}</p>

                <ul>
                    <li>School: {this.state.effect.school}</li>
                    <li>Harmful: {this.state.effect.isHarmful.toString()}</li>
                </ul>

                <div className="row">
                    <Table data={this.state.ingridients}>
                        <Column header="" property="title" />
                        <Column header="Ingridients" property="title" />
                    </Table>
                </div>

                <p>{this.state.effect.description}</p>
            </div>
        );
    }
}