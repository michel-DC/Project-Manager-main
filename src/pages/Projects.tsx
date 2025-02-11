// src/pages/Projects.tsx
import React from "react";
import { useNavigate } from "react-router-dom";
import { useProjectContext } from "../context/ProjectContext";
import ProjectCard from "../components/ProjectCard";

const Projects: React.FC = () => {
  const { projects } = useProjectContext();
  const navigate = useNavigate();

  const handleCreateProject = () => {
    navigate("/new-project");
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Tous les projets</h1>
      <button
        onClick={handleCreateProject}
        className="bg-black text-white py-2 px-4 rounded mb-6"
      >
        Créer un nouveau projet
      </button>

      {projects.length === 0 ? (
        <p>Aucun projet n'a été créé pour le moment.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Projects;
