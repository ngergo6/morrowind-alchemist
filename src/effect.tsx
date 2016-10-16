import * as React from "react";

export interface EffectPageProps {
    params: {
        name: string
    }
}

export interface EffectPageState {

}

export class EffectPage extends React.Component<EffectPageProps, EffectPageState> {

    public render() {
        return <h1>effect page for {this.props.params.name}</h1>;
    }
        
}