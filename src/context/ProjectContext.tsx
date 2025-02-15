import React, { createContext, useContext, useState, ReactNode } from "react";

interface Project {
  id: number;
  name: string;
  description: string;
  estimatedDuration: string;
  technologies: string[];
  status: string;
  priority: string;
  keyObjectives: string;
  githubLink?: string;
  startDate: string;
  endDate?: string;
  projectURL?: string;
  teamMembers?: string;
  budget?: string;
  clientName?: string;
  projectType?: string;
  tools: string[];
}

interface ProjectContextType {
  projects: Project[];
  addProject: (project: Project) => void;
}

const ProjectContext = createContext<ProjectContextType | undefined>(undefined);

export const useProjectContext = () => {
  const context = useContext(ProjectContext);
  if (!context) {
    throw new Error("useProjectContext must be used within a ProjectProvider");
  }
  return context;
};

interface ProjectProviderProps {
  children: ReactNode;
}

export const ProjectProvider: React.FC<ProjectProviderProps> = ({
  children,
}) => {
  const [projects, setProjects] = useState<Project[]>([]);

  const addProject = (project: Project) => {
    setProjects((prevProjects) => [...prevProjects, project]);
  };

  return (
    <ProjectContext.Provider value={{ projects, addProject }}>
      {children}
    </ProjectContext.Provider>
  );
};
