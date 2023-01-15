import React from "react";
import ReactDom from "react-dom";

import { App } from "./App"; //今回は通常のエクスポートでやる

ReactDom.render(<App />, document.getElementById("root"));
