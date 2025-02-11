import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useProjectContext } from "../context/ProjectContext";

const ProjectDetail: React.FC = () => {
  const { id } = useParams();
  const { projects, updateProject } = useProjectContext();
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [duration, setDuration] = useState("");
  const [language, setLanguage] = useState("");
  const [status, setStatus] = useState("En cours");

  useEffect(() => {
    const project = projects.find((proj) => proj.id === Number(id));
    if (project) {
      setName(project.name);
      setDescription(project.description);
      setDuration(project.duration);
      setLanguage(project.language);
      setStatus(project.status);
    }
  }, [id, projects]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const updatedProject = {
      id: Number(id),
      name,
      description,
      duration,
      language,
      status,
    };
    updateProject(Number(id), updatedProject);
    navigate("/projects");
  };

  return (
    <div>
      <h2 className="text-2xl font-semibold">Modifier le Projet</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block">Nom du projet</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border p-2 w-full"
          />
        </div>
        <div>
          <label className="block">Description</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="border p-2 w-full"
          />
        </div>
        <div>
          <label className="block">Durée estimée</label>
          <input
            type="text"
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
            className="border p-2 w-full"
          />
        </div>
        <div>
          <label className="block">Technologie</label>
          <input
            type="text"
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            className="border p-2 w-full"
          />
        </div>
        <div>
          <label className="block">Statut</label>
          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className="border p-2 w-full"
          >
            <option value="En cours">En cours</option>
            <option value="Terminé">Terminé</option>
            <option value="En attente">En attente</option>
          </select>
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded mt-4"
        >
          Sauvegarder les modifications
        </button>
      </form>
    </div>
  );
};

export default ProjectDetail;
