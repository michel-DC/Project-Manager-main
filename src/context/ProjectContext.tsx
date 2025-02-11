import React, { createContext, useState, ReactNode } from "react";

export interface Project {
  id: string;
  name: string;
  description: string;
  duration: string;
  language: string;
  status: string;
}

interface ProjectContextType {
  projects: Project[];
  addProject: (project: Project) => void;
}

export const ProjectContext = createContext<ProjectContextType | null>(null);

export const ProjectProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [projects, setProjects] = useState<Project[]>([]);

  const addProject = (project: Project) => {
    setProjects([...projects, project]);
  };

  return (
    <ProjectContext.Provider value={{ projects, addProject }}>
      {children}
    </ProjectContext.Provider>
  );
};
