import React, { useState, useEffect } from "react";
import { useProjectContext } from "../context/ProjectContext";

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

const ProgressBoard: React.FC = () => {
  const { projects } = useProjectContext();
  const [selectedProjectId, setSelectedProjectId] = useState<number | null>(
    null
  );
  const [progress, setProgress] = useState<number>(0);
  const [hasUnsavedChanges, setHasUnsavedChanges] = useState(false);

  // Load progress from localStorage when component mounts
  useEffect(() => {
    if (selectedProjectId) {
      const savedProgress = localStorage.getItem(
        `project-progress-${selectedProjectId}`
      );
      if (savedProgress) {
        setProgress(parseInt(savedProgress));
      }
    }
  }, [selectedProjectId]);

  const selectedProject = projects.find(
    (project) => project.id === selectedProjectId
  );

  const handleProjectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const projectId = parseInt(e.target.value);
    setSelectedProjectId(projectId);
    setHasUnsavedChanges(false);
    // Load progress for newly selected project
    if (projectId) {
      const savedProgress = localStorage.getItem(
        `project-progress-${projectId}`
      );
      setProgress(savedProgress ? parseInt(savedProgress) : 0);
    }
  };

  const handleProgressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newProgress = parseInt(e.target.value);
    setProgress(newProgress);
    setHasUnsavedChanges(true);
  };

  const handleSave = () => {
    if (selectedProjectId) {
      localStorage.setItem(
        `project-progress-${selectedProjectId}`,
        progress.toString()
      );
      setHasUnsavedChanges(false);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h2 className="text-3xl text-gray-900 font-bold mb-8">
        Tableau de progression
      </h2>

      <div className="mb-8">
        <label className="block text-gray-800 text-lg font-medium mb-3">
          Sélectionner un projet
        </label>
        <select
          className="w-full p-3 border border-gray-300 rounded-md bg-white dark:bg-gray-700 dark:border-gray-600 focus:ring-2 focus:ring-blue-500 transition-colors duration-200"
          onChange={handleProjectChange}
          value={selectedProjectId || ""}
        >
          <option value="">Choisir un projet</option>
          {projects.map((project) => (
            <option key={project.id} value={project.id}>
              {project.name}
            </option>
          ))}
        </select>
      </div>

      {selectedProject && (
        <div className="space-y-8">
          <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-4">
              {selectedProject.name}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              {selectedProject.description}
            </p>

            <div className="space-y-6">
              <div>
                <label className="block text-lg font-medium mb-3">
                  Progression actuelle
                </label>
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={progress}
                  onChange={handleProgressChange}
                  className="w-full h-4 bg-gray-300 dark:bg-gray-600 rounded-full appearance-none cursor-pointer accent-green-500 hover:accent-green-600 transition-all duration-200"
                  style={{
                    background: `linear-gradient(to right, #22C55E 0%, #22C55E ${progress}%, #D1D5DB ${progress}%, #D1D5DB 100%)`,
                  }}
                />
                <div className="flex justify-between mt-3 text-base font-medium">
                  <span className="text-green-500">{progress}%</span>
                  <span className="text-gray-500">100%</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow">
                  <h4 className="text-lg font-medium mb-2">Date de début</h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    {selectedProject.startDate}
                  </p>
                </div>
                <div className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow">
                  <h4 className="text-lg font-medium mb-2">
                    Date de fin prévue
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    {selectedProject.endDate || "Non définie"}
                  </p>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow">
                <h4 className="text-lg font-medium mb-4">
                  Technologies utilisées
                </h4>
                <div className="flex flex-wrap gap-4">
                  {selectedProject.technologies &&
                    selectedProject.technologies.map((tech, index) => (
                      <div key={index} className="flex flex-col items-center">
                        <img
                          src={techImages[tech]}
                          alt={tech}
                          className="w-12 h-12 object-contain"
                        />
                        <span className="text-sm text-gray-600 dark:text-gray-300 mt-2">
                          {tech}
                        </span>
                      </div>
                    ))}
                </div>
              </div>

              <div className="flex justify-end">
                <button
                  onClick={handleSave}
                  disabled={!hasUnsavedChanges}
                  className={`px-4 py-2 rounded-md text-white font-medium transition-colors duration-200 mx-auto block ${
                    hasUnsavedChanges
                      ? "bg-blue-500 hover:bg-blue-600"
                      : "bg-gray-400 cursor-not-allowed"
                  }`}
                >
                  Enregistrer
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {!selectedProject && (
        <div className="text-center py-12">
          <p className="text-gray-500 dark:text-gray-400 text-lg">
            Veuillez sélectionner un projet pour voir et modifier sa
            progression.
          </p>
        </div>
      )}
    </div>
  );
};

export default ProgressBoard;
