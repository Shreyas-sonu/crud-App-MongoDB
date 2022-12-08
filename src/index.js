import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import EmployeeProvider from "./contextApi/EmployeeContext";
import "./global.css";
createRoot(document.getElementById("root")).render(
  <EmployeeProvider>
    <App />
  </EmployeeProvider>
);
