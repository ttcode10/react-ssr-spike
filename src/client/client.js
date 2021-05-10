import React from "react";
import ReactDOM from "react-dom";
import Home from "./components/Home";
import './favicons/favicons';

ReactDOM.hydrate(
  <Home />,
  document.getElementById("root")
);
