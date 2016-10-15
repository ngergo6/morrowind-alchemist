import * as React from "react";
import { Link } from "react-router";

import { IngridientsPage } from "./ingridients-page";

export interface AppProps {

}

export class App extends React.Component<AppProps, {}> {
    private alertMe(stuff: string) {
        console.log(stuff);
    }

    render() {
        return (
            <div className="container">
                <h5>Morrowind Alchemy Helper</h5>
                <Link to="ingridients">Ingridients</Link>
                
                {this.props.children}
            </div>
        );
    }
}