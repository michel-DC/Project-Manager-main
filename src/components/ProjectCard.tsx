import React from "react";
import { Link } from "react-router-dom";

interface ProjectCardProps {
  id: number;
  name: string;
  description: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ id, name, description }) => {
  return (
    <div className="p-4 border border-gray-700 rounded-lg">
      <h3 className="text-xl font-bold">{name}</h3>
      <p className="text-gray-400 mt-2">{description}</p>
      <Link to={`/projects/${id}`} className="text-blue-400 mt-2 inline-block">
        Voir détails
      </Link>
    </div>
  );
};

export default ProjectCard;
