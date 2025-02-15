import React from "react";
import AppRouter from "./router/AppRouter";
import MainLayout from "./layouts/MainLayout";
import { ProjectProvider } from "./context/ProjectContext";

const App: React.FC = () => {
  return (
    <ProjectProvider>
      <MainLayout>
        <AppRouter />
      </MainLayout>
    </ProjectProvider>
  );
};

export default App;
