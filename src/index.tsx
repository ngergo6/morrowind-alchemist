import * as React from "react";
import * as ReactDOM from "react-dom";
import { Router, Route, Link, browserHistory } from 'react-router'

import { App } from "./app";

ReactDOM.render(
    <Router history={browserHistory}>
        <Route path="/" component={App}></Route>
    </Router>,
    document.getElementById("app-container")
);