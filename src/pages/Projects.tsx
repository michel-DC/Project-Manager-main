import React from "react";
import { Link } from "react-router-dom";
import ProjectCard from "../components/ProjectCard";
import { FaPlus } from "react-icons/fa";
import { useProjectContext } from "../context/ProjectContext";

const Projects: React.FC = () => {
  const { projects } = useProjectContext();

  return (
    <div className="bg-gray-200 min-h-screen">
      <section className="relative py-12 sm:py-16">
        <div className="absolute inset-0 overflow-hidden">
          <img
            className="w-full h-full object-cover opacity-50"
            src="https://cdn.rareblocks.xyz/collection/clarity/images/hero/1/background-pattern.png"
            alt=""
          />
        </div>

        <div className="relative px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="flex flex-col items-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black text-center mb-8">
              Mes Projets
            </h1>

            <Link
              to="/new-project"
              className="inline-flex items-center px-8 py-4 text-lg font-bold text-white transition-all duration-200 bg-gray-900 border border-transparent rounded-lg hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 mb-12"
            >
              <FaPlus className="mr-2" />
              Ajouter un nouveau projet
            </Link>

            <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.length > 0 ? (
                projects.map((project) => (
                  <ProjectCard key={project.id} {...project} />
                ))
              ) : (
                <div className="col-span-full flex justify-center">
                  <p className="text-xl text-gray-700 text-center">
                    Aucun projet ajouté pour le moment.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
