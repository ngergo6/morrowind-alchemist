import * as React from "react";
import * as ReactDOM from "react-dom";
import { Router, Route, IndexRoute, hashHistory } from 'react-router'

import { App } from "./app";
import { IngridientsPage } from "./ingridients-page";
import { IngridientPage } from "./ingridient";
import { EffectsPage } from "./effects-page";
import { EffectPage } from "./effect";

ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={EffectsPage} />
            <Route path="ingridients" component={IngridientsPage} />
            <Route path="ingridient/:name" component={IngridientPage} />
            <Route path="effects" component={EffectsPage} />
            <Route path="effect/:name" component={EffectPage} />
        </Route>
    </Router>,
    document.getElementById("app-container")
);