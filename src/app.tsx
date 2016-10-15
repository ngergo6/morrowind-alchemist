import * as React from "react";
import { Link } from "react-router";

export interface AppProps {

}

export class App extends React.Component<AppProps, {}> {
    render() {
        return (
            <div className="container">
                <h5>Morrowind Alchemy Helper</h5>
                <div className="row">
                    <Link className="btn btn-info" to="ingridients">Ingridients</Link> 
                    <Link className="btn btn-info" to="effects">Effects</Link>
                </div>

                {this.props.children}
            </div>
        );
    }
}