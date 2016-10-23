import * as React from "react";
import { Link } from "react-router";
import {
    spacers
} from "./style";

export interface AppProps {

}

export class App extends React.Component<AppProps, {}> {
    render() {
        return (
            <div className="container">
                <h5>Morrowind Alchemy Helper</h5>
                <div className="row" style={Object.assign({}, spacers.smBtnSpacer)}>
                    <div className="btn-toolbar">
                        <Link className="btn btn-info" to="effects">Effects</Link>
                        <Link className="btn btn-info" to="ingridients">Ingridients</Link> 
                    </div>
                </div>

                {this.props.children}
            </div>
        );
    }
}