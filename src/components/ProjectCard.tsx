import React, { useState } from "react"; // Import useState for managing modal state
import { useProjectContext } from "../context/ProjectContext";
import { Modal } from "./ui/Modal"; // Import Modal component

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
  githubLink,
  startDate,
  projectURL,
  teamMembers,
  budget,
  tools,
}) => {
  const { deleteProject } = useProjectContext();
  const [showModal, setShowModal] = useState(false); // State for modal visibility

  return (
    <div className="bg-[var(--background)] rounded-xl shadow-sm border border-[var(--border)] h-fit">
      <div className="p-6">
        <h3 className="text-xl font-semibold text-[var(--foreground)] mb-2">{name}</h3>

        <div className="grid grid-cols-2 gap-4 mb-4">
          <div className="text-sm">
            <span className="text-[var(--muted-foreground)]">Durée ⏳</span>
            <p className="font-medium text-[var(--foreground)]">{estimatedDuration}</p>
          </div>

          <div className="text-sm">
            <span className="text-[var(--muted-foreground)]">Statut 🚦</span>
            <p className="font-medium text-[var(--foreground)]">{status}</p>
          </div>

          <div className="text-sm">
            <span className="text-[var(--muted-foreground)]">Priorité ⚡</span>
            <p className="font-medium text-[var(--foreground)]">{priority}</p>
          </div>

          <div className="text-sm">
            <span className="text-[var(--muted-foreground)]">Date début 📅</span>
            <p className="font-medium text-[var(--foreground)]">{startDate}</p>
          </div>
        </div>

        {technologies.length > 0 && (
          <div className="border-t border-[var(--border)] pt-4 mb-4">
            <span className="text-sm text-[var(--muted-foreground)]">Technologies 🛠️</span>
            <div className="flex flex-wrap gap-2 mt-2">
              {technologies.map((tech) => (
                <div
                  key={tech}
                  className="flex items-center gap-1 bg-[var(--muted)] px-2 py-1 rounded"
                >
                  <img src={techImages[tech]} alt={tech} className="w-4 h-4" />
                  <span className="text-xs text-[var(--muted-foreground)]">{tech}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {tools.length > 0 && (
          <div className="border-t border-[var(--border)] pt-4 mb-4">
            <span className="text-sm text-[var(--muted-foreground)]">Outils</span>
            <div className="flex flex-wrap gap-2 mt-2">
              {tools.map((tool) => (
                <div
                  key={tool}
                  className="flex items-center gap-1 bg-[var(--muted)] px-2 py-1 rounded"
                >
                  <img
                    src={techImages[tool]}
                    alt={tool}
                    className="w-4 h-4"
                  />
                  <span className="text-xs text-[var(--muted-foreground)]">{tool}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {(githubLink || projectURL || teamMembers || budget) && (
          <div className="space-y-3">
            {githubLink && (
              <div className="text-sm">
                <span className="text-[var(--muted-foreground)]">GitHub</span>
                <a
                  href={githubLink}
                  className="block text-[var(--primary)] hover:underline"
                >
                  {githubLink}
                </a>
              </div>
            )}

            {projectURL && (
              <div className="text-sm">
                <span className="text-[var(--muted-foreground)]">URL</span>
                <a
                  href={projectURL}
                  className="block text-[var(--primary)] hover:underline"
                >
                  {projectURL}
                </a>
              </div>
            )}

            {teamMembers && (
              <div className="text-sm">
                <span className="text-[var(--muted-foreground)]">Équipe 🙋‍♂️</span>
                <p className="text-[var(--foreground)]">{teamMembers}</p>
              </div>
            )}

            {budget && (
              <div className="text-sm">
                <span className="text-[var(--muted-foreground)]">Budget 💶</span>
                <p className="text-[var(--foreground)]">{budget} €</p>
              </div>
            )}
            <p className="text-[var(--muted-foreground)] text-sm">Description du projet ⌨️:</p>
            <div>
              {description.length > 100 ? (
                <>
                  <p className="text-[var(--muted-foreground)] font-semibold text-sm mb-2">
                    {description.substring(0, 100)}...
                  </p>
                  <button
                    onClick={() => setShowModal(true)}
                    className="text-[var(--primary)] hover:underline cursor-pointer"
                  >
                    voir plus
                  </button>
                </>
              ) : (
                <p className="text-[var(--muted-foreground)] font-semibold text-sm mb-2">{description}</p>
              )}
              {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                  <div className="p-4">
                    <h2 className="text-lg font-semibold text-[var(--foreground)]">Description complète</h2>
                    <p className="text-[var(--muted-foreground)]">{description}</p>
                  </div>
                </Modal>
              )}
            </div>
          </div>
        )}

        <div className="border-t border-[var(--border)] mt-6 pt-4">
          <div className="flex gap-3">
            <button
              onClick={() => deleteProject(id)}
              className="flex-1 px-4 py-2 text-sm font-medium text-[var(--destructive-foreground)] bg-[var(--destructive)] rounded-md hover:bg-red-600 transition-colors cursor-pointer"
            >
              Supprimer
            </button>
            <button
              className="flex-1 px-4 py-2 text-sm font-medium text-[var(--foreground)] bg-[var(--muted)] rounded-md hover:bg-gray-200 transition-colors text-center cursor-pointer"
            >
              Modifier
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
