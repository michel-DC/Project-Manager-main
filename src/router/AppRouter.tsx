import React from "react";

import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Projects from "../pages/Projects";
import ProjectDetail from "../pages/ProjectDetail";
import NewProject from "../pages/NewProject";
import Tasks from "../pages/Tasks";
import Kanban from "../pages/Kanban";
import Calendar from "../pages/Calendar";
import Team from "../pages/Team";
import Statistics from "../pages/Statistics";
import Settings from "../pages/Settings";
import Resources from "../pages/Resources";
import About from "../pages/About";
import Help from "../pages/Help";
import NotFound from "../pages/NotFound";

const AppRouter: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/projects/:id" element={<ProjectDetail />} />
      <Route path="/new-project" element={<NewProject />} />
      <Route path="/tasks" element={<Tasks />} />
      <Route path="/kanban" element={<Kanban />} />
      <Route path="/calendar" element={<Calendar />} />
      <Route path="/team" element={<Team />} />
      <Route path="/statistics" element={<Statistics />} />
      <Route path="/settings" element={<Settings />} />
      <Route path="/resources" element={<Resources />} />
      <Route path="/about" element={<About />} />
      <Route path="/help" element={<Help />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRouter;
