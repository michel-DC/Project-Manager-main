import React, {
    createContext,
    useContext,
    useState,
    useEffect,
    ReactNode,
  } from "react";
  
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
    deleteProject: (id: number) => void;
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
    // Charger les projets depuis localStorage
    const [projects, setProjects] = useState<Project[]>(() => {
      const storedProjects = localStorage.getItem("projects");
      return storedProjects ? JSON.parse(storedProjects) : [];
    });
  
    // Sauvegarder les projets dans localStorage à chaque mise à jour
    useEffect(() => {
      localStorage.setItem("projects", JSON.stringify(projects));
    }, [projects]);
  
    const addProject = (project: Project) => {
      setProjects((prevProjects) => {
        const updatedProjects = [...prevProjects, project];
        localStorage.setItem("projects", JSON.stringify(updatedProjects)); // Sauvegarde immédiate
        return updatedProjects;
      });
    };
  
    const deleteProject = (id: number) => {
      setProjects((prevProjects) => {
        const updatedProjects = prevProjects.filter(
          (project) => project.id !== id
        );
        localStorage.setItem("projects", JSON.stringify(updatedProjects)); // Sauvegarde immédiate
        return updatedProjects;
      });
    };
//   in test
    const editProject = (id: number) => {
      const projectToEdit = projects.find((project) => project.id === id);
      if (projectToEdit) {
        // Redirect to the edit form with the project data
        window.location.href = `/projects/edit/${id}?data=${encodeURIComponent(JSON.stringify(projectToEdit))}`;
      }
    };
// in text
  
    return (
      <ProjectContext.Provider value={{ projects, addProject, deleteProject }}>
        {children}
      </ProjectContext.Provider>
    );
  };
  