import React from "react";
import ReactDOM from "react-dom/client";
import { Router } from "./Router";

import "./main.css";

const element = document.getElementById("root");
const root = ReactDOM.createRoot(element);
root.render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>
);
