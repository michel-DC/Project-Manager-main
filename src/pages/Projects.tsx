import React from "react";
import ProjectCard from "../components/ProjectCard";
import { sampleProjects } from "../data/sampleProjects";
import { FaPlus } from "react-icons/fa";

const title: string = "Mes Projets";
const Projects: React.FC = () => {
  return (
    <div>
      <h2 className="text-4xl font-semibold text-center mb-8">{title}</h2>
      <div className="flex justify-center items-center mt-4 p-2 bg-black rounded-lg border border-white w-2xl h-24 mx-auto mb-12">
        <button
          onClick={() => (window.location.href = "/new-project")}
          className="flex px-4 py-2 text-black hover:bg-gray-300 cursor-pointer bg-white rounded-lg border border-black"
        >
          <FaPlus className="mr-1" />
          Ajouter un nouveau projet
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
        {sampleProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
