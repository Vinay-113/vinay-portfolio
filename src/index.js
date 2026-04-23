import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom";
import App from "./App";
import "./App.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    {/* HashRouter avoids refresh issues when the site is hosted on GitHub Pages. */}
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>
);
