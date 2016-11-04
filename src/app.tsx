    import * as React from "react";
import { Link } from "react-router";
import {
    spacers
} from "./style";

export interface AppProps {
    location: {
        pathname: string
    }
}

export class App extends React.Component<AppProps, {}> {
    private isActive(...validPaths: string[]): string {
        const pathName = this.props.location.pathname;

        if (validPaths.some(path => pathName.startsWith(path))) {
            return "nav-link active";
        } else {
            return "nav-link";
        }
    }

    render() {
        return (
            <div className="container">
                <h5>Morrowind Alchemy Helper</h5>
                <div className="row" style={Object.assign({}, spacers.smBtnSpacer)}>
                    <ul className="nav nav-tabs">
                        <li className="nav-item">
                            <Link className={this.isActive("/effect")} to="effects">Effects</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={this.isActive("/ingridient")} to="ingridients">Ingridients</Link>
                        </li>
                    </ul>
                </div>

                {this.props.children}
            </div>
        );
    }
}