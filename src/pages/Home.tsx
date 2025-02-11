import React from "react";

const Home: React.FC = () => {
  return (
    <div className="text-center mt-10">
      <h1 className="text-5xl font-bold underline">
        Bienvenue sur Project Manager
      </h1>
      <p className="text-white text-xl mt-4 text-left mb-8 leading-relaxed">
        Bienvenue sur Project Manager, votre outil dédié à la gestion efficace
        de vos projets en développement frontend. Planifiez, organisez et suivez
        l’évolution de vos projets en toute simplicité grâce à une interface
        épurée et intuitive. Commencez dès maintenant en créant votre premier
        projet ! 🚀
      </p>

      <br />

      <h1 className="text-5xl font-bold underline mb-4 py-3">
        Quelques petites explications
      </h1>
      <p className="text-left py-4 text-xl leading-relaxed">
        Project Manager est une application conçue pour aider les développeurs
        frontend à structurer leurs projets et à suivre leur progression en
        temps réel. Son utilisation est simple et fluide :
      </p>

      <ul className="list-disc list-inside space-y-4 pt-4 pb-6 text-xl">
        <li>
          <strong>Créer un projet 📝</strong> – Depuis l’onglet “Projets”,
          cliquez sur "Ajouter un nouveau projet" pour ajouter un projet en
          renseignant son nom, sa durée estimée, les technologies utilisées et
          une brève description.
        </li>
        <li>
          <strong>Visualiser vos projets 📌</strong> – Tous vos projets sont
          listés dans l’onglet "Projets", affichés sous forme de cartes pour un
          accès rapide aux informations essentielles.
        </li>
        <li>
          <strong>Gérer les tâches ✅</strong> – Une fois un projet créé,
          accédez à sa page détaillée pour y ajouter et organiser vos tâches
          dans une To-Do List ou un Kanban Board.
        </li>
        <li>
          <strong>Modifier ou supprimer un projet 🔄</strong> – Besoin d’ajuster
          les détails d’un projet ? Vous pouvez facilement éditer ou supprimer
          un projet existant.
        </li>
        <li>
          <strong>Statistiques et calendrier 📊</strong> – Suivez la progression
          de vos tâches grâce aux statistiques visuelles et gérez votre planning
          via une vue calendrier intégrée.
        </li>
      </ul>

      <p className="text-xl leading-relaxed">
        Aucune inscription ni connexion requise : tout est stocké directement
        sur votre appareil via le Local Storage, garantissant une expérience
        fluide et rapide. Prêt à structurer vos idées et booster votre
        productivité ? Lancez-vous dès maintenant ! 🚀
      </p>

      {/* button div because it dosen't center in another way sorry for the pro's one :( */}
      <div className="flex items-center justify-center mt-15">
        <button
          onClick={() => (window.location.href = "/projects")}
          className="flex items-center justify-center px-4 py-2 text-black hover:bg-gray-300 cursor-pointer bg-white rounded-lg border border-black"
        >
          Créer votre projet 🚀
        </button>
      </div>
      {/* button div because it dosen't work in another way sorry :( */}
    </div>
  );
};

export default Home;
