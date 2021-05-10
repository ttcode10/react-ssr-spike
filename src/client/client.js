import React from "react";
import ReactDOM from "react-dom";
import Home from "./components/Home";
import './assets/favicon.ico';

ReactDOM.hydrate(
  <Home />,
  document.getElementById("root")
);
