import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useProjectContext } from "../context/ProjectContext";

const NewProject: React.FC = () => {
  const { addProject } = useProjectContext();
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  
  // Données du formulaire
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

  // Validation par étape
  const validateStep1 = () => {
    return projectName && description && projectType && startDate;
  };

  const validateStep2 = () => {
    return technologies.length > 0 && estimatedDuration;
  };

  // Gestion des étapes
  const nextStep = () => {
    if (currentStep === 1 && !validateStep1()) {
      alert("Veuillez remplir tous les champs obligatoires de cette étape.");
      return;
    }
    
    if (currentStep === 2 && !validateStep2()) {
      alert("Veuillez sélectionner au moins une technologie et une durée estimée.");
      return;
    }
    
    setCurrentStep(currentStep + 1);
    window.scrollTo(0, 0);
  };

  const prevStep = () => {
    setCurrentStep(currentStep - 1);
    window.scrollTo(0, 0);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newProject = {
      id: Date.now(),
      name: projectName,
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
    };

    addProject(newProject);
    alert("Projet ajouté avec succès !");
    navigate("/projects");
  };

  // Composants des étapes
  const StepIndicator = () => {
    return (
      <div className="flex items-center justify-center mb-8">
        {[1, 2, 3].map((step) => (
          <div key={step} className="flex items-center">
            <div 
              className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-bold 
              ${currentStep === step 
                ? 'bg-blue-600' 
                : currentStep > step 
                  ? 'bg-green-500' 
                  : 'bg-gray-400'}`}
            >
              {currentStep > step ? '✓' : step}
            </div>
            {step < 3 && (
              <div 
                className={`w-16 h-1 ${
                  currentStep > step ? 'bg-green-500' : 'bg-gray-300'
                }`}
              ></div>
            )}
          </div>
        ))}
      </div>
    );
  };

  const StepTitle = () => {
    const titles = [
      "Identification du projet",
      "Technologies et outils",
      "Détails complémentaires"
    ];
    
    return (
      <h2 className="text-xl font-bold text-center mb-6 text-[var(--foreground)]">
        Étape {currentStep}: {titles[currentStep - 1]}
      </h2>
    );
  };

  // Étape 1: Identification et description du projet
  const Step1 = () => {
    return (
      <>
        {/* Project Name */}
        <div>
          <label className="block text-[var(--foreground)] font-medium">
            Nom du Projet 📝
          </label>
          <input
            type="text"
            value={projectName}
            onChange={(e) => setProjectName(e.target.value)}
            className="mt-1 p-3 w-full border border-[var(--foreground)] rounded-md shadow-sm focus:ring-2 focus:ring-[var(--foreground)] focus:border-transparent text-[var(--foreground)]"
            placeholder="Entrez le nom du projet"
            required
          />
        </div>

        {/* Project Type */}
        <div>
          <label className="block text-[var(--foreground)] font-medium">
            Type de Projet ❓
          </label>
          <input
            type="text"
            value={projectType}
            onChange={(e) => setProjectType(e.target.value)}
            className="mt-1 p-3 w-full border border-[var(--foreground)] rounded-md shadow-sm focus:ring-2 focus:ring-[var(--foreground)] focus:border-transparent text-[var(--foreground)]"
            placeholder="Entrez le type de projet"
            required
          />
        </div>

        {/* Client Name */}
        <div>
          <label className="block text-[var(--foreground)] font-medium">
            Nom du Client 👨‍💼 (optionel)
          </label>
          <input
            type="text"
            value={clientName}
            onChange={(e) => setClientName(e.target.value)}
            className="mt-1 p-3 w-full border border-[var(--foreground)] rounded-md shadow-sm focus:ring-2 focus:ring-[var(--foreground)] focus:border-transparent text-[var(--foreground)]"
            placeholder="Entrez le nom du client"
          />
        </div>

        {/* Description */}
        <div>
          <label className="block text-[var(--foreground)] font-medium">
            Description 📖
          </label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="mt-1 p-3 w-full border border-[var(--foreground)] rounded-md shadow-sm focus:ring-2 focus:ring-[var(--foreground)] focus:border-transparent h-40 text-[var(--foreground)]"
            placeholder="Entrez une description détaillée de votre projet"
            required
          />
        </div>

        {/* Estimated Start Date */}
        <div>
          <label className="block text-[var(--foreground)] font-medium">
            Date de Début Estimée 📅
          </label>
          <input
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            className="mt-1 p-3 w-full border border-[var(--foreground)] rounded-md shadow-sm focus:ring-2 focus:ring-[var(--foreground)] focus:border-transparent text-[var(--foreground)]"
            required
          />
        </div>

        {/* Estimated End Date */}
        <div>
          <label className="block text-[var(--foreground)] font-medium">
            Date de Fin Estimée 📅 (optionel)
          </label>
          <input
            type="date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            className="mt-1 p-3 w-full border border-[var(--foreground)] rounded-md shadow-sm focus:ring-2 focus:ring-[var(--foreground)] focus:border-transparent text-[var(--foreground)]"
          />
        </div>

        <div className="flex justify-end mt-8">
          <button
            type="button"
            className="inline-flex px-8 py-4 text-lg font-bold text-white transition-all duration-200 bg-blue-600 border border-transparent rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-600"
            onClick={nextStep}
          >
            Continuer
          </button>
        </div>
      </>
    );
  };

  // Étape 2: Technologies et outils
  const Step2 = () => {
    return (
      <>
        {/* Estimated Duration */}
        <div>
          <label className="block text-[var(--foreground)] font-medium">
            Durée Estimée ⏳
          </label>
          <select
            value={estimatedDuration}
            onChange={(e) => setEstimatedDuration(e.target.value)}
            className="mt-1 p-3 w-full border border-[var(--foreground)] rounded-md shadow-sm focus:ring-2 focus:ring-[var(--foreground)] focus:border-transparent text-[var(--foreground)]"
            required
          >
            <option value="">Sélectionnez la durée</option>
            <option className="text-[var(--input)]" value="~ 3 jours">~3 jours</option>
            <option className="text-[var(--input)]" value="1 semaine">1 semaine</option>
            <option className="text-[var(--input)]" value="2 semaines">2 semaines</option>
            <option className="text-[var(--input)]" value="1 mois">1 mois</option>
            <option className="text-[var(--input)]" value="2 mois">2 mois</option>
            <option className="text-[var(--input)]" value="3 mois">3 mois</option>
          </select>
        </div>

        {/* Technologies Used */}
        <div>
          <label className="block text-[var(--foreground)] font-medium">
            Technologies Utilisées 🛠️
          </label>
          <div className="flex flex-wrap mt-2">
            {[
              {
                name: "React",
                src: "src/assets/icon-languages/react-icon.png",
              },
              {
                name: "Vue",
                src: "src/assets/icon-languages/vue-icon.png",
              },
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
              {
                name: "Tailwind CSS",
                src: "src/assets/icon-library/tailwind-icon.png",
              },
              {
                name: "Bootstrap",
                src: "src/assets/icon-library/bootstrap-icon.webp",
              },
            ].map((tech) => (
              <div
                key={tech.name}
                className="flex flex-col items-center m-4"
              >
                <img
                  src={tech.src}
                  alt={tech.name}
                  className={`w-16 h-16 m-2 cursor-pointer transition-transform duration-200 ease-in-out transform hover:scale-120 ${
                    technologies.includes(tech.name)
                      ? "border-4 border-[var(--foreground)] rounded-lg"
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
                <span className="text-[var(--foreground)] mt-1">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Tools and Libraries */}
        <div>
          <label className="block text-[var(--foreground)] font-medium">
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
              {
                name: "Jest",
                src: "src/assets/icon-library/jest-icon.png",
              },
              {
                name: "Cypress",
                src: "src/assets/icon-library/cypress-icon.png",
              },
              {
                name: "Storybook",
                src: "src/assets/icon-library/storybook-icon.png",
              },
              {
                name: "Material-UI",
                src: "src/assets/icon-library/mu-icon.png",
              },
              {
                name: "Shadcn-UI",
                src: "src/assets/icon-library/shadcn-icon.png",
              },
              {
                name: "Git",
                src: "src/assets/icon-library/git-icon.png",
              },
            ].map((tool) => (
              <div
                key={tool.name}
                className="flex flex-col items-center m-4"
              >
                <img
                  src={tool.src}
                  alt={tool.name}
                  className={`w-16 h-16 m-2 cursor-pointer transition-transform duration-200 ease-in-out transform hover:scale-120 ${
                    tools.includes(tool.name)
                      ? "border-4 border-[var(--foreground)] rounded-lg"
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
                <span className="text-[var(--foreground)] mt-1">{tool.name}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-between mt-8">
          <button
            type="button"
            className="inline-flex px-8 py-4 text-lg font-bold text-[var(--foreground)] transition-all duration-200 bg-[var(--background)] border border-[var(--foreground)] rounded hover:bg-[var(--muted)] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[var(--foreground)]"
            onClick={prevStep}
          >
            Retour
          </button>
          <button
            type="button"
            className="inline-flex px-8 py-4 text-lg font-bold text-white transition-all duration-200 bg-blue-600 border border-transparent rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-600"
            onClick={nextStep}
          >
            Continuer
          </button>
        </div>
      </>
    );
  };

  // Étape 3: Détails complémentaires
  const Step3 = () => {
    return (
      <>
        {/* Status */}
        <div>
          <label className="block text-[var(--foreground)] font-medium">
            Statut 🚦
          </label>
          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className="mt-1 p-3 w-full border border-[var(--foreground)] rounded-md shadow-sm focus:ring-2 focus:ring-[var(--foreground)] focus:border-transparent text-[var(--foreground)]"
            required
          >
            <option className="text-[var(--input)]" value="Planifié">Planifié</option>
            <option className="text-[var(--input)]" value="En cours">En cours</option>
            <option className="text-[var(--input)]" value="Terminé">Terminé</option>
          </select>
        </div>

        {/* Priority */}
        <div>
          <label className="block text-[var(--foreground)] font-medium">
            Priorité⚡
          </label>
          <select
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
            className="mt-1 p-3 w-full border border-[var(--foreground)] rounded-md shadow-sm focus:ring-2 focus:ring-[var(--foreground)] focus:border-transparent text-[var(--foreground)]"
            required
          >
            <option className="text-[var(--input)]" value="Haute">Haute</option>
            <option className="text-[var(--input)]" value="Moyenne">Moyenne</option>
            <option className="text-[var(--input)]" value="Basse">Basse</option>
          </select>
        </div>

        {/* Key Objectives */}
        <div>
          <label className="block text-[var(--foreground)] font-medium">
            Objectifs Clés 🎯
          </label>
          <select
            value={keyObjectives}
            onChange={(e) => setKeyObjectives(e.target.value)}
            className="mt-1 p-3 w-full border border-[var(--foreground)] rounded-md shadow-sm focus:ring-2 focus:ring-[var(--foreground)] focus:border-transparent text-[var(--foreground)]"
            required
          >
            <option className="text-[var(--input)]" value="Améliorer les compétences en programmation">
              Améliorer les compétences en programmation
            </option>
            <option className="text-[var(--input)]" value="Développer un portfolio">
              Développer un portfolio
            </option>
            <option className="text-[var(--input)]" value="Apprendre une nouvelle technologie">
              Apprendre une nouvelle technologie
            </option>
            <option className="text-[var(--input)]" value="Collaborer avec d'autres développeurs">
              Collaborer avec d'autres développeurs
            </option>
            <option className="text-[var(--input)]" value="Créer un produit commercialisable">
              Créer un produit commercialisable
            </option>
            <option className="text-[var(--input)]" value="Contribuer à un projet open source">
              Contribuer à un projet open source
            </option>
            <option className="text-[var(--input)]" value="Automatiser des tâches répétitives">
              Automatiser des tâches répétitives
            </option>
            <option className="text-[var(--input)]" value="Explorer de nouvelles idées">
              Explorer de nouvelles idées
            </option>
            <option className="text-[var(--input)]" value="Autre">Autre</option>
          </select>
          {keyObjectives === "Autre" && (
            <textarea
              value={keyObjectives === "Autre" ? "" : keyObjectives}
              onChange={(e) => setKeyObjectives(e.target.value)}
              className="mt-1 p-3 w-full border border-[var(--foreground)] rounded-md shadow-sm focus:ring-2 focus:ring-[var(--foreground)] focus:border-transparent text-[var(--foreground)]"
              placeholder="Définissez les objectifs clés"
              required
            />
          )}
        </div>

        {/* GitHub Link */}
        <div>
          <label className="block text-[var(--foreground)] font-medium">
            Lien GitHub (optionnel)
          </label>
          <input
            type="url"
            value={githubLink}
            onChange={(e) => setGithubLink(e.target.value)}
            className="mt-1 p-3 w-full border border-[var(--foreground)] rounded-md shadow-sm focus:ring-2 focus:ring-[var(--foreground)] focus:border-transparent text-[var(--foreground)]"
            placeholder="Entrez le lien GitHub"
          />
        </div>

        {/* Project URL */}
        <div>
          <label className="block text-[var(--foreground)] font-medium">
            URL du Projet (optionel)
          </label>
          <input
            type="url"
            value={projectURL}
            onChange={(e) => setProjectURL(e.target.value)}
            className="mt-1 p-3 w-full border border-[var(--foreground)] rounded-md shadow-sm focus:ring-2 focus:ring-[var(--foreground)] focus:border-transparent text-[var(--foreground)]"
            placeholder="Entrez l'URL du projet"
          />
        </div>

        {/* Team Members */}
        <div>
          <label className="block text-[var(--foreground)] font-medium">
            Membres de l'équipe 🙋‍♂️
          </label>
          <input
            type="text"
            value={teamMembers}
            onChange={(e) => setTeamMembers(e.target.value)}
            className="mt-1 p-3 w-full border border-[var(--foreground)] rounded-md shadow-sm focus:ring-2 focus:ring-[var(--foreground)] focus:border-transparent text-[var(--foreground)]"
            placeholder="Entrez les membres de l'équipe"
          />
        </div>

        {/* Budget */}
        <div>
          <label className="block text-[var(--foreground)] font-medium">
            Budget (en €) 💶
          </label>
          <input
            type="number"
            value={budget}
            onChange={(e) => setBudget(e.target.value)}
            className="mt-1 p-3 w-full border border-[var(--foreground)] rounded-md shadow-sm focus:ring-2 focus:ring-[var(--foreground)] focus:border-transparent text-[var(--foreground)]"
            placeholder="Entrez le budget"
          />
        </div>

        <div className="flex justify-between mt-8">
          <button
            type="button"
            className="inline-flex px-8 py-4 text-lg font-bold text-[var(--foreground)] transition-all duration-200 bg-[var(--background)] border border-[var(--foreground)] rounded hover:bg-[var(--muted)] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[var(--foreground)]"
            onClick={prevStep}
          >
            Retour
          </button>
          <button
            type="submit"
            className="inline-flex px-8 py-4 text-lg font-bold text-white transition-all duration-200 bg-green-600 border border-transparent rounded hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-600"
            onClick={handleSubmit}
          >
            Créer le Projet
          </button>
        </div>
      </>
    );
  };

  // Rendu principal
  return (
    <div className="bg-[var(--background)]">
      <section className="relative py-12 sm:py-16 lg:pb-40">
        <div className="absolute bottom-0 right-0 overflow-hidden">
          <img
            className="w-full h-auto origin-bottom-right transform scale-150 lg:w-auto lg:mx-auto lg:object-cover lg:scale-75"
            src="https://cdn.rareblocks.xyz/collection/clarity/images/hero/1/background-pattern.png"
            alt=""
          />
        </div>

        <div className="relative px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="text-center lg:text-left md:px-16 lg:px-0">
            <h1 className="text-3xl flex items-center justify-center font-bold leading-tight text-[var(--foreground)] sm:text-5xl sm:leading-tight lg:text-6xl lg:leading-tight font-pj">
              Créer un Nouveau Projet
            </h1>
            <p className="mt-2 text-lg flex items-center justify-center text-[var(--muted-foreground)] sm:mt-6 font-inter">
              Remplissez les informations ci-dessous pour créer votre nouveau projet
            </p>

            <div className="mt-8">
              <StepIndicator />
              <StepTitle />
              
              <form className="space-y-6">
                {currentStep === 1 && <Step1 />}
                {currentStep === 2 && <Step2 />}
                {currentStep === 3 && <Step3 />}
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NewProject;