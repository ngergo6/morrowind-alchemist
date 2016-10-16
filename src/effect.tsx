import * as React from "react";
import { 
    IEffect, 
    getByName as getEffectByName
 } from "./data/effects";

export interface EffectPageProps {
    params: {
        name: string
    }
}

export interface EffectPageState {
    effect: IEffect;
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
                title: ""
            }
        }
    }

    protected componentDidMount() {
        this.setState({
            effect: getEffectByName(this.props.params.name)
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

                <ul>
                    <li>School: {this.state.effect.school}</li>
                    <li>Harmful: {this.state.effect.isHarmful.toString()}</li>
                </ul>

                <p>{this.state.effect.description}</p>
            </div>
        );
    }
}