import * as React from "react";
import * as ReactDOM from "react-dom";
import { Router, Route, IndexRoute, browserHistory } from 'react-router'

import { App } from "./app";
import { IngridientsPage } from "./ingridients-page";

ReactDOM.render(
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={IngridientsPage} />
            <Route path="ingridients" component={IngridientsPage} />
        </Route>
    </Router>,
    document.getElementById("app-container")
);