import * as React from "react";
import * as ReactDOM from "react-dom";
import { Router, Route, IndexRoute, hashHistory } from 'react-router'

import { App } from "./app";
import { IngridientsPage } from "./ingridients-page";
import { EffectsPage } from "./effects-page";

ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={IngridientsPage} />
            <Route path="ingridients" component={IngridientsPage} />
            <Route path="effects" component={EffectsPage} />
        </Route>
    </Router>,
    document.getElementById("app-container")
);