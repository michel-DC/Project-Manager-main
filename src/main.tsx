import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import "/src/style/index.css";
import { ProjectProvider } from "./context/ProjectContext";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <ProjectProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ProjectProvider>
  </React.StrictMode>
);
