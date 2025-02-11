import React from "react";
import { ProjectProvider } from "./context/ProjectContext"; // Assure-toi que le chemin est correct
import { Route, Routes } from "react-router-dom";
import Projects from "./pages/Projects";
import NewProject from "./pages/NewProject";
import ProjectDetail from "./pages/ProjectDetail";

const App: React.FC = () => {
  return (
    <ProjectProvider>
      <Routes>
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/new" element={<NewProject />} />
        <Route path="/projects/:id" element={<ProjectDetail />} />
      </Routes>
    </ProjectProvider>
  );
};

export default App;
