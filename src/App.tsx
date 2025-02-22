import React from "react";
import AppRouter from "./router/AppRouter";
import MainLayout from "./layouts/MainLayout";
import { ProjectProvider } from "./context/ProjectContext";
// import HeroSection from "./pages/HeroSection";

const App: React.FC = () => {
  return (
    // <HeroSection />
    <ProjectProvider>
      <MainLayout>
        <AppRouter />
      </MainLayout>
    </ProjectProvider>
  );
};

export default App;
