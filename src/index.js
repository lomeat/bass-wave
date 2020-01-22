import React from "react";
import ReactDOM from "react-dom";
import { createGlobalStyle } from "styled-components";

import "./fonts/Helvetica-Neue.ttf";
import "./fonts/Roboto-Medium.ttf";
import "./fonts/Roboto-Regular.ttf";
import * as serviceWorker from "./serviceWorker";

import { App } from "./app";

const GlobalStyle = createGlobalStyle`
 @font-face {
      font-family: "Roboto Regular";
      src: url("./fonts/Roboto-Regular.ttf");
    }
 @font-face {
      font-family: "Roboto Medium";
      src: url("./fonts/Roboto-Medium.ttf");
    }
 @font-face {
      font-family: "Helvetica Neue";
      src: url("./fonts/Helvetica-Neue.ttf");
    }
`;

ReactDOM.render(
  <React.Fragment>
    <GlobalStyle></GlobalStyle>
    <App></App>
  </React.Fragment>,
  document.getElementById("root")
);
serviceWorker.unregister();
