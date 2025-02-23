import React, { useState, useEffect } from "react";
import { useProjectContext } from "../context/ProjectContext";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaUsers,
  FaMoneyBillWave,
} from "react-icons/fa";

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
  const [notes, setNotes] = useState<string>("");
  const [milestones, setMilestones] = useState<
    { id: number; title: string; completed: boolean }[]
  >([]);
  const [showAddMilestone, setShowAddMilestone] = useState(false);
  const [newMilestone, setNewMilestone] = useState("");

  useEffect(() => {
    if (selectedProjectId) {
      const savedProgress = localStorage.getItem(
        `project-progress-${selectedProjectId}`
      );
      const savedNotes = localStorage.getItem(
        `project-notes-${selectedProjectId}`
      );
      const savedMilestones = localStorage.getItem(
        `project-milestones-${selectedProjectId}`
      );

      if (savedProgress) setProgress(parseInt(savedProgress));
      if (savedNotes) setNotes(savedNotes);
      if (savedMilestones) setMilestones(JSON.parse(savedMilestones));
      else setMilestones([]);
    }
  }, [selectedProjectId]);

  const selectedProject = projects.find(
    (project) => project.id === selectedProjectId
  );

  const handleProjectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const projectId = parseInt(e.target.value);
    setSelectedProjectId(projectId);
    setHasUnsavedChanges(false);
    setShowAddMilestone(false);

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

  const handleNotesChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setNotes(e.target.value);
    setHasUnsavedChanges(true);
  };

  const handleAddMilestone = () => {
    if (newMilestone.trim()) {
      const newMilestoneObj = {
        id: Date.now(),
        title: newMilestone,
        completed: false,
      };
      setMilestones([...milestones, newMilestoneObj]);
      setNewMilestone("");
      setShowAddMilestone(false);
      setHasUnsavedChanges(true);
    }
  };

  const toggleMilestone = (id: number) => {
    setMilestones(
      milestones.map((m) =>
        m.id === id ? { ...m, completed: !m.completed } : m
      )
    );
    setHasUnsavedChanges(true);
  };

  const handleSave = () => {
    if (selectedProjectId) {
      localStorage.setItem(
        `project-progress-${selectedProjectId}`,
        progress.toString()
      );
      localStorage.setItem(`project-notes-${selectedProjectId}`, notes);
      localStorage.setItem(
        `project-milestones-${selectedProjectId}`,
        JSON.stringify(milestones)
      );
      setHasUnsavedChanges(false);
    }
  };

  return (
    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="absolute inset-0 overflow-hidden">
        <img
          className="w-full h-full object-cover opacity-50"
          src="https://cdn.rareblocks.xyz/collection/clarity/images/hero/1/background-pattern.png"
          alt=""
        />
      </div>
      <div className="relative">
        <h2 className="text-3xl text-gray-700 font-bold mb-8">
          Tableau de progression
        </h2>

        <div className="mb-8">
          <label className="block text-gray-800 text-lg font-medium mb-3">
            Sélectionner un projet
          </label>
          <select
            className="w-full p-3 border text-gray-800 border-gray-300 rounded-md bg-white dark:bg-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-blue-500 transition-colors duration-200"
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
            <div className="bg-white dark:bg-gray-300 p-6 rounded-lg shadow-lg">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-2xl text-gray-800 font-semibold mb-2">
                    {selectedProject.name}
                  </h3>
                  <p className="text-gray-800">{selectedProject.description}</p>
                </div>
                <div className="flex gap-4">
                  {selectedProject.githubLink && (
                    <a
                      href={selectedProject.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-800 hover:text-gray-900"
                    >
                      <FaGithub size={24} />
                    </a>
                  )}
                  {selectedProject.projectURL && (
                    <a
                      href={selectedProject.projectURL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-gray-900"
                    >
                      <FaExternalLinkAlt size={24} />
                    </a>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-gray-200 p-4 rounded-lg shadow flex items-center gap-3">
                  <FaUsers className="text-blue-500" size={20} />
                  <div>
                    <h4 className="font-medium text-gray-800">Équipe:</h4>
                    <p className="text-gray-700">
                      {selectedProject.teamMembers || "Non spécifié"}
                    </p>
                  </div>
                </div>

                <div className="bg-gray-200 p-4 rounded-lg shadow flex items-center gap-3">
                  <FaMoneyBillWave className="text-green-500" size={20} />
                  <div>
                    <h4 className="font-medium text-gray-800">Budget:</h4>
                    <p className="text-gray-800">
                      {selectedProject.budget || "Non spécifié"} €
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <label className="block text-lg text-gray-800 font-medium mb-3">
                    Progression actuelle
                  </label>
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={progress}
                    onChange={handleProgressChange}
                    className="w-full h-4 bg-gray-200 rounded-full appearance-none cursor-pointer accent-green-500 hover:accent-green-600 transition-all duration-200"
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
                  <div className="bg-gray-200 p-4 rounded-lg shadow">
                    <h4 className="text-lg text-gray-800 font-medium mb-2">
                      Date de début
                    </h4>
                    <p className="text-gray-800">{selectedProject.startDate}</p>
                  </div>
                  <div className="bg-gray-200 p-4 rounded-lg shadow">
                    <h4 className="text-lg text-gray-800 font-medium mb-2">
                      Date de fin prévue
                    </h4>
                    <p className="text-gray-800">
                      {selectedProject.endDate || "Non définie"}
                    </p>
                  </div>
                </div>

                <div className="bg-gray-200 p-4 rounded-lg shadow">
                  <h4 className="text-lg text-gray-800 font-medium mb-4">
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
                          <span className="text-sm text-gray-800 mt-2">
                            {tech}
                          </span>
                        </div>
                      ))}
                  </div>
                </div>

                <div className="bg-gray-200 p-4 rounded-lg shadow">
                  <h4 className="text-lg text-gray-800 font-medium mb-4">
                    Jalons du projet
                  </h4>
                  <div className="space-y-3">
                    {milestones.map((milestone) => (
                      <div
                        key={milestone.id}
                        className="flex items-center gap-3 p-2 hover:bg-gray-50 rounded"
                      >
                        <input
                          type="checkbox"
                          checked={milestone.completed}
                          onChange={() => toggleMilestone(milestone.id)}
                          className="w-5 h-5 text-blue-600"
                        />
                        <span
                          className={`flex-1 ${
                            milestone.completed
                              ? "line-through text-gray-400"
                              : ""
                          }`}
                        >
                          {milestone.title}
                        </span>
                      </div>
                    ))}
                  </div>
                  {showAddMilestone ? (
                    <div className="mt-4 flex gap-2">
                      <input
                        type="text"
                        value={newMilestone}
                        onChange={(e) => setNewMilestone(e.target.value)}
                        placeholder="Nouveau jalon..."
                        className="flex-1 p-2 text-gray-800 border rounded"
                      />
                      <button
                        onClick={handleAddMilestone}
                        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                      >
                        Ajouter
                      </button>
                    </div>
                  ) : (
                    <button
                      onClick={() => setShowAddMilestone(true)}
                      className="mt-4 text-blue-500 hover:text-blue-600"
                    >
                      + Ajouter un jalon
                    </button>
                  )}
                </div>

                <div className="bg-gray-200 text-gray-800 p-4 rounded-lg shadow">
                  <h4 className="text-lg font-medium mb-4">
                    Notes et commentaires
                  </h4>
                  <textarea
                    value={notes}
                    onChange={handleNotesChange}
                    placeholder="Ajoutez vos notes ici..."
                    className="w-full h-32 p-3 border border-gray-800 focus:ring-2 focus:ring-gray-800 rounded-md resize-none"
                  />
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
            <p className="text-gray-800 text-lg">
              Veuillez sélectionner un projet pour voir et modifier sa
              progression.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProgressBoard;
