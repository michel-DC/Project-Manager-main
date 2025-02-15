import React from "react";
import { Link } from "react-router-dom";

interface ProjectCardProps {
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

const ProjectCard: React.FC<ProjectCardProps> = ({
  id,
  name,
  description,
  estimatedDuration,
  technologies,
  status,
  priority,
  keyObjectives,
  githubLink,
  startDate,
  endDate,
  projectURL,
  teamMembers,
  budget,
  clientName,
  projectType,
  tools,
}) => {
  return (
    <div className="p-4 border border-gray-700 rounded-lg">
      <h3 className="text-xl font-bold">{name}</h3>
      <p className="text-gray-400 mt-2">{description}</p>
      <p className="text-gray-400 mt-2">Durée estimée: {estimatedDuration}</p>
      <p className="text-gray-400 mt-2">
        Technologies: {technologies.join(", ")}
      </p>
      <p className="text-gray-400 mt-2">Statut: {status}</p>
      <p className="text-gray-400 mt-2">Priorité: {priority}</p>
      <p className="text-gray-400 mt-2">Objectifs clés: {keyObjectives}</p>
      {githubLink && (
        <p className="text-gray-400 mt-2">
          GitHub:{" "}
          <a href={githubLink} className="text-blue-400">
            {githubLink}
          </a>
        </p>
      )}
      <p className="text-gray-400 mt-2">Date de début: {startDate}</p>
      {endDate && <p className="text-gray-400 mt-2">Date de fin: {endDate}</p>}
      {projectURL && (
        <p className="text-gray-400 mt-2">
          URL du projet:{" "}
          <a href={projectURL} className="text-blue-400">
            {projectURL}
          </a>
        </p>
      )}
      {teamMembers && (
        <p className="text-gray-400 mt-2">Membres de l'équipe: {teamMembers}</p>
      )}
      {budget && <p className="text-gray-400 mt-2">Budget: {budget} €</p>}
      {clientName && (
        <p className="text-gray-400 mt-2">Nom du client: {clientName}</p>
      )}
      {projectType && (
        <p className="text-gray-400 mt-2">Type de projet: {projectType}</p>
      )}
      <p className="text-gray-400 mt-2">Outils: {tools.join(", ")}</p>
      <Link to={`/projects/${id}`} className="text-blue-400 mt-2 inline-block">
        Voir détails
      </Link>
      <Link
        to={`/projects/edit/${id}`}
        className="text-green-400 mt-2 inline-block ml-4"
      >
        Modifier
      </Link>
    </div>
  );
};

export default ProjectCard;
