import React from "react";
import { Link } from "react-router-dom";
import ProjectCard from "../components/ProjectCard";
import { FaPlus } from "react-icons/fa";
import { useProjectContext } from "../context/ProjectContext";

const Projects: React.FC = () => {
  const { projects } = useProjectContext();

  return (
    <div>
      <h2 className="text-4xl font-semibold text-center mb-8 bg-gradient-to-r from-[#fafcfc] to-[#FFD700] bg-clip-text text-transparent">
        Mes Projets
      </h2>
      <div className="flex justify-center items-center mt-4 p-2 bg-[#101212] rounded-lg border border-white w-2xl h-24 mx-auto mb-12">
        <Link
          to="/new-project"
          className="flex px-4 py-2 text-black hover:bg-gray-300 cursor-pointer bg-white rounded-lg border border-black"
        >
          <FaPlus className="mr-1" />
          Ajouter un nouveau projet
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.length > 0 ? (
          projects.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))
        ) : (
          <p className="text-gray-400 text-center col-span-full">
            Aucun projet ajouté pour le moment.
          </p>
        )}
      </div>
    </div>
  );
};

export default Projects;
