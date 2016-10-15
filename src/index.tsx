import * as React from "react";
import * as ReactDOM from "react-dom";

import { Hello } from "./hello";

ReactDOM.render(
    <Hello something="something" />,
    document.getElementById("app-container")
);