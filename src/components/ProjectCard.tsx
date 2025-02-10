import React from "react";
import { Project } from "../context/ProjectContext";

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="bg-white border border-gray-300 rounded-lg p-4 shadow-md">
      <h2 className="text-xl font-bold text-gray-900">{project.name}</h2>
      <p className="text-gray-700">{project.description}</p>
      <p className="text-gray-600">
        <strong>Durée :</strong> {project.duration}
      </p>
      <p className="text-gray-600">
        <strong>Langages :</strong> {project.language}
      </p>
      <p className="text-gray-600">
        <strong>Statut :</strong> {project.status}
      </p>
    </div>
  );
};

export default ProjectCard;
