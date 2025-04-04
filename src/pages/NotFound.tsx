import React from "react";
import { Link } from "react-router-dom";

const NotFound: React.FC = () => {
  return (
    <div className="flex flex-col justify-center content-center text-center mt-40">
      <h2 className="text-6xl font-bold text-red-500">
        404 - Page non trouvée
      </h2>
      <p className="text-2xl text-gray-400 mt-2">
        La page que vous recherchez n'existe pas.
      </p>
      <Link to="/" className="text-blue-400 mt-4 inline-block">
        Retour à l'accueil
      </Link>
    </div>
  );
};

export default NotFound;
