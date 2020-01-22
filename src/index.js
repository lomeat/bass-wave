import React from "react";
import ReactDOM from "react-dom";

import "./fonts/Helvetica-Neue.ttf";
import "./fonts/Roboto-Medium.ttf";
import "./fonts/Roboto-Regular.ttf";
import * as serviceWorker from "./serviceWorker";

import { App } from "./app";

ReactDOM.render(<App />, document.getElementById("root"));
serviceWorker.unregister();
