import * as React from "react";

export interface HelloProps { something: string }

export class Hello extends React.Component<HelloProps, {}> {
    render() {
        return (
            <h1>Hello there {this.props.something}</h1>
        );
    }
}