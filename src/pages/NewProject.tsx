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
    <div className="min-h-screen flex items-center justify-center bg-[#101212]">
      <div className="bg-[#1a1a1a] p-8 rounded-lg shadow-lg w-full max-w-4xl">
        <h2 className="text-3xl font-semibold text-center mb-6 bg-gradient-to-r from-[#fafcfc] to-[#FFD700] bg-clip-text text-transparent">
          Créer un Nouveau Projet
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Project Name */}
          <div>
            <label className="block text-gray-300">Nom du Projet 📝</label>
            <input
              type="text"
              value={projectName}
              onChange={(e) => setProjectName(e.target.value)}
              className="mt-1 p-3 border border-gray-600 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500 bg-[#2a2a2a] text-white"
              placeholder="Entrez le nom du projet"
              required
            />
          </div>
          {/* Description */}
          <div>
            <label className="block text-gray-300">Description 📖</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="mt-1 p-3 border border-gray-600 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500 bg-[#2a2a2a] text-white"
              placeholder="Entrez une description détaillée"
              required
            />
          </div>
          {/* Estimated Duration */}
          <div>
            <label className="block text-gray-300">Durée Estimée ⏳</label>
            <select
              value={estimatedDuration}
              onChange={(e) => setEstimatedDuration(e.target.value)}
              className="mt-1 p-3 border border-gray-600 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500 bg-[#2a2a2a] text-white"
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
            <label className="block text-gray-300">
              Technologies Utilisées 🛠️
            </label>
            <div className="flex flex-wrap mt-2">
              {[
                {
                  name: "React",
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
                {
                  name: "Next",
                  src: "src/assets/icon-languages/next-icon.png",
                },
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
                <div key={tech.name} className="flex flex-col items-center m-4">
                  <img
                    src={tech.src}
                    alt={tech.name}
                    className={`w-16 h-16 m-2 cursor-pointer transition-transform duration-200 ease-in-out transform hover:scale-120 ${
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
                  <span className="text-gray-300 mt-1">{tech.name}</span>
                </div>
              ))}
            </div>
          </div>
          {/* Tools and Libraries */}
          <div>
            <label className="block text-gray-300">
              Outils et Bibliothèques 🛠️
            </label>
            <div className="flex flex-wrap mt-2">
              {[
                {
                  name: "Webpack",
                  src: "src/assets/icon-library/webpack-icon.png",
                },
                {
                  name: "Babel",
                  src: "src/assets/icon-library/babel-icon.png",
                },
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
                {
                  name: "Shadcn-UI",
                  src: "src/assets/icon-library/shadcn-icon.png",
                },
              ].map((tool) => (
                <div key={tool.name} className="flex flex-col items-center m-4">
                  <img
                    src={tool.src}
                    alt={tool.name}
                    className={`w-16 h-16 m-2 cursor-pointer transition-transform duration-200 ease-in-out transform hover:scale-120 ${
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
                  <span className="text-gray-300 mt-1">{tool.name}</span>
                </div>
              ))}
            </div>
          </div>
          {/* Status */}
          <div>
            <label className="block text-gray-300">Statut 🚦</label>
            <select
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              className="mt-1 p-3 border border-gray-600 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500 bg-[#2a2a2a] text-white"
              required
            >
              <option value="Planifié">Planifié</option>
              <option value="En cours">En cours</option>
              <option value="Terminé">Terminé</option>
            </select>
          </div>
          {/* Priority */}
          <div>
            <label className="block text-gray-300">Priorité⚡</label>
            <select
              value={priority}
              onChange={(e) => setPriority(e.target.value)}
              className="mt-1 p-3 border border-gray-600 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500 bg-[#2a2a2a] text-white"
              required
            >
              <option value="Haute">Haute</option>
              <option value="Moyenne">Moyenne</option>
              <option value="Basse">Basse</option>
            </select>
          </div>
          {/* Key Objectives */}
          <div>
            <label className="block text-gray-300">Objectifs Clés 🎯</label>
            <select
              value={keyObjectives}
              onChange={(e) => setKeyObjectives(e.target.value)}
              className="mt-1 p-3 border border-gray-600 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500 bg-[#2a2a2a] text-white"
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
                className="mt-1 p-3 border border-gray-600 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500 bg-[#2a2a2a] text-white"
                placeholder="Définissez les objectifs clés"
                required
              />
            )}
          </div>
          {/* GitHub Link */}
          <div>
            <label className="block text-gray-300">
              Lien GitHub (optionnel)
            </label>
            <input
              type="url"
              value={githubLink}
              onChange={(e) => setGithubLink(e.target.value)}
              className="mt-1 p-3 border border-gray-600 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500 bg-[#2a2a2a] text-white"
              placeholder="Entrez le lien GitHub"
            />
          </div>
          {/* Project URL */}
          <div>
            <label className="block text-gray-300">
              URL du Projet (optionel)
            </label>
            <input
              type="url"
              value={projectURL}
              onChange={(e) => setProjectURL(e.target.value)}
              className="mt-1 p-3 border border-gray-600 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500 bg-[#2a2a2a] text-white"
              placeholder="Entrez l'URL du projet"
            />
          </div>
          {/* Team Members */}
          <div>
            <label className="block text-gray-300">
              Membres de l'équipe 🙋‍♂️
            </label>
            <input
              type="text"
              value={teamMembers}
              onChange={(e) => setTeamMembers(e.target.value)}
              className="mt-1 p-3 border border-gray-600 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500 bg-[#2a2a2a] text-white"
              placeholder="Entrez les membres de l'équipe"
            />
          </div>
          {/* Budget */}
          <div>
            <label className="block text-gray-300">Budget (en €) 💶</label>
            <input
              type="number"
              value={budget}
              onChange={(e) => setBudget(e.target.value)}
              className="mt-1 p-3 border border-gray-600 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500 bg-[#2a2a2a] text-white"
              placeholder="Entrez le budget"
            />
          </div>
          {/* Client Name */}
          <div>
            <label className="block text-gray-300">Nom du Client 👨‍💼</label>
            <input
              type="text"
              value={clientName}
              onChange={(e) => setClientName(e.target.value)}
              className="mt-1 p-3 border border-gray-600 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500 bg-[#2a2a2a] text-white"
              placeholder="Entrez le nom du client"
            />
          </div>
          {/* Project Type */}
          <div>
            <label className="block text-gray-300">Type de Projet ❓</label>
            <input
              type="text"
              value={projectType}
              onChange={(e) => setProjectType(e.target.value)}
              className="mt-1 p-3 border border-gray-600 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500 bg-[#2a2a2a] text-white"
              placeholder="Entrez le type de projet"
            />
          </div>
          {/* Buttons */}
          <div className="flex justify-between mt-6">
            <button
              type="submit"
              className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition duration-200"
              onClick={(e) => {
                handleSubmit(e);
                // Redirect to Project page after submission
                window.location.href = "/projects";
              }}
            >
              Ajouter Projet
            </button>
            <button
              type="button"
              className="px-6 py-3 bg-gray-600 text-white rounded-lg shadow hover:bg-gray-700 transition duration-200"
              onClick={() => window.history.back()}
            >
              Annuler
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewProject;
