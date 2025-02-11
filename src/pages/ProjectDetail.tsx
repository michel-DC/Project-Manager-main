import React from "react";
import { useParams } from "react-router-dom";

const ProjectDetail: React.FC = () => {
  const { id } = useParams();

  return (
    <div>
      <h2 className="text-2xl font-semibold">Détails du Projet {id}</h2>
      <p className="text-gray-400">
        Affichage des détails du projet sélectionné.
      </p>
    </div>
  );
};

export default ProjectDetail;
