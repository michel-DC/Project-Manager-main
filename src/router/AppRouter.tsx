import React from "react";
import { Routes, Route } from "react-router-dom";
// import Home from "../pages/Home";
import HeroSection from "../pages/HeroSection";
import Projects from "../pages/Projects";
import ProjectDetail from "../pages/ProjectDetail";
import NewProject from "../pages/NewProject";
import Tasks from "../pages/Tasks";
import Progress from "../pages/Progress";
import Calendar from "../pages/Calendar";
import Settings from "../pages/Settings";
import Help from "../pages/Help";
import NotFound from "../pages/NotFound";
import Login from "../pages/Login";

const AppRouter: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<HeroSection />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/projects/:id" element={<ProjectDetail />} />
      <Route path="/new-project" element={<NewProject />} />
      <Route path="/tasks" element={<Tasks />} />
      <Route path="/progress" element={<Progress />} />
      <Route path="/calendar" element={<Calendar />} />
      <Route path="/settings" element={<Settings />} />
      <Route path="/help" element={<Help />} />
      <Route path="*" element={<NotFound />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};

export default AppRouter;
