// src/pages/NewProject.tsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useProjectContext } from "../context/ProjectContext";

const NewProject: React.FC = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [duration, setDuration] = useState("");
  const [language, setLanguage] = useState("");
  const [status, setStatus] = useState("");
  const [confirmationMessage, setConfirmationMessage] = useState("");

  const { addProject } = useProjectContext();
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newProject = {
      id: Date.now(),
      name,
      description,
      duration,
      language,
      status,
    };

    addProject(newProject);
    setConfirmationMessage("Projet créé avec succès !");

    // Afficher le message de confirmation pendant 2 secondes avant redirection
    setTimeout(() => {
      navigate("/projects");
    }, 2000);
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Créer un nouveau projet</h1>

      {confirmationMessage && (
        <div className="bg-green-200 text-green-800 p-4 mb-4 rounded">
          {confirmationMessage}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Nom du projet"
          required
          className="w-full p-2 border rounded"
        />
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Description du projet"
          required
          className="w-full p-2 border rounded"
        />
        <input
          type="text"
          value={duration}
          onChange={(e) => setDuration(e.target.value)}
          placeholder="Durée estimée"
          required
          className="w-full p-2 border rounded"
        />
        <input
          type="text"
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
          placeholder="Langages/Technologies"
          required
          className="w-full p-2 border rounded"
        />
        <input
          type="text"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          placeholder="Statut du projet"
          required
          className="w-full p-2 border rounded"
        />
        <button type="submit" className="bg-black text-white py-2 px-4 rounded">
          Créer le projet
        </button>
      </form>
    </div>
  );
};

export default NewProject;
