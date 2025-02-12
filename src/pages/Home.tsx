import React from "react";
import { Link } from "react-router-dom";

const Home: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-10">
      <div className="text-center">
        <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-[#fafcfc] to-[#FFD700] bg-clip-text text-transparent">
          Bienvenue sur Project Manager
        </h1>

        <p className="text-white text-xl mt-4 mb-8 leading-relaxed">
          Bienvenue sur Project Manager, votre outil dédié à la gestion efficace
          de vos projets en développement frontend. Planifiez, organisez et
          suivez l’évolution de vos projets en toute simplicité grâce à une
          interface épurée et intuitive. Commencez dès maintenant en créant
          votre premier projet ! 🚀
        </p>
      </div>

      <div className="text-center">
        <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-[#fafcfc] to-[#FFD700] bg-clip-text text-transparent">
          Quelques petites explications
        </h2>
        {/* <p className="text-white text-xl mb-8 leading-relaxed">
          Project Manager est une application conçue pour aider les développeurs
          frontend à structurer leurs projets et à suivre leur progression en
          temps réel. Son utilisation est simple et fluide :
        </p> */}
      </div>

      <div className="p-6 rounded-lg shadow-lg">
        <ul className="list-disc list-inside space-y-4 text-white text-xl">
          <li>
            <strong>Créer un projet 📝</strong> – Depuis l’onglet “Projets”,
            cliquez sur "Ajouter un nouveau projet" pour ajouter un projet en
            renseignant son nom, sa durée estimée, les technologies utilisées et
            une brève description.
          </li>
          <li>
            <strong>Visualiser vos projets 📌</strong> – Tous vos projets sont
            listés dans l’onglet "Projets", affichés sous forme de cartes pour
            un accès rapide aux informations essentielles.
          </li>
          <li>
            <strong>Gérer les tâches ✅</strong> – Une fois un projet créé,
            accédez à sa page détaillée pour y ajouter et organiser vos tâches
            dans une To-Do List ou un Kanban Board.
          </li>
          <li>
            <strong>Modifier ou supprimer un projet 🔄</strong> – Besoin
            d’ajuster les détails d’un projet ? Vous pouvez facilement éditer ou
            supprimer un projet existant.
          </li>
          <li>
            <strong>Statistiques et calendrier 📊</strong> – Suivez la
            progression de vos tâches grâce aux statistiques visuelles et gérez
            votre planning via une vue calendrier intégrée.
          </li>
        </ul>
      </div>

      <div className="flex items-center justify-center mt-10">
        <Link
          to="/projects"
          className="px-6 py-3 text-black hover:bg-gray-300 cursor-pointer bg-white rounded-lg border border-black transition duration-300"
        >
          Créer votre premier projet 🚀
        </Link>
      </div>
    </div>
  );
};

export default Home;
