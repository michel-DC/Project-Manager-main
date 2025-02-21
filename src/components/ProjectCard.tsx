import React from "react";
import { Link } from "react-router-dom";
import { useProjectContext } from "../context/ProjectContext";

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

const techImages: { [key: string]: string } = {
  React: "src/assets/icon-languages/react-icon.png",
  Vue: "src/assets/icon-languages/vue-icon.png",
  Angular: "src/assets/icon-languages/angular-icon.webp",
  Svelte: "src/assets/icon-languages/svelte-icon.png",
  Next: "src/assets/icon-languages/next-icon.png",
  JavaScript: "src/assets/icon-languages/js-icon.webp",
  TypeScript: "src/assets/icon-languages/ts-icon.png",
  "HTML & CSS": "src/assets/icon-languages/html-css-icon.webp",
  "Tailwind CSS": "src/assets/icon-library/tailwind-icon.png",
  Bootstrap: "src/assets/icon-library/bootstrap-icon.webp",
  Webpack: "src/assets/icon-library/webpack-icon.png",
  Babel: "src/assets/icon-library/babel-icon.png",
  ESLint: "src/assets/icon-library/eslint-icon.webp",
  Prettier: "src/assets/icon-library/prettier-icon.jpg",
  Jest: "src/assets/icon-library/jest-icon.png",
  Cypress: "src/assets/icon-library/cypress-icon.png",
  Storybook: "src/assets/icon-library/storybook-icon.png",
  "Material-UI": "src/assets/icon-library/mu-icon.png",
  "Shadcn-UI": "src/assets/icon-library/shadcn-icon.png",
  Git: "src/assets/icon-library/git-icon.png",
};

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
  const { deleteProject } = useProjectContext();

  return (
    <div className="p-6 border border-gray-700 rounded-lg shadow-lg bg-[#1a1a1a] text-white">
      <h3 className="text-2xl font-bold mb-2">{name}</h3>
      <p className="text-gray-400 mb-4">{description}</p>
      <div className="mb-4">
        <span className="font-semibold">Durée estimée:</span>{" "}
        {estimatedDuration}
      </div>
      <div className="mb-4">
        <span className="font-semibold">Technologies:</span>
        <div className="flex flex-wrap mt-2">
          {technologies.map((tech) => (
            <div key={tech} className="flex items-center mr-4 mb-2">
              <img src={techImages[tech]} alt={tech} className="w-6 h-6 mr-2" />
              <span>{tech}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="mb-4">
        <span className="font-semibold">Statut:</span> {status}
      </div>
      <div className="mb-4">
        <span className="font-semibold">Priorité:</span> {priority}
      </div>
      <div className="mb-4">
        <span className="font-semibold">Objectifs clés:</span> {keyObjectives}
      </div>
      {githubLink && (
        <div className="mb-4">
          <span className="font-semibold">GitHub:</span>{" "}
          <a href={githubLink} className="text-blue-400">
            {githubLink}
          </a>
        </div>
      )}
      <div className="mb-4">
        <span className="font-semibold">Date de début:</span> {startDate}
      </div>
      {endDate && (
        <div className="mb-4">
          <span className="font-semibold">Date de fin:</span> {endDate}
        </div>
      )}
      {projectURL && (
        <div className="mb-4">
          <span className="font-semibold">URL du projet:</span>{" "}
          <a href={projectURL} className="text-blue-400">
            {projectURL}
          </a>
        </div>
      )}
      {teamMembers && (
        <div className="mb-4">
          <span className="font-semibold">Membres de l'équipe:</span>{" "}
          {teamMembers}
        </div>
      )}
      {budget && (
        <div className="mb-4">
          <span className="font-semibold">Budget:</span> {budget} €
        </div>
      )}
      {clientName && (
        <div className="mb-4">
          <span className="font-semibold">Nom du client:</span> {clientName}
        </div>
      )}
      {projectType && (
        <div className="mb-4">
          <span className="font-semibold">Type de projet:</span> {projectType}
        </div>
      )}
      <div className="mb-4">
        <span className="font-semibold">Outils:</span>
        <div className="flex flex-wrap mt-2">
          {tools.map((tool) => (
            <div key={tool} className="flex items-center mr-4 mb-2">
              <img src={techImages[tool]} alt={tool} className="w-6 h-6 mr-2" />
              <span>{tool}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-between mt-4">
        <button
          onClick={() => deleteProject(id)}
          className="text-red-400 hover:text-red-200 cursor-pointer"
        >
          Supprimer
        </button>
        <Link
          to={`/projects/edit/${id}`}
          className="text-green-400 hover:text-green-200 cursor-pointer"
        >
          Modifier
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;
