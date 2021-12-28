import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { ToDoLayer } from "./context/ToDoContext";
import reducer, { initialState } from "./context/reducer";

ReactDOM.render(
  <React.StrictMode>
    <ToDoLayer initialState={initialState} reducer={reducer}>
      <App />
    </ToDoLayer>
  </React.StrictMode>,
  document.getElementById("root")
);
