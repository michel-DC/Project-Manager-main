// src/context/ProjectContext.tsx
import React, { createContext, useContext, useState, useEffect } from "react";

// Définition de la structure du projet
export interface Project {
  id: number;
  name: string;
  description: string;
  duration: string;
  language: string;
  status: string;
}

interface ProjectContextType {
  projects: Project[];
  addProject: (project: Project) => void;
  updateProject: (id: number, updatedProject: Project) => void;
  deleteProject: (id: number) => void;
}

// Définition du contexte
const ProjectContext = createContext<ProjectContextType | undefined>(undefined);

// Hook personnalisé pour accéder au contexte
export const useProjectContext = () => {
  const context = useContext(ProjectContext);
  if (!context) {
    throw new Error("useProjectContext must be used within a ProjectProvider");
  }
  return context;
};

// Définition du composant ProjectProvider
// Typage explicite des "children" à React.ReactNode
export const ProjectProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [projects, setProjects] = useState<Project[]>([]);

  // Charger les projets depuis localStorage au démarrage
  useEffect(() => {
    const storedProjects = localStorage.getItem("projects");
    if (storedProjects) {
      try {
        const parsedProjects: Project[] = JSON.parse(storedProjects);
        setProjects(parsedProjects);
      } catch (error) {
        console.error(
          "Erreur lors de la récupération des projets depuis localStorage",
          error
        );
      }
    }
  }, []); // L'effet se déclenche uniquement au chargement du composant

  // Ajouter un projet
  const addProject = (project: Project) => {
    // Ajout du projet et mise à jour du localStorage
    setProjects((prevProjects) => {
      const updatedProjects = [...prevProjects, project];
      localStorage.setItem("projects", JSON.stringify(updatedProjects)); // Mise à jour du localStorage
      return updatedProjects;
    });
  };

  // Mettre à jour un projet
  const updateProject = (id: number, updatedProject: Project) => {
    setProjects((prevProjects) => {
      const updatedProjects = prevProjects.map((project) =>
        project.id === id ? updatedProject : project
      );
      localStorage.setItem("projects", JSON.stringify(updatedProjects)); // Mise à jour du localStorage
      return updatedProjects;
    });
  };

  // Supprimer un projet
  const deleteProject = (id: number) => {
    setProjects((prevProjects) => {
      const updatedProjects = prevProjects.filter(
        (project) => project.id !== id
      );
      localStorage.setItem("projects", JSON.stringify(updatedProjects)); // Mise à jour du localStorage
      return updatedProjects;
    });
  };

  return (
    <ProjectContext.Provider
      value={{ projects, addProject, updateProject, deleteProject }}
    >
      {children}
    </ProjectContext.Provider>
  );
};
