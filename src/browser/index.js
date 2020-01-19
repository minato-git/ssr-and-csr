import React from "react";
import { render } from "react-dom";
import { BrowserRouter, Switch} from "react-router-dom";
import App from "../shared/App";

render(
    <BrowserRouter>
        <Switch>
            <App />
        </Switch>
    </BrowserRouter>
  ,
  document.getElementById("root")
);
