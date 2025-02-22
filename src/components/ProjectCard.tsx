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
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">{name}</h3>
        <p className="text-gray-600 text-sm mb-4">{description}</p>

        <div className="grid grid-cols-2 gap-4 mb-4">
          <div className="text-sm">
            <span className="text-gray-500">Durée ⏳</span>
            <p className="font-medium text-gray-900">{estimatedDuration}</p>
          </div>

          <div className="text-sm">
            <span className="text-gray-500">Statut 🚦</span>
            <p className="font-medium text-gray-900">{status}</p>
          </div>

          <div className="text-sm">
            <span className="text-gray-500">Priorité ⚡</span>
            <p className="font-medium text-gray-900">{priority}</p>
          </div>

          <div className="text-sm">
            <span className="text-gray-500">Date début 📅</span>
            <p className="font-medium text-gray-900">{startDate}</p>
          </div>
        </div>

        <div className="border-t border-gray-100 pt-4 mb-4">
          <span className="text-sm text-gray-500">Technologies 🛠️</span>
          <div className="flex flex-wrap gap-2 mt-2">
            {technologies.map((tech) => (
              <div
                key={tech}
                className="flex items-center gap-1 bg-gray-50 px-2 py-1 rounded"
              >
                <img src={techImages[tech]} alt={tech} className="w-4 h-4" />
                <span className="text-xs text-gray-600">{tech}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="border-t border-gray-100 pt-4 mb-4">
          <span className="text-sm text-gray-500">Outils</span>
          <div className="flex flex-wrap gap-2 mt-2">
            {tools.map((tools) => (
              <div
                key={tools}
                className="flex items-center gap-1 bg-gray-50 px-2 py-1 rounded"
              >
                <img src={techImages[tools]} alt={tools} className="w-4 h-4" />
                <span className="text-xs text-gray-600">{tools}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-3">
          {githubLink && (
            <div className="text-sm">
              <span className="text-gray-500">GitHub</span>
              <a
                href={githubLink}
                className="block text-blue-600 hover:underline"
              >
                {githubLink}
              </a>
            </div>
          )}

          {projectURL && (
            <div className="text-sm">
              <span className="text-gray-500">URL</span>
              <a
                href={projectURL}
                className="block text-blue-600 hover:underline"
              >
                {projectURL}
              </a>
            </div>
          )}

          {teamMembers && (
            <div className="text-sm">
              <span className="text-gray-500">Équipe 🙋‍♂️</span>
              <p className="text-gray-900">{teamMembers}</p>
            </div>
          )}

          {budget && (
            <div className="text-sm">
              <span className="text-gray-500">Budget 💶</span>
              <p className="text-gray-900">{budget} €</p>
            </div>
          )}
        </div>

        <div className="border-t border-gray-100 mt-6 pt-4">
          <div className="flex gap-3">
            <button
              onClick={() => deleteProject(id)}
              className="flex-1 px-4 py-2 text-sm font-medium text-white bg-red-500 rounded-md hover:bg-red-600 transition-colors"
            >
              Supprimer
            </button>
            <Link
              to={`/projects/edit/${id}`}
              className="flex-1 px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200 transition-colors text-center"
            >
              Modifier
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
