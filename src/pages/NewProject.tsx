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
  const [projectURL, setProjectURL] = useState("");
  const [teamMembers, setTeamMembers] = useState("");
  const [budget, setBudget] = useState("");
  const [clientName, setClientName] = useState("");
  const [projectType, setProjectType] = useState("");
  const [tools, setTools] = useState<string[]>([]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Logic to add the project
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
    console.log("URL du projet:", projectURL);
    console.log("Membres de l'équipe:", teamMembers);
    console.log("Budget:", budget);
    console.log("Nom du client:", clientName);
    console.log("Type de projet:", projectType);
    console.log("Outils et bibliothèques:", tools);
    // Reset the form
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
    setProjectURL("");
    setTeamMembers("");
    setBudget("");
    setClientName("");
    setProjectType("");
    setTools([]);
    // Show confirmation message
    alert("Projet ajouté avec succès !");
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
        {/* Project Name */}
        <div>
          <label className="block text-gray-700">Nom du Projet 📝</label>
          <input
            type="text"
            value={projectName}
            onChange={(e) => setProjectName(e.target.value)}
            className="mt-1 p-2 border border-gray-300 rounded w-full"
            placeholder="Entrez le nom du projet"
            required
          />
        </div>
        {/* Description */}
        <div>
          <label className="block text-gray-700">Description 📖</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="mt-1 p-2 border border-gray-300 rounded w-full"
            placeholder="Entrez une description détaillée"
            required
          />
        </div>
        {/* Estimated Duration */}
        <div>
          <label className="block text-gray-700">Durée Estimée ⏳</label>
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
        {/* Technologies Used */}
        <div>
          <label className="block text-gray-700">
            Technologies Utilisées 🛠️
          </label>
          <div className="flex flex-wrap justify-between mt-1">
            {[
              {
                name: "React TSX",
                src: "src/assets/icon-languages/react-icon.png",
              },
              { name: "Vue", src: "src/assets/icon-languages/vue-icon.png" },
              {
                name: "Angular",
                src: "src/assets/icon-languages/angular-icon.webp",
              },
              {
                name: "Svelte",
                src: "src/assets/icon-languages/svelte-icon.png",
              },
              { name: "Next", src: "src/assets/icon-languages/next-icon.png" },
              {
                name: "JavaScript",
                src: "src/assets/icon-languages/js-icon.webp",
              },
              {
                name: "TypeScript",
                src: "src/assets/icon-languages/ts-icon.png",
              },
              {
                name: "HTML & CSS",
                src: "src/assets/icon-languages/html-css-icon.webp",
              },
            ].map((tech) => (
              <img
                key={tech.name}
                src={tech.src}
                alt={tech.name}
                className={`w-24 h-24 m-2 cursor-pointer transition-transform duration-200 ease-in-out transform hover:scale-120 focus:scale-105 focus:border-4 focus:border-white focus:rounded-lg ${
                  technologies.includes(tech.name)
                    ? "border-4 border-white rounded-lg"
                    : ""
                }`}
                onClick={() => {
                  setTechnologies((prev) =>
                    prev.includes(tech.name)
                      ? prev.filter((t) => t !== tech.name)
                      : [...prev, tech.name]
                  );
                }}
              />
            ))}
          </div>
        </div>
        {/* Tools and Libraries */}
        <div>
          <label className="block text-gray-700">
            Outils et Bibliothèques 🛠️
          </label>
          <div className="flex flex-wrap justify-between mt-1">
            {[
              {
                name: "Webpack",
                src: "src/assets/icon-library/webpack-icon.png",
              },
              { name: "Babel", src: "src/assets/icon-library/babel-icon.png" },
              {
                name: "ESLint",
                src: "src/assets/icon-library/eslint-icon.webp",
              },
              {
                name: "Prettier",
                src: "src/assets/icon-library/prettier-icon.jpg",
              },
              { name: "Jest", src: "src/assets/icon-library/jest-icon.png" },
              {
                name: "Cypress",
                src: "src/assets/icon-library/cypress-icon.png",
              },
              {
                name: "Storybook",
                src: "src/assets/icon-library/storybook-icon.png",
              },
              {
                name: "Tailwind CSS",
                src: "src/assets/icon-library/tailwind-icon.png",
              },
              {
                name: "Bootstrap",
                src: "src/assets/icon-library/bootstrap-icon.webp",
              },
              {
                name: "Material-UI",
                src: "src/assets/icon-library/mu-icon.png",
              },
            ].map((tool) => (
              <img
                key={tool.name}
                src={tool.src}
                alt={tool.name}
                className={`w-24 h-24 m-2 cursor-pointer transition-transform duration-200 ease-in-out transform hover:scale-120 focus:scale-105 focus:border-4 focus:border-white focus:rounded-lg ${
                  tools.includes(tool.name)
                    ? "border-4 border-white rounded-lg"
                    : ""
                }`}
                onClick={() => {
                  setTools((prev) =>
                    prev.includes(tool.name)
                      ? prev.filter((t) => t !== tool.name)
                      : [...prev, tool.name]
                  );
                }}
              />
            ))}
          </div>
        </div>
        {/* Status */}
        <div>
          <label className="block text-gray-700">Statut 🚦</label>
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
        {/* Priority */}
        <div>
          <label className="block text-gray-700">Priorité⚡</label>
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
        {/* Key Objectives */}
        <div>
          <label className="block text-gray-700">Objectifs Clés 🎯</label>
          <select
            value={keyObjectives}
            onChange={(e) => setKeyObjectives(e.target.value)}
            className="mt-1 p-2 border border-gray-300 rounded w-full bg-[#101212]"
            required
          >
            <option value="Améliorer les compétences en programmation">
              Améliorer les compétences en programmation
            </option>
            <option value="Développer un portfolio">
              Développer un portfolio
            </option>
            <option value="Apprendre une nouvelle technologie">
              Apprendre une nouvelle technologie
            </option>
            <option value="Collaborer avec d'autres développeurs">
              Collaborer avec d'autres développeurs
            </option>
            <option value="Créer un produit commercialisable">
              Créer un produit commercialisable
            </option>
            <option value="Contribuer à un projet open source">
              Contribuer à un projet open source
            </option>
            <option value="Automatiser des tâches répétitives">
              Automatiser des tâches répétitives
            </option>
            <option value="Explorer de nouvelles idées">
              Explorer de nouvelles idées
            </option>
            <option value="Autre">Autre</option>
          </select>
          {keyObjectives === "Autre" && (
            <textarea
              value={keyObjectives === "Autre" ? "" : keyObjectives}
              onChange={(e) => setKeyObjectives(e.target.value)}
              className="mt-1 p-2 border border-gray-300 rounded w-full"
              placeholder="Définissez les objectifs clés"
              required
            />
          )}
        </div>
        {/* GitHub Link */}
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
        {/* Project URL */}
        <div>
          <label className="block text-gray-700">
            URL du Projet (optionel)
          </label>
          <input
            type="url"
            value={projectURL}
            onChange={(e) => setProjectURL(e.target.value)}
            className="mt-1 p-2 border border-gray-300 rounded w-full"
            placeholder="Entrez l'URL du projet"
          />
        </div>
        {/* Team Members */}
        <div>
          <label className="block text-gray-700">Membres de l'équipe 🙋‍♂️</label>
          <input
            type="text"
            value={teamMembers}
            onChange={(e) => setTeamMembers(e.target.value)}
            className="mt-1 p-2 border border-gray-300 rounded w-full"
            placeholder="Entrez les membres de l'équipe"
          />
        </div>
        {/* Budget */}
        <div>
          <label className="block text-gray-700">Budget (en €) 💶</label>
          <input
            type="number"
            value={budget}
            onChange={(e) => setBudget(e.target.value)}
            className="mt-1 p-2 border border-gray-300 rounded w-full"
            placeholder="Entrez le budget"
          />
        </div>
        {/* Client Name */}
        <div>
          <label className="block text-gray-700">Nom du Client 👨‍💼</label>
          <input
            type="text"
            value={clientName}
            onChange={(e) => setClientName(e.target.value)}
            className="mt-1 p-2 border border-gray-300 rounded w-full"
            placeholder="Entrez le nom du client"
          />
        </div>
        {/* Project Type */}
        <div>
          <label className="block text-gray-700">Type de Projet ❓</label>
          <input
            type="text"
            value={projectType}
            onChange={(e) => setProjectType(e.target.value)}
            className="mt-1 p-2 border border-gray-300 rounded w-full"
            placeholder="Entrez le type de projet"
          />
        </div>
        {/* Buttons */}
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
