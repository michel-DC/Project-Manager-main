import React, { useState } from "react";

const NewProject: React.FC = () => {
  const [projectName, setProjectName] = useState("");
  const [description, setDescription] = useState("");
  const [estimatedDuration, setEstimatedDuration] = useState("");
  const [technologies, setTechnologies] = useState<string[]>([]);
  const [status, setStatus] = useState("Planifié");
  const [priority, setPriority] = useState("Moyenne");
  const [keyObjectives, setKeyObjectives] = useState("");
  const [githubLink, setGithubLink] = useState("");
  const [startDate, setStartDate] = useState(
    new Date().toISOString().split("T")[0]
  );
  const [endDate, setEndDate] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Logique pour ajouter le projet
    console.log("Nom du projet:", projectName);
    console.log("Description:", description);
    console.log("Durée estimée:", estimatedDuration);
    console.log("Technologies:", technologies);
    console.log("Statut:", status);
    console.log("Priorité:", priority);
    console.log("Objectifs clés:", keyObjectives);
    console.log("Lien GitHub:", githubLink);
    console.log("Date de début:", startDate);
    console.log("Date de fin:", endDate);
    // Réinitialiser le formulaire
    setProjectName("");
    setDescription("");
    setEstimatedDuration("");
    setTechnologies([]);
    setStatus("Planifié");
    setPriority("Moyenne");
    setKeyObjectives("");
    setGithubLink("");
    setStartDate(new Date().toISOString().split("T")[0]);
    setEndDate("");
    // Afficher un message de confirmation
    alert("Projet ajouté avec succès !");
  };

  const handleTechnologyChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedOptions = Array.from(
      e.target.selectedOptions,
      (option) => option.value
    );
    setTechnologies(selectedOptions);
  };

  return (
    <div className="container mx-auto p-6 bg-[#101212] rounded shadow-md">
      <h2 className="text-2xl font-semibold text-center mb-4">
        Créer un Nouveau Projet
      </h2>
      <p className="text-gray-400 text-center mb-6">
        Ajoutez un nouveau projet à votre liste.
      </p>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-gray-700">Nom du Projet</label>
          <input
            type="text"
            value={projectName}
            onChange={(e) => setProjectName(e.target.value)}
            className="mt-1 p-2 border border-gray-300 rounded w-full"
            placeholder="Entrez le nom du projet"
            required
          />
        </div>
        <div>
          <label className="block text-gray-700">Description</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="mt-1 p-2 border border-gray-300 rounded w-full"
            placeholder="Entrez une description détaillée"
            required
          />
        </div>
        <div>
          <label className="block text-gray-700">Durée Estimée</label>
          <select
            value={estimatedDuration}
            onChange={(e) => setEstimatedDuration(e.target.value)}
            className="mt-1 p-2 border border-gray-300 rounded w-full bg-[#101212]"
            required
          >
            <option value="">Sélectionnez la durée</option>
            <option value="1 semaine">1 semaine</option>
            <option value="2 semaines">2 semaines</option>
            <option value="1 mois">1 mois</option>
            <option value="2 mois">2 mois</option>
            <option value="3 mois">3 mois</option>
          </select>
        </div>
        <div>
          <label className="block text-gray-700">Technologies Utilisées</label>
          <select
            multiple
            value={technologies}
            onChange={handleTechnologyChange}
            className="mt-1 p-2 border border-gray-300 rounded w-full"
            required
          >
            <option value="React TSX">React TSX</option>
            <option value="React JSX">React JSX</option>
            <option value="Vue">Vue</option>
            <option value="Angular">Angular</option>
            <option value="Svelte">Svelte</option>
            <option value="HTML & CSS">HTML & CSS</option>
          </select>
        </div>
        <div>
          <label className="block text-gray-700">Statut</label>
          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className="mt-1 p-2 border border-gray-300 rounded w-full bg-[#101212]"
            required
          >
            <option value="Planifié">Planifié</option>
            <option value="En cours">En cours</option>
            <option value="Terminé">Terminé</option>
          </select>
        </div>
        <div>
          <label className="block text-gray-700">Priorité</label>
          <select
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
            className="mt-1 p-2 border border-gray-300 rounded w-full bg-[#101212]"
            required
          >
            <option value="Haute">Haute</option>
            <option value="Moyenne">Moyenne</option>
            <option value="Basse">Basse</option>
          </select>
        </div>
        <div>
          <label className="block text-gray-700">Objectifs Clés</label>
          <textarea
            value={keyObjectives}
            onChange={(e) => setKeyObjectives(e.target.value)}
            className="mt-1 p-2 border border-gray-300 rounded w-full"
            placeholder="Définissez les objectifs clés"
            required
          />
        </div>
        <div>
          <label className="block text-gray-700">Lien GitHub (optionnel)</label>
          <input
            type="url"
            value={githubLink}
            onChange={(e) => setGithubLink(e.target.value)}
            className="mt-1 p-2 border border-gray-300 rounded w-full"
            placeholder="Entrez le lien GitHub"
          />
        </div>
        <div>
          <label className="block text-gray-700">Date de Début</label>
          <input
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            className="mt-1 p-2 border border-gray-300 rounded w-full"
            required
          />
        </div>
        <div>
          <label className="block text-gray-700">Date de Fin</label>
          <input
            type="date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            className="mt-1 p-2 border border-gray-300 rounded w-full"
            min={startDate}
            required
          />
        </div>
        <div className="flex justify-between">
          <button type="submit" className="btn-primary">
            Ajouter Projet
          </button>
          <button
            type="button"
            className="btn-secondary"
            onClick={() => window.history.back()}
          >
            Annuler
          </button>
        </div>
      </form>
    </div>
  );
};

export default NewProject;
